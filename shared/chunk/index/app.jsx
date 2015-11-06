'use strict'
import React from "react";
import {Provider,connect} from "react-redux";
import rootReducer from "./reducer.es6";
import createStoreWithMiddleware from "../../lib/store-creator.es6";
import Weather from "./component.jsx";

function selector(state){
    const {weatherByCityName} = state
    return {
        weatherByCityName
    };
}

let WeatherConnected = connect(selector)(Weather);

function configureStore(initialState){
    const store = createStoreWithMiddleware(rootReducer, initialState)
    if(module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept(rootReducer,() => {
            // const nextReducer = require('./reducer.es6');
            store.replaceReducer(rootReducer)
        })
    }
    return store
}

class WeatherApp extends React.Component{
    render(){
        const {weather} = this.props.initialState;
        const initialState = {
            weatherByCityName:{
                weather
            }
        }
        const store = configureStore(initialState);
        return (
            <Provider store={store}>
            <WeatherConnected />
            </Provider>
        )
    }
}

export default WeatherApp;