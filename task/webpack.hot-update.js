var webpack = require('webpack'),
    path = require('path'),
    _ = require("lodash");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, '../node_modules');
var env = require('./environment.js')(path.join(__dirname, '../'));

/*build const*/
var buildFolder = 'build',
    // sourcePath = [],
    vendorChunkName = 'react',
    vendorFile ="vendor/" + env.vendor.buildFolder + vendorChunkName + '.js';

/*build modules*/
var entry = {};
_.each(env.modules, function(module) {
    if (module.sourceCompiler.js !== vendorChunkName) {
        return;
    }
    var moduleEntry = {};
    moduleEntry[module.name] = [
        'webpack-dev-server/client?http://localhost:9527',
        'webpack/hot/only-dev-server',
        module.entyJs,
        module.entyCss
    ];
    _.extend(entry, moduleEntry);
});

/*build vendors*/
var vendorConfig = require(env.config.vendorConfig),
    vendors = [];
_.each(vendorConfig[vendorChunkName].js, function(vendorJs) {
    vendors.push(vendorJs.path);
});
entry[vendorChunkName] = vendors;

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
            test: /\.(es6|jsx)$/,
            exclude: [node_modules_dir],
            loader: 'react-hot!babel-loader?optional=runtime'
        }, , {
            test: /\.html/,
            exclude: [node_modules_dir],
            loader: 'html'
        }, {
            test: /\.scss/,
            exclude: [node_modules_dir],
            // loader: ExtractTextPlugin.extract('style', 'css!sass!autoprefixer')
            loader: 'style!css!sass!autoprefixer'
        }, {
            test: /\.css/,
            exclude: [node_modules_dir],
            // loader: ExtractTextPlugin.extract('style', 'css!autoprefixer')
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
    devtool: "#source-map",
    resolve: {
        extensions: ["", ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js", ".json", ".coffee"]
    },
    output: {
        path: path.join(__dirname, "../client"),
        filename: "[name].js",
        chunkFilename: "[id].chunk.js",
        publicPath: env.hmrPublicPath
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new ExtractTextPlugin("[name].css")
        new webpack.optimize.CommonsChunkPlugin(vendorChunkName, vendorFile),
    ]
}
