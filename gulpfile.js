var gulp = require("gulp"),
    nodemon = require("nodemon"),
    livereload = require("gulp-livereload");

var env = require("./task/environment.js")(__dirname);
require("./task/vendor-css.js")(env);
require("./task/webpack-inject.js")(env);

gulp.task("nodemon", function() {
    livereload.listen();
    nodemon({
        script: "app.js",
        ignore: [
            ".git",
            "node_modules",
            "shared",
            "test",
            "client"
        ],
        ext: "js html es6"
    }).on("restart", function() {
        setTimeout(function() {
            livereload.changed('/');
        }, 500);
    }).on('exit', function() {
        console.log('nodemon exit');
    });
});