'use strict'

import test from "ava"
import nock from "nock"
import * as actions from "../../../client/bundle/index/module/action.es6";
import * as constants from "../../../client/bundle/index/module/constant.es6";
import configureStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

test("should create changeField action",t=>{
    let name = "repo",value = "react";
    let expectedAction = {
        type:constants.CHANGE_FIELD,
        name:"repo",
        value:"react"
    }
    t.deepEqual(actions.changeField(name,value),expectedAction)
})

let mockStore

test.before(t=>{
    mockStore = configureStore([thunkMiddleware]);
})

test.skip("should RESPONSE_EVENTS when fetched",t=>{
    return new Promise((resolve,reject)=>{
        let ret = [{
            "isFetched":true,
            "result":[]
        }]
        let initialState = {
            eventsReducer:{events:[]}
        }
        const store = mockStore(initialState)
        let expectedActions = [
            {type:constants.REQUEST_REPO,param:{repo:"redux"}},
            {type:constants.RESPONSE_REPO,param:{repo:"redux"},res:ret}
        ]
    nock("http://localhost:3000/").get("/repo/redux").reply(200, ret)
    store.dispatch(actions.fetchRepo({repo:"redux"}))
        .then(() => {
            t.deepEqual(store.getActions(), expectedActions)
            resolve()
        })
    })
})
