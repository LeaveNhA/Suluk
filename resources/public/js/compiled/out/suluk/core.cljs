(ns suluk.core
  (:require [suluk.process]))

(def ^{:doc "Takes Request Type as Keyword,
   Process;

   :get -> (fn [URL & function-map])
   |> URL: Get Request URL address.
   |> function-map: A map contains Parameter, Fail, Done and `Rest` functions.
      Additionally, it contains middle-ware functions to allow you to do data manipulations on your response with `rest-fs`.

   :post -> (fn [URL, DATA, & function-map])
   |> URL: Get Request URL address.
   |> DATA: Your Payload.
   |> function-map: A map contains Parameter, Fail and Done functions.
      Additionally, it contains middle-ware functions to allow you to do data manipulations on your response with `rest-fs`.

   :post-json -> (fn [URL, DATA, & function-map])
   |> URL: Get Request URL address.
   |> DATA: Your Payload. But, implicitly converted JSON with JSON/stringify.
   |> function-map: A map contains Parameter, Fail and Done functions.
      Additionally, it contains middle-ware functions to allow you to do data manipulations on your response with `rest-fs`.

   `rest-fs` is sequentially process your data. One function's output is input data for the next."}
  fetch! suluk.process/fetch!)

