(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/accordion/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/accordion/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/accordion/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.js");

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(/*! ../../common/utils */ "./node_modules/taro-ui/dist/weapp/common/utils.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _utils.initTestEnv)();

// 文档

var AtAccordion = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtAccordion, _AtComponent);

  function AtAccordion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtAccordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtAccordion.__proto__ || Object.getPrototypeOf(AtAccordion)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "rootCls", "headerCls", "icon", "iconCls", "arrowCls", "contentCls", "title", "note", "wrapperHeight", "open", "isAnimation", "customStyle", "className", "hasBorder", "children"], _this.handleClick = function (event) {
      var open = _this.props.open;

      if (!_this.isCompleted) {
        return;
      }_this.props.onClick(!open, event);
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtAccordion, [{
    key: '_constructor',
    value: function _constructor() {
      _get(AtAccordion.prototype.__proto__ || Object.getPrototypeOf(AtAccordion.prototype), '_constructor', this).apply(this, arguments);
      this.isCompleted = true;
      this.startOpen = false;
      this.state = {
        wrapperHeight: ''
      };
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: 'toggleWithAnimation',
    value: function toggleWithAnimation() {
      var _this2 = this;

      var _props = this.props,
          open = _props.open,
          isAnimation = _props.isAnimation;

      if (!this.isCompleted || !isAnimation) {
        return;
      }this.isCompleted = false;
      (0, _utils.delayQuerySelector)(this, '.at-accordion__body', 0).then(function (rect) {
        var height = parseInt(rect[0].height);
        var startHeight = open ? height : 0;
        var endHeight = open ? 0 : height;
        _this2.startOpen = false;
        _this2.setState({
          wrapperHeight: startHeight
        }, function () {
          setTimeout(function () {
            _this2.setState({
              wrapperHeight: endHeight
            }, function () {
              setTimeout(function () {
                _this2.isCompleted = true;
                _this2.setState({});
              }, 700);
            });
          }, 100);
        });
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.open !== this.props.open) {
        this.startOpen = nextProps.open && nextProps.isAnimation;
        this.toggleWithAnimation();
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _classNames;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props2 = this.__props,
          customStyle = _props2.customStyle,
          className = _props2.className,
          title = _props2.title,
          icon = _props2.icon,
          hasBorder = _props2.hasBorder,
          open = _props2.open,
          note = _props2.note;
      var wrapperHeight = this.__state.wrapperHeight;


      var rootCls = (0, _classnames2.default)('at-accordion', className);
      var prefixClass = icon && icon.prefixClass || 'at-icon';
      var iconCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixClass, true), _defineProperty(_classNames, prefixClass + "-" + (icon && icon.value), icon && icon.value), _defineProperty(_classNames, 'at-accordion__icon', true), _classNames));
      var headerCls = (0, _classnames2.default)('at-accordion__header', {
        'at-accordion__header--noborder': !hasBorder
      });
      var arrowCls = (0, _classnames2.default)('at-accordion__arrow', {
        'at-accordion__arrow--folded': !!open
      });
      var contentCls = (0, _classnames2.default)('at-accordion__content', {
        'at-accordion__content--inactive': !open && this.isCompleted || this.startOpen
      });
      var iconStyle = {
        color: icon && icon.color || '',
        fontSize: icon && icon.size + "px" || ''
      };
      var contentStyle = { height: wrapperHeight + "px" };

      if (this.isCompleted) {
        contentStyle.height = '';
      }

      var anonymousState__temp = (0, _taroTt.internal_inline_style)(customStyle);
      var anonymousState__temp2 = icon && icon.value ? (0, _taroTt.internal_inline_style)(iconStyle) : null;
      var anonymousState__temp3 = (0, _taroTt.internal_inline_style)(contentStyle);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        rootCls: rootCls,
        headerCls: headerCls,
        icon: icon,
        iconCls: iconCls,
        arrowCls: arrowCls,
        contentCls: contentCls,
        title: title,
        note: note
      });
      return this.__state;
    }
  }]);

  return AtAccordion;
}(_component2.default), _class.$$events = ["handleClick"], _class.$$componentPath = 'Users/axin/codes/\u9C7C\u6CE1\u7F51/\u5C0F\u7A0B\u5E8FTS\u91CD\u6784\u9879\u76EE/TaroTs-YuPaoWang/yupaowang/node_modules/taro-ui/dist/weapp/components/accordion/index', _temp2);


AtAccordion.defaultProps = {
  open: false,
  customStyle: '',
  className: '',
  title: '',
  note: '',
  icon: {},
  hasBorder: true,
  isAnimation: true,
  onClick: function onClick() {}
};

AtAccordion.propTypes = {
  customStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  className: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string]),
  open: _propTypes2.default.bool,
  isAnimation: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  note: _propTypes2.default.string,
  icon: _propTypes2.default.object,
  hasBorder: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};
exports.default = AtAccordion;

Component(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(AtAccordion));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/accordion/index.js","runtime","vendors"]]]);
