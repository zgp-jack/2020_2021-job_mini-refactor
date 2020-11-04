(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/resume/recList/index"],{

/***/ "./src/pages/resume/recList/index.scss":
/*!*********************************************!*\
  !*** ./src/pages/resume/recList/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/recList/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/resume/recList/index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/recList/index.scss");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _tabbar = __webpack_require__(/*! ../../../constants/tabbar */ "./src/constants/tabbar.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecListPage = function (_Taro$Component) {
  _inherits(RecListPage, _Taro$Component);

  function RecListPage() {
    _classCallCheck(this, RecListPage);

    var _this = _possibleConstructorReturn(this, (RecListPage.__proto__ || Object.getPrototypeOf(RecListPage)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '项目经验',
      enablePullDownRefresh: true
    };

    _this.$usedState = ["data", "loopArray99", "IMGCDNURL", "isDown"];
    _this.anonymousFunc1Map = {};
    _this.customComponents = ["Nodata"];
    return _this;
  }

  _createClass(RecListPage, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(RecListPage.prototype.__proto__ || Object.getPrototypeOf(RecListPage.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
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
      // 获取缓存数据
      var IntroinfoList = _taroTt2.default.getStorageSync(_store.Introinfo);
      // 获取数据

      var _useState = (0, _taroTt.useState)({
        item: []
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];
      // 是够能加载更多


      var _useState3 = (0, _taroTt.useState)(true),
          _useState4 = _slicedToArray(_useState3, 2),
          isDown = _useState4[0],
          setIsDown = _useState4[1];

      var _useState5 = (0, _taroTt.useState)({
        area_id: IntroinfoList.city,
        classify_id: IntroinfoList.occupations_id,
        page: 1,
        type: 1
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          search = _useState6[0],
          setSearch = _useState6[1];

      (0, _taroTt.useEffect)(function () {
        getListData();
      }, [search.page]);
      var getListData = function getListData() {
        (0, _index.jobRecommendListAction)(search).then(function (res) {
          if (!res.data.list.length) {
            setIsDown(false);
          }
          if (search.page === 1) {
            setData({ item: res.data.list });
          } else {
            setData({ item: [].concat(_toConsumableArray(data.item), _toConsumableArray(res.data.list)) });
          }
        });
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      var getNextPageData = function getNextPageData() {
        if (!isDown) {
          return;
        }
        setSearch(_extends({}, search, { page: search.page + 1, type: 2 }));
      };
      this.anonymousFunc0 = function () {
        return getNextPageData();
      };
      this.anonymousFunc2 = function () {
        return _taroTt2.default.reLaunch({ url: '/pages/index/index?type=' + _tabbar.RESUME });
      };
      var loopArray99 = data.item.map(function (v, __index1) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var _$indexKey = "baczz" + __index1;
        _this2.anonymousFunc1Map[_$indexKey] = function () {
          return userRouteJump("/pages/detail/info/index?id=" + v.$original.id);
        };
        return {
          _$indexKey: _$indexKey,
          $original: v.$original
        };
      });
      Object.assign(this.__state, {
        data: data,
        loopArray99: loopArray99,
        IMGCDNURL: _index2.IMGCDNURL,
        isDown: isDown
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(_$indexKey) {
      var _anonymousFunc1Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc1Map[_$indexKey] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return RecListPage;
}(_taroTt2.default.Component);

RecListPage.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"];
RecListPage.$$componentPath = "pages/resume/recList/index";
RecListPage.config = { navigationBarTitleText: '项目经验', enablePullDownRefresh: true };
exports.default = RecListPage;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(RecListPage, true));

/***/ })

},[["./src/pages/resume/recList/index.tsx","runtime","vendors"]]]);