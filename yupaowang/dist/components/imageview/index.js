(swan.webpackJsonp=swan.webpackJsonp||[]).push([[12],{"268":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var l=n(0),r=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(l);n(269);var u=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ImageView,r.default.Component),o(ImageView,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0})(ImageView.prototype.__proto__||Object.getPrototypeOf(ImageView.prototype),"_constructor",this).call(this,e),this.$$refs=new r.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){var a=this;this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=this.__props,u=o.images,i=o.userUploadImg,r=o.max,s=o.userDelImg,p=!!s;this.anonymousFunc2=function(){return i&&i(-1)};var c=u?u.map(function(e,t){e={"privateOriginal":(0,l.internal_get_original)(e)};var n=u?t+"a":null,o="bjzzz"+t;a.anonymousFunc0Map[o]=function(){return i&&i(t)};var r="cazzz"+t;return a.anonymousFunc1Map[r]=function(e){e.stopPropagation(),s&&s(t)},{"loopState__temp2":n,"_$indexKey":o,"_$indexKey2":r,"privateOriginal":e.privateOriginal}}):[];return Object.assign(this.__state,{"loopArray14":c,"images":u,"bool":p,"max":r}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(e){for(var t,n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return this.anonymousFunc0Map[e]&&(t=this.anonymousFunc0Map)[e].apply(t,o)}},{"key":"anonymousFunc1","value":function anonymousFunc1(e){for(var t,n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return"object"===(void 0===o?"undefined":a(o))&&o.stopPropagation&&o.stopPropagation(),this.anonymousFunc1Map[e]&&(t=this.anonymousFunc1Map)[e].apply(t,o)}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}}]),ImageView);function ImageView(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ImageView);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ImageView.__proto__||Object.getPrototypeOf(ImageView)).apply(this,arguments));return e.$usedState=["loopArray14","images","bool","max","userUploadImg","userDelImg"],e.anonymousFunc0Map={},e.anonymousFunc1Map={},e.customComponents=[],e}u.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2"],u.$$componentPath="components/imageview/index",u.options={"addGlobalClass":!0},t.default=u,Component(n(0).default.createComponent(u))},"269":function(e,t,n){}},[[268,0,1]]]);