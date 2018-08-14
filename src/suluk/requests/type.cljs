(ns suluk.requests.type
  (:require [suluk.constants.constants :as cs]))

(declare function-map-as-vector->fns-key)

(def default-function-map
  {:fail-f js/console.error
   :done-f js/console.info})

(defn ^{:doc "Initialize fetch map with given arguments. This function is starter!"}
  ->Fetch-Map [url & [prop function-map]]
  (-> {:url url
       :prop prop
       :function-map function-map}
      (function-map-as-vector->fns-key default-function-map)))

(defn- get-url [fetch-map]
  (:url fetch-map))

(defn- get-prop [fetch-map]
  (:prop fetch-map))

(defn- get-request-type [fetch-map]
  (get-in fetch-map [:prop :method]))

(defn- get-body [fetch-map]
  (get-in fetch-map [:prop :body]))

(defn- get-function-map [fetch-map]
  (:function-map fetch-map))

(defn- get-fetch-instance [fetch-map]
  (:fetch-instance fetch-map))

(defn- function-map-as-vector->fns-key [fetch-map default-function-map]
  (let [function-map (get-function-map fetch-map)]
    (println function-map (vector? function-map))
    (cond
      (vector? function-map)
      (let [function-map-to-assoc {:fns function-map}
            function-map-to-assoc-with-default-fns (merge default-function-map function-map-to-assoc)]
        (assoc fetch-map :function-map function-map-to-assoc-with-default-fns))
      (fn? function-map)
      (let [function-map-to-assoc {:done-f function-map}
            function-map-to-assoc-with-default-fns (merge default-function-map function-map-to-assoc)]
        (assoc fetch-map :function-map function-map-to-assoc-with-default-fns))
      :else fetch-map)))

(defn- map->headers [header-args]
  (let [header-value (new js/Headers)]
    (reduce (fn [r v] (.append header-value (first v) (second v))) header-value header-args)
    header-value))

(defn- process-headers [fetch-request]
  (update-in fetch-request [:prop :headers] map->headers))

(defn- put-Fetch->fetch-map [fetch-map]
  (let [url- (get-url fetch-map)
        prop- (clj->js (or
                        (get-prop fetch-map)
                        {}))
        fetch-instance (when js/fetch
                         (js/fetch
                          url-
                          prop-))]
    (when ^boolean goog.DEBUG
      (js/console.info (clj->js [url- prop- fetch-instance])))
    (assoc fetch-map :fetch-instance fetch-instance)))

(defn- ^{:doc "Before initialized!"}
  change-body->json-on-fetch-map [fetch-map]
  (update-in fetch-map [:prop :body] #(-> % clj->js js/JSON.stringify)))

(defn- apply-fn->cFetch [fetch-instance f]
  (when ^boolean goog.DEBUG
    (js/console.info "Apply fn is invoked: " (clj->js [fetch-instance f])))
  (if f
    (.then fetch-instance f)
    fetch-instance))

(defn- apply-all-fns->cFetch [fetch-instance fs]
  (when ^boolean goog.DEBUG
    (js/console.info "Apply all fn is invoked: " (clj->js [fetch-instance fs])))
  (if fs
    (reduce apply-fn->cFetch fetch-instance fs)
    fetch-instance))

(defn- apply-catch->cFetch [fetch-instance f]
  (when ^boolean goog.DEBUG
    (js/console.info "Apply catch is invoked: " (clj->js [fetch-instance f])))
  (if f
    (.catch fetch-instance f)
    fetch-instance))

(defn- process-function-map-on-fetch-map [fetch-map]
  (if-let [function-map (get-function-map fetch-map)]
    (let [fetch-instance (get-fetch-instance fetch-map)
          {param-function :param-f
           status-safe-function :status-safe-f
           fail-function :fail-f
           done-function :done-f
           fns :fns} function-map]
      (if done-function
        (-> fetch-instance
            (apply-catch->cFetch fail-function)
            (apply-fn->cFetch status-safe-function)
            (apply-fn->cFetch param-function)
            (apply-all-fns->cFetch fns)
            (apply-fn->cFetch done-function))
        (-> fetch-instance
            (apply-catch->cFetch fail-function)
            (apply-fn->cFetch param-function)
            (apply-all-fns->cFetch fns)))
      fetch-map)))

(defn fetch! [fetch-map]
  (-> fetch-map
      process-headers
      put-Fetch->fetch-map
      process-function-map-on-fetch-map
      get-fetch-instance))
