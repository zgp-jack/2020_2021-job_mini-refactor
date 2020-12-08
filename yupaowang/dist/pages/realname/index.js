(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/realname/index"],{

/***/ "./src/actions/realname.ts":
/*!*********************************!*\
  !*** ./src/actions/realname.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setData = setData;
exports.getData = getData;
exports.setArea = setArea;
exports.setFun = setFun;

var _realname = __webpack_require__(/*! ../constants/realname */ "./src/constants/realname.ts");

function setData(data) {
  return {
    type: _realname.SETREALNAME,
    data: data
  };
}
function getData() {
  return {
    type: _realname.GETREALNAME
  };
}
function setArea(data) {
  return {
    type: _realname.SETAREA,
    data: data
  };
}
function setFun(data) {
  return {
    type: _realname.SETFUN,
    data: data
  };
}

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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index2 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(/*! ../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(/*! ../../utils/api/index */ "./src/utils/api/index.ts");

var _index7 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _area = __webpack_require__(/*! ../../models/area */ "./src/models/area.ts");

var _index8 = __webpack_require__(/*! ../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardInfoFailImg = _index7.ALIYUNCDNMINIIMG + 'lpy/auth/upload-fail-tips.png';
// 声明性别选项与下标
var sexArray = [{ id: '1', name: '男' }, { id: '2', name: '女' }];
function useRealname() {
  // 性别下标
  var _useState = (0, _taroTt.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      sexCurrent = _useState2[0],
      setSexCurrent = _useState2[1];
  // 性别名称


  var _useState3 = (0, _taroTt.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      sexName = _useState4[0],
      setSexName = _useState4[1];
  // 民族下标


  var _useState5 = (0, _taroTt.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      nationCurrent = _useState6[0],
      setNationCurrent = _useState6[1];
  // 初始化返回模型


  var _useState7 = (0, _taroTt.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      initModel = _useState8[0],
      setInitModel = _useState8[1];
  // 保存数据提交模型


  var _useState9 = (0, _taroTt.useState)({
    username: '',
    age: '',
    nation_id: '',
    nationality: '',
    idCard: '',
    idCardImg: '',
    handImg: '',
    tel: '',
    code: '',
    address: '',
    birthday: '',
    gender: ''
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      model = _useState10[0],
      setModel = _useState10[1];
  // 获取用户是否登录


  var login = (0, _redux.useSelector)(function (state) {
    return state.User['login'];
  });
  // 是否显示表单

  var _useState11 = (0, _taroTt.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      showForm = _useState12[0],
      setShowForm = _useState12[1];
  // 展示电话号码选项


  var _useState13 = (0, _taroTt.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      checkDegree = _useState14[0],
      setCheckDegree = _useState14[1];
  // 声明父组件传值地区名字


  var _useState15 = (0, _taroTt.useState)(''),
      _useState16 = _slicedToArray(_useState15, 2),
      RealnameArea = _useState16[0],
      setRealnameArea = _useState16[1];

  (0, _taroTt.useEffect)(function () {
    if (!login) return;
    (0, _index.getUserAuthInfo)().then(function (data) {
      if (data.errcode == 'ok') {
        if (data.authData.member && data.authData.member.is_check === '0') {
          _taroTt2.default.showModal({
            title: '审核失败',
            content: data.authData.memberExt.idcard_check_failure_reason,
            showCancel: false
          });
        }
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
        }
        setNationCurrent(_nationCurrent);
        var modelData = {
          username: initData.member ? initData.member.username : '',
          age: initData.memberExt.age || '',
          nation_id: nationId || initData.nation[_nationCurrent].mz_id,
          nationality: nationName || initData.nation[_nationCurrent].mz_name,
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
        var area = (0, _area.getLongAreaAdname)(modelData.address);
        setRealnameArea(area);
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
        setModel(_extends({}, modelData));
        if (initData.member && initData.member.check_degree == '2') setShowForm(true);
      } else {
        (0, _index2.ShowActionModal)({
          msg: data.errmsg,
          success: function success() {
            _taroTt2.default.navigateBack();
          }
        });
      }
    });
  }, [login]);
  // 验证数据提交
  var vaildUserAuthInfo = function vaildUserAuthInfo() {
    if (!model || !initModel) return false;
    if (!model.idCardImg) {
      (0, _index3.default)('请上传身份证照片');
      return false;
    }
    if (!model.handImg) {
      (0, _index3.default)('请上传身份手持照');
      return false;
    }
    if (!model.username) {
      (0, _index3.default)('请输入您的名字');
      return false;
    }
    if (!model.gender) {
      (0, _index3.default)('请选择您的性别');
      return false;
    }
    if (!model.birthday) {
      (0, _index3.default)('请选择您的出生日期');
      return false;
    }
    if (!model.nation_id) {
      (0, _index3.default)('请选择您的民族');
      return false;
    }
    if (!model.idCard) {
      (0, _index3.default)('请输入您的身份证号码');
      return false;
    }
    if (!model.address) {
      (0, _index3.default)('请选择您的地址');
      return false;
    }
    // 如果不能使用高德api， 那么输入的地址至少需要5个字
    if (!_index7.USEGAODEMAPAPI && model.address.length < 5) {
      (0, _index3.default)('地址最少5个字');
      return false;
    }
    if (!model.tel) {
      (0, _index3.default)('请输入您的手机号');
      return false;
    }
    if (!initModel.member) return false;
    if (!initModel.member.tel) {
      if (!model.code) {
        (0, _index3.default)('请输入验证码');
        return false;
      }
    }
    return true;
  };
  // 用户提交实名表单
  var userPostAuthInfo = function userPostAuthInfo() {
    // 验证用户是否填写完了表单
    if (!vaildUserAuthInfo()) return;
    var item = JSON.parse(JSON.stringify(model));
    var modelItem = JSON.parse(JSON.stringify(initModel));
    var params = {
      username: item.username,
      age: item.age,
      nation_id: modelItem.nation[nationCurrent].mz_id,
      nationality: modelItem.nation[nationCurrent].mz_name,
      idCard: item.idCard,
      idCardImg: item.idCardImg,
      handImg: item.handImg,
      tel: item.tel,
      code: item.code,
      address: item.address,
      birthday: modelItem.memberExt.birthday,
      gender: sexCurrent + 1
    };
    (0, _index.postUserAuthInfo)(params).then(function (res) {
      (0, _index8.SubscribeToNews)('auth', function () {
        (0, _index2.ShowActionModal)({
          msg: res.errmsg,
          success: function success() {
            _taroTt2.default.navigateBack();
          }
        });
      });
    });
  };
  var userUploadIdcard = function userUploadIdcard() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

    var modelObj = JSON.parse(JSON.stringify(model));
    //type = 1 正面 type = 2 手持  
    var url = type == 1 ? _index6.getIdcardAuthInfo : '';
    if (!initModel) return;
    if (type === 1) {
      (0, _index4.CameraAndAlbum)(url).then(function (data) {
        if (data.errcode == 'ok') {
          var memberExt = JSON.parse(JSON.stringify(initModel.memberExt));
          if (data.card_info) {
            setShowForm(true);
            memberExt.id_card_img = data.url;
            memberExt.id_card_img_path = data.httpurl;
            setInitModel(_extends({}, initModel, { memberExt: _extends({}, memberExt) }));
            var cardData = data.card_info;
            if (data.card_info.success) {
              memberExt.nation_id = cardData.nation_id || '';
              memberExt.nationality = cardData.nationality || '';
              memberExt.birthday = cardData.birth || '';
              memberExt.address = cardData.address || '';
              memberExt.sex = cardData.sex || '';
              memberExt.id_card = cardData.num || '', memberExt.user_name = cardData.name || '';
              //处理数据
              //生日
              var birthall = '';
              if (memberExt.birthday) {
                var birth = memberExt.birthday.substring(0, 4);
                var birthtwo = memberExt.birthday.substring(4, 6);
                var birththree = memberExt.birthday.substring(6, 8);
                birthall = birth + "-" + birthtwo + "-" + birththree;
              }
              // 性别
              var sexIndex = 0;
              var sexId = ''; // 默认空 没有遍历到即假
              sexArray.map(function (v, i) {
                if (memberExt.sex === v.name) {
                  sexIndex = i;
                  sexId = v.id;
                }
              });
              setSexCurrent(sexIndex);
              setSexName(memberExt.sex);
              var dataItem = {
                username: memberExt.user_name ? memberExt.user_name : '',
                age: memberExt.age || '',
                nation_id: memberExt.nation_id,
                nationality: memberExt.nationality,
                idCard: memberExt.id_card || '',
                idCardImg: memberExt.id_card_img || '',
                handImg: memberExt.hand_img || '',
                tel: modelObj.tel || '',
                code: '',
                address: memberExt.address,
                birthday: birthall || '',
                gender: sexId
              };
              memberExt.birthday = birthall;
              setInitModel(_extends({}, initModel, { memberExt: _extends({}, memberExt) }));
              setModel(_extends({}, dataItem));
            } else {
              (0, _index3.default)(data.card_info.tips_message);
              memberExt.id_card_img_path = cardInfoFailImg;
              memberExt.id_card_img = cardInfoFailImg;
              if (model) setModel(_extends({}, model, { idCardImg: data.url }));
              setInitModel(_extends({}, initModel, { memberExt: _extends({}, memberExt) }));
            }
          }
        } else {
          (0, _index3.default)(data.errmsg);
        }
      });
    } else {
      var memberExt = JSON.parse(JSON.stringify(initModel.memberExt));
      // memberExt.hand_img = 
      (0, _index5.default)().then(function (res) {
        var imageItem = {
          url: res.url,
          httpurl: res.httpurl
        };
        memberExt.hand_img = imageItem.url;
        memberExt.hand_img_path = imageItem.httpurl;
        var item = JSON.parse(JSON.stringify(model));
        item.handImg = imageItem.url;
        setModel(item);
      });
      setInitModel(_extends({}, initModel, { memberExt: memberExt }));
    }
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
    RealnameArea: RealnameArea,
    setRealnameArea: setRealnameArea
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../../hooks/realname/index */ "./src/hooks/realname/index.ts");

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(/*! ../../hooks/code/index */ "./src/hooks/code/index.ts");

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _realname = __webpack_require__(/*! ../../actions/realname */ "./src/actions/realname.ts");

