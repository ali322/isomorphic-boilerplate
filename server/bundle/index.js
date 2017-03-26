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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

var _constant = __webpack_require__(5);

var constants = _interopRequireWildcard(_constant);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = {
    changeField: function changeField(_ref, param) {
        var commit = _ref.commit;

        commit(constants.CHANGE_FIELD, param);
    },
    requestRepo: function requestRepo(_ref2) {
        var commit = _ref2.commit;

        commit(constants.REQUEST_REPO);
    },
    responseRepo: function responseRepo(_ref3, res) {
        var commit = _ref3.commit;

        commit(constants.RESPONSE_REPO, { res: res });
    },
    failResponse: function failResponse(_ref4, err) {
        var commit = _ref4.commit;

        commit(constants.FAIL_RESPONSE, { err: err });
    },
    fetchRepo: function fetchRepo(_ref5, param) {
        var commit = _ref5.commit,
            dispatch = _ref5.dispatch;

        dispatch("requestRepo", param);
        return _axios2.default.get("https://api.github.com/events").then(function (ret) {
            dispatch('responseRepo', ret.data);
        });
    }
};

exports.default = actions;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANGE_FIELD = exports.CHANGE_FIELD = "CHANGE_FIELD";
var REQUEST_REPO = exports.REQUEST_REPO = "REQUEST_REPO";
var RESPONSE_REPO = exports.RESPONSE_REPO = "RESPONSE_REPO";
var FAIL_RESPONSE = exports.FAIL_RESPONSE = "FAIL_RESPONSE";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

var _constant = __webpack_require__(7);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var REQUEST_USER = exports.REQUEST_USER = 'REQUEST_USER';
var RESPONSE_USER = exports.RESPONSE_USER = 'RESPONSE_USER';

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.router = exports.store = undefined;

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _vuexRouterSync = __webpack_require__(25);

var _router = __webpack_require__(20);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(21);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = _vue2.default.component('container', {
    template: '<main><router-view></router-view></main>'
});

(0, _vuexRouterSync.sync)(_store2.default, _router2.default);

exports.store = _store2.default;
exports.router = _router2.default;


var app = new _vue2.default({
    router: _router2.default,
    store: _store2.default,
    render: function render(h) {
        return h('div', { attrs: { id: 'app' } }, [h('container')]);
    }
});

exports.default = app;

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(14),
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
/* 13 */,
/* 14 */
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
        _vm.$router.back()
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
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _app = __webpack_require__(10);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsdom = __webpack_require__(1).jsdom;
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

exports.default = function (ctx) {
    _app.router.push(ctx.url);
    var matchedComponents = _app.router.getMatchedComponents();
    if (!matchedComponents.length) {
        return Promise.reject({ code: 404 });
    }
    return Promise.all(matchedComponents).then(function () {
        var initialState = ctx.initialState;

        _app.store.replaceState(_extends({}, _app.store.state, initialState));
        return _app2.default;
    });
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.proto = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(3);

var _action = __webpack_require__(4);

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = '\n<div class="common-container">\n    <div class="panel panel-default">\n        <div class="panel-heading">Github Events</div>\n        <div class="panel-body">\n            <div class="input-group">\n                <input type="text" class="form-control" :value="repo" @input="handleChange" />\n                <span class="input-group-addon" @click="handleQuery"><i class="fa fa-search" /></span>\n            </div>\n        </div>\n        <div class="search-icon"></div>\n        <div class="events">\n            <div class="event" v-for="event in events" key={event.id}>\n                <div class="event-title">\n                    <img :src="event.actor.avatar_url" alt="" />\n                    <span>\n                    <p><router-link v-bind:to="{path:\'/user/\' + event.actor.display_login}">{{event.actor.display_login}}</router-link></p>\n                    <p>{{event.created_at}}</p>\n                    </span>\n                </div>\n                <p>{{event.type.replace(\'Event\',\'\').toLowerCase()}} In <b>{{event.repo.name}}</b></p>\n            </div>\n        </div>\n    </div>\n</div>\n';

var proto = exports.proto = {
    methods: {
        handleChange: function handleChange(e) {
            e && e.preventDefault();
            this.changeField({ name: "repo", value: e.target.value });
        },
        handleQuery: function handleQuery() {
            this.fetchRepo({
                repo: this.repo
            });
        }
    },
    created: function created() {
        this.fetchRepo({ repo: this.repo });
    },

    template: template
};

var Events = _vue2.default.component('events', _extends({}, proto, {
    methods: _extends({}, proto.methods, (0, _vuex.mapActions)(Object.keys(_action2.default))),
    computed: _extends({}, proto.computed, (0, _vuex.mapState)({
        repo: function repo(state) {
            return state.index.repo;
        },
        events: function events(state) {
            return state.index.events;
        },
        route: "route"
    }))
}));

exports.default = Events;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _action = __webpack_require__(4);

var _action2 = _interopRequireDefault(_action);

var _mutation = __webpack_require__(19);

var _mutation2 = _interopRequireDefault(_mutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    state: {
        events: [],
        repo: ""
    },
    actions: _action2.default,
    mutations: _mutation2.default
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mutations;

var _constant = __webpack_require__(5);

var constants = _interopRequireWildcard(_constant);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mutations = (_mutations = {}, _defineProperty(_mutations, constants.CHANGE_FIELD, function (state, payload) {
    var name = payload.name,
        value = payload.value;

    state[name] = value;
}), _defineProperty(_mutations, constants.REQUEST_REPO, function (state) {
    state.repoFetching = true;
}), _defineProperty(_mutations, constants.RESPONSE_REPO, function (state, payload) {
    state.events = payload.res;
    state.repoFetching = false;
    state.repoFetched = true;
}), _mutations);

exports.default = mutations;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(28);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _app = __webpack_require__(17);

var _app2 = _interopRequireDefault(_app);

var _app3 = __webpack_require__(22);

var _app4 = _interopRequireDefault(_app3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var routes = [{ path: '/', component: _app2.default }, { path: '/user/:user', component: _app4.default }, { path: '*', component: { template: '<div>not found</div>' } }];

var router = new _vueRouter2.default({
    mode: 'history',
    routes: routes
});

router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

exports.default = router;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__(3);

var _vuex2 = _interopRequireDefault(_vuex);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _module = __webpack_require__(18);

var _module2 = _interopRequireDefault(_module);

var _module3 = __webpack_require__(23);

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var modules = {
    index: _module2.default,
    user: _module4.default
};

var store = new _vuex2.default.Store({
    state: {},
    modules: modules
});

exports.default = store;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _app = __webpack_require__(12);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('User', _app2.default);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mutation = __webpack_require__(24);

var _mutation2 = _interopRequireDefault(_mutation);

var _action = __webpack_require__(6);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mutations;

var _constant = __webpack_require__(7);

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
/* 25 */
/***/ (function(module, exports) {

exports.sync = function (store, router, options) {
  var moduleName = (options || {}).moduleName || 'route'

  store.registerModule(moduleName, {
    state: cloneRoute(router.currentRoute),
    mutations: {
      'router/ROUTE_CHANGED': function (state, transition) {
        store.state[moduleName] = cloneRoute(transition.to, transition.from)
      }
    }
  })

  var isTimeTraveling = false
  var currentPath

  // sync router on store change
  store.watch(
    function (state) { return state[moduleName] },
    function (route) {
      if (route.fullPath === currentPath) {
        return
      }
      isTimeTraveling = true
      currentPath = route.fullPath
      router.push(route)
    },
    { sync: true }
  )

  // sync store on router navigation
  router.afterEach(function (to, from) {
    if (isTimeTraveling) {
      isTimeTraveling = false
      return
    }
    currentPath = to.fullPath
    store.commit('router/ROUTE_CHANGED', { to: to, from: from })
  })
}

function cloneRoute (to, from) {
  var clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  }
  if (from) {
    clone.from = cloneRoute(from)
  }
  return Object.freeze(clone)
}


/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = __webpack_require__(3);

var _action = __webpack_require__(6);

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    computed: _extends({}, (0, _vuex.mapState)({
        user: function user(state) {
            return state.user.user;
        },
        route: "route"
    })),
    methods: _extends({}, (0, _vuex.mapActions)(Object.keys(_action2.default))),
    created: function created() {
        this.fetchUser(this.route.params);
    }
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjliOWIwMTI3NWIwMDc0ZjFmNzMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNkb21cIiIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vLm52bS92ZXJzaW9ucy9ub2RlL3Y2LjEwLjAvbGliL34vbnZhL34vLjExLjIuMEB2dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWV4XCIiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvbW9kdWxlL2FjdGlvbi5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvbW9kdWxlL2NvbnN0YW50LmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS91c2VyL21vZHVsZS9hY3Rpb24uZXM2Iiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL2NvbnN0YW50LmVzNiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L2FwcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS91c2VyL21vZHVsZS9hcHAudnVlIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL2FwcC52dWU/NTY1NSIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9pbmRleC1zZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvbW9kdWxlL2FwcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9tb2R1bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvbW9kdWxlL211dGF0aW9uLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9hcHAuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvbXV0YXRpb24uZXM2Iiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9+Ly40LjEuMkB2dWV4LXJvdXRlci1zeW5jL2luZGV4LmpzIiwid2VicGFjazovLy9hcHAudnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS1yb3V0ZXJcIiJdLCJuYW1lcyI6WyJqc2RvbSIsInJlcXVpcmUiLCJnbG9iYWwiLCJkb2N1bWVudCIsIndpbmRvdyIsImRlZmF1bHRWaWV3IiwibmF2aWdhdG9yIiwicHVzaCIsImN0eCIsInVybCIsIm1hdGNoZWRDb21wb25lbnRzIiwiZ2V0TWF0Y2hlZENvbXBvbmVudHMiLCJsZW5ndGgiLCJQcm9taXNlIiwicmVqZWN0IiwiY29kZSIsImFsbCIsInRoZW4iLCJpbml0aWFsU3RhdGUiLCJyZXBsYWNlU3RhdGUiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERB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bnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDY5YjliMDEyNzViMDA3NGYxZjczIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc2RvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpzZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvLyB0aGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGVcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBzY29wZUlkLFxuICBjc3NNb2R1bGVzXG4pIHtcbiAgdmFyIGVzTW9kdWxlXG4gIHZhciBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgfHwge31cblxuICAvLyBFUzYgbW9kdWxlcyBpbnRlcm9wXG4gIHZhciB0eXBlID0gdHlwZW9mIHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICBpZiAodHlwZSA9PT0gJ29iamVjdCcgfHwgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGVzTW9kdWxlID0gcmF3U2NyaXB0RXhwb3J0c1xuICAgIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgfVxuXG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAoY29tcGlsZWRUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMucmVuZGVyID0gY29tcGlsZWRUZW1wbGF0ZS5yZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IGNvbXBpbGVkVGVtcGxhdGUuc3RhdGljUmVuZGVyRm5zXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSBzY29wZUlkXG4gIH1cblxuICAvLyBpbmplY3QgY3NzTW9kdWxlc1xuICBpZiAoY3NzTW9kdWxlcykge1xuICAgIHZhciBjb21wdXRlZCA9IE9iamVjdC5jcmVhdGUob3B0aW9ucy5jb21wdXRlZCB8fCBudWxsKVxuICAgIE9iamVjdC5rZXlzKGNzc01vZHVsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIG1vZHVsZSA9IGNzc01vZHVsZXNba2V5XVxuICAgICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vZHVsZSB9XG4gICAgfSlcbiAgICBvcHRpb25zLmNvbXB1dGVkID0gY29tcHV0ZWRcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXNNb2R1bGU6IGVzTW9kdWxlLFxuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvYWxpY2hlbi8ubnZtL3ZlcnNpb25zL25vZGUvdjYuMTAuMC9saWIvfi9udmEvfi8uMTEuMi4wQHZ1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVleFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZXhcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2F4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG52YXIgX2F4aW9zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F4aW9zKTtcblxudmFyIF9jb25zdGFudCA9IHJlcXVpcmUoXCIuL2NvbnN0YW50LmVzNlwiKTtcblxudmFyIGNvbnN0YW50cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jb25zdGFudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBhY3Rpb25zID0ge1xuICAgIGNoYW5nZUZpZWxkOiBmdW5jdGlvbiBjaGFuZ2VGaWVsZChfcmVmLCBwYXJhbSkge1xuICAgICAgICB2YXIgY29tbWl0ID0gX3JlZi5jb21taXQ7XG5cbiAgICAgICAgY29tbWl0KGNvbnN0YW50cy5DSEFOR0VfRklFTEQsIHBhcmFtKTtcbiAgICB9LFxuICAgIHJlcXVlc3RSZXBvOiBmdW5jdGlvbiByZXF1ZXN0UmVwbyhfcmVmMikge1xuICAgICAgICB2YXIgY29tbWl0ID0gX3JlZjIuY29tbWl0O1xuXG4gICAgICAgIGNvbW1pdChjb25zdGFudHMuUkVRVUVTVF9SRVBPKTtcbiAgICB9LFxuICAgIHJlc3BvbnNlUmVwbzogZnVuY3Rpb24gcmVzcG9uc2VSZXBvKF9yZWYzLCByZXMpIHtcbiAgICAgICAgdmFyIGNvbW1pdCA9IF9yZWYzLmNvbW1pdDtcblxuICAgICAgICBjb21taXQoY29uc3RhbnRzLlJFU1BPTlNFX1JFUE8sIHsgcmVzOiByZXMgfSk7XG4gICAgfSxcbiAgICBmYWlsUmVzcG9uc2U6IGZ1bmN0aW9uIGZhaWxSZXNwb25zZShfcmVmNCwgZXJyKSB7XG4gICAgICAgIHZhciBjb21taXQgPSBfcmVmNC5jb21taXQ7XG5cbiAgICAgICAgY29tbWl0KGNvbnN0YW50cy5GQUlMX1JFU1BPTlNFLCB7IGVycjogZXJyIH0pO1xuICAgIH0sXG4gICAgZmV0Y2hSZXBvOiBmdW5jdGlvbiBmZXRjaFJlcG8oX3JlZjUsIHBhcmFtKSB7XG4gICAgICAgIHZhciBjb21taXQgPSBfcmVmNS5jb21taXQsXG4gICAgICAgICAgICBkaXNwYXRjaCA9IF9yZWY1LmRpc3BhdGNoO1xuXG4gICAgICAgIGRpc3BhdGNoKFwicmVxdWVzdFJlcG9cIiwgcGFyYW0pO1xuICAgICAgICByZXR1cm4gX2F4aW9zMi5kZWZhdWx0LmdldChcImh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vZXZlbnRzXCIpLnRoZW4oZnVuY3Rpb24gKHJldCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goJ3Jlc3BvbnNlUmVwbycsIHJldC5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYWN0aW9ucztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9hY3Rpb24uZXM2XG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIENIQU5HRV9GSUVMRCA9IGV4cG9ydHMuQ0hBTkdFX0ZJRUxEID0gXCJDSEFOR0VfRklFTERcIjtcbnZhciBSRVFVRVNUX1JFUE8gPSBleHBvcnRzLlJFUVVFU1RfUkVQTyA9IFwiUkVRVUVTVF9SRVBPXCI7XG52YXIgUkVTUE9OU0VfUkVQTyA9IGV4cG9ydHMuUkVTUE9OU0VfUkVQTyA9IFwiUkVTUE9OU0VfUkVQT1wiO1xudmFyIEZBSUxfUkVTUE9OU0UgPSBleHBvcnRzLkZBSUxfUkVTUE9OU0UgPSBcIkZBSUxfUkVTUE9OU0VcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9jb25zdGFudC5lczZcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfYXhpb3MgPSByZXF1aXJlKCdheGlvcycpO1xuXG52YXIgX2F4aW9zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F4aW9zKTtcblxudmFyIF9jb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQuZXM2Jyk7XG5cbnZhciBjb25zdGFudHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY29uc3RhbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgYWN0aW9ucyA9IHtcbiAgICByZXF1ZXN0VXNlcjogZnVuY3Rpb24gcmVxdWVzdFVzZXIoX3JlZikge1xuICAgICAgICB2YXIgY29tbWl0ID0gX3JlZi5jb21taXQ7XG5cbiAgICAgICAgY29tbWl0KGNvbnN0YW50cy5SRVFVRVNUX1VTRVIpO1xuICAgIH0sXG4gICAgcmVzcG9uc2VVc2VyOiBmdW5jdGlvbiByZXNwb25zZVVzZXIoX3JlZjIsIHJldCkge1xuICAgICAgICB2YXIgY29tbWl0ID0gX3JlZjIuY29tbWl0O1xuXG4gICAgICAgIGNvbW1pdChjb25zdGFudHMuUkVTUE9OU0VfVVNFUiwge1xuICAgICAgICAgICAgcmV0OiByZXQsXG4gICAgICAgICAgICByZXNwb25kQXQ6IERhdGUubm93KClcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBmZXRjaFVzZXI6IGZ1bmN0aW9uIGZldGNoVXNlcihfcmVmMywgcGFyYW0pIHtcbiAgICAgICAgdmFyIGRpc3BhdGNoID0gX3JlZjMuZGlzcGF0Y2g7XG5cbiAgICAgICAgZGlzcGF0Y2goJ3JlcXVlc3RVc2VyJywgcGFyYW0pO1xuICAgICAgICByZXR1cm4gX2F4aW9zMi5kZWZhdWx0LmdldCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8nICsgcGFyYW0udXNlcikudGhlbihmdW5jdGlvbiAocmV0KSB7XG4gICAgICAgICAgICBkaXNwYXRjaCgncmVzcG9uc2VVc2VyJywgcmV0LmRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBhY3Rpb25zO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvYWN0aW9uLmVzNlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgUkVRVUVTVF9VU0VSID0gZXhwb3J0cy5SRVFVRVNUX1VTRVIgPSAnUkVRVUVTVF9VU0VSJztcbnZhciBSRVNQT05TRV9VU0VSID0gZXhwb3J0cy5SRVNQT05TRV9VU0VSID0gJ1JFU1BPTlNFX1VTRVInO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvY29uc3RhbnQuZXM2XG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYXhpb3NcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucm91dGVyID0gZXhwb3J0cy5zdG9yZSA9IHVuZGVmaW5lZDtcblxudmFyIF92dWUgPSByZXF1aXJlKCd2dWUnKTtcblxudmFyIF92dWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdnVlKTtcblxudmFyIF92dWV4Um91dGVyU3luYyA9IHJlcXVpcmUoJ3Z1ZXgtcm91dGVyLXN5bmMnKTtcblxudmFyIF9yb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcicpO1xuXG52YXIgX3JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXIpO1xuXG52YXIgX3N0b3JlID0gcmVxdWlyZSgnLi9zdG9yZScpO1xuXG52YXIgX3N0b3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0b3JlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNvbnRhaW5lciA9IF92dWUyLmRlZmF1bHQuY29tcG9uZW50KCdjb250YWluZXInLCB7XG4gICAgdGVtcGxhdGU6ICc8bWFpbj48cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz48L21haW4+J1xufSk7XG5cbigwLCBfdnVleFJvdXRlclN5bmMuc3luYykoX3N0b3JlMi5kZWZhdWx0LCBfcm91dGVyMi5kZWZhdWx0KTtcblxuZXhwb3J0cy5zdG9yZSA9IF9zdG9yZTIuZGVmYXVsdDtcbmV4cG9ydHMucm91dGVyID0gX3JvdXRlcjIuZGVmYXVsdDtcblxuXG52YXIgYXBwID0gbmV3IF92dWUyLmRlZmF1bHQoe1xuICAgIHJvdXRlcjogX3JvdXRlcjIuZGVmYXVsdCxcbiAgICBzdG9yZTogX3N0b3JlMi5kZWZhdWx0LFxuICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKGgpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgYXR0cnM6IHsgaWQ6ICdhcHAnIH0gfSwgW2goJ2NvbnRhaW5lcicpXSk7XG4gICAgfVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGFwcDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLm52bS92ZXJzaW9ucy9ub2RlL3Y2LjEwLjAvbGliL25vZGVfbW9kdWxlcy9udmEvbm9kZV9tb2R1bGVzLy4xMS4yLjBAdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLm52bS92ZXJzaW9ucy9ub2RlL3Y2LjEwLjAvbGliL25vZGVfbW9kdWxlcy9udmEvbm9kZV9tb2R1bGVzLy4xMS4yLjBAdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2FwcC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni4xMC4wL2xpYi9ub2RlX21vZHVsZXMvbnZhL25vZGVfbW9kdWxlcy8uMTEuMi4wQHZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYTZlNDEyOGFcXFwifSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8ubnZtL3ZlcnNpb25zL25vZGUvdjYuMTAuMC9saWIvbm9kZV9tb2R1bGVzL252YS9ub2RlX21vZHVsZXMvLjExLjIuMEB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHAudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL2FwcC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhcHAudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS91c2VyL21vZHVsZS9hcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb21tb24tY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmcgY29tbW9uLWhlYWRlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJhY2stYnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kcm91dGVyLmJhY2soKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIjxcIildKSwgX3ZtLl92KF92bS5fcyhfdm0udXNlci5pZCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVzZXItdGl0bGVcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLnVzZXIuYXZhdGFyX3VybCxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfYygncCcsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmxvZ2luKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5jcmVhdGVkX2F0KSldKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9hbGljaGVuLy5udm0vdmVyc2lvbnMvbm9kZS92Ni4xMC4wL2xpYi9+L252YS9+Ly4xMS4yLjBAdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1hNmU0MTI4YVwifSEvVXNlcnMvYWxpY2hlbi8ubnZtL3ZlcnNpb25zL25vZGUvdjYuMTAuMC9saWIvfi9udmEvfi8uMTEuMi4wQHZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL2FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhcHAsIHsgcm91dGVyLCBzdG9yZSB9IGZyb20gJy4vYXBwJ1xuXG5jb25zdCBqc2RvbSA9IHJlcXVpcmUoJ2pzZG9tJykuanNkb207XG5nbG9iYWwuZG9jdW1lbnQgPSBqc2RvbSgnPCFkb2N0eXBlIGh0bWw+PGh0bWw+PGJvZHk+PC9ib2R5PjwvaHRtbD4nKTtcbmdsb2JhbC53aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0Vmlldztcbmdsb2JhbC5uYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yO1xuXG5leHBvcnQgZGVmYXVsdCBjdHggPT4ge1xuICAgIHJvdXRlci5wdXNoKGN0eC51cmwpXG4gICAgY29uc3QgbWF0Y2hlZENvbXBvbmVudHMgPSByb3V0ZXIuZ2V0TWF0Y2hlZENvbXBvbmVudHMoKVxuICAgIGlmICghbWF0Y2hlZENvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7IGNvZGU6IDQwNCB9KVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobWF0Y2hlZENvbXBvbmVudHMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBsZXQgeyBpbml0aWFsU3RhdGUgfSA9IGN0eFxuICAgICAgICBzdG9yZS5yZXBsYWNlU3RhdGUoe1xuICAgICAgICAgICAgLi4uc3RvcmUuc3RhdGUsXG4gICAgICAgICAgICAuLi5pbml0aWFsU3RhdGVcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFwcFxuICAgIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9pbmRleC1zZXJ2ZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucHJvdG8gPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdnVlID0gcmVxdWlyZSgndnVlJyk7XG5cbnZhciBfdnVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Z1ZSk7XG5cbnZhciBfdnVleCA9IHJlcXVpcmUoJ3Z1ZXgnKTtcblxudmFyIF9hY3Rpb24gPSByZXF1aXJlKCcuL2FjdGlvbi5lczYnKTtcblxudmFyIF9hY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWN0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHRlbXBsYXRlID0gJ1xcbjxkaXYgY2xhc3M9XCJjb21tb24tY29udGFpbmVyXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPkdpdGh1YiBFdmVudHM8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgOnZhbHVlPVwicmVwb1wiIEBpbnB1dD1cImhhbmRsZUNoYW5nZVwiIC8+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIiBAY2xpY2s9XCJoYW5kbGVRdWVyeVwiPjxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCIgLz48L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtaWNvblwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50c1wiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudFwiIHYtZm9yPVwiZXZlbnQgaW4gZXZlbnRzXCIga2V5PXtldmVudC5pZH0+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudC10aXRsZVwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZXZlbnQuYWN0b3IuYXZhdGFyX3VybFwiIGFsdD1cIlwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPjxyb3V0ZXItbGluayB2LWJpbmQ6dG89XCJ7cGF0aDpcXCcvdXNlci9cXCcgKyBldmVudC5hY3Rvci5kaXNwbGF5X2xvZ2lufVwiPnt7ZXZlbnQuYWN0b3IuZGlzcGxheV9sb2dpbn19PC9yb3V0ZXItbGluaz48L3A+XFxuICAgICAgICAgICAgICAgICAgICA8cD57e2V2ZW50LmNyZWF0ZWRfYXR9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxwPnt7ZXZlbnQudHlwZS5yZXBsYWNlKFxcJ0V2ZW50XFwnLFxcJ1xcJykudG9Mb3dlckNhc2UoKX19IEluIDxiPnt7ZXZlbnQucmVwby5uYW1lfX08L2I+PC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2Plxcbic7XG5cbnZhciBwcm90byA9IGV4cG9ydHMucHJvdG8gPSB7XG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYW5kbGVDaGFuZ2U6IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgICAgICBlICYmIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRmllbGQoeyBuYW1lOiBcInJlcG9cIiwgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVRdWVyeTogZnVuY3Rpb24gaGFuZGxlUXVlcnkoKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoUmVwbyh7XG4gICAgICAgICAgICAgICAgcmVwbzogdGhpcy5yZXBvXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaFJlcG8oeyByZXBvOiB0aGlzLnJlcG8gfSk7XG4gICAgfSxcblxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxufTtcblxudmFyIEV2ZW50cyA9IF92dWUyLmRlZmF1bHQuY29tcG9uZW50KCdldmVudHMnLCBfZXh0ZW5kcyh7fSwgcHJvdG8sIHtcbiAgICBtZXRob2RzOiBfZXh0ZW5kcyh7fSwgcHJvdG8ubWV0aG9kcywgKDAsIF92dWV4Lm1hcEFjdGlvbnMpKE9iamVjdC5rZXlzKF9hY3Rpb24yLmRlZmF1bHQpKSksXG4gICAgY29tcHV0ZWQ6IF9leHRlbmRzKHt9LCBwcm90by5jb21wdXRlZCwgKDAsIF92dWV4Lm1hcFN0YXRlKSh7XG4gICAgICAgIHJlcG86IGZ1bmN0aW9uIHJlcG8oc3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5pbmRleC5yZXBvO1xuICAgICAgICB9LFxuICAgICAgICBldmVudHM6IGZ1bmN0aW9uIGV2ZW50cyhzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmluZGV4LmV2ZW50cztcbiAgICAgICAgfSxcbiAgICAgICAgcm91dGU6IFwicm91dGVcIlxuICAgIH0pKVxufSkpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFdmVudHM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9tb2R1bGUvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9hY3Rpb24gPSByZXF1aXJlKCcuL2FjdGlvbi5lczYnKTtcblxudmFyIF9hY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWN0aW9uKTtcblxudmFyIF9tdXRhdGlvbiA9IHJlcXVpcmUoJy4vbXV0YXRpb24uZXM2Jyk7XG5cbnZhciBfbXV0YXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbXV0YXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgcmVwbzogXCJcIlxuICAgIH0sXG4gICAgYWN0aW9uczogX2FjdGlvbjIuZGVmYXVsdCxcbiAgICBtdXRhdGlvbnM6IF9tdXRhdGlvbjIuZGVmYXVsdFxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfbXV0YXRpb25zO1xuXG52YXIgX2NvbnN0YW50ID0gcmVxdWlyZSgnLi9jb25zdGFudC5lczYnKTtcblxudmFyIGNvbnN0YW50cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jb25zdGFudCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBtdXRhdGlvbnMgPSAoX211dGF0aW9ucyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX211dGF0aW9ucywgY29uc3RhbnRzLkNIQU5HRV9GSUVMRCwgZnVuY3Rpb24gKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgdmFyIG5hbWUgPSBwYXlsb2FkLm5hbWUsXG4gICAgICAgIHZhbHVlID0gcGF5bG9hZC52YWx1ZTtcblxuICAgIHN0YXRlW25hbWVdID0gdmFsdWU7XG59KSwgX2RlZmluZVByb3BlcnR5KF9tdXRhdGlvbnMsIGNvbnN0YW50cy5SRVFVRVNUX1JFUE8sIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHN0YXRlLnJlcG9GZXRjaGluZyA9IHRydWU7XG59KSwgX2RlZmluZVByb3BlcnR5KF9tdXRhdGlvbnMsIGNvbnN0YW50cy5SRVNQT05TRV9SRVBPLCBmdW5jdGlvbiAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICBzdGF0ZS5ldmVudHMgPSBwYXlsb2FkLnJlcztcbiAgICBzdGF0ZS5yZXBvRmV0Y2hpbmcgPSBmYWxzZTtcbiAgICBzdGF0ZS5yZXBvRmV0Y2hlZCA9IHRydWU7XG59KSwgX211dGF0aW9ucyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG11dGF0aW9ucztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9tdXRhdGlvbi5lczZcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3Z1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xuXG52YXIgX3Z1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92dWUpO1xuXG52YXIgX3Z1ZVJvdXRlciA9IHJlcXVpcmUoJ3Z1ZS1yb3V0ZXInKTtcblxudmFyIF92dWVSb3V0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdnVlUm91dGVyKTtcblxudmFyIF9hcHAgPSByZXF1aXJlKCcuL21vZHVsZS9hcHAuanMnKTtcblxudmFyIF9hcHAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXBwKTtcblxudmFyIF9hcHAzID0gcmVxdWlyZSgnLi4vdXNlci9hcHAnKTtcblxudmFyIF9hcHA0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXBwMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbl92dWUyLmRlZmF1bHQudXNlKF92dWVSb3V0ZXIyLmRlZmF1bHQpO1xuXG52YXIgcm91dGVzID0gW3sgcGF0aDogJy8nLCBjb21wb25lbnQ6IF9hcHAyLmRlZmF1bHQgfSwgeyBwYXRoOiAnL3VzZXIvOnVzZXInLCBjb21wb25lbnQ6IF9hcHA0LmRlZmF1bHQgfSwgeyBwYXRoOiAnKicsIGNvbXBvbmVudDogeyB0ZW1wbGF0ZTogJzxkaXY+bm90IGZvdW5kPC9kaXY+JyB9IH1dO1xuXG52YXIgcm91dGVyID0gbmV3IF92dWVSb3V0ZXIyLmRlZmF1bHQoe1xuICAgIG1vZGU6ICdoaXN0b3J5JyxcbiAgICByb3V0ZXM6IHJvdXRlc1xufSk7XG5cbnJvdXRlci5iZWZvcmVFYWNoKGZ1bmN0aW9uICh0bywgZnJvbSwgbmV4dCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBuZXh0KCk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcm91dGVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvcm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF92dWV4ID0gcmVxdWlyZSgndnVleCcpO1xuXG52YXIgX3Z1ZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdnVleCk7XG5cbnZhciBfdnVlID0gcmVxdWlyZSgndnVlJyk7XG5cbnZhciBfdnVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Z1ZSk7XG5cbnZhciBfbW9kdWxlID0gcmVxdWlyZSgnLi9tb2R1bGUnKTtcblxudmFyIF9tb2R1bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kdWxlKTtcblxudmFyIF9tb2R1bGUzID0gcmVxdWlyZSgnLi4vdXNlci9tb2R1bGUnKTtcblxudmFyIF9tb2R1bGU0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW9kdWxlMyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbl92dWUyLmRlZmF1bHQudXNlKF92dWV4Mi5kZWZhdWx0KTtcblxudmFyIG1vZHVsZXMgPSB7XG4gICAgaW5kZXg6IF9tb2R1bGUyLmRlZmF1bHQsXG4gICAgdXNlcjogX21vZHVsZTQuZGVmYXVsdFxufTtcblxudmFyIHN0b3JlID0gbmV3IF92dWV4Mi5kZWZhdWx0LlN0b3JlKHtcbiAgICBzdGF0ZToge30sXG4gICAgbW9kdWxlczogbW9kdWxlc1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHN0b3JlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvc3RvcmUuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF92dWUgPSByZXF1aXJlKCd2dWUnKTtcblxudmFyIF92dWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdnVlKTtcblxudmFyIF9hcHAgPSByZXF1aXJlKCcuL21vZHVsZS9hcHAudnVlJyk7XG5cbnZhciBfYXBwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FwcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF92dWUyLmRlZmF1bHQuY29tcG9uZW50KCdVc2VyJywgX2FwcDIuZGVmYXVsdCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS91c2VyL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfbXV0YXRpb24gPSByZXF1aXJlKCcuL211dGF0aW9uLmVzNicpO1xuXG52YXIgX211dGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX211dGF0aW9uKTtcblxudmFyIF9hY3Rpb24gPSByZXF1aXJlKCcuL2FjdGlvbi5lczYnKTtcblxudmFyIF9hY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWN0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHN0YXRlOiB7XG4gICAgICAgIHVzZXI6IHt9XG4gICAgfSxcbiAgICBhY3Rpb25zOiBfYWN0aW9uMi5kZWZhdWx0LFxuICAgIG11dGF0aW9uczogX211dGF0aW9uMi5kZWZhdWx0XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX211dGF0aW9ucztcblxudmFyIF9jb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQuZXM2Jyk7XG5cbnZhciBjb25zdGFudHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY29uc3RhbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgbXV0YXRpb25zID0gKF9tdXRhdGlvbnMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9tdXRhdGlvbnMsIGNvbnN0YW50cy5SRVFVRVNUX1VTRVIsIGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHN0YXRlLnVzZXJGZXRjaGluZyA9IHRydWU7XG59KSwgX2RlZmluZVByb3BlcnR5KF9tdXRhdGlvbnMsIGNvbnN0YW50cy5SRVNQT05TRV9VU0VSLCBmdW5jdGlvbiAoc3RhdGUsIHBheWxvYWQpIHtcbiAgICBzdGF0ZS51c2VyID0gcGF5bG9hZC5yZXQ7XG4gICAgc3RhdGUudXNlckZldGNoaW5nID0gZmFsc2U7XG4gICAgc3RhdGUudXNlckZldGNoZWQgPSB0cnVlO1xufSksIF9tdXRhdGlvbnMpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBtdXRhdGlvbnM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS91c2VyL21vZHVsZS9tdXRhdGlvbi5lczZcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuc3luYyA9IGZ1bmN0aW9uIChzdG9yZSwgcm91dGVyLCBvcHRpb25zKSB7XG4gIHZhciBtb2R1bGVOYW1lID0gKG9wdGlvbnMgfHwge30pLm1vZHVsZU5hbWUgfHwgJ3JvdXRlJ1xuXG4gIHN0b3JlLnJlZ2lzdGVyTW9kdWxlKG1vZHVsZU5hbWUsIHtcbiAgICBzdGF0ZTogY2xvbmVSb3V0ZShyb3V0ZXIuY3VycmVudFJvdXRlKSxcbiAgICBtdXRhdGlvbnM6IHtcbiAgICAgICdyb3V0ZXIvUk9VVEVfQ0hBTkdFRCc6IGZ1bmN0aW9uIChzdGF0ZSwgdHJhbnNpdGlvbikge1xuICAgICAgICBzdG9yZS5zdGF0ZVttb2R1bGVOYW1lXSA9IGNsb25lUm91dGUodHJhbnNpdGlvbi50bywgdHJhbnNpdGlvbi5mcm9tKVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICB2YXIgaXNUaW1lVHJhdmVsaW5nID0gZmFsc2VcbiAgdmFyIGN1cnJlbnRQYXRoXG5cbiAgLy8gc3luYyByb3V0ZXIgb24gc3RvcmUgY2hhbmdlXG4gIHN0b3JlLndhdGNoKFxuICAgIGZ1bmN0aW9uIChzdGF0ZSkgeyByZXR1cm4gc3RhdGVbbW9kdWxlTmFtZV0gfSxcbiAgICBmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIGlmIChyb3V0ZS5mdWxsUGF0aCA9PT0gY3VycmVudFBhdGgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpc1RpbWVUcmF2ZWxpbmcgPSB0cnVlXG4gICAgICBjdXJyZW50UGF0aCA9IHJvdXRlLmZ1bGxQYXRoXG4gICAgICByb3V0ZXIucHVzaChyb3V0ZSlcbiAgICB9LFxuICAgIHsgc3luYzogdHJ1ZSB9XG4gIClcblxuICAvLyBzeW5jIHN0b3JlIG9uIHJvdXRlciBuYXZpZ2F0aW9uXG4gIHJvdXRlci5hZnRlckVhY2goZnVuY3Rpb24gKHRvLCBmcm9tKSB7XG4gICAgaWYgKGlzVGltZVRyYXZlbGluZykge1xuICAgICAgaXNUaW1lVHJhdmVsaW5nID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjdXJyZW50UGF0aCA9IHRvLmZ1bGxQYXRoXG4gICAgc3RvcmUuY29tbWl0KCdyb3V0ZXIvUk9VVEVfQ0hBTkdFRCcsIHsgdG86IHRvLCBmcm9tOiBmcm9tIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNsb25lUm91dGUgKHRvLCBmcm9tKSB7XG4gIHZhciBjbG9uZSA9IHtcbiAgICBuYW1lOiB0by5uYW1lLFxuICAgIHBhdGg6IHRvLnBhdGgsXG4gICAgaGFzaDogdG8uaGFzaCxcbiAgICBxdWVyeTogdG8ucXVlcnksXG4gICAgcGFyYW1zOiB0by5wYXJhbXMsXG4gICAgZnVsbFBhdGg6IHRvLmZ1bGxQYXRoLFxuICAgIG1ldGE6IHRvLm1ldGFcbiAgfVxuICBpZiAoZnJvbSkge1xuICAgIGNsb25lLmZyb20gPSBjbG9uZVJvdXRlKGZyb20pXG4gIH1cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoY2xvbmUpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9+Ly40LjEuMkB2dWV4LXJvdXRlci1zeW5jL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8c2NyaXB0PlxuaW1wb3J0IHsgbWFwU3RhdGUsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb24uZXM2J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcHV0ZWQ6e1xuICAgICAgICAuLi5tYXBTdGF0ZSh7XG4gICAgICAgICAgICB1c2VyOnN0YXRlPT5zdGF0ZS51c2VyLnVzZXIsXG4gICAgICAgICAgICByb3V0ZTpcInJvdXRlXCJcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgICAuLi5tYXBBY3Rpb25zKE9iamVjdC5rZXlzKGFjdGlvbnMpKVxuICAgIH0sXG4gICAgY3JlYXRlZCgpe1xuICAgICAgICB0aGlzLmZldGNoVXNlcih0aGlzLnJvdXRlLnBhcmFtcylcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cImNvbW1vbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIGNvbW1vbi1oZWFkZXJcIj48YnV0dG9uIGNsYXNzPVwiYmFjay1idXR0b25cIiBAY2xpY2s9XCIkcm91dGVyLmJhY2soKVwiPiZsdDs8L2J1dHRvbj57e3VzZXIuaWR9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXRpdGxlXCI+XG4gICAgICAgIDxpbWcgOnNyYz1cInVzZXIuYXZhdGFyX3VybFwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICA8cD57e3VzZXIubG9naW59fTwvcD5cbiAgICAgICAgPHA+e3t1c2VyLmNyZWF0ZWRfYXR9fTwvcD5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC52dWU/MjE4OGZhZWMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWUtcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlLXJvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9