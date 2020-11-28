<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[86],{"113":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},W=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(a=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{!a&&u.return&&u.return()}finally{if(r)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var z=n(0),G=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(z),H=n(2),K=n(6);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(114);var r=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Fleamarket,G.default.Component),a(Fleamarket,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0})(Fleamarket.prototype.__proto__||Object.getPrototypeOf(Fleamarket.prototype),"_constructor",this).call(this,e),this.$$refs=new G.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var a=this.$prefix,r=(0,z.genCompid)(a+"$compid__37"),o=W(r,2),i=o[0],u=o[1],s=(0,z.genCompid)(a+"$compid__38"),c=W(s,2),l=c[0],p=c[1],f=(0,z.genCompid)(a+"$compid__39"),_=W(f,2),y=_[0],m=_[1],d=(0,z.useState)(!0),h=W(d,2),g=h[0],v=h[1],b=G.default.getStorageSync(K.UserListChooseCity),S=(0,z.useState)(!1),k=W(S,2),w=k[0],C=k[1],O=(0,z.useState)([]),F=W(O,2),T=F[0],P=F[1],$=(0,z.useState)({"page":1,"list_type":"fleamarket","area_id":b.id,"classify_id":"0","attribute_id":"","keywords":""}),j=W($,2),x=j[0],A=j[1],D=(0,z.useState)(""),B=W(D,2),R=B[0],M=B[1],E=(0,z.useState)(0),L=W(E,2),N=L[0],U=L[1];function Sa(e){return function inputSearch(e){M(e)}(e)}function Ta(){return function setSearchDatas(e,t){x[e]=t,A(q({},x,{"page":1}))}("keywords",R)}(0,z.useEffect)(function(){(0,H.getFleamarketList)(x).then(function(e){G.default.hideNavigationBarLoading(),e.length||v(!1),1===x.page?(v(!0),I(),P([[].concat(_toConsumableArray(e))])):P([].concat(_toConsumableArray(T),[[].concat(_toConsumableArray(e))])),w&&C(!1)})},[x]);var I=function goToScrollTop(){U(N?0:.1)};this.anonymousFunc0=function(){return function pullDownAction(){C(!0),A(q({},x,{"page":1}))}()},this.anonymousFunc1=function(){return function getNextPageData(){g&&(G.default.showNavigationBarLoading(),A(q({},x,{"page":x.page+1})))}()};var J=(0,z.internal_inline_style)({"height":"8px"});return z.propsManager.set({"placeholder":"跳蚤市场","value":"","setRemark":Sa,"setSearchData":Ta},u,i),z.propsManager.set({"setSearchData":function searchChange(e){A(q({},x,e,{"page":1}))}},p,l),z.propsManager.set({"data":T,"hasMore":g},m,y),Object.assign(this.__state,{"anonymousState__temp":Sa,"anonymousState__temp2":Ta,"anonymousState__temp3":J,"$compid__37":u,"$compid__38":p,"$compid__39":m,"refresh":w,"listScrollTop":N}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}}]),Fleamarket);function Fleamarket(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Fleamarket);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Fleamarket.__proto__||Object.getPrototypeOf(Fleamarket)).apply(this,arguments));return e.config={"navigationBarTitleText":"二手交易列表","enablePullDownRefresh":!1,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","$compid__37","$compid__38","$compid__39","refresh","listScrollTop"],e.customComponents=["Search","UsedCondition","WechatNotice","UsedList","Tabbar"],e}r.$$events=["anonymousFunc0","anonymousFunc1"],r.$$componentPath="pages/used/lists/index",r.config={"navigationBarTitleText":"二手交易列表","enablePullDownRefresh":!1,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=r,Page(n(0).default.createComponent(r,!0))},"114":function(e,t,n){}},[[113,0,1]]]);
=======
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

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__37", "$compid__38", "$compid__39", "refresh", "listScrollTop"];
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__37"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__37 = _genCompid2[0],
          $compid__37 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__38"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__38 = _genCompid4[0],
          $compid__38 = _genCompid4[1];

      var _genCompid5 = (0, _taroSwan.genCompid)(__prefix + "$compid__39"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__39 = _genCompid6[0],
          $compid__39 = _genCompid6[1];
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
      }, $compid__37, $prevCompid__37);
      _taroSwan.propsManager.set({
        "setSearchData": searchChange
      }, $compid__38, $prevCompid__38);
      _taroSwan.propsManager.set({
        "data": lists,
        "hasMore": hasMore
      }, $compid__39, $prevCompid__39);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__37: $compid__37,
        $compid__38: $compid__38,
        $compid__39: $compid__39,
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
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
