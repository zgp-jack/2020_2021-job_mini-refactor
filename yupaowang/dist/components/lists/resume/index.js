(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["components/lists/resume/index"],{

/***/ "./src/components/lists/resume/index.scss":
/*!************************************************!*\
  !*** ./src/components/lists/resume/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/lists/resume/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/lists/resume/index.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/lists/resume/index.scss");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResumeList = function (_Taro$Component) {
  _inherits(ResumeList, _Taro$Component);

  function ResumeList() {
    _classCallCheck(this, ResumeList);

    var _this = _possibleConstructorReturn(this, (ResumeList.__proto__ || Object.getPrototypeOf(ResumeList)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "loopArray24", "$compid__26", "data", "IMGCDNURL", "hasMore", "bottom"];
    _this.anonymousFunc0Map = {};
    _this.anonymousFunc1Map = {};
    _this.customComponents = ["Nodata"];
    return _this;
  }

  _createClass(ResumeList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ResumeList.prototype.__proto__ || Object.getPrototypeOf(ResumeList.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__26"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__26 = _genCompid2[0],
          $compid__26 = _genCompid2[1];

      var _props = this.__props,
          data = _props.data,
          _props$bottom = _props.bottom,
          bottom = _props$bottom === undefined ? true : _props$bottom,
          _props$hasMore = _props.hasMore,
          hasMore = _props$hasMore === undefined ? true : _props$hasMore;
      // 用户页面跳转

      var userRouteJump = function userRouteJump(uuid) {
        var location = _taroSwan2.default.getStorageSync(_store.UserLocation);
        location = location ? location = location.split(',').reverse() : '';
        _taroSwan2.default.navigateTo({
          url: "/pages/resume/detail/index?uuid=" + uuid + "&location=" + location
        });
      };
      var handleJump = function handleJump(url) {
        _taroSwan2.default.navigateTo({
          url: url
        });
      };
      var anonymousState__temp = (0, _taroSwan.internal_inline_style)(bottom ? '' : 'padding-bottom:0');
      var loopArray24 = data ? data.map(function (item, di) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp3 = data ? di + "-" + di : null;
        var anonymousCallee__5 = item.privateOriginal ? item.privateOriginal.map(function (d, __index0) {
          d = {
            privateOriginal: (0, _taroSwan.internal_get_original)(d)
          };
          var _$indexKey = "dazzz" + di + "-" + __index0;
          _this2.anonymousFunc0Map[_$indexKey] = function () {
            return userRouteJump(d.privateOriginal.uuid);
          };
          var _$indexKey2 = "dbzzz" + di + "-" + __index0;
          _this2.anonymousFunc1Map[_$indexKey2] = function (e) {
            e.stopPropagation();
            handleJump(_index.PUBLISHRESUME);
          };
          var loopState__temp7 = item.privateOriginal ? _index.REPLACEWEIXINTEXT ? d.privateOriginal.introduce.replace(_index.FILTERWEIXINREG, '') : d.privateOriginal.introduce : null;
          var anonymousCallee__4 = item.privateOriginal ? d.privateOriginal.occupations.map(function (i, ii) {
            i = {
              privateOriginal: (0, _taroSwan.internal_get_original)(i)
            };
            var loopState__temp5 = item.privateOriginal ? d.privateOriginal.id + "-" + ii : null;
            return {
              loopState__temp5: loopState__temp5,
              privateOriginal: i.privateOriginal
            };
          }) : [];
          return {
            _$indexKey: _$indexKey,
            _$indexKey2: _$indexKey2,
            loopState__temp7: loopState__temp7,
            anonymousCallee__4: anonymousCallee__4,
            privateOriginal: d.privateOriginal
          };
        }) : [];
        return {
          loopState__temp3: loopState__temp3,
          anonymousCallee__5: anonymousCallee__5,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      data && data[0] && !data[0].length && _taroSwan.propsManager.set({
        "text": "\u6682\u65E0\u76F8\u5173\u6570\u636E"
      }, $compid__26, $prevCompid__26);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray24: loopArray24,
        $compid__26: $compid__26,
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
  }]);

  return ResumeList;
}(_taroSwan2.default.Component);

ResumeList.$$events = ["anonymousFunc0", "anonymousFunc1"];
ResumeList.$$componentPath = "components/lists/resume/index";
exports.default = ResumeList;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(ResumeList));

/***/ })

},[["./src/components/lists/resume/index.tsx","runtime","vendors"]]]);