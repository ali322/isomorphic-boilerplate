const baseConf = {
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
}

export default {
    type: "isomorphic",
    spa: true,
    entryJSExt: ".js",
    mockPath: '.nva/api',
    entryCSSExt: ".styl",
    beforeDev(config) {
        return baseConf
    },
    beforeBuild(config) {
        return baseConf
    },
    beforeVendor(config) {
        return config.map(v => {
            return v.name === 'js' ? baseConf : null
        })
    }
}
