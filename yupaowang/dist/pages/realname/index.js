(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/realname/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/realname/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/realname/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.context = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../../hooks/realname/index */ "./src/hooks/realname/index.ts");

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(/*! ../../hooks/code/index */ "./src/hooks/code/index.ts");

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

var _index7 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index8 = _interopRequireDefault(_index7);

__webpack_require__(/*! ./index.scss */ "./src/pages/realname/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var context = exports.context = (0, _taroWeapp.createContext)({});

var RealName = (_temp2 = _class = function (_Taro$Component) {
  _inherits(RealName, _Taro$Component);

  function RealName() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, RealName);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RealName.__proto__ || Object.getPrototypeOf(RealName)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["model", "ALIYUNCDN", "IMGCDNURL", "sexCurrent", "sexArray", "sexName", "initModel", "startDate", "endDate", "nationCurrent", "checkDegree", "text"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(RealName, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RealName.prototype.__proto__ || Object.getPrototypeOf(RealName.prototype), "_constructor", this).call(this, props);

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

      // 使用 实名hook 与 获取短信验证码hook

      var _useRealname = (0, _index3.default)(),
          checkDegree = _useRealname.checkDegree,
          userUploadIdcard = _useRealname.userUploadIdcard,
          sexArray = _useRealname.sexArray,
          sexCurrent = _useRealname.sexCurrent,
          setSexCurrent = _useRealname.setSexCurrent,
          setSexName = _useRealname.setSexName,
          sexName = _useRealname.sexName,
          nationCurrent = _useRealname.nationCurrent,
          initModel = _useRealname.initModel,
          setNationCurrent = _useRealname.setNationCurrent,
          setInitModel = _useRealname.setInitModel,
          model = _useRealname.model,
          setModel = _useRealname.setModel,
          userPostAuthInfo = _useRealname.userPostAuthInfo,
          area = _useRealname.area,
          _setArea = _useRealname.setArea;

      var _useCode = (0, _index5.default)(),
          text = _useCode.text,
          userGetCode = _useCode.userGetCode;

      var value = {
        area: area,
        setArea: function setArea(city) {
          return _setArea(city);
        }
      };
      // 初始化生日选择时间
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var startDate = year - 60 + '-' + month + '-' + day;
      var endDate = year - 18 + '-' + month + '-' + day;
      // 用户滑动性别picker
      var userChangeSex = function userChangeSex(e) {
        var current = parseInt(e.detail.value);
        var id = sexArray[current].id;
        setSexCurrent(current);
        setSexName(sexArray[current].name);
        if (model) {
          setModel(_extends({}, model, { gender: id }));
        }
      };
      // 用户填写信息
      var userEnterFormInfo = function userEnterFormInfo(title, e) {
        var modelInfo = JSON.parse(JSON.stringify(model));
        modelInfo[title] = e.detail.value;
        setModel(modelInfo);
      };
      // 用户上传身份证照片
      var userUploadIdcardImg = function userUploadIdcardImg() {
        userUploadIdcard(1);
      };
      // 用户选择生日
      var userChangeBirthday = function userChangeBirthday(e) {
        var value = e.detail.value;

        if (!initModel) {
          return;
        }var memberExt = JSON.parse(JSON.stringify(initModel.memberExt));
        memberExt.birthday = value;
        setInitModel(_extends({}, initModel, { memberExt: memberExt }));
        if (model) {
          setModel(_extends({}, model, { birthday: value }));
        }
      };
      // 用户选择民族
      var userChangeNation = function userChangeNation(e) {
        var current = parseInt(e.detail.value);
        setNationCurrent(current);
        if (!initModel) {
          return;
        }var name = initModel.nation[current].mz_name;
        var id = initModel.nation[current].mz_id;
        if (model) {
          setModel(_extends({}, model, { nation_id: id, nationality: name }));
        }
      };
      // 用户点击发送短信
      var userSendCode = function userSendCode() {
        var tel = initModel ? initModel.member ? initModel.member.tel : '' : '';
        var flag = (0, _index6.isPhone)(tel);
        if (flag) {
          userGetCode(tel);
        } else (0, _index8.default)('请先输入正确的手机号');
      };
      // 用户选择地区
      var userChooseArea = function userChooseArea() {
        _taroWeapp2.default.navigateTo({
          url: '/pages/map/realname/index'
        });
      };
      context.Provider(value);

      this.anonymousFunc0 = function () {
        return userUploadIdcardImg();
      };

      this.anonymousFunc1 = function () {
        return userUploadIdcardImg();
      };

      this.anonymousFunc2 = function (e) {
        return userEnterFormInfo('username', e);
      };

      this.anonymousFunc3 = function (e) {
        return userChangeSex(e);
      };

      this.anonymousFunc4 = function (e) {
        return userChangeBirthday(e);
      };

      this.anonymousFunc5 = function (e) {
        return userChangeNation(e);
      };

      this.anonymousFunc6 = function (e) {
        return userEnterFormInfo('idCard', e);
      };

      this.anonymousFunc7 = function () {
        return userChooseArea();
      };

      this.anonymousFunc8 = function (e) {
        return userEnterFormInfo('tel', e);
      };

      this.anonymousFunc9 = function (e) {
        return userEnterFormInfo('code', e);
      };

      this.anonymousFunc10 = function () {
        return userSendCode();
      };

      this.anonymousFunc11 = function () {
        return userPostAuthInfo();
      };

      Object.assign(this.__state, {
        model: model,
        ALIYUNCDN: _index.ALIYUNCDN,
        IMGCDNURL: _index.IMGCDNURL,
        sexCurrent: sexCurrent,
        sexArray: sexArray,
        sexName: sexName,
        initModel: initModel,
        startDate: startDate,
        endDate: endDate,
        nationCurrent: nationCurrent,
        checkDegree: checkDegree,
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
  }, {
    key: "anonymousFunc10",
    value: function anonymousFunc10(e) {
      ;
    }
  }, {
    key: "anonymousFunc11",
    value: function anonymousFunc11(e) {
      ;
    }
  }]);

  return RealName;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11"], _class.$$componentPath = "pages/realname/index", _temp2);
exports.default = RealName;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(RealName, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/realname/index.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/realname/index.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/realname/index.wxml";

/***/ }),

/***/ "./src/hooks/realname/index.ts":
/*!*************************************!*\
  !*** ./src/hooks/realname/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = useRealname;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index2 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(/*! ../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index5 = __webpack_require__(/*! ../../utils/api/index */ "./src/utils/api/index.ts");

