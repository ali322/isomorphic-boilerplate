'use strict';
var app = require(process.env.NODE_ENV === 'production'?'./server/dist/bootstrap':'./server/bootstrap')
var listenPort = process.env.LISTEN_PORT || 3000;
app.listen(listenPort, function() {
    console.log("server is running at %d", listenPort);
});
