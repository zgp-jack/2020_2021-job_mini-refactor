(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/collection/recruitList/index"],{

/***/ "./src/pages/collection/recruitList/index.scss":
/*!*****************************************************!*\
  !*** ./src/pages/collection/recruitList/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/collection/recruitList/index.tsx":
/*!****************************************************!*\
  !*** ./src/pages/collection/recruitList/index.tsx ***!
  \****************************************************/
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

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/collection/recruitList/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecruitList = function (_Taro$Component) {
  _inherits(RecruitList, _Taro$Component);

  function RecruitList() {
    _classCallCheck(this, RecruitList);

    var _this = _possibleConstructorReturn(this, (RecruitList.__proto__ || Object.getPrototypeOf(RecruitList)).apply(this, arguments));

    _this.$usedState = ["$compid__50", "bottom", "initPage"];
    _this.customComponents = ["CollectionRecruitList"];
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
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__50"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__50 = _genCompid2[0],
          $compid__50 = _genCompid2[1];

      var _props = this.__props,
          bottom = _props.bottom,
          initPage = _props.initPage;
      // * 标记是否是在刷新状态

      var _useState = (0, _taroTt.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          refresh = _useState2[0],
          setRefresh = _useState2[1];
      // * 定义招工列表数组


      var _useState3 = (0, _taroTt.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          lists = _useState4[0],
          setLists = _useState4[1];
      // 招工初始页数


      var _useState5 = (0, _taroTt.useState)({
        page: 1
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          initRecPage = _useState6[0],
          setinitRecPage = _useState6[1];
      // 没有更多数据


      var _useState7 = (0, _taroTt.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          recruitNoMoreData = _useState8[0],
          setRecruitNoMoreData = _useState8[1];
      // 是否加载更多


      var _useState9 = (0, _taroTt.useState)(false),
          _useState10 = _slicedToArray(_useState9, 2),
          more = _useState10[0],
          setMore = _useState10[1];
      // 获取用户是否登录


      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // 判断是否登陆
      (0, _taroTt.useEffect)(function () {
        if (!login) {
          return;
        }
        getCollectionRecruitListDataAction();
      }, [login, initRecPage]);
      // * 请求数据
      var getCollectionRecruitListDataAction = function getCollectionRecruitListDataAction() {
        (0, _index.getCollectionRecruitListData)(initRecPage.page).then(function (res) {
          _taroTt2.default.hideNavigationBarLoading();
          _taroTt2.default.stopPullDownRefresh();
          if (!res.list.length) {
            setRecruitNoMoreData(true);
          }
          if (initRecPage.page === 1) {
            setLists([].concat(_toConsumableArray(res.list)));
          } else {
            setLists([].concat(_toConsumableArray(lists), _toConsumableArray(res.list)));
          }
          if (refresh) {
            setRefresh(false);
          }
          if (more) {
            setMore(false);
          }
        });
      };
      // * 上拉刷新
      (0, _taroTt.useEffect)(function () {
        if (!bottom) {
          return;
        }
        if (recruitNoMoreData) {
          return;
        }
        setinitRecPage(_extends({}, initRecPage, { page: initRecPage.page + 1 }));
      }, [bottom]);
      // 下拉
      (0, _taroTt.useEffect)(function () {
        if (initPage === 0) {
          return;
        }
        setRecruitNoMoreData(false);
        setinitRecPage({ page: 1 });
      }, [initPage]);
      // * 招工取消收藏
      var recruitListHandler = function recruitListHandler(id) {
        (0, _index.recruitListCancelCollectionAction)(id).then(function (res) {
          if (res.errcode === 'ok') {
            setinitRecPage({ page: 1 });
          }
        });
      };
      this.anonymousFunc0 = recruitListHandler;
      _taroTt.propsManager.set({
        "data": lists,
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

  return RecruitList;
}(_taroTt2.default.Component);

RecruitList.$$events = [];
RecruitList.$$componentPath = "pages/collection/recruitList/index";
exports.default = RecruitList;

Component(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(RecruitList));

/***/ })

},[["./src/pages/collection/recruitList/index.tsx","runtime","vendors"]]]);