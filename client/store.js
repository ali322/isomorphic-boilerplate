import Vuex from 'vuex'
import Vue from 'vue'
import index from './index/store'
import detail from './detail/store'

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
