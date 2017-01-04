'use strict'
var Router = require("koa-router")
var router = new Router()

require("babel-polyfill");
require("babel-register")({
    extensions: [".es6", ".jsx"]
});

router.use(require("./middleware.es6").constants)

router.get("/",require("./controller/main.es6").index);
router.post("/repo",require("./controller/main.es6").repo);

router.all("*",require("./controller/main.es6").notFoundHandler);
router.use(require("./controller/main.es6").errorHandler);

module.exports = router;
