let app = require(process.env.NODE_ENV === 'production' ? './server/dist/bootstrap' : './server/bootstrap')

let port = process.env.APP_PORT || 3000;
app.listen(port, () => {
    console.log("server is running at %d", port);
});
