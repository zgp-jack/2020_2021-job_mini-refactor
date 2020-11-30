(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./src/pages/home/index.scss":
/*!***********************************!*\
  !*** ./src/pages/home/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/home/index.scss");

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _tabbar = __webpack_require__(/*! ../../actions/tabbar */ "./src/actions/tabbar.ts");

var _tabbar2 = __webpack_require__(/*! ../../constants/tabbar */ "./src/constants/tabbar.ts");

var _index2 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _index3 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Taro$Component) {
  _inherits(Home, _Taro$Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__10", "$compid__11", "$compid__12", "$compid__13", "$compid__14", "$compid__15", "IMGCDNURL", "DOWNLOADAPP", "ISWEIXIN", "shwoCity", "area", "homeIndex"];
    _this.customComponents = ["SwiperComponent", "Projects", "Fastfun", "SwiperNews", "RecruitList", "ResumeList", "UsedList", "About", "HomeCity"];
    return _this;
  }

  _createClass(Home, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__10"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__10 = _genCompid2[0],
          $compid__10 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__11"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__11 = _genCompid4[0],
          $compid__11 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__12"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__12 = _genCompid6[0],
          $compid__12 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__13"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__13 = _genCompid8[0],
          $compid__13 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__14"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__14 = _genCompid10[0],
          $compid__14 = _genCompid10[1];

      var _genCompid11 = (0, _taroWeapp.genCompid)(__prefix + "$compid__15"),
          _genCompid12 = _slicedToArray(_genCompid11, 2),
          $prevCompid__15 = _genCompid12[0],
          $compid__15 = _genCompid12[1];

      var _props$homeIndex = this.__props.homeIndex,
          homeIndex = _props$homeIndex === undefined ? 0 : _props$homeIndex;

      var dispatch = (0, _redux.useDispatch)();
      var tabbarJump = function tabbarJump(id) {
        if (id === _tabbar2.USED) {
          (0, _index3.userJumpPage)('/pages/used/lists/index');
          return;
        }
        dispatch((0, _tabbar.changeTabbar)(id));
      };
      // 因为刷新页面就会改变，所以我们将获取选择的位置和当前定位经纬度声明变量先保存
      var userChooseCity = void 0;
      var location = void 0;
      (0, _taroWeapp.useEffect)(function () {
        userChooseCity = _taroWeapp2.default.getStorageSync(_store.UserListChooseCity);
        location = _taroWeapp2.default.getStorageSync(_store.UserLocation);
        setArea(userChooseCity ? userChooseCity.name : '全国');
        setFilterData({
          area: userChooseCity ? userChooseCity.id : 1,
          location: location || ''
        });
      }, [homeIndex]);
      // 当前展示的城市

      var _useState = (0, _taroWeapp.useState)(userChooseCity ? userChooseCity.name : '全国'),
          _useState2 = _slicedToArray(_useState, 2),
          area = _useState2[0],
          setArea = _useState2[1];
      // * 是否展示城市选择


      var _useState3 = (0, _taroWeapp.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          shwoCity = _useState4[0],
          setShowCity = _useState4[1];
      // * 获取列表数据的data


      var _useState5 = (0, _taroWeapp.useState)({
        area: '',
        location: ''
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          filterData = _useState6[0],
          setFilterData = _useState6[1];
      // 选择城市 设置信息


      var setAreaInfo = function setAreaInfo(val, id) {
        setArea(val);
        setFilterData(_extends({}, filterData, { area: id }));
      };
      // * 轮播图的基本参数配置

      var _useState7 = (0, _taroWeapp.useState)({
        lists: []
      }),
          _useState8 = _slicedToArray(_useState7, 2),
          swiper = _useState8[0],
          setSwiper = _useState8[1];
      // * 公告列表


      var _useState9 = (0, _taroWeapp.useState)({
        vertical: true,
        lists: []
      }),
          _useState10 = _slicedToArray(_useState9, 2),
          notice = _useState10[0],
          setNotice = _useState10[1];
      // * 数据列表


      var _useState11 = (0, _taroWeapp.useState)({
        recruit: [],
        resume: [],
        fleamarket: []
      }),
          _useState12 = _slicedToArray(_useState11, 2),
          lists = _useState12[0],
          setLists = _useState12[1];
      // 请求轮播数据


      (0, _taroWeapp.useEffect)(function () {
        (0, _index2.getBannerNotice)().then(function (res) {
          setNotice(_extends({}, notice, { lists: [].concat(_toConsumableArray(res.notice)) }));
          setSwiper(_extends({}, swiper, { lists: [].concat(_toConsumableArray(res.banner)) }));
        });
      }, []);
      // 请求列表数据
      (0, _taroWeapp.useEffect)(function () {
        if (!filterData.area) {
          return;
        }
        (0, _index2.getAllListItem)(filterData).then(function (res) {
          setLists(_extends({}, lists, {
            recruit: [[].concat(_toConsumableArray(res.job.lists))],
            resume: [[].concat(_toConsumableArray(res.resume.lists))],
            fleamarket: [[].concat(_toConsumableArray(res.fleamarket.lists))]
          }));
        });
      }, [filterData]);
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroWeapp2.default.navigateTo({
          url: url
        });
      };
      this.anonymousFunc0 = function () {
        return setShowCity(true);
      };
      this.anonymousFunc1 = function () {
        return userRouteJump('/subpackage/pages/download/index');
      };
      this.anonymousFunc2 = function () {
        return userRouteJump(_index.PUBLISHRECRUIT);
      };
      this.anonymousFunc3 = function () {
        return tabbarJump(_tabbar2.RECRUIT);
      };
      this.anonymousFunc4 = function () {
        return tabbarJump(_tabbar2.RESUME);
      };
      this.anonymousFunc5 = function () {
        return tabbarJump(_tabbar2.USED);
      };
      this.anonymousFunc6 = function () {
        return userRouteJump(_index.PUBLISHRECRUIT);
      };
      var anonymousState__temp = shwoCity ? function (val, id) {
        return setAreaInfo(val, id);
      } : null;
      var anonymousState__temp2 = shwoCity ? function () {
        return setShowCity(!shwoCity);
      } : null;
      _taroWeapp.propsManager.set({
        "data": swiper
      }, $compid__10, $prevCompid__10);
      _taroWeapp.propsManager.set({
        "data": notice
      }, $compid__11, $prevCompid__11);
      _taroWeapp.propsManager.set({
        "data": lists.recruit,
        "bottom": false,
        "hasMore": true
      }, $compid__12, $prevCompid__12);
      _taroWeapp.propsManager.set({
        "data": lists.resume,
        "bottom": false,
        "hasMore": true
      }, $compid__13, $prevCompid__13);
      _taroWeapp.propsManager.set({
        "data": lists.fleamarket,
        "bottom": false,
        "hasMore": true
      }, $compid__14, $prevCompid__14);
      shwoCity && _taroWeapp.propsManager.set({
        "show": shwoCity,
        "setAreaInfo": anonymousState__temp,
        "closeDrawer": anonymousState__temp2
      }, $compid__15, $prevCompid__15);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__10: $compid__10,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        $compid__14: $compid__14,
        $compid__15: $compid__15,
        IMGCDNURL: _index.IMGCDNURL,
        DOWNLOADAPP: _index.DOWNLOADAPP,
        ISWEIXIN: true,
        shwoCity: shwoCity,
        area: area
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

  return Home;
}(_taroWeapp2.default.Component);

Home.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6"];
Home.$$componentPath = "pages/home/index";
exports.default = Home;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Home));

/***/ })

},[["./src/pages/home/index.tsx","runtime","vendors"]]]);