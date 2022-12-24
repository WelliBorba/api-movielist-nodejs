const preLoadCache = require('./preLoadCache.js')

class Init {
    start() {
        preLoadCache()
    }
}

module.exports = new Init()