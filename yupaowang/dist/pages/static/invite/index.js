(swan.webpackJsonp=swan.webpackJsonp||[]).push([[76],{"128":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var E=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(a=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&u.return&&u.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var L=n(0),q=_interopRequireDefault(L),J=_interopRequireDefault(n(6)),K=n(1);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(129);var r=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(InvitePage,q.default.Component),a(InvitePage,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0})(InvitePage.prototype.__proto__||Object.getPrototypeOf(InvitePage.prototype),"_constructor",this).call(this,e),this.$$refs=new q.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){var a=this;this.__state=e||this.state||{},this.__props=t||this.props||{};var r=this.$prefix,o=(0,L.genCompid)(r+"$compid__50"),i=E(o,2),u=i[0],l=i[1],c=(0,L.useState)("-1"),s=E(c,2),p=s[0],f=s[1],y=(0,L.useState)({"page":1}),g=E(y,2),v=g[0],d=g[1],_=(0,L.useState)("暂无相关资讯"),h=E(_,2),m=h[0],b=h[1],O=(0,L.useState)([]),w=E(O,2),P=w[0],A=w[1],F=(0,L.useState)(!0),S=E(F,2),T=S[0],k=S[1],x=(0,L.useState)(0),C=E(x,2),$=C[0],j=C[1],I=(0,L.useState)({"item":[]}),M=E(I,2),B=M[0],R=M[1];(0,L.useEffect)(function(){(0,K.newsTypesAction)().then(function(e){R({"item":e.data})})},[]),(0,L.useEffect)(function(){var t={"page":v.page,"newsType":p};(0,K.newListAction)(t).then(function(e){q.default.hideNavigationBarLoading(),e.data.length||k(!1),A(1===t.page?[].concat(_toConsumableArray(e.data)):[].concat(_toConsumableArray(P),_toConsumableArray(e.data)))})},[p,v]),(0,L.useReachBottom)(function(){T&&d({"page":v.page+1})}),this.anonymousFunc0=function(e){console.log(e)};var D=B.item?B.item.map(function(e,t){e={"privateOriginal":(0,L.internal_get_original)(e)};var n="fdzzz"+t;return a.anonymousFunc1Map[n]=function(){!function handleTable(e,t,n){j(80*n),f(e),b(t),d({"page":1}),k(!0),q.default.pageScrollTo({"scrollTop":0})}(e.privateOriginal.index,e.privateOriginal.name,t)},{"_$indexKey":n,"loopState__temp2":B.item?(0,J.default)({"invite-tab-active":e.privateOriginal.index===p}):null,"privateOriginal":e.privateOriginal}}):[],z=P?P.map(function(e,t){e={"privateOriginal":(0,L.internal_get_original)(e)};var n="fezzz"+t;return a.anonymousFunc2Map[n]=function(){return function userRouteJump(e){q.default.navigateTo({"url":e})}("/subpackage/pages/notice/index?id="+e.privateOriginal.id)},{"_$indexKey2":n,"privateOriginal":e.privateOriginal}}):[];return P.length||L.propsManager.set({"text":m},l,u),Object.assign(this.__state,{"tab":B,"loopArray46":D,"loopArray47":z,"$compid__50":l,"scrollLeft":$,"list":P,"pull":T}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(e){for(var t,n=arguments.length,a=Array(1<n?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return this.anonymousFunc1Map[e]&&(t=this.anonymousFunc1Map)[e].apply(t,a)}},{"key":"anonymousFunc2","value":function anonymousFunc2(e){for(var t,n=arguments.length,a=Array(1<n?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return this.anonymousFunc2Map[e]&&(t=this.anonymousFunc2Map)[e].apply(t,a)}}]),InvitePage);function InvitePage(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,InvitePage);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(InvitePage.__proto__||Object.getPrototypeOf(InvitePage)).apply(this,arguments));return e.config={"navigationBarTitleText":"鱼泡网-新闻资讯","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["tab","loopArray46","loopArray47","$compid__50","scrollLeft","list","pull"],e.anonymousFunc1Map={},e.anonymousFunc2Map={},e.customComponents=["Nodata"],e}r.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2"],r.$$componentPath="pages/static/invite/index",r.config={"navigationBarTitleText":"鱼泡网-新闻资讯","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=r,Page(n(0).default.createComponent(r,!0))},"129":function(e,t,n){}},[[128,0,1]]]);