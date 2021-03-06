(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["subpackage/pages/anti-fraud/index"],{

/***/ "./src/subpackage/pages/anti-fraud/index.scss":
/*!****************************************************!*\
  !*** ./src/subpackage/pages/anti-fraud/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/subpackage/pages/anti-fraud/index.tsx":
/*!***************************************************!*\
  !*** ./src/subpackage/pages/anti-fraud/index.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/subpackage/pages/anti-fraud/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailInfoPage = function (_Taro$Component) {
  _inherits(DetailInfoPage, _Taro$Component);

  function DetailInfoPage() {
    _classCallCheck(this, DetailInfoPage);

    var _this = _possibleConstructorReturn(this, (DetailInfoPage.__proto__ || Object.getPrototypeOf(DetailInfoPage)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '鱼泡网-防骗指南'
    };

    _this.$usedState = ["SHOWSERVERPHONE", "tel"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(DetailInfoPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(DetailInfoPage.prototype.__proto__ || Object.getPrototypeOf(DetailInfoPage.prototype), "_constructor", this).call(this, props);
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
      var phone = (0, _redux.useSelector)(function (state) {
        return state.WechatNotice['phone'];
      });

      var _useState = (0, _taroSwan.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          tel = _useState2[0],
          setTel = _useState2[1];

      (0, _taroSwan.useDidShow)(function () {
        var tel = phone ? phone : _index.SERVERPHONE;
        setTel(tel);
        if (_index.SERIES == _index.BAIDUSERIES) {
          _taroSwan2.default.setPageInfo({
            title: '鱼泡网,建筑招聘,建筑人才,工地招工,施工队找活,工程信息',
            description: '鱼泡网每日发布建筑招聘、建筑人才、工地招工、工地招人、找施工队等工程信息，方便建筑工人找活、找项目，为建筑劳务公司寻找优秀的建筑工人、建筑人才、建筑班组、施工队。',
            keywords: '鱼泡网,建筑招聘,建筑人才,工地招工,施工队找活,工程信息'
          });
        }
      });
      this.anonymousFunc0 = function () {
        _taroSwan2.default.makePhoneCall({ phoneNumber: tel });
      };
      Object.assign(this.__state, {
        SHOWSERVERPHONE: _index.SHOWSERVERPHONE,
        tel: tel
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return DetailInfoPage;
}(_taroSwan2.default.Component);

DetailInfoPage.$$events = ["anonymousFunc0"];
DetailInfoPage.$$componentPath = "subpackage/pages/anti-fraud/index";
DetailInfoPage.config = { navigationBarTitleText: '鱼泡网-防骗指南' };
exports.default = DetailInfoPage;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(DetailInfoPage, true));

/***/ })

},[["./src/subpackage/pages/anti-fraud/index.tsx","runtime","vendors"]]]);