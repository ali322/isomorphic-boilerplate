let spawn = require('cross-spawn')
let server = require('./server')

process.env.NODE_ENV = 'testing'

/* eslint-disable */
let opts = process.argv.slice(2)
if (opts.indexOf('--config') === -1) {
    opts = opts.concat(['--config', './test/e2e/runner.js'])
}
if (opts.indexOf('--env') === -1) {
    opts = opts.concat(['--env', 'chrome'])
}

let runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' })
runner.on('exit', (code) => {
    server.close()
    process.exit(code)
})

runner.on('error', (err) => {
    server.close()
    throw err
})
