let app = require('../../../../dist/server/bootstrap')

let server = require('nva-server')({
    log: false,
    mock: require('../../../../.nva/mock/')
})

server.use(app.callback())

module.exports = server.listen(3000)
