(ns suluk.requests.get
  (:require [suluk.constants.constants :as cs]
            [suluk.requests.type :as t]
            [suluk.response :as r]))

(defn get [url & prop?-function-map?]
  (let [req (apply t/->request url prop?-function-map?)]
    (-> req
        (cs/add-content-type->request :default)
        (assoc-in [:prop :method] "GET")
        t/->fetch)))

(get "http://192.168.1.1")
