(ns suluk.requests.get
  (:require [suluk.constants.constants :as cs]
            [suluk.requests.type :as t]
            [suluk.response :as r]
            [suluk.requests.wrapper-fns :as wrappers]))

(defn get [url & [function-map]]
  (let [req (t/->Fetch-Map url {} function-map)]
    (-> req
        wrappers/put-content-type-with
        wrappers/put-method-type-with
        t/fetch!)))
