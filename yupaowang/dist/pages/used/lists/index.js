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

var _index3 = __webpack_require__(/*! ../../../utils/seo/index */ "./src/utils/seo/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

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

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__45", "$compid__46", "$compid__47", "refresh", "listScrollTop"];
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__45"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__45 = _genCompid2[0],
          $compid__45 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__46"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__46 = _genCompid4[0],
          $compid__46 = _genCompid4[1];

      var _genCompid5 = (0, _taroSwan.genCompid)(__prefix + "$compid__47"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__47 = _genCompid6[0],
          $compid__47 = _genCompid6[1];

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
          var filterData = (0, _redux.useSelector)(function (state) {
            return state.filterClassify;
          });
          _taroSwan2.default.setPageInfo(_extends({}, (0, _index3.getUsedListSeoInfo)(router.params, filterData)));
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
      var anonymousState__temp3 = (0, _taroSwan.internal_inline_style)({ height: '8px' });
      _taroSwan.propsManager.set({
        "placeholder": "\u8DF3\u86A4\u5E02\u573A",
        "value": "",
        "setRemark": anonymousState__temp,
        "setSearchData": anonymousState__temp2
      }, $compid__45, $prevCompid__45);
      _taroSwan.propsManager.set({
        "setSearchData": searchChange
      }, $compid__46, $prevCompid__46);
      _taroSwan.propsManager.set({
        "data": lists,
        "hasMore": hasMore
      }, $compid__47, $prevCompid__47);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__45: $compid__45,
        $compid__46: $compid__46,
        $compid__47: $compid__47,
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

/***/ }),

/***/ "./src/utils/seo/index.ts":
/*!********************************!*\
  !*** ./src/utils/seo/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PURPOSE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getUsedListSeoInfo = getUsedListSeoInfo;
exports.detailUsedListSeoInfo = detailUsedListSeoInfo;

var _index = __webpack_require__(/*! ../request/index */ "./src/utils/request/index.ts");

