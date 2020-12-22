(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/recharge/index"],{

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

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index3 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _tabbar = __webpack_require__(/*! ../../constants/tabbar */ "./src/constants/tabbar.ts");

var _index5 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");

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

    _this.config = {
      navigationBarTitleText: '用户充值积分',
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: "dark"
    };

    _this.$usedState = ["loopArray60", "lists", "integral", "current", "price"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = ["AtMessage"];
    return _this;
  }

  _createClass(Recharge, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Recharge.prototype.__proto__ || Object.getPrototypeOf(Recharge.prototype), "_constructor", this).call(this, props);
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
      // 积分列表数据与用户当前积分数量

      var _useState = (0, _taroSwan.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          lists = _useState2[0],
          setLists = _useState2[1];

      var _useState3 = (0, _taroSwan.useState)(0),
          _useState4 = _slicedToArray(_useState3, 2),
          integral = _useState4[0],
          setIntegral = _useState4[1];

      var _useState5 = (0, _taroSwan.useState)(0),
          _useState6 = _slicedToArray(_useState5, 2),
          current = _useState6[0],
          setCurrent = _useState6[1];

      var _useState7 = (0, _taroSwan.useState)(0),
          _useState8 = _slicedToArray(_useState7, 2),
          price = _useState8[0],
          setPrice = _useState8[1];
      // 判断是是否能用扣扣吊起微信支付


      var _useState9 = (0, _taroSwan.useState)(false),
          _useState10 = _slicedToArray(_useState9, 2),
          isWxPayment = _useState10[0],
          setIsWxPayment = _useState10[1];
      // 初始化积分充值选项


      (0, _taroSwan.useEffect)(function () {
        (0, _index2.getRechargeList)().then(function (res) {
          if (res.errcode == 'ok') {
            setLists(res.list);
            setIntegral(parseInt(res.user.integral));
            var i = res.list.findIndex(function (item) {
              return item.default == '1';
            });
            setCurrent(i);
            var _price = (0, _index5.getPointNumber)(res.list[i].price, res.list[i].integral);
            setPrice(_price);
          } else {
            (0, _index3.ShowActionModal)({
              msg: res.errmsg,
              success: function success() {
                _taroSwan2.default.navigateBack();
              }
            });
          }
        });
        // 判断是是否能用扣扣吊起微信支付
        var isWxPayment = _taroSwan2.default.canIUse && _taroSwan2.default.canIUse('requestWxPayment');
        console.error(isWxPayment, '111');
        if (isWxPayment) {
          setIsWxPayment(true);
        }
      }, []);
      // 用户选择充值项
      var userChooseItem = function userChooseItem(i) {
        setCurrent(i);
        var price = (0, _index5.getPointNumber)(lists[i].price, lists[i].integral);
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
        if (_index.SERIES == _index.WEIXINSERIES) {
          weixinProPay(rechargeIntegral);
          return false;
        } else if (_index.SERIES == _index.ZIJIESERIES) {
          douyinProPay();
        } else if (_index.SERIES == _index.BAIDUSERIES) {
          baiduProPay(rechargeIntegral);
        } else if (_index.SERIES == _index.QQSERIES) {
          var itemList = [];
          if (isWxPayment) {
            itemList = ['QQ支付', '微信支付'];
          } else {
            itemList = ['QQ支付'];
          }
          _taroSwan2.default.showActionSheet({
            itemList: itemList,
            success: function success(res) {
              if (res.tapIndex == 0) {
                handleQQPay(rechargeIntegral);
              }
              if (res.tapIndex == 1) {
                handleQQWeChatPay(rechargeIntegral);
              }
            },
            fail: function fail(res) {
              (0, _index4.default)('支付失败');
            }
          });
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
              (0, _index4.default)('支付失败');
            }
          });
        }).catch(function (err) {
          return console.log(err);
        });
      };
      //qq支付
      var handleQQPay = function handleQQPay(rechargeIntegral) {
        //当前选中的充值套餐id
        var priceType = lists[current].id;
        (0, _index2.userQQRecharge)({ priceType: priceType }).then(function (res) {
          var data = res.data;
          qq.requestPayment({
            package: "prepay_id=" + data.prepay_id,
            // bargainor_id: "",
            success: function success(res) {
              (0, _index4.default)('支付成功');
              setIntegral(integral + rechargeIntegral);
            },
            fail: function fail(res) {
              (0, _index4.default)('支付失败');
            }
          });
        });
      };
      //qq内调用微信支付
      var handleQQWeChatPay = function handleQQWeChatPay(rechargeIntegral) {
        var priceType = lists[current].id;
        (0, _index2.userQQRecharge)({ priceType: priceType, is_wx: true }).then(function (res) {
          var _res$data = res.data,
              mweb_url = _res$data.mweb_url,
              order_no = _res$data.order_no,
              referer = _res$data.referer;

          qq.requestWxPayment({
            url: mweb_url,
            referer: referer,
            success: function success(resquest) {
              checkQqOrderStatusFun(order_no, rechargeIntegral);
            },
            fail: function fail(res) {
              _taroSwan2.default.showModal({ content: '支付失败' + JSON.stringify(res) });
            }
          });
        });
      };
      // 微信支付
      var weixinProPay = function weixinProPay(rechargeIntegral) {
        _taroSwan2.default.login({
          success: function success(res) {
            (0, _index2.getRechargeOpenid)(res.code).then(function (openidData) {
              var data = {
                priceType: lists[current].id,
                openid: openidData.openid
              };
              (0, _index2.getRechargeOrder)(data).then(function (orderData) {
                _taroSwan2.default.requestPayment(_extends({}, orderData.payData)).then(function () {
                  var afterIntegral = integral + rechargeIntegral;
                  setIntegral(afterIntegral);
                  _taroSwan2.default.showModal({
                    title: '恭喜您',
                    content: "\u60A8\u5DF2\u6210\u529F\u5145\u503C" + rechargeIntegral + "\u4E2A\u79EF\u5206",
                    cancelText: '会员中心',
                    confirmText: '继续充值',
                    success: function success(res) {
                      if (res.cancel) {
                        // dispatch(changeTabbar(MEMBER))
                        _taroSwan2.default.reLaunch({ url: '/pages/index/index?type=' + _tabbar.MEMBER });
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
              (0, _index3.ShowActionModal)({ msg: "\u5145\u503C\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D\u7535\u8BDD" + _index.SERVERPHONE });
            });
          }
        });
      };
      // 百度支付
      var baiduProPay = function baiduProPay(rechargeIntegral) {
        var id = lists[current].id;
        console.log(id);
        (0, _index2.getBaiduTpOrderId)({ priceType: id }).then(function (res) {
          if (res.errcode == 'ok') {
            swan.requestPolymerPayment({
              orderInfo: _extends({}, res.payData),
              success: function success() {
                // 校验百度支付是否成功 // 每3秒发起一次 直到成功
                checkBaiduOrderStatusFun(res.payData.tpOrderId, rechargeIntegral);
              },
              fail: function fail(err) {
                (0, _index3.ShowActionModal)({ msg: err.errMsg });
              }
            });
          } else {
            (0, _index3.ShowActionModal)({ msg: "\u652F\u4ED8\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5BA2\u670D\u7535\u8BDD " + _index.SERVERPHONE });
          }
        });
      };
      var checkQqOrderStatusFun = function checkQqOrderStatusFun(tpOrderId, rechargeIntegral) {
        (0, _index2.checkBaiduOrderStatusAction)({ tpOrderId: tpOrderId }).then(function (res) {
          if (res.errcode == 'ok') {
            if (res.data.order_status == 2) {
              var afterIntegral = integral + rechargeIntegral;
              setIntegral(afterIntegral);
              _taroSwan2.default.showToast({ title: '支付成功', icon: 'none' });
            } else {
              _taroSwan2.default.showToast({ title: '支付失败', icon: 'none' });
            }
          }
        });
      };
      var checkBaiduOrderStatusFun = function checkBaiduOrderStatusFun(tpOrderId, rechargeIntegral) {
        var mytimer = setInterval(function () {
          (0, _index2.checkBaiduOrderStatusAction)({ tpOrderId: tpOrderId }).then(function (res) {
            if (res.errcode == 'ok') {
              if (res.data.order_status == 2) {
                var afterIntegral = integral + rechargeIntegral;
                setIntegral(afterIntegral);
                clearInterval(mytimer);
                (0, _index3.ShowActionModal)({ msg: '支付成功' });
              }
            }
          });
        }, 1000);
      };
      this.anonymousFunc1 = function () {
        return userRechargeAction();
      };
      var loopArray60 = lists.map(function (item, index) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var _$indexKey = "gbzzz" + index;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return userChooseItem(index);
        };
        var loopState__temp2 = (0, _classnames2.default)({
          'recharge-list-box': true,
          'recharge-list-box-active': index === current
        });
        return {
          _$indexKey: _$indexKey,
          loopState__temp2: loopState__temp2,
          privateOriginal: item.privateOriginal
        };
      });
      Object.assign(this.__state, {
        loopArray60: loopArray60,
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
}(_taroSwan2.default.Component);

Recharge.$$events = ["anonymousFunc0", "anonymousFunc1"];
Recharge.$$componentPath = "pages/recharge/index";
Recharge.config = { navigationBarTitleText: '用户充值积分', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = Recharge;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Recharge, true));

/***/ })

},[["./src/pages/recharge/index.tsx","runtime","vendors"]]]);