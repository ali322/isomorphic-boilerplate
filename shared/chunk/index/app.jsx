'use strict'
import React,{Component} from "react";
import {Provider,connect} from "react-redux";
import rootReducer from "./reducer.es6";
import createStoreWithMiddleware,{wrapComponentWithActions} from "../../lib/redux-helper.es6";
import Events from "./component.jsx";
import * as actions from "./action.es6";

let EventsConnected = connect((state)=>{
    return {...state.eventsReducer};
})(wrapComponentWithActions(Events,actions));

function configureStore(initialState){
    const store = createStoreWithMiddleware(rootReducer, initialState)
    if (module.hot) {
        module.hot.accept('./reducer.es6', () => {
            const nextRootReducer = require('./reducer.es6');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store
}

class App extends Component{
    render(){
        const {events,flag} = this.props.initialState;
        const initialState = {
            eventsReducer:{
                events,
                flag,
                repo:''
            }
        }
        const store = configureStore(initialState);
        return (
            <Provider store={store}>
            <EventsConnected/>
            </Provider>
        )
    }
}

export default App;
