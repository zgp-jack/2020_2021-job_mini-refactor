<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[60],{"117":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),e.contextItem=void 0;var st=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],o=!0,a=!1,r=void 0;try{for(var i,u=t[Symbol.iterator]();!(o=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(t){a=!0,r=t}finally{try{!o&&u.return&&u.return()}finally{if(a)throw r}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var ct=n(0),lt=_interopRequireDefault(ct),pt=n(2),ft=n(1),yt=n(6),mt=n(9),dt=n(7),ht=n(4),vt=_interopRequireDefault(ht),_t=n(3),gt=n(16);function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}n(118);var bt=Math.PI,Ft=e.contextItem=(0,ct.createContext)({}),a=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(ResumeMap,lt.default.Component),o(ResumeMap,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:get(a,e,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0})(ResumeMap.prototype.__proto__||Object.getPrototypeOf(ResumeMap.prototype),"_constructor",this).call(this,t),this.$$refs=new lt.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){var a=this;this.__state=t||this.state||{},this.__props=e||this.props||{};var o=this.$prefix,r=(0,ct.genCompid)(o+"$compid__43"),i=st(r,2),u=i[0],s=i[1],c=(0,ct.useRouter)().params,l=c.provinceAdress,p=c.provinceAdressName,f=(0,_t.useDispatch)(),y=(0,ct.useState)(l),m=st(y,2),d=m[0],h=m[1],v=(0,ct.useState)(p),_=st(v,2),g=_[0],b=_[1],F=(0,ct.useState)([]),M=st(F,2),S=M[0],C=M[1],A=(0,ct.useState)(""),O=st(A,2),w=O[0],k=(O[1],(0,ct.useState)({"id":"","pid":"","city":"","ad_name":""})),P=st(k,2),R=P[0],x=P[1],$=(0,ct.useState)(!1),j=st($,2),I=j[0],D=j[1],L=(0,ct.useState)(""),T=st(L,2),E=T[0],U=(T[1],(0,ct.useState)("")),z=st(U,2),B=z[0],H=z[1],q=(0,ct.useState)([]),G=st(q,2),N=G[0],J=G[1],K=(0,ct.useState)([]),Q=st(K,2),V=Q[0],W=Q[1],X=(0,ct.useState)(!1),Y=st(X,2),Z=Y[0],tt=Y[1],et=(0,ct.useState)(""),nt=st(et,2),ot=nt[0];function kb(t){return parseFloat(t)*bt/180}function mb(t){D(t)}function rb(e){(0,pt.checkAdcodeAction)({"adcode":e.adcode}).then(function(t){"ok"==t.errcode?(f((0,gt.setAreaInfo)({"title":e.name,"location":e.location,"adcode":e.adcode,"info":e.district,"provice":t.province,"city":t.city})),lt.default.navigateBack()):(0,ht.ShowActionModal)({"msg":t.errmsg})}).catch(function(t){(0,vt.default)("网络错误，请求失败！")})}nt[1],(0,ct.useEffect)(function(){var t=lt.default.getStorageSync(yt.Areas);t?C(t):(0,pt.getAllAreas)().then(function(t){lt.default.setStorageSync(yt.Areas,t),C(t)})},[]),(0,ct.useEffect)(function(){g||function initUserLocationCity(){var t=lt.default.getStorageSync(yt.UserLocationCity);if(t){var e=(0,mt.getCityInfo)(t,1),n={"id":e.id,"pid":e.pid,"ad_name":e.ad_name,"city":e.name};x(n)}}(),at()},[]),(0,ct.useEffect)(function(){console.error(d,"1111"),(0,dt.getAmapPoiList)(g+B).then(function(t){var e=lt.default.getStorageSync(yt.UserLocation),n=t.filter(function(t){return t.name&&t.adcode&&"string"==typeof t.location});n.forEach(function(t){t.distance=function getGreatCircleDistance(t,e){if(!t)return"";var n=t.split(","),o=e.split(","),a=kb(n[0]),r=kb(o[0]),i=a-r,u=kb(n[1])-kb(o[1]),s=2*Math.asin(Math.sqrt(Math.pow(Math.sin(i/2),2)+Math.cos(a)*Math.cos(r)*Math.pow(Math.sin(u/2),2)));return s*=6378137,(s=parseInt((Math.round(1e4*s)/1e4).toFixed(2)))<1e3?s+"米":(s/1e3).toFixed(1)+"千米"}(e,t.location)}),J(n)})},[B,g]);var at=function initUserPublishAreaHistory(){var t=lt.default.getStorageSync(yt.UserPublishAreaHistory)||[];W(t)},rt={"publishArea":E,"location":w,"adcode":ot};Ft.Provider(rt),this.anonymousFunc0=function(){return mb(!0)},this.anonymousFunc1=function(t){return function userClickInputAction(t){t.detail.value||tt(!0)}(t)},this.anonymousFunc2=function(t){return function userEnterPosition(t){var e=t.detail.value;H(e),tt(!e)}(t)},this.anonymousFunc3=function(){return function closeHistoryClient(){tt(!1),H("")}()},this.anonymousFunc4=function(){return function userCloseMap(){lt.default.navigateBack()}()};var it=Z?V.map(function(t,e){t={"privateOriginal":(0,ct.internal_get_original)(t)};var n=Z?e+e:null,o="fazzz"+e;return a.anonymousFunc5Map[o]=function(){return rb(t.privateOriginal)},{"loopState__temp2":n,"_$indexKey":o,"privateOriginal":t.privateOriginal}}):[],ut=N.map(function(t,e){t={"privateOriginal":(0,ct.internal_get_original)(t)};var n=e+e,o="fbzzz"+e;return a.anonymousFunc6Map[o]=function(){return rb(t.privateOriginal)},{"loopState__temp4":n,"_$indexKey2":o,"privateOriginal":t.privateOriginal}});return I&&ct.propsManager.set({"data":S,"area":d,"userLoc":R,"userChangeCity":function userChangeCity(t,e){e&&b(e.ad_name),h(t)},"userTapCityBtn":mb},s,u),Object.assign(this.__state,{"loopArray48":it,"loopArray49":ut,"$compid__43":s,"smAreaText":B,"showHistory":Z,"histroyList":V,"lists":N,"IMGCDNURL":ft.IMGCDNURL,"showCity":I,"area":d}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(t){for(var e,n=arguments.length,o=Array(1<n?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.anonymousFunc5Map[t]&&(e=this.anonymousFunc5Map)[t].apply(e,o)}},{"key":"anonymousFunc6","value":function anonymousFunc6(t){for(var e,n=arguments.length,o=Array(1<n?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];return this.anonymousFunc6Map[t]&&(e=this.anonymousFunc6Map)[t].apply(e,o)}}]),ResumeMap);function ResumeMap(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ResumeMap);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(ResumeMap.__proto__||Object.getPrototypeOf(ResumeMap)).apply(this,arguments));return t.config={"navigationBarTitleText":"地址选择"},t.$usedState=["loopArray48","loopArray49","$compid__43","smAreaText","showHistory","histroyList","lists","IMGCDNURL","showCity","area"],t.anonymousFunc5Map={},t.anonymousFunc6Map={},t.customComponents=["Cities"],t}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6"],a.$$componentPath="pages/map/resume/index",a.config={"navigationBarTitleText":"地址选择"},e.default=a,Page(n(0).default.createComponent(a,!0))},"118":function(t,e,n){}},[[117,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/map/resume/index"],{

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
var contextItem = exports.contextItem = (0, _taroSwan.createContext)({});

var ResumeMap = function (_Taro$Component) {
  _inherits(ResumeMap, _Taro$Component);

  function ResumeMap() {
    _classCallCheck(this, ResumeMap);

    var _this = _possibleConstructorReturn(this, (ResumeMap.__proto__ || Object.getPrototypeOf(ResumeMap)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '地址选择'
    };

    _this.$usedState = ["loopArray48", "loopArray49", "$compid__43", "smAreaText", "showHistory", "histroyList", "lists", "IMGCDNURL", "showCity", "area"];
    _this.anonymousFunc5Map = {};
    _this.anonymousFunc6Map = {};
    _this.customComponents = ["Cities"];
    return _this;
  }

  _createClass(ResumeMap, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ResumeMap.prototype.__proto__ || Object.getPrototypeOf(ResumeMap.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__43"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__43 = _genCompid2[0],
          $compid__43 = _genCompid2[1];

      var router = (0, _taroSwan.useRouter)();
      var _router$params = router.params,
          provinceAdress = _router$params.provinceAdress,
          provinceAdressName = _router$params.provinceAdressName;
      // 获取dispatch分发action

      var dispatch = (0, _redux.useDispatch)();

      var _useState = (0, _taroSwan.useState)(provinceAdress),
          _useState2 = _slicedToArray(_useState, 2),
          area = _useState2[0],
          setArea = _useState2[1];

      var _useState3 = (0, _taroSwan.useState)(provinceAdressName),
          _useState4 = _slicedToArray(_useState3, 2),
          areaName = _useState4[0],
          setAreasName = _useState4[1];
      // 城市数据


      var _useState5 = (0, _taroSwan.useState)([]),
          _useState6 = _slicedToArray(_useState5, 2),
          areas = _useState6[0],
          setAreas = _useState6[1];
      // 选择详细地址信息
      // const [areaInfo, setAreaInfo] = useState<UserLastPublishRecruitArea>({
      //   title: '',
      //   adcode: '',
      //   location: '',
      //   info: '',
      // })


      var _useState7 = (0, _taroSwan.useState)(''),
          _useState8 = _slicedToArray(_useState7, 2),
          location = _useState8[0],
          setLocation = _useState8[1];
      // 用户定位城市


      var _useState9 = (0, _taroSwan.useState)({
        id: '',
        pid: '',
        city: '',
        ad_name: ''
      }),
          _useState10 = _slicedToArray(_useState9, 2),
          userLoc = _useState10[0],
          setUserLoc = _useState10[1];
      // 是否显示城市


      var _useState11 = (0, _taroSwan.useState)(false),
          _useState12 = _slicedToArray(_useState11, 2),
          showCity = _useState12[0],
          setShowCity = _useState12[1];
      // 获取redux中区域名称数据
      // const area: string = useSelector<any, string>(state => state.MyArea)
      // 获取redux中定位状态
      // const { area, setArea, setAreaInfo, setPublishArea } = useContext(context)


      var _useState13 = (0, _taroSwan.useState)(''),
          _useState14 = _slicedToArray(_useState13, 2),
          publishArea = _useState14[0],
          setPublishArea = _useState14[1];
      // 详细地址的输入框


      var _useState15 = (0, _taroSwan.useState)(''),
          _useState16 = _slicedToArray(_useState15, 2),
          smAreaText = _useState16[0],
          setSmAreaText = _useState16[1];
      // 关键词地区列表


      var _useState17 = (0, _taroSwan.useState)([]),
          _useState18 = _slicedToArray(_useState17, 2),
          lists = _useState18[0],
          setLists = _useState18[1];
      // 关键词地区列表的历史记录


      var _useState19 = (0, _taroSwan.useState)([]),
          _useState20 = _slicedToArray(_useState19, 2),
          histroyList = _useState20[0],
          setHistoryList = _useState20[1];
      // 显示关键词列表还是历史记录


      var _useState21 = (0, _taroSwan.useState)(false),
          _useState22 = _slicedToArray(_useState21, 2),
          showHistory = _useState22[0],
          setShowHistory = _useState22[1];
      // 设置adcode


      var _useState23 = (0, _taroSwan.useState)(''),
          _useState24 = _slicedToArray(_useState23, 2),
          adcode = _useState24[0],
          setAdcode = _useState24[1];
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
          setUserLoc(userLocData);
        }
      };
      // 初始化所需数据
      (0, _taroSwan.useEffect)(function () {
        if (!areaName) {
          initUserLocationCity();
        }
        initUserPublishAreaHistory();
      }, []);
      // 用户切换城市
      var userChangeCity = function userChangeCity(city, citys) {
        if (citys) {
          setAreasName(citys.ad_name);
        }
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
        console.error(area, '1111');
        (0, _index3.getAmapPoiList)(areaName + smAreaText).then(function (data) {
          var loc = _taroSwan2.default.getStorageSync(_store.UserLocation);
          var lists = data.filter(function (item) {
            return item.name && item.adcode && typeof item.location === 'string';
          });
          lists.forEach(function (item) {
            item.distance = getGreatCircleDistance(loc, item.location);
          });
          setLists(lists);
        });
      }, [smAreaText, areaName]);
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
            _taroSwan2.default.navigateBack();
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
      // 用户点击输入框后面的×关闭当前窗口
      var closeHistoryClient = function closeHistoryClient() {
        setShowHistory(false);
        setSmAreaText('');
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
        return closeHistoryClient();
      };
      this.anonymousFunc4 = function () {
        return userCloseMap();
      };
      var loopArray48 = showHistory ? histroyList.map(function (item, index) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp2 = showHistory ? index + index : null;
        var _$indexKey = "fazzz" + index;
        _this2.anonymousFunc5Map[_$indexKey] = function () {
          return userClickAreaItem(item.privateOriginal);
        };
        return {
          loopState__temp2: loopState__temp2,
          _$indexKey: _$indexKey,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      var loopArray49 = lists.map(function (item, index) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp4 = index + index;
        var _$indexKey2 = "fbzzz" + index;
        _this2.anonymousFunc6Map[_$indexKey2] = function () {
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
      }, $compid__43, $prevCompid__43);
      Object.assign(this.__state, {
        loopArray48: loopArray48,
        loopArray49: loopArray49,
        $compid__43: $compid__43,
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
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(_$indexKey) {
      var _anonymousFunc5Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc5Map[_$indexKey] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey].apply(_anonymousFunc5Map, e);
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(_$indexKey2) {
      var _anonymousFunc6Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc6Map[_$indexKey2] && (_anonymousFunc6Map = this.anonymousFunc6Map)[_$indexKey2].apply(_anonymousFunc6Map, e);
    }
  }]);

  return ResumeMap;
}(_taroSwan2.default.Component);

ResumeMap.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6"];
ResumeMap.$$componentPath = "pages/map/resume/index";
ResumeMap.config = { navigationBarTitleText: '地址选择' };
exports.default = ResumeMap;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(ResumeMap, true));

/***/ })

},[["./src/pages/map/resume/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
