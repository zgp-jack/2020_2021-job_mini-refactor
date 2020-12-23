(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["components/tabbar/index"],{

/***/ "./src/components/tabbar/index.scss":
/*!******************************************!*\
  !*** ./src/components/tabbar/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/tabbar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/tabbar/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _msg = __webpack_require__(/*! ../../actions/msg */ "./src/actions/msg.ts");

var _tabbar = __webpack_require__(/*! ../../actions/tabbar */ "./src/actions/tabbar.ts");

var _index3 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index4 = __webpack_require__(/*! ../../hooks/init_job_view/index */ "./src/hooks/init_job_view/index.ts");

var _index5 = _interopRequireDefault(_index4);

__webpack_require__(/*! ./index.scss */ "./src/components/tabbar/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabbar = function (_Taro$Component) {
  _inherits(Tabbar, _Taro$Component);

  function Tabbar() {
    _classCallCheck(this, Tabbar);

    var _this = _possibleConstructorReturn(this, (Tabbar.__proto__ || Object.getPrototypeOf(Tabbar)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "tabbar", "loopArray40", "memberMsg", "show", "IMGCDNURL", "notredirect"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Tabbar, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Tabbar.prototype.__proto__ || Object.getPrototypeOf(Tabbar.prototype), "_constructor", this).call(this, props);
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
      var notredirect = this.__props.notredirect;
      // 发布方式数据

      var tabbar = (0, _redux.useSelector)(function (state) {
        return state.tabbar;
      });
      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      var memberMsg = (0, _redux.useSelector)(function (state) {
        return state.msg['messageNumber'];
      });

      var _useJobView = (0, _index5.default)(),
          initJobView = _useJobView.initJobView;

      var dispatch = (0, _redux.useDispatch)();
      // 是否展示发布

      var _useState = (0, _taroSwan.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          show = _useState2[0],
          setShow = _useState2[1];
      // 展开发布的动画效果


      var _useState3 = (0, _taroSwan.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          active = _useState4[0],
          setActive = _useState4[1];
      // * 判断跳转还是切换tabbar


      var changeTabbarAction = function changeTabbarAction(item) {
        if (item.click) {
          if (item.click == 'openPublishMenu') {
            openPublishMenu();
            setTimeout(function () {
              setActive(true);
            }, 10);
          }
          return;
        }
        if (notredirect) {
          dispatch((0, _tabbar.changeTabbar)(item.id));
        } else _taroSwan2.default.reLaunch({ url: '/pages/index/index?type=' + item.id });
      };
      // 点击发布按钮
      var openPublishMenu = function openPublishMenu() {
        setShow(true);
      };
      // 点击遮罩可以关闭广告
      var closePublishMenu = function closePublishMenu() {
        setShow(false);
        setActive(false);
      };
      // 用户点击弹出的发布类型按钮
      var userTapPublishItem = function userTapPublishItem(url) {
        _taroSwan2.default.navigateTo({
          url: url
        });
      };
      // 统计未读信息
      var getMemberMsg = function getMemberMsg() {
        if (!login) {
          return;
        }
        (0, _index.getMemberMsgNumber)((0, _index2.isIos)()).then(function (data) {
          if (data.errcode == 'ok') {
            dispatch((0, _msg.setMsg)(data.data));
          }
        });
      };
      // 定时请求未读信息
      (0, _taroSwan.useEffect)(function () {
        getMemberMsg();
        var timer = setInterval(function () {
          getMemberMsg();
        }, _index3.MemberMsgTimerInterval);
        // 清除页面定时器
        return function () {
          return clearInterval(timer);
        };
      }, []);
      var anonymousState__temp3 = show ? (0, _classnames2.default)({
        'tabbar-publish-container': true,
        'tabbar-publish-container-active': active
      }) : null;
      this.anonymousFunc1 = function () {
        return closePublishMenu();
      };
      var anonymousState__temp4 = show ? (0, _classnames2.default)({
        'tabbar-publish-img': true,
        'tabbar-publish-img-active': active
      }) : null;
      var anonymousState__temp5 = show ? (0, _classnames2.default)({
        'tabbar-publish-items': true,
        'tabbar-publish-items-active': active
      }) : null;
      this.anonymousFunc2 = function () {
        return initJobView();
      };
      this.anonymousFunc3 = function () {
        return userTapPublishItem(_index3.PUBLISHRESUME);
      };
      this.anonymousFunc4 = function () {
        return userTapPublishItem(_index3.PUBLISHUSED);
      };
      var loopArray40 = tabbar.list.map(function (item, __index0) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp2 = (0, _classnames2.default)({
          'common-footer-tabbar-list': true,
          'common-footer-tabbar-list-active': item.privateOriginal.id === tabbar.key
        });
        var _$indexKey = "efzzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return changeTabbarAction(item.privateOriginal);
        };
        return {
          loopState__temp2: loopState__temp2,
          _$indexKey: _$indexKey,
          privateOriginal: item.privateOriginal
        };
      });
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        tabbar: tabbar,
        loopArray40: loopArray40,
        memberMsg: memberMsg,
        show: show,
        IMGCDNURL: _index3.IMGCDNURL
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
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }]);

  return Tabbar;
}(_taroSwan2.default.Component);

Tabbar.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4"];
Tabbar.$$componentPath = "components/tabbar/index";
exports.default = Tabbar;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Tabbar));

/***/ })

},[["./src/components/tabbar/index.tsx","runtime","vendors"]]]);