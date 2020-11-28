<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[58],{"141":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var G=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],a=!0,o=!1,r=void 0;try{for(var i,u=e[Symbol.iterator]();!(a=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){o=!0,r=e}finally{try{!a&&u.return&&u.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var N=n(0),X=_interopRequireDefault(N),J=n(2),K=n(1),V=n(6),W=n(9),Y=n(7),Z=n(4),ee=_interopRequireDefault(Z),te=n(3);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(142);var ne=Math.PI,o=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(RealnameMap,X.default.Component),a(RealnameMap,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in a)return a.value;var r=a.get;return void 0!==r?r.call(n):void 0})(RealnameMap.prototype.__proto__||Object.getPrototypeOf(RealnameMap.prototype),"_constructor",this).call(this,e),this.$$refs=new X.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){var o=this;this.__state=e||this.state||{},this.__props=t||this.props||{};var a=this.$prefix,r=(0,N.genCompid)(a+"$compid__46"),i=G(r,2),u=i[0],s=i[1],c=(0,te.useSelector)(function(e){return e.realname.setRealnameArea}),l=(0,N.useState)(""),f=G(l,2),p=f[0],y=f[1],m=(0,N.useState)([]),h=G(m,2),d=h[0],v=h[1],g=(0,N.useState)({"id":"","pid":"","city":"","ad_name":""}),_=G(g,2),M=_[0],b=_[1],S=(0,N.useState)(!1),F=G(S,2),A=F[0],C=F[1],O=(0,N.useState)(""),w=G(O,2),P=w[0],R=w[1],k=(0,N.useState)([]),x=G(k,2),U=x[0],$=x[1],j=(0,N.useState)([]),I=G(j,2),D=I[0],L=I[1],T=(0,N.useState)(!1),E=G(T,2),H=E[0],z=E[1];function Qa(e){return parseFloat(e)*ne/180}function Sa(e){C(e)}function Xa(t){(0,J.checkAdcodeValid)(t.adcode).then(function(e){"ok"==e.errcode?(function setUserPublishAreaHistoryItem(t){var e=X.default.getStorageSync(V.UserPublishAreaHistory);if(e){var n=e.findIndex(function(e){return e.location===t.location&&e.name===t.name&&e.adcode==t.adcode});e.unshift(t),-1!==n&&e.splice(n,1),e.splice(K.UserPublishAreaHistoryMaxNum),L(e),X.default.setStorageSync(V.UserPublishAreaHistory,e)}else L([t]),X.default.setStorageSync(V.UserPublishAreaHistory,[t])}(t),c(t.name),X.default.navigateBack()):(0,Z.ShowActionModal)({"msg":e.errmsg})}).catch(function(){(0,ee.default)("网络错误，请求失败！")})}(0,N.useEffect)(function(){var e=X.default.getStorageSync(V.Areas);e?v(e):(0,J.getAllAreas)().then(function(e){X.default.setStorageSync(V.Areas,e),v(e)})},[]),(0,N.useEffect)(function(){p||function initUserLocationCity(){var e=X.default.getStorageSync(V.UserLocationCity);if(e){var t=(0,W.getCityInfo)(e,1),n={"id":t.id,"pid":t.pid,"ad_name":t.ad_name,"city":t.name};y(t.name),b(n)}}(),B()},[]),(0,N.useEffect)(function(){(0,Y.getAmapPoiList)(p+P).then(function(e){var t=X.default.getStorageSync(V.UserLocation),n=e.filter(function(e){return e.name&&e.adcode&&"string"==typeof e.location});n.forEach(function(e){e.distance=function getGreatCircleDistance(e,t){if(!e)return"";var n=e.split(","),a=t.split(","),o=Qa(n[0]),r=Qa(a[0]),i=o-r,u=Qa(n[1])-Qa(a[1]),s=2*Math.asin(Math.sqrt(Math.pow(Math.sin(i/2),2)+Math.cos(o)*Math.cos(r)*Math.pow(Math.sin(u/2),2)));return s*=6378137,(s=parseInt((Math.round(1e4*s)/1e4).toFixed(2)))<1e3?s+"米":(s/1e3).toFixed(1)+"千米"}(t,e.location)}),$(n)})},[P,p]);var B=function initUserPublishAreaHistory(){var e=X.default.getStorageSync(V.UserPublishAreaHistory)||[];L(e)};this.anonymousFunc0=function(){return Sa(!0)},this.anonymousFunc1=function(e){return function userClickInputAction(e){e.detail.value||z(!0)}(e)},this.anonymousFunc2=function(e){return function userEnterPosition(e){var t=e.detail.value;R(t),z(!t)}(e)},this.anonymousFunc3=function(){return function userCloseMap(){X.default.navigateBack()}()};var Q=H?D.map(function(e,t){e={"privateOriginal":(0,N.internal_get_original)(e)};var n=H?t+t:null,a="ffzzz"+t;return o.anonymousFunc4Map[a]=function(){return Xa(e.privateOriginal)},{"loopState__temp2":n,"_$indexKey":a,"privateOriginal":e.privateOriginal}}):[],q=U.map(function(e,t){e={"privateOriginal":(0,N.internal_get_original)(e)};var n=t+t,a="fgzzz"+t;return o.anonymousFunc5Map[a]=function(){return Xa(e.privateOriginal)},{"loopState__temp4":n,"_$indexKey2":a,"privateOriginal":e.privateOriginal}});return A&&N.propsManager.set({"data":d,"area":p,"userLoc":M,"userChangeCity":function userChangeCity(e){y(e)},"userTapCityBtn":Sa},s,u),Object.assign(this.__state,{"loopArray56":Q,"loopArray57":q,"$compid__46":s,"smAreaText":P,"showHistory":H,"histroyList":D,"lists":U,"IMGCDNURL":K.IMGCDNURL,"showCity":A,"area":p}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(e){for(var t,n=arguments.length,a=Array(1<n?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return this.anonymousFunc4Map[e]&&(t=this.anonymousFunc4Map)[e].apply(t,a)}},{"key":"anonymousFunc5","value":function anonymousFunc5(e){for(var t,n=arguments.length,a=Array(1<n?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return this.anonymousFunc5Map[e]&&(t=this.anonymousFunc5Map)[e].apply(t,a)}}]),RealnameMap);function RealnameMap(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,RealnameMap);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(RealnameMap.__proto__||Object.getPrototypeOf(RealnameMap)).apply(this,arguments));return e.config={"navigationBarTitleText":"地址选择"},e.$usedState=["loopArray56","loopArray57","$compid__46","smAreaText","showHistory","histroyList","lists","IMGCDNURL","showCity","area"],e.anonymousFunc4Map={},e.anonymousFunc5Map={},e.customComponents=["Cities"],e}o.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5"],o.$$componentPath="pages/map/realname/index",o.config={"navigationBarTitleText":"地址选择"},t.default=o,Page(n(0).default.createComponent(o,!0))},"142":function(e,t,n){}},[[141,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/map/realname/index"],{

/***/ "./src/pages/map/realname/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/map/realname/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/map/realname/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/map/realname/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _index3 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index4 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index5 = _interopRequireDefault(_index4);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/map/realname/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PI = Math.PI; // 数学 PI 常亮
var EARTH_RADIUS = 6378137.0; // 地球半径
// interface UserLastPublishRecruitArea {
//   location: string,
//   adcode: string,
//   title: string,
//   info: string
// }

var RealnameMap = function (_Taro$Component) {
  _inherits(RealnameMap, _Taro$Component);

  function RealnameMap() {
    _classCallCheck(this, RealnameMap);

    var _this = _possibleConstructorReturn(this, (RealnameMap.__proto__ || Object.getPrototypeOf(RealnameMap)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '地址选择'
    };

    _this.$usedState = ["loopArray56", "loopArray57", "$compid__46", "smAreaText", "showHistory", "histroyList", "lists", "IMGCDNURL", "showCity", "area"];
    _this.anonymousFunc4Map = {};
    _this.anonymousFunc5Map = {};
    _this.customComponents = ["Cities"];
    return _this;
  }

  _createClass(RealnameMap, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RealnameMap.prototype.__proto__ || Object.getPrototypeOf(RealnameMap.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__46"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__46 = _genCompid2[0],
          $compid__46 = _genCompid2[1];

      var setRealnameArea = (0, _redux.useSelector)(function (store) {
        return store['realname'].setRealnameArea;
      });

      var _useState = (0, _taroSwan.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          area = _useState2[0],
          setArea = _useState2[1];
      // 城市数据


      var _useState3 = (0, _taroSwan.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          areas = _useState4[0],
          setAreas = _useState4[1];
      // 选择详细地址信息
      // const [areaInfo, setAreaInfo] = useState<UserLastPublishRecruitArea>({
      //   title: '',
      //   adcode: '',
      //   location: '',
      //   info: ''
      // })
      // const [location, setLocation] = useState<string>('')
      // 用户定位城市


      var _useState5 = (0, _taroSwan.useState)({
        id: '',
        pid: '',
        city: '',
        ad_name: ''
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          userLoc = _useState6[0],
          setUserLoc = _useState6[1];
      // 是否显示城市


      var _useState7 = (0, _taroSwan.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          showCity = _useState8[0],
          setShowCity = _useState8[1];
      // 使用发布招工hook处理数据
      // const { area, setArea, setAreaInfo, setPublishArea } = useContext(context)
      // const [publishArea, setPublishArea] = useState<string>('')
      // 详细地址的输入框


      var _useState9 = (0, _taroSwan.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          smAreaText = _useState10[0],
          setSmAreaText = _useState10[1];
      // 关键词地区列表


      var _useState11 = (0, _taroSwan.useState)([]),
          _useState12 = _slicedToArray(_useState11, 2),
          lists = _useState12[0],
          setLists = _useState12[1];
      // 关键词地区列表的历史记录


      var _useState13 = (0, _taroSwan.useState)([]),
          _useState14 = _slicedToArray(_useState13, 2),
          histroyList = _useState14[0],
          setHistoryList = _useState14[1];
      // 显示关键词列表还是历史记录


      var _useState15 = (0, _taroSwan.useState)(false),
          _useState16 = _slicedToArray(_useState15, 2),
          showHistory = _useState16[0],
          setShowHistory = _useState16[1];
      // 设置adcode
      // const [adcode, setAdcode] = useState<string>('')
      // 获取城市数据


      (0, _taroSwan.useEffect)(function () {
        var areas = _taroSwan2.default.getStorageSync(_store.Areas);
        if (areas) {
          setAreas(areas);
        } else (0, _index.getAllAreas)().then(function (res) {
          // 存入缓存
          _taroSwan2.default.setStorageSync(_store.Areas, res);
          setAreas(res);
        });
      }, []);
      // 初始化用户定位信息
      var initUserLocationCity = function initUserLocationCity() {
        var userLoc = _taroSwan2.default.getStorageSync(_store.UserLocationCity);
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
      (0, _taroSwan.useEffect)(function () {
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
        _taroSwan2.default.navigateBack();
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
      (0, _taroSwan.useEffect)(function () {
        (0, _index3.getAmapPoiList)(area + smAreaText).then(function (data) {
          var loc = _taroSwan2.default.getStorageSync(_store.UserLocation);
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
        var userPublishAreaHistory = _taroSwan2.default.getStorageSync(_store.UserPublishAreaHistory);
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
          _taroSwan2.default.setStorageSync(_store.UserPublishAreaHistory, userPublishAreaHistory);
        } else {
          setHistoryList([item]);
          _taroSwan2.default.setStorageSync(_store.UserPublishAreaHistory, [item]);
        }
      };
      // 初始化用户点击小地区的历史记录
      var initUserPublishAreaHistory = function initUserPublishAreaHistory() {
        var userPublishAreaHistory = _taroSwan2.default.getStorageSync(_store.UserPublishAreaHistory) || [];
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
        (0, _index.checkAdcodeValid)(item.adcode).then(function (res) {
          if (res.errcode == "ok") {
            // setLocation(item.location)
            // setAdcode(item.adcode)
            // if (setAreaInfo) {
            setUserPublishAreaHistoryItem(item);
            // setAreaInfo({
            //   title: item.name,
            //   location: item.location,
            //   adcode: item.adcode,
            //   info: item.district
            // })
            // setPublishArea && setPublishArea(item.name)
            setRealnameArea(item.name);
            // }
            _taroSwan2.default.navigateBack();
          } else (0, _index4.ShowActionModal)({ msg: res.errmsg });
        }).catch(function () {
          (0, _index5.default)("网络错误，请求失败！");
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
      var loopArray56 = showHistory ? histroyList.map(function (item, index) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp2 = showHistory ? index + index : null;
        var _$indexKey = "ffzzz" + index;
        _this2.anonymousFunc4Map[_$indexKey] = function () {
          return userClickAreaItem(item.privateOriginal);
        };
        return {
          loopState__temp2: loopState__temp2,
          _$indexKey: _$indexKey,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      var loopArray57 = lists.map(function (item, index) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp4 = index + index;
        var _$indexKey2 = "fgzzz" + index;
        _this2.anonymousFunc5Map[_$indexKey2] = function () {
          return userClickAreaItem(item.privateOriginal);
        };
        return {
          loopState__temp4: loopState__temp4,
          _$indexKey2: _$indexKey2,
          privateOriginal: item.privateOriginal
        };
      });
      showCity && _taroSwan.propsManager.set({
        "data": areas,
        "area": area,
        "userLoc": userLoc,
        "userChangeCity": userChangeCity,
        "userTapCityBtn": userTapCityBtn
      }, $compid__46, $prevCompid__46);
      Object.assign(this.__state, {
        loopArray56: loopArray56,
        loopArray57: loopArray57,
        $compid__46: $compid__46,
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

  return RealnameMap;
}(_taroSwan2.default.Component);

RealnameMap.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5"];
RealnameMap.$$componentPath = "pages/map/realname/index";
RealnameMap.config = { navigationBarTitleText: '地址选择' };
exports.default = RealnameMap;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(RealnameMap, true));

/***/ })

},[["./src/pages/map/realname/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
