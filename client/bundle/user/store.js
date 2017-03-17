import Vuex from 'vuex'
import Vue from 'vue'
import user from './module'

Vue.use(Vuex)

const modules = {
    user
}

const store = new Vuex.Store({
    state: {},
    modules
})

export default store
