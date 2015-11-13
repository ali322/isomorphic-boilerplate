'use strict';
var env = function(rootPath) {
    var path = require("path"),
        _ = require("lodash");;
    var env = {
        buildFolder: "build/",
        distFolder: "dist/",
        vendorPath: "./client/vendor/",
        pagePath: "./view/",
        hmrPath: "http://localhost:9527/hmr/"
    };

    var moduleConfig = require(path.join(rootPath, 'task/config/module.json')),
        modules = [];
    _.each(moduleConfig, function(moduleObj, moduleName) {
        var entryJS = moduleObj.entryJS !== undefined ? moduleObj.entryJS :
            moduleObj.path + moduleName + ".jsx";
        var entryCSS = moduleObj.entryCSS !== undefined ? moduleObj.entryCSS :
            moduleObj.path +"stylesheet/"+ moduleName + ".scss";
        var entryHtml = _.map(moduleObj.html, function(pageHtml) {
            pageHtml = env.pagePath + pageHtml;
            return pageHtml;
        });
        var module = _.extend(moduleObj, {
            name: moduleName,
            entryCSS: entryCSS,
            entryJS: entryJS,
            html: entryHtml
        });
        // console.log(module);
        modules.push(module);
    })
    env.modules = modules;

    var vendorConfig = require(path.join(rootPath, 'task/config/vendor.json')),
        vendors = [];
    _.each(vendorConfig, function(vendorJS, vendorName) {
        var vendor = {
            name: vendorName,
            entryJS: vendorJS,
            // entryCSS:vendorObj.css
            // entry:_.union(vendorObj.js,vendorObj.css)
        };
        vendors.push(vendor);
    });
    env.vendors = vendors;
    return env;
};

module.exports = env;
