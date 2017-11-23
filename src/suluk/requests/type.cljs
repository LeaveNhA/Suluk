(ns suluk.requests.type
  (:require [suluk.constants.constants :as constants]
            [suluk.constants.constants :as cs]))

(defrecord ^{:doc "A record type for fetch."} ->Fetch-Request [url prop function-map])

(defn- get-url [request]
  (:url request))

(defn- get-prop [request]
  (:prop request))

(defn- get-function-map [request]
  (:function-map request))

(defn- get-function [request function-name]
  (-> request get-function-map function-name))

(defn- map->headers [header-args]
  (let [header-value (new js/Headers)]
    (reduce (fn [r v] (.append header-value (first v) (second v))) header-value header-args)
    header-value))

(defn- process-headers [fetch-request]
  (update-in fetch-request [:prop :headers] map->headers))

(defn- request->cFetch [request]
  (when js/fetch
    (js/fetch
     (get-url request)
     (clj->js (or (get-prop request) {})))))

(defn- apply-fn->cFetch [fetch-instance f]
  (if f
    (.then fetch-instance f)
    fetch-instance))

(defn- apply-all-fns->cFetch [fetch-instance fs]
  (if fs
    (reduce apply-fn->cFetch fetch-instance fs)
    fetch-instance))

(defn- apply-catch->cFetch [fetch-instance f]
  (if f
    (.catch fetch-instance f)
    fetch-instance))

(defn- process-function-map-on-cFetch [fetch-instance f-map]
  (if f-map
    (let [{param-function :param-f
           status-safe-function :status-safe-f
           fail-function :fail-f
           done-function :done-f
           fns :fns
           :or
           {param-function (:param-f constants/function-map)
            fail-function (:fail-f constants/function-map)
            done-function (:done-f constants/function-map)
            status-safe-function (:status-safe-f constants/function-map)}} f-map]
      (-> fetch-instance
          (apply-catch->cFetch fail-function)
          (apply-fn->cFetch status-safe-function)
          (apply-fn->cFetch param-function)
          (apply-all-fns->cFetch fns)
          (apply-fn->cFetch done-function)))
    fetch-instance))

(defn ->request [url & prop?-function-map?]
  (let [[prop function-map]
        (cond
          (zero? (count prop?-function-map?)) [{} {}]
          (zero? (mod (count prop?-function-map?) 2)) [{} (apply hash-map prop?-function-map?)]
          :else [(first prop?-function-map?) (rest prop?-function-map?)])]
    (new ->Fetch-Request url prop function-map)))

(defn ->fetch [fetch-request]
  (-> fetch-request process-headers request->cFetch (process-function-map-on-cFetch (get-function-map fetch-request))))

(defn ->requestS [url & prop?-function-map?]
  (fn [wrapper]
    (let [[prop function-map]
         (cond
           (zero? (count prop?-function-map?)) [{} {}]
           (zero? (mod (count prop?-function-map?) 2)) [{} (apply hash-map prop?-function-map?)]
           :else [(first prop?-function-map?) (rest prop?-function-map?)])]
      (wrapper (new ->Fetch-Request url prop function-map)))))


(defn ->requestE [url & prop?-function-map?]
  (fn [wrapper]
    (let [[prop function-map]
          (cond
            (zero? (count prop?-function-map?)) [{} {}]
            (zero? (mod (count prop?-function-map?) 2)) [{} (apply hash-map prop?-function-map?)]
            :else [(first prop?-function-map?) (rest prop?-function-map?)])]
      (js/console.log "wrapper: " wrapper
                      "[prop function-map]: " prop function-map)
      (fn [& fns]
        (js/console.log "Inner applicator invoked!")
        (apply-all-fns->cFetch (wrapper (new ->Fetch-Request url prop function-map)) fns)))))

(defn wrap-fetch! [wrapper-fn]
  (fn [request]
    (let [res (wrapper-fn request)]
      (->fetch res))))
