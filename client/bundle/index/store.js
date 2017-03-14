import Vuex from 'vuex'
import Vue from 'vue'
import index from './module'
import user from '../user/module'

Vue.use(Vuex)

const modules = {
    index,
    user
}

const store = new Vuex.Store({
    state: {},
    modules
})

export default store
