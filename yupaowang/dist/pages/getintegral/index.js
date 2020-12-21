(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["pages/getintegral/index"],{

/***/ "./src/pages/getintegral/index.scss":
/*!******************************************!*\
  !*** ./src/pages/getintegral/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/getintegral/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/getintegral/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroQq = __webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js");

var _taroQq2 = _interopRequireDefault(_taroQq);

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/getintegral/index.scss");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GetIntegral = function (_Taro$Component) {
  _inherits(GetIntegral, _Taro$Component);

  function GetIntegral() {
    _classCallCheck(this, GetIntegral);

    var _this = _possibleConstructorReturn(this, (GetIntegral.__proto__ || Object.getPrototypeOf(GetIntegral)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: "鱼泡网-获取积分"
    };

    _this.$usedState = ["anonymousState__temp", "SHOWINVITEUSER", "ios", "turntable", "IMGCDNURL", "SHOWSERVERPHONE", "SERVERPHONE"];
    _this.customComponents = ["Auth"];
    return _this;
  }

  _createClass(GetIntegral, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(GetIntegral.prototype.__proto__ || Object.getPrototypeOf(GetIntegral.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroQq2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _useState = (0, _taroQq.useState)(true),
          _useState2 = _slicedToArray(_useState, 2),
          ios = _useState2[0],
          setIos = _useState2[1];
      // 用户拨打电话


      var userCallPhone = function userCallPhone() {
        _taroQq2.default.makePhoneCall({ phoneNumber: _index.SERVERPHONE });
      };

      var _useState3 = (0, _taroQq.useState)({
        showBtn: 0,
        show: 0
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          turntable = _useState4[0],
          setTurntable = _useState4[1];
      // 判断客户端


      (0, _taroQq.useEffect)(function () {
        // memberTurntable().then(res => {
        //   if (res.errcode == "ok") {
        //     let { is_turntable, show_turntable } = res.data;
        //     turntable.showBtn = Number(is_turntable);
        //     turntable.show = Number(show_turntable);
        //     setTurntable({ ...turntable });
        //   }
        // });
        var system = _taroQq2.default.getSystemInfoSync();
        if (system.platform !== "ios") {
          setIos(false);
        }
      }, []);
      this.anonymousFunc0 = function () {
        return (0, _index2.userJumpPage)(_index.INVITEPATH);
      };
      this.anonymousFunc1 = function () {
        return (0, _index2.userJumpPage)("/pages/recharge/index");
      };
      this.anonymousFunc2 = function () {
        return (0, _index2.userJumpPage)("/subpackage/pages/turntable/index");
      };
      var anonymousState__temp = turntable.show ? (0, _classnames2.default)({
        "getintegral-item-btn": true,
        "getintegral-list-btn-dis": !turntable.showBtn
      }) : null;
      this.anonymousFunc3 = function () {
        return userCallPhone();
      };
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        SHOWINVITEUSER: _index.SHOWINVITEUSER,
        ios: ios,
        turntable: turntable,
        IMGCDNURL: _index.IMGCDNURL,
        SHOWSERVERPHONE: _index.SHOWSERVERPHONE,
        SERVERPHONE: _index.SERVERPHONE
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }]);

  return GetIntegral;
}(_taroQq2.default.Component);

GetIntegral.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3"];
GetIntegral.$$componentPath = "pages/getintegral/index";
GetIntegral.config = { navigationBarTitleText: "鱼泡网-获取积分" };
exports.default = GetIntegral;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(GetIntegral, true));

/***/ })

},[["./src/pages/getintegral/index.tsx","runtime","vendors"]]]);