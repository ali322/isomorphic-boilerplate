var path = require('path'),
    webpack = require('webpack'),
    _ = require('lodash'),
    del = require('del')

var env = require("./environment")
var DEBUG = !(process.env.NODE_ENV === 'production')
var OUTPUT_PATH = DEBUG?path.join(env.clientPath, env.vendorFolder,env.buildFolder):path.join(env.clientPath, env.vendorFolder,env.distFolder)

var plugins = [
    new webpack.DllPlugin({
        name: '[name]',
        path: path.resolve(path.join(OUTPUT_PATH,'[name]-manifest.json')),
        context: path.resolve(env.clientPath)
    }),
    new webpack.optimize.OccurenceOrderPlugin()
]

if (!DEBUG) {
    plugins = plugins.concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "production"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: { comments: false }
        })
    ])
}

del.sync(OUTPUT_PATH)

_.each(env.vendors['js'],function(vendor,key){
    var _entry = {}
    _entry[key] = vendor
    webpack({
        devtool: '#eval-source-map',
        entry: _entry,
        output: {
            path:OUTPUT_PATH,
            filename: '[name].js',
            library: '[name]'
            // libraryTarget: 'umd',
            // umdNamedDefine: true
        },
        plugins:plugins
    }).run(function(err,stats){
        if(err)console.log(err)
    })
})
