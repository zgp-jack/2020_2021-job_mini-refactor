(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/index/fastfun/index"],{

/***/ "./src/components/index/fastfun/config.ts":
/*!************************************************!*\
  !*** ./src/components/index/fastfun/config.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var Config = [{
  url: '/pages/static/invite',
  img: _index.IMGCDNURL + 'yqhy.png',
  text: '邀请好友'
}, {
  url: 'pages/query/query',
  img: _index.IMGCDNURL + 'smcx.png',
  text: '实名查询'
}, {
  url: '/pages/static/invite/index',
  img: _index.IMGCDNURL + 'index-newzjxm.png',
  text: '鱼泡动态'
}];
exports.default = Config;

/***/ }),

/***/ "./src/components/index/fastfun/index.scss":
/*!*************************************************!*\
  !*** ./src/components/index/fastfun/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/index/fastfun/index.tsx":
/*!************************************************!*\
  !*** ./src/components/index/fastfun/index.tsx ***!
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

var _config = __webpack_require__(/*! ./config */ "./src/components/index/fastfun/config.ts");

var _config2 = _interopRequireDefault(_config);

__webpack_require__(/*! ./index.scss */ "./src/components/index/fastfun/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fastfun = function (_Taro$Component) {
  _inherits(Fastfun, _Taro$Component);

  function Fastfun() {
    _classCallCheck(this, Fastfun);

    var _this = _possibleConstructorReturn(this, (Fastfun.__proto__ || Object.getPrototypeOf(Fastfun)).apply(this, arguments));

    _this.$usedState = ["loopArray3", "Config"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Fastfun, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Fastfun.prototype.__proto__ || Object.getPrototypeOf(Fastfun.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
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
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroWeapp2.default.navigateTo({
          url: url
        });
      };
      var loopArray3 = _config2.default.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var _$indexKey = "bzzzz" + index;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return userRouteJump(item.$original.url);
        };
        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray3: loopArray3,
        Config: _config2.default
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

  return Fastfun;
}(_taroWeapp2.default.Component);

Fastfun.$$events = ["anonymousFunc0"];
Fastfun.$$componentPath = "components/index/fastfun/index";
exports.default = Fastfun;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Fastfun));

/***/ })

},[["./src/components/index/fastfun/index.tsx","runtime","vendors"]]]);