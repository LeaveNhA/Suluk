(ns figwheel.connect.build-dev (:require [suluk.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

