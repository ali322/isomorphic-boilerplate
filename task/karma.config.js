var webpackConfig = require("./webpack.develop.js");

module.exports = function(config) {
    config.set({
        basePath: "../",
        frameworks: ['mocha'],
        files: [
            'client/__tests__/**/*.es6',
            'client/__tests__/**/*.json'
        ],
        preprocessors: {
            'client/__tests__/**/*.es6': ['webpack', 'sourcemap'],
            'client/__tests__/**/*.json': ['json_fixtures'],
            'shared/**/*.jsx': ['webpack', 'sourcemap'],
            'shared/**/*.es6': ['webpack',"coverage", 'sourcemap']
        },
        jsonFixturesPreprocessor:{
            stripPrefix:"client/__tests__/",
            variableName:'__initialstate__'
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
        autoWatch: true,
        browsers: ['jsdom'],
        singleRun: false
    });
};
