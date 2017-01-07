var path = require('path')

var nextIdent = 0;

function ChunkTransformWebpackPlugin(options) {
    options.chunks = options.chunks || []
    if (!options.filename) {
        throw new Error('ChunkTransformWebpackPlugin filename argument required')
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
        throw new Error('Invalid test supplied to ChunkTransformWebpackPlugin')
    }
    this.ident = __filename + (nextIdent++);
}

ChunkTransformWebpackPlugin.prototype.apply = function(compiler) {
    var that = this
    var options = this.options
    var ident = this.ident
    var selected = options.chunks
    var chunkName = options.chunkName
    var transformer = options.filename
    var isFileMatched = this.test

    compiler.plugin('this-compilation', function(compilation) {
        compilation.plugin('optimize-chunks', function(chunks) {
            if (compilation[ident]) return;
            compilation[ident] = true;

            if (chunkName) {
                if (typeof chunkName !== 'string') {
                    throw new Error('Invalid chunkName supplied to ChunkTransformWebpackPlugin')
                }
                chunks = chunks.filter(function(chunk) {
                    return selected.indexOf(chunk.name) >= 0
                })
                var newChunk = chunks.find(function(chunk) {
                    return chunk.name === chunkName
                })
                if (!newChunk) {
                    newChunk = this.addChunk(chunkName)
                    newChunk.initial = newChunk.entry = true
                }
                var usedChunks = chunks.filter(function(chunk) {
                    return chunk !== newChunk
                })
                var commonModules = []
                usedChunks.forEach(function(chunk) {
                    chunk.modules.forEach(function(module) {
                        if (!module.userRequest) return
                        if (commonModules.indexOf(module) === -1 && isFileMatched(module.userRequest)) {
                            commonModules.push(module)
                        }
                    })
                    chunk.parents[newChunk]
                    newChunk.chunks.push(chunk)
                    if (chunk.entry) {
                        // chunk.entry = false
                    }
                })
                commonModules.forEach(function(module) {
                    usedChunks.forEach(module.removeChunk.bind(module))
                    newChunk.addModule(module)
                    module.addChunk(newChunk)
                })
                selected.push(chunkName)
                this.restartApplyPlugins()
            }
            // return true
        })
    })

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
                var _filename;
                if (typeof transformer === 'function') {
                    _filename = transformer(file)
                } else if (typeof transformer === 'string') {
                    _filename = transformer
                } else {
                    return
                }
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

ChunkTransformWebpackPlugin.prototype.isHotUpdateCompilation = function(assets) {
    return assets.length && assets.some(function(name) {
        return /\.hot-update\.js$/.test(name);
    })
}

module.exports = ChunkTransformWebpackPlugin
