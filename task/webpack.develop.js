var webpack = require('webpack'),
    path = require('path'),
    _ = require("lodash");

// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var env = require('./environment');
var InjectHtmlPlugin = require("./inject-html-webpack-plugin")

var entry = {};
var commonChunks = [];

/*build modules*/
var moduleEntries = {}
_.each(env.modules, function(moduleObj) {
    var moduleEntry = {};
    moduleEntry[moduleObj.name] = [moduleObj.entryJS, moduleObj.entryCSS];
    _.extend(moduleEntries, moduleEntry)
});

/*build vendors*/
_.each(env.vendors, function(vendor) {
    commonChunks.push(new webpack.optimize.CommonsChunkPlugin({
        name: vendor.name,
        filename: path.join(env.vendorFolder,env.buildFolder,vendor.name + ".js")
    }))
    entry[vendor.name] = vendor.entryJS;
});

_.extend(entry, moduleEntries)

module.exports = {
    entry: entry,
    module: {
        loaders: [{
            test: /\.json/,
            exclude: [node_modules_dir],
            loader: 'json'
        }, {
            test: /\.(es6|jsx)$/,
            exclude: [node_modules_dir],
            loader: 'babel-loader'
        }, , {
            test: /\.html/,
            exclude: [node_modules_dir],
            loader: 'html'
        }, {
            test: /\.styl/,
            exclude: [node_modules_dir],
            loader: ExtractTextPlugin.extract('style', 'css!autoprefixer!stylus')
        }, {
            test: /\.css/,
            exclude: [node_modules_dir],
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.(png|jpg)$/,
            exclude: [node_modules_dir],
            loader: 'url?limit=25000'
        }]
    },
    resolve: {
        extensions: ["", ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js", ".json"]
    },
    output: {
        path: env.clientPath,
        filename: path.join('bundle',"[name]",env.buildFolder,"[name].js"),
        chunkFilename:path.join('bundle',"[name]",env.buildFolder,"[id].chunk.js")
    },
    plugins: _.union([
        new InjectHtmlPlugin({
            prefixURI:"/hn/",
            chunks:['index'],
            filename:"./view/index.html"
        }),
        new ExtractTextPlugin(path.join('bundle',"[name]",env.buildFolder,"[name].css"))
    ], commonChunks)
}
