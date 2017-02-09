'use strict'

import test from "ava"

import eventsReducer from "../../../client/bundle/index/module/reducer.es6"
import * as constants from "../../../client/bundle/index/module/constant.es6"

import initialState from "./initialstate.json"

test("should handle CHANGE_FIELD",t=>{
    let action = {
        type:constants.CHANGE_FIELD,
        name:"repo",
        value:"redux"
    }
    let nextState = eventsReducer(initialState.eventsReducer,action);
    t.is(nextState.repo,"redux")
})

test.skip("should handle RESPONSE_REPO",t=>{
    let action = {
        type:constants.RESPONSE_REPO,
        param:{repo:"redux"},
        res:{result:[]}
    }
    let nextState = eventsReducer(initialState.eventsReducer,action);
    t.is(nextState.eventsReducer.events,[])
})
