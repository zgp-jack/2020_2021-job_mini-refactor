(swan.webpackJsonp=swan.webpackJsonp||[]).push([[53],{"327":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var $=n(0),k=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}($),S=n(2);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(328);var o=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ResumeList,k.default.Component),r(ResumeList,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0})(ResumeList.prototype.__proto__||Object.getPrototypeOf(ResumeList.prototype),"_constructor",this).call(this,e),this.$$refs=new k.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var r=this.$prefix,o=(0,$.genCompid)(r+"$compid__60"),a=A(o,2),i=a[0],s=a[1],u=this.__props,c=u.bottom,l=u.initPage,f=(0,$.useState)(!1),p=A(f,2),y=p[0],_=p[1],h=(0,$.useState)([]),m=A(h,2),d=m[0],b=m[1],v=(0,$.useState)({"page":1}),g=A(v,2),O=g[0],w=g[1],C=(0,$.useState)(!1),R=A(C,2),P=R[0],j=R[1];return(0,$.useEffect)(function(){(0,S.getCollectionResumeListData)(O.page).then(function(e){k.default.hideNavigationBarLoading(),k.default.stopPullDownRefresh(),e.data.length||j(!0),1===O.page?b([].concat(_toConsumableArray(e.data))):b([].concat(_toConsumableArray(d),_toConsumableArray(e.data))),y&&_(!1)})},[O]),(0,$.useEffect)(function(){c&&(P||w(L({},O,{"page":O.page+1})))},[c]),(0,$.useEffect)(function(){l&&(j(!1),w({"page":l}))},[l]),this.anonymousFunc0=function resumeListHandler(e){(0,S.ResumeCancelCollectionAction)(e).then(function(e){"ok"===e.errcode&&w({"page":1})})},$.propsManager.set({"data":d,"onHandlerClick":this.anonymousFunc0,"recruitNoMoreData":P},s,i),Object.assign(this.__state,{"$compid__60":s}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}}]),ResumeList);function ResumeList(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ResumeList);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ResumeList.__proto__||Object.getPrototypeOf(ResumeList)).apply(this,arguments));return e.$usedState=["$compid__60","bottom","initPage"],e.customComponents=["CollectionResumeList"],e}o.$$events=[],o.$$componentPath="pages/collection/resumeList/index",t.default=o,Component(n(0).default.createComponent(o))},"328":function(e,t,n){}},[[327,0,1]]]);