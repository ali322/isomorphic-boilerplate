'use strict';
import request from "../../../lib/request.es6"
import {CHANGE_FIELD,REQUEST_REPO,RESPONSE_REPO,FAIL_RESPONSE} from "./constant.es6";
export function changeField(name,value){
    return {
        type:CHANGE_FIELD,
        name,
        value
    }
}

function requestRepo(param){
    return {
        type:REQUEST_REPO,
        param
    }
}

function responseRepo(param,res){
    return {
        type:RESPONSE_REPO,
        param,
        res
    }
}
function failResponse(err){
    return {
        type:FAIL_RESPONSE,
        err
    }
}

export function fetchRepo(param){
    return (dispatch) => {
        dispatch(requestRepo(param))
        return request.get("/repo",param)
        .then(ret=> dispatch(responseRepo(param,ret)))
        .catch(err =>dispatch(failResponse(err)))
  }
}