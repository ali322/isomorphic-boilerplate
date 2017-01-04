'use strict'
import react,{Component} from "react"
import {apiRequest,markupForComponent} from "../lib/util.es6"
import WeatherApp from "../../shared/chunk/index/app.jsx"
import ErrorContent from "../../shared/chunk/common/error.jsx"

export async function index(ctx,next){
    const ret = await apiRequest("https://api.github.com/events")
    if(ret.length > 0){
        var initialState = {
            events:ret
        };
        var markup = markupForComponent(WeatherApp,{
            initialState:initialState
        });
        await ctx.render("index", {
            markup: markup,
            initialState:initialState
        });

    }else{
        next(new Error("no events"))
    }
}

export async function repo(ctx,next){
    var repo = req.body.repo;
    const ret = await apiRequest(`https://api.github.com/repos/${repo}/events`)
    if(ret.errMsg === "success"){
        ctx.body = {
            weatherFetched:true,
            result:ret.retData
        }
    }else{
        ctx.body = {
            weatherFetched:false,
            errMsg:ret.errMsg
        }
    }
}

export async function errorHandler(ctx,next){
    if (err) {
        var initialState = {
            msg: err.message
        }
        var markup = markupForComponent(ErrorContent,{
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

export async function notFoundHandler(ctx,next){
    var initialState = {
        msg: "page not found"
    }
    var markup = markupForComponent(ErrorContent,{
        initialState: initialState
    })

    await ctx.render('error', {
        markup: markup,
        initialState: initialState
    })
}