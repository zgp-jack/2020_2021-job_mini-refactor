<<<<<<< HEAD
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/getintegral/index"],{

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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

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

    _this.$usedState = ["anonymousState__temp", "ios", "turntable", "IMGCDNURL", "SERVERPHONE"];
    _this.customComponents = ["Auth"];
    return _this;
  }

  _createClass(GetIntegral, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(GetIntegral.prototype.__proto__ || Object.getPrototypeOf(GetIntegral.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _useState = (0, _taroTt.useState)(true),
          _useState2 = _slicedToArray(_useState, 2),
          ios = _useState2[0],
          setIos = _useState2[1];
      // 用户拨打电话


      var userCallPhone = function userCallPhone() {
        _taroTt2.default.makePhoneCall({ phoneNumber: _index.SERVERPHONE });
      };

      var _useState3 = (0, _taroTt.useState)({
        showBtn: 0,
        show: 0
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          turntable = _useState4[0],
          setTurntable = _useState4[1];
      // 判断客户端


      (0, _taroTt.useEffect)(function () {
        // memberTurntable().then(res => {
        //   if (res.errcode == "ok") {
        //     let { is_turntable, show_turntable } = res.data;
        //     turntable.showBtn = Number(is_turntable);
        //     turntable.show = Number(show_turntable);
        //     setTurntable({ ...turntable });
        //   }
        // });
        var system = _taroTt2.default.getSystemInfoSync();
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
}(_taroTt2.default.Component);

GetIntegral.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3"];
GetIntegral.$$componentPath = "pages/getintegral/index";
GetIntegral.config = { navigationBarTitleText: "鱼泡网-获取积分" };
exports.default = GetIntegral;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(GetIntegral, true));

/***/ })

},[["./src/pages/getintegral/index.tsx","runtime","vendors"]]]);
=======
(tt.webpackJsonp=tt.webpackJsonp||[]).push([[46],{"124":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var f=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],o=!0,r=!1,u=void 0;try{for(var a,i=t[Symbol.iterator]();!(o=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(t){r=!0,u=t}finally{try{!o&&i.return&&i.return()}finally{if(r)throw u}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var p=n(0),y=_interopRequireDefault(p),h=n(1),g=n(7);n(125);var m=_interopRequireDefault(n(5));function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}var r=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(GetIntegral,y.default.Component),o(GetIntegral,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,n)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(n):void 0})(GetIntegral.prototype.__proto__||Object.getPrototypeOf(GetIntegral.prototype),"_constructor",this).call(this,t),this.$$refs=new y.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix;var o=(0,p.useState)(!0),r=f(o,2),u=r[0],a=r[1],i=(0,p.useState)({"showBtn":0,"show":0}),s=f(i,2),c=s[0];s[1],(0,p.useEffect)(function(){"ios"!==y.default.getSystemInfoSync().platform&&a(!1)},[]),this.anonymousFunc0=function(){return(0,g.userJumpPage)(h.INVITEPATH)},this.anonymousFunc1=function(){return(0,g.userJumpPage)("/pages/recharge/index")},this.anonymousFunc2=function(){return(0,g.userJumpPage)("/pages/turntable/index")};var l=c.show?(0,m.default)({"getintegral-item-btn":!0,"getintegral-list-btn-dis":!c.showBtn}):null;return this.anonymousFunc3=function(){return function userCallPhone(){y.default.makePhoneCall({"phoneNumber":h.SERVERPHONE})}()},Object.assign(this.__state,{"anonymousState__temp":l,"ios":u,"turntable":c,"IMGCDNURL":h.IMGCDNURL,"SERVERPHONE":h.SERVERPHONE}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}}]),GetIntegral);function GetIntegral(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,GetIntegral);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(GetIntegral.__proto__||Object.getPrototypeOf(GetIntegral)).apply(this,arguments));return t.config={"navigationBarTitleText":"鱼泡网-获取积分"},t.$usedState=["anonymousState__temp","ios","turntable","IMGCDNURL","SERVERPHONE"],t.customComponents=["Auth"],t}r.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3"],r.$$componentPath="pages/getintegral/index",r.config={"navigationBarTitleText":"鱼泡网-获取积分"},e.default=r,Page(n(0).default.createComponent(r,!0))},"125":function(t,e,n){}},[[124,0,1]]]);
>>>>>>> 0e5be846c916f829861e9a8cfd5d82206f24c32e
