# About

This is a first dive into Golang and Pion WebRTC from the perspective of
a JavaScript developer. VSCode will be the IDE of choice for Golang,
since most JavaScript developers already use VSCode. Actually, it turns
out that VSCode has pretty solid support for Golang!

Our JavaScript frontend is a custom stack, using [Snowpack](https://www.snowpack.dev/) for bundleless development and [Vuepack](https://github.com/garage11/vuepack) for Non-SFC component compiling. Primary goals of this repo:

* Learn about [Pion WebRTC](https://github.com/pion/webrtc)
* Getting familiar with Golang and its tooling
* Setup an environment for fullstack WebRTC development, featuring:
  * Livereload
  * Syntax highlighting
  * Linting
  * Autocomplete


## Setup Golang

```bash
vim ~/.zshrc
export GOPATH=~/.go
export PATH=$PATH:~/.go/bin
```

## Install

* Run the demo

  ```bash
  git clone git@github.com:garage11/ta1k.git
  cd ta1k
  yarn
  go build sfu/ta1k.go
  ./cli watch
  # From another tab:
  env GO111MODULE=on go get github.com/cortesi/modd/cmd/modd
  ./ta1k
  ```

* Open a Chromium browser and visit chrome://flags
* Enable Experimental Productivity Features and restart the browser
* Visit the [Development Server url](http://127.0.0.1:35729/)

> Use the livereload extension to autoreload the browser during development.
