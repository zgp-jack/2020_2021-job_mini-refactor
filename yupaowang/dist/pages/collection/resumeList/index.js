(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/collection/resumeList/index"],{

/***/ "./src/pages/collection/resumeList/index.scss":
/*!****************************************************!*\
  !*** ./src/pages/collection/resumeList/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/collection/resumeList/index.tsx":
/*!***************************************************!*\
  !*** ./src/pages/collection/resumeList/index.tsx ***!
  \***************************************************/
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

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/collection/resumeList/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResumeList = function (_Taro$Component) {
  _inherits(ResumeList, _Taro$Component);

  function ResumeList() {
    _classCallCheck(this, ResumeList);

    var _this = _possibleConstructorReturn(this, (ResumeList.__proto__ || Object.getPrototypeOf(ResumeList)).apply(this, arguments));

    _this.$usedState = ["$compid__50", "bottom", "initPage"];
    _this.customComponents = ["CollectionResumeList"];
    return _this;
  }

  _createClass(ResumeList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ResumeList.prototype.__proto__ || Object.getPrototypeOf(ResumeList.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__50"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__50 = _genCompid2[0],
          $compid__50 = _genCompid2[1];

      var _props = this.__props,
          bottom = _props.bottom,
          initPage = _props.initPage;
      // * 标记是否是在刷新状态

      var _useState = (0, _taroWeapp.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          refresh = _useState2[0],
          setRefresh = _useState2[1];
      // * 定义找活列表数组


      var _useState3 = (0, _taroWeapp.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          resLists = _useState4[0],
          setResLists = _useState4[1];
      // 找活初始页数


      var _useState5 = (0, _taroWeapp.useState)({
        page: 1
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          initResPage = _useState6[0],
          setinitResPage = _useState6[1];
      // 没有更多数据


      var _useState7 = (0, _taroWeapp.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          recruitNoMoreData = _useState8[0],
          setRecruitNoMoreData = _useState8[1];
      // 请求数据


      (0, _taroWeapp.useEffect)(function () {
        (0, _index.getCollectionResumeListData)(initResPage.page).then(function (res) {
          _taroWeapp2.default.hideNavigationBarLoading();
          _taroWeapp2.default.stopPullDownRefresh();
          if (!res.data.length) {
            setRecruitNoMoreData(true);
          }
          if (initResPage.page === 1) {
            setResLists([].concat(_toConsumableArray(res.data)));
          } else {
            setResLists([].concat(_toConsumableArray(resLists), _toConsumableArray(res.data)));
          }
          if (refresh) {
            setRefresh(false);
          }
        });
      }, [initResPage]);
      // 上拉加载更多
      (0, _taroWeapp.useEffect)(function () {
        if (!bottom) {
          return;
        }
        if (recruitNoMoreData) {
          return;
        }
        setinitResPage(_extends({}, initResPage, { page: initResPage.page + 1 }));
      }, [bottom]);
      // 下拉
      (0, _taroWeapp.useEffect)(function () {
        // console.log('下拉')
        if (!initPage) {
          return;
        }
        setRecruitNoMoreData(false);
        setinitResPage({ page: initPage });
      }, [initPage]);
      // 找活取消收藏
      var resumeListHandler = function resumeListHandler(id) {
        (0, _index.ResumeCancelCollectionAction)(id).then(function (res) {
          if (res.errcode === 'ok') {
            setinitResPage({ page: 1 });
          }
        });
      };
      this.anonymousFunc0 = resumeListHandler;
      _taroWeapp.propsManager.set({
        "data": resLists,
        "onHandlerClick": this.anonymousFunc0,
        "recruitNoMoreData": recruitNoMoreData
      }, $compid__50, $prevCompid__50);
      Object.assign(this.__state, {
        $compid__50: $compid__50
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return ResumeList;
}(_taroWeapp2.default.Component);

ResumeList.$$events = [];
ResumeList.$$componentPath = "pages/collection/resumeList/index";
exports.default = ResumeList;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(ResumeList));

/***/ })

},[["./src/pages/collection/resumeList/index.tsx","runtime","vendors"]]]);