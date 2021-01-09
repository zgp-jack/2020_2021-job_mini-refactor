(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/member/index"],{

/***/ "./src/pages/member/index.scss":
/*!*************************************!*\
  !*** ./src/pages/member/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/member/index.tsx":
/*!************************************!*\
  !*** ./src/pages/member/index.tsx ***!
  \************************************/
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

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _member = __webpack_require__(/*! ../../actions/member */ "./src/actions/member.ts");

var _index3 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _user = __webpack_require__(/*! ../../actions/user */ "./src/actions/user.tsx");

var _msg = __webpack_require__(/*! ../../actions/msg */ "./src/actions/msg.ts");

var _index5 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/member/index.scss");

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Member = function (_Taro$Component) {
  _inherits(Member, _Taro$Component);

  function Member() {
    _classCallCheck(this, Member);

    var _this = _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).apply(this, arguments));

    _this.$usedState = ["login", "model", "IMGCDNURL", "jobNumber", "msgNumber", "ios", "SHOWINVITEUSER", "memberIndex"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(Member, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Member.prototype.__proto__ || Object.getPrototypeOf(Member.prototype), "_constructor", this).call(this, props);
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
      var _props$memberIndex = this.__props.memberIndex,
          memberIndex = _props$memberIndex === undefined ? 0 : _props$memberIndex;

      var dispatch = (0, _redux.useDispatch)();
      // 获取用户信息
      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // member信息

      var _useState = (0, _taroSwan.useState)(),
          _useState2 = _slicedToArray(_useState, 2),
          model = _useState2[0],
          setModel = _useState2[1];
      // 获取招工信息更新数量


      var jobNumber = (0, _redux.useSelector)(function (state) {
        return state.msg['jobNumber'];
      });
      // 获取我的信息未读数量
      var msgNumber = (0, _redux.useSelector)(function (state) {
        return state.msg['messageNumber'];
      });
      // 判断是否是ios

      var _useState3 = (0, _taroSwan.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          ios = _useState4[0],
          setIos = _useState4[1];
      // 用户页面跳转


      var userRouteJump = function userRouteJump(url) {
        _taroSwan2.default.navigateTo({
          url: url
        });
      };
      // 初始化用户信息
      var initMemberInfo = function initMemberInfo() {
        if (!login) {
          return;
        }
        (0, _index.getMemberInfo)().then(function (data) {
          if (data.errcode == 'ok') {
            var value = {
              username: data.member.username || data.member.nickname,
              avatar: data.member.headimgurl || '',
              phone: data.member.tel || '',
              pwd_status: data.member.pwd_status || '',
              changeName: data.is_checking == 2 && data.member.is_check == '2' ? false : true
            };
            dispatch((0, _member.setMemberInfo)(value));
            setModel(data);
          } else (0, _index3.ShowActionModal)({
            msg: data.errmsg
          });
        });
        (0, _index.getMemberMsgNumber)((0, _index5.isIos)()).then(function (data) {
          if (data.errcode == 'ok') {
            dispatch((0, _msg.setMsg)(data.data));
          }
        });
      };
      (0, _taroSwan.useEffect)(function () {
        setIos((0, _index5.isIos)());
      }, []);
      (0, _taroSwan.useEffect)(function () {
        //Taro.setNavigationBarTitle({ title: IndexTabbarConfig[MEMBER].navigationBarTitleText })
        if (!login) {
          return;
        }
        initMemberInfo();
      }, [login, memberIndex]);
      // 清理用户登录信息
      var userClearSession = function userClearSession() {
        _taroSwan2.default.removeStorageSync(_store.UserInfo);
        dispatch((0, _user.loginOut)());
        dispatch((0, _msg.resetMsg)());
        (0, _index4.default)('您已成功退出该账号');
      };
      this.anonymousFunc0 = function () {
        return userRouteJump("/pages/userinfo/info/index");
      };
      this.anonymousFunc1 = function () {
        return userRouteJump('/pages/userinfo/add/index');
      };
      this.anonymousFunc2 = function () {
        return userRouteJump('/pages/integral/tabber/index?info=0&office=0');
      };
      this.anonymousFunc3 = function () {
        return userRouteJump('/pages/integral/temp/index');
      };
      this.anonymousFunc4 = function () {
        return userRouteJump( false ? undefined : _index2.CODEAUTHPATH);
      };
      this.anonymousFunc5 = function () {
        return userRouteJump(_index2.PUBLISHEDRECRUIT);
      };
      this.anonymousFunc6 = function () {
        return userRouteJump(_index2.PUBLISHRESUME);
      };
      this.anonymousFunc7 = function () {
        return userRouteJump('/pages/published/used/index');
      };
      this.anonymousFunc8 = function () {
        return userRouteJump('/subpackage/pages/information/mymessage/index');
      };
      this.anonymousFunc9 = function () {
        return userRouteJump('/pages/getintegral/index');
      };
      this.anonymousFunc10 = function () {
        return userRouteJump(_index2.INVITEPATH);
      };
      this.anonymousFunc11 = function () {
        return userRouteJump("/pages/integral/tabber/index?info=1");
      };
      this.anonymousFunc12 = function () {
        return userRouteJump("/pages/integral/tabber/index?info=0");
      };
      this.anonymousFunc13 = function () {
        return userRouteJump('/pages/realname/index');
      };
      this.anonymousFunc14 = function () {
        return userRouteJump('/pages/collection/index');
      };
      this.anonymousFunc15 = function () {
        return userRouteJump('/subpackage/pages/feedbacklist/index');
      };
      this.anonymousFunc16 = function () {
        return userRouteJump('/subpackage/pages/help/index');
      };
      Object.assign(this.__state, {
        login: login,
        model: model,
        IMGCDNURL: _index2.IMGCDNURL,
        jobNumber: jobNumber,
        msgNumber: msgNumber,
        ios: ios,
        SHOWINVITEUSER: _index2.SHOWINVITEUSER
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
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: "anonymousFunc9",
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: "anonymousFunc10",
    value: function anonymousFunc10(e) {
      ;
    }
  }, {
    key: "anonymousFunc11",
    value: function anonymousFunc11(e) {
      ;
    }
  }, {
    key: "anonymousFunc12",
    value: function anonymousFunc12(e) {
      ;
    }
  }, {
    key: "anonymousFunc13",
    value: function anonymousFunc13(e) {
      ;
    }
  }, {
    key: "anonymousFunc14",
    value: function anonymousFunc14(e) {
      ;
    }
  }, {
    key: "anonymousFunc15",
    value: function anonymousFunc15(e) {
      ;
    }
  }, {
    key: "anonymousFunc16",
    value: function anonymousFunc16(e) {
      ;
    }
  }]);

  return Member;
}(_taroSwan2.default.Component);

Member.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13", "anonymousFunc14", "anonymousFunc15", "anonymousFunc16"];
Member.$$componentPath = "pages/member/index";
exports.default = Member;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Member));

/***/ })

},[["./src/pages/member/index.tsx","runtime","vendors"]]]);