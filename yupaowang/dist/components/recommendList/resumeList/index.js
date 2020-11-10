(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["components/recommendList/resumeList/index"],{

/***/ "./src/components/recommendList/resumeList/index.scss":
/*!************************************************************!*\
  !*** ./src/components/recommendList/resumeList/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/recommendList/resumeList/index.tsx":
/*!***********************************************************!*\
  !*** ./src/components/recommendList/resumeList/index.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/recommendList/resumeList/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 找活

var ResumeListPage = function (_Taro$Component) {
  _inherits(ResumeListPage, _Taro$Component);

  function ResumeListPage() {
    _classCallCheck(this, ResumeListPage);

    var _this = _possibleConstructorReturn(this, (ResumeListPage.__proto__ || Object.getPrototypeOf(ResumeListPage)).apply(this, arguments));

    _this.$usedState = ["loopArray72", "data", "IMGCDNURL"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(ResumeListPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ResumeListPage.prototype.__proto__ || Object.getPrototypeOf(ResumeListPage.prototype), "_constructor", this).call(this, props);
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
      var _props$data = this.__props.data,
          data = _props$data === undefined ? [] : _props$data;
      // 用户页面跳转

      var userRouteJump = function userRouteJump(url) {
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      var handleLast = function handleLast() {
        _taroTt2.default.navigateBack({
          delta: 1
        });
      };
      this.anonymousFunc1 = function () {
        return handleLast();
      };
      var loopArray72 = data.map(function (item, __index0) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey = "iazzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return userRouteJump("/pages/resume/detail/index?uuid=" + item.$original.uuid + "&location=" + item.$original.location);
        };
        var $anonymousCallee__8 = item.$original.occupations.map(function (v, i) {
          v = {
            $original: (0, _taroTt.internal_get_original)(v)
          };
          var $loopState__temp2 = i + i;
          return {
            $loopState__temp2: $loopState__temp2,
            $original: v.$original
          };
        });
        return {
          _$indexKey: _$indexKey,
          $anonymousCallee__8: $anonymousCallee__8,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray72: loopArray72,
        data: data,
        IMGCDNURL: _index.IMGCDNURL
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
    value: function anonymousFunc1(e) {
      ;
    }
  }]);

  return ResumeListPage;
}(_taroTt2.default.Component);

ResumeListPage.$$events = ["anonymousFunc0", "anonymousFunc1"];
ResumeListPage.$$componentPath = "components/recommendList/resumeList/index";
exports.default = ResumeListPage;

Component(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(ResumeListPage));

/***/ })

},[["./src/components/recommendList/resumeList/index.tsx","runtime","vendors"]]]);