(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/resume/detail/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/resume/detail/index.tsx?taro&type=script&parse=PAGE&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/resume/detail/index.tsx?taro&type=script&parse=PAGE& ***!
  \*********************************************************************************************************************************************************/
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

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _index3 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/detail/index.scss");

var _index5 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResumeDetail = (_temp2 = _class = function (_Taro$Component) {
  _inherits(ResumeDetail, _Taro$Component);

  function ResumeDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResumeDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResumeDetail.__proto__ || Object.getPrototypeOf(ResumeDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '找活名片'
    }, _this.$usedState = ["data", "list", "loopArray131", "loopArray133", "loopArray134", "loopArray135", "IMGCDNURL", "examine", "onoff", "praise", "collect", "shownewtips", "complaintModal", "textarea", "phone"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResumeDetail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ResumeDetail.prototype.__proto__ || Object.getPrototypeOf(ResumeDetail.prototype), "_constructor", this).call(this, props);

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

      var _useState = (0, _taroWeapp.useState)({
        certificates: [],
        info: {
          introduce: '',
          headerimg: '',
          nation: '',
          username: '',
          tel: '',
          hometown: '',
          occupations: [],
          experience: '',
          prof_degree_str: '',
          type_str: '',
          number_people: '',
          address: '',
          authentication: '',
          is_read: 0,
          is_end: '',
          certificate_show: 0,
          tags: []
        },
        operation: {
          is_collect: 0,
          is_zan: 0,
          status: 0
        },
        project: []
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setDate = _useState2[1];
      // 相关推荐


      var _useState3 = (0, _taroWeapp.useState)({
        item: []
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          list = _useState4[0],
          setList = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)(true),
          _useState6 = _slicedToArray(_useState5, 2),
          examine = _useState6[0],
          setExamine = _useState6[1];
      // 查看电话


      var _useState7 = (0, _taroWeapp.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          onoff = _useState8[0],
          seOnoff = _useState8[1];
      // 手机号码


      var _useState9 = (0, _taroWeapp.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          phone = _useState10[0],
          setPhone = _useState10[1];
      // 弹框


      var _useState11 = (0, _taroWeapp.useState)(false),
          _useState12 = _slicedToArray(_useState11, 2),
          shownewtips = _useState12[0],
          setShownewtips = _useState12[1];

      var _useState13 = (0, _taroWeapp.useState)(0),
          _useState14 = _slicedToArray(_useState13, 2),
          collect = _useState14[0],
          setCollect = _useState14[1];

      var _useState15 = (0, _taroWeapp.useState)(0),
          _useState16 = _slicedToArray(_useState15, 2),
          praise = _useState16[0],
          setPraise = _useState16[1];
      // 投诉


      var _useState17 = (0, _taroWeapp.useState)(false),
          _useState18 = _slicedToArray(_useState17, 2),
          complaintModal = _useState18[0],
          setComplaintModal = _useState18[1];

      var _useState19 = (0, _taroWeapp.useState)(''),
          _useState20 = _slicedToArray(_useState19, 2),
          textarea = _useState20[0],
          setTextarea = _useState20[1];

      (0, _taroWeapp.useEffect)(function () {
        var params = {
          location: '',
          // 先写死
          resume_uuid: 1590498258556959
        };
        (0, _index.resumeDetailAction)(params).then(function (res) {
          console.log(res);
          if (res.errcode === 'ok') {
            setDate({ certificates: res.certificates, info: res.info, operation: res.operation, project: res.project });
            setPhone(res.info.tel);
            setExamine(false);
            setPraise(res.operation.is_zan);
            setCollect(res.operation.is_collect);
          }
        });
        var listParams = {
          page: 1,
          type: 1,
          // 写死
          area_id: 322,
          // 写死
          occupations: '2, 17, 25'
        };
        (0, _index.recommendListAction)(listParams).then(function (res) {
          console.log(res);
          setList({ item: res.data.list });
        });
      }, []);
      // 查看电话
      var handlePhone = function handlePhone() {
        var params = {
          // 写死
          resume_uuid: 1590498258556959
        };
        (0, _index.resumesGetTelAcrion)(params).then(function (res) {
          console.log(res);
          if (res.errcode === 'ok') {
            seOnoff(true);
            setPhone(res.tel);
            setShownewtips(false);
          } else if (res.errcode == "7405") {
            _taroWeapp2.default.showModal({
              title: '温馨提示',
              content: res.errmsg,
              success: function success(res) {
                if (res.confirm) {
                  _taroWeapp2.default.navigateTo({
                    url: '/pages/getintegral/index'
                  });
                } else if (res.cancel) {
                  _taroWeapp2.default.navigateBack();
                }
              }
            });
          } else {
            (0, _index4.default)(res.errmsg);
          }
        });
      };
      // 拨打电话
      var handleTellPhone = function handleTellPhone() {
        console.log(321321);
        _taroWeapp2.default.makePhoneCall({
          phoneNumber: phone
        });
      };
      // 赞
      var resumeSupport = function resumeSupport() {
        var params = {
          resume_uuid: 1590498258556959
        };
        (0, _index.resumeSupportAction)(params).then(function (res) {
          console.log(res);
          if (res.errcode === 'ok') {
            (0, _index4.default)(res.errmsg);
            setPraise(res.show);
          } else {
            (0, _index4.default)(res.errmsg);
          }
        });
      };
      // 收藏
      var resumeCollect = function resumeCollect() {
        var params = {
          resume_uuid: 1590498258556959
        };
        (0, _index.resumeCollectAction)(params).then(function (res) {
          if (res.errcode === 'ok') {
            (0, _index4.default)(res.errmsg);
            setCollect(res.show);
          } else {
            (0, _index4.default)(res.errmsg);
          }
        });
      };
      // 多行输入
      var handleTextarea = function handleTextarea(e) {
        var val = e.detail.value;
        setTextarea(val);
      };
      // 提交投诉
      var handleSubmit = function handleSubmit() {
        if (!(0, _index5.isVaildVal)(textarea, 15, 500)) {
          (0, _index4.default)('输入内容不少于15个字且必须包含文字');
          return false;
        }
        var params = {
          content: textarea,
          type: 'job',
          infoId: 1590498258556959
        };
        (0, _index.publishComplainAction)(params).then(function () {
          (0, _index4.default)('提交成功');
          setComplaintModal(false);
        });
      };
      console.log(phone, 'xxxx');
      this.anonymousFunc0 = handlePhone;

      this.anonymousFunc1 = function () {
        console.log(31321312);
      };

      this.anonymousFunc2 = function () {
        setComplaintModal(true);
      };

      this.anonymousFunc3 = resumeSupport;
      this.anonymousFunc4 = resumeCollect;

      this.anonymousFunc5 = function () {
        setShownewtips(false);
      };

      this.anonymousFunc6 = handleTellPhone;

      this.anonymousFunc7 = function (e) {
        return handleTextarea(e);
      };

      this.anonymousFunc8 = function () {
        setComplaintModal(false);
      };

      this.anonymousFunc9 = function () {
        return handleSubmit();
      };

      var loopArray131 = data.info.occupations.length ? data.info.occupations.map(function (v, i) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp2 = data.info.occupations.length ? i + i : null;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: v.$original
        };
      }) : [];
      var loopArray133 = data.project.length ? data.project[0].image.map(function (v, i) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp4 = data.project.length ? i + i : null;
        return {
          $loopState__temp4: $loopState__temp4,
          $original: v.$original
        };
      }) : [];
      var loopArray134 = data.certificates.length ? data.certificates[0].image.map(function (val, i) {
        val = {
          $original: (0, _taroWeapp.internal_get_original)(val)
        };
        var $loopState__temp6 = data.certificates.length ? i + i : null;
        return {
          $loopState__temp6: $loopState__temp6,
          $original: val.$original
        };
      }) : [];
      var loopArray135 = list.item.map(function (item, _anonIdx3) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $anonymousCallee__27 = item.$original.occupations.map(function (v, i) {
          v = {
            $original: (0, _taroWeapp.internal_get_original)(v)
          };
          var $loopState__temp8 = i + i;
          return {
            $loopState__temp8: $loopState__temp8,
            $original: v.$original
          };
        });
        return {
          $anonymousCallee__27: $anonymousCallee__27,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        data: data,
        list: list,
        loopArray131: loopArray131,
        loopArray133: loopArray133,
        loopArray134: loopArray134,
        loopArray135: loopArray135,
        IMGCDNURL: _index2.IMGCDNURL,
        examine: examine,
        onoff: onoff,
        praise: praise,
        collect: collect,
        shownewtips: shownewtips,
        complaintModal: complaintModal,
        textarea: textarea,
        phone: phone
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
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: "anonymousFunc9",
    value: function anonymousFunc9(e) {
      ;
    }
  }]);

  return ResumeDetail;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9"], _class.$$componentPath = "pages/resume/detail/index", _temp2);


ResumeDetail.config = { navigationBarTitleText: '找活名片' };
exports.default = ResumeDetail;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(ResumeDetail, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/resume/detail/index.tsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/resume/detail/index.tsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/resume/detail/index.wxml";

/***/ }),

/***/ "./src/pages/resume/detail/index.scss":
/*!********************************************!*\
  !*** ./src/pages/resume/detail/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/detail/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/resume/detail/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/resume/detail/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/resume/detail/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/resume/detail/index.tsx?taro&type=script&parse=PAGE&":
/*!************************************************************************!*\
  !*** ./src/pages/resume/detail/index.tsx?taro&type=script&parse=PAGE& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/resume/detail/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/resume/detail/index.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/resume/detail/index.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/resume/detail/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/resume/detail/index.tsx","runtime","taro","vendors","common"]]]);