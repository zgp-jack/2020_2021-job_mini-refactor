(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["components/wordstotal/index"],{

/***/ "./src/components/wordstotal/index.scss":
/*!**********************************************!*\
  !*** ./src/components/wordstotal/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/wordstotal/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/wordstotal/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

__webpack_require__(/*! ./index.scss */ "./src/components/wordstotal/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WordsTotal = function (_Taro$Component) {
  _inherits(WordsTotal, _Taro$Component);

  function WordsTotal() {
    _classCallCheck(this, WordsTotal);

    var _this = _possibleConstructorReturn(this, (WordsTotal.__proto__ || Object.getPrototypeOf(WordsTotal)).apply(this, arguments));

    _this.$usedState = ["classname", "num", "total"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(WordsTotal, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(WordsTotal.prototype.__proto__ || Object.getPrototypeOf(WordsTotal.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var _props = this.__props,
          _props$total = _props.total,
          total = _props$total === undefined ? 500 : _props$total,
          _props$num = _props.num,
          num = _props$num === undefined ? 0 : _props$num,
          _props$classname = _props.classname,
          classname = _props$classname === undefined ? '' : _props$classname;

      Object.assign(this.__state, {
        classname: classname,
        num: num,
        total: total
      });
      return this.__state;
    }
  }]);

  return WordsTotal;
}(_taroTt2.default.Component);

WordsTotal.$$events = [];
WordsTotal.$$componentPath = "components/wordstotal/index";
exports.default = WordsTotal;

Component(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(WordsTotal));

/***/ })

},[["./src/components/wordstotal/index.tsx","runtime","vendors"]]]);