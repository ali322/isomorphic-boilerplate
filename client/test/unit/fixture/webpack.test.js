let { resolve } = require('path')

module.exports = {
    module: {
        rules: [{
            test: /\.(js|es6|jsx)/,
            loader: 'babel-loader',
            include: [resolve('test/unit/spec'), resolve('test/unit/fixture'), resolve()]
        }]
    },
    resolve: {
        alias: {
            "@": resolve("bundle")
        }
    }
}
