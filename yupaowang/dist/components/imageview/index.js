(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["components/imageview/index"],{

/***/ "./src/components/imageview/index.scss":
/*!*********************************************!*\
  !*** ./src/components/imageview/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/imageview/index.tsx":
/*!********************************************!*\
  !*** ./src/components/imageview/index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

__webpack_require__(/*! ./index.scss */ "./src/components/imageview/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageView = function (_Taro$Component) {
  _inherits(ImageView, _Taro$Component);

  function ImageView() {
    _classCallCheck(this, ImageView);

    var _this = _possibleConstructorReturn(this, (ImageView.__proto__ || Object.getPrototypeOf(ImageView)).apply(this, arguments));

    _this.$usedState = ["loopArray14", "images", "bool", "max", "userUploadImg", "userDelImg"];
    _this.anonymousFunc0Map = {};
    _this.anonymousFunc1Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(ImageView, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ImageView.prototype.__proto__ || Object.getPrototypeOf(ImageView.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
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
          images = _props.images,
          userUploadImg = _props.userUploadImg,
          max = _props.max,
          userDelImg = _props.userDelImg;

      var bool = userDelImg ? true : false;
      this.anonymousFunc2 = function () {
        return userUploadImg && userUploadImg(-1);
      };
      var loopArray14 = images ? images.map(function (item, index) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var $loopState__temp2 = images ? index + 'a' : null;
        var _$indexKey = "bjzzz" + index;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return userUploadImg && userUploadImg(index);
        };
        var _$indexKey2 = "cazzz" + index;
        _this2.anonymousFunc1Map[_$indexKey2] = function (e) {
          e.stopPropagation();
          userDelImg && userDelImg(index);
        };
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray14: loopArray14,
        images: images,
        bool: bool,
        max: max
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
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      (typeof e === "undefined" ? "undefined" : _typeof(e)) === 'object' && e.stopPropagation && e.stopPropagation();
      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return ImageView;
}(_taroTt2.default.Component);

ImageView.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"];
ImageView.$$componentPath = "components/imageview/index";
ImageView.options = {
  addGlobalClass: true
};
exports.default = ImageView;

Component(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(ImageView));

/***/ })

},[["./src/components/imageview/index.tsx","runtime","vendors"]]]);