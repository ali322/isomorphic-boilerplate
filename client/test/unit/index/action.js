import test from "ava"
import nock from "nock"
import configureStore from "redux-mock-store"
import thunkMiddleware from "redux-thunk"
import * as actions from "../../../index/module/action"
import * as constants from "../../../index/module/constant"

let mockStore

test.before(() => {
    nock.cleanAll()
    mockStore = configureStore([thunkMiddleware]);
})

test("should RESPONSE_EVENTS when fetched", t => {
    let ret = {
        status: 'ok',
        data: []
    }
    let initialState = {
        eventReducer: { events: [] }
    }
    const store = mockStore(initialState)
    let expectedActions = [
        { type: constants.REQUEST_EVENTS },
        { type: constants.RESPONSE_EVENTS, payload: ret.data }
    ]
    nock("http://localhost").get("/mock/events").reply(200, ret)
    return store.dispatch(actions.fetchEvents()).then(() => {
        t.deepEqual(store.getActions(), expectedActions)
    })
})
