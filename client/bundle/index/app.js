import Vue from 'vue'
import store from './store'
import app from './module/app'

let container = Vue.component('container', {
    components: {
        app
    },
    template: `<main><app />></main>`
})

export { store }

export default new Vue({
    store,
    render(h) {
        return h('div', { attrs: { id: 'app' } }, [h('container')])
    }
})
