(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["components/profession/index"],{

/***/ "./src/components/profession/index.scss":
/*!**********************************************!*\
  !*** ./src/components/profession/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/profession/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/profession/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./index.scss */ "./src/components/profession/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profession = function (_Taro$Component) {
  _inherits(Profession, _Taro$Component);

  function Profession() {
    _classCallCheck(this, Profession);

    var _this = _possibleConstructorReturn(this, (Profession.__proto__ || Object.getPrototypeOf(Profession)).apply(this, arguments));

    _this.$usedState = ["loopArray92", "data", "title", "footerTitle", "closeProfession", "onClickItem"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Profession, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Profession.prototype.__proto__ || Object.getPrototypeOf(Profession.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var _props = this.__props,
          data = _props.data,
          _props$title = _props.title,
          title = _props$title === undefined ? '选择工种' : _props$title,
          _props$footerTitle = _props.footerTitle,
          footerTitle = _props$footerTitle === undefined ? '确定' : _props$footerTitle,
          closeProfession = _props.closeProfession,
          onClickItem = _props.onClickItem;

      this.anonymousFunc1 = function () {
        return closeProfession();
      };
      var loopArray92 = data ? data.map(function (item, i) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var anonymousCallee__11 = data ? item.privateOriginal.children.map(function (d, k) {
          d = {
            privateOriginal: (0, _taroSwan.internal_get_original)(d)
          };
          var _$indexKey = 'jezzz' + i + '-' + k;
          _this2.anonymousFunc0Map[_$indexKey] = function () {
            return _this2.__props.onClickItem(i, k, d.privateOriginal.id, d.privateOriginal.name);
          };
          var loopState__temp2 = data ? (0, _classnames2.default)({
            'at-icon': true,
            'at-icon-check': true,
            'icon-checked': true,
            'icon-checked-active': d.privateOriginal.is_check
          }) : null;
          return {
            _$indexKey: _$indexKey,
            loopState__temp2: loopState__temp2,
            privateOriginal: d.privateOriginal
          };
        }) : [];
        return {
          anonymousCallee__11: anonymousCallee__11,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray92: loopArray92,
        data: data,
        title: title,
        footerTitle: footerTitle
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return Profession;
}(_taroSwan2.default.Component);

Profession.$$events = ["anonymousFunc0", "anonymousFunc1"];
Profession.$$componentPath = "components/profession/index";
Profession.options = {
  addGlobalClass: true
};
exports.default = Profession;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Profession));

/***/ })

},[["./src/components/profession/index.tsx","runtime","vendors"]]]);