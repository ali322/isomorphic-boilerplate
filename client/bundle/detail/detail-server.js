import app, { store } from './container'

const jsdom = require('jsdom').jsdom;
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

export default ctx => {
    let { initialState } = ctx
    store.replaceState({
        ...store.state,
        detail:initialState
    })
    return Promise.resolve(app)
}
