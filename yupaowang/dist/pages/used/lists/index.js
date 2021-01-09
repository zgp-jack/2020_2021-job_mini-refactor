(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/used/lists/index"],{

/***/ "./src/pages/used/lists/index.scss":
/*!*****************************************!*\
  !*** ./src/pages/used/lists/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/used/lists/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/used/lists/index.tsx ***!
  \****************************************/
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

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/used/lists/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fleamarket = function (_Taro$Component) {
  _inherits(Fleamarket, _Taro$Component);

  function Fleamarket() {
    _classCallCheck(this, Fleamarket);

    var _this = _possibleConstructorReturn(this, (Fleamarket.__proto__ || Object.getPrototypeOf(Fleamarket)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '二手交易列表',
      enablePullDownRefresh: false,
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: "dark"
    };

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__43", "$compid__44", "$compid__45", "refresh", "listScrollTop"];
    _this.customComponents = ["Search", "UsedCondition", "WechatNotice", "UsedList", "Tabbar"];
    return _this;
  }

  _createClass(Fleamarket, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Fleamarket.prototype.__proto__ || Object.getPrototypeOf(Fleamarket.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__43"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__43 = _genCompid2[0],
          $compid__43 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__44"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__44 = _genCompid4[0],
          $compid__44 = _genCompid4[1];

      var _genCompid5 = (0, _taroSwan.genCompid)(__prefix + "$compid__45"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__45 = _genCompid6[0],
          $compid__45 = _genCompid6[1];

      var router = (0, _taroSwan.useRouter)();
      // 是否已是最后一页

      var _useState = (0, _taroSwan.useState)(true),
          _useState2 = _slicedToArray(_useState, 2),
          hasMore = _useState2[0],
          setHasMore = _useState2[1];
      // * 获取地区选择默认数据


      var userListChooseCity = _taroSwan2.default.getStorageSync(_store.UserListChooseCity);
      // * 标记是否是在刷新状态

      var _useState3 = (0, _taroSwan.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          refresh = _useState4[0],
          setRefresh = _useState4[1];
      // * 定义列表数组


      var _useState5 = (0, _taroSwan.useState)([]),
          _useState6 = _slicedToArray(_useState5, 2),
          lists = _useState6[0],
          setLists = _useState6[1];
      // * 定义data


      var _useState7 = (0, _taroSwan.useState)({
        page: 1,
        list_type: 'fleamarket',
        area_id: userListChooseCity.id,
        classify_id: '0',
        attribute_id: '',
        keywords: ''
      }),
          _useState8 = _slicedToArray(_useState7, 2),
          searchData = _useState8[0],
          setSearchData = _useState8[1];

      (0, _taroSwan.useDidShow)(function () {
        if (_index2.SERIES == _index2.BAIDUSERIES) {
          _taroSwan2.default.setPageInfo({
            title: '工地二手交易_工程机械二手买卖_工程设备废料回收_建筑资质租用转让—鱼泡网',
            description: '建筑工地二手交易板块，为建筑工程工人、老板、公司提供二手工程机械、工程设备、建筑材料废料、二手电动工具、建筑资质租用转让的信息。方便卖家能很快的找到合适买家，让买家能收到合适的工程二手材料。',
            keywords: '工地二手交易,工程机械二手买卖,工程设备废料回收,建筑资质租用转让'
          });
          // const filterData = useSelector<any, filterClassifyDataResultReduce>(
          //   state => state.filterClassify
          // );
          //getUsedListSeoInfo(router.params, filterData)
        }
      });

      var _useState9 = (0, _taroSwan.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          inputValue = _useState10[0],
          setInputValue = _useState10[1];

      var _useState11 = (0, _taroSwan.useState)(0),
          _useState12 = _slicedToArray(_useState11, 2),
          listScrollTop = _useState12[0],
          setListScrollTop = _useState12[1];
      // * 请求列表数据


      (0, _taroSwan.useEffect)(function () {
        (0, _index.getFleamarketList)(searchData).then(function (res) {
          _taroSwan2.default.hideNavigationBarLoading();
          if (!res.length) {
            setHasMore(false);
          }
          if (searchData.page === 1) {
            setHasMore(true);
            goToScrollTop();
            setLists([[].concat(_toConsumableArray(res))]);
          } else setLists([].concat(_toConsumableArray(lists), [[].concat(_toConsumableArray(res))]));
          if (refresh) {
            setRefresh(false);
          }
        });
      }, [searchData]);
      // * 触底加载下一页
      var getNextPageData = function getNextPageData() {
        if (!hasMore) {
          return;
        }
        _taroSwan2.default.showNavigationBarLoading();
        setSearchData(_extends({}, searchData, { page: searchData.page + 1 }));
      };
      // * 监听下拉刷新
      var pullDownAction = function pullDownAction() {
        setRefresh(true);
        setSearchData(_extends({}, searchData, { page: 1 }));
      };
      // * 监听地区选择/分类选
      var searchChange = function searchChange(data) {
        setSearchData(_extends({}, searchData, data, { page: 1 }));
      };
      // * 监听搜索
      var inputSearch = function inputSearch(value) {
        setInputValue(value);
      };
      var setSearchDatas = function setSearchDatas(key, value) {
        searchData[key] = value;
        setSearchData(_extends({}, searchData, { page: 1 }));
      };
      // scroll-view 回到顶部
      var goToScrollTop = function goToScrollTop() {
        setListScrollTop(listScrollTop ? 0 : 0.1);
      };
      var anonymousState__temp = function anonymousState__temp(value) {
        return inputSearch(value);
      };
      var anonymousState__temp2 = function anonymousState__temp2() {
        return setSearchDatas('keywords', inputValue);
      };
      this.anonymousFunc0 = function () {
        return pullDownAction();
      };
      this.anonymousFunc1 = function () {
        return getNextPageData();
      };
      _taroSwan.propsManager.set({
        "placeholder": "\u8DF3\u86A4\u5E02\u573A",
        "value": "",
        "setRemark": anonymousState__temp,
        "setSearchData": anonymousState__temp2
      }, $compid__43, $prevCompid__43);
      _taroSwan.propsManager.set({
        "setSearchData": searchChange
      }, $compid__44, $prevCompid__44);
      _taroSwan.propsManager.set({
        "data": lists,
        "hasMore": hasMore
      }, $compid__45, $prevCompid__45);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__43: $compid__43,
        $compid__44: $compid__44,
        $compid__45: $compid__45,
        refresh: refresh,
        listScrollTop: listScrollTop
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
  }]);

  return Fleamarket;
}(_taroSwan2.default.Component);

Fleamarket.$$events = ["anonymousFunc0", "anonymousFunc1"];
Fleamarket.$$componentPath = "pages/used/lists/index";
Fleamarket.config = { navigationBarTitleText: '二手交易列表', enablePullDownRefresh: false, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = Fleamarket;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Fleamarket, true));

/***/ })

},[["./src/pages/used/lists/index.tsx","runtime","vendors"]]]);