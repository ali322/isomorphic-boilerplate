import React from "react"
import ReactDOMServer from "react-dom/server"

export function markupForComponent(RenderComponent, props = {}) {
    return ReactDOMServer.renderToString(<RenderComponent {...props} />)
}

export function route(options) {
    const { type = 'get', url = 'index' } = options
    return (target, key, descriptor) => {
        target.actions = target.actions || []
        target.actions.push(key)
        const method = descriptor.value
        method.url = url
        method.type = type
        return descriptor
    }
}

export function namespace(value = '') {
    return (target) => {
        target.prototype.namespace = value
        return target
    }
}

export function middleware(...value) {
    return (target, key, descriptor) => {
        if (key === undefined) {
            target.prototype.middleware = value || []
            return target
        }
        const method = descriptor.value
        method.middleware = value || []
        return descriptor
    }
}
