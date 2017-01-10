var webpack = require('webpack'),
    path = require('path'),
    del = require("del"),
    fs = require("fs"),
    _ = require("lodash");

var ExtractTextPlugin = require("extract-text-webpack-plugin")
var node_modules_dir = path.resolve(__dirname, '../node_modules')
var env = require('./environment')
var helper = require("./helper")
var InjectHtmlPlugin = require("inject-html-webpack-plugin")
var ChunkTransformPlugin = require("chunk-transform-webpack-plugin")
var autoPrefixer = require('autoprefixer')
var postcssImport = require('postcss-import')
var sprites = require('postcss-sprites')
var cssURL = require('postcss-url')

/** build variables*/
var entry = {};
var commonChunks = [];
var htmls = [];
var ASSET_INPUT = path.join(env.clientPath,env.assetFolder)
var ASSET_IMAGE_OUTPUT = [env.assetFolder,env.distFolder,'image'].join(path.sep) + path.sep
var ASSET_FONT_OUTPUT = [env.assetFolder,env.distFolder,'font'].join(path.sep) + path.sep

/** clean dist */
del.sync([path.join(env.clientPath,env.vendorFolder),path.join(env.clientPath,env.assetFolder,env.distFolder)])

/** build modules*/
var moduleEntries = {}
_.each(env.modules, function(moduleObj) {
    del.sync(path.join(env.clientPath, env.bundleFolder, moduleObj.path, env.distFolder + '/*.*'));
    var moduleEntry = {};
    moduleEntry[moduleObj.name] = [moduleObj.entryJS, moduleObj.entryCSS]
    _.extend(moduleEntries, moduleEntry)
    moduleObj.html.forEach(function(html) {
        var _chunks = [moduleObj.name]
        if (moduleObj.vendor) {
            moduleObj.vendor.js && _chunks.push(moduleObj.vendor.js)
            moduleObj.vendor.css && _chunks.push(moduleObj.vendor.css)
        }
        htmls.push(new InjectHtmlPlugin({
            chunks: _chunks,
            filename: html,
            customInject: [{
                start: '<!-- start:bundle-time -->',
                end: '<!-- end:bundle-time -->',
                content: helper.bundleTime()
            }]
        }))
    })
});

/** build vendors*/
del.sync(path.resolve(path.join(env.clientPath, env.vendorFolder, env.distFolder, "/*.*")))
_.each(env.vendors['js'], function(vendor, key) {
    commonChunks.push(new webpack.optimize.CommonsChunkPlugin({
        name: key,
        chunks: [key],
        filename: path.join(env.vendorFolder, env.distFolder, key + "-[hash:8].js")
    }))
    entry[key] = vendor;
});
_.each(env.vendors['css'], function(vendor, key) {
    entry[key] = vendor;
})

/** add modules and vendors to entry point*/
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
                loader: 'file?name=../[path]/dist/[name].[ext]!extract!html'
            }, {
                test: /\.styl/,
                exclude: [node_modules_dir],
                loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus')
            }, {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            },
            {
                test: /\.(png|jpg)$/,
                exclude: [node_modules_dir],
                loaders: [
                    'file?outputPath='+ASSET_FONT_OUTPUT+'&hash=sha512&digest=hex&name=[hash:8].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test:/\.(eot|ttf|woff2|svg|woff)/,
                loaders: [
                    'file?config=fontLoader&outputPath='+ASSET_FONT_OUTPUT+'&hash=sha512&digest=hex&name=[hash:8].[ext]',
                ]
            }
        ]
    },
    fileLoader:{
        publicPath:function(url){
            return "../../../asset/dist/image/"+url
        }
    },
    fontLoader:{
        publicPath:function(url){
            return "../../../asset/dist/font/"+url
        }
    },
    postcss: function(webpack) {
        return [postcssImport({ addDependencyTo: true }),
            autoPrefixer(),
            cssURL({
                url: function(originURL, decl, from, dirname, to, options, result) {
                    return helper.urlResolver(originURL,from,to,ASSET_INPUT)
                }
            }),
            sprites({
                spritePath: path.join(env.clientPath, env.assetFolder, 'sprites')
            })
        ]
    },
    resolve: {
        extensions: ["", ".js", ".json", ".es6", ".jsx"]
    },
    output: {
        path: env.clientPath,
        filename: path.join('bundle', "[name]", env.distFolder, "[name]-[hash:8].js"),
        chunkFilename: path.join('bundle', "[name]", env.distFolder, "[id]-[hash:8].chunk.js")
    },
    plugins: _.union([
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') }
        }),
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(true),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     },
        //     output: {
        //         comments: false
        //     },
        //     sourceMap: false
        // }),
        new ExtractTextPlugin(path.join('bundle', "[name]", env.distFolder, "[name]-[contenthash:8].css"), { allChunks: true }),
        new ChunkTransformPlugin({
            chunks: ['common'],
            test: /\.css/,
            filename: function(filename) { return path.join(env.vendorFolder, env.distFolder, path.basename(filename)) }
        })
    ], commonChunks, htmls)
}
