<<<<<<< HEAD
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/recharge/index"],{
=======
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/recharge/index"],{
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506

/***/ "./src/pages/recharge/index.scss":
/*!***************************************!*\
  !*** ./src/pages/recharge/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/recharge/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/recharge/index.tsx ***!
  \**************************************/
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

<<<<<<< HEAD
var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);
=======
var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index3 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

<<<<<<< HEAD
=======
var _index4 = _interopRequireDefault(_index3);

>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _tabbar = __webpack_require__(/*! ../../constants/tabbar */ "./src/constants/tabbar.ts");

<<<<<<< HEAD
var _index4 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");
=======
var _index5 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506

__webpack_require__(/*! ./index.scss */ "./src/pages/recharge/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { changeTabbar } from '../../actions/tabbar'


var Recharge = function (_Taro$Component) {
  _inherits(Recharge, _Taro$Component);

  function Recharge() {
    _classCallCheck(this, Recharge);

    var _this = _possibleConstructorReturn(this, (Recharge.__proto__ || Object.getPrototypeOf(Recharge)).apply(this, arguments));

<<<<<<< HEAD
    _this.$usedState = ["loopArray48", "lists", "integral", "current", "price"];
=======
    _this.$usedState = ["loopArray51", "lists", "integral", "current", "price"];
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
    _this.anonymousFunc0Map = {};
    _this.customComponents = ["AtMessage"];
    return _this;
  }

  _createClass(Recharge, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Recharge.prototype.__proto__ || Object.getPrototypeOf(Recharge.prototype), "_constructor", this).call(this, props);
<<<<<<< HEAD
      this.$$refs = new _taroWeapp2.default.RefsArray();
=======
      this.$$refs = new _taroTt2.default.RefsArray();
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
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
      // 积分列表数据与用户当前积分数量

<<<<<<< HEAD
      var _useState = (0, _taroWeapp.useState)([]),
=======
      var _useState = (0, _taroTt.useState)([]),
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
          _useState2 = _slicedToArray(_useState, 2),
          lists = _useState2[0],
          setLists = _useState2[1];

<<<<<<< HEAD
      var _useState3 = (0, _taroWeapp.useState)(0),
=======
      var _useState3 = (0, _taroTt.useState)(0),
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
          _useState4 = _slicedToArray(_useState3, 2),
          integral = _useState4[0],
          setIntegral = _useState4[1];

<<<<<<< HEAD
      var _useState5 = (0, _taroWeapp.useState)(0),
=======
      var _useState5 = (0, _taroTt.useState)(0),
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
          _useState6 = _slicedToArray(_useState5, 2),
          current = _useState6[0],
          setCurrent = _useState6[1];

<<<<<<< HEAD
      var _useState7 = (0, _taroWeapp.useState)(0),
=======
      var _useState7 = (0, _taroTt.useState)(0),
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
          _useState8 = _slicedToArray(_useState7, 2),
          price = _useState8[0],
          setPrice = _useState8[1];
      // 初始化积分充值选项


<<<<<<< HEAD
      (0, _taroWeapp.useEffect)(function () {
=======
      (0, _taroTt.useEffect)(function () {
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
        (0, _index2.getRechargeList)().then(function (res) {
          if (res.errcode == 'ok') {
            setLists(res.list);
            setIntegral(parseInt(res.user.integral));
            var i = res.list.findIndex(function (item) {
              return item.default == '1';
            });
            setCurrent(i);
<<<<<<< HEAD
            var _price = (0, _index4.getPointNumber)(res.list[i].price, res.list[i].integral);
=======
            var _price = (0, _index5.getPointNumber)(res.list[i].price, res.list[i].integral);
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
            setPrice(_price);
          } else {
            (0, _index3.ShowActionModal)({
              msg: res.errmsg,
              success: function success() {
<<<<<<< HEAD
                _taroWeapp2.default.navigateBack();
=======
                _taroTt2.default.navigateBack();
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
              }
            });
          }
        });
      }, []);
      // 用户选择充值项
      var userChooseItem = function userChooseItem(i) {
        setCurrent(i);
<<<<<<< HEAD
        var price = (0, _index4.getPointNumber)(lists[i].price, lists[i].integral);
=======
        var price = (0, _index5.getPointNumber)(lists[i].price, lists[i].integral);
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
        setPrice(price);
        var newLists = JSON.parse(JSON.stringify(lists));
        newLists.map(function (d, index) {
          d.default = index == i ? '1' : '0';
        });
        setLists(newLists);
      };
      // 用户充值
      var userRechargeAction = function userRechargeAction() {
        var rechargeIntegral = lists[current].integral;
<<<<<<< HEAD
        _taroWeapp2.default.login({
=======
        if (false) {} else if (_index.MINIVERSION == _index.DOUYIN) {
          douyinProPay();
        }
      };
      // 检测订单
      var getOrderStatusAction = function getOrderStatusAction(order_no) {
        return new Promise(function (resolve, reject) {
          resolve({ code: 0 });
          (0, _index2.userCheckDouyinRecharge)({ order_no: order_no }).then(function (res) {
            (0, _index4.default)(res.errmsg);
            if (res.errcode == 'ok') {
              setIntegral(res.integral);
              resolve({ code: 0 });
            }
          }).catch(function (err) {
            console.log(err);
            (0, _index4.default)('支付失败');
            reject(err);
          });
        });
      };
      // 抖音支付
      var douyinProPay = function douyinProPay() {
        var id = lists[current].id;
        (0, _index2.userDouyinRecharge)({ integral_price_id: id }).then(function (res) {
          var order_no = res.data.biteOrderInfo.out_order_no;
          tt.pay({
            orderInfo: res.data.biteOrderInfo,
            service: 3,
            getOrderStatus: function getOrderStatus() {
              return getOrderStatusAction(order_no);
            },
            success: function success(res) {
              console.log(res);
              if (res.code == 0) {
                (0, _index4.default)('支付成功');
              }
              if (res.code == 9) {
                getOrderStatusAction(order_no);
              } else {
                (0, _index4.default)('支付失败');
              }
            },
            fail: function fail(err) {
              console.error(err);
              (0, _index4.default)('支付失败');
            }
          });
        }).catch(function (err) {
          return console.log(err);
        });
      };
      // 微信支付
      var weixinProPay = function weixinProPay(rechargeIntegral) {
        console.log('吊起微信支付');
        _taroTt2.default.login({
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
          success: function success(res) {
            (0, _index2.getRechargeOpenid)(res.code).then(function (openidData) {
              var data = {
                priceType: lists[current].id,
                openid: openidData.openid
              };
              (0, _index2.getRechargeOrder)(data).then(function (orderData) {
<<<<<<< HEAD
                _taroWeapp2.default.requestPayment(_extends({}, orderData.payData)).then(function () {
                  var afterIntegral = integral + rechargeIntegral;
                  setIntegral(afterIntegral);
                  _taroWeapp2.default.showModal({
=======
                _taroTt2.default.requestPayment(_extends({}, orderData.payData)).then(function () {
                  var afterIntegral = integral + rechargeIntegral;
                  setIntegral(afterIntegral);
                  _taroTt2.default.showModal({
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
                    title: '恭喜您',
                    content: "\u60A8\u5DF2\u6210\u529F\u5145\u503C" + rechargeIntegral + "\u4E2A\u79EF\u5206",
                    cancelText: '会员中心',
                    confirmText: '继续充值',
                    success: function success(res) {
                      if (res.cancel) {
                        // dispatch(changeTabbar(MEMBER))
<<<<<<< HEAD
                        _taroWeapp2.default.reLaunch({ url: '/pages/index/index?type=' + _tabbar.MEMBER });
=======
                        _taroTt2.default.reLaunch({ url: '/pages/index/index?type=' + _tabbar.MEMBER });
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
                      }
                    }
                  });
                }).catch(function () {
                  (0, _index3.errMsg)("\u7528\u6237\u53D6\u6D88\u5145\u503C");
                });
              }).catch(function () {
                (0, _index3.errMsg)("\u7F51\u7EDC\u5F02\u5E38\uFF0C\u5145\u503C\u5931\u8D25\uFF0C\u5BA2\u670D\u7535\u8BDD" + _index.SERVERPHONE);
              });
            }).catch(function () {
              (0, _index3.ShowActionModal)("\u5145\u503C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D\u7535\u8BDD" + _index.SERVERPHONE);
            });
          }
        });
      };
      this.anonymousFunc1 = function () {
        return userRechargeAction();
      };
<<<<<<< HEAD
      var loopArray48 = lists.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var _$indexKey = "egzzz" + index;
=======
      var loopArray51 = lists.map(function (item, index) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var _$indexKey = "ejzzz" + index;
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return userChooseItem(index);
        };
        var $loopState__temp2 = (0, _classnames2.default)({
          'recharge-list-box': true,
          'recharge-list-box-active': index === current
        });
        return {
          _$indexKey: _$indexKey,
          $loopState__temp2: $loopState__temp2,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
<<<<<<< HEAD
        loopArray48: loopArray48,
=======
        loopArray51: loopArray51,
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
        lists: lists,
        integral: integral,
        current: current,
        price: price
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
  }]);

  return Recharge;
<<<<<<< HEAD
}(_taroWeapp2.default.Component);
=======
}(_taroTt2.default.Component);
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506

Recharge.$$events = ["anonymousFunc0", "anonymousFunc1"];
Recharge.$$componentPath = "pages/recharge/index";
exports.default = Recharge;

<<<<<<< HEAD
Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Recharge, true));
=======
Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Recharge, true));
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506

/***/ })

},[["./src/pages/recharge/index.tsx","runtime","vendors"]]]);