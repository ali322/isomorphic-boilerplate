import react, { Component } from "react"
import { apiRequest, markupForComponent } from "../lib/util"
import WeatherApp from "../../client/bundle/index/module/app.jsx"
import ErrorContent from "../../client/bundle/error/module/app.jsx"
import {route,namespace,middleware} from '../lib/util'
import log from '../middleware/log'
import test from '../middleware/test'
import other from '../middleware/other'

@middleware(log)
@namespace('')
export default new class {
    @middleware(test,other)
    @route({type:'get',url:'/test'})
    test(ctx,next){
        ctx.body = 'im test'
    }

    @route({url:'/'})
    async index(ctx,next){
        const ret = await apiRequest("https://api.github.com/events")
        if (ret.length > 0) {
            var initialState = {
                flag:'66',
                events: ret
            };
            var markup = markupForComponent(WeatherApp, {
                initialState: initialState
            });
            await ctx.render("index", {
                markup: markup,
                initialState: initialState
            });

        } else {
            next(new Error("no events"))
        }
    }

    @route({url:'/repo'})
    async repo(ctx,next){
        var repo = req.body.repo;
        const ret = await apiRequest(`https://api.github.com/repos/${repo}/events`)
        if (ret.errMsg === "success") {
            ctx.body = {
                weatherFetched: true,
                result: ret.retData
            }
        } else {
            ctx.body = {
                weatherFetched: false,
                errMsg: ret.errMsg
            }
        }
    }
}

export async function errorHandler(ctx, next) {
    if (err) {
        var initialState = {
            msg: err.message
        }
        var markup = markupForComponent(ErrorContent, {
            initialState: initialState
        })

        await ctx.render('error', {
            markup: markup,
            initialState: initialState
        })
    } else {
        ctx.res.end()
    }
}

export async function notFoundHandler(ctx, next) {
    var initialState = {
        msg: "page not found"
    }
    var markup = markupForComponent(ErrorContent, {
        initialState: initialState
    })

    await ctx.render('error', {
        markup: markup,
        initialState: initialState
    })
}
