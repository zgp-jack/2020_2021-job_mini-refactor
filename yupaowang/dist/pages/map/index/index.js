(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/map/index/index"],{

/***/ "./src/pages/map/index/index.scss":
/*!****************************************!*\
  !*** ./src/pages/map/index/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/map/index/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/map/index/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _index2 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index3 = __webpack_require__(/*! ../../recruit/publish/index */ "./src/pages/recruit/publish/index.tsx");

var _index4 = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/map/index/index.scss");

var _index5 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapComponent = function (_Taro$Component) {
  _inherits(MapComponent, _Taro$Component);

  function MapComponent() {
    _classCallCheck(this, MapComponent);

    var _this = _possibleConstructorReturn(this, (MapComponent.__proto__ || Object.getPrototypeOf(MapComponent)).apply(this, arguments));

    _this.$usedState = ["loopArray15", "loopArray16", "$compid__23", "smAreaText", "showHistory", "histroyList", "lists", "IMGCDNURL", "showCity", "area", "data"];
    _this.anonymousFunc4Map = {};
    _this.anonymousFunc5Map = {};
    _this.customComponents = ["Cities"];
    return _this;
  }

  _createClass(MapComponent, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(MapComponent.prototype.__proto__ || Object.getPrototypeOf(MapComponent.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__23"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__23 = _genCompid2[0],
          $compid__23 = _genCompid2[1];

      var data = this.__props.data;
      // 用户定位城市

      var _useState = (0, _taroWeapp.useState)({
        id: '',
        pid: '',
        city: '',
        ad_name: ''
      }),
          _useState2 = _slicedToArray(_useState, 2),
          userLoc = _useState2[0],
          setUserLoc = _useState2[1];
      // 是否显示城市


      var _useState3 = (0, _taroWeapp.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          showCity = _useState4[0],
          setShowCity = _useState4[1];
      // 使用发布招工hook处理数据


      var _useContext = (0, _taroWeapp.useContext)(_index3.context),
          area = _useContext.area,
          setArea = _useContext.setArea,
          setAreaInfo = _useContext.setAreaInfo,
          setPublishArea = _useContext.setPublishArea;
      // 详细地址的输入框


      var _useState5 = (0, _taroWeapp.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          smAreaText = _useState6[0],
          setSmAreaText = _useState6[1];
      // 关键词地区列表


      var _useState7 = (0, _taroWeapp.useState)([]),
          _useState8 = _slicedToArray(_useState7, 2),
          lists = _useState8[0],
          setLists = _useState8[1];
      // 关键词地区列表的历史记录


      var _useState9 = (0, _taroWeapp.useState)([]),
          _useState10 = _slicedToArray(_useState9, 2),
          histroyList = _useState10[0],
          setHistoryList = _useState10[1];
      // 显示关键词列表还是历史记录


      var _useState11 = (0, _taroWeapp.useState)(false),
          _useState12 = _slicedToArray(_useState11, 2),
          showHistory = _useState12[0],
          setShowHistory = _useState12[1];
      // 初始化用户定位信息


      var initUserLocationCity = function initUserLocationCity() {
        var userLoc = _taroWeapp2.default.getStorageSync(_store.UserLocationCity);
        if (userLoc) {
          var _data = (0, _area.getCityInfo)(userLoc, 1);
          var userLocData = {
            id: _data.id,
            pid: _data.pid,
            ad_name: _data.ad_name,
            city: _data.name
          };
          setArea(_data.name);
          setUserLoc(userLocData);
        }
      };
      // 初始化所需数据
      (0, _taroWeapp.useEffect)(function () {
        initUserLocationCity();
        initUserPublishAreaHistory();
      });
      // 用户切换城市
      var userChangeCity = function userChangeCity(city) {
        setArea(city);
      };
      // 用户点击取消 返回上一页
      var userCloseMap = function userCloseMap() {
        _taroWeapp2.default.navigateBack();
      };
      // 获取关键词地区列表
      (0, _taroWeapp.useEffect)(function () {
        (0, _index2.getAmapPoiList)(area + smAreaText).then(function (data) {
          var lists = data.filter(function (item) {
            return item.name && item.adcode && typeof item.location === 'string';
          });
          setLists(lists);
        });
      }, [smAreaText]);
      // 用户点击城市选择
      var userTapCityBtn = function userTapCityBtn(b) {
        setShowCity(b);
      };
      // 用户输入小地区名字
      var userEnterPosition = function userEnterPosition(e) {
        var value = e.detail.value;
        setSmAreaText(value);
        setShowHistory(value ? false : true);
      };
      // 小地址存入缓存，生成历史记录
      var setUserPublishAreaHistoryItem = function setUserPublishAreaHistoryItem(item) {
        var userPublishAreaHistory = _taroWeapp2.default.getStorageSync(_store.UserPublishAreaHistory);
        if (userPublishAreaHistory) {
          var isset = userPublishAreaHistory.findIndex(function (data) {
            return data.location === item.location && data.name === item.name && data.adcode == item.adcode;
          });
          userPublishAreaHistory.unshift(item);
          if (isset !== -1) {
            userPublishAreaHistory.splice(isset, 1);
          }
          userPublishAreaHistory.splice(_index.UserPublishAreaHistoryMaxNum);
          setHistoryList(userPublishAreaHistory);
        } else {
          setHistoryList([item]);
        }
      };
      // 初始化用户点击小地区的历史记录
      var initUserPublishAreaHistory = function initUserPublishAreaHistory() {
        var userPublishAreaHistory = _taroWeapp2.default.getStorageSync(_store.UserPublishAreaHistory) || [];
        setHistoryList(userPublishAreaHistory);
      };
      // 用户点击输入框
      var userClickInputAction = function userClickInputAction(e) {
        var value = e.detail.value;
        if (value) {
          return;
        }
        setShowHistory(true);
      };
      // 用户选择小地区 检测adcode
      var userClickAreaItem = function userClickAreaItem(item) {
        (0, _index4.checkAdcodeValid)(item.adcode).then(function (res) {
          if (res.errcode == "ok") {
            setUserPublishAreaHistoryItem(item);
            setAreaInfo({
              title: item.name,
              location: item.location,
              adcode: item.adcode,
              info: item.district
            });
            setPublishArea(item.name);
            _taroWeapp2.default.navigateBack();
          } else (0, _index5.ShowActionModel)({ msg: res.errmsg });
        }).catch(function () {
          (0, _index6.default)("网络错误，请求失败！");
        });
      };
      this.anonymousFunc0 = function () {
        return userTapCityBtn(true);
      };
      this.anonymousFunc1 = function (e) {
        return userClickInputAction(e);
      };
      this.anonymousFunc2 = function (e) {
        return userEnterPosition(e);
      };
      this.anonymousFunc3 = function () {
        return userCloseMap();
      };
      var loopArray15 = showHistory ? histroyList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var _$indexKey = "hzzzz" + index;
        _this2.anonymousFunc4Map[_$indexKey] = function () {
          return userClickAreaItem(item.$original);
        };
        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      var loopArray16 = lists.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var _$indexKey2 = "izzzz" + index;
        _this2.anonymousFunc5Map[_$indexKey2] = function () {
          return userClickAreaItem(item.$original);
        };
        return {
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      });
      showCity && _taroWeapp.propsManager.set({
        "data": data,
        "area": area,
        "userLoc": userLoc,
        "userChangeCity": userChangeCity,
        "userTapCityBtn": userTapCityBtn
      }, $compid__23, $prevCompid__23);
      Object.assign(this.__state, {
        loopArray15: loopArray15,
        loopArray16: loopArray16,
        $compid__23: $compid__23,
        smAreaText: smAreaText,
        showHistory: showHistory,
        histroyList: histroyList,
        lists: lists,
        IMGCDNURL: _index.IMGCDNURL,
        showCity: showCity,
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
    value: function anonymousFunc4(_$indexKey) {
      var _anonymousFunc4Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc4Map[_$indexKey] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(_$indexKey2) {
      var _anonymousFunc5Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc5Map[_$indexKey2] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey2].apply(_anonymousFunc5Map, e);
    }
  }]);

  return MapComponent;
}(_taroWeapp2.default.Component);

MapComponent.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5"];
MapComponent.$$componentPath = "pages/map/index/index";
exports.default = MapComponent;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(MapComponent));

/***/ })

},[["./src/pages/map/index/index.tsx","runtime","vendors","common"]]]);