(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["subpackage/pages/ranking/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/ranking/index.tsx?taro&type=script&parse=PAGE&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/subpackage/pages/ranking/index.tsx?taro&type=script&parse=PAGE& ***!
  \**************************************************************************************************************************************************************/
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

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/subpackage/pages/ranking/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RankingRules = (_temp2 = _class = function (_Taro$Component) {
  _inherits(RankingRules, _Taro$Component);

  function RankingRules() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RankingRules);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RankingRules.__proto__ || Object.getPrototypeOf(RankingRules)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '排名规则'
    }, _this.$usedState = ["data", "loopArray115", "loopArray116", "isLogin", "showbutton"], _this.anonymousFunc0Map = {}, _this.anonymousFunc1Map = {}, _this.customComponents = ["Auth"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RankingRules, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(RankingRules.prototype.__proto__ || Object.getPrototypeOf(RankingRules.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var UserInfo = _taroWeapp2.default.getStorageSync('UserInfo');
      // 获取用户是否登录
      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });

      var _useState = (0, _taroWeapp.useState)(true),
          _useState2 = _slicedToArray(_useState, 2),
          showbutton = _useState2[0],
          setShowbutton = _useState2[1];
      // 判断是否需要出现登陆


      var _useState3 = (0, _taroWeapp.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          isLogin = _useState4[0],
          setIsLogin = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)({
        warm_tips: [],
        resume_data: {
          info: {
            uuid: ''
          }
        },
        sort_rule_lists: [],
        resume_info: {
          has_resume: 0,
          sort_flag: 0
        }
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          data = _useState6[0],
          setData = _useState6[1];

      (0, _taroWeapp.useDidShow)(function () {
        if (!UserInfo) {
          setShowbutton(false);
        }
        (0, _index.resumesSortAction)().then(function (res) {
          setData(res.data);
        });
      });
      // useEffect(()=>{
      //   resumesSortAction().then(res=>{
      //     setData(res.data)
      //   })
      // }, [])
      var handleBtn = function handleBtn(v) {
        // if (v.share_type && v.share_type == 'invite_friend'){
        // }
        // if (!login) return
        if (!login) {
          setIsLogin(true);
        }
        // 日志请求
        resumesAddClickLog(v.click_type);
        // 名片信息
        // console.log(v.jump.mini_path,'地址');
        // console.log(v.jump.need_jump,'need_jump')
        // return;
        if (data.resume_info.has_resume == 1 && v.jump.need_jump == 1) {
          // 到新增找活
          if (v.jump.mini_path = '/pages/clients-looking-for-work/finding-name-card/findingnamecard') {
            _taroWeapp2.default.navigateTo({
              url: "/pages/resume/newJobs/index"
            });
            // 项目
          } else if (v.jump.mini_path == '/pages/clients-looking-for-work/all-project-experience/allexperience') {
            _taroWeapp2.default.navigateTo({
              url: "/pages/resume/projectList/index?id=" + data.resume_data.info.uuid
            });
            // 技能
          } else if (v.jump.mini_path == '/pages/clients-looking-for-work/all-skills-certificate/skillscertificate') {
            _taroWeapp2.default.navigateTo({
              url: "/pages/resume/skillList/index?id=" + data.resume_data.info.uuid
            });
            // 充值
          } else if (v.jump.mini_path == '/pages/recharge/recharge') {
            _taroWeapp2.default.navigateTo({
              url: "/pages/recharge/index"
            });
            // 实名
          } else {
            _taroWeapp2.default.navigateTo({
              url: "/pages/realname/index"
            });
          }
          // 充值
        } else if (data.resume_info.has_resume == 0 && v.jump.mini_path == '/pages/recharge/recharge' && v.jump.need_jump == 1) {
          _taroWeapp2.default.navigateTo({
            url: "/pages/recharge/index"
          });
          // 真实姓名
        } else if (data.resume_info.has_resume == 0 && v.jump.mini_path == '/pages/realname/realname' && v.jump.need_jump == 1) {
          _taroWeapp2.default.navigateTo({
            url: "/pages/realname/index"
          });
          // 名片信息
        } else if (v.jump.need_jump == 1) {
          _taroWeapp2.default.navigateTo({
            url: "/pages/resume/newJobs/index"
          });
        }
      };
      var resumesAddClickLog = function resumesAddClickLog(click_type) {
        (0, _index.resumesAddClickLogAction)(click_type);
      };
      console.log(showbutton);
      var loopArray115 = data.sort_rule_lists.map(function (v, index) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp2 = index + index;

        var _$indexKey = "bbhzz" + index;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          handleBtn(v.$original);
        };

        var _$indexKey2 = "bbizz" + index;

        _this2.anonymousFunc1Map[_$indexKey2] = function () {
          handleBtn(v.$original);
        };

        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          _$indexKey2: _$indexKey2,
          $original: v.$original
        };
      });
      var loopArray116 = data.warm_tips.map(function (v, index) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp4 = index + index;
        return {
          $loopState__temp4: $loopState__temp4,
          $original: v.$original
        };
      });
      Object.assign(this.__state, {
        data: data,
        loopArray115: loopArray115,
        loopArray116: loopArray116,
        isLogin: isLogin,
        showbutton: showbutton
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }]);

  return RankingRules;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1"], _class.$$componentPath = "subpackage/pages/ranking/index", _temp2);


RankingRules.config = { navigationBarTitleText: '排名规则' };
exports.default = RankingRules;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(RankingRules, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/ranking/index.tsx?taro&type=template&parse=PAGE&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/subpackage/pages/ranking/index.tsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "subpackage/pages/ranking/index.wxml";

/***/ }),

/***/ "./src/subpackage/pages/ranking/index.scss":
/*!*************************************************!*\
  !*** ./src/subpackage/pages/ranking/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/subpackage/pages/ranking/index.tsx":
/*!************************************************!*\
  !*** ./src/subpackage/pages/ranking/index.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/subpackage/pages/ranking/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/subpackage/pages/ranking/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/subpackage/pages/ranking/index.tsx?taro&type=script&parse=PAGE&":
/*!*****************************************************************************!*\
  !*** ./src/subpackage/pages/ranking/index.tsx?taro&type=script&parse=PAGE& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/ranking/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/subpackage/pages/ranking/index.tsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************************!*\
  !*** ./src/subpackage/pages/ranking/index.tsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/ranking/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/subpackage/pages/ranking/index.tsx","runtime","taro","vendors","common"]]]);