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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(4);

var _axios2 = _interopRequireDefault(_axios);

var _constant = __webpack_require__(6);

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
/* 6 */
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
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.store = undefined;

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _store = __webpack_require__(19);

var _store2 = _interopRequireDefault(_store);

var _app = __webpack_require__(16);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = _vue2.default.component('container', {
    components: {
        app: _app2.default
    },
    template: '<main><app />></main>'
});

exports.store = _store2.default;
exports.default = new _vue2.default({
    store: _store2.default,
    render: function render(h) {
        return h('div', { attrs: { id: 'app' } }, [h('container')]);
    }
});

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.proto = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(2);

var _action = __webpack_require__(5);

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var template = '\n<div class="common-container">\n    <div class="panel panel-default">\n        <div class="panel-heading">Github Events</div>\n        <div class="panel-body">\n            <div class="input-group">\n                <input type="text" class="form-control" :value="repo" @input="handleChange" />\n                <span class="input-group-addon" @click="handleQuery"><i class="fa fa-search" /></span>\n            </div>\n        </div>\n        <div class="search-icon"></div>\n        <div class="events">\n            <div class="event" v-for="event in events" key={event.id}>\n                <div class="event-title">\n                    <img :src="event.actor.avatar_url" alt="" />\n                    <span>\n                    <p><a v-bind:href="\'/user/\' + event.actor.display_login">{{event.actor.display_login}}</a></p>\n                    <p>{{event.created_at}}</p>\n                    </span>\n                </div>\n                <p>{{event.type.replace(\'Event\',\'\').toLowerCase()}} In <b>{{event.repo.name}}</b></p>\n            </div>\n        </div>\n    </div>\n</div>\n';

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
        }
    }))
}));

exports.default = Events;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _action = __webpack_require__(5);

var _action2 = _interopRequireDefault(_action);

var _mutation = __webpack_require__(18);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mutations;

var _constant = __webpack_require__(6);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuex = __webpack_require__(2);

var _vuex2 = _interopRequireDefault(_vuex);

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _module = __webpack_require__(17);

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var modules = {
    index: _module2.default
};

var store = new _vuex2.default.Store({
    state: {},
    modules: modules
});

