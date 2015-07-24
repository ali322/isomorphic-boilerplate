'use strict'
// require('node-jsx').install();
// var React = require("react");
// var User = React.createFactory(require("../../public/index/index.jsx"));

let index = function(req, res) {
    var markup = React.renderToString(User());
    res.render("index", {
        //base:'view/index.html',
        //isNonStatic:false,
        //tags: 'content',
        content:"333"
    });
};


module.exports = {
    index
};
