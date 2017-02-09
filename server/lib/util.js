import React from "react"
import ReactDOMServer from "react-dom/server"
import axios from "axios"

export function markupForComponent(RenderComponent, props = {}) {
    return ReactDOMServer.renderToString(<RenderComponent {...props}/>)
}

export function apiRequest(url) {
    return axios.get(url)
}

export function route(options) {
    const { type = 'get', url = 'index',middleware =[] } = options
    return function(target,key,descriptor) {
        target.actions = target.actions || []
        target.actions.push(key)
        const method = descriptor.value
        method.url = url
        method.type = type
        return descriptor
    }
}

export function namespace(value=''){
    return function(target){
        target.prototype.namespace = value
        return target
    }
}

export function middleware(...value){
    return function(target,key,descriptor){
        if(key === undefined){
            target.prototype.middleware = value || []
            return target
        }else{
            const method = descriptor.value
            method.middleware = value || []
            return descriptor
        }
    }
}
