<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[35],{"80":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var N=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},E=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var D=n(0),I=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(D),H=n(2),M=n(8),U=n(3),J=n(9);function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}n(81);var o=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Recruit,I.default.Component),r(Recruit,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0})(Recruit.prototype.__proto__||Object.getPrototypeOf(Recruit.prototype),"_constructor",this).call(this,t),this.$$refs=new I.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){function Ha(t){var e=(0,M.getCityInfo)(t);I.default.setStorageSync(U.UserListChooseCity,e),j([]),function editConditionAction(e,t){var n=JSON.parse(JSON.stringify(v)),r=n.findIndex(function(t){return t.id===e}),o=N({},n[r],{"text":t});n[r]=o,b(n)}("area",e.name),k(N({},F,{"page":1,"area_id":e.id}))}this.__state=t||this.state||{},this.__props=e||this.props||{};var r=this.$prefix,o=(0,D.genCompid)(r+"$compid__6"),i=E(o,2),a=i[0],u=i[1],c=(0,D.genCompid)(r+"$compid__7"),s=E(c,2),f=s[0],p=s[1],l=(0,D.genCompid)(r+"$compid__8"),y=E(l,2),d=y[0],_=y[1],h=I.default.getStorageSync(U.UserListChooseCity),g=(0,D.useState)([{"id":"area","text":h?h.name:"全国"},{"id":"work","text":"选择工种"},{"id":"filter","text":"最新"}]),m=E(g,2),v=m[0],b=m[1],C=(0,D.useState)(!1),w=E(C,2),O=w[0],A=w[1],S=(0,D.useState)([]),R=E(S,2),$=R[0],j=R[1],P=(0,D.useState)({"page":1,"list_type":"job","area_id":h?h.id:"","classify_id":"","keywords":"","joblisttype":"newest","token":""}),x=E(P,2),F=x[0],k=x[1];(0,D.useEffect)(function(){!function getRecruitListAction(){(0,H.getRecruitList)(F).then(function(t){I.default.hideNavigationBarLoading(),1===F.page?j([[].concat(_toConsumableArray(t))]):j([].concat(_toConsumableArray($),[[].concat(_toConsumableArray(t))])),O&&A(!1)})}(),F.area_id||function getUserLocation(){if(h)k(N({},F,{"page":1,"area_id":h.id}));else{var t=I.default.getStorageSync(U.UserLocationCity);if(t)return Ha(t);(0,J.userAuthLoction)().then(function(t){Ha(t)}).catch(function(){I.default.setStorageSync(U.UserListChooseCity,M.AREACHINA),j([]),k(N({},F,{"page":1,"area_id":M.AREACHINA.id}))})}}()},[F]),this.anonymousFunc0=function(){return function pullDownAction(){A(!0),k(N({},F,{"page":1}))}()},this.anonymousFunc1=function(){return function getNextPageData(){I.default.showNavigationBarLoading(),k(N({},F,{"page":F.page+1}))}()};var L=(0,D.internal_inline_style)({"height":"8px"});return this.anonymousFunc2=function(){return function userPublishRecruit(){I.default.navigateTo({"url":"/pages/recruit/publish/index"})}()},D.propsManager.set({"placeholder":"找活、找工作","value":""},u,a),D.propsManager.set({"data":v},p,f),D.propsManager.set({"data":$},_,d),Object.assign(this.__state,{"anonymousState__temp":L,"$compid__6":u,"$compid__7":p,"$compid__8":_,"refresh":O}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}}]),Recruit);function Recruit(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Recruit);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Recruit.__proto__||Object.getPrototypeOf(Recruit)).apply(this,arguments));return t.$usedState=["anonymousState__temp","$compid__6","$compid__7","$compid__8","refresh"],t.customComponents=["Search","Condition","WechatNotice","RecruitList"],t}o.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2"],o.$$componentPath="pages/recruit/lists/index",e.default=o,Component(n(0).default.createComponent(o))},"81":function(t,e,n){}},[[80,0,1]]]);
=======
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

    _this.$usedState = ["anonymousState__temp", "$compid__6", "$compid__7", "$compid__8", "refresh"];
    _this.customComponents = ["Search", "Condition", "WechatNotice", "RecruitList"];
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__6"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__6 = _genCompid2[0],
          $compid__6 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__7"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__7 = _genCompid4[0],
          $compid__7 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__8"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__8 = _genCompid6[0],
          $compid__8 = _genCompid6[1];
      // * 获取选择城市缓存


      var userListChooseCity = _taroWeapp2.default.getStorageSync(_store.UserListChooseCity);
      // * 配置筛选条件

      var _useState = (0, _taroWeapp.useState)([{ id: 'area', text: userListChooseCity ? userListChooseCity.name : '全国' }, { id: 'work', text: '选择工种' }, { id: 'filter', text: '最新' }]),
          _useState2 = _slicedToArray(_useState, 2),
          condition = _useState2[0],
          setCondition = _useState2[1];
      // * 标记是否是在刷新状态


      var _useState3 = (0, _taroWeapp.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          refresh = _useState4[0],
          setRefresh = _useState4[1];
      // * 定义列表数组


      var _useState5 = (0, _taroWeapp.useState)([]),
          _useState6 = _slicedToArray(_useState5, 2),
          lists = _useState6[0],
          setLists = _useState6[1];
      // * 定义data


      var _useState7 = (0, _taroWeapp.useState)({
        page: 1,
        list_type: 'job',
        area_id: userListChooseCity ? userListChooseCity.id : '',
        classify_id: '',
        keywords: '',
        joblisttype: 'newest',
        token: ''
      }),
          _useState8 = _slicedToArray(_useState7, 2),
          searchData = _useState8[0],
          setSearchData = _useState8[1];
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
          _taroWeapp2.default.hideNavigationBarLoading();
          if (searchData.page === 1) {
            setLists([[].concat(_toConsumableArray(res))]);
          } else setLists([].concat(_toConsumableArray(lists), [[].concat(_toConsumableArray(res))]));
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
        _taroWeapp2.default.navigateTo({ url: '/pages/recruit/publish/index' });
      };
      this.anonymousFunc0 = function () {
        return pullDownAction();
      };
      this.anonymousFunc1 = function () {
        return getNextPageData();
      };
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ height: '8px' });
      this.anonymousFunc2 = function () {
        return userPublishRecruit();
      };
      _taroWeapp.propsManager.set({
        "placeholder": "\u627E\u6D3B\u3001\u627E\u5DE5\u4F5C",
        "value": ""
      }, $compid__6, $prevCompid__6);
      _taroWeapp.propsManager.set({
        "data": condition
      }, $compid__7, $prevCompid__7);
      _taroWeapp.propsManager.set({
        "data": lists
      }, $compid__8, $prevCompid__8);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__6: $compid__6,
        $compid__7: $compid__7,
        $compid__8: $compid__8,
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

},[["./src/pages/recruit/lists/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
