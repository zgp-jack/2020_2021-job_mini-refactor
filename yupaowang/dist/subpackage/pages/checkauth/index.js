(wx.webpackJsonp=wx.webpackJsonp||[]).push([[91],{"64":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var _=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,u=void 0;try{for(var c,a=e[Symbol.iterator]();!(o=(c=a.next()).done)&&(n.push(c.value),!t||n.length!==t);o=!0);}catch(e){r=!0,u=e}finally{try{!o&&a.return&&a.return()}finally{if(r)throw u}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var m=n(0),v=_interopRequireDefault(m),b=n(2),g=n(6),k=n(1),w=n(4);n(65);var O=n(3),C=_interopRequireDefault(O);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var r=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(CheckAuth,v.default.Component),o(CheckAuth,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(n):void 0})(CheckAuth.prototype.__proto__||Object.getPrototypeOf(CheckAuth.prototype),"_constructor",this).call(this,e),this.$$refs=new v.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){function la(){d&&(0,k.checkMineAuthInfo)().then(function(e){"auth_pass"!=e.errcode&&("auth_not_pass"==e.errcode?v.default.showModal({"title":"温馨提示","content":e.errmsg,"success":function success(e){e.confirm?v.default.navigateTo({"url":""}):v.default.reLaunch({"url":"/pages/index/index"})}}):(0,O.ShowActionModal)({"msg":e.errmsg,"success":function success(){v.default.reLaunch({"url":"/pages/index/index"})}}))})}this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=(0,m.useState)(""),r=_(o,2),u=r[0],c=r[1],a=(0,m.useState)(),i=_(a,2),s=i[0],l=i[1],f=(0,m.useState)(!1),h=_(f,2),p=h[0],y=h[1],d=(0,w.useSelector)(function(e){return e.User.login});return(0,m.useDidShow)(function(){la()}),(0,m.useEffect)(function(){la()},[d]),this.anonymousFunc0=function(e){return function userEnterTel(e){c(e.detail.value)}(e)},this.anonymousFunc1=function(){return function userCheckAuth(){(0,g.isPhone)(u)?(0,k.getUserIsAuth)(u).then(function(e){"ok"==e.errcode?(l(e.member),y(!0)):((0,O.ShowActionModal)(e.errmsg),y(!1))}).catch(function(){(0,O.ShowActionModal)({"msg":"网络错误，请求失败","success":function success(){v.default.navigateBack()}})}):(0,C.default)("请先输入正确的手机号码")}()},this.anonymousFunc2=function(){return function userCallPhone(){v.default.makePhoneCall({"phoneNumber":b.SERVERPHONE})}()},Object.assign(this.__state,{"model":s,"tel":u,"show":p,"SERVERPHONE":b.SERVERPHONE}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}}]),CheckAuth);function CheckAuth(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,CheckAuth);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(CheckAuth.__proto__||Object.getPrototypeOf(CheckAuth)).apply(this,arguments));return e.$usedState=["model","tel","show","SERVERPHONE"],e.customComponents=["Auth"],e}r.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2"],r.$$componentPath="subpackage/pages/checkauth/index",t.default=r,Component(n(0).default.createComponent(r,!0))},"65":function(e,t,n){}},[[64,0,1]]]);