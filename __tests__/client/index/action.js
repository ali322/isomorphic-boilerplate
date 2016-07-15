'use strict'

import test from "ava"
import sinon from "sinon"
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

let mockStore,fakeServer

test.before(t=>{
    mockStore = configureStore([thunkMiddleware]);
    fakeServer = sinon.fakeServer.create({autoRespond:true,autoRespondAfter:200})
})

test("should RESPONSE_WEATHER when fetched",t=>{
    let ret = {
        "weatherFetched":true,
        "result":{"city":"shenzhen"}
    };
    let initialState = {
        weatherByCityName:{weather:{}}
    }
    fakeServer.respondWith("POST", "/weather",
    [200, { "Content-Type": "application/json" },JSON.stringify(ret)]);
    // var callback = sinon.spy();
    // apiRequest("/weather").then(callback)
    // fakeServer.respond();
    // sinon.assert.calledWith(callback, {weatherFetched:true});
    // fetchMock.mock("^/weather",{
    //     status:200,body:ret
    // })
    let expectedActions = [
        {type:constants.REQUEST_WEATHER,param:{city:"深圳"}},
        {type:constants.RESPONSE_WEATHER,param:{city:"深圳"},res:ret}
    ]
    // let store = mockStore(initialState,expectedActions,done);
    // store.dispatch(actions.fetchWeather({city:"深圳"})) 
})

test.after(t=>{
    fakeServer.restore();
})