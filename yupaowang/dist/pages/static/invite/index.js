(swan.webpackJsonp=swan.webpackJsonp||[]).push([[74],{"138":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=n(0),l=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(f),p=n(1),v=n(3),y=n(2),h=n(4),d=n(6);n(139);var o=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Invite,l.default.Component),r(Invite,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0})(Invite.prototype.__proto__||Object.getPrototypeOf(Invite.prototype),"_constructor",this).call(this,e),this.$$refs=new l.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var r=(0,f.useState)(""),o=c(r,2),i=o[0],a=o[1],u=(0,v.useSelector)(function(e){return e.User.login});return(0,f.useEffect)(function(){u&&(0,y.getUserInviteLink)().then(function(e){"ok"==e.errcode?a(e.link):(0,h.ShowActionModal)({"msg":e.errmsg,"success":function success(){return l.default.navigateBack()}})})},[u]),(0,f.useShareAppMessage)(function(){return s({},(0,d.getUserShareMessage)(),{"path":"/pages/index/index"})}),this.anonymousFunc0=function(){return function copyUserInviteLink(){l.default.setClipboardData({"data":i,"success":function success(){l.default.hideToast(),(0,h.ShowActionModal)({"title":"恭喜您","msg":"您的邀请链接已复制到粘贴板，赶快去邀请好友吧！"})}})}()},Object.assign(this.__state,{"ISCANSHARE":p.ISCANSHARE,"IMGCDNURL":p.IMGCDNURL,"link":i}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}}]),Invite);function Invite(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Invite);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Invite.__proto__||Object.getPrototypeOf(Invite)).apply(this,arguments));return e.config={"navigationBarTitleText":"邀请好友"},e.$usedState=["ISCANSHARE","IMGCDNURL","link"],e.customComponents=["Auth"],e}o.$$events=["anonymousFunc0"],o.$$componentPath="pages/static/invite/index",o.config={"navigationBarTitleText":"邀请好友"},t.default=o,Page(n(0).default.createComponent(o,!0))},"139":function(e,t,n){}},[[138,0,1]]]);