(ns suluk.requests.post
  (:require [suluk.constants.constants :as cs]
            [suluk.requests.wrapper-fns :as wrappers]
            [suluk.requests.type :as t]))

(defn post [url & [prop function-map]]
  (let [req (t/->Fetch-Map url prop function-map)]
    (-> req
        (wrappers/put-method-type-with "POST")
        (wrappers/put-content-type-with :post)
        t/fetch!)))

(defn post-json [url & [prop function-map]]
  (let [req (t/->Fetch-Map url prop function-map)]
    (-> req
        (wrappers/put-method-type-with "POST")
        (wrappers/put-content-type-with :json)
        wrappers/change-body-to-json
        wrappers/put-json-fn-into-function-map
        t/fetch!)))
