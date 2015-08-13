var app = require("./server/bootstrap");

http.createServer(app).listen(3000, '127.0.0.1', function(err) {
    console.log("hyena start at %d", 3000);
}).on("error", function(err) {
    console.log("cant start hyena", err.code);
});
