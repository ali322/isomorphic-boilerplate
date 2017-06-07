import Router from 'koa-router'
import { applyMiddleware } from './lib/util'
import { index, notFound } from './controller/main'
import api from './controller/api'

const router = new Router()
router.use(index)

applyMiddleware(router, api)

router.all("*", notFound)

export default router
