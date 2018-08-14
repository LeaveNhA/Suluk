(ns suluk.requests.core
  (:require [suluk.requests.type :as t]
            [suluk.requests.get :as g]
            [suluk.requests.post :as p]))

(def post p/post)
(def get g/get)
(def post-json p/post-json)
(def get* g/get*)
