(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["subpackage/pages/basics/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/basics/index.tsx?taro&type=script&parse=PAGE&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/subpackage/pages/basics/index.tsx?taro&type=script&parse=PAGE& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contextItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index5 = __webpack_require__(/*! ../../../pages/resume/newJobs/index */ "./src/pages/resume/newJobs/index.tsx");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _index6 = __webpack_require__(/*! ../../../hooks/code/index */ "./src/hooks/code/index.ts");

var _index7 = _interopRequireDefault(_index6);

var _index8 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/subpackage/pages/basics/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contextItem = exports.contextItem = (0, _taroWeapp.createContext)({});

var BasicsPage = (_temp2 = _class = function (_Taro$Component) {
  _inherits(BasicsPage, _Taro$Component);

  function BasicsPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BasicsPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BasicsPage.__proto__ || Object.getPrototypeOf(BasicsPage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '基础信息'
    }, _this.$usedState = ["$compid__116", "$compid__117", "showProfession", "formData", "sexList", "nationCurrent", "isCode", "text"], _this.customComponents = ["Profession", "WordsTotal"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BasicsPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(BasicsPage.prototype.__proto__ || Object.getPrototypeOf(BasicsPage.prototype), "_constructor", this).call(this, props);

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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__116"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__116 = _genCompid2[0],
          $compid__116 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__117"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__117 = _genCompid4[0],
          $compid__117 = _genCompid4[1];

      var _useContext = (0, _taroWeapp.useContext)(_index5.context),
          area = _useContext.area;
      // 验证码


      var _useCode = (0, _index7.default)(),
          text = _useCode.text,
          userGetCode = _useCode.userGetCode;
      // 当前显示城市


      var _useState = (0, _taroWeapp.useState)(_area.AREABEIJING.name),
          _useState2 = _slicedToArray(_useState, 2),
          areas = _useState2[0],
          _setArea = _useState2[1];
      // 选择详细地址信息


      var _useState3 = (0, _taroWeapp.useState)({
        title: '',
        adcode: '',
        location: '',
        info: ''
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          areaInfo = _useState4[0],
          _setAreaInfo = _useState4[1];

      var sexList = ['男', '女'];

      var _useState5 = (0, _taroWeapp.useState)([]),
          _useState6 = _slicedToArray(_useState5, 2),
          nationCurrent = _useState6[0],
          setNationCurrent = _useState6[1];

      var _useState7 = (0, _taroWeapp.useState)([]),
          _useState8 = _slicedToArray(_useState7, 2),
          allNationCurrent = _useState8[0],
          setAllNationCurrent = _useState8[1];

      var _useState9 = (0, _taroWeapp.useState)(),
          _useState10 = _slicedToArray(_useState9, 2),
          model = _useState10[0],
          setModel = _useState10[1];

      var _useState11 = (0, _taroWeapp.useState)(false),
          _useState12 = _slicedToArray(_useState11, 2),
          showProfession = _useState12[0],
          setShowProssion = _useState12[1];
      // 进来时的电话做验证码判断


      var _useState13 = (0, _taroWeapp.useState)(''),
          _useState14 = _slicedToArray(_useState13, 2),
          oldTel = _useState14[0],
          setOldTel = _useState14[1];

      var _useState15 = (0, _taroWeapp.useState)(0),
          _useState16 = _slicedToArray(_useState15, 2),
          num = _useState16[0],
          setNum = _useState16[1];
      // 省


      var _useState17 = (0, _taroWeapp.useState)(''),
          _useState18 = _slicedToArray(_useState17, 2),
          province = _useState18[0],
          setProvince = _useState18[1];
      // 市


      var _useState19 = (0, _taroWeapp.useState)(''),
          _useState20 = _slicedToArray(_useState19, 2),
          city = _useState20[0],
          setCity = _useState20[1];

      var _useState21 = (0, _taroWeapp.useState)({
        name: '',
        sex: '',
        time: '',
        nation: '',
        work: [],
        workItem: '',
        are: '',
        phone: '',
        code: '',
        details: '',
        classifyTree: [],
        maxClassifyCount: 0,
        classifies: [],
        nationCurrentName: ''
      }),
          _useState22 = _slicedToArray(_useState21, 2),
          formData = _useState22[0],
          setFormData = _useState22[1];
      // useDidShow(() => {
      //   if (basicsCity){
      //     setFormData({ ...formData, are: basicsCity, });
      //   }
      // })
      // 获取数据


      (0, _taroWeapp.useEffect)(function () {
        // 设置城市
        var userLoctionCity = _taroWeapp2.default.getStorageSync(_store.UserLocationCity);
        if (userLoctionCity) {
          _setArea(userLoctionCity.city);
        } else {
          (0, _index4.userAuthLoction)().then(function (res) {
            _setArea(res.city);
          }).then(function () {
            _setArea(_area.AREABEIJING.name);
          });
        }
        // 设置地址
        var userLastPublishArea = _taroWeapp2.default.getStorageSync(_store.UserLastPublishArea);
        if (userLastPublishArea) {
          _setAreaInfo(userLastPublishArea);
        }
        // if (area){
        //   setArea(area)
        // }
        // if (basicsCity){
        //   console.log(basicsCity,'basicsCitybasicsCitybasicsCity')
        //   setFormData({ ...formData, are: basicsCity,});
        // }
        // 获取缓存信息
        var useInfo = _taroWeapp2.default.getStorageSync('introinfo');
        if (useInfo) {
          console.log(useInfo, 'useInfo');
          var cache = {
            // 姓名
            name: useInfo.username,
            // 电话
            phone: useInfo.tel,
            // 时间
            time: useInfo.birthday,
            // 性别
            sex: sexList[parseInt(useInfo.gender) - 1],
            // 民族
            nationCurrentName: useInfo.nation,
            // 自我介绍
            details: useInfo.introduce,
            // 所属工种
            workItem: useInfo.occupations.toString(),
            // 所在地区
            are: useInfo.address
          };
          setProvince(useInfo.province);
          setCity(useInfo.city);
          setOldTel(useInfo.tel);
          setFormData(cache);
          setNum(useInfo.introduce.length);
        }
        var params = {
          type: 'job',
          infoId: ''
        };
        // 获取工种
        (0, _index.getPublishRecruitView)(params).then(function (res) {
          setModel(res);
        });
        // 获取民族
        (0, _index.getUserAuthInfo)().then(function (res) {
          var nameList = res.authData.nation.map(function (v) {
            return v.mz_name;
          });
          setNationCurrent(nameList);
          setAllNationCurrent(res.authData.nation);
        });
      }, []);
      // 验证码

      var _useState23 = (0, _taroWeapp.useState)(false),
          _useState24 = _slicedToArray(_useState23, 2),
          isCode = _useState24[0],
          setIsCode = _useState24[1];
      // 用户填写表单


      var userEnterFrom = function userEnterFrom(e, key) {
        var value = void 0;
        if (key === 'sex') {
          value = sexList[e.detail.value];
        } else if (key === 'nationCurrentName') {
          value = nationCurrent[e.detail.value];
        } else {
          value = e.detail.value;
        }
        // 判断手机号不同出现验证码
        if (key === 'phone') {
          if (oldTel) {
            if (e !== oldTel || e === '') {
              setIsCode(true);
            } else {
              setIsCode(false);
            }
          } else {
            setIsCode(true);
          }
        }
        var state = JSON.parse(JSON.stringify(formData));
        state[key] = value;
        setFormData(state);
        // 如果是detail, 那么需要统计字数
        if (key === 'details') {
          setNum(value.length);
        }
      };
      var handleSubmit = function handleSubmit() {
        var nation = void 0;
        for (var i = 0; i < allNationCurrent.length; i++) {
          if (allNationCurrent[i].mz_name === formData.nationCurrentName) {
            nation = allNationCurrent[i].mz_id;
          }
        }
        var params = {
          code: formData.code,
          username: formData.name,
          tel: formData.phone,
          gender: String(sexList.indexOf(formData.sex)),
          nation: String(nation),
          birthday: formData.time,
          occupations: formData.workItem,
          province: province,
          city: city,
          introduce: formData.details,
          // lat: this.data.latitude,
          // lng: this.data.longitude,
          address: formData.are
        };
        console.log(params);
        // addResumeAction(params).then(res=>{
        //   console.log(res);
        // })
      };
      var closeProfession = function closeProfession() {
        setShowProssion(false);
      };
      // 点击工种
      var userClickProfession = function userClickProfession(i, k, id) {
        console.log(i, 'i');
        console.log(k, 'k');
        console.log(id, 'id');
        if (!model) {
          return;
        }var works = JSON.parse(JSON.stringify(model.classifyTree));
        var check = works[i].children[k].is_check;
        console.log(works, 'works');
        console.log(check, 'check');
        if (!check) {
          var max = model.maxClassifyCount;
          var _num = model.classifies.length;
          if (_num >= max) {
            (0, _index3.default)('工种最多可以选择' + max + '个');
            return;
          }
        }
        works[i].children[k].is_check = !check;
        var classifyArr = JSON.parse(JSON.stringify(model.classifies));
        var newArr = check ? classifyArr.filter(function (item) {
          return item !== id;
        }) : [].concat(_toConsumableArray(classifyArr), [id]);
        console.log(works, 'works');
        console.log(newArr, 'newArr');
        // setModel({ ...model, classifyTree: works, classifies: newArr })
      };
      // 用户点击发送短信
      var userSendCode = function userSendCode() {
        var tel = formData.phone;
        var flag = (0, _index8.isPhone)(tel);
        if (flag) {
          userGetCode(tel);
        } else (0, _index3.default)('请先输入正确的手机号');
      };
      // 选择地址
      var userChooseArea = function userChooseArea() {
        if (!model) {
          return;
        }var url = '/pages/map/resume/index';
        _taroWeapp2.default.navigateTo({
          url: url
        });
      };
      // 获取当前位置
      var handleLocation = function handleLocation(e) {
        e.stopPropagation();
        console.log(3123213213);
        _taroWeapp2.default.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
              //非初始化进入该页面,且未授权   
              _taroWeapp2.default.showModal({
                title: '是否授权当前位置',
                content: '需要获取您的地理位置，请确认授权，否则将不能为你自动推荐位置',
                success: function success(res) {
                  if (res.cancel) {} else if (res.confirm) {
                    //village_LBS(that);
                    _taroWeapp2.default.openSetting({
                      success: function success(data) {
                        if (data.authSetting["scope.userLocation"] == true) {
                          _taroWeapp2.default.showToast({
                            title: '授权成功',
                            icon: 'success',
                            duration: 2000
                          });
                          //再次授权，调用getLocationt的API
                          getLocation();
                        } else {
                          _taroWeapp2.default.showToast({
                            title: '授权失败',
                            icon: 'success',
                            duration: 2000
                          });
                        }
                      }
                    });
                  }
                }
              });
            } else {
              getLocation();
            }
          }
        });
      };
      var getLocation = function getLocation() {
        // userAuthLoction().then(res=>{
        //   console.log(res,'resssssssss');
        // })
        // let myAmapFun = new amapFile.AMapWX({
        //   key: MAPKEY,
        // }); //key注册高德地图开发者
        // myAmapFun.getRegeo({
        // })
      };
      // 需要传递的值
      var value = {
        area: areas,
        setArea: function setArea(city) {
          return _setArea(city);
        },
        setAreaInfo: function setAreaInfo(item) {
          return _setAreaInfo(item);
        },
        setPublishArea: function setPublishArea(val) {
          if (!model) {
            return;
          }setModel(_extends({}, model, { address: val }));
        }
      };
      contextItem.Provider(value);

      this.anonymousFunc0 = function (i, k, id) {
        return userClickProfession(i, k, id);
      };

      this.anonymousFunc1 = function (e) {
        return userEnterFrom(e, 'name');
      };

      this.anonymousFunc2 = function (e) {
        return userEnterFrom(e, 'sex');
      };

      this.anonymousFunc3 = function (e) {
        return userEnterFrom(e, 'time');
      };

      this.anonymousFunc4 = function (e) {
        return userEnterFrom(e, 'nationCurrentName');
      };

      this.anonymousFunc5 = function () {
        setShowProssion(true);
      };

      this.anonymousFunc6 = function () {
        return userChooseArea();
      };

      this.anonymousFunc7 = handleLocation;

      this.anonymousFunc8 = function (e) {
        return userEnterFrom(e, 'phone');
      };

      this.anonymousFunc9 = function (e) {
        return userEnterFrom(e, 'code');
      };

      this.anonymousFunc10 = function () {
        return userSendCode();
      };

      this.anonymousFunc11 = function (e) {
        return userEnterFrom(e, 'details');
      };

      this.anonymousFunc12 = handleSubmit;
      showProfession && _taroWeapp.propsManager.set({
        "closeProfession": closeProfession,
        "data": model && model.classifyTree,
        "onClickItem": this.anonymousFunc0,
        "num": 3
      }, $compid__116, $prevCompid__116);
      _taroWeapp.propsManager.set({
        "num": num
      }, $compid__117, $prevCompid__117);
      Object.assign(this.__state, {
        $compid__116: $compid__116,
        $compid__117: $compid__117,
        showProfession: showProfession,
        formData: formData,
        sexList: sexList,
        nationCurrent: nationCurrent,
        isCode: isCode,
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
      e.stopPropagation();
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

  return BasicsPage;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12"], _class.$$componentPath = "subpackage/pages/basics/index", _temp2);


BasicsPage.config = { navigationBarTitleText: '基础信息' };
exports.default = BasicsPage;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(BasicsPage, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/basics/index.tsx?taro&type=template&parse=PAGE&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/subpackage/pages/basics/index.tsx?taro&type=template&parse=PAGE& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "subpackage/pages/basics/index.wxml";

/***/ }),

/***/ "./src/subpackage/pages/basics/index.scss":
/*!************************************************!*\
  !*** ./src/subpackage/pages/basics/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/subpackage/pages/basics/index.tsx":
/*!***********************************************!*\
  !*** ./src/subpackage/pages/basics/index.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/subpackage/pages/basics/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/subpackage/pages/basics/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/subpackage/pages/basics/index.tsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************!*\
  !*** ./src/subpackage/pages/basics/index.tsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/basics/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/subpackage/pages/basics/index.tsx?taro&type=template&parse=PAGE&":
/*!******************************************************************************!*\
  !*** ./src/subpackage/pages/basics/index.tsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/subpackage/pages/basics/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/subpackage/pages/basics/index.tsx","runtime","taro","vendors","common"]]]);