(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["components/lists/recruit/index"],{

/***/ "./src/components/lists/recruit/index.scss":
/*!*************************************************!*\
  !*** ./src/components/lists/recruit/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/lists/recruit/index.tsx":
/*!************************************************!*\
  !*** ./src/components/lists/recruit/index.tsx ***!
  \************************************************/
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

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/lists/recruit/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecruitList = function (_Taro$Component) {
  _inherits(RecruitList, _Taro$Component);

  function RecruitList() {
    _classCallCheck(this, RecruitList);

    var _this = _possibleConstructorReturn(this, (RecruitList.__proto__ || Object.getPrototypeOf(RecruitList)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "loopArray100", "$compid__85", "data", "IMGCDNURL", "bottom"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = ["Nodata"];
    return _this;
  }

  _createClass(RecruitList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RecruitList.prototype.__proto__ || Object.getPrototypeOf(RecruitList.prototype), "_constructor", this).call(this, props);
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

<<<<<<< HEAD
      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__11"),
=======
      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__85"),
>>>>>>> abac5d3434e1eab5d85d51a17bd8bc75756a93ca
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__85 = _genCompid2[0],
          $compid__85 = _genCompid2[1];

      var _props = this.__props,
          data = _props.data,
          _props$bottom = _props.bottom,
          bottom = _props$bottom === undefined ? true : _props$bottom;
      // 用户页面跳转

      var userRouteJump = function userRouteJump(url) {
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      var anonymousState__temp = (0, _taroTt.internal_inline_style)(bottom ? '' : 'padding-bottom:0');
<<<<<<< HEAD
      var loopArray10 = data ? data.map(function (item, __index1) {
=======
      var loopArray100 = data ? data.map(function (item, __index1) {
>>>>>>> abac5d3434e1eab5d85d51a17bd8bc75756a93ca
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var $anonymousCallee__14 = item.$original ? item.$original.map(function (d, __index0) {
          d = {
            $original: (0, _taroTt.internal_get_original)(d)
          };
          var _$indexKey = "baczz" + __index1 + "-" + __index0;
          _this2.anonymousFunc0Map[_$indexKey] = function () {
            return userRouteJump("/pages/detail/info/index?id=" + d.$original.id);
          };
          return {
            _$indexKey: _$indexKey,
            $original: d.$original
          };
        }) : [];
        return {
          $anonymousCallee__14: $anonymousCallee__14,
          $original: item.$original
        };
      }) : [];
      data && data[0] && !data[0].length && _taroTt.propsManager.set({
        "text": "\u6682\u65E0\u76F8\u5173\u6570\u636E"
      }, $compid__85, $prevCompid__85);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray100: loopArray100,
        $compid__85: $compid__85,
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
  }]);

  return RecruitList;
}(_taroTt2.default.Component);

RecruitList.$$events = ["anonymousFunc0"];
RecruitList.$$componentPath = "components/lists/recruit/index";
exports.default = RecruitList;

Component(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(RecruitList));

/***/ })

},[["./src/components/lists/recruit/index.tsx","runtime","vendors"]]]);