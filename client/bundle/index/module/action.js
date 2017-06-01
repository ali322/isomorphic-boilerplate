import axios from "axios"
import * as constants from "./constant"

function requestEvents() {
    return {
        type: constants.REQUEST_EVENTS
    }
}

function responseEvents(payload) {
    return {
        type: constants.RESPONSE_EVENTS,
        payload
    }
}

export function fetchEvents() {
    return dispatch => {
        dispatch(requestEvents())
        return axios.get('/mock/events').then(ret => {
            ret = ret.data
            dispatch(responseEvents(ret.data))
        })
    }
}
