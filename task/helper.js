'use strict'
var os = require("os");

function getLanIP(){
    var interfaces = os.networkInterfaces();
    var IPv4 = '127.0.0.1';
    for (var key in interfaces) {
      interfaces[key].forEach(function(details){
        if (details.family == 'IPv4' && /^en\d{1}$/.test(key) === true  ) {
            IPv4 = details.address;
        }
      });
    }
    return IPv4;
}

function bundleTime(){
    const dateObj = new Date()
    const year = dateObj.getFullYear()
    const month = dateObj.getMonth() + 1
    const date = dateObj.getDate()
    const hour = dateObj.getHours()
    const minute = dateObj.getMinutes()
    return ""+year+month+date+hour+minute
}

module.exports = {
    getLanIP:getLanIP,
    bundleTime:bundleTime
}