<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[38],{"48":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=n(0),T=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(A),B=n(2);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(49);var o=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Fleamarket,T.default.Component),r(Fleamarket,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0})(Fleamarket.prototype.__proto__||Object.getPrototypeOf(Fleamarket.prototype),"_constructor",this).call(this,e),this.$$refs=new T.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var r=this.$prefix,o=(0,A.genCompid)(r+"$compid__19"),a=S(o,2),i=a[0],u=a[1],c=(0,A.genCompid)(r+"$compid__20"),s=S(c,2),l=s[0],p=s[1],f=(0,A.genCompid)(r+"$compid__21"),y=S(f,2),_=y[0],d=y[1],m=(0,A.useState)(!1),h=S(m,2),g=h[0],v=h[1],b=(0,A.useState)([]),k=S(b,2),w=k[0],O=k[1],F=(0,A.useState)({"page":1,"list_type":"fleamarket","area_id":"","classify_id":"","attribute_id":"","keywords":""}),C=S(F,2),$=C[0],x=C[1];(0,A.useEffect)(function(){(0,B.getFleamarketList)($).then(function(e){T.default.hideNavigationBarLoading(),1===$.page?O([[].concat(_toConsumableArray(e))]):O([].concat(_toConsumableArray(w),[[].concat(_toConsumableArray(e))])),g&&v(!1)})},[$]),this.anonymousFunc0=function(){return function pullDownAction(){v(!0),x(j({},$,{"page":1}))}()},this.anonymousFunc1=function(){return function getNextPageData(){T.default.showNavigationBarLoading(),x(j({},$,{"page":$.page+1}))}()};var P=(0,A.internal_inline_style)({"height":"8px"});return A.propsManager.set({"placeholder":"跳蚤市场","value":""},u,i),A.propsManager.set({"data":[{"id":"area","text":"全国"},{"id":"classify","text":"选择分类"}]},p,l),A.propsManager.set({"data":w},d,_),Object.assign(this.__state,{"anonymousState__temp":P,"$compid__19":u,"$compid__20":p,"$compid__21":d,"refresh":g}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}}]),Fleamarket);function Fleamarket(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Fleamarket);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Fleamarket.__proto__||Object.getPrototypeOf(Fleamarket)).apply(this,arguments));return e.config={"navigationBarTitleText":"二手交易列表","enablePullDownRefresh":!1,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["anonymousState__temp","$compid__19","$compid__20","$compid__21","refresh"],e.customComponents=["Search","Condition","WechatNotice","UsedList","Tabbar"],e}o.$$events=["anonymousFunc0","anonymousFunc1"],o.$$componentPath="pages/used/lists/index",o.config={"navigationBarTitleText":"二手交易列表","enablePullDownRefresh":!1,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=o,Component(n(0).default.createComponent(o,!0))},"49":function(e,t,n){}},[[48,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/used/lists/index"],{

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

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

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

    _this.$usedState = ["anonymousState__temp", "$compid__19", "$compid__20", "$compid__21", "refresh"];
    _this.customComponents = ["Search", "Condition", "WechatNotice", "UsedList", "Tabbar"];
    return _this;
  }

  _createClass(Fleamarket, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Fleamarket.prototype.__proto__ || Object.getPrototypeOf(Fleamarket.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__19"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__19 = _genCompid2[0],
          $compid__19 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__20"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__20 = _genCompid4[0],
          $compid__20 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__21"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__21 = _genCompid6[0],
          $compid__21 = _genCompid6[1];
      // * 配置筛选条件


      var DEFAULT_CONDITION = [{ id: 'area', text: '全国' }, { id: 'classify', text: '选择分类' }];
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
        list_type: 'fleamarket',
        area_id: '',
        classify_id: '',
        attribute_id: '',
        keywords: ''
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          searchData = _useState6[0],
          setSearchData = _useState6[1];
      // * 请求列表数据


      (0, _taroWeapp.useEffect)(function () {
        (0, _index.getFleamarketList)(searchData).then(function (res) {
          _taroWeapp2.default.hideNavigationBarLoading();
          if (searchData.page === 1) {
            setLists([[].concat(_toConsumableArray(res))]);
          } else setLists([].concat(_toConsumableArray(lists), [[].concat(_toConsumableArray(res))]));
          if (refresh) {
            setRefresh(false);
          }
        });
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
      this.anonymousFunc0 = function () {
        return pullDownAction();
      };
      this.anonymousFunc1 = function () {
        return getNextPageData();
      };
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ height: '8px' });
      _taroWeapp.propsManager.set({
        "placeholder": "\u8DF3\u86A4\u5E02\u573A",
        "value": ""
      }, $compid__19, $prevCompid__19);
      _taroWeapp.propsManager.set({
        "data": DEFAULT_CONDITION
      }, $compid__20, $prevCompid__20);
      _taroWeapp.propsManager.set({
        "data": lists
      }, $compid__21, $prevCompid__21);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__19: $compid__19,
        $compid__20: $compid__20,
        $compid__21: $compid__21,
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

  return Fleamarket;
}(_taroWeapp2.default.Component);

Fleamarket.$$events = ["anonymousFunc0", "anonymousFunc1"];
Fleamarket.$$componentPath = "pages/used/lists/index";
Fleamarket.config = { navigationBarTitleText: '二手交易列表', enablePullDownRefresh: false, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = Fleamarket;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Fleamarket, true));

/***/ })

},[["./src/pages/used/lists/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
