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
    vendorFile = env.vendor.path+ env.vendor.buildFolder + vendorChunkName + '.js';

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
        module.entyJs
    ];
    _.extend(entry, moduleEntry);
});
// console.log(entry);

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
            loader: 'react-hot!babel-loader'
        }, , {
            test: /\.html/,
            exclude: [node_modules_dir],
            loader: 'html'
        }, {
            test: /\.scss/,
            exclude: [node_modules_dir],
            loader:'style!css!sass!autoprefixer'
        }, {
            test: /\.css/,
            exclude: [node_modules_dir],
            loader:'style!css'
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
        path: path.join(__dirname, "../client"),
        filename: "[name].js",
        chunkFilename: "[id].chunk.js",
        publicPath: env.hmrPublicPath
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ vendorChunkName, /* filename= */ vendorFile),
    ]
}
