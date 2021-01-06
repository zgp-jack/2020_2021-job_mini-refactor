(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["subpackage/pages/about/index"],{

/***/ "./src/subpackage/pages/about/index.scss":
/*!***********************************************!*\
  !*** ./src/subpackage/pages/about/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/subpackage/pages/about/index.tsx":
/*!**********************************************!*\
  !*** ./src/subpackage/pages/about/index.tsx ***!
  \**********************************************/
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

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/subpackage/pages/about/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Taro$Component) {
  _inherits(About, _Taro$Component);

  function About() {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '鱼泡网-关于我们'
    };

    _this.$usedState = ["ALIYUNCDN", "SHOWSERVERPHONE", "SHOWINVITEUSER", "SERVERPHONE"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(About, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(About.prototype.__proto__ || Object.getPrototypeOf(About.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      (0, _taroSwan.useDidShow)(function () {
        if (_index.SERIES == _index.BAIDUSERIES) {
          _taroSwan2.default.setPageInfo({
            title: '技术团队|建筑招工服务|农民工的聚集地-鱼泡建筑网',
            description: '鱼泡建筑网是由广大建筑工友与互联网专业人士共同组建而成,致力服务于全国5000万建筑工友。公司是一个由130多位精英组成的优秀团队,利用互联网大数据来改变和优化建筑行业,使建筑行业信息公开化、流程化、规范化,更好的为全国5000万建筑工友提供优质服务,充分解决了建筑工友们招工难、找活难等问题。',
            keywords: '关于鱼泡建筑网,鱼泡建筑网技术团队,优化建筑行业,服务建筑工友'
          });
        }
      });
      this.anonymousFunc0 = function () {
        _taroSwan2.default.makePhoneCall({ phoneNumber: _index.SERVERPHONE });
      };
      Object.assign(this.__state, {
        ALIYUNCDN: _index.ALIYUNCDN,
        SHOWSERVERPHONE: _index.SHOWSERVERPHONE,
        SHOWINVITEUSER: _index.SHOWINVITEUSER,
        SERVERPHONE: _index.SERVERPHONE
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
}(_taroSwan2.default.Component);

About.$$events = ["anonymousFunc0"];
About.$$componentPath = "subpackage/pages/about/index";
About.config = { navigationBarTitleText: '鱼泡网-关于我们' };
exports.default = About;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(About, true));

/***/ })

},[["./src/subpackage/pages/about/index.tsx","runtime","vendors"]]]);