(swan.webpackJsonp=swan.webpackJsonp||[]).push([[22],{"218":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var O=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var w=n(0),M=_interopRequireDefault(w),S=_interopRequireDefault(n(6)),T=(n(1),n(5),n(4)),P=(n(219),n(28)),j=n(2);function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}n(220);var o=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Tabbar,M.default.Component),r(Tabbar,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0})(Tabbar.prototype.__proto__||Object.getPrototypeOf(Tabbar.prototype),"_constructor",this).call(this,t),this.$$refs=new M.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){var o=this;this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix;var a=this.__props.notredirect,i=(0,T.useSelector)(function(t){return t.tabbar}),r=((0,T.useSelector)(function(t){return t.User.login}),(0,T.useSelector)(function(t){return t.msg.messageNumber})),u=(0,T.useDispatch)(),s=(0,w.useState)(!1),c=O(s,2),l=c[0],p=c[1],b=(0,w.useState)(!1),f=O(b,2),y=f[0],_=f[1],m=function openPublishMenu(){console.log("发布"),p(!0)};(0,w.onAppHide)(function(){clearInterval(void 0)});var h=l?(0,S.default)({"tabbar-publish-container":!0,"tabbar-publish-container-active":y}):null;this.anonymousFunc1=function(){return function closePublishMenu(){p(!1),_(!1)}()};var v=l?(0,S.default)({"tabbar-publish-img":!0,"tabbar-publish-img-active":y}):null,d=l?(0,S.default)({"tabbar-publish-items":!0,"tabbar-publish-items-active":y}):null,g=i.list.map(function(t,e){t={"privateOriginal":(0,w.internal_get_original)(t)};var n=(0,S.default)({"common-footer-tabbar-list":!0,"common-footer-tabbar-list-active":t.privateOriginal.id===i.key}),r="cbzzz"+e;return o.anonymousFunc0Map[r]=function(){return function changeTabbarAction(t){t.click?"openPublishMenu"==t.click&&(m(),setTimeout(function(){_(!0)},10)):a?u((0,P.changeTabbar)(t.id)):M.default.reLaunch({"url":"/pages/index/index?type="+t.id})}(t.privateOriginal)},{"loopState__temp2":n,"_$indexKey":r,"privateOriginal":t.privateOriginal}});return Object.assign(this.__state,{"anonymousState__temp3":h,"anonymousState__temp4":v,"anonymousState__temp5":d,"tabbar":i,"loopArray20":g,"memberMsg":r,"show":l,"IMGCDNURL":j.IMGCDNURL}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(t){for(var e,n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return this.anonymousFunc0Map[t]&&(e=this.anonymousFunc0Map)[t].apply(e,r)}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}}]),Tabbar);function Tabbar(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Tabbar);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Tabbar.__proto__||Object.getPrototypeOf(Tabbar)).apply(this,arguments));return t.$usedState=["anonymousState__temp3","anonymousState__temp4","anonymousState__temp5","tabbar","loopArray20","memberMsg","show","IMGCDNURL","notredirect"],t.anonymousFunc0Map={},t.customComponents=[],t}o.$$events=["anonymousFunc0","anonymousFunc1"],o.$$componentPath="components/tabbar/index",e.default=o,Component(n(0).default.createComponent(o))},"219":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),e.setMsg=function setMsg(t){return{"type":r.SET,"data":t}},e.getMsg=function getMsg(){return{"type":r.GET}};var r=n(22)},"220":function(t,e,n){}},[[218,0,1]]]);