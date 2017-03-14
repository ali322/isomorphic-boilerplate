import * as constants from './constant.es6'

const mutations = {
    [constants.CHANGE_FIELD](state, payload) {
        const { name, value } = payload
        state[name] = value
    },
    [constants.REQUEST_REPO](state) {
        state.repoFetching = true
    },
    [constants.RESPONSE_REPO](state, payload) {
        state.events = payload.res
        state.repoFetching = false
        state.repoFetched = true
    }
}

export default mutations
