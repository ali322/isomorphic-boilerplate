import Router from 'koa-router'
import {index, notFoundHandler, errorHandler } from './controller/main'
import api from './controller/api'

const router = new Router()
router.use(index)
applyRoutes(router, api)

router.all("*", notFoundHandler)
router.use(errorHandler)

function applyRoutes(router, ...controllers) {
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
            router[action.type](controller.namespace + action.url, ...middlewares, action)
        }
    }
}

export default router
