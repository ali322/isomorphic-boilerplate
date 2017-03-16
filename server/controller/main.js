import Vue from 'vue'
import axios from 'axios'
import { markupForComponent } from "../lib/util"

export async function index(ctx, next) {
    let ret = {data:[]}
    // try {
    //     ret = await axios.get("https://api.github.com/events")
    // } catch (err) {
    //     throw err
    // }
    // if (ret.status === 200) {
        ctx.initialState = {
            index: {
                flag: "6",
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
    // } else {
    //     throw new Error('no evenets')
    // }
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
