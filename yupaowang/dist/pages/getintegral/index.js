(swan.webpackJsonp=swan.webpackJsonp||[]).push([[44],{"142":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var f=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(o=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&i.return&&i.return()}finally{if(r)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var p=n(0),y=_interopRequireDefault(p),h=n(1),g=n(6);n(143);var m=_interopRequireDefault(n(5));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var r=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GetIntegral,y.default.Component),o(GetIntegral,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0})(GetIntegral.prototype.__proto__||Object.getPrototypeOf(GetIntegral.prototype),"_constructor",this).call(this,e),this.$$refs=new y.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=(0,p.useState)(!0),r=f(o,2),a=r[0],u=r[1],i=(0,p.useState)({"showBtn":0,"show":0}),s=f(i,2),c=s[0];s[1],(0,p.useEffect)(function(){"ios"!==y.default.getSystemInfoSync().platform&&u(!1)},[]),this.anonymousFunc0=function(){return(0,g.userJumpPage)(h.INVITEPATH)},this.anonymousFunc1=function(){return(0,g.userJumpPage)("/pages/recharge/index")},this.anonymousFunc2=function(){return(0,g.userJumpPage)("/subpackage/pages/turntable/index")};var l=c.show?(0,m.default)({"getintegral-item-btn":!0,"getintegral-list-btn-dis":!c.showBtn}):null;return this.anonymousFunc3=function(){return function userCallPhone(){y.default.makePhoneCall({"phoneNumber":h.SERVERPHONE})}()},Object.assign(this.__state,{"anonymousState__temp":l,"SHOWINVITEUSER":h.SHOWINVITEUSER,"ios":a,"turntable":c,"IMGCDNURL":h.IMGCDNURL,"SERVERPHONE":h.SERVERPHONE}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}}]),GetIntegral);function GetIntegral(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GetIntegral);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GetIntegral.__proto__||Object.getPrototypeOf(GetIntegral)).apply(this,arguments));return e.config={"navigationBarTitleText":"鱼泡网-获取积分"},e.$usedState=["anonymousState__temp","SHOWINVITEUSER","ios","turntable","IMGCDNURL","SERVERPHONE"],e.customComponents=["Auth"],e}r.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3"],r.$$componentPath="pages/getintegral/index",r.config={"navigationBarTitleText":"鱼泡网-获取积分"},t.default=r,Page(n(0).default.createComponent(r,!0))},"143":function(e,t,n){}},[[142,0,1]]]);