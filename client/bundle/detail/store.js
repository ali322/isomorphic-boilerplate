import Vuex from 'vuex'
import Vue from 'vue'
import detail from './module'

Vue.use(Vuex)

const modules = {
    detail
}

const store = new Vuex.Store({
    state: {},
    modules
})

export default store
