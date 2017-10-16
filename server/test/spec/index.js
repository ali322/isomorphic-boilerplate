import supertest from "supertest"
require("babel-polyfill")

process.env.NODE_ENV = "production"

let app = require("../../../server/bootstrap")

function request () {
  return supertest(app.listen())
}

describe("Routes", function () {
  describe("GET /", function () {
    this.timeout(5000)
    it("should return 200", function (done) {
      request()
        .get("/")
        .expect(200, done)
    })
  })
})
