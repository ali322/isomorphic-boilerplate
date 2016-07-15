'use strict'

import test from "ava"

import * as reducers from "../../../shared/chunk/index/reducer.es6"
import * as constants from "../../../shared/chunk/index/constant.es6"

import initialState from "./initialstate.json"

test("should handle CHANGE_FIELD",t=>{
    let action = {
        type:constants.CHANGE_FIELD,
        name:"city",
        value:"深圳"
    }
    let nextState = reducers.weatherByCityName(initialState.weatherByCityName,action);
    t.is(nextState.weather['city'],"深圳")
})

test("should handle RESPONSE_WEATHER",t=>{
    let action = {
        type:constants.RESPONSE_WEATHER,
        param:{city:"深圳"},
        res:{result:{pinyin:"shenzhen"}}
    }
    let nextState = reducers.weatherByCityName(initialState.weatherByCityName,action);
    t.is(nextState.weather.pinyin,"shenzhen")
})