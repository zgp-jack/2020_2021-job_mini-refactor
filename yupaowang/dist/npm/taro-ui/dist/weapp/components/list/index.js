<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[21],{"89":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var o=function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t};function defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var n,s,i=_interopRequireDefault(r(0)),a=_interopRequireDefault(r(11)),u=_interopRequireDefault(r(5));function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var p=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(AtList,_interopRequireDefault(r(12)).default),o(AtList,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var n=Object.getPrototypeOf(t);return null===n?void 0:get(n,e,r)}if("value"in o)return o.value;var s=o.get;return void 0!==s?s.call(r):void 0})(AtList.prototype.__proto__||Object.getPrototypeOf(AtList.prototype),"_constructor",this).call(this,t),this.$$refs=new i.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,r){this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix;var o=(0,u.default)("at-list",{"at-list--no-border":!this.__props.hasBorder},this.__props.className);return Object.assign(this.__state,{"rootClass":o}),this.__state}}]),s=n=AtList,n.$$events=[],n.$$componentPath="Users/axin/codes/鱼泡网/小程序TS重构项目/TaroTs-YuPaoWang/yupaowang/node_modules/taro-ui/dist/weapp/components/list/index",s);function AtList(){var t,e,r;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,AtList);for(var o=arguments.length,n=Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=r=_possibleConstructorReturn(this,(t=AtList.__proto__||Object.getPrototypeOf(AtList)).call.apply(t,[this].concat(n)))).$usedState=["rootClass","hasBorder","className","children"],r.customComponents=[],_possibleConstructorReturn(r,e)}p.defaultProps={"hasBorder":!0},p.propTypes={"hasBorder":a.default.bool},e.default=p,Component(r(0).default.createComponent(p))}},[[89,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/list/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/list/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/list/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtList = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtList, _AtComponent);

  function AtList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtList.__proto__ || Object.getPrototypeOf(AtList)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["rootClass", "hasBorder", "className", "children"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtList, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtList.prototype.__proto__ || Object.getPrototypeOf(AtList.prototype), '_constructor', this).call(this, props);

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

      var rootClass = (0, _classnames2.default)('at-list', {
        'at-list--no-border': !this.__props.hasBorder
      }, this.__props.className);

      Object.assign(this.__state, {
        rootClass: rootClass
      });
      return this.__state;
    }
  }]);

  return AtList;
}(_component2.default), _class.$$events = [], _class.$$componentPath = "node_modules/taro-ui/dist/weapp/components/list/index", _temp2);


AtList.defaultProps = {
  hasBorder: true
};

AtList.propTypes = {
  hasBorder: _propTypes2.default.bool
};
exports.default = AtList;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtList));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/list/index.js","runtime","vendors"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
