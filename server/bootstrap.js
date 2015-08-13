var express = require("express"),
    http = require("http"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override")
cons = require("consolidate");

var app = express();

var router = require("./router.js");

app.use('/client',express.static('client'));
app.use(bodyParser());
app.use(methodOverride());
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set("views", __dirname + '/view');
app.use(router);

module.exports = app;