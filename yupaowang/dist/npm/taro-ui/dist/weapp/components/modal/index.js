(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/modal/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/modal/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/modal/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _isFunction2 = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.js");

var _component2 = _interopRequireDefault(_component);

var _utils = __webpack_require__(/*! ../../common/utils */ "./node_modules/taro-ui/dist/weapp/common/utils.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtModal = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtModal, _AtComponent);

  function AtModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtModal.__proto__ || Object.getPrototypeOf(AtModal)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["_$isRenderAction", "_$anonymousState__temp", "$compid__60", "title", "content", "isWEB", "cancelText", "confirmText", "rootClass", "_isOpened", "isOpened", "closeOnClickOverlay", "className", "children"], _this.handleClickOverlay = function () {
      if (_this.props.closeOnClickOverlay) {
        _this.setState({
          _isOpened: false
        }, _this.handleClose);
      }
    }, _this.handleClose = function () {
      if ((0, _isFunction3.default)(_this.props.onClose)) {
        _this.props.onClose();
      }
    }, _this.handleCancel = function () {
      if ((0, _isFunction3.default)(_this.props.onCancel)) {
        _this.props.onCancel();
      }
    }, _this.handleConfirm = function () {
      if ((0, _isFunction3.default)(_this.props.onConfirm)) {
        _this.props.onConfirm();
      }
    }, _this.handleTouchMove = function (e) {
      e.stopPropagation();
    }, _this.customComponents = ["AtModalHeader", "AtModalContent", "AtModalAction"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtModal, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtModal.prototype.__proto__ || Object.getPrototypeOf(AtModal.prototype), '_constructor', this).apply(this, arguments);

      var isOpened = props.isOpened;

      this.state = {
        _isOpened: isOpened,
        isWEB: _taroSwan2.default.getEnv() === _taroSwan2.default.ENV_TYPE.WEB
      };
      this.$$refs = new _taroSwan2.default.RefsArray();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var isOpened = nextProps.isOpened;


      if (this.props.isOpened !== isOpened) {
        (0, _utils.handleTouchScroll)(isOpened);
      }

      if (isOpened !== this.state._isOpened) {
        this.setState({
          _isOpened: isOpened
        });
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__60"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__60 = _genCompid2[0],
          $compid__60 = _genCompid2[1];

      var _$isRenderAction, _$anonymousState__temp;

      var _state = this.__state,
          _isOpened = _state._isOpened,
          isWEB = _state.isWEB;
      var _props = this.__props,
          title = _props.title,
          content = _props.content,
          cancelText = _props.cancelText,
          confirmText = _props.confirmText;

      var rootClass = (0, _classnames2.default)('at-modal', {
        'at-modal--active': _isOpened
      }, this.__props.className);

      if (title || content) {
        _$isRenderAction = cancelText || confirmText;
        _$anonymousState__temp = content ? isWEB ? { __html: content.replace(/\n/g, '<br/>') } : null : null;
        _$isRenderAction && _taroSwan.propsManager.set({
          "isSimple": true
        }, $compid__60, $prevCompid__60);
      }

      Object.assign(this.__state, {
        _$isRenderAction: _$isRenderAction,
        _$anonymousState__temp: _$anonymousState__temp,
        $compid__60: $compid__60,
        title: title,
        content: content,
        cancelText: cancelText,
        confirmText: confirmText,
        rootClass: rootClass
      });
      return this.__state;
    }
  }]);

  return AtModal;
}(_component2.default), _class.$$events = ["handleClickOverlay", "handleCancel", "handleConfirm", "handleTouchMove"], _class.$$componentPath = "C:/Users/123/Desktop/yupao-ts-recode/yupaowang/node_modules/taro-ui/dist/weapp/components/modal/index", _temp2);


AtModal.defaultProps = {
  closeOnClickOverlay: true
};

AtModal.propTypes = {
  title: _propTypes2.default.string,
  isOpened: _propTypes2.default.bool,
  onCancel: _propTypes2.default.func,
  onConfirm: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  content: _propTypes2.default.string,
  closeOnClickOverlay: _propTypes2.default.bool,
  cancelText: _propTypes2.default.string,
  confirmText: _propTypes2.default.string
};
exports.default = AtModal;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(AtModal));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/modal/index.js","runtime","vendors"]]]);