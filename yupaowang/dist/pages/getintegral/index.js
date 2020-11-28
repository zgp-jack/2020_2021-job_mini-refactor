<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[46],{"128":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var f=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(o=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,u=e}finally{try{!o&&i.return&&i.return()}finally{if(r)throw u}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var p=n(0),y=_interopRequireDefault(p),h=n(1),g=n(7);n(129);var m=_interopRequireDefault(n(5));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var r=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(GetIntegral,y.default.Component),o(GetIntegral,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(n):void 0})(GetIntegral.prototype.__proto__||Object.getPrototypeOf(GetIntegral.prototype),"_constructor",this).call(this,e),this.$$refs=new y.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=(0,p.useState)(!0),r=f(o,2),u=r[0],a=r[1],i=(0,p.useState)({"showBtn":0,"show":0}),s=f(i,2),c=s[0];s[1],(0,p.useEffect)(function(){"ios"!==y.default.getSystemInfoSync().platform&&a(!1)},[]),this.anonymousFunc0=function(){return(0,g.userJumpPage)(h.INVITEPATH)},this.anonymousFunc1=function(){return(0,g.userJumpPage)("/pages/recharge/index")},this.anonymousFunc2=function(){return(0,g.userJumpPage)("/pages/turntable/index")};var l=c.show?(0,m.default)({"getintegral-item-btn":!0,"getintegral-list-btn-dis":!c.showBtn}):null;return this.anonymousFunc3=function(){return function userCallPhone(){y.default.makePhoneCall({"phoneNumber":h.SERVERPHONE})}()},Object.assign(this.__state,{"anonymousState__temp":l,"SHOWINVITEUSER":h.SHOWINVITEUSER,"ios":u,"turntable":c,"IMGCDNURL":h.IMGCDNURL,"SERVERPHONE":h.SERVERPHONE}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}}]),GetIntegral);function GetIntegral(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,GetIntegral);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(GetIntegral.__proto__||Object.getPrototypeOf(GetIntegral)).apply(this,arguments));return e.config={"navigationBarTitleText":"鱼泡网-获取积分"},e.$usedState=["anonymousState__temp","SHOWINVITEUSER","ios","turntable","IMGCDNURL","SERVERPHONE"],e.customComponents=["Auth"],e}r.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3"],r.$$componentPath="pages/getintegral/index",r.config={"navigationBarTitleText":"鱼泡网-获取积分"},t.default=r,Page(n(0).default.createComponent(r,!0))},"129":function(e,t,n){}},[[128,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/getintegral/index"],{

/***/ "./src/pages/getintegral/index.scss":
/*!******************************************!*\
  !*** ./src/pages/getintegral/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/getintegral/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/getintegral/index.tsx ***!
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

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/getintegral/index.scss");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GetIntegral = function (_Taro$Component) {
  _inherits(GetIntegral, _Taro$Component);

  function GetIntegral() {
    _classCallCheck(this, GetIntegral);

    var _this = _possibleConstructorReturn(this, (GetIntegral.__proto__ || Object.getPrototypeOf(GetIntegral)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: "鱼泡网-获取积分"
    };

    _this.$usedState = ["anonymousState__temp", "SHOWINVITEUSER", "ios", "turntable", "IMGCDNURL", "SERVERPHONE"];
    _this.customComponents = ["Auth"];
    return _this;
  }

  _createClass(GetIntegral, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(GetIntegral.prototype.__proto__ || Object.getPrototypeOf(GetIntegral.prototype), "_constructor", this).call(this, props);
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

      var _useState = (0, _taroSwan.useState)(true),
          _useState2 = _slicedToArray(_useState, 2),
          ios = _useState2[0],
          setIos = _useState2[1];
      // 用户拨打电话


      var userCallPhone = function userCallPhone() {
        _taroSwan2.default.makePhoneCall({ phoneNumber: _index.SERVERPHONE });
      };

      var _useState3 = (0, _taroSwan.useState)({
        showBtn: 0,
        show: 0
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          turntable = _useState4[0],
          setTurntable = _useState4[1];
      // 判断客户端


      (0, _taroSwan.useEffect)(function () {
        // memberTurntable().then(res => {
        //   if (res.errcode == "ok") {
        //     let { is_turntable, show_turntable } = res.data;
        //     turntable.showBtn = Number(is_turntable);
        //     turntable.show = Number(show_turntable);
        //     setTurntable({ ...turntable });
        //   }
        // });
        var system = _taroSwan2.default.getSystemInfoSync();
        if (system.platform !== "ios") {
          setIos(false);
        }
      }, []);
      this.anonymousFunc0 = function () {
        return (0, _index2.userJumpPage)(_index.INVITEPATH);
      };
      this.anonymousFunc1 = function () {
        return (0, _index2.userJumpPage)("/pages/recharge/index");
      };
      this.anonymousFunc2 = function () {
        return (0, _index2.userJumpPage)("/pages/turntable/index");
      };
      var anonymousState__temp = turntable.show ? (0, _classnames2.default)({
        "getintegral-item-btn": true,
        "getintegral-list-btn-dis": !turntable.showBtn
      }) : null;
      this.anonymousFunc3 = function () {
        return userCallPhone();
      };
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        SHOWINVITEUSER: _index.SHOWINVITEUSER,
        ios: ios,
        turntable: turntable,
        IMGCDNURL: _index.IMGCDNURL,
        SERVERPHONE: _index.SERVERPHONE
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
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }]);

  return GetIntegral;
}(_taroSwan2.default.Component);

GetIntegral.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3"];
GetIntegral.$$componentPath = "pages/getintegral/index";
GetIntegral.config = { navigationBarTitleText: "鱼泡网-获取积分" };
exports.default = GetIntegral;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(GetIntegral, true));

/***/ })

},[["./src/pages/getintegral/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
