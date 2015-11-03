var chai = require("chai"),
    supertest = require("supertest"),
    expect = chai.expect;

describe("route /", function() {
    it("index route should response correct", function() {
        var app = require("../bootstrap");
        supertest(app).get("/").expect(200);
    })
});
