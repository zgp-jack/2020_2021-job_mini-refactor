(tt.webpackJsonp=tt.webpackJsonp||[]).push([[87],{"109":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},W=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(a=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&u.return&&u.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var z=n(0),G=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(z),H=n(1),K=n(6);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(110);var r=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Fleamarket,G.default.Component),a(Fleamarket,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0})(Fleamarket.prototype.__proto__||Object.getPrototypeOf(Fleamarket.prototype),"_constructor",this).call(this,e),this.$$refs=new G.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var a=this.$prefix,r=(0,z.genCompid)(a+"$compid__35"),o=W(r,2),i=o[0],u=o[1],s=(0,z.genCompid)(a+"$compid__36"),c=W(s,2),l=c[0],p=c[1],f=(0,z.genCompid)(a+"$compid__37"),_=W(f,2),y=_[0],m=_[1],d=(0,z.useState)(!0),h=W(d,2),g=h[0],v=h[1],b=G.default.getStorageSync(K.UserListChooseCity),S=(0,z.useState)(!1),k=W(S,2),w=k[0],C=k[1],O=(0,z.useState)([]),F=W(O,2),T=F[0],P=F[1],$=(0,z.useState)({"page":1,"list_type":"fleamarket","area_id":b.id,"classify_id":"0","attribute_id":"","keywords":""}),j=W($,2),x=j[0],A=j[1],D=(0,z.useState)(""),B=W(D,2),R=B[0],M=B[1],E=(0,z.useState)(0),L=W(E,2),N=L[0],U=L[1];function Sa(e){return function inputSearch(e){M(e)}(e)}function Ta(){return function setSearchDatas(e,t){x[e]=t,A(q({},x,{"page":1}))}("keywords",R)}(0,z.useEffect)(function(){(0,H.getFleamarketList)(x).then(function(e){G.default.hideNavigationBarLoading(),e.length||v(!1),1===x.page?(v(!0),I(),P([[].concat(_toConsumableArray(e))])):P([].concat(_toConsumableArray(T),[[].concat(_toConsumableArray(e))])),w&&C(!1)})},[x]);var I=function goToScrollTop(){U(N?0:.1)};this.anonymousFunc0=function(){return function pullDownAction(){C(!0),A(q({},x,{"page":1}))}()},this.anonymousFunc1=function(){return function getNextPageData(){g&&(G.default.showNavigationBarLoading(),A(q({},x,{"page":x.page+1})))}()};var J=(0,z.internal_inline_style)({"height":"8px"});return z.propsManager.set({"placeholder":"跳蚤市场","value":"","setRemark":Sa,"setSearchData":Ta},u,i),z.propsManager.set({"setSearchData":function searchChange(e){A(q({},x,e,{"page":1}))}},p,l),z.propsManager.set({"data":T,"hasMore":g},m,y),Object.assign(this.__state,{"anonymousState__temp":Sa,"anonymousState__temp2":Ta,"anonymousState__temp3":J,"$compid__35":u,"$compid__36":p,"$compid__37":m,"refresh":w,"listScrollTop":N}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}}]),Fleamarket);function Fleamarket(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Fleamarket);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Fleamarket.__proto__||Object.getPrototypeOf(Fleamarket)).apply(this,arguments));return e.config={"navigationBarTitleText":"二手交易列表","enablePullDownRefresh":!1,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","$compid__35","$compid__36","$compid__37","refresh","listScrollTop"],e.customComponents=["Search","UsedCondition","WechatNotice","UsedList","Tabbar"],e}r.$$events=["anonymousFunc0","anonymousFunc1"],r.$$componentPath="pages/used/lists/index",r.config={"navigationBarTitleText":"二手交易列表","enablePullDownRefresh":!1,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=r,Page(n(0).default.createComponent(r,!0))},"110":function(e,t,n){}},[[109,0,1]]]);