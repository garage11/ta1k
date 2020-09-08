import Client from './lib/client.js'
import EventEmitter from 'eventemitter3'
import Logger from './lib/logger.js'
import state from './lib/state.js'
import Vue from 'vue/dist/vue.runtime.js'
import vuepack from './vuepack.js'
import VueStash from 'vue-stash'


Vue.config.ignoredElements = ['component']
Vue.use(VueStash)


class App extends EventEmitter {

    constructor(settings) {
        super()

        this.logger = new Logger(this)
        this.logger.setLevel('debug')

        this.state = state

        this.Vue = Vue
        this.components = vuepack(this)


        this.vm = new Vue(Object.assign({
            data: {store: state},
            render: h => h(this.components.Main),
        }, settings))


        this.client = new Client(this, {
            endpoint: 'ws://localhost:7000/ws',
            stun: 'stun:stun.l.google.com:19302',
        })

        this.vm.$mount(document.querySelector('#app'))
    }
}


const app = new App({})
globalThis.app = app


// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept()
    import.meta.hot.dispose(() => {
        app.unmount()
    });
}
