(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["components/swiper/news/index"],{

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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../index */ "./src/components/swiper/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/swiper/news/index.scss");

var _index2 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SwiperNews = function (_Taro$Component) {
  _inherits(SwiperNews, _Taro$Component);

  function SwiperNews() {
    _classCallCheck(this, SwiperNews);

    var _this = _possibleConstructorReturn(this, (SwiperNews.__proto__ || Object.getPrototypeOf(SwiperNews)).apply(this, arguments));

    _this.$usedState = ["swiper", "loopArray12", "data"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(SwiperNews, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(SwiperNews.prototype.__proto__ || Object.getPrototypeOf(SwiperNews.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
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
      var data = this.__props.data;

      var swiper = _extends({}, _index.DEFAULT_PROPS, data);
      var loopArray12 = swiper.lists.map(function (item, __index0) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey = "bezzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return (0, _index2.userJumpPage)("/subpackage/pages/notice/index?id=" + item.$original.id);
        };
        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        swiper: swiper,
        loopArray12: loopArray12
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
  }]);

  return SwiperNews;
}(_taroTt2.default.Component);

SwiperNews.$$events = ["anonymousFunc0"];
SwiperNews.$$componentPath = "components/swiper/news/index";
exports.default = SwiperNews;

Component(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(SwiperNews));

/***/ })

},[["./src/components/swiper/news/index.tsx","runtime","vendors"]]]);