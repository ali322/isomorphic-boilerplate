import * as constants from './constant.es6'

function userReducer(state={},action){
    switch(action.type){
        case constants.REQUEST_USER:
            return {
                ...state,
                userFetching:true
            }
        case constants.RESPONSE_USER:
            return {
                ...state,
                userFetching:false,
                userFetched:action.payload.isFetched,
                user:action.payload.result
            }
        default:
            return state
    }
}

export default userReducer
