'use strict';
var gulp = require("gulp"),
    nodemon = require("nodemon"),
    // livereload = require('gulp-livereload'),
    browserSync = require("browser-sync");
var env = require("./task/environment.js")(__dirname);
// require("./task/vendor-css.js")(env);
require("./task/webpack-inject.js")(env);
require("./task/develop-server");
