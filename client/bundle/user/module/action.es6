import axios from 'axios'
import * as constants from './constant.es6'

const actions = {
    requestUser({ commit }) {
        commit(constants.REQUEST_USER)
    },
    responseUser({ commit }, ret) {
        commit(constants.RESPONSE_USER, {
            ret,
            respondAt: Date.now()
        })
    },
    fetchUser({ dispatch }, param) {
        dispatch('requestUser',param)
        return axios.get(`https://api.github.com/users/${param.user}`).then(ret => {
            dispatch('responseUser',ret.data)
        })
    }
}

export default actions
