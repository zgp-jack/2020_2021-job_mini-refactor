(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/recruit/lists/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/recruit/lists/index.tsx?taro&type=script&parse=COMPONENT&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/recruit/lists/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \**************************************************************************************************************************************************************/
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

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _index2 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/recruit/lists/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recruit = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Recruit, _Taro$Component);

  function Recruit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Recruit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Recruit.__proto__ || Object.getPrototypeOf(Recruit)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "$compid__75", "$compid__76", "$compid__77", "refresh"], _this.customComponents = ["Search", "Condition", "WechatNotice", "RecruitList"], _temp), _possibleConstructorReturn(_this, _ret);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__75"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__75 = _genCompid2[0],
          $compid__75 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__76"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__76 = _genCompid4[0],
          $compid__76 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__77"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__77 = _genCompid6[0],
          $compid__77 = _genCompid6[1];

      // * 获取选择城市缓存


      var userListChooseCity = _taroWeapp2.default.getStorageSync(_store.UserListChooseCity);
      // * 配置筛选条件

      var _useState = (0, _taroWeapp.useState)([{ id: 'area', text: userListChooseCity ? userListChooseCity.name : '全国' }, { id: 'work', text: '选择工种' }, { id: 'filter', text: '最新' }]),
          _useState2 = _slicedToArray(_useState, 2),
          condition = _useState2[0],
          setCondition = _useState2[1];
      // * 标记是否是在刷新状态


      var _useState3 = (0, _taroWeapp.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          refresh = _useState4[0],
          setRefresh = _useState4[1];
      // * 定义列表数组


      var _useState5 = (0, _taroWeapp.useState)([]),
          _useState6 = _slicedToArray(_useState5, 2),
          lists = _useState6[0],
          setLists = _useState6[1];
      // * 定义data


      var _useState7 = (0, _taroWeapp.useState)({
        page: 1,
        list_type: 'job',
        area_id: userListChooseCity ? userListChooseCity.id : '',
        classify_id: '',
        keywords: '',
        joblisttype: 'newest',
        token: ''
      }),
          _useState8 = _slicedToArray(_useState7, 2),
          searchData = _useState8[0],
          setSearchData = _useState8[1];
      // 更改某一项操作条件


      var editConditionAction = function editConditionAction(type, text) {
        var data = JSON.parse(JSON.stringify(condition));
        var i = data.findIndex(function (item) {
          return item.id === type;
        });
        var item = _extends({}, data[i], { text: text });
        data[i] = item;
        setCondition(data);
      };
      // 用户定位之后重新设置搜索条件
      var resetLocationSearch = function resetLocationSearch(data) {
        var city = (0, _area.getCityInfo)(data);
        _taroWeapp2.default.setStorageSync(_store.UserListChooseCity, city); //第一次默认选中
        setLists([]);
        editConditionAction('area', city.name);
        setSearchData(_extends({}, searchData, { page: 1, area_id: city.id }));
      };
      // 用户获取定位
      var getUserLocation = function getUserLocation() {
        // 使用用户选择的城市
        if (userListChooseCity) {
          setSearchData(_extends({}, searchData, { page: 1, area_id: userListChooseCity.id }));
        } else {
          var userLocationCity = _taroWeapp2.default.getStorageSync(_store.UserLocationCity);
          if (userLocationCity) {
            resetLocationSearch(userLocationCity);
            return;
          }
          (0, _index2.userAuthLoction)().then(function (gpsLocation) {
            resetLocationSearch(gpsLocation);
          }).catch(function () {
            // 拒绝授权默认全国
            _taroWeapp2.default.setStorageSync(_store.UserListChooseCity, _area.AREACHINA);
            setLists([]);
            setSearchData(_extends({}, searchData, { page: 1, area_id: _area.AREACHINA.id }));
          });
        }
      };
      // 请求列表方法
      var getRecruitListAction = function getRecruitListAction() {
        (0, _index.getRecruitList)(searchData).then(function (res) {
          _taroWeapp2.default.hideNavigationBarLoading();
          if (searchData.page === 1) {
            setLists([[].concat(_toConsumableArray(res))]);
          } else setLists([].concat(_toConsumableArray(lists), [[].concat(_toConsumableArray(res))]));
          if (refresh) {
            setRefresh(false);
          }
        });
      };
      // * 请求列表数据
      (0, _taroWeapp.useEffect)(function () {
        getRecruitListAction();
        if (!searchData.area_id) {
          getUserLocation();
        }
      }, [searchData]);
      // * 触底加载下一页
      var getNextPageData = function getNextPageData() {
        _taroWeapp2.default.showNavigationBarLoading();
        setSearchData(_extends({}, searchData, { page: searchData.page + 1 }));
      };
      // * 监听下拉刷新
      var pullDownAction = function pullDownAction() {
        setRefresh(true);
        setSearchData(_extends({}, searchData, { page: 1 }));
      };
      // * 发布招工
      var userPublishRecruit = function userPublishRecruit() {
        _taroWeapp2.default.navigateTo({ url: '/pages/recruit/publish/index' });
      };

      this.anonymousFunc0 = function () {
        return pullDownAction();
      };

      this.anonymousFunc1 = function () {
        return getNextPageData();
      };

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ height: '8px' });

      this.anonymousFunc2 = function () {
        return userPublishRecruit();
      };

      _taroWeapp.propsManager.set({
        "placeholder": "\u627E\u6D3B\u3001\u627E\u5DE5\u4F5C",
        "value": ""
      }, $compid__75, $prevCompid__75);
      _taroWeapp.propsManager.set({
        "data": condition
      }, $compid__76, $prevCompid__76);
      _taroWeapp.propsManager.set({
        "data": lists
      }, $compid__77, $prevCompid__77);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__75: $compid__75,
        $compid__76: $compid__76,
        $compid__77: $compid__77,
        refresh: refresh
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
  }]);

  return Recruit;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"], _class.$$componentPath = "pages/recruit/lists/index", _temp2);
exports.default = Recruit;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Recruit));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/recruit/lists/index.tsx?taro&type=template&parse=COMPONENT&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/recruit/lists/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/recruit/lists/index.wxml";

/***/ }),

/***/ "./src/pages/recruit/lists/index.scss":
/*!********************************************!*\
  !*** ./src/pages/recruit/lists/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/recruit/lists/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/recruit/lists/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./src/pages/recruit/lists/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./src/pages/recruit/lists/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/recruit/lists/index.tsx?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************!*\
  !*** ./src/pages/recruit/lists/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/recruit/lists/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/recruit/lists/index.tsx?taro&type=template&parse=COMPONENT&":
/*!*******************************************************************************!*\
  !*** ./src/pages/recruit/lists/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/recruit/lists/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/recruit/lists/index.tsx","runtime","taro","vendors","common"]]]);