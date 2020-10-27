(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/static/invite/index"],{

/***/ "./src/pages/static/invite/index.scss":
/*!********************************************!*\
  !*** ./src/pages/static/invite/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/static/invite/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/static/invite/index.tsx ***!
  \*******************************************/
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

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/static/invite/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvitePage = function (_Taro$Component) {
  _inherits(InvitePage, _Taro$Component);

  function InvitePage() {
    _classCallCheck(this, InvitePage);

    var _this = _possibleConstructorReturn(this, (InvitePage.__proto__ || Object.getPrototypeOf(InvitePage)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '鱼泡网-新闻资讯',
      enablePullDownRefresh: true,
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: 'dark'
    };

    _this.$usedState = ["tab", "loopArray54", "loopArray55", "$compid__53", "scrollLeft", "list", "pull"];
    _this.anonymousFunc1Map = {};
    _this.anonymousFunc2Map = {};
    _this.customComponents = ["Nodata"];
    return _this;
  }

  _createClass(InvitePage, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(InvitePage.prototype.__proto__ || Object.getPrototypeOf(InvitePage.prototype), '_constructor', this).call(this, props);
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

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__53"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__53 = _genCompid2[0],
          $compid__53 = _genCompid2[1];
      // 默认table


      var _useState = (0, _taroTt.useState)('-1'),
          _useState2 = _slicedToArray(_useState, 2),
          current = _useState2[0],
          setCurrent = _useState2[1];
      // 页数


      var _useState3 = (0, _taroTt.useState)({
        page: 1
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          initPage = _useState4[0],
          setInitPage = _useState4[1];
      //  没有数据显示内容


      var _useState5 = (0, _taroTt.useState)('暂无相关资讯'),
          _useState6 = _slicedToArray(_useState5, 2),
          noData = _useState6[0],
          setNodata = _useState6[1];
      // 数据


      var _useState7 = (0, _taroTt.useState)([]),
          _useState8 = _slicedToArray(_useState7, 2),
          list = _useState8[0],
          setList = _useState8[1];
      // 能否再上拉


      var _useState9 = (0, _taroTt.useState)(true),
          _useState10 = _slicedToArray(_useState9, 2),
          pull = _useState10[0],
          setPull = _useState10[1];
      // 设置滚动未知


      var _useState11 = (0, _taroTt.useState)(0),
          _useState12 = _slicedToArray(_useState11, 2),
          scrollLeft = _useState12[0],
          setScrollLeft = _useState12[1];

      var handleTable = function handleTable(id, name, index) {
        setScrollLeft(index * 80);
        setCurrent(id);
        setNodata(name);
        setInitPage({ page: 1 });
        setPull(true);
        _taroTt2.default.pageScrollTo({
          scrollTop: 0
        });
      };

      var _useState13 = (0, _taroTt.useState)({
        item: []
      }),
          _useState14 = _slicedToArray(_useState13, 2),
          tab = _useState14[0],
          setTab = _useState14[1];
      // 获取新闻类型


      (0, _taroTt.useEffect)(function () {
        (0, _index.newsTypesAction)().then(function (res) {
          setTab({ item: res.data });
        });
      }, []);
      // 获取新闻列表
      (0, _taroTt.useEffect)(function () {
        var params = {
          page: initPage.page,
          newsType: current
        };
        (0, _index.newListAction)(params).then(function (res) {
          _taroTt2.default.hideNavigationBarLoading();
          if (!res.data.length) {
            setPull(false);
          }
          if (params.page === 1) {
            setList([].concat(_toConsumableArray(res.data)));
          } else {
            setList([].concat(_toConsumableArray(list), _toConsumableArray(res.data)));
          }
        });
      }, [current, initPage]);
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      (0, _taroTt.useReachBottom)(function () {
        if (pull) {
          setInitPage({ page: initPage.page + 1 });
        }
      });
      this.anonymousFunc0 = function (e) {
        console.log(e);
      };
      var loopArray54 = tab.item ? tab.item.map(function (item, i) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey = "ggzzz" + i;
        _this2.anonymousFunc1Map[_$indexKey] = function () {
          handleTable(item.$original.index, item.$original.name, i);
        };
        var $loopState__temp2 = tab.item ? (0, _classnames2.default)({
          'invite-tab-active': item.$original.index === current
        }) : null;
        return {
          _$indexKey: _$indexKey,
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      }) : [];
      var loopArray55 = list ? list.map(function (v, __index2) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var _$indexKey2 = "ghzzz" + __index2;
        _this2.anonymousFunc2Map[_$indexKey2] = function () {
          return userRouteJump("/subpackage/pages/notice/index?id=" + v.$original.id);
        };
        return {
          _$indexKey2: _$indexKey2,
          $original: v.$original
        };
      }) : [];
      !list.length && _taroTt.propsManager.set({
        "text": noData
      }, $compid__53, $prevCompid__53);
      Object.assign(this.__state, {
        tab: tab,
        loopArray54: loopArray54,
        loopArray55: loopArray55,
        $compid__53: $compid__53,
        scrollLeft: scrollLeft,
        list: list,
        pull: pull
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
    value: function anonymousFunc2(_$indexKey2) {
      var _anonymousFunc2Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc2Map[_$indexKey2] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey2].apply(_anonymousFunc2Map, e);
    }
  }]);

  return InvitePage;
}(_taroTt2.default.Component);

InvitePage.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"];
InvitePage.$$componentPath = "pages/static/invite/index";
InvitePage.config = { navigationBarTitleText: '鱼泡网-新闻资讯', enablePullDownRefresh: true, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: 'dark' };
exports.default = InvitePage;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(InvitePage, true));

/***/ })

},[["./src/pages/static/invite/index.tsx","runtime","vendors"]]]);