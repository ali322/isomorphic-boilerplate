'use strict'
import {
    createStore, applyMiddleware
}
from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    logger
)(createStore);

export default createStoreWithMiddleware;