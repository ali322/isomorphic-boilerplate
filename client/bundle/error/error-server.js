import app from './app'

const jsdom = require('jsdom').jsdom;
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;
global.fetch = require('node-fetch')

export default context=>{
    return Promise.resolve(app)
}
