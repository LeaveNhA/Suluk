# SULUK
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FLeaveNhA%2FSuluk&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

Fetch API wrapper for clojurescript!

## Install
Add dependency to your project.clj file.

[![Clojars Project](https://img.shields.io/clojars/v/org.clojars.scknkkrer/suluk.svg)](https://clojars.org/org.clojars.scknkkrer/suluk)

## Usage

### Add Dependency
Add dependency to your dependencies vector.

```clojure
...
:dependencies
     [...
       [org.clojars.scknkkrer/suluk "0.0.7"]
      ...]
...

```

### Require Library
Require ```suluk```from your project.

```clojure
(ns perfect.cljs.app
  (:require [suluk.core :as suluk]
  ...
```

### Using Library
```clojure
;; Use fetch! function from suluk.core namespace for the functionality.
;; This function takes a keyword as first paramter that represents method of your request.
;; Each method type has individual function signature.

;; GET -> [url function-map]
;; GET request example:
(suluk/fetch! :get
              "https://jsonplaceholder.typicode.com/todos/1"
              [suluk.response/res->json js/console.info])
;; => #object [Promise [object Promise]]
;; Returns promise for the future usage.
;; The third argument of the function is applied to response of the request,
;; With left-to-right direction respectively. 

;; POST -> [url properties-map function-map]
;; POST request example:
(fetch! :post "https://jsonplaceholder.typicode.com/posts"
        {:body "hello=bello&userId=1991"}
        [suluk.response/res->json js/console.info])
;; => #object [Promise [object Promise]]
;; CONSOLE: {hello: "bello", userId: "1991", id: 101}

;; You can use clojure hash-map as request body in your post request.
(fetch! :post "https://jsonplaceholder.typicode.com/posts"
        {:body {:hello "bello" :userId 1991}}
        [suluk.response/res->json js/console.info])
;; => #object [Promise [object Promise]]
;; CONSOLE: {hello: "bello", userId: "1991", id: 101}


;; POST-JSON -> [url properties-map function-map]
;; POST-JSON request example:
(fetch! :post-json "https://jsonplaceholder.typicode.com/posts"
        {:body {:title "Başlık"
                :body "Gövde"
                :userId 1992}}
        js/console.info)
;; => #object [Promise [object Promise]]
;; CONSOLE: {title: "Başlık", body: "Gövde", userId: 1992, id: 101}
;; post-json keyword is using for post request with JSON payload that waiting response as JSON object.
;; It is eleminating efforts and take care small works.
```

### Using with Re-Frame
If you want to use Suluk with re-frame, all you have to do is:

Require `suluk.re-frame` namespace from your event namespace to load existed fx function that comes with `Suluk`

```clojure
(ns perfect.re-frame.app.events
(:require ...
          [suluk.re-frame]))
          
```

The effect named `suluk!` is loaded and ready to use.

```clojure
(re-frame/reg-fx
 :console!
 (fn [value]
   (js/console.info value)))

(re-frame/reg-event-fx
 :user/test!
 (fn [_ [_ value]]
   {:console! value}))

(re-frame/reg-event-fx
 :user/get-dummy-api-json
 (fn [_ _]
   {:suluk! [:post-json "https://jsonplaceholder.typicode.com/posts"
             {:body {:title "Başlık"
                     :body "Gövde"
                     :userId 1992}}
             #(re-frame/dispatch [:user/test! %])]}))
             
(re-frame/dispatch [:user/get-dummy-api-json])
```

# TODO

- [x] Change the way the work of this library!
- [x] Complete the README.md!
- [ ] Allow keywords as a function in function-map

# THANK
Thank you all clojurians, this library aims to give something back to our perfect community!
