(swan.webpackJsonp=swan.webpackJsonp||[]).push([[3],{"247":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var p=_interopRequireDefault(n(0)),h=n(1),d=n(2),y=n(4),_=_interopRequireDefault(y),g=n(3),v=n(23),m=n(5),b=n(7);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(248);var u=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Auth,p.default.Component),o(Auth,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var u=Object.getPrototypeOf(e);return null===u?void 0:get(u,t,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0})(Auth.prototype.__proto__||Object.getPrototypeOf(Auth.prototype),"_constructor",this).call(this,e),this.$$refs=new p.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){function W(){p.default.navigateBack()}this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=this.__props,u=o.page,s=void 0!==u&&u,a=o.callback,r=o.userCancelAuth,c=(0,g.useDispatch)(),i=(0,g.useSelector)(function(e){return e.User.login}),f=function decodeSessionKey(t){p.default.getSetting({"success":function success(e){e.authSetting["scope.userInfo"]?l(t):p.default.getUserInfo({"success":function success(){l(t)},"fail":function fail(){p.default.openSetting()}})}})},l=function doAuthRequest(r){p.default.getUserInfo({"success":function success(e){var t=e.encryptedData,n=e.iv,o=p.default.getStorageSync(m.REFID),u={"session_key":r,"encryptedData":t,"iv":n,"refId":o||0,"source":""};(0,d.GetUserInfo)(u).then(function(e){if("ok"===e.errcode){var t={"userId":e.data.id,"token":e.data.sign.token,"tokenTime":e.data.sign.time,"uuid":e.data.uuid,"login":!0};p.default.setStorageSync(m.UserInfo,t),c((0,v.setUserInfo)(t)),a&&a(),s&&W()}else(0,y.errMsg)(e.errmsg)})}})};return this.anonymousFunc0=function(e){return function userAuthAction(e){e.detail.userInfo?p.default.login({"success":function success(e){e.code?(0,d.getUserSessionKey)(e.code).then(function(e){var t=e.session_key;f(t)}):(0,_.default)("授权失败，客服电话"+h.SERVERPHONE)}}):(0,y.errMsg)("您取消了授权")}(e)},this.anonymousFunc1=function(){return W()},this.anonymousFunc2=function(){return function cancelAuth(){(r||b.userCancelAuth)()}()},Object.assign(this.__state,{"login":i,"page":s,"ISWEIXIN":!1,"IMGCDNURL":h.IMGCDNURL}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}}]),Auth);function Auth(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Auth);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Auth.__proto__||Object.getPrototypeOf(Auth)).apply(this,arguments));return e.$usedState=["login","page","ISWEIXIN","IMGCDNURL","callback","userCancelAuth"],e.customComponents=["AtMessage","LoginComponet"],e}u.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2"],u.$$componentPath="components/auth/index",t.default=u,Component(n(0).default.createComponent(u))},"248":function(e,t,n){}},[[247,0,1]]]);