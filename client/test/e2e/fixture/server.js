let app = require('../../../../server/dist/bootstrap')

let server = require('nva-server')({
    log: false,
    mock: require('../../../../.nva/mock/')
})

server.use(app.callback())

module.exports = server.listen(3000)
