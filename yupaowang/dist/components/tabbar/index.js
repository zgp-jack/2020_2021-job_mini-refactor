(swan.webpackJsonp=swan.webpackJsonp||[]).push([[32],{"311":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var w=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=t[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var M=n(0),S=_interopRequireDefault(M),P=_interopRequireDefault(n(6)),T=n(2),k=n(8),j=n(3),D=n(54),C=n(19),I=n(1),R=_interopRequireDefault(n(26));function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}n(312);var o=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Tabbar,S.default.Component),r(Tabbar,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0})(Tabbar.prototype.__proto__||Object.getPrototypeOf(Tabbar.prototype),"_constructor",this).call(this,t),this.$$refs=new S.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){var o=this;function ua(t){S.default.navigateTo({"url":t})}function va(){r&&(0,T.getMemberMsgNumber)((0,k.isIos)()).then(function(t){"ok"==t.errcode&&c((0,D.setMsg)(t.data))})}this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix;var a=this.__props.notredirect,u=(0,j.useSelector)(function(t){return t.tabbar}),r=(0,j.useSelector)(function(t){return t.User.login}),i=(0,j.useSelector)(function(t){return t.msg.messageNumber}),s=(0,R.default)().initJobView,c=(0,j.useDispatch)(),l=(0,M.useState)(!1),p=w(l,2),f=p[0],b=p[1],y=(0,M.useState)(!1),m=w(y,2),h=m[0],v=m[1],_=function openPublishMenu(){b(!0)};(0,M.useEffect)(function(){va();var t=setInterval(function(){va()},I.MemberMsgTimerInterval);return function(){return clearInterval(t)}},[]);var d=f?(0,P.default)({"tabbar-publish-container":!0,"tabbar-publish-container-active":h}):null;this.anonymousFunc1=function(){return function closePublishMenu(){b(!1),v(!1)}()};var g=f?(0,P.default)({"tabbar-publish-img":!0,"tabbar-publish-img-active":h}):null,F=f?(0,P.default)({"tabbar-publish-items":!0,"tabbar-publish-items-active":h}):null;this.anonymousFunc2=function(){return s()},this.anonymousFunc3=function(){return ua(I.PUBLISHRESUME)},this.anonymousFunc4=function(){return ua(I.PUBLISHUSED)};var O=u.list.map(function(t,e){t={"privateOriginal":(0,M.internal_get_original)(t)};var n=(0,P.default)({"common-footer-tabbar-list":!0,"common-footer-tabbar-list-active":t.privateOriginal.id===u.key}),r="ejzzz"+e;return o.anonymousFunc0Map[r]=function(){return function changeTabbarAction(t){t.click?"openPublishMenu"==t.click&&(_(),setTimeout(function(){v(!0)},10)):a?c((0,C.changeTabbar)(t.id)):S.default.reLaunch({"url":"/pages/index/index?type="+t.id})}(t.privateOriginal)},{"loopState__temp2":n,"_$indexKey":r,"privateOriginal":t.privateOriginal}});return Object.assign(this.__state,{"anonymousState__temp3":d,"anonymousState__temp4":g,"anonymousState__temp5":F,"tabbar":u,"loopArray42":O,"memberMsg":i,"show":f,"IMGCDNURL":I.IMGCDNURL}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(t){for(var e,n=arguments.length,r=Array(1<n?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return this.anonymousFunc0Map[t]&&(e=this.anonymousFunc0Map)[t].apply(e,r)}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}}]),Tabbar);function Tabbar(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Tabbar);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Tabbar.__proto__||Object.getPrototypeOf(Tabbar)).apply(this,arguments));return t.$usedState=["anonymousState__temp3","anonymousState__temp4","anonymousState__temp5","tabbar","loopArray42","memberMsg","show","IMGCDNURL","notredirect"],t.anonymousFunc0Map={},t.customComponents=[],t}o.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4"],o.$$componentPath="components/tabbar/index",e.default=o,Component(n(0).default.createComponent(o))},"312":function(t,e,n){}},[[311,0,1]]]);