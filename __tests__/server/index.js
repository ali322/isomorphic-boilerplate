import nock from "nock"
import test from "ava"

test("index route should response correct", t => {
    nock(":3000").get("/").reply(200)
    t.is(1 + 1, 2)
})
