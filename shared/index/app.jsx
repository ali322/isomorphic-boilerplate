'use strict'
import React from "react";
import {Provider,connect} from "react-redux";
import rootReducer from "./reducer.es6";
import createStoreWithMiddleware from "../lib/store-creator.es6";
import Weather from "./component.jsx";

function selector(state){
    const {weatherByCityName} = state
    return {
        weatherByCityName
    };
}

let WeatherConnected = connect(selector)(Weather);

class WeatherApp extends React.Component{
    render(){
        const {weather} = this.props.initialState;
        var store = createStoreWithMiddleware(rootReducer,{
            weatherByCityName:{
                isFetching:false,
                weather
            }
        });
        return (
            <Provider store={store}>
            <WeatherConnected />
            </Provider>
        )
    }
}

export default WeatherApp;