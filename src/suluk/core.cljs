(ns suluk.core
  (:require [suluk.process :as process]))

(defn fetch!
  "Takes Request Type as Keyword,
   Process;

   :get -> (fn [URL, & DATA, function-map])
   |> URL: Get Request URL address.
   |> function-map:
        `:param-f` First ring on your call-back chain.
        It can be one of fn under `suluk.response`: `res->text`, `res->blob`, `res->json`
        `:fail-f` Catch function for your JS Promise. Default `js/console.error`
        `:fns` Vector of functions with (response -> response) function signature. Chain of call-backs.

   :post -> (fn [URL, & DATA, function-map])
   |> URL: Post Request URL address.
   |> DATA: Your Payload.
   |> function-map:
        `:param-f` First ring on your call-back chain.
        It can be one of fn under `suluk.response`: `res->text`, `res->blob`, `res->json`
        `:fail-f` Catch function for your JS Promise. Default `js/console.error`
        `:fns` Vector of functions with (response -> response) function signature. Chain of call-backs.

   :post-json -> (fn [URL, & DATA, function-map])
   |> URL: Post Request URL address.
   |> DATA: Your Payload. But, implicitly converted JSON with JSON/stringify.
   |> function-map:
        `:param-f` First ring on your call-back chain.
        It can be one of fn under `suluk.response`: `res->text`, `res->blob`, `res->json`
        `:fail-f` Catch function for your JS Promise. Default `js/console.error`
        `:fns` Vector of functions with (response -> response) function signature. Chain of call-backs."

  [r-type url & args]
  (let [function-type (process/classify r-type)
        function-result (apply function-type url args)]
    function-result))
