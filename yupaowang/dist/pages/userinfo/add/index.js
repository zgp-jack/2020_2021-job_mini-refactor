(swan.webpackJsonp=swan.webpackJsonp||[]).push([[103],{"168":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var m=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,u=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(e){u=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(u)throw r}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var v=t(0),_=_interopRequireDefault(v),h=_interopRequireDefault(t(15)),b=t(2);t(169);var F=t(8),g=_interopRequireDefault(t(4)),k=_interopRequireDefault(t(6));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(UserInfoAdd,_.default.Component),o(UserInfoAdd,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var u=Object.getPrototypeOf(e);return null===u?void 0:get(u,n,t)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(t):void 0})(UserInfoAdd.prototype.__proto__||Object.getPrototypeOf(UserInfoAdd.prototype),"_constructor",this).call(this,e),this.$$refs=new _.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){function ka(e,n){var t=e.detail.value,o=JSON.parse(JSON.stringify(y));o[n]=t,p(o)}this.__state=e||this.state||{},this.__props=n||this.props||{},this.$prefix;var o=(0,h.default)(),u=o.text,r=o.userGetCode,a=(0,v.useState)(!0),s=m(a,2),i=s[0],c=s[1],f=(0,v.useState)({"username":"","pwd":"","tel":"","code":""}),l=m(f,2),y=l[0],p=l[1];this.anonymousFunc0=function(e){return ka(e,"username")},this.anonymousFunc1=function(e){return ka(e,"tel")},this.anonymousFunc2=function(e){return ka(e,"code")},this.anonymousFunc3=function(){return r(y.tel)},this.anonymousFunc4=function(e){return ka(e,"pwd")};var d=(0,k.default)({"pass-eyes-icon":!0,"pass-eyes-icon-dis":i});return this.anonymousFunc5=function(){return c(!i)},this.anonymousFunc6=function(){return function userSubmitInfo(){y.username?(0,F.isPhone)(y.tel)?y.code?y.pwd?(0,b.postUserAddInfo)(y).then(function(e){(0,g.default)(e.errmsg),"ok"==e.errcode&&_.default.navigateBack()}):(0,g.default)("请输入您的密码"):(0,g.default)("请输入手机验证码"):(0,g.default)("请输入正确的手机号码"):(0,g.default)("请输入您的用户名")}()},Object.assign(this.__state,{"anonymousState__temp":d,"userInfo":y,"disPass":i,"text":u}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}}]),UserInfoAdd);function UserInfoAdd(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,UserInfoAdd);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(UserInfoAdd.__proto__||Object.getPrototypeOf(UserInfoAdd)).apply(this,arguments));return e.config={"navigationBarTitleText":"完善资料"},e.$usedState=["anonymousState__temp","userInfo","disPass","text"],e.customComponents=[],e}u.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6"],u.$$componentPath="pages/userinfo/add/index",u.config={"navigationBarTitleText":"完善资料"},n.default=u,Page(t(0).default.createComponent(u,!0))},"169":function(e,n,t){}},[[168,0,1]]]);