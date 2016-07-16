'use strict'

import test from "ava"
import nock from "nock"
import * as actions from "../../../shared/chunk/index/action.es6";
import * as constants from "../../../shared/chunk/index/constant.es6";
import configureStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

test("should create changeField action",t=>{
    let name = "city",value = "深圳";
    let expectedAction = {
        type:constants.CHANGE_FIELD,
        name:"city",
        value:"深圳"
    }
    t.deepEqual(actions.changeField(name,value),expectedAction)
})

let mockStore

test.before(t=>{
    mockStore = configureStore([thunkMiddleware]);
})

test("should RESPONSE_WEATHER when fetched",t=>{
    return new Promise((resolve,reject)=>{
        let ret = [{
            "weatherFetched":true,
            "result":{"city":"shenzhen"}
        }]
    let initialState = {
        weatherByCityName:{weather:{}}
    }
    const store = mockStore(initialState)
    let expectedActions = [
        {type:constants.REQUEST_WEATHER,param:{city:"shenzhen"}},
        {type:constants.RESPONSE_WEATHER,param:{city:"shenzhen"},res:ret}
    ]
    nock("http://localhost:3000/").get("/weather?city=shenzhen").reply(200, ret)
    store.dispatch(actions.fetchWeather({city:"shenzhen"}))
        .then(() => {
            t.deepEqual(store.getActions(), expectedActions)
            resolve()
        })
    })
})