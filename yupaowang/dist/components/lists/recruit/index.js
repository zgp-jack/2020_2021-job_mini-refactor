(qq["webpackJsonp"] = qq["webpackJsonp"] || []).push([["components/lists/recruit/index"],{

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

var _taroQq = __webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js");

var _taroQq2 = _interopRequireDefault(_taroQq);

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

    _this.$usedState = ["anonymousState__temp", "loopArray23", "$compid__25", "data", "IMGCDNURL", "hasMore", "bottom"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = ["Nodata"];
    return _this;
  }

  _createClass(RecruitList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RecruitList.prototype.__proto__ || Object.getPrototypeOf(RecruitList.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroQq2.default.RefsArray();
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

      var _genCompid = (0, _taroQq.genCompid)(__prefix + "$compid__25"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__25 = _genCompid2[0],
          $compid__25 = _genCompid2[1];

      var _props = this.__props,
          data = _props.data,
          _props$bottom = _props.bottom,
          bottom = _props$bottom === undefined ? true : _props$bottom,
          _props$hasMore = _props.hasMore,
          hasMore = _props$hasMore === undefined ? false : _props$hasMore;
      // 用户页面跳转

      var userRouteJump = function userRouteJump(url) {
        _taroQq2.default.navigateTo({
          url: url
        });
      };
      var anonymousState__temp = (0, _taroQq.internal_inline_style)(bottom ? '' : 'padding-bottom:0');
      var loopArray23 = data ? data.map(function (item, __index1) {
        item = {
          $original: (0, _taroQq.internal_get_original)(item)
        };
        var $anonymousCallee__3 = item.$original ? item.$original.map(function (d, __index0) {
          d = {
            $original: (0, _taroQq.internal_get_original)(d)
          };
          var _$indexKey = "cizzz" + __index1 + "-" + __index0;
          _this2.anonymousFunc0Map[_$indexKey] = function () {
            return userRouteJump("/pages/detail/info/index?id=" + d.$original.id);
          };
          var $loopState__temp3 = item.$original ? _index.REPLACEWEIXINTEXT ? d.$original.detail.replace(_index.FILTERWEIXINREG, '') : d.$original.detail : null;
          return {
            _$indexKey: _$indexKey,
            $loopState__temp3: $loopState__temp3,
            $original: d.$original
          };
        }) : [];
        return {
          $anonymousCallee__3: $anonymousCallee__3,
          $original: item.$original
        };
      }) : [];
      data && data[0] && !data[0].length && _taroQq.propsManager.set({
        "text": "\u6682\u65E0\u76F8\u5173\u6570\u636E"
      }, $compid__25, $prevCompid__25);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray23: loopArray23,
        $compid__25: $compid__25,
        data: data,
        IMGCDNURL: _index.IMGCDNURL,
        hasMore: hasMore
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
}(_taroQq2.default.Component);

RecruitList.$$events = ["anonymousFunc0"];
RecruitList.$$componentPath = "components/lists/recruit/index";
exports.default = RecruitList;

Component(__webpack_require__(/*! @tarojs/taro-qq */ "./node_modules/@tarojs/taro-qq/index.js").default.createComponent(RecruitList));

/***/ })

},[["./src/components/lists/recruit/index.tsx","runtime","vendors"]]]);