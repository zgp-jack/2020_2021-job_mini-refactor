<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[16],{"70":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},o=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(0)),s=r(19);r(71);var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(SwiperNews,n.default.Component),o(SwiperNews,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,r)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(r):void 0})(SwiperNews.prototype.__proto__||Object.getPrototypeOf(SwiperNews.prototype),"_constructor",this).call(this,e),this.$$refs=new n.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,r){this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=this.__props.data,n=i({},s.DEFAULT_PROPS,o);return Object.assign(this.__state,{"swiper":n}),this.__state}}]),SwiperNews);function SwiperNews(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SwiperNews);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(SwiperNews.__proto__||Object.getPrototypeOf(SwiperNews)).apply(this,arguments));return e.$usedState=["swiper","data"],e.customComponents=[],e}a.$$events=[],a.$$componentPath="components/swiper/news/index",t.default=a,Component(r(0).default.createComponent(a))},"71":function(e,t,r){}},[[70,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/swiper/news/index"],{

/***/ "./src/components/swiper/news/index.scss":
/*!***********************************************!*\
  !*** ./src/components/swiper/news/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/swiper/news/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/swiper/news/index.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../index */ "./src/components/swiper/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/swiper/news/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwiperNews = function (_Taro$Component) {
  _inherits(SwiperNews, _Taro$Component);

  function SwiperNews() {
    _classCallCheck(this, SwiperNews);

    var _this = _possibleConstructorReturn(this, (SwiperNews.__proto__ || Object.getPrototypeOf(SwiperNews)).apply(this, arguments));

    _this.$usedState = ["swiper", "data"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(SwiperNews, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(SwiperNews.prototype.__proto__ || Object.getPrototypeOf(SwiperNews.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var data = this.__props.data;

      var swiper = _extends({}, _index.DEFAULT_PROPS, data);
      Object.assign(this.__state, {
        swiper: swiper
      });
      return this.__state;
    }
  }]);

  return SwiperNews;
}(_taroWeapp2.default.Component);

SwiperNews.$$events = [];
SwiperNews.$$componentPath = "components/swiper/news/index";
exports.default = SwiperNews;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(SwiperNews));

/***/ })

},[["./src/components/swiper/news/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
