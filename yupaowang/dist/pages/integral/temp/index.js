(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/integral/temp/index"],{

/***/ "./src/pages/integral/temp/index.scss":
/*!********************************************!*\
  !*** ./src/pages/integral/temp/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/integral/temp/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/integral/temp/index.tsx ***!
  \*******************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/integral/temp/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Temp = function (_Taro$Component) {
  _inherits(Temp, _Taro$Component);

  function Temp() {
    _classCallCheck(this, Temp);

    var _this = _possibleConstructorReturn(this, (Temp.__proto__ || Object.getPrototypeOf(Temp)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '临时积分记录'
    };

    _this.$usedState = ["lists"];
    _this.customComponents = [];
    return _this;
  }

  _createClass(Temp, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Temp.prototype.__proto__ || Object.getPrototypeOf(Temp.prototype), "_constructor", this).call(this, props);
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
      // 初始化页面信息-积分来源记录
      var initType = 'temp';
      // 定义请求参数

      var _useState = (0, _taroTt.useState)({
        type: initType,
        page: 1
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];
      // 定义列表接收容器


      var _useState3 = (0, _taroTt.useState)({
        lists: [],
        hasmore: true
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          lists = _useState4[0],
          setLists = _useState4[1];
      // 获取列表数据


      (0, _taroTt.useEffect)(function () {
        if (!lists.hasmore) {
          return;
        }
        (0, _index.getIntegralList)(data).then(function (res) {
          var len = res.list.length;
          if (len) {
            if (data.page === 1) {
              if (len < res.pageSize) {
                setLists({ hasmore: false, lists: res.list });
              } else setLists(_extends({}, lists, { lists: res.list }));
            } else {
              setLists(_extends({}, lists, { lists: [].concat(_toConsumableArray(lists.lists), _toConsumableArray(res.list)) }));
            }
          } else setLists(_extends({}, lists, { hasmore: false }));
        });
      }, [data]);
      // // 上拉加载下一页
      // useReachBottom(() => {
      //   setData({ ...data, page: data.page + 1 })
      // })
      // // 下拉刷新当前列表
      // usePullDownRefresh(() => {
      //   setData({ ...data, page: 1 })
      // })
      Object.assign(this.__state, {
        lists: lists
      });
      return this.__state;
    }
  }]);

  return Temp;
}(_taroTt2.default.Component);

Temp.$$events = [];
Temp.$$componentPath = "pages/integral/temp/index";
Temp.config = { navigationBarTitleText: '临时积分记录' };
exports.default = Temp;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Temp, true));

/***/ })

},[["./src/pages/integral/temp/index.tsx","runtime","vendors"]]]);