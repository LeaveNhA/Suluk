(ns suluk.requests.wrapper-fns
  (:require [suluk.constants.constants :as cs]))

(defn wrap-content-type-with [wrapper-fn & [content-type]]
  (fn [request]
    (let [res (wrapper-fn request)
          content-type ((or content-type :default) cs/content-types)]
      (assoc-in res [:prop :headers "Content-Type"] content-type))))

(defn wrap-method-type-with [wrapper-fn & [method-type]]
  (fn [request]
    (let [res (wrapper-fn request)
          method-type (or method-type "GET")]
      (assoc-in res [:prop :method] method-type))))

(defn wrap-print-method-type [wrapper-fn]
  (fn [request]
    (let [res (wrapper-fn request)]
      (js/console.log (get-in res [:prop :method]))
      res)))

(defn wrap-json-content [wrapper-fn]
  (fn [request]
    (let [res (wrapper-fn request)]
      (update-in res [:prop :body] #(-> % clj->js js/JSON.stringify)))))
