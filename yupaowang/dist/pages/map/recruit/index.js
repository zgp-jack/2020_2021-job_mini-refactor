(wx.webpackJsonp=wx.webpackJsonp||[]).push([[59],{"90":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var N=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],o=!0,a=!1,r=void 0;try{for(var i,u=t[Symbol.iterator]();!(o=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(t){a=!0,r=t}finally{try{!o&&u.return&&u.return()}finally{if(a)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var B=n(0),X=_interopRequireDefault(B),J=n(84),K=n(1),V=n(2),W=n(7),Y=n(8),Z=n(9),tt=n(3),et=_interopRequireDefault(tt);function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}n(91);var nt=Math.PI,a=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(RecruitMap,X.default.Component),o(RecruitMap,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:get(a,e,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0})(RecruitMap.prototype.__proto__||Object.getPrototypeOf(RecruitMap.prototype),"_constructor",this).call(this,t),this.$$refs=new X.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){var a=this;this.__state=t||this.state||{},this.__props=e||this.props||{};var o=this.$prefix,r=(0,B.genCompid)(o+"$compid__34"),i=N(r,2),u=i[0],s=i[1],c=(0,B.useState)([]),l=N(c,2),f=l[0],p=l[1];(0,B.useEffect)(function(){var t=X.default.getStorageSync(W.Areas);t?p(t):(0,K.getAllAreas)().then(function(t){X.default.setStorageSync(W.Areas,t),p(t)})},[]);var y=(0,B.useState)({"id":"","pid":"","city":"","ad_name":""}),d=N(y,2),h=d[0],m=d[1],g=(0,B.useState)(!1),v=N(g,2),_=v[0],b=v[1],M=(0,B.useContext)(J.context),F=M.area,S=M.setArea,A=M.setAreaInfo,C=M.setPublishArea,w=(0,B.useState)(""),P=N(w,2),$=P[0],R=P[1],k=(0,B.useState)([]),O=N(k,2),x=O[0],U=O[1],j=(0,B.useState)([]),I=N(j,2),D=I[0],L=I[1],E=(0,B.useState)(!1),H=N(E,2),z=H[0],T=H[1];function Qa(t){return parseFloat(t)*nt/180}function Sa(t){b(t)}function Xa(e){(0,K.checkAdcodeValid)(e.adcode).then(function(t){"ok"==t.errcode?(A&&(function setUserPublishAreaHistoryItem(e){console.log(e,"itemitemitem");var t=X.default.getStorageSync(W.UserPublishAreaHistory);if(t){var n=t.findIndex(function(t){return t.location===e.location&&t.name===e.name&&t.adcode==e.adcode});t.unshift(e),-1!==n&&t.splice(n,1),t.splice(V.UserPublishAreaHistoryMaxNum),L(t),X.default.setStorageSync(W.UserPublishAreaHistory,t)}else L([e]),X.default.setStorageSync(W.UserPublishAreaHistory,[e])}(e),A({"title":e.name,"location":e.location,"adcode":e.adcode,"info":e.district}),C&&C(e.name)),X.default.navigateBack()):(0,tt.ShowActionModal)({"msg":t.errmsg})}).catch(function(){(0,et.default)("网络错误，请求失败！")})}(0,B.useEffect)(function(){F||function initUserLocationCity(){var t=X.default.getStorageSync(W.UserLocationCity);if(t){var e=(0,Y.getCityInfo)(t,1),n={"id":e.id,"pid":e.pid,"ad_name":e.ad_name,"city":e.name};S(e.name),m(n)}}(),Q()},[]),(0,B.useEffect)(function(){(0,Z.getAmapPoiList)(F+$).then(function(t){var e=X.default.getStorageSync(W.UserLocation),n=t.filter(function(t){return t.name&&t.adcode&&"string"==typeof t.location});n.forEach(function(t){t.distance=function getGreatCircleDistance(t,e){if(!t)return"";var n=t.split(","),o=e.split(","),a=Qa(n[0]),r=Qa(o[0]),i=a-r,u=Qa(n[1])-Qa(o[1]),s=2*Math.asin(Math.sqrt(Math.pow(Math.sin(i/2),2)+Math.cos(a)*Math.cos(r)*Math.pow(Math.sin(u/2),2)));return s*=6378137,(s=parseInt((Math.round(1e4*s)/1e4).toFixed(2)))<1e3?s+"米":(s/1e3).toFixed(1)+"千米"}(e,t.location)}),U(n)})},[$,F]);var Q=function initUserPublishAreaHistory(){var t=X.default.getStorageSync(W.UserPublishAreaHistory)||[];L(t)};this.anonymousFunc0=function(){return Sa(!0)},this.anonymousFunc1=function(t){return function userClickInputAction(t){t.detail.value||T(!0)}(t)},this.anonymousFunc2=function(t){return function userEnterPosition(t){var e=t.detail.value;R(e),T(!e)}(t)},this.anonymousFunc3=function(){return function userCloseMap(){X.default.navigateBack()}()};var q=z?D.map(function(t,e){t={"$original":(0,B.internal_get_original)(t)};var n=z?e+e:null,o="dhzzz"+e;return a.anonymousFunc4Map[o]=function(){return Xa(t.$original)},{"$loopState__temp2":n,"_$indexKey":o,"$original":t.$original}}):[],G=x.map(function(t,e){t={"$original":(0,B.internal_get_original)(t)};var n=e+e,o="dizzz"+e;return a.anonymousFunc5Map[o]=function(){return Xa(t.$original)},{"$loopState__temp4":n,"_$indexKey2":o,"$original":t.$original}});return _&&B.propsManager.set({"data":f,"area":F,"userLoc":h,"userChangeCity":function userChangeCity(t){S(t)},"userTapCityBtn":Sa},s,u),Object.assign(this.__state,{"loopArray36":q,"loopArray37":G,"$compid__34":s,"smAreaText":$,"showHistory":z,"histroyList":D,"lists":x,"IMGCDNURL":V.IMGCDNURL,"showCity":_,"area":F}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(t){for(var e,n=arguments.length,o=Array(1<n?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.anonymousFunc4Map[t]&&(e=this.anonymousFunc4Map)[t].apply(e,o)}},{"key":"anonymousFunc5","value":function anonymousFunc5(t){for(var e,n=arguments.length,o=Array(1<n?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.anonymousFunc5Map[t]&&(e=this.anonymousFunc5Map)[t].apply(e,o)}}]),RecruitMap);function RecruitMap(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,RecruitMap);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(RecruitMap.__proto__||Object.getPrototypeOf(RecruitMap)).apply(this,arguments));return t.$usedState=["loopArray36","loopArray37","$compid__34","smAreaText","showHistory","histroyList","lists","IMGCDNURL","showCity","area"],t.anonymousFunc4Map={},t.anonymousFunc5Map={},t.customComponents=["Cities"],t}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5"],a.$$componentPath="pages/map/recruit/index",e.default=a,Component(n(0).default.createComponent(a,!0))},"91":function(t,e,n){}},[[90,0,1]]]);