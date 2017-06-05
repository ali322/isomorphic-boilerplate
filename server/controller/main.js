import axios from 'axios'
import { matchPath } from 'react-router'
import routes from '../../client/bundle/index/routes'
import Index from "../../client/bundle/index/server.jsx"
import Error from "../../client/bundle/error/app.jsx"
import { markupForComponent } from '../lib/util'

export async function index(ctx, next) {
    let initialState = {}
    const clientCtx = {}
    const match = routes.some(route => matchPath(ctx.url, route))
    if (!match) {
        // await next()
        // return
    }
    if (ctx.url === '/') {
        let ret
        try {
            ret = await axios.get("http://127.0.0.1:3000/mock/events")
        } catch (err) {
            throw err
        }
        if (ret.status === 200) {
            ret = ret.data
            initialState = {
                flag: '0',
                events: ret.data
            }
        } else {
            throw new Error('no events')
        }
    }
    let markup = markupForComponent(Index, {
        location: ctx.url,
        context: clientCtx,
        initialState
    })
    await ctx.render("index", {
        markup,
        initialState
    })
}

export async function error(ctx, next) {
    try {
        await next()
    } catch (err) {
        let initialState = {
            msg: err.message
        }
        let markup = markupForComponent(Error, {
            initialState
        })
        await ctx.render('error', {
            markup,
            initialState
        })
    }
}

export async function notFound(ctx) {
    let initialState = {
        msg: "page not found"
    }
    let markup = markupForComponent(Error, {
        initialState
    })
    await ctx.render('error', {
        markup,
        initialState
    })
}
