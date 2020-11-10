(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/resume/newJobs/index"],{

/***/ "./src/actions/personnel.ts":
/*!**********************************!*\
  !*** ./src/actions/personnel.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPersonnelAction = setPersonnelAction;
exports.getPersonnel = getPersonnel;

var _personnel = __webpack_require__(/*! ../constants/personnel */ "./src/constants/personnel.ts");

function setPersonnelAction(data) {
  return {
    type: _personnel.SETDATA,
    data: data
  };
}
function getPersonnel() {
  return {
    type: _personnel.GETDATA
  };
}

/***/ }),

/***/ "./src/actions/resume.ts":
/*!*******************************!*\
  !*** ./src/actions/resume.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setResumeAction = setResumeAction;
exports.getResumeAction = getResumeAction;

var _resume = __webpack_require__(/*! ../constants/resume */ "./src/constants/resume.ts");

function setResumeAction(data) {
  return {
    type: _resume.SETLIST,
    data: data
  };
}
function getResumeAction() {
  return {
    type: _resume.GETLIST
  };
}

/***/ }),

/***/ "./src/pages/resume/newJobs/index.scss":
/*!*********************************************!*\
  !*** ./src/pages/resume/newJobs/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/newJobs/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/resume/newJobs/index.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.context = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index3 = _interopRequireDefault(_index2);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index4 = __webpack_require__(/*! ../../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _index7 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _personnel = __webpack_require__(/*! ../../../actions/personnel */ "./src/actions/personnel.ts");

