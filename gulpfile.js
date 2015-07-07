var gulp = require("gulp"),
    nodemon = require("nodemon"),
    livereload = require("gulp-livereload");

gulp.task("nodemon", function() {
    livereload.listen();
    nodemon({
        script: "app.js",
        ignore: [
            ".git",
            "node_modules",
            ".idea",
            "src",
            "test",
            "public"
        ],
        ext: "js html"
    }).on("restart", function() {
        setTimeout(function() {
            livereload.changed('/');
        }, 500);
    }).on('exit', function() {
        console.log('nodemon exit');
    });
});
