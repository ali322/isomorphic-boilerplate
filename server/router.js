'use strict'
var express = require('express');

var router = express.Router();

require("babel-core/register")({
    optional:["runtime"],
    extensions: [".es6", ".jsx"]
});

var mainCtrl = require("./ctrl/main.js");
router.get("/",mainCtrl.index);

module.exports = router;
