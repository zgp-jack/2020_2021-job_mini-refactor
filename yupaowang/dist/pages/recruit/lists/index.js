(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/recruit/lists/index"],{

/***/ "./src/actions/publishWay.ts":
/*!***********************************!*\
  !*** ./src/actions/publishWay.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPublishWay = setPublishWay;
exports.getPublishWay = getPublishWay;

var _publishWay = __webpack_require__(/*! ../constants/publishWay */ "./src/constants/publishWay.ts");

function setPublishWay(data) {
  return {
    type: _publishWay.SETPUBLISHWAY,
    data: data
  };
}
function getPublishWay() {
  return {
    type: _publishWay.GETPUBLISHWAY
  };
}

/***/ }),

/***/ "./src/hooks/init_job_view/index.ts":
/*!******************************************!*\
  !*** ./src/hooks/init_job_view/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = useJobView;

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _publishWay = __webpack_require__(/*! ../../actions/publishWay */ "./src/actions/publishWay.ts");

var _index2 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useJobView() {
  var publishWay = (0, _redux.useSelector)(function (state) {
    return state.publishWay;
  });
  var login = (0, _redux.useSelector)(function (state) {
    return state.User['login'];
  });
  var dispatch = (0, _redux.useDispatch)();
  //是否为极速发布与快速发布请求,快速发布与极速发布跳转
  var initJobView = function initJobView() {
    if (login) {
      var flag = JSON.parse(JSON.stringify(publishWay));
      if (!flag.loginAfter) {
        (0, _index2.publishWayRea)().then(function (res) {
          var publishMethod = res.add_job_type;
          dispatch((0, _publishWay.setPublishWay)(_extends({}, publishWay, { loginWay: publishMethod, loginAfter: true })));
          var url = publishMethod == "fast_add_job" ? _index.PUBLISHRECRUIT : _index.PUBLISHFAST;
          _taroSwan2.default.navigateTo({
            url: url
          });
        }).catch(function () {
          _taroSwan2.default.navigateTo({
            url: _index.PUBLISHFAST
          });
        });
      } else {
        var way = publishWay.loginWay;
        var url = way == "fast_add_job" ? _index.PUBLISHRECRUIT : _index.PUBLISHFAST;
        _taroSwan2.default.navigateTo({
          url: url
        });
      }
    } else {
      var _flag = JSON.parse(JSON.stringify(publishWay));
      if (!_flag.loginBefore) {
        (0, _index2.publishWayRea)().then(function (res) {
          var publishMethod = res.add_job_type;
          dispatch((0, _publishWay.setPublishWay)(_extends({}, publishWay, { logoutWay: publishMethod, loginBefore: true })));
          var url = publishMethod == "fast_add_job" ? _index.PUBLISHRECRUIT : _index.PUBLISHFAST;
          _taroSwan2.default.navigateTo({
            url: url
          });
        }).catch(function () {
          _taroSwan2.default.navigateTo({
            url: _index.PUBLISHFAST
          });
        });
      } else {
        var _way = publishWay.logoutWay;
        var _url = _way == "fast_add_job" ? _index.PUBLISHRECRUIT : _index.PUBLISHFAST;
        _taroSwan2.default.navigateTo({
          url: _url
        });
      }
    }
  };
  return {
    initJobView: initJobView
  };
}

/***/ }),

/***/ "./src/pages/recruit/lists/index.scss":
/*!********************************************!*\
  !*** ./src/pages/recruit/lists/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/recruit/lists/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/recruit/lists/index.tsx ***!
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

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _index2 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _lists = __webpack_require__(/*! ../../../config/pages/lists */ "./src/config/pages/lists.ts");

var _index3 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ../../../hooks/init_job_view/index */ "./src/hooks/init_job_view/index.ts");

var _index6 = _interopRequireDefault(_index5);

__webpack_require__(/*! ./index.scss */ "./src/pages/recruit/lists/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recruit = function (_Taro$Component) {
  _inherits(Recruit, _Taro$Component);

  function Recruit() {
    _classCallCheck(this, Recruit);

    var _this = _possibleConstructorReturn(this, (Recruit.__proto__ || Object.getPrototypeOf(Recruit)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "$compid__29", "$compid__30", "$compid__31", "refresh"];
    _this.customComponents = ["Search", "RecruitCondition", "WechatNotice", "RecruitList"];
    return _this;
  }

  _createClass(Recruit, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Recruit.prototype.__proto__ || Object.getPrototypeOf(Recruit.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__29"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__29 = _genCompid2[0],
          $compid__29 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__30"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__30 = _genCompid4[0],
          $compid__30 = _genCompid4[1];

      var _genCompid5 = (0, _taroSwan.genCompid)(__prefix + "$compid__31"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__31 = _genCompid6[0],
          $compid__31 = _genCompid6[1];
      // 发布招工跳转不同模式（急速或者快速）


      var _useJobView = (0, _index6.default)(),
          initJobView = _useJobView.initJobView;
      // 输入关键词 没搜索 备份


      var _useState = (0, _taroSwan.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          remark = _useState2[0],
          setRemark = _useState2[1];
      // 是否还有下一页


      var _useState3 = (0, _taroSwan.useState)(true),
          _useState4 = _slicedToArray(_useState3, 2),
          hasMore = _useState4[0],
          setHasMore = _useState4[1];
      // * 获取选择城市缓存


      var userListChooseCity = _taroSwan2.default.getStorageSync(_store.UserListChooseCity);
      // * 配置筛选条件

      var _useState5 = (0, _taroSwan.useState)([{ id: _lists.AreaPickerKey, text: userListChooseCity ? userListChooseCity.name : '全国' }, { id: _lists.ClassifyPickerKey, text: '全部分类' }, { id: _lists.FilterPickerKey, text: '最新' }]),
          _useState6 = _slicedToArray(_useState5, 2),
          condition = _useState6[0],
          setCondition = _useState6[1];
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
        list_type: 'job',
        area_id: userListChooseCity ? userListChooseCity.id : '',
        classify_id: '',
        keywords: '',
        joblisttype: 'newest',
        token: ''
      }),
          _useState12 = _slicedToArray(_useState11, 2),
          searchData = _useState12[0],
          setSearchData = _useState12[1];
      // 更改某一项操作条件


      var editConditionAction = function editConditionAction(type, text) {
        var data = JSON.parse(JSON.stringify(condition));
        var i = data.findIndex(function (item) {
          return item.id === type;
        });
        var item = _extends({}, data[i], { text: text });
        data[i] = item;
        setCondition(data);
      };
      // 用户定位之后重新设置搜索条件
      var resetLocationSearch = function resetLocationSearch(data) {
        var city = (0, _area.getCityInfo)(data);
        _taroSwan2.default.setStorageSync(_store.UserListChooseCity, city); //第一次默认选中
        setLists([]);
        editConditionAction('area', city.name);
        setSearchData(_extends({}, searchData, { page: 1, area_id: city.id }));
      };
      // 用户获取定位
      var getUserLocation = function getUserLocation() {
        // 使用用户选择的城市
        if (userListChooseCity) {
          setSearchData(_extends({}, searchData, { page: 1, area_id: userListChooseCity.id }));
        } else {
          var userLocationCity = _taroSwan2.default.getStorageSync(_store.UserLocationCity);
          if (userLocationCity) {
            resetLocationSearch(userLocationCity);
            return;
          }
          (0, _index2.userAuthLoction)().then(function (gpsLocation) {
            resetLocationSearch(gpsLocation);
          }).catch(function () {
            // 拒绝授权默认全国
            _taroSwan2.default.setStorageSync(_store.UserListChooseCity, _area.AREACHINA);
            setLists([]);
            setSearchData(_extends({}, searchData, { page: 1, area_id: _area.AREACHINA.id }));
          });
        }
      };
      // 请求列表方法
      var getRecruitListAction = function getRecruitListAction() {
        if (searchData.page == 1) {
          setLists([]);
        }
        (0, _index.getRecruitList)(searchData).then(function (res) {
          _taroSwan2.default.hideNavigationBarLoading();
          if (res.errcode == 'ok') {
            if (res.data) {
              if (!res.data.length) {
                setHasMore(false);
              }
              if (searchData.page === 1) {
                setLists([[].concat(_toConsumableArray(res.data))]);
              } else {
                setLists([].concat(_toConsumableArray(lists), [[].concat(_toConsumableArray(res.data))]));
              }
            } else {
              if (searchData.page === 1) {
                setLists([[]]);
              }
              setHasMore(false);
            }
            if (refresh) {
              setRefresh(false);
            }
          } else {
            (0, _index4.default)(res.errmsg);
          }
        });
      };
      // * 请求列表数据
      (0, _taroSwan.useEffect)(function () {
        getRecruitListAction();
        if (!searchData.area_id) {
          getUserLocation();
        }
      }, [searchData]);
      // * 触底加载下一页
      var getNextPageData = function getNextPageData() {
        if (!hasMore) {
          return;
        }
        _taroSwan2.default.showNavigationBarLoading();
        setSearchData(_extends({}, searchData, { page: searchData.page + 1 }));
      };
      // * 监听下拉刷新
      var pullDownAction = function pullDownAction() {
        setRefresh(true);
        setSearchData(_extends({}, searchData, { page: 1 }));
      };
      // * 发布招工
      var userPublishRecruit = function userPublishRecruit() {
        initJobView();
      };
      // * 更新筛选条件
      var setSearchDataAction = function setSearchDataAction(type, id, text) {
        var recondition = JSON.parse(JSON.stringify(condition));
        var i = recondition.findIndex(function (item) {
          return item.id === type;
        });
        recondition[i].text = text;
        setCondition(recondition);
        if (type === _lists.ClassifyPickerKey) {
          setSearchData(_extends({}, searchData, { classify_id: id, page: 1 }));
        } else if (type === _lists.AreaPickerKey) {
          setSearchData(_extends({}, searchData, { area_id: id, page: 1 }));
        } else {
          setSearchData(_extends({}, searchData, { joblisttype: id, page: 1 }));
        }
        // goToScrollTop()
      };
      // 输入搜索关键词
      var setSearchValData = function setSearchValData() {
        setSearchData(_extends({}, searchData, { keywords: remark, page: 1 }));
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
        return userPublishRecruit();
      };
      _taroSwan.propsManager.set({
        "placeholder": "\u627E\u6D3B\u3001\u627E\u5DE5\u4F5C",
        "value": "",
        "setRemark": anonymousState__temp,
        "setSearchData": anonymousState__temp2
      }, $compid__29, $prevCompid__29);
      _taroSwan.propsManager.set({
        "data": condition,
        "setSearchData": anonymousState__temp3
      }, $compid__30, $prevCompid__30);
      _taroSwan.propsManager.set({
        "data": lists,
        "hasMore": hasMore
      }, $compid__31, $prevCompid__31);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        $compid__29: $compid__29,
        $compid__30: $compid__30,
        $compid__31: $compid__31,
        refresh: refresh
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
  }]);

  return Recruit;
}(_taroSwan2.default.Component);

Recruit.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"];
Recruit.$$componentPath = "pages/recruit/lists/index";
exports.default = Recruit;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Recruit));

/***/ })

},[["./src/pages/recruit/lists/index.tsx","runtime","vendors"]]]);