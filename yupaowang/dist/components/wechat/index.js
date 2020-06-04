(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/wechat/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/wechat/index.tsx?taro&type=script&parse=COMPONENT&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/wechat/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \************************************************************************************************************************************************************/
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

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _wechat_notice = __webpack_require__(/*! ../../actions/wechat_notice */ "./src/actions/wechat_notice.ts");

var _wechat_notice2 = _interopRequireDefault(_wechat_notice);

var _wechat_notice3 = __webpack_require__(/*! ../../constants/wechat_notice */ "./src/constants/wechat_notice.ts");

var _wechat_notice4 = _interopRequireDefault(_wechat_notice3);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/wechat/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WechatNotice = (_temp2 = _class = function (_Taro$Component) {
  _inherits(WechatNotice, _Taro$Component);

  function WechatNotice() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WechatNotice);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WechatNotice.__proto__ || Object.getPrototypeOf(WechatNotice)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__93", "wechatNoticeData"], _this.customComponents = ["SwiperNews"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WechatNotice, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(WechatNotice.prototype.__proto__ || Object.getPrototypeOf(WechatNotice.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__93"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__93 = _genCompid2[0],
          $compid__93 = _genCompid2[1];

      var _useState = (0, _taroWeapp.useState)({
        vertical: true,
        lists: []
      }),
          _useState2 = _slicedToArray(_useState, 2),
          swiperNews = _useState2[0],
          setSwiperNews = _useState2[1];

      var dispatch = (0, _redux.useDispatch)();
      var wechatNoticeData = (0, _redux.useSelector)(function (state) {
        return state.WechatNotice;
      });
      // 获取微信号与公告列表
      (0, _taroWeapp.useEffect)(function () {
        if (wechatNoticeData.success) {
          setSwiperNews(_extends({}, swiperNews, { lists: wechatNoticeData.notice }));
          return;
        }
        (0, _index.getWechatNotice)().then(function (res) {
          res[_wechat_notice4.default] = _wechat_notice4.default;
          var action = {
            type: _wechat_notice4.default,
            data: res
          };
          setSwiperNews(_extends({}, swiperNews, { lists: res.notice }));
          dispatch((0, _wechat_notice2.default)(action));
        });
      }, []);
      _taroWeapp.propsManager.set({
        "data": swiperNews
      }, $compid__93, $prevCompid__93);
      Object.assign(this.__state, {
        $compid__93: $compid__93,
        wechatNoticeData: wechatNoticeData
      });
      return this.__state;
    }
  }]);

  return WechatNotice;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "components/wechat/index", _temp2);
exports.default = WechatNotice;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(WechatNotice));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/wechat/index.tsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/wechat/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/wechat/index.wxml";

/***/ }),

/***/ "./src/actions/wechat_notice.ts":
/*!**************************************!*\
  !*** ./src/actions/wechat_notice.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changeWechatNotice;
function changeWechatNotice(action) {
  return {
    type: action.type,
    data: action.data
  };
}

/***/ }),

/***/ "./src/components/wechat/index.scss":
/*!******************************************!*\
  !*** ./src/components/wechat/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/wechat/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/wechat/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./src/components/wechat/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./src/components/wechat/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/wechat/index.tsx?taro&type=script&parse=COMPONENT&":
/*!***************************************************************************!*\
  !*** ./src/components/wechat/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/wechat/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/wechat/index.tsx?taro&type=template&parse=COMPONENT&":
/*!*****************************************************************************!*\
  !*** ./src/components/wechat/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/wechat/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/components/wechat/index.tsx","runtime","taro","vendors","common"]]]);