exports.default = store;

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
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
    var initialState = ctx.initialState;

    _app.store.replaceState(_extends({}, _app.store.state, initialState));
    return Promise.resolve(_app2.default);
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2JjYzg0MGQ3MmFhMWM3ODAxM2IiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNkb21cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9tb2R1bGUvYWN0aW9uLmVzNiIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9tb2R1bGUvY29uc3RhbnQuZXM2Iiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L2FwcC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9tb2R1bGUvYXBwLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9tb2R1bGUvbXV0YXRpb24uZXM2Iiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L3N0b3JlLmpzIiwid2VicGFjazovLy8vVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L2luZGV4LXNlcnZlci5qcyJdLCJuYW1lcyI6WyJjb25zdGFudHMiLCJhY3Rpb25zIiwiY2hhbmdlRmllbGQiLCJwYXJhbSIsImNvbW1pdCIsIkNIQU5HRV9GSUVMRCIsInJlcXVlc3RSZXBvIiwiUkVRVUVTVF9SRVBPIiwicmVzcG9uc2VSZXBvIiwicmVzIiwiUkVTUE9OU0VfUkVQTyIsImZhaWxSZXNwb25zZSIsImVyciIsIkZBSUxfUkVTUE9OU0UiLCJmZXRjaFJlcG8iLCJkaXNwYXRjaCIsImdldCIsInRoZW4iLCJyZXQiLCJkYXRhIiwiY29udGFpbmVyIiwiY29tcG9uZW50IiwiY29tcG9uZW50cyIsImFwcCIsInRlbXBsYXRlIiwic3RvcmUiLCJyZW5kZXIiLCJoIiwiYXR0cnMiLCJpZCIsInByb3RvIiwibWV0aG9kcyIsImhhbmRsZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVF1ZXJ5IiwicmVwbyIsImNyZWF0ZWQiLCJFdmVudHMiLCJPYmplY3QiLCJrZXlzIiwiY29tcHV0ZWQiLCJzdGF0ZSIsImluZGV4IiwiZXZlbnRzIiwibXV0YXRpb25zIiwicGF5bG9hZCIsInJlcG9GZXRjaGluZyIsInJlcG9GZXRjaGVkIiwidXNlIiwibW9kdWxlcyIsIlN0b3JlIiwianNkb20iLCJyZXF1aXJlIiwiZ2xvYmFsIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJkZWZhdWx0VmlldyIsIm5hdmlnYXRvciIsImluaXRpYWxTdGF0ZSIsImN0eCIsInJlcGxhY2VTdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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R0FBZUUsUUFBUXhDLEdBQXZCO0FBQ0FvQyxVQUFNSyxZQUFOLEdBQXFCLEtBQXJCO0FBQ0FMLFVBQU1NLFdBQU4sR0FBb0IsSUFBcEI7QUFDSCxDQVpDLGNBQU47O2tCQWVlSCxTOzs7Ozs7Ozs7Ozs7O0FDakJmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsY0FBSUksR0FBSjs7QUFFQSxJQUFNQyxVQUFVO0FBQ1pQO0FBRFksQ0FBaEI7O0FBSUEsSUFBTXJCLFFBQVEsSUFBSSxlQUFLNkIsS0FBVCxDQUFlO0FBQ3pCVCxXQUFPLEVBRGtCO0FBRXpCUTtBQUZ5QixDQUFmLENBQWQ7O2tCQUtlNUIsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7OztBQUVBLElBQU04QixRQUFRLG1CQUFBQyxDQUFRLENBQVIsRUFBaUJELEtBQS9CO0FBQ0FFLE9BQU9DLFFBQVAsR0FBa0JILE1BQU0sMkNBQU4sQ0FBbEI7QUFDQUUsT0FBT0UsTUFBUCxHQUFnQkQsU0FBU0UsV0FBekI7QUFDQUgsT0FBT0ksU0FBUCxHQUFtQkYsT0FBT0UsU0FBMUI7O2tCQUVlLGVBQU87QUFBQSxRQUNaQyxZQURZLEdBQ0tDLEdBREwsQ0FDWkQsWUFEWTs7QUFFbEIsZUFBTUUsWUFBTixjQUNPLFdBQU1uQixLQURiLEVBRU9pQixZQUZQO0FBSUEsV0FBT0csUUFBUUMsT0FBUixlQUFQO0FBQ0gsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYmNjODQwZDcyYWExYzc4MDEzYiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc2RvbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImpzZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWV4XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImF4aW9zXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tIFwiLi9jb25zdGFudC5lczZcIlxuXG5jb25zdCBhY3Rpb25zID0ge1xuICAgIGNoYW5nZUZpZWxkKHsgY29tbWl0IH0sIHBhcmFtKSB7XG4gICAgICAgIGNvbW1pdChjb25zdGFudHMuQ0hBTkdFX0ZJRUxELCBwYXJhbSlcbiAgICB9LFxuICAgIHJlcXVlc3RSZXBvKHsgY29tbWl0IH0pIHtcbiAgICAgICAgY29tbWl0KGNvbnN0YW50cy5SRVFVRVNUX1JFUE8pXG4gICAgfSxcbiAgICByZXNwb25zZVJlcG8oeyBjb21taXQgfSwgcmVzKSB7XG4gICAgICAgIGNvbW1pdChjb25zdGFudHMuUkVTUE9OU0VfUkVQTywgeyByZXMgfSlcbiAgICB9LFxuICAgIGZhaWxSZXNwb25zZSh7IGNvbW1pdCB9LCBlcnIpIHtcbiAgICAgICAgY29tbWl0KGNvbnN0YW50cy5GQUlMX1JFU1BPTlNFLCB7IGVyciB9KVxuICAgIH0sXG4gICAgZmV0Y2hSZXBvKHsgY29tbWl0LCBkaXNwYXRjaCB9LCBwYXJhbSkge1xuICAgICAgICBkaXNwYXRjaChcInJlcXVlc3RSZXBvXCIsIHBhcmFtKVxuICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwczovL2FwaS5naXRodWIuY29tL2V2ZW50c2ApLnRoZW4ocmV0ID0+IHtcbiAgICAgICAgICAgIGRpc3BhdGNoKCdyZXNwb25zZVJlcG8nLCByZXQuZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9hY3Rpb24uZXM2IiwiZXhwb3J0IGNvbnN0IENIQU5HRV9GSUVMRCA9IFwiQ0hBTkdFX0ZJRUxEXCJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1JFUE8gPSBcIlJFUVVFU1RfUkVQT1wiXG5leHBvcnQgY29uc3QgUkVTUE9OU0VfUkVQTyA9IFwiUkVTUE9OU0VfUkVQT1wiXG5leHBvcnQgY29uc3QgRkFJTF9SRVNQT05TRSA9IFwiRkFJTF9SRVNQT05TRVwiXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9tb2R1bGUvY29uc3RhbnQuZXM2IiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSdcbmltcG9ydCBhcHAgZnJvbSAnLi9tb2R1bGUvYXBwJ1xuXG5sZXQgY29udGFpbmVyID0gVnVlLmNvbXBvbmVudCgnY29udGFpbmVyJywge1xuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgYXBwXG4gICAgfSxcbiAgICB0ZW1wbGF0ZTogYDxtYWluPjxhcHAgLz4+PC9tYWluPmBcbn0pXG5cbmV4cG9ydCB7IHN0b3JlIH1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFZ1ZSh7XG4gICAgc3RvcmUsXG4gICAgcmVuZGVyKGgpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgYXR0cnM6IHsgaWQ6ICdhcHAnIH0gfSwgW2goJ2NvbnRhaW5lcicpXSlcbiAgICB9XG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvYXBwLmpzIiwiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgeyBtYXBTdGF0ZSwgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbi5lczYnXG5cbmNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cImNvbW1vbi1jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPkdpdGh1YiBFdmVudHM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgOnZhbHVlPVwicmVwb1wiIEBpbnB1dD1cImhhbmRsZUNoYW5nZVwiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiIEBjbGljaz1cImhhbmRsZVF1ZXJ5XCI+PGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIiAvPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1pY29uXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudFwiIHYtZm9yPVwiZXZlbnQgaW4gZXZlbnRzXCIga2V5PXtldmVudC5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImV2ZW50LmFjdG9yLmF2YXRhcl91cmxcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHA+PGEgdi1iaW5kOmhyZWY9XCInL3VzZXIvJyArIGV2ZW50LmFjdG9yLmRpc3BsYXlfbG9naW5cIj57e2V2ZW50LmFjdG9yLmRpc3BsYXlfbG9naW59fTwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPnt7ZXZlbnQuY3JlYXRlZF9hdH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+e3tldmVudC50eXBlLnJlcGxhY2UoJ0V2ZW50JywnJykudG9Mb3dlckNhc2UoKX19IEluIDxiPnt7ZXZlbnQucmVwby5uYW1lfX08L2I+PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5gXG5cbmV4cG9ydCBjb25zdCBwcm90byA9IHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgICAgICAgICBlICYmIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VGaWVsZCh7IG5hbWU6IFwicmVwb1wiLCB2YWx1ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZVF1ZXJ5KCkge1xuICAgICAgICAgICAgdGhpcy5mZXRjaFJlcG8oe1xuICAgICAgICAgICAgICAgIHJlcG86IHRoaXMucmVwb1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaFJlcG8oeyByZXBvOiB0aGlzLnJlcG8gfSlcbiAgICB9LFxuICAgIHRlbXBsYXRlXG59XG5cbmNvbnN0IEV2ZW50cyA9IFZ1ZS5jb21wb25lbnQoJ2V2ZW50cycse1xuICAgIC4uLnByb3RvLFxuICAgIG1ldGhvZHM6e1xuICAgICAgICAuLi5wcm90by5tZXRob2RzLFxuICAgICAgICAuLi5tYXBBY3Rpb25zKE9iamVjdC5rZXlzKGFjdGlvbnMpKSxcbiAgICB9LFxuICAgIGNvbXB1dGVkOntcbiAgICAgICAgLi4ucHJvdG8uY29tcHV0ZWQsXG4gICAgICAgIC4uLm1hcFN0YXRlKHtcbiAgICAgICAgICAgIHJlcG86IHN0YXRlID0+IHN0YXRlLmluZGV4LnJlcG8sXG4gICAgICAgICAgICBldmVudHM6IHN0YXRlID0+IHN0YXRlLmluZGV4LmV2ZW50cyxcbiAgICAgICAgfSlcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudHNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9hcHAuanMiLCJpbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbi5lczYnXG5pbXBvcnQgbXV0YXRpb25zIGZyb20gJy4vbXV0YXRpb24uZXM2J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhdGU6IHtcbiAgICAgICAgZXZlbnRzOiBbXSxcbiAgICAgICAgcmVwbzogXCJcIlxuICAgIH0sXG4gICAgYWN0aW9ucyxcbiAgICBtdXRhdGlvbnNcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAvVXNlcnMvYWxpY2hlbi9Xb3Jrc3BhY2UvZnJvbnRlbmQvaXNvbW9ycGhpYy1ib2lsZXJwbGF0ZS9jbGllbnQvYnVuZGxlL2luZGV4L21vZHVsZS9pbmRleC5qcyIsImltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50LmVzNidcblxuY29uc3QgbXV0YXRpb25zID0ge1xuICAgIFtjb25zdGFudHMuQ0hBTkdFX0ZJRUxEXShzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBwYXlsb2FkXG4gICAgICAgIHN0YXRlW25hbWVdID0gdmFsdWVcbiAgICB9LFxuICAgIFtjb25zdGFudHMuUkVRVUVTVF9SRVBPXShzdGF0ZSkge1xuICAgICAgICBzdGF0ZS5yZXBvRmV0Y2hpbmcgPSB0cnVlXG4gICAgfSxcbiAgICBbY29uc3RhbnRzLlJFU1BPTlNFX1JFUE9dKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgICAgIHN0YXRlLmV2ZW50cyA9IHBheWxvYWQucmVzXG4gICAgICAgIHN0YXRlLnJlcG9GZXRjaGluZyA9IGZhbHNlXG4gICAgICAgIHN0YXRlLnJlcG9GZXRjaGVkID0gdHJ1ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbXV0YXRpb25zXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9tb2R1bGUvbXV0YXRpb24uZXM2IiwiaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IGluZGV4IGZyb20gJy4vbW9kdWxlJ1xuXG5WdWUudXNlKFZ1ZXgpXG5cbmNvbnN0IG1vZHVsZXMgPSB7XG4gICAgaW5kZXhcbn1cblxuY29uc3Qgc3RvcmUgPSBuZXcgVnVleC5TdG9yZSh7XG4gICAgc3RhdGU6IHt9LFxuICAgIG1vZHVsZXNcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gL1VzZXJzL2FsaWNoZW4vV29ya3NwYWNlL2Zyb250ZW5kL2lzb21vcnBoaWMtYm9pbGVycGxhdGUvY2xpZW50L2J1bmRsZS9pbmRleC9zdG9yZS5qcyIsImltcG9ydCBhcHAsIHsgc3RvcmUgfSBmcm9tICcuL2FwcCdcblxuY29uc3QganNkb20gPSByZXF1aXJlKCdqc2RvbScpLmpzZG9tO1xuZ2xvYmFsLmRvY3VtZW50ID0ganNkb20oJzwhZG9jdHlwZSBodG1sPjxodG1sPjxib2R5PjwvYm9keT48L2h0bWw+Jyk7XG5nbG9iYWwud2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5nbG9iYWwubmF2aWdhdG9yID0gd2luZG93Lm5hdmlnYXRvcjtcblxuZXhwb3J0IGRlZmF1bHQgY3R4ID0+IHtcbiAgICBsZXQgeyBpbml0aWFsU3RhdGUgfSA9IGN0eFxuICAgIHN0b3JlLnJlcGxhY2VTdGF0ZSh7XG4gICAgICAgIC4uLnN0b3JlLnN0YXRlLFxuICAgICAgICAuLi5pbml0aWFsU3RhdGVcbiAgICB9KVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoYXBwKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC9Vc2Vycy9hbGljaGVuL1dvcmtzcGFjZS9mcm9udGVuZC9pc29tb3JwaGljLWJvaWxlcnBsYXRlL2NsaWVudC9idW5kbGUvaW5kZXgvaW5kZXgtc2VydmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==