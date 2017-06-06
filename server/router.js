import Router from 'koa-router'
import main, { notFound } from './controller/main'
import { applyMiddleware } from './lib/util'

const router = new Router()
applyMiddleware(router, main)

router.all("*", notFound)

export default router
