(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/userinfo/phone/index"],{

/***/ "./src/pages/userinfo/phone/index.scss":
/*!*********************************************!*\
  !*** ./src/pages/userinfo/phone/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/userinfo/phone/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/userinfo/phone/index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../../hooks/code/index */ "./src/hooks/code/index.ts");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index4 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

var _member = __webpack_require__(/*! ../../../actions/member */ "./src/actions/member.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/userinfo/phone/index.scss");

var _index5 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index6 = _interopRequireDefault(_index5);

var _publish = __webpack_require__(/*! ../../../actions/publish */ "./src/actions/publish.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserBandPhone = function (_Taro$Component) {
  _inherits(UserBandPhone, _Taro$Component);

  function UserBandPhone() {
    _classCallCheck(this, UserBandPhone);

    var _this = _possibleConstructorReturn(this, (UserBandPhone.__proto__ || Object.getPrototypeOf(UserBandPhone)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '修改手机号'
    };

    _this.$usedState = ["info", "text"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(UserBandPhone, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(UserBandPhone.prototype.__proto__ || Object.getPrototypeOf(UserBandPhone.prototype), "_constructor", this).call(this, props);
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
      var dispatch = (0, _redux.useDispatch)();

      var _useCode = (0, _index2.default)(false),
          userGetCode = _useCode.userGetCode,
          text = _useCode.text;

      var _useState = (0, _taroSwan.useState)({
        tel: '',
        code: ''
      }),
          _useState2 = _slicedToArray(_useState, 2),
          info = _useState2[0],
          setInfo = _useState2[1];
      // 获取redux中工种数据


      var publishData = (0, _redux.useSelector)(function (state) {
        return state.publishData;
      });
      // 用户填写表单
      var userEnterForm = function userEnterForm(e, title) {
        var value = e.detail.value;

        var data = JSON.parse(JSON.stringify(info));
        data[title] = value;
        setInfo(data);
      };
      // 用户更换手机号码操作
      var userChangePhoneAction = function userChangePhoneAction() {
        if (!(0, _index4.isPhone)(info.tel)) {
          (0, _index6.default)('请先输入正确的手机号码');
          return;
        }
        if (!info.code) {
          (0, _index6.default)('请先输入正确的验证码');
          return;
        }
        (0, _index3.userChangePhone)(info.tel, info.code).then(function (res) {
          (0, _index6.default)(res.errmsg);
          if (res.errcode == 'ok') {
            // 将数据存到redux中
            dispatch((0, _publish.setPublishData)(_extends({}, publishData, { user_mobile: info.tel })));
            dispatch((0, _member.setMemberTel)(info.tel));
            _taroSwan2.default.navigateBack();
          }
        }).catch(function () {
          (0, _index6.default)('网络错误，发送失败');
        });
      };
      this.anonymousFunc0 = function (e) {
        return userEnterForm(e, 'tel');
      };
      this.anonymousFunc1 = function (e) {
        return userEnterForm(e, 'code');
      };
      this.anonymousFunc2 = function () {
        return userGetCode(info.tel);
      };
      this.anonymousFunc3 = function () {
        return userChangePhoneAction();
      };
      Object.assign(this.__state, {
        info: info,
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
  }]);

  return UserBandPhone;
}(_taroSwan2.default.Component);

UserBandPhone.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3"];
UserBandPhone.$$componentPath = "pages/userinfo/phone/index";
UserBandPhone.config = { navigationBarTitleText: '修改手机号' };
exports.default = UserBandPhone;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(UserBandPhone, true));

/***/ })

},[["./src/pages/userinfo/phone/index.tsx","runtime","vendors"]]]);