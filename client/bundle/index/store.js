import Vuex from 'vuex'
import Vue from 'vue'
import index from './module'
import detail from '../detail/module'

Vue.use(Vuex)

const modules = {
    index,
    detail
}

const store = new Vuex.Store({
    state: {},
    modules
})

export default store
