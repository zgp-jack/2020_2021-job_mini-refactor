<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[28],{"58":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},p=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t};function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=r(0),o=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(h),y=r(2);function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}r(10);var a=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Integral,o.default.Component),n(Integral,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0})(Integral.prototype.__proto__||Object.getPrototypeOf(Integral.prototype),"_constructor",this).call(this,t),this.$$refs=new o.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,r){this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix;var n=(0,h.useState)({"type":"official","page":1}),o=p(n,2),a=o[0],i=o[1],s=(0,h.useState)({"lists":[],"hasmore":!0}),l=p(s,2),u=l[0],c=l[1];return(0,h.useEffect)(function(){u.hasmore&&(0,y.getIntegralList)(a).then(function(t){var e=t.list.length;e?1===a.page?e<t.pageSize?c({"hasmore":!1,"lists":t.list}):c(f({},u,{"lists":t.list})):c(f({},u,{"lists":[].concat(_toConsumableArray(u.lists),_toConsumableArray(t.list))})):c(f({},u,{"hasmore":!1}))})},[a]),(0,h.useReachBottom)(function(){i(f({},a,{"page":a.page+1}))}),(0,h.usePullDownRefresh)(function(){i(f({},a,{"page":1}))}),Object.assign(this.__state,{"lists":u}),this.__state}}]),Integral);function Integral(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Integral);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Integral.__proto__||Object.getPrototypeOf(Integral)).apply(this,arguments));return t.config={"navigationBarTitleText":"积分来源记录","enablePullDownRefresh":!0},t.$usedState=["lists"],t.customComponents=[],t}a.$$events=[],a.$$componentPath="pages/integral/official/index",a.config={"navigationBarTitleText":"积分来源记录","enablePullDownRefresh":!0},e.default=a,Component(r(0).default.createComponent(a,!0))}},[[58,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/integral/official/index"],{

/***/ "./src/pages/integral/official/index.tsx":
/*!***********************************************!*\
  !*** ./src/pages/integral/official/index.tsx ***!
  \***********************************************/
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

__webpack_require__(/*! ../index.scss */ "./src/pages/integral/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Integral = function (_Taro$Component) {
  _inherits(Integral, _Taro$Component);

  function Integral() {
    _classCallCheck(this, Integral);

    var _this = _possibleConstructorReturn(this, (Integral.__proto__ || Object.getPrototypeOf(Integral)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '积分来源记录',
      enablePullDownRefresh: true
    };

    _this.$usedState = ["lists"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(Integral, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Integral.prototype.__proto__ || Object.getPrototypeOf(Integral.prototype), "_constructor", this).call(this, props);
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
      // 初始化页面信息-积分来源记录
      var initType = 'official';
      // 定义请求参数

      var _useState = (0, _taroWeapp.useState)({
        type: initType,
        page: 1
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];
      // 定义列表接收容器


      var _useState3 = (0, _taroWeapp.useState)({
        lists: [],
        hasmore: true
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          lists = _useState4[0],
          setLists = _useState4[1];
      // 获取列表数据


      (0, _taroWeapp.useEffect)(function () {
        if (!lists.hasmore) {
          return;
        }
        (0, _index.getIntegralList)(data).then(function (res) {
          var len = res.list.length;
          if (len) {
            if (data.page === 1) {
              if (len < res.pageSize) {
                setLists({ hasmore: false, lists: res.list });
              } else setLists(_extends({}, lists, { lists: res.list }));
            } else {
              setLists(_extends({}, lists, { lists: [].concat(_toConsumableArray(lists.lists), _toConsumableArray(res.list)) }));
            }
          } else setLists(_extends({}, lists, { hasmore: false }));
        });
      }, [data]);
      // 上拉加载下一页
      (0, _taroWeapp.useReachBottom)(function () {
        setData(_extends({}, data, { page: data.page + 1 }));
      });
      // 下拉刷新当前列表
      (0, _taroWeapp.usePullDownRefresh)(function () {
        setData(_extends({}, data, { page: 1 }));
      });
      Object.assign(this.__state, {
        lists: lists
      });
      return this.__state;
    }
  }]);

  return Integral;
}(_taroWeapp2.default.Component);

Integral.$$events = [];
Integral.$$componentPath = "pages/integral/official/index";
Integral.config = { navigationBarTitleText: '积分来源记录', enablePullDownRefresh: true };
exports.default = Integral;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Integral, true));

/***/ })

},[["./src/pages/integral/official/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
