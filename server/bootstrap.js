import Koa from 'koa'
import staticServer from 'koa-static'
import bodyParser from 'koa-bodyparser'
import methodOverride from 'koa-methodoverride'
import convert from 'koa-convert'
import session from 'koa-generic-session'
import views from 'koa-views'
import router from './router'

const app = new Koa()

app.use(staticServer("client"))
app.use(bodyParser())
app.use(methodOverride())

app.use(convert(session({
    key: "isomorphic-boilerplate",
    cookie: {
        maxAge: 3600000 * 12 //12 hour
    }
})))

app.use(views(`${__dirname}/../view`, { map: { html: "swig" }, extension: "html" }))

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