var _resume = __webpack_require__(/*! ../../../actions/resume */ "./src/actions/resume.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/newJobs/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var context = exports.context = (0, _taroTt.createContext)({});

var NewJob = function (_Taro$Component) {
  _inherits(NewJob, _Taro$Component);

  function NewJob() {
    _classCallCheck(this, NewJob);

    var _this = _possibleConstructorReturn(this, (NewJob.__proto__ || Object.getPrototypeOf(NewJob)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '找活名片'
    };

    _this.$usedState = ["anonymousState__temp", "data", "loopArray85", "loopArray86", "loopArray87", "loopArray88", "loopArray89", "loopArray90", "$compid__72", "$compid__73", "$compid__74", "showtop", "showcomplete", "IMGCDNURL", "showtopone", "showpassre", "passre", "nopassre", "index", "checkone", "headerimg", "authenticationimg", "certificate_show", "age", "sex", "checkonef", "showskill", "intro", "introne", "ressonone", "selfintrone", "checktwo", "selfintro", "projectlength", "project_count", "project", "skilllength", "skillbooksone", "checkfourf", "recData", "selectdata", "proStatus", "popup"];
    _this.anonymousFunc16Map = {};
    _this.anonymousFunc17Map = {};
    _this.anonymousFunc21Map = {};
    _this.anonymousFunc22Map = {};
    _this.customComponents = ["Auth", "CollectionRecruitList", "AtModal"];
    return _this;
  }

  _createClass(NewJob, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(NewJob.prototype.__proto__ || Object.getPrototypeOf(NewJob.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__72"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__72 = _genCompid2[0],
          $compid__72 = _genCompid2[1];

      var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "$compid__73"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__73 = _genCompid4[0],
          $compid__73 = _genCompid4[1];

      var _genCompid5 = (0, _taroTt.genCompid)(__prefix + "$compid__74"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__74 = _genCompid6[0],
          $compid__74 = _genCompid6[1];

      var dispatch = (0, _redux.useDispatch)();
      // 获取用户是否登录
      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });

      var _useState = (0, _taroTt.useState)({
        info: {
          progress: '0',
          view_num: '0',
          sort_flag: '',
          username: '',
          nation: '',
          tel: '',
          address: '',
          introduce: '',
          note: '',
          is_end: '',
          check: '',
          uuid: '',
          user_uuid: '',
          city: '',
          occupations_id: '',
          occupations: []
        },
        resume_top: {
          is_top: 0,
          has_top: 0,
          top_provinces_str: [],
          start_time_str: 0,
          end_time_str: '',
          top_tips_string: '',
          is_show_tips: 0,
          end_time: ''
        },
        content: {
          show_tips: 0,
          check_tips_string: ''
        },
        introduces: {
          experience: '',
          type_str: '未填写',
          hometown: '未填写',
          prof_degree_str: '未填写',
          number_people: '未填写',
          tags: []
        },
        fail_certificate: 0,
        certificate_count: 0,
        fail_project: 0,
        popup_text: [],
        top_status: []
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];
      //显示分享还是完善基础资料


      var _useState3 = (0, _taroTt.useState)(true),
          _useState4 = _slicedToArray(_useState3, 2),
          showcomplete = _useState4[0],
          setShowcomplete = _useState4[1];
      // 是否有个人资料


      var _useState5 = (0, _taroTt.useState)(false),
          _useState6 = _slicedToArray(_useState5, 2),
          showtopone = _useState6[0],
          setShowtopone = _useState6[1];
      // 


      var _useState7 = (0, _taroTt.useState)(true),
          _useState8 = _slicedToArray(_useState7, 2),
          passre = _useState8[0],
          setPassre = _useState8[1];
      // 用于判断我的工作状态


      var _useState9 = (0, _taroTt.useState)(true),
          _useState10 = _slicedToArray(_useState9, 2),
          nopassre = _useState10[0],
          setNopassre = _useState10[1];
      // 选择工作状态


      var _useState11 = (0, _taroTt.useState)(false),
          _useState12 = _slicedToArray(_useState11, 2),
          showpassre = _useState12[0],
          setShowpassre = _useState12[1];

      var _useState13 = (0, _taroTt.useState)(0),
          _useState14 = _slicedToArray(_useState13, 2),
          index = _useState14[0],
          setIndex = _useState14[1];

      var _useState15 = (0, _taroTt.useState)([]),
          _useState16 = _slicedToArray(_useState15, 2),
          selectdata = _useState16[0],
          setSelectdata = _useState16[1];

      var _useState17 = (0, _taroTt.useState)(false),
          _useState18 = _slicedToArray(_useState17, 2),
          showtop = _useState18[0],
          setShowtop = _useState18[1];
      // 基础信息状态


      var _useState19 = (0, _taroTt.useState)(false),
          _useState20 = _slicedToArray(_useState19, 2),
          checkone = _useState20[0],
          setCheckone = _useState20[1];

      var _useState21 = (0, _taroTt.useState)(''),
          _useState22 = _slicedToArray(_useState21, 2),
          headerimg = _useState22[0],
          setHeaderimg = _useState22[1];

      var _useState23 = (0, _taroTt.useState)(''),
          _useState24 = _slicedToArray(_useState23, 2),
          authenticationimg = _useState24[0],
          setAuthenticationimg = _useState24[1];
      // 基础信息图片


      var _useState25 = (0, _taroTt.useState)(0),
          _useState26 = _slicedToArray(_useState25, 2),
          certificate_show = _useState26[0],
          setCertificate_show = _useState26[1];
      // 性别


      var _useState27 = (0, _taroTt.useState)('未填写'),
          _useState28 = _slicedToArray(_useState27, 2),
          sex = _useState28[0],
          setSex = _useState28[1];
      // 年纪


      var _useState29 = (0, _taroTt.useState)(''),
          _useState30 = _slicedToArray(_useState29, 2),
          age = _useState30[0],
          setAge = _useState30[1];
      // 


      var _useState31 = (0, _taroTt.useState)(''),
          _useState32 = _slicedToArray(_useState31, 2),
          checkonef = _useState32[0],
          setCheckonef = _useState32[1];
      // 工种样式修改


      var _useState33 = (0, _taroTt.useState)(true),
          _useState34 = _slicedToArray(_useState33, 2),
          showskill = _useState34[0],
          setShowskill = _useState34[1];
      // const [checkstatus, setCheckstatus] =useState<boolean>(true)
      // 自我介绍样式判断


      var _useState35 = (0, _taroTt.useState)(true),
          _useState36 = _slicedToArray(_useState35, 2),
          intro = _useState36[0],
          setIntro = _useState36[1];
      // 自我介绍样式判断


      var _useState37 = (0, _taroTt.useState)(false),
          _useState38 = _slicedToArray(_useState37, 2),
          introne = _useState38[0],
          serIntrone = _useState38[1];
      // 显示没有数据完善人员信息


      var _useState39 = (0, _taroTt.useState)(true),
          _useState40 = _slicedToArray(_useState39, 2),
          selfintro = _useState40[0],
          setselfintro = _useState40[1];
      // 个人资料审核


      var _useState41 = (0, _taroTt.useState)(false),
          _useState42 = _slicedToArray(_useState41, 2),
          ressonone = _useState42[0],
          setRessonone = _useState42[1];
      // const [showdetail, setShowdetail ] = useState<boolean>(true)
      // 右边图片审核中


      var _useState43 = (0, _taroTt.useState)(false),
          _useState44 = _slicedToArray(_useState43, 2),
          checktwo = _useState44[0],
          setChecktwo = _useState44[1];
      // 是否显示人员信息


      var _useState45 = (0, _taroTt.useState)(false),
          _useState46 = _slicedToArray(_useState45, 2),
          selfintrone = _useState46[0],
          setSelfintrone = _useState46[1];
      // 设置项目长度


      var _useState47 = (0, _taroTt.useState)(0),
          _useState48 = _slicedToArray(_useState47, 2),
          projectlength = _useState48[0],
          setProjectlength = _useState48[1];
      // 已有项目总长度


      var _useState49 = (0, _taroTt.useState)(0),
          _useState50 = _slicedToArray(_useState49, 2),
          project_count = _useState50[0],
          setProject_count = _useState50[1];
      // 项目


      var _useState51 = (0, _taroTt.useState)([]),
          _useState52 = _slicedToArray(_useState51, 2),
          project = _useState52[0],
          setProject = _useState52[1];
      // 技能证书长度


      var _useState53 = (0, _taroTt.useState)(0),
          _useState54 = _slicedToArray(_useState53, 2),
          skilllength = _useState54[0],
          setSkilllength = _useState54[1];
      // 判断是修改还是新增技能


      var _useState55 = (0, _taroTt.useState)('0'),
          _useState56 = _slicedToArray(_useState55, 2),
          checkfourf = _useState56[0],
          setCheckfourf = _useState56[1];
      // 传递修改技能证书
      // const [skillData, setSkillData] = useState<any[]>()
      // 传递修改项目经验
      // const [projectData, setProjectData] = useState<any[]>()
      // 技能证书


      var _useState57 = (0, _taroTt.useState)([]),
          _useState58 = _slicedToArray(_useState57, 2),
          skillbooksone = _useState58[0],
          setSkillbooksone = _useState58[1];
      // 推荐的列表


      var _useState59 = (0, _taroTt.useState)([]),
          _useState60 = _slicedToArray(_useState59, 2),
          recData = _useState60[0],
          setRecData = _useState60[1];
      // 设置默认地址


      var _useState61 = (0, _taroTt.useState)(_area.AREABEIJING.name),
          _useState62 = _slicedToArray(_useState61, 2),
          area = _useState62[0],
          _setArea = _useState62[1];
      // 工作状态
      // const [isOpened, setIsOpened] = useState<boolean>(false)


      var _useState63 = (0, _taroTt.useState)(),
          _useState64 = _slicedToArray(_useState63, 2),
          resumeTop = _useState64[0],
          setResumeTop = _useState64[1];
      // 工作状态列表


      var _useState65 = (0, _taroTt.useState)(),
          _useState66 = _slicedToArray(_useState65, 2),
          statusList = _useState66[0],
          setStatusList = _useState66[1];
      // 共用数据通过content传递给后面的子页面
      // const [publicList, setPublicList] = useState<resumesGetData>({
      //   gender: [],
      //   label: [],
      //   nation: [],
      //   occupation: [],
      //   prof_degree: [],
      //   type: []
      // })
      // // 人员信息
      // const [userInfo, setUserInfo] = useState<introducesType>({
      //   experience: '',
      //   type_str: '',
      //   hometown: '',
      //   prof_degree_str: '',
      //   number_people: '',
      //   tags: [],
      // })
      // 选择详细地址信息
      // const [areaInfo, setAreaInfo] = useState<UserLastPublishRecruitArea>({
      //   title: '',
      //   adcode: '',
      //   location: '',
      //   info: ''
      // })
      //设置基础信息所在区域
      // const [basicsCity, setBasicsCity] = useState<string>('')
      // 修改还是更多项目经验


      var _useState67 = (0, _taroTt.useState)('0'),
          _useState68 = _slicedToArray(_useState67, 2),
          proStatus = _useState68[0],
          setProStatus = _useState68[1];
      // 提示内容


      var _useState69 = (0, _taroTt.useState)(''),
          _useState70 = _slicedToArray(_useState69, 2),
          popup = _useState70[0],
          setPopup = _useState70[1];
      // 提示弹窗


      var _useState71 = (0, _taroTt.useState)(false),
          _useState72 = _slicedToArray(_useState71, 2),
          tips = _useState72[0],
          setTips = _useState72[1];
      // 置顶提示


      var _useState73 = (0, _taroTt.useState)(false),
          _useState74 = _slicedToArray(_useState73, 2),
          toppingModal = _useState74[0],
          setToppingModal = _useState74[1];
      // 置顶的当前索引


      var _useState75 = (0, _taroTt.useState)(0),
          _useState76 = _slicedToArray(_useState75, 2),
          indextop = _useState76[0],
          setIndextop = _useState76[1];

      var _useState77 = (0, _taroTt.useState)(0),
          _useState78 = _slicedToArray(_useState77, 2),
          frequency = _useState78[0],
          setFrequency = _useState78[1];

      (0, _taroTt.useDidShow)(function () {
        if (!login) {
          return;
        }
        if (frequency > 0) {
          getDataList();
        }
      });
      (0, _taroTt.useEffect)(function () {
        if (!login) {
          return;
        }
        getDataList();
      }, [login]);
      var getDataList = function getDataList() {
        (0, _index.resumeListAction)().then(function (res) {
          if (res.errcode == 200) {
            // 存redux给子页面用
            dispatch((0, _resume.setResumeAction)(res.data));
            // 没有登陆需要验证，然后登陆后，大于0就只在useDidShow发请求
            setFrequency(1);
            // 有info.uuid就去掉完善资料
            if (res.data.info.uuid) {
              setShowtop(true);
            }
            _taroTt2.default.setStorageSync("introinfo", res.data.info);
            setData({ info: res.data.info, resume_top: res.data.resume_top, content: res.data.content, introduces: res.data.introduces, certificate_count: res.data.certificate_count, fail_certificate: res.data.fail_certificate, fail_project: res.data.fail_project, popup_text: res.data.popup_text, top_status: res.data.top_status });
            var list = res.data.status.map(function (v) {
              return v.name;
            });
            // 置顶当前索引
            if (res.data.resume_top.is_top == 1) {
              setIndextop(0);
            } else if (res.data.resume_top.is_top == 0) {
              setIndextop(1);
            }
            // 设置我的工作状态
            if (res.data.info.is_end === '2') {
              setIndex(1);
            }
            setResumeTop(res.data.resume_top);
            // 都通过的情况下，并且正在招人，并且未置顶，提示前往置顶，暂不提示15天内不再提示
            // 没有未通过并且正在找，当前状态未置并且不再15天内
            // 获取存储时间
            var toppingTime = _taroTt2.default.getStorageSync('toptimer');
            var newTime = new Date().getTime();
            var failProject = '0';
            res.data.project.map(function (v) {
              failProject = v.check;
              if (v.check === '0') {
                failProject = '0';
                return;
              }
            });
            var failCertificate = '0';
            res.data.certificates.map(function (v) {
              failCertificate = v.check;
              if (v.check === '0') {
                failCertificate = '0';
                return;
              }
            });
            var onoff = res.data.resume_top.is_top !== 0 && res.data.resume_top.is_top !== 1 || res.data.resume_top.has_top == 0;
            var top_onoff = res.data.info.check == '0' || res.data.introduces.check == '0' || failProject === '0' || failCertificate === '0';
            var day = (newTime - toppingTime) / 86400000;
            // 没有置顶时间 ，没有审核失败， 有uuid 就是资料完善了的，
            if (!toppingTime && !top_onoff && res.data.info.uuid && onoff && res.data.info.check !== '1' && index === 0) {
              setToppingModal(true);
              _taroTt2.default.setStorageSync("toptimer", newTime);
            }
            {
              if (day >= 15 && !top_onoff && res.data.info.uuid && onoff && res.data.info.check !== '1' && index === 0) {
                setToppingModal(true);
                _taroTt2.default.setStorageSync("toptimer", newTime);
              }
            }
            // 设置城市
            var userLoctionCity = _taroTt2.default.getStorageSync(_store.UserLocationCity);
            _setArea(userLoctionCity.city);
            if (userLoctionCity) {
              _setArea(userLoctionCity.city);
            } else {
              (0, _index7.userAuthLoction)().then(function (res) {
                _setArea(res.city);
              }).then(function () {
                _setArea(_area.AREABEIJING.name);
              });
            }
            //状态列表
            setStatusList(res.data.status);
            //给子页面设置值用reduxszz
            // console.log(res.data.introduces,'res.data.introduces')
            // dispatch(setPersonnelAction(res.data.introduces))
            // setUserInfo(res.data.introduces)
            setSelectdata(list);
            if (res.data.info.uuid && res.data.info.is_introduces != '0' && res.data.project.length != 0 && res.data.certificates.length != 0) {
              setShowcomplete(false);
            } else {
              setShowcomplete(true);
            }
            if (res.data.info.uuid) {
              setShowtopone(true);
            } else {
              setShowtopone(false);
            }
            setShowpassre(true);
            // 设置提示的内容
            var popupData = '';
            for (var i = 0; i < res.data.popup_text.length; i++) {
              if (res.data.popup_text.length - 1 == i) {
                popupData += res.data.popup_text[i];
              } else {
                popupData += res.data.popup_text[i] + "、";
              }
            }
            setPopup(popupData);
            // 判断技能证书全部遍历一次有失败就显示
            var skillType = undefined;
            for (var _i = 0; _i < res.data.certificates.length; _i++) {
              if (res.data.certificates[_i].check == 1) {
                skillType = res.data.certificates[_i].check.check;
                setCheckfourf(res.data.certificates[_i].check.check);
              }
              if (res.data.certificates[_i].check == 0) {
                skillType = res.data.certificates[_i].check.check;
                setCheckfourf(res.data.certificates[_i].check.check);
                break;
              }
              if (res.data.certificates[_i].check == 2) {
                skillType = res.data.certificates[_i].check.check;
                setCheckfourf(res.data.certificates[_i].check.check);
              }
            }
            // 项目经验遍历有失败就显示修改
            var projectType = undefined;
            for (var _i2 = 0; _i2 < res.data.project.length; _i2++) {
              if (res.data.project[_i2].check == 1) {
                projectType = res.data.project[_i2].check.check;
                setProStatus(res.data.project[_i2].check.check);
              }
              if (res.data.project[_i2].check == 0) {
                projectType = res.data.project[_i2].check.check;
                setProStatus(res.data.project[_i2].check.check);
                break;
              }
              if (res.data.project[_i2].check == 2) {
                projectType = res.data.project[_i2].check.check;
                setProStatus(res.data.project[_i2].check.check);
              }
            }
            // res.data.project.map((v) => {
            //   if (v.check === '1') {
            //     setProStatus(v.check);
            //     projectType = v.check;
            //     return;
            //   }
            //   projectType = v.check;
            //   setProStatus(v.check);
            // })
            console.log(projectType, 'projectType');
            // 设置提示弹窗
            if (skillType === '0' || projectType === '0' || res.data.info.check === '0' || res.data.introduces.check === '0') {
              setTips(true);
            }
            // 人员信息
            if (res.data.is_introduces == '1') {
              setselfintro(false);
              setSelfintrone(true);
            } else if (res.data.is_introduces == '0') {
              setselfintro(true);
              setSelfintrone(false);
            }
            if (data.info.check != '0' || res.data.introduces.check != '0') {
              setRessonone(false);
              setPassre(true);
              setNopassre(true);
            }
            if (data.info.check == '0' || res.data.introduces.check == '0') {
              setRessonone(true);
              setPassre(false);
              setNopassre(true);
            }
            if (data.info.check == '1' || res.data.introduces.check == '1') {
              setRessonone(false);
              setPassre(true);
              setNopassre(false);
            }
            // if (res.data.info.check == "0") {
            //   setPassre(false)
            //   setRessonone(false)
            // }
            // if (res.data.info.check == "1") {
            //   setNopassre(false)
            //   setRessonone(false)
            // }
            if (res.data.info.check == '1') {
              setCheckone(true);
              // setChecktwo(true)
            } else {
              setCheckone(false);
              // setChecktwo(false)
            }
            setChecktwo(res.data.introduces.check == '1' ? true : false);
            if (res.data.certificates.length === 0) {
              setSkilllength(0);
            } else {
              setSkilllength(res.data.certificates.length >= 1 ? res.data.certificates.length : 0);
            }
            // if (showdetail) {
            //   if (res.data.info.check == "0") {
            //     setRessonone(true);
            //   }
            //   setShowdetail(false);
            // }
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
            // 修改技能证书设置redux
            // console.log(res.data.certificates,'res.data.certificatess')
            // dispatch(setSkillDataAction(res.data.certificates))
            // setSkillData(res.data.certificates)
            // 修改项目经验设置redux
            // console.log(res.data.project,'vres.data.project')
            // dispatch(setProjectDataAction(res.data.project))
            // setProjectData(res.data.project)
            setProject_count(res.data.project_count);
            setIntro(false);
            serIntrone(true);
            setHeaderimg(res.data.info.headerimg);
            setShowskill(false);
            setCheckonef(res.data.info.check ? res.data.info.check : '');
            // 基础信息图片
            setAuthenticationimg(res.data.info.authentication);
            // 基础信息图片
            setCertificate_show(res.data.info.certificate_show);
            setSex(res.data.info.gender == "1" ? "男" : "女");
            var date = new Date();
            var dateo = date.getTime();
            var dateone = new Date(dateo);
            if (res.data.info.birthday) {
              if (dateone.getFullYear() - (res.data.info.birthday.split("-")[0] - 0) == 0) {
                setAge('');
              } else {
                setAge(dateone.getFullYear() - (res.data.info.birthday.split("-")[0] - 0) + "岁");
              }
            }
            // 推荐列表
            var paramsList = {
              area_id: res.data.info.city,
              classify_id: res.data.info.occupations_id,
              job_ids: '',
              page: 1,
              type: 1
            };
            (0, _index.jobRecommendListAction)(paramsList).then(function (res) {
              setRecData(res.data.list);
            });
          } else {
            _taroTt2.default.showModal({
              title: '温馨提示',
              content: res.errmsg,
              showCancel: false
            });
            return;
          }
        });
        // 给子页面提供公用数据
        (0, _index.resumesGetDataAction)().then(function (res) {
          // setPublicList(res);
          // console.log(res,'setPublicListAction')
          dispatch((0, _personnel.setPersonnelAction)(res));
        });
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      var handleTopping = function handleTopping() {
        if (!showtop) {
          // 跳去基础信息页面
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: data.resume_top.top_tips_string,
            confirmText: "\u53BB\u6DFB\u52A0",
            success: function success(res) {
              if (res.confirm) {
                // 跳转
                _taroTt2.default.navigateTo({
                  url: '/pages/clients-looking-for-work/essential-information/esinformation'
                });
                // that.toperfect()
              } else if (res.cancel) {}
            }
          });
          return;
        } else if (data.resume_top.is_show_tips === 1) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: data.resume_top.top_tips_string,
            showCancel: false
          });
          return;
        } else {
          // 置顶
          _taroTt2.default.navigateTo({
            url: "/pages/topping/index?rec=1"
          });
        }
      };
      // 需要传递的值
      var value = {
        area: area,
        setArea: function setArea(city) {
          return _setArea(city);
        },
        // setAreaInfo: (item: UserLastPublishRecruitArea) => setAreaInfo(item),
        // setPublishArea: (val: string) => {
        // console.log(areaInfo,'areaInfo');
        // if (!model) return
        // setModel({ ...model, address: val })
        // setBasicsCity(val);
        // },
        // userInfo: userInfo,
        // 公用值
        // publicList: publicList,
        // 修改技能证书
        // skillData: skillData,
        // 修改项目经验
        // projectData: projectData,
        // 置顶数据
        resumeTop: resumeTop
      };
      //设置工作状态
      var handleStatus = function handleStatus() {
        if (data.info.check === '2') {
          var sheetList = statusList.map(function (v) {
            return v.name;
          });
          var sheetListId = statusList.map(function (v) {
            return v.id;
          });
          _taroTt2.default.showActionSheet({
            itemList: sheetList,
            success: function success(res) {
              if (index == res.tapIndex) {
                return;
              }
              setIndex(res.tapIndex);
              var type = sheetListId[res.tapIndex];
              var params = {
                type: type,
                resume_uuid: data.info.uuid
              };
              (0, _index.resumesEditEndAction)(params).then(function (res) {
                if (res.errcode == 'ok') {
                  _taroTt2.default.showModal({
                    title: '温馨提示',
                    content: res.errmsg,
                    showCancel: false
                  });
                } else {
                  _taroTt2.default.showModal({
                    title: '温馨提示',
                    content: res.errmsg,
                    showCancel: false
                  });
                }
              });
            },
            fail: function fail(res) {
              console.log(res);
            }
          });
        } else if (data.info.check === '1') {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: "审核中请耐心等待",
            showCancel: false
          });
          return;
        } else if (data.info.check === '0') {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: "审核未通过，请修改信息",
            showCancel: false
          });
          return;
        }
      };
      // 设置置顶状态
      var handleToppStatus = function handleToppStatus() {
        var nowtime = getMyDate(new Date().getTime());
        var endtime = getMyDate(parseInt(data.resume_top.end_time) * 1000);
        if (nowtime > endtime) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '您的置顶已过期',
            showCancel: false
          });
          return;
        }
        // 获取滑动值
        var sheetList = data.top_status.map(function (v) {
          return v.name;
        });
        // const sheetListId = data.top_status.map(v => v.id);
        //获取当前是否可以置顶
        var contentom = data.resume_top.top_tips_string;
        _taroTt2.default.showActionSheet({
          itemList: sheetList,
          success: function success(res) {
            // 当前值一样就不发动请求
            if (indextop == res.tapIndex) {
              return;
            }
            if (indextop == 1 && data.resume_top.is_show_tips == 1) {
              _taroTt2.default.showModal({
                title: '温馨提示',
                content: contentom,
                showCancel: false
              });
              return;
            }
            setIndextop(res.tapIndex);
            var params = {
              uuid: data.info.uuid
            };
            (0, _index.resumesChangeTopStatusAction)(params).then(function (res) {
              if (res.errcode === 'ok') {}
              _taroTt2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false
              });
            });
          }
        });
      };
      var getMyDate = function getMyDate(str) {
        var oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth() + 1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),


        // oSen = oDate.getSeconds(),
        oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' + addZero(oMin);
        return oTime;
      };
      var addZero = function addZero(num) {
        if (parseInt(num) < 10) {
          num = '0' + num;
        }
        return num;
      };
      var handelEditTopp = function handelEditTopp() {
        var nowtime = getMyDate(new Date().getTime());
        var contentom = data.resume_top.top_tips_string;
        var endtime = getMyDate(parseInt(data.resume_top.end_time) * 1000);
        if (nowtime > endtime) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '您的置顶已过期',
            showCancel: false
          });
          return;
        }
        if (data.resume_top.is_show_tips == 1) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: contentom,
            showCancel: false
          });
          return;
        }
        var area = JSON.stringify(data.resume_top.top_provinces_str);
        var endTime = data.resume_top.end_time;
        var endTimeStr = data.resume_top.end_time_str;
        // const maxnumber = data.resume_top.max_number;
        // const firstprovincenum = data.resume_top.first_province_num;
        userRouteJump("/pages/topping/index?rec=1&type=1&areaData=" + area + "&endTimes=" + endTime + "&endTimeStr=" + endTimeStr);
      };
      // 修改头像
      var userUploadAvatar = function userUploadAvatar() {
        if (data.info.check == '1') {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '信息审核中，请稍后再试',
            showCancel: false
          });
          return;
        }
        (0, _index5.default)().then(function (res) {
          if (res.errcode == 'ok') {
            var params = {
              image: res.url
            };
            (0, _index.resumesEditImgAction)(params).then(function (data) {
              if (data.errcode === '200') {
                (0, _index3.default)('保存成功');
              }
            });
            // userChangeAvatar(res.url).then(data => {
            //   Msg(data.errmsg)
            //   if (data.errcode == 'ok') {
            //     setHeaderImg(res.httpurl)
            //   }
            // })
          } else {
            (0, _index3.default)(res.errmsg);
          }
        }).catch(function () {
          (0, _index3.default)('网络错误，上传失败');
        });
      };
      // 人员信息完善
      var handlePerfect = function handlePerfect(url) {
        if (!data.info.uuid) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '您未完善基础信息填写,请先填写基础信息',
            showCancel: false,
            success: function success() {
              _taroTt2.default.navigateTo({
                url: '/pages/resume/basics/index'
              });
            }
          });
          return;
        } else {
          _taroTt2.default.navigateTo({
            url: url
          });
        }
      };
      console.log(passre, nopassre, 'nopassre,nopassre');
      context.Provider(value);
      var anonymousState__temp = "width:" + parseInt(data.info.progress) + "%";
      this.anonymousFunc0 = function () {
        return userRouteJump('/pages/resume/basics/index');
      };
      this.anonymousFunc1 = function () {
        return userRouteJump("/subpackage/pages/ranking/index");
      };
      this.anonymousFunc2 = handleTopping;
      this.anonymousFunc3 = handleToppStatus;
      this.anonymousFunc4 = handelEditTopp;
      this.anonymousFunc5 = function () {
        return userRouteJump("/pages/topping/index?rec=1");
      };
      this.anonymousFunc6 = handleStatus;
      this.anonymousFunc7 = function () {
        return userUploadAvatar();
      };
      this.anonymousFunc8 = function () {
        return userRouteJump('/pages/resume/basics/index');
      };
      this.anonymousFunc9 = function () {
        return userRouteJump('/pages/resume/basics/index');
      };
      this.anonymousFunc10 = function () {
        return userRouteJump('/pages/resume/basics/index');
      };
      this.anonymousFunc11 = function () {
        return userRouteJump('/pages/resume/personInfo/index?type=1');
      };
      this.anonymousFunc12 = function () {
        return userRouteJump('/pages/resume/personInfo/index?type=1');
      };
      this.anonymousFunc13 = function () {
        return handlePerfect('/pages/resume/personInfo/index');
      };
      this.anonymousFunc14 = function () {
        return userRouteJump("/pages/resume/addProject/index?id=" + data.info.uuid);
      };
      this.anonymousFunc15 = function () {
        return handlePerfect("/pages/resume/addProject/index?id=" + data.info.uuid);
      };
      this.anonymousFunc18 = function () {
        return userRouteJump("/pages/resume/projectList/index?id=" + data.info.uuid);
      };
      this.anonymousFunc19 = function () {
        return userRouteJump("/pages/resume/addSkill/index?id=" + data.info.uuid);
      };
      this.anonymousFunc20 = function () {
        return handlePerfect("/pages/resume/addSkill/index?id=" + data.info.uuid);
      };
      this.anonymousFunc23 = function () {
        return userRouteJump("/pages/resume/skillList/index?id=" + data.info.uuid);
      };
      this.anonymousFunc24 = function () {
        return userRouteJump("/pages/resume/skillList/index?id=" + data.info.uuid);
      };
      this.anonymousFunc25 = function () {
        return userRouteJump("/pages/resume/preview/index");
      };
      this.anonymousFunc26 = function () {
        setTips(false);
      };
      this.anonymousFunc27 = function () {
        setToppingModal(false);
      };
      this.anonymousFunc28 = function () {
        return userRouteJump("/pages/topping/index?rec=1");
      };
      var loopArray85 = data.resume_top.has_top != 0 && data.resume_top.is_top != 2 ? data.resume_top.top_provinces_str.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp3 = data.resume_top.top_provinces_str.length ? i + i : null;
        return {
          $loopState__temp3: $loopState__temp3,
          $original: v.$original
        };
      }) : [];
      var loopArray86 = !showskill ? data.info.occupations.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp5 = data.info.occupations ? i + i : null;
        return {
          $loopState__temp5: $loopState__temp5,
          $original: v.$original
        };
      }) : [];
      var loopArray87 = showskill ? data.info.occupations.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp7 = data.info.occupations ? i + i : null;
        return {
          $loopState__temp7: $loopState__temp7,
          $original: v.$original
        };
      }) : [];
      var loopArray88 = selfintrone ? data.introduces.tags.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp9 = data.introduces.tags ? i + i : null;
        return {
          $loopState__temp9: $loopState__temp9,
          $original: v.$original
        };
      }) : [];
      var loopArray89 = projectlength != 0 ? project.map(function (item, __index16) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey = "jezzz" + __index16;
        _this2.anonymousFunc16Map[_$indexKey] = function () {
          return userRouteJump("/pages/resume/addProject/index?type=0&id=" + data.info.uuid);
        };
        var _$indexKey2 = "jfzzz" + __index16;
        _this2.anonymousFunc17Map[_$indexKey2] = function () {
          return userRouteJump("/pages/resume/addProject/index?type=0&id=" + data.info.uuid);
        };
        var $anonymousCallee__12 = projectlength != 0 ? item.$original.image.map(function (v, i) {
          v = {
            $original: (0, _taroTt.internal_get_original)(v)
          };
          var $loopState__temp11 = item.$original.image ? i + i : null;
          return {
            $loopState__temp11: $loopState__temp11,
            $original: v.$original
          };
        }) : [];
        return {
          _$indexKey: _$indexKey,
          _$indexKey2: _$indexKey2,
          $anonymousCallee__12: $anonymousCallee__12,
          $original: item.$original
        };
      }) : [];
      var loopArray90 = skilllength != 0 ? skillbooksone.map(function (item, i) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var $loopState__temp13 = skillbooksone ? i + i : null;
        var _$indexKey3 = "jgzzz" + i;
        _this2.anonymousFunc21Map[_$indexKey3] = function () {
          return userRouteJump("/pages/resume/addSkill/index?type=" + i + "&id=" + data.info.uuid);
        };
        var _$indexKey4 = "jhzzz" + i;
        _this2.anonymousFunc22Map[_$indexKey4] = function () {
          return userRouteJump("/pages/resume/addSkill/index?type=" + i + "&id=" + data.info.uuid);
        };
        var $anonymousCallee__13 = skilllength != 0 ? item.$original.image.map(function (v, i) {
          v = {
            $original: (0, _taroTt.internal_get_original)(v)
          };
          var $loopState__temp15 = item.$original.image ? i + i : null;
          return {
            $loopState__temp15: $loopState__temp15,
            $original: v.$original
          };
        }) : [];
        return {
          $loopState__temp13: $loopState__temp13,
          _$indexKey3: _$indexKey3,
          _$indexKey4: _$indexKey4,
          $anonymousCallee__13: $anonymousCallee__13,
          $original: item.$original
        };
      }) : [];
      recData.length && _taroTt.propsManager.set({
        "type": 1,
        "data": recData
      }, $compid__72, $prevCompid__72);
      _taroTt.propsManager.set({
        "isOpened": tips,
        "className": "AtModal"
      }, $compid__73, $prevCompid__73);
      _taroTt.propsManager.set({
        "isOpened": toppingModal,
        "className": "AtModal"
      }, $compid__74, $prevCompid__74);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        data: data,
        loopArray85: loopArray85,
        loopArray86: loopArray86,
        loopArray87: loopArray87,
        loopArray88: loopArray88,
        loopArray89: loopArray89,
        loopArray90: loopArray90,
        $compid__72: $compid__72,
        $compid__73: $compid__73,
        $compid__74: $compid__74,
        showtop: showtop,
        showcomplete: showcomplete,
        IMGCDNURL: _index6.IMGCDNURL,
        showtopone: showtopone,
        showpassre: showpassre,
        passre: passre,
        nopassre: nopassre,
        index: index,
        checkone: checkone,
        headerimg: headerimg,
        authenticationimg: authenticationimg,
        certificate_show: certificate_show,
        age: age,
        sex: sex,
        checkonef: checkonef,
        showskill: showskill,
        intro: intro,
        introne: introne,
        ressonone: ressonone,
        selfintrone: selfintrone,
        checktwo: checktwo,
        selfintro: selfintro,
        projectlength: projectlength,
        project_count: project_count,
        project: project,
        skilllength: skilllength,
        skillbooksone: skillbooksone,
        checkfourf: checkfourf,
        recData: recData,
        selectdata: selectdata,
        proStatus: proStatus,
        popup: popup
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
  }, {
    key: "anonymousFunc13",
    value: function anonymousFunc13(e) {
      ;
    }
  }, {
    key: "anonymousFunc14",
    value: function anonymousFunc14(e) {
      ;
    }
  }, {
    key: "anonymousFunc15",
    value: function anonymousFunc15(e) {
      ;
    }
  }, {
    key: "anonymousFunc16",
    value: function anonymousFunc16(_$indexKey) {
      var _anonymousFunc16Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc16Map[_$indexKey] && (_anonymousFunc16Map = this.anonymousFunc16Map)[_$indexKey].apply(_anonymousFunc16Map, e);
    }
  }, {
    key: "anonymousFunc17",
    value: function anonymousFunc17(_$indexKey2) {
      var _anonymousFunc17Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc17Map[_$indexKey2] && (_anonymousFunc17Map = this.anonymousFunc17Map)[_$indexKey2].apply(_anonymousFunc17Map, e);
    }
  }, {
    key: "anonymousFunc18",
    value: function anonymousFunc18(e) {
      ;
    }
  }, {
    key: "anonymousFunc19",
    value: function anonymousFunc19(e) {
      ;
    }
  }, {
    key: "anonymousFunc20",
    value: function anonymousFunc20(e) {
      ;
    }
  }, {
    key: "anonymousFunc21",
    value: function anonymousFunc21(_$indexKey3) {
      var _anonymousFunc21Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc21Map[_$indexKey3] && (_anonymousFunc21Map = this.anonymousFunc21Map)[_$indexKey3].apply(_anonymousFunc21Map, e);
    }
  }, {
    key: "anonymousFunc22",
    value: function anonymousFunc22(_$indexKey4) {
      var _anonymousFunc22Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc22Map[_$indexKey4] && (_anonymousFunc22Map = this.anonymousFunc22Map)[_$indexKey4].apply(_anonymousFunc22Map, e);
    }
  }, {
    key: "anonymousFunc23",
    value: function anonymousFunc23(e) {
      ;
    }
  }, {
    key: "anonymousFunc24",
    value: function anonymousFunc24(e) {
      ;
    }
  }, {
    key: "anonymousFunc25",
    value: function anonymousFunc25(e) {
      ;
    }
  }, {
    key: "anonymousFunc26",
    value: function anonymousFunc26(e) {
      ;
    }
  }, {
    key: "anonymousFunc27",
    value: function anonymousFunc27(e) {
      ;
    }
  }, {
    key: "anonymousFunc28",
    value: function anonymousFunc28(e) {
      ;
    }
  }]);

  return NewJob;
}(_taroTt2.default.Component);

NewJob.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13", "anonymousFunc14", "anonymousFunc15", "anonymousFunc16", "anonymousFunc17", "anonymousFunc18", "anonymousFunc19", "anonymousFunc20", "anonymousFunc21", "anonymousFunc22", "anonymousFunc23", "anonymousFunc24", "anonymousFunc25", "anonymousFunc26", "anonymousFunc27", "anonymousFunc28"];
NewJob.$$componentPath = "pages/resume/newJobs/index";
NewJob.config = { navigationBarTitleText: '找活名片' };
exports.default = NewJob;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(NewJob, true));

/***/ })

},[["./src/pages/resume/newJobs/index.tsx","runtime","vendors"]]]);