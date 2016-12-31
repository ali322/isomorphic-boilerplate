var webpack = require('webpack'),
    path = require('path'),
    del = require("del"),
    _ = require("lodash");

// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var env = require('./environment');
var InjectHtmlPlugin = require("inject-html-webpack-plugin")
var autoPrefixer = require('autoprefixer')

/*build const*/
var entry = {};
var commonChunks = [];
var htmls = [];

function bundleTime(){
    const dateObj = new Date()
    const year = dateObj.getFullYear()
    const month = dateObj.getMonth() + 1
    const date = dateObj.getDate()
    const hour = dateObj.getHours()
    const minute = dateObj.getMinutes()
    return ""+year+month+date+hour+minute
}

/*build pages*/
var moduleEntries = {}
_.each(env.modules, function(moduleObj) {
    del.sync(path.join(env.clientPath,env.bundleFolder,moduleObj.path, env.distFolder + '/*.*'));
    var moduleEntry = {};
    moduleEntry[moduleObj.name] = [moduleObj.entryJS, moduleObj.entryCSS];
    _.extend(moduleEntries, moduleEntry)
    moduleObj.html.forEach(function(html){
        htmls.push(new InjectHtmlPlugin({
            chunks:[moduleObj.name,moduleObj.vendor],
            filename:html,
            customInject:[{
                start:'<!-- start:bundle-time -->',
                end:'<!-- end:bundle-time -->',
                content:bundleTime()
            }]
        }))
    })
});

/*build vendors*/
del.sync(path.resolve(path.join(env.clientPath,env.vendorFolder,env.distFolder,"/*.js")))
_.each(env.vendors, function(vendor) {
    commonChunks.push(new webpack.optimize.CommonsChunkPlugin({
        name: vendor.name,
        filename:path.join(env.vendorFolder,env.distFolder,vendor.name + "-[hash].js")
    }))
    entry[vendor.name] = vendor.entryJS;
});

/*add modules and vendors to entry point*/
_.extend(entry, moduleEntries);
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
            loader: 'babel'
        }, , {
            test: /\.html/,
            exclude: [node_modules_dir],
            loader: 'html'
        }, {
            test: /\.styl/,
            exclude: [node_modules_dir],
            loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus')
        }, {
            test: /\.css/,
            exclude: [node_modules_dir],
            loader: 'file-loader?name=[path][name].[ext]!extract!css?modules&importLoaders=1!postcss'
        }, {
            test: /\.(png|jpg)$/,
            exclude: [node_modules_dir],
            loader: 'url?limit=25000'
        }]
    },
    postcss:function(webpack){
        return [postcssImport({addDependencyTo:true}),autoPrefixer()]
    }
    resolve: {
        extensions: ["", ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js", ".json", ".coffee"]
    },
    output: {
        path: env.clientPath,
        filename: path.join('bundle',"[name]",env.distFolder,"[name]-[hash].js"),
        chunkFilename:path.join('bundle',"[name]",env.distFolder,"[id]-[hash].chunk.js")
    },
    plugins: _.union([
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
              comments: false
            },
            sourceMap: false
        }),
        new ExtractTextPlugin(path.join('bundle',"[name]",env.distFolder,"[name]-[hash].css"))
    ], commonChunks,htmls)
}