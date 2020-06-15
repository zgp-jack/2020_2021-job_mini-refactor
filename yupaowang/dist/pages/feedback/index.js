(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/feedback/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/feedback/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/feedback/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************/
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

var _index = __webpack_require__(/*! ../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../hooks/code/index */ "./src/hooks/code/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index6 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index7 = _interopRequireDefault(_index6);

var _index8 = __webpack_require__(/*! ../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

var _index9 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/feedback/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Feedback = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Feedback, _Taro$Component);

  function Feedback() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Feedback);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Feedback.__proto__ || Object.getPrototypeOf(Feedback)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '鱼泡网-意见反馈'
    }, _this.$usedState = ["$compid__73", "$compid__74", "$compid__75", "$compid__76", "$compid__77", "textarea", "image", "isShow", "disabled", "text"], _this.customComponents = ["WechatNotice", "WordsTotal", "ImageView", "AtInput"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Feedback, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Feedback.prototype.__proto__ || Object.getPrototypeOf(Feedback.prototype), "_constructor", this).call(this, props);

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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__73"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__73 = _genCompid2[0],
          $compid__73 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__74"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__74 = _genCompid4[0],
          $compid__74 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__75"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__75 = _genCompid6[0],
          $compid__75 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__76"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__76 = _genCompid8[0],
          $compid__76 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__77"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__77 = _genCompid10[0],
          $compid__77 = _genCompid10[1];

      var router = (0, _taroWeapp.useRouter)();
      var _router$params = router.params,
          _router$params$userna = _router$params.username,
          username = _router$params$userna === undefined ? '' : _router$params$userna,
          _router$params$phone = _router$params.phone,
          phone = _router$params$phone === undefined ? '' : _router$params$phone;
      // 用户名字

      var _useState = (0, _taroWeapp.useState)(username),
          _useState2 = _slicedToArray(_useState, 2),
          name = _useState2[0],
          setName = _useState2[1];
      // 用户电话号码


      var _useState3 = (0, _taroWeapp.useState)(phone),
          _useState4 = _slicedToArray(_useState3, 2),
          uphone = _useState4[0],
          setUPhone = _useState4[1];
      // 意见


      var _useState5 = (0, _taroWeapp.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          textarea = _useState6[0],
          setTextarea = _useState6[1];
      // 是否显示获取验证码


      var _useState7 = (0, _taroWeapp.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          isShow = _useState8[0],
          setIsShow = _useState8[1];
      // 验证码


      var _useState9 = (0, _taroWeapp.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          code = _useState10[0],
          setCode = _useState10[1];

      var _useState11 = (0, _taroWeapp.useState)({
        item: []
      }),
          _useState12 = _slicedToArray(_useState11, 2),
          image = _useState12[0],
          setImage = _useState12[1];
      // 默认字数


      var _useState13 = (0, _taroWeapp.useState)(0),
          _useState14 = _slicedToArray(_useState13, 2),
          num = _useState14[0],
          setNum = _useState14[1];
      // 使用自定义验证码hook


      var _userCode = (0, _index4.default)(),
          text = _userCode.text,
          userGetCode = _userCode.userGetCode,
          disabled = _userCode.disabled;
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
      var handlePhone = function handlePhone(e) {
        if (e !== phone || !phone) {
          setIsShow(true);
        } else {
          setIsShow(false);
        }
        setUPhone(e);
      };
      // 提交
      var handleSubmission = function handleSubmission() {
        var images = image.item.map(function (item) {
          return item.url;
        });
        if (!(0, _index9.isVaildVal)(textarea, 15, 500)) {
          (0, _index7.default)('输入内容不少于15个字且必须包含文字');
          return false;
        }
        if (!name) {
          (0, _index7.default)('请输入联系人姓名');
          return false;
        }
        if (!(0, _index9.isPhone)(uphone)) {
          (0, _index7.default)('请输入正确手机号');
          return false;
        }
        if (uphone !== phone && !code) {
          (0, _index7.default)('请输入验证码');
          return false;
        }
        var params = {
          images: images,
          content: textarea,
          username: name,
          tel: uphone,
          code: code
        };
        (0, _index5.feedbackSubmissionAction)(params).then(function (res) {
          if (res.errcode == 'ok') {
            (0, _index8.SubscribeToNews)('msg', function () {
              (0, _index6.ShowActionModal)({
                msg: res.errmsg,
                success: function success() {
                  _taroWeapp2.default.navigateBack({
                    delta: 1
                  });
                }
              });
            });
          } else {
            (0, _index7.default)(res.errmsg);
          }
        });
      };
      var handleTextarea = function handleTextarea(e) {
        var val = e.detail.value;
        setTextarea(val);
        setNum(val.length);
      };

      this.anonymousFunc0 = function (e) {
        return handleTextarea(e);
      };

      this.anonymousFunc1 = function (e) {
        return setName(e);
      };

      this.anonymousFunc2 = function (e) {
        return handlePhone(e);
      };

      this.anonymousFunc3 = function (e) {
        return setCode(e);
      };

      this.anonymousFunc4 = function () {
        return userGetCode(uphone);
      };

      this.anonymousFunc5 = handleSubmission;
      _taroWeapp.propsManager.set({
        "num": num
      }, $compid__73, $prevCompid__73);
      image.item && _taroWeapp.propsManager.set({
        "images": image.item,
        "max": 9,
        "userUploadImg": userUploadImg
      }, $compid__74, $prevCompid__74);
      _taroWeapp.propsManager.set({
        "name": "name",
        "title": "\u8054\u7CFB\u4EBA",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u4F60\u7684\u540D\u5B57",
        "value": name,
        "onChange": this.anonymousFunc1
      }, $compid__75, $prevCompid__75);
      _taroWeapp.propsManager.set({
        "name": "phone",
        "title": "\u8054\u7CFB\u7535\u8BDD",
        "type": "text",
        "placeholder": "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u65B9\u4FBF\u5BA2\u670D\u8054\u7CFB\u4F60",
        "maxLength": 11,
        "value": uphone,
        "onChange": this.anonymousFunc2
      }, $compid__76, $prevCompid__76);
      isShow && _taroWeapp.propsManager.set({
        "clear": true,
        "title": "\u9A8C\u8BC1\u7801",
        "type": "text",
        "maxLength": 4,
        "placeholder": "\u8BF7\u8F93\u5165\u4F60\u7684\u9A8C\u8BC1\u7801",
        "name": "code",
        "value": code,
        "onChange": this.anonymousFunc3
      }, $compid__77, $prevCompid__77);
      Object.assign(this.__state, {
        $compid__73: $compid__73,
        $compid__74: $compid__74,
        $compid__75: $compid__75,
        $compid__76: $compid__76,
        $compid__77: $compid__77,
        textarea: textarea,
        image: image,
        isShow: isShow,
        disabled: disabled,
        text: text
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
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }]);

  return Feedback;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc4", "anonymousFunc5"], _class.$$componentPath = "pages/feedback/index", _temp2);


Feedback.config = { navigationBarTitleText: '鱼泡网-意见反馈' };
exports.default = Feedback;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Feedback, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/feedback/index.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/feedback/index.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/feedback/index.wxml";

/***/ }),

/***/ "./src/pages/feedback/index.scss":
/*!***************************************!*\
  !*** ./src/pages/feedback/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/feedback/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/feedback/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/feedback/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/feedback/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/feedback/index.tsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************!*\
  !*** ./src/pages/feedback/index.tsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/feedback/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/feedback/index.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************!*\
  !*** ./src/pages/feedback/index.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/feedback/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/feedback/index.tsx","runtime","taro","vendors","common"]]]);