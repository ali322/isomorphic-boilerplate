let { resolve } = require('path')

let entry = resolve('client', 'test', 'unit', 'fixture', 'setup.js')
let reportFolder = resolve('client', 'test', 'unit', 'coverage')

let webpackConfig = {
    resolve: {
        alias: {
            "@": resolve('client')
        }
    }
}

module.exports = {
    entry,
    reportFolder,
    webpack: webpackConfig
}
