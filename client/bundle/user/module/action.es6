import axios from 'axios'
import * as constants from './constant.es6'

function requestUser(param) {
    return {
        type: constants.REQUEST_USER,
        param
    }
}

function responseUser(payload) {
    return {
        type: constants.RESPONSE_USER,
        payload,
        respondAt: Date.now()
    }
}

export function fetchUser(param) {
    return dispatch => {
        dispatch(requestUser(param))
        axios.get(`/api/user/${param.user}`).then(ret => {
            dispatch(responseUser(ret.data))
        })
    }
}
