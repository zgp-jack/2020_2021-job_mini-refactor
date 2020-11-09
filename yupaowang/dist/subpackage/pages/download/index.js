(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["subpackage/pages/download/index"],{

/***/ "./src/subpackage/pages/download/index.scss":
/*!**************************************************!*\
  !*** ./src/subpackage/pages/download/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/subpackage/pages/download/index.tsx":
/*!*************************************************!*\
  !*** ./src/subpackage/pages/download/index.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Img = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/subpackage/pages/download/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Img = exports.Img = _index.IMGCDNURL + 'downloadapp-topbg.png';

var DownloadPage = function (_Taro$Component) {
  _inherits(DownloadPage, _Taro$Component);

  function DownloadPage() {
    _classCallCheck(this, DownloadPage);

    var _this = _possibleConstructorReturn(this, (DownloadPage.__proto__ || Object.getPrototypeOf(DownloadPage)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '下载鱼泡App教程',
      enablePullDownRefresh: true,
      navigationBarBackgroundColor: '#109ffe',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: 'dark'
    };

    _this.$usedState = ["IMGCDNURL", "ALIYUNCDN"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(DownloadPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(DownloadPage.prototype.__proto__ || Object.getPrototypeOf(DownloadPage.prototype), "_constructor", this).call(this, props);
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
      var handleClick = function handleClick() {
        _taroWeapp2.default.setClipboardData({
          data: _index.DownloadApp,
          success: function success() {
            _taroWeapp2.default.hideToast();
            _taroWeapp2.default.showModal({
              title: '温馨提示',
              content: '鱼泡APP下载地址已复制到粘贴板,请粘贴到浏览器中下载!',
              showCancel: false,
              success: function success() {}
            });
          }
        });
      };
      this.anonymousFunc0 = handleClick;
      Object.assign(this.__state, {
        IMGCDNURL: _index.IMGCDNURL,
        ALIYUNCDN: _index.ALIYUNCDN
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return DownloadPage;
}(_taroWeapp2.default.Component);

DownloadPage.$$events = ["anonymousFunc0"];
DownloadPage.$$componentPath = "subpackage/pages/download/index";
DownloadPage.config = { navigationBarTitleText: '下载鱼泡App教程', enablePullDownRefresh: true, navigationBarBackgroundColor: '#109ffe', navigationBarTextStyle: 'white', backgroundTextStyle: 'dark' };
exports.default = DownloadPage;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(DownloadPage, true));

/***/ })

},[["./src/subpackage/pages/download/index.tsx","runtime","vendors"]]]);