(swan.webpackJsonp=swan.webpackJsonp||[]).push([[68],{"309":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var h=function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function sliceIterator(n,e){var o=[],u=!0,t=!1,a=void 0;try{for(var r,s=n[Symbol.iterator]();!(u=(r=s.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(n){t=!0,a=n}finally{try{!u&&s.return&&s.return()}finally{if(t)throw a}}return o}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=function(n,e,o){return e&&defineProperties(n.prototype,e),o&&defineProperties(n,o),n};function defineProperties(n,e){for(var o=0;o<e.length;o++){var u=e[o];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}var d=o(0),g=_interopRequireDefault(d),v=o(3),_=o(2),k=o(1),E=o(48),R=o(4),S=_interopRequireDefault(R),O=o(23),U=o(54),I=o(8);o(310);var M=o(5);function _interopRequireDefault(n){return n&&n.__esModule?n:{"default":n}}var t=(function _inherits(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{"constructor":{"value":n,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(Member,g.default.Component),u(Member,[{"key":"_constructor","value":function _constructor(n){(function get(n,e,o){null===n&&(n=Function.prototype);var u=Object.getOwnPropertyDescriptor(n,e);if(void 0===u){var t=Object.getPrototypeOf(n);return null===t?void 0:get(t,e,o)}if("value"in u)return u.value;var a=u.get;return void 0!==a?a.call(o):void 0})(Member.prototype.__proto__||Object.getPrototypeOf(Member.prototype),"_constructor",this).call(this,n),this.$$refs=new g.default.RefsArray}},{"key":"_createData","value":function _createData(n,e,o){function pa(n){g.default.navigateTo({"url":n})}this.__state=n||this.state||{},this.__props=e||this.props||{},this.$prefix;var u=this.__props.memberIndex,t=void 0===u?0:u,a=(0,v.useDispatch)(),r=(0,v.useSelector)(function(n){return n.User.login}),s=(0,d.useState)(),c=h(s,2),i=c[0],m=c[1],f=(0,v.useSelector)(function(n){return n.msg.jobNumber}),y=(0,v.useSelector)(function(n){return n.msg.messageNumber}),l=(0,d.useState)(!1),p=h(l,2),F=p[0],b=p[1];return(0,d.useEffect)(function(){b((0,I.isIos)())},[]),(0,d.useEffect)(function(){r&&function initMemberInfo(){r&&((0,_.getMemberInfo)().then(function(n){if("ok"==n.errcode){var e={"username":n.member.username||n.member.nickname,"avatar":n.member.headimgurl||"","phone":n.member.tel||"","pwd_status":n.member.pwd_status||"","changeName":2!=n.is_checking||"2"!=n.member.is_check};a((0,E.setMemberInfo)(e)),m(n)}else(0,R.ShowActionModal)({"msg":n.errmsg})}),(0,_.getMemberMsgNumber)((0,I.isIos)()).then(function(n){"ok"==n.errcode&&a((0,U.setMsg)(n.data))}))}()},[r,t]),this.anonymousFunc0=function(){return pa("/pages/userinfo/info/index")},this.anonymousFunc1=function(){return pa("/pages/userinfo/add/index")},this.anonymousFunc2=function(){return pa("/pages/integral/tabber/index?info=0&office=0")},this.anonymousFunc3=function(){return pa("/pages/integral/temp/index")},this.anonymousFunc4=function(){return pa(k.CODEAUTHPATH)},this.anonymousFunc5=function(){return pa(k.PUBLISHEDRECRUIT)},this.anonymousFunc6=function(){return pa(k.PUBLISHRESUME)},this.anonymousFunc7=function(){return pa("/pages/published/used/index")},this.anonymousFunc8=function(){return pa("/subpackage/pages/information/mymessage/index")},this.anonymousFunc9=function(){return pa("/pages/getintegral/index")},this.anonymousFunc10=function(){return pa(k.INVITEPATH)},this.anonymousFunc11=function(){return pa("/pages/integral/tabber/index?info=1")},this.anonymousFunc12=function(){return pa("/pages/integral/tabber/index?info=0")},this.anonymousFunc13=function(){return pa("/pages/realname/index")},this.anonymousFunc14=function(){return pa("/pages/collection/index")},this.anonymousFunc15=function(){return pa("/subpackage/pages/feedbacklist/index")},this.anonymousFunc16=function(){return pa("/subpackage/pages/help/index")},this.anonymousFunc17=function(){return function userClearSession(){g.default.removeStorageSync(M.UserInfo),a((0,O.loginOut)()),a((0,U.resetMsg)()),(0,S.default)("您已成功退出该账号")}()},Object.assign(this.__state,{"login":r,"model":i,"IMGCDNURL":k.IMGCDNURL,"jobNumber":f,"msgNumber":y,"ios":F,"SHOWINVITEUSER":k.SHOWINVITEUSER,"PROREQUESTURL":k.PROREQUESTURL,"REQUESTURL":k.REQUESTURL}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}},{"key":"anonymousFunc12","value":function anonymousFunc12(){}},{"key":"anonymousFunc13","value":function anonymousFunc13(){}},{"key":"anonymousFunc14","value":function anonymousFunc14(){}},{"key":"anonymousFunc15","value":function anonymousFunc15(){}},{"key":"anonymousFunc16","value":function anonymousFunc16(){}},{"key":"anonymousFunc17","value":function anonymousFunc17(){}}]),Member);function Member(){!function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Member);var n=function _possibleConstructorReturn(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(Member.__proto__||Object.getPrototypeOf(Member)).apply(this,arguments));return n.$usedState=["login","model","IMGCDNURL","jobNumber","msgNumber","ios","SHOWINVITEUSER","PROREQUESTURL","REQUESTURL","memberIndex"],n.customComponents=[],n}t.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11","anonymousFunc12","anonymousFunc13","anonymousFunc14","anonymousFunc15","anonymousFunc16","anonymousFunc17"],t.$$componentPath="pages/member/index",e.default=t,Component(o(0).default.createComponent(t))},"310":function(n,e,o){}},[[309,0,1]]]);