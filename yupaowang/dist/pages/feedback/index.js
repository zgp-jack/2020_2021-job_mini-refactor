(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/feedback/index"],{

/***/ "./src/pages/feedback/index.scss":
/*!***************************************!*\
  !*** ./src/pages/feedback/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open 'D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\src\\pages\\feedback\\index.scss'\n    at D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at Array.<anonymous> (D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\loader-runner\\lib\\LoaderRunner.js:203:19)\n    at Storage.finished (D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:55:16)\n    at ReadFileContext.<anonymous> (D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:91:9)\n    at ReadFileContext.callback (D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\graceful-fs\\graceful-fs.js:115:16)\n    at FSReqCallback.readFileAfterOpen [as oncomplete] (fs.js:256:13)");

/***/ }),

/***/ "./src/pages/feedback/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/feedback/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index2 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/feedback/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Feedback = function (_Taro$Component) {
  _inherits(Feedback, _Taro$Component);

  function Feedback() {
    _classCallCheck(this, Feedback);

    var _this = _possibleConstructorReturn(this, (Feedback.__proto__ || Object.getPrototypeOf(Feedback)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '鱼泡网-意见反馈列表',
      enablePullDownRefresh: false,
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: 'dark'
    };

    _this.$usedState = ["anonymousState__temp", "searchData"];
    _this.customComponents = ["WechatNotice"];
    return _this;
  }

  _createClass(Feedback, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Feedback.prototype.__proto__ || Object.getPrototypeOf(Feedback.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _useState = (0, _taroWeapp.useState)({ phone: '', username: '' }),
          _useState2 = _slicedToArray(_useState, 2),
          showDetail = _useState2[0],
          setshowDetail = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)(true),
          _useState4 = _slicedToArray(_useState3, 2),
          showToasts = _useState4[0],
          setshowToasts = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)(1),
          _useState6 = _slicedToArray(_useState5, 2),
          page = _useState6[0],
          setPage = _useState6[1];

      var _useState7 = (0, _taroWeapp.useState)({ list: [] }),
          _useState8 = _slicedToArray(_useState7, 2),
          searchData = _useState8[0],
          setSearchData = _useState8[1];

      (0, _taroWeapp.useEffect)(function () {
        if (!showToasts) {
          return;
        }
        var userInt = {
          page: page
        };
        // let userInfo: User = Taro.getStorageSync(UserInfo)
        // if(!userInfo){
        //   return
        // }
        (0, _index2.getFeedbackList)(userInt).then(function (res) {
          console.log('res', res);
          _taroWeapp2.default.hideNavigationBarLoading();
          if (res.data.length == 0) {
            _taroWeapp2.default.showToast({
              title: '没有更多数据了',
              icon: 'none',
              duration: 2000
            });
            setshowToasts(false);
          }
          if (page === 1) {
            setSearchData({ list: res.data });
            setshowDetail({ phone: res.memberInfo.phone, username: res.memberInfo.username });
          } else setSearchData({ list: [].concat(_toConsumableArray(searchData.list), _toConsumableArray(res.data)) });
        });
      }, [page]);
      var getNextPageData = function getNextPageData() {
        if (!showToasts) {
          return;
        }
        setPage(page + 1);
      };
      var jumpDetail = function jumpDetail() {
        if (!showDetail.username) {
          showDetail.username = "";
        }
        if (!showDetail.phone) {
          showDetail.phone = "";
        }
        _taroWeapp2.default.navigateTo({
          url: _index.Leavemessage + ("?username=" + showDetail.username + "&phone=" + showDetail.phone)
        });
      };
      this.anonymousFunc0 = function () {
        return getNextPageData();
      };
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ height: '82px' });
      this.anonymousFunc1 = function () {
        return jumpDetail();
      };
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        searchData: searchData
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
  }]);

  return Feedback;
}(_taroWeapp2.default.Component);

Feedback.$$events = ["anonymousFunc0", "anonymousFunc1"];
Feedback.$$componentPath = "pages/feedback/index";
Feedback.config = { navigationBarTitleText: '鱼泡网-意见反馈列表', enablePullDownRefresh: false, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: 'dark' };
exports.default = Feedback;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Feedback, true));

/***/ })

},[["./src/pages/feedback/index.tsx","runtime","vendors","common"]]]);