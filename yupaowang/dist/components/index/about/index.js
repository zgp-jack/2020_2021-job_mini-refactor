<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[7],{"78":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var n=function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t};function defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(o(0)),u=o(1);o(79);var a=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(About,r.default.Component),n(About,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,o)}if("value"in n)return n.value;var u=n.get;return void 0!==u?u.call(o):void 0})(About.prototype.__proto__||Object.getPrototypeOf(About.prototype),"_constructor",this).call(this,t),this.$$refs=new r.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,o){this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix;var n=(new Date).getFullYear();return Object.assign(this.__state,{"anonymousState__temp":n,"VERSION":u.VERSION}),this.__state}}]),About);function About(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,About);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(About.__proto__||Object.getPrototypeOf(About)).apply(this,arguments));return t.$usedState=["anonymousState__temp","VERSION"],t.customComponents=[],t}a.$$events=[],a.$$componentPath="components/index/about/index",e.default=a,Component(o(0).default.createComponent(a))},"79":function(t,e,o){}},[[78,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/index/about/index"],{

/***/ "./src/components/index/about/index.scss":
/*!***********************************************!*\
  !*** ./src/components/index/about/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/index/about/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/index/about/index.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/index/about/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Taro$Component) {
  _inherits(About, _Taro$Component);

  function About() {
    _classCallCheck(this, About);

    var _this = _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "VERSION"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(About, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(About.prototype.__proto__ || Object.getPrototypeOf(About.prototype), "_constructor", this).call(this, props);
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
      var anonymousState__temp = new Date().getFullYear();
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        VERSION: _index.VERSION
      });
      return this.__state;
    }
  }]);

  return About;
}(_taroWeapp2.default.Component);

About.$$events = [];
About.$$componentPath = "components/index/about/index";
exports.default = About;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(About));

/***/ })

},[["./src/components/index/about/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
