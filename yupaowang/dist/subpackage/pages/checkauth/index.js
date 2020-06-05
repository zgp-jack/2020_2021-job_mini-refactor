(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["subpackage/pages/checkauth/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/checkauth/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/subpackage/pages/checkauth/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

var _index3 = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/subpackage/pages/checkauth/index.scss");

var _index4 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckAuth = (_temp2 = _class = function (_Taro$Component) {
  _inherits(CheckAuth, _Taro$Component);

  function CheckAuth() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CheckAuth);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CheckAuth.__proto__ || Object.getPrototypeOf(CheckAuth)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["model", "tel", "show", "SERVERPHONE"], _this.customComponents = ["Auth"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CheckAuth, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(CheckAuth.prototype.__proto__ || Object.getPrototypeOf(CheckAuth.prototype), "_constructor", this).call(this, props);

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

      var _useState = (0, _taroWeapp.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          tel = _useState2[0],
          setTel = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)(),
          _useState4 = _slicedToArray(_useState3, 2),
          model = _useState4[0],
          setModel = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)(false),
          _useState6 = _slicedToArray(_useState5, 2),
          show = _useState6[0],
          setShow = _useState6[1];

      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // 用户拨打电话
      var userCallPhone = function userCallPhone() {
        _taroWeapp2.default.makePhoneCall({
          phoneNumber: _index.SERVERPHONE
        });
      };
      var InitUserAuthInfo = function InitUserAuthInfo() {
        if (!login) {
          return;
        }(0, _index3.checkMineAuthInfo)().then(function (data) {
          if (data.errcode == 'auth_pass') {
            return;
          } else if (data.errcode == 'auth_not_pass') {
            _taroWeapp2.default.showModal({
              title: '温馨提示',
              content: data.errmsg,
              success: function success(res) {
                if (res.confirm) {
                  // 跳转实名
                  _taroWeapp2.default.navigateTo({ url: '' });
                } else {
                  _taroWeapp2.default.reLaunch({ url: '/pages/index/index' });
                }
              }
            });
          } else {
            (0, _index4.ShowActionModal)({
              msg: data.errmsg,
              success: function success() {
                _taroWeapp2.default.reLaunch({ url: '/pages/index/index' });
              }
            });
          }
        });
      };
      (0, _taroWeapp.useDidShow)(function () {
        InitUserAuthInfo();
      });
      (0, _taroWeapp.useEffect)(function () {
        InitUserAuthInfo();
      }, [login]);
      // 用户输入电话号码
      var userEnterTel = function userEnterTel(e) {
        setTel(e.detail.value);
      };
      // 用户查询实名
      var userCheckAuth = function userCheckAuth() {
        if (!(0, _index2.isPhone)(tel)) {
          (0, _index5.default)('请先输入正确的手机号码');
          return;
        }
        (0, _index3.getUserIsAuth)(tel).then(function (data) {
          if (data.errcode == 'ok') {
            setModel(data.member);
            setShow(true);
          } else {
            (0, _index4.ShowActionModal)(data.errmsg);
            setShow(false);
          }
        }).catch(function () {
          (0, _index4.ShowActionModal)({
            msg: '网络错误，请求失败',
            success: function success() {
              _taroWeapp2.default.navigateBack();
            }
          });
        });
      };

      this.anonymousFunc0 = function (e) {
        return userEnterTel(e);
      };

      this.anonymousFunc1 = function () {
        return userCheckAuth();
      };

      this.anonymousFunc2 = function () {
        return userCallPhone();
      };

      Object.assign(this.__state, {
        model: model,
        tel: tel,
        show: show,
        SERVERPHONE: _index.SERVERPHONE
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

  return CheckAuth;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"], _class.$$componentPath = "subpackage/pages/checkauth/index", _temp2);
exports.default = CheckAuth;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(CheckAuth, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/checkauth/index.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/subpackage/pages/checkauth/index.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "subpackage/pages/checkauth/index.wxml";

/***/ }),

/***/ "./src/subpackage/pages/checkauth/index.scss":
/*!***************************************************!*\
  !*** ./src/subpackage/pages/checkauth/index.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/subpackage/pages/checkauth/index.tsx":
/*!**************************************************!*\
  !*** ./src/subpackage/pages/checkauth/index.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/subpackage/pages/checkauth/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/subpackage/pages/checkauth/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/subpackage/pages/checkauth/index.tsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************!*\
  !*** ./src/subpackage/pages/checkauth/index.tsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/checkauth/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/subpackage/pages/checkauth/index.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************************!*\
  !*** ./src/subpackage/pages/checkauth/index.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/checkauth/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/subpackage/pages/checkauth/index.tsx","runtime","taro","vendors","common"]]]);