(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./src/pages/home/index.scss":
/*!***********************************!*\
  !*** ./src/pages/home/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/home/index.scss");

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Taro$Component) {
  _inherits(Home, _Taro$Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));

    _this.$usedState = ["$compid__5", "$compid__6", "$compid__7", "$compid__8", "$compid__9", "IMGCDNURL", "ISWEIXIN"];
    _this.customComponents = ["SwiperComponent", "Projects", "Fastfun", "SwiperNews", "RecruitList", "ResumeList", "UsedList", "About"];
    return _this;
  }

  _createClass(Home, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__5"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__5 = _genCompid2[0],
          $compid__5 = _genCompid2[1];

      var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "$compid__6"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__6 = _genCompid4[0],
          $compid__6 = _genCompid4[1];

      var _genCompid5 = (0, _taroTt.genCompid)(__prefix + "$compid__7"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__7 = _genCompid6[0],
          $compid__7 = _genCompid6[1];

      var _genCompid7 = (0, _taroTt.genCompid)(__prefix + "$compid__8"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__8 = _genCompid8[0],
          $compid__8 = _genCompid8[1];

      var _genCompid9 = (0, _taroTt.genCompid)(__prefix + "$compid__9"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__9 = _genCompid10[0],
          $compid__9 = _genCompid10[1];
      // * 获取列表数据的data


      var _useState = (0, _taroTt.useState)({
        area: '',
        location: ''
      }),
          _useState2 = _slicedToArray(_useState, 2),
          filterData = _useState2[0],
          setFilterData = _useState2[1];
      // * 轮播图的基本参数配置


      var _useState3 = (0, _taroTt.useState)({
        lists: []
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          swiper = _useState4[0],
          setSwiper = _useState4[1];
      // * 公告列表


      var _useState5 = (0, _taroTt.useState)({
        vertical: true,
        lists: []
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          notice = _useState6[0],
          setNotice = _useState6[1];
      // * 数据列表


      var _useState7 = (0, _taroTt.useState)({
        recruit: [],
        resume: [],
        fleamarket: []
      }),
          _useState8 = _slicedToArray(_useState7, 2),
          lists = _useState8[0],
          setLists = _useState8[1];
      // 请求轮播数据


      (0, _taroTt.useEffect)(function () {
        (0, _index2.getBannerNotice)().then(function (res) {
          setNotice(_extends({}, notice, { lists: [].concat(_toConsumableArray(res.notice)) }));
          setSwiper(_extends({}, swiper, { lists: [].concat(_toConsumableArray(res.banner)) }));
        });
      }, []);
      // 请求列表数据
      (0, _taroTt.useEffect)(function () {
        (0, _index2.getAllListItem)(filterData).then(function (res) {
          setLists(_extends({}, lists, {
            recruit: [[].concat(_toConsumableArray(res.job.lists))],
            resume: [[].concat(_toConsumableArray(res.resume.lists))],
            fleamarket: [[].concat(_toConsumableArray(res.fleamarket.lists))]
          }));
        });
      }, [filterData]);
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      this.anonymousFunc0 = function () {
        return userRouteJump('/subpackage/pages/download/index');
      };
      _taroTt.propsManager.set({
        "data": swiper
      }, $compid__5, $prevCompid__5);
      _taroTt.propsManager.set({
        "data": notice
      }, $compid__6, $prevCompid__6);
      _taroTt.propsManager.set({
        "data": lists.recruit,
        "bottom": false
      }, $compid__7, $prevCompid__7);
      _taroTt.propsManager.set({
        "data": lists.resume,
        "bottom": false
      }, $compid__8, $prevCompid__8);
      _taroTt.propsManager.set({
        "data": lists.fleamarket,
        "bottom": false
      }, $compid__9, $prevCompid__9);
      Object.assign(this.__state, {
        $compid__5: $compid__5,
        $compid__6: $compid__6,
        $compid__7: $compid__7,
        $compid__8: $compid__8,
        $compid__9: $compid__9,
        IMGCDNURL: _index.IMGCDNURL,
        ISWEIXIN: false
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return Home;
}(_taroTt2.default.Component);

Home.$$events = ["anonymousFunc0"];
Home.$$componentPath = "pages/home/index";
exports.default = Home;

Component(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Home));

/***/ })

},[["./src/pages/home/index.tsx","runtime","vendors"]]]);