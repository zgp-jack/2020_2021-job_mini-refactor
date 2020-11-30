(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/recruit/publish/index"],{

/***/ "./src/hooks/publish/recruit.ts":
/*!**************************************!*\
  !*** ./src/hooks/publish/recruit.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = usePublishViewInfo;

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _index2 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _area2 = __webpack_require__(/*! ../../models/area */ "./src/models/area.ts");

var _index3 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index4 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index5 = __webpack_require__(/*! ../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index6 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

var _recruit = __webpack_require__(/*! ../../actions/recruit */ "./src/actions/recruit.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//获取发布招工信息action
function usePublishViewInfo(InitParams) {
  // 获取用户信息
  var login = (0, _redux.useSelector)(function (state) {
    return state.User['login'];
  });
  // 视图显示信息

  var _useState = (0, _taroTt.useState)({
    detail: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      model = _useState2[0],
      setModel = _useState2[1];
  // 是否展开图片上传


  var _useState3 = (0, _taroTt.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showUpload = _useState4[0],
      setShowUpload = _useState4[1];
  // 是否显示工种选择


  var _useState5 = (0, _taroTt.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showProfession = _useState6[0],
      setShowProssion = _useState6[1];
  // 招工详情的字数


  var _useState7 = (0, _taroTt.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      num = _useState8[0],
      setNum = _useState8[1];
  // 备份手机号码


  var _useState9 = (0, _taroTt.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      phone = _useState10[0],
      setPhone = _useState10[1];
  // 备份当前数据 用于强制修改判断


  var _useState11 = (0, _taroTt.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      bakModel = _useState12[0],
      setBakModel = _useState12[1];
  // 设置招工 非高德地址，picker索引数组


  var _useState13 = (0, _taroTt.useState)([0, 0]),
      _useState14 = _slicedToArray(_useState13, 2),
      areaIndex = _useState14[0],
      setAreaIndex = _useState14[1];
  // picker省份


  var _useState15 = (0, _taroTt.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      areaProvincePicker = _useState16[0],
      setAreaProvincePicker = _useState16[1];
  // picker 城市


  var _useState17 = (0, _taroTt.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      areaCityPicker = _useState18[0],
      setAreaCityPicker = _useState18[1];
  // picker 组合数据


  var _useState19 = (0, _taroTt.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      areaPickerData = _useState20[0],
      setAreaPickerData = _useState20[1];
  // piccker 选择 城市名字


  var _useState21 = (0, _taroTt.useState)(''),
      _useState22 = _slicedToArray(_useState21, 2),
      areaPickerName = _useState22[0],
      setAreaPickerName = _useState22[1];
  //获取redux中发布招工区域详细数据


  var areaInfo = (0, _redux.useSelector)(function (state) {
    return state.MyAreaInfo;
  });
  // 获取redux中区域名称数据
  // 获取dispatch分发action
  var dispatch = (0, _redux.useDispatch)();
  // 初始化招工信息
  (0, _taroTt.useEffect)(function () {
    // 判断是否登录，没有登录直接返回
    if (!login) return;
    (0, _index.getPublishRecruitView)(InitParams).then(function (res) {
      // 获取初始化发布招工数据，参数为{ type: type,infoId: id }
      if (res.errcode == 'ok') {
        var InitViewInfo = {
          placeholder: res.placeholder,
          classifies: res.selectedClassifies,
          maxImageCount: res.typeTextArr.maxImageCount,
          maxClassifyCount: res.typeTextArr.maxClassifyCount,
          classifyTree: res.classifyTree,
          title: res.model.title || '',
          address: res.model.address || res.show_address,
          detail: res.model.detail || '',
          infoId: res.model.id || InitParams.infoId,
          type: res.type,
          user_mobile: res.model.user_mobile || res.memberInfo.tel || '',
          code: '',
          user_name: res.model.user_name,
          view_images: res.view_image,
          province_id: res.model.province_id || '',
          city_id: res.model.city_id || '',
          location: res.model.location || '',
          adcode: '',
          county_id: res.model.county_id || '',
          is_check: res.model.hasOwnProperty('is_check') ? res.model.is_check : 1,
          check_fail_msg: res.model.check_fail_msg || ''
        };
        // 数据保存到model中
        setModel(InitViewInfo);
        // 初始化用户区域数据
        initUserAreaInfo(res);
        if (InitViewInfo.is_check == 0) bakModelInfo(InitViewInfo);
        // 将数据保存到redux中的areaInfo中
        dispatch((0, _recruit.setAreaInfo)(_extends({}, areaInfo, { title: InitViewInfo.address })));
        // 保存手机号
        setPhone(InitViewInfo.user_mobile);
        // 如果有上传图片保存图片showUpload中
        if (res.view_image.length) setShowUpload(true);
        // 如果填写有招工详情数据，将填写数据长度保存到num中
        if (InitViewInfo.detail) setNum(InitViewInfo.detail.length);
        // 如果有省市id，那我们想将其保存一份，如果不支持高德地图，这个时候初始化我们的picker城市选择器
        if (_index2.USEGAODEMAPAPI) return;
        initChoosePickerArea(InitViewInfo.province_id, InitViewInfo.city_id);
      } else {
        // 请求数据失败走提示框返回上一页面
        (0, _index4.ShowActionModal)({
          msg: res.errmsg,
          success: function success() {
            _taroTt2.default.navigateBack();
          }
        });
      }
    });
  }, [login]);
  // 用户不支持高德地图，初始化原始的picker选择
  var initChoosePickerArea = function initChoosePickerArea(pid, cid) {
    // 用户不支持高德地图，所以我们调用原始的picker选择 先拿到省市数据将其保存
    var _getCityAreaPicker = (0, _area2.getCityAreaPicker)(),
        province = _getCityAreaPicker.province,
        cities = _getCityAreaPicker.cities;

    setAreaProvincePicker([].concat(_toConsumableArray(province)));
    setAreaCityPicker([].concat(_toConsumableArray(cities)));
    // 如果是修改信息
    if (InitParams.infoId) {
      var _getAreaCurrentArr = (0, _area2.getAreaCurrentArr)(pid, cid),
          pi = _getAreaCurrentArr.pi,
          ci = _getAreaCurrentArr.ci;

      var citydata = JSON.parse(JSON.stringify(cities[pi]));
      setAreaPickerData([[].concat(_toConsumableArray(province)), [].concat(_toConsumableArray(citydata))]);
      setAreaIndex([pi, ci]);
      var pname = province[pi].name;
      var cname = cities[pi][ci].name;
      var name = province[pi].id === cities[pi][ci].id ? pname : pname + "-" + cname;
      setAreaPickerName(name);
    } else {
      // 新发布信息那我们就默认第一个即可
      setAreaPickerData([[].concat(_toConsumableArray(province)), [].concat(_toConsumableArray(cities[0]))]);
    }
  };
  // 初始化用户区域数据
  function initUserAreaInfo(data) {
    //  如果传递参数有infoid代表是修改，保存修改的里面默认区域数据
    if (InitParams.infoId) {
      var area = (0, _area2.getCityInfoById)(data.default_search_name.id);
      dispatch((0, _recruit.setArea)({ name: area.name, ad_name: area.ad_name }));
    } else {
      var userLoctionCity = _taroTt2.default.getStorageSync(_store.UserLocationCity);
      if (userLoctionCity) {
        var _area = (0, _area2.getCityInfo)(userLoctionCity, 1);
        dispatch((0, _recruit.setArea)({ name: _area.name, ad_name: _area.ad_name }));
      } else {
        (0, _index3.userAuthLoction)().then(function (res) {
          var area = (0, _area2.getCityInfo)(res, 1);
          dispatch((0, _recruit.setArea)({ name: area.name, ad_name: area.ad_name }));
        }).catch(function () {
          dispatch((0, _recruit.setArea)({ name: _area2.AREABEIJING.name, ad_name: _area2.AREABEIJING.ad_name }));
        });
      }
    }
    // 如果是修改设置详细发布地址
    if (InitParams.infoId) {
      dispatch((0, _recruit.setAreaInfo)({
        title: data.model.address,
        location: data.model.location,
        info: '',
        adcode: data.model.adcode || ''
      }));
    } else {
      // 获取用户最后发布的区域信息
      var userLastPublishArea = _taroTt2.default.getStorageSync(_store.UserLastPublishArea);
      if (userLastPublishArea) {
        dispatch((0, _recruit.setAreaInfo)(userLastPublishArea));
      }
    }
  }
  function bakModelInfo(model) {
    var data = {
      title: model.title,
      address: model.address,
      detail: model.detail,
      infoId: model.infoId,
      type: model.type,
      user_mobile: model.user_mobile,
      code: model.code,
      user_name: model.user_name,
      province_id: model.province_id,
      city_id: model.city_id,
      location: model.location,
      adcode: '',
      county_id: model.county_id,
      classifies: model.classifies,
      images: model.view_images.map(function (item) {
        return item.url;
      })
    };
    setBakModel(data);
    (0, _index4.ShowActionModal)({
      title: '审核失败',
      msg: model.check_fail_msg
    });
  }
  function getPublishedInfo() {
    if (!model) return;
    var data = {
      title: model.title,
      address: areaInfo.title,
      detail: model.detail,
      infoId: model.infoId,
      type: model.type,
      user_mobile: model.user_mobile,
      code: model.code,
      user_name: model.user_name,
      province_id: model.province_id,
      city_id: model.city_id,
      location: model.location,
      adcode: areaInfo.adcode,
      county_id: model.county_id,
      classifies: model.classifies,
      images: model.view_images.map(function (item) {
        return item.url;
      })
    };
    var mydata = JSON.parse(JSON.stringify(data));
    var imgs = mydata.images.join(',');
    var classifies = mydata.classifies.join(',');
    mydata = _extends({}, mydata, { images: imgs, classifies: classifies, location: areaInfo.location });
    return mydata;
  }
  function userPublishRecruitAction() {
    var data = getPublishedInfo();
    if (!data) return;
    if (!(0, _index6.isVaildVal)(data.title, 3)) {
      (0, _index4.ShowActionModal)({ msg: '请正确输入3~12字中文标题!' });
      return;
    }
    if (!data.classifies.length) {
      (0, _index4.ShowActionModal)({ msg: '请选择您的工种!' });
      return;
    }
    if (!data.province_id && !data.address) {
      (0, _index4.ShowActionModal)({ msg: '请选择您的详细地址!' });
      return;
    }
    if (!(0, _index6.isVaildVal)(data.user_name, 2)) {
      (0, _index4.ShowActionModal)({ msg: '请正确输入2~6字中文姓名!' });
      return;
    }
    if (!(0, _index6.isPhone)(data.user_mobile)) {
      (0, _index4.ShowActionModal)({ msg: '手机号输入有误!' });
      return;
    }
    if (phone != data.user_mobile) {
      if (!data.code) {
        (0, _index4.ShowActionModal)({ msg: '请输入正确的验证码!' });
        return;
      }
    }
    if (!(0, _index6.isVaildVal)(data.detail, 15)) {
      (0, _index4.ShowActionModal)({ msg: '请正确输入15~500字招工详情!' });
      return;
    }
    // 如果是审核失败 那么久必须强制修改
    if (model && model.is_check == 0) {
      var bak = JSON.stringify(bakModel);
      var mydata = JSON.stringify(data);
      if (bak == mydata) {
        (0, _index4.ShowActionModal)({
          title: '审核失败',
          msg: model && model.check_fail_msg
        });
        return;
      }
    }
    // 拼接小地址的描述
    data.address += '@@@@@' + areaInfo.info;
    (0, _index.publishRecruitInfo)(data).then(function (res) {
      if (res.errcode == 'ok') {
        (0, _index5.SubscribeToNews)("recruit", function () {
          (0, _index4.ShowActionModal)({
            msg: res.errmsg,
            success: function success() {
              _taroTt2.default.reLaunch({
                url: '/pages/published/recruit/index'
              });
            }
          });
        });
      } else {
        (0, _index4.ShowActionModal)({
          msg: res.errmsg
        });
      }
    });
  }
  return {
    model: model,
    setModel: setModel,
    showUpload: showUpload,
    setShowUpload: setShowUpload,
    showProfession: showProfession,
    setShowProssion: setShowProssion,
    userPublishRecruitAction: userPublishRecruitAction,
    num: num,
    setNum: setNum,
    phone: phone,
    setPhone: setPhone,
    areaIndex: areaIndex,
    setAreaIndex: setAreaIndex,
    areaProvincePicker: areaProvincePicker,
    areaCityPicker: areaCityPicker,
    areaPickerData: areaPickerData,
    setAreaPickerData: setAreaPickerData,
    areaPickerName: areaPickerName,
    setAreaPickerName: setAreaPickerName
  };
}

/***/ }),

/***/ "./src/pages/recruit/publish/index.scss":
/*!**********************************************!*\
  !*** ./src/pages/recruit/publish/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/recruit/publish/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/recruit/publish/index.tsx ***!
  \*********************************************/
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

var _index = __webpack_require__(/*! ../../../hooks/code/index */ "./src/hooks/code/index.ts");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _recruit = __webpack_require__(/*! ../../../hooks/publish/recruit */ "./src/hooks/publish/recruit.ts");

var _recruit2 = _interopRequireDefault(_recruit);

var _index4 = __webpack_require__(/*! ../../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index7 = _interopRequireDefault(_index6);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./index.scss */ "./src/pages/recruit/publish/index.scss");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishRecruit = function (_Taro$Component) {
  _inherits(PublishRecruit, _Taro$Component);

  function PublishRecruit() {
    _classCallCheck(this, PublishRecruit);

    var _this = _possibleConstructorReturn(this, (PublishRecruit.__proto__ || Object.getPrototypeOf(PublishRecruit)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '发布招工',
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: "dark"
    };

    _this.$usedState = ["anonymousState__temp", "model", "$compid__35", "$compid__36", "showProfession", "USEGAODEMAPAPI", "areaInfo", "areaIndex", "areaPickerData", "areaPickerName", "phone", "showUpload", "text", "num", "TEXTAREAMAXLENGTH"];
    _this.customComponents = ["Auth", "Profession", "ImageView"];
    return _this;
  }

  _createClass(PublishRecruit, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(PublishRecruit.prototype.__proto__ || Object.getPrototypeOf(PublishRecruit.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__35"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__35 = _genCompid2[0],
          $compid__35 = _genCompid2[1];

      var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "$compid__36"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__36 = _genCompid4[0],
          $compid__36 = _genCompid4[1];
      // 获取路由参数


      var router = (0, _taroTt.useRouter)();
      var id = router.params.id || '';
      var type = 'job';
      var InitParams = { type: type, infoId: id };
      //获取redux中发布招工区域详细数据
      var areaInfo = (0, _redux.useSelector)(function (state) {
        return state.MyAreaInfo;
      });
      // 初始化当前信息

      var _usePublishViewInfo = (0, _recruit2.default)(InitParams),
          model = _usePublishViewInfo.model,
          setModel = _usePublishViewInfo.setModel,
          showUpload = _usePublishViewInfo.showUpload,
          setShowUpload = _usePublishViewInfo.setShowUpload,
          showProfession = _usePublishViewInfo.showProfession,
          setShowProssion = _usePublishViewInfo.setShowProssion,
          userPublishRecruitAction = _usePublishViewInfo.userPublishRecruitAction,
          num = _usePublishViewInfo.num,
          setNum = _usePublishViewInfo.setNum,
          phone = _usePublishViewInfo.phone,
          areaIndex = _usePublishViewInfo.areaIndex,
          areaPickerData = _usePublishViewInfo.areaPickerData,
          areaCityPicker = _usePublishViewInfo.areaCityPicker,
          areaProvincePicker = _usePublishViewInfo.areaProvincePicker,
          setAreaPickerData = _usePublishViewInfo.setAreaPickerData,
          setAreaIndex = _usePublishViewInfo.setAreaIndex,
          areaPickerName = _usePublishViewInfo.areaPickerName,
          setAreaPickerName = _usePublishViewInfo.setAreaPickerName;
      // 使用自定义验证码hook


      var _useCode = (0, _index2.default)(),
          text = _useCode.text,
          userGetCode = _useCode.userGetCode;
      // 切换图片上传显示隐藏


      var changeShowUpload = function changeShowUpload() {
        setShowUpload(!showUpload);
      };
      var showProfessionAction = function showProfessionAction() {
        setShowProssion(true);
      };
      var closeProfession = function closeProfession() {
        setShowProssion(false);
      };
      // 用户填写表单
      var userEnterFrom = function userEnterFrom(e, type) {
        var value = e.detail.value;
        var state = JSON.parse(JSON.stringify(model));
        state[type] = value;
        setModel(_extends({}, state));
      };
      // 选择地址
      var userChooseArea = function userChooseArea() {
        if (!model) {
          return;
        }
        var url = "/pages/map/recruit/index?id=" + id;
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      // 点击工种
      var userClickProfession = function userClickProfession(i, k, id) {
        if (!model) {
          return;
        }
        var works = JSON.parse(JSON.stringify(model.classifyTree));
        var check = works[i].children[k].is_check;
        if (!check) {
          var max = model.maxClassifyCount;
          var _num = model.classifies.length;
          if (_num >= max) {
            (0, _index7.default)('工种最多可以选择' + max + '个');
            return;
          }
        }
        works[i].children[k].is_check = !check;
        var classifyArr = JSON.parse(JSON.stringify(model.classifies));
        var newArr = check ? classifyArr.filter(function (item) {
          return item !== id;
        }) : [].concat(_toConsumableArray(classifyArr), [id]);
        setModel(_extends({}, model, { classifyTree: works, classifies: newArr }));
      };
      // 用户上传图片
      var userUploadImg = function userUploadImg() {
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

        (0, _index5.default)().then(function (res) {
          var imageItem = {
            url: res.url,
            httpurl: res.httpurl
          };
          if (model) {
            if (i === -1) {
              setModel(_extends({}, model, { view_images: [].concat(_toConsumableArray(model.view_images), [imageItem]) }));
            } else {
              model.view_images[i] = imageItem;
              setModel(_extends({}, model));
            }
          }
        });
      };
      // 用户删除图片
      var userDelImg = function userDelImg(i) {
        if (!model) {
          return;
        }
        var bakModel = JSON.parse(JSON.stringify(model));
        bakModel.view_images.splice(i, 1);
        setModel(bakModel);
      };
      // 用户确定地址picker
      var userChangePickerArea = function userChangePickerArea(e) {
        var pid = areaProvincePicker[e.detail.value[0]].id;
        var cid = areaPickerData[1][e.detail.value[1]].id;
        if (model) {
          setModel(_extends({}, model, { province_id: +pid, city_id: +cid }));
        }
        var name = pid === cid ? areaProvincePicker[e.detail.value[0]].name : areaProvincePicker[e.detail.value[0]].name + "-" + areaPickerData[1][e.detail.value[1]].name;
        setAreaPickerName(name);
      };
      // 用户更改了地址picker
      var userChangeColumn = function userChangeColumn(e) {
        var column = e.detail.column;
        var value = e.detail.value;
        if (column === 0) {
          var data = JSON.parse(JSON.stringify(areaPickerData));
          data[1] = areaCityPicker[value];
          setAreaPickerData(data);
          setAreaIndex([value, 0]);
        } else {
          setAreaIndex([areaIndex[0], value]);
        }
      };
      this.anonymousFunc0 = function (i, k, id) {
        return userClickProfession(i, k, id);
      };
      this.anonymousFunc1 = function (e) {
        return userEnterFrom(e, 'title');
      };
      this.anonymousFunc2 = function () {
        return showProfessionAction();
      };
      this.anonymousFunc3 = function () {
        return userChooseArea();
      };
      this.anonymousFunc4 = function (e) {
        return userChangePickerArea(e);
      };
      this.anonymousFunc5 = function (e) {
        return userChangeColumn(e);
      };
      this.anonymousFunc6 = function (e) {
        return userEnterFrom(e, 'user_name');
      };
      this.anonymousFunc7 = function (e) {
        return userEnterFrom(e, 'user_mobile');
      };
      this.anonymousFunc8 = function (e) {
        return userEnterFrom(e, 'code');
      };
      this.anonymousFunc9 = function () {
        return userGetCode(model.user_mobile);
      };
      var anonymousState__temp = !showProfession ? (0, _classnames2.default)({
        'publish-textarea': true,
        'hide': showProfession
      }) : null;
      this.anonymousFunc10 = function (e) {
        userEnterFrom(e, 'detail');
        setNum(e.detail.value.length);
        return false;
      };
      this.anonymousFunc11 = function () {
        return changeShowUpload();
      };
      this.anonymousFunc12 = function () {
        return userPublishRecruitAction();
      };
      showProfession && _taroTt.propsManager.set({
        "closeProfession": closeProfession,
        "data": model && model.classifyTree,
        "onClickItem": this.anonymousFunc0,
        "num": 3
      }, $compid__35, $prevCompid__35);
      showUpload && model && _taroTt.propsManager.set({
        "images": model.view_images,
        "max": model.maxImageCount,
        "userUploadImg": userUploadImg,
        "userDelImg": userDelImg
      }, $compid__36, $prevCompid__36);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        model: model,
        $compid__35: $compid__35,
        $compid__36: $compid__36,
        showProfession: showProfession,
        USEGAODEMAPAPI: _index3.USEGAODEMAPAPI,
        areaInfo: areaInfo,
        areaIndex: areaIndex,
        areaPickerData: areaPickerData,
        areaPickerName: areaPickerName,
        phone: phone,
        showUpload: showUpload,
        text: text,
        num: num,
        TEXTAREAMAXLENGTH: _index3.TEXTAREAMAXLENGTH
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

  return PublishRecruit;
}(_taroTt2.default.Component);

PublishRecruit.$$events = ["anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12"];
PublishRecruit.$$componentPath = "pages/recruit/publish/index";
PublishRecruit.config = { navigationBarTitleText: '发布招工', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = PublishRecruit;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(PublishRecruit, true));

/***/ })

},[["./src/pages/recruit/publish/index.tsx","runtime","vendors"]]]);