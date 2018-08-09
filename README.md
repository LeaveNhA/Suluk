# SULUK
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
```


# TODO

- [x] Change the way the work of this library! | 08.09.2018

- [ ] Complete the README.md!
- [ ] Allow keywords as a function in function-map