var _index7 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index8 = _interopRequireDefault(_index7);

__webpack_require__(/*! ./index.scss */ "./src/pages/realname/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RealName = function (_Taro$Component) {
  _inherits(RealName, _Taro$Component);

  function RealName() {
    _classCallCheck(this, RealName);

    var _this = _possibleConstructorReturn(this, (RealName.__proto__ || Object.getPrototypeOf(RealName)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '鱼泡网-实名认证'
    };

    _this.$usedState = ["initModel", "ALIYUNCDN", "IMGCDNURL", "model", "sexCurrent", "sexArray", "sexName", "startDate", "endDate", "nationCurrent", "USEGAODEMAPAPI", "checkDegree", "text"];
    _this.customComponents = ["Auth"];
    return _this;
  }

  _createClass(RealName, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RealName.prototype.__proto__ || Object.getPrototypeOf(RealName.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
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
          RealnameArea = _useRealname.RealnameArea,
          _setRealnameArea = _useRealname.setRealnameArea;

      var _useCode = (0, _index5.default)(),
          text = _useCode.text,
          userGetCode = _useCode.userGetCode;

      var value = {
        RealnameArea: RealnameArea,
        setRealnameArea: function setRealnameArea(city) {
          return _setRealnameArea(city);
        }
      };
      var dispatch = (0, _redux.useDispatch)();
      dispatch((0, _realname.setData)(value));
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
      // useDidShow(()=>{
      //   if (RealnameArea){
      //     const modelItem = JSON.parse(JSON.stringify(model));
      //     modelItem.address = RealnameArea;
      //     setModel(modelItem);
      //   }
      // })
      // 用户填写信息
      var userEnterFormInfo = function userEnterFormInfo(title, e) {
        var modelInfo = JSON.parse(JSON.stringify(model));
        modelInfo[title] = e.detail.value;
        setModel(modelInfo);
      };
      // 用户上传身份证照片
      var userUploadIdcardImg = function userUploadIdcardImg(type) {
        userUploadIdcard(type);
      };
      // 用户选择生日
      var userChangeBirthday = function userChangeBirthday(e) {
        var value = e.detail.value;

        if (!initModel) {
          return;
        }
        var memberExt = JSON.parse(JSON.stringify(initModel.memberExt));
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
        }
        var name = initModel.nation[current].mz_name;
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
        if (!RealnameArea) {
          return;
        }
        _taroTt2.default.navigateTo({
          url: "/pages/map/realname/index"
        });
      };
      // 用户输入地区 针对不能 使用高德地图的小程序
      var userEnterAddress = function userEnterAddress(e) {
        if (model) {
          setModel(_extends({}, model, { address: e.detail.value }));
        }
      };
      this.anonymousFunc0 = function () {
        return userUploadIdcardImg(1);
      };
      this.anonymousFunc1 = function () {
        return userUploadIdcardImg(2);
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
        return userEnterAddress(e);
      };
      this.anonymousFunc9 = function (e) {
        return userEnterFormInfo('tel', e);
      };
      this.anonymousFunc10 = function (e) {
        return userEnterFormInfo('code', e);
      };
      this.anonymousFunc11 = function () {
        return userSendCode();
      };
      this.anonymousFunc12 = function () {
        return userPostAuthInfo();
      };
      Object.assign(this.__state, {
        initModel: initModel,
        ALIYUNCDN: _index.ALIYUNCDN,
        IMGCDNURL: _index.IMGCDNURL,
        model: model,
        sexCurrent: sexCurrent,
        sexArray: sexArray,
        sexName: sexName,
        startDate: startDate,
        endDate: endDate,
        nationCurrent: nationCurrent,
        USEGAODEMAPAPI: _index.USEGAODEMAPAPI,
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
  }, {
    key: "anonymousFunc12",
    value: function anonymousFunc12(e) {
      ;
    }
  }]);

  return RealName;
}(_taroTt2.default.Component);

RealName.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12"];
RealName.$$componentPath = "pages/realname/index";
RealName.config = { navigationBarTitleText: '鱼泡网-实名认证' };
exports.default = RealName;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(RealName, true));

/***/ })

},[["./src/pages/realname/index.tsx","runtime","vendors"]]]);