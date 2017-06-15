import axios from 'axios'
import { markupForComponent } from "../lib/util"

export async function index(ctx) {
    let ret
    try {
        ret = await axios.get("http://127.0.0.1:3000/mock/events")
    } catch (err) {
        throw err
    }
    if (ret.status === 200) {
        ret = ret.data
        ctx.initialState = {
            index: {
                flag: "0",
                events: ret.data
            }
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
        });
    } else {
        throw new Error('no evenets')
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

export async function notFound(ctx) {
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
