let app = require(process.env.NODE_ENV === 'production' ? './server/dist/bootstrap' : './server/bootstrap')
let port = process.env.APP_PORT || 3000

let server = require('nva-server')({
    log: false,
    mock: require('./.nva/mock/')
})

server.use(app.callback())

/** if not need mock api,just replace follow with
    app.listen(port,()=>{ console.log("server is running at %d", port) })
*/
server.listen(port, () => {
    console.log("server is running at %d", port)
})
