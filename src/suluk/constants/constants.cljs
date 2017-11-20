(ns suluk.constants.constants
  (:require [suluk.response :as r]))

(defn status-safe? [response]
  (let [status (.-status response)]
    (if (and (>= status 200) (< status 300))
      (js/Promise.resolve response)
      (js/Promise.reject (new js/Error (str "Failing at `status-safe? with`:\n" (.-statusText response)))))))

(def content-types
  {:post "application/x-www-form-urlencoded"
   :json "application/json"
   :default "text/html; charset=utf-8"})

(def accept
  {:json "application/json"})

(def ^{:doc "done-f bind to `identity` because of existince function composition at `suluk.request.type`"}
  function-map {:fail-f js/console.error
                   :status-safe-f status-safe?
                   :param-f r/res->text
                   :done-f identity #_js/console.log})

(defn add-content-type->request [request type-of-request]
  (-> request (assoc-in [:prop :headers "Content-Type"] (type-of-request content-types))))
