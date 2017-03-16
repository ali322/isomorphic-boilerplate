import Router from 'koa-router'
import main, { notFound } from './controller/main'

const router = new Router()
applyRoutes(router, main)

router.all("*", notFound)

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