// 当前二手交易 全部分类下是没有子类的，但是对应的m端有一个参数代表全部分类下面的子类
// http://m.yupao.com/ershou/sichuan_quanbufenlei_purpose/
var PURPOSE = exports.PURPOSE = 'purpose';
var DEFAULTUSEDSEOINFO = {
  title: '工地二手交易_工程机械二手买卖_工程设备废料回收_建筑资质租用转让—鱼泡网',
  keywords: '工地二手交易,工程机械二手买卖,工程设备废料回收,建筑资质租用转让',
  description: '建筑工地二手交易板块，为建筑工程工人、老板、公司提供二手工程机械、工程设备、建筑材料废料、二手电动工具、建筑资质租用转让的信息。方便卖家能很快的找到合适买家，让买家能收到合适的工程二手材料。'
};
// 获得二手交易页面seo信息
function getUsedListSeoInfo(params, filterData) {
  // 如果有城市信息就代表当前页面被分享，需要动态组成 seo信息
  if (params.area) {
    // 先判断redux中是否已经有值 没有就请求新数据 有就直接遍历
    if (filterData.isSet) {
      return _extends({}, detailUsedListSeoInfo(params, filterData.fleamarketTree));
    } else {
      (0, _index.getListFilterData)().then(function (res) {
        return _extends({}, detailUsedListSeoInfo(params, res.data.fleamarketTree));
      });
    }
  }
  // 默认返回的seo信息
  return _extends({}, DEFAULTUSEDSEOINFO);
}
// 返回二手的seo信息  遍历数据
function detailUsedListSeoInfo(params, fleamarketTree) {
  var areaText = '全国';
  var classifyText = '二手交易';
  var attributeText = '';
  // 如果说能走到该函数，说明页面都是带了参数，那我们直接给默认值
  var _params$area = params.area,
      area = _params$area === undefined ? 'quanguo' : _params$area,
      _params$classify = params.classify,
      classify = _params$classify === undefined ? 'quanbufenlei' : _params$classify,
      _params$attribute = params.attribute,
      attribute = _params$attribute === undefined ? PURPOSE : _params$attribute,
      _params$keywords = params.keywords,
      keywords = _params$keywords === undefined ? '' : _params$keywords;
  // 直接判断是否是全部分类，如果是我们就返回全部类型的seo信息

  if (classify == 'quanbufenlei') {
    return {
      title: areaText + '\u5DE5\u5730\u4E8C\u624B\u4EA4\u6613_\u5DE5\u7A0B\u673A\u68B0\u4E8C\u624B\u4E70\u5356_\u5DE5\u7A0B\u8BBE\u5907\u5E9F\u6599\u56DE\u6536_\u5EFA\u7B51\u8D44\u8D28\u79DF\u7528\u8F6C\u8BA9_-\u9C7C\u6CE1\u7F51',
      description: areaText + '\u5EFA\u7B51\u5DE5\u5730\u4E8C\u624B\u4EA4\u6613' + areaText + '\u677F\u5757,\u4E3A' + areaText + '\u5EFA\u7B51\u5DE5\u7A0B\u5DE5\u4EBA\u3001\u8001\u677F\u3001\u516C\u53F8\u63D0\u4F9B\u4E8C\u624B\u5DE5\u7A0B\u673A\u68B0\u3001\u5DE5\u7A0B\u8BBE\u5907\u3001\u5EFA\u7B51\u6750\u6599\u5E9F\u6599\u3001\u4E8C\u624B\u7535\u52A8\u5DE5\u5177\u3001\u5EFA\u7B51\u8D44\u8D28\u79DF\u7528\u8F6C\u8BA9\u7684\u4FE1\u606F\u3002\u65B9\u4FBF\u5356\u5BB6\u80FD\u5F88\u5FEB\u7684\u627E\u5230\u5408\u9002\u4E70\u5BB6,\u8BA9\u4E70\u5BB6\u80FD\u6536\u5230\u5408\u9002\u7684\u5DE5\u7A0B\u4E8C\u624B\u6750\u6599-\u9C7C\u6CE1\u7F51',
      keywords: areaText + '\u5DE5\u5730\u4E8C\u624B\u4EA4\u6613,' + areaText + '\u5DE5\u7A0B\u673A\u68B0\u4E8C\u624B\u4E70\u5356,' + areaText + '\u5DE5\u7A0B\u8BBE\u5907\u5E9F\u6599\u56DE\u6536,' + areaText + '\u5EFA\u7B51\u8D44\u8D28\u79DF\u7528\u8F6C\u8BA9-\u9C7C\u6CE1\u7F51'
    };
  }
  // 否则就根据参数去查找二手交易类别信息
  var classifyInfoIndex = fleamarketTree.findIndex(function (item) {
    return item.letter == classify;
  });
  // 如果找到了就查找二手类别 并将类别改成查找到的
  if (classifyInfoIndex !== -1) {
    classifyText = fleamarketTree[classifyInfoIndex].name;
    // 如果说是全部分类 那我们直接返回对应的seo信息
    if (classify != attribute) {
      var attributeInfo = fleamarketTree[classifyInfoIndex].attributes.find(function (item) {
        return item.letter == attribute;
      });
      if (attributeInfo) {
        attributeText = attributeInfo.name;
      }
    }
    return {
      title: areaText + '\u5DE5\u5730' + classifyText + '\u4E8C\u624B\u4EA4\u6613_' + classifyText + '\u4E8C\u624B\u4E70\u5356_' + classifyText + '-\u9C7C\u6CE1\u7F51',
      description: areaText + '\u5EFA\u7B51\u5DE5\u5730' + classifyText + '\u4E8C\u624B\u4EA4\u6613\u677F\u5757,\u4E3A' + areaText + '\u5EFA\u7B51\u5DE5\u7A0B\u5DE5\u4EBA\u3001\u8001\u677F\u3001\u516C\u53F8\u63D0\u4F9B' + attributeText + classifyText + '\u4FE1\u606F\u3001' + attributeText + classifyText + '\u4E8C\u624B\u4EA4\u6613\u3001' + attributeText + classifyText + '\u4E8C\u624B\u4E70\u5356\u7684\u4FE1\u606F\u3002\u65B9\u4FBF\u5356\u5BB6\u80FD\u5F88\u5FEB\u7684\u627E\u5230\u5408\u9002\u4E70\u5BB6,\u8BA9\u4E70\u5BB6\u80FD\u6536\u5230\u5408\u9002\u7684\u5DE5\u7A0B\u4E8C\u624B\u6750\u6599-\u9C7C\u6CE1\u7F51',
      keywords: areaText + '\u5DE5\u5730' + classifyText + '\u4E8C\u624B\u4EA4\u6613,' + classifyText + '\u4E8C\u624B\u4E70\u5356,' + classifyText + '-\u9C7C\u6CE1\u7F51'
    };
  }
  return _extends({}, DEFAULTUSEDSEOINFO);
}

/***/ })

},[["./src/pages/used/lists/index.tsx","runtime","vendors"]]]);