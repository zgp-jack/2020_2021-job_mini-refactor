(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/lists/recruit/index"],{

/***/ "./src/components/lists/recruit/index.scss":
/*!*************************************************!*\
  !*** ./src/components/lists/recruit/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/lists/recruit/index.tsx":
/*!************************************************!*\
  !*** ./src/components/lists/recruit/index.tsx ***!
  \************************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/components/lists/recruit/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecruitList = function (_Taro$Component) {
  _inherits(RecruitList, _Taro$Component);

  function RecruitList() {
    _classCallCheck(this, RecruitList);

    var _this = _possibleConstructorReturn(this, (RecruitList.__proto__ || Object.getPrototypeOf(RecruitList)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "loopArray10", "data", "IMGCDNURL", "bottom"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(RecruitList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RecruitList.prototype.__proto__ || Object.getPrototypeOf(RecruitList.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var _props = this.__props,
          data = _props.data,
          _props$bottom = _props.bottom,
          bottom = _props$bottom === undefined ? true : _props$bottom;
      // 用户页面跳转

      var userRouteJump = function userRouteJump(url) {
        _taroWeapp2.default.navigateTo({
          url: url
        });
      };
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)(bottom ? '' : 'padding-bottom:0');
      var loopArray10 = data ? data.map(function (item, __index1) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $anonymousCallee__0 = item.$original ? item.$original.map(function (d, __index0) {
          d = {
            $original: (0, _taroWeapp.internal_get_original)(d)
          };
          var _$indexKey = "bbzzz" + __index1 + "-" + __index0;
          _this2.anonymousFunc0Map[_$indexKey] = function () {
            return userRouteJump("/pages/detail/info/index?id=" + d.$original.id);
          };
          return {
            _$indexKey: _$indexKey,
            $original: d.$original
          };
        }) : [];
        return {
          $anonymousCallee__0: $anonymousCallee__0,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray10: loopArray10,
        data: data,
        IMGCDNURL: _index.IMGCDNURL
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return RecruitList;
}(_taroWeapp2.default.Component);

RecruitList.$$events = ["anonymousFunc0"];
RecruitList.$$componentPath = "components/lists/recruit/index";
exports.default = RecruitList;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(RecruitList));

/***/ })

},[["./src/components/lists/recruit/index.tsx","runtime","vendors"]]]);