let VueSSRPlugin = require('vue-ssr-webpack-plugin')

module.exports = [{
    name: 'client',
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    }
}]
