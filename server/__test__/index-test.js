'use strict';
import supertest from "supertest";

describe("route /", function() {
    it("index route should response correct", function() {
        var app = require("../bootstrap");
        supertest(app).get("/").expect(200);
    })
});
