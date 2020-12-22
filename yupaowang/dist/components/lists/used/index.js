<<<<<<< HEAD
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["components/lists/used/index"],{

/***/ "./src/components/lists/used/index.scss":
/*!**********************************************!*\
  !*** ./src/components/lists/used/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/lists/used/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/lists/used/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

__webpack_require__(/*! ./index.scss */ "./src/components/lists/used/index.scss");

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsedList = function (_Taro$Component) {
  _inherits(UsedList, _Taro$Component);

  function UsedList() {
    _classCallCheck(this, UsedList);

    var _this = _possibleConstructorReturn(this, (UsedList.__proto__ || Object.getPrototypeOf(UsedList)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "loopArray23", "data", "IMGCDNURL", "hasMore", "ALIYUNCDN", "bottom"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(UsedList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(UsedList.prototype.__proto__ || Object.getPrototypeOf(UsedList.prototype), "_constructor", this).call(this, props);
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
      var _props = this.__props,
          _props$data = _props.data,
          data = _props$data === undefined ? [] : _props$data,
          _props$bottom = _props.bottom,
          bottom = _props$bottom === undefined ? true : _props$bottom,
          _props$hasMore = _props.hasMore,
          hasMore = _props$hasMore === undefined ? true : _props$hasMore;
      // 用户查看二手交易详情

      var userLookUsedInfo = function userLookUsedInfo(id) {
        _taroSwan2.default.navigateTo({
          url: "/pages/used/info/index?id=" + id + "&used=1"
        });
      };
      var anonymousState__temp = (0, _taroSwan.internal_inline_style)(bottom ? '' : 'padding-bottom:0');
      var loopArray23 = data.length ? data.map(function (item, __index1) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var anonymousCallee__5 = data.length ? item.privateOriginal.map(function (d, __index0) {
          d = {
            privateOriginal: (0, _taroSwan.internal_get_original)(d)
          };
          var _$indexKey = "chzzz" + __index1 + "-" + __index0;
          _this2.anonymousFunc0Map[_$indexKey] = function () {
            return userLookUsedInfo(d.privateOriginal.id);
          };
          return {
            _$indexKey: _$indexKey,
            privateOriginal: d.privateOriginal
          };
        }) : [];
        return {
          anonymousCallee__5: anonymousCallee__5,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray23: loopArray23,
        data: data,
        IMGCDNURL: _index.IMGCDNURL,
        hasMore: hasMore,
        ALIYUNCDN: _index.ALIYUNCDN
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return UsedList;
}(_taroSwan2.default.Component);

UsedList.$$events = ["anonymousFunc0"];
UsedList.$$componentPath = "components/lists/used/index";
exports.default = UsedList;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(UsedList));

/***/ })

},[["./src/components/lists/used/index.tsx","runtime","vendors"]]]);
=======
(qq.webpackJsonp=qq.webpackJsonp||[]).push([[16],{"245":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var o=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var _=n(0),d=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(_);n(246);var y=n(1);var r=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(UsedList,d.default.Component),o(UsedList,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0})(UsedList.prototype.__proto__||Object.getPrototypeOf(UsedList.prototype),"_constructor",this).call(this,t),this.$$refs=new d.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){var r=this;this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix;var o=this.__props,i=o.data,a=void 0===i?[]:i,s=o.bottom,u=void 0===s||s,l=o.hasMore,c=void 0===l||l,p=(0,_.internal_inline_style)(u?"":"padding-bottom:0"),f=a.length?a.map(function(t,o){return t={"$original":(0,_.internal_get_original)(t)},{"$anonymousCallee__5":a.length?t.$original.map(function(t,e){t={"$original":(0,_.internal_get_original)(t)};var n="chzzz"+o+"-"+e;return r.anonymousFunc0Map[n]=function(){return function userLookUsedInfo(t){d.default.navigateTo({"url":"/pages/used/info/index?id="+t+"&used=1"})}(t.$original.id)},{"_$indexKey":n,"$original":t.$original}}):[],"$original":t.$original}}):[];return Object.assign(this.__state,{"anonymousState__temp":p,"loopArray23":f,"data":a,"IMGCDNURL":y.IMGCDNURL,"hasMore":c,"ALIYUNCDN":y.ALIYUNCDN}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(t){for(var e,n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return this.anonymousFunc0Map[t]&&(e=this.anonymousFunc0Map)[t].apply(e,o)}}]),UsedList);function UsedList(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,UsedList);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(UsedList.__proto__||Object.getPrototypeOf(UsedList)).apply(this,arguments));return t.$usedState=["anonymousState__temp","loopArray23","data","IMGCDNURL","hasMore","ALIYUNCDN","bottom"],t.anonymousFunc0Map={},t.customComponents=[],t}r.$$events=["anonymousFunc0"],r.$$componentPath="components/lists/used/index",e.default=r,Component(n(0).default.createComponent(r))},"246":function(t,e,n){}},[[245,0,1]]]);
>>>>>>> a48cb28d1a74b8e4fd230adef1306a3c1af51e89
