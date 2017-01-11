'use strict'
var os = require("os"),
    path = require('path'),
    fs = require('fs'),
    mime = require('mime'),
    HappyPack = require('happypack')

function getLanIP() {
    var interfaces = os.networkInterfaces();
    var IPv4 = '127.0.0.1';
    for (var key in interfaces) {
        interfaces[key].forEach(function(details) {
            if (details.family == 'IPv4' && /^en\d{1}$/.test(key) === true) {
                IPv4 = details.address;
            }
        });
    }
    return IPv4;
}

function bundleTime() {
    const dateObj = new Date()
    const year = dateObj.getFullYear()
    const month = dateObj.getMonth() + 1
    const date = dateObj.getDate()
    const hour = dateObj.getHours()
    const minute = dateObj.getMinutes()
    return "" + year + month + date + hour + minute
}

function urlResolver(originURL, from, to, input) {
    var _url = path.join(path.relative(from, input), originURL)
    var _file = path.resolve(path.join(input, originURL))
    if (/node_modules/.test(from)) {
        _url = originURL
        _file = path.resolve(from, _url)
        _file = _file.replace(/[\?#]\S+/, '')
    }
    var _stats
    try {
        _stats = fs.statSync(_file)
    } catch (e) {
        return _url
    }
    var mimeType = mime.lookup(_file)
    if (_stats.size <= 500) {
        _file = fs.readFileSync(_file)
        return "data:" + mimeType + ";base64," + _file.toString("base64")
    }
    return _url
}

function happypackPlugin(){
    var compilerThreadPool = HappyPack.ThreadPool({size:os.cpus().length})
    var _instances = [
        new HappyPack({
            id:'js',
            threadPool:compilerThreadPool,
            loaders:['babel?cacheDirectory=true'],
            verbose:false
        }),
        new HappyPack({
            id:'stylus',
            threadPool:compilerThreadPool,
            loaders:['stylus'],
            verbose:false
        })
    ]
    return _instances
}

module.exports = {
    getLanIP: getLanIP,
    bundleTime: bundleTime,
    urlResolver: urlResolver,
    happypackPlugin:happypackPlugin
}
