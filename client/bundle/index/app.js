import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'

let container = Vue.component('container', {
    template: `<main><router-view></router-view></main>`
})

sync(store, router)

export { store, router }

const app = new Vue({
    router,
    store,
    render(h) {
        return h('div', { attrs: { id: 'app' } }, [h('container')])
    }
})

export default app
