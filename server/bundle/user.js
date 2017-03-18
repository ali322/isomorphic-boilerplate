module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("jsdom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

var _constant = __webpack_require__(8);

var constants = _interopRequireWildcard(_constant);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = {
    requestUser: function requestUser(_ref) {
        var commit = _ref.commit;

        commit(constants.REQUEST_USER);
    },
    responseUser: function responseUser(_ref2, ret) {
        var commit = _ref2.commit;

        commit(constants.RESPONSE_USER, {
            ret: ret,
            respondAt: Date.now()
        });
    },
    fetchUser: function fetchUser(_ref3, param) {
        var dispatch = _ref3.dispatch;

        dispatch('requestUser', param);
        return _axios2.default.get('https://api.github.com/users/' + param.user).then(function (ret) {
            dispatch('responseUser', ret.data);
        });
    }
};

exports.default = actions;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var REQUEST_USER = exports.REQUEST_USER = 'REQUEST_USER';
var RESPONSE_USER = exports.RESPONSE_USER = 'RESPONSE_USER';

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.store = undefined;

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _store = __webpack_require__(22);

var _store2 = _interopRequireDefault(_store);

var _app = __webpack_require__(13);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = _vue2.default.component('container', {
    components: {
        app: _app2.default
    },
    template: '<main><app /></main>'
});

exports.store = _store2.default;
exports.default = new _vue2.default({
    store: _store2.default,
    render: function render(h) {
        return h('div', { attrs: { id: 'app' } }, [h('container')]);
    }
});

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/alichen/Workspace/frontend/isomorphic-boilerplate/client/bundle/user/module/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "common-container"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading common-header"
  }, [_c('button', {
    staticClass: "back-button",
    on: {
      "click": function($event) {
        _vm.goback()
      }
    }
  }, [_vm._v("<")]), _vm._v(_vm._s(_vm.user.id))]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "user-title"
  }, [_c('img', {
    attrs: {
      "src": _vm.user.avatar_url,
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_c('p', [_vm._v(_vm._s(_vm.user.login))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.user.created_at))])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mutation = __webpack_require__(21);

var _mutation2 = _interopRequireDefault(_mutation);

var _action = __webpack_require__(7);

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    state: {
        user: {}
    },
    actions: _action2.default,
    mutations: _mutation2.default
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mutations;

var _constant = __webpack_require__(8);

var constants = _interopRequireWildcard(_constant);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mutations = (_mutations = {}, _defineProperty(_mutations, constants.REQUEST_USER, function (state) {
    state.userFetching = true;
}), _defineProperty(_mutations, constants.RESPONSE_USER, function (state, payload) {
    state.user = payload.ret;
    state.userFetching = false;
    state.userFetched = true;
}), _mutations);

exports.default = mutations;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__(2);

var _vuex2 = _interopRequireDefault(_vuex);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _module = __webpack_require__(20);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var modules = {
    user: _module2.default
};

var store = new _vuex2.default.Store({
    state: {},
    modules: modules
});

exports.default = store;

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = __webpack_require__(2);

var _action = __webpack_require__(7);

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    computed: _extends({}, (0, _vuex.mapState)({
        user: function user(state) {
            return state.user.user;
        }
    })),
    methods: _extends({}, (0, _vuex.mapActions)(Object.keys(_action2.default)), {
        goback: function goback() {
            history.back();
        }
    })
};

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _app = __webpack_require__(11);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsdom = __webpack_require__(1).jsdom;
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

exports.default = function (ctx) {
    var initialState = ctx.initialState;

    _app.store.replaceState(_extends({}, _app.store.state, initialState));
    return Promise.resolve(_app2.default);
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDBhZTcyYmEyNjExMTFhY2JmNWEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNkb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWV4XCIiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuLy5udm0vdmVyc2lvbnMvbm9kZS92Ni45LjQvbGliL34vbnZhL34vLjExLjEuNEB2dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL2FjdGlvbi5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvY29uc3RhbnQuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvYXBwLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL2FwcC52dWUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvYXBwLnZ1ZT8wMmYzIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL211dGF0aW9uLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS91c2VyL3N0b3JlLmpzIiwid2VicGFjazovLy9hcHAudnVlIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvdXNlci1zZXJ2ZXIuanMiXSwibmFtZXMiOlsiY29uc3RhbnRzIiwiYWN0aW9ucyIsInJlcXVlc3RVc2VyIiwiY29tbWl0IiwiUkVRVUVTVF9VU0VSIiwicmVzcG9uc2VVc2VyIiwicmV0IiwiUkVTUE9OU0VfVVNFUiIsInJlc3BvbmRBdCIsIkRhdGUiLCJub3ciLCJmZXRjaFVzZXIiLCJwYXJhbSIsImRpc3BhdGNoIiwiZ2V0IiwidXNlciIsInRoZW4iLCJkYXRhIiwiY29udGFpbmVyIiwiY29tcG9uZW50IiwiY29tcG9uZW50cyIsImFwcCIsInRlbXBsYXRlIiwic3RvcmUiLCJyZW5kZXIiLCJoIiwiYXR0cnMiLCJpZCIsInN0YXRlIiwibXV0YXRpb25zIiwidXNlckZldGNoaW5nIiwicGF5bG9hZCIsInVzZXJGZXRjaGVkIiwidXNlIiwibW9kdWxlcyIsIlN0b3JlIiwianNkb20iLCJyZXF1aXJlIiwiZ2xvYmFsIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJkZWZhdWx0VmlldyIsIm5hdmlnYXRvciIsImluaXRpYWxTdGF0ZSIsImN0eCIsInJlcGxhY2VTdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFD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LFlBRFksR0FDS0MsR0FETCxDQUNaRCxZQURZOztBQUVsQixlQUFNRSxZQUFOLGNBQ08sV0FBTWpCLEtBRGIsRUFFT2UsWUFGUDtBQUlBLFdBQU9HLFFBQVFDLE9BQVIsZUFBUDtBQUNILEMiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MGFlNzJiYTI2MTExMWFjYmY1YSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc2RvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpzZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWV4XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHJhd1NjcmlwdEV4cG9ydHMsXG4gIGNvbXBpbGVkVGVtcGxhdGUsXG4gIHNjb3BlSWQsXG4gIGNzc01vZHVsZXNcbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIC8vIGluamVjdCBjc3NNb2R1bGVzXG4gIGlmIChjc3NNb2R1bGVzKSB7XG4gICAgdmFyIGNvbXB1dGVkID0gT2JqZWN0LmNyZWF0ZShvcHRpb25zLmNvbXB1dGVkIHx8IG51bGwpXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICAgIG9wdGlvbnMuY29tcHV0ZWQgPSBjb21wdXRlZFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9hbGljaGVuLy5udm0vdmVyc2lvbnMvbm9kZS92Ni45LjQvbGliL34vbnZhL34vLjExLjEuNEB2dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50LmVzNidcblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgICByZXF1ZXN0VXNlcih7IGNvbW1pdCB9KSB7XG4gICAgICAgIGNvbW1pdChjb25zdGFudHMuUkVRVUVTVF9VU0VSKVxuICAgIH0sXG4gICAgcmVzcG9uc2VVc2VyKHsgY29tbWl0IH0sIHJldCkge1xuICAgICAgICBjb21taXQoY29uc3RhbnRzLlJFU1BPTlNFX1VTRVIsIHtcbiAgICAgICAgICAgIHJldCxcbiAgICAgICAgICAgIHJlc3BvbmRBdDogRGF0ZS5ub3coKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgZmV0Y2hVc2VyKHsgZGlzcGF0Y2ggfSwgcGFyYW0pIHtcbiAgICAgICAgZGlzcGF0Y2goJ3JlcXVlc3RVc2VyJyxwYXJhbSlcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke3BhcmFtLnVzZXJ9YCkudGhlbihyZXQgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3Jlc3BvbnNlVXNlcicscmV0LmRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS91c2VyL21vZHVsZS9hY3Rpb24uZXM2IiwiZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVNFUiA9ICdSRVFVRVNUX1VTRVInXG5leHBvcnQgY29uc3QgUkVTUE9OU0VfVVNFUiA9ICdSRVNQT05TRV9VU0VSJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvY29uc3RhbnQuZXM2IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcbmltcG9ydCBhcHAgZnJvbSAnLi9tb2R1bGUvYXBwLnZ1ZSdcblxubGV0IGNvbnRhaW5lciA9IFZ1ZS5jb21wb25lbnQoJ2NvbnRhaW5lcicsIHtcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIGFwcFxuICAgIH0sXG4gICAgdGVtcGxhdGU6IGA8bWFpbj48YXBwIC8+PC9tYWluPmBcbn0pXG5cbmV4cG9ydCB7IHN0b3JlIH1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZSh7XG4gICAgc3RvcmUsXG4gICAgcmVuZGVyKGgpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgYXR0cnM6IHsgaWQ6ICdhcHAnIH0gfSwgW2goJ2NvbnRhaW5lcicpXSlcbiAgICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9hcHAuanMiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8ubnZtL3ZlcnNpb25zL25vZGUvdjYuOS40L2xpYi9ub2RlX21vZHVsZXMvbnZhL25vZGVfbW9kdWxlcy8uMTEuMS40QHZ1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni45LjQvbGliL25vZGVfbW9kdWxlcy9udmEvbm9kZV9tb2R1bGVzLy4xMS4xLjRAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2FwcC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni45LjQvbGliL25vZGVfbW9kdWxlcy9udmEvbm9kZV9tb2R1bGVzLy4xMS4xLjRAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1hNmU0MTI4YVxcXCJ9IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni45LjQvbGliL25vZGVfbW9kdWxlcy9udmEvbm9kZV9tb2R1bGVzLy4xMS4xLjRAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYXBwLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS91c2VyL21vZHVsZS9hcHAudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYXBwLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvYXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29tbW9uLWNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsIHBhbmVsLWRlZmF1bHRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwYW5lbC1oZWFkaW5nIGNvbW1vbi1oZWFkZXJcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJiYWNrLWJ1dHRvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uZ29iYWNrKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCI8XCIpXSksIF92bS5fdihfdm0uX3MoX3ZtLnVzZXIuaWQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWJvZHlcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1c2VyLXRpdGxlXCJcbiAgfSwgW19jKCdpbWcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3JjXCI6IF92bS51c2VyLmF2YXRhcl91cmwsXG4gICAgICBcImFsdFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX2MoJ3AnLCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5sb2dpbikpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIuY3JlYXRlZF9hdCkpXSldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvYWxpY2hlbi8ubnZtL3ZlcnNpb25zL25vZGUvdjYuOS40L2xpYi9+L252YS9+Ly4xMS4xLjRAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/e1wiaWRcIjpcImRhdGEtdi1hNmU0MTI4YVwifSEvVXNlcnMvYWxpY2hlbi8ubnZtL3ZlcnNpb25zL25vZGUvdjYuOS40L2xpYi9+L252YS9+Ly4xMS4xLjRAdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvYXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG11dGF0aW9ucyBmcm9tICcuL211dGF0aW9uLmVzNidcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9uLmVzNidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXRlOiB7XG4gICAgICAgIHVzZXI6IHt9XG4gICAgfSxcbiAgICBhY3Rpb25zLFxuICAgIG11dGF0aW9uc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvaW5kZXguanMiLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudC5lczYnXG5cbmNvbnN0IG11dGF0aW9ucyA9IHtcbiAgICBbY29uc3RhbnRzLlJFUVVFU1RfVVNFUl0oc3RhdGUpIHtcbiAgICAgICAgc3RhdGUudXNlckZldGNoaW5nID0gdHJ1ZVxuICAgIH0sXG4gICAgW2NvbnN0YW50cy5SRVNQT05TRV9VU0VSXShzdGF0ZSxwYXlsb2FkKSB7XG4gICAgICAgIHN0YXRlLnVzZXIgPSBwYXlsb2FkLnJldFxuICAgICAgICBzdGF0ZS51c2VyRmV0Y2hpbmcgPSBmYWxzZVxuICAgICAgICBzdGF0ZS51c2VyRmV0Y2hlZCA9IHRydWVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG11dGF0aW9uc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvbXV0YXRpb24uZXM2IiwiaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IHVzZXIgZnJvbSAnLi9tb2R1bGUnXG5cblZ1ZS51c2UoVnVleClcblxuY29uc3QgbW9kdWxlcyA9IHtcbiAgICB1c2VyXG59XG5cbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xuICAgIHN0YXRlOiB7fSxcbiAgICBtb2R1bGVzXG59KVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9zdG9yZS5qcyIsIjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbi5lczYnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wdXRlZDp7XG4gICAgICAgIC4uLm1hcFN0YXRlKHtcbiAgICAgICAgICAgIHVzZXI6c3RhdGU9PnN0YXRlLnVzZXIudXNlclxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgIC4uLm1hcEFjdGlvbnMoT2JqZWN0LmtleXMoYWN0aW9ucykpLFxuICAgICAgICBnb2JhY2soKXtcbiAgICAgICAgICAgIGhpc3RvcnkuYmFjaygpXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cImNvbW1vbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIGNvbW1vbi1oZWFkZXJcIj48YnV0dG9uIGNsYXNzPVwiYmFjay1idXR0b25cIiBAY2xpY2s9XCJnb2JhY2soKVwiPiZsdDs8L2J1dHRvbj57e3VzZXIuaWR9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXRpdGxlXCI+XG4gICAgICAgIDxpbWcgOnNyYz1cInVzZXIuYXZhdGFyX3VybFwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICA8cD57e3VzZXIubG9naW59fTwvcD5cbiAgICAgICAgPHA+e3t1c2VyLmNyZWF0ZWRfYXR9fTwvcD5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC52dWU/ZmYxM2I5OTYiLCJpbXBvcnQgYXBwLCB7IHN0b3JlIH0gZnJvbSAnLi9hcHAnXG5cbmNvbnN0IGpzZG9tID0gcmVxdWlyZSgnanNkb20nKS5qc2RvbTtcbmdsb2JhbC5kb2N1bWVudCA9IGpzZG9tKCc8IWRvY3R5cGUgaHRtbD48aHRtbD48Ym9keT48L2JvZHk+PC9odG1sPicpO1xuZ2xvYmFsLndpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3O1xuZ2xvYmFsLm5hdmlnYXRvciA9IHdpbmRvdy5uYXZpZ2F0b3I7XG5cbmV4cG9ydCBkZWZhdWx0IGN0eCA9PiB7XG4gICAgbGV0IHsgaW5pdGlhbFN0YXRlIH0gPSBjdHhcbiAgICBzdG9yZS5yZXBsYWNlU3RhdGUoe1xuICAgICAgICAuLi5zdG9yZS5zdGF0ZSxcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlXG4gICAgfSlcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGFwcClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvdXNlci1zZXJ2ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9