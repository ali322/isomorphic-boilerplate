var gulp = require("gulp"),
    nodemon = require("nodemon"),
    livereload = require('gulp-livereload');

var env = require("./task/environment.js")(__dirname);
// require("./task/vendor-css.js")(env);
require("./task/webpack-inject.js")(env);

gulp.task("nodemon", function() {
    livereload.listen();
    nodemon({
        delay: "500ms",
        script: "app.js",
        execMap: {
            "js": "node"
        },
        env:{
            "NODE_ENV":"develop"
        },
        verbose: true,
        stdout:false,
        // ignore: [".git","node_modules","client","shared","task"],
        watch: ["server/controller", "server/lib", "server/*.js"],
        ext: "js html json es6"
    }).on("readable", function(data) {
        this.stdout.on('data', function(chunk) {
            if (/server listening at/.test(chunk)) {
                livereload.reload();
            }
            process.stdout.write(chunk);
        });
        this.stderr.pipe(process.stderr);
    });
});
