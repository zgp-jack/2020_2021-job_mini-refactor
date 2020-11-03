(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/help/index"],{

/***/ "./src/pages/help/index.scss":
/*!***********************************!*\
  !*** ./src/pages/help/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/help/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/help/index.tsx ***!
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

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/help/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Help = function (_Taro$Component) {
  _inherits(Help, _Taro$Component);

  function Help() {
    _classCallCheck(this, Help);

    var _this = _possibleConstructorReturn(this, (Help.__proto__ || Object.getPrototypeOf(Help)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '帮助中心'
    };

    _this.$usedState = ["data", "loopArray61", "refresh", "isDown"];
    _this.anonymousFunc2Map = {};
    _this.customComponents = ["Nodata", "AtAccordion", "AtList"];
    return _this;
  }

  _createClass(Help, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Help.prototype.__proto__ || Object.getPrototypeOf(Help.prototype), "_constructor", this).call(this, props);
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
      // * 标记是否是在刷新状态

      var _useState = (0, _taroTt.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          refresh = _useState2[0],
          setRefresh = _useState2[1];
      // 设置默认页面


      var _useState3 = (0, _taroTt.useState)({
        page: 1
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          initPage = _useState4[0],
          setinitPage = _useState4[1];

      var _useState5 = (0, _taroTt.useState)({
        item: []
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          data = _useState6[0],
          setData = _useState6[1];
      // 用户数据


      var _useState7 = (0, _taroTt.useState)({
        phone: '',
        username: ''
      }),
          _useState8 = _slicedToArray(_useState7, 2),
          userData = _useState8[0],
          setUserData = _useState8[1];
      // 是否能下啦加载更多


      var _useState9 = (0, _taroTt.useState)(true),
          _useState10 = _slicedToArray(_useState9, 2),
          isDown = _useState10[0],
          setIsDown = _useState10[1];
      // 判断是否是ios


      var _useState11 = (0, _taroTt.useState)(false),
          _useState12 = _slicedToArray(_useState11, 2),
          ios = _useState12[0],
          setIos = _useState12[1];
      // 请求数据
      // 列表数据


      (0, _taroTt.useEffect)(function () {
        // 判断是安卓还是苹果
        setIos((0, _index2.isIos)());
        var terminal_type = ios ? 'ios' : 'android';
        (0, _index.helpAction)(initPage.page, terminal_type).then(function (res) {
          _taroTt2.default.hideNavigationBarLoading();
          for (var i = 0; i < res.lists.length; i++) {
            res.lists[i].isShow = false;
            res.lists[i].id = Math.random();
          }
          if (initPage.page === 1) {
            setData({ item: [].concat(_toConsumableArray(res.lists)) });
          } else {
            setData({ item: [].concat(_toConsumableArray(data.item), _toConsumableArray(res.lists)) });
          }
          if (refresh) {
            setRefresh(false);
          }
          if (res.lists.length === 0) {
            setIsDown(false);
          }
        });
      }, [initPage]);
      // 用户信息
      (0, _taroTt.useEffect)(function () {
        (0, _index.feedbackAction)(1).then(function (res) {
          setUserData(res.memberInfo);
        });
      }, []);
      // 开关
      var handleShow = function handleShow(id) {
        var newData = JSON.parse(JSON.stringify(data));
        newData.item.forEach(function (v) {
          var flag = v.id === id && !v.isShow;
          v.isShow = flag ? true : false;
        });
        setData(newData);
      };
      // * 触底加载下一页
      var getNextPageData = function getNextPageData() {
        if (!isDown) {
          return;
        }
        _taroTt2.default.showNavigationBarLoading();
        setinitPage(_extends({}, initPage, { page: initPage.page + 1 }));
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      // * 监听下拉刷新
      var pullDownAction = function pullDownAction() {
        setRefresh(true);
        setIsDown(true);
        setinitPage({ page: 1 });
      };
      this.anonymousFunc0 = function () {
        return pullDownAction();
      };
      this.anonymousFunc1 = function () {
        return getNextPageData();
      };
      this.anonymousFunc3 = function () {
        return userRouteJump("/pages/feedback/index?username=" + userData.username + "&phone=" + userData.phone);
      };
      var loopArray61 = data.item.map(function (item, __index2) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var $loopState__temp2 = { value: 'help', color: '#09f', size: '15' };
        var _$indexKey = "gjzzz" + __index2;
        _this2.anonymousFunc2Map[_$indexKey] = function () {
          handleShow(item.$original.id);
        };

        var _genCompid = (0, _taroTt.genCompid)(__prefix + "hazzzzzzzz" + __index2, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__53 = _genCompid2[0],
            $compid__53 = _genCompid2[1];

        _taroTt.propsManager.set({
          "icon": $loopState__temp2,
          "open": item.$original.isShow,
          "onClick": _this2.anonymousFunc2.bind(_this2, _$indexKey),
          "title": item.$original.question
        }, $compid__53, $prevCompid__53);

        var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "hbzzzzzzzz" + __index2, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__54 = _genCompid4[0],
            $compid__54 = _genCompid4[1];

        _taroTt.propsManager.set({
          "hasBorder": false
        }, $compid__54, $prevCompid__54);
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          $compid__53: $compid__53,
          $compid__54: $compid__54,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        data: data,
        loopArray61: loopArray61,
        refresh: refresh,
        isDown: isDown
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey) {
      var _anonymousFunc2Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc2Map[_$indexKey] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }]);

  return Help;
}(_taroTt2.default.Component);

Help.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc3"];
Help.$$componentPath = "pages/help/index";
Help.config = { navigationBarTitleText: '帮助中心' };
exports.default = Help;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Help, true));

/***/ })

},[["./src/pages/help/index.tsx","runtime","vendors"]]]);