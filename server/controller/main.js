import react, { Component } from "react"
import {markupForComponent } from "../lib/util"
import axios from 'axios'
import Index from "../../client/bundle/index/module/container.jsx"
import Error from "../../client/bundle/error/module/app.jsx"
import User from '../../client/bundle/user/module/container.jsx'
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
        let ret = []
        try{
            ret = await axios.get("https://api.github.com/events")
        }catch(err){
            await next(err)
        }
        if (ret.status === 200) {
            var initialState = {
                flag:'6',
                events: ret.data
            };
            var markup = markupForComponent(Index,{
                initialState
            });
            await ctx.render("index", {
                markup: markup,
                initialState: initialState
            });
        } else {
           await next(new Error('no evenets'))
        }
    }

    @route({url:'/repo/:repo'})
    async repo(ctx,next){
        const repo = ctx.params.repo;
        const ret = await axios.get(`https://api.github.com/repos/${repo}/events`)
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

    @route({url:'/user/:user'})
    async user(ctx,next){
        const user = ctx.params.user
        const ret = await axios.get(`https://api.github.com/users/${user}`)
        if (ret.status === 200) {
            var initialState = {
                user: ret.data
            };
            var markup = markupForComponent(User,{
                initialState
            });
            await ctx.render("user", {
                markup: markup,
                initialState: initialState
            });
        } else {
           await next(new Error('no user'))
        }
    }
}

export async function errorHandler(ctx, next) {
    if (err) {
        var initialState = {
            msg: err.message
        }
        var markup = markupForComponent(Error, {
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
    var markup = markupForComponent(Error, {
        initialState: initialState
    })

    await ctx.render('error', {
        markup: markup,
        initialState: initialState
    })
}
