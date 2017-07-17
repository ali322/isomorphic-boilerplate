const baseConf = {
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
}

module.exports = {
    type: "isomorphic",
    autocheck: ["vue", "vuex", "vue-router"],
    jsExt: ".js",
    cssExt: ".styl",
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
