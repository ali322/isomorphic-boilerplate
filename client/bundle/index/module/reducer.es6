import {
    CHANGE_FIELD,
    REQUEST_REPO,
    RESPONSE_REPO
} from "./constant.es6"

function eventsReducer(state = {}, action) {
    switch (action.type) {
        case CHANGE_FIELD:
            const { name, value } = action;
            return Object.assign({}, state, {
                [name]: value
            });
        case REQUEST_REPO:
            return Object.assign({}, state, {
                repoFetched: false,
                repoFetching: true
            });
        case RESPONSE_REPO:
            const events = action.res.result;
            const repoFetched = action.res.isFetched;
            return Object.assign({}, state, {
                events,
                repoFetched,
                repoFetching: false
            })
        default:
            return state;
    }
}

export default eventsReducer;
