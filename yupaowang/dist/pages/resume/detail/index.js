(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/resume/detail/index"],{

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
exports.detailContext = undefined;

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

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/detail/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var detailContext = exports.detailContext = (0, _taroTt.createContext)({});

var ResumeDetail = function (_Taro$Component) {
  _inherits(ResumeDetail, _Taro$Component);

  function ResumeDetail() {
    _classCallCheck(this, ResumeDetail);

    var _this = _possibleConstructorReturn(this, (ResumeDetail.__proto__ || Object.getPrototypeOf(ResumeDetail)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '找活名片'
    };

    _this.$usedState = ["data", "loopArray88", "loopArray90", "loopArray91", "$compid__76", "$compid__77", "isAuth", "IMGCDNURL", "examine", "onoff", "list", "praise", "collect", "shownewtips", "complaintModal", "age", "phone"];
    _this.anonymousFunc4Map = {};
    _this.anonymousFunc6Map = {};
    _this.customComponents = ["Auth", "CollectionRecruitList", "Report"];
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

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__76"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__76 = _genCompid2[0],
          $compid__76 = _genCompid2[1];

      var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "$compid__77"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__77 = _genCompid4[0],
          $compid__77 = _genCompid4[1];
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


      var _useState3 = (0, _taroTt.useState)({
        item: []
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          list = _useState4[0],
          setList = _useState4[1];

      var _useState5 = (0, _taroTt.useState)(true),
          _useState6 = _slicedToArray(_useState5, 2),
          examine = _useState6[0],
          setExamine = _useState6[1];
      // 查看电话


      var _useState7 = (0, _taroTt.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          onoff = _useState8[0],
          seOnoff = _useState8[1];
      // 手机号码


      var _useState9 = (0, _taroTt.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          phone = _useState10[0],
          setPhone = _useState10[1];
      // 弹框


      var _useState11 = (0, _taroTt.useState)(false),
          _useState12 = _slicedToArray(_useState11, 2),
          shownewtips = _useState12[0],
          setShownewtips = _useState12[1];
      // 收藏


      var _useState13 = (0, _taroTt.useState)(0),
          _useState14 = _slicedToArray(_useState13, 2),
          collect = _useState14[0],
          setCollect = _useState14[1];
      // 赞


      var _useState15 = (0, _taroTt.useState)(0),
          _useState16 = _slicedToArray(_useState15, 2),
          praise = _useState16[0],
          setPraise = _useState16[1];
      // 年龄


      var _useState17 = (0, _taroTt.useState)(''),
          _useState18 = _slicedToArray(_useState17, 2),
          age = _useState18[0],
          setAge = _useState18[1];
      // 投诉


      var _useState19 = (0, _taroTt.useState)(false),
          _useState20 = _slicedToArray(_useState19, 2),
          complaintModal = _useState20[0],
          setComplaintModal = _useState20[1];
      // 投诉内容


      var _useState21 = (0, _taroTt.useState)(''),
          _useState22 = _slicedToArray(_useState21, 2),
          textarea = _useState22[0],
          setTextarea = _useState22[1];
      // 是否还可以投诉


      var _useState23 = (0, _taroTt.useState)(false),
          _useState24 = _slicedToArray(_useState23, 2),
          iscomplaint = _useState24[0],
          setIsComplaint = _useState24[1];
      // 点赞获取电话号码分享收藏需要先登陆


      var _useState25 = (0, _taroTt.useState)(false),
          _useState26 = _slicedToArray(_useState25, 2),
          isAuth = _useState26[0],
          setIsAuth = _useState26[1];

      var _useState27 = (0, _taroTt.useState)(''),
          _useState28 = _slicedToArray(_useState27, 2),
          clickType = _useState28[0],
          setClickType = _useState28[1];

      var getDataList = function getDataList() {
        var params = {
          location: location,
          resume_uuid: uuid
        };
        (0, _index.resumeDetailAction)(params).then(function (res) {
          console.log(res);
          if (res.errcode === 'ok') {
            console.log(res);
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
            var listParams = {
              page: 1,
              type: 1,
              area_id: res.info.city,
              occupations: res.info.occupations_id,
              uuid: res.info.uuid
            };
            (0, _index.recommendListAction)(listParams).then(function (res) {
              setList({ item: res.data.list });
            });
          }
        });
      };
      (0, _taroTt.useDidShow)(function () {
        getDataList();
      });
      (0, _taroTt.useEffect)(function () {
        console.log(313213);
        console.log(login);
        if (!login) {
          return;
        }
        console.log(clickType, 'sss');
        // 授权获取内容
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
      console.log(value, 'xxxx');
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
      console.log(isAuth, 'isAuthx');
      detailContext.Provider(value);
      this.anonymousFunc0 = handlePhone;
      this.anonymousFunc1 = function () {
        return _taroTt2.default.makePhoneCall({ phoneNumber: phone });
      };
      this.anonymousFunc2 = function () {
        return handleComplaint();
      };
      this.anonymousFunc3 = handleMap;
      this.anonymousFunc5 = function () {
        return _taroTt2.default.navigateTo({ url: "/pages/resume/projectList/index?preview=1&detail=1&location=" + location + "&uuid=" + uuid });
      };
      this.anonymousFunc7 = function () {
        return _taroTt2.default.navigateTo({ url: "/pages/resume/skillList/index?preview=1&detail=1&location=" + location + "&uuid=" + uuid });
      };
      this.anonymousFunc8 = resumeSupport;
      this.anonymousFunc9 = resumeCollect;
      this.anonymousFunc10 = function () {
        setShownewtips(false);
      };
      this.anonymousFunc11 = handleTellPhone;
      var loopArray88 = data.info.occupations.length ? data.info.occupations.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp2 = data.info.occupations.length ? i + i : null;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: v.$original
        };
      }) : [];
      var loopArray90 = data.project.length ? data.project[0].image.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp4 = data.project.length ? i + i : null;
        var _$indexKey = "jazzz" + i;
        _this2.anonymousFunc4Map[_$indexKey] = function () {
          return handleImg(v.$original);
        };
        return {
          $loopState__temp4: $loopState__temp4,
          _$indexKey: _$indexKey,
          $original: v.$original
        };
      }) : [];
      var loopArray91 = data.certificates.length ? data.certificates[0].image.map(function (val, i) {
        val = {
          $original: (0, _taroTt.internal_get_original)(val)
        };
        var $loopState__temp6 = data.certificates.length ? i + i : null;
        var _$indexKey2 = "jbzzz" + i;
        _this2.anonymousFunc6Map[_$indexKey2] = function () {
          return handleImg(val.$original);
        };
        return {
          $loopState__temp6: $loopState__temp6,
          _$indexKey2: _$indexKey2,
          $original: val.$original
        };
      }) : [];
      list.item.length && _taroTt.propsManager.set({
        "data": list.item,
        "type": 2
      }, $compid__76, $prevCompid__76);
      complaintModal && _taroTt.propsManager.set({
        "display": complaintModal,
        "textarea": textarea,
        "handleTextarea": handleTextarea,
        "setComplaintModal": setComplaintModal,
        "handleSubmit": handleSubmit
      }, $compid__77, $prevCompid__77);
      Object.assign(this.__state, {
        data: data,
        loopArray88: loopArray88,
        loopArray90: loopArray90,
        loopArray91: loopArray91,
        $compid__76: $compid__76,
        $compid__77: $compid__77,
        isAuth: isAuth,
        IMGCDNURL: _index2.IMGCDNURL,
        examine: examine,
        onoff: onoff,
        list: list,
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
ResumeDetail.config = { navigationBarTitleText: '找活名片' };
exports.default = ResumeDetail;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(ResumeDetail, true));

/***/ })

},[["./src/pages/resume/detail/index.tsx","runtime","vendors"]]]);