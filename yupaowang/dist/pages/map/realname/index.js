(tt.webpackJsonp=tt.webpackJsonp||[]).push([[59],{"135":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var G=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],a=!0,o=!1,r=void 0;try{for(var i,u=e[Symbol.iterator]();!(a=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{!a&&u.return&&u.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var N=n(0),X=_interopRequireDefault(N),J=n(1),K=n(2),V=n(6),W=n(9),Y=n(8),Z=n(4),ee=_interopRequireDefault(Z),te=n(3);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(136);var ne=Math.PI,o=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(RealnameMap,X.default.Component),a(RealnameMap,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in a)return a.value;var r=a.get;return void 0!==r?r.call(n):void 0})(RealnameMap.prototype.__proto__||Object.getPrototypeOf(RealnameMap.prototype),"_constructor",this).call(this,e),this.$$refs=new X.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){var o=this;this.__state=e||this.state||{},this.__props=t||this.props||{};var a=this.$prefix,r=(0,N.genCompid)(a+"$compid__44"),i=G(r,2),u=i[0],s=i[1],c=(0,te.useSelector)(function(e){return e.realname.setRealnameArea}),l=(0,N.useState)(""),f=G(l,2),p=f[0],y=f[1],m=(0,N.useState)([]),h=G(m,2),d=h[0],g=h[1],v=(0,N.useState)({"id":"","pid":"","city":"","ad_name":""}),_=G(v,2),M=_[0],b=_[1],S=(0,N.useState)(!1),F=G(S,2),A=F[0],C=F[1],P=(0,N.useState)(""),$=G(P,2),w=$[0],R=$[1],k=(0,N.useState)([]),O=G(k,2),x=O[0],U=O[1],j=(0,N.useState)([]),I=G(j,2),D=I[0],L=I[1],T=(0,N.useState)(!1),E=G(T,2),H=E[0],z=E[1];function Qa(e){return parseFloat(e)*ne/180}function Sa(e){C(e)}function Xa(t){(0,J.checkAdcodeValid)(t.adcode).then(function(e){"ok"==e.errcode?(function setUserPublishAreaHistoryItem(t){var e=X.default.getStorageSync(V.UserPublishAreaHistory);if(e){var n=e.findIndex(function(e){return e.location===t.location&&e.name===t.name&&e.adcode==t.adcode});e.unshift(t),-1!==n&&e.splice(n,1),e.splice(K.UserPublishAreaHistoryMaxNum),L(e),X.default.setStorageSync(V.UserPublishAreaHistory,e)}else L([t]),X.default.setStorageSync(V.UserPublishAreaHistory,[t])}(t),c(t.name),X.default.navigateBack()):(0,Z.ShowActionModal)({"msg":e.errmsg})}).catch(function(){(0,ee.default)("网络错误，请求失败！")})}(0,N.useEffect)(function(){var e=X.default.getStorageSync(V.Areas);e?g(e):(0,J.getAllAreas)().then(function(e){X.default.setStorageSync(V.Areas,e),g(e)})},[]),(0,N.useEffect)(function(){p||function initUserLocationCity(){var e=X.default.getStorageSync(V.UserLocationCity);if(e){var t=(0,W.getCityInfo)(e,1),n={"id":t.id,"pid":t.pid,"ad_name":t.ad_name,"city":t.name};y(t.name),b(n)}}(),B()},[]),(0,N.useEffect)(function(){(0,Y.getAmapPoiList)(p+w).then(function(e){var t=X.default.getStorageSync(V.UserLocation),n=e.filter(function(e){return e.name&&e.adcode&&"string"==typeof e.location});n.forEach(function(e){e.distance=function getGreatCircleDistance(e,t){if(!e)return"";var n=e.split(","),a=t.split(","),o=Qa(n[0]),r=Qa(a[0]),i=o-r,u=Qa(n[1])-Qa(a[1]),s=2*Math.asin(Math.sqrt(Math.pow(Math.sin(i/2),2)+Math.cos(o)*Math.cos(r)*Math.pow(Math.sin(u/2),2)));return s*=6378137,(s=parseInt((Math.round(1e4*s)/1e4).toFixed(2)))<1e3?s+"米":(s/1e3).toFixed(1)+"千米"}(t,e.location)}),U(n)})},[w,p]);var B=function initUserPublishAreaHistory(){var e=X.default.getStorageSync(V.UserPublishAreaHistory)||[];L(e)};this.anonymousFunc0=function(){return Sa(!0)},this.anonymousFunc1=function(e){return function userClickInputAction(e){e.detail.value||z(!0)}(e)},this.anonymousFunc2=function(e){return function userEnterPosition(e){var t=e.detail.value;R(t),z(!t)}(e)},this.anonymousFunc3=function(){return function userCloseMap(){X.default.navigateBack()}()};var Q=H?D.map(function(e,t){e={"$original":(0,N.internal_get_original)(e)};var n=H?t+t:null,a="fezzz"+t;return o.anonymousFunc4Map[a]=function(){return Xa(e.$original)},{"$loopState__temp2":n,"_$indexKey":a,"$original":e.$original}}):[],q=x.map(function(e,t){e={"$original":(0,N.internal_get_original)(e)};var n=t+t,a="ffzzz"+t;return o.anonymousFunc5Map[a]=function(){return Xa(e.$original)},{"$loopState__temp4":n,"_$indexKey2":a,"$original":e.$original}});return A&&N.propsManager.set({"data":d,"area":p,"userLoc":M,"userChangeCity":function userChangeCity(e){y(e)},"userTapCityBtn":Sa},s,u),Object.assign(this.__state,{"loopArray54":Q,"loopArray55":q,"$compid__44":s,"smAreaText":w,"showHistory":H,"histroyList":D,"lists":x,"IMGCDNURL":K.IMGCDNURL,"showCity":A,"area":p}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(e){for(var t,n=arguments.length,a=Array(1<n?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return this.anonymousFunc4Map[e]&&(t=this.anonymousFunc4Map)[e].apply(t,a)}},{"key":"anonymousFunc5","value":function anonymousFunc5(e){for(var t,n=arguments.length,a=Array(1<n?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return this.anonymousFunc5Map[e]&&(t=this.anonymousFunc5Map)[e].apply(t,a)}}]),RealnameMap);function RealnameMap(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,RealnameMap);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(RealnameMap.__proto__||Object.getPrototypeOf(RealnameMap)).apply(this,arguments));return e.config={"navigationBarTitleText":"地址选择"},e.$usedState=["loopArray54","loopArray55","$compid__44","smAreaText","showHistory","histroyList","lists","IMGCDNURL","showCity","area"],e.anonymousFunc4Map={},e.anonymousFunc5Map={},e.customComponents=["Cities"],e}o.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5"],o.$$componentPath="pages/map/realname/index",o.config={"navigationBarTitleText":"地址选择"},t.default=o,Page(n(0).default.createComponent(o,!0))},"136":function(e,t,n){}},[[135,0,1]]]);