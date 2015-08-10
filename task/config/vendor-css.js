var gulp = require("gulp"),
    _ = require('lodash'),
    rename = require("gulp-rename"),
    minifyCss = require("gulp-minify-css"),
    concat = require("gulp-concat"),
    del = require("del");


module.exports = function(env) {
    var vendorConfig = require(env.config.vendorConfig),
        vendorChunkName = 'react',
        buildCssFile = vendorChunkName + '.css',
        timestamp = '-' + _.now(),
        buildPath = env.vendor.path + "/" + env.vendor.buildFolder,
        distPath = env.vendor.path + "/" + env.vendor.distFolder,
        vendors = [];
    del.sync(buildPath+ '/*.css');
    del.sync(distPath+ '/*.css');
    _.each(vendorConfig[vendorChunkName].css, function(vendorCss) {
        vendors.push(vendorCss.path);
    });

    gulp.task('vendor-css', function() {
        gulp.src(vendors)
            .pipe(concat(buildCssFile))
            .pipe(gulp.dest(buildPath))
            .pipe(minifyCss({
                keepBreaks: true
            }))
            .pipe(rename(function(path) {
                path.basename += timestamp;
            }))
            .pipe(gulp.dest(distPath));
    });
}