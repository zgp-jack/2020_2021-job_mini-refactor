<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[15],{"62":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},r=function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e};function defineProperties(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(o(0)),p=o(19);o(63);var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(SwiperComponent,n.default.Component),r(SwiperComponent,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,o)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(o):void 0})(SwiperComponent.prototype.__proto__||Object.getPrototypeOf(SwiperComponent.prototype),"_constructor",this).call(this,e),this.$$refs=new n.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,o){this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var r=this.__props.data,n=i({},p.DEFAULT_PROPS,r);return Object.assign(this.__state,{"swiper":n}),this.__state}}]),SwiperComponent);function SwiperComponent(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SwiperComponent);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(SwiperComponent.__proto__||Object.getPrototypeOf(SwiperComponent)).apply(this,arguments));return e.$usedState=["swiper","data"],e.customComponents=[],e}a.$$events=[],a.$$componentPath="components/swiper/index/index",t.default=a,Component(o(0).default.createComponent(a))},"63":function(e,t,o){}},[[62,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/swiper/index/index"],{

/***/ "./src/components/swiper/index/index.scss":
/*!************************************************!*\
  !*** ./src/components/swiper/index/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/swiper/index/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/swiper/index/index.tsx ***!
  \***********************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/components/swiper/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwiperComponent = function (_Taro$Component) {
  _inherits(SwiperComponent, _Taro$Component);

  function SwiperComponent() {
    _classCallCheck(this, SwiperComponent);

    var _this = _possibleConstructorReturn(this, (SwiperComponent.__proto__ || Object.getPrototypeOf(SwiperComponent)).apply(this, arguments));

    _this.$usedState = ["swiper", "data"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(SwiperComponent, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(SwiperComponent.prototype.__proto__ || Object.getPrototypeOf(SwiperComponent.prototype), '_constructor', this).call(this, props);
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

  return SwiperComponent;
}(_taroWeapp2.default.Component);

SwiperComponent.$$events = [];
SwiperComponent.$$componentPath = "components/swiper/index/index";
exports.default = SwiperComponent;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(SwiperComponent));

/***/ })

},[["./src/components/swiper/index/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
