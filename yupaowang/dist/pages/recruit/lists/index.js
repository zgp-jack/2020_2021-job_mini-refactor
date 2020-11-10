(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/recruit/lists/index"],{

/***/ "./src/pages/recruit/lists/index.scss":
/*!********************************************!*\
  !*** ./src/pages/recruit/lists/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/recruit/lists/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/recruit/lists/index.tsx ***!
  \*******************************************/
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

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _index2 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index3 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _lists = __webpack_require__(/*! ../../../config/pages/lists */ "./src/config/pages/lists.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/recruit/lists/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recruit = function (_Taro$Component) {
  _inherits(Recruit, _Taro$Component);

  function Recruit() {
    _classCallCheck(this, Recruit);

    var _this = _possibleConstructorReturn(this, (Recruit.__proto__ || Object.getPrototypeOf(Recruit)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "$compid__15", "$compid__16", "$compid__17", "scrollTop", "refresh"];
    _this.customComponents = ["Search", "RecruitCondition", "WechatNotice", "RecruitList"];
    return _this;
  }

  _createClass(Recruit, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Recruit.prototype.__proto__ || Object.getPrototypeOf(Recruit.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__15"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__15 = _genCompid2[0],
          $compid__15 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__16"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__16 = _genCompid4[0],
          $compid__16 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__17"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__17 = _genCompid6[0],
          $compid__17 = _genCompid6[1];
      // 输入关键词 没搜索 备份


      var _useState = (0, _taroWeapp.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          remark = _useState2[0],
          setRemark = _useState2[1];
      // 是否还有下一页


      var _useState3 = (0, _taroWeapp.useState)(true),
          _useState4 = _slicedToArray(_useState3, 2),
          hasMore = _useState4[0],
          setHasMore = _useState4[1];
      // * 获取选择城市缓存


      var userListChooseCity = _taroWeapp2.default.getStorageSync(_store.UserListChooseCity);
      // * 配置筛选条件

      var _useState5 = (0, _taroWeapp.useState)([{ id: _lists.AreaPickerKey, text: userListChooseCity ? userListChooseCity.name : '全国' }, { id: _lists.ClassifyPickerKey, text: '全部分类' }, { id: _lists.FilterPickerKey, text: '全部' }]),
          _useState6 = _slicedToArray(_useState5, 2),
          condition = _useState6[0],
          setCondition = _useState6[1];
      // * scrollTop 位置 回到顶部


      var _useState7 = (0, _taroWeapp.useState)(0),
          _useState8 = _slicedToArray(_useState7, 2),
          scrollTop = _useState8[0],
          setScrollTop = _useState8[1];
      // * 标记是否是在刷新状态


      var _useState9 = (0, _taroWeapp.useState)(false),
          _useState10 = _slicedToArray(_useState9, 2),
          refresh = _useState10[0],
          setRefresh = _useState10[1];
      // * 定义列表数组


      var _useState11 = (0, _taroWeapp.useState)([]),
          _useState12 = _slicedToArray(_useState11, 2),
          lists = _useState12[0],
          setLists = _useState12[1];
      // * 定义data


      var _useState13 = (0, _taroWeapp.useState)({
        page: 1,
        list_type: 'job',
        area_id: userListChooseCity ? userListChooseCity.id : '',
        classify_id: '',
        keywords: '',
        joblisttype: 'newest',
        token: ''
      }),
          _useState14 = _slicedToArray(_useState13, 2),
          searchData = _useState14[0],
          setSearchData = _useState14[1];
      // 更改某一项操作条件


      var editConditionAction = function editConditionAction(type, text) {
        var data = JSON.parse(JSON.stringify(condition));
        var i = data.findIndex(function (item) {
          return item.id === type;
        });
        var item = _extends({}, data[i], { text: text });
        data[i] = item;
        setCondition(data);
      };
      // 用户定位之后重新设置搜索条件
      var resetLocationSearch = function resetLocationSearch(data) {
        var city = (0, _area.getCityInfo)(data);
        _taroWeapp2.default.setStorageSync(_store.UserListChooseCity, city); //第一次默认选中
        setLists([]);
        editConditionAction('area', city.name);
        setSearchData(_extends({}, searchData, { page: 1, area_id: city.id }));
      };
      // 用户获取定位
      var getUserLocation = function getUserLocation() {
        // 使用用户选择的城市
        if (userListChooseCity) {
          setSearchData(_extends({}, searchData, { page: 1, area_id: userListChooseCity.id }));
        } else {
          var userLocationCity = _taroWeapp2.default.getStorageSync(_store.UserLocationCity);
          if (userLocationCity) {
            resetLocationSearch(userLocationCity);
            return;
          }
          (0, _index2.userAuthLoction)().then(function (gpsLocation) {
            resetLocationSearch(gpsLocation);
          }).catch(function () {
            // 拒绝授权默认全国
            _taroWeapp2.default.setStorageSync(_store.UserListChooseCity, _area.AREACHINA);
            setLists([]);
            setSearchData(_extends({}, searchData, { page: 1, area_id: _area.AREACHINA.id }));
          });
        }
      };
      // 请求列表方法
      var getRecruitListAction = function getRecruitListAction() {
        (0, _index.getRecruitList)(searchData).then(function (res) {
          if (res.data && !res.data.length) {
            setHasMore(false);
          }
          _taroWeapp2.default.hideNavigationBarLoading();
          if (searchData.page === 1) {
            setLists([[].concat(_toConsumableArray(res.data))]);
          } else setLists([].concat(_toConsumableArray(lists), [[].concat(_toConsumableArray(res.data))]));
          if (refresh) {
            setRefresh(false);
          }
        });
      };
      // * 请求列表数据
      (0, _taroWeapp.useEffect)(function () {
        getRecruitListAction();
        if (!searchData.area_id) {
          getUserLocation();
        }
      }, [searchData]);
      // * 触底加载下一页
      var getNextPageData = function getNextPageData() {
        _taroWeapp2.default.showNavigationBarLoading();
        setSearchData(_extends({}, searchData, { page: searchData.page + 1 }));
      };
      // * 监听下拉刷新
      var pullDownAction = function pullDownAction() {
        setRefresh(true);
        setSearchData(_extends({}, searchData, { page: 1 }));
      };
      // * 发布招工
      var userPublishRecruit = function userPublishRecruit() {
        _taroWeapp2.default.navigateTo({ url: _index3.PUBLISHRECRUIT });
      };
      // * 更新筛选条件
      var setSearchDataAction = function setSearchDataAction(type, id, text) {
        var recondition = JSON.parse(JSON.stringify(condition));
        var i = recondition.findIndex(function (item) {
          return item.id === type;
        });
        recondition[i].text = text;
        setCondition(recondition);
        if (type === _lists.ClassifyPickerKey) {
          setSearchData(_extends({}, searchData, { classify_id: id, page: 1 }));
        } else if (type === _lists.AreaPickerKey) {
          setSearchData(_extends({}, searchData, { area_id: id, page: 1 }));
        } else {
          setSearchData(_extends({}, searchData, { joblisttype: id, page: 1 }));
        }
        goToScrollTop();
      };
      // scroll-view 回到顶部
      var goToScrollTop = function goToScrollTop() {
        setHasMore(true);
        setScrollTop(scrollTop ? 0 : 0.1);
      };
      // 输入搜索关键词
      var setSearchValData = function setSearchValData() {
        setSearchData(_extends({}, searchData, { keywords: remark, page: 1 }));
        goToScrollTop();
      };
      var anonymousState__temp = function anonymousState__temp(val) {
        return setRemark(val);
      };
      var anonymousState__temp2 = function anonymousState__temp2() {
        return setSearchValData();
      };
      var anonymousState__temp3 = function anonymousState__temp3(type, id, text) {
        return setSearchDataAction(type, id, text);
      };
      this.anonymousFunc0 = function () {
        return pullDownAction();
      };
      this.anonymousFunc1 = function () {
        return getNextPageData();
      };
      var anonymousState__temp4 = (0, _taroWeapp.internal_inline_style)({ height: '8px' });
      this.anonymousFunc2 = function () {
        return userPublishRecruit();
      };
      _taroWeapp.propsManager.set({
        "placeholder": "\u627E\u6D3B\u3001\u627E\u5DE5\u4F5C",
        "value": "",
        "setRemark": anonymousState__temp,
        "setSearchData": anonymousState__temp2
      }, $compid__15, $prevCompid__15);
      _taroWeapp.propsManager.set({
        "data": condition,
        "setSearchData": anonymousState__temp3
      }, $compid__16, $prevCompid__16);
      _taroWeapp.propsManager.set({
        "data": lists,
        "hasMore": hasMore
      }, $compid__17, $prevCompid__17);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        $compid__15: $compid__15,
        $compid__16: $compid__16,
        $compid__17: $compid__17,
        scrollTop: scrollTop,
        refresh: refresh
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

  return Recruit;
}(_taroWeapp2.default.Component);

Recruit.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"];
Recruit.$$componentPath = "pages/recruit/lists/index";
exports.default = Recruit;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Recruit));

/***/ })

},[["./src/pages/recruit/lists/index.tsx","runtime","vendors"]]]);