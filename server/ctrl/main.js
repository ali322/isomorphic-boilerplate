'use strict'
require('node-jsx').install();
var React = require("react");
var IndexComponent = React.createFactory(require("../../shared/index/component.jsx"));

let index = function(req, res) {
    var initialData = {
        resFetched: true,
        pagination: {
            count: 6
        }
    };
    var markup = React.renderToString(IndexComponent({
        initialData
    }));
    res.render("index", {
        //base:'view/index.html',
        //isNonStatic:false,
        //tags: 'content',
        content: markup,
        initialData
    });
};


module.exports = {
    index
};
