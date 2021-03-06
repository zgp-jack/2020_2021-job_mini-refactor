(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/resume/preview/index"],{

/***/ "./src/pages/resume/preview/index.scss":
/*!*********************************************!*\
  !*** ./src/pages/resume/preview/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/preview/index.tsx":
/*!********************************************!*\
  !*** ./src/pages/resume/preview/index.tsx ***!
  \********************************************/
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

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index3 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/preview/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = function (_Taro$Component) {
  _inherits(Preview, _Taro$Component);

  function Preview() {
    _classCallCheck(this, Preview);

    var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '找活名片'
    };

    _this.$usedState = ["data", "loopArray102", "loopArray103", "loopArray104", "loopArray105", "IMGCDNURL", "checkpan", "checkone", "headerimg", "age", "sex", "project", "skillbooksone", "ISCANSHARE", "telephone"];
    _this.anonymousFunc0Map = {};
    _this.anonymousFunc2Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Preview, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Preview.prototype.__proto__ || Object.getPrototypeOf(Preview.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
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
      // uuid 

      var _useState = (0, _taroSwan.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          uuid = _useState2[0],
          setUuid = _useState2[1];
      // 左上角图片


      var _useState3 = (0, _taroSwan.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          checkpan = _useState4[0],
          setCheckpan = _useState4[1];
      // 图片审核中


      var _useState5 = (0, _taroSwan.useState)(false),
          _useState6 = _slicedToArray(_useState5, 2),
          checkone = _useState6[0],
          setCheckone = _useState6[1];
      // 头像


      var _useState7 = (0, _taroSwan.useState)(''),
          _useState8 = _slicedToArray(_useState7, 2),
          headerimg = _useState8[0],
          setHeaderimg = _useState8[1];
      // 性别


      var _useState9 = (0, _taroSwan.useState)('未填写'),
          _useState10 = _slicedToArray(_useState9, 2),
          sex = _useState10[0],
          setSex = _useState10[1];
      // 年龄


      var _useState11 = (0, _taroSwan.useState)(''),
          _useState12 = _slicedToArray(_useState11, 2),
          age = _useState12[0],
          setAge = _useState12[1];
      // 电话


      var _useState13 = (0, _taroSwan.useState)('未填写'),
          _useState14 = _slicedToArray(_useState13, 2),
          telephone = _useState14[0],
          settelephone = _useState14[1];
      // 项目


      var _useState15 = (0, _taroSwan.useState)([]),
          _useState16 = _slicedToArray(_useState15, 2),
          project = _useState16[0],
          setProject = _useState16[1];
      // 技能


      var _useState17 = (0, _taroSwan.useState)([]),
          _useState18 = _slicedToArray(_useState17, 2),
          skillbooksone = _useState18[0],
          setSkillbooksone = _useState18[1];
      // 总数据


      var _useState19 = (0, _taroSwan.useState)({
        info: {
          username: '未填写',
          authentication: '',
          certificate_show: 0,
          nation: '',
          address: '',
          introduce: '',
          miniInfoOccupations: []
        },
        introduces: {
          hometown: '',
          experience_str: '',
          prof_degree_str: '',
          type_str: '',
          number_people: '',
          tags: []
        },
        project: [],
        certificates: [],
        content: {
          show_tips: 0
        }
      }),
          _useState20 = _slicedToArray(_useState19, 2),
          data = _useState20[0],
          setData = _useState20[1];

      (0, _taroSwan.useEffect)(function () {
        (0, _index.resumeListAction)().then(function (res) {
          if (res.errcode === 200) {
            var date = new Date();
            var dateo = date.getTime();
            var dateone = new Date(dateo);
            if (res.data.info.birthday) {
              if (dateone.getFullYear() - (+res.data.info.birthday.split("-")[0] - 0) == 0) {
                setAge('');
              } else {
                setAge(dateone.getFullYear() - (+res.data.info.birthday.split("-")[0] - 0) + "岁");
              }
            }
            // Taro.setStorageSync("introinfo", res.data.info)
            setSex(res.data.info.gender == '1' ? '男' : '女');
            setCheckpan(res.data.info.check == '0' ? true : false);
            setCheckone(res.data.info.check == '0' ? true : false);
            setHeaderimg(res.data.info.headerimg);
            setUuid(res.data.info.uuid);
            setData({ info: res.data.info, introduces: res.data.introduces, project: res.data.project, certificates: res.data.certificates, content: res.data.content });
            settelephone(res.data.info.tel);
            if (res.data.project.length === 0) {
              setProject([]);
              setSkillbooksone([]);
            } else {
              setSkillbooksone([res.data.certificates[0]]);
              if (res.data.project) {
                if (new Date(res.data.project[0].completion_time).getTime() / 86400000 < new Date().getTime() / 86400000) {
                  var item = res.data.project[0];
                  item.completion_timeTitle = 'zhijing';
                  setProject([item]);
                } else {
                  var _item = res.data.project[0];
                  _item.completion_timeTitle = 'zhijin';
                  setProject([_item]);
                }
              }
            }
          } else {
            _taroSwan2.default.showModal({
              title: '温馨提示',
              content: res.errmsg,
              showCancel: false
            });
            return;
          }
        });
      }, []);
      // 设置分享
      (0, _taroSwan.useShareAppMessage)(function () {
        return _extends({}, (0, _index2.getUserShareMessage)(), {
          path: "/pages/resume/detail?uuid=" + uuid
        });
      });
      // 点击图片
      var handleImg = function handleImg(e) {
        _taroSwan2.default.previewImage({
          current: e,
          urls: [e]
        });
      };
      this.anonymousFunc1 = function () {
        return _taroSwan2.default.navigateTo({ url: "/pages/resume/projectList/index?preview=1" });
      };
      this.anonymousFunc4 = function () {
        return _taroSwan2.default.navigateTo({ url: "/pages/resume/skillList/index?preview=1" });
      };
      var loopArray102 = data.info.miniInfoOccupations.length ? data.info.miniInfoOccupations.map(function (v, i) {
        v = {
          privateOriginal: (0, _taroSwan.internal_get_original)(v)
        };
        var loopState__temp2 = data.info.miniInfoOccupations.length ? i + i : null;
        return {
          loopState__temp2: loopState__temp2,
          privateOriginal: v.privateOriginal
        };
      }) : [];
      var loopArray103 = data.introduces.tags.length ? data.introduces.tags.map(function (v, i) {
        v = {
          privateOriginal: (0, _taroSwan.internal_get_original)(v)
        };
        var loopState__temp4 = data.introduces.tags.length ? i + i : null;
        return {
          loopState__temp4: loopState__temp4,
          privateOriginal: v.privateOriginal
        };
      }) : [];
      var loopArray104 = data.project.length ? project.map(function (item, i) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp6 = data.project.length ? i + i : null;
        var anonymousCallee__12 = data.project.length ? item.privateOriginal.image.map(function (v, i) {
          v = {
            privateOriginal: (0, _taroSwan.internal_get_original)(v)
          };
          var loopState__temp8 = data.project.length ? i + i : null;
          var _$indexKey = "baezz" + i + "-" + i;
          _this2.anonymousFunc0Map[_$indexKey] = function () {
            return handleImg(v.privateOriginal);
          };
          return {
            loopState__temp8: loopState__temp8,
            _$indexKey: _$indexKey,
            privateOriginal: v.privateOriginal
          };
        }) : [];
        return {
          loopState__temp6: loopState__temp6,
          anonymousCallee__12: anonymousCallee__12,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      var loopArray105 = data.certificates.length ? skillbooksone.map(function (item, __index3) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var anonymousCallee__13 = data.certificates.length ? item.privateOriginal.image.map(function (v, i) {
          v = {
            privateOriginal: (0, _taroSwan.internal_get_original)(v)
          };
          var loopState__temp10 = data.certificates.length ? i + i : null;
          var _$indexKey2 = "bafzz" + __index3 + "-" + i;
          _this2.anonymousFunc2Map[_$indexKey2] = function () {
            return handleImg(v.privateOriginal);
          };
          return {
            loopState__temp10: loopState__temp10,
            _$indexKey2: _$indexKey2,
            privateOriginal: v.privateOriginal
          };
        }) : [];
        return {
          anonymousCallee__13: anonymousCallee__13,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      Object.assign(this.__state, {
        data: data,
        loopArray102: loopArray102,
        loopArray103: loopArray103,
        loopArray104: loopArray104,
        loopArray105: loopArray105,
        IMGCDNURL: _index3.IMGCDNURL,
        checkpan: checkpan,
        checkone: checkone,
        headerimg: headerimg,
        age: age,
        sex: sex,
        project: project,
        skillbooksone: skillbooksone,
        ISCANSHARE: _index3.ISCANSHARE,
        telephone: telephone
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey2) {
      var _anonymousFunc2Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc2Map[_$indexKey2] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey2].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }]);

  return Preview;
}(_taroSwan2.default.Component);

Preview.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc4"];
Preview.$$componentPath = "pages/resume/preview/index";
Preview.config = { navigationBarTitleText: '找活名片' };
exports.default = Preview;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Preview, true));

/***/ })

},[["./src/pages/resume/preview/index.tsx","runtime","vendors"]]]);