'use strict'
import util from "../lib/util"

const WeatherApp = util.getSharedComponent("index")
const ErrorContent = util.getSharedComponent("common","error.jsx")

export async function index(ctx,next){
    const ret = await util.apiRequest("http://apistore.baidu.com/microservice/weather",{
        cityname:"北京"
    })
    if(ret.errMsg === "success"){
        var initialState = {
            weather:ret.retData
        };
        var markup = util.getMarkupByComponent(WeatherApp({
            initialState:initialState
        }));
        await ctx.render("index", {
            markup: markup,
            initialState:initialState
        });

    }else{
        next(new Error(ret.errMsg))
    }
}

export async function weather(ctx,next){
    var cityName = req.body.cityname;
    util.apiRequest("http://apistore.baidu.com/microservice/weather",{
        cityname:cityName
    }).then(function(ret){
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
    })
}

export async function errorHandler(ctx,next){
    if (err) {
        var initialState = {
            msg: err.message
        }
        var markup = util.getMarkupByComponent(ErrorContent({
            initialState: initialState
        }))

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
    var markup = util.getMarkupByComponent(ErrorContent({
        initialState: initialState
    }))

    await ctx.render('error', {
        markup: markup,
        initialState: initialState
    })
}