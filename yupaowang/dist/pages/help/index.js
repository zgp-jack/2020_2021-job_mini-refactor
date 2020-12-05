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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/help/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    _this.$usedState = ["loopArray66", "loopArray67", "listData", "searchResult", "searchFocus"];
    _this.anonymousFunc3Map = {};
    _this.anonymousFunc4Map = {};
    _this.anonymousFunc5Map = {};
    _this.customComponents = ["Nodata", "AtAccordion", "AtList", "AtListItem"];
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
      //帮助列表

      var _useState = (0, _taroTt.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          listData = _useState2[0],
          setListData = _useState2[1];
      //所有问题列表（搜索功能使用）


      var _useState3 = (0, _taroTt.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          allQuestion = _useState4[0],
          setAllQuestion = _useState4[1];
      //搜索结果列表


      var _useState5 = (0, _taroTt.useState)([]),
          _useState6 = _slicedToArray(_useState5, 2),
          searchResult = _useState6[0],
          setSearchResult = _useState6[1];
      //搜索框获得焦点


      var _useState7 = (0, _taroTt.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          searchFocus = _useState8[0],
          setSearchFocus = _useState8[1];
      // 判断是否是ios


      var _useState9 = (0, _taroTt.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          device = _useState10[0],
          setDevice = _useState10[1];
      // 请求数据


      (0, _taroTt.useEffect)(function () {
        // 判断是安卓还是苹果
        var deviceName = (0, _index2.isIos)() ? 'ios' : 'android';
        setDevice(deviceName);
        (0, _index.helpAction)(deviceName).then(function (res) {
          _taroTt2.default.hideNavigationBarLoading();
          var newData = [];
          var allQuertion = [];
          res.data.forEach(function (item) {
            item.open = false;
            newData.push(item);
            item.questions.forEach(function (queItem) {
              allQuertion.push(queItem);
            });
          });
          setListData(newData);
          setAllQuestion(allQuertion);
        });
      }, []);
      //手风琴开关
      var handleAccordionClick = function handleAccordionClick(id, open) {
        var _listData = JSON.parse(JSON.stringify(listData));
        _listData.forEach(function (item) {
          if (item.id === id) {
            item.open = open;
          }
        });
        setListData(_listData);
      };
      //点击问题，去问题详情页面
      var handleQuestionsClick = function handleQuestionsClick(id) {
        _taroTt2.default.navigateTo({
          url: "/pages/help/question-details/index?id=" + id + "&system=" + device
        });
      };
      //输入框处理防抖
      var debounce = function debounce(fn) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;

        //期间间隔执行 节流
        return function () {
          for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
          }

          var args = rest;
          if (_this2.__state.timerId) {
            clearTimeout(_this2.__state.timerId);
          }
          _this2.__state.timerId = setTimeout(function () {
            fn.apply(_this2, args);
          }, delay);
        };
      };
      //根据输入内容获取问题列表
      var handleSearchResult = function handleSearchResult(searchVal) {
        if (!searchVal) {
          setSearchResult([]);
          return;
        }
        var _searchResult = [];
        allQuestion.forEach(function (item) {
          if (item.question.indexOf(searchVal) !== -1) {
            _searchResult.push(item);
          }
        });
        setSearchResult(_searchResult);
      };
      //输入框防抖函数
      var onDebounceInput = function onDebounceInput(e) {
        var handleDebounce = debounce(handleSearchResult, 1000);
        handleDebounce(e.target.value);
      };
      //去意见反馈页面
      var handleToFeedBank = function handleToFeedBank() {
        _taroTt2.default.navigateTo({ url: '/pages/feedback/index' });
      };
      //去我的反馈页面
      var handleToFeedBankList = function handleToFeedBankList() {
        _taroTt2.default.navigateTo({ url: '/pages/feedbacklist/index' });
      };
      if (!listData.length) {
        return null;
      }
      this.anonymousFunc0 = function () {
        return setSearchFocus(true);
      };
      this.anonymousFunc1 = function () {
        return setSearchFocus(false);
      };
      this.anonymousFunc2 = function (e) {
        return onDebounceInput(e);
      };
      this.anonymousFunc6 = handleToFeedBank;
      this.anonymousFunc7 = handleToFeedBankList;
      var loopArray66 = searchResult.length > 0 && searchFocus ? searchResult.map(function (item, __index3) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey = "hgzzz" + __index3;
        _this2.anonymousFunc3Map[_$indexKey] = function () {
          return handleQuestionsClick(item.$original.id);
        };
        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      var loopArray67 = listData.map(function (item, __index4) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey2 = "hhzzz" + __index4;
        _this2.anonymousFunc4Map[_$indexKey2] = function (open) {
          return handleAccordionClick(item.$original.id, open);
        };
        var $anonymousCallee__8 = item.$original.questions.map(function (queItem, __index5) {
          queItem = {
            $original: (0, _taroTt.internal_get_original)(queItem)
          };
          var _$indexKey3 = "hizzz" + __index4 + "-" + __index5;
          _this2.anonymousFunc5Map[_$indexKey3] = function () {
            return handleQuestionsClick(queItem.$original.id);
          };

          var _genCompid = (0, _taroTt.genCompid)(__prefix + "hjzzzzzzzz" + __index4 + "-" + __index5, true),
              _genCompid2 = _slicedToArray(_genCompid, 2),
              $prevCompid__57 = _genCompid2[0],
              $compid__57 = _genCompid2[1];

          _taroTt.propsManager.set({
            "hasBorder": false,
            "onClick": _this2.anonymousFunc5.bind(_this2, _$indexKey3),
            "title": queItem.$original.question
          }, $compid__57, $prevCompid__57);
          return {
            _$indexKey3: _$indexKey3,
            $compid__57: $compid__57,
            $original: queItem.$original
          };
        });

        var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "iazzzzzzzz" + __index4, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__58 = _genCompid4[0],
            $compid__58 = _genCompid4[1];

        _taroTt.propsManager.set({
          "hasBorder": false,
          "open": item.$original.open,
          "onClick": _this2.anonymousFunc4.bind(_this2, _$indexKey2),
          "title": item.$original.name
        }, $compid__58, $prevCompid__58);

        var _genCompid5 = (0, _taroTt.genCompid)(__prefix + "ibzzzzzzzz" + __index4, true),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__59 = _genCompid6[0],
            $compid__59 = _genCompid6[1];

        _taroTt.propsManager.set({
          "hasBorder": false
        }, $compid__59, $prevCompid__59);
        return {
          _$indexKey2: _$indexKey2,
          $anonymousCallee__8: $anonymousCallee__8,
          $compid__58: $compid__58,
          $compid__59: $compid__59,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray66: loopArray66,
        loopArray67: loopArray67,
        listData: listData,
        searchResult: searchResult,
        searchFocus: searchFocus
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
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(_$indexKey) {
      var _anonymousFunc3Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc3Map[_$indexKey] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey].apply(_anonymousFunc3Map, e);
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(_$indexKey2) {
      var _anonymousFunc4Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc4Map[_$indexKey2] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey2].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(_$indexKey3) {
      var _anonymousFunc5Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc5Map[_$indexKey3] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey3].apply(_anonymousFunc5Map, e);
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }]);

  return Help;
}(_taroTt2.default.Component);

Help.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc6", "anonymousFunc7"];
Help.$$componentPath = "pages/help/index";
Help.config = { navigationBarTitleText: '帮助中心' };
exports.default = Help;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Help, true));

/***/ })

},[["./src/pages/help/index.tsx","runtime","vendors"]]]);