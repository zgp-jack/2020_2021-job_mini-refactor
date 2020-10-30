(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/recommendList/recruitList/index"],{

/***/ "./src/components/recommendList/recruitList/index.scss":
/*!*************************************************************!*\
  !*** ./src/components/recommendList/recruitList/index.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/recommendList/recruitList/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/recommendList/recruitList/index.tsx ***!
  \************************************************************/
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

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/recommendList/recruitList/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 招工

var RecruitListPage = function (_Taro$Component) {
  _inherits(RecruitListPage, _Taro$Component);

  function RecruitListPage() {
    _classCallCheck(this, RecruitListPage);

    var _this = _possibleConstructorReturn(this, (RecruitListPage.__proto__ || Object.getPrototypeOf(RecruitListPage)).apply(this, arguments));

    _this.$usedState = ["loopArray68", "data", "IMGCDNURL", "occupations", "city"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = ["Nodata"];
    return _this;
  }

  _createClass(RecruitListPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RecruitListPage.prototype.__proto__ || Object.getPrototypeOf(RecruitListPage.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
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
          _props$data = _props.data,
          data = _props$data === undefined ? [] : _props$data,
          _props$occupations = _props.occupations,
          occupations = _props$occupations === undefined ? '' : _props$occupations,
          _props$city = _props.city,
          city = _props$city === undefined ? '' : _props$city;
      // 用户页面跳转

      var userRouteJump = function userRouteJump(url) {
        _taroWeapp2.default.navigateTo({
          url: url
        });
      };
      this.anonymousFunc1 = function () {
        return userRouteJump("/pages/resume/recList/index?city=" + city + "&occupations=" + occupations);
      };
      var loopArray68 = data.map(function (v, __index0) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var _$indexKey = "hgzzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return userRouteJump("/pages/detail/info/index?id=" + v.$original.id);
        };
        return {
          _$indexKey: _$indexKey,
          $original: v.$original
        };
      });
      Object.assign(this.__state, {
        loopArray68: loopArray68,
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

  return RecruitListPage;
}(_taroWeapp2.default.Component);

RecruitListPage.$$events = ["anonymousFunc0", "anonymousFunc1"];
RecruitListPage.$$componentPath = "components/recommendList/recruitList/index";
exports.default = RecruitListPage;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(RecruitListPage));

/***/ })

},[["./src/components/recommendList/recruitList/index.tsx","runtime","vendors"]]]);