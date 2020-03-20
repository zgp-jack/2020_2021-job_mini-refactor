<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[34],{"103":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0)),u=n(4);n(104);var i=n(1);var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Member,o.default.Component),r(Member,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var u=r.get;return void 0!==u?u.call(n):void 0})(Member.prototype.__proto__||Object.getPrototypeOf(Member.prototype),"_constructor",this).call(this,e),this.$$refs=new o.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var r=(0,u.useSelector)(function(e){return e.User.login});return this.anonymousFunc0=function(){return function userAuthLogin(){o.default.navigateTo({"url":i.AUTHPATH})}()},Object.assign(this.__state,{"login":r,"IMGCDNURL":i.IMGCDNURL}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}}]),Member);function Member(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Member);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Member.__proto__||Object.getPrototypeOf(Member)).apply(this,arguments));return e.$usedState=["login","IMGCDNURL"],e.customComponents=[],e}a.$$events=["anonymousFunc0"],a.$$componentPath="pages/member/index",t.default=a,Component(n(0).default.createComponent(a))},"104":function(e,t,n){}},[[103,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/member/index"],{

/***/ "./src/pages/member/index.scss":
/*!*************************************!*\
  !*** ./src/pages/member/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/member/index.tsx":
/*!************************************!*\
  !*** ./src/pages/member/index.tsx ***!
  \************************************/
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

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/member/index.scss");

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Member = function (_Taro$Component) {
  _inherits(Member, _Taro$Component);

  function Member() {
    _classCallCheck(this, Member);

    var _this = _possibleConstructorReturn(this, (Member.__proto__ || Object.getPrototypeOf(Member)).apply(this, arguments));

    _this.$usedState = ["login", "IMGCDNURL"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(Member, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Member.prototype.__proto__ || Object.getPrototypeOf(Member.prototype), '_constructor', this).call(this, props);
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
      // 获取用户信息
      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // 跳转用户授权
      var userAuthLogin = function userAuthLogin() {
        _taroWeapp2.default.navigateTo({
          url: _index.AUTHPATH
        });
      };
      this.anonymousFunc0 = function () {
        return userAuthLogin();
      };
      Object.assign(this.__state, {
        login: login,
        IMGCDNURL: _index.IMGCDNURL
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return Member;
}(_taroWeapp2.default.Component);

Member.$$events = ["anonymousFunc0"];
Member.$$componentPath = "pages/member/index";
exports.default = Member;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Member));

/***/ })

},[["./src/pages/member/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
