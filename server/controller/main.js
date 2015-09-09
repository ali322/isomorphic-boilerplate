'use strict'
var React = require("react");
var IndexComponent = React.createFactory(require("../../shared/index/component.jsx"));

var index = function(req, res) {
    var initialState = {
        resFetched: true,
        pagination: {
            count: 6
        }
    };
    var markup = React.renderToString(IndexComponent({
        initialState:initialState
    }));
    res.render("index", {
        //base:'view/index.html',
        //isNonStatic:false,
        //tags: 'content',
        content: markup,
        initialState:initialState
    });
};


module.exports = {
    index:index
};
