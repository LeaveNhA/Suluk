(ns suluk.requests.post
  (:require [suluk.constants.constants :as cs]
            [suluk.requests.wrapper-fns :as wrappers]
            [suluk.requests.type :as t]))

(defn post [url & prop?-function-map?]
  (let [req (apply t/->requestS url prop?-function-map?)]
    (req
     (-> identity
         (wrappers/wrap-method-type-with "POST")
         (wrappers/wrap-content-type-with :post)
         t/wrap-fetch!))))

(defn post-json [url & prop?-function-map?]
  (let [req (apply t/->requestS url prop?-function-map?)]
    (req
     (-> identity
         (wrappers/wrap-content-type-with "POST")
         (wrappers/wrap-method-type-with :json)
         t/wrap-fetch!))))

(defn post-> [url & prop?-function-map?]
  (let [req (apply t/->requestE url prop?-function-map?)]
    (req
     (-> identity
         (wrappers/wrap-method-type-with "POST")
         (wrappers/wrap-content-type-with :post)
         t/wrap-fetch!))))

(defn post-json-> [url & prop?-function-map?]
  (let [req (apply t/->requestE url prop?-function-map?)]
    (req
     (-> identity
         (wrappers/wrap-content-type-with "POST")
         (wrappers/wrap-method-type-with :json)
         t/wrap-fetch!))))
