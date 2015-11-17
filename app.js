var app = require("./server/bootstrap");
var listenPort = process.env.LISTEN_PORT || 3000;
app.listen(listenPort, function() {
    if(process.env.NODE_ENV === "production"){
        console.log("server listening at %d", listenPort);
    }
});
