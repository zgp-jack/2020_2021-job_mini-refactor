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