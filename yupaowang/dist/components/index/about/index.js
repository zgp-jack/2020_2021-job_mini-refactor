(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/index/about/index"],{

/***/ "./src/components/index/about/index.scss":
/*!***********************************************!*\
  !*** ./src/components/index/about/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/index/about/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/index/about/index.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/index/about/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Taro$Component) {
  _inherits(About, _Taro$Component);

  function About() {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "VERSION"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(About, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(About.prototype.__proto__ || Object.getPrototypeOf(About.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      this.anonymousFunc0 = function () {
        _taroWeapp2.default.makePhoneCall({ phoneNumber: _index.SERVERPHONE });
      };
      var anonymousState__temp = new Date().getFullYear();
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        VERSION: _index.VERSION
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return About;
}(_taroWeapp2.default.Component);

About.$$events = ["anonymousFunc0"];
About.$$componentPath = "components/index/about/index";
exports.default = About;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(About));

/***/ })

},[["./src/components/index/about/index.tsx","runtime","vendors"]]]);