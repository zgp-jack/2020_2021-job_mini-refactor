(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/information/system/index"],{

/***/ "./src/pages/information/system/index.scss":
/*!*************************************************!*\
  !*** ./src/pages/information/system/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/information/system/index.tsx":
/*!************************************************!*\
  !*** ./src/pages/information/system/index.tsx ***!
  \************************************************/
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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _index3 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/information/system/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 默认跳转路径
var newmessageinfo = {
  1: {
    title: '系统信息',
    url: '',
    titleText: '系统提醒'
  },
  2: {
    title: '招工信息',
    url: '/pages/published/recruit/index',
    titleText: '招工提醒'
  },
  3: {
    title: '名片信息',
    url: '/pages/resume/publish/index',
    titleText: '找活提醒'
  },
  4: {
    title: '证书信息',
    url: '/pages/resume/skills/index',
    titleText: '找活提醒'
  },
  5: {
    title: '项目信息',
    url: '/pages/resume/projects/index',
    titleText: '找活提醒'
  },
  6: {
    title: '投诉招工信息',
    url: '/pages/integral/tabber/index',
    titleText: '投诉提醒'
  },
  7: {
    title: '留言信息',
    url: '/pages/feedbacklist/index',
    titleText: '我的信息-留言'
  },
  8: {
    title: '积分管理',
    url: '/pages/integral/tabber/index',
    titleText: '系统提醒'
  },
  9: {
    title: '实名认证',
    url: '/pages/realname/index',
    titleText: '系统提醒'
  },
  10: {
    title: '投诉找活信息',
    url: '/pages/integral/tabber/index',
    titleText: '投诉提醒'
  }
};

var System = function (_Taro$Component) {
  _inherits(System, _Taro$Component);

  function System() {
    _classCallCheck(this, System);

    var _this = _possibleConstructorReturn(this, (System.__proto__ || Object.getPrototypeOf(System)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '',
      enablePullDownRefresh: true
    };

    _this.$usedState = ["data", "loopArray69", "IMGCDNURL", "isDown"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = ["Nodata"];
    return _this;
  }

  _createClass(System, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(System.prototype.__proto__ || Object.getPrototypeOf(System.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var router = (0, _taroTt.useRouter)();
      var type = router.params.type;
      // 初始数据

      var _useState = (0, _taroTt.useState)({
        item: []
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];
      // 初始页数


      var _useState3 = (0, _taroTt.useState)({
        page: 1
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          initPage = _useState4[0],
          setPage = _useState4[1];
      // 是够能加载更多


      var _useState5 = (0, _taroTt.useState)(true),
          _useState6 = _slicedToArray(_useState5, 2),
          isDown = _useState6[0],
          setIsDown = _useState6[1];
      // 判断是否是ios


      var _useState7 = (0, _taroTt.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          ios = _useState8[0],
          setIos = _useState8[1];

      (0, _taroTt.useEffect)(function () {
        // 判断是安卓还是苹果
        setIos((0, _index3.isIos)());
        var terminal_type = ios ? 'ios' : 'android';
        var ListType = parseInt(type);
        _taroTt2.default.setNavigationBarTitle({
          title: newmessageinfo[ListType].titleText
        });
        messagesType(parseInt(type), terminal_type);
      }, [initPage]);
      // 请求
      var messagesType = function messagesType(type, terminal_type) {
        var params = {
          type: type,
          page: initPage.page,
          terminal_type: terminal_type
        };
        (0, _index.messagesTypeAction)(params).then(function (res) {
          _taroTt2.default.hideNavigationBarLoading();
          if (!res.data.lists.length) {
            setIsDown(false);
          }
          if (initPage.page === 1) {
            setData({ item: [].concat(_toConsumableArray(res.data.lists)) });
          } else {
            setData({ item: [].concat(_toConsumableArray(data.item), _toConsumableArray(res.data.lists)) });
          }
        });
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(type) {
        _taroTt2.default.navigateTo({
          url: newmessageinfo[type].url
        });
      };
      // 上拉加载更多
      (0, _taroTt.useReachBottom)(function () {
        if (!isDown) {
          return;
        }
        _taroTt2.default.showNavigationBarLoading();
        setPage(_extends({}, initPage, { page: initPage.page + 1 }));
      });
      var loopArray69 = data.item.map(function (item, __index0) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey = "ibzzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return userRouteJump(item.$original.type);
        };
        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        data: data,
        loopArray69: loopArray69,
        IMGCDNURL: _index2.IMGCDNURL,
        isDown: isDown
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return System;
}(_taroTt2.default.Component);

System.$$events = ["anonymousFunc0"];
System.$$componentPath = "pages/information/system/index";
System.config = { navigationBarTitleText: '', enablePullDownRefresh: true };
exports.default = System;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(System, true));

/***/ })

},[["./src/pages/information/system/index.tsx","runtime","vendors"]]]);