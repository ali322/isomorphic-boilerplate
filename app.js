var express = require("express"),
    http = require("http"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    cons = require("consolidate");

var app = express();

var router = require("./router.js");

app.use(express.static('public'));
app.use(bodyParser());
app.use(methodOverride());
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set("views", __dirname + '/view');
app.use(router);

http.createServer(app).listen(8081, function(err) {
    console.log("hyena start at %d", 8081);
}).on("error", function(err) {
    console.log("cant start hyena", err.code);
});
