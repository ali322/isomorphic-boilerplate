'use strict';
import {apiRequest} from "../lib/util.es6";
export const CHANGE_FIELD = "CHANGE_FIELD";
export const REQUEST_WEATHER = "REQUEST_WEATHER";
export const RESPONSE_WEATHER = "RESPONSE_WEATHER";

export function changeField(name,value){
    return {
        type:CHANGE_FIELD,
        name,
        value
    }
}

function requestWeather(param){
    return {
        type:REQUEST_WEATHER,
        param
    }
}

function responseWeather(param,res){
    return {
        type:RESPONSE_WEATHER,
        param,
        res,
        receiveAt:Date.now()
    }
}

export function fetchWeather(param){
    return (dispatch)=>{
        dispatch(requestWeather(param));
        apiRequest("/weather",param,{method:"POST"}).then((res)=>{
            dispatch(responseWeather(param,res));
        })
    }
}