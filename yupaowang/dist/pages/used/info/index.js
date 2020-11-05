(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/used/info/index"],{

/***/ "./src/pages/used/info/index.scss":
/*!****************************************!*\
  !*** ./src/pages/used/info/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/used/info/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/used/info/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/used/info/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfo = function (_Taro$Component) {
  _inherits(UserInfo, _Taro$Component);

  function UserInfo() {
    _classCallCheck(this, UserInfo);

    var _this = _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).apply(this, arguments));

    _this.$usedState = ["model"];
    _this.customComponents = ["WechatNotice"];
    return _this;
  }

  _createClass(UserInfo, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(UserInfo.prototype.__proto__ || Object.getPrototypeOf(UserInfo.prototype), "_constructor", this).call(this, props);
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
      var router = (0, _taroWeapp.useRouter)();
      var id = router.params.id;

      var _useState = (0, _taroWeapp.useState)(),
          _useState2 = _slicedToArray(_useState, 2),
          model = _useState2[0],
          setModel = _useState2[1];
      // 初始化二手交易信息


      (0, _taroWeapp.useEffect)(function () {
        (0, _index.getUsedInfo)(id).then(function (data) {
          if (data.errcode == 'ok') {
            setModel(data.data);
          } else {
            (0, _index2.ShowActionModal)({
              msg: data.errmsg,
              success: function success() {
                _taroWeapp2.default.navigateBack();
              }
            });
          }
        }).catch(function () {
          (0, _index2.ShowActionModal)({
            msg: '网络错误，获取失败',
            success: function success() {
              _taroWeapp2.default.navigateBack();
            }
          });
        });
      }, []);
      // 用户拨打电话
      var userCallPhone = function userCallPhone() {
        if (!model) {
          return;
        }
        if (model.is_end == '2') {
          return;
        }
        _taroWeapp2.default.makePhoneCall({
          phoneNumber: model.user_mobile
        });
      };
      this.anonymousFunc0 = function () {
        return userCallPhone();
      };
      Object.assign(this.__state, {
        model: model
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return UserInfo;
}(_taroWeapp2.default.Component);

UserInfo.$$events = ["anonymousFunc0"];
UserInfo.$$componentPath = "pages/used/info/index";
exports.default = UserInfo;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(UserInfo, true));

/***/ })

},[["./src/pages/used/info/index.tsx","runtime","vendors"]]]);