'use strict';
var gulp = require("gulp"),
    nodemon = require("nodemon"),
    // livereload = require('gulp-livereload'),
    browserSync = require("browser-sync");
// require("./task/vendor-css.js")(env);
require("./task/webpack-inject.js");
require("./task/develop-server");
