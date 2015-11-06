'use strict';

var React = require("react");
var ReactDOMServer = require("react-dom/server");

var util = {
    getSharedComponent: function(componentName, entryFile) {
        entryFile = entryFile || "app.jsx";
        return React.createFactory(require("../../shared/chunk/" + componentName + "/" + entryFile));
    },
    getMarkupByComponent: function(component) {
        return ReactDOMServer.renderToString(component);
    },
    fetchAPI: function(apiName, param, isMock) {
        isMock = isMock || false;
        if (isMock === false) {
            return sharedUtil.apiRequest(config.api[apiName].url, param)
        } else {
            var mockPath = path.join(__dirname, "../__mockapi__/")
            return readFile(mockPath + apiName + ".json", "utf8").then(function(ret) {
                return JSON.parse(ret);
            });
        }
    }
}

module.exports = util;
