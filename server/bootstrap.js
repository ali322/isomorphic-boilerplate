'use strict'
var Koa = require("koa")
var staticServer = require("koa-static"),
    bodyParser = require("koa-bodyparser"),
    methodOverride = require("koa-methodoverride"),
    convert = require("koa-convert"),
    session = require("koa-generic-session"),
    views = require("koa-views")

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

var router = require("./router.js")

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
