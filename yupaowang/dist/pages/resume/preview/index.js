(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/resume/preview/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/resume/preview/index.tsx?taro&type=script&parse=PAGE&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/resume/preview/index.tsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************************************************************************************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/preview/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Preview, _Taro$Component);

  function Preview() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Preview);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Preview.__proto__ || Object.getPrototypeOf(Preview)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '技能证书'
    }, _this.$usedState = ["data", "loopArray115", "loopArray116", "loopArray117", "loopArray118", "IMGCDNURL", "checkpan", "checkone", "headerimg", "age", "sex", "project", "telephone"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Preview, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Preview.prototype.__proto__ || Object.getPrototypeOf(Preview.prototype), "_constructor", this).call(this, props);

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

      var _useState = (0, _taroWeapp.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          checkpan = _useState2[0],
          setCheckpan = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          checkone = _useState4[0],
          setCheckone = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          headerimg = _useState6[0],
          setHeaderimg = _useState6[1];

      var _useState7 = (0, _taroWeapp.useState)('未填写'),
          _useState8 = _slicedToArray(_useState7, 2),
          sex = _useState8[0],
          setSex = _useState8[1];

      var _useState9 = (0, _taroWeapp.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          age = _useState10[0],
          setAge = _useState10[1];

      var _useState11 = (0, _taroWeapp.useState)('未填写'),
          _useState12 = _slicedToArray(_useState11, 2),
          telephone = _useState12[0],
          settelephone = _useState12[1];

      var _useState13 = (0, _taroWeapp.useState)(0),
          _useState14 = _slicedToArray(_useState13, 2),
          projectlength = _useState14[0],
          setProjectlength = _useState14[1];

      var _useState15 = (0, _taroWeapp.useState)([]),
          _useState16 = _slicedToArray(_useState15, 2),
          project = _useState16[0],
          setProject = _useState16[1];

      var _useState17 = (0, _taroWeapp.useState)([]),
          _useState18 = _slicedToArray(_useState17, 2),
          skillbooksone = _useState18[0],
          setSkillbooksone = _useState18[1];

      var _useState19 = (0, _taroWeapp.useState)({
        info: {
          username: '未填写',
          authentication: '',
          certificate_show: 0,
          nation: '',
          address: '',
          introduce: '',
          miniInfoOccupations: []
        },
        introduces: {
          hometown: '',
          experience_str: '',
          prof_degree_str: '',
          type_str: '',
          number_people: '',
          tags: []
        },
        project: [],
        certificates: [],
        content: {
          show_tips: 0
        }
      }),
          _useState20 = _slicedToArray(_useState19, 2),
          data = _useState20[0],
          setData = _useState20[1];

      (0, _taroWeapp.useEffect)(function () {
        (0, _index.resumeListAction)().then(function (res) {
          console.log(res);
          setCheckpan(res.data.info.check == '0' ? true : false);
          setCheckone(res.data.info.check == '0' ? true : false);
          setHeaderimg(res.data.info.headerimg);
          setData({ info: res.data.info, introduces: res.data.introduces, project: res.data.project, certificates: res.data.certificates, content: res.data.content });
          settelephone(res.data.info.tel);
          if (res.data.project.length === 0) {
            setProjectlength(0);
            setProject([]);
            setSkillbooksone([]);
          } else {
            setSkillbooksone([res.data.certificates[0]]);
            if (res.data.project) {
              if (new Date(res.data.project[0].completion_time).getTime() / 86400000 < new Date().getTime() / 86400000) {
                setProjectlength(res.data.project.length >= 1 ? res.data.project.length : 0);
                var item = res.data.project[0];
                item.completiontime = 'zhijing';
                setProject([item]);
              } else {
                var _item = res.data.project[0];
                _item.completiontime = 'zhijin';
                setProjectlength(res.data.project.length >= 1 ? res.data.project.length : 0);
                setProject([_item]);
              }
            }
          }
        });
      }, []);
      var loopArray115 = data.info.miniInfoOccupations.length ? data.info.miniInfoOccupations.map(function (v, i) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp2 = data.info.miniInfoOccupations.length ? i + i : null;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: v.$original
        };
      }) : [];
      var loopArray116 = data.introduces.tags.length ? data.introduces.tags.map(function (v, i) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp4 = data.introduces.tags.length ? i + i : null;
        return {
          $loopState__temp4: $loopState__temp4,
          $original: v.$original
        };
      }) : [];
      var loopArray117 = data.project.length ? project.map(function (item, i) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp6 = data.project.length ? i + i : null;
        var $anonymousCallee__24 = data.project.length ? item.$original.image.map(function (v, i) {
          v = {
            $original: (0, _taroWeapp.internal_get_original)(v)
          };
          var $loopState__temp8 = data.project.length ? i + i : null;
          return {
            $loopState__temp8: $loopState__temp8,
            $original: v.$original
          };
        }) : [];
        return {
          $loopState__temp6: $loopState__temp6,
          $anonymousCallee__24: $anonymousCallee__24,
          $original: item.$original
        };
      }) : [];
      var loopArray118 = data.certificates.length ? project.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $anonymousCallee__25 = data.certificates.length ? item.$original.image.map(function (v, i) {
          v = {
            $original: (0, _taroWeapp.internal_get_original)(v)
          };
          var $loopState__temp10 = data.certificates.length ? i + i : null;
          return {
            $loopState__temp10: $loopState__temp10,
            $original: v.$original
          };
        }) : [];
        return {
          $anonymousCallee__25: $anonymousCallee__25,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        data: data,
        loopArray115: loopArray115,
        loopArray116: loopArray116,
        loopArray117: loopArray117,
        loopArray118: loopArray118,
        IMGCDNURL: _index2.IMGCDNURL,
        checkpan: checkpan,
        checkone: checkone,
        headerimg: headerimg,
        age: age,
        sex: sex,
        project: project,
        telephone: telephone
      });
      return this.__state;
    }
  }]);

  return Preview;
}(_taroWeapp2.default.Component), _class.$$events = [], _class.$$componentPath = "pages/resume/preview/index", _temp2);


Preview.config = { navigationBarTitleText: '技能证书' };
exports.default = Preview;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Preview, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/resume/preview/index.tsx?taro&type=template&parse=PAGE&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/resume/preview/index.tsx?taro&type=template&parse=PAGE& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/resume/preview/index.wxml";

/***/ }),

/***/ "./src/pages/resume/preview/index.scss":
/*!*********************************************!*\
  !*** ./src/pages/resume/preview/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/preview/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/resume/preview/index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/resume/preview/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/resume/preview/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/resume/preview/index.tsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************!*\
  !*** ./src/pages/resume/preview/index.tsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/resume/preview/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/resume/preview/index.tsx?taro&type=template&parse=PAGE&":
/*!***************************************************************************!*\
  !*** ./src/pages/resume/preview/index.tsx?taro&type=template&parse=PAGE& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/resume/preview/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/resume/preview/index.tsx","runtime","taro","vendors","common"]]]);