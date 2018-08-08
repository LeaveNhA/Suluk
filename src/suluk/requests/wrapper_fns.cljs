(ns suluk.requests.wrapper-fns
  (:require [suluk.constants.constants :as cs]))

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
