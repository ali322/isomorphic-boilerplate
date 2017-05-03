import Vue from 'vue'
import "babel-polyfill"

Vue.config.productionTip = false

/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

const testContext = require.context('../spec',true,/\.js$/)
testContext.keys().forEach(testContext)

const srcContext = require.context('../../../',true,/\/module\/\w\.js$/)
srcContext.keys().forEach(srcContext)
