var express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    session = require("express-session"),
    cons = require("consolidate");

var app = express();

app.use('/client', express.static('client'));
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(session({
    name: "isomorphic-boilerplate.sid",
    secret: "isomorphic-boilerplate",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600000 * 12 //12 hour
    }
}))

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set("views", __dirname + '/../view');

if(process.env.NODE_ENV == "develop"){
    app = require("../task/develop-middleware")(app)
}
var router = require("./router.js");
app.use(router);
module.exports = app;
