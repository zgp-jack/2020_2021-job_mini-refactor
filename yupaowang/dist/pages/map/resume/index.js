(tt.webpackJsonp=tt.webpackJsonp||[]).push([[61],{"113":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),e.contextItem=void 0;var et=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],o=!0,a=!1,r=void 0;try{for(var i,u=t[Symbol.iterator]();!(o=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(t){a=!0,r=t}finally{try{!o&&u.return&&u.return()}finally{if(a)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var nt=n(0),ot=_interopRequireDefault(nt),at=n(1),rt=n(2),it=n(6),ut=n(9),st=n(8),ct=n(4),lt=_interopRequireDefault(ct),ft=n(3),pt=n(17);function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}n(114);var yt=Math.PI,mt=e.contextItem=(0,nt.createContext)({}),a=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(ResumeMap,ot.default.Component),o(ResumeMap,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:get(a,e,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0})(ResumeMap.prototype.__proto__||Object.getPrototypeOf(ResumeMap.prototype),"_constructor",this).call(this,t),this.$$refs=new ot.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){var a=this;this.__state=t||this.state||{},this.__props=e||this.props||{};var o=this.$prefix,r=(0,nt.genCompid)(o+"$compid__43"),i=et(r,2),u=i[0],s=i[1],c=(0,ft.useDispatch)(),l=(0,nt.useState)(""),f=et(l,2),p=f[0],y=f[1],m=(0,nt.useState)([]),d=et(m,2),h=d[0],v=d[1],g=(0,nt.useState)(""),_=et(g,2),b=_[0],M=(_[1],(0,nt.useState)({"id":"","pid":"","city":"","ad_name":""})),F=et(M,2),S=F[0],C=F[1],A=(0,nt.useState)(!1),$=et(A,2),w=$[0],P=$[1],R=(0,nt.useState)(""),k=et(R,2),O=k[0],j=(k[1],(0,nt.useState)("")),x=et(j,2),I=x[0],D=x[1],L=(0,nt.useState)([]),T=et(L,2),E=T[0],U=T[1],z=(0,nt.useState)([]),B=et(z,2),q=B[0],G=B[1],H=(0,nt.useState)(!1),N=et(H,2),J=N[0],K=N[1],Q=(0,nt.useState)(""),V=et(Q,2),W=V[0];function cb(t){return parseFloat(t)*yt/180}function eb(t){P(t)}function jb(e){(0,at.checkAdcodeAction)({"adcode":e.adcode}).then(function(t){"ok"==t.errcode?(c((0,pt.setAreaInfo)({"title":e.name,"location":e.location,"adcode":e.adcode,"info":e.district,"provice":t.province,"city":t.city})),ot.default.navigateBack()):(0,ct.ShowActionModal)({"msg":t.errmsg})}).catch(function(t){(0,lt.default)("网络错误，请求失败！")})}V[1],(0,nt.useEffect)(function(){var t=ot.default.getStorageSync(it.Areas);t?v(t):(0,at.getAllAreas)().then(function(t){ot.default.setStorageSync(it.Areas,t),v(t)})},[]),(0,nt.useEffect)(function(){p||function initUserLocationCity(){var t=ot.default.getStorageSync(it.UserLocationCity);if(t){var e=(0,ut.getCityInfo)(t,1),n={"id":e.id,"pid":e.pid,"ad_name":e.ad_name,"city":e.name};y(e.name),C(n)}}(),X()},[]),(0,nt.useEffect)(function(){(0,st.getAmapPoiList)(p+I).then(function(t){var e=ot.default.getStorageSync(it.UserLocation),n=t.filter(function(t){return t.name&&t.adcode&&"string"==typeof t.location});n.forEach(function(t){t.distance=function getGreatCircleDistance(t,e){if(!t)return"";var n=t.split(","),o=e.split(","),a=cb(n[0]),r=cb(o[0]),i=a-r,u=cb(n[1])-cb(o[1]),s=2*Math.asin(Math.sqrt(Math.pow(Math.sin(i/2),2)+Math.cos(a)*Math.cos(r)*Math.pow(Math.sin(u/2),2)));return s*=6378137,(s=parseInt((Math.round(1e4*s)/1e4).toFixed(2)))<1e3?s+"米":(s/1e3).toFixed(1)+"千米"}(e,t.location)}),U(n)})},[I,p]);var X=function initUserPublishAreaHistory(){var t=ot.default.getStorageSync(it.UserPublishAreaHistory)||[];G(t)},Y={"publishArea":O,"location":b,"adcode":W};mt.Provider(Y),this.anonymousFunc0=function(){return eb(!0)},this.anonymousFunc1=function(t){return function userClickInputAction(t){t.detail.value||K(!0)}(t)},this.anonymousFunc2=function(t){return function userEnterPosition(t){var e=t.detail.value;D(e),K(!e)}(t)},this.anonymousFunc3=function(){return function userCloseMap(){ot.default.navigateBack()}()};var Z=J?q.map(function(t,e){t={"$original":(0,nt.internal_get_original)(t)};var n=J?e+e:null,o="ejzzz"+e;return a.anonymousFunc4Map[o]=function(){return jb(t.$original)},{"$loopState__temp2":n,"_$indexKey":o,"$original":t.$original}}):[],tt=E.map(function(t,e){t={"$original":(0,nt.internal_get_original)(t)};var n=e+e,o="fazzz"+e;return a.anonymousFunc5Map[o]=function(){return jb(t.$original)},{"$loopState__temp4":n,"_$indexKey2":o,"$original":t.$original}});return w&&nt.propsManager.set({"data":h,"area":p,"userLoc":S,"userChangeCity":function userChangeCity(t){y(t)},"userTapCityBtn":eb},s,u),Object.assign(this.__state,{"loopArray46":Z,"loopArray47":tt,"$compid__43":s,"smAreaText":I,"showHistory":J,"histroyList":q,"lists":E,"IMGCDNURL":rt.IMGCDNURL,"showCity":w,"area":p}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(t){for(var e,n=arguments.length,o=Array(1<n?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.anonymousFunc4Map[t]&&(e=this.anonymousFunc4Map)[t].apply(e,o)}},{"key":"anonymousFunc5","value":function anonymousFunc5(t){for(var e,n=arguments.length,o=Array(1<n?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.anonymousFunc5Map[t]&&(e=this.anonymousFunc5Map)[t].apply(e,o)}}]),ResumeMap);function ResumeMap(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ResumeMap);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(ResumeMap.__proto__||Object.getPrototypeOf(ResumeMap)).apply(this,arguments));return t.config={"navigationBarTitleText":"地址选择"},t.$usedState=["loopArray46","loopArray47","$compid__43","smAreaText","showHistory","histroyList","lists","IMGCDNURL","showCity","area"],t.anonymousFunc4Map={},t.anonymousFunc5Map={},t.customComponents=["Cities"],t}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5"],a.$$componentPath="pages/map/resume/index",a.config={"navigationBarTitleText":"地址选择"},e.default=a,Page(n(0).default.createComponent(a,!0))},"114":function(t,e,n){}},[[113,0,1]]]);