webpackJsonp([2],{0:function(e,t,n){n(142),e.exports=n(201)},142:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){var e=JSON.parse(document.getElementById("initial-state").textContent);f.default.render(s.default.createElement(o.default,{initialState:e}),document.getElementById("error"))}var l=n(43),u=a(l),d=n(144),o=a(d),i=n(10),s=a(i),c=n(108),f=a(c);(0,u.default)(window.addEventListener)?window.addEventListener("DOMContentLoaded",r):window.attachEvent("onload",r)},144:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(38),l=a(r),u=n(39),d=a(u),o=n(40),i=a(o),s=n(42),c=a(s),f=n(41),m=a(f),p=n(10),v=a(p),E=function(e){function t(){return(0,d.default)(this,t),(0,c.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.initialState.msg;return v.default.createElement("div",{className:"error-content"},v.default.createElement("div",{className:"error-layer"},v.default.createElement("div",{className:"error-panel"},v.default.createElement("img",{src:"/client/asset/image/error.png"}),v.default.createElement("p",null,e))))}}]),t}(p.Component);E.defaultProps={error:{msg:""}},t.default=E},201:function(e,t){}});