import app, { store } from './app'

const jsdom = require('jsdom').jsdom;
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

export default ctx => {
    let { initialState } = ctx
    store.replaceState({
        ...store.state,
        ...initialState
    })
    return Promise.resolve(app)
}
