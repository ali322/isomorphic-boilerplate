import app, { store } from './container'
import '../common/responsive'

if (module.hot) {
    module.hot.accept()
}

const initialState = JSON.parse(document.getElementById("initial-state").textContent)

store.replaceState({
    ...store.state,
    index: initialState
})
app.$mount('#app')
