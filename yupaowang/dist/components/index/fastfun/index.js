<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[8],{"67":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=_interopRequireDefault(n(0)),i=_interopRequireDefault(n(68));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(69);var u=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Fastfun,o.default.Component),r(Fastfun,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0})(Fastfun.prototype.__proto__||Object.getPrototypeOf(Fastfun.prototype),"_constructor",this).call(this,e),this.$$refs=new o.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){return this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix,Object.assign(this.__state,{"Config":i.default}),this.__state}}]),Fastfun);function Fastfun(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Fastfun);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Fastfun.__proto__||Object.getPrototypeOf(Fastfun)).apply(this,arguments));return e.$usedState=["Config"],e.customComponents=[],e}u.$$events=[],u.$$componentPath="components/index/fastfun/index",t.default=u,Component(n(0).default.createComponent(u))},"68":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=n(1),o=[{"url":"/pages/static/invite","img":r.IMGCDNURL+"yqhy.png","text":"邀请好友"},{"url":"pages/query/query","img":r.IMGCDNURL+"smcx.png","text":"实名查询"},{"url":"/pages/static/invite","img":r.IMGCDNURL+"index-newzjxm.png","text":"鱼泡动态"}];t.default=o},"69":function(e,t,n){}},[[67,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/index/fastfun/index"],{

/***/ "./src/components/index/fastfun/config.ts":
/*!************************************************!*\
  !*** ./src/components/index/fastfun/config.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var Config = [{
  url: '/pages/static/invite',
  img: _index.IMGCDNURL + 'yqhy.png',
  text: '邀请好友'
}, {
  url: 'pages/query/query',
  img: _index.IMGCDNURL + 'smcx.png',
  text: '实名查询'
}, {
  url: '/pages/static/invite',
  img: _index.IMGCDNURL + 'index-newzjxm.png',
  text: '鱼泡动态'
}];
exports.default = Config;

/***/ }),

/***/ "./src/components/index/fastfun/index.scss":
/*!*************************************************!*\
  !*** ./src/components/index/fastfun/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/index/fastfun/index.tsx":
/*!************************************************!*\
  !*** ./src/components/index/fastfun/index.tsx ***!
  \************************************************/
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

var _config = __webpack_require__(/*! ./config */ "./src/components/index/fastfun/config.ts");

var _config2 = _interopRequireDefault(_config);

__webpack_require__(/*! ./index.scss */ "./src/components/index/fastfun/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fastfun = function (_Taro$Component) {
  _inherits(Fastfun, _Taro$Component);

  function Fastfun() {
    _classCallCheck(this, Fastfun);

    var _this = _possibleConstructorReturn(this, (Fastfun.__proto__ || Object.getPrototypeOf(Fastfun)).apply(this, arguments));

    _this.$usedState = ["Config"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(Fastfun, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Fastfun.prototype.__proto__ || Object.getPrototypeOf(Fastfun.prototype), '_constructor', this).call(this, props);
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
      Object.assign(this.__state, {
        Config: _config2.default
      });
      return this.__state;
    }
  }]);

  return Fastfun;
}(_taroWeapp2.default.Component);

Fastfun.$$events = [];
Fastfun.$$componentPath = "components/index/fastfun/index";
exports.default = Fastfun;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Fastfun));

/***/ })

},[["./src/components/index/fastfun/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
