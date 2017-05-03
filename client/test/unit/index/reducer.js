import test from "ava"

import eventsReducer from "../../../bundle/index/module/reducer.es6"
import * as constants from "../../../bundle/index/module/constant.es6"


test("should handle CHANGE_FIELD", t => {
    let action = {
        type: constants.CHANGE_FIELD,
        name: "repo",
        value: "redux"
    }
    let nextState = eventsReducer({}, action);
    t.is(nextState.repo, "redux")
})

test("should handle RESPONSE_REPO", t => {
    let action = {
        type: constants.RESPONSE_REPO,
        param: { repo: "redux" },
        res: { result: [], isFetched: true }
    }
    let nextState = eventsReducer({ events: [] }, action)
    t.is(nextState.repoFetched, true)
})
