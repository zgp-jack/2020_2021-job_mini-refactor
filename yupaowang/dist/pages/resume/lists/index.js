(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/resume/lists/index"],{

/***/ "./src/pages/resume/lists/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/resume/lists/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/lists/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/resume/lists/index.tsx ***!
  \******************************************/
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

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _lists = __webpack_require__(/*! ../../../config/pages/lists */ "./src/config/pages/lists.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/lists/index.scss");

var _index3 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _resume = __webpack_require__(/*! ../../../hooks/publish/resume */ "./src/hooks/publish/resume.ts");

var _resume2 = _interopRequireDefault(_resume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResumeLists = function (_Taro$Component) {
  _inherits(ResumeLists, _Taro$Component);

  function ResumeLists() {
    _classCallCheck(this, ResumeLists);

    var _this = _possibleConstructorReturn(this, (ResumeLists.__proto__ || Object.getPrototypeOf(ResumeLists)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '工人找活列表',
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: "dark"
    };

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__35", "$compid__36", "$compid__37", "refresh", "infoData", "login"];
    _this.customComponents = ["Search", "ResumeCondition", "WechatNotice", "ResumeList"];
    return _this;
  }

  _createClass(ResumeLists, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(ResumeLists.prototype.__proto__ || Object.getPrototypeOf(ResumeLists.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__35"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__35 = _genCompid2[0],
          $compid__35 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__36"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__36 = _genCompid4[0],
          $compid__36 = _genCompid4[1];

      var _genCompid5 = (0, _taroSwan.genCompid)(__prefix + "$compid__37"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__37 = _genCompid6[0],
          $compid__37 = _genCompid6[1];
      // 设置字段默认值


      var hasSortFlag = '1';
      var hasTime = '1';
      var hasTop = '1';
      var lastNormalPos = '0';
      var lastSortFlagPos = '0';
      var lastTimePos = '0';

      var _useResume = (0, _resume2.default)(),
          infoData = _useResume.infoData,
          introducesData = _useResume.introducesData;

      var login = (0, _redux.useSelector)(function (store) {
        return store.User['login'];
      });
      // * 获取选择城市缓存
      var userListChooseCity = _taroSwan2.default.getStorageSync(_store.UserListChooseCity);
      // * 筛选数据
      var DEFAULT_CONDITION = [{ id: _lists.AreaPickerKey, text: userListChooseCity ? userListChooseCity.name : '全国' }, { id: _lists.ClassifyPickerKey, text: '工种' }, { id: _lists.MemberPickerKey, text: '队伍' }, { id: _lists.ResumeFilterPickerKey, text: '推荐' }];
      // 是否还有下一页

      var _useState = (0, _taroSwan.useState)(true),
          _useState2 = _slicedToArray(_useState, 2),
          hasMore = _useState2[0],
          setHasMore = _useState2[1];
      // 设置顶部筛选条件数据


      var _useState3 = (0, _taroSwan.useState)(DEFAULT_CONDITION),
          _useState4 = _slicedToArray(_useState3, 2),
          condition = _useState4[0],
          setCondition = _useState4[1];
      // * 搜索数据 备份


      var _useState5 = (0, _taroSwan.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          remark = _useState6[0],
          setRemark = _useState6[1];
      // * 标记是否是在刷新状态


      var _useState7 = (0, _taroSwan.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          refresh = _useState8[0],
          setRefresh = _useState8[1];
      // * 定义列表数组


      var _useState9 = (0, _taroSwan.useState)([]),
          _useState10 = _slicedToArray(_useState9, 2),
          lists = _useState10[0],
          setLists = _useState10[1];
      // * 定义data


      var _useState11 = (0, _taroSwan.useState)({
        page: 1,
        occupations: '',
        keywords: '',
        sort: 'recommend',
        location: '',
        area_id: userListChooseCity ? userListChooseCity.id : '',
        type: '',
        last_refresh_time_pos: 0
      }),
          _useState12 = _slicedToArray(_useState11, 2),
          searchData = _useState12[0],
          setSearchData = _useState12[1];
      // 特殊字段默认值


      var normalFieldReset = {
        has_sort_flag: hasSortFlag,
        has_time: hasTime,
        has_top: hasTop,
        last_sort_flag_pos: lastSortFlagPos,
        last_normal_pos: lastNormalPos,
        last_time_pos: lastTimePos
      };
      // 单独处理特殊字段

      var _useState13 = (0, _taroSwan.useState)(normalFieldReset),
          _useState14 = _slicedToArray(_useState13, 2),
          normalField = _useState14[0],
          setNormalField = _useState14[1];
      // * 请求列表数据


      (0, _taroSwan.useEffect)(function () {
        if (searchData.page === 1) {
          setLists([]);
        }
        (0, _index.getResumeList)(_extends({}, searchData, normalField)).then(function (res) {
          _taroSwan2.default.hideNavigationBarLoading();
          // 判断搜索的时候把内容清空回到顶部，再设置值
          if (res.errcode == 'ok') {
            var mydata = res.data;
            if (mydata.list && mydata.list.length) {
              var _mydata$has_sort_flag = mydata.has_sort_flag,
                  has_sort_flag = _mydata$has_sort_flag === undefined ? hasSortFlag : _mydata$has_sort_flag,
                  _mydata$has_time = mydata.has_time,
                  has_time = _mydata$has_time === undefined ? hasTime : _mydata$has_time,
                  _mydata$has_top = mydata.has_top,
                  has_top = _mydata$has_top === undefined ? hasTop : _mydata$has_top,
                  _mydata$last_sort_fla = mydata.last_sort_flag_pos,
                  last_sort_flag_pos = _mydata$last_sort_fla === undefined ? lastSortFlagPos : _mydata$last_sort_fla,
                  _mydata$last_normal_p = mydata.last_normal_pos,
                  last_normal_pos = _mydata$last_normal_p === undefined ? lastNormalPos : _mydata$last_normal_p,
                  _mydata$last_time_pos = mydata.last_time_pos,
                  last_time_pos = _mydata$last_time_pos === undefined ? lastTimePos : _mydata$last_time_pos;

              setNormalField({ has_sort_flag: has_sort_flag, has_time: has_time, has_top: has_top, last_sort_flag_pos: last_sort_flag_pos, last_normal_pos: last_normal_pos, last_time_pos: last_time_pos });
            }
            if (mydata.list && !mydata.list.length) {
              setHasMore(false);
            }
            if (searchData.page === 1) {
              setLists([[].concat(_toConsumableArray(mydata.list))]);
            } else setLists([].concat(_toConsumableArray(lists), [[].concat(_toConsumableArray(mydata.list))]));
            if (refresh) {
              setRefresh(false);
            }
          } else {
            (0, _index4.default)(res.errmsg);
          }
        });
      }, [searchData]);
      // * 监听下拉刷新
      // * 监听下拉刷新
      var pullDownAction = function pullDownAction() {
        setRefresh(true);
        setHasMore(true);
        setSearchData(_extends({}, searchData, { page: 1 }));
      };
      // * 触底加载下一页
      var getNextPageData = function getNextPageData() {
        if (!hasMore) {
          return;
        }
        setSearchData(_extends({}, searchData, { page: searchData.page + 1 }));
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroSwan2.default.navigateTo({
          url: url
        });
      };
      // * 更新筛选条件
      var setSearchDataAction = function setSearchDataAction(type, id, text) {
        var recondition = JSON.parse(JSON.stringify(condition));
        var i = recondition.findIndex(function (item) {
          return item.id === type;
        });
        recondition[i].text = text;
        setCondition(recondition);
        setNormalField(normalFieldReset);
        if (type === _lists.ClassifyPickerKey) {
          setSearchData(_extends({}, searchData, { occupations: id, page: 1 }));
        } else if (type === _lists.AreaPickerKey) {
          setSearchData(_extends({}, searchData, { area_id: id, page: 1 }));
        } else if (type === _lists.ResumeFilterPickerKey) {
          setSearchData(_extends({}, searchData, { sort: id, page: 1 }));
        } else if (type === _lists.MemberPickerKey) {
          setSearchData(_extends({}, searchData, { type: id, page: 1 }));
        }
      };
      // 设置搜索内容
      var setSearchValData = function setSearchValData() {
        setNormalField(normalFieldReset);
        setSearchData(_extends({}, searchData, { keywords: remark, page: 1 }));
      };
      var handleClickToRankRules = function handleClickToRankRules() {
        _taroSwan2.default.navigateTo({ url: '/pages/rank-rules/index' });
      };
      var anonymousState__temp = function anonymousState__temp(val) {
        return setRemark(val);
      };
      var anonymousState__temp2 = function anonymousState__temp2() {
        return setSearchValData();
      };
      var anonymousState__temp3 = function anonymousState__temp3(type, id, text) {
        return setSearchDataAction(type, id, text);
      };
      this.anonymousFunc0 = function () {
        return pullDownAction();
      };
      this.anonymousFunc1 = function () {
        return getNextPageData();
      };
      this.anonymousFunc2 = function () {
        return userRouteJump(_index2.PUBLISHRESUME);
      };
      _taroSwan.propsManager.set({
        "placeholder": '\u627E\u5DE5\u4EBA\u3001\u627E\u961F\u4F0D\u3001\u627E\u73ED\u7EC4',
        "value": "",
        "setRemark": anonymousState__temp,
        "setSearchData": anonymousState__temp2
      }, $compid__35, $prevCompid__35);
      _taroSwan.propsManager.set({
        "data": condition,
        "setSearchData": anonymousState__temp3
      }, $compid__36, $prevCompid__36);
      _taroSwan.propsManager.set({
        "data": lists,
        "hasMore": hasMore
      }, $compid__37, $prevCompid__37);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__35: $compid__35,
        $compid__36: $compid__36,
        $compid__37: $compid__37,
        refresh: refresh,
        infoData: infoData,
        login: login
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return ResumeLists;
}(_taroSwan2.default.Component);

ResumeLists.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"];
ResumeLists.$$componentPath = "pages/resume/lists/index";
ResumeLists.config = { navigationBarTitleText: '工人找活列表', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = ResumeLists;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(ResumeLists));

/***/ })

},[["./src/pages/resume/lists/index.tsx","runtime","vendors"]]]);