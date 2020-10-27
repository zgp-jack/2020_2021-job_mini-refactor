(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/feedbacklist/index"],{

/***/ "./src/pages/feedbacklist/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/feedbacklist/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/feedbacklist/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/feedbacklist/index.tsx ***!
  \******************************************/
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

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/feedbacklist/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeedbackList = function (_Taro$Component) {
  _inherits(FeedbackList, _Taro$Component);

  function FeedbackList() {
    _classCallCheck(this, FeedbackList);

    var _this = _possibleConstructorReturn(this, (FeedbackList.__proto__ || Object.getPrototypeOf(FeedbackList)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '鱼泡网-意见反馈列表',
      enablePullDownRefresh: true,
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: 'dark'
    };

    _this.$usedState = ["lists", "loopArray59", "$compid__50", "isDown"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = ["Auth", "WechatNotice", "Nodata"];
    return _this;
  }

  _createClass(FeedbackList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(FeedbackList.prototype.__proto__ || Object.getPrototypeOf(FeedbackList.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__50"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__50 = _genCompid2[0],
          $compid__50 = _genCompid2[1];
      // * 标记是否是在刷新状态


      var _useState = (0, _taroWeapp.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          refresh = _useState2[0],
          setRefresh = _useState2[1];
      // 设置初始页面


      var _useState3 = (0, _taroWeapp.useState)({
        page: 1
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          initPage = _useState4[0],
          setPage = _useState4[1];
      // 定义数据


      var _useState5 = (0, _taroWeapp.useState)({
        item: []
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          lists = _useState6[0],
          setLists = _useState6[1];
      // 用户信息


      var _useState7 = (0, _taroWeapp.useState)({
        phone: '',
        username: ''
      }),
          _useState8 = _slicedToArray(_useState7, 2),
          userData = _useState8[0],
          setUserData = _useState8[1];
      // 获取用户是否登录


      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // 是否能上拉加载更多

      var _useState9 = (0, _taroWeapp.useState)(true),
          _useState10 = _slicedToArray(_useState9, 2),
          isDown = _useState10[0],
          setIsDown = _useState10[1];
      // 判断是否登陆


      (0, _taroWeapp.useEffect)(function () {
        if (!login) {
          return;
        }
        feedbackDataAction();
      }, [login, initPage]);
      // 进来时获取数据
      var feedbackDataAction = function feedbackDataAction() {
        (0, _index.feedbackAction)(initPage.page).then(function (res) {
          _taroWeapp2.default.hideNavigationBarLoading();
          _taroWeapp2.default.stopPullDownRefresh();
          if (initPage.page === 1) {
            setLists({ item: [].concat(_toConsumableArray(res.data)) });
          } else {
            setLists({ item: [].concat(_toConsumableArray(lists.item), _toConsumableArray(res.data)) });
          }
          setUserData(res.memberInfo);
          if (refresh) {
            setRefresh(false);
          }
          if (!res.data.length) {
            setIsDown(false);
          }
        });
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroWeapp2.default.navigateTo({
          url: url
        });
      };
      // 上拉加载更多
      (0, _taroWeapp.useReachBottom)(function () {
        if (!isDown) {
          return;
        }
        _taroWeapp2.default.showNavigationBarLoading();
        setPage(_extends({}, initPage, { page: initPage.page + 1 }));
      });
      var handleImg = function handleImg(e) {
        _taroWeapp2.default.previewImage({
          current: e,
          urls: [e]
        });
      };
      // 下拉刷新
      (0, _taroWeapp.usePullDownRefresh)(function () {
        setIsDown(true);
        setPage({ page: 1 });
      });
      this.anonymousFunc2 = function () {
        return userRouteJump("/pages/feedback/index?username=" + userData.username + "&phone=" + userData.phone);
      };
      var loopArray59 = lists.item ? lists.item.map(function (item, __index1) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $anonymousCallee__7 = item.$original.images ? item.$original.images.map(function (v, index) {
          v = {
            $original: (0, _taroWeapp.internal_get_original)(v)
          };
          var $loopState__temp2 = item.$original.images ? index + index : null;
          var _$indexKey = "hbzzz" + __index1 + "-" + index;
          _this2.anonymousFunc0Map[_$indexKey] = function () {
            handleImg(v.$original);
          };
          return {
            $loopState__temp2: $loopState__temp2,
            _$indexKey: _$indexKey,
            $original: v.$original
          };
        }) : [];
        return {
          $anonymousCallee__7: $anonymousCallee__7,
          $original: item.$original
        };
      }) : [];
      !lists.item.length && _taroWeapp.propsManager.set({
        "text": "\u6682\u65E0\u76F8\u5173\u6570\u636E\u53CD\u9988"
      }, $compid__50, $prevCompid__50);
      Object.assign(this.__state, {
        lists: lists,
        loopArray59: loopArray59,
        $compid__50: $compid__50,
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
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return FeedbackList;
}(_taroWeapp2.default.Component);

FeedbackList.$$events = ["anonymousFunc0", "anonymousFunc2"];
FeedbackList.$$componentPath = "pages/feedbacklist/index";
FeedbackList.config = { navigationBarTitleText: '鱼泡网-意见反馈列表', enablePullDownRefresh: true, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: 'dark' };
exports.default = FeedbackList;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(FeedbackList, true));

/***/ })

},[["./src/pages/feedbacklist/index.tsx","runtime","vendors"]]]);