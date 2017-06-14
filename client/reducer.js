import { combineReducers } from 'redux'
import eventReducer from './index/reducer'
import detailReducer from './detail/reducer'

const rootReducer = combineReducers({
    eventReducer,
    detailReducer
})

export default rootReducer
