(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/topping/index"],{

/***/ "./src/actions/recruit_top.ts":
/*!************************************!*\
  !*** ./src/actions/recruit_top.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setRecruitTopArea;

var _recruit_top = __webpack_require__(/*! ../constants/recruit_top */ "./src/constants/recruit_top.ts");

function setRecruitTopArea(data) {
  return {
    type: _recruit_top.SET_RECRUIT_TOP_AREA,
    data: data
  };
}

/***/ }),

/***/ "./src/pages/topping/index.scss":
/*!**************************************!*\
  !*** ./src/pages/topping/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/topping/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/topping/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contextItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _index3 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _recruit_top = __webpack_require__(/*! ../../actions/recruit_top */ "./src/actions/recruit_top.ts");

var _recruit_top2 = _interopRequireDefault(_recruit_top);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/topping/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var contextItem = exports.contextItem = (0, _taroSwan.createContext)({});

var Topping = function (_Taro$Component) {
  _inherits(Topping, _Taro$Component);

  function Topping() {
    _classCallCheck(this, Topping);

    var _this = _possibleConstructorReturn(this, (Topping.__proto__ || Object.getPrototypeOf(Topping)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '招工置顶'
    };

    _this.$usedState = ["params", "data", "loopArray80", "loopArray81", "loopArray82", "loopArray83", "loopArray84", "province", "IMGCDNURL", "rec", "basics", "type", "list", "displayTime", "num", "endTime", "editData", "newTime", "day", "SERVERPHONE"];
    _this.anonymousFunc0Map = {};
    _this.anonymousFunc1Map = {};
    _this.anonymousFunc2Map = {};
    _this.anonymousFunc3Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Topping, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Topping.prototype.__proto__ || Object.getPrototypeOf(Topping.prototype), "_constructor", this).call(this, props);
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
      var dispatch = (0, _redux.useDispatch)();
      var AreParams = (0, _redux.useSelector)(function (store) {
        return store.recruitTop['AreParams'];
      });
      var router = (0, _taroSwan.useRouter)();
      var _router$params = router.params,
          id = _router$params.id,
          type = _router$params.type,
          rec = _router$params.rec,
          areaData = _router$params.areaData,
          endTimes = _router$params.endTimes,
          endTimeStr = _router$params.endTimeStr;
      // 获取userInfo

      var userInfo = _taroSwan2.default.getStorageSync(_store.UserInfo);

      var _useState = (0, _taroSwan.useState)({
        top_rules: []
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];
      // 积分


      var _useState3 = (0, _taroSwan.useState)(0),
          _useState4 = _slicedToArray(_useState3, 2),
          num = _useState4[0],
          setNum = _useState4[1];
      // 天


      var _useState5 = (0, _taroSwan.useState)(0),
          _useState6 = _slicedToArray(_useState5, 2),
          paramsDay = _useState6[0],
          setParamsDay = _useState6[1];
      //置顶天数


      var _useState7 = (0, _taroSwan.useState)('请选择置顶天数'),
          _useState8 = _slicedToArray(_useState7, 2),
          day = _useState8[0],
          setDay = _useState8[1];
      // 修改置顶天数


      var _useState9 = (0, _taroSwan.useState)('延长'),
          _useState10 = _slicedToArray(_useState9, 2),
          editData = _useState10[0],
          seteditDay = _useState10[1];
      // 下拉框总参数


      var _useState11 = (0, _taroSwan.useState)([]),
          _useState12 = _slicedToArray(_useState11, 2),
          list = _useState12[0],
          setList = _useState12[1];
      // 最大省市


      var _useState13 = (0, _taroSwan.useState)({
        max_city: 0,
        max_province: 0
      }),
          _useState14 = _slicedToArray(_useState13, 2),
          city = _useState14[0],
          setCity = _useState14[1];

      var _useState15 = (0, _taroSwan.useState)({
        city: [],
        province: [],
        whole: []
      }),
          _useState16 = _slicedToArray(_useState15, 2),
          params = _useState16[0],
          setParams = _useState16[1];

      var _useState17 = (0, _taroSwan.useState)([]),
          _useState18 = _slicedToArray(_useState17, 2),
          province = _useState18[0],
          setProvince = _useState18[1];
      // 到期时间


      var _useState19 = (0, _taroSwan.useState)(''),
          _useState20 = _slicedToArray(_useState19, 2),
          endTime = _useState20[0],
          setEndTime = _useState20[1];
      // 到期时间时间戳


      var _useState21 = (0, _taroSwan.useState)(0),
          _useState22 = _slicedToArray(_useState21, 2),
          end = _useState22[0],
          setEnd = _useState22[1];
      // 显示最新到期时间


      var _useState23 = (0, _taroSwan.useState)(false),
          _useState24 = _slicedToArray(_useState23, 2),
          displayTime = _useState24[0],
          setdisplayTime = _useState24[1];
      // 最新时间


      var _useState25 = (0, _taroSwan.useState)(''),
          _useState26 = _slicedToArray(_useState25, 2),
          newTime = _useState26[0],
          setNewTime = _useState26[1];
      // 修改时最大积分


      var _useState27 = (0, _taroSwan.useState)(0),
          _useState28 = _slicedToArray(_useState27, 2),
          maxNum = _useState28[0],
          setMaxNum = _useState28[1];
      // 找活省份最大的长度


      var _useState29 = (0, _taroSwan.useState)(0),
          _useState30 = _slicedToArray(_useState29, 2),
          provinceNum = _useState30[0],
          setProvinceNum = _useState30[1];
      // 找活天数


      var _useState31 = (0, _taroSwan.useState)('1'),
          _useState32 = _slicedToArray(_useState31, 2),
          recDay = _useState32[0],
          setRecDay = _useState32[1];

      var _useState33 = (0, _taroSwan.useState)({
        max_number: 0,
        province_integral: 0,
        max_top_days: 0,
        max_city: 0,
        max_province: 0
      }),
          _useState34 = _slicedToArray(_useState33, 2),
          basics = _useState34[0],
          setBasics = _useState34[1];
      // 当redux更新后 ，立即更新视图区域


      (0, _taroSwan.useEffect)(function () {
        setParams(_extends({}, AreParams));
        calcPrice(AreParams.city, AreParams.province, AreParams.whole);
      }, [AreParams]);
      // 修改超过最大就显示消耗积分
      (0, _taroSwan.useEffect)(function () {
        if (type) {
          if (!rec) {
            var val = {
              job_id: id,
              time: userInfo.tokenTime
            };
            (0, _index.jobGetTopAreasAction)(val).then(function (res) {
              if (res.errcode === 'ok') {
                setParams({ city: res.data.top_city, province: res.data.top_province, whole: res.data.top_country });
                dispatch((0, _recruit_top2.default)({ city: res.data.top_city, province: res.data.top_province, whole: res.data.top_country }));
                setEndTime(res.data.end_time_string);
                setEnd(res.data.end_time);
                setMaxNum(res.data.max_price);
              } else {
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false
                });
              }
            });
          }
        }
        // 找活
        if (rec) {
          _taroSwan2.default.setNavigationBarTitle({
            title: '找活置顶'
          });
          var _params = {
            interface_version: 'v2'
          };
          (0, _index.resumesTopConfigV2Action)(_params).then(function (res) {
            if (res.errcode === 'ok') {
              setData({ top_rules: res.data.top_rules });
              var array = [];
              for (var i = 0; i < res.data.days.length; i++) {
                array.push(i + "天");
              }
              if (type) {
                if (areaData) {
                  var areList = JSON.parse(areaData);
                  var _city = [];
                  var _province = [];
                  var whole = [];
                  var _recDay = Math.ceil((parseInt(endTimes) - new Date().getTime() / 1000) / 86400);
                  var maxPrice = 0;
                  areList.map(function (v) {
                    if (v.pid === '1') {
                      _city.push(v);
                    } else if (v.pid === '0') {
                      whole.push(v);
                    } else {
                      _province.push(v);
                    }
                  });
                  {
                    maxPrice = (_city.length * 20 + _province.length * 20) * _recDay;
                  }
                  setParams({ city: _city, province: _province, whole: whole });
                  dispatch((0, _recruit_top2.default)({ city: _city, province: _province, whole: whole }));
                  setEndTime(endTimeStr);
                  setEnd(parseInt(endTimes));
                  setMaxNum(maxPrice);
                }
              }
              setList(array);
              setCity({ max_city: res.data.max_city, max_province: res.data.max_province });
              setBasics({ province_integral: res.data.province_integral, max_number: res.data.max_number, max_top_days: res.data.max_top_days,
                max_province: res.data.max_province, max_city: res.data.max_city
              });
            } else {
              _taroSwan2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false
              });
            }
          });
        } else {
          (0, _index.jobTopConfigAction)().then(function (res) {
            if (res.errcode === 'ok') {
              setData({ top_rules: res.data.top_rules });
              setCity({ max_city: res.data.max_city, max_province: res.data.max_province });
              var array = [];
              var daysarr = res.data.days;
              for (var i = 0; i < daysarr.length; i++) {
                array.push(daysarr[i] + "天");
              }
              setList(array);
            } else {
              _taroSwan2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false
              });
            }
          });
        }
      }, []);
      var getMyDate = function getMyDate(str) {
        var oDate = new Date(str),
            oYear = oDate.getFullYear(),
            oMonth = oDate.getMonth() + 1,
            oDay = oDate.getDate(),
            oHour = oDate.getHours(),
            oMin = oDate.getMinutes(),
            oSen = oDate.getSeconds(),
            oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' + addZero(oMin);
        return oTime;
      };
      var addZero = function addZero(num) {
        if (parseInt(num) < 10) {
          num = '0' + num;
        }
        return num;
      };
      var handleClick = function handleClick(e) {
        setDay(list[e.detail.value]);
        if (type) {
          // 增加时间 新增天数*新的单价
          // 修改地区 单价比原单价大，差价*天数，
          // 时间和城市都改变了 新单价大于原单价 ：新价-旧价*剩余天数+新价格*新增天数 新单价小于原单价：旧价格*新增天数
          seteditDay('修改');
          setdisplayTime(true);
          // 时间
          var all = 86400000 * (parseInt(e.detail.value) + 1) + ((end - 0) * 1000 - 0);
          var _newTime = getMyDate(all);
          setNewTime(_newTime);
          // 获取旧价格
          var oldPrice = maxNum;
          // 获取价格
          var newPrice = undefined;
          if (rec) {
            newPrice = params.whole.length ? 500 : (params.city.length * 20 + params.province.length * 20) * 1;
          } else {
            newPrice = params.whole.length ? 500 : (params.city.length * 10 + params.province.length * 20) * 1;
          }
          // const newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
          // 时间差
          var remDay = (end - new Date().getTime() / 1000) / 86400;
          // 修改区域
          // 只改变时间
          var money = undefined;
          if (oldPrice === newPrice) {
            money = newPrice * (parseInt(e.detail.value) + 1);
          } else {
            if (newPrice - oldPrice > 0) {
              if (rec) {
                money = Math.round((newPrice - oldPrice) * remDay + (params.city.length * 20 + params.province.length * 20) * (parseInt(e.detail.value) + 1));
              } else {
                money = Math.round((newPrice - oldPrice) * remDay + newPrice * (parseInt(e.detail.value) + 1));
              }
            } else {
              money = oldPrice * (parseInt(e.detail.value) + 1);
            }
          }
          setNum(money);
        } else {
          if (params) {
            var numData = 0;
            if (params.whole.length) {
              numData = 500 * (parseInt(e.detail.value) + 1);
            } else {
              if (rec) {
                numData = (params.city.length * 20 + params.province.length * 20) * (parseInt(e.detail.value) + 1);
              } else {
                numData = (params.city.length * 10 + params.province.length * 20) * (parseInt(e.detail.value) + 1);
              }
            }
            setNum(numData);
          }
        }
        setParamsDay(parseInt(e.detail.value) + 1);
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroSwan2.default.navigateTo({
          url: url
        });
      };
      // 置顶
      var handleTopping = function handleTopping() {
        var province_ids = params.province.map(function (v) {
          return v.id;
        });
        var city_ids = params.city.map(function (v) {
          return v.id;
        });
        var country_ids = params.whole.map(function (v) {
          return v.id;
        });
        if (!province_ids.length && !city_ids.length && !country_ids.length) {
          _taroSwan2.default.showModal({
            title: '温馨提示',
            content: '请选择您的置顶城市',
            showCancel: false
          });
          return;
        }
        var detail = {
          is_country: country_ids.toString(),
          mid: userInfo.userId,
          province_ids: province_ids.toString(),
          city_ids: city_ids.toString(),
          day: paramsDay,
          job_id: id,
          time: userInfo.tokenTime
        };
        var editDetail = {
          is_country: params.whole.length ? 1 : 0,
          mid: userInfo.userId,
          province_ids: province_ids.toString(),
          city_ids: city_ids.toString(),
          update_days: paramsDay,
          job_id: id,
          time: userInfo.tokenTime,
          update_integral: num
        };
        // return
        if (type) {
          if (rec) {
            (0, _index.resumesUpdateTopResumeAction)(editDetail).then(function (res) {
              if (res.errcode === 'ok') {
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false,
                  success: function success() {
                    _taroSwan2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
                return;
              } else if (res.errcode === 'get_integral') {
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: true,
                  success: function success(res) {
                    if (res.confirm == true) {
                      _taroSwan2.default.navigateTo({
                        // 前往积分页面
                        url: "/pages/getintegral/index"
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode === 'auth_forbid') {
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  cancelText: '取消',
                  confirmText: '去实名',
                  success: function success(res) {
                    if (res.cancel) {
                      _taroSwan2.default.navigateBack({
                        delta: 1
                      });
                    } else if (res.confirm) {
                      var backtwo = "backtwo";
                      _taroSwan2.default.redirectTo({
                        url: "/pages/realname/index?backtwo=backtwo"
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode == "member_forbid") {
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: "mydata.errmsg",
                  cancelText: "取消",
                  confirmText: "联系客服",
                  success: function success(res) {
                    if (res.confirm) {
                      var tel = _index2.SERVERPHONE;
                      _taroSwan2.default.makePhoneCall({
                        phoneNumber: tel
                      });
                    }
                  }
                });
                return;
              } else {
                _taroSwan2.default.showToast({
                  title: res.errmsg,
                  icon: "none",
                  duration: 1500
                });
              }
            });
          } else {
            (0, _index.jobChangeTopAreasAction)(editDetail).then(function (res) {
              if (res.errcode === 'ok') {
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false,
                  success: function success() {
                    _taroSwan2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
                return;
              } else if (res.errcode === 'get_integral') {
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: true,
                  success: function success(res) {
                    if (res.confirm == true) {
                      _taroSwan2.default.navigateTo({
                        // 前往积分页面
                        url: "/pages/getintegral/index"
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode === 'auth_forbid') {
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  cancelText: '取消',
                  confirmText: '去实名',
                  success: function success(res) {
                    if (res.cancel) {
                      _taroSwan2.default.navigateBack({
                        delta: 1
                      });
                    } else if (res.confirm) {
                      var backtwo = "backtwo";
                      _taroSwan2.default.redirectTo({
                        url: "/pages/realname/index?backtwo=backtwo"
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode == "member_forbid") {
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: "mydata.errmsg",
                  cancelText: "取消",
                  confirmText: "联系客服",
                  success: function success(res) {
                    if (res.confirm) {
                      var tel = _index2.SERVERPHONE;
                      _taroSwan2.default.makePhoneCall({
                        phoneNumber: tel
                      });
                    }
                  }
                });
                return;
              } else {
                _taroSwan2.default.showToast({
                  title: res.errmsg,
                  icon: "none",
                  duration: 1500
                });
              }
            });
          }
        } else {
          if (!province_ids || !city_ids) {
            _taroSwan2.default.showModal({
              title: '温馨提示',
              content: '请设置置顶城市',
              showCancel: false
            });
            return;
          }
          if (paramsDay === 0) {
            _taroSwan2.default.showModal({
              title: '温馨提示',
              content: '请设置置顶天数',
              showCancel: false
            });
            return;
          }
          if (rec) {
            (0, _index.resumesDoTopV2Action)(detail).then(function (res) {
              if (res.errcode === 'ok') {
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false,
                  success: function success() {
                    _taroSwan2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
              }
            });
          } else {
            (0, _index.jobDoTopAction)(detail).then(function (res) {
              if (res.errcode === 'ok') {
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  showCancel: false,
                  success: function success() {
                    _taroSwan2.default.navigateBack({
                      delta: 1
                    });
                  }
                });
              }
            });
          }
        }
      };
      var handleAddJump = function handleAddJump() {
        userRouteJump("/pages/topping/distruction/index?max_city=" + city.max_city + "&max_province=" + city.max_province);
      };
      // 传递方法
      var transferFun = function transferFun(_ref) {
        var city = _ref.city,
            province = _ref.province,
            whole = _ref.whole;

        dispatch((0, _recruit_top2.default)({ city: city, province: province, whole: whole }));
        setParams({ city: city, province: province, whole: whole });
        calcPrice(city, province, whole);
      };
      var calcPrice = function calcPrice(city, province, whole) {
        // if (whole.length){
        //   if(type){
        //   }else{
        //     const numData = 500 * (paramsDay)
        //     setNum(numData);
        //   }
        // }else{
        if (city || province || whole) {
          if (type) {
            // 获取旧价格
            var oldPrice = maxNum;
            // 获取价格
            // 时间差
            var remDay = (end - new Date().getTime() / 1000) / 86400;
            var newPrice = undefined;
            if (rec) {
              newPrice = whole.length ? 500 : (city.length * 20 + province.length * 20) * 1;
            } else {
              newPrice = whole.length ? 500 : (city.length * 10 + province.length * 20) * 1;
            }
            // 修改区域
            var changeCity = true; //修改区域
            // 只改变时间
            var money = undefined;
            if (paramsDay !== 0 && oldPrice === newPrice) {
              money = newPrice * paramsDay;
            } else if (paramsDay === 0 && oldPrice > newPrice) {
              money = (newPrice - oldPrice) * paramsDay;
            } else if (paramsDay === 0 && changeCity) {
              // 剩余天数
              if (newPrice > oldPrice) {
                if (rec) {
                  // 新的大于旧的金额
                  // 新的减去旧的再*天数
                  // money = Math.round((newPrice - oldPrice));
                  // money = newPrice - oldPrice - moneys;
                  money = Math.round((newPrice - oldPrice) * remDay);
                } else {
                  money = Math.round((newPrice - oldPrice) * remDay);
                }
              }
            } else {
              // 时间变了，城市变了
              if (newPrice - oldPrice > 0) {
                if (rec) {
                  money = Math.round(newPrice - oldPrice + (city.length * 20 + province.length * 20) * paramsDay);
                  // money = Math.round(newPrice - oldPrice + oldPrice * paramsDay + newPrice * paramsDay)
                } else {
                  money = Math.round((newPrice - oldPrice) * remDay + newPrice * paramsDay);
                }
              } else {
                money = oldPrice * paramsDay;
              }
            }
            var _num = 0;
            if (money <= 0) {
              _num = 0;
            } else {
              _num = _num;
            }
            setNum(money);
          } else {
            var numData = 0;
            if (whole.length) {
              numData = 500 * paramsDay;
            } else {
              if (rec) {
                numData = (city.length * 20 + province.length * 20) * paramsDay;
              } else {
                numData = (city.length * 10 + province.length * 20) * paramsDay;
              }
            }
            setNum(numData);
          }
        }
      };
      var modifyFun = function modifyFun(province) {
        setProvince(province);
        // 设置积分
        recIntegral(province);
      };
      var recIntegral = function recIntegral(province) {
        var num = 0;
        if (province.length) {
          num = basics.province_integral * province.length * parseInt(recDay);
        } else {
          num = 0;
        }
        setNum(num);
      };
      // 删除
      var handleDel = function handleDel(v) {
        if (rec) {
          if (v.pid === '1') {
            params.city.map(function (val, i) {
              if (val.id === v.id) {
                params.city.splice(i, 1);
              }
            });
            setParams({ city: params.city, province: params.province, whole: params.whole });
            dispatch((0, _recruit_top2.default)({ city: params.city, province: params.province, whole: params.whole }));
          }
        }
        if (v.pid === '1') {
          params.province.map(function (val, i) {
            if (val.id === v.id) {
              params.province.splice(i, 1);
            }
          });
          setParams({ city: params.city, province: params.province, whole: params.whole });
          dispatch((0, _recruit_top2.default)({ city: params.city, province: params.province, whole: params.whole }));
        } else if (v.pid === '0') {
          params.whole.map(function (val, i) {
            if (val.id === v.id) {
              params.whole.splice(i, 1);
            }
          });
          setParams({ city: params.city, province: params.province, whole: params.whole });
          dispatch((0, _recruit_top2.default)({ city: params.city, province: params.province, whole: params.whole }));
        } else {
          params.city.map(function (val, i) {
            if (val.id === v.id) {
              params.city.splice(i, 1);
            }
          });
          setParams({ city: params.city, province: params.province, whole: params.whole });
          dispatch((0, _recruit_top2.default)({ city: params.city, province: params.province, whole: params.whole }));
        }
        // 积分 
        // 省市大于原来的省市就改变，不然就是直接最大积分
        // 获取旧价格
        var oldPrice = maxNum;
        // 获取价格
        var newPrice = void 0;
        if (rec) {
          newPrice = params.whole.length ? 500 : (params.city.length * 20 + params.province.length * 20) * 1;
        } else {
          newPrice = params.whole.length ? 500 : (params.city.length * 10 + params.province.length * 20) * 1;
        }
        // const newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
        // 时间差
        var remDay = (end - new Date().getTime() / 1000) / 86400;
        // 修改区域
        var changeCity = true; //修改区域
        // 修改时间
        var money = void 0;
        // 只改变时间
        if (paramsDay !== 0 && oldPrice === newPrice) {
          money = newPrice * paramsDay;
          // setShowNum(true);
        } else if (paramsDay === 0 && oldPrice > newPrice) {
          // var remDay =  (到期时间 - 现在时间)/ 86400
          // var remDay =  (old_end_time - now_time)/ 86400
          money = (newPrice - oldPrice) * paramsDay;
        } else if (paramsDay === 0 && changeCity) {
          // 剩余天数
          if (newPrice > oldPrice) {
            money = Math.round((newPrice - oldPrice) * remDay);
          }
        } else {
          // 时间变了，城市变了
          if (newPrice - oldPrice > 0) {
            money = Math.round((newPrice - oldPrice) * remDay + newPrice * paramsDay);
          } else {
            money = oldPrice * paramsDay;
          }
        }
        var num = 0;
        if (money <= 0) {
          num = 0;
        } else {
          num = money;
        }
        setNum(num);
      };
      // 取消
      var handleCancel = function handleCancel() {
        var oldPrice = maxNum;
        // 获取价格
        var newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
        // 时间差
        var remDay = (end - new Date().getTime() / 1000) / 86400;
        // 修改区域
        // 修改时间
        var money = void 0;
        // 只改变时间
        if (oldPrice > newPrice) {
          var _num2 = (newPrice - oldPrice) * 1;
          if (_num2 > 0) {
            money = _num2;
          } else {
            money = 0;
          }
        } else if (oldPrice == newPrice) {
          money = 0;
          // 价格没变
        } else {
          // 剩余天数
          if (newPrice > oldPrice) {
            money = Math.round((newPrice - oldPrice) * remDay);
          } else {
            money = oldPrice;
          }
        }
        setNum(money);
        setdisplayTime(false);
        setParamsDay(0);
      };
      var handleJump = function handleJump() {
        if (!rec) {
          userRouteJump("/pages/topping/distruction/index?max_city=" + city.max_city + "&max_province=" + city.max_province);
        } else {
          userRouteJump("/pages/topping/distruction/index?max_city=" + basics.max_city + "&max_province=" + basics.max_province);
        }
      };
      var handleRecDay = function handleRecDay(e) {
        var reg = /^\d{0,2}$/;
        if (!reg.test(e.detail.value)) {
          _taroSwan2.default.showModal({
            title: '温馨提示',
            content: '只能输入整数，请重新输入',
            showCancel: false,
            success: function success() {
              setRecDay('');
            }
          });
          return;
        }
        var num = 0;
        if (e.detail.value) {
          num = basics.province_integral * province.length * parseInt(e.detail.value);
        } else {
          num = 0;
        }
        setRecDay(e.detail.value);
        setNum(num);
      };
      var handleRecDel = function handleRecDel(v) {
        var list = JSON.parse(JSON.stringify(province));
        list.map(function (val, i) {
          if (val.id === v.id) {
            list.splice(i, 1);
          }
          return val;
        });
        var num = 0;
        num = list.length * basics.province_integral * parseInt(recDay);
        setProvince(list);
        setNum(num);
      };
      // 找活置顶
      var handleRecTopping = function handleRecTopping() {
        var province_ids = params.province.map(function (v) {
          return v.id;
        });
        var city_ids = params.city.map(function (v) {
          return v.id;
        });
        var country_ids = params.whole.map(function (v) {
          return v.id;
        });
        var provinces = [].concat(_toConsumableArray(province_ids), _toConsumableArray(city_ids), _toConsumableArray(country_ids));
        if (!province_ids.length && !city_ids.length && !country_ids.length) {
          _taroSwan2.default.showModal({
            title: '温馨提示',
            content: '请选择您的置顶城市',
            showCancel: false
          });
          return;
        }
        if (!parseInt(recDay) || parseInt(recDay) == 0) {
          _taroSwan2.default.showModal({
            title: '温馨提示',
            content: '输入的置顶天数不能为0或者为空',
            showCancel: false
          });
          return;
        }
        if (parseInt(recDay) > basics.max_top_days) {
          (0, _index4.default)("\u6700\u591A\u53EF\u7F6E\u9876" + basics.max_top_days + "\u5929\uFF01");
          return;
        }
        // const provinces = (province.map(v=>v.id)).join(',');
        // const citys = (city.map(v => v.id)).join(',');
        // let params={
        //   days: parseInt(recDay),
        //   citys: 0,
        //   provinces,
        // }
        var details = {
          days: paramsDay,
          citys: 0,
          provinces: provinces
        };
        // return;
        if (!type) {
          (0, _index.resumesDoTopAction)(details).then(function (res) {
            if (res.errcode === 'ok') {
              _taroSwan2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false,
                success: function success() {
                  _taroSwan2.default.navigateBack({
                    delta: 1
                  });
                }
              });
            } else if (res.errcode === 'resume_null') {
              _taroSwan2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                // showCancel: false,
                success: function success() {
                  _taroSwan2.default.navigateTo({
                    url: "pages/resume/newJobs/index"
                  });
                }
              });
              return;
              //获取积分
            } else if (res.errcode === 'get_integral') {
              _taroSwan2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                success: function success() {
                  _taroSwan2.default.navigateTo({
                    url: "/pages/getintegral/index"
                  });
                }
              });
              return;
            } else {
              _taroSwan2.default.showModal({
                title: '温馨提示',
                content: res.errmsg,
                showCancel: false,
                success: function success() {
                  _taroSwan2.default.navigateBack({
                    delta: 1
                  });
                }
              });
              return;
            }
          });
        }
      };
      this.anonymousFunc4 = handleAddJump;
      this.anonymousFunc5 = handleJump;
      this.anonymousFunc6 = handleAddJump;
      this.anonymousFunc7 = handleJump;
      this.anonymousFunc8 = function (e) {
        return handleClick(e);
      };
      this.anonymousFunc9 = handleCancel;
      this.anonymousFunc10 = function (e) {
        return handleClick(e);
      };
      this.anonymousFunc11 = handleTopping;
      this.anonymousFunc12 = function () {
        _taroSwan2.default.makePhoneCall({ phoneNumber: _index2.SERVERPHONE });
      };
      var loopArray80 = province ? province.map(function (v, __index0) {
        v = {
          privateOriginal: (0, _taroSwan.internal_get_original)(v)
        };
        var _$indexKey = "iezzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return handleDel(v.privateOriginal);
        };
        return {
          _$indexKey: _$indexKey,
          privateOriginal: v.privateOriginal
        };
      }) : [];
      var loopArray81 = params ? params.city.map(function (v, __index1) {
        v = {
          privateOriginal: (0, _taroSwan.internal_get_original)(v)
        };
        var _$indexKey2 = "ifzzz" + __index1;
        _this2.anonymousFunc1Map[_$indexKey2] = function () {
          return handleDel(v.privateOriginal);
        };
        return {
          _$indexKey2: _$indexKey2,
          privateOriginal: v.privateOriginal
        };
      }) : [];
      var loopArray82 = params ? params.province.map(function (v, __index2) {
        v = {
          privateOriginal: (0, _taroSwan.internal_get_original)(v)
        };
        var _$indexKey3 = "igzzz" + __index2;
        _this2.anonymousFunc2Map[_$indexKey3] = function () {
          return handleDel(v.privateOriginal);
        };
        return {
          _$indexKey3: _$indexKey3,
          privateOriginal: v.privateOriginal
        };
      }) : [];
      var loopArray83 = params ? params.whole.map(function (v, __index3) {
        v = {
          privateOriginal: (0, _taroSwan.internal_get_original)(v)
        };
        var _$indexKey4 = "ihzzz" + __index3;
        _this2.anonymousFunc3Map[_$indexKey4] = function () {
          return handleDel(v.privateOriginal);
        };
        return {
          _$indexKey4: _$indexKey4,
          privateOriginal: v.privateOriginal
        };
      }) : [];
      var loopArray84 = data.top_rules.map(function (v, i) {
        v = {
          privateOriginal: (0, _taroSwan.internal_get_original)(v)
        };
        var loopState__temp2 = i + i;
        return {
          loopState__temp2: loopState__temp2,
          privateOriginal: v.privateOriginal
        };
      });
      Object.assign(this.__state, {
        params: params,
        data: data,
        loopArray80: loopArray80,
        loopArray81: loopArray81,
        loopArray82: loopArray82,
        loopArray83: loopArray83,
        loopArray84: loopArray84,
        province: province,
        IMGCDNURL: _index2.IMGCDNURL,
        rec: rec,
        basics: basics,
        type: type,
        list: list,
        displayTime: displayTime,
        num: num,
        endTime: endTime,
        editData: editData,
        newTime: newTime,
        day: day,
        SERVERPHONE: _index2.SERVERPHONE
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
    value: function anonymousFunc3(_$indexKey4) {
      var _anonymousFunc3Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc3Map[_$indexKey4] && (_anonymousFunc3Map = this.anonymousFunc3Map)[_$indexKey4].apply(_anonymousFunc3Map, e);
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
  }]);

  return Topping;
}(_taroSwan2.default.Component);

Topping.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12"];
Topping.$$componentPath = "pages/topping/index";
Topping.config = { navigationBarTitleText: '招工置顶' };
exports.default = Topping;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Topping, true));

/***/ })

},[["./src/pages/topping/index.tsx","runtime","vendors"]]]);