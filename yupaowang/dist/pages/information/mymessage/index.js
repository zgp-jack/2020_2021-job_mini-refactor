(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/information/mymessage/index"],{

/***/ "./src/pages/information/mymessage/index.scss":
/*!****************************************************!*\
  !*** ./src/pages/information/mymessage/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/information/mymessage/index.tsx":
/*!***************************************************!*\
  !*** ./src/pages/information/mymessage/index.tsx ***!
  \***************************************************/
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

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index3 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/information/mymessage/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mymessage = function (_Taro$Component) {
  _inherits(Mymessage, _Taro$Component);

  function Mymessage() {
    _classCallCheck(this, Mymessage);

    var _this = _possibleConstructorReturn(this, (Mymessage.__proto__ || Object.getPrototypeOf(Mymessage)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '鱼泡网-我的信息'
    };

    _this.$usedState = ["data", "loopArray68", "IMGCDNURL"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = ["Auth", "Nodata"];
    return _this;
  }

  _createClass(Mymessage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Mymessage.prototype.__proto__ || Object.getPrototypeOf(Mymessage.prototype), "_constructor", this).call(this, props);
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
      // 默认数据

      var _useState = (0, _taroTt.useState)({
        item: []
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];
      // 获取用户是否登录


      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // 判断是否是ios

      var _useState3 = (0, _taroTt.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          ios = _useState4[0],
          setIos = _useState4[1];
      // 数据请求


      (0, _taroTt.useEffect)(function () {
        if (!login) {
          return;
        }
        setIos((0, _index3.isIos)());
        var type = ios ? 'ios' : 'android';
        (0, _index.userMessagesAction)(type).then(function (res) {
          setData({ item: res.data.lists });
        });
      }, [login]);
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      var loopArray68 = data.item.map(function (item, index) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var $loopState__temp2 = index + index;
        var _$indexKey = "hjzzz" + index;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return userRouteJump("/pages/information/system/index?type=" + item.$original.type);
        };
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        data: data,
        loopArray68: loopArray68,
        IMGCDNURL: _index2.IMGCDNURL
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

  return Mymessage;
}(_taroTt2.default.Component);

Mymessage.$$events = ["anonymousFunc0"];
Mymessage.$$componentPath = "pages/information/mymessage/index";
Mymessage.config = { navigationBarTitleText: '鱼泡网-我的信息' };
exports.default = Mymessage;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Mymessage, true));

/***/ })

},[["./src/pages/information/mymessage/index.tsx","runtime","vendors"]]]);