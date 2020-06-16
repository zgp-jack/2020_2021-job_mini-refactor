(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/map/resume/index.tsx?taro&type=script&parse=PAGE&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/map/resume/index.tsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************************************************************************************************/
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

var _class, _temp2;

// import { context }  from '../../../subpackage/pages/basics';
// import { context } from '../../recruit/publish'


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _index3 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index4 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index5 = _interopRequireDefault(_index4);

__webpack_require__(/*! ./index.scss */ "./src/pages/map/resume/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PI = Math.PI; // 数学 PI 常亮
var EARTH_RADIUS = 6378137.0; // 地球半径
var contextItem = exports.contextItem = (0, _taroWeapp.createContext)({});

var ResumeMap = (_temp2 = _class = function (_Taro$Component) {
  _inherits(ResumeMap, _Taro$Component);

  function ResumeMap() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResumeMap);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResumeMap.__proto__ || Object.getPrototypeOf(ResumeMap)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '地址选择'
    }, _this.$usedState = ["loopArray254", "loopArray255", "$compid__209", "smAreaText", "showHistory", "histroyList", "lists", "IMGCDNURL", "showCity", "area"], _this.anonymousFunc4Map = {}, _this.anonymousFunc5Map = {}, _this.customComponents = ["Cities"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResumeMap, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ResumeMap.prototype.__proto__ || Object.getPrototypeOf(ResumeMap.prototype), "_constructor", this).call(this, props);

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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__209"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__209 = _genCompid2[0],
          $compid__209 = _genCompid2[1];

      // const router: Taro.RouterInfo = useRouter()
      // let { areaItem } = router.params;
      // console.log(context,'context');


      var _useState = (0, _taroWeapp.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          area = _useState2[0],
          setArea = _useState2[1];
      // 城市数据


      var _useState3 = (0, _taroWeapp.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          areas = _useState4[0],
          setAreas = _useState4[1];
      // 选择详细地址信息


      var _useState5 = (0, _taroWeapp.useState)({
        title: '',
        adcode: '',
        location: '',
        info: ''
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          areaInfo = _useState6[0],
          setAreaInfo = _useState6[1];

      var _useState7 = (0, _taroWeapp.useState)(''),
          _useState8 = _slicedToArray(_useState7, 2),
          location = _useState8[0],
          setLocation = _useState8[1];
      // 用户定位城市


      var _useState9 = (0, _taroWeapp.useState)({
        id: '',
        pid: '',
        city: '',
        ad_name: ''
      }),
          _useState10 = _slicedToArray(_useState9, 2),
          userLoc = _useState10[0],
          setUserLoc = _useState10[1];
      // 是否显示城市


      var _useState11 = (0, _taroWeapp.useState)(false),
          _useState12 = _slicedToArray(_useState11, 2),
          showCity = _useState12[0],
          setShowCity = _useState12[1];
      // 使用发布招工hook处理数据
      // const { area, setArea, setAreaInfo, setPublishArea } = useContext(context)


      var _useState13 = (0, _taroWeapp.useState)(''),
          _useState14 = _slicedToArray(_useState13, 2),
          publishArea = _useState14[0],
          setPublishArea = _useState14[1];
      // 详细地址的输入框


      var _useState15 = (0, _taroWeapp.useState)(''),
          _useState16 = _slicedToArray(_useState15, 2),
          smAreaText = _useState16[0],
          setSmAreaText = _useState16[1];
      // 关键词地区列表


      var _useState17 = (0, _taroWeapp.useState)([]),
          _useState18 = _slicedToArray(_useState17, 2),
          lists = _useState18[0],
          setLists = _useState18[1];
      // 关键词地区列表的历史记录


      var _useState19 = (0, _taroWeapp.useState)([]),
          _useState20 = _slicedToArray(_useState19, 2),
          histroyList = _useState20[0],
          setHistoryList = _useState20[1];
      // 显示关键词列表还是历史记录


      var _useState21 = (0, _taroWeapp.useState)(false),
          _useState22 = _slicedToArray(_useState21, 2),
          showHistory = _useState22[0],
          setShowHistory = _useState22[1];
      // 设置adcode


      var _useState23 = (0, _taroWeapp.useState)(''),
          _useState24 = _slicedToArray(_useState23, 2),
          adcode = _useState24[0],
          setAdcode = _useState24[1];
      // 获取城市数据


      (0, _taroWeapp.useEffect)(function () {
        var areas = _taroWeapp2.default.getStorageSync(_store.Areas);
        if (areas) {
          setAreas(areas);
        } else (0, _index.getAllAreas)().then(function (res) {
          // 存入缓存
          _taroWeapp2.default.setStorageSync(_store.Areas, res);
          setAreas(res);
        });
      }, []);
      // 初始化用户定位信息
      var initUserLocationCity = function initUserLocationCity() {
        var userLoc = _taroWeapp2.default.getStorageSync(_store.UserLocationCity);
        if (userLoc) {
          var data = (0, _area.getCityInfo)(userLoc, 1);
          var userLocData = {
            id: data.id,
            pid: data.pid,
            ad_name: data.ad_name,
            city: data.name
          };
          console.log(data, 'data');
          setArea(data.name);
          setUserLoc(userLocData);
        }
      };
      // 初始化所需数据
      (0, _taroWeapp.useEffect)(function () {
        if (!area) {
          initUserLocationCity();
        }initUserPublishAreaHistory();
      }, []);
      // 用户切换城市
      var userChangeCity = function userChangeCity(city) {
        setArea(city);
      };
      // 用户点击取消 返回上一页
      var userCloseMap = function userCloseMap() {
        _taroWeapp2.default.navigateBack();
      };
      var getRad = function getRad(d) {
        return parseFloat(d) * PI / 180.0;
      };
      // 根据经纬度计算距离
      var getGreatCircleDistance = function getGreatCircleDistance(l, loc) {
        if (!l) {
          return '';
        }var arr1 = l.split(",");
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
      (0, _taroWeapp.useEffect)(function () {
        (0, _index3.getAmapPoiList)(area + smAreaText).then(function (data) {
          var loc = _taroWeapp2.default.getStorageSync(_store.UserLocation);
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
        var userPublishAreaHistory = _taroWeapp2.default.getStorageSync(_store.UserPublishAreaHistory);
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
          _taroWeapp2.default.setStorageSync(_store.UserPublishAreaHistory, userPublishAreaHistory);
        } else {
          setHistoryList([item]);
          _taroWeapp2.default.setStorageSync(_store.UserPublishAreaHistory, [item]);
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
        }setShowHistory(true);
      };
      // 用户选择小地区 检测adcode
      var userClickAreaItem = function userClickAreaItem(item) {
        (0, _index.checkAdcodeValid)(item.adcode).then(function (res) {
          if (res.errcode == "ok") {
            // console.log(item,'xxxx')
            setLocation(item.location);
            setAdcode(item.adcode);
            if (setAreaInfo) {
              setUserPublishAreaHistoryItem(item);
              setAreaInfo({
                title: item.name,
                location: item.location,
                adcode: item.adcode,
                info: item.district
              });
              setPublishArea && setPublishArea(item.name);
            }
            _taroWeapp2.default.navigateBack();
          } else (0, _index4.ShowActionModal)({ msg: res.errmsg });
        }).catch(function () {
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

      var loopArray254 = showHistory ? histroyList.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = showHistory ? index + index : null;

        var _$indexKey = "ceizz" + index;

        _this2.anonymousFunc4Map[_$indexKey] = function () {
          return userClickAreaItem(item.$original);
        };

        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      var loopArray255 = lists.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp4 = index + index;

        var _$indexKey2 = "cejzz" + index;

        _this2.anonymousFunc5Map[_$indexKey2] = function () {
          return userClickAreaItem(item.$original);
        };

        return {
          $loopState__temp4: $loopState__temp4,
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      });
      showCity && _taroWeapp.propsManager.set({
        "data": areas,
        "area": area,
        "userLoc": userLoc,
        "userChangeCity": userChangeCity,
        "userTapCityBtn": userTapCityBtn
      }, $compid__209, $prevCompid__209);
      Object.assign(this.__state, {
        loopArray254: loopArray254,
        loopArray255: loopArray255,
        $compid__209: $compid__209,
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

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc4Map[_$indexKey] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(_$indexKey2) {
      var _anonymousFunc5Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc5Map[_$indexKey2] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey2].apply(_anonymousFunc5Map, e);
    }
  }]);

  return ResumeMap;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5"], _class.$$componentPath = "pages/map/resume/index", _temp2);


ResumeMap.config = { navigationBarTitleText: '地址选择' };
exports.default = ResumeMap;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(ResumeMap, true));

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/realname/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/realname/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.context = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;
// import { Injected } from '../recruit/publish'


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../../hooks/realname/index */ "./src/hooks/realname/index.ts");

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(/*! ../../hooks/code/index */ "./src/hooks/code/index.ts");

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

var _index7 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index8 = _interopRequireDefault(_index7);

__webpack_require__(/*! ./index.scss */ "./src/pages/realname/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var context = exports.context = (0, _taroWeapp.createContext)({});

var RealName = (_temp2 = _class = function (_Taro$Component) {
  _inherits(RealName, _Taro$Component);

  function RealName() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RealName);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RealName.__proto__ || Object.getPrototypeOf(RealName)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '鱼泡网-实名认证'
    }, _this.$usedState = ["model", "ALIYUNCDN", "IMGCDNURL", "sexCurrent", "sexArray", "sexName", "initModel", "startDate", "endDate", "nationCurrent", "checkDegree", "text"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RealName, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RealName.prototype.__proto__ || Object.getPrototypeOf(RealName.prototype), "_constructor", this).call(this, props);

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

      // 使用 实名hook 与 获取短信验证码hook

      var _useRealname = (0, _index3.default)(),
          checkDegree = _useRealname.checkDegree,
          userUploadIdcard = _useRealname.userUploadIdcard,
          sexArray = _useRealname.sexArray,
          sexCurrent = _useRealname.sexCurrent,
          setSexCurrent = _useRealname.setSexCurrent,
          setSexName = _useRealname.setSexName,
          sexName = _useRealname.sexName,
          nationCurrent = _useRealname.nationCurrent,
          initModel = _useRealname.initModel,
          setNationCurrent = _useRealname.setNationCurrent,
          setInitModel = _useRealname.setInitModel,
          model = _useRealname.model,
          setModel = _useRealname.setModel,
          userPostAuthInfo = _useRealname.userPostAuthInfo,
          RealnameArea = _useRealname.RealnameArea,
          _setRealnameArea = _useRealname.setRealnameArea;

      var _useCode = (0, _index5.default)(),
          text = _useCode.text,
          userGetCode = _useCode.userGetCode;

      var value = {
        RealnameArea: RealnameArea,
        setRealnameArea: function setRealnameArea(city) {
          return _setRealnameArea(city);
        }
      };
      // 初始化生日选择时间
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var startDate = year - 60 + '-' + month + '-' + day;
      var endDate = year - 18 + '-' + month + '-' + day;
      // 用户滑动性别picker
      var userChangeSex = function userChangeSex(e) {
        var current = parseInt(e.detail.value);
        var id = sexArray[current].id;
        setSexCurrent(current);
        setSexName(sexArray[current].name);
        if (model) {
          setModel(_extends({}, model, { gender: id }));
        }
      };
      (0, _taroWeapp.useDidShow)(function () {
        if (RealnameArea) {
          var modelItem = JSON.parse(JSON.stringify(model));
          modelItem.address = RealnameArea;
          setModel(modelItem);
        }
      });
      // 用户填写信息
      var userEnterFormInfo = function userEnterFormInfo(title, e) {
        var modelInfo = JSON.parse(JSON.stringify(model));
        modelInfo[title] = e.detail.value;
        setModel(modelInfo);
      };
      // 用户上传身份证照片
      var userUploadIdcardImg = function userUploadIdcardImg(type) {
        userUploadIdcard(type);
      };
      // 用户选择生日
      var userChangeBirthday = function userChangeBirthday(e) {
        var value = e.detail.value;

        if (!initModel) {
          return;
        }var memberExt = JSON.parse(JSON.stringify(initModel.memberExt));
        memberExt.birthday = value;
        setInitModel(_extends({}, initModel, { memberExt: memberExt }));
        if (model) {
          setModel(_extends({}, model, { birthday: value }));
        }
      };
      // 用户选择民族
      var userChangeNation = function userChangeNation(e) {
        var current = parseInt(e.detail.value);
        setNationCurrent(current);
        if (!initModel) {
          return;
        }var name = initModel.nation[current].mz_name;
        var id = initModel.nation[current].mz_id;
        if (model) {
          setModel(_extends({}, model, { nation_id: id, nationality: name }));
        }
      };
      // 用户点击发送短信
      var userSendCode = function userSendCode() {
        var tel = initModel ? initModel.member ? initModel.member.tel : '' : '';
        var flag = (0, _index6.isPhone)(tel);
        if (flag) {
          userGetCode(tel);
        } else (0, _index8.default)('请先输入正确的手机号');
      };
      // 用户选择地区
      var userChooseArea = function userChooseArea() {
        if (!RealnameArea) {
          return;
        }_taroWeapp2.default.navigateTo({
          url: "/pages/map/realname/index"
        });
      };
      context.Provider(value);

      this.anonymousFunc0 = function () {
        return userUploadIdcardImg(1);
      };

      this.anonymousFunc1 = function () {
        return userUploadIdcardImg(2);
      };

      this.anonymousFunc2 = function (e) {
        return userEnterFormInfo('username', e);
      };

      this.anonymousFunc3 = function (e) {
        return userChangeSex(e);
      };

      this.anonymousFunc4 = function (e) {
        return userChangeBirthday(e);
      };

      this.anonymousFunc5 = function (e) {
        return userChangeNation(e);
      };

      this.anonymousFunc6 = function (e) {
        return userEnterFormInfo('idCard', e);
      };

      this.anonymousFunc7 = function () {
        return userChooseArea();
      };

      this.anonymousFunc8 = function (e) {
        return userEnterFormInfo('tel', e);
      };

      this.anonymousFunc9 = function (e) {
        return userEnterFormInfo('code', e);
      };

      this.anonymousFunc10 = function () {
        return userSendCode();
      };

      this.anonymousFunc11 = function () {
        return userPostAuthInfo();
      };

      Object.assign(this.__state, {
        model: model,
        ALIYUNCDN: _index.ALIYUNCDN,
        IMGCDNURL: _index.IMGCDNURL,
        sexCurrent: sexCurrent,
        sexArray: sexArray,
        sexName: sexName,
        initModel: initModel,
        startDate: startDate,
        endDate: endDate,
        nationCurrent: nationCurrent,
        checkDegree: checkDegree,
        text: text
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
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: "anonymousFunc9",
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: "anonymousFunc10",
    value: function anonymousFunc10(e) {
      ;
    }
  }, {
    key: "anonymousFunc11",
    value: function anonymousFunc11(e) {
      ;
    }
  }]);

  return RealName;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11"], _class.$$componentPath = "pages/realname/index", _temp2);


RealName.config = { navigationBarTitleText: '鱼泡网-实名认证' };
exports.default = RealName;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(RealName, true));

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/recruit/publish/index.tsx?taro&type=script&parse=PAGE&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/recruit/publish/index.tsx?taro&type=script&parse=PAGE& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.context = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../hooks/code/index */ "./src/hooks/code/index.ts");

var _index2 = _interopRequireDefault(_index);

var _recruit = __webpack_require__(/*! ../../../hooks/publish/recruit */ "./src/hooks/publish/recruit.ts");

var _recruit2 = _interopRequireDefault(_recruit);

var _index3 = __webpack_require__(/*! ../../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index6 = _interopRequireDefault(_index5);

__webpack_require__(/*! ./index.scss */ "./src/pages/recruit/publish/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var context = exports.context = (0, _taroWeapp.createContext)({});

var PublishRecruit = (_temp2 = _class = function (_Taro$Component) {
  _inherits(PublishRecruit, _Taro$Component);

  function PublishRecruit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PublishRecruit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PublishRecruit.__proto__ || Object.getPrototypeOf(PublishRecruit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '发布招工',
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: "dark"
    }, _this.$usedState = ["model", "$compid__159", "$compid__160", "$compid__161", "showProfession", "phone", "showUpload", "text"], _this.customComponents = ["Auth", "Profession", "WordsTotal", "ImageView"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PublishRecruit, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(PublishRecruit.prototype.__proto__ || Object.getPrototypeOf(PublishRecruit.prototype), "_constructor", this).call(this, props);

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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__159"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__159 = _genCompid2[0],
          $compid__159 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__160"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__160 = _genCompid4[0],
          $compid__160 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__161"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__161 = _genCompid6[0],
          $compid__161 = _genCompid6[1];

      // 获取路由参数


      var router = (0, _taroWeapp.useRouter)();
      var id = router.params.id || '';
      var type = 'job';
      var InitParams = { type: type, infoId: id };
      // 初始化当前信息

      var _usePublishViewInfo = (0, _recruit2.default)(InitParams),
          model = _usePublishViewInfo.model,
          setModel = _usePublishViewInfo.setModel,
          showUpload = _usePublishViewInfo.showUpload,
          setShowUpload = _usePublishViewInfo.setShowUpload,
          showProfession = _usePublishViewInfo.showProfession,
          setShowProssion = _usePublishViewInfo.setShowProssion,
          area = _usePublishViewInfo.area,
          _setArea = _usePublishViewInfo.setArea,
          _setAreaInfo = _usePublishViewInfo.setAreaInfo,
          userPublishRecruitAction = _usePublishViewInfo.userPublishRecruitAction,
          num = _usePublishViewInfo.num,
          setNum = _usePublishViewInfo.setNum,
          phone = _usePublishViewInfo.phone;
      // 需要传递的值


      var value = {
        area: area,
        setArea: function setArea(city) {
          return _setArea(city);
        },
        setAreaInfo: function setAreaInfo(item) {
          return _setAreaInfo(item);
        },
        setPublishArea: function setPublishArea(val) {
          if (!model) {
            return;
          }setModel(_extends({}, model, { address: val }));
        }
      };
      // 使用自定义验证码hook

      var _userCode = (0, _index2.default)(),
          text = _userCode.text,
          userGetCode = _userCode.userGetCode;
      // 切换图片上传显示隐藏


      var changeShowUpload = function changeShowUpload() {
        setShowUpload(!showUpload);
      };
      var showProfessionAction = function showProfessionAction() {
        setShowProssion(true);
      };
      var closeProfession = function closeProfession() {
        setShowProssion(false);
      };
      // 用户填写表单
      var userEnterFrom = function userEnterFrom(e, key) {
        var value = e.detail.value;
        var state = JSON.parse(JSON.stringify(model));
        state[key] = value;
        setModel(state);
        // 如果是detail, 那么需要统计字数
        if (key === 'detail') {
          setNum(value.length);
        }
      };
      // 选择地址
      var userChooseArea = function userChooseArea() {
        if (!model) {
          return;
        }var url = '/pages/map/recruit/index';
        _taroWeapp2.default.navigateTo({
          url: url
        });
      };
      // 点击工种
      var userClickProfession = function userClickProfession(i, k, id) {
        if (!model) {
          return;
        }var works = JSON.parse(JSON.stringify(model.classifyTree));
        var check = works[i].children[k].is_check;
        if (!check) {
          var max = model.maxClassifyCount;
          var _num = model.classifies.length;
          if (_num >= max) {
            (0, _index6.default)('工种最多可以选择' + max + '个');
            return;
          }
        }
        works[i].children[k].is_check = !check;
        var classifyArr = JSON.parse(JSON.stringify(model.classifies));
        var newArr = check ? classifyArr.filter(function (item) {
          return item !== id;
        }) : [].concat(_toConsumableArray(classifyArr), [id]);
        setModel(_extends({}, model, { classifyTree: works, classifies: newArr }));
      };
      // 用户上传图片
      var userUploadImg = function userUploadImg() {
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

        (0, _index4.default)().then(function (res) {
          var imageItem = {
            url: res.url,
            httpurl: res.httpurl
          };
          if (model) {
            if (i === -1) {
              setModel(_extends({}, model, { view_images: [].concat(_toConsumableArray(model.view_images), [imageItem]) }));
            } else {
              model.view_images[i] = imageItem;
              setModel(_extends({}, model));
            }
          }
        });
      };
      // 用户删除图片
      var userDelImg = function userDelImg(i) {
        if (!model) {
          return;
        }var bakModel = JSON.parse(JSON.stringify(model));
        bakModel.view_images.splice(i, 1);
        setModel(bakModel);
      };
      context.Provider(value);

      this.anonymousFunc0 = function (i, k, id) {
        return userClickProfession(i, k, id);
      };

      this.anonymousFunc1 = function (e) {
        return userEnterFrom(e, 'title');
      };

      this.anonymousFunc2 = function () {
        return showProfessionAction();
      };

      this.anonymousFunc3 = function () {
        return userChooseArea();
      };

      this.anonymousFunc4 = function (e) {
        return userEnterFrom(e, 'user_name');
      };

      this.anonymousFunc5 = function (e) {
        return userEnterFrom(e, 'user_mobile');
      };

      this.anonymousFunc6 = function (e) {
        return userEnterFrom(e, 'code');
      };

      this.anonymousFunc7 = function () {
        return userGetCode(model.user_mobile);
      };

      this.anonymousFunc8 = function (e) {
        return userEnterFrom(e, 'detail');
      };

      this.anonymousFunc9 = function () {
        return changeShowUpload();
      };

      this.anonymousFunc10 = function () {
        return userPublishRecruitAction();
      };

      showProfession && _taroWeapp.propsManager.set({
        "closeProfession": closeProfession,
        "data": model && model.classifyTree,
        "onClickItem": this.anonymousFunc0,
        "num": 3
      }, $compid__159, $prevCompid__159);
      _taroWeapp.propsManager.set({
        "num": num
      }, $compid__160, $prevCompid__160);
      showUpload && model && _taroWeapp.propsManager.set({
        "images": model.view_images,
        "max": model.maxImageCount,
        "userUploadImg": userUploadImg,
        "userDelImg": userDelImg
      }, $compid__161, $prevCompid__161);
      Object.assign(this.__state, {
        model: model,
        $compid__159: $compid__159,
        $compid__160: $compid__160,
        $compid__161: $compid__161,
        showProfession: showProfession,
        phone: phone,
        showUpload: showUpload,
        text: text
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
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: "anonymousFunc9",
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: "anonymousFunc10",
    value: function anonymousFunc10(e) {
      ;
    }
  }]);

  return PublishRecruit;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10"], _class.$$componentPath = "pages/recruit/publish/index", _temp2);


PublishRecruit.config = { navigationBarTitleText: '发布招工', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = PublishRecruit;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(PublishRecruit, true));

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/topping/index.tsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/topping/index.tsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************************************************************************************************/
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

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/topping/index.scss");

var _index3 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contextItem = exports.contextItem = (0, _taroWeapp.createContext)({});

var Topping = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Topping, _Taro$Component);

  function Topping() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Topping);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Topping.__proto__ || Object.getPrototypeOf(Topping)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '招工置顶'
    }, _this.$usedState = ["params", "data", "loopArray149", "loopArray150", "loopArray151", "loopArray152", "loopArray153", "province", "IMGCDNURL", "rec", "basics", "type", "list", "displayTime", "num", "endTime", "editData", "newTime", "day", "SERVERPHONE"], _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.anonymousFunc2Map = {}, _this.anonymousFunc3Map = {}, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Topping, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Topping.prototype.__proto__ || Object.getPrototypeOf(Topping.prototype), "_constructor", this).call(this, props);

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

      // console.log(context,'context');
      // 获取找活名片的数据
      //console.log(context,'xxx')
      // const { resumeTop } = useContext(context)
      // console.log(resumeTop)
      // console.log(resumeTop);
      var router = (0, _taroWeapp.useRouter)();
      var _router$params = router.params,
          id = _router$params.id,
          type = _router$params.type,
          rec = _router$params.rec,
          areaData = _router$params.areaData,
          endTimes = _router$params.endTimes,
          endTimeStr = _router$params.endTimeStr;
      // 获取userInfo

      var userInfo = _taroWeapp2.default.getStorageSync(_store.UserInfo);

      var _useState = (0, _taroWeapp.useState)({
        top_rules: []
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];
      // 积分


      var _useState3 = (0, _taroWeapp.useState)(0),
          _useState4 = _slicedToArray(_useState3, 2),
          num = _useState4[0],
          setNum = _useState4[1];
      // 天


      var _useState5 = (0, _taroWeapp.useState)(0),
          _useState6 = _slicedToArray(_useState5, 2),
          paramsDay = _useState6[0],
          setParamsDay = _useState6[1];
      //置顶天数


      var _useState7 = (0, _taroWeapp.useState)('请选择置顶天数'),
          _useState8 = _slicedToArray(_useState7, 2),
          day = _useState8[0],
          setDay = _useState8[1];
      // 修改置顶天数


      var _useState9 = (0, _taroWeapp.useState)('延长'),
          _useState10 = _slicedToArray(_useState9, 2),
          editData = _useState10[0],
          seteditDay = _useState10[1];
      // 下拉框总参数


      var _useState11 = (0, _taroWeapp.useState)([]),
          _useState12 = _slicedToArray(_useState11, 2),
          list = _useState12[0],
          setList = _useState12[1];
      // 最大省市


      var _useState13 = (0, _taroWeapp.useState)({
        max_city: 0,
        max_province: 0
      }),
          _useState14 = _slicedToArray(_useState13, 2),
          city = _useState14[0],
          setCity = _useState14[1];

      var _useState15 = (0, _taroWeapp.useState)({
        city: [],
        province: [],
        whole: []
      }),
          _useState16 = _slicedToArray(_useState15, 2),
          params = _useState16[0],
          setParams = _useState16[1];

      var _useState17 = (0, _taroWeapp.useState)([]),
          _useState18 = _slicedToArray(_useState17, 2),
          province = _useState18[0],
          setProvince = _useState18[1];
      // 到期时间


      var _useState19 = (0, _taroWeapp.useState)(''),
          _useState20 = _slicedToArray(_useState19, 2),
          endTime = _useState20[0],
          setEndTime = _useState20[1];
      // 到期时间时间戳


      var _useState21 = (0, _taroWeapp.useState)(0),
          _useState22 = _slicedToArray(_useState21, 2),
          end = _useState22[0],
          setEnd = _useState22[1];
      // 显示最新到期时间


      var _useState23 = (0, _taroWeapp.useState)(false),
          _useState24 = _slicedToArray(_useState23, 2),
          displayTime = _useState24[0],
          setdisplayTime = _useState24[1];
      // 最新时间


      var _useState25 = (0, _taroWeapp.useState)(''),
          _useState26 = _slicedToArray(_useState25, 2),
          newTime = _useState26[0],
          setNewTime = _useState26[1];
      // 修改时最大积分


      var _useState27 = (0, _taroWeapp.useState)(0),
          _useState28 = _slicedToArray(_useState27, 2),
          maxNum = _useState28[0],
          setMaxNum = _useState28[1];
      // 找活省份最大的长度


      var _useState29 = (0, _taroWeapp.useState)(0),
          _useState30 = _slicedToArray(_useState29, 2),
          provinceNum = _useState30[0],
          setProvinceNum = _useState30[1];
      // 找活天数


      var _useState31 = (0, _taroWeapp.useState)('1'),
          _useState32 = _slicedToArray(_useState31, 2),
          recDay = _useState32[0],
          setRecDay = _useState32[1];

      var _useState33 = (0, _taroWeapp.useState)({
        max_number: 0,
        province_integral: 0,
        max_top_days: 0,
        max_city: 0,
        max_province: 0
      }),
          _useState34 = _slicedToArray(_useState33, 2),
          basics = _useState34[0],
          setBasics = _useState34[1];
      // 修改超过最大就显示消耗积分


      (0, _taroWeapp.useEffect)(function () {
        if (type) {
          if (!rec) {
            var val = {
              job_id: id,
              time: userInfo.tokenTime
            };
            (0, _index.jobGetTopAreasAction)(val).then(function (res) {
              if (res.errcode === 'ok') {
                setParams({ city: res.data.top_city, province: res.data.top_province, whole: res.data.top_country });
                setEndTime(res.data.end_time_string);
                setEnd(res.data.end_time);
                setMaxNum(res.data.max_price);
              } else {
                _taroWeapp2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false
                });
              }
            });
          }
        }
        // 找活
        if (rec) {
          _taroWeapp2.default.setNavigationBarTitle({
            title: '找活置顶'
          });
          var _params = {
            interface_version: 'v2'
          };
          (0, _index.resumesTopConfigV2Action)(_params).then(function (res) {
            if (res.errcode === 'ok') {
              setData({ top_rules: res.data.top_rules });
              var array = [];
              for (var i = 0; i < res.data.max_top_days; i++) {
                array.push(i + 1 + "天");
              }
              if (type) {
                if (areaData) {
                  var areList = JSON.parse(areaData);
                  var _city = [];
                  var _province = [];
                  var whole = [];
                  var _recDay = Math.ceil((parseInt(endTimes) - new Date().getTime() / 1000) / 86400);
                  var maxPrice = 0;
                  areList.map(function (v) {
                    if (v.pid === '1') {
                      _city.push(v);
                    } else if (v.pid === '0') {
                      whole.push(v);
                    } else {
                      _province.push(v);
                    }
                  });
                  {
                    maxPrice = (_city.length * 20 + _province.length * 20) * _recDay;
                  }

                  setParams({ city: _city, province: _province, whole: whole });
                  setEndTime(endTimeStr);
                  setEnd(parseInt(endTimes));
                  setMaxNum(maxPrice);
                }
                // console.log(resumeTop,'resumeTop');
              }
              setList(array);
              setCity({ max_city: res.data.max_city, max_province: res.data.max_province });
              setBasics({ province_integral: res.data.province_integral, max_number: res.data.max_number, max_top_days: res.data.max_top_days,
                max_province: res.data.max_province, max_city: res.data.max_city
              });
            } else {
              _taroWeapp2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false
              });
            }
          });
        } else {
          (0, _index.jobTopConfigAction)().then(function (res) {
            if (res.errcode === 'ok') {
              setData({ top_rules: res.data.top_rules });
              setCity({ max_city: res.data.max_city, max_province: res.data.max_province });
              var array = [];
              for (var i = 0; i < res.data.max_top_days; i++) {
                array.push(i + 1 + "天");
              }
              setList(array);
            } else {
              _taroWeapp2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false
              });
            }
          });
        }
      }, []);
      var getMyDate = function getMyDate(str) {
        var oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth() + 1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),
            oSen = oDate.getSeconds(),
            oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' + addZero(oMin);
        return oTime;
      };
      var addZero = function addZero(num) {
        if (parseInt(num) < 10) {
          num = '0' + num;
        }
        return num;
      };
      var handleClick = function handleClick(e) {
        setDay(list[e.detail.value]);
        if (type) {
          // 增加时间 新增天数*新的单价
          // 修改地区 单价比原单价大，差价*天数，
          // 时间和城市都改变了 新单价大于原单价 ：新价-旧价*剩余天数+新价格*新增天数 新单价小于原单价：旧价格*新增天数
          seteditDay('修改');
          setdisplayTime(true);
          // 时间
          var all = 86400000 * (parseInt(e.detail.value) + 1) + ((end - 0) * 1000 - 0);
          // console.log(all)
          var _newTime = getMyDate(all);
          setNewTime(_newTime);
          // 获取旧价格
          var oldPrice = maxNum;
          // 获取价格
          var newPrice = undefined;
          if (rec) {
            newPrice = params.whole.length ? 500 : (params.city.length * 20 + params.province.length * 20) * 1;
          } else {
            newPrice = params.whole.length ? 500 : (params.city.length * 10 + params.province.length * 20) * 1;
          }
          // const newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
          // 时间差
          var remDay = (end - new Date().getTime() / 1000) / 86400;
          // 修改区域
          // 只改变时间
          var money = undefined;
          if (oldPrice === newPrice) {
            money = newPrice * (parseInt(e.detail.value) + 1);
          } else {
            if (newPrice - oldPrice > 0) {
              if (rec) {
                money = Math.round((newPrice - oldPrice) * remDay + (params.city.length * 20 + params.province.length * 20) * (parseInt(e.detail.value) + 1));
              } else {
                console.log((newPrice - oldPrice) * remDay);
                money = Math.round((newPrice - oldPrice) * remDay + newPrice * (parseInt(e.detail.value) + 1));
              }
            } else {
              money = oldPrice * (parseInt(e.detail.value) + 1);
            }
          }
          console.log(money, 'xdsadasda');
          setNum(money);
        } else {
          if (params) {
            var numData = 0;
            if (params.whole.length) {
              numData = 500 * (parseInt(e.detail.value) + 1);
            } else {
              if (rec) {
                numData = (params.city.length * 20 + params.province.length * 20) * (parseInt(e.detail.value) + 1);
              } else {
                numData = (params.city.length * 10 + params.province.length * 20) * (parseInt(e.detail.value) + 1);
              }
            }
            setNum(numData);
          }
        }
        setParamsDay(parseInt(e.detail.value) + 1);
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroWeapp2.default.navigateTo({
          url: url
        });
      };
      // 置顶
      var handleTopping = function handleTopping() {
        var province_ids = params.province.map(function (v) {
          return v.id;
        });
        var city_ids = params.city.map(function (v) {
          return v.id;
        });
        var country_ids = params.whole.map(function (v) {
          return v.id;
        });
        if (!province_ids.length && !city_ids.length && !country_ids.length) {
          _taroWeapp2.default.showModal({
            title: '温馨提示',
            content: '请选择您的置顶城市',
            showCancel: false
          });
          return;
        }
        var detail = {
          is_country: country_ids.toString(),
          mid: userInfo.userId,
          province_ids: province_ids.toString(),
          city_ids: city_ids.toString(),
          day: paramsDay,
          job_id: id,
          time: userInfo.tokenTime
        };
        var editDetail = {
          is_country: params.whole.length ? 1 : 0,
          mid: userInfo.userId,
          province_ids: province_ids.toString(),
          city_ids: city_ids.toString(),
          update_days: paramsDay,
          job_id: id,
          time: userInfo.tokenTime,
          update_integral: num
        };
        // console.log(321312321);
        // console.log(editDetail,'editDetail');
        // return
        if (type) {
          if (rec) {
            console.log(32312);
            (0, _index.resumesUpdateTopResumeAction)(editDetail).then(function (res) {
              if (res.errcode === 'ok') {
                _taroWeapp2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false,
                  success: function success() {
                    _taroWeapp2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
                return;
              } else if (res.errcode === 'get_integral') {
                _taroWeapp2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: true,
                  success: function success(res) {
                    if (res.confirm == true) {
                      _taroWeapp2.default.navigateTo({
                        // 前往积分页面
                        url: "/pages/getintegral/index"
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode === 'auth_forbid') {
                _taroWeapp2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  cancelText: '取消',
                  confirmText: '去实名',
                  success: function success(res) {
                    if (res.cancel) {
                      _taroWeapp2.default.navigateBack({
                        delta: 1
                      });
                    } else if (res.confirm) {
                      var backtwo = "backtwo";
                      _taroWeapp2.default.redirectTo({
                        url: "/pages/realname/index?backtwo=" + backtwo
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode == "member_forbid") {
                _taroWeapp2.default.showModal({
                  title: '温馨提示',
                  content: "mydata.errmsg",
                  cancelText: "取消",
                  confirmText: "联系客服",
                  success: function success(res) {
                    if (res.confirm) {
                      var tel = _index2.SERVERPHONE;
                      _taroWeapp2.default.makePhoneCall({
                        phoneNumber: tel
                      });
                    }
                  }
                });
                return;
              } else {
                _taroWeapp2.default.showToast({
                  title: res.errmsg,
                  icon: "none",
                  duration: 1500
                });
              }
            });
          } else {
            (0, _index.jobChangeTopAreasAction)(editDetail).then(function (res) {
              if (res.errcode === 'ok') {
                _taroWeapp2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false,
                  success: function success() {
                    _taroWeapp2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
                return;
              } else if (res.errcode === 'get_integral') {
                _taroWeapp2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: true,
                  success: function success(res) {
                    if (res.confirm == true) {
                      _taroWeapp2.default.navigateTo({
                        // 前往积分页面
                        url: "/pages/getintegral/index"
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode === 'auth_forbid') {
                _taroWeapp2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  cancelText: '取消',
                  confirmText: '去实名',
                  success: function success(res) {
                    if (res.cancel) {
                      _taroWeapp2.default.navigateBack({
                        delta: 1
                      });
                    } else if (res.confirm) {
                      var backtwo = "backtwo";
                      _taroWeapp2.default.redirectTo({
                        url: "/pages/realname/index?backtwo=" + backtwo
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode == "member_forbid") {
                _taroWeapp2.default.showModal({
                  title: '温馨提示',
                  content: "mydata.errmsg",
                  cancelText: "取消",
                  confirmText: "联系客服",
                  success: function success(res) {
                    if (res.confirm) {
                      var tel = _index2.SERVERPHONE;
                      _taroWeapp2.default.makePhoneCall({
                        phoneNumber: tel
                      });
                    }
                  }
                });
                return;
              } else {
                _taroWeapp2.default.showToast({
                  title: res.errmsg,
                  icon: "none",
                  duration: 1500
                });
              }
            });
          }
        } else {
          if (!province_ids || !city_ids) {
            _taroWeapp2.default.showModal({
              title: '温馨提示',
              content: '请设置置顶城市',
              showCancel: false
            });
            return;
          }
          if (paramsDay === 0) {
            _taroWeapp2.default.showModal({
              title: '温馨提示',
              content: '请设置置顶天数',
              showCancel: false
            });
            return;
          }
          if (rec) {
            (0, _index.resumesDoTopV2Action)(detail).then(function (res) {
              if (res.errcode === 'ok') {
                _taroWeapp2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false,
                  success: function success() {
                    _taroWeapp2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
              }
            });
          } else {
            (0, _index.jobDoTopAction)(detail).then(function (res) {
              if (res.errcode === 'ok') {
                _taroWeapp2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false,
                  success: function success() {
                    _taroWeapp2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
              }
            });
          }
        }
      };
      var handleAddJump = function handleAddJump() {
        userRouteJump("/pages/topping/distruction/index?max_city=" + city.max_city + "&max_province=" + city.max_province);
      };
      // 传递方法
      var transferFun = function transferFun(_ref2) {
        var city = _ref2.city,
            province = _ref2.province,
            whole = _ref2.whole;

        setParams({ city: city, province: province, whole: whole });
        console.log(city, province, whole, 'transferFun');
        calcPrice(city, province, whole);
      };
      var calcPrice = function calcPrice(city, province, whole) {
        // if (whole.length){
        //   if(type){
        //   }else{
        //     const numData = 500 * (paramsDay)
        //     setNum(numData);
        //   }
        // }else{
        // console.log(city.length,'cityleng')
        // console.log(province.length,'provincelenken')
        if (city || province || whole) {
          if (type) {
            // 获取旧价格
            var oldPrice = maxNum;
            // 获取价格
            // 时间差
            var remDay = (end - new Date().getTime() / 1000) / 86400;
            var newPrice = undefined;
            if (rec) {
              newPrice = whole.length ? 500 : (city.length * 20 + province.length * 20) * 1;
            } else {
              newPrice = whole.length ? 500 : (city.length * 10 + province.length * 20) * 1;
            }
            console.log(newPrice, '最新价格');
            // console.log(end,'end');
            // console.log(Math.round(new Date().getTime() / 1000));
            // console.log((end - (Math.round(new Date().getTime() / 1000))) / 86400)
            console.log(paramsDay, 'paramsDay');
            // 修改区域
            var changeCity = true; //修改区域
            // 只改变时间
            var money = undefined;
            if (paramsDay !== 0 && oldPrice === newPrice) {
              money = newPrice * paramsDay;
            } else if (paramsDay === 0 && oldPrice > newPrice) {
              money = (newPrice - oldPrice) * paramsDay;
            } else if (paramsDay === 0 && changeCity) {
              // 剩余天数
              if (newPrice > oldPrice) {
                if (rec) {
                  // 新的大于旧的金额
                  // 新的减去旧的再*天数
                  // money = Math.round((newPrice - oldPrice));
                  // console.log(money,'moneymoneymoney')
                  // console.log(remDay,'xxxx')
                  // money = newPrice - oldPrice - moneys;
                  money = Math.round((newPrice - oldPrice) * remDay);
                } else {
                  money = Math.round((newPrice - oldPrice) * remDay);
                }
                console.log(remDay, 'newPrice > oldPrice');
              }
            } else {
              // 时间变了，城市变了
              if (newPrice - oldPrice > 0) {
                // console.log(newPrice - oldPrice,'newPrice - oldPrice');
                // console.log(remDay,'remDay');
                // console.log(newPrice * paramsDay,'newPrice * paramsDay')
                if (rec) {
                  money = Math.round(newPrice - oldPrice + (city.length * 20 + province.length * 20) * paramsDay);
                  console.log(money, '价格是');
                  // money = Math.round(newPrice - oldPrice + oldPrice * paramsDay + newPrice * paramsDay)
                } else {
                  money = Math.round((newPrice - oldPrice) * remDay + newPrice * paramsDay);
                }
              } else {
                money = oldPrice * paramsDay;
              }
            }
            var _num = 0;
            if (money <= 0) {
              _num = 0;
            } else {
              _num = _num;
            }
            console.log(oldPrice, 'oldPrice');
            console.log(newPrice, 'newPrice');
            console.log(remDay, 'remDay');
            console.log(money, 'money');
            setNum(money);
          } else {
            var numData = 0;
            if (whole.length) {
              numData = 500 * paramsDay;
            } else {
              if (rec) {
                numData = (city.length * 20 + province.length * 20) * paramsDay;
              } else {
                numData = (city.length * 10 + province.length * 20) * paramsDay;
              }
            }
            setNum(numData);
          }
        }
      };
      // 需要传递的值
      var value = {
        AreParams: params,
        setAreParams: function setAreParams(city, province, whole) {
          return transferFun({ city: city, province: province, whole: whole });
        }
      };
      var modifyFun = function modifyFun(province) {
        console.log(province, 'xxxx');
        setProvince(province);
        // 设置积分
        recIntegral(province);
      };
      var recIntegral = function recIntegral(province) {
        console.log(basics.province_integral);
        console.log(recDay);
        console.log(province);
        var num = 0;
        if (province.length) {
          num = basics.province_integral * province.length * parseInt(recDay);
        } else {
          num = 0;
        }
        setNum(num);
      };
      // 删除
      var handleDel = function handleDel(v) {
        console.log(v);
        if (rec) {
          if (v.pid === '1') {
            params.city.map(function (val, i) {
              if (val.id === v.id) {
                params.city.splice(i, 1);
              }
            });
            console.log(params, 'xxxx');
            setParams({ city: params.city, province: params.province, whole: params.whole });
          }
        }
        if (v.pid === '1') {
          params.province.map(function (val, i) {
            if (val.id === v.id) {
              params.province.splice(i, 1);
            }
          });
          console.log(params, 'xxxx');
          setParams({ city: params.city, province: params.province, whole: params.whole });
        } else if (v.pid === '0') {
          params.whole.map(function (val, i) {
            if (val.id === v.id) {
              params.whole.splice(i, 1);
            }
          });
          setParams({ city: params.city, province: params.province, whole: params.whole });
        } else {
          params.city.map(function (val, i) {
            if (val.id === v.id) {
              params.city.splice(i, 1);
            }
          });
          setParams({ city: params.city, province: params.province, whole: params.whole });
        }
        // 积分 
        // 省市大于原来的省市就改变，不然就是直接最大积分
        // 获取旧价格
        var oldPrice = maxNum;
        // 获取价格
        var newPrice = void 0;
        if (rec) {
          newPrice = params.whole.length ? 500 : (params.city.length * 20 + params.province.length * 20) * 1;
        } else {
          newPrice = params.whole.length ? 500 : (params.city.length * 10 + params.province.length * 20) * 1;
        }
        console.log(newPrice, '删除价格');
        // const newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
        // 时间差
        var remDay = (end - new Date().getTime() / 1000) / 86400;
        // 修改区域
        var changeCity = true; //修改区域
        // 修改时间
        var money = void 0;
        // 只改变时间
        if (paramsDay !== 0 && oldPrice === newPrice) {
          money = newPrice * paramsDay;
          // setShowNum(true);
        } else if (paramsDay === 0 && oldPrice > newPrice) {
          // var remDay =  (到期时间 - 现在时间)/ 86400
          // var remDay =  (old_end_time - now_time)/ 86400
          money = (newPrice - oldPrice) * paramsDay;
        } else if (paramsDay === 0 && changeCity) {
          // 剩余天数
          if (newPrice > oldPrice) {
            money = Math.round((newPrice - oldPrice) * remDay);
          }
        } else {
          // 时间变了，城市变了
          if (newPrice - oldPrice > 0) {
            money = Math.round((newPrice - oldPrice) * remDay + newPrice * paramsDay);
          } else {
            money = oldPrice * paramsDay;
          }
        }
        var num = 0;
        if (money <= 0) {
          num = 0;
        } else {
          num = money;
        }
        setNum(num);
      };
      // 取消
      var handleCancel = function handleCancel() {
        var oldPrice = maxNum;
        // 获取价格
        var newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
        // 时间差
        var remDay = (end - new Date().getTime() / 1000) / 86400;
        // 修改区域
        // 修改时间
        var money = void 0;
        // 只改变时间
        if (oldPrice > newPrice) {
          var _num2 = (newPrice - oldPrice) * 1;
          if (_num2 > 0) {
            money = _num2;
          } else {
            money = 0;
          }
        } else if (oldPrice == newPrice) {
          money = 0;
          // 价格没变
        } else {
          // 剩余天数
          if (newPrice > oldPrice) {
            money = Math.round((newPrice - oldPrice) * remDay);
          } else {
            money = oldPrice;
          }
        }
        setNum(money);
        setdisplayTime(false);
        setParamsDay(0);
      };
      var handleJump = function handleJump() {
        if (!rec) {
          userRouteJump("/pages/topping/distruction/index?max_city=" + city.max_city + "&max_province=" + city.max_province);
        } else {
          userRouteJump("/pages/topping/distruction/index?max_city=" + basics.max_city + "&max_province=" + basics.max_province);
        }
      };
      var handleRecDay = function handleRecDay(e) {
        var reg = /^\d{0,2}$/;
        if (!reg.test(e.detail.value)) {
          _taroWeapp2.default.showModal({
            title: '温馨提示',
            content: '只能输入整数，请重新输入',
            showCancel: false,
            success: function success() {
              setRecDay('');
            }
          });
          return;
        }
        var num = 0;
        if (e.detail.value) {
          num = basics.province_integral * province.length * parseInt(e.detail.value);
        } else {
          num = 0;
        }
        setRecDay(e.detail.value);
        setNum(num);
      };
      var handleRecDel = function handleRecDel(v) {
        var list = JSON.parse(JSON.stringify(province));
        list.map(function (val, i) {
          if (val.id === v.id) {
            list.splice(i, 1);
          }
          return val;
        });
        console.log(recDay, '222222');
        var num = 0;
        num = list.length * basics.province_integral * parseInt(recDay);
        console.log(list);
        console.log(num, 'num');
        setProvince(list);
        setNum(num);
      };
      // 找活置顶
      var handleRecTopping = function handleRecTopping() {
        var province_ids = params.province.map(function (v) {
          return v.id;
        });
        var city_ids = params.city.map(function (v) {
          return v.id;
        });
        var country_ids = params.whole.map(function (v) {
          return v.id;
        });
        var provinces = [].concat(_toConsumableArray(province_ids), _toConsumableArray(city_ids), _toConsumableArray(country_ids));
        if (!province_ids.length && !city_ids.length && !country_ids.length) {
          _taroWeapp2.default.showModal({
            title: '温馨提示',
            content: '请选择您的置顶城市',
            showCancel: false
          });
          return;
        }
        if (!parseInt(recDay) || parseInt(recDay) == 0) {
          _taroWeapp2.default.showModal({
            title: '温馨提示',
            content: '输入的置顶天数不能为0或者为空',
            showCancel: false
          });
          return;
        }
        if (parseInt(recDay) > basics.max_top_days) {
          (0, _index4.default)("\u6700\u591A\u53EF\u7F6E\u9876" + basics.max_top_days + "\u5929\uFF01");
          return;
        }
        // const provinces = (province.map(v=>v.id)).join(',');
        // const citys = (city.map(v => v.id)).join(',');
        // console.log(provinces,'xxx')
        // let params={
        //   days: parseInt(recDay),
        //   citys: 0,
        //   provinces,
        // }
        var details = {
          days: paramsDay,
          citys: 0,
          provinces: provinces
        };
        // console.log(details,'111s')
        // return;
        if (!type) {
          (0, _index.resumesDoTopAction)(details).then(function (res) {
            if (res.errcode === 'ok') {
              _taroWeapp2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false,
                success: function success() {
                  _taroWeapp2.default.navigateBack({
                    delta: 1
                  });
                }
              });
            } else if (res.errcode === 'resume_null') {
              _taroWeapp2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                // showCancel: false,
                success: function success() {
                  _taroWeapp2.default.navigateTo({
                    url: "pages/resume/newJobs/index"
                  });
                }
              });
              return;
              //获取积分
            } else if (res.errcode === 'get_integral') {
              _taroWeapp2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                success: function success() {
                  _taroWeapp2.default.navigateTo({
                    url: "/pages/getintegral/index"
                  });
                }
              });
              return;
            } else {
              _taroWeapp2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false,
                success: function success() {
                  _taroWeapp2.default.navigateBack({
                    delta: 1
                  });
                }
              });
              return;
            }
          });
        }
      };
      console.log(paramsDay, 'aramsDayaaas');
      contextItem.Provider(value);
      this.anonymousFunc4 = handleAddJump;
      this.anonymousFunc5 = handleJump;
      this.anonymousFunc6 = handleAddJump;
      this.anonymousFunc7 = handleJump;

      this.anonymousFunc8 = function (e) {
        return handleClick(e);
      };

      this.anonymousFunc9 = handleCancel;

      this.anonymousFunc10 = function (e) {
        return handleClick(e);
      };

      this.anonymousFunc11 = handleTopping;

      this.anonymousFunc12 = function () {
        _taroWeapp2.default.makePhoneCall({ phoneNumber: _index2.SERVERPHONE });
      };

      var loopArray149 = province ? province.map(function (v, __index0) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };

        var _$indexKey = "bfezz" + __index0;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return handleDel(v.$original);
        };

        return {
          _$indexKey: _$indexKey,
          $original: v.$original
        };
      }) : [];
      var loopArray150 = params ? params.city.map(function (v, __index1) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };

        var _$indexKey2 = "bffzz" + __index1;

        _this2.anonymousFunc1Map[_$indexKey2] = function () {
          return handleDel(v.$original);
        };

        return {
          _$indexKey2: _$indexKey2,
          $original: v.$original
        };
      }) : [];
      var loopArray151 = params ? params.province.map(function (v, __index2) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };

        var _$indexKey3 = "bfgzz" + __index2;

        _this2.anonymousFunc2Map[_$indexKey3] = function () {
          return handleDel(v.$original);
        };

        return {
          _$indexKey3: _$indexKey3,
          $original: v.$original
        };
      }) : [];
      var loopArray152 = params ? params.whole.map(function (v, __index3) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };

        var _$indexKey4 = "bfhzz" + __index3;

        _this2.anonymousFunc3Map[_$indexKey4] = function () {
          return handleDel(v.$original);
        };

        return {
          _$indexKey4: _$indexKey4,
          $original: v.$original
        };
      }) : [];
      var loopArray153 = data.top_rules.map(function (v, i) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp2 = i + i;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: v.$original
        };
      });
      Object.assign(this.__state, {
        params: params,
        data: data,
        loopArray149: loopArray149,
        loopArray150: loopArray150,
        loopArray151: loopArray151,
        loopArray152: loopArray152,
        loopArray153: loopArray153,
        province: province,
        IMGCDNURL: _index2.IMGCDNURL,
        rec: rec,
        basics: basics,
        type: type,
        list: list,
        displayTime: displayTime,
        num: num,
        endTime: endTime,
        editData: editData,
        newTime: newTime,
        day: day,
        SERVERPHONE: _index2.SERVERPHONE
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey3) {
      var _anonymousFunc2Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc2Map[_$indexKey3] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey3].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(_$indexKey4) {
      var _anonymousFunc3Map;

      ;

      for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc3Map[_$indexKey4] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey4].apply(_anonymousFunc3Map, e);
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
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: "anonymousFunc9",
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: "anonymousFunc10",
    value: function anonymousFunc10(e) {
      ;
    }
  }, {
    key: "anonymousFunc11",
    value: function anonymousFunc11(e) {
      ;
    }
  }, {
    key: "anonymousFunc12",
    value: function anonymousFunc12(e) {
      ;
    }
  }]);

  return Topping;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12"], _class.$$componentPath = "pages/topping/index", _temp2);


