(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/published/recruit/index"],{

/***/ "./src/pages/published/recruit/config.ts":
/*!***********************************************!*\
  !*** ./src/pages/published/recruit/config.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HeaderList = [{
  title: '全部',
  id: 'all'
}, {
  title: '正在招',
  id: 'being'
}, {
  title: '审核中',
  id: 'checking'
}, {
  title: '未通过',
  id: 'fail'
}, {
  title: '已招满',
  id: 'end'
}];
exports.default = HeaderList;

/***/ }),

/***/ "./src/pages/published/recruit/index.scss":
/*!************************************************!*\
  !*** ./src/pages/published/recruit/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/published/recruit/index.tsx":
/*!***********************************************!*\
  !*** ./src/pages/published/recruit/index.tsx ***!
  \***********************************************/
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

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _config = __webpack_require__(/*! ./config */ "./src/pages/published/recruit/config.ts");

var _config2 = _interopRequireDefault(_config);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./index.scss */ "./src/pages/published/recruit/index.scss");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _index3 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PublishedRecruit = function (_Taro$Component) {
  _inherits(PublishedRecruit, _Taro$Component);

  function PublishedRecruit() {
    _classCallCheck(this, PublishedRecruit);

    var _this = _possibleConstructorReturn(this, (PublishedRecruit.__proto__ || Object.getPrototypeOf(PublishedRecruit)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '我的招工信息',
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: "dark"
    };

    _this.$usedState = ["loopArray56", "loopArray57", "HeaderList", "refresh", "lists", "IMGCDNURL", "more", "searchData"];
    _this.anonymousFunc0Map = {};
    _this.anonymousFunc3Map = {};
    _this.anonymousFunc4Map = {};
    _this.anonymousFunc5Map = {};
    _this.anonymousFunc6Map = {};
    _this.anonymousFunc7Map = {};
    _this.anonymousFunc8Map = {};
    _this.customComponents = ["Auth", "Nodata", "Tabbar"];
    return _this;
  }

  _createClass(PublishedRecruit, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(PublishedRecruit.prototype.__proto__ || Object.getPrototypeOf(PublishedRecruit.prototype), '_constructor', this).call(this, props);
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
      // 当前高亮key

      var _useState = (0, _taroTt.useState)(_config2.default[0].id),
          _useState2 = _slicedToArray(_useState, 2),
          id = _useState2[0],
          setId = _useState2[1];
      // 是否还有下一页


      var _useState3 = (0, _taroTt.useState)(true),
          _useState4 = _slicedToArray(_useState3, 2),
          more = _useState4[0],
          setMore = _useState4[1];
      // 数据加载中


      var _useState5 = (0, _taroTt.useState)(false),
          _useState6 = _slicedToArray(_useState5, 2),
          loading = _useState6[0],
          setLoading = _useState6[1];
      // 是否下拉刷新


      var _useState7 = (0, _taroTt.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          refresh = _useState8[0],
          setRefresh = _useState8[1];
      // 已发布招工列表


      var _useState9 = (0, _taroTt.useState)([]),
          _useState10 = _slicedToArray(_useState9, 2),
          lists = _useState10[0],
          setLists = _useState10[1];
      // 获取用户信息


      var user = (0, _redux.useSelector)(function (state) {
        return state.User;
      });

      var _useState11 = (0, _taroTt.useState)({
        mid: user.userId,
        uuid: user.uuid,
        page: 1,
        type: id
      }),
          _useState12 = _slicedToArray(_useState11, 2),
          searchData = _useState12[0],
          setSearchData = _useState12[1];
      // 当redux更新后 ， 立即更新用户数据


      (0, _taroTt.useEffect)(function () {
        if (!user.login || loading) {
          return;
        }
        setSearchData(_extends({}, searchData, { mid: user.userId, uuid: user.uuid }));
      }, [user]);
      // 返回刷新页面
      (0, _taroTt.useDidShow)(function () {
        setSearchData(_extends({}, searchData, { page: 1 }));
      });
      // 加载数据类别
      var getPublishedRecruitLists = function getPublishedRecruitLists() {
        setLoading(true);
        (0, _index.userGetPublishedRecruitLists)(searchData).then(function (res) {
          if (res.errcode == 'ok') {
            var list = res.data.lists;
            var len = list.length;
            var page = searchData.page;
            setMore(len ? true : false);
            if (page === 1) {
              setLists(list);
            } else {
              setLists([].concat(_toConsumableArray(lists), _toConsumableArray(list)));
            }
            if (refresh) {
              setRefresh(false);
              _taroTt2.default.stopPullDownRefresh();
              _taroTt2.default.hideNavigationBarLoading();
            }
            setLoading(false);
          } else {
            (0, _index4.default)(res.errmsg);
          }
        }).catch(function () {
          if (refresh) {
            setRefresh(false);
            _taroTt2.default.stopPullDownRefresh();
            _taroTt2.default.hideNavigationBarLoading();
          }
          setLoading(false);
        });
      };
      // 用户切换招工状态列表
      var userChangePublishedItem = function userChangePublishedItem(key) {
        setId(key);
        setSearchData(_extends({}, searchData, { type: key, page: 1 }));
      };
      (0, _taroTt.useEffect)(function () {
        if (!user.login || loading) {
          return;
        }
        getPublishedRecruitLists();
      }, [searchData, user]);
      // 加载下一页
      var getNextPageData = function getNextPageData() {
        if (!more || loading) {
          return;
        }
        setSearchData(_extends({}, searchData, { page: searchData.page + 1 }));
      };
      // 刷新当前页
      var reloadPage = function reloadPage() {
        _taroTt2.default.showNavigationBarLoading();
        setRefresh(true);
        setSearchData(_extends({}, searchData, { page: 1 }));
      };
      // 停止招工
      var userStopRecruit = function userStopRecruit(id, i) {
        (0, _index.userChangeRecruitStatus)(id).then(function (res) {
          (0, _index4.default)(res.errmsg);
          if (res.errcode == 'ok') {
            var bakLists = lists;
            bakLists[i].is_check = res.data.is_check.toString();
            bakLists[i].is_end = res.data.is_end.toString();
            if (bakLists[i].top_data) {
              bakLists[i].top_data.is_top = res.data.top.is_top.toString();
            }
            setLists([].concat(_toConsumableArray(bakLists)));
          }
        });
      };
      // 跳转
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      // 取消置顶 jobUpdateTopStatusAction
      var handlCancel = function handlCancel(id, index) {
        var params = {
          infoId: id,
          status: 0
        };
        (0, _index.jobUpdateTopStatusAction)(params).then(function (res) {
          detailUserSetTopAction(res, index);
        });
      };
      // 已有置顶取消置顶操作  未置顶 但未到期 相同判断
      var detailUserSetTopAction = function detailUserSetTopAction(res, index) {
        if (res.errcode === 'ok') {
          (0, _index4.default)(res.errmsg);
          var mylists = JSON.parse(JSON.stringify(lists));
          mylists[index].top_data.is_top = res.data.top.is_top;
          setLists(mylists);
        } else if (res.errcode === 'auth_forbid') {
          // 去实名
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            cancelText: '取消',
            confirmText: '去实名',
            success: function success(res) {
              if (res.confirm) {
                var backtwo = "backtwo";
                _taroTt2.default.navigateTo({
                  url: "/pages/realname/index?backtwo=backtwo"
                });
              }
            }
          });
          return;
        } else if (res.errcode == "member_forbid") {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            cancelText: "取消",
            confirmText: "联系客服",
            success: function success(res) {
              if (res.confirm) {
                _taroTt2.default.makePhoneCall({
                  phoneNumber: _index2.SERVERPHONE
                });
              }
            }
          });
          return;
        } else {
          _taroTt2.default.showToast({
            title: res.errmsg,
            icon: "none",
            duration: 1500
          });
        }
      };
      //置顶
      var handleTopping = function handleTopping(item, index) {
        if (item.is_end === '2') {
          _taroTt2.default.showModal({
            title: '提示',
            content: '已招到状态不能进行置顶操作，请修改招工状态',
            showCancel: false
          });
          return false;
        }
        if (item.top == '1') {
          var now = new Date().getTime() / 1000; // 当前时间戳
          var data = item.top_data; //置顶数据
          var endtime = data.end_time; //置顶到期时间
          var toping = data.is_top; // 是否置顶状态
          var showTime = now > parseInt(endtime) ? true : false; // 置顶是否过期 已过期
          if (showTime) {
            //如果置顶过期
            userRouteJump("/pages/topping/index?id=" + item.id);
            return false;
          }
          var params = {
            infoId: item.id,
            status: toping == '0' ? '1' : "0"
          };
          (0, _index.jobUpdateTopStatusAction)(params).then(function (res) {
            detailUserSetTopAction(res, index);
          });
        } else {
          userRouteJump("/pages/topping/index?id=" + item.id);
        }
      };
      this.anonymousFunc1 = function () {
        return reloadPage();
      };
      this.anonymousFunc2 = function () {
        return getNextPageData();
      };
      var loopArray56 = _config2.default.map(function (item, __index0) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey = "fgzzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return userChangePublishedItem(item.$original.id);
        };
        var $loopState__temp2 = (0, _classnames2.default)({
          'user-published-header-item': true,
          'user-published-header-item-active': id === item.$original.id
        });
        return {
          _$indexKey: _$indexKey,
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      });
      var loopArray57 = lists.map(function (item, index) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey2 = "fhzzz" + index;
        _this2.anonymousFunc3Map[_$indexKey2] = function () {
          return userRouteJump("/pages/detail/info/index?id=" + item.$original.id);
        };
        var _$indexKey3 = "fizzz" + index;
        _this2.anonymousFunc4Map[_$indexKey3] = function () {
          return userRouteJump("/pages/recruit/publish/index?id=" + item.$original.id);
        };
        var _$indexKey4 = "fjzzz" + index;
        _this2.anonymousFunc5Map[_$indexKey4] = function () {
          return userStopRecruit(item.$original.id, index);
        };
        var _$indexKey5 = "gazzz" + index;
        _this2.anonymousFunc6Map[_$indexKey5] = function () {
          return handlCancel(item.$original.id, index);
        };
        var _$indexKey6 = "gbzzz" + index;
        _this2.anonymousFunc7Map[_$indexKey6] = function () {
          return handleTopping(item.$original, index);
        };
        var _$indexKey7 = "gczzz" + index;
        _this2.anonymousFunc8Map[_$indexKey7] = function () {
          return userRouteJump("/pages/topping/index?id=" + item.$original.id + "&type=1");
        };
        return {
          _$indexKey2: _$indexKey2,
          _$indexKey3: _$indexKey3,
          _$indexKey4: _$indexKey4,
          _$indexKey5: _$indexKey5,
          _$indexKey6: _$indexKey6,
          _$indexKey7: _$indexKey7,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        loopArray56: loopArray56,
        loopArray57: loopArray57,
        HeaderList: _config2.default,
        refresh: refresh,
        lists: lists,
        IMGCDNURL: _index2.IMGCDNURL,
        more: more,
        searchData: searchData
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
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(_$indexKey2) {
      var _anonymousFunc3Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc3Map[_$indexKey2] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey2].apply(_anonymousFunc3Map, e);
    }
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(_$indexKey3) {
      var _anonymousFunc4Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc4Map[_$indexKey3] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey3].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(_$indexKey4) {
      var _anonymousFunc5Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc5Map[_$indexKey4] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey4].apply(_anonymousFunc5Map, e);
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(_$indexKey5) {
      var _anonymousFunc6Map;

      ;

      for (var _len5 = arguments.length, e = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        e[_key5 - 1] = arguments[_key5];
      }

      return this.anonymousFunc6Map[_$indexKey5] && (_anonymousFunc6Map = this.anonymousFunc6Map)[_$indexKey5].apply(_anonymousFunc6Map, e);
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(_$indexKey6) {
      var _anonymousFunc7Map;

      ;

      for (var _len6 = arguments.length, e = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
        e[_key6 - 1] = arguments[_key6];
      }

      return this.anonymousFunc7Map[_$indexKey6] && (_anonymousFunc7Map = this.anonymousFunc7Map)[_$indexKey6].apply(_anonymousFunc7Map, e);
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(_$indexKey7) {
      var _anonymousFunc8Map;

      ;

      for (var _len7 = arguments.length, e = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        e[_key7 - 1] = arguments[_key7];
      }

      return this.anonymousFunc8Map[_$indexKey7] && (_anonymousFunc8Map = this.anonymousFunc8Map)[_$indexKey7].apply(_anonymousFunc8Map, e);
    }
  }]);

  return PublishedRecruit;
}(_taroTt2.default.Component);

PublishedRecruit.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8"];
PublishedRecruit.$$componentPath = "pages/published/recruit/index";
PublishedRecruit.config = { navigationBarTitleText: '我的招工信息', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = PublishedRecruit;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(PublishedRecruit, true));

/***/ })

},[["./src/pages/published/recruit/index.tsx","runtime","vendors"]]]);