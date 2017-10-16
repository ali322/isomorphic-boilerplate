import Router from "koa-router"
import { applyMiddleware } from "./lib/util"
import main, { notFound } from "./controller/main"

const router = new Router()

applyMiddleware(router, main)

router.all("*", notFound)

export default router
