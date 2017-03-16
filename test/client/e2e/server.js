let http = require('http')
let app = require('../../../server/dist/bootstrap')

let server = http.createServer(app.callback()).listen(3000)

module.exports = server
