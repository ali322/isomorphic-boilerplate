import { createBundleRenderer } from 'vue-server-renderer'
import lruCache from 'lru-cache'
import fs from 'fs'
import axios from "axios"
import { resolve } from 'path'

export function markupForComponent(name, ctx) {
    const bundlePath = resolve('dist', 'server', 'bundle', name + '.js')
    const bundle = fs.readFileSync(bundlePath, 'utf-8')
    const renderer = createBundleRenderer(bundle, {
        cache: lruCache({
            max: 1000,
            maxAge: 1000 * 6000 * 15
        })
    })
    return new Promise((resolve, reject) => {
        renderer.renderToString(ctx, (err, html) => {
            if (err) reject(err)
            resolve(html)
        })
    })
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

export function route(options) {
    const { method = 'get', path = '/' } = options
    return (target, key, descriptor) => {
        target.actions = target.actions || []
        target.actions.push(key)
        const value = descriptor.value
        value.path = path
        value.method = method
        return descriptor
    }
}

export function applyMiddleware(router, ...controllers) {
    for (let i in controllers) {
        let controller = controllers[i]
        for (let k in controller.actions) {
            let action = controller[controller.actions[k]]
            let middlewares = []
            if (Array.isArray(controller.middleware)) {
                middlewares = middlewares.concat(controller.middleware)
            }
            if (Array.isArray(action.middleware)) {
                middlewares = middlewares.concat(action.middleware)
            }
            router[action.method](controller.namespace + action.path, ...middlewares, action)
        }
    }
}
