import Vue from 'vue'
import store from './store'
import app from './module/app.vue'

let container = Vue.component('container', {
    components: {
        app
    },
    template: `<main><app />></main>`
})

export { store }

const app = new Vue({
    store,
    render(h) {
        return h('div', { attrs: { id: 'app' } }, [h('container')])
    }
})

export default app
