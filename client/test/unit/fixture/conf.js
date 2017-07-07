let { resolve } = require('path')

let entry = resolve('client', 'test', 'unit', 'fixture', 'setup.js')
let reportPath = resolve('client', 'test', 'unit', 'coverage')

let webpackConfig = {
    module: {
        rules: [{
            test: /\.(js|es6|jsx)/,
            loader: 'babel-loader',
            include: [
                resolve('client')
            ]
        }]
    },
    resolve: {
        alias: {
            "@": resolve('client')
        }
    }
}

module.exports = {
    entry,
    reportPath,
    webpack: webpackConfig
}
