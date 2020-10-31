(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["subpackage/pages/ranking/index"],{

/***/ "./src/subpackage/pages/ranking/index.scss":
/*!*************************************************!*\
  !*** ./src/subpackage/pages/ranking/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/subpackage/pages/ranking/index.tsx":
/*!************************************************!*\
  !*** ./src/subpackage/pages/ranking/index.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/subpackage/pages/ranking/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RankingRules = function (_Taro$Component) {
  _inherits(RankingRules, _Taro$Component);

  function RankingRules() {
    _classCallCheck(this, RankingRules);

    var _this = _possibleConstructorReturn(this, (RankingRules.__proto__ || Object.getPrototypeOf(RankingRules)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '排名规则'
    };

    _this.$usedState = ["data", "loopArray1", "loopArray2", "isLogin", "showbutton"];
    _this.anonymousFunc0Map = {};
    _this.anonymousFunc1Map = {};
    _this.customComponents = ["Auth"];
    return _this;
  }

  _createClass(RankingRules, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(RankingRules.prototype.__proto__ || Object.getPrototypeOf(RankingRules.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var UserInfo = _taroTt2.default.getStorageSync('UserInfo');
      // 获取用户是否登录
      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });

      var _useState = (0, _taroTt.useState)(true),
          _useState2 = _slicedToArray(_useState, 2),
          showbutton = _useState2[0],
          setShowbutton = _useState2[1];
      // 判断是否需要出现登陆


      var _useState3 = (0, _taroTt.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          isLogin = _useState4[0],
          setIsLogin = _useState4[1];

      var _useState5 = (0, _taroTt.useState)({
        warm_tips: [],
        resume_data: {
          info: {
            uuid: ''
          }
        },
        sort_rule_lists: [],
        resume_info: {
          has_resume: 0,
          sort_flag: 0
        }
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          data = _useState6[0],
          setData = _useState6[1];

      (0, _taroTt.useDidShow)(function () {
        if (!UserInfo) {
          setShowbutton(false);
        }
        (0, _index.resumesSortAction)().then(function (res) {
          setData(res.data);
        });
      });
      // useEffect(()=>{
      //   resumesSortAction().then(res=>{
      //     setData(res.data)
      //   })
      // }, [])
      var handleBtn = function handleBtn(v) {
        // if (v.share_type && v.share_type == 'invite_friend'){
        // }
        // if (!login) return
        if (!login) {
          setIsLogin(true);
        }
        // 日志请求
        resumesAddClickLog(v.click_type);
        // 名片信息
        // console.log(v.jump.mini_path,'地址');
        // console.log(v.jump.need_jump,'need_jump')
        // return;
        if (data.resume_info.has_resume == 1 && v.jump.need_jump == 1) {
          // 到新增找活
          if (v.jump.mini_path = '/pages/clients-looking-for-work/finding-name-card/findingnamecard') {
            _taroTt2.default.navigateTo({
              url: "/pages/resume/newJobs/index"
            });
            // 项目
          } else if (v.jump.mini_path == '/pages/clients-looking-for-work/all-project-experience/allexperience') {
            _taroTt2.default.navigateTo({
              url: "/pages/resume/projectList/index?id=" + data.resume_data.info.uuid
            });
            // 技能
          } else if (v.jump.mini_path == '/pages/clients-looking-for-work/all-skills-certificate/skillscertificate') {
            _taroTt2.default.navigateTo({
              url: "/pages/resume/skillList/index?id=" + data.resume_data.info.uuid
            });
            // 充值
          } else if (v.jump.mini_path == '/pages/recharge/recharge') {
            _taroTt2.default.navigateTo({
              url: "/pages/recharge/index"
            });
            // 实名
          } else {
            _taroTt2.default.navigateTo({
              url: "/pages/realname/index"
            });
          }
          // 充值
        } else if (data.resume_info.has_resume == 0 && v.jump.mini_path == '/pages/recharge/recharge' && v.jump.need_jump == 1) {
          _taroTt2.default.navigateTo({
            url: "/pages/recharge/index"
          });
          // 真实姓名
        } else if (data.resume_info.has_resume == 0 && v.jump.mini_path == '/pages/realname/realname' && v.jump.need_jump == 1) {
          _taroTt2.default.navigateTo({
            url: "/pages/realname/index"
          });
          // 名片信息
        } else if (v.jump.need_jump == 1) {
          _taroTt2.default.navigateTo({
            url: "/pages/resume/newJobs/index"
          });
        }
      };
      var resumesAddClickLog = function resumesAddClickLog(click_type) {
        (0, _index.resumesAddClickLogAction)(click_type);
      };
      console.log(showbutton);
      var loopArray1 = data.sort_rule_lists.map(function (v, index) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp2 = index + index;
        var _$indexKey = "azzzz" + index;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          handleBtn(v.$original);
        };
        var _$indexKey2 = "bzzzz" + index;
        _this2.anonymousFunc1Map[_$indexKey2] = function () {
          handleBtn(v.$original);
        };
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          _$indexKey2: _$indexKey2,
          $original: v.$original
        };
      });
      var loopArray2 = data.warm_tips.map(function (v, index) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp4 = index + index;
        return {
          $loopState__temp4: $loopState__temp4,
          $original: v.$original
        };
      });
      Object.assign(this.__state, {
        data: data,
        loopArray1: loopArray1,
        loopArray2: loopArray2,
        isLogin: isLogin,
        showbutton: showbutton
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }]);

  return RankingRules;
}(_taroTt2.default.Component);

RankingRules.$$events = ["anonymousFunc0", "anonymousFunc1"];
RankingRules.$$componentPath = "subpackage/pages/ranking/index";
RankingRules.config = { navigationBarTitleText: '排名规则' };
exports.default = RankingRules;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(RankingRules, true));

/***/ })

},[["./src/subpackage/pages/ranking/index.tsx","runtime","vendors"]]]);