import Vue from 'vue'
import axios from 'axios'
import { markupForComponent, namespace, middleware, route } from "../lib/util"
import log from '../middleware/log'
import mark from '../middleware/mark'

@middleware(log)
@namespace('')
export default new class {
    @middleware(mark)
    @route({ method: 'get', path: '/todo' })
    test(ctx) {
        ctx.body = 'something need to do'
    }

    @route({ method: 'get', path: '/' })
    async index(ctx) {
        let ret
        try {
            ret = await axios.get("http://127.0.0.1:3000/mock/events")
        } catch (err) {
            throw err
        }
        if (ret.status === 200) {
            ret = ret.data
            ctx.initialState = {
                flag: '0',
                events: ret.data
            }
            let markup = ''
            try {
                markup = await markupForComponent('index', ctx)
            } catch (err) {
                throw err
            }
            await ctx.render("index", {
                markup,
                initialState: ctx.initialState
            })
        } else {
            throw new Error('no events')
        }
    }

    @route({ method: 'get', path: '/detail/:id' })
    async detail(ctx) {
        const id = ctx.params.id
        let ret = await axios.get(`http://127.0.0.1:3000/mock/event/${id}`)
        if (ret.status === 200) {
            ret = ret.data
            ctx.initialState = {
                detail: ret.data,
                flag: 1
            }
            let markup = ''
            try {
                markup = await markupForComponent('detail', ctx)
            } catch (err) {
                throw err
            }
            await ctx.render("detail", {
                markup,
                initialState: ctx.initialState
            });
        } else {
            throw new Error('no event')
        }
    }
}

export async function error(ctx, next) {
    try {
        await next()
    } catch (err) {
        let initialState = {
            msg: err.message
        }

        ctx.initialState = initialState
        let markup = ''
        try {
            markup = await markupForComponent('error', ctx)
        } catch (err) {
            throw err
        }

        await ctx.render('error', {
            markup,
            initialState
        })
    }
}

export async function notFound(ctx, next) {
    let initialState = {
        msg: "page not found"
    }
    ctx.initialState = initialState
    let markup = ''
    try {
        markup = await markupForComponent('error', ctx)
    } catch (err) {
        throw err
    }

    await ctx.render('error', {
        markup,
        initialState
    })
}
