# Ta1k

This is a quick tech-demo of Pion WebRTC. It expects Ion-SFU to run.

## Install

* Build [ion-sfu](https://github.com/pion/ion-sfu) and run in a separate tab

  ```bash
  git clone git@github.com:pion/ion-sfu.git
  cd ion-sfu
  go build cmd/server/json-rpc/main.go
  ./main -c config.toml -a ":7000"
  ```

* Run the demo

  ```bash
  git clone git@github.com:garage11/ta1k.git
  cd ta1k
  yarn
  ./cli watch
  ```

* Open a Chromium browser and visit chrome://flags
* Enable Experimental Productivity Features and restart the browser
* Visit the [Development Server url](http://127.0.0.1:35729/)

> Use the livereload extension to autoreload the browser during development.
