(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/collection/index"],{

/***/ "./src/pages/collection/config.ts":
/*!****************************************!*\
  !*** ./src/pages/collection/config.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var tab = [{
  id: 1,
  text: '招工信息',
  icon: _index.IMGCDNURL + 'new-collect-info-active.png',
  activeIcon: _index.IMGCDNURL + 'new-collect-info.png',
  title: '我收藏的招工信息'
}, {
  id: 2,
  text: '找活信息',
  icon: _index.IMGCDNURL + 'new-collect-resume.png',
  activeIcon: _index.IMGCDNURL + 'new-collect-resume-active.png',
  title: '我收藏的找活信息'
}];
exports.default = tab;

/***/ }),

/***/ "./src/pages/collection/index.scss":
/*!*****************************************!*\
  !*** ./src/pages/collection/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/collection/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/collection/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _config = __webpack_require__(/*! ./config */ "./src/pages/collection/config.ts");

var _config2 = _interopRequireDefault(_config);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/collection/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_Taro$Component) {
  _inherits(Collection, _Taro$Component);

  function Collection() {
    _classCallCheck(this, Collection);

    var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '我收藏的招工信息',
      enablePullDownRefresh: true,
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: "dark"
    };

    _this.$usedState = ["loopArray68", "$compid__55", "$compid__56", "login", "tab", "current"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = ["Auth", "RecruitList", "ResumeList"];
    return _this;
  }

  _createClass(Collection, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Collection.prototype.__proto__ || Object.getPrototypeOf(Collection.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__55"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__55 = _genCompid2[0],
          $compid__55 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__56"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__56 = _genCompid4[0],
          $compid__56 = _genCompid4[1];

      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // 默认table

      var _useState = (0, _taroSwan.useState)(1),
          _useState2 = _slicedToArray(_useState, 2),
          current = _useState2[0],
          setCurrent = _useState2[1];

      var _useState3 = (0, _taroSwan.useState)(0),
          _useState4 = _slicedToArray(_useState3, 2),
          bottom = _useState4[0],
          setBottom = _useState4[1];

      var _useState5 = (0, _taroSwan.useState)(0),
          _useState6 = _slicedToArray(_useState5, 2),
          initPage = _useState6[0],
          setInitPage = _useState6[1];

      var handleTable = function handleTable(type) {
        setBottom(0);
        setInitPage(0);
        setCurrent(type);
        _taroSwan2.default.setNavigationBarTitle({ title: _config2.default[type - 1].title });
      };
      // 是否加载更多
      (0, _taroSwan.useReachBottom)(function () {
        setBottom(bottom + 1);
      });
      // 下拉刷新
      (0, _taroSwan.usePullDownRefresh)(function () {
        if (!login) {
          _taroSwan2.default.stopPullDownRefresh();
          return;
        }
        setInitPage(initPage + 1);
      });
      var loopArray68 = login ? _config2.default.map(function (item, __index0) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var _$indexKey = "iazzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return handleTable(item.privateOriginal.id);
        };
        var loopState__temp2 = login ? (0, _classnames2.default)({
          'collection-tab-border': item.privateOriginal.id === current,
          'collection-tab-cmontent': true
        }) : null;
        var loopState__temp4 = login ? (0, _classnames2.default)({
          'collection.active-text': item.privateOriginal.id === current
        }) : null;
        return {
          _$indexKey: _$indexKey,
          loopState__temp2: loopState__temp2,
          loopState__temp4: loopState__temp4,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      login && current === 1 && _taroSwan.propsManager.set({
        "bottom": bottom,
        "initPage": initPage
      }, $compid__55, $prevCompid__55);
      login && !(current === 1) && _taroSwan.propsManager.set({
        "bottom": bottom,
        "initPage": initPage
      }, $compid__56, $prevCompid__56);
      Object.assign(this.__state, {
        loopArray68: loopArray68,
        $compid__55: $compid__55,
        $compid__56: $compid__56,
        login: login,
        tab: _config2.default,
        current: current
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return Collection;
}(_taroSwan2.default.Component);

Collection.$$events = ["anonymousFunc0"];
Collection.$$componentPath = "pages/collection/index";
Collection.config = { navigationBarTitleText: '我收藏的招工信息', enablePullDownRefresh: true, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = Collection;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Collection, true));

/***/ })

},[["./src/pages/collection/index.tsx","runtime","vendors"]]]);