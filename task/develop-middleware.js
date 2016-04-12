'use strict';
var webpack = require("webpack"),
    webpackDevMiddleware = require("webpack-dev-middleware"),
    webpackHotMiddleware = require("webpack-hot-middleware"),
    config = require('./webpack.hot-update.js');

var bundler = webpack(config);

module.exports = function(app){
    app.use(webpackDevMiddleware(bundler, { 
        noInfo: true, 
        stats: {
            colors: true
        },
        hot: true,
        publicPath: config.output.publicPath 
    }))
    app.use(webpackHotMiddleware(bundler))
    return app
}


