import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './module/mutation'
import * as actions from './module/action'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        detail: {}
    },
    mutations,
    actions
})

export default store
