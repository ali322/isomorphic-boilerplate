import app, { router, store } from './app'

const jsdom = require('jsdom').jsdom;
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;
global.fetch = require('node-fetch')

export default context => {
    router.push(context.url)
    const matchedComponents = router.getMatchedComponents()
    if (!matchedComponents.length) {
        return Promise.reject({ code: 404 })
    }
    return Promise.all(matchedComponents.map(v => {
        if (v.preFetch) {
            return v.preFetch
        }
    })).then(() => {
        context.initialState = store.state
        return app
    })
}
