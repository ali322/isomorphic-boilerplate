import {wrapper,configureStore} from 'redux-container'
import React,{Component} from 'react'
import {combineReducers} from 'redux'
import app from './app.jsx'
import userReducer from './reducer.es6'


const rootReducer = combineReducers({
    userReducer
})

export default ({initialState})=>{
    const {user} = initialState
    const store = configureStore(rootReducer,{
        userReducer:{
            user
        }
    })
    if (module.hot) {
        module.hot.accept('./reducer.es6', () => {
            const nextRootReducer = require('./reducer.es6')
            store.replaceReducer(nextRootReducer)
        })
    }
    const Wrapped = wrapper(store)(app)
    return <Wrapped/>
}
