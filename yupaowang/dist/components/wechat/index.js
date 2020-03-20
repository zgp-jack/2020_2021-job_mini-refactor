<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[18],{"100":function(t,e,r){},"98":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var _=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},y=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var r=[],o=!0,n=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(o=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);o=!0);}catch(t){n=!0,a=t}finally{try{!o&&c.return&&c.return()}finally{if(n)throw a}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t};function defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var d=r(0),n=_interopRequireDefault(d),v=r(4),b=_interopRequireDefault(r(99)),w=_interopRequireDefault(r(16)),O=r(2);function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}r(100);var a=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(WechatNotice,n.default.Component),o(WechatNotice,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var n=Object.getPrototypeOf(t);return null===n?void 0:get(n,e,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(WechatNotice.prototype.__proto__||Object.getPrototypeOf(WechatNotice.prototype),"_constructor",this).call(this,t),this.$$refs=new n.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,r){this.__state=t||this.state||{},this.__props=e||this.props||{};var o=this.$prefix,n=(0,d.genCompid)(o+"$compid__11"),a=y(n,2),i=a[0],c=a[1],u=(0,d.useState)({"vertical":!0,"lists":[]}),s=y(u,2),p=s[0],f=s[1],l=(0,v.useDispatch)(),h=(0,v.useSelector)(function(t){return t.WechatNotice});return(0,d.useEffect)(function(){h.success?f(_({},p,{"lists":h.notice})):(0,O.getWechatNotice)().then(function(t){t[w.default]=w.default;var e={"type":w.default,"data":t};f(_({},p,{"lists":t.notice})),l((0,b.default)(e))})},[]),d.propsManager.set({"data":p},c,i),Object.assign(this.__state,{"$compid__11":c,"wechatNoticeData":h}),this.__state}}]),WechatNotice);function WechatNotice(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,WechatNotice);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(WechatNotice.__proto__||Object.getPrototypeOf(WechatNotice)).apply(this,arguments));return t.$usedState=["$compid__11","wechatNoticeData"],t.customComponents=["SwiperNews"],t}a.$$events=[],a.$$componentPath="components/wechat/index",e.default=a,Component(r(0).default.createComponent(a))},"99":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{"value":!0}),e.default=function changeWechatNotice(t){return{"type":t.type,"data":t.data}}}},[[98,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/wechat/index"],{

/***/ "./src/actions/wechat_notice.ts":
/*!**************************************!*\
  !*** ./src/actions/wechat_notice.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeWechatNotice;
function changeWechatNotice(action) {
  return {
    type: action.type,
    data: action.data
  };
}

/***/ }),

/***/ "./src/components/wechat/index.scss":
/*!******************************************!*\
  !*** ./src/components/wechat/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/wechat/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/wechat/index.tsx ***!
  \*****************************************/
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

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _wechat_notice = __webpack_require__(/*! ../../actions/wechat_notice */ "./src/actions/wechat_notice.ts");

var _wechat_notice2 = _interopRequireDefault(_wechat_notice);

var _wechat_notice3 = __webpack_require__(/*! ../../constants/wechat_notice */ "./src/constants/wechat_notice.ts");

var _wechat_notice4 = _interopRequireDefault(_wechat_notice3);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/wechat/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WechatNotice = function (_Taro$Component) {
  _inherits(WechatNotice, _Taro$Component);

  function WechatNotice() {
    _classCallCheck(this, WechatNotice);

    var _this = _possibleConstructorReturn(this, (WechatNotice.__proto__ || Object.getPrototypeOf(WechatNotice)).apply(this, arguments));

    _this.$usedState = ["$compid__11", "wechatNoticeData"];
    _this.customComponents = ["SwiperNews"];
    return _this;
  }

  _createClass(WechatNotice, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(WechatNotice.prototype.__proto__ || Object.getPrototypeOf(WechatNotice.prototype), '_constructor', this).call(this, props);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__11"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__11 = _genCompid2[0],
          $compid__11 = _genCompid2[1];

      var _useState = (0, _taroWeapp.useState)({
        vertical: true,
        lists: []
      }),
          _useState2 = _slicedToArray(_useState, 2),
          swiperNews = _useState2[0],
          setSwiperNews = _useState2[1];

      var dispatch = (0, _redux.useDispatch)();
      var wechatNoticeData = (0, _redux.useSelector)(function (state) {
        return state.WechatNotice;
      });
      // 获取微信号与公告列表
      (0, _taroWeapp.useEffect)(function () {
        if (wechatNoticeData.success) {
          setSwiperNews(_extends({}, swiperNews, { lists: wechatNoticeData.notice }));
          return;
        }
        (0, _index.getWechatNotice)().then(function (res) {
          res[_wechat_notice4.default] = _wechat_notice4.default;
          var action = {
            type: _wechat_notice4.default,
            data: res
          };
          setSwiperNews(_extends({}, swiperNews, { lists: res.notice }));
          dispatch((0, _wechat_notice2.default)(action));
        });
      }, []);
      _taroWeapp.propsManager.set({
        "data": swiperNews
      }, $compid__11, $prevCompid__11);
      Object.assign(this.__state, {
        $compid__11: $compid__11,
        wechatNoticeData: wechatNoticeData
      });
      return this.__state;
    }
  }]);

  return WechatNotice;
}(_taroWeapp2.default.Component);

WechatNotice.$$events = [];
WechatNotice.$$componentPath = "components/wechat/index";
exports.default = WechatNotice;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(WechatNotice));

/***/ })

},[["./src/components/wechat/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
