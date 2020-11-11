<<<<<<< HEAD
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/resume/detail/index"],{

/***/ "./src/actions/resume_list.ts":
/*!************************************!*\
  !*** ./src/actions/resume_list.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSubpackcertificate = setSubpackcertificate;
exports.setSubpackProject = setSubpackProject;

var _resume_list = __webpack_require__(/*! ../constants/resume_list */ "./src/constants/resume_list.ts");

function setSubpackcertificate(data) {
  return {
    type: _resume_list.SETSUBPACKCERTIFICATE,
    data: data
  };
}
function setSubpackProject(data) {
  return {
    type: _resume_list.SETSUBPACKPROJECT,
    data: data
  };
}

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

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _index3 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index6 = __webpack_require__(/*! ../../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

var _resume_list = __webpack_require__(/*! ../../../actions/resume_list */ "./src/actions/resume_list.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/detail/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import CollectionRecruitList  from '../../../components/recommendList/index'


// export const detailContext = createContext<Injected>({} as Injected)

var ResumeDetail = function (_Taro$Component) {
  _inherits(ResumeDetail, _Taro$Component);

  function ResumeDetail() {
    _classCallCheck(this, ResumeDetail);

    var _this = _possibleConstructorReturn(this, (ResumeDetail.__proto__ || Object.getPrototypeOf(ResumeDetail)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '找活名片',
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: "dark"
    };

    _this.$usedState = ["data", "loopArray94", "loopArray96", "loopArray97", "$compid__79", "isAuth", "IMGCDNURL", "examine", "onoff", "praise", "collect", "shownewtips", "complaintModal", "age", "phone"];
    _this.anonymousFunc4Map = {};
    _this.anonymousFunc6Map = {};
    _this.customComponents = ["Auth", "Report"];
    return _this;
  }

  _createClass(ResumeDetail, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ResumeDetail.prototype.__proto__ || Object.getPrototypeOf(ResumeDetail.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__79"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__79 = _genCompid2[0],
          $compid__79 = _genCompid2[1];
      // 获取dispatch分发action


      var dispatch = (0, _redux.useDispatch)();
      // 获取用户是否登录
      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      var router = (0, _taroTt.useRouter)();
      //获取uuid和location,location需要修改，用一个共同的，最外层使用的
      var _router$params = router.params,
          uuid = _router$params.uuid,
          location = _router$params.location;
      //总数据

      var _useState = (0, _taroTt.useState)({
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
          uuid: '',
          gender: '',
          tags: [],
          distance: '',
          location: '',
          show_complain: {
            show_complain: undefined,
            tips_message: ''
          }
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
      // const [list,setList ] = useState<ListType>({
      //   item:[]
      // })


      var _useState3 = (0, _taroTt.useState)(true),
          _useState4 = _slicedToArray(_useState3, 2),
          examine = _useState4[0],
          setExamine = _useState4[1];
      // 查看电话


      var _useState5 = (0, _taroTt.useState)(false),
          _useState6 = _slicedToArray(_useState5, 2),
          onoff = _useState6[0],
          seOnoff = _useState6[1];
      // 手机号码


      var _useState7 = (0, _taroTt.useState)(''),
          _useState8 = _slicedToArray(_useState7, 2),
          phone = _useState8[0],
          setPhone = _useState8[1];
      // 弹框


      var _useState9 = (0, _taroTt.useState)(false),
          _useState10 = _slicedToArray(_useState9, 2),
          shownewtips = _useState10[0],
          setShownewtips = _useState10[1];
      // 收藏


      var _useState11 = (0, _taroTt.useState)(0),
          _useState12 = _slicedToArray(_useState11, 2),
          collect = _useState12[0],
          setCollect = _useState12[1];
      // 赞


      var _useState13 = (0, _taroTt.useState)(0),
          _useState14 = _slicedToArray(_useState13, 2),
          praise = _useState14[0],
          setPraise = _useState14[1];
      // 年龄


      var _useState15 = (0, _taroTt.useState)(''),
          _useState16 = _slicedToArray(_useState15, 2),
          age = _useState16[0],
          setAge = _useState16[1];
      // 投诉


      var _useState17 = (0, _taroTt.useState)(false),
          _useState18 = _slicedToArray(_useState17, 2),
          complaintModal = _useState18[0],
          setComplaintModal = _useState18[1];
      // 投诉内容


      var _useState19 = (0, _taroTt.useState)(''),
          _useState20 = _slicedToArray(_useState19, 2),
          textarea = _useState20[0],
          setTextarea = _useState20[1];
      // 是否还可以投诉


      var _useState21 = (0, _taroTt.useState)(false),
          _useState22 = _slicedToArray(_useState21, 2),
          iscomplaint = _useState22[0],
          setIsComplaint = _useState22[1];
      // 点赞获取电话号码分享收藏需要先登陆


      var _useState23 = (0, _taroTt.useState)(false),
          _useState24 = _slicedToArray(_useState23, 2),
          isAuth = _useState24[0],
          setIsAuth = _useState24[1];

      var _useState25 = (0, _taroTt.useState)(''),
          _useState26 = _slicedToArray(_useState25, 2),
          clickType = _useState26[0],
          setClickType = _useState26[1];

      var getDataList = function getDataList() {
        var params = {
          location: location,
          resume_uuid: uuid
        };
        (0, _index.resumeDetailAction)(params).then(function (res) {
          if (res.errcode === 'ok') {
            // 技能证书
            var mylists = [].concat(_toConsumableArray(res.certificates));
            var _data = [];
            for (var i = 0; i < mylists.length; i++) {
              var item = _extends({}, mylists[i], { images: mylists[i].images.split(',') });
              _data.push(item);
            }
            dispatch((0, _resume_list.setSubpackcertificate)([].concat(_data)));
            // 项目经验
            var projectArr = [].concat(_toConsumableArray(res.project));
            var projectData = [];
            // 职业技能
            for (var _i = 0; _i < projectArr.length; _i++) {
              var _item = _extends({}, projectArr[_i], { images: projectArr[_i].images.split(',') });
              projectData.push(_item);
            }
            dispatch((0, _resume_list.setSubpackProject)([].concat(projectData)));
            var date = new Date();
            var dateo = date.getTime();
            var dateone = new Date(dateo);
            if (res.info.birthday) {
              if (dateone.getFullYear() - parseInt(res.info.birthday) == 0) {
                setAge('');
              } else {
                setAge(dateone.getFullYear() - parseInt(res.info.birthday) + "岁");
              }
            }
            // Taro.setStorageSync("introinfo", res.info)
            setDate({ certificates: res.certificates, info: res.info, operation: res.operation, project: res.project });
            setPhone(res.info.tel);
            setExamine(false);
            setPraise(res.operation.is_zan);
            setCollect(res.operation.is_collect);
            if (res.info.is_read == 0 && res.info.is_end != '2' && res.operation.status == 0) {
              seOnoff(true);
            }
            // 加载相关推荐数据列表
            // const listParams = {
            //   page: 1,
            //   type: 1,
            //   area_id: res.info.city,
            //   occupations: res.info.occupations_id,
            //   uuid: res.info.uuid,
            // }
            // recommendListAction(listParams).then(res => {
            //   setList({ item: res.data.list })
            // })
          }
        });
      };
      (0, _taroTt.useDidShow)(function () {
        getDataList();
      });
      (0, _taroTt.useEffect)(function () {
        if (!login) {
          return;
        } // 授权获取内容
        if (clickType) {
          if (clickType === 'support') {
            resumeSupport();
          } else if (clickType === 'collect') {
            resumeCollect();
          } else if (clickType === 'phone') {
            handlePhone();
          }
        }
      }, [login]);
      // 查看电话
      var handlePhone = function handlePhone() {
        if (!login) {
          setClickType('phone');
          setIsAuth(true);
          return;
        }
        var params = {
          resume_uuid: uuid
        };
        (0, _index.resumesGetTelAcrion)(params).then(function (res) {
          if (res.errcode === 200) {
            seOnoff(true);
            setPhone(res.tel);
            setShownewtips(false);
          } else if (res.errcode == 7405) {
            _taroTt2.default.showModal({
              title: '温馨提示',
              content: res.errmsg,
              success: function success(res) {
                if (res.confirm) {
                  _taroTt2.default.navigateTo({
                    url: '/pages/getintegral/index'
                  });
                } else if (res.cancel) {
                  _taroTt2.default.navigateBack();
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
        _taroTt2.default.makePhoneCall({
          phoneNumber: phone
        });
      };
      // 赞
      var resumeSupport = function resumeSupport() {
        setClickType('support');
        if (!login) {
          setIsAuth(true);
          return;
        }
        var params = {
          resume_uuid: uuid
        };
        (0, _index.resumeSupportAction)(params).then(function (res) {
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
        if (!login) {
          setClickType('collect');
          setIsAuth(true);
          return;
        }
        var params = {
          resume_uuid: uuid
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
          resume_uuid: data.info.uuid
        };
        (0, _index.resumesComplainAction)(params).then(function (res) {
          if (res.errcode === 'ok') {
            (0, _index6.SubscribeToNews)('complain', function () {
              (0, _index3.showModalTip)({
                tips: res.errmsg,
                callback: function callback() {
                  setIsComplaint(true);
                  setComplaintModal(false);
                }
              });
            });
          }
        });
      };
      // 举报
      var handleComplaint = function handleComplaint() {
        if (iscomplaint || !data.info.show_complain.show_complain) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '您已投诉该信息,请勿重复提交！',
            showCancel: false
          });
        } else {
          setComplaintModal(true);
        }
      };
      // 点击方法
      var handleImg = function handleImg(e) {
        _taroTt2.default.previewImage({
          current: e,
          urls: [e]
        });
      };
      // 传递的值
      var value = {
        project: data.project,
        certificates: data.certificates
      };
      var handleMap = function handleMap() {
        var locArr = data.info.location.split(",");
        _taroTt2.default.openLocation({
          latitude: parseFloat(locArr[1]),
          longitude: parseFloat(locArr[0]),
          name: data.info.address,
          address: data.info.address,
          scale: 18
        });
      };
      this.anonymousFunc0 = handlePhone;
      this.anonymousFunc1 = function () {
        return _taroTt2.default.makePhoneCall({ phoneNumber: phone });
      };
      this.anonymousFunc2 = function () {
        return handleComplaint();
      };
      this.anonymousFunc3 = handleMap;
      this.anonymousFunc5 = function () {
        return _taroTt2.default.navigateTo({ url: '/subpackage/pages/projects/index' });
      };
      this.anonymousFunc7 = function () {
        return _taroTt2.default.navigateTo({ url: '/subpackage/pages/skills/index' });
      };
      this.anonymousFunc8 = resumeSupport;
      this.anonymousFunc9 = resumeCollect;
      this.anonymousFunc10 = function () {
        setShownewtips(false);
      };
      this.anonymousFunc11 = handleTellPhone;
      var loopArray94 = data.info.occupations.length ? data.info.occupations.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp2 = data.info.occupations.length ? i + i : null;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: v.$original
        };
      }) : [];
      var loopArray96 = data.project.length ? data.project[0].image.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp4 = data.project.length ? i + i : null;
        var _$indexKey = "jjzzz" + i;
        _this2.anonymousFunc4Map[_$indexKey] = function () {
          return handleImg(v.$original);
        };
        return {
          $loopState__temp4: $loopState__temp4,
          _$indexKey: _$indexKey,
          $original: v.$original
        };
      }) : [];
      var loopArray97 = data.certificates.length ? data.certificates[0].image.map(function (val, i) {
        val = {
          $original: (0, _taroTt.internal_get_original)(val)
        };
        var $loopState__temp6 = data.certificates.length ? i + i : null;
        var _$indexKey2 = "baazz" + i;
        _this2.anonymousFunc6Map[_$indexKey2] = function () {
          return handleImg(val.$original);
        };
        return {
          $loopState__temp6: $loopState__temp6,
          _$indexKey2: _$indexKey2,
          $original: val.$original
        };
      }) : [];
      complaintModal && _taroTt.propsManager.set({
        "display": complaintModal,
        "textarea": textarea,
        "handleTextarea": handleTextarea,
        "setComplaintModal": setComplaintModal,
        "handleSubmit": handleSubmit
      }, $compid__79, $prevCompid__79);
      Object.assign(this.__state, {
        data: data,
        loopArray94: loopArray94,
        loopArray96: loopArray96,
        loopArray97: loopArray97,
        $compid__79: $compid__79,
        isAuth: isAuth,
        IMGCDNURL: _index2.IMGCDNURL,
        examine: examine,
        onoff: onoff,
        praise: praise,
        collect: collect,
        shownewtips: shownewtips,
        complaintModal: complaintModal,
        age: age,
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
    value: function anonymousFunc4(_$indexKey) {
      var _anonymousFunc4Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc4Map[_$indexKey] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(_$indexKey2) {
      var _anonymousFunc6Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc6Map[_$indexKey2] && (_anonymousFunc6Map = this.anonymousFunc6Map)[_$indexKey2].apply(_anonymousFunc6Map, e);
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

  return ResumeDetail;
}(_taroTt2.default.Component);

ResumeDetail.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11"];
ResumeDetail.$$componentPath = "pages/resume/detail/index";
ResumeDetail.config = { navigationBarTitleText: '找活名片', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = ResumeDetail;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(ResumeDetail, true));

/***/ })

},[["./src/pages/resume/detail/index.tsx","runtime","vendors"]]]);
=======
(tt.webpackJsonp=tt.webpackJsonp||[]).push([[78],{"197":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var _e=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ve=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,a=!1,r=void 0;try{for(var u,i=e[Symbol.iterator]();!(o=(u=i.next()).done)&&(t.push(u.value),!n||t.length!==n);o=!0);}catch(e){a=!0,r=e}finally{try{!o&&i.return&&i.return()}finally{if(a)throw r}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var be=t(0),Fe=_interopRequireDefault(be),ke=t(2),Se=t(1),we=t(4),je=_interopRequireDefault(we),Ae=t(7),Ce=t(3),$e=t(15),Te=t(198);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}t(199);var a=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(ResumeDetail,Fe.default.Component),o(ResumeDetail,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,n,t)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(t):void 0})(ResumeDetail.prototype.__proto__||Object.getPrototypeOf(ResumeDetail.prototype),"_constructor",this).call(this,e),this.$$refs=new Fe.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var a=this;this.__state=e||this.state||{},this.__props=n||this.props||{};var o=this.$prefix,r=(0,be.genCompid)(o+"$compid__79"),u=ve(r,2),i=u[0],c=u[1],f=(0,Ce.useDispatch)(),s=(0,Ce.useSelector)(function(e){return e.User.login}),l=(0,be.useRouter)().params,p=l.uuid,m=l.location,y=(0,be.useState)({"certificates":[],"info":{"introduce":"","headerimg":"","nation":"","username":"","tel":"","hometown":"","occupations":[],"experience":"","prof_degree_str":"","type_str":"","number_people":"","address":"","authentication":"","is_read":0,"is_end":"","certificate_show":0,"uuid":"","gender":"","tags":[],"distance":"","location":"","show_complain":{"show_complain":void 0,"tips_message":""}},"operation":{"is_collect":0,"is_zan":0,"status":0},"project":[]}),d=ve(y,2),h=d[0],g=d[1],_=(0,be.useState)(!0),v=ve(_,2),b=v[0],F=v[1],k=(0,be.useState)(!1),S=ve(k,2),w=S[0],j=S[1],A=(0,be.useState)(""),C=ve(A,2),$=C[0],T=C[1],P=(0,be.useState)(!1),D=ve(P,2),M=D[0],O=D[1],R=(0,be.useState)(0),x=ve(R,2),B=x[0],E=x[1],I=(0,be.useState)(0),z=ve(I,2),N=z[0],U=z[1],L=(0,be.useState)(""),G=ve(L,2),K=G[0],q=G[1],J=(0,be.useState)(!1),V=ve(J,2),Y=V[0],H=V[1],Q=(0,be.useState)(""),W=ve(Q,2),X=W[0],Z=W[1],ee=(0,be.useState)(!1),ne=ve(ee,2),te=ne[0],oe=ne[1],ae=(0,be.useState)(!1),re=ve(ae,2),ue=re[0],ie=re[1],ce=(0,be.useState)(""),se=ve(ce,2),le=se[0],fe=se[1];function yb(e){Fe.default.previewImage({"current":e,"urls":[e]})}(0,be.useDidShow)(function(){!function getDataList(){var e={"location":m,"resume_uuid":p};(0,ke.resumeDetailAction)(e).then(function(e){if("ok"===e.errcode){for(var n=[].concat(_toConsumableArray(e.certificates)),t=[],o=0;o<n.length;o++){var a=_e({},n[o],{"images":n[o].images.split(",")});t.push(a)}f((0,Te.setSubpackcertificate)([].concat(t)));for(var r=[].concat(_toConsumableArray(e.project)),u=[],i=0;i<r.length;i++){var c=_e({},r[i],{"images":r[i].images.split(",")});u.push(c)}f((0,Te.setSubpackProject)([].concat(u)));var s=(new Date).getTime(),l=new Date(s);e.info.birthday&&(l.getFullYear()-parseInt(e.info.birthday)==0?q(""):q(l.getFullYear()-parseInt(e.info.birthday)+"岁")),g({"certificates":e.certificates,"info":e.info,"operation":e.operation,"project":e.project}),T(e.info.tel),F(!1),U(e.operation.is_zan),E(e.operation.is_collect),0==e.info.is_read&&"2"!=e.info.is_end&&0==e.operation.status&&j(!0)}})}()}),(0,be.useEffect)(function(){s&&le&&("support"===le?me():"collect"===le?ye():"phone"===le&&pe())},[s]);var pe=function handlePhone(){if(!s)return fe("phone"),void ie(!0);var e={"resume_uuid":p};(0,ke.resumesGetTelAcrion)(e).then(function(e){200===e.errcode?(j(!0),T(e.tel),O(!1)):7405==e.errcode?Fe.default.showModal({"title":"温馨提示","content":e.errmsg,"success":function success(e){e.confirm?Fe.default.navigateTo({"url":"/pages/getintegral/index"}):e.cancel&&Fe.default.navigateBack()}}):(0,je.default)(e.errmsg)})},me=function resumeSupport(){if(fe("support"),s){var e={"resume_uuid":p};(0,ke.resumeSupportAction)(e).then(function(e){"ok"===e.errcode?((0,je.default)(e.errmsg),U(e.show)):(0,je.default)(e.errmsg)})}else ie(!0)},ye=function resumeCollect(){if(!s)return fe("collect"),void ie(!0);var e={"resume_uuid":p};(0,ke.resumeCollectAction)(e).then(function(e){"ok"===e.errcode?((0,je.default)(e.errmsg),E(e.show)):(0,je.default)(e.errmsg)})};h.project,h.certificates,this.anonymousFunc0=pe,this.anonymousFunc1=function(){return Fe.default.makePhoneCall({"phoneNumber":$})},this.anonymousFunc2=function(){return function handleComplaint(){te||!h.info.show_complain.show_complain?Fe.default.showModal({"title":"温馨提示","content":"您已投诉该信息,请勿重复提交！","showCancel":!1}):H(!0)}()},this.anonymousFunc3=function handleMap(){var e=h.info.location.split(",");Fe.default.openLocation({"latitude":parseFloat(e[1]),"longitude":parseFloat(e[0]),"name":h.info.address,"address":h.info.address,"scale":18})},this.anonymousFunc5=function(){return Fe.default.navigateTo({"url":"/subpackage/pages/projects/index"})},this.anonymousFunc7=function(){return Fe.default.navigateTo({"url":"/subpackage/pages/skills/index"})},this.anonymousFunc8=me,this.anonymousFunc9=ye,this.anonymousFunc10=function(){O(!1)},this.anonymousFunc11=function handleTellPhone(){Fe.default.makePhoneCall({"phoneNumber":$})};var de=h.info.occupations.length?h.info.occupations.map(function(e,n){return e={"$original":(0,be.internal_get_original)(e)},{"$loopState__temp2":h.info.occupations.length?n+n:null,"$original":e.$original}}):[],he=h.project.length?h.project[0].image.map(function(e,n){e={"$original":(0,be.internal_get_original)(e)};var t=h.project.length?n+n:null,o="jjzzz"+n;return a.anonymousFunc4Map[o]=function(){return yb(e.$original)},{"$loopState__temp4":t,"_$indexKey":o,"$original":e.$original}}):[],ge=h.certificates.length?h.certificates[0].image.map(function(e,n){e={"$original":(0,be.internal_get_original)(e)};var t=h.certificates.length?n+n:null,o="baazz"+n;return a.anonymousFunc6Map[o]=function(){return yb(e.$original)},{"$loopState__temp6":t,"_$indexKey2":o,"$original":e.$original}}):[];return Y&&be.propsManager.set({"display":Y,"textarea":X,"handleTextarea":function handleTextarea(e){var n=e.detail.value;Z(n)},"setComplaintModal":H,"handleSubmit":function handleSubmit(){if(!(0,Ae.isVaildVal)(X,15,500))return(0,je.default)("输入内容不少于15个字且必须包含文字"),!1;var e={"content":X,"resume_uuid":h.info.uuid};(0,ke.resumesComplainAction)(e).then(function(e){"ok"===e.errcode&&(0,$e.SubscribeToNews)("complain",function(){(0,we.showModalTip)({"tips":e.errmsg,"callback":function callback(){oe(!0),H(!1)}})})})}},c,i),Object.assign(this.__state,{"data":h,"loopArray94":de,"loopArray96":he,"loopArray97":ge,"$compid__79":c,"isAuth":ue,"IMGCDNURL":Se.IMGCDNURL,"examine":b,"onoff":w,"praise":N,"collect":B,"shownewtips":M,"complaintModal":Y,"age":K,"phone":$}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc4Map[e]&&(n=this.anonymousFunc4Map)[e].apply(n,o)}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc6Map[e]&&(n=this.anonymousFunc6Map)[e].apply(n,o)}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}}]),ResumeDetail);function ResumeDetail(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ResumeDetail);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(ResumeDetail.__proto__||Object.getPrototypeOf(ResumeDetail)).apply(this,arguments));return e.config={"navigationBarTitleText":"找活名片","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["data","loopArray94","loopArray96","loopArray97","$compid__79","isAuth","IMGCDNURL","examine","onoff","praise","collect","shownewtips","complaintModal","age","phone"],e.anonymousFunc4Map={},e.anonymousFunc6Map={},e.customComponents=["Auth","Report"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11"],a.$$componentPath="pages/resume/detail/index",a.config={"navigationBarTitleText":"找活名片","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},n.default=a,Page(t(0).default.createComponent(a,!0))},"198":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0}),n.setSubpackcertificate=function setSubpackcertificate(e){return{"type":o.SETSUBPACKCERTIFICATE,"data":e}},n.setSubpackProject=function setSubpackProject(e){return{"type":o.SETSUBPACKPROJECT,"data":e}};var o=t(36)},"199":function(e,n,t){}},[[197,0,1]]]);
>>>>>>> fb96997a3eb37e95c7d221108f0cbcc04ca912d8
