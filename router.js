'use strict'
var express = require('express');

var router = express.Router();

let mainCtrl = require("./src/ctrl/main.js");
router.get("/",mainCtrl.index);

module.exports = router;
