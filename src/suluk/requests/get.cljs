(ns suluk.requests.get
  (:require [suluk.constants.constants :as cs]
            [suluk.requests.type :as t]
            [suluk.response :as r]
            [suluk.requests.wrapper-fns :as wrappers]))

(defn get [url & prop?-function-map?]
  (let [req (apply t/->requestS url prop?-function-map?)]
    (req
     (-> identity
         wrappers/wrap-content-type-with
         wrappers/wrap-method-type-with
         t/wrap-fetch!))))

(defn get-> [url & prop?-function-map?]
  (let [req (apply t/->requestE url prop?-function-map?)]
    (req
     (-> identity
         wrappers/wrap-content-type-with
         wrappers/wrap-method-type-with
         t/wrap-fetch!))))