var _index6 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _area2 = __webpack_require__(/*! ../../models/area */ "./src/models/area.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardInfoFailImg = _index6.IMGCDNURL + 'lpy/auth/upload-fail-tips.png';
// 声明性别选项与下标
var sexArray = [{ id: '1', name: '男' }, { id: '2', name: '女' }];
function useRealname() {
  // 性别下标
  var _useState = (0, _taroWeapp.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      sexCurrent = _useState2[0],
      setSexCurrent = _useState2[1];
  // 性别名称


  var _useState3 = (0, _taroWeapp.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      sexName = _useState4[0],
      setSexName = _useState4[1];
  // 民族下标


  var _useState5 = (0, _taroWeapp.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      nationCurrent = _useState6[0],
      setNationCurrent = _useState6[1];
  // 初始化返回模型


  var _useState7 = (0, _taroWeapp.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      initModel = _useState8[0],
      setInitModel = _useState8[1];
  // 保存数据提交模型


  var _useState9 = (0, _taroWeapp.useState)(),
      _useState10 = _slicedToArray(_useState9, 2),
      model = _useState10[0],
      setModel = _useState10[1];
  // 获取用户是否登录


  var login = (0, _redux.useSelector)(function (state) {
    return state.User['login'];
  });
  // 是否显示表单

  var _useState11 = (0, _taroWeapp.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      showForm = _useState12[0],
      setShowForm = _useState12[1];
  // 展示电话号码选项


  var _useState13 = (0, _taroWeapp.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      checkDegree = _useState14[0],
      setCheckDegree = _useState14[1];
  // 声明父组件传值地区名字


  var _useState15 = (0, _taroWeapp.useState)(''),
      _useState16 = _slicedToArray(_useState15, 2),
      area = _useState16[0],
      setArea = _useState16[1];

  (0, _taroWeapp.useEffect)(function () {
    if (!login) return;
    (0, _index.getUserAuthInfo)().then(function (data) {
      if (data.errcode == 'ok') {
        var initData = data.authData;
        setInitModel(initData);
        var nationId = initData.memberExt.nation_id || '';
        var nationName = '';
        var _nationCurrent = 0;
        if (nationId) {
          _nationCurrent = initData.nation.findIndex(function (item) {
            return item.mz_id == nationId;
          });
          nationName = initData.nation[_nationCurrent].mz_name;
          setNationCurrent(_nationCurrent);
        }
        var modelData = {
          username: initData.member ? initData.member.username : '',
          age: initData.memberExt.age || '',
          nation_id: nationId,
          nationality: nationName,
          idCard: initData.memberExt.id_card || '',
          idCardImg: initData.memberExt.id_card_img || '',
          handImg: initData.memberExt.hand_img || '',
          tel: initData.member ? initData.member.tel : '',
          code: '',
          address: initData.memberExt.address || '',
          birthday: initData.memberExt.birthday || '',
          gender: initData.memberExt.sex || ''
        };
        // 设置地图显示的名称
        var _area = (0, _area2.getLongAreaAdname)(modelData.address);
        setArea(_area);
        // 是否展示电话号
        if (initData.member && initData.member.check_degree == '2') setCheckDegree(true);
        // 性别下标
        if (initData.memberExt.sex !== '') {
          for (var i = 0; i < sexArray.length; i++) {
            if (sexArray[i].id == initData.memberExt.sex) {
              setSexName(sexArray[i].name);
              setSexCurrent(i);
              break;
            }
          }
        }
        setModel(modelData);
        if (initData.member && initData.member.check_degree == '2') setShowForm(true);
      } else {
        (0, _index2.ShowActionModal)({
          msg: data.errmsg,
          success: function success() {
            _taroWeapp2.default.navigateBack();
          }
        });
      }
    });
  }, [login]);
  var userPostAuthInfo = function userPostAuthInfo() {
    console.log(model);
  };
  var userUploadIdcard = function userUploadIdcard() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

    //type = 1 证明 type = 2 手持  
    var url = type == 1 ? _index5.getIdcardAuthInfo : '';
    if (!initModel) return;
    (0, _index4.CameraAndAlbum)(url).then(function (data) {
      if (data.errcode == 'ok') {
        var memberExt = JSON.parse(JSON.stringify(initModel.memberExt));
        if (type == 1) {
          memberExt.id_card_img = data.url;
          memberExt.id_card_img_path = data.httpurl;
          setInitModel(_extends({}, initModel, { memberExt: memberExt }));
        } else {
          memberExt.hand_img = data.url;
          memberExt.hand_img_path = data.httpurl;
          (0, _index3.default)(data.errmsg);
          return;
        }
        if (data.card_info) {
          setShowForm(true);
          var cardData = data.card_info;
          if (data.card_info.success) {
            memberExt.nation_id = cardData.nation_id || '';
            memberExt.birthday = cardData.birth || '';
            memberExt.address = cardData.address || '';
            memberExt.sex = cardData.sex || '';
            //memberExt.
            memberExt.id_card = cardData.num || '', memberExt.user_name = cardData.name || '';
          } else {
            (0, _index3.default)(data.card_info.tips_message);
            memberExt.id_card_img_path = cardInfoFailImg;
            setInitModel(_extends({}, initModel, { memberExt: memberExt }));
          }
        }
      } else {
        (0, _index3.default)(data.errmsg);
      }
    });
  };
  return {
    initModel: initModel,
    model: model,
    setModel: setModel,
    login: login,
    userPostAuthInfo: userPostAuthInfo,
    userUploadIdcard: userUploadIdcard,
    sexArray: sexArray,
    setSexCurrent: setSexCurrent,
    sexCurrent: sexCurrent,
    showForm: showForm,
    sexName: sexName,
    setSexName: setSexName,
    nationCurrent: nationCurrent,
    setNationCurrent: setNationCurrent,
    setInitModel: setInitModel,
    checkDegree: checkDegree,
    area: area,
    setArea: setArea
  };
}

/***/ }),

/***/ "./src/pages/realname/index.scss":
/*!***************************************!*\
  !*** ./src/pages/realname/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/realname/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/realname/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/realname/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/realname/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/realname/index.tsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************!*\
  !*** ./src/pages/realname/index.tsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/realname/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/realname/index.tsx?taro&type=template&parse=PAGE&":
/*!*********************************************************************!*\
  !*** ./src/pages/realname/index.tsx?taro&type=template&parse=PAGE& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/realname/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/realname/index.tsx","runtime","taro","vendors","common"]]]);