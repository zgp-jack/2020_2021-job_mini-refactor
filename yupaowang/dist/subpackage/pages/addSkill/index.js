(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["subpackage/pages/addSkill/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/addSkill/index.tsx?taro&type=script&parse=PAGE&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/subpackage/pages/addSkill/index.tsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************************************************************************************************************/
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

var _index = __webpack_require__(/*! ../../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/subpackage/pages/addSkill/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddSkillPage = (_temp2 = _class = function (_Taro$Component) {
  _inherits(AddSkillPage, _Taro$Component);

  function AddSkillPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddSkillPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddSkillPage.__proto__ || Object.getPrototypeOf(AddSkillPage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '新增技能证书'
    }, _this.$usedState = ["$compid__98", "$compid__99", "$compid__100", "extraText", "image"], _this.customComponents = ["AtInput", "AtList", "AtListItem", "ImageView"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddSkillPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(AddSkillPage.prototype.__proto__ || Object.getPrototypeOf(AddSkillPage.prototype), "_constructor", this).call(this, props);

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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__98"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__98 = _genCompid2[0],
          $compid__98 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__99"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__99 = _genCompid4[0],
          $compid__99 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__100"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__100 = _genCompid6[0],
          $compid__100 = _genCompid6[1];

      var _useState = (0, _taroWeapp.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          val = _useState2[0],
          setVal = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)('请选择您领取证书时间'),
          _useState4 = _slicedToArray(_useState3, 2),
          extraText = _useState4[0],
          setExtraText = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)({
        item: []
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          image = _useState6[0],
          setImage = _useState6[1];
      // 用户上传图片


      var userUploadImg = function userUploadImg() {
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

        (0, _index2.default)().then(function (res) {
          var imageItem = {
            url: res.url,
            httpurl: res.httpurl
          };
          if (i === -1) {
            setImage(_extends({}, image, { item: [].concat(_toConsumableArray(image.item), [imageItem]) }));
          } else {
            image.item[i] = imageItem;
            setImage(_extends({}, image));
          }
        });
      };
      // 取消
      var handleCanle = function handleCanle() {
        _taroWeapp2.default.navigateBack({
          delta: 1
        });
      };
      // 确定保存
      var handelSubmit = function handelSubmit() {
        if (!val) {
          _taroWeapp2.default.showModal({
            title: '温馨提示',
            content: '请填写真实证书名称，3-12字，必须含有汉字',
            showCancel: false
          });
          return;
        }
        if (extraText == '请选择您领取证书时间') {
          _taroWeapp2.default.showModal({
            title: '温馨提示',
            content: '请选择您的领证时间',
            showCancel: false
          });
          return;
        }
        if (!image.item.length) {
          _taroWeapp2.default.showModal({
            title: '温馨提示',
            content: '您添加的图片为空请重新添加',
            showCancel: false
          });
          return;
        }
        var params = {
          image: image.item,
          name: val,
          certificate_time: extraText
        };
        (0, _index5.resumesCertificateAction)(params).then(function (res) {
          if (res.errcode === 'ok') {
            _taroWeapp2.default.navigateBack({
              delta: 1
            });
          } else {
            (0, _index4.default)(res.errmsg);
          }
        });
      };

      this.anonymousFunc0 = function (e) {
        setVal(e.toString());
      };

      this.anonymousFunc1 = function (e) {
        setExtraText(e.detail.value);
      };

      this.anonymousFunc2 = handleCanle;
      this.anonymousFunc3 = handelSubmit;
      _taroWeapp.propsManager.set({
        "name": "value",
        "title": "\u804C\u4E1A\u6280\u80FD:",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u60A8\u7684\u804C\u4E1A\u6280\u80FD\u540D\u79F0",
        "maxLength": 12,
        "value": val,
        "onChange": this.anonymousFunc0
      }, $compid__98, $prevCompid__98);
      _taroWeapp.propsManager.set({
        "title": "\u9886\u53D6\u8BC1\u4E66\u65F6\u95F4:",
        "extraText": extraText
      }, $compid__99, $prevCompid__99);
      image.item && _taroWeapp.propsManager.set({
        "images": image.item,
        "max": 3,
        "userUploadImg": userUploadImg
      }, $compid__100, $prevCompid__100);
      Object.assign(this.__state, {
        $compid__98: $compid__98,
        $compid__99: $compid__99,
        $compid__100: $compid__100,
        extraText: extraText,
        image: image
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
    value: function anonymousFunc3(e) {
      ;
    }
  }]);

  return AddSkillPage;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc1", "anonymousFunc2", "anonymousFunc3"], _class.$$componentPath = "subpackage/pages/addSkill/index", _temp2);


AddSkillPage.config = { navigationBarTitleText: '新增技能证书' };
exports.default = AddSkillPage;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AddSkillPage, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/addSkill/index.tsx?taro&type=template&parse=PAGE&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/subpackage/pages/addSkill/index.tsx?taro&type=template&parse=PAGE& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "subpackage/pages/addSkill/index.wxml";

/***/ }),

/***/ "./src/subpackage/pages/addSkill/index.scss":
/*!**************************************************!*\
  !*** ./src/subpackage/pages/addSkill/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/subpackage/pages/addSkill/index.tsx":
/*!*************************************************!*\
  !*** ./src/subpackage/pages/addSkill/index.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/subpackage/pages/addSkill/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/subpackage/pages/addSkill/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/subpackage/pages/addSkill/index.tsx?taro&type=script&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/subpackage/pages/addSkill/index.tsx?taro&type=script&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/addSkill/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/subpackage/pages/addSkill/index.tsx?taro&type=template&parse=PAGE&":
/*!********************************************************************************!*\
  !*** ./src/subpackage/pages/addSkill/index.tsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/addSkill/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/subpackage/pages/addSkill/index.tsx","runtime","taro","vendors","common"]]]);