(tt.webpackJsonp=tt.webpackJsonp||[]).push([[42],{"283":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var $=r(0),k=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}($),S=r(2);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}r(284);var o=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ResumeList,k.default.Component),n(ResumeList,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0})(ResumeList.prototype.__proto__||Object.getPrototypeOf(ResumeList.prototype),"_constructor",this).call(this,e),this.$$refs=new k.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,r){this.__state=e||this.state||{},this.__props=t||this.props||{};var n=this.$prefix,o=(0,$.genCompid)(n+"$compid__54"),a=A(o,2),i=a[0],u=a[1],s=this.__props,c=s.bottom,l=s.initPage,f=(0,$.useState)(!1),p=A(f,2),y=p[0],_=p[1],h=(0,$.useState)([]),m=A(h,2),d=m[0],b=m[1],v=(0,$.useState)({"page":1}),g=A(v,2),O=g[0],C=g[1],w=(0,$.useState)(!1),R=A(w,2),P=R[0],j=R[1];return(0,$.useEffect)(function(){(0,S.getCollectionResumeListData)(O.page).then(function(e){k.default.hideNavigationBarLoading(),k.default.stopPullDownRefresh(),e.data.length||j(!0),1===O.page?b([].concat(_toConsumableArray(e.data))):b([].concat(_toConsumableArray(d),_toConsumableArray(e.data))),y&&_(!1)})},[O]),(0,$.useEffect)(function(){c&&(P||C(L({},O,{"page":O.page+1})))},[c]),(0,$.useEffect)(function(){l&&(j(!1),C({"page":l}))},[l]),this.anonymousFunc0=function resumeListHandler(e){(0,S.ResumeCancelCollectionAction)(e).then(function(e){"ok"===e.errcode&&C({"page":1})})},$.propsManager.set({"data":d,"onHandlerClick":this.anonymousFunc0,"recruitNoMoreData":P},u,i),Object.assign(this.__state,{"$compid__54":u}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}}]),ResumeList);function ResumeList(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ResumeList);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ResumeList.__proto__||Object.getPrototypeOf(ResumeList)).apply(this,arguments));return e.$usedState=["$compid__54","bottom","initPage"],e.customComponents=["CollectionResumeList"],e}o.$$events=[],o.$$componentPath="pages/collection/resumeList/index",t.default=o,Component(r(0).default.createComponent(o))},"284":function(e,t,r){}},[[283,0,1]]]);