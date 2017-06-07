import app, { router, store } from './container'

const jsdom = require('jsdom').jsdom;
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

export default ctx => {
    router.push(ctx.url)
    const matchedComponents = router.getMatchedComponents()
    if (!matchedComponents.length) {
        return Promise.reject({ code: 404 })
    }
    return Promise.all(matchedComponents).then(() => {
        let { initialState } = ctx
        store.replaceState({
            ...store.state,
            ...initialState
        })
        return app
    })
}
