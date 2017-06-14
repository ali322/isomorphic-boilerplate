import Vue from 'vue'
import store from './store'
import app from './module/app.vue'

export {store}

export default new Vue({
    store,
    render: h => h(app)
})
