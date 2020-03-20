<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[37],{"101":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},k=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var S=r(0),F=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(S),D=r(2);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}r(102);var o=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Recruit,F.default.Component),n(Recruit,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0})(Recruit.prototype.__proto__||Object.getPrototypeOf(Recruit.prototype),"_constructor",this).call(this,e),this.$$refs=new F.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,r){this.__state=e||this.state||{},this.__props=t||this.props||{};var n=this.$prefix,o=(0,S.genCompid)(n+"$compid__12"),a=k(o,2),i=a[0],u=a[1],c=(0,S.genCompid)(n+"$compid__13"),s=k(c,2),p=s[0],l=s[1],f=(0,S.genCompid)(n+"$compid__14"),_=k(f,2),y=_[0],d=_[1],m=(0,S.useState)(!1),h=k(m,2),v=h[0],g=h[1],b=(0,S.useState)([]),w=k(b,2),O=w[0],$=w[1],C=(0,S.useState)({"page":1,"occupations":"","province":"","keywords":"","sort":"newest","location":""}),R=k(C,2),j=R[0],P=R[1];(0,S.useEffect)(function(){(0,D.getResumeList)(j).then(function(e){F.default.hideNavigationBarLoading(),1===j.page?$([[].concat(_toConsumableArray(e.errmsg))]):$([].concat(_toConsumableArray(O),[[].concat(_toConsumableArray(e.errmsg))])),v&&g(!1)})},[j]),this.anonymousFunc0=function(){return function pullDownAction(){g(!0),P(A({},j,{"page":1}))}()},this.anonymousFunc1=function(){return function getNextPageData(){P(A({},j,{"page":j.page+1}))}()};var x=(0,S.internal_inline_style)({"height":"8px"});return S.propsManager.set({"placeholder":"找工人，找队伍，找班组","value":""},u,i),S.propsManager.set({"data":[{"id":"area","text":"全国"},{"id":"work","text":"选择工种"},{"id":"type","text":"队伍"},{"id":"filter","text":"推荐"}]},l,p),S.propsManager.set({"data":O},d,y),Object.assign(this.__state,{"anonymousState__temp":x,"$compid__12":u,"$compid__13":l,"$compid__14":d,"refresh":v}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}}]),Recruit);function Recruit(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Recruit);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Recruit.__proto__||Object.getPrototypeOf(Recruit)).apply(this,arguments));return e.$usedState=["anonymousState__temp","$compid__12","$compid__13","$compid__14","refresh"],e.customComponents=["Search","Condition","WechatNotice","ResumeList"],e}o.$$events=["anonymousFunc0","anonymousFunc1"],o.$$componentPath="pages/resume/lists/index",t.default=o,Component(r(0).default.createComponent(o))},"102":function(e,t,r){}},[[101,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/resume/lists/index"],{

/***/ "./src/pages/resume/lists/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/resume/lists/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/lists/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/resume/lists/index.tsx ***!
  \******************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/lists/index.scss");

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

    _this.$usedState = ["anonymousState__temp", "$compid__12", "$compid__13", "$compid__14", "refresh"];
    _this.customComponents = ["Search", "Condition", "WechatNotice", "ResumeList"];
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__12"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__12 = _genCompid2[0],
          $compid__12 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__13"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__13 = _genCompid4[0],
          $compid__13 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__14"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__14 = _genCompid6[0],
          $compid__14 = _genCompid6[1];
      // * 筛选数据


      var DEFAULT_CONDITION = [{ id: 'area', text: '全国' }, { id: 'work', text: '选择工种' }, { id: 'type', text: '队伍' }, { id: 'filter', text: '推荐' }];
      // * 标记是否是在刷新状态

      var _useState = (0, _taroWeapp.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          refresh = _useState2[0],
          setRefresh = _useState2[1];
      // * 定义列表数组


      var _useState3 = (0, _taroWeapp.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          lists = _useState4[0],
          setLists = _useState4[1];
      // * 定义data


      var _useState5 = (0, _taroWeapp.useState)({
        page: 1,
        occupations: '',
        province: '',
        keywords: '',
        sort: 'newest',
        location: ''
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          searchData = _useState6[0],
          setSearchData = _useState6[1];
      // * 请求列表数据


      (0, _taroWeapp.useEffect)(function () {
        (0, _index.getResumeList)(searchData).then(function (res) {
          _taroWeapp2.default.hideNavigationBarLoading();
          if (searchData.page === 1) {
            setLists([[].concat(_toConsumableArray(res.errmsg))]);
          } else setLists([].concat(_toConsumableArray(lists), [[].concat(_toConsumableArray(res.errmsg))]));
          if (refresh) {
            setRefresh(false);
          }
        });
      }, [searchData]);
      // * 监听下拉刷新
      // * 监听下拉刷新
      var pullDownAction = function pullDownAction() {
        setRefresh(true);
        setSearchData(_extends({}, searchData, { page: 1 }));
      };
      // * 触底加载下一页
      var getNextPageData = function getNextPageData() {
        setSearchData(_extends({}, searchData, { page: searchData.page + 1 }));
      };
      this.anonymousFunc0 = function () {
        return pullDownAction();
      };
      this.anonymousFunc1 = function () {
        return getNextPageData();
      };
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ height: '8px' });
      _taroWeapp.propsManager.set({
        "placeholder": "\u627E\u5DE5\u4EBA\uFF0C\u627E\u961F\u4F0D\uFF0C\u627E\u73ED\u7EC4",
        "value": ""
      }, $compid__12, $prevCompid__12);
      _taroWeapp.propsManager.set({
        "data": DEFAULT_CONDITION
      }, $compid__13, $prevCompid__13);
      _taroWeapp.propsManager.set({
        "data": lists
      }, $compid__14, $prevCompid__14);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        $compid__14: $compid__14,
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
  }]);

  return Recruit;
}(_taroWeapp2.default.Component);

Recruit.$$events = ["anonymousFunc0", "anonymousFunc1"];
Recruit.$$componentPath = "pages/resume/lists/index";
exports.default = Recruit;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Recruit));

/***/ })

},[["./src/pages/resume/lists/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
