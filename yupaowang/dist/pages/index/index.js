(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/config/pages/index.ts":
/*!***********************************!*\
  !*** ./src/config/pages/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IndexTabbarConfig;

var _tabbar = __webpack_require__(/*! ../../constants/tabbar */ "./src/constants/tabbar.ts");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IndexTabbarConfig = (_IndexTabbarConfig = {
  'home': {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true
  }
}, _defineProperty(_IndexTabbarConfig, _tabbar.RECRUIT, {
  navigationBarTitleText: '招工',
  enablePullDownRefresh: true
}), _defineProperty(_IndexTabbarConfig, _tabbar.RESUME, {
  navigationBarTitleText: '找活',
  enablePullDownRefresh: true
}), _defineProperty(_IndexTabbarConfig, _tabbar.MEMBER, {
  navigationBarTitleText: '会员',
  enablePullDownRefresh: true,
  navigationBarBackgroundColor: '#2179f6'
}), _IndexTabbarConfig);
exports.default = IndexTabbarConfig;

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
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

var _tabbar = __webpack_require__(/*! ../../constants/tabbar */ "./src/constants/tabbar.ts");

var _index = __webpack_require__(/*! ../../config/pages/index */ "./src/config/pages/index.ts");

var _index2 = _interopRequireDefault(_index);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _tabbar2 = __webpack_require__(/*! ../../actions/tabbar */ "./src/actions/tabbar.ts");

var _index3 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index4 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '',
      enablePullDownRefresh: false,
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: "dark"
    };

    _this.$usedState = ["$compid__7", "$compid__8", "$compid__9", "tabKey", "HOME", "RECRUIT", "RESUME", "MEMBER"];
    _this.customComponents = ["Home", "Recruit", "Resume", "Member", "Tabbar"];
    return _this;
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__7"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__7 = _genCompid2[0],
          $compid__7 = _genCompid2[1];

      var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "$compid__8"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__8 = _genCompid4[0],
          $compid__8 = _genCompid4[1];

      var _genCompid5 = (0, _taroTt.genCompid)(__prefix + "$compid__9"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__9 = _genCompid6[0],
          $compid__9 = _genCompid6[1];

      var dispatch = (0, _redux.useDispatch)();
      // 初始化页面参数
      var router = (0, _taroTt.useRouter)();
      var _router$params = router.params,
          _router$params$type = _router$params.type,
          type = _router$params$type === undefined ? _tabbar.RECRUIT : _router$params$type,
          _router$params$refId = _router$params.refId,
          refId = _router$params$refId === undefined ? '' : _router$params$refId;
      // 获取当前tabbar高亮值

      var tabKey = (0, _redux.useSelector)(function (state) {
        return state.tabbar.key;
      });
      // 获取当前的用户id
      var userId = (0, _redux.useSelector)(function (state) {
        return state.User.userId;
      });
      // 标记是否触发下拉刷新

      var _useState = (0, _taroTt.useState)(0),
          _useState2 = _slicedToArray(_useState, 2),
          pulldown = _useState2[0],
          setPulldown = _useState2[1];
      // 会员中心是当前页面的一个组件 所以没有判断页面显示的功能 这里传值给会员中心促使改变刷新数据


      var _useState3 = (0, _taroTt.useState)(0),
          _useState4 = _slicedToArray(_useState3, 2),
          showIndex = _useState4[0],
          setShowIndex = _useState4[1];
      // 监听页面下拉刷新


      (0, _taroTt.usePullDownRefresh)(function () {
        setPulldown(pulldown + 1);
      });
      // 设置当前页面分享
      (0, _taroTt.useShareAppMessage)(function () {
        var path = _index3.INDEXPATH + "?type=" + tabKey;
        return _extends({}, (0, _index4.getUserShareMessage)(), {
          path: userId ? path + "&refId=" + userId : path
        });
      });
      // 当页面显示的 时候 触发
      (0, _taroTt.useDidShow)(function () {
        if (tabKey) {
          _taroTt2.default.setNavigationBarTitle({ title: _index2.default[tabKey].navigationBarTitleText });
        }
        setShowIndex(showIndex + 1);
      });
      // 进入页面的时候 ，如果有邀请人，我们将邀请人id存入缓存中， 等待新用户授权时使用
      (0, _taroTt.useEffect)(function () {
        if (refId) {
          _taroTt2.default.setStorageSync(_store.REFID, refId);
        }
      }, [refId]);
      // 初始化底部显示页面
      (0, _taroTt.useEffect)(function () {
        if ((0, _tabbar.typeInTabbar)(type)) {
          dispatch((0, _tabbar2.changeTabbar)(type));
        } else {
          dispatch((0, _tabbar2.changeTabbar)(_tabbar.RECRUIT));
        }
      }, [type]);
      // 初始化页面配置信息
      (0, _taroTt.useEffect)(function () {
        if (!tabKey) {
          return;
        }
        var data = _index2.default[tabKey];
        _taroTt2.default.setNavigationBarTitle({ title: data.navigationBarTitleText });
        _taroTt2.default.setNavigationBarColor({
          backgroundColor: data.navigationBarBackgroundColor || '#0099ff',
          frontColor: '#ffffff'
        });
      }, [tabKey]);
      tabKey === _tabbar.HOME && _taroTt.propsManager.set({
        "homeIndex": showIndex
      }, $compid__7, $prevCompid__7);
      tabKey === _tabbar.MEMBER && _taroTt.propsManager.set({
        "memberIndex": showIndex
      }, $compid__8, $prevCompid__8);
      _taroTt.propsManager.set({
        "notredirect": true
      }, $compid__9, $prevCompid__9);
      Object.assign(this.__state, {
        $compid__7: $compid__7,
        $compid__8: $compid__8,
        $compid__9: $compid__9,
        tabKey: tabKey,
        HOME: _tabbar.HOME,
        RECRUIT: _tabbar.RECRUIT,
        RESUME: _tabbar.RESUME,
        MEMBER: _tabbar.MEMBER
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroTt2.default.Component);

Index.$$events = [];
Index.$$componentPath = "pages/index/index";
Index.config = { navigationBarTitleText: '', enablePullDownRefresh: false, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = Index;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Index, true));

/***/ })

},[["./src/pages/index/index.tsx","runtime","vendors"]]]);