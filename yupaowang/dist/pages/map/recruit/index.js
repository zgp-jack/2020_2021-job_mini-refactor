<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[33],{"50":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var l=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t};function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var _=r(0),y=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(_),d=r(3),h=r(2);r(51);var o=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(RecruitMap,y.default.Component),n(RecruitMap,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0})(RecruitMap.prototype.__proto__||Object.getPrototypeOf(RecruitMap.prototype),"_constructor",this).call(this,t),this.$$refs=new y.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,r){this.__state=t||this.state||{},this.__props=e||this.props||{};var n=this.$prefix,o=(0,_.genCompid)(n+"$compid__22"),a=l(o,2),i=a[0],u=a[1],c=(0,_.useState)([]),p=l(c,2),s=p[0],f=p[1];return(0,_.useEffect)(function(){var t=y.default.getStorageSync(d.Areas);t?f(t):(0,h.getAllAreas)().then(function(t){y.default.setStorageSync(d.Areas,t),f(t)})},[]),_.propsManager.set({"data":s},u,i),Object.assign(this.__state,{"$compid__22":u}),this.__state}}]),RecruitMap);function RecruitMap(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,RecruitMap);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(RecruitMap.__proto__||Object.getPrototypeOf(RecruitMap)).apply(this,arguments));return t.$usedState=["$compid__22"],t.customComponents=["MapComponent"],t}o.$$events=[],o.$$componentPath="pages/map/recruit/index",e.default=o,Component(r(0).default.createComponent(o,!0))},"51":function(t,e,r){}},[[50,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/map/recruit/index"],{

/***/ "./src/pages/map/recruit/index.scss":
/*!******************************************!*\
  !*** ./src/pages/map/recruit/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/map/recruit/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/map/recruit/index.tsx ***!
  \*****************************************/
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

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/map/recruit/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecruitMap = function (_Taro$Component) {
  _inherits(RecruitMap, _Taro$Component);

  function RecruitMap() {
    _classCallCheck(this, RecruitMap);

    var _this = _possibleConstructorReturn(this, (RecruitMap.__proto__ || Object.getPrototypeOf(RecruitMap)).apply(this, arguments));

    _this.$usedState = ["$compid__22"];
    _this.customComponents = ["MapComponent"];
    return _this;
  }

  _createClass(RecruitMap, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RecruitMap.prototype.__proto__ || Object.getPrototypeOf(RecruitMap.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__22"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__22 = _genCompid2[0],
          $compid__22 = _genCompid2[1];
      // 城市数据


      var _useState = (0, _taroWeapp.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          areas = _useState2[0],
          setAreas = _useState2[1];
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
      _taroWeapp.propsManager.set({
        "data": areas
      }, $compid__22, $prevCompid__22);
      Object.assign(this.__state, {
        $compid__22: $compid__22
      });
      return this.__state;
    }
  }]);

  return RecruitMap;
}(_taroWeapp2.default.Component);

RecruitMap.$$events = [];
RecruitMap.$$componentPath = "pages/map/recruit/index";
exports.default = RecruitMap;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(RecruitMap, true));

/***/ })

},[["./src/pages/map/recruit/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
