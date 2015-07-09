var env = function(rootPath) {
    var path = require("path"),
        _ = require("lodash");;
    var env = {
        // htmlPath: './view',
        config: {
            // libConfig: path.join(rootPath, "task/config/lib.json"),
            vendorConfig: path.join(rootPath, 'task/config/vendor.json'),
            // extensionsConfig: path.join(rootPath, "task/config/extension.json"),
            moduleConfig: path.join(rootPath, "task/config/module.json")
        },
        vendor: {
            path: './public/vendor/',
            buildFolder: 'build/',
            distFolder: 'dist/'
        }
    };

    var moduleConfig = require(env.config.moduleConfig),
        modules = [];
    _.each(moduleConfig, function(moduleObj, moduleName) {
        var module = _.extend({
            name: moduleName,
            entyCss: moduleObj.path + "stylesheet/" + moduleName + ".scss",
            sourceCompiler: {
                js: 'coffee',
                css: 'scss'
            },
            path: moduleObj.path,
            buildFolder: 'build',
            distFolder: 'dist',
        }, moduleObj);
        // console.log(module);
        modules.push(module);
    })
    env.modules = modules;
    // console.log(env.modules);
    env.entyCssSet = [], env.entyJsSet = [];

    env.entyCssSet.push(path.join(rootPath, 'modules/common/stylesheet/*.scss'));
    _.each(env.modules, function(module) {
        env.entyCssSet.push(module.path + 'stylesheet/*.scss');

        // env.htmlSet = _.union(env.htmlSet, module.html);
        if (module.sourceCompiler.js == "react") {
            env.entyJsSet.push(module.path + module.buildFolder + '/*.*');
        }
    });
    // console.log(env.scss);
    // console.log(env.js);
    return env;
};

module.exports = env;
