(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["subpackage/pages/course/index"],{

/***/ "./src/subpackage/pages/course/index.scss":
/*!************************************************!*\
  !*** ./src/subpackage/pages/course/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/subpackage/pages/course/index.tsx":
/*!***********************************************!*\
  !*** ./src/subpackage/pages/course/index.tsx ***!
  \***********************************************/
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

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _index2 = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/subpackage/pages/course/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Course = function (_Taro$Component) {
  _inherits(Course, _Taro$Component);

  function Course() {
    _classCallCheck(this, Course);

    var _this = _possibleConstructorReturn(this, (Course.__proto__ || Object.getPrototypeOf(Course)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '鱼泡网-使用教程'
    };

    _this.$usedState = ["bossData", "workerMaster", "loopArray3", "loopArray4", "loopArray5", "tab", "highlight"];
    _this.anonymousFunc0Map = {};
    _this.anonymousFunc1Map = {};
    _this.anonymousFunc2Map = {};
    _this.customComponents = ["Nodata", "AtAccordion", "AtList"];
    return _this;
  }

  _createClass(Course, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Course.prototype.__proto__ || Object.getPrototypeOf(Course.prototype), "_constructor", this).call(this, props);
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
      // 设置高亮

      var _useState = (0, _taroTt.useState)(1),
          _useState2 = _slicedToArray(_useState, 2),
          highlight = _useState2[0],
          setHighlight = _useState2[1];
      // 设置默认tab


      var tab = [{
        id: 1, text: '招工老板', icon: _index.IMGCDNURL + "course-laoban.png", activeIcon: _index.IMGCDNURL + "course-laoban-active.png"
      }, {
        id: 2, text: '工人师傅', icon: _index.IMGCDNURL + "course-geren.png", activeIcon: _index.IMGCDNURL + "course-geren-active.png"
      }];
      var handleClick = function handleClick(id) {
        setHighlight(id);
      };
      // 招工老老板

      var _useState3 = (0, _taroTt.useState)({
        item: []
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          bossData = _useState4[0],
          setBossData = _useState4[1];
      // 工人师傅


      var _useState5 = (0, _taroTt.useState)({
        item: []
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          workerMaster = _useState6[0],
          setWorkerMaster = _useState6[1];
      // 请求数据


      (0, _taroTt.useEffect)(function () {
        (0, _index2.requestAction)().then(function (res) {
          _taroTt2.default.hideNavigationBarLoading();
          // 增加默认关闭字段
          for (var i = 0; i < res.masterList.length; i++) {
            res.masterList[i].isShow = false;
          }
          for (var _i = 0; _i < res.userList.length; _i++) {
            res.userList[_i].isShow = false;
          }
          setBossData({ item: [].concat(_toConsumableArray(res.masterList)) });
          setWorkerMaster({ item: [].concat(_toConsumableArray(res.userList)) });
        });
      }, []);
      var bossIsShow = function bossIsShow(id) {
        var mydata = JSON.parse(JSON.stringify(bossData));
        mydata.item.forEach(function (v) {
          var flag = v.id === id && !v.isShow;
          v.isShow = flag ? true : false;
        });
        setBossData(mydata);
      };
      var workerMasterIsShow = function workerMasterIsShow(id) {
        var workerMasterData = JSON.parse(JSON.stringify(workerMaster));
        workerMasterData.item.forEach(function (v) {
          var flag = v.id === id && !v.isShow;
          v.isShow = flag ? true : false;
        });
        setWorkerMaster(workerMasterData);
      };
      var loopArray3 = tab.map(function (item, __index0) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey = "czzzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          handleClick(item.$original.id);
        };
        var $loopState__temp2 = (0, _classnames2.default)({
          'course-tab-border': item.$original.id === highlight,
          'course-tab-content': true
        });
        var $loopState__temp4 = (0, _classnames2.default)({
          'course.active-text': item.$original.id === highlight
        });
        return {
          _$indexKey: _$indexKey,
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $original: item.$original
        };
      });
      var loopArray4 = highlight === 1 ? bossData.item.map(function (item, __index1) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey2 = "dzzzz" + __index1;
        _this2.anonymousFunc1Map[_$indexKey2] = function () {
          bossIsShow(item.$original.id);
        };

        var _genCompid = (0, _taroTt.genCompid)(__prefix + "fzzzzzzzzz" + __index1, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__0 = _genCompid2[0],
            $compid__0 = _genCompid2[1];

        highlight === 1 && _taroTt.propsManager.set({
          "open": item.$original.isShow,
          "onClick": _this2.anonymousFunc1.bind(_this2, _$indexKey2),
          "title": item.$original.title
        }, $compid__0, $prevCompid__0);

        var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "gzzzzzzzzz" + __index1, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__1 = _genCompid4[0],
            $compid__1 = _genCompid4[1];

        highlight === 1 && _taroTt.propsManager.set({
          "hasBorder": false
        }, $compid__1, $prevCompid__1);
        return {
          _$indexKey2: _$indexKey2,
          $compid__0: $compid__0,
          $compid__1: $compid__1,
          $original: item.$original
        };
      }) : [];
      var loopArray5 = highlight === 2 ? workerMaster.item.map(function (item, __index2) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey3 = "ezzzz" + __index2;
        _this2.anonymousFunc2Map[_$indexKey3] = function () {
          workerMasterIsShow(item.$original.id);
        };

        var _genCompid5 = (0, _taroTt.genCompid)(__prefix + "hzzzzzzzzz" + __index2, true),
            _genCompid6 = _slicedToArray(_genCompid5, 2),
            $prevCompid__2 = _genCompid6[0],
            $compid__2 = _genCompid6[1];

        highlight === 2 && _taroTt.propsManager.set({
          "open": item.$original.isShow,
          "onClick": _this2.anonymousFunc2.bind(_this2, _$indexKey3),
          "title": item.$original.title
        }, $compid__2, $prevCompid__2);

        var _genCompid7 = (0, _taroTt.genCompid)(__prefix + "izzzzzzzzz" + __index2, true),
            _genCompid8 = _slicedToArray(_genCompid7, 2),
            $prevCompid__3 = _genCompid8[0],
            $compid__3 = _genCompid8[1];

        highlight === 2 && _taroTt.propsManager.set({
          "hasBorder": false
        }, $compid__3, $prevCompid__3);
        return {
          _$indexKey3: _$indexKey3,
          $compid__2: $compid__2,
          $compid__3: $compid__3,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        bossData: bossData,
        workerMaster: workerMaster,
        loopArray3: loopArray3,
        loopArray4: loopArray4,
        loopArray5: loopArray5,
        tab: tab,
        highlight: highlight
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

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey3) {
      var _anonymousFunc2Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc2Map[_$indexKey3] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey3].apply(_anonymousFunc2Map, e);
    }
  }]);

  return Course;
}(_taroTt2.default.Component);

Course.$$events = ["anonymousFunc0"];
Course.$$componentPath = "subpackage/pages/course/index";
Course.config = { navigationBarTitleText: '鱼泡网-使用教程' };
exports.default = Course;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Course, true));

/***/ })

},[["./src/subpackage/pages/course/index.tsx","runtime","vendors"]]]);