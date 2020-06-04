(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/resume/newJob/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/resume/newJob/index.tsx?taro&type=script&parse=PAGE&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/resume/newJob/index.tsx?taro&type=script&parse=PAGE& ***!
  \*********************************************************************************************************************************************************/
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

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/newJob/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewJob = (_temp2 = _class = function (_Taro$Component) {
  _inherits(NewJob, _Taro$Component);

  function NewJob() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NewJob);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewJob.__proto__ || Object.getPrototypeOf(NewJob)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '找活名片'
    }, _this.$usedState = ["anonymousState__temp", "data", "loopArray136", "loopArray137", "loopArray138", "loopArray139", "loopArray140", "loopArray141", "showcomplete", "IMGCDNURL", "showtopone", "showpassre", "passre", "nopassre", "index", "checkstatus", "checkone", "headerimg", "authenticationimg", "certificate_show", "age", "sex", "checkonef", "showskill", "intro", "introne", "ressonone", "showtop", "selfintrone", "checktwo", "selfintro", "projectlength", "project_count", "project", "skilllength", "skillbooksone", "checkfourf", "selectdata"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NewJob, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(NewJob.prototype.__proto__ || Object.getPrototypeOf(NewJob.prototype), "_constructor", this).call(this, props);

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

      var _useState = (0, _taroWeapp.useState)({
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
          occupations: []
        },
        resume_top: {
          is_top: 0,
          has_top: 0,
          top_provinces_str: [],
          start_time_str: 0,
          end_time_str: 0,
          top_tips_string: '',
          is_show_tips: 0
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
        certificate_count: 0
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)(true),
          _useState4 = _slicedToArray(_useState3, 2),
          showcomplete = _useState4[0],
          setShowcomplete = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)(false),
          _useState6 = _slicedToArray(_useState5, 2),
          showtopone = _useState6[0],
          setShowtopone = _useState6[1];

      var _useState7 = (0, _taroWeapp.useState)(true),
          _useState8 = _slicedToArray(_useState7, 2),
          passre = _useState8[0],
          setPassre = _useState8[1];

      var _useState9 = (0, _taroWeapp.useState)(true),
          _useState10 = _slicedToArray(_useState9, 2),
          nopassre = _useState10[0],
          setNopassre = _useState10[1];

      var _useState11 = (0, _taroWeapp.useState)(false),
          _useState12 = _slicedToArray(_useState11, 2),
          showpassre = _useState12[0],
          setShowpassre = _useState12[1];

      var _useState13 = (0, _taroWeapp.useState)(0),
          _useState14 = _slicedToArray(_useState13, 2),
          index = _useState14[0],
          setIndex = _useState14[1];

      var _useState15 = (0, _taroWeapp.useState)([]),
          _useState16 = _slicedToArray(_useState15, 2),
          selectdata = _useState16[0],
          setSelectdata = _useState16[1];

      var _useState17 = (0, _taroWeapp.useState)(false),
          _useState18 = _slicedToArray(_useState17, 2),
          showtop = _useState18[0],
          setShowtop = _useState18[1];

      var _useState19 = (0, _taroWeapp.useState)(false),
          _useState20 = _slicedToArray(_useState19, 2),
          checkone = _useState20[0],
          setCheckone = _useState20[1];

      var _useState21 = (0, _taroWeapp.useState)(''),
          _useState22 = _slicedToArray(_useState21, 2),
          headerimg = _useState22[0],
          setHeaderimg = _useState22[1];

      var _useState23 = (0, _taroWeapp.useState)(''),
          _useState24 = _slicedToArray(_useState23, 2),
          authenticationimg = _useState24[0],
          setAuthenticationimg = _useState24[1];

      var _useState25 = (0, _taroWeapp.useState)(0),
          _useState26 = _slicedToArray(_useState25, 2),
          certificate_show = _useState26[0],
          setCertificate_show = _useState26[1];

      var _useState27 = (0, _taroWeapp.useState)('未填写'),
          _useState28 = _slicedToArray(_useState27, 2),
          sex = _useState28[0],
          setSex = _useState28[1];

      var _useState29 = (0, _taroWeapp.useState)(''),
          _useState30 = _slicedToArray(_useState29, 2),
          age = _useState30[0],
          setAge = _useState30[1];

      var _useState31 = (0, _taroWeapp.useState)('4568'),
          _useState32 = _slicedToArray(_useState31, 2),
          checkonef = _useState32[0],
          setCheckonef = _useState32[1];

      var _useState33 = (0, _taroWeapp.useState)(true),
          _useState34 = _slicedToArray(_useState33, 2),
          showskill = _useState34[0],
          setShowskill = _useState34[1];

      var _useState35 = (0, _taroWeapp.useState)([]),
          _useState36 = _slicedToArray(_useState35, 2),
          occupations = _useState36[0],
          setOccupations = _useState36[1];

      var _useState37 = (0, _taroWeapp.useState)(true),
          _useState38 = _slicedToArray(_useState37, 2),
          checkstatus = _useState38[0],
          setCheckstatus = _useState38[1];

      var _useState39 = (0, _taroWeapp.useState)(true),
          _useState40 = _slicedToArray(_useState39, 2),
          intro = _useState40[0],
          setIntro = _useState40[1];

      var _useState41 = (0, _taroWeapp.useState)(false),
          _useState42 = _slicedToArray(_useState41, 2),
          introne = _useState42[0],
          serIntrone = _useState42[1];
      // 显示没有数据完善人员信息


      var _useState43 = (0, _taroWeapp.useState)(true),
          _useState44 = _slicedToArray(_useState43, 2),
          selfintro = _useState44[0],
          setselfintro = _useState44[1];
      // 个人资料审核


      var _useState45 = (0, _taroWeapp.useState)(false),
          _useState46 = _slicedToArray(_useState45, 2),
          ressonone = _useState46[0],
          setRessonone = _useState46[1];

      var _useState47 = (0, _taroWeapp.useState)(true),
          _useState48 = _slicedToArray(_useState47, 2),
          showdetail = _useState48[0],
          setShowdetail = _useState48[1];

      var _useState49 = (0, _taroWeapp.useState)(false),
          _useState50 = _slicedToArray(_useState49, 2),
          checktwo = _useState50[0],
          setChecktwo = _useState50[1];

      var _useState51 = (0, _taroWeapp.useState)(false),
          _useState52 = _slicedToArray(_useState51, 2),
          selfintrone = _useState52[0],
          setSelfintrone = _useState52[1];

      var _useState53 = (0, _taroWeapp.useState)(0),
          _useState54 = _slicedToArray(_useState53, 2),
          projectlength = _useState54[0],
          setProjectlength = _useState54[1];

      var _useState55 = (0, _taroWeapp.useState)(0),
          _useState56 = _slicedToArray(_useState55, 2),
          project_count = _useState56[0],
          setProject_count = _useState56[1];

      var _useState57 = (0, _taroWeapp.useState)([]),
          _useState58 = _slicedToArray(_useState57, 2),
          project = _useState58[0],
          setProject = _useState58[1];

      var _useState59 = (0, _taroWeapp.useState)(0),
          _useState60 = _slicedToArray(_useState59, 2),
          skilllength = _useState60[0],
          setSkilllength = _useState60[1];

      var _useState61 = (0, _taroWeapp.useState)('0'),
          _useState62 = _slicedToArray(_useState61, 2),
          checkfourf = _useState62[0],
          setCheckfourf = _useState62[1];
      // 技能证书


      var _useState63 = (0, _taroWeapp.useState)([]),
          _useState64 = _slicedToArray(_useState63, 2),
          skillbooksone = _useState64[0],
          setSkillbooksone = _useState64[1];

      (0, _taroWeapp.useEffect)(function () {
        (0, _index.resumeListAction)().then(function (res) {
          console.log(res);
          if (res.errcode == "200") {
            setData({ info: res.data.info, resume_top: res.data.resume_top, content: res.data.content, introduces: res.data.introduces, certificate_count: res.data.certificate_count });
            var list = res.data.status.map(function (v) {
              return v.name;
            });
            console.log(list);
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
            // 判断技能证书
            var certificatesObj = res.data.certificates[res.data.certificates.length - 1];
            var check = certificatesObj.check;
            setCheckfourf(check);
            // 人员信息
            if (res.data.is_introduces == '1') {
              setselfintro(false);
              setSelfintrone(true);
            } else if (res.data.is_introduces == '0') {
              setselfintro(true);
              setSelfintrone(true);
            }
            if (res.data.info.check == "0") {
              setPassre(false);
              setRessonone(false);
            }
            if (res.data.info.check == "1") {
              setNopassre(false);
              setRessonone(false);
            }
            if (res.data.info.check == '1') {
              setCheckone(true);
              setChecktwo(true);
            } else {
              setCheckone(false);
              setChecktwo(false);
            }
            if (res.data.certificates.length === 0) {
              setSkilllength(0);
            } else {
              setSkilllength(res.data.certificates.length >= 1 ? res.data.certificates.length : 0);
            }
            if (showdetail) {
              if (res.data.info.check == "0") {
                setRessonone(true);
              }
              setShowdetail(false);
            }
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
            // if (res.data.is_introduces == '1'){
            //   setSelfintrone(true)
            // } else if (res.data.is_introduces == '0'){
            //   setSelfintrone(false)
            // }
            setProject_count(res.data.project_count);
            setIntro(false);
            serIntrone(true);
            setHeaderimg(res.data.info.headerimg);
            setShowskill(false);
            setCheckonef(res.data.info.check);
            setAuthenticationimg(res.data.info.authentication);
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
          } else {
            _taroWeapp2.default.showModal({
              title: '温馨提示',
              content: res.errmsg,
              showCancel: false
            });
            return;
          }
        });
        var userLoctionCity = _taroWeapp2.default.getStorageSync(_store.UserLocationCity);
        // 相关推荐
        var params = {
          area_id: 322,
          classify_id: 24,
          job_ids: '',
          page: 1,
          type: 1
        };
        (0, _index.jobRecommendListAction)(params).then(function (res) {
          console.log(res);
        });
      }, []);
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroWeapp2.default.navigateTo({
          url: url
        });
      };
      var handleTopping = function handleTopping() {
        if (showtop) {
          // 跳去基础信息页面
          _taroWeapp2.default.showModal({
            title: '温馨提示',
            content: data.resume_top.top_tips_string,
            confirmText: "\u53BB\u6DFB\u52A0",
            success: function success(res) {
              if (res.confirm) {
                // 跳转
                _taroWeapp2.default.navigateTo({
                  url: '/pages/clients-looking-for-work/essential-information/esinformation'
                });
                // that.toperfect()
              } else if (res.cancel) {}
            }
          });
          return;
        } else if (data.resume_top.is_show_tips === 1) {
          _taroWeapp2.default.showModal({
            title: '温馨提示',
            content: data.resume_top.top_tips_string,
            showCancel: false
          });
          return;
        } else {
          // 置顶
          _taroWeapp2.default.navigateTo({
            url: "pages/topping/index"
          });
        }
      };
      var anonymousState__temp = "width:" + parseInt(data.info.progress) + "%";

      this.anonymousFunc0 = function () {
        return userRouteJump("/subpackage/pages/ranking/index");
      };

      this.anonymousFunc1 = handleTopping;

      this.anonymousFunc2 = function () {
        return userRouteJump("/subpackage/pages/addProject/index");
      };

      this.anonymousFunc3 = function () {
        return userRouteJump("/subpackage/pages/addSkill/index");
      };

      var loopArray136 = data.resume_top.has_top != 0 && data.resume_top.is_top != 2 ? data.resume_top.top_provinces_str.map(function (v, i) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp3 = data.resume_top.has_top != 0 && data.resume_top.is_top != 2 ? i + i : null;
        return {
          $loopState__temp3: $loopState__temp3,
          $original: v.$original
        };
      }) : [];
      var loopArray137 = !showskill ? data.info.occupations.map(function (v, i) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp5 = !showskill ? i + i : null;
        return {
          $loopState__temp5: $loopState__temp5,
          $original: v.$original
        };
      }) : [];
      var loopArray138 = showskill ? data.info.occupations.map(function (v, i) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp7 = showskill ? i + i : null;
        return {
          $loopState__temp7: $loopState__temp7,
          $original: v.$original
        };
      }) : [];
      var loopArray139 = selfintrone ? data.introduces.tags.map(function (v, i) {
        v = {
          $original: (0, _taroWeapp.internal_get_original)(v)
        };
        var $loopState__temp9 = selfintrone ? i + i : null;
        return {
          $loopState__temp9: $loopState__temp9,
          $original: v.$original
        };
      }) : [];
      var loopArray140 = projectlength != 0 ? project.map(function (item, _anonIdx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $anonymousCallee__28 = projectlength != 0 ? item.$original.image.map(function (v, i) {
          v = {
            $original: (0, _taroWeapp.internal_get_original)(v)
          };
          var $loopState__temp11 = projectlength != 0 ? i + i : null;
          return {
            $loopState__temp11: $loopState__temp11,
            $original: v.$original
          };
        }) : [];
        return {
          $anonymousCallee__28: $anonymousCallee__28,
          $original: item.$original
        };
      }) : [];
      var loopArray141 = skilllength != 0 ? skillbooksone.map(function (item, i) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp13 = skilllength != 0 ? i + i : null;
        var $anonymousCallee__29 = skilllength != 0 ? item.$original.image.map(function (v, i) {
          v = {
            $original: (0, _taroWeapp.internal_get_original)(v)
          };
          var $loopState__temp15 = skilllength != 0 ? i + i : null;
          return {
            $loopState__temp15: $loopState__temp15,
            $original: v.$original
          };
        }) : [];
        return {
          $loopState__temp13: $loopState__temp13,
          $anonymousCallee__29: $anonymousCallee__29,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        data: data,
        loopArray136: loopArray136,
        loopArray137: loopArray137,
        loopArray138: loopArray138,
        loopArray139: loopArray139,
        loopArray140: loopArray140,
        loopArray141: loopArray141,
        showcomplete: showcomplete,
        IMGCDNURL: _index2.IMGCDNURL,
        showtopone: showtopone,
        showpassre: showpassre,
        passre: passre,
        nopassre: nopassre,
        index: index,
        checkstatus: checkstatus,
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
        showtop: showtop,
        selfintrone: selfintrone,
        checktwo: checktwo,
        selfintro: selfintro,
        projectlength: projectlength,
        project_count: project_count,
        project: project,
        skilllength: skilllength,
        skillbooksone: skillbooksone,
        checkfourf: checkfourf,
        selectdata: selectdata
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
  }]);

  return NewJob;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3"], _class.$$componentPath = "pages/resume/newJob/index", _temp2);


NewJob.config = { navigationBarTitleText: '找活名片' };
exports.default = NewJob;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(NewJob, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/resume/newJob/index.tsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/resume/newJob/index.tsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/resume/newJob/index.wxml";

/***/ }),

/***/ "./src/pages/resume/newJob/index.scss":
/*!********************************************!*\
  !*** ./src/pages/resume/newJob/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/newJob/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/resume/newJob/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/resume/newJob/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/resume/newJob/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/resume/newJob/index.tsx?taro&type=script&parse=PAGE&":
/*!************************************************************************!*\
  !*** ./src/pages/resume/newJob/index.tsx?taro&type=script&parse=PAGE& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/resume/newJob/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/resume/newJob/index.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************!*\
  !*** ./src/pages/resume/newJob/index.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/zhangyibo/TaroTs-YuPaoWang/yupaowang/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/resume/newJob/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_zhangyibo_TaroTs_YuPaoWang_yupaowang_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/resume/newJob/index.tsx","runtime","taro","vendors","common"]]]);