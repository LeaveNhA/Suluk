(ns suluk.process
  (:require [suluk.requests.core :as rc]))

(defn- classify [fs]
  (condp = fs
    :get rc/get
    :post rc/post
    :post-json rc/post-json

    :get-> rc/get->
    :post-> rc/post->
    :post-json-> rc/post-json->))
