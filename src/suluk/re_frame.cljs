(ns suluk.re-frame
  (:require [suluk.core :as suluk]
            [re-frame.core :as re-frame]))

(re-frame/reg-fx
 :suluk!
 (fn [request]
   (when js/DEBUG
     (js/console.log ":suluk! effect invoked with:\n"
                     request))
   (apply suluk/fetch! request)))
