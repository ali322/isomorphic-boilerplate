import app from './app'
import Vue from 'vue'

if (module.hot) {
    module.hot.accept()
}

function bootstrap() {
    const initialState = JSON.parse(document.getElementById("initial-state").textContent)
    const { msg } = initialState
    Vue.set(app, 'msg', msg)
    app.$mount('#app')
}

if (typeof window.addEventListener) {
    window.addEventListener("DOMContentLoaded", bootstrap);
} else {
    window.attachEvent('onload', bootstrap);
}
