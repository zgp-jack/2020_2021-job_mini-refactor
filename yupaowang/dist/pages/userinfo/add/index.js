(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/userinfo/add/index"],{

/***/ "./src/pages/userinfo/add/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/userinfo/add/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/userinfo/add/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/userinfo/add/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../../hooks/code/index */ "./src/hooks/code/index.ts");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/userinfo/add/index.scss");

var _index4 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

var _index5 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index6 = _interopRequireDefault(_index5);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfoAdd = function (_Taro$Component) {
  _inherits(UserInfoAdd, _Taro$Component);

  function UserInfoAdd() {
    _classCallCheck(this, UserInfoAdd);

    var _this = _possibleConstructorReturn(this, (UserInfoAdd.__proto__ || Object.getPrototypeOf(UserInfoAdd)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '完善资料'
    };

    _this.$usedState = ["anonymousState__temp", "userInfo", "disPass", "text"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(UserInfoAdd, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(UserInfoAdd.prototype.__proto__ || Object.getPrototypeOf(UserInfoAdd.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _useCode = (0, _index2.default)(),
          text = _useCode.text,
          userGetCode = _useCode.userGetCode;
      // 是否隐藏密码


      var _useState = (0, _taroTt.useState)(true),
          _useState2 = _slicedToArray(_useState, 2),
          disPass = _useState2[0],
          setDisPass = _useState2[1];
      // 声明提交数据


      var _useState3 = (0, _taroTt.useState)({
        username: '',
        pwd: '',
        tel: '',
        code: ''
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          userInfo = _useState4[0],
          setUserInfo = _useState4[1];
      // 用户填写表单


      var userEnterForm = function userEnterForm(e, title) {
        var value = e.detail.value;

        var data = JSON.parse(JSON.stringify(userInfo));
        data[title] = value;
        setUserInfo(data);
      };
      // 用户提交信息
      var userSubmitInfo = function userSubmitInfo() {
        if (!userInfo.username) {
          (0, _index6.default)('请输入您的用户名');
          return;
        }
        if (!(0, _index4.isPhone)(userInfo.tel)) {
          (0, _index6.default)('请输入正确的手机号码');
          return;
        }
        if (!userInfo.code) {
          (0, _index6.default)('请输入手机验证码');
          return;
        }
        if (!userInfo.pwd) {
          (0, _index6.default)('请输入您的密码');
          return;
        }
        (0, _index3.postUserAddInfo)(userInfo).then(function (res) {
          (0, _index6.default)(res.errmsg);
          if (res.errcode == 'ok') {
            _taroTt2.default.navigateBack();
          }
        });
      };
      this.anonymousFunc0 = function (e) {
        return userEnterForm(e, 'username');
      };
      this.anonymousFunc1 = function (e) {
        return userEnterForm(e, 'tel');
      };
      this.anonymousFunc2 = function (e) {
        return userEnterForm(e, 'code');
      };
      this.anonymousFunc3 = function () {
        return userGetCode(userInfo.tel);
      };
      this.anonymousFunc4 = function (e) {
        return userEnterForm(e, 'pwd');
      };
      var anonymousState__temp = (0, _classnames2.default)({
        'pass-eyes-icon': true,
        'pass-eyes-icon-dis': disPass
      });
      this.anonymousFunc5 = function () {
        return setDisPass(!disPass);
      };
      this.anonymousFunc6 = function () {
        return userSubmitInfo();
      };
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        userInfo: userInfo,
        disPass: disPass,
        text: text
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
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(e) {
      ;
    }
  }]);

  return UserInfoAdd;
}(_taroTt2.default.Component);

UserInfoAdd.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6"];
UserInfoAdd.$$componentPath = "pages/userinfo/add/index";
UserInfoAdd.config = { navigationBarTitleText: '完善资料' };
exports.default = UserInfoAdd;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(UserInfoAdd, true));

/***/ })

},[["./src/pages/userinfo/add/index.tsx","runtime","vendors"]]]);