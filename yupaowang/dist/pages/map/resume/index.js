(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/map/resume/index"],{

/***/ "./src/pages/map/resume/index.scss":
/*!*****************************************!*\
  !*** ./src/pages/map/resume/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/map/resume/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/map/resume/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contextItem = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _index3 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index4 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index5 = _interopRequireDefault(_index4);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _recruit = __webpack_require__(/*! ../../../actions/recruit */ "./src/actions/recruit.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/map/resume/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { context }  from '../../../subpackage/pages/basics';
// import { context } from '../../recruit/publish'
//获取发布招工信息action


var PI = Math.PI; // 数学 PI 常亮
var EARTH_RADIUS = 6378137.0; // 地球半径
var contextItem = exports.contextItem = (0, _taroTt.createContext)({});

var ResumeMap = function (_Taro$Component) {
  _inherits(ResumeMap, _Taro$Component);

  function ResumeMap() {
    _classCallCheck(this, ResumeMap);

    var _this = _possibleConstructorReturn(this, (ResumeMap.__proto__ || Object.getPrototypeOf(ResumeMap)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '地址选择'
    };

    _this.$usedState = ["loopArray46", "loopArray47", "$compid__41", "smAreaText", "showHistory", "histroyList", "lists", "IMGCDNURL", "showCity", "area"];
    _this.anonymousFunc4Map = {};
    _this.anonymousFunc5Map = {};
    _this.customComponents = ["Cities"];
    return _this;
  }

  _createClass(ResumeMap, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ResumeMap.prototype.__proto__ || Object.getPrototypeOf(ResumeMap.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__41"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__41 = _genCompid2[0],
          $compid__41 = _genCompid2[1];
      // const router: Taro.RouterInfo = useRouter()
      // let { areaItem } = router.params;
      // 获取dispatch分发action


      var dispatch = (0, _redux.useDispatch)();

      var _useState = (0, _taroTt.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          area = _useState2[0],
          setArea = _useState2[1];
      // 城市数据


      var _useState3 = (0, _taroTt.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          areas = _useState4[0],
          setAreas = _useState4[1];
      // 选择详细地址信息
      // const [areaInfo, setAreaInfo] = useState<UserLastPublishRecruitArea>({
      //   title: '',
      //   adcode: '',
      //   location: '',
      //   info: '',
      // })


      var _useState5 = (0, _taroTt.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          location = _useState6[0],
          setLocation = _useState6[1];
      // 用户定位城市


      var _useState7 = (0, _taroTt.useState)({
        id: '',
        pid: '',
        city: '',
        ad_name: ''
      }),
          _useState8 = _slicedToArray(_useState7, 2),
          userLoc = _useState8[0],
          setUserLoc = _useState8[1];
      // 是否显示城市


      var _useState9 = (0, _taroTt.useState)(false),
          _useState10 = _slicedToArray(_useState9, 2),
          showCity = _useState10[0],
          setShowCity = _useState10[1];
      // 使用发布招工hook处理数据
      // const { area, setArea, setAreaInfo, setPublishArea } = useContext(context)


      var _useState11 = (0, _taroTt.useState)(''),
          _useState12 = _slicedToArray(_useState11, 2),
          publishArea = _useState12[0],
          setPublishArea = _useState12[1];
      // 详细地址的输入框


      var _useState13 = (0, _taroTt.useState)(''),
          _useState14 = _slicedToArray(_useState13, 2),
          smAreaText = _useState14[0],
          setSmAreaText = _useState14[1];
      // 关键词地区列表


      var _useState15 = (0, _taroTt.useState)([]),
          _useState16 = _slicedToArray(_useState15, 2),
          lists = _useState16[0],
          setLists = _useState16[1];
      // 关键词地区列表的历史记录


      var _useState17 = (0, _taroTt.useState)([]),
          _useState18 = _slicedToArray(_useState17, 2),
          histroyList = _useState18[0],
          setHistoryList = _useState18[1];
      // 显示关键词列表还是历史记录


      var _useState19 = (0, _taroTt.useState)(false),
          _useState20 = _slicedToArray(_useState19, 2),
          showHistory = _useState20[0],
          setShowHistory = _useState20[1];
      // 设置adcode


      var _useState21 = (0, _taroTt.useState)(''),
          _useState22 = _slicedToArray(_useState21, 2),
          adcode = _useState22[0],
          setAdcode = _useState22[1];
      // 获取城市数据


      (0, _taroTt.useEffect)(function () {
        var areas = _taroTt2.default.getStorageSync(_store.Areas);
        if (areas) {
          setAreas(areas);
        } else (0, _index.getAllAreas)().then(function (res) {
          // 存入缓存
          _taroTt2.default.setStorageSync(_store.Areas, res);
          setAreas(res);
        });
      }, []);
      // 初始化用户定位信息
      var initUserLocationCity = function initUserLocationCity() {
        var userLoc = _taroTt2.default.getStorageSync(_store.UserLocationCity);
        if (userLoc) {
          var data = (0, _area.getCityInfo)(userLoc, 1);
          var userLocData = {
            id: data.id,
            pid: data.pid,
            ad_name: data.ad_name,
            city: data.name
          };
          setArea(data.name);
          setUserLoc(userLocData);
        }
      };
      // 初始化所需数据
      (0, _taroTt.useEffect)(function () {
        if (!area) {
          initUserLocationCity();
        }
        initUserPublishAreaHistory();
      }, []);
      // 用户切换城市
      var userChangeCity = function userChangeCity(city) {
        setArea(city);
      };
      // 用户点击取消 返回上一页
      var userCloseMap = function userCloseMap() {
        _taroTt2.default.navigateBack();
      };
      var getRad = function getRad(d) {
        return parseFloat(d) * PI / 180.0;
      };
      // 根据经纬度计算距离
      var getGreatCircleDistance = function getGreatCircleDistance(l, loc) {
        if (!l) {
          return '';
        }
        var arr1 = l.split(",");
        var arr2 = loc.split(",");
        var radLat1 = getRad(arr1[0]);
        var radLat2 = getRad(arr2[0]);
        var a = radLat1 - radLat2;
        var b = getRad(arr1[1]) - getRad(arr2[1]);
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s = s * EARTH_RADIUS;
        s = parseInt((Math.round(s * 10000) / 10000.0).toFixed(2));
        var distance = s < 1000 ? s + "米" : (s / 1000).toFixed(1) + "千米";
        return distance;
      };
      // 获取关键词地区列表
      (0, _taroTt.useEffect)(function () {
        (0, _index3.getAmapPoiList)(area + smAreaText).then(function (data) {
          var loc = _taroTt2.default.getStorageSync(_store.UserLocation);
          var lists = data.filter(function (item) {
            return item.name && item.adcode && typeof item.location === 'string';
          });
          lists.forEach(function (item) {
            item.distance = getGreatCircleDistance(loc, item.location);
          });
          setLists(lists);
        });
      }, [smAreaText, area]);
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
        var userPublishAreaHistory = _taroTt2.default.getStorageSync(_store.UserPublishAreaHistory);
        if (userPublishAreaHistory) {
          var isset = userPublishAreaHistory.findIndex(function (data) {
            return data.location === item.location && data.name === item.name && data.adcode == item.adcode;
          });
          userPublishAreaHistory.unshift(item);
          if (isset !== -1) {
            userPublishAreaHistory.splice(isset, 1);
          }
          userPublishAreaHistory.splice(_index2.UserPublishAreaHistoryMaxNum);
          setHistoryList(userPublishAreaHistory);
          _taroTt2.default.setStorageSync(_store.UserPublishAreaHistory, userPublishAreaHistory);
        } else {
          setHistoryList([item]);
          _taroTt2.default.setStorageSync(_store.UserPublishAreaHistory, [item]);
        }
      };
      // 初始化用户点击小地区的历史记录
      var initUserPublishAreaHistory = function initUserPublishAreaHistory() {
        var userPublishAreaHistory = _taroTt2.default.getStorageSync(_store.UserPublishAreaHistory) || [];
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
        (0, _index.checkAdcodeAction)({ adcode: item.adcode }).then(function (res) {
          // debugger
          if (res.errcode == "ok") {
            // setLocation(item.location)
            // setAdcode(item.adcode)
            // if (setAreaInfo) {
            //   setUserPublishAreaHistoryItem(item)
            //   setAreaInfo({
            //     title: item.name,
            //     location: item.location,
            //     adcode: item.adcode,
            //     info: item.district,
            //   })
            //   setPublishArea && setPublishArea(item.name)
            dispatch((0, _recruit.setAreaInfo)({
              title: item.name,
              location: item.location,
              adcode: item.adcode,
              info: item.district,
              provice: res.province,
              city: res.city
            }));
            // dispatch(setArea(item.cityName))
            // }
            _taroTt2.default.navigateBack();
          } else (0, _index4.ShowActionModal)({ msg: res.errmsg });
        }).catch(function (error) {
          (0, _index5.default)("网络错误，请求失败！");
        });
      };
      var value = {
        publishArea: publishArea,
        location: location,
        adcode: adcode
      };
      contextItem.Provider(value);
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
      var loopArray46 = showHistory ? histroyList.map(function (item, index) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var $loopState__temp2 = showHistory ? index + index : null;
        var _$indexKey = "ejzzz" + index;
        _this2.anonymousFunc4Map[_$indexKey] = function () {
          return userClickAreaItem(item.$original);
        };
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      var loopArray47 = lists.map(function (item, index) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var $loopState__temp4 = index + index;
        var _$indexKey2 = "fazzz" + index;
        _this2.anonymousFunc5Map[_$indexKey2] = function () {
          return userClickAreaItem(item.$original);
        };
        return {
          $loopState__temp4: $loopState__temp4,
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      });
      showCity && _taroTt.propsManager.set({
        "data": areas,
        "area": area,
        "userLoc": userLoc,
        "userChangeCity": userChangeCity,
        "userTapCityBtn": userTapCityBtn
      }, $compid__41, $prevCompid__41);
      Object.assign(this.__state, {
        loopArray46: loopArray46,
        loopArray47: loopArray47,
        $compid__41: $compid__41,
        smAreaText: smAreaText,
        showHistory: showHistory,
        histroyList: histroyList,
        lists: lists,
        IMGCDNURL: _index2.IMGCDNURL,
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

  return ResumeMap;
}(_taroTt2.default.Component);

ResumeMap.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5"];
ResumeMap.$$componentPath = "pages/map/resume/index";
ResumeMap.config = { navigationBarTitleText: '地址选择' };
exports.default = ResumeMap;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(ResumeMap, true));

/***/ })

},[["./src/pages/map/resume/index.tsx","runtime","vendors"]]]);