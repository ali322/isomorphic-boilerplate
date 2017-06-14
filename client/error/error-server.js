import Vue from 'vue'
import app from './app'

const jsdom = require('jsdom').jsdom;
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

export default ctx => {
    const { msg } = ctx.initialState
    Vue.set(app, 'msg', msg)
    return Promise.resolve(app)
}
