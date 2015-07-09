var webpack = require('webpack'),
    path = require('path'),
    del = require("del"),
    _ = require("lodash");

// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var env = require('./environment.js')(path.join(__dirname, '../'));

/*build const*/
var vendorChunkName = 'react',
    vendorFile = env.vendor.path + env.vendor.distFolder + vendorChunkName + '-[hash].js';

/*build modules*/
var moduleEntries = {};
_.each(env.modules, function(module) {
    if (module.sourceCompiler.js !== vendorChunkName) {
        return;
    }
    del.sync(path.join(module.path, module.distFolder + '/*.*'));
    var moduleEntry = {};
    moduleEntry[module.name] = [module.entyJs, module.entyCss];
    _.extend(moduleEntries, moduleEntry)
});

/*build vendors*/
var vendorConfig = require(env.config.vendorConfig),
    vendors = [];
del.sync(env.vendor.path + "/" + env.vendor.distFolder + '/*.*');
_.each(vendorConfig[vendorChunkName].js, function(vendorJs) {
    vendors.push(vendorJs.path);
});
// _.each(vendorConfig[vendorChunkName].css, function(vendorCss) {
//     vendors.push(vendorCss);
// });

/*add modules and vendors to entry point*/
var entry = {};
entry[vendorChunkName] = vendors;
_.extend(entry, moduleEntries)

module.exports = {
    entry: entry,
    module: {
        loaders: [{
            test: /\.coffee$/,
            exclude: [node_modules_dir],
            loader: 'coffee'
        }, {
            test: /\.json/,
            exclude: [node_modules_dir],
            loader: 'json'
        }, {
            test: /\.(js|jsx)$/,
            exclude: [node_modules_dir],
            loader: 'babel-loader'
        }, , {
            test: /\.html/,
            exclude: [node_modules_dir],
            loader: 'html'
        }, {
            test: /\.scss/,
            exclude: [node_modules_dir],
            loader: ExtractTextPlugin.extract('style', 'css!sass!autoprefixer')
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
        extensions: ["", ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js", ".json", ".coffee"]
    },
    output: {
        path: "./",
        filename: "public/[name]/dist/[name]-[hash].js",
        chunkFilename: "public/[name]/dist/[id]-[hash].chunk.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ vendorChunkName, /* filename= */ vendorFile),
        new ExtractTextPlugin("public/[name]/dist/[name]-[hash].css")
    ]
}
