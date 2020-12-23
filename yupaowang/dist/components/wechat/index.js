(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["components/wechat/index"],{

/***/ "./src/actions/wechat_notice.ts":
/*!**************************************!*\
  !*** ./src/actions/wechat_notice.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeWechatNotice;
function changeWechatNotice(action) {
  return {
    type: action.type,
    data: action.data
  };
}

/***/ }),

/***/ "./src/components/wechat/index.scss":
/*!******************************************!*\
  !*** ./src/components/wechat/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/wechat/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/wechat/index.tsx ***!
  \*****************************************/
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

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _wechat_notice = __webpack_require__(/*! ../../actions/wechat_notice */ "./src/actions/wechat_notice.ts");

var _wechat_notice2 = _interopRequireDefault(_wechat_notice);

var _wechat_notice3 = __webpack_require__(/*! ../../constants/wechat_notice */ "./src/constants/wechat_notice.ts");

var _wechat_notice4 = _interopRequireDefault(_wechat_notice3);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index3 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./index.scss */ "./src/components/wechat/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WechatNotice = function (_Taro$Component) {
  _inherits(WechatNotice, _Taro$Component);

  function WechatNotice() {
    _classCallCheck(this, WechatNotice);

    var _this = _possibleConstructorReturn(this, (WechatNotice.__proto__ || Object.getPrototypeOf(WechatNotice)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__10", "type", "SHOWSERVERPHONE", "SHOWWEIXINNUMBER", "SHOWLISTSNOTICE", "wechatNoticeData"];
    _this.customComponents = ["SwiperNews"];
    return _this;
  }

  _createClass(WechatNotice, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(WechatNotice.prototype.__proto__ || Object.getPrototypeOf(WechatNotice.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__10"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__10 = _genCompid2[0],
          $compid__10 = _genCompid2[1];

      var type = this.__props.type;

      var _useState = (0, _taroSwan.useState)({
        vertical: true,
        lists: []
      }),
          _useState2 = _slicedToArray(_useState, 2),
          swiperNews = _useState2[0],
          setSwiperNews = _useState2[1];

      var dispatch = (0, _redux.useDispatch)();
      var wechatNoticeData = (0, _redux.useSelector)(function (state) {
        return state.WechatNotice;
      });
      // 获取微信号与公告列表
      (0, _taroSwan.useEffect)(function () {
        if (wechatNoticeData.success) {
          setSwiperNews(_extends({}, swiperNews, { lists: wechatNoticeData.notice }));
          return;
        }
        (0, _index.getWechatNotice)().then(function (res) {
          res[_wechat_notice4.default] = _wechat_notice4.default;
          var action = {
            type: _wechat_notice4.default,
            data: res
          };
          setSwiperNews(_extends({}, swiperNews, { lists: res.notice }));
          dispatch((0, _wechat_notice2.default)(action));
        });
      }, []);
      // 复制微信号
      var userCopyWechatNumber = function userCopyWechatNumber() {
        (0, _index2.copyWechatNumber)(wechatNoticeData.wechat.number);
      };
      // 用户拨打电话
      var userCallPhoneAction = function userCallPhoneAction() {
        (0, _index2.userCallPhone)(wechatNoticeData.phone);
      };
      var anonymousState__temp = _index3.SHOWSERVERPHONE || _index3.SHOWWEIXINNUMBER || _index3.SHOWLISTSNOTICE ? (0, _classnames2.default)({
        'wechatinfo-container': true,
        'wechatinfo-container-notop': !_index3.SHOWWEIXINNUMBER && !_index3.SHOWSERVERPHONE
      }) : null;
      this.anonymousFunc0 = function () {
        return userCopyWechatNumber();
      };
      this.anonymousFunc1 = function () {
        return userCopyWechatNumber();
      };
      this.anonymousFunc2 = function () {
        return userCallPhoneAction();
      };
      this.anonymousFunc3 = function () {
        return userCallPhoneAction();
      };
      var anonymousState__temp2 = _index3.SHOWLISTSNOTICE ? (0, _classnames2.default)({
        'notice-container': true,
        'notice-container-notop': !_index3.SHOWSERVERPHONE && !_index3.SHOWWEIXINNUMBER
      }) : null;
      (_index3.SHOWSERVERPHONE || _index3.SHOWWEIXINNUMBER || _index3.SHOWLISTSNOTICE) && _index3.SHOWLISTSNOTICE && _taroSwan.propsManager.set({
        "data": swiperNews
      }, $compid__10, $prevCompid__10);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__10: $compid__10,
        type: type,
        SHOWSERVERPHONE: _index3.SHOWSERVERPHONE,
        SHOWWEIXINNUMBER: _index3.SHOWWEIXINNUMBER,
        SHOWLISTSNOTICE: _index3.SHOWLISTSNOTICE,
        wechatNoticeData: wechatNoticeData
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(e) {
      ;
    }
  }]);

  return WechatNotice;
}(_taroSwan2.default.Component);

WechatNotice.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3"];
WechatNotice.$$componentPath = "components/wechat/index";
exports.default = WechatNotice;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(WechatNotice));

/***/ })

},[["./src/components/wechat/index.tsx","runtime","vendors"]]]);