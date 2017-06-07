import Vuex from 'vuex'
import Vue from 'vue'
import * as actions from './module/action'
import mutations from './module/mutation'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        events: []
    },
    mutations,
    actions
})

export default store
