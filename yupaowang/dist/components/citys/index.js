(swan.webpackJsonp=swan.webpackJsonp||[]).push([[5],{"292":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var G=function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function sliceIterator(n,t){var e=[],r=!0,a=!1,i=void 0;try{for(var o,u=n[Symbol.iterator]();!(r=(o=u.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(n){a=!0,i=n}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(n,t,e){return t&&defineProperties(n.prototype,t),e&&defineProperties(n,e),n};function defineProperties(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var T=e(0),L=_interopRequireDefault(T),H=e(1),N=e(6),U=_interopRequireDefault(e(9)),q=e(7),K=e(3),B=e(17);function _interopRequireDefault(n){return n&&n.__esModule?n:{"default":n}}e(293);var a=(function _inherits(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{"constructor":{"value":n,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(Cities,L.default.Component),r(Cities,[{"key":"_constructor","value":function _constructor(n){(function get(n,t,e){null===n&&(n=Function.prototype);var r=Object.getOwnPropertyDescriptor(n,t);if(void 0===r){var a=Object.getPrototypeOf(n);return null===a?void 0:get(a,t,e)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(e):void 0})(Cities.prototype.__proto__||Object.getPrototypeOf(Cities.prototype),"_constructor",this).call(this,n),this.$$refs=new L.default.RefsArray}},{"key":"_createData","value":function _createData(n,t,e){var i=this;function Ga(n){var t=L.default.getStorageSync(N.HistoryCities);if(t){var e=n.id,r=t.findIndex(function(n){return n.id===e});-1!==r&&t.splice(r,1),t.unshift(n),t.splice(H.MAXCACHECITYNUM)}else t=[n];I((0,B.setArea)({"name":n.city,"ad_name":n.ad_name})),L.default.setStorageSync(N.HistoryCities,t),p&&p(n.city,n),c(!1),$()}this.__state=n||this.state||{},this.__props=t||this.props||{},this.$prefix;var r=this.__props,a=r.data,o=void 0===a?[]:a,u=r.parent,s=void 0!==u&&u,c=r.userTapCityBtn,p=r.userChangeCity,l=r.area,y=r.userLoc,f=(0,T.useState)([]),m=G(f,2),v=m[0],d=m[1],_=(0,T.useState)(!1),h=G(_,2),g=h[0],C=h[1],F=(0,T.useState)(""),O=G(F,2),b=O[0],A=O[1],M=(0,T.useState)([]),w=G(M,2),S=w[0],j=w[1],k=(0,T.useState)([]),x=G(k,2),P=x[0],D=x[1],I=(0,K.useDispatch)(),$=function userRecentlyCities(){var n=L.default.getStorageSync(N.HistoryCities);if(n&&y.id){var t=n.findIndex(function(n){return n.id==y.id});return-1!=t?n.splice(t,1):n.splice(H.MAXCACHECITYNUM-1),console.log("我走进来了...."),void d([].concat(function _toConsumableArray(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}(n)))}};(0,T.useEffect)(function(){$();var n=(0,q.objDeepCopy)(U.default),i=[];n.shift(),n.map(function(n){if(n.has_children){for(var t=n.children,e=0;e<t.length;e++)if(s||0!==e){var r={"id":t[e].id,"pid":t[e].pid,"city":t[e].name,"ad_name":t[e].ad_name,"city_name":n.name+"-"+t[e].name};i.push(r)}}else{var a={"id":n.id,"pid":n.pid,"city":n.name,"ad_name":n.ad_name,"city_name":n.name};i.push(a)}}),j(i),D(i)},[]),this.anonymousFunc0=function(){return function onInputFocus(){C(!0)}()},this.anonymousFunc1=function(n){return function userEnterCity(n){var t=n.detail.value;A(t);var e=P.filter(function(n){return-1!==n.city_name.indexOf(t)});j(e)}(n)},this.anonymousFunc2=function(){return function userClearContent(){A(""),C(!1)}()},this.anonymousFunc3=function(){return c(!1)},this.anonymousFunc4=function(){return Ga(y)};var R=v.map(function(n,t){var e="rec"+(n={"privateOriginal":(0,T.internal_get_original)(n)}).privateOriginal.id,r="fizzz"+t;return i.anonymousFunc5Map[r]=function(){return Ga(n.privateOriginal)},{"loopState__temp2":e,"_$indexKey":r,"privateOriginal":n.privateOriginal}}),z=o.map(function(n,a){return n={"privateOriginal":(0,T.internal_get_original)(n)},{"loopState__temp4":a+n.privateOriginal[0].id,"anonymousCallee__9":n.privateOriginal.map(function(n,t){var e=t+(n={"privateOriginal":(0,T.internal_get_original)(n)}).privateOriginal.id,r="fjzzz"+a+"-"+t;return i.anonymousFunc6Map[r]=function(){return Ga(n.privateOriginal)},{"loopState__temp6":e,"_$indexKey2":r,"privateOriginal":n.privateOriginal}}),"privateOriginal":n.privateOriginal}}),E=g?S.map(function(n,t){n={"privateOriginal":(0,T.internal_get_original)(n)};var e="gazzz"+t;return i.anonymousFunc7Map[e]=function(){return function userTapInputCity(n){C(!1),Ga(n)}(n.privateOriginal)},{"_$indexKey3":e,"privateOriginal":n.privateOriginal}}):[];return Object.assign(this.__state,{"loopArray52":R,"loopArray53":z,"loopArray54":E,"text":b,"IMGCDNURL":H.IMGCDNURL,"userLoc":y,"recentlyCities":v,"data":o,"show":g,"inputCity":S,"area":l}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(n){for(var t,e=arguments.length,r=Array(1<e?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];return this.anonymousFunc5Map[n]&&(t=this.anonymousFunc5Map)[n].apply(t,r)}},{"key":"anonymousFunc6","value":function anonymousFunc6(n){for(var t,e=arguments.length,r=Array(1<e?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];return this.anonymousFunc6Map[n]&&(t=this.anonymousFunc6Map)[n].apply(t,r)}},{"key":"anonymousFunc7","value":function anonymousFunc7(n){for(var t,e=arguments.length,r=Array(1<e?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];return this.anonymousFunc7Map[n]&&(t=this.anonymousFunc7Map)[n].apply(t,r)}}]),Cities);function Cities(){!function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Cities);var n=function _possibleConstructorReturn(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(Cities.__proto__||Object.getPrototypeOf(Cities)).apply(this,arguments));return n.$usedState=["loopArray52","loopArray53","loopArray54","text","IMGCDNURL","userLoc","recentlyCities","data","show","inputCity","area","parent","userTapCityBtn","userChangeCity"],n.anonymousFunc5Map={},n.anonymousFunc6Map={},n.anonymousFunc7Map={},n.customComponents=[],n}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7"],a.$$componentPath="components/citys/index",t.default=a,Component(e(0).default.createComponent(a))},"293":function(n,t,e){}},[[292,0,1]]]);