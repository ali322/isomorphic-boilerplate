import supertest from 'supertest'
// import { expect } from 'chai'
require('babel-polyfill')

process.env.NODE_ENV = 'production'

let app = require('../../../server/bootstrap')

function request() {
  return supertest(app.listen())
}

describe('Routes', () => {
  describe('GET /', function () {
    this.timeout(500)
    it('should return 200', (done) => {
      request()
        .get('/')
        .expect(200, done)
    })
  })
})
