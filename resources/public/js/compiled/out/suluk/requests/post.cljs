(ns suluk.requests.post
  (:require [suluk.constants.constants :as cs]
            [suluk.requests.type :as t]))

(defn assoc-post-method-type [req]
  (assoc-in req [:prop :method] "POST"))

(defn post [url & prop?-function-map?]
  (let [req (apply t/->request url prop?-function-map?)]
    (-> req
        assoc-post-method-type
        (assoc-in [:prop "Content-Type"] (:post cs/content-types))
        t/->fetch)))

(defn post-json [url & prop?-function-map?]
  (let [req (apply t/->request url prop?-function-map?)]
    (-> req assoc-post-method-type (assoc-in [:prop "Content-Type"] (:json cs/content-types))
        t/->fetch)))
