var webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    _ = require("lodash");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var env = require('./environment');
var InjectHtmlPlugin = require("inject-html-webpack-plugin")
var autoPrefixer = require('autoprefixer')
var postcssImport = require('postcss-import')
var cssURL = require('postcss-url')
var helper = require('./helper')
var happypackPlugin = helper.happypackPlugin()

/** build variables*/
var entry = {};
var commonChunks = [];
var htmls = [];
var hmrPath = "{{baseURL}}:" + env.hmrPort + env.hmrPath
var reloaderBasePath = "{{baseURL}}:" + env.reloaderPort
var ASSET_INPUT = path.join(env.clientPath,env.assetFolder)

/** build vendors*/
var dllRefs = []
var vendorJS = fs.readdirSync(path.join(env.clientPath,env.vendorFolder,env.distFolder))
_.each(env.vendors['js'], function(vendor, key) {
    var _manifest = require(path.join("..",env.clientPath,env.vendorFolder,key+'-manifest.json'))
    dllRefs.push(new webpack.DllReferencePlugin({
        context:path.resolve(env.clientPath),
        manifest:_manifest
    }))
});
_.each(env.vendors['css'], function(vendor, key) {
    entry[key] = vendor;
})

_.each(env.modules, function(moduleObj) {
    var moduleEntry = {};
    moduleEntry[moduleObj.name] = [
        'webpack-dev-server/client?' + env.hmrBasePath,
        "webpack/hot/only-dev-server",
        moduleObj.entryJS,
        moduleObj.entryCSS
    ];
    var _chunks = [moduleObj.name]
    var _more = {js:[]}
    if (moduleObj.vendor) {
        if(moduleObj.vendor.js){
            _more.js = vendorJS.filter(function(v){
                var _regexp = new RegExp(moduleObj.vendor.js+"-\\w+\\.js$")
                return _regexp.test(v)
            }).map(function(v){
                return path.join(env.vendorFolder,env.distFolder,v)
            })
        }
        // moduleObj.vendor.js && _chunks.push(moduleObj.vendor.js)
        moduleObj.vendor.css && _chunks.push(moduleObj.vendor.css)
    }
    moduleObj.html.forEach(function(html) {
        htmls.push(new InjectHtmlPlugin({
            processor: hmrPath,
            chunks: _chunks,
            filename: html,
            more:_more,
            customInject: [{
                start: '<!-- start:browser-sync -->',
                end: '<!-- end:browser-sync -->',
                content: '<script src="' + reloaderBasePath + '/bs/browser-sync-client.js"></script>'
            }]
        }))
    })
    _.extend(entry, moduleEntry);
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
            loader: "react-hot!happypack/loader?id=js"
            // query: babelrc
        }, {
            test: /\.styl/,
            exclude: [node_modules_dir],
            loader: 'style!css!postcss!happypack/loader?id=stylus'
        }, {
            test: /\.css/,
            loader: 'style!css'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.(png|jpg)$/,
            exclude: [node_modules_dir],
            loader: 'url?limit=25000'
        }]
    },
    postcss: function(webpack) {
        return [postcssImport({ addDependencyTo: true }),
            autoPrefixer(),
            cssURL({
                url: function(originURL, decl, from, dirname, to, options, result) {
                    return helper.urlResolver(originURL,from,to,ASSET_INPUT)
                }
            })
        ]
    },
    devtool: "#eval-source-map",
    watch: true,
    resolve: {
        extensions: ["", ".js", ".json", ".es6", ".jsx"]
    },
    output: {
        path: path.join(__dirname, '..', env.clientPath),
        filename: "[name].js",
        chunkFilename: "[id].chunk.js",
        publicPath: env.hmrBasePath + env.hmrPath
    },
    plugins: _.union([
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],dllRefs,happypackPlugin,commonChunks, htmls)
}
