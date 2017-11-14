# SULUK
Fetch API wrapper for clojurescript!

## Install
Add dependency to your project.clj file.
```
[org.clojars.scknkkrer/suluk "0.0.2"] 
```
## Usage

### Require Library
Require ```suluk```from your project.

```
(ns perfect.cljs.app
  (:require [suluk.core :as suluk]
  ...
```
### Fetching pages!
Suluk provides all clojure benefits as a wrapper.
`suluk.core/fetch!` core function act as a gate for all your requests.
```
(suluk/fetch! :get "bomba-bomba.com")
=> #Object[Promise [object Promise]]
````
Gives an JS Promise.
Print response as Text to Console.
```
(suluk/fetch! :get "api.masallah.tu.tu/kere?n=41" :param-f (fn [response] (clojure.string/replace response #"tüh" "tüh!")))
```
##### fetch! uses some data-manipulative functions on Promise as you give.
:param-f for first function to recieve response. Default `suluk.response/res->text`.
You can use functions under `suluk.response`.
Like, `res->text` for text value from response or `res->json` for your json responses.

:done-f keyword represents last operation on your response.
```
(suluk/fetch! :get "api.masallah.tu.tu/kere?n=41" :done-f #(re-frame.core/dispatch [:spit %]))
```

```
(suluk/fetch!
```


```
(def answer-prop
  {;;:method "POST" ;; Default :method key will set by request type, :post, :get, etc...
  :headers
  })

(suluk/fetch! :post "https://everythings-answer.co.uk/answer.it" 

(partial suluk/fetch! :post
```


# TODO

- Complete the README.md!
- Create tests for required situations.
- Allow keywords as a function in function-map
