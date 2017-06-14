import { wrapper, configureStore } from 'redux-container'
import React from 'react'
import PropTypes from 'prop-types'
import App from './module/app.jsx'
import detailReducer from './module/reducer'


const container = ({ initialState }) => {
    const { detail } = initialState
    const store = configureStore(detailReducer, {
        detail
    })
    if (module.hot) {
        module.hot.accept('./module/reducer', () => {
            const nextRootReducer = require('./module/reducer')
            store.replaceReducer(nextRootReducer)
        })
    }
    const Component = wrapper(store)(App)
    return <Component />
}

container.propTypes = {
    initialState: PropTypes.object
}

export default container
