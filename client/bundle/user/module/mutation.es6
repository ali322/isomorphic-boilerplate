import * as constants from './constant.es6'

const mutations = {
    [constants.REQUEST_USER](state) {
        state.userFetching = true
    },
    [constants.RESPONSE_USER](state,payload) {
        state.user = payload.ret
        state.userFetching = false
        state.userFetched = true
    }
}

export default mutations
