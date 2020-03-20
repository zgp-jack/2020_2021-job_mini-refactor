<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[26],{"38":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var y=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var v=r(0),_=_interopRequireDefault(v),h=r(13),g=_interopRequireDefault(r(39)),R=r(4),T=r(18);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(40);var o=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,_.default.Component),n(Index,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0})(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"_constructor",this).call(this,e),this.$$refs=new _.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,r){this.__state=e||this.state||{},this.__props=t||this.props||{};var n=this.$prefix,o=(0,v.genCompid)(n+"$compid__0"),a=y(o,2),i=a[0],u=a[1],l=(0,R.useDispatch)(),f=(0,v.useRouter)().params.type,c=(0,R.useSelector)(function(e){return e.tabbar.key}),s=(0,v.useState)(0),p=y(s,2),d=p[0],b=p[1];return(0,v.usePullDownRefresh)(function(){b(d+1)}),(0,v.useEffect)(function(){(0,h.typeInTabbar)(f)?l((0,T.changeTabbar)(f)):l((0,T.changeTabbar)(h.RECRUIT))},[f]),(0,v.useEffect)(function(){if(c){var e=g.default[c];_.default.setNavigationBarTitle({"title":e.navigationBarTitleText}),_.default.setNavigationBarColor({"backgroundColor":e.navigationBarBackgroundColor||"#0099ff","frontColor":"#ffffff"})}},[c]),v.propsManager.set({"notredirect":!0},u,i),Object.assign(this.__state,{"$compid__0":u,"tabKey":c,"HOME":h.HOME,"RECRUIT":h.RECRUIT,"RESUME":h.RESUME,"MEMBER":h.MEMBER}),this.__state}}]),Index);function Index(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["$compid__0","tabKey","HOME","RECRUIT","RESUME","MEMBER"],e.customComponents=["Home","Recruit","Resume","Member","Tabbar"],e}o.$$events=[],o.$$componentPath="pages/index/index",o.config={"navigationBarTitleText":"","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=o,Component(r(0).default.createComponent(o,!0))},"39":function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{"value":!0});var o=r(13);function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}var a=(_defineProperty(n={"home":{"navigationBarTitleText":"首页","enablePullDownRefresh":!0}},o.RECRUIT,{"navigationBarTitleText":"招工","enablePullDownRefresh":!0}),_defineProperty(n,o.RESUME,{"navigationBarTitleText":"找活","enablePullDownRefresh":!0}),_defineProperty(n,o.MEMBER,{"navigationBarTitleText":"会员","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#2179f6"}),n);t.default=a},"40":function(e,t,r){}},[[38,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/config/pages/index.ts":
/*!***********************************!*\
  !*** ./src/config/pages/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IndexTabbarConfig;

var _tabbar = __webpack_require__(/*! ../../constants/tabbar */ "./src/constants/tabbar.ts");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IndexTabbarConfig = (_IndexTabbarConfig = {
  'home': {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true
  }
}, _defineProperty(_IndexTabbarConfig, _tabbar.RECRUIT, {
  navigationBarTitleText: '招工',
  enablePullDownRefresh: true
}), _defineProperty(_IndexTabbarConfig, _tabbar.RESUME, {
  navigationBarTitleText: '找活',
  enablePullDownRefresh: true
}), _defineProperty(_IndexTabbarConfig, _tabbar.MEMBER, {
  navigationBarTitleText: '会员',
  enablePullDownRefresh: true,
  navigationBarBackgroundColor: '#2179f6'
}), _IndexTabbarConfig);
exports.default = IndexTabbarConfig;

/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
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

var _tabbar = __webpack_require__(/*! ../../constants/tabbar */ "./src/constants/tabbar.ts");

var _index = __webpack_require__(/*! ../../config/pages/index */ "./src/config/pages/index.ts");

var _index2 = _interopRequireDefault(_index);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _tabbar2 = __webpack_require__(/*! ../../actions/tabbar */ "./src/actions/tabbar.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    _classCallCheck(this, Index);

    var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '',
      enablePullDownRefresh: true,
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: "dark"
    };

    _this.$usedState = ["$compid__0", "tabKey", "HOME", "RECRUIT", "RESUME", "MEMBER"];
    _this.customComponents = ["Home", "Recruit", "Resume", "Member", "Tabbar"];
    return _this;
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__0"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__0 = _genCompid2[0],
          $compid__0 = _genCompid2[1];

      var dispatch = (0, _redux.useDispatch)();
      // 初始化页面参数
      var router = (0, _taroWeapp.useRouter)();
      var type = router.params.type;
      // 获取当前tabbar高亮值

      var tabKey = (0, _redux.useSelector)(function (state) {
        return state.tabbar.key;
      });
      // 标记是否触发下拉刷新

      var _useState = (0, _taroWeapp.useState)(0),
          _useState2 = _slicedToArray(_useState, 2),
          pulldown = _useState2[0],
          setPulldown = _useState2[1];
      // 监听页面下拉刷新


      (0, _taroWeapp.usePullDownRefresh)(function () {
        setPulldown(pulldown + 1);
      });
      // 初始化底部显示页面
      (0, _taroWeapp.useEffect)(function () {
        if ((0, _tabbar.typeInTabbar)(type)) {
          dispatch((0, _tabbar2.changeTabbar)(type));
        } else {
          dispatch((0, _tabbar2.changeTabbar)(_tabbar.RECRUIT));
        }
      }, [type]);
      // 初始化页面配置信息
      (0, _taroWeapp.useEffect)(function () {
        if (!tabKey) {
          return;
        }
        var data = _index2.default[tabKey];
        _taroWeapp2.default.setNavigationBarTitle({ title: data.navigationBarTitleText });
        _taroWeapp2.default.setNavigationBarColor({
          backgroundColor: data.navigationBarBackgroundColor || '#0099ff',
          frontColor: '#ffffff'
        });
      }, [tabKey]);
      _taroWeapp.propsManager.set({
        "notredirect": true
      }, $compid__0, $prevCompid__0);
      Object.assign(this.__state, {
        $compid__0: $compid__0,
        tabKey: tabKey,
        HOME: _tabbar.HOME,
        RECRUIT: _tabbar.RECRUIT,
        RESUME: _tabbar.RESUME,
        MEMBER: _tabbar.MEMBER
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp2.default.Component);

Index.$$events = [];
Index.$$componentPath = "pages/index/index";
Index.config = { navigationBarTitleText: '', enablePullDownRefresh: true, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = Index;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ })

},[["./src/pages/index/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