Topping.config = { navigationBarTitleText: '招工置顶' };
exports.default = Topping;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Topping, true));

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/userinfo/index/index.tsx?taro&type=script&parse=PAGE&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/userinfo/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhoneContext = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index5 = _interopRequireDefault(_index4);

__webpack_require__(/*! ./index.scss */ "./src/pages/userinfo/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhoneContext = exports.PhoneContext = (0, _taroWeapp.createContext)({});

var UserUpdateInfo = (_temp2 = _class = function (_Taro$Component) {
  _inherits(UserUpdateInfo, _Taro$Component);

  function UserUpdateInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserUpdateInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserUpdateInfo.__proto__ || Object.getPrototypeOf(UserUpdateInfo)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["headerImg", "showModal", "newName", "name", "uphone"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserUpdateInfo, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(UserUpdateInfo.prototype.__proto__ || Object.getPrototypeOf(UserUpdateInfo.prototype), "_constructor", this).call(this, props);

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

      var router = (0, _taroWeapp.useRouter)();
      var _router$params = router.params,
          _router$params$userna = _router$params.username,
          username = _router$params$userna === undefined ? '' : _router$params$userna,
          _router$params$phone = _router$params.phone,
          phone = _router$params$phone === undefined ? '' : _router$params$phone,
          _router$params$avatar = _router$params.avatar,
          avatar = _router$params$avatar === undefined ? '' : _router$params$avatar;
      // 用户改头像

      var _useState = (0, _taroWeapp.useState)(avatar),
          _useState2 = _slicedToArray(_useState, 2),
          headerImg = _useState2[0],
          setHeaderImg = _useState2[1];
      // 是否展示修改名字模态框


      var _useState3 = (0, _taroWeapp.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          showModal = _useState4[0],
          setShowModal = _useState4[1];
      // 用户名字


      var _useState5 = (0, _taroWeapp.useState)(username),
          _useState6 = _slicedToArray(_useState5, 2),
          name = _useState6[0],
          setName = _useState6[1];
      // 用户新名字


      var _useState7 = (0, _taroWeapp.useState)(username),
          _useState8 = _slicedToArray(_useState7, 2),
          newName = _useState8[0],
          setNewName = _useState8[1];
      // 用户电话号码


      var _useState9 = (0, _taroWeapp.useState)(phone),
          _useState10 = _slicedToArray(_useState9, 2),
          uphone = _useState10[0],
          setUPhone = _useState10[1];

      var value = {
        setPhone: function setPhone(tel) {
          return setUPhone(tel);
        }
      };
      // 用户输入新名字
      var userEnterName = function userEnterName(e) {
        var _e$detail$value = e.detail.value,
            value = _e$detail$value === undefined ? '' : _e$detail$value;

        setNewName(value);
      };
      // 用户修改头像
      var userUploadAvatar = function userUploadAvatar() {
        (0, _index3.default)().then(function (res) {
          if (res.errcode == 'ok') {
            (0, _index.userChangeAvatar)(res.url).then(function (data) {
              (0, _index5.default)(data.errmsg);
              if (data.errcode == 'ok') {
                setHeaderImg(res.httpurl);
              }
            });
          } else {
            (0, _index5.default)(res.errmsg);
          }
        }).catch(function () {
          (0, _index5.default)('网络错误，上传失败');
        });
      };
      // 用户前往修改手机
      var userJumpPhonePage = function userJumpPhonePage() {
        _taroWeapp2.default.navigateTo({
          url: "/pages/userinfo/phone/index"
        });
      };
      // 用户修改新名字
      var userSubmitName = function userSubmitName() {
        if (newName === name) {
          setShowModal(false);
          return;
        }
        (0, _index.userUpdateName)(newName).then(function (res) {
          (0, _index5.default)(res.errmsg);
          if (res.errcode == 'ok') {
            setName(newName);
            setShowModal(false);
          }
        }).catch(function () {
          (0, _index5.default)('网络错误，修改失败');
        });
      };
      PhoneContext.Provider(value);

      this.anonymousFunc0 = function () {
        return userUploadAvatar();
      };

      this.anonymousFunc1 = function () {
        return setShowModal(true);
      };

      this.anonymousFunc2 = function () {
        return userJumpPhonePage();
      };

      this.anonymousFunc3 = function (e) {
        return userEnterName(e);
      };

      this.anonymousFunc4 = function () {
        return setShowModal(false);
      };

      this.anonymousFunc5 = function () {
        return userSubmitName();
      };

      Object.assign(this.__state, {
        headerImg: headerImg,
        showModal: showModal,
        newName: newName,
        name: name,
        uphone: uphone
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
  }]);

  return UserUpdateInfo;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5"], _class.$$componentPath = "pages/userinfo/index/index", _temp2);
exports.default = UserUpdateInfo;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(UserUpdateInfo, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/map/resume/index.tsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/map/resume/index.tsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/map/resume/index.wxml";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/realname/index.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/realname/index.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/realname/index.wxml";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/recruit/publish/index.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/recruit/publish/index.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/recruit/publish/index.wxml";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/topping/index.tsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/topping/index.tsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/topping/index.wxml";

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/userinfo/index/index.tsx?taro&type=template&parse=PAGE&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/userinfo/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/userinfo/index/index.wxml";

/***/ }),

/***/ "./src/actions/tabbar.ts":
/*!*******************************!*\
  !*** ./src/actions/tabbar.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var changeTabbar = exports.changeTabbar = function changeTabbar(val) {
  return {
    type: val
  };
};

/***/ }),

/***/ "./src/components/swiper/index.ts":
/*!****************************************!*\
  !*** ./src/components/swiper/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_PROPS = exports.DEFAULT_PROPS = {
  indicatorDots: false,
  autoplay: true,
  current: 0,
  interval: 3500,
  duration: 500,
  circular: true,
  vertical: false,
  classname: '',
  lists: []
};

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ? 全局不动配置项 只做导出不做修改
// ! 根据不同编译脚本打包不同小程序
// * 当前打包版本
var MINIVERSION = exports.MINIVERSION = "jizhao";
var MINICONFIG = exports.MINICONFIG = __webpack_require__("./src/config/minis sync recursive ^\\.\\/.*\\.ts$")("./" + MINIVERSION + ".ts");
// * 全局请求接口域名
// * 测试站
var DEVREQUESTURL = exports.DEVREQUESTURL = 'http://miniapitest.zhaogong.vrtbbs.com/';
// * 正式站
var PROREQUESTURL = exports.PROREQUESTURL = 'https://newyupaomini.54xiaoshuo.com/';
// * 当前测试
var REQUESTURL = exports.REQUESTURL = DEVREQUESTURL;
// * 默认上传图片
var UPLOADIMGURL = exports.UPLOADIMGURL = "https://newyupaomini.54xiaoshuo.com/index/upload/";
// * 阿里云CDN域名
var ALIYUNCDN = exports.ALIYUNCDN = 'http://cdn.yupao.com';
// * 阿里云CDN图片域名
var IMGCDNURL = exports.IMGCDNURL = "http://cdn.yupao.com/miniprogram/images/";
// * 公司默认客服电话
var SERVERPHONE = exports.SERVERPHONE = '400-838-1888';
// * 小程序当前版本号
var VERSION = exports.VERSION = '3.0.0';
// * 高德地区key
var MAPKEY = exports.MAPKEY = '20f12aae660c04de86f993d3eff590a0';
// * 授权登录页面
var AUTHPATH = exports.AUTHPATH = '/pages/userauth/index';
// * 最大缓存历史城市数量
var MAXCACHECITYNUM = exports.MAXCACHECITYNUM = 3;
// * 用户发布 选择地址 历史记录 最大数量
var UserPublishAreaHistoryMaxNum = exports.UserPublishAreaHistoryMaxNum = 10;
// * 小程序tabbar msg统计 定时器请求间隔 1分钟
var MemberMsgTimerInterval = exports.MemberMsgTimerInterval = 60000;
// * 下载App
var DownloadApp = exports.DownloadApp = 'https://android.myapp.com/myapp/detail.htm?apkName=io.dcloud.H576E6CC7&amp;ADTAG=mobile';
// ! 以下内容为每个小程序独立配置  
// * page-title-global
var PAGETITLE = exports.PAGETITLE = MINICONFIG.PAGETITLE;
// * 小程序token 
var TOKEN = exports.TOKEN = MINICONFIG.TOKEN;
// * 小程序广告unitid
var UNITID = exports.UNITID = MINICONFIG.UNITID;
// * 小程序邀请key
var INVITESOURCE = exports.INVITESOURCE = MINICONFIG.INVITESOURCE;

/***/ }),

