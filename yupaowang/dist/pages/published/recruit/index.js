(wx.webpackJsonp=wx.webpackJsonp||[]).push([[62],{"120":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var C=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},O=function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function sliceIterator(n,e){var t=[],o=!0,a=!1,r=void 0;try{for(var u,i=n[Symbol.iterator]();!(o=(u=i.next()).done)&&(t.push(u.value),!e||t.length!==e);o=!0);}catch(n){a=!0,r=n}finally{try{!o&&i.return&&i.return()}finally{if(a)throw r}}return t}(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(n,e,t){return e&&defineProperties(n.prototype,e),t&&defineProperties(n,t),n};function defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var T=t(0),z=_interopRequireDefault(T),j=t(4),D=_interopRequireDefault(t(121)),N=t(1),B=_interopRequireDefault(t(5));t(122);var I=t(2),L=_interopRequireDefault(t(3));function _interopRequireDefault(n){return n&&n.__esModule?n:{"default":n}}function _toConsumableArray(n){if(Array.isArray(n)){for(var e=0,t=Array(n.length);e<n.length;e++)t[e]=n[e];return t}return Array.from(n)}var a=(function _inherits(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{"constructor":{"value":n,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(PublishedRecruit,z.default.Component),o(PublishedRecruit,[{"key":"_constructor","value":function _constructor(n){(function get(n,e,t){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,e);if(void 0===o){var a=Object.getPrototypeOf(n);return null===a?void 0:get(a,e,t)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(t):void 0})(PublishedRecruit.prototype.__proto__||Object.getPrototypeOf(PublishedRecruit.prototype),"_constructor",this).call(this,n),this.$$refs=new z.default.RefsArray}},{"key":"_createData","value":function _createData(n,e,t){var s=this;this.__state=n||this.state||{},this.__props=e||this.props||{},this.$prefix;var o=(0,T.useState)(D.default[0].id),a=O(o,2),r=a[0],u=a[1],i=(0,T.useState)(!0),c=O(i,2),l=c[0],f=c[1],p=(0,T.useState)(!1),d=O(p,2),y=d[0],h=d[1],g=(0,T.useState)(!1),m=O(g,2),v=m[0],_=m[1],b=(0,T.useState)([]),F=O(b,2),M=F[0],w=F[1],P=(0,j.useSelector)(function(n){return n.User}),x=(0,T.useState)({"mid":P.userId,"uuid":P.uuid,"page":1,"type":r}),$=O(x,2),k=$[0],R=$[1];function Na(n){z.default.navigateTo({"url":n})}(0,T.useDidShow)(function(){R(C({},k,{"page":1}))}),(0,T.useEffect)(function(){!function getPublishedRecruitLists(){h(!0),(0,N.userGetPublishedRecruitLists)(k).then(function(n){var e=n.data.lists,t=e.length,o=k.page;f(!!t),w(1===o?e:[].concat(_toConsumableArray(M),_toConsumableArray(e))),v&&(_(!1),z.default.stopPullDownRefresh(),z.default.hideNavigationBarLoading()),h(!1)}).catch(function(){v&&(_(!1),z.default.stopPullDownRefresh(),z.default.hideNavigationBarLoading()),h(!1)})}()},[k]),this.anonymousFunc1=function(){return function reloadPage(){z.default.showNavigationBarLoading(),_(!0),R(C({},k,{"page":1}))}()},this.anonymousFunc2=function(){return function getNextPageData(){l&&!y&&R(C({},k,{"page":k.page+1}))}()};var S=D.default.map(function(n,e){n={"$original":(0,T.internal_get_original)(n)};var t="ejzzz"+e;return s.anonymousFunc0Map[t]=function(){return function userChangePublishedItem(n){u(n),R(C({},k,{"type":n,"page":1}))}(n.$original.id)},{"_$indexKey":t,"$loopState__temp2":(0,B.default)({"user-published-header-item":!0,"user-published-header-item-active":r===n.$original.id}),"$original":n.$original}}),A=M.map(function(n,e){n={"$original":(0,T.internal_get_original)(n)};var t="fazzz"+e;s.anonymousFunc3Map[t]=function(){return Na("/pages/detail/info/index?id="+n.$original.id)};var o="fbzzz"+e;s.anonymousFunc4Map[o]=function(){return Na("/pages/recruit/publish/index?id="+n.$original.id)};var a="fczzz"+e;s.anonymousFunc5Map[a]=function(){return function userStopRecruit(n,t){(0,N.userChangeRecruitStatus)(n).then(function(n){if((0,L.default)(n.errmsg),"ok"==n.errcode){var e=M;e[t].is_check=n.data.is_check.toString(),e[t].is_end=n.data.is_end.toString(),e[t].top_data&&(e[t].top_data.is_top=n.data.top.is_top.toString()),w([].concat(_toConsumableArray(e)))}})}(n.$original.id,e)};var r="fdzzz"+e;s.anonymousFunc6Map[r]=function(){return function handlCancel(n){var e={"infoId":n,"status":0};(0,N.jobUpdateTopStatusAction)(e).then(function(n){n.errcode&&((0,L.default)(n.errmsg),R(C({},k,{"page":k.page})))})}(n.$original.id)};var u="fezzz"+e;s.anonymousFunc7Map[u]=function(){return function handleTopping(n){if("2"===n.is_end)return z.default.showModal({"title":"提示","content":"已招到状态不能进行置顶操作，请修改招工状态","showCancel":!1}),!1;if("1"==n.top){var e=(new Date).getTime()/1e3,t=n.top_data,o=t.end_time,a=t.is_top;if(e>parseInt(o))return Na("/pages/topping/index?id="+n.id),!1;var r={"infoId":n.id,"status":"0"==a?"1":"0"};(0,N.jobUpdateTopStatusAction)(r).then(function(n){if("ok"===n.errcode)(0,L.default)(n.errmsg),R(C({},k,{"page":k.page}));else{if("auth_forbid"===n.errcode)return void z.default.showModal({"title":"温馨提示","content":n.errmsg,"cancelText":"取消","confirmText":"去实名","success":function success(n){n.confirm&&z.default.navigateTo({"url":"/pages/realname/index?backtwo=backtwo"})}});if("member_forbid"==n.errcode)return void z.default.showModal({"title":"温馨提示","content":"mydata.errmsg","cancelText":"取消","confirmText":"联系客服","success":function success(n){if(n.confirm){var e=I.SERVERPHONE;z.default.makePhoneCall({"phoneNumber":e})}}});z.default.showToast({"title":n.errmsg,"icon":"none","duration":1500})}})}else Na("/pages/topping/index?id="+n.id)}(n.$original)};var i="ffzzz"+e;return s.anonymousFunc8Map[i]=function(){return Na("/pages/topping/index?id="+n.$original.id+"&type=1")},{"_$indexKey2":t,"_$indexKey3":o,"_$indexKey4":a,"_$indexKey5":r,"_$indexKey6":u,"_$indexKey7":i,"$original":n.$original}});return Object.assign(this.__state,{"loopArray51":S,"loopArray52":A,"HeaderList":D.default,"refresh":v,"lists":M,"IMGCDNURL":I.IMGCDNURL,"more":l,"searchData":k}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(n){for(var e,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc0Map[n]&&(e=this.anonymousFunc0Map)[n].apply(e,o)}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(n){for(var e,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc3Map[n]&&(e=this.anonymousFunc3Map)[n].apply(e,o)}},{"key":"anonymousFunc4","value":function anonymousFunc4(n){for(var e,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc4Map[n]&&(e=this.anonymousFunc4Map)[n].apply(e,o)}},{"key":"anonymousFunc5","value":function anonymousFunc5(n){for(var e,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc5Map[n]&&(e=this.anonymousFunc5Map)[n].apply(e,o)}},{"key":"anonymousFunc6","value":function anonymousFunc6(n){for(var e,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc6Map[n]&&(e=this.anonymousFunc6Map)[n].apply(e,o)}},{"key":"anonymousFunc7","value":function anonymousFunc7(n){for(var e,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc7Map[n]&&(e=this.anonymousFunc7Map)[n].apply(e,o)}},{"key":"anonymousFunc8","value":function anonymousFunc8(n){for(var e,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc8Map[n]&&(e=this.anonymousFunc8Map)[n].apply(e,o)}}]),PublishedRecruit);function PublishedRecruit(){!function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,PublishedRecruit);var n=function _possibleConstructorReturn(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,(PublishedRecruit.__proto__||Object.getPrototypeOf(PublishedRecruit)).apply(this,arguments));return n.config={"navigationBarTitleText":"我的招工信息","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},n.$usedState=["loopArray51","loopArray52","HeaderList","refresh","lists","IMGCDNURL","more","searchData"],n.anonymousFunc0Map={},n.anonymousFunc3Map={},n.anonymousFunc4Map={},n.anonymousFunc5Map={},n.anonymousFunc6Map={},n.anonymousFunc7Map={},n.anonymousFunc8Map={},n.customComponents=["Nodata"],n}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8"],a.$$componentPath="pages/published/recruit/index",a.config={"navigationBarTitleText":"我的招工信息","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.default=a,Component(t(0).default.createComponent(a,!0))},"121":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});e.default=[{"title":"全部","id":"all"},{"title":"正在招","id":"being"},{"title":"审核中","id":"checking"},{"title":"未通过","id":"fail"},{"title":"已招满","id":"end"}]},"122":function(n,e,t){}},[[120,0,1]]]);