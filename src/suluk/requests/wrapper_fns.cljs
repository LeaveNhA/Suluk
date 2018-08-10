(ns suluk.requests.wrapper-fns
  (:require [clojure.string]
            [suluk.constants.constants :as cs]))

(defn ^{:doc "Transform string into query-params."}
  string->query-params [object-map]
  (let [str-map (map #(let [[param val] %]
                        (str (name param) "=" val)) object-map)
        combined-str-map (clojure.string/join "&" str-map)]
    combined-str-map))

(defn put-content-type-with [fetch-map & [content-type]]
  (if (nil? (get-in fetch-map [:prop :headers "Content-Type"]))
    (let [content-type ((or content-type
                           :default) cs/content-types)]
      (assoc-in fetch-map [:prop :headers "Content-Type"] content-type))
    fetch-map))

(defn put-method-type-with [fetch-map & [method-type]]
  (if (nil? (get-in fetch-map [:prop :method]))
    (let [method-type (or method-type "GET")]
      (assoc-in fetch-map [:prop :method] method-type))
    fetch-map))

(defn change-body-to-json [fetch-map]
  (update-in fetch-map [:prop :body] #(-> % clj->js js/JSON.stringify)))

(defn put-json-fn-into-function-map [fetch-map]
  (assoc-in fetch-map [:function-map :param-f] #(.json %)))

(defn put-query-string-into-function-map [fetch-map]
  (let [body (get-in fetch-map [:prop :body])
        processed-body (cond
                         (map? body) (string->query-params body)
                         :else body)]
    (assoc-in fetch-map [:prop :body] processed-body)))