/***/ "./src/config/minis sync recursive ^\\.\\/.*\\.ts$":
/*!********************************************!*\
  !*** ./src/config/minis sync ^\.\/.*\.ts$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./jizhao.ts": "./src/config/minis/jizhao.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/config/minis sync recursive ^\\.\\/.*\\.ts$";

/***/ }),

/***/ "./src/config/minis/jizhao.ts":
/*!************************************!*\
  !*** ./src/config/minis/jizhao.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// * 每个小程序单独配置  工地急招
// * page-title-global
var PAGETITLE = '鱼泡网-';
// * 小程序token 
var TOKEN = 'jizhao';
// * 小程序广告unitid
var UNITID = 'adunit-80f40e8b4f60c3f6';
// * 邀请key
var INVITESOURCE = "712790d9629c6dcea00e3f5bff60132b";
module.exports = {
  PAGETITLE: PAGETITLE,
  TOKEN: TOKEN,
  UNITID: UNITID,
  INVITESOURCE: INVITESOURCE
};

/***/ }),

/***/ "./src/config/store.ts":
/*!*****************************!*\
  !*** ./src/config/store.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// * 本文件为小程序内部缓存声明文件
// 用户信息
var UserInfo = exports.UserInfo = 'userInfo';
// 城市数据 发布招工 首页都会用到
var Areas = exports.Areas = 'areaData';
// 历史选择城市
var HistoryCities = exports.HistoryCities = 'historyCities';
// 当前定位城市
var UserLocationCity = exports.UserLocationCity = 'userLocationCity';
// 列表选择城市
var UserListChooseCity = exports.UserListChooseCity = 'userListChooseCity';
// 最后发布招工地点
var UserLastPublishArea = exports.UserLastPublishArea = 'userLastPublishArea';
// 用户发布 选择地址 历史记录
var UserPublishAreaHistory = exports.UserPublishAreaHistory = 'userPublishAreaHistory';
// 招工置顶 暂存搜索记录
var SearchList = exports.SearchList = 'searchList';
// 高德api的userlocation
var UserLocation = exports.UserLocation = 'userLocation';
// 找活名片info信息
var Introinfo = exports.Introinfo = 'introinfo';

/***/ }),

/***/ "./src/constants/msg.ts":
/*!******************************!*\
  !*** ./src/constants/msg.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET = exports.GET = 'get';
var SET = exports.SET = 'set';

/***/ }),

/***/ "./src/constants/personnel.ts":
/*!************************************!*\
  !*** ./src/constants/personnel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GETDATA = exports.GETDATA = 'getdata';
var SETDATA = exports.SETDATA = 'setdata';

/***/ }),

/***/ "./src/constants/resume.ts":
/*!*********************************!*\
  !*** ./src/constants/resume.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GETLIST = exports.GETLIST = 'getlist';
var SETLIST = exports.SETLIST = 'setlist';

/***/ }),

/***/ "./src/constants/tabbar.ts":
/*!*********************************!*\
  !*** ./src/constants/tabbar.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeInTabbar = typeInTabbar;
var HOME = exports.HOME = 'home';
var RECRUIT = exports.RECRUIT = 'recruit';
var RESUME = exports.RESUME = 'resume';
var MEMBER = exports.MEMBER = 'member';
var types = [HOME, RECRUIT, RESUME, MEMBER];
function typeInTabbar(val) {
  return types.includes(val);
}

/***/ }),

/***/ "./src/constants/user.tsx":
/*!********************************!*\
  !*** ./src/constants/user.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET = exports.GET = 'get';
var SET = exports.SET = 'set';

/***/ }),

/***/ "./src/constants/wechat_notice.ts":
/*!****************************************!*\
  !*** ./src/constants/wechat_notice.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SUCCESS = 'success';
exports.default = SUCCESS;

/***/ }),

/***/ "./src/hooks/code/index.ts":
/*!*********************************!*\
  !*** ./src/hooks/code/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendTypeNo = exports.SendTypeHave = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = userCode;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _index = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 用户获取验证码
var SendTypeHave = exports.SendTypeHave = 'have';
var SendTypeNo = exports.SendTypeNo = 'no';
var title = '获取验证码';
function userCode(type) {
  var _useState = (0, _taroWeapp.useState)(type === false ? false : !!type),
      _useState2 = _slicedToArray(_useState, 2),
      disabled = _useState2[0],
      setDisabled = _useState2[1];

  var sendType = type === false ? SendTypeNo : SendTypeHave;

  var _useState3 = (0, _taroWeapp.useState)(title),
      _useState4 = _slicedToArray(_useState3, 2),
      text = _useState4[0],
      setText = _useState4[1];

  var userGetCode = function userGetCode(tel) {
    if (disabled) return;
    if (!(0, _index.isPhone)(tel)) {
      (0, _index3.default)('请先输入正确的手机号码');
      return;
    }
    var data = { tel: tel, sendType: sendType };
    (0, _index4.getUserPhoneCode)(data).then(function (res) {
      (0, _index3.default)(res.errmsg, 2500);
      if (res.errcode == 'ok') {
        var t = res.refresh || 60;
        setText(t + 's后重新获取');
        var timer = setInterval(function () {
          t--;
          if (t === 0) {
            setDisabled(false);
            clearInterval(timer);
            setText(title);
            return false;
          }
          setText(t + 's后重新获取');
        }, 1000);
      }
    });
  };
  return {
    disabled: disabled,
    text: text,
    userGetCode: userGetCode
  };
}

/***/ }),

/***/ "./src/hooks/publish/recruit.ts":
/*!**************************************!*\
  !*** ./src/hooks/publish/recruit.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = usePublishViewInfo;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _area = __webpack_require__(/*! ../../models/area */ "./src/models/area.ts");

var _index2 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index3 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index6 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function usePublishViewInfo(InitParams) {
  // 获取用户信息
  var login = (0, _redux.useSelector)(function (state) {
    return state.User['login'];
  });
  // 视图显示信息

  var _useState = (0, _taroWeapp.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      model = _useState2[0],
      setModel = _useState2[1];
  // 是否展开图片上传


  var _useState3 = (0, _taroWeapp.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showUpload = _useState4[0],
      setShowUpload = _useState4[1];
  // 是否显示工种选择


  var _useState5 = (0, _taroWeapp.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showProfession = _useState6[0],
      setShowProssion = _useState6[1];
  // 当前显示城市


  var _useState7 = (0, _taroWeapp.useState)(_area.AREABEIJING.name),
      _useState8 = _slicedToArray(_useState7, 2),
      area = _useState8[0],
      setArea = _useState8[1];
  // 招工详情的字数


  var _useState9 = (0, _taroWeapp.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      num = _useState10[0],
      setNum = _useState10[1];
  // 备份手机号码


  var _useState11 = (0, _taroWeapp.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      phone = _useState12[0],
      setPhone = _useState12[1];
  // 备份当前数据 用于强制修改判断


  var _useState13 = (0, _taroWeapp.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      bakModel = _useState14[0],
      setBakModel = _useState14[1];
  // 选择详细地址信息


  var _useState15 = (0, _taroWeapp.useState)({
    title: '',
    adcode: '',
    location: '',
    info: ''
  }),
      _useState16 = _slicedToArray(_useState15, 2),
      areaInfo = _useState16[0],
      setAreaInfo = _useState16[1];
  // 初始化招工信息


  (0, _taroWeapp.useEffect)(function () {
    if (!login) return;
    (0, _index.getPublishRecruitView)(InitParams).then(function (res) {
      if (res.errcode == 'ok') {
        var InitViewInfo = {
          placeholder: res.placeholder,
          classifies: res.selectedClassifies,
          maxImageCount: res.typeTextArr.maxImageCount,
          maxClassifyCount: res.typeTextArr.maxClassifyCount,
          classifyTree: res.classifyTree,
          title: res.model.title || '',
          address: res.model.address || '',
          detail: res.model.detail || '',
          infoId: res.model.id || InitParams.infoId,
          type: res.type,
          user_mobile: res.model.user_mobile || res.memberInfo.tel || '',
          code: '',
          user_name: res.model.user_name,
          view_images: res.view_image,
          province_id: res.model.province_id || '',
          city_id: res.model.city_id || '',
          location: res.model.location || '',
          adcode: '',
          county_id: res.model.county_id || '',
          is_check: res.model.hasOwnProperty('is_check') ? res.model.is_check : 1,
          check_fail_msg: res.model.check_fail_msg || ''
        };
        setModel(InitViewInfo);
        initUserAreaInfo(res);
        if (InitViewInfo.is_check == 0) bakModelInfo(InitViewInfo);
        setAreaInfo(_extends({}, areaInfo, { title: InitViewInfo.address }));
        setPhone(InitViewInfo.user_mobile);
        if (res.view_image.length) setShowUpload(true);
        if (InitViewInfo.detail) setNum(InitViewInfo.detail.length);
      } else {
        (0, _index3.ShowActionModal)({
          msg: res.errmsg,
          success: function success() {
            _taroWeapp2.default.navigateBack();
          }
        });
      }
    });
  }, [login]);
  function initUserAreaInfo(data) {
    console.log(InitParams.infoId, 'InitParams.infoId');
    //  设置地区名字
    if (InitParams.infoId) {
      setArea(data.default_search_name.name);
    } else {
      var userLoctionCity = _taroWeapp2.default.getStorageSync(_store.UserLocationCity);
      if (userLoctionCity) {
        setArea(userLoctionCity.city);
      } else {
        (0, _index2.userAuthLoction)().then(function (res) {
          setArea(res.city);
        }).then(function () {
          setArea(_area.AREABEIJING.name);
        });
      }
    }
    // 设置发布地址
    if (InitParams.infoId) {
      setAreaInfo({
        title: data.model.address,
        location: data.model.location,
        info: '',
        adcode: data.model.adcode || ''
      });
    } else {
      var userLastPublishArea = _taroWeapp2.default.getStorageSync(_store.UserLastPublishArea);
      if (userLastPublishArea) {
        setAreaInfo(userLastPublishArea);
      }
    }
  }
  function bakModelInfo(model) {
    var data = {
      title: model.title,
      address: model.address,
      detail: model.detail,
      infoId: model.infoId,
      type: model.type,
      user_mobile: model.user_mobile,
      code: model.code,
      user_name: model.user_name,
      province_id: model.province_id,
      city_id: model.city_id,
      location: model.location,
      adcode: '',
      county_id: model.county_id,
      classifies: model.classifies,
      images: model.view_images.map(function (item) {
        return item.url;
      })
    };
    setBakModel(data);
    (0, _index3.ShowActionModal)({
      title: '审核失败',
      msg: model.check_fail_msg
    });
  }
  function getPublishedInfo() {
    if (!model) return;
    var data = {
      title: model.title,
      address: areaInfo.title,
      detail: model.detail,
      infoId: model.infoId,
      type: model.type,
      user_mobile: model.user_mobile,
      code: model.code,
      user_name: model.user_name,
      province_id: model.province_id,
      city_id: model.city_id,
      location: model.location,
      adcode: areaInfo.adcode,
      county_id: model.county_id,
      classifies: model.classifies,
      images: model.view_images.map(function (item) {
        return item.url;
      })
    };
    return data;
  }
  function userPublishRecruitAction() {
    var data = getPublishedInfo();
    if (!data) return;
    if (!(0, _index6.isVaildVal)(data.title, 3)) {
      (0, _index4.default)('请正确输入3~12字中文标题!');
      return;
    }
    if (!data.classifies.length) {
      (0, _index4.default)('请选择您的工种!');
      return;
    }
    if (!data.province_id && !data.address) {
      (0, _index4.default)('请选择您的详细地址!');
      return;
    }
    if (!(0, _index6.isVaildVal)(data.user_name, 2)) {
      (0, _index4.default)('请正确输入2~6字中文姓名!');
      return;
    }
    if (!(0, _index6.isPhone)(data.user_mobile)) {
      (0, _index4.default)('手机号输入有误!');
      return;
    }
    if (phone != data.user_mobile) {
      if (!data.code) {
        (0, _index4.default)('请输入正确的验证码!');
        return;
      }
    }
    if (!(0, _index6.isVaildVal)(data.detail, 15)) {
      (0, _index4.default)('请正确输入15~500字招工详情!');
      return;
    }
    // 如果是审核失败 那么久必须强制修改
    if (model && model.is_check == 0) {
      var bak = JSON.stringify(bakModel);
      var mydata = JSON.stringify(data);
      if (bak == mydata) {
        (0, _index3.ShowActionModal)({
          title: '审核失败',
          msg: model && model.check_fail_msg
        });
        return;
      }
    }
    // 拼接小地址的描述
    data.address += '@@@@@' + areaInfo.info;
    (0, _index.publishRecruitInfo)(data).then(function (res) {
      if (res.errcode == 'ok') {
        (0, _index5.SubscribeToNews)("recruit", function () {
          (0, _index3.SubPopup)({
            tips: res.errmsg,
            callback: function callback() {
              _taroWeapp2.default.reLaunch({
                url: '/pages/published/recruit/index'
              });
            }
          });
        });
      }
    });
  }
  return {
    model: model,
    setModel: setModel,
    showUpload: showUpload,
    setShowUpload: setShowUpload,
    showProfession: showProfession,
    setShowProssion: setShowProssion,
    userPublishRecruitAction: userPublishRecruitAction,
    area: area,
    setArea: setArea,
    areaInfo: areaInfo,
    setAreaInfo: setAreaInfo,
    num: num,
    setNum: setNum,
    phone: phone
  };
}

/***/ }),

/***/ "./src/hooks/realname/index.ts":
/*!*************************************!*\
  !*** ./src/hooks/realname/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = useRealname;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index2 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(/*! ../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(/*! ../../utils/api/index */ "./src/utils/api/index.ts");

var _index7 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _area = __webpack_require__(/*! ../../models/area */ "./src/models/area.ts");

var _index8 = __webpack_require__(/*! ../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardInfoFailImg = _index7.IMGCDNURL + 'lpy/auth/upload-fail-tips.png';
// 声明性别选项与下标
var sexArray = [{ id: '1', name: '男' }, { id: '2', name: '女' }];
function useRealname() {
  // 性别下标
  var _useState = (0, _taroWeapp.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      sexCurrent = _useState2[0],
      setSexCurrent = _useState2[1];
  // 性别名称


  var _useState3 = (0, _taroWeapp.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      sexName = _useState4[0],
      setSexName = _useState4[1];
  // 民族下标


  var _useState5 = (0, _taroWeapp.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      nationCurrent = _useState6[0],
      setNationCurrent = _useState6[1];
  // 初始化返回模型


  var _useState7 = (0, _taroWeapp.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      initModel = _useState8[0],
      setInitModel = _useState8[1];
  // 保存数据提交模型


  var _useState9 = (0, _taroWeapp.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      model = _useState10[0],
      setModel = _useState10[1];
  // 获取用户是否登录


  var login = (0, _redux.useSelector)(function (state) {
    return state.User['login'];
  });
  // 是否显示表单

  var _useState11 = (0, _taroWeapp.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      showForm = _useState12[0],
      setShowForm = _useState12[1];
  // 展示电话号码选项


  var _useState13 = (0, _taroWeapp.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      checkDegree = _useState14[0],
      setCheckDegree = _useState14[1];
  // 声明父组件传值地区名字


  var _useState15 = (0, _taroWeapp.useState)(''),
      _useState16 = _slicedToArray(_useState15, 2),
      RealnameArea = _useState16[0],
      setRealnameArea = _useState16[1];

  (0, _taroWeapp.useEffect)(function () {
    if (!login) return;
    // if (publishArea && location && adcode ){
    //   console.log(publishArea, location, adcode)
    // }
    (0, _index.getUserAuthInfo)().then(function (data) {
      if (data.errcode == 'ok') {
        if (data.authData.member && data.authData.member.is_check === '0') {
          _taroWeapp2.default.showModal({
            title: '审核失败',
            content: data.authData.memberExt.idcard_check_failure_reason,
            showCancel: false
          });
        }
        var initData = data.authData;
        setInitModel(initData);
        var nationId = initData.memberExt.nation_id || '';
        var nationName = '';
        var _nationCurrent = 0;
        if (nationId) {
          _nationCurrent = initData.nation.findIndex(function (item) {
            return item.mz_id == nationId;
          });
          nationName = initData.nation[_nationCurrent].mz_name;
          setNationCurrent(_nationCurrent);
        }
        var modelData = {
          username: initData.member ? initData.member.username : '',
          age: initData.memberExt.age || '',
          nation_id: nationId,
          nationality: nationName,
          idCard: initData.memberExt.id_card || '',
          idCardImg: initData.memberExt.id_card_img || '',
          handImg: initData.memberExt.hand_img || '',
          tel: initData.member ? initData.member.tel : '',
          code: '',
          address: initData.memberExt.address || '',
          birthday: initData.memberExt.birthday || '',
          gender: initData.memberExt.sex || ''
        };
        // 设置地图显示的名称
        var area = (0, _area.getLongAreaAdname)(modelData.address);
        setRealnameArea(area);
        // 是否展示电话号
        if (initData.member && initData.member.check_degree == '2') setCheckDegree(true);
        // 性别下标
        if (initData.memberExt.sex !== '') {
          for (var i = 0; i < sexArray.length; i++) {
            if (sexArray[i].id == initData.memberExt.sex) {
              setSexName(sexArray[i].name);
              setSexCurrent(i);
              break;
            }
          }
        }
        setModel(modelData);
        if (initData.member && initData.member.check_degree == '2') setShowForm(true);
      } else {
        (0, _index2.ShowActionModal)({
          msg: data.errmsg,
          success: function success() {
            _taroWeapp2.default.navigateBack();
          }
        });
      }
    });
  }, [login]);
  var userPostAuthInfo = function userPostAuthInfo() {
    console.log(model);
    var item = JSON.parse(JSON.stringify(model));
    var modelItem = JSON.parse(JSON.stringify(initModel));
    console.log(sexCurrent, 'sexCurrent');
    console.log(modelItem.nation[nationCurrent].mz_name, 'nationCurrentnationCurrent');
    console.log(nationCurrent, 'nationCurrent');
    // 判断大于18小于65
    var age = void 0;
    if (item.age < 18 || item.age > 65) {
      var newData = new Date().getFullYear();
      var birth = modelItem.memberExt.birthday.substring(0, 4);
      age = newData - birth;
      console.log(age, '12312312321');
    } else {
      age = item.age;
    }
    console.log(age);
    var params = {
      username: item.username,
      age: age,
      nation_id: nationCurrent + 1,
      nationality: modelItem.nation[nationCurrent].mz_name,
      idCard: item.idCard,
      idCardImg: item.idCardImg,
      handImg: item.handImg,
      tel: item.tel,
      code: item.code,
      address: item.address,
      birthday: modelItem.memberExt.birthday,
      gender: sexCurrent + 1
    };
    console.log(params);
    // return;
    (0, _index.postUserAuthInfo)(params).then(function (res) {
      console.log(res);
      (0, _index8.SubscribeToNews)('auth', function () {
        (0, _index2.SubPopup)({
          tips: res.errmsg,
          callback: function callback() {
            _taroWeapp2.default.navigateBack({
              delta: 1
            });
          }
        });
      });
    });
  };
  var userUploadIdcard = function userUploadIdcard() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

    var modelObj = JSON.parse(JSON.stringify(model));
    //type = 1 证明 type = 2 手持  
    var url = type == 1 ? _index6.getIdcardAuthInfo : '';
    if (!initModel) return;
    if (type === 1) {
      (0, _index4.CameraAndAlbum)(url).then(function (data) {
        if (data.errcode == 'ok') {
          var memberExt = JSON.parse(JSON.stringify(initModel.memberExt));
          if (type == 1) {
            memberExt.id_card_img = data.url;
            memberExt.id_card_img_path = data.httpurl;
            setInitModel(_extends({}, initModel, { memberExt: memberExt }));
          } else {
            memberExt.hand_img = data.url;
            memberExt.hand_img_path = data.httpurl;
            (0, _index3.default)(data.errmsg);
            return;
          }
          if (data.card_info) {
            setShowForm(true);
            var cardData = data.card_info;
            if (data.card_info.success) {
              memberExt.nation_id = cardData.nation_id || '';
              memberExt.birthday = cardData.birth || '';
              memberExt.address = cardData.address || '';
              memberExt.sex = cardData.sex || '';
              //memberExt.
              memberExt.id_card = cardData.num || '', memberExt.user_name = cardData.name || '';
            } else {
              (0, _index3.default)(data.card_info.tips_message);
              memberExt.id_card_img_path = cardInfoFailImg;
              setInitModel(_extends({}, initModel, { memberExt: memberExt }));
            }
          }
          // 生日
          var birthall = void 0;
          if (memberExt.birthday) {
            var birth = memberExt.birthday.substring(0, 4);
            var birthtwo = memberExt.birthday.substring(4, 6);
            var birththree = memberExt.birthday.substring(6, 8);
            if (memberExt.birthday != "") {
              birthall = birth + "-" + birthtwo + "-" + birththree;
            } else {
              birthall = "";
            }
          }
          // 性别
          var sexIndex = void 0;
          sexArray.map(function (v, i) {
            // let sexItem;
            if (memberExt.sex === v.name) {
              // sexItem = v;
              sexIndex = i;
            }
          });
          setSexCurrent(sexIndex);
          setSexName(memberExt.sex);
          var dataItem = {
            username: memberExt.user_name ? memberExt.user_name : '',
            age: memberExt.age || '',
            nation_id: memberExt.nationId,
            nationality: memberExt.nationality,
            idCard: memberExt.id_card || '',
            idCardImg: memberExt.id_card_img || '',
            handImg: memberExt.hand_img || '',
            tel: modelObj.tel || '',
            code: '',
            address: memberExt.address,
            birthday: birthall || '',
            gender: sexIndex && sexIndex != -1 ? sexIndex : ""
          };
          memberExt.birthday = birthall;
          setInitModel(_extends({}, initModel, { memberExt: memberExt }));
          setModel(dataItem);
          setInitModel(_extends({}, initModel, { memberExt: memberExt }));
        } else {
          (0, _index3.default)(data.errmsg);
        }
      });
    } else {
      var memberExt = JSON.parse(JSON.stringify(initModel.memberExt));
      // memberExt.hand_img = 
      (0, _index5.default)().then(function (res) {
        var imageItem = {
          url: res.url,
          httpurl: res.httpurl
        };
        console.log(imageItem);
        memberExt.hand_img = imageItem.url;
        memberExt.hand_img_path = imageItem.httpurl;
        // if (i === -1) {
        //   setImage({ ...image, item: [...image.item, imageItem] })
        // } else {
        //   image.item[i] = imageItem
        //   setImage({ ...image })
        // }
        var item = JSON.parse(JSON.stringify(model));
        item.handImg = imageItem.url;
        setModel(item);
      });
      setInitModel(_extends({}, initModel, { memberExt: memberExt }));
    }
  };
  return {
    initModel: initModel,
    model: model,
    setModel: setModel,
    login: login,
    userPostAuthInfo: userPostAuthInfo,
    userUploadIdcard: userUploadIdcard,
    sexArray: sexArray,
    setSexCurrent: setSexCurrent,
    sexCurrent: sexCurrent,
    showForm: showForm,
    sexName: sexName,
    setSexName: setSexName,
    nationCurrent: nationCurrent,
    setNationCurrent: setNationCurrent,
    setInitModel: setInitModel,
    checkDegree: checkDegree,
    RealnameArea: RealnameArea,
    setRealnameArea: setRealnameArea
  };
}

/***/ }),

/***/ "./src/models/area.ts":
/*!****************************!*\
  !*** ./src/models/area.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCityInfo = getCityInfo;
exports.getLongAreaAdname = getLongAreaAdname;
var AREAS = [{
  "id": "1",
  "pid": "0",
  "name": "全国",
  "ad_name": "中国",
  "has_children": 0,
  "children": []
}, {
  "id": "2",
  "pid": "1",
  "name": "北京",
  "ad_name": "北京市",
  "has_children": 0,
  "children": []
}, {
  "id": "3",
  "pid": "1",
  "name": "安徽",
  "ad_name": "安徽省",
  "has_children": 1,
  "children": [{
    "id": "3",
    "pid": "1",
    "name": "安徽",
    "ad_name": "安徽省"
  }, {
    "id": "36",
    "pid": "3",
    "name": "安庆",
    "ad_name": "安庆市"
  }, {
    "id": "37",
    "pid": "3",
    "name": "蚌埠",
    "ad_name": "蚌埠市"
  }, {
    "id": "39",
    "pid": "3",
    "name": "池州",
    "ad_name": "池州市"
  }, {
    "id": "40",
    "pid": "3",
    "name": "滁州",
    "ad_name": "滁州市"
  }, {
    "id": "41",
    "pid": "3",
    "name": "阜阳",
    "ad_name": "阜阳市"
  }, {
    "id": "42",
    "pid": "3",
    "name": "淮北",
    "ad_name": "淮北市"
  }, {
    "id": "43",
    "pid": "3",
    "name": "淮南",
    "ad_name": "淮南市"
  }, {
    "id": "44",
    "pid": "3",
    "name": "黄山",
    "ad_name": "黄山市"
  }, {
    "id": "45",
    "pid": "3",
    "name": "六安",
    "ad_name": "六安市"
  }, {
    "id": "46",
    "pid": "3",
    "name": "马鞍山",
    "ad_name": "马鞍山市"
  }, {
    "id": "47",
    "pid": "3",
    "name": "宿州",
    "ad_name": "宿州市"
  }, {
    "id": "48",
    "pid": "3",
    "name": "铜陵",
    "ad_name": "铜陵市"
  }, {
    "id": "49",
    "pid": "3",
    "name": "芜湖",
    "ad_name": "芜湖市"
  }, {
    "id": "50",
    "pid": "3",
    "name": "宣城",
    "ad_name": "宣城市"
  }, {
    "id": "51",
    "pid": "3",
    "name": "亳州",
    "ad_name": "亳州市"
  }, {
    "id": "3401",
    "pid": "3",
    "name": "合肥",
    "ad_name": "合肥市"
  }]
}, {
  "id": "4",
  "pid": "1",
  "name": "福建",
  "ad_name": "福建省",
  "has_children": 1,
  "children": [{
    "id": "4",
    "pid": "1",
    "name": "福建",
    "ad_name": "福建省"
  }, {
    "id": "53",
    "pid": "4",
    "name": "福州",
    "ad_name": "福州市"
  }, {
    "id": "54",
    "pid": "4",
    "name": "龙岩",
    "ad_name": "龙岩市"
  }, {
    "id": "55",
    "pid": "4",
    "name": "南平",
    "ad_name": "南平市"
  }, {
    "id": "56",
    "pid": "4",
    "name": "宁德",
    "ad_name": "宁德市"
  }, {
    "id": "57",
    "pid": "4",
    "name": "莆田",
    "ad_name": "莆田市"
  }, {
    "id": "58",
    "pid": "4",
    "name": "泉州",
    "ad_name": "泉州市"
  }, {
    "id": "59",
    "pid": "4",
    "name": "三明",
    "ad_name": "三明市"
  }, {
    "id": "60",
    "pid": "4",
    "name": "厦门",
    "ad_name": "厦门市"
  }, {
    "id": "61",
    "pid": "4",
    "name": "漳州",
    "ad_name": "漳州市"
  }]
}, {
  "id": "5",
  "pid": "1",
  "name": "甘肃",
  "ad_name": "甘肃省",
  "has_children": 1,
  "children": [{
    "id": "5",
    "pid": "1",
    "name": "甘肃",
    "ad_name": "甘肃省"
  }, {
    "id": "62",
    "pid": "5",
    "name": "兰州",
    "ad_name": "兰州市"
  }, {
    "id": "63",
    "pid": "5",
    "name": "白银",
    "ad_name": "白银市"
  }, {
    "id": "64",
    "pid": "5",
    "name": "定西",
    "ad_name": "定西市"
  }, {
    "id": "65",
    "pid": "5",
    "name": "甘南",
    "ad_name": "甘南藏族自治州"
  }, {
    "id": "66",
    "pid": "5",
    "name": "嘉峪关",
    "ad_name": "嘉峪关市"
  }, {
    "id": "67",
    "pid": "5",
    "name": "金昌",
    "ad_name": "金昌市"
  }, {
    "id": "68",
    "pid": "5",
    "name": "酒泉",
    "ad_name": "酒泉市"
  }, {
    "id": "69",
    "pid": "5",
    "name": "临夏",
    "ad_name": "临夏回族自治州"
  }, {
    "id": "70",
    "pid": "5",
    "name": "陇南",
    "ad_name": "陇南市"
  }, {
    "id": "71",
    "pid": "5",
    "name": "平凉",
    "ad_name": "平凉市"
  }, {
    "id": "72",
    "pid": "5",
    "name": "庆阳",
    "ad_name": "庆阳市"
  }, {
    "id": "73",
    "pid": "5",
    "name": "天水",
    "ad_name": "天水市"
  }, {
    "id": "74",
    "pid": "5",
    "name": "武威",
    "ad_name": "武威市"
  }, {
    "id": "75",
    "pid": "5",
    "name": "张掖",
    "ad_name": "张掖市"
  }]
}, {
  "id": "6",
  "pid": "1",
  "name": "广东",
  "ad_name": "广东省",
  "has_children": 1,
  "children": [{
    "id": "6",
    "pid": "1",
    "name": "广东",
    "ad_name": "广东省"
  }, {
    "id": "76",
    "pid": "6",
    "name": "广州",
    "ad_name": "广州市"
  }, {
    "id": "77",
    "pid": "6",
    "name": "深圳",
    "ad_name": "深圳市"
  }, {
    "id": "78",
    "pid": "6",
    "name": "潮州",
    "ad_name": "潮州市"
  }, {
    "id": "79",
    "pid": "6",
    "name": "东莞",
    "ad_name": "东莞市"
  }, {
    "id": "80",
    "pid": "6",
    "name": "佛山",
    "ad_name": "佛山市"
  }, {
    "id": "81",
    "pid": "6",
    "name": "河源",
    "ad_name": "河源市"
  }, {
    "id": "82",
    "pid": "6",
    "name": "惠州",
    "ad_name": "惠州市"
  }, {
    "id": "83",
    "pid": "6",
    "name": "江门",
    "ad_name": "江门市"
  }, {
    "id": "84",
    "pid": "6",
    "name": "揭阳",
    "ad_name": "揭阳市"
  }, {
    "id": "85",
    "pid": "6",
    "name": "茂名",
    "ad_name": "茂名市"
  }, {
    "id": "86",
    "pid": "6",
    "name": "梅州",
    "ad_name": "梅州市"
  }, {
    "id": "87",
    "pid": "6",
    "name": "清远",
    "ad_name": "清远市"
  }, {
    "id": "88",
    "pid": "6",
    "name": "汕头",
    "ad_name": "汕头市"
  }, {
    "id": "89",
    "pid": "6",
    "name": "汕尾",
    "ad_name": "汕尾市"
  }, {
    "id": "90",
    "pid": "6",
    "name": "韶关",
    "ad_name": "韶关市"
  }, {
    "id": "91",
    "pid": "6",
    "name": "阳江",
    "ad_name": "阳江市"
  }, {
    "id": "92",
    "pid": "6",
    "name": "云浮",
    "ad_name": "云浮市"
  }, {
    "id": "93",
    "pid": "6",
    "name": "湛江",
    "ad_name": "湛江市"
  }, {
    "id": "94",
    "pid": "6",
    "name": "肇庆",
    "ad_name": "肇庆市"
  }, {
    "id": "95",
    "pid": "6",
    "name": "中山",
    "ad_name": "中山市"
  }, {
    "id": "96",
    "pid": "6",
    "name": "珠海",
    "ad_name": "珠海市"
  }]
}, {
  "id": "7",
  "pid": "1",
  "name": "广西",
  "ad_name": "广西壮族自治区",
  "has_children": 1,
  "children": [{
    "id": "7",
    "pid": "1",
    "name": "广西",
    "ad_name": "广西壮族自治区"
  }, {
    "id": "97",
    "pid": "7",
    "name": "南宁",
    "ad_name": "南宁市"
  }, {
    "id": "98",
    "pid": "7",
    "name": "桂林",
    "ad_name": "桂林市"
  }, {
    "id": "99",
    "pid": "7",
    "name": "百色",
    "ad_name": "百色市"
  }, {
    "id": "100",
    "pid": "7",
    "name": "北海",
    "ad_name": "北海市"
  }, {
    "id": "101",
    "pid": "7",
    "name": "崇左",
    "ad_name": "崇左市"
  }, {
    "id": "102",
    "pid": "7",
    "name": "防城港",
    "ad_name": "防城港市"
  }, {
    "id": "103",
    "pid": "7",
    "name": "贵港",
    "ad_name": "贵港市"
  }, {
    "id": "104",
    "pid": "7",
    "name": "河池",
    "ad_name": "河池市"
  }, {
    "id": "105",
    "pid": "7",
    "name": "贺州",
    "ad_name": "贺州市"
  }, {
    "id": "106",
    "pid": "7",
    "name": "来宾",
    "ad_name": "来宾市"
  }, {
    "id": "107",
    "pid": "7",
    "name": "柳州",
    "ad_name": "柳州市"
  }, {
    "id": "108",
    "pid": "7",
    "name": "钦州",
    "ad_name": "钦州市"
  }, {
    "id": "109",
    "pid": "7",
    "name": "梧州",
    "ad_name": "梧州市"
  }, {
    "id": "110",
    "pid": "7",
    "name": "玉林",
    "ad_name": "玉林市"
  }]
}, {
  "id": "8",
  "pid": "1",
  "name": "贵州",
  "ad_name": "贵州省",
  "has_children": 1,
  "children": [{
    "id": "8",
    "pid": "1",
    "name": "贵州",
    "ad_name": "贵州省"
  }, {
    "id": "111",
    "pid": "8",
    "name": "贵阳",
    "ad_name": "贵阳市"
  }, {
    "id": "112",
    "pid": "8",
    "name": "安顺",
    "ad_name": "安顺市"
  }, {
    "id": "113",
    "pid": "8",
    "name": "毕节",
    "ad_name": "毕节市"
  }, {
    "id": "114",
    "pid": "8",
    "name": "六盘水",
    "ad_name": "六盘水市"
  }, {
    "id": "115",
    "pid": "8",
    "name": "黔东南",
    "ad_name": "黔东南苗族侗族自治州"
  }, {
    "id": "116",
    "pid": "8",
    "name": "黔南",
    "ad_name": "黔南布依族苗族自治州"
  }, {
    "id": "117",
    "pid": "8",
    "name": "黔西南",
    "ad_name": "黔西南布依族苗族自治州"
  }, {
    "id": "118",
    "pid": "8",
    "name": "铜仁",
    "ad_name": "铜仁市"
  }, {
    "id": "119",
    "pid": "8",
    "name": "遵义",
    "ad_name": "遵义市"
  }]
}, {
  "id": "9",
  "pid": "1",
  "name": "海南",
  "ad_name": "海南省",
  "has_children": 1,
  "children": [{
    "id": "9",
    "pid": "1",
    "name": "海南",
    "ad_name": "海南省"
  }, {
    "id": "120",
    "pid": "9",
    "name": "海口",
    "ad_name": "海口市"
  }, {
    "id": "121",
    "pid": "9",
    "name": "三亚",
    "ad_name": "三亚市"
  }, {
    "id": "122",
    "pid": "9",
    "name": "白沙",
    "ad_name": "白沙黎族自治县"
  }, {
    "id": "123",
    "pid": "9",
    "name": "保亭",
    "ad_name": "保亭黎族苗族自治县"
  }, {
    "id": "124",
    "pid": "9",
    "name": "昌江",
    "ad_name": "昌江"
  }, {
    "id": "125",
    "pid": "9",
    "name": "澄迈县",
    "ad_name": "澄迈县"
  }, {
    "id": "126",
    "pid": "9",
    "name": "定安县",
    "ad_name": "定安县"
  }, {
    "id": "127",
    "pid": "9",
    "name": "东方",
    "ad_name": "东方市"
  }, {
    "id": "128",
    "pid": "9",
    "name": "乐东",
    "ad_name": "乐东黎族自治县"
  }, {
    "id": "129",
    "pid": "9",
    "name": "临高县",
    "ad_name": "临高县"
  }, {
    "id": "130",
    "pid": "9",
    "name": "陵水",
    "ad_name": "陵水黎族自治县"
  }, {
    "id": "131",
    "pid": "9",
    "name": "琼海",
    "ad_name": "琼海市"
  }, {
    "id": "132",
    "pid": "9",
    "name": "琼中",
    "ad_name": "琼中黎族苗族自治县"
  }, {
    "id": "133",
    "pid": "9",
    "name": "屯昌县",
    "ad_name": "屯昌县"
  }, {
    "id": "134",
    "pid": "9",
    "name": "万宁",
    "ad_name": "万宁市"
  }, {
    "id": "135",
    "pid": "9",
    "name": "文昌",
    "ad_name": "文昌市"
  }, {
    "id": "136",
    "pid": "9",
    "name": "五指山",
    "ad_name": "五指山市"
  }, {
    "id": "137",
    "pid": "9",
    "name": "儋州",
    "ad_name": "儋州市"
  }]
}, {
  "id": "10",
  "pid": "1",
  "name": "河北",
  "ad_name": "河北省",
  "has_children": 1,
  "children": [{
    "id": "10",
    "pid": "1",
    "name": "河北",
    "ad_name": "河北省"
  }, {
    "id": "138",
    "pid": "10",
    "name": "石家庄",
    "ad_name": "石家庄市"
  }, {
    "id": "139",
    "pid": "10",
    "name": "保定",
    "ad_name": "保定市"
  }, {
    "id": "140",
    "pid": "10",
    "name": "沧州",
    "ad_name": "沧州市"
  }, {
    "id": "141",
    "pid": "10",
    "name": "承德",
    "ad_name": "承德市"
  }, {
    "id": "142",
    "pid": "10",
    "name": "邯郸",
    "ad_name": "邯郸市"
  }, {
    "id": "143",
    "pid": "10",
    "name": "衡水",
    "ad_name": "衡水市"
  }, {
    "id": "144",
    "pid": "10",
    "name": "廊坊",
    "ad_name": "廊坊市"
  }, {
    "id": "145",
    "pid": "10",
    "name": "秦皇岛",
    "ad_name": "秦皇岛市"
  }, {
    "id": "146",
    "pid": "10",
    "name": "唐山",
    "ad_name": "唐山市"
  }, {
    "id": "147",
    "pid": "10",
    "name": "邢台",
    "ad_name": "邢台市"
  }, {
    "id": "148",
    "pid": "10",
    "name": "张家口",
    "ad_name": "张家口市"
  }]
}, {
  "id": "11",
  "pid": "1",
  "name": "河南",
  "ad_name": "河南省",
  "has_children": 1,
  "children": [{
    "id": "11",
    "pid": "1",
    "name": "河南",
    "ad_name": "河南省"
  }, {
    "id": "149",
    "pid": "11",
    "name": "郑州",
    "ad_name": "郑州市"
  }, {
    "id": "150",
    "pid": "11",
    "name": "洛阳",
    "ad_name": "洛阳市"
  }, {
    "id": "151",
    "pid": "11",
    "name": "开封",
    "ad_name": "开封市"
  }, {
    "id": "152",
    "pid": "11",
    "name": "安阳",
    "ad_name": "安阳市"
  }, {
    "id": "153",
    "pid": "11",
    "name": "鹤壁",
    "ad_name": "鹤壁市"
  }, {
    "id": "154",
    "pid": "11",
    "name": "济源",
    "ad_name": "济源市"
  }, {
    "id": "155",
    "pid": "11",
    "name": "焦作",
    "ad_name": "焦作市"
  }, {
    "id": "156",
    "pid": "11",
    "name": "南阳",
    "ad_name": "南阳市"
  }, {
    "id": "157",
    "pid": "11",
    "name": "平顶山",
    "ad_name": "平顶山市"
  }, {
    "id": "158",
    "pid": "11",
    "name": "三门峡",
    "ad_name": "三门峡市"
  }, {
    "id": "159",
    "pid": "11",
    "name": "商丘",
    "ad_name": "商丘市"
  }, {
    "id": "160",
    "pid": "11",
    "name": "新乡",
    "ad_name": "新乡市"
  }, {
    "id": "161",
    "pid": "11",
    "name": "信阳",
    "ad_name": "信阳市"
  }, {
    "id": "162",
    "pid": "11",
    "name": "许昌",
    "ad_name": "许昌市"
  }, {
    "id": "163",
    "pid": "11",
    "name": "周口",
    "ad_name": "周口市"
  }, {
    "id": "164",
    "pid": "11",
    "name": "驻马店",
    "ad_name": "驻马店市"
  }, {
    "id": "165",
    "pid": "11",
    "name": "漯河",
    "ad_name": "漯河市"
  }, {
    "id": "166",
    "pid": "11",
    "name": "濮阳",
    "ad_name": "濮阳市"
  }]
}, {
  "id": "12",
  "pid": "1",
  "name": "黑龙江",
  "ad_name": "黑龙江省",
  "has_children": 1,
  "children": [{
    "id": "12",
    "pid": "1",
    "name": "黑龙江",
    "ad_name": "黑龙江省"
  }, {
    "id": "167",
    "pid": "12",
    "name": "哈尔滨",
    "ad_name": "哈尔滨市"
  }, {
    "id": "168",
    "pid": "12",
    "name": "大庆",
    "ad_name": "大庆市"
  }, {
    "id": "169",
    "pid": "12",
    "name": "大兴安岭",
    "ad_name": "大兴安岭地区"
  }, {
    "id": "170",
    "pid": "12",
    "name": "鹤岗",
    "ad_name": "鹤岗市"
  }, {
    "id": "171",
    "pid": "12",
    "name": "黑河",
    "ad_name": "黑河市"
  }, {
    "id": "172",
    "pid": "12",
    "name": "鸡西",
    "ad_name": "鸡西市"
  }, {
    "id": "173",
    "pid": "12",
    "name": "佳木斯",
    "ad_name": "佳木斯市"
  }, {
    "id": "174",
    "pid": "12",
    "name": "牡丹江",
    "ad_name": "牡丹江市"
  }, {
    "id": "175",
    "pid": "12",
    "name": "七台河",
    "ad_name": "七台河市"
  }, {
    "id": "176",
    "pid": "12",
    "name": "齐齐哈尔",
    "ad_name": "齐齐哈尔市"
  }, {
    "id": "177",
    "pid": "12",
    "name": "双鸭山",
    "ad_name": "双鸭山市"
  }, {
    "id": "178",
    "pid": "12",
    "name": "绥化",
    "ad_name": "绥化市"
  }, {
    "id": "179",
    "pid": "12",
    "name": "伊春",
    "ad_name": "伊春市"
  }]
}, {
  "id": "13",
  "pid": "1",
  "name": "湖北",
  "ad_name": "湖北省",
  "has_children": 1,
  "children": [{
    "id": "13",
    "pid": "1",
    "name": "湖北",
    "ad_name": "湖北省"
  }, {
    "id": "180",
    "pid": "13",
    "name": "武汉",
    "ad_name": "武汉市"
  }, {
    "id": "181",
    "pid": "13",
    "name": "仙桃",
    "ad_name": "仙桃市"
  }, {
    "id": "182",
    "pid": "13",
    "name": "鄂州",
    "ad_name": "鄂州市"
  }, {
    "id": "183",
    "pid": "13",
    "name": "黄冈",
    "ad_name": "黄冈市"
  }, {
    "id": "184",
    "pid": "13",
    "name": "黄石",
    "ad_name": "黄石市"
  }, {
    "id": "185",
    "pid": "13",
    "name": "荆门",
    "ad_name": "荆门市"
  }, {
    "id": "186",
    "pid": "13",
    "name": "荆州",
    "ad_name": "荆州市"
  }, {
    "id": "187",
    "pid": "13",
    "name": "潜江",
    "ad_name": "潜江市"
  }, {
    "id": "188",
    "pid": "13",
    "name": "神农架林区",
    "ad_name": "神农架林区"
  }, {
    "id": "189",
    "pid": "13",
    "name": "十堰",
    "ad_name": "十堰市"
  }, {
    "id": "190",
    "pid": "13",
    "name": "随州",
    "ad_name": "随州市"
  }, {
    "id": "191",
    "pid": "13",
    "name": "天门",
    "ad_name": "天门市"
  }, {
    "id": "192",
    "pid": "13",
    "name": "咸宁",
    "ad_name": "咸宁市"
  }, {
    "id": "193",
    "pid": "13",
    "name": "襄阳",
    "ad_name": "襄阳市"
  }, {
    "id": "194",
    "pid": "13",
    "name": "孝感",
    "ad_name": "孝感市"
  }, {
    "id": "195",
    "pid": "13",
    "name": "宜昌",
    "ad_name": "宜昌市"
  }, {
    "id": "196",
    "pid": "13",
    "name": "恩施",
    "ad_name": "恩施"
  }]
}, {
  "id": "14",
  "pid": "1",
  "name": "湖南",
  "ad_name": "湖南省",
  "has_children": 1,
  "children": [{
    "id": "14",
    "pid": "1",
    "name": "湖南",
    "ad_name": "湖南省"
  }, {
    "id": "197",
    "pid": "14",
    "name": "长沙",
    "ad_name": "长沙市"
  }, {
    "id": "198",
    "pid": "14",
    "name": "张家界",
    "ad_name": "张家界市"
  }, {
    "id": "199",
    "pid": "14",
    "name": "常德",
    "ad_name": "常德市"
  }, {
    "id": "200",
    "pid": "14",
    "name": "郴州",
    "ad_name": "郴州市"
  }, {
    "id": "201",
    "pid": "14",
    "name": "衡阳",
    "ad_name": "衡阳市"
  }, {
    "id": "202",
    "pid": "14",
    "name": "怀化",
    "ad_name": "怀化市"
  }, {
    "id": "203",
    "pid": "14",
    "name": "娄底",
    "ad_name": "娄底市"
  }, {
    "id": "204",
    "pid": "14",
    "name": "邵阳",
    "ad_name": "邵阳市"
  }, {
    "id": "205",
    "pid": "14",
    "name": "湘潭",
    "ad_name": "湘潭市"
  }, {
    "id": "206",
    "pid": "14",
    "name": "湘西",
    "ad_name": "湘西土家族苗族自治州"
  }, {
    "id": "207",
    "pid": "14",
    "name": "益阳",
    "ad_name": "益阳市"
  }, {
    "id": "208",
    "pid": "14",
    "name": "永州",
    "ad_name": "永州市"
  }, {
    "id": "209",
    "pid": "14",
    "name": "岳阳",
    "ad_name": "岳阳市"
  }, {
    "id": "210",
    "pid": "14",
    "name": "株洲",
    "ad_name": "株洲市"
  }]
}, {
  "id": "15",
  "pid": "1",
  "name": "吉林",
  "ad_name": "吉林省",
  "has_children": 1,
  "children": [{
    "id": "15",
    "pid": "1",
    "name": "吉林",
    "ad_name": "吉林省"
  }, {
    "id": "211",
    "pid": "15",
    "name": "长春",
    "ad_name": "长春市"
  }, {
    "id": "212",
    "pid": "15",
    "name": "吉林",
    "ad_name": "吉林市"
  }, {
    "id": "213",
    "pid": "15",
    "name": "白城",
    "ad_name": "白城市"
  }, {
    "id": "214",
    "pid": "15",
    "name": "白山",
    "ad_name": "白山市"
  }, {
    "id": "215",
    "pid": "15",
    "name": "辽源",
    "ad_name": "辽源市"
  }, {
    "id": "216",
    "pid": "15",
    "name": "四平",
    "ad_name": "四平市"
  }, {
    "id": "217",
    "pid": "15",
    "name": "松原",
    "ad_name": "松原市"
  }, {
    "id": "218",
    "pid": "15",
    "name": "通化",
    "ad_name": "通化市"
  }, {
    "id": "219",
    "pid": "15",
    "name": "延边",
    "ad_name": "延边朝鲜族自治州"
  }]
}, {
  "id": "16",
  "pid": "1",
  "name": "江苏",
  "ad_name": "江苏省",
  "has_children": 1,
  "children": [{
    "id": "16",
    "pid": "1",
    "name": "江苏",
    "ad_name": "江苏省"
  }, {
    "id": "220",
    "pid": "16",
    "name": "南京",
    "ad_name": "南京市"
  }, {
    "id": "221",
    "pid": "16",
    "name": "苏州",
    "ad_name": "苏州市"
  }, {
    "id": "222",
    "pid": "16",
    "name": "无锡",
    "ad_name": "无锡市"
  }, {
    "id": "223",
    "pid": "16",
    "name": "常州",
    "ad_name": "常州市"
  }, {
    "id": "224",
    "pid": "16",
    "name": "淮安",
    "ad_name": "淮安市"
  }, {
    "id": "225",
    "pid": "16",
    "name": "连云港",
    "ad_name": "连云港市"
  }, {
    "id": "226",
    "pid": "16",
    "name": "南通",
    "ad_name": "南通市"
  }, {
    "id": "227",
    "pid": "16",
    "name": "宿迁",
    "ad_name": "宿迁市"
  }, {
    "id": "228",
    "pid": "16",
    "name": "泰州",
    "ad_name": "泰州市"
  }, {
    "id": "229",
    "pid": "16",
    "name": "徐州",
    "ad_name": "徐州市"
  }, {
    "id": "230",
    "pid": "16",
    "name": "盐城",
    "ad_name": "盐城市"
  }, {
    "id": "231",
    "pid": "16",
    "name": "扬州",
    "ad_name": "扬州市"
  }, {
    "id": "232",
    "pid": "16",
    "name": "镇江",
    "ad_name": "镇江市"
  }]
}, {
  "id": "17",
  "pid": "1",
  "name": "江西",
  "ad_name": "江西省",
  "has_children": 1,
  "children": [{
    "id": "17",
    "pid": "1",
    "name": "江西",
    "ad_name": "江西省"
  }, {
    "id": "233",
    "pid": "17",
    "name": "南昌",
    "ad_name": "南昌市"
  }, {
    "id": "234",
    "pid": "17",
    "name": "抚州",
    "ad_name": "抚州市"
  }, {
    "id": "235",
    "pid": "17",
    "name": "赣州",
    "ad_name": "赣州市"
  }, {
    "id": "236",
    "pid": "17",
    "name": "吉安",
    "ad_name": "吉安市"
  }, {
    "id": "237",
    "pid": "17",
    "name": "景德镇",
    "ad_name": "景德镇市"
  }, {
    "id": "238",
    "pid": "17",
    "name": "九江",
    "ad_name": "九江市"
  }, {
    "id": "239",
    "pid": "17",
    "name": "萍乡",
    "ad_name": "萍乡市"
  }, {
    "id": "240",
    "pid": "17",
    "name": "上饶",
    "ad_name": "上饶市"
  }, {
    "id": "241",
    "pid": "17",
    "name": "新余",
    "ad_name": "新余市"
  }, {
    "id": "242",
    "pid": "17",
    "name": "宜春",
    "ad_name": "宜春市"
  }, {
    "id": "243",
    "pid": "17",
    "name": "鹰潭",
    "ad_name": "鹰潭市"
  }]
}, {
  "id": "18",
  "pid": "1",
  "name": "辽宁",
  "ad_name": "辽宁省",
  "has_children": 1,
  "children": [{
    "id": "18",
    "pid": "1",
    "name": "辽宁",
    "ad_name": "辽宁省"
  }, {
    "id": "244",
    "pid": "18",
    "name": "沈阳",
    "ad_name": "沈阳市"
  }, {
    "id": "245",
    "pid": "18",
    "name": "大连",
    "ad_name": "大连市"
  }, {
    "id": "246",
    "pid": "18",
    "name": "鞍山",
    "ad_name": "鞍山市"
  }, {
    "id": "247",
    "pid": "18",
    "name": "本溪",
    "ad_name": "本溪市"
  }, {
    "id": "248",
    "pid": "18",
    "name": "朝阳",
    "ad_name": "朝阳市"
  }, {
    "id": "249",
    "pid": "18",
    "name": "丹东",
    "ad_name": "丹东市"
  }, {
    "id": "250",
    "pid": "18",
    "name": "抚顺",
    "ad_name": "抚顺市"
  }, {
    "id": "251",
    "pid": "18",
    "name": "阜新",
    "ad_name": "阜新市"
  }, {
    "id": "252",
    "pid": "18",
    "name": "葫芦岛",
    "ad_name": "葫芦岛市"
  }, {
    "id": "253",
    "pid": "18",
    "name": "锦州",
    "ad_name": "锦州市"
  }, {
    "id": "254",
    "pid": "18",
    "name": "辽阳",
    "ad_name": "辽阳市"
  }, {
    "id": "255",
    "pid": "18",
    "name": "盘锦",
    "ad_name": "盘锦市"
  }, {
    "id": "256",
    "pid": "18",
    "name": "铁岭",
    "ad_name": "铁岭市"
  }, {
    "id": "257",
    "pid": "18",
    "name": "营口",
    "ad_name": "营口市"
  }]
}, {
  "id": "19",
  "pid": "1",
  "name": "内蒙古",
  "ad_name": "内蒙古自治区",
  "has_children": 1,
  "children": [{
    "id": "19",
    "pid": "1",
    "name": "内蒙古",
    "ad_name": "内蒙古自治区"
  }, {
    "id": "258",
    "pid": "19",
    "name": "呼和浩特",
    "ad_name": "呼和浩特市"
  }, {
    "id": "259",
    "pid": "19",
    "name": "阿拉善盟",
    "ad_name": "阿拉善盟"
  }, {
    "id": "260",
    "pid": "19",
    "name": "巴彦淖尔盟",
    "ad_name": "巴彦淖尔市"
  }, {
    "id": "261",
    "pid": "19",
    "name": "包头",
    "ad_name": "包头市"
  }, {
    "id": "262",
    "pid": "19",
    "name": "赤峰",
    "ad_name": "赤峰市"
  }, {
    "id": "263",
    "pid": "19",
    "name": "鄂尔多斯",
    "ad_name": "鄂尔多斯市"
  }, {
    "id": "264",
    "pid": "19",
    "name": "呼伦贝尔",
    "ad_name": "呼伦贝尔市"
  }, {
    "id": "265",
    "pid": "19",
    "name": "通辽",
    "ad_name": "通辽市"
  }, {
    "id": "266",
    "pid": "19",
    "name": "乌海",
    "ad_name": "乌海市"
  }, {
    "id": "267",
    "pid": "19",
    "name": "乌兰察布市",
    "ad_name": "乌兰察布市"
  }, {
    "id": "268",
    "pid": "19",
    "name": "锡林郭勒盟",
    "ad_name": "锡林郭勒盟"
  }, {
    "id": "269",
    "pid": "19",
    "name": "兴安盟",
    "ad_name": "兴安盟"
  }]
}, {
  "id": "20",
  "pid": "1",
  "name": "宁夏",
  "ad_name": "宁夏回族自治区",
  "has_children": 1,
  "children": [{
    "id": "20",
    "pid": "1",
    "name": "宁夏",
    "ad_name": "宁夏回族自治区"
  }, {
    "id": "270",
    "pid": "20",
    "name": "银川",
    "ad_name": "银川市"
  }, {
    "id": "271",
    "pid": "20",
    "name": "固原",
    "ad_name": "固原市"
  }, {
    "id": "272",
    "pid": "20",
    "name": "石嘴山",
    "ad_name": "石嘴山市"
  }, {
    "id": "273",
    "pid": "20",
    "name": "吴忠",
    "ad_name": "吴忠市"
  }, {
    "id": "274",
    "pid": "20",
    "name": "中卫",
    "ad_name": "中卫市"
  }]
}, {
  "id": "21",
  "pid": "1",
  "name": "青海",
  "ad_name": "青海省",
  "has_children": 1,
  "children": [{
    "id": "21",
    "pid": "1",
    "name": "青海",
    "ad_name": "青海省"
  }, {
    "id": "275",
    "pid": "21",
    "name": "西宁",
    "ad_name": "西宁市"
  }, {
    "id": "276",
    "pid": "21",
    "name": "果洛",
    "ad_name": "果洛藏族自治州"
  }, {
    "id": "277",
    "pid": "21",
    "name": "海北",
    "ad_name": "海北藏族自治州"
  }, {
    "id": "278",
    "pid": "21",
    "name": "海东",
    "ad_name": "海东市"
  }, {
    "id": "279",
    "pid": "21",
    "name": "海南",
    "ad_name": "海南藏族自治州"
  }, {
    "id": "280",
    "pid": "21",
    "name": "海西",
    "ad_name": "海西蒙古族藏族自治州"
  }, {
    "id": "281",
    "pid": "21",
    "name": "黄南",
    "ad_name": "黄南藏族自治州"
  }, {
    "id": "282",
    "pid": "21",
    "name": "玉树",
    "ad_name": "玉树"
  }]
}, {
  "id": "22",
  "pid": "1",
  "name": "山东",
  "ad_name": "山东省",
  "has_children": 1,
  "children": [{
    "id": "22",
    "pid": "1",
    "name": "山东",
    "ad_name": "山东省"
  }, {
    "id": "283",
    "pid": "22",
    "name": "济南",
    "ad_name": "济南市"
  }, {
    "id": "284",
    "pid": "22",
    "name": "青岛",
    "ad_name": "青岛市"
  }, {
    "id": "285",
    "pid": "22",
    "name": "滨州",
    "ad_name": "滨州市"
  }, {
    "id": "286",
    "pid": "22",
    "name": "德州",
    "ad_name": "德州市"
  }, {
    "id": "287",
    "pid": "22",
    "name": "东营",
    "ad_name": "东营市"
  }, {
    "id": "288",
    "pid": "22",
    "name": "菏泽",
    "ad_name": "菏泽市"
  }, {
    "id": "289",
    "pid": "22",
    "name": "济宁",
    "ad_name": "济宁市"
  }, {
    "id": "291",
    "pid": "22",
    "name": "聊城",
    "ad_name": "聊城市"
  }, {
    "id": "292",
    "pid": "22",
    "name": "临沂",
    "ad_name": "临沂市"
  }, {
    "id": "293",
    "pid": "22",
    "name": "日照",
    "ad_name": "日照市"
  }, {
    "id": "294",
    "pid": "22",
    "name": "泰安",
    "ad_name": "泰安市"
  }, {
    "id": "295",
    "pid": "22",
    "name": "威海",
    "ad_name": "威海市"
  }, {
    "id": "296",
    "pid": "22",
    "name": "潍坊",
    "ad_name": "潍坊市"
  }, {
    "id": "297",
    "pid": "22",
    "name": "烟台",
    "ad_name": "烟台市"
  }, {
    "id": "298",
    "pid": "22",
    "name": "枣庄",
    "ad_name": "枣庄市"
  }, {
    "id": "299",
    "pid": "22",
    "name": "淄博",
    "ad_name": "淄博市"
  }]
}, {
  "id": "23",
  "pid": "1",
  "name": "山西",
  "ad_name": "山西省",
  "has_children": 1,
  "children": [{
    "id": "23",
    "pid": "1",
    "name": "山西",
    "ad_name": "山西省"
  }, {
    "id": "300",
    "pid": "23",
    "name": "太原",
    "ad_name": "太原市"
  }, {
    "id": "301",
    "pid": "23",
    "name": "长治",
    "ad_name": "长治市"
  }, {
    "id": "302",
    "pid": "23",
    "name": "大同",
    "ad_name": "大同市"
  }, {
    "id": "303",
    "pid": "23",
    "name": "晋城",
    "ad_name": "晋城市"
  }, {
    "id": "304",
    "pid": "23",
    "name": "晋中",
    "ad_name": "晋中市"
  }, {
    "id": "305",
    "pid": "23",
    "name": "临汾",
    "ad_name": "临汾市"
  }, {
    "id": "306",
    "pid": "23",
    "name": "吕梁",
    "ad_name": "吕梁市"
  }, {
    "id": "307",
    "pid": "23",
    "name": "朔州",
    "ad_name": "朔州市"
  }, {
    "id": "308",
    "pid": "23",
    "name": "忻州",
    "ad_name": "忻州市"
  }, {
    "id": "309",
    "pid": "23",
    "name": "阳泉",
    "ad_name": "阳泉市"
  }, {
    "id": "310",
    "pid": "23",
    "name": "运城",
    "ad_name": "运城市"
  }]
}, {
  "id": "24",
  "pid": "1",
  "name": "陕西",
  "ad_name": "陕西省",
  "has_children": 1,
  "children": [{
    "id": "24",
    "pid": "1",
    "name": "陕西",
    "ad_name": "陕西省"
  }, {
    "id": "311",
    "pid": "24",
    "name": "西安",
    "ad_name": "西安市"
  }, {
    "id": "312",
    "pid": "24",
    "name": "安康",
    "ad_name": "安康市"
  }, {
    "id": "313",
    "pid": "24",
    "name": "宝鸡",
    "ad_name": "宝鸡市"
  }, {
    "id": "314",
    "pid": "24",
    "name": "汉中",
    "ad_name": "汉中市"
  }, {
    "id": "315",
    "pid": "24",
    "name": "商洛",
    "ad_name": "商洛市"
  }, {
    "id": "316",
    "pid": "24",
    "name": "铜川",
    "ad_name": "铜川市"
  }, {
    "id": "317",
    "pid": "24",
    "name": "渭南",
    "ad_name": "渭南市"
  }, {
    "id": "318",
    "pid": "24",
    "name": "咸阳",
    "ad_name": "咸阳市"
  }, {
    "id": "319",
    "pid": "24",
    "name": "延安",
    "ad_name": "延安市"
  }, {
    "id": "320",
    "pid": "24",
    "name": "榆林",
    "ad_name": "榆林市"
  }]
}, {
  "id": "25",
  "pid": "1",
  "name": "上海",
  "ad_name": "上海市",
  "has_children": 0,
  "children": []
}, {
  "id": "26",
  "pid": "1",
  "name": "四川",
  "ad_name": "四川省",
  "has_children": 1,
  "children": [{
    "id": "26",
    "pid": "1",
    "name": "四川",
    "ad_name": "四川省"
  }, {
    "id": "322",
    "pid": "26",
    "name": "成都",
    "ad_name": "成都市"
  }, {
    "id": "323",
    "pid": "26",
    "name": "绵阳",
    "ad_name": "绵阳市"
  }, {
    "id": "324",
    "pid": "26",
    "name": "阿坝",
    "ad_name": "阿坝藏族羌族自治州"
  }, {
    "id": "325",
    "pid": "26",
    "name": "巴中",
    "ad_name": "巴中市"
  }, {
    "id": "326",
    "pid": "26",
    "name": "达州",
    "ad_name": "达州市"
  }, {
    "id": "327",
    "pid": "26",
    "name": "德阳",
    "ad_name": "德阳市"
  }, {
    "id": "328",
    "pid": "26",
    "name": "甘孜",
    "ad_name": "甘孜藏族自治州"
  }, {
    "id": "329",
    "pid": "26",
    "name": "广安",
    "ad_name": "广安市"
  }, {
    "id": "330",
    "pid": "26",
    "name": "广元",
    "ad_name": "广元市"
  }, {
    "id": "331",
    "pid": "26",
    "name": "乐山",
    "ad_name": "乐山市"
  }, {
    "id": "332",
    "pid": "26",
    "name": "凉山",
    "ad_name": "凉山彝族自治州"
  }, {
    "id": "333",
    "pid": "26",
    "name": "眉山",
    "ad_name": "眉山市"
  }, {
    "id": "334",
    "pid": "26",
    "name": "南充",
    "ad_name": "南充市"
  }, {
    "id": "335",
    "pid": "26",
    "name": "内江",
    "ad_name": "内江市"
  }, {
    "id": "336",
    "pid": "26",
    "name": "攀枝花",
    "ad_name": "攀枝花市"
  }, {
    "id": "337",
    "pid": "26",
    "name": "遂宁",
    "ad_name": "遂宁市"
  }, {
    "id": "338",
    "pid": "26",
    "name": "雅安",
    "ad_name": "雅安市"
  }, {
    "id": "339",
    "pid": "26",
    "name": "宜宾",
    "ad_name": "宜宾市"
  }, {
    "id": "340",
    "pid": "26",
    "name": "资阳",
    "ad_name": "资阳市"
  }, {
    "id": "341",
    "pid": "26",
    "name": "自贡",
    "ad_name": "自贡市"
  }, {
    "id": "342",
    "pid": "26",
    "name": "泸州",
    "ad_name": "泸州市"
  }]
}, {
  "id": "27",
  "pid": "1",
  "name": "天津",
  "ad_name": "天津市",
  "has_children": 0,
  "children": []
}, {
  "id": "28",
  "pid": "1",
  "name": "西藏",
  "ad_name": "西藏自治区",
  "has_children": 1,
  "children": [{
    "id": "28",
    "pid": "1",
    "name": "西藏",
    "ad_name": "西藏自治区"
  }, {
    "id": "344",
    "pid": "28",
    "name": "拉萨",
    "ad_name": "拉萨市"
  }, {
    "id": "345",
    "pid": "28",
    "name": "阿里",
    "ad_name": "阿里地区"
  }, {
    "id": "346",
    "pid": "28",
    "name": "昌都",
    "ad_name": "昌都市"
  }, {
    "id": "347",
    "pid": "28",
    "name": "林芝",
    "ad_name": "林芝市"
  }, {
    "id": "348",
    "pid": "28",
    "name": "那曲",
    "ad_name": "那曲市"
  }, {
    "id": "349",
    "pid": "28",
    "name": "日喀则",
    "ad_name": "日喀则市"
  }, {
    "id": "350",
    "pid": "28",
    "name": "山南",
    "ad_name": "山南市"
  }]
}, {
  "id": "29",
  "pid": "1",
  "name": "新疆",
  "ad_name": "新疆维吾尔自治区",
  "has_children": 1,
  "children": [{
    "id": "29",
    "pid": "1",
    "name": "新疆",
    "ad_name": "新疆维吾尔自治区"
  }, {
    "id": "351",
    "pid": "29",
    "name": "乌鲁木齐",
    "ad_name": "乌鲁木齐市"
  }, {
    "id": "352",
    "pid": "29",
    "name": "阿克苏",
    "ad_name": "阿克苏地区"
  }, {
    "id": "353",
    "pid": "29",
    "name": "阿拉尔",
    "ad_name": "阿拉尔市"
  }, {
    "id": "354",
    "pid": "29",
    "name": "巴音郭楞",
    "ad_name": "巴音郭楞蒙古自治州"
  }, {
    "id": "355",
    "pid": "29",
    "name": "博尔塔拉",
    "ad_name": "博尔塔拉蒙古自治州"
  }, {
    "id": "356",
    "pid": "29",
    "name": "昌吉",
    "ad_name": "昌吉回族自治州"
  }, {
    "id": "357",
    "pid": "29",
    "name": "哈密",
    "ad_name": "哈密市"
  }, {
    "id": "358",
    "pid": "29",
    "name": "和田",
    "ad_name": "和田地区"
  }, {
    "id": "359",
    "pid": "29",
    "name": "喀什",
    "ad_name": "喀什地区"
  }, {
    "id": "360",
    "pid": "29",
    "name": "克拉玛依",
    "ad_name": "克拉玛依市"
  }, {
    "id": "361",
    "pid": "29",
    "name": "克孜勒苏",
    "ad_name": "克孜勒苏柯尔克孜自治州"
  }, {
    "id": "362",
    "pid": "29",
    "name": "石河子",
    "ad_name": "石河子市"
  }, {
    "id": "363",
    "pid": "29",
    "name": "图木舒克",
    "ad_name": "图木舒克市"
  }, {
    "id": "364",
    "pid": "29",
    "name": "吐鲁番",
    "ad_name": "吐鲁番市"
  }, {
    "id": "365",
    "pid": "29",
    "name": "五家渠",
    "ad_name": "五家渠市"
  }, {
    "id": "366",
    "pid": "29",
    "name": "伊犁",
    "ad_name": "伊犁哈萨克自治州"
  }, {
    "id": "6156",
    "pid": "29",
    "name": "塔城地区",
    "ad_name": "塔城地区"
  }, {
    "id": "6157",
    "pid": "29",
    "name": "阿勒泰地区",
    "ad_name": "阿勒泰地区"
  }]
}, {
  "id": "30",
  "pid": "1",
  "name": "云南",
  "ad_name": "云南省",
  "has_children": 1,
  "children": [{
    "id": "30",
    "pid": "1",
    "name": "云南",
    "ad_name": "云南省"
  }, {
    "id": "367",
    "pid": "30",
    "name": "昆明",
    "ad_name": "昆明市"
  }, {
    "id": "368",
    "pid": "30",
    "name": "怒江",
    "ad_name": "怒江"
  }, {
    "id": "369",
    "pid": "30",
    "name": "普洱",
    "ad_name": "普洱市"
  }, {
    "id": "370",
    "pid": "30",
    "name": "丽江",
    "ad_name": "丽江市"
  }, {
    "id": "371",
    "pid": "30",
    "name": "保山",
    "ad_name": "保山市"
  }, {
    "id": "372",
    "pid": "30",
    "name": "楚雄",
    "ad_name": "楚雄彝族自治州"
  }, {
    "id": "373",
    "pid": "30",
    "name": "大理",
    "ad_name": "大理白族自治州"
  }, {
    "id": "374",
    "pid": "30",
    "name": "德宏",
    "ad_name": "德宏傣族景颇族自治州"
  }, {
    "id": "375",
    "pid": "30",
    "name": "迪庆",
    "ad_name": "迪庆藏族自治州"
  }, {
    "id": "376",
    "pid": "30",
    "name": "红河",
    "ad_name": "红河哈尼族彝族自治州"
  }, {
    "id": "377",
    "pid": "30",
    "name": "临沧",
    "ad_name": "临沧市"
  }, {
    "id": "378",
    "pid": "30",
    "name": "曲靖",
    "ad_name": "曲靖市"
  }, {
    "id": "379",
    "pid": "30",
    "name": "文山",
    "ad_name": "文山壮族苗族自治州"
  }, {
    "id": "380",
    "pid": "30",
    "name": "西双版纳",
    "ad_name": "西双版纳傣族自治州"
  }, {
    "id": "381",
    "pid": "30",
    "name": "玉溪",
    "ad_name": "玉溪市"
  }, {
    "id": "382",
    "pid": "30",
    "name": "昭通",
    "ad_name": "昭通市"
  }]
}, {
  "id": "31",
  "pid": "1",
  "name": "浙江",
  "ad_name": "浙江省",
  "has_children": 1,
  "children": [{
    "id": "31",
    "pid": "1",
    "name": "浙江",
    "ad_name": "浙江省"
  }, {
    "id": "383",
    "pid": "31",
    "name": "杭州",
    "ad_name": "杭州市"
  }, {
    "id": "384",
    "pid": "31",
    "name": "湖州",
    "ad_name": "湖州市"
  }, {
    "id": "385",
    "pid": "31",
    "name": "嘉兴",
    "ad_name": "嘉兴市"
  }, {
    "id": "386",
    "pid": "31",
    "name": "金华",
    "ad_name": "金华市"
  }, {
    "id": "387",
    "pid": "31",
    "name": "丽水",
    "ad_name": "丽水市"
  }, {
    "id": "388",
    "pid": "31",
    "name": "宁波",
    "ad_name": "宁波市"
  }, {
    "id": "389",
    "pid": "31",
    "name": "绍兴",
    "ad_name": "绍兴市"
  }, {
    "id": "390",
    "pid": "31",
    "name": "台州",
    "ad_name": "台州市"
  }, {
    "id": "391",
    "pid": "31",
    "name": "温州",
    "ad_name": "温州市"
  }, {
    "id": "392",
    "pid": "31",
    "name": "舟山",
    "ad_name": "舟山市"
  }, {
    "id": "393",
    "pid": "31",
    "name": "衢州",
    "ad_name": "衢州市"
  }]
}, {
  "id": "32",
  "pid": "1",
  "name": "重庆",
  "ad_name": "重庆市",
  "has_children": 0,
  "children": []
}];
// * 默认全国数据
var AREACHINA = exports.AREACHINA = AREAS[0];
// * 默认北京数据
var AREABEIJING = exports.AREABEIJING = AREAS[1];
// * 定位返回省份信息 0返回省份 1返回城市 
function getCityInfo(data) {
  var current = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var len = AREAS.length;
  var flag = false;
  if (!current) {
    var items = AREAS.filter(function (item) {
      return data.province.indexOf(item.name) !== -1;
    });
    if (items.length) {
      return items[0];
    } else {
      //根据城市名称查找
      for (var i = 0; i < len; i++) {
        var item = AREAS[i];
        if (item.has_children) {
          var itemArea = item.children;
          var dlen = itemArea.length;
          for (var k = 0; k < dlen; k++) {
            var d = itemArea[k];
            if (data.city.indexOf(d.name) !== -1) {
              var province = {
                id: item.id,
                pid: item.pid,
                ad_name: item.ad_name,
                name: item.name
              };
              flag = true;
              return province;
              break;
            }
          }
          if (flag) break;
        }
      }
    }
  } else {
    var _items = AREAS.filter(function (item) {
      return data.city.indexOf(item.name) !== -1;
    });
    if (_items.length) return _items[0];
    for (var _i = 0; _i < len; _i++) {
      var _item = AREAS[_i];
      if (_item.has_children) {
        var _itemArea = _item.children;
        var _dlen = _itemArea.length;
        for (var _k = 0; _k < _dlen; _k++) {
          var _d = _itemArea[_k];
          if (data.city.indexOf(_d.name) !== -1) {
            flag = true;
            return _d;
            break;
          }
        }
        if (flag) break;
      }
    }
  }
  // 查询不到内容 直接返回全国/北京
  return current ? AREABEIJING : AREACHINA;
}
// 根据城市名字返回数据内名字
function getLongAreaAdname(title) {
  var area = '北京市';
  if (!title) return area;
  var flag = false;
  for (var i = 1, len = AREAS.length - 1; i < len; i++) {
    if (flag) break;
    if (title.indexOf(AREAS[i].name) !== -1) {
      return AREAS[i].ad_name;
      break;
    }
    if (AREAS[i].has_children) {
      var ChildItems = AREAS[i].children;
      for (var j = 0, clen = 0; j < clen; j++) {
        if (title.indexOf(ChildItems[j].name) !== -1) {
          flag = true;
          return ChildItems[j].ad_name;
          break;
        }
      }
    }
  }
  return area;
}
exports.default = AREAS;

/***/ }),

/***/ "./src/pages/integral/index.scss":
/*!***************************************!*\
  !*** ./src/pages/integral/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/map/resume/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/map/resume/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/map/resume/index.tsx?taro&type=script&parse=PAGE&":
/*!*********************************************************************!*\
  !*** ./src/pages/map/resume/index.tsx?taro&type=script&parse=PAGE& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/map/resume/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/map/resume/index.tsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************!*\
  !*** ./src/pages/map/resume/index.tsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/map/resume/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/realname/index.scss":
/*!***************************************!*\
  !*** ./src/pages/realname/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/realname/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/realname/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/realname/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/realname/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/realname/index.tsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************!*\
  !*** ./src/pages/realname/index.tsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/realname/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/realname/index.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************!*\
  !*** ./src/pages/realname/index.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/realname/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/recruit/publish/index.scss":
/*!**********************************************!*\
  !*** ./src/pages/recruit/publish/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/recruit/publish/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/recruit/publish/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/recruit/publish/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/recruit/publish/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/recruit/publish/index.tsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/recruit/publish/index.tsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/recruit/publish/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/recruit/publish/index.tsx?taro&type=template&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/pages/recruit/publish/index.tsx?taro&type=template&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/recruit/publish/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/topping/index.scss":
/*!**************************************!*\
  !*** ./src/pages/topping/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/topping/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/topping/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/topping/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/topping/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/topping/index.tsx?taro&type=script&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/topping/index.tsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/topping/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/topping/index.tsx?taro&type=template&parse=PAGE&":
/*!********************************************************************!*\
  !*** ./src/pages/topping/index.tsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/topping/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/userinfo/index/index.scss":
/*!*********************************************!*\
  !*** ./src/pages/userinfo/index/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/userinfo/index/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/userinfo/index/index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/userinfo/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/userinfo/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/userinfo/index/index.tsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************!*\
  !*** ./src/pages/userinfo/index/index.tsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/userinfo/index/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/userinfo/index/index.tsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************!*\
  !*** ./src/pages/userinfo/index/index.tsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/userinfo/index/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/utils/api/index.ts":
/*!********************************!*\
  !*** ./src/utils/api/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leavingMessageUrl = exports.resumesComplainUrl = exports.resumesUpdateTopResumeUrl = exports.resumesDoTopV2Url = exports.resumesTopConfigV2Url = exports.resumesEditImgUrl = exports.resumesChangeTopStatusUrl = exports.resumesDoTopUrl = exports.resumesTopConfigUrl = exports.resumesTopAreasUrl = exports.resumesDelProjectUrl = exports.resumesEditEndUrl = exports.resumesIntroduceUrl = exports.resumesGetDataUrl = exports.checkAdcodeUrl = exports.addResumeUrl = exports.resumesProjectUrl = exports.resumesCertificateUrl = exports.delCertificateUrl = exports.jobRecommendListUrl = exports.resumeListUrl = exports.resumeCollectUrl = exports.resumeSupportUrl = exports.resumesGetTelUrl = exports.recommendListUrl = exports.resumeDetailUrl = exports.jobUpdateTopStatusUrl = exports.jobChangeTopAreasUrl = exports.jobGetTopAreasUrl = exports.jobDoTopUrl = exports.jobTopHotAreasUrl = exports.jobTopConfigUrl = exports.jobEndStatusUrl = exports.jobGetTelUrl = exports.jobNoUserInfoUrl = exports.jobInfoUrl = exports.publishComplainUrl = exports.integralUseInfoUrl = exports.integralExpendListsUrl = exports.integralExpendConfigUrl = exports.integralSourceListsUrl = exports.integralSourceConfigUrl = exports.messagesTypeUrl = exports.userMessagesUrl = exports.resumesAddClickLog = exports.resumesSortUrl = exports.newsInfoUrl = exports.newsTypesUrl = exports.newListUrl = exports.helpUrl = exports.feedbackSubmissionUrl = exports.feedbackUrl = exports.requestActionUrl = exports.ResumeCancelCollection = exports.recruitCancelCollection = exports.getCollectionResumeList = exports.getCollectionRecruitList = exports.userChangeRecruitStatus = exports.userGetPublishedRecruitList = exports.userChangePhone = exports.userUpdateName = exports.userChangeAvatar = exports.postUserAddInfo = exports.getIdcardAuthInfo = exports.postUserAuthInfo = exports.getUserAuthInfo = exports.getMemberMsgNumber = exports.getMemberInfo = exports.CheckMineAuthInfo = exports.CheckAuth = exports.GetUsedInfo = exports.GetUserPhoneCode = exports.PublishUsedInfo = exports.GetUsedInfoModel = exports.GetRechargeOrder = exports.GetRechargeOpenid = exports.GetRechargeList = exports.GetUserInviteLink = exports.CheckAdcodeValid = exports.GetAllAreas = exports.PublishRecruitInfo = exports.GetPublisRecruitView = exports.GetIntegralList = exports.GetTabbarMsg = exports.GetListFilterData = exports.GetWechatNotice = exports.GetFleamarketlist = exports.GetResumelist = exports.GetRecruitlist = exports.GetAllListItem = exports.GetBannerNotice = exports.GetUserInfo = exports.GetUserSessionKey = undefined;

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

// 获取用户session_key
var GetUserSessionKey = exports.GetUserSessionKey = _index.REQUESTURL + 'user/user-info/';
// session_key获取用户信息
var GetUserInfo = exports.GetUserInfo = _index.REQUESTURL + 'user/make-user/';
// 获取首页banner以及公告
var GetBannerNotice = exports.GetBannerNotice = _index.REQUESTURL + 'index/index-banner-carousel/';
// 获取首页列表数据
var GetAllListItem = exports.GetAllListItem = _index.REQUESTURL + 'index/new-index-msg/';
// 获取招工列表
var GetRecruitlist = exports.GetRecruitlist = _index.REQUESTURL + 'job/list-new/';
// 获取找活列表
var GetResumelist = exports.GetResumelist = _index.REQUESTURL + 'resumes/index/';
// 获取二手交易列表
var GetFleamarketlist = exports.GetFleamarketlist = _index.REQUESTURL + 'index/info-list/';
// 获取微信号与公告列表
var GetWechatNotice = exports.GetWechatNotice = _index.REQUESTURL + 'index/less-search-data/';
// 获取列表页筛选条件
var GetListFilterData = exports.GetListFilterData = _index.REQUESTURL + 'index/index-search-tree/';
// 获取tabbar未读消息
var GetTabbarMsg = exports.GetTabbarMsg = _index.REQUESTURL + 'member/original-message/';
// 获取积分记录分页数据
var GetIntegralList = exports.GetIntegralList = _index.REQUESTURL + 'integral/integral-record/';
// 初始化发布招工视图
var GetPublisRecruitView = exports.GetPublisRecruitView = _index.REQUESTURL + 'publish/new-job/';
// 发布修改招工信息
var PublishRecruitInfo = exports.PublishRecruitInfo = _index.REQUESTURL + 'publish/save-job/';
// 获取城市数据
var GetAllAreas = exports.GetAllAreas = _index.REQUESTURL + 'index/index-area/';
// 检测adcode是否合法
var CheckAdcodeValid = exports.CheckAdcodeValid = _index.REQUESTURL + 'publish/checking-adcode/';
// 获取用户邀请链接
var GetUserInviteLink = exports.GetUserInviteLink = _index.REQUESTURL + 'index/invite-friends/';
// 获取积分充值选项
var GetRechargeList = exports.GetRechargeList = _index.REQUESTURL + 'integral/integral-price/';
// 用户充值获取openid
var GetRechargeOpenid = exports.GetRechargeOpenid = _index.REQUESTURL + 'get-openid/';
// 用户充值创建订单
var GetRechargeOrder = exports.GetRechargeOrder = _index.REQUESTURL + 'create-order/';
// 用户获取二手交易信息视图
var GetUsedInfoModel = exports.GetUsedInfoModel = _index.REQUESTURL + 'publish/view-message/';
// 用户发布二手交易
var PublishUsedInfo = exports.PublishUsedInfo = _index.REQUESTURL + 'publish/publish-msg/';
// 用户获取手机验证码
var GetUserPhoneCode = exports.GetUserPhoneCode = _index.REQUESTURL + 'index/get-code/';
// 获取二手交易详情
var GetUsedInfo = exports.GetUsedInfo = _index.REQUESTURL + 'fleamarket/fleamarket-info/';
// 用户实名查询
var CheckAuth = exports.CheckAuth = _index.REQUESTURL + 'resume/query-worker/';
// 验证当前用户是否实名
var CheckMineAuthInfo = exports.CheckMineAuthInfo = _index.REQUESTURL + 'resume/auth-status/';
// 初始化会员中心用户信息
var getMemberInfo = exports.getMemberInfo = _index.REQUESTURL + 'user/personal/';
// 用户通知信息数量
var getMemberMsgNumber = exports.getMemberMsgNumber = _index.REQUESTURL + 'member/original-message/';
// 获取用户实名认证信息
var getUserAuthInfo = exports.getUserAuthInfo = _index.REQUESTURL + 'user/auth-view/';
// 提交用户实名认证信息
var postUserAuthInfo = exports.postUserAuthInfo = _index.REQUESTURL + 'user/do-auth/';
// 实名认证识别身份证接口
var getIdcardAuthInfo = exports.getIdcardAuthInfo = _index.PROREQUESTURL + 'index/authid-card/';
// 用户完善资料
var postUserAddInfo = exports.postUserAddInfo = _index.REQUESTURL + 'user/bind-tel/';
// 用户修改头像
var userChangeAvatar = exports.userChangeAvatar = _index.REQUESTURL + 'user/update-header/';
// 用户修改名字
var userUpdateName = exports.userUpdateName = _index.REQUESTURL + 'user/update-username/';
// 用户更换手机
var userChangePhone = exports.userChangePhone = _index.REQUESTURL + 'user/update-tel/';
// 用户获取已发布招工列表
var userGetPublishedRecruitList = exports.userGetPublishedRecruitList = _index.REQUESTURL + 'job/issue-lists/';
// 用户改变招工状态
var userChangeRecruitStatus = exports.userChangeRecruitStatus = _index.REQUESTURL + 'job/job-end-status/';
// 收藏招工列表
var getCollectionRecruitList = exports.getCollectionRecruitList = _index.REQUESTURL + 'job/collect-list/';
// 收藏找活列表
var getCollectionResumeList = exports.getCollectionResumeList = _index.REQUESTURL + 'resumes/collect-list/';
// 招工取消收藏
var recruitCancelCollection = exports.recruitCancelCollection = _index.REQUESTURL + 'job/collect/';
// 招活取消收藏
var ResumeCancelCollection = exports.ResumeCancelCollection = _index.REQUESTURL + 'resumes/resume-collect/';
// 使用教程
var requestActionUrl = exports.requestActionUrl = _index.REQUESTURL + 'index/course/';
// 意见反馈数据
var feedbackUrl = exports.feedbackUrl = _index.REQUESTURL + 'leaving-message/list/';
// 意见反馈提交
var feedbackSubmissionUrl = exports.feedbackSubmissionUrl = _index.REQUESTURL + 'leaving-message/publish/';
// 帮助中心
var helpUrl = exports.helpUrl = _index.REQUESTURL + 'others/help-feedback/';
// 新闻列表
var newListUrl = exports.newListUrl = _index.REQUESTURL + 'news/list/';
// 新闻类型
var newsTypesUrl = exports.newsTypesUrl = _index.REQUESTURL + 'news/types/';
// 咨询详情
var newsInfoUrl = exports.newsInfoUrl = _index.REQUESTURL + 'news/info/';
// 排名规则
var resumesSortUrl = exports.resumesSortUrl = _index.REQUESTURL + 'resumes/sort/';
// 排名规则点击时发送的请求
var resumesAddClickLog = exports.resumesAddClickLog = _index.REQUESTURL + 'resumes/add-click-log/';
// 我的信息
var userMessagesUrl = exports.userMessagesUrl = _index.REQUESTURL + 'member/user-messages/';
// 我的信息详情
var messagesTypeUrl = exports.messagesTypeUrl = _index.REQUESTURL + 'member/message-of-type/';
//获取积分来源分类信息
var integralSourceConfigUrl = exports.integralSourceConfigUrl = _index.REQUESTURL + 'integral/source-config/';
// 获取积分数量
var integralSourceListsUrl = exports.integralSourceListsUrl = _index.REQUESTURL + 'integral/source-lists/';
// 获取积分消耗分类信息
var integralExpendConfigUrl = exports.integralExpendConfigUrl = _index.REQUESTURL + 'integral/expend-config/';
// 积分消耗积分数量
var integralExpendListsUrl = exports.integralExpendListsUrl = _index.REQUESTURL + 'integral/expend-lists/';
// 消耗积分弹窗内容
var integralUseInfoUrl = exports.integralUseInfoUrl = _index.REQUESTURL + 'integral/look-used-info/';
// 投诉
var publishComplainUrl = exports.publishComplainUrl = _index.REQUESTURL + 'publish/complain/';
// 招工详情
var jobInfoUrl = exports.jobInfoUrl = _index.REQUESTURL + 'job/job-info/';
// 招工详情，没有用户信息
var jobNoUserInfoUrl = exports.jobNoUserInfoUrl = _index.REQUESTURL + '/job/no-user-info/';
// 获取完整电话好码
var jobGetTelUrl = exports.jobGetTelUrl = _index.REQUESTURL + 'job/get-tel/';
// 修改状态
var jobEndStatusUrl = exports.jobEndStatusUrl = _index.REQUESTURL + 'job/job-end-status/';
// 置顶信息
var jobTopConfigUrl = exports.jobTopConfigUrl = _index.REQUESTURL + 'job/top-config/';
// 置顶获取区域
var jobTopHotAreasUrl = exports.jobTopHotAreasUrl = _index.REQUESTURL + '/job/top-hot-areas-v1/';
// 招工置顶
var jobDoTopUrl = exports.jobDoTopUrl = _index.REQUESTURL + 'job/do-top/';
// 修改置顶获取数据
var jobGetTopAreasUrl = exports.jobGetTopAreasUrl = _index.REQUESTURL + 'job/get-top-areas/';
// 更新招工置顶城市
var jobChangeTopAreasUrl = exports.jobChangeTopAreasUrl = _index.REQUESTURL + 'job/change-top-areas/';
// 取消置顶
var jobUpdateTopStatusUrl = exports.jobUpdateTopStatusUrl = _index.REQUESTURL + 'job/update-top-status/';
// 找活名片内容
var resumeDetailUrl = exports.resumeDetailUrl = _index.REQUESTURL + 'resumes/resume-detail/';
// 找活名片相关推荐
var recommendListUrl = exports.recommendListUrl = _index.REQUESTURL + 'resumes/resume-recommend-list/';
// 找活名片查看完整电话
var resumesGetTelUrl = exports.resumesGetTelUrl = _index.REQUESTURL + 'resumes/get-tel/';
// 赞
var resumeSupportUrl = exports.resumeSupportUrl = _index.REQUESTURL + 'resumes/resume-support/';
// 收藏
var resumeCollectUrl = exports.resumeCollectUrl = _index.REQUESTURL + 'resumes/resume-collect/';
// 找活名片完善信息
var resumeListUrl = exports.resumeListUrl = _index.REQUESTURL + 'resumes/resume-list/';
// 找活详情推荐
var jobRecommendListUrl = exports.jobRecommendListUrl = _index.REQUESTURL + '/job/job-recommend-list/';
// 删除技能证书
var delCertificateUrl = exports.delCertificateUrl = _index.REQUESTURL + 'resumes/del-certificate/';
// 新增技能证书
var resumesCertificateUrl = exports.resumesCertificateUrl = _index.REQUESTURL + 'resumes/certificate/';
// 新增项目
var resumesProjectUrl = exports.resumesProjectUrl = _index.REQUESTURL + 'resumes/project/';
// 基础信息
var addResumeUrl = exports.addResumeUrl = _index.REQUESTURL + 'resumes/add-resume/';
// 获取当前位置
var checkAdcodeUrl = exports.checkAdcodeUrl = _index.REQUESTURL + 'resumes/check-adcode/';
// 在找活名片获取子页面公用数据只请求一次
var resumesGetDataUrl = exports.resumesGetDataUrl = _index.REQUESTURL + 'resumes/get-data/';
//人员信息
var resumesIntroduceUrl = exports.resumesIntroduceUrl = _index.REQUESTURL + 'resumes/introduce/';
// 找回名片修改状态
var resumesEditEndUrl = exports.resumesEditEndUrl = _index.REQUESTURL + 'resumes/edit-end/';
// 删除项目经验
var resumesDelProjectUrl = exports.resumesDelProjectUrl = _index.REQUESTURL + 'resumes/del-project/';
// 找活置顶获取省
var resumesTopAreasUrl = exports.resumesTopAreasUrl = _index.REQUESTURL + 'resumes/top-areas/';
// 找活置顶内容
var resumesTopConfigUrl = exports.resumesTopConfigUrl = _index.REQUESTURL + 'resumes/top-config/';
// 置顶找活
var resumesDoTopUrl = exports.resumesDoTopUrl = _index.REQUESTURL + 'resumes/do-top/';
// 找活页面置顶修改
var resumesChangeTopStatusUrl = exports.resumesChangeTopStatusUrl = _index.REQUESTURL + 'resumes/change-top-status/';
// 修改找活名片里的头像
var resumesEditImgUrl = exports.resumesEditImgUrl = _index.REQUESTURL + 'resumes/edit-img/';
// 找活置顶配置接口v2
var resumesTopConfigV2Url = exports.resumesTopConfigV2Url = _index.REQUESTURL + '/resumes/top-config/';
// 找活置顶v2
var resumesDoTopV2Url = exports.resumesDoTopV2Url = _index.REQUESTURL + '/resumes/do-top-v2/';
// 修改找活置顶
var resumesUpdateTopResumeUrl = exports.resumesUpdateTopResumeUrl = _index.REQUESTURL + '/resumes/update-top-resume/';
// 找活投诉
var resumesComplainUrl = exports.resumesComplainUrl = _index.REQUESTURL + 'resumes/complain/';
// 消息推送
var leavingMessageUrl = exports.leavingMessageUrl = _index.REQUESTURL + 'leaving-message/add-subscribe-msg/';

/***/ }),

/***/ "./src/utils/helper/index.ts":
/*!***********************************!*\
  !*** ./src/utils/helper/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.objDeepCopy = objDeepCopy;
exports.userAuthLoction = userAuthLoction;
exports.getAmapPoiList = getAmapPoiList;
exports.userJumpPage = userJumpPage;
exports.getPointNumber = getPointNumber;
exports.getSystemInfo = getSystemInfo;
exports.recSerAuthLoction = recSerAuthLoction;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _amapWx = __webpack_require__(/*! ../source/amap-wx */ "./src/utils/source/amap-wx.js");

var _amapWx2 = _interopRequireDefault(_amapWx);

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 对象拷贝
function objDeepCopy(source) {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] = _typeof(source[item]) === 'object' ? objDeepCopy(source[item]) : source[item];
  }
  return sourceCopy;
}
// 获取用户定位
function userAuthLoction() {
  return new Promise(function (resolve, reject) {
    var GDMAP = new _amapWx2.default.AMapWX({ key: _index.MAPKEY });
    GDMAP.getRegeo({
      success: function success(data) {
        var gpsLocation = {
          province: data[0].regeocodeData.addressComponent.province,
          city: data[0].regeocodeData.addressComponent.city,
          adcode: data[0].regeocodeData.addressComponent.adcode,
          citycode: data[0].regeocodeData.addressComponent.citycode
        };
        _taroWeapp2.default.setStorageSync(_store.UserLocationCity, gpsLocation); //定位信息
        resolve(gpsLocation);
      },
      fail: function fail() {
        reject();
      }
    });
  });
}
// 请求高德api获取附近地点
function getAmapPoiList(val) {
  return new Promise(function (resolve, reject) {
    var GDMAP = new _amapWx2.default.AMapWX({ key: _index.MAPKEY });
    GDMAP.getInputtips({
      keywords: val,
      success: function success(data) {
        if (data) resolve(data.tips);else reject();
      },
      fail: function fail() {
        reject();
      }
    });
  });
}
// 页面跳转
function userJumpPage(url) {
  _taroWeapp2.default.navigateTo({ url: url });
}
// 数字四舍五入并向下取2位小数
function getPointNumber(p, n) {
  return Math.floor(p / n * 100) / 100;
}
// 获取设备系统
function getSystemInfo() {
  var system = _taroWeapp2.default.getSystemInfoSync();
  return system.platform;
}
// 找活基础页面获取定位
function recSerAuthLoction() {
  return new Promise(function (resolve, reject) {
    var GDMAP = new _amapWx2.default.AMapWX({ key: _index.MAPKEY });
    GDMAP.getRegeo({
      success: function success(data) {
        resolve(data);
      },
      fail: function fail() {
        reject();
      }
    });
  });
}

/***/ }),

/***/ "./src/utils/msg/index.ts":
/*!********************************!*\
  !*** ./src/utils/msg/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Msg;
exports.ShowActionModal = ShowActionModal;
exports.errMsg = errMsg;
exports.warnMsg = warnMsg;
exports.successMsg = successMsg;
exports.SubPopup = SubPopup;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Msg(msg) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

  _taroWeapp2.default.showToast({
    title: msg,
    icon: 'none',
    duration: duration
  });
}
function ShowActionModal(data) {
  var _data$title = data.title,
      title = _data$title === undefined ? '温馨提示' : _data$title,
      _data$confirmText = data.confirmText,
      confirmText = _data$confirmText === undefined ? '确定' : _data$confirmText,
      msg = data.msg,
      _success = data.success;

  _taroWeapp2.default.showModal({
    title: title,
    content: typeof data === 'string' ? data : msg,
    showCancel: false,
    confirmText: confirmText,
    success: function success() {
      _success && _success();
    }
  });
}
function errMsg() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _taroWeapp2.default.atMessage({
    'message': msg,
    'type': 'error'
  });
}
function warnMsg() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _taroWeapp2.default.atMessage({
    'message': msg,
    'type': 'warning'
  });
}
function successMsg() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _taroWeapp2.default.atMessage({
    'message': msg,
    'type': 'success'
  });
}
function SubPopup(obj) {
  _taroWeapp2.default.showModal({
    title: obj.title || '温馨提示',
    content: obj.tips,
    showCancel: obj.hasOwnProperty('cancel') ? obj.cancel : false,
    success: function success() {
      obj.callback ? obj.callback() : "";
    }
  });
}

/***/ }),

/***/ "./src/utils/request/index.ts":
/*!************************************!*\
  !*** ./src/utils/request/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.doRequestAction = doRequestAction;
exports.getUserSessionKey = getUserSessionKey;
exports.GetUserInfo = GetUserInfo;
exports.getBannerNotice = getBannerNotice;
exports.getAllListItem = getAllListItem;
exports.getRecruitList = getRecruitList;
exports.getResumeList = getResumeList;
exports.getFleamarketList = getFleamarketList;
exports.getWechatNotice = getWechatNotice;
exports.getListFilterData = getListFilterData;
exports.getTabbarMsg = getTabbarMsg;
exports.getIntegralList = getIntegralList;
exports.getPublishRecruitView = getPublishRecruitView;
exports.getAllAreas = getAllAreas;
exports.getHotAreas = getHotAreas;
exports.checkAdcodeValid = checkAdcodeValid;
exports.getUserInviteLink = getUserInviteLink;
exports.getRechargeList = getRechargeList;
exports.getRechargeOpenid = getRechargeOpenid;
exports.getRechargeOrder = getRechargeOrder;
exports.getUsedInfoModel = getUsedInfoModel;
exports.publishUsedInfo = publishUsedInfo;
exports.getUserPhoneCode = getUserPhoneCode;
exports.getUsedInfo = getUsedInfo;
exports.getUserIsAuth = getUserIsAuth;
exports.checkMineAuthInfo = checkMineAuthInfo;
exports.getMemberInfo = getMemberInfo;
exports.getMemberMsgNumber = getMemberMsgNumber;
exports.getUserAuthInfo = getUserAuthInfo;
exports.postUserAuthInfo = postUserAuthInfo;
exports.postUserAddInfo = postUserAddInfo;
exports.userChangeAvatar = userChangeAvatar;
exports.userUpdateName = userUpdateName;
exports.userChangePhone = userChangePhone;
exports.userGetPublishedRecruitLists = userGetPublishedRecruitLists;
exports.userChangeRecruitStatus = userChangeRecruitStatus;
exports.getCollectionRecruitListData = getCollectionRecruitListData;
exports.getCollectionResumeListData = getCollectionResumeListData;
exports.recruitListCancelCollectionAction = recruitListCancelCollectionAction;
exports.ResumeCancelCollectionAction = ResumeCancelCollectionAction;
exports.requestAction = requestAction;
exports.feedbackAction = feedbackAction;
exports.feedbackSubmissionAction = feedbackSubmissionAction;
exports.helpAction = helpAction;
exports.newsTypesAction = newsTypesAction;
exports.newListAction = newListAction;
exports.newsInfoAction = newsInfoAction;
exports.resumesSortAction = resumesSortAction;
exports.resumesAddClickLogAction = resumesAddClickLogAction;
exports.userMessagesAction = userMessagesAction;
exports.messagesTypeAction = messagesTypeAction;
exports.integralSourceConfigAction = integralSourceConfigAction;
exports.integralSourceListsAction = integralSourceListsAction;
exports.integralExpendConfigAction = integralExpendConfigAction;
exports.integralExpendListsAction = integralExpendListsAction;
exports.integralUseInfoAction = integralUseInfoAction;
exports.publishComplainAction = publishComplainAction;
exports.jobInfoAction = jobInfoAction;
exports.jobNoUserInfoAction = jobNoUserInfoAction;
exports.jobGetTelAction = jobGetTelAction;
exports.jobEndStatusAction = jobEndStatusAction;
exports.jobTopConfigAction = jobTopConfigAction;
exports.jobTopHotAreasAction = jobTopHotAreasAction;
exports.jobDoTopAction = jobDoTopAction;
exports.jobGetTopAreasAction = jobGetTopAreasAction;
exports.jobChangeTopAreasAction = jobChangeTopAreasAction;
exports.jobUpdateTopStatusAction = jobUpdateTopStatusAction;
exports.resumeDetailAction = resumeDetailAction;
exports.recommendListAction = recommendListAction;
exports.resumesGetTelAcrion = resumesGetTelAcrion;
exports.resumeSupportAction = resumeSupportAction;
exports.resumeCollectAction = resumeCollectAction;
exports.resumeListAction = resumeListAction;
exports.publishRecruitInfo = publishRecruitInfo;
exports.jobRecommendListAction = jobRecommendListAction;
exports.delCertificateAction = delCertificateAction;
exports.resumesCertificateAction = resumesCertificateAction;
exports.resumesProjectAction = resumesProjectAction;
exports.addResumeAction = addResumeAction;
exports.checkAdcodeAction = checkAdcodeAction;
exports.resumesGetDataAction = resumesGetDataAction;
exports.resumesIntroduceAction = resumesIntroduceAction;
exports.resumesEditEndAction = resumesEditEndAction;
exports.resumesDelProjectAction = resumesDelProjectAction;
exports.resumesTopAreasAction = resumesTopAreasAction;
exports.resumesTopConfigAction = resumesTopConfigAction;
exports.resumesDoTopAction = resumesDoTopAction;
exports.resumesChangeTopStatusAction = resumesChangeTopStatusAction;
exports.resumesEditImgAction = resumesEditImgAction;
exports.resumesTopConfigV2Action = resumesTopConfigV2Action;
exports.resumesDoTopV2Action = resumesDoTopV2Action;
exports.resumesUpdateTopResumeAction = resumesUpdateTopResumeAction;
exports.resumesComplainAction = resumesComplainAction;
exports.leavingMessageAction = leavingMessageAction;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../api/index */ "./src/utils/api/index.ts");

