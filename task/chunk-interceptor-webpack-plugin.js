var path = require('path')

function ChunkInterceptorWebpackPlugin(options) {
    options.chunks = options.chunks || []
    if (!options.path) {
        throw new Error('ChunkInterceptorWebpackPlugin path argument required')
    }
    this.options = options
    this.runing = false
    if (typeof options.test === 'function') {
        this.test = options.test;
    } else if (typeof options.test === 'string') {
        this.test = function(filename) { return filename.indexOf(options.test) >= 0; }
    } else if (options.test instanceof RegExp) {
        this.test = function(filename) { return options.test.test(filename); }
    } else {
        throw new Error('Invalid test supplied to ChunkInterceptorWebpackPlugin')
    }
}

ChunkInterceptorWebpackPlugin.prototype.apply = function(compiler) {
    var that = this
    var options = this.options
    var selected = options.chunks
    var ouputPath = options.path
    var isFileMatched = this.test

    compiler.plugin('emit', function(compilation, callback) {
        if (that.runing) {
            callback()
            return
        }
        var namedChunks = compilation.namedChunks
        var assets = compilation.assets

        if (that.isHotUpdateCompilation(assets)) {
            callback()
            return
        }
        selected.forEach(function(v) {
            var _chunkFiles = []
            namedChunks[v].files.forEach(function(file, i) {
                if (isFileMatched(file) === false) {
                    delete assets[file]
                    return
                }
                var _filename = path.join(ouputPath, path.basename(file))
                _chunkFiles.push(_filename)
                assets[_filename] = compilation.assets[file]
                delete assets[file]
            })
            namedChunks[v].files = _chunkFiles
        })
        that.runing = true
        callback()
    })
}

ChunkInterceptorWebpackPlugin.prototype.isHotUpdateCompilation = function(assets) {
    return assets.length && assets.some(function(name) {
        return /\.hot-update\.js$/.test(name);
    })
}

module.exports = ChunkInterceptorWebpackPlugin
