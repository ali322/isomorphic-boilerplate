import { createBundleRenderer } from 'vue-server-renderer'
import lruCache from 'lru-cache'
import fs from 'fs'
import axios from "axios"
import path from 'path'

export function markupForComponent(name, ctx) {
    const bundlePath = path.join(process.cwd(), 'server','bundle', name + '.js')
    const bundle = fs.readFileSync(bundlePath,'utf-8')
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

export function apiRequest(url) {
    return axios.get(url)
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