var api = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index3 = __webpack_require__(/*! ../msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 请求失败提示信息
function requestShowToast(show) {
  if (show) {
    setTimeout(function () {
      (0, _index4.default)('网络错误，请求失败');
    }, 200);
  }
}
// 获取header请求头信息
function getRequestHeaderInfo() {
  // 获取用户信息
  var userInfo = _taroWeapp2.default.getStorageSync(_store.UserInfo);
  var requestHeader = userInfo.login ? {
    'content-type': 'application/x-www-form-urlencoded',
    mid: userInfo.userId,
    token: userInfo.token,
    time: userInfo.tokenTime,
    uuid: userInfo.uuid
  } : {
    'content-type': 'application/x-www-form-urlencoded'
  };
  return requestHeader;
}
// 配置默认请求参数
var defaultRequestData = {
  url: '',
  method: 'GET',
  header: getRequestHeaderInfo(),
  data: {},
  loading: true,
  title: '数据加载中...',
  failToast: true
};
// 全局通用请求方法
function doRequestAction(reqData) {
  var req = _extends({}, defaultRequestData, reqData);
  if (req.loading) {
    _taroWeapp2.default.showLoading({
      title: req.title
    });
  }
  var data = _extends({}, req.data, { wechat_token: _index2.TOKEN });
  // 获取用户信息
  var userInfo = _taroWeapp2.default.getStorageSync(_store.UserInfo);
  if (req.method === 'POST' && userInfo.login) {
    data.userId = userInfo.userId;
    data.token = userInfo.token;
    data.tokenTime = userInfo.tokenTime;
  }
  return new Promise(function (resolve, reject) {
    _taroWeapp2.default.request({
      url: /^http(s?):\/\//.test(req.url) ? req.url : req.url,
      method: req.method,
      header: req.header,
      data: data,
      success: function success(res) {
        //console.log(res)
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          requestShowToast(req.failToast);
          reject(res);
        }
      },
      fail: function fail(e) {
        // todo requestShowToast(req.failToast)
        requestShowToast(req.failToast);
        reject(e);
      },
      complete: function complete() {
        if (req.loading) {
          _taroWeapp2.default.hideLoading();
        }
      }
    });
  });
}
// 用户授权-获取session_key
function getUserSessionKey(code) {
  return doRequestAction({
    url: api.GetUserSessionKey,
    data: {
      code: code
    }
  });
}
// session_key换取userinfo
function GetUserInfo(data) {
  return doRequestAction({
    url: api.GetUserInfo,
    data: data
  });
}
// 获取首页banner以及公告
function getBannerNotice() {
  return doRequestAction({
    url: api.GetBannerNotice,
    loading: false
  });
}
// 获取首页列表数据
function getAllListItem(data) {
  return doRequestAction({
    url: api.GetAllListItem,
    data: data
  });
}
// 获取招工列表
function getRecruitList(data) {
  return doRequestAction({
    url: api.GetRecruitlist,
    data: data
  });
}
// 获取找活列表
function getResumeList(data) {
  return doRequestAction({
    url: api.GetResumelist,
    data: data
  });
}
// 获取二手交易列表
function getFleamarketList(data) {
  return doRequestAction({
    url: api.GetFleamarketlist,
    data: data
  });
}
// 获取微信号以及公告
function getWechatNotice() {
  return doRequestAction({
    url: api.GetWechatNotice,
    method: 'POST',
    loading: false
  });
}
// 获取列表页筛选条件
function getListFilterData() {
  return doRequestAction({
    url: api.GetListFilterData,
    loading: false
  });
}
// tabbar未读消息统计
function getTabbarMsg() {
  return;
}
// 获取积分记录分页数据
function getIntegralList(data) {
  return doRequestAction({
    url: api.GetIntegralList,
    data: data,
    method: 'POST'
  });
}
// 初始化发布招工信息视图
function getPublishRecruitView(data) {
  return doRequestAction({
    url: api.GetPublisRecruitView,
    data: data,
    method: 'POST'
  });
}
// 获取城市数据
function getAllAreas() {
  var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return doRequestAction({
    url: api.GetAllAreas,
    loading: loading
  });
}
// 获取热门城市
function getHotAreas() {}
// 检验adcode是否有效
function checkAdcodeValid(adcode) {
  return doRequestAction({
    url: api.CheckAdcodeValid,
    method: 'POST',
    data: {
      adcode: adcode
    }
  });
}
// 获取用户邀请链接
function getUserInviteLink() {
  return doRequestAction({
    url: api.GetUserInviteLink,
    method: 'POST',
    failToast: true
  });
}
// 获取充值选项
function getRechargeList() {
  return doRequestAction({
    url: api.GetRechargeList,
    method: 'POST'
  });
}
// 用户充值获取openid
function getRechargeOpenid(code) {
  return doRequestAction({
    url: api.GetRechargeOpenid,
    method: 'POST',
    data: {
      js_code: code
    }
  });
}
// 用户创建充值订单
function getRechargeOrder(data) {
  return doRequestAction({
    url: api.GetRechargeOrder,
    method: 'POST',
    data: data
  });
}
// 初始化用户发布二手交易信息
function getUsedInfoModel(data) {
  return doRequestAction({
    url: api.GetUsedInfoModel,
    data: data,
    method: 'POST'
  });
}
// 发布二手交易
function publishUsedInfo(data) {
  return doRequestAction({
    url: api.PublishUsedInfo,
    data: data,
    method: 'POST'
  });
}
// 获取验证码
function getUserPhoneCode(data) {
  return doRequestAction({
    url: api.GetUserPhoneCode,
    method: 'POST',
    data: data,
    title: '验证码获取中'
  });
}
// 二手交易详情
function getUsedInfo(id) {
  return doRequestAction({
    url: api.GetUsedInfo,
    method: 'POST',
    data: {
      infoId: id
    }
  });
}
// 用户实名查询
function getUserIsAuth(tel) {
  return doRequestAction({
    url: api.CheckAuth,
    method: 'POST',
    data: {
      tel: tel
    }
  });
}
// 验证当前用户是否实名
function checkMineAuthInfo() {
  return doRequestAction({
    url: api.CheckMineAuthInfo,
    method: 'POST'
  });
}
// 用户会员中心
function getMemberInfo() {
  return doRequestAction({
    url: api.getMemberInfo,
    method: 'POST'
  });
}
// 获取当前用户的提示信息
function getMemberMsgNumber(type) {
  return doRequestAction({
    url: api.getMemberMsgNumber,
    method: 'POST',
    data: {
      terminal_type: type ? 'ios' : 'android'
    },
    loading: false
  });
}
// 用户实名认证
function getUserAuthInfo() {
  return doRequestAction({
    url: api.getUserAuthInfo,
    method: 'POST'
  });
}
// 提交实名认证信息
function postUserAuthInfo(data) {
  return doRequestAction({
    url: api.postUserAuthInfo,
    method: 'POST',
    data: data
  });
}
// 用户完善信息
function postUserAddInfo(data) {
  return doRequestAction({
    url: api.postUserAddInfo,
    method: 'POST',
    data: data
  });
}
// 用户修改头像
function userChangeAvatar(img) {
  return doRequestAction({
    url: api.userChangeAvatar,
    method: 'POST',
    data: {
      headerImg: img
    }
  });
}
// 用户修改名字
function userUpdateName(name) {
  return doRequestAction({
    url: api.userUpdateName,
    method: 'POST',
    data: {
      username: name
    }
  });
}
// 用户更换手机
function userChangePhone(tel, code) {
  return doRequestAction({
    url: api.userChangePhone,
    method: 'POST',
    data: {
      tel: tel,
      code: code
    }
  });
}
// 用户获取已发布招工列表
function userGetPublishedRecruitLists(data) {
  return doRequestAction({
    url: api.userGetPublishedRecruitList,
    data: data,
    method: 'POST'
  });
}
// 用户改变发布招工状态
function userChangeRecruitStatus(id) {
  return doRequestAction({
    url: api.userChangeRecruitStatus,
    data: { infoId: id },
    method: 'POST'
  });
}
// 收藏招工请求数据
function getCollectionRecruitListData(page) {
  return doRequestAction({
    url: api.getCollectionRecruitList,
    method: 'POST',
    data: {
      page: page
    },
    failToast: true
  });
}
// 收藏找活请求数据
function getCollectionResumeListData(page) {
  return doRequestAction({
    url: api.getCollectionResumeList,
    method: 'POST',
    failToast: true,
    data: {
      page: page
    }
  });
}
// 取消招工收藏
function recruitListCancelCollectionAction(id) {
  return doRequestAction({
    url: api.recruitCancelCollection,
    method: 'POST',
    failToast: true,
    data: {
      id: id
    }
  });
}
// 取消找活收藏
function ResumeCancelCollectionAction(resume_uuid) {
  return doRequestAction({
    url: api.ResumeCancelCollection,
    method: 'POST',
    failToast: true,
    data: {
      resume_uuid: resume_uuid
    }
  });
}
// 使用教程
function requestAction() {
  return doRequestAction({
    url: api.requestActionUrl,
    method: 'POST',
    failToast: true
  });
}
// 意见反馈
function feedbackAction(page) {
  return doRequestAction({
    url: api.feedbackUrl,
    method: 'POST',
    failToast: true,
    data: {
      page: page
    }
  });
}
// 意见返回提交
function feedbackSubmissionAction(params) {
  return doRequestAction({
    url: api.feedbackSubmissionUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 帮助中心
function helpAction(page, system) {
  return doRequestAction({
    url: api.helpUrl,
    failToast: true,
    data: {
      page: page,
      system: system
    }
  });
}
// 新闻类型
function newsTypesAction() {
  return doRequestAction({
    url: api.newsTypesUrl,
    failToast: true
  });
}
// 新闻列表
function newListAction(params) {
  return doRequestAction({
    url: api.newListUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 资讯详情
function newsInfoAction(id) {
  return doRequestAction({
    url: api.newsInfoUrl,
    method: 'POST',
    failToast: true,
    data: {
      id: id
    }
  });
}
// 排名规则
function resumesSortAction() {
  return doRequestAction({
    url: api.resumesSortUrl,
    method: 'POST',
    failToast: true
  });
}
// 排名规则点击按钮发请求
function resumesAddClickLogAction(type) {
  return doRequestAction({
    url: api.resumesAddClickLog,
    method: 'POST',
    failToast: true,
    data: {
      type: type
    }
  });
}
// 我的信息
function userMessagesAction(type) {
  return doRequestAction({
    url: api.userMessagesUrl,
    method: 'POST',
    failToast: true,
    data: {
      terminal_type: type
    }
  });
}
// 我的信息详情
function messagesTypeAction(params) {
  return doRequestAction({
    url: api.messagesTypeUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 获取积分分类
function integralSourceConfigAction(params) {
  return doRequestAction({
    url: api.integralSourceConfigUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 积分数据
function integralSourceListsAction(params) {
  return doRequestAction({
    url: api.integralSourceListsUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 积分消耗
function integralExpendConfigAction() {
  return doRequestAction({
    url: api.integralExpendConfigUrl,
    method: 'POST',
    failToast: true
  });
}
// 积分消耗 数量
function integralExpendListsAction(params) {
  return doRequestAction({
    url: api.integralExpendListsUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 消耗积分弹窗内容
function integralUseInfoAction(logId) {
  return doRequestAction({
    url: api.integralUseInfoUrl,
    method: 'POST',
    failToast: true,
    data: {
      logId: logId
    }
  });
}
// 投诉
function publishComplainAction(params) {
  return doRequestAction({
    url: api.publishComplainUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 招工详情
function jobInfoAction(params) {
  return doRequestAction({
    url: api.jobInfoUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 招工详情，没有用户信息
function jobNoUserInfoAction(params) {
  return doRequestAction({
    url: api.jobNoUserInfoUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 获取电话号码
function jobGetTelAction(params) {
  return doRequestAction({
    url: api.jobGetTelUrl,
    method: 'POST',
    failToast: true,
    data: params
  });
}
// 修改状态
function jobEndStatusAction(infoId) {
  return doRequestAction({
    url: api.jobEndStatusUrl,
    method: 'POST',
    failToast: true,
    data: {
      infoId: infoId
    }
  });
}
// 置顶信息
function jobTopConfigAction() {
  return doRequestAction({
    url: api.jobTopConfigUrl,
    method: 'POST',
    failToast: true
  });
}
// 置顶区域
function jobTopHotAreasAction() {
  return doRequestAction({
    url: api.jobTopHotAreasUrl,
    method: 'POST',
    failToast: true
  });
}
// 招工置顶
function jobDoTopAction(detail) {
  return doRequestAction({
    url: api.jobDoTopUrl,
    method: 'POST',
    failToast: true,
    data: detail
  });
}
// 修改置顶获取数据
function jobGetTopAreasAction(detail) {
  return doRequestAction({
    url: api.jobGetTopAreasUrl,
    method: 'POST',
    failToast: true,
    data: detail
  });
}
// 更新招工置顶城市
function jobChangeTopAreasAction(detail) {
  return doRequestAction({
    url: api.jobChangeTopAreasUrl,
    method: 'POST',
    failToast: true,
    data: detail
  });
}
// 取消招工置顶
function jobUpdateTopStatusAction(detail) {
  return doRequestAction({
    url: api.jobUpdateTopStatusUrl,
    method: 'POST',
    failToast: true,
    data: detail
  });
}
// 找活详情
function resumeDetailAction(obj) {
  return doRequestAction({
    url: api.resumeDetailUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 找活详情列表
function recommendListAction(obj) {
  return doRequestAction({
    url: api.recommendListUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 找活详情查看电话
function resumesGetTelAcrion(obj) {
  return doRequestAction({
    url: api.resumesGetTelUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 赞
function resumeSupportAction(obj) {
  return doRequestAction({
    url: api.resumeSupportUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 分享
function resumeCollectAction(obj) {
  return doRequestAction({
    url: api.resumeCollectUrl,
    method: 'POST',
    failToast: true,
    data: obj
  });
}
// 找活名片完善
function resumeListAction() {
  return doRequestAction({
    url: api.resumeListUrl,
    method: 'POST',
    failToast: true
  });
}
// 发布招工信息
function publishRecruitInfo(data) {
  return doRequestAction({
    url: api.PublishRecruitInfo,
    method: 'POST',
    data: data,
    failToast: true
  });
}
// 找活名片推荐
function jobRecommendListAction(data) {
  return doRequestAction({
    url: api.jobRecommendListUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
//删除技能证书
function delCertificateAction(data) {
  return doRequestAction({
    url: api.delCertificateUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 新增技能证书
function resumesCertificateAction(data) {
  return doRequestAction({
    url: api.resumesCertificateUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 新增项目
function resumesProjectAction(data) {
  // 获取用户信息
  var userInfo = _taroWeapp2.default.getStorageSync(_store.UserInfo);
  return doRequestAction({
    url: api.resumesProjectUrl,
    header: {
      version: '1.0.1',
      'content-type': 'application/x-www-form-urlencoded',
      mid: userInfo.userId,
      uuid: userInfo.uuid,
      token: userInfo.token,
      time: userInfo.tokenTime
    },
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 基础信息
function addResumeAction(data) {
  return doRequestAction({
    url: api.addResumeUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 获取当前位置
function checkAdcodeAction(data) {
  return doRequestAction({
    url: api.checkAdcodeUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活页面获取公用数据
function resumesGetDataAction() {
  return doRequestAction({
    url: api.resumesGetDataUrl,
    method: 'POST',
    failToast: true
  });
}
// 人员信息
function resumesIntroduceAction(data) {
  return doRequestAction({
    url: api.resumesIntroduceUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活名片修改状态
function resumesEditEndAction(data) {
  // 获取用户信息
  var userInfo = _taroWeapp2.default.getStorageSync(_store.UserInfo);
  return doRequestAction({
    url: api.resumesEditEndUrl,
    method: 'POST',
    failToast: true,
    header: {
      version: '1.0.1',
      'content-type': 'application/x-www-form-urlencoded',
      // mid: 95,
      // uuid:'1588057764721312',
      // token:''
      mid: userInfo.userId,
      token: userInfo.token,
      time: userInfo.tokenTime,
      uuid: userInfo.uuid
    },
    data: data
  });
}
// 删除项目经验
function resumesDelProjectAction(data) {
  return doRequestAction({
    url: api.resumesDelProjectUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活置顶获取省
function resumesTopAreasAction() {
  return doRequestAction({
    url: api.resumesTopAreasUrl,
    method: 'POST',
    failToast: true
  });
}
// 找活置顶内容
function resumesTopConfigAction() {
  return doRequestAction({
    url: api.resumesTopConfigUrl,
    method: 'POST',
    failToast: true
  });
}
// 找活置顶
function resumesDoTopAction(data) {
  return doRequestAction({
    url: api.resumesDoTopUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活页面置顶修改
function resumesChangeTopStatusAction(data) {
  return doRequestAction({
    url: api.resumesChangeTopStatusUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活名片头像修改
function resumesEditImgAction(data) {
  return doRequestAction({
    url: api.resumesEditImgUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
//找活置顶配置
function resumesTopConfigV2Action(data) {
  return doRequestAction({
    url: api.resumesTopConfigV2Url,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活置顶v2
function resumesDoTopV2Action(data) {
  return doRequestAction({
    url: api.resumesDoTopV2Url,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 修改找活置顶
function resumesUpdateTopResumeAction(data) {
  return doRequestAction({
    url: api.resumesUpdateTopResumeUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 找活投诉
function resumesComplainAction(data) {
  return doRequestAction({
    url: api.resumesComplainUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}
// 消息推送
function leavingMessageAction(data) {
  return doRequestAction({
    url: api.leavingMessageUrl,
    method: 'POST',
    failToast: true,
    data: data
  });
}

/***/ }),

/***/ "./src/utils/source/amap-wx.js":
/*!*************************************!*\
  !*** ./src/utils/source/amap-wx.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function AMapWX(a) {
  this.key = a.key, this.requestConfig = { key: a.key, s: "rsx", platform: "WXJS", appname: a.key, sdkversion: "1.2.0", logversion: "2.0" };
}AMapWX.prototype.getWxLocation = function (a, b) {
  wx.getLocation({ type: "gcj02", success: function success(a) {
      var c = a.longitude + "," + a.latitude;wx.setStorage({ key: "userLocation", data: c }), b(c);
    }, fail: function fail(c) {
      wx.getStorage({ key: "userLocation", success: function success(a) {
          a.data && b(a.data);
        } }), a.fail({ errCode: "0", errMsg: c.errMsg || "" });
    } });
}, AMapWX.prototype.getRegeo = function (a) {
  function c(c) {
    var d = b.requestConfig;wx.request({ url: "https://restapi.amap.com/v3/geocode/regeo", data: { key: b.key, location: c, extensions: "all", s: d.s, platform: d.platform, appname: b.key, sdkversion: d.sdkversion, logversion: d.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var d, e, f, g, h, i, j, k, l;b.data.status && "1" == b.data.status ? (d = b.data.regeocode, e = d.addressComponent, f = [], g = "", d && d.roads[0] && d.roads[0].name && (g = d.roads[0].name + "附近"), h = c.split(",")[0], i = c.split(",")[1], d.pois && d.pois[0] && (g = d.pois[0].name + "附近", j = d.pois[0].location, j && (h = parseFloat(j.split(",")[0]), i = parseFloat(j.split(",")[1]))), e.provice && f.push(e.provice), e.city && f.push(e.city), e.district && f.push(e.district), e.streetNumber && e.streetNumber.street && e.streetNumber.number ? (f.push(e.streetNumber.street), f.push(e.streetNumber.number)) : (k = "", d && d.roads[0] && d.roads[0].name && (k = d.roads[0].name), f.push(k)), f = f.join(""), l = [{ iconPath: a.iconPath, width: a.iconWidth, height: a.iconHeight, name: f, desc: g, longitude: h, latitude: i, id: 0, regeocodeData: d }], a.success(l)) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this;a.location ? c(a.location) : b.getWxLocation(a, function (a) {
    c(a);
  });
}, AMapWX.prototype.getWeather = function (a) {
  function d(d) {
    var e = "base";a.type && "forecast" == a.type && (e = "all"), wx.request({ url: "https://restapi.amap.com/v3/weather/weatherInfo", data: { key: b.key, city: d, extensions: e, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        function c(a) {
          var b = { city: { text: "城市", data: a.city }, weather: { text: "天气", data: a.weather }, temperature: { text: "温度", data: a.temperature }, winddirection: { text: "风向", data: a.winddirection + "风" }, windpower: { text: "风力", data: a.windpower + "级" }, humidity: { text: "湿度", data: a.humidity + "%" } };return b;
        }var d, e;b.data.status && "1" == b.data.status ? b.data.lives ? (d = b.data.lives, d && d.length > 0 && (d = d[0], e = c(d), e["liveData"] = d, a.success(e))) : b.data.forecasts && b.data.forecasts[0] && a.success({ forecast: b.data.forecasts[0] }) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }function e(e) {
    wx.request({ url: "https://restapi.amap.com/v3/geocode/regeo", data: { key: b.key, location: e, extensions: "all", s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var c, e;b.data.status && "1" == b.data.status ? (e = b.data.regeocode, e.addressComponent ? c = e.addressComponent.adcode : e.aois && e.aois.length > 0 && (c = e.aois[0].adcode), d(c)) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this,
      c = b.requestConfig;a.city ? d(a.city) : b.getWxLocation(a, function (a) {
    e(a);
  });
}, AMapWX.prototype.getPoiAround = function (a) {
  function d(d) {
    var e = { key: b.key, location: d, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.querytypes && (e["types"] = a.querytypes), a.querykeywords && (e["keywords"] = a.querykeywords), wx.request({ url: "https://restapi.amap.com/v3/place/around", data: e, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var c, d, e, f;if (b.data.status && "1" == b.data.status) {
          if (b = b.data, b && b.pois) {
            for (c = [], d = 0; d < b.pois.length; d++) {
              e = 0 == d ? a.iconPathSelected : a.iconPath, c.push({ latitude: parseFloat(b.pois[d].location.split(",")[1]), longitude: parseFloat(b.pois[d].location.split(",")[0]), iconPath: e, width: 22, height: 32, id: d, name: b.pois[d].name, address: b.pois[d].address });
            }f = { markers: c, poisData: b.pois }, a.success(f);
          }
        } else a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this,
      c = b.requestConfig;a.location ? d(a.location) : b.getWxLocation(a, function (a) {
    d(a);
  });
}, AMapWX.prototype.getStaticmap = function (a) {
  function f(b) {
    c.push("location=" + b), a.zoom && c.push("zoom=" + a.zoom), a.size && c.push("size=" + a.size), a.scale && c.push("scale=" + a.scale), a.markers && c.push("markers=" + a.markers), a.labels && c.push("labels=" + a.labels), a.paths && c.push("paths=" + a.paths), a.traffic && c.push("traffic=" + a.traffic);var e = d + c.join("&");a.success({ url: e });
  }var e,
      b = this,
      c = [],
      d = "https://restapi.amap.com/v3/staticmap?";c.push("key=" + b.key), e = b.requestConfig, c.push("s=" + e.s), c.push("platform=" + e.platform), c.push("appname=" + e.appname), c.push("sdkversion=" + e.sdkversion), c.push("logversion=" + e.logversion), a.location ? f(a.location) : b.getWxLocation(a, function (a) {
    f(a);
  });
}, AMapWX.prototype.getInputtips = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.location && (d["location"] = a.location), a.keywords && (d["keywords"] = a.keywords), a.type && (d["type"] = a.type), a.city && (d["city"] = a.city), a.citylimit && (d["citylimit"] = a.citylimit), wx.request({ url: "https://restapi.amap.com/v3/assistant/inputtips", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.tips && a.success({ tips: b.data.tips });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getDrivingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.waypoints && (d["waypoints"] = a.waypoints), a.avoidpolygons && (d["avoidpolygons"] = a.avoidpolygons), a.avoidroad && (d["avoidroad"] = a.avoidroad), wx.request({ url: "https://restapi.amap.com/v3/direction/driving", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.route && a.success({ paths: b.data.route.paths, taxi_cost: b.data.route.taxi_cost || "" });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getWalkingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({ url: "https://restapi.amap.com/v3/direction/walking", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.route && a.success({ paths: b.data.route.paths });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getTransitRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.city && (d["city"] = a.city), a.cityd && (d["cityd"] = a.cityd), wx.request({ url: "https://restapi.amap.com/v3/direction/transit/integrated", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      if (b && b.data && b.data.route) {
        var c = b.data.route;a.success({ distance: c.distance || "", taxi_cost: c.taxi_cost || "", transits: c.transits });
      }
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getRidingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({ url: "https://restapi.amap.com/v4/direction/bicycling", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.data && a.success({ paths: b.data.data.paths });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, module.exports.AMapWX = AMapWX;

/***/ }),

/***/ "./src/utils/subscribeToNews/index.ts":
/*!********************************************!*\
  !*** ./src/utils/subscribeToNews/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubscribeToNews = SubscribeToNews;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _index = __webpack_require__(/*! ../request/index */ "./src/utils/request/index.ts");

var _temp_ids = __webpack_require__(/*! ./temp_ids */ "./src/utils/subscribeToNews/temp_ids.ts");

var _temp_ids2 = _interopRequireDefault(_temp_ids);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 消息推送
function SubscribeToNews(type, callback) {
  var userInfo = _taroWeapp2.default.getStorageSync(_store.UserInfo);
  if (_taroWeapp2.default.canIUse('requestSubscribeMessage') === true) {
    _taroWeapp2.default.requestSubscribeMessage({
      tmplIds: [_temp_ids2.default[type].id],
      success: function success(res) {
        callback();
        if (res.errMsg == "requestSubscribeMessage:ok") {
          var status = res[_temp_ids2.default[type].id];
          if (status == "accept") {
            var params = {
              userId: userInfo.userId,
              token: userInfo.token,
              tokenTime: userInfo.tokenTime,
              type: _temp_ids2.default[type].type
            };
            (0, _index.leavingMessageAction)(params);
          }
        }
      }
    });
  } else {
    callback();
  }
}

/***/ }),

/***/ "./src/utils/subscribeToNews/temp_ids.ts":
/*!***********************************************!*\
  !*** ./src/utils/subscribeToNews/temp_ids.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var TmplId = {
  msg: {
    id: "z5y8OFD9gs0SY0sT7FZwiWsrzT3rNp3CJFH7yhv7dUE",
    type: 1
  },
  pay: {
    id: "vpEpkHfo5tlmGB8oZXq-qVU3ySmsxTzPrgNsv_2l6Go",
    type: 0
  },
  complain: {
    id: "uZcoNQz86gAr3P4DYtgt85PnVgMcN_Je27TeHdKhz14",
    type: 5
  },
  auth: {
    id: "6Kda5y-LXhIySRw-ouD94xMnndZplmvfsmmAZ9kbKp4",
    type: 6
  },
  recruit: {
    id: "G68JCpxsyIcKPrZcQWdHTG63T2JpJIz9gXGgKLv1T0A",
    type: 3
  },
  resume: {
    id: "G68JCpxsyIcKPrZcQWdHTG63T2JpJIz9gXGgKLv1T0A",
    type: 4
  }
};
exports.default = TmplId;

/***/ }),

/***/ "./src/utils/upload/index.tsx":
/*!************************************!*\
  !*** ./src/utils/upload/index.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UploadImgAction;
exports.CameraAndAlbum = CameraAndAlbum;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UploadImgAction() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.UPLOADIMGURL;

  var uploadUrl = url || _index.UPLOADIMGURL;
  return new Promise(function (resolve) {
    _taroWeapp2.default.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function success(res) {
        AppUploadImg(resolve, res, uploadUrl);
      }
    });
  });
}
function CameraAndAlbum() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.UPLOADIMGURL;

  return new Promise(function (resolve) {
    _taroWeapp2.default.showActionSheet({
      itemList: ['拍照', '从相册中选择']
    }).then(function (res) {
      var index = res.tapIndex;
      _taroWeapp2.default.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: index === 0 ? ['camera'] : ['album'],
        success: function success(res) {
          AppUploadImg(resolve, res, url);
        }
      });
    });
  });
}
function AppUploadImg(resolve, res) {
  var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _index.UPLOADIMGURL;

  var userInfo = _taroWeapp2.default.getStorageSync(_store.UserInfo);
  _taroWeapp2.default.showLoading({ title: '图片上传中' });
  _taroWeapp2.default.uploadFile({
    url: url,
    filePath: res.tempFilePaths[0],
    header: {
      userid: userInfo ? userInfo.userId : ''
    },
    name: 'file',
    success: function success(response) {
      var mydata = JSON.parse(response.data);
      // let resData = { local: response, remote: mydata}
      _taroWeapp2.default.showToast({
        title: mydata.errmsg,
        icon: "none",
        duration: 2000
      });
      if (mydata.errcode == "ok") {
        resolve(mydata);
      }
    },

    fail: function fail() {
      _taroWeapp2.default.showToast({
        title: "网络错误，上传失败！",
        icon: "none",
        duration: 2000
      });
    },
    complete: function complete() {
      _taroWeapp2.default.hideLoading();
    }
  });
}

/***/ }),

/***/ "./src/utils/v/index.ts":
/*!******************************!*\
  !*** ./src/utils/v/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPhone = isPhone;
exports.isNumber = isNumber;
exports.isVaildNumber = isVaildNumber;
exports.randIntNumber = randIntNumber;
exports.getRandNumber = getRandNumber;
exports.isUrl = isUrl;
exports.isRequire = isRequire;
exports.isVaildVal = isVaildVal;
exports.isIdcard = isIdcard;
exports.isType = isType;
exports.isIos = isIos;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 是否是电话号码
function isPhone(tel) {
  var reg = /^1[0-9]{10}$/;
  return reg.test(tel);
}
// 是否是数字
function isNumber(num) {
  var reg = /^[0-9]+$/;
  return reg.test(num);
}
function isVaildNumber(_ref) {
  var num = _ref.num,
      _ref$min = _ref.min,
      min = _ref$min === undefined ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === undefined ? 10 : _ref$max;

  if (!isNumber(num)) return false;
  return num >= min && num <= max;
}
// 生成区间整数
function randIntNumber() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

  return Math.floor(Math.random() * (max - min)) + min;
}
// 生成随机数
function getRandNumber() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

  return min + Math.random() * (max - min);
}
// 检测是否是网址
function isUrl(url) {
  var reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
  return reg.test(url);
}
// 检测必填
function isRequire(val) {
  var str = val.replace(/\s+/g, '');
  return str != '' && str != null && str != undefined && str != 'null' && str != undefined;
}
// 内容必须有汉字 且不少于 min 字
function isVaildVal(val) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var reg = new RegExp('[\\u4E00-\\u9FFF]+');
  return max ? reg.test(val) && val.length >= min && val.length <= max : reg.test(val) && val.length >= min;
}
// 检测是否是身份证
function isIdcard(val) {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(val);
}
// 检测数据类型
function isType(data, type) {
  var reg = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  if (!type) return reg;
  if (reg == type) return true;
  return false;
}
// 检测是否是ios客户端
function isIos() {
  var system = _taroWeapp2.default.getSystemInfoSync();
  return system.platform === 'ios';
}

/***/ })

}]);