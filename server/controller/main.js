'use strict'
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var util = require("../../shared/lib/util.es6");
var WeatherApp = React.createFactory(require("../../shared/index/app.jsx"));
var ErrorContent = React.createFactory(require("../../shared/common/error/error.jsx"));

var weather = function(req,res){
    var cityName = req.body.cityname;
    if(req.xhr === true){
        util.apiRequest("http://apistore.baidu.com/microservice/weather",{
            cityname:cityName
        }).then(function(ret){
            if(ret.errMsg === "success"){
                res.json({
                    weatherFetched:true,
                    result:ret.retData
                })
            }else{
                res.json({
                    weatherFetched:false,
                    errMsg:ret.errMsg
                })
            }
        })
    }
}

var index = function(req,res,next) {
    util.apiRequest("http://apistore.baidu.com/microservice/weather",{
        cityname:"长沙"
    }).then(function(ret){
        if(ret.errMsg === "success"){
            var initialState = {
                weather:ret.retData
            };
            var markup = ReactDOMServer.renderToString(WeatherApp({
                initialState:initialState
            }));
            res.render("index", {
                markup: markup,
                initialState:initialState
            });

        }else{
            next(new Error(ret.errMsg))
        }
    },function(){
        next(new Error("api request failed"))
    })
};

var errorHandler = function(err, req, res, next) {
    if (err) {
        console.log(err.stack)
        var initialState = {
            msg: err.message
        };
        var markup = ReactDOMServer.renderToString(ErrorContent({
            initialState: initialState
        }));

        res.render('error', {
            markup: markup,
            initialState: initialState
        });
    } else {
        res.end();
    }
}

var notFoundHandler = function(req, res) {
    var initialState = {
        msg: "page not found"
    };
    var markup = ReactDOMServer.renderToString(ErrorContent({
        initialState: initialState
    }));

    res.render('error', {
        markup: markup,
        initialState: initialState
    });
}

module.exports = {
    index:index,
    weather:weather,
    notFoundHandler:notFoundHandler,
    errorHandler:errorHandler
};
