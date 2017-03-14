import axios from "axios"
import * as constants from "./constant.es6"

const actions = {
    changeField({ commit }, param) {
        commit(constants.CHANGE_FIELD, param)
    },
    requestRepo({ commit }) {
        commit(constants.REQUEST_REPO)
    },
    responseRepo({ commit }, res) {
        commit(constants.RESPONSE_REPO, { res })
    },
    failResponse({ commit }, err) {
        commit(constants.FAIL_RESPONSE, { err })
    },
    fetchRepo({ commit, dispatch }, param) {
        dispatch("requestRepo", param)
        return axios.get(`https://api.github.com/events`).then(ret => {
            dispatch('responseRepo', ret.data)
        })
    }
}

export default actions
