(defproject org.clojars.scknkkrer/suluk "0.0.18"
  :description "Fetch API wrapper for clojurescript."
  :url "https://github.com/LeaveNhA/suluk"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies
  [[org.clojure/clojurescript "1.9.946" :scope "provided"]
   [re-frame "0.10.2"]]

  :lein-release {:deploy-via :clojars}

  :pom-addition [:developers [:developer
                              [:name "Seçkin KÜKRER"]
                              [:url "leavenha.github.io"]]]

  :plugins [[lein-figwheel "0.5.14"]
            [lein-release "1.1.0"]
            [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]]

  :profiles {:user {:signing {:gpg-key "AFEF1B9FFC0B1500"}}
             :dev {:repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                                      :target-path]
                   :dependencies [[binaryage/devtools "0.9.4"]
                                  [figwheel-sidecar "0.5.14"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   :source-paths ["src" "dev"]}}

  :figwheel {:css-dirs ["resources/public/css"]}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :incremental true
                        :figwheel {:open-urls ["http://localhost:3449/index.html"]}
                        :assert true
                        :compiler {:output-to "resources/public/js/compiled/suluk.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :asset-path "js/compiled/out"
                                   :main suluk.core
                                   :preloads [devtools.preload]
                                   :source-map-timestamp true
                                   :warnings true
                                   :source-map true}}
                       {:id "prod"
                        :source-paths ["src"]
                        :incremental true
                        :compiler {:output-to "resources/public/js/compiled/suluk.js"
                                   :pretty-print false
                                   :main suluk.core
                                   :closure-defines {goog.DEBUG false}
                                   :optimizations :advanced}}]})
