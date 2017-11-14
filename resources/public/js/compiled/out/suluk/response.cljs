(ns suluk.response)

(defn- res->text [response]
  (.text response))

(defn- res->blob [response]
  (.blob response))

(defn- res->json [response]
  (.json response))

(defn v* [i] (when i i))

(defn v! [v & args] v)
