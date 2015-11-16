var webpackConfig = require("./webpack.develop.js");

module.exports = function(config) {
    config.set({
        basePath: "../",
        frameworks: ['mocha'],
        files: [
            'client/__tests__/*.es6',
        ],
        preprocessors: {
            'client/__tests__/*.es6': ['webpack', 'sourcemap'],
            'client/__tests__/initialstate/*.json': ['webpack'],
            'shared/**/*.jsx': ['webpack', 'sourcemap'],
            'shared/**/*.es6': ['webpack',"coverage", 'sourcemap']
        },
        webpack: {
            resolve: webpackConfig.resolve,
            module: webpackConfig.module
        },
        webpackMiddleware: {
            noInfo: true
        },
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type: 'lcov',
            dir: 'client/__coverage__/'
        },
        port: 7000,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['jsdom'],
        singleRun: true
    });
};
