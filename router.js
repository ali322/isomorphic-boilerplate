'use strict'
var express = require('express');
var router = express.Router();

require('node-jsx').install({
    extension: '.jsx',
    harmony: true
});

let mainCtrl = require("./src/ctrl/main.js");
router.get("/",mainCtrl.index);

module.exports = router;
