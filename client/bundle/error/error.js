import app, { store } from './container'
import Vue from 'vue'
import '../common/responsive'

if (module.hot) {
    module.hot.accept()
}

const initialState = JSON.parse(document.getElementById("initial-state").textContent)
const { msg } = initialState
Vue.set(app, 'msg', msg)
app.$mount('#app')
