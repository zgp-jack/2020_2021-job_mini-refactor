(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/resume/skillList/index"],{

/***/ "./src/pages/resume/skillList/index.scss":
/*!***********************************************!*\
  !*** ./src/pages/resume/skillList/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/skillList/index.tsx":
/*!**********************************************!*\
  !*** ./src/pages/resume/skillList/index.tsx ***!
  \**********************************************/
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

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/skillList/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SkillList = function (_Taro$Component) {
  _inherits(SkillList, _Taro$Component);

  function SkillList() {
    _classCallCheck(this, SkillList);

    var _this = _possibleConstructorReturn(this, (SkillList.__proto__ || Object.getPrototypeOf(SkillList)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '技能证书'
    };

    _this.$usedState = ["loopArray83", "data", "IMGCDNURL", "preview", "resume_uuid", "detail"];
    _this.anonymousFunc0Map = {};
    _this.anonymousFunc1Map = {};
    _this.anonymousFunc2Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(SkillList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(SkillList.prototype.__proto__ || Object.getPrototypeOf(SkillList.prototype), "_constructor", this).call(this, props);
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
      var router = (0, _taroTt.useRouter)();
      // 获取传递参数
      var _router$params = router.params,
          id = _router$params.id,
          preview = _router$params.preview,
          detail = _router$params.detail,
          location = _router$params.location,
          uuid = _router$params.uuid;
      // 刷新一次

      var _useState = (0, _taroTt.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          refresh = _useState2[0],
          setRefresh = _useState2[1];
      // 数据


      var _useState3 = (0, _taroTt.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          data = _useState4[0],
          setData = _useState4[1];
      // 设置uuid


      var _useState5 = (0, _taroTt.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          resume_uuid = _useState6[0],
          setResume_uuid = _useState6[1];

      (0, _taroTt.useDidShow)(function () {
        if (refresh) {
          setRefresh(false);
          return;
        }
        if (detail) {
          var params = {
            location: location,
            resume_uuid: uuid
          };
          (0, _index.resumeDetailAction)(params).then(function (res) {
            if (res.errcode === 'ok') {
              setData(res.certificates);
            }
          });
        } else {
          (0, _index.resumeListAction)().then(function (res) {
            setData(res.data.certificates);
            setResume_uuid(res.data.info.user_uuid);
          });
        }
      });
      // 点击方法
      var handleImg = function handleImg(e) {
        _taroTt2.default.previewImage({
          current: e,
          urls: [e]
        });
        setRefresh(true);
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      this.anonymousFunc3 = function () {
        return userRouteJump("/pages/resume/addSkill/index?id=" + id);
      };
      var loopArray83 = data.map(function (item, i) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey = "iizzz" + i;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return userRouteJump("/pages/resume/addSkill/index?type=" + i + "&id=" + id);
        };
        var _$indexKey2 = "ijzzz" + i;
        _this2.anonymousFunc1Map[_$indexKey2] = function () {
          return userRouteJump("/pages/resume/addSkill/index?type=" + i + "&id=" + id);
        };
        var $anonymousCallee__10 = item.$original.image.map(function (v, i) {
          v = {
            $original: (0, _taroTt.internal_get_original)(v)
          };
          var $loopState__temp2 = i + i;
          var _$indexKey3 = "jazzz" + i + "-" + i;
          _this2.anonymousFunc2Map[_$indexKey3] = function () {
            return handleImg(v.$original);
          };
          return {
            $loopState__temp2: $loopState__temp2,
            _$indexKey3: _$indexKey3,
            $original: v.$original
          };
        });
        return {
          _$indexKey: _$indexKey,
          _$indexKey2: _$indexKey2,
          $anonymousCallee__10: $anonymousCallee__10,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray83: loopArray83,
        data: data,
        IMGCDNURL: _index2.IMGCDNURL,
        preview: preview,
        resume_uuid: resume_uuid,
        detail: detail
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
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey3) {
      var _anonymousFunc2Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc2Map[_$indexKey3] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey3].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }]);

  return SkillList;
}(_taroTt2.default.Component);

SkillList.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3"];
SkillList.$$componentPath = "pages/resume/skillList/index";
SkillList.config = { navigationBarTitleText: '技能证书' };
exports.default = SkillList;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(SkillList, true));

/***/ })

},[["./src/pages/resume/skillList/index.tsx","runtime","vendors"]]]);