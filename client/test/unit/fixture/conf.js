let { resolve } = require('path')

let entry = resolve('client', 'test', 'unit', 'fixture', 'setup.js')
let reportPath = resolve('client', 'test', 'unit', 'coverage')

let webpackConfig = {
    resolve: {
        alias: {
            "@": resolve('client')
        }
    }
}

module.exports = {
    entry,
    reportPath,
    sourcePath: resolve('client'),
    webpack: webpackConfig
}
