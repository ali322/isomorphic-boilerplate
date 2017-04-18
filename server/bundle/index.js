module.exports=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=28)}([function(e,t){e.exports=require("vue")},function(e,t){e.exports=require("jsdom")},function(e,t){e.exports=function(e,t,n,r){var o,u=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,u=e.default);var i="function"==typeof u?u.options:u;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),r){var s=Object.create(i.computed||null);Object.keys(r).forEach(function(e){var t=r[e];s[e]=function(){return t}}),i.computed=s}return{esModule:o,exports:u,options:i}}},function(e,t){e.exports=require("vuex")},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(8),a=o(u),i=n(5),s=r(i),c={changeField:function(e,t){(0,e.commit)(s.CHANGE_FIELD,t)},requestRepo:function(e){(0,e.commit)(s.REQUEST_REPO)},responseRepo:function(e,t){(0,e.commit)(s.RESPONSE_REPO,{res:t})},failResponse:function(e,t){(0,e.commit)(s.FAIL_RESPONSE,{err:t})},fetchRepo:function(e,t){var n=(e.commit,e.dispatch);return n("requestRepo",t),a.default.get("https://api.github.com/events").then(function(e){n("responseRepo",e.data)})}};t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CHANGE_FIELD="CHANGE_FIELD",t.REQUEST_REPO="REQUEST_REPO",t.RESPONSE_REPO="RESPONSE_REPO",t.FAIL_RESPONSE="FAIL_RESPONSE"},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(8),a=o(u),i=n(7),s=r(i),c={requestUser:function(e){(0,e.commit)(s.REQUEST_USER)},responseUser:function(e,t){(0,e.commit)(s.RESPONSE_USER,{ret:t,respondAt:Date.now()})},fetchUser:function(e,t){var n=e.dispatch;return n("requestUser",t),a.default.get("https://api.github.com/users/"+t.user).then(function(e){n("responseUser",e.data)})}};t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.REQUEST_USER="REQUEST_USER",t.RESPONSE_USER="RESPONSE_USER"},function(e,t){e.exports=require("axios")},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.router=t.store=void 0;var o=n(0),u=r(o),a=n(11),i=n(17),s=r(i),c=n(18),l=r(c);u.default.component("container",{template:"<main><router-view></router-view></main>"});(0,a.sync)(l.default,s.default),t.store=l.default,t.router=s.default;var f=new u.default({router:s.default,store:l.default,render:function(e){return e("div",{attrs:{id:"app"}},[e("container")])}});t.default=f},function(e,t){function n(e,t){var r={name:e.name,path:e.path,hash:e.hash,query:e.query,params:e.params,fullPath:e.fullPath,meta:e.meta};return t&&(r.from=n(t)),Object.freeze(r)}t.sync=function(e,t,r){var o=(r||{}).moduleName||"route";e.registerModule(o,{state:n(t.currentRoute),mutations:{"router/ROUTE_CHANGED":function(t,r){e.state[o]=n(r.to,r.from)}}});var u,a=!1;e.watch(function(e){return e[o]},function(e){e.fullPath!==u&&(a=!0,u=e.fullPath,t.push(e))},{sync:!0}),t.afterEach(function(t,n){if(a)return void(a=!1);u=t.fullPath,e.commit("router/ROUTE_CHANGED",{to:t,from:n})})}},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(3),a=n(6),i=r(a);t.default={computed:o({},(0,u.mapState)({user:function(e){return e.user.user},route:"route"})),methods:o({},(0,u.mapActions)(Object.keys(i.default))),created:function(){this.fetchUser(this.route.params)}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.proto=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(0),a=r(u),i=n(3),s=n(4),c=r(s),l='\n<div class="common-container">\n    <div class="panel panel-default">\n        <div class="panel-heading">Github Events</div>\n        <div class="panel-body">\n            <div class="input-group">\n                <input type="text" class="form-control" :value="repo" @input="handleChange" />\n                <span class="input-group-addon" @click="handleQuery"><i class="fa fa-search" /></span>\n            </div>\n        </div>\n        <div class="search-icon"></div>\n        <div class="events">\n            <div class="event" v-for="event in events" key={event.id}>\n                <div class="event-title">\n                    <img :src="event.actor.avatar_url" alt="" />\n                    <span>\n                    <p><router-link v-bind:to="{path:\'/user/\' + event.actor.display_login}">{{event.actor.display_login}}</router-link></p>\n                    <p>{{event.created_at}}</p>\n                    </span>\n                </div>\n                <p>{{event.type.replace(\'Event\',\'\').toLowerCase()}} In <b>{{event.repo.name}}</b></p>\n            </div>\n        </div>\n    </div>\n</div>\n',f=t.proto={methods:{handleChange:function(e){e&&e.preventDefault(),this.changeField({name:"repo",value:e.target.value})},handleQuery:function(){this.fetchRepo({repo:this.repo})}},created:function(){this.fetchRepo({repo:this.repo})},template:l},d=a.default.component("events",o({},f,{methods:o({},f.methods,(0,i.mapActions)(Object.keys(c.default))),computed:o({},f.computed,(0,i.mapState)({repo:function(e){return e.index.repo},events:function(e){return e.index.events},route:"route"}))}));t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),u=r(o),a=n(16),i=r(a);t.default={state:{events:[],repo:""},actions:u.default,mutations:i.default}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var u,a=n(5),i=r(a),s=(u={},o(u,i.CHANGE_FIELD,function(e,t){var n=t.name,r=t.value;e[n]=r}),o(u,i.REQUEST_REPO,function(e){e.repoFetching=!0}),o(u,i.RESPONSE_REPO,function(e,t){e.events=t.res,e.repoFetching=!1,e.repoFetched=!0}),u);t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=r(o),a=n(26),i=r(a),s=n(14),c=r(s),l=n(19),f=r(l);u.default.use(i.default);var d=[{path:"/",component:c.default},{path:"/user/:user",component:f.default},{path:"*",component:{template:"<div>not found</div>"}}],p=new i.default({mode:"history",routes:d});p.beforeEach(function(e,t,n){window.scrollTo(0,0),n()}),t.default=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),u=r(o),a=n(0),i=r(a),s=n(15),c=r(s),l=n(20),f=r(l);i.default.use(u.default);var d={index:c.default,user:f.default},p=new u.default.Store({state:{},modules:d});t.default=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),u=r(o),a=n(23),i=r(a);t.default=u.default.component("User",i.default)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(21),u=r(o),a=n(6),i=r(a);t.default={state:{user:{}},actions:i.default,mutations:u.default}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var u,a=n(7),i=r(a),s=(u={},o(u,i.REQUEST_USER,function(e){e.userFetching=!0}),o(u,i.RESPONSE_USER,function(e,t){e.user=t.ret,e.userFetching=!1,e.userFetched=!0}),u);t.default=s},,function(e,t,n){var r=n(2)(n(13),n(25),null,null);r.options.__file="/Users/alichen/Workspace/frontend/isomorphic-boilerplate/client/bundle/user/module/app.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"common-container"},[n("div",{staticClass:"panel panel-default"},[n("div",{staticClass:"panel-heading common-header"},[n("button",{staticClass:"back-button",on:{click:function(t){e.$router.back()}}},[e._v("<")]),e._v(e._s(e.user.id))]),e._v(" "),n("div",{staticClass:"panel-body"},[n("div",{staticClass:"user-title"},[n("img",{attrs:{src:e.user.avatar_url,alt:""}}),e._v(" "),n("span",[n("p",[e._v(e._s(e.user.login))]),e._v(" "),n("p",[e._v(e._s(e.user.created_at))])])])])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t){e.exports=require("vue-router")},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(10),a=r(u),i=n(1).jsdom;global.document=i("<!doctype html><html><body></body></html>"),global.window=document.defaultView,global.navigator=window.navigator,t.default=function(e){u.router.push(e.url);var t=u.router.getMatchedComponents();return t.length?Promise.all(t).then(function(){var t=e.initialState;return u.store.replaceState(o({},u.store.state,t)),a.default}):Promise.reject({code:404})}}]);