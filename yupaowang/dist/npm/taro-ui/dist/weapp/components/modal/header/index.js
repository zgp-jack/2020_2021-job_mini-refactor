(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/modal/header/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/modal/header/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/modal/header/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = __webpack_require__(/*! ../../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtModalHeader = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtModalHeader, _AtComponent);

  function AtModalHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtModalHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtModalHeader.__proto__ || Object.getPrototypeOf(AtModalHeader)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["rootClass", "className", "children"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtModalHeader, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtModalHeader.prototype.__proto__ || Object.getPrototypeOf(AtModalHeader.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var rootClass = (0, _classnames2.default)('at-modal__header', this.__props.className);
      Object.assign(this.__state, {
        rootClass: rootClass
      });
      return this.__state;
    }
  }]);

  return AtModalHeader;
}(_component2.default), _class.$$events = [], _class.$$componentPath = "D:/project/yupao-ts-recode/yupaowang/node_modules/taro-ui/dist/weapp/components/modal/header/index", _temp2);
exports.default = AtModalHeader;

Component(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(AtModalHeader));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/modal/header/index.js","runtime","vendors"]]]);