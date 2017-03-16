import app,{store} from './app'

function bootstrap() {
    let initialState = JSON.parse(document.getElementById("initial-state").textContent)
    store.replaceState({
        ...store.state,
        ...initialState
    })
    app.$mount('#app')
}

if (typeof window.addEventListener) {
    window.addEventListener("DOMContentLoaded", bootstrap);
} else {
    window.attachEvent('onload', bootstrap);
}
