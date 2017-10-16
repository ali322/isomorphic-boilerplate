import path from "path"
import Koa from "koa"
import staticServer from "koa-static"
import bodyParser from "koa-body"
import methodOverride from "koa-methodoverride"
import session from "koa-session-minimal"
import views from "koa-views"
import router from "./router"
import { error } from "./controller/main"
import pkg from "../package"

const app = new Koa()

app.use(staticServer(path.join("dist", "client")))
app.use(bodyParser())
app.use(methodOverride())

app.use(
  session({
    key: pkg.name,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12 // expired 12 hours
    }
  })
)

app.use(error)

app.on("error", err => {
  console.log("server error", err)
})

let viewPath = path.join(process.cwd(), "view")

app.use(views(viewPath, { map: { html: "swig" }, extension: "html" }))

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
