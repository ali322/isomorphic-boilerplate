import { combineReducers } from 'redux'
import eventReducer from './module/reducer'
import detailReducer from '../detail/reducer'

const rootReducer = combineReducers({
    eventReducer,
    detailReducer
})

export default rootReducer
