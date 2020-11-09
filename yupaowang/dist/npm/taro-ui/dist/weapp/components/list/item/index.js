(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/list/item/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/list/item/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/list/item/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2, _initialiseProps;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _isFunction2 = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _component = __webpack_require__(/*! ../../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtListItem = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtListItem, _AtComponent);

  function AtListItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtListItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtListItem.__proto__ || Object.getPrototypeOf(AtListItem)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtListItem, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtListItem.prototype.__proto__ || Object.getPrototypeOf(AtListItem.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: 'handleSwitchClick',
    value: function handleSwitchClick(e) {
      e.stopPropagation();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          note = _props.note,
          arrow = _props.arrow,
          thumb = _props.thumb,
          iconInfo = _props.iconInfo,
          disabled = _props.disabled,
          isSwitch = _props.isSwitch,
          hasBorder = _props.hasBorder,
          extraThumb = _props.extraThumb,
          switchColor = _props.switchColor,
          switchIsCheck = _props.switchIsCheck;
      var _props2 = this.__props,
          extraText = _props2.extraText,
          title = _props2.title;


      extraText = String(extraText);
      title = String(title);

      var rootClass = (0, _classnames2.default)('at-list__item', {
        'at-list__item--thumb': thumb,
        'at-list__item--multiple': note,
        'at-list__item--disabled': disabled,
        'at-list__item--no-border': !hasBorder
      }, this.__props.className);
      var iconClass = (0, _classnames2.default)(iconInfo.prefixClass || 'at-icon', _defineProperty({}, (iconInfo.prefixClass || 'at-icon') + "-" + iconInfo.value, iconInfo.value), iconInfo.className);

      var anonymousState__temp = iconInfo.value ? (0, _taroTt.internal_inline_style)(this.mergeStyle({
        color: iconInfo.color || '',
        fontSize: (iconInfo.size || 24) + "px"
      }, iconInfo.customStyle)) : null;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        rootClass: rootClass,
        thumb: thumb,
        iconInfo: iconInfo,
        iconClass: iconClass,
        note: note,
        extraText: extraText,
        extraThumb: extraThumb,
        isSwitch: isSwitch,
        switchColor: switchColor,
        disabled: disabled,
        switchIsCheck: switchIsCheck,
        arrow: arrow,
        title: title
      });
      return this.__state;
    }
  }]);

  return AtListItem;
}(_component2.default), _class.$$events = ["handleClick", "handleSwitchClick", "handleSwitchChange"], _class.$$componentPath = 'Users/axin/codes/\u9C7C\u6CE1\u7F51/\u5C0F\u7A0B\u5E8FTS\u91CD\u6784\u9879\u76EE/TaroTs-YuPaoWang/yupaowang/node_modules/taro-ui/dist/weapp/components/list/item/index', _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.$usedState = ["anonymousState__temp", "rootClass", "thumb", "iconInfo", "iconClass", "note", "extraText", "extraThumb", "isSwitch", "switchColor", "disabled", "switchIsCheck", "arrow", "title", "hasBorder", "className"];

  this.handleClick = function () {
    if ((0, _isFunction3.default)(_this2.props.onClick) && !_this2.props.disabled) {
      var _props3;

      (_props3 = _this2.props).onClick.apply(_props3, arguments);
    }
  };

  this.handleSwitchChange = function () {
    if ((0, _isFunction3.default)(_this2.props.onSwitchChange) && !_this2.props.disabled) {
      var _props4;

      (_props4 = _this2.props).onSwitchChange.apply(_props4, arguments);
    }
  };

  this.customComponents = [];
}, _temp2);


AtListItem.defaultProps = {
  note: '',
  disabled: false,
  title: '',
  thumb: '',
  isSwitch: false,
  hasBorder: true,
  switchColor: '#6190E8',
  switchIsCheck: false,
  extraText: '',
  extraThumb: '',
  iconInfo: {},
  onSwitchChange: function onSwitchChange() {},
  onClick: function onClick() {}
};

AtListItem.propTypes = {
  note: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  thumb: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  isSwitch: _propTypes2.default.bool,
  hasBorder: _propTypes2.default.bool,
  switchColor: _propTypes2.default.string,
  switchIsCheck: _propTypes2.default.bool,
  extraText: _propTypes2.default.string,
  extraThumb: _propTypes2.default.string,
  onSwitchChange: _propTypes2.default.func,
  arrow: _propTypes2.default.oneOf(['up', 'down', 'right']),
  iconInfo: _propTypes2.default.shape({
    size: _propTypes2.default.number,
    value: _propTypes2.default.string,
    color: _propTypes2.default.string,
    prefixClass: _propTypes2.default.string,
    customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
    className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string])
  })
};
exports.default = AtListItem;

Component(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(AtListItem));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/list/item/index.js","runtime","vendors"]]]);
