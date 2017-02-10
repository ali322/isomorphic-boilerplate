import { wrapper, configureStore } from 'redux-container'
import React from 'react'
import { combineReducers } from 'redux'
import app from './app.jsx'
import eventsReducer from './reducer.es6'


const rootReducer = combineReducers({
    eventsReducer
})

const container = ({ initialState }) => {
    const { events } = initialState
    const store = configureStore(rootReducer, {
        eventsReducer: {
            events
        }
    })
    if (module.hot) {
        module.hot.accept('./reducer.es6', () => {
            const nextRootReducer = require('./reducer.es6')
            store.replaceReducer(nextRootReducer)
        })
    }
    const Wrapped = wrapper(store)(app)
    return <Wrapped />
}

container.propTypes = {
    initialState: React.PropTypes.object
}

export default container
