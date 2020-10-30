(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/resume/basics/index"],{

/***/ "./src/pages/resume/basics/index.scss":
/*!********************************************!*\
  !*** ./src/pages/resume/basics/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/basics/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/resume/basics/index.tsx ***!
  \*******************************************/
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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index5 = __webpack_require__(/*! ../../map/resume/index */ "./src/pages/map/resume/index.tsx");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _index6 = __webpack_require__(/*! ../../../hooks/code/index */ "./src/hooks/code/index.ts");

var _index7 = _interopRequireDefault(_index6);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index8 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

var _index9 = __webpack_require__(/*! ../../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/basics/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicsPage = function (_Taro$Component) {
  _inherits(BasicsPage, _Taro$Component);

  function BasicsPage() {
    _classCallCheck(this, BasicsPage);

    var _this = _possibleConstructorReturn(this, (BasicsPage.__proto__ || Object.getPrototypeOf(BasicsPage)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '基础信息'
    };

    _this.$usedState = ["anonymousState__temp", "$compid__70", "$compid__71", "showProfession", "formData", "sexList", "nationCurrent", "isCode", "text"];
    _this.customComponents = ["Profession", "WordsTotal"];
    return _this;
  }

  _createClass(BasicsPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(BasicsPage.prototype.__proto__ || Object.getPrototypeOf(BasicsPage.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__70"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__70 = _genCompid2[0],
          $compid__70 = _genCompid2[1];

      var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "$compid__71"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__71 = _genCompid4[0],
          $compid__71 = _genCompid4[1];
      // 获取存入的公用内容


      var useSelectorItem = (0, _redux.useSelector)(function (state) {
        return state;
      });
      console.log(useSelectorItem, 'dadasd');
      //选择地址传过来的内容

      var _useContext = (0, _taroTt.useContext)(_index5.contextItem),
          publishArea = _useContext.publishArea,
          location = _useContext.location,
          adcode = _useContext.adcode;
      //公用数据，工种，民族
      // const publicList:any=[];
      // const { publicList } = useContext(context);
      // 验证码


      var _useCode = (0, _index7.default)(),
          text = _useCode.text,
          userGetCode = _useCode.userGetCode;
      // 当前显示城市


      var _useState = (0, _taroTt.useState)(_area.AREABEIJING.name),
          _useState2 = _slicedToArray(_useState, 2),
          areas = _useState2[0],
          setArea = _useState2[1];
      // 选择详细地址信息
      // const [areaInfo, setAreaInfo] = useState<UserLastPublishRecruitArea>({
      //   title: '',
      //   adcode: '',
      //   location: '',
      //   info: ''
      // })
      // 地区需要的值


      var _useState3 = (0, _taroTt.useState)(''),
          _useState4 = _slicedToArray(_useState3, 2),
          adcodes = _useState4[0],
          setAdcodes = _useState4[1];

      var sexList = ['男', '女'];
      // 民族（选择框使用的）

      var _useState5 = (0, _taroTt.useState)([]),
          _useState6 = _slicedToArray(_useState5, 2),
          nationCurrent = _useState6[0],
          setNationCurrent = _useState6[1];
      // 民族


      var _useState7 = (0, _taroTt.useState)([]),
          _useState8 = _slicedToArray(_useState7, 2),
          allNationCurrent = _useState8[0],
          setAllNationCurrent = _useState8[1];
      // 工种


      var _useState9 = (0, _taroTt.useState)([]),
          _useState10 = _slicedToArray(_useState9, 2),
          occupation = _useState10[0],
          setoccupation = _useState10[1];
      // 点击的工种


      var _useState11 = (0, _taroTt.useState)([]),
          _useState12 = _slicedToArray(_useState11, 2),
          clickOccupation = _useState12[0],
          setClickOccupation = _useState12[1];
      // 工种弹框


      var _useState13 = (0, _taroTt.useState)(false),
          _useState14 = _slicedToArray(_useState13, 2),
          showProfession = _useState14[0],
          setShowProssion = _useState14[1];
      // 进来时的电话做验证码判断


      var _useState15 = (0, _taroTt.useState)(''),
          _useState16 = _slicedToArray(_useState15, 2),
          oldTel = _useState16[0],
          setOldTel = _useState16[1];
      // 详情字数


      var _useState17 = (0, _taroTt.useState)(0),
          _useState18 = _slicedToArray(_useState17, 2),
          num = _useState18[0],
          setNum = _useState18[1];
      // 省


      var _useState19 = (0, _taroTt.useState)(''),
          _useState20 = _slicedToArray(_useState19, 2),
          province = _useState20[0],
          setProvince = _useState20[1];
      // 市


      var _useState21 = (0, _taroTt.useState)(''),
          _useState22 = _slicedToArray(_useState21, 2),
          city = _useState22[0],
          setCity = _useState22[1];
      //设置latitude


      var _useState23 = (0, _taroTt.useState)(''),
          _useState24 = _slicedToArray(_useState23, 2),
          lat = _useState24[0],
          setLat = _useState24[1];
      // 设置longitude


      var _useState25 = (0, _taroTt.useState)(''),
          _useState26 = _slicedToArray(_useState25, 2),
          lng = _useState26[0],
          setLng = _useState26[1];
      // 民族索引


      var _useState27 = (0, _taroTt.useState)(0),
          _useState28 = _slicedToArray(_useState27, 2),
          nation_id = _useState28[0],
          setnation_id = _useState28[1];
      // const [occupationsId, setOccupationsId] = useState<string>('')


      var _useState29 = (0, _taroTt.useState)({
        name: '',
        sex: '',
        time: '',
        nation: '',
        work: [],
        workItem: [],
        are: '',
        phone: '',
        code: '',
        details: '',
        classifyTree: [],
        maxClassifyCount: 3,
        classifies: [],
        nationCurrentName: ''
      }),
          _useState30 = _slicedToArray(_useState29, 2),
          formData = _useState30[0],
          setFormData = _useState30[1];
      // 获取数据


      (0, _taroTt.useEffect)(function () {
        // console.log((getPublicList()),'xxxxs');
        console.log(useSelectorItem, 'xxx111');
        var data = JSON.parse(JSON.stringify(useSelectorItem.Personnel));
        if (useSelectorItem.Personnel) {
          console.log(useSelectorItem);
          // 民族
          var nameList = data.nation.length && data.nation.map(function (v) {
            return v.mz_name;
          });
          setNationCurrent(nameList);
          setAllNationCurrent(data.nation);
          // 工种
          setoccupation(data.occupation);
        }
        // 设置城市
        var userLoctionCity = _taroTt2.default.getStorageSync(_store.UserLocationCity);
        if (userLoctionCity) {
          setArea(userLoctionCity.city);
        } else {
          (0, _index4.userAuthLoction)().then(function (res) {
            setArea(res.city);
          }).then(function () {
            setArea(_area.AREABEIJING.name);
          });
        }
        // 设置地址
        // let userLastPublishArea: UserLastPublishRecruitArea = Taro.getStorageSync(UserLastPublishArea)
        // if (userLastPublishArea) {
        //   setAreaInfo(userLastPublishArea)
        // }
        // if (area){
        //   setArea(area)
        // }
        // if (basicsCity){
        //   console.log(basicsCity,'basicsCitybasicsCitybasicsCity')
        //   setFormData({ ...formData, are: basicsCity,});
        // }
        // 获取缓存信息
        var useInfo = _taroTt2.default.getStorageSync('introinfo');
        if (useInfo) {
          console.log(useInfo);
          if (publishArea && location && adcode) {
            return;
          }
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
            workItem: useInfo.occupations ? useInfo.occupations : [],
            // 所在地区s
            are: useInfo.address
          };
          setnation_id(useInfo.nation_id ? useInfo.nation_id > 0 ? useInfo.nation_id - 1 : 0 : 0);
          // console.log(useInfo.occupation,'xxx')
          var arr = JSON.parse(JSON.stringify(useSelectorItem.Personnel.occupation));
          console.log(arr, 'xxx');
          var clckArr = undefined,
              arrList = undefined;
          if (useInfo.occupations_id) {
            clckArr = useInfo.occupations_id.split(",");
            arrList = arr.map(function (v) {
              v.children.map(function (val) {
                clckArr.map(function (item) {
                  if (val.id === item) {
                    val.is_check = true;
                  }
                  return item;
                });
                return val;
              });
              return v;
            });
          }
          setoccupation(arrList);
          // setOccupationsId(useInfo.occupations_id)
          setClickOccupation(clckArr);
          setLat(useInfo.location ? useInfo.location.split(",")[1] : '');
          setLng(useInfo.location ? useInfo.location.split(",")[0] : '');
          setProvince(useInfo.province ? useInfo.province : '');
          setCity(useInfo.city ? useInfo.city : '');
          setOldTel(useInfo.tel ? useInfo.tel : '');
          setFormData(cache);
          setAdcodes(useInfo.ad_code ? useInfo.ad_code : '');
          setNum(useInfo.introduce ? useInfo.introduce.length : 0);
        }
        // const params = {
        //   type:'job',
        //   infoId:''
        // }
        // // 获取工种
        // getPublishRecruitView(params).then(res=>{
        //   console.log(res,'xxxx')
        //   setModel(res);
        // });
        // // 获取民族
        // getUserAuthInfo().then(res=>{
        //   const nameList = res.authData.nation.map(v=>v.mz_name);
        //   setNationCurrent(nameList);
        //   setAllNationCurrent(res.authData.nation);
        // })
      }, []);
      (0, _taroTt.useDidShow)(function () {
        console.log(publishArea, location, adcode);
        // 点击设置地区
        if (publishArea && location && adcode) {
          setLat(location ? location.split(",")[1] : '');
          setLng(location ? location.split(",")[0] : '');
          setAdcodes(adcode);
          setFormData(_extends({}, formData, { are: publishArea }));
          setArea(publishArea);
          // set
        }
      });
      // 验证码

      var _useState31 = (0, _taroTt.useState)(false),
          _useState32 = _slicedToArray(_useState31, 2),
          isCode = _useState32[0],
          setIsCode = _useState32[1];
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
      var Modal = function Modal(content) {
        _taroTt2.default.showModal({
          title: '温馨提示',
          content: content,
          showCancel: false
        });
      };
      var handleSubmit = function handleSubmit() {
        var nation = void 0;
        for (var i = 0; i < allNationCurrent.length; i++) {
          if (allNationCurrent[i].mz_name === formData.nationCurrentName) {
            nation = allNationCurrent[i].mz_id;
          }
        }
        if (!(0, _index8.isVaildVal)(formData.name, 2, 5)) {
          Modal('请填写真实姓名，2-5字，必须含有汉字');
          return;
        }
        if (!formData.sex) {
          (0, _index3.default)('请选择性别');
          return;
        }
        if (!formData.time) {
          (0, _index3.default)('请选择出生日期');
          return;
        }
        if (!nation) {
          (0, _index3.default)('请选择名族');
          return;
        }
        if (!clickOccupation) {
          Modal('请选择您的工种');
          return;
        }
        if (!formData.are) {
          (0, _index3.default)('请选择地区');
          return;
        }
        if (!formData.phone) {
          Modal('请选择您的工种');
          return;
        }
        if (isCode) {
          if (!formData.code) {
            Modal('请正确填写验证码');
            return;
          }
        }
        if (!(0, _index8.isVaildVal)(formData.details, 15, 500)) {
          Modal('请填写真实自我介绍，15-500字，必须含有汉字');
          return;
        }
        var params = {
          code: formData.code,
          username: formData.name,
          tel: formData.phone,
          gender: String(sexList.indexOf(formData.sex) + 1),
          nation: String(nation),
          birthday: formData.time,
          occupations: clickOccupation,
          province: province,
          city: city,
          introduce: formData.details,
          lat: String(lat),
          lng: String(lng),
          address: formData.are,
          adcode: adcodes
        };
        (0, _index.addResumeAction)(params).then(function (res) {
          if (res.errcode == '200') {
            (0, _index9.SubscribeToNews)("resume", function () {
              (0, _index2.SubPopup)({
                tips: res.errmsg,
                callback: function callback() {
                  _taroTt2.default.navigateBack({
                    delta: 1
                  });
                }
              });
            });
          } else {
            (0, _index2.SubPopup)({ tips: res.errmsg });
          }
        });
      };
      var closeProfession = function closeProfession() {
        setShowProssion(false);
      };
      // 点击工种
      var userClickProfession = function userClickProfession(i, k, id, name) {
        console.log(i, k, id, name);
        console.log(clickOccupation, 'clickOccupation');
        if (!occupation) {
          return;
        }
        var works = JSON.parse(JSON.stringify(occupation));
        var check = works[i].children[k].is_check;
        console.log(works);
        if (!check) {
          var max = 3;
          var _num = clickOccupation ? clickOccupation.length : 0;
          if (_num >= max) {
            (0, _index3.default)("\u5DE5\u79CD\u6700\u591A\u53EF\u4EE5\u9009\u62E93\u4E2A");
            return;
          }
        }
        works[i].children[k].is_check = !check;
        var classifyArr = JSON.parse(JSON.stringify(clickOccupation ? clickOccupation : []));
        var newArr = check ? classifyArr.filter(function (item) {
          return item !== id;
        }) : [].concat(_toConsumableArray(classifyArr), [id]);
        var newNameArr = check ? formData.workItem.filter(function (item) {
          return item !== name;
        }) : [].concat(_toConsumableArray(formData.workItem), [name]);
        setFormData(_extends({}, formData, { workItem: newNameArr }));
        setoccupation(works);
        console.log(newArr, 'xxxx');
        setClickOccupation(newArr);
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
        if (!areas) {
          return;
        }
        var url = "/pages/map/resume/index";
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      // 获取当前位置
      var handleLocation = function handleLocation(e) {
        e.stopPropagation();
        _taroTt2.default.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
              //非初始化进入该页面,且未授权   
              _taroTt2.default.showModal({
                title: '是否授权当前位置',
                content: '需要获取您的地理位置，请确认授权，否则将不能为你自动推荐位置',
                success: function success(res) {
                  if (res.cancel) {} else if (res.confirm) {
                    //village_LBS(that);
                    _taroTt2.default.openSetting({
                      success: function success(data) {
                        if (data.authSetting["scope.userLocation"] == true) {
                          _taroTt2.default.showToast({
                            title: '授权成功',
                            icon: 'success',
                            duration: 2000
                          });
                          //再次授权，调用getLocationt的API
                          getLocation();
                        } else {
                          _taroTt2.default.showToast({
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
        (0, _index4.recSerAuthLoction)().then(function (gpsLocation) {
          resetLocationSearch(gpsLocation);
        }).catch(function () {
          // 拒绝授权默认全国
          _taroTt2.default.setStorageSync(_store.UserListChooseCity, _area.AREACHINA);
          // setLists([])
          // setSearchData({ ...searchData, page: 1, area_id: AREACHINA.id })
        });
      };
      var resetLocationSearch = function resetLocationSearch(data) {
        setFormData(_extends({}, formData, { are: data[0].name }));
        setLat(data[0].latitude);
        setLng(data[0].longitude);
        setAdcodes(data[0].regeocodeData.addressComponent.adcode);
      };
      console.log(occupation, 'xxx');
      this.anonymousFunc0 = function (i, k, id, name) {
        return userClickProfession(i, k, id, name);
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
      var anonymousState__temp = formData && formData.workItem.toString();
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
      showProfession && _taroTt.propsManager.set({
        "closeProfession": closeProfession,
        "data": occupation,
        "onClickItem": this.anonymousFunc0,
        "num": 3
      }, $compid__70, $prevCompid__70);
      _taroTt.propsManager.set({
        "num": num
      }, $compid__71, $prevCompid__71);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        $compid__70: $compid__70,
        $compid__71: $compid__71,
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
}(_taroTt2.default.Component);

BasicsPage.$$events = ["anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12"];
BasicsPage.$$componentPath = "pages/resume/basics/index";
BasicsPage.config = { navigationBarTitleText: '基础信息' };
exports.default = BasicsPage;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(BasicsPage, true));

/***/ })

},[["./src/pages/resume/basics/index.tsx","runtime","vendors"]]]);