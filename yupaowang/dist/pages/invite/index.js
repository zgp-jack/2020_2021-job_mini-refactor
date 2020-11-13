(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/invite/index"],{

/***/ "./src/pages/invite/index.scss":
/*!*************************************!*\
  !*** ./src/pages/invite/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/invite/index.tsx":
/*!************************************!*\
  !*** ./src/pages/invite/index.tsx ***!
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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index2 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index3 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/invite/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Invite = function (_Taro$Component) {
  _inherits(Invite, _Taro$Component);

  function Invite() {
    _classCallCheck(this, Invite);

    var _this = _possibleConstructorReturn(this, (Invite.__proto__ || Object.getPrototypeOf(Invite)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: "邀请好友"
    };

    _this.$usedState = ["IMGCDNURL", "link"];
    _this.customComponents = ["Auth"];
    return _this;
  }

  _createClass(Invite, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Invite.prototype.__proto__ || Object.getPrototypeOf(Invite.prototype), "_constructor", this).call(this, props);
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
      // 用户邀请链接

      var _useState = (0, _taroTt.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          link = _useState2[0],
          setLink = _useState2[1];
      // 获取用户是否登录


      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // 初始化用户链接
      (0, _taroTt.useEffect)(function () {
        if (!login) {
          return;
        }
        (0, _index2.getUserInviteLink)().then(function (res) {
          if (res.errcode == 'ok') {
            setLink(res.link);
          } else (0, _index3.ShowActionModal)({ msg: res.errmsg, success: function success() {
              return _taroTt2.default.navigateBack();
            } });
        });
      }, [login]);
      // 用户复制邀请链接
      var copyUserInviteLink = function copyUserInviteLink() {
        _taroTt2.default.setClipboardData({
          data: link,
          success: function success() {
            _taroTt2.default.hideToast();
            (0, _index3.ShowActionModal)({
              title: '恭喜您',
              msg: '您的邀请链接已复制到粘贴板，赶快去邀请好友吧！'
            });
          }
        });
      };
      this.anonymousFunc0 = function () {
        return copyUserInviteLink();
      };
      Object.assign(this.__state, {
        IMGCDNURL: _index.IMGCDNURL,
        link: link
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return Invite;
}(_taroTt2.default.Component);

Invite.$$events = ["anonymousFunc0"];
Invite.$$componentPath = "pages/invite/index";
Invite.config = { navigationBarTitleText: "邀请好友" };
exports.default = Invite;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Invite, true));

/***/ })

},[["./src/pages/invite/index.tsx","runtime","vendors"]]]);