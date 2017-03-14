import Vue from 'vue'
import axios from 'axios'
import { markupForComponent } from "../lib/util"

export async function index(ctx, next) {
    let markup = ''
    try {
        markup = await markupForComponent('index', ctx)
    } catch (err) {
        await next(err)
    }

    await ctx.render('index', {
        markup,
        initialState:ctx.initialState
    })
}

export async function errorHandler(ctx, next, err) {
    if (err) {
        let initialState = {
            msg: err.message
        }
        let markup = ''
        try {
            markup = await markupForComponent('error', ctx)
        } catch (err) {
            await next(err)
        }

        await ctx.render('error', {
            markup: 'err',
            initialState
        })
    } else {
        ctx.res.end()
    }
}

export async function notFoundHandler(ctx) {
    let initialState = {
        msg: "page not found"
    }
    let markup = ''
    try {
        markup = await markupForComponent('error', ctx)
    } catch (err) {
        await next(err)
    }

    await ctx.render('error', {
        markup: '404',
        initialState
    })
}
