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
var autoPrefixer = require('autoprefixer')
var postcssImport = require('postcss-import')
var ChunkTransformPlugin = require("./chunk-transform-webpack-plugin")

/*build const*/
var entry = {};
var commonChunks = [];
var htmls = [];

/*build pages*/
var moduleEntries = {}
_.each(env.modules, function(moduleObj) {
    del.sync(path.join(env.clientPath, env.bundleFolder, moduleObj.path, env.distFolder + '/*.*'));
    var moduleEntry = {};
    moduleEntry[moduleObj.name] = [moduleObj.entryJS, moduleObj.entryCSS];
    _.extend(moduleEntries, moduleEntry)
    moduleObj.html.forEach(function(html) {
        var _chunks = [moduleObj.name]
        if (moduleObj.vendor) {
            moduleObj.vendor.js && _chunks.push(moduleObj.vendor.js)
            // moduleObj.vendor.css && _chunks.push(moduleObj.vendor.css)
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

/*build vendors*/
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
            // exclude: [node_modules_dir],
            loader: ExtractTextPlugin.extract('style', 'css!postcss')
            // loader: 'file-loader?name=vendor/dist/[name].[ext]!extract!css?modules&importLoaders=1!postcss'
        }, {
            test: /\.(png|jpg)$/,
            exclude: [node_modules_dir],
            loader: 'url?limit=25000'
        }]
    },
    postcss: function(webpack) {
        return [postcssImport({ addDependencyTo: true }), autoPrefixer()]
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
            // chunks: ['common'],
            test: /\.css/,
            chunkName: 'newChunk',
            filename: function(filename) { return path.join(env.vendorFolder, env.distFolder, path.basename(filename)) }
        })
    ], commonChunks, htmls)
}
