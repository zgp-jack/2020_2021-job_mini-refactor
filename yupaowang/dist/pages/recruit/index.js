(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/recruit/index"],{

/***/ "./src/pages/recruit/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/recruit/index.tsx ***!
  \*************************************/
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

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/recruit/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recruit = function (_Taro$Component) {
  _inherits(Recruit, _Taro$Component);

  function Recruit() {
    _classCallCheck(this, Recruit);

    var _this = _possibleConstructorReturn(this, (Recruit.__proto__ || Object.getPrototypeOf(Recruit)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "$compid__20", "$compid__21", "$compid__22", "pulldown"];
    _this.customComponents = ["Search", "Condition", "WechatNotice", "RecruitList"];
    return _this;
  }

  _createClass(Recruit, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Recruit.prototype.__proto__ || Object.getPrototypeOf(Recruit.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__20"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__20 = _genCompid2[0],
          $compid__20 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__21"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__21 = _genCompid4[0],
          $compid__21 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__22"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__22 = _genCompid6[0],
          $compid__22 = _genCompid6[1];

      var pulldown = this.__props.pulldown;
      // * 配置筛选条件

      var DEFAULT_CONDITION = [{ id: 'area', text: '全国' }, { id: 'work', text: '选择工种' }, { id: 'filter', text: '最新' }];
      // * 标记是否是在刷新状态

      var _useState = (0, _taroWeapp.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          refresh = _useState2[0],
          setRefresh = _useState2[1];
      // * 定义列表数组


      var _useState3 = (0, _taroWeapp.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          lists = _useState4[0],
          setLists = _useState4[1];
      // * 定义data


      var _useState5 = (0, _taroWeapp.useState)({
        page: 1,
        list_type: 'job',
        area_id: '',
        classify_id: '',
        keywords: '',
        joblisttype: 'newest',
        token: ''
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          searchData = _useState6[0],
          setSearchData = _useState6[1];
      // * 请求列表数据


      (0, _taroWeapp.useEffect)(function () {
        (0, _index.getRecruitList)(searchData).then(function (res) {
          setLists([].concat(_toConsumableArray(lists), [[].concat(_toConsumableArray(res))]));
          if (refresh) {
            _taroWeapp2.default.hideNavigationBarLoading();
            _taroWeapp2.default.stopPullDownRefresh();
            setRefresh(false);
          }
        });
      }, [searchData]);
      // * 监听下拉刷新
      (0, _taroWeapp.useEffect)(function () {
        if (!pulldown) {
          return;
        }
        setSearchData(_extends({}, searchData, { page: 1 }));
        setRefresh(true);
        _taroWeapp2.default.showNavigationBarLoading();
      }, [pulldown]);
      // * 触底加载下一页
      var getNextPageData = function getNextPageData() {
        setSearchData(_extends({}, searchData, { page: searchData.page + 1 }));
      };
      this.anonymousFunc0 = function () {
        return getNextPageData();
      };
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ height: '8px' });
      _taroWeapp.propsManager.set({
        "placeholder": "\u627E\u6D3B\u3001\u627E\u5DE5\u4F5C",
        "value": ""
      }, $compid__20, $prevCompid__20);
      _taroWeapp.propsManager.set({
        "data": DEFAULT_CONDITION
      }, $compid__21, $prevCompid__21);
      _taroWeapp.propsManager.set({
        "data": lists
      }, $compid__22, $prevCompid__22);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__20: $compid__20,
        $compid__21: $compid__21,
        $compid__22: $compid__22
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return Recruit;
}(_taroWeapp2.default.Component);

Recruit.$$events = ["anonymousFunc0"];
Recruit.$$componentPath = "pages/recruit/index";
exports.default = Recruit;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Recruit));

/***/ }),

/***/ "./src/utils/api/index.ts":
/*!********************************!*\
  !*** ./src/utils/api/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetRecruitlist = undefined;

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

// 获取招工列表
var GetRecruitlist = exports.GetRecruitlist = _index.REQUESTURL + 'job/list-new/';

/***/ }),

/***/ "./src/utils/msg/index.ts":
/*!********************************!*\
  !*** ./src/utils/msg/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Msg;
function Msg(msg) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;

  Taro.showToast({
    title: msg,
    icon: 'none',
    duration: duration
  });
}

/***/ }),

/***/ "./src/utils/request/index.ts":
/*!************************************!*\
  !*** ./src/utils/request/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.doRequestAction = doRequestAction;
exports.getRecruitList = getRecruitList;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../api/index */ "./src/utils/api/index.ts");

var api = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index3 = __webpack_require__(/*! ../msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestShowToast(show) {
  if (show) {
    setTimeout(function () {
      (0, _index4.default)('网络错误，请求失败');
    }, 200);
  }
}
var defaultRequestData = {
  url: '',
  method: 'GET',
  header: { 'content-type': 'application/json' },
  data: {},
  loading: true,
  title: '数据加载中...',
  failToast: true
};
function doRequestAction(reqData) {
  var req = _extends({}, defaultRequestData, reqData);
  if (req.loading) {
    _taroWeapp2.default.showLoading({
      title: req.title
    });
  }
  return new Promise(function (resolve, reject) {
    _taroWeapp2.default.request({
      url: /^http(s?):\/\//.test(req.url) ? req.url : req.url,
      method: req.method,
      header: req.header,
      data: _extends({}, req.data, { wechat_token: _index2.TOKEN }),
      success: function success(res) {
        //console.log(res)
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          requestShowToast(req.failToast);
          reject(res);
        }
      },
      fail: function fail(e) {
        // todo requestShowToast(req.failToast)
        reject(e);
      },
      complete: function complete() {
        if (req.loading) {
          _taroWeapp2.default.hideLoading();
        }
      }
    });
  });
}
// 获取招工列表
function getRecruitList(data) {
  return doRequestAction({
    url: api.GetRecruitlist,
    data: data
  });
}

/***/ })

},[["./src/pages/recruit/index.tsx","runtime","taro","vendors","common"]]]);