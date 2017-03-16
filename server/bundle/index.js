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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
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

var _vuexRouterSync = __webpack_require__(23);

var _router = __webpack_require__(18);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(19);

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
  __webpack_require__(25),
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _action = __webpack_require__(4);

var _action2 = _interopRequireDefault(_action);

var _mutation = __webpack_require__(17);

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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(26);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _app = __webpack_require__(15);

var _app2 = _interopRequireDefault(_app);

var _app3 = __webpack_require__(20);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__(3);

var _vuex2 = _interopRequireDefault(_vuex);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _module = __webpack_require__(16);

var _module2 = _interopRequireDefault(_module);

var _module3 = __webpack_require__(21);

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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mutation = __webpack_require__(22);

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
/* 22 */
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
/* 23 */
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
/* 24 */,
/* 25 */
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
/* 26 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 27 */,
/* 28 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGUxZjllN2M5MWQ1ZmIyMDIzZDAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNkb21cIiIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vLm52bS92ZXJzaW9ucy9ub2RlL3Y2LjkuNC9saWIvfi9udmEvfi8uMTEuMS40QHZ1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZXhcIiIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9tb2R1bGUvYWN0aW9uLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9tb2R1bGUvY29uc3RhbnQuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL2FjdGlvbi5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvY29uc3RhbnQuZXM2Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvYXBwLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL2FwcC52dWUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvYXBwLnZ1ZT8wMmYzIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9hcHAuanMiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvbW9kdWxlL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9tdXRhdGlvbi5lczYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvcm91dGVyLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L3N0b3JlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvYXBwLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL2luZGV4LmpzIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL211dGF0aW9uLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvfi8uNC4xLjJAdnVleC1yb3V0ZXItc3luYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWUtcm91dGVyXCIiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvaW5kZXgtc2VydmVyLmpzIl0sIm5hbWVzIjpbImNvbnN0YW50cyIsImFjdGlvbnMiLCJjaGFuZ2VGaWVsZCIsInBhcmFtIiwiY29tbWl0IiwiQ0hBTkdFX0ZJRUxEIiwicmVxdWVzdFJlcG8iLCJSRVFVRVNUX1JFUE8iLCJyZXNwb25zZVJlcG8iLCJyZXMiLCJSRVNQT05TRV9SRVBPIiwiZmFpbFJlc3BvbnNlIiwiZXJyIiwiRkFJTF9SRVNQT05TRSIsImZldGNoUmVwbyIsImRpc3BhdGNoIiwiZ2V0IiwidGhlbiIsInJldCIsImRhdGEiLCJyZXF1ZXN0VXNlciIsIlJFUVVFU1RfVVNFUiIsInJlc3BvbnNlVXNlciIsIlJFU1BPTlNFX1VTRVIiLCJyZXNwb25kQXQiLCJEYXRlIiwibm93IiwiZmV0Y2hVc2VyIiwidXNlciIsImNvbnRhaW5lciIsImNvbXBvbmVudCIsInRlbXBsYXRlIiwic3RvcmUiLCJyb3V0ZXIiLCJhcHAiLCJyZW5kZXIiLCJoIiwiYXR0cnMiLCJpZCIsInByb3RvIiwibWV0aG9kcyIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVF1ZXJ5IiwicmVwbyIsImNyZWF0ZWQiLCJFdmVudHMiLCJPYmplY3QiLCJrZXlzIiwiY29tcHV0ZWQiLCJzdGF0ZSIsImluZGV4IiwiZXZlbnRzIiwicm91dGUiLCJtdXRhdGlvbnMiLCJwYXlsb2FkIiwicmVwb0ZldGNoaW5nIiwicmVwb0ZldGNoZWQiLCJ1c2UiLCJyb3V0ZXMiLCJwYXRoIiwibW9kZSIsImJlZm9yZUVhY2giLCJ0byIsImZyb20iLCJuZXh0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJtb2R1bGVzIiwiU3RvcmUiLCJ1c2VyRmV0Y2hpbmciLCJ1c2VyRmV0Y2hlZCIsImpzZG9tIiwicmVxdWlyZSIsImdsb2JhbCIsImRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJuYXZpZ2F0b3IiLCJwdXNoIiwiY3R4IiwidXJsIiwibWF0Y2hlZENvbXBvbmVudHMiLCJnZXRNYXRjaGVkQ29tcG9uZW50cyIsImxlbmd0aCIsIlByb21pc2UiLCJyZWplY3QiLCJjb2RlIiwiYWxsIiwiaW5pdGlhbFN0YXRlIiwicmVwbGFjZVN0YXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsZ0M7Ozs7OztBQ0FBLGtDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7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QUF2QixFQUErQjtBQUMzQixlQUFPQyxRQUFRQyxNQUFSLENBQWUsRUFBRUMsTUFBTSxHQUFSLEVBQWYsQ0FBUDtBQUNIO0FBQ0QsV0FBT0YsUUFBUUcsR0FBUixDQUFZTixpQkFBWixFQUErQnBFLElBQS9CLENBQW9DLFlBQU07QUFBQSxZQUN2QzJFLFlBRHVDLEdBQ3RCVCxHQURzQixDQUN2Q1MsWUFEdUM7O0FBRTdDLG1CQUFNQyxZQUFOLGNBQ08sV0FBTXZDLEtBRGIsRUFFT3NDLFlBRlA7QUFJQTtBQUNILEtBUE0sQ0FBUDtBQVFILEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGUxZjllN2M5MWQ1ZmIyMDIzZDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzZG9tXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwianNkb21cIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBPYmplY3QuY3JlYXRlKG9wdGlvbnMuY29tcHV0ZWQgfHwgbnVsbClcbiAgICBPYmplY3Qua2V5cyhjc3NNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtb2R1bGUgPSBjc3NNb2R1bGVzW2tleV1cbiAgICAgIGNvbXB1dGVkW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtb2R1bGUgfVxuICAgIH0pXG4gICAgb3B0aW9ucy5jb21wdXRlZCA9IGNvbXB1dGVkXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL2FsaWNoZW4vLm52bS92ZXJzaW9ucy9ub2RlL3Y2LjkuNC9saWIvfi9udmEvfi8uMTEuMS40QHZ1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVleFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZXhcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudC5lczZcIlxuXG5jb25zdCBhY3Rpb25zID0ge1xuICAgIGNoYW5nZUZpZWxkKHsgY29tbWl0IH0sIHBhcmFtKSB7XG4gICAgICAgIGNvbW1pdChjb25zdGFudHMuQ0hBTkdFX0ZJRUxELCBwYXJhbSlcbiAgICB9LFxuICAgIHJlcXVlc3RSZXBvKHsgY29tbWl0IH0pIHtcbiAgICAgICAgY29tbWl0KGNvbnN0YW50cy5SRVFVRVNUX1JFUE8pXG4gICAgfSxcbiAgICByZXNwb25zZVJlcG8oeyBjb21taXQgfSwgcmVzKSB7XG4gICAgICAgIGNvbW1pdChjb25zdGFudHMuUkVTUE9OU0VfUkVQTywgeyByZXMgfSlcbiAgICB9LFxuICAgIGZhaWxSZXNwb25zZSh7IGNvbW1pdCB9LCBlcnIpIHtcbiAgICAgICAgY29tbWl0KGNvbnN0YW50cy5GQUlMX1JFU1BPTlNFLCB7IGVyciB9KVxuICAgIH0sXG4gICAgZmV0Y2hSZXBvKHsgY29tbWl0LCBkaXNwYXRjaCB9LCBwYXJhbSkge1xuICAgICAgICBkaXNwYXRjaChcInJlcXVlc3RSZXBvXCIsIHBhcmFtKVxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2FwaS5naXRodWIuY29tL2V2ZW50c2ApLnRoZW4ocmV0ID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdyZXNwb25zZVJlcG8nLCByZXQuZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9hY3Rpb24uZXM2IiwiZXhwb3J0IGNvbnN0IENIQU5HRV9GSUVMRCA9IFwiQ0hBTkdFX0ZJRUxEXCJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1JFUE8gPSBcIlJFUVVFU1RfUkVQT1wiXG5leHBvcnQgY29uc3QgUkVTUE9OU0VfUkVQTyA9IFwiUkVTUE9OU0VfUkVQT1wiXG5leHBvcnQgY29uc3QgRkFJTF9SRVNQT05TRSA9IFwiRkFJTF9SRVNQT05TRVwiXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9tb2R1bGUvY29uc3RhbnQuZXM2IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnQuZXM2J1xuXG5jb25zdCBhY3Rpb25zID0ge1xuICAgIHJlcXVlc3RVc2VyKHsgY29tbWl0IH0pIHtcbiAgICAgICAgY29tbWl0KGNvbnN0YW50cy5SRVFVRVNUX1VTRVIpXG4gICAgfSxcbiAgICByZXNwb25zZVVzZXIoeyBjb21taXQgfSwgcmV0KSB7XG4gICAgICAgIGNvbW1pdChjb25zdGFudHMuUkVTUE9OU0VfVVNFUiwge1xuICAgICAgICAgICAgcmV0LFxuICAgICAgICAgICAgcmVzcG9uZEF0OiBEYXRlLm5vdygpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBmZXRjaFVzZXIoeyBkaXNwYXRjaCB9LCBwYXJhbSkge1xuICAgICAgICBkaXNwYXRjaCgncmVxdWVzdFVzZXInLHBhcmFtKVxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7cGFyYW0udXNlcn1gKS50aGVuKHJldCA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCgncmVzcG9uc2VVc2VyJyxyZXQuZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL2FjdGlvbi5lczYiLCJleHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSID0gJ1JFUVVFU1RfVVNFUidcbmV4cG9ydCBjb25zdCBSRVNQT05TRV9VU0VSID0gJ1JFU1BPTlNFX1VTRVInXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS91c2VyL21vZHVsZS9jb25zdGFudC5lczYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF4aW9zXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgeyBzeW5jIH0gZnJvbSAndnVleC1yb3V0ZXItc3luYydcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcblxubGV0IGNvbnRhaW5lciA9IFZ1ZS5jb21wb25lbnQoJ2NvbnRhaW5lcicsIHtcbiAgICB0ZW1wbGF0ZTogYDxtYWluPjxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PjwvbWFpbj5gXG59KVxuXG5zeW5jKHN0b3JlLCByb3V0ZXIpXG5cbmV4cG9ydCB7IHN0b3JlLCByb3V0ZXIgfVxuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICByb3V0ZXIsXG4gICAgc3RvcmUsXG4gICAgcmVuZGVyKGgpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgYXR0cnM6IHsgaWQ6ICdhcHAnIH0gfSwgW2goJ2NvbnRhaW5lcicpXSlcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBhcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L2FwcC5qcyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92Ni45LjQvbGliL25vZGVfbW9kdWxlcy9udmEvbm9kZV9tb2R1bGVzLy4xMS4xLjRAdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLm52bS92ZXJzaW9ucy9ub2RlL3Y2LjkuNC9saWIvbm9kZV9tb2R1bGVzL252YS9ub2RlX21vZHVsZXMvLjExLjEuNEB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vYXBwLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLm52bS92ZXJzaW9ucy9ub2RlL3Y2LjkuNC9saWIvbm9kZV9tb2R1bGVzL252YS9ub2RlX21vZHVsZXMvLjExLjEuNEB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XFxcImlkXFxcIjpcXFwiZGF0YS12LWE2ZTQxMjhhXFxcIn0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLm52bS92ZXJzaW9ucy9ub2RlL3Y2LjkuNC9saWIvbm9kZV9tb2R1bGVzL252YS9ub2RlX21vZHVsZXMvLjExLjEuNEB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hcHAudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvbW9kdWxlL2FwcC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBhcHAudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS91c2VyL21vZHVsZS9hcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb21tb24tY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwgcGFuZWwtZGVmYXVsdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInBhbmVsLWhlYWRpbmcgY29tbW9uLWhlYWRlclwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJhY2stYnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS4kcm91dGVyLmJhY2soKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIjxcIildKSwgX3ZtLl92KF92bS5fcyhfdm0udXNlci5pZCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicGFuZWwtYm9keVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInVzZXItdGl0bGVcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogX3ZtLnVzZXIuYXZhdGFyX3VybCxcbiAgICAgIFwiYWx0XCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfYygncCcsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmxvZ2luKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5jcmVhdGVkX2F0KSldKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9hbGljaGVuLy5udm0vdmVyc2lvbnMvbm9kZS92Ni45LjQvbGliL34vbnZhL34vLjExLjEuNEB2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz97XCJpZFwiOlwiZGF0YS12LWE2ZTQxMjhhXCJ9IS9Vc2Vycy9hbGljaGVuLy5udm0vdmVyc2lvbnMvbm9kZS92Ni45LjQvbGliL34vbnZhL34vLjExLjEuNEB2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS91c2VyL21vZHVsZS9hcHAudnVlXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCB7IG1hcFN0YXRlLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9uLmVzNidcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29tbW9uLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nXCI+R2l0aHViIEV2ZW50czwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiA6dmFsdWU9XCJyZXBvXCIgQGlucHV0PVwiaGFuZGxlQ2hhbmdlXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCIgQGNsaWNrPVwiaGFuZGxlUXVlcnlcIj48aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiIC8+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWljb25cIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50XCIgdi1mb3I9XCJldmVudCBpbiBldmVudHNcIiBrZXk9e2V2ZW50LmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiZXZlbnQuYWN0b3IuYXZhdGFyX3VybFwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8cD48cm91dGVyLWxpbmsgdi1iaW5kOnRvPVwie3BhdGg6Jy91c2VyLycgKyBldmVudC5hY3Rvci5kaXNwbGF5X2xvZ2lufVwiPnt7ZXZlbnQuYWN0b3IuZGlzcGxheV9sb2dpbn19PC9yb3V0ZXItbGluaz48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7ZXZlbnQuY3JlYXRlZF9hdH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+e3tldmVudC50eXBlLnJlcGxhY2UoJ0V2ZW50JywnJykudG9Mb3dlckNhc2UoKX19IEluIDxiPnt7ZXZlbnQucmVwby5uYW1lfX08L2I+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gXG5cbmV4cG9ydCBjb25zdCBwcm90byA9IHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgICAgICBlICYmIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VGaWVsZCh7IG5hbWU6IFwicmVwb1wiLCB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZVF1ZXJ5KCkge1xuICAgICAgICAgICAgdGhpcy5mZXRjaFJlcG8oe1xuICAgICAgICAgICAgICAgIHJlcG86IHRoaXMucmVwb1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaFJlcG8oeyByZXBvOiB0aGlzLnJlcG8gfSlcbiAgICB9LFxuICAgIHRlbXBsYXRlXG59XG5cbmNvbnN0IEV2ZW50cyA9IFZ1ZS5jb21wb25lbnQoJ2V2ZW50cycse1xuICAgIC4uLnByb3RvLFxuICAgIG1ldGhvZHM6e1xuICAgICAgICAuLi5wcm90by5tZXRob2RzLFxuICAgICAgICAuLi5tYXBBY3Rpb25zKE9iamVjdC5rZXlzKGFjdGlvbnMpKSxcbiAgICB9LFxuICAgIGNvbXB1dGVkOntcbiAgICAgICAgLi4ucHJvdG8uY29tcHV0ZWQsXG4gICAgICAgIC4uLm1hcFN0YXRlKHtcbiAgICAgICAgICAgIHJlcG86IHN0YXRlID0+IHN0YXRlLmluZGV4LnJlcG8sXG4gICAgICAgICAgICBldmVudHM6IHN0YXRlID0+IHN0YXRlLmluZGV4LmV2ZW50cyxcbiAgICAgICAgICAgIHJvdXRlOiBcInJvdXRlXCJcbiAgICAgICAgfSlcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudHNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9hcHAuanMiLCJpbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbi5lczYnXG5pbXBvcnQgbXV0YXRpb25zIGZyb20gJy4vbXV0YXRpb24uZXM2J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhdGU6IHtcbiAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgcmVwbzogXCJcIlxuICAgIH0sXG4gICAgYWN0aW9ucyxcbiAgICBtdXRhdGlvbnNcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9pbmRleC5qcyIsImltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50LmVzNidcblxuY29uc3QgbXV0YXRpb25zID0ge1xuICAgIFtjb25zdGFudHMuQ0hBTkdFX0ZJRUxEXShzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBwYXlsb2FkXG4gICAgICAgIHN0YXRlW25hbWVdID0gdmFsdWVcbiAgICB9LFxuICAgIFtjb25zdGFudHMuUkVRVUVTVF9SRVBPXShzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5yZXBvRmV0Y2hpbmcgPSB0cnVlXG4gICAgfSxcbiAgICBbY29uc3RhbnRzLlJFU1BPTlNFX1JFUE9dKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgICAgIHN0YXRlLmV2ZW50cyA9IHBheWxvYWQucmVzXG4gICAgICAgIHN0YXRlLnJlcG9GZXRjaGluZyA9IGZhbHNlXG4gICAgICAgIHN0YXRlLnJlcG9GZXRjaGVkID0gdHJ1ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbXV0YXRpb25zXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9tb2R1bGUvbXV0YXRpb24uZXM2IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vbW9kdWxlL2FwcC5qcydcbmltcG9ydCBVc2VyIGZyb20gJy4uL3VzZXIvYXBwJ1xuXG5WdWUudXNlKFZ1ZVJvdXRlcilcblxuY29uc3Qgcm91dGVzID0gW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEV2ZW50cyB9LFxuICAgIHsgcGF0aDogJy91c2VyLzp1c2VyJywgY29tcG9uZW50OiBVc2VyIH0sXG4gICAgeyBwYXRoOiAnKicsIGNvbXBvbmVudDogeyB0ZW1wbGF0ZTogJzxkaXY+bm90IGZvdW5kPC9kaXY+JyB9IH1cbl1cblxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gICAgbW9kZTogJ2hpc3RvcnknLFxuICAgIHJvdXRlc1xufSlcblxucm91dGVyLmJlZm9yZUVhY2goKHRvLCBmcm9tLCBuZXh0KSA9PiB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgbmV4dCgpXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L3JvdXRlci5qcyIsImltcG9ydCBWdWV4IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBpbmRleCBmcm9tICcuL21vZHVsZSdcbmltcG9ydCB1c2VyIGZyb20gJy4uL3VzZXIvbW9kdWxlJ1xuXG5WdWUudXNlKFZ1ZXgpXG5cbmNvbnN0IG1vZHVsZXMgPSB7XG4gICAgaW5kZXgsXG4gICAgdXNlclxufVxuXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcbiAgICBzdGF0ZToge30sXG4gICAgbW9kdWxlc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L3N0b3JlLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgYXBwIGZyb20gJy4vbW9kdWxlL2FwcC52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZS5jb21wb25lbnQoJ1VzZXInLGFwcClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL3VzZXIvYXBwLmpzIiwiaW1wb3J0IG11dGF0aW9ucyBmcm9tICcuL211dGF0aW9uLmVzNidcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9uLmVzNidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXRlOiB7XG4gICAgICAgIHVzZXI6IHt9XG4gICAgfSxcbiAgICBhY3Rpb25zLFxuICAgIG11dGF0aW9uc1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvaW5kZXguanMiLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi9jb25zdGFudC5lczYnXG5cbmNvbnN0IG11dGF0aW9ucyA9IHtcbiAgICBbY29uc3RhbnRzLlJFUVVFU1RfVVNFUl0oc3RhdGUpIHtcbiAgICAgICAgc3RhdGUudXNlckZldGNoaW5nID0gdHJ1ZVxuICAgIH0sXG4gICAgW2NvbnN0YW50cy5SRVNQT05TRV9VU0VSXShzdGF0ZSxwYXlsb2FkKSB7XG4gICAgICAgIHN0YXRlLnVzZXIgPSBwYXlsb2FkLnJldFxuICAgICAgICBzdGF0ZS51c2VyRmV0Y2hpbmcgPSBmYWxzZVxuICAgICAgICBzdGF0ZS51c2VyRmV0Y2hlZCA9IHRydWVcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG11dGF0aW9uc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvdXNlci9tb2R1bGUvbXV0YXRpb24uZXM2IiwiZXhwb3J0cy5zeW5jID0gZnVuY3Rpb24gKHN0b3JlLCByb3V0ZXIsIG9wdGlvbnMpIHtcbiAgdmFyIG1vZHVsZU5hbWUgPSAob3B0aW9ucyB8fCB7fSkubW9kdWxlTmFtZSB8fCAncm91dGUnXG5cbiAgc3RvcmUucmVnaXN0ZXJNb2R1bGUobW9kdWxlTmFtZSwge1xuICAgIHN0YXRlOiBjbG9uZVJvdXRlKHJvdXRlci5jdXJyZW50Um91dGUpLFxuICAgIG11dGF0aW9uczoge1xuICAgICAgJ3JvdXRlci9ST1VURV9DSEFOR0VEJzogZnVuY3Rpb24gKHN0YXRlLCB0cmFuc2l0aW9uKSB7XG4gICAgICAgIHN0b3JlLnN0YXRlW21vZHVsZU5hbWVdID0gY2xvbmVSb3V0ZSh0cmFuc2l0aW9uLnRvLCB0cmFuc2l0aW9uLmZyb20pXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHZhciBpc1RpbWVUcmF2ZWxpbmcgPSBmYWxzZVxuICB2YXIgY3VycmVudFBhdGhcblxuICAvLyBzeW5jIHJvdXRlciBvbiBzdG9yZSBjaGFuZ2VcbiAgc3RvcmUud2F0Y2goXG4gICAgZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZVttb2R1bGVOYW1lXSB9LFxuICAgIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgaWYgKHJvdXRlLmZ1bGxQYXRoID09PSBjdXJyZW50UGF0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlzVGltZVRyYXZlbGluZyA9IHRydWVcbiAgICAgIGN1cnJlbnRQYXRoID0gcm91dGUuZnVsbFBhdGhcbiAgICAgIHJvdXRlci5wdXNoKHJvdXRlKVxuICAgIH0sXG4gICAgeyBzeW5jOiB0cnVlIH1cbiAgKVxuXG4gIC8vIHN5bmMgc3RvcmUgb24gcm91dGVyIG5hdmlnYXRpb25cbiAgcm91dGVyLmFmdGVyRWFjaChmdW5jdGlvbiAodG8sIGZyb20pIHtcbiAgICBpZiAoaXNUaW1lVHJhdmVsaW5nKSB7XG4gICAgICBpc1RpbWVUcmF2ZWxpbmcgPSBmYWxzZVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGN1cnJlbnRQYXRoID0gdG8uZnVsbFBhdGhcbiAgICBzdG9yZS5jb21taXQoJ3JvdXRlci9ST1VURV9DSEFOR0VEJywgeyB0bzogdG8sIGZyb206IGZyb20gfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gY2xvbmVSb3V0ZSAodG8sIGZyb20pIHtcbiAgdmFyIGNsb25lID0ge1xuICAgIG5hbWU6IHRvLm5hbWUsXG4gICAgcGF0aDogdG8ucGF0aCxcbiAgICBoYXNoOiB0by5oYXNoLFxuICAgIHF1ZXJ5OiB0by5xdWVyeSxcbiAgICBwYXJhbXM6IHRvLnBhcmFtcyxcbiAgICBmdWxsUGF0aDogdG8uZnVsbFBhdGgsXG4gICAgbWV0YTogdG8ubWV0YVxuICB9XG4gIGlmIChmcm9tKSB7XG4gICAgY2xvbmUuZnJvbSA9IGNsb25lUm91dGUoZnJvbSlcbiAgfVxuICByZXR1cm4gT2JqZWN0LmZyZWV6ZShjbG9uZSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL34vLjQuMS4yQHZ1ZXgtcm91dGVyLXN5bmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbi5lczYnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wdXRlZDp7XG4gICAgICAgIC4uLm1hcFN0YXRlKHtcbiAgICAgICAgICAgIHVzZXI6c3RhdGU9PnN0YXRlLnVzZXIudXNlcixcbiAgICAgICAgICAgIHJvdXRlOlwicm91dGVcIlxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICAgIC4uLm1hcEFjdGlvbnMoT2JqZWN0LmtleXMoYWN0aW9ucykpXG4gICAgfSxcbiAgICBjcmVhdGVkKCl7XG4gICAgICAgIHRoaXMuZmV0Y2hVc2VyKHRoaXMucm91dGUucGFyYW1zKVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwiY29tbW9uLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgY29tbW9uLWhlYWRlclwiPjxidXR0b24gY2xhc3M9XCJiYWNrLWJ1dHRvblwiIEBjbGljaz1cIiRyb3V0ZXIuYmFjaygpXCI+Jmx0OzwvYnV0dG9uPnt7dXNlci5pZH19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItdGl0bGVcIj5cbiAgICAgICAgPGltZyA6c3JjPVwidXNlci5hdmF0YXJfdXJsXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgIDxwPnt7dXNlci5sb2dpbn19PC9wPlxuICAgICAgICA8cD57e3VzZXIuY3JlYXRlZF9hdH19PC9wPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwLnZ1ZT8yMTg4ZmFlYyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWUtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBhcHAsIHsgcm91dGVyLCBzdG9yZSB9IGZyb20gJy4vYXBwJ1xuXG5jb25zdCBqc2RvbSA9IHJlcXVpcmUoJ2pzZG9tJykuanNkb207XG5nbG9iYWwuZG9jdW1lbnQgPSBqc2RvbSgnPCFkb2N0eXBlIGh0bWw+PGh0bWw+PGJvZHk+PC9ib2R5PjwvaHRtbD4nKTtcbmdsb2JhbC53aW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0Vmlldztcbmdsb2JhbC5uYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yO1xuXG5leHBvcnQgZGVmYXVsdCBjdHggPT4ge1xuICAgIHJvdXRlci5wdXNoKGN0eC51cmwpXG4gICAgY29uc3QgbWF0Y2hlZENvbXBvbmVudHMgPSByb3V0ZXIuZ2V0TWF0Y2hlZENvbXBvbmVudHMoKVxuICAgIGlmICghbWF0Y2hlZENvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7IGNvZGU6IDQwNCB9KVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobWF0Y2hlZENvbXBvbmVudHMpLnRoZW4oKCkgPT4ge1xuICAgICAgICBsZXQgeyBpbml0aWFsU3RhdGUgfSA9IGN0eFxuICAgICAgICBzdG9yZS5yZXBsYWNlU3RhdGUoe1xuICAgICAgICAgICAgLi4uc3RvcmUuc3RhdGUsXG4gICAgICAgICAgICAuLi5pbml0aWFsU3RhdGVcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFwcFxuICAgIH0pXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9pbmRleC1zZXJ2ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9