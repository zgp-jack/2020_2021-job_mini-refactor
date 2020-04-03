(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/auth/index"],{

/***/ "./src/actions/user.tsx":
/*!******************************!*\
  !*** ./src/actions/user.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserInfo = setUserInfo;
exports.getUserInfo = getUserInfo;

var _user = __webpack_require__(/*! ../constants/user */ "./src/constants/user.tsx");

function setUserInfo(user) {
  return {
    type: _user.SET,
    data: user
  };
}
function getUserInfo() {
  return {
    type: _user.GET
  };
}

/***/ }),

/***/ "./src/components/auth/index.scss":
/*!****************************************!*\
  !*** ./src/components/auth/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/auth/index.tsx":
/*!***************************************!*\
  !*** ./src/components/auth/index.tsx ***!
  \***************************************/
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

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index3 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _user = __webpack_require__(/*! ../../actions/user */ "./src/actions/user.tsx");

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/auth/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function (_Taro$Component) {
  _inherits(Auth, _Taro$Component);

  function Auth() {
    _classCallCheck(this, Auth);

    var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).apply(this, arguments));

    _this.$usedState = ["login", "page", "IMGCDNURL", "callback", "userCancelAuth"];
    _this.customComponents = ["AtMessage"];
    return _this;
  }

  _createClass(Auth, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Auth.prototype.__proto__ || Object.getPrototypeOf(Auth.prototype), "_constructor", this).call(this, props);
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
      var _props = this.__props,
          _props$page = _props.page,
          page = _props$page === undefined ? false : _props$page,
          callback = _props.callback,
          userCancelAuth = _props.userCancelAuth;

      var dispatch = (0, _redux.useDispatch)();
      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // 返回上一页
      var pageBack = function pageBack() {
        _taroWeapp2.default.navigateBack();
      };
      // 取消授权
      var cancelAuth = function cancelAuth() {
        userCancelAuth && userCancelAuth();
      };
      // 用户确认授权
      var userAuthAction = function userAuthAction(e) {
        if (e.detail.userInfo) {
          _taroWeapp2.default.login({
            success: function success(res) {
              if (res.code) {
                (0, _index2.getUserSessionKey)(res.code).then(function (res) {
                  var sessionKey = res.session_key;
                  decodeSessionKey(sessionKey);
                });
              } else {
                (0, _index4.default)("\u6388\u6743\u5931\u8D25\uFF0C\u5BA2\u670D\u7535\u8BDD" + _index.SERVERPHONE);
              }
            }
          });
        } else {
          (0, _index3.errMsg)('您取消了授权');
        }
      };
      // 解密sessionkey
      var decodeSessionKey = function decodeSessionKey(key) {
        _taroWeapp2.default.getSetting({
          success: function success(res) {
            if (!res.authSetting['scope.userInfo']) {
              _taroWeapp2.default.getUserInfo({
                success: function success() {
                  doAuthRequest(key);
                },
                fail: function fail() {
                  _taroWeapp2.default.openSetting();
                }
              });
            } else {
              doAuthRequest(key);
            }
          }
        });
      };
      // 发起授权请求
      var doAuthRequest = function doAuthRequest(key) {
        _taroWeapp2.default.getUserInfo({
          success: function success(res) {
            var encryptedData = res.encryptedData;
            var iv = res.iv;
            var data = {
              session_key: key,
              encryptedData: encryptedData,
              iv: iv,
              refId: 0,
              source: ''
            };
            (0, _index2.GetUserInfo)(data).then(function (res) {
              if (res.errcode === 'ok') {
                var user = {
                  userId: res.data.id,
                  token: res.data.sign.token,
                  tokenTime: res.data.sign.time,
                  uuid: res.data.uuid,
                  login: true
                };
                _taroWeapp2.default.setStorageSync(_store.UserInfo, user);
                dispatch((0, _user.setUserInfo)(user));
                callback && callback();
                if (page) {
                  pageBack();
                }
              } else {
                (0, _index3.errMsg)(res.errmsg);
              }
            });
          }
        });
      };
      this.anonymousFunc0 = function (e) {
        return userAuthAction(e);
      };
      this.anonymousFunc1 = function () {
        return pageBack();
      };
      this.anonymousFunc2 = function () {
        return cancelAuth();
      };
      Object.assign(this.__state, {
        login: login,
        page: page,
        IMGCDNURL: _index.IMGCDNURL
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
  }]);

  return Auth;
}(_taroWeapp2.default.Component);

Auth.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"];
Auth.$$componentPath = "components/auth/index";
exports.default = Auth;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Auth));

/***/ })

},[["./src/components/auth/index.tsx","runtime","vendors"]]]);