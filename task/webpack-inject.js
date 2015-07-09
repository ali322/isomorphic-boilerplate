var gulp = require("gulp"),
    inject = require("gulp-inject"),
    // mapstream = require("map-stream"),
    path = require("path"),
    fs = require("fs"),
    del = require("del"),
    _ = require("lodash");

module.exports = function(env) {
    gulp.task("develop-webpack", function() {
        _.each(env.modules, function(module) {
            if (module.sourceCompiler.js !== 'react') {
                return;
            }
            var injectTarget = module.html,
                injectedPath = path.dirname(injectTarget),
                cssFiles = [],
                jsFiles = [],
                vendorCssFile = path.join(env.vendor.path, env.vendor.buildFolder + module.libBundle + '.css'),
                // extensionCssFile = path.join(env.extensions.path, '/' + env.extensions.buildFolder + '/' + module.name + '.css'),
                moduleCssFile = path.join(module.path, module.buildFolder + '/*.css'),
                vendorJsFile = path.join(env.vendor.path, env.vendor.buildFolder + module.libBundle + '.js'),
                moduleJsFile = path.join(module.path, module.buildFolder + '/*.js');
            // moduleJsFile = '/public/' + module.name + '.js';
            // console.log(moduleJsFile);
            cssFiles.push(vendorCssFile);
            // cssFiles.push(extensionCssFile);
            cssFiles.push(moduleCssFile);
            jsFiles.push(vendorJsFile);
            // console.log(module.name, extensionJsFile);
            jsFiles.push(moduleJsFile);
            jsFiles.push('./bower_components/binnng/debug.js/debug.js');
            // console.log(jsFiles)
            var sources = gulp.src(_.union(cssFiles, jsFiles), {
                read: false
            });
            gulp.src(injectTarget).pipe(inject(sources, {
                relative: true,
                transform: function(filepath) {
                    filepath = filepath.replace(/(\S)+public\//g,'./');
                    if (/vendor\/\S+.js/.test(filepath) === false && path.extname(filepath) === ".js") {
                        filepath = filepath.replace(/\S+build\//, env.hmrPublicPath);
                    }
                    return inject.transform.apply(inject.transform, arguments);
                }

            })).pipe(gulp.dest(injectedPath));
        });
    });
    gulp.task("deploy-webpack", function() {
        _.each(env.modules, function(module) {
            if (module.sourceCompiler.js !== 'react') {
                return;
            }
            var injectTarget = module.html,
                injectedPath = path.dirname(injectTarget),
                cssFiles = [],
                jsFiles = [],
                vendorCssFile = path.join(env.vendor.path, '/' + env.vendor.distFolder + '/' + module.libBundle + '-*.css'),
                // extensionCssFile = path.join(env.extensions.path, '/' + env.extensions.distFolder + '/' + module.name + '-*.css'),
                moduleCssFile = path.join(module.path, module.distFolder + '/*.css'),
                vendorJsFile = path.join(env.vendor.path, '/' + env.vendor.distFolder + '/' + module.libBundle + '-*.js'),
                moduleJsFile = path.join(module.path, module.distFolder + '/*.js');

            // cssFiles.push(path.join(env.lib.distPath, '/*.css'));
            cssFiles.push(vendorCssFile);
            // cssFiles.push(extensionCssFile);
            cssFiles.push(moduleCssFile);
            jsFiles.push(vendorJsFile);
            jsFiles.push(moduleJsFile);
            var sources = gulp.src(_.union(cssFiles, jsFiles), {
                read: false
            });
            gulp.src(injectTarget).pipe(inject(sources, {
                relative: true
            })).pipe(gulp.dest(injectedPath));
        });
    });
}
