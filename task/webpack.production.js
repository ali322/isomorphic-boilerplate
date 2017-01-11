var webpack = require('webpack'),
    path = require('path'),
    del = require("del"),
    fs = require("fs"),
    _ = require("lodash");

var ExtractTextPlugin = require("extract-text-webpack-plugin")
// var UglifyJsPlugin = require('webpack-uglify-parallel')
var node_modules_dir = path.resolve(__dirname, '../node_modules')
var env = require('./environment')
var helper = require("./helper")
var InjectHtmlPlugin = require("inject-html-webpack-plugin")
var ChunkTransformPlugin = require("chunk-transform-webpack-plugin")
var autoPrefixer = require('autoprefixer')
var postcssImport = require('postcss-import')
var sprites = require('postcss-sprites')
var cssURL = require('postcss-url')
var happypackPlugin = helper.happypackPlugin()

/** build variables*/
var entry = {};
var commonChunks = [];
var htmls = [];
var ASSET_INPUT = path.join(env.clientPath,env.assetFolder)
var ASSET_IMAGE_OUTPUT = path.join(env.assetFolder,env.distFolder,'image',path.sep)
var ASSET_FONT_OUTPUT = path.join(env.assetFolder,env.distFolder,'font',path.sep)

/** clean dist */
del.sync([path.join(env.clientPath,env.assetFolder,env.distFolder)])

/** build vendors*/
// del.sync(path.resolve(path.join(env.clientPath, env.vendorFolder)))
var dllRefs = []
/** DllReferencePlugin vendor js */
var vendorJS = fs.readdirSync(path.join(env.clientPath,env.vendorFolder,env.distFolder))
_.each(env.vendors['js'], function(vendor, key) {
    // commonChunks.push(new webpack.optimize.CommonsChunkPlugin({
    //     name:key,
    //     chunks:[key],
    //     filename: path.join(env.vendorFolder, env.distFolder, key + "-[hash:8].js")
    // }))
    // entry[key] = vendor
    var _manifest = require(path.join("..",env.clientPath,env.vendorFolder,key+'-manifest.json'))
    dllRefs.push(new webpack.DllReferencePlugin({
        context:path.resolve(env.clientPath),
        manifest:_manifest,
    }))
});

_.each(env.vendors['css'], function(vendor, key) {
    entry[key] = vendor;
})

/** build modules*/
_.each(env.modules, function(moduleObj) {
    del.sync(path.join(env.clientPath, env.bundleFolder, moduleObj.path, env.distFolder + '/*.*'));
    var moduleEntry = {};
    moduleEntry[moduleObj.name] = [moduleObj.entryJS, moduleObj.entryCSS]
    var _chunks = [moduleObj.name]
    var _more = {js:[]}
    if (moduleObj.vendor) {
        moduleObj.vendor.js && _chunks.push(moduleObj.vendor.js)
        if(moduleObj.vendor.js){
            _more.js = vendorJS.filter(function(v){
                var _regexp = new RegExp(moduleObj.vendor.js+"-\\w+\\.js$")
                return _regexp.test(v)
            }).map(function(v){
                return path.join(env.vendorFolder,env.distFolder,v)
            })
        }
        moduleObj.vendor.css && _chunks.push(moduleObj.vendor.css)
    }
    moduleObj.html.forEach(function(html) {
        htmls.push(new InjectHtmlPlugin({
            chunks: _chunks,
            filename: html,
            more:_more,
            customInject: [{
                start: '<!-- start:bundle-time -->',
                end: '<!-- end:bundle-time -->',
                content: helper.bundleTime()
            }]
        }))
    })
    _.extend(entry,moduleEntry)
});

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
                loader: 'happypack/loader?id=js'
            }, {
                test: /\.styl/,
                exclude: [node_modules_dir],
                loader: ExtractTextPlugin.extract('style','css!postcss!happypack/loader?id=stylus')
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
                    'file?outputPath='+ASSET_FONT_OUTPUT+'&hash=sha512&digest=hex&name=[hash:8].[ext]',
                ]
            }
        ]
    },
    fileLoader:{
        publicPath:function(url){
            var _prefix = /\.(jpg|png|bmp|gif)$/.test(url) ? path.join('..','..','..', env.assetFolder,env.distFolder, 'image') :
                path.join('..','..', env.assetFolder,env.distFolder, 'font')
            return path.join(_prefix, url)
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
        new ExtractTextPlugin(path.join('bundle', "[name]", env.distFolder, "[name]-[contenthash:8].css"), { allChunks: true }),
        new ChunkTransformPlugin({
            chunks: ['common'],
            test: /\.css/,
            filename: function(filename) { return path.join(env.vendorFolder, env.distFolder, path.basename(filename)) }
        })
    ],dllRefs,happypackPlugin, htmls)
}
