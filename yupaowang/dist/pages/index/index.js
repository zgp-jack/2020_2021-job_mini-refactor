(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/index/index"],{

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

var _index = __webpack_require__(/*! ../index */ "./src/config/index.ts");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IndexTabbarConfig = (_IndexTabbarConfig = {}, _defineProperty(_IndexTabbarConfig, _tabbar.HOME, {
  navigationBarTitleText: _index.PAGETITLE + '\u5EFA\u7B51\u62DB\u8058|\u5EFA\u7B51\u4EBA\u624D|\u5DE5\u5730\u62DB\u5DE5|\u65BD\u5DE5\u961F\u627E\u6D3B|\u5DE5\u7A0B\u4FE1\u606F',
  enablePullDownRefresh: true
}), _defineProperty(_IndexTabbarConfig, _tabbar.RECRUIT, {
  navigationBarTitleText: '建筑招工平台|建筑工程承包|工地招聘建筑施工队|招聘建筑工人|招聘建筑工程队信息-鱼泡网',
  enablePullDownRefresh: true
}), _defineProperty(_IndexTabbarConfig, _tabbar.RESUME, {
  navigationBarTitleText: '建筑人才|建筑工人|工程队伍|建筑普工|施工队伍|建筑班组|建筑队|工人找活|工人简历库-鱼泡网',
  enablePullDownRefresh: true
}), _defineProperty(_IndexTabbarConfig, _tabbar.MEMBER, {
  navigationBarTitleText: '会员中心-鱼泡网',
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

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

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

    _this.$usedState = ["$compid__16", "$compid__17", "$compid__18", "tabKey", "HOME", "RECRUIT", "RESUME", "MEMBER"];
    _this.customComponents = ["Home", "Recruit", "Resume", "Member", "Tabbar"];
    return _this;
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__16"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__16 = _genCompid2[0],
          $compid__16 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__17"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__17 = _genCompid4[0],
          $compid__17 = _genCompid4[1];

      var _genCompid5 = (0, _taroSwan.genCompid)(__prefix + "$compid__18"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__18 = _genCompid6[0],
          $compid__18 = _genCompid6[1];

      var dispatch = (0, _redux.useDispatch)();
      // 初始化页面参数
      var router = (0, _taroSwan.useRouter)();
      // type 类型(会重置tabbar)，默认招工列表 refId 邀请人id 谁分享出去就是谁 classify 工种参数 area 地区参数 listtype 类型 keywords关键词
      var _router$params = router.params,
          _router$params$type = _router$params.type,
          type = _router$params$type === undefined ? _tabbar.RECRUIT : _router$params$type,
          _router$params$refId = _router$params.refId,
          refId = _router$params$refId === undefined ? '' : _router$params$refId,
          _router$params$classi = _router$params.classify,
          classify = _router$params$classi === undefined ? '' : _router$params$classi,
          _router$params$area = _router$params.area,
          area = _router$params$area === undefined ? '' : _router$params$area,
          _router$params$listty = _router$params.listtype,
          listtype = _router$params$listty === undefined ? '' : _router$params$listty,
          _router$params$keywor = _router$params.keywords,
          keywords = _router$params$keywor === undefined ? '' : _router$params$keywor;
      // 获取当前tabbar高亮值

      var tabKey = (0, _redux.useSelector)(function (state) {
        return state.tabbar.key;
      });
      // 获取当前的用户id
      var userId = (0, _redux.useSelector)(function (state) {
        return state.User.userId;
      });
      // 标记是否触发下拉刷新

      var _useState = (0, _taroSwan.useState)(0),
          _useState2 = _slicedToArray(_useState, 2),
          pulldown = _useState2[0],
          setPulldown = _useState2[1];
      // 会员中心是当前页面的一个组件 所以没有判断页面显示的功能 这里传值给会员中心促使改变刷新数据


      var _useState3 = (0, _taroSwan.useState)(0),
          _useState4 = _slicedToArray(_useState3, 2),
          showIndex = _useState4[0],
          setShowIndex = _useState4[1];
      // 监听页面下拉刷新


      (0, _taroSwan.usePullDownRefresh)(function () {
        setPulldown(pulldown + 1);
      });
      // 设置当前页面分享
      (0, _taroSwan.useShareAppMessage)(function () {
        var path = _index3.INDEXPATH + "?type=" + tabKey;
        return _extends({}, (0, _index4.getUserShareMessage)(), {
          path: userId ? path + "&refId=" + userId : path
        });
      });
      // 当页面显示的 时候 触发
      (0, _taroSwan.useDidShow)(function () {
        // 显示的时候重置当前标题
        if (tabKey) {
          _taroSwan2.default.setNavigationBarTitle({ title: _index2.default[tabKey].navigationBarTitleText });
        }
        // 由于index容纳了home/recruit/resume/member 4个页面，在需要使用当前页面展示的时候监听当前字段
        setShowIndex(showIndex + 1);
        console.log(type, classify, area, listtype, keywords);
        // 设置百度seo相关信息
        if (_index3.SERIES == _index3.BAIDUSERIES) {
          _taroSwan2.default.setPageInfo({
            title: '鱼泡网-建筑招聘|建筑人才|工地招工|施工队找活|工程信息',
            description: '鱼泡网每日发布建筑招聘、建筑人才、工地招工、工地招人、找施工队等工程信息，方便建筑工人找活、找项目，为建筑劳务公司寻找优秀的建筑工人、建筑人才、建筑班组、施工队。',
            keywords: '鱼泡网,建筑招聘,建筑人才,工地招工,施工队找活,工程信息'
          });
        }
      });
      // 进入页面的时候 ，如果有邀请人，我们将邀请人id存入缓存中， 等待新用户授权时使用
      (0, _taroSwan.useEffect)(function () {
        if (refId) {
          _taroSwan2.default.setStorageSync(_store.REFID, refId);
        }
      }, [refId]);
      // 初始化底部显示页面
      (0, _taroSwan.useEffect)(function () {
        if ((0, _tabbar.typeInTabbar)(type)) {
          dispatch((0, _tabbar2.changeTabbar)(type));
        } else {
          dispatch((0, _tabbar2.changeTabbar)(_tabbar.RECRUIT));
        }
      }, [type]);
      // 初始化页面配置信息
      (0, _taroSwan.useEffect)(function () {
        if (!tabKey) {
          return;
        }
        var data = _index2.default[tabKey];
        _taroSwan2.default.setNavigationBarTitle({ title: data.navigationBarTitleText });
        _taroSwan2.default.setNavigationBarColor({
          backgroundColor: data.navigationBarBackgroundColor || '#0099ff',
          frontColor: '#ffffff'
        });
      }, [tabKey]);
      tabKey === _tabbar.HOME && _taroSwan.propsManager.set({
        "homeIndex": showIndex
      }, $compid__16, $prevCompid__16);
      tabKey === _tabbar.MEMBER && _taroSwan.propsManager.set({
        "memberIndex": showIndex
      }, $compid__17, $prevCompid__17);
      _taroSwan.propsManager.set({
        "notredirect": true
      }, $compid__18, $prevCompid__18);
      Object.assign(this.__state, {
        $compid__16: $compid__16,
        $compid__17: $compid__17,
        $compid__18: $compid__18,
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
}(_taroSwan2.default.Component);

Index.$$events = [];
Index.$$componentPath = "pages/index/index";
Index.config = { navigationBarTitleText: '', enablePullDownRefresh: false, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = Index;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Index, true));

/***/ })

},[["./src/pages/index/index.tsx","runtime","vendors"]]]);