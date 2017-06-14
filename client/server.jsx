import React from 'react'
import PropTypes from 'prop-types'
import { StaticRouter, Switch, Route } from 'react-router'
import { wrapper, configureStore } from 'redux-container'
import rootReducer from './reducer'
import routes from './routes'


const Server = props => {
    const { initialState, location, context } = props
    const store = configureStore(rootReducer, { eventReducer: initialState })

    const App = wrapper(store)(() => (
        <StaticRouter location={location} context={context}>
            <Switch>{routes.map((route,i)=><Route {...route} key={i} />)}</Switch>
        </StaticRouter>
    ))
    return <App />
}

Server.propTypes = {
    initialState: PropTypes.object.isRequired,
    location: PropTypes.string.isRequired,
    context: PropTypes.object.isRequired
}

export default Server
