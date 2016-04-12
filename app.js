'use strict';
var app = require("./server/bootstrap");
if(process.env.NODE_ENV == "develop"){
    app = require("./task/develop-middleware")(app)
}
var router = require("./server/router.js");
app.use(router);
var listenPort = process.env.LISTEN_PORT || 3000;
app.listen(listenPort, function() {
    console.log("server listening at %d", listenPort);
});