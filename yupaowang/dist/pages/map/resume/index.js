(swan.webpackJsonp=swan.webpackJsonp||[]).push([[59],{"138":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),e.contextItem=void 0;var st=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],o=!0,a=!1,r=void 0;try{for(var i,u=t[Symbol.iterator]();!(o=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(t){a=!0,r=t}finally{try{!o&&u.return&&u.return()}finally{if(a)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var ct=n(0),lt=_interopRequireDefault(ct),pt=n(2),ft=n(1),yt=n(6),mt=n(9),dt=n(7),ht=n(4),vt=_interopRequireDefault(ht),gt=n(3),_t=n(17);function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}n(139);var bt=Math.PI,Ft=e.contextItem=(0,ct.createContext)({}),a=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(ResumeMap,lt.default.Component),o(ResumeMap,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:get(a,e,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0})(ResumeMap.prototype.__proto__||Object.getPrototypeOf(ResumeMap.prototype),"_constructor",this).call(this,t),this.$$refs=new lt.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){var a=this;this.__state=t||this.state||{},this.__props=e||this.props||{};var o=this.$prefix,r=(0,ct.genCompid)(o+"$compid__51"),i=st(r,2),u=i[0],s=i[1],c=(0,ct.useRouter)().params,l=c.provinceAdress,p=c.provinceAdressName,f=(0,gt.useDispatch)(),y=(0,ct.useState)(l),m=st(y,2),d=m[0],h=m[1],v=(0,ct.useState)(p),g=st(v,2),_=g[0],b=g[1],F=(0,ct.useState)([]),M=st(F,2),S=M[0],C=M[1],A=(0,ct.useState)(""),O=st(A,2),w=O[0],k=(O[1],(0,ct.useState)({"id":"","pid":"","city":"","ad_name":""})),P=st(k,2),R=P[0],x=P[1],$=(0,ct.useState)(!1),j=st($,2),I=j[0],D=j[1],L=(0,ct.useState)(""),T=st(L,2),E=T[0],U=(T[1],(0,ct.useState)("")),z=st(U,2),B=z[0],H=z[1],q=(0,ct.useState)([]),G=st(q,2),N=G[0],J=G[1],K=(0,ct.useState)([]),Q=st(K,2),V=Q[0],W=Q[1],X=(0,ct.useState)(!1),Y=st(X,2),Z=Y[0],tt=Y[1],et=(0,ct.useState)(""),nt=st(et,2),ot=nt[0];function kb(t){return parseFloat(t)*bt/180}function mb(t){D(t)}function rb(e){(0,pt.checkAdcodeAction)({"adcode":e.adcode}).then(function(t){"ok"==t.errcode?(f((0,_t.setAreaInfo)({"title":e.name,"location":e.location,"adcode":e.adcode,"info":e.district,"provice":t.province,"city":t.city})),lt.default.navigateBack()):(0,ht.ShowActionModal)({"msg":t.errmsg})}).catch(function(t){(0,vt.default)("网络错误，请求失败！")})}nt[1],(0,ct.useEffect)(function(){var t=lt.default.getStorageSync(yt.Areas);t?C(t):(0,pt.getAllAreas)().then(function(t){lt.default.setStorageSync(yt.Areas,t),C(t)})},[]),(0,ct.useEffect)(function(){_||function initUserLocationCity(){var t=lt.default.getStorageSync(yt.UserLocationCity);if(t){var e=(0,mt.getCityInfo)(t,1),n={"id":e.id,"pid":e.pid,"ad_name":e.ad_name,"city":e.name};x(n)}}(),at()},[]),(0,ct.useEffect)(function(){(0,dt.getAmapPoiList)(_+B).then(function(t){var e=lt.default.getStorageSync(yt.UserLocation),n=t.filter(function(t){return t.name&&t.adcode&&"string"==typeof t.location});n.forEach(function(t){t.distance=function getGreatCircleDistance(t,e){if(!t)return"";var n=t.split(","),o=e.split(","),a=kb(n[0]),r=kb(o[0]),i=a-r,u=kb(n[1])-kb(o[1]),s=2*Math.asin(Math.sqrt(Math.pow(Math.sin(i/2),2)+Math.cos(a)*Math.cos(r)*Math.pow(Math.sin(u/2),2)));return s*=6378137,(s=parseInt((Math.round(1e4*s)/1e4).toFixed(2)))<1e3?s+"米":(s/1e3).toFixed(1)+"千米"}(e,t.location)}),J(n)})},[B,_]);var at=function initUserPublishAreaHistory(){var t=lt.default.getStorageSync(yt.UserPublishAreaHistory)||[];W(t)},rt={"publishArea":E,"location":w,"adcode":ot};Ft.Provider(rt),this.anonymousFunc0=function(){return mb(!0)},this.anonymousFunc1=function(t){return function userClickInputAction(t){t.detail.value||tt(!0)}(t)},this.anonymousFunc2=function(t){return function userEnterPosition(t){var e=t.detail.value;H(e),tt(!e)}(t)},this.anonymousFunc3=function(){return function closeHistoryClient(){tt(!1),H("")}()},this.anonymousFunc4=function(){return function userCloseMap(){lt.default.navigateBack()}()};var it=Z?V.map(function(t,e){t={"privateOriginal":(0,ct.internal_get_original)(t)};var n=Z?e+e:null,o="gbzzz"+e;return a.anonymousFunc5Map[o]=function(){return rb(t.privateOriginal)},{"loopState__temp2":n,"_$indexKey":o,"privateOriginal":t.privateOriginal}}):[],ut=N.map(function(t,e){t={"privateOriginal":(0,ct.internal_get_original)(t)};var n=e+e,o="gczzz"+e;return a.anonymousFunc6Map[o]=function(){return rb(t.privateOriginal)},{"loopState__temp4":n,"_$indexKey2":o,"privateOriginal":t.privateOriginal}});return I&&ct.propsManager.set({"data":S,"area":d,"userLoc":R,"userChangeCity":function userChangeCity(t,e){e&&b(e.ad_name),h(t)},"userTapCityBtn":mb},s,u),Object.assign(this.__state,{"loopArray55":it,"loopArray56":ut,"$compid__51":s,"smAreaText":B,"showHistory":Z,"histroyList":V,"lists":N,"IMGCDNURL":ft.IMGCDNURL,"showCity":I,"area":d}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(t){for(var e,n=arguments.length,o=Array(1<n?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.anonymousFunc5Map[t]&&(e=this.anonymousFunc5Map)[t].apply(e,o)}},{"key":"anonymousFunc6","value":function anonymousFunc6(t){for(var e,n=arguments.length,o=Array(1<n?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.anonymousFunc6Map[t]&&(e=this.anonymousFunc6Map)[t].apply(e,o)}}]),ResumeMap);function ResumeMap(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ResumeMap);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(ResumeMap.__proto__||Object.getPrototypeOf(ResumeMap)).apply(this,arguments));return t.config={"navigationBarTitleText":"地址选择"},t.$usedState=["loopArray55","loopArray56","$compid__51","smAreaText","showHistory","histroyList","lists","IMGCDNURL","showCity","area"],t.anonymousFunc5Map={},t.anonymousFunc6Map={},t.customComponents=["Cities"],t}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6"],a.$$componentPath="pages/map/resume/index",a.config={"navigationBarTitleText":"地址选择"},e.default=a,Page(n(0).default.createComponent(a,!0))},"139":function(t,e,n){}},[[138,0,1]]]);