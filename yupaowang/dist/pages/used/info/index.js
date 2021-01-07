(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/used/info/index"],{

/***/ "./src/pages/used/info/index.scss":
/*!****************************************!*\
  !*** ./src/pages/used/info/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/used/info/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/used/info/index.tsx ***!
  \***************************************/
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

var _index3 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/used/info/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsedInfo = function (_Taro$Component) {
  _inherits(UsedInfo, _Taro$Component);

  function UsedInfo() {
    _classCallCheck(this, UsedInfo);

    var _this = _possibleConstructorReturn(this, (UsedInfo.__proto__ || Object.getPrototypeOf(UsedInfo)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '二手交易详情'
    };

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "$compid__52", "model", "id"];
    _this.customComponents = ["WechatNotice", "NologinBtm"];
    return _this;
  }

  _createClass(UsedInfo, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(UsedInfo.prototype.__proto__ || Object.getPrototypeOf(UsedInfo.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__52"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__52 = _genCompid2[0],
          $compid__52 = _genCompid2[1];

      var router = (0, _taroSwan.useRouter)();
      // id为二手详情id used 因为百度收录问题， 当id>MaxUsedInfoId 时都会带used=1来保证最新资源收录
      var _router$params = router.params,
          id = _router$params.id,
          used = _router$params.used;

      var _useState = (0, _taroSwan.useState)(),
          _useState2 = _slicedToArray(_useState, 2),
          model = _useState2[0],
          setModel = _useState2[1];
      // 设置用户分享信息


      (0, _taroSwan.useShareAppMessage)(function () {
        return _extends({}, (0, _index2.getUserShareMessage)(), {
          path: "/pages/used/info/index?id=" + id + "&more=1"
        });
      });
      // 初始化二手交易信息
      (0, _taroSwan.useDidShow)(function () {
        if (!used || used != '1') {
          if (parseInt(id) > _index4.MaxUsedInfoId) {
            _taroSwan2.default.redirectTo({
              url: "/pages/detail/info/index?id=" + id + "&type=1"
            });
            return;
          }
        }
        // 获取场景值
        (0, _index.getUsedInfo)(id).then(function (data) {
          if (data.errcode == 'ok') {
            // 如果是百度系小程序，则直接设置seo等相关信息
            if (_index4.SERIES == _index4.BAIDUSERIES) {
              var keywords = data.data.showCateAttr.split('-').reverse().join('');
              var address = data.data.showAddress.split('-').join('');
              _taroSwan2.default.setPageInfo({
                title: data.data.title + "-\u9C7C\u6CE1\u7F51",
                description: "" + data.data.title + data.data.detail,
                keywords: keywords + "," + data.data.title + "," + address + keywords
              });
            }
            setModel(data.data);
          } else {
            (0, _index3.ShowActionModal)({
              msg: data.errmsg,
              success: function success() {
                _taroSwan2.default.navigateBack();
              }
            });
          }
        }).catch(function () {
          (0, _index3.ShowActionModal)({
            msg: '网络错误，获取失败',
            success: function success() {
              _taroSwan2.default.navigateBack();
            }
          });
        });
      });
      // 用户拨打电话
      var userCallPhone = function userCallPhone() {
        if (!model) {
          return;
        }
        if (model.is_end == '2') {
          return;
        }
        _taroSwan2.default.makePhoneCall({
          phoneNumber: model.user_mobile
        });
      };
      // 查看更多招工信息
      var seeMoreUsed = function seeMoreUsed() {
        var pages = _taroSwan2.default.getCurrentPages();
        var listUrl = "/pages/used/lists/index";
        if (pages.length < 2) {
          _taroSwan2.default.reLaunch({ url: listUrl });
        } else {
          var routeUrl = "/" + pages[pages.length - 2].route;
          if (routeUrl == listUrl) {
            _taroSwan2.default.navigateBack();
          } else {
            _taroSwan2.default.reLaunch({ url: listUrl });
          }
        }
      };
      this.anonymousFunc0 = function () {
        return userCallPhone();
      };
      var anonymousState__temp = model ? _index4.REPLACEWEIXINTEXT ? model.detail.replace(_index4.FILTERWEIXINREG, '') : model.detail : '';
      var anonymousState__temp2 = "pages/used/info/index?id=" + id + "&used=" + used;
      _taroSwan.propsManager.set({
        "text": "\u67E5\u770B\u66F4\u591A\u4E8C\u624B\u4EA4\u6613\u4FE1\u606F",
        "url": "/pages/used/lists/index",
        "type": "",
        "path": anonymousState__temp2
      }, $compid__52, $prevCompid__52);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        $compid__52: $compid__52,
        model: model,
        id: id
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return UsedInfo;
}(_taroSwan2.default.Component);

UsedInfo.$$events = ["anonymousFunc0"];
UsedInfo.$$componentPath = "pages/used/info/index";
UsedInfo.config = { navigationBarTitleText: '二手交易详情' };
exports.default = UsedInfo;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(UsedInfo, true));

/***/ })

},[["./src/pages/used/info/index.tsx","runtime","vendors"]]]);