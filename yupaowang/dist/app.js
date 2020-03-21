require("./runtime");
require("./vendors");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index = __webpack_require__(/*! ./store/index */ "./src/store/index.ts");

var _index2 = _interopRequireDefault(_index);

__webpack_require__(/*! ./app.scss */ "./src/app.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _index2.default)();
(0, _redux.setStore)(store);
if (_redux.ReduxContext.Provider) {
  _redux.ReduxContext.Provider({
    store: store
  });
  _redux.ReduxContext.Provider({
    store: store
  });
}

var _App = function (_BaseComponent) {
  _inherits(_App, _BaseComponent);

  function _App() {
    _classCallCheck(this, _App);

    var _this = _possibleConstructorReturn(this, (_App.__proto__ || Object.getPrototypeOf(_App)).apply(this, arguments));

    _this.config = {
      pages: ['pages/index/index', 'pages/userauth/index', "pages/recruit/publish/index", "pages/used/lists/index", "pages/map/recruit/index", "pages/invite/index", "pages/getintegral/index", "pages/integral/source/index", "pages/integral/temp/index", "pages/integral/official/index", "pages/integral/expend/index", "pages/recharge/index"],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#0099ff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'white'
      },
      navigateToMiniProgramAppIdList: ['wxca0eab5cd5fe6a7c', 'wxd348efa56021e8d0', 'wxbfab0a324f27b966', 'wx33194c327f50b99d', 'wx0ae31bf0edad4390', 'wx7cea45b9ebdf87ac', 'wx3faf62a5edbb1513', 'wxbac40ffffdee0573' //招标采购
      ],
      "permission": {
        "scope.userLocation": {
          "desc": "获取您的位置将会为您推荐该地区最新信息"
        }
      }
    };
    return _this;
  }

  _createClass(_App, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "componentDidCatchError",
    value: function componentDidCatchError() {}
    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: "_createData",
    value: function _createData() {}
  }]);

  return _App;
}(_taroWeapp.Component);

exports.default = _App;

App(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createApp(_App));
_taroWeapp2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

/***/ }),

/***/ "./src/reducers/index.ts":
/*!*******************************!*\
  !*** ./src/reducers/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");

var _tabbar = __webpack_require__(/*! ./tabbar */ "./src/reducers/tabbar.ts");

var _tabbar2 = _interopRequireDefault(_tabbar);

var _wechat_notice = __webpack_require__(/*! ./wechat_notice */ "./src/reducers/wechat_notice.ts");

var _wechat_notice2 = _interopRequireDefault(_wechat_notice);

var _user = __webpack_require__(/*! ./user */ "./src/reducers/user.tsx");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  tabbar: _tabbar2.default,
  WechatNotice: _wechat_notice2.default,
  User: _user2.default
});

/***/ }),

/***/ "./src/reducers/tabbar.ts":
/*!********************************!*\
  !*** ./src/reducers/tabbar.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tabbar;

var _tabbar = __webpack_require__(/*! ../constants/tabbar */ "./src/constants/tabbar.ts");

var DEFAULT_MENUS = {
  list: [{
    title: '首页',
    defaultImg: 'http://cdn.yupao.com/newyupao/images/footer-home.png',
    activeImg: 'http://cdn.yupao.com/newyupao/images/footer-home-active.png',
    id: _tabbar.HOME
  }, {
    title: '招工',
    defaultImg: 'http://cdn.yupao.com/newyupao/images/footer-zg.png',
    activeImg: 'http://cdn.yupao.com/newyupao/images/footer-zg-active.png',
    id: _tabbar.RECRUIT
  }, {
    title: '找活',
    defaultImg: 'http://cdn.yupao.com/newyupao/images/footer-zh.png',
    activeImg: 'http://cdn.yupao.com/newyupao/images/footer-zh-active.png',
    id: _tabbar.RESUME
  }, {
    title: '会员',
    defaultImg: 'http://cdn.yupao.com/newyupao/images/footer-member.png',
    activeImg: 'http://cdn.yupao.com/newyupao/images/footer-member-active.png',
    id: _tabbar.MEMBER
  }],
  key: ''
};
function tabbar() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_MENUS;
  var action = arguments[1];

  var newMenus = JSON.parse(JSON.stringify(DEFAULT_MENUS));
  newMenus.list.find(function (item) {
    if (item.id === action.type) {
      newMenus.key = item.id;
    }
  });
  switch (action.type) {
    case _tabbar.HOME:
      return newMenus;
    case _tabbar.RECRUIT:
      return newMenus;
    case _tabbar.RESUME:
      return newMenus;
    case _tabbar.MEMBER:
      return newMenus;
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/user.tsx":
/*!*******************************!*\
  !*** ./src/reducers/user.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = User;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _store = __webpack_require__(/*! ../config/store */ "./src/config/store.ts");

var _user = __webpack_require__(/*! ../constants/user */ "./src/constants/user.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userInfo = _taroWeapp2.default.getStorageSync(_store.UserInfo);
var DEFAULT_STATE = userInfo ? userInfo : {
  userId: 0,
  uuid: '',
  tokenTime: 0,
  token: '',
  login: false
};
function User() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _user.SET:
      return _extends({}, state, action.data);
    case _user.GET:
      if (!state.login) {
        var _userInfo = _taroWeapp2.default.getStorageSync(_store.UserInfo);
        if (_userInfo) return _userInfo;
      }
      return state;
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/wechat_notice.ts":
/*!***************************************!*\
  !*** ./src/reducers/wechat_notice.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = WechatNotice;

var _index = __webpack_require__(/*! ../config/index */ "./src/config/index.ts");

var _wechat_notice = __webpack_require__(/*! ../constants/wechat_notice */ "./src/constants/wechat_notice.ts");

var _wechat_notice2 = _interopRequireDefault(_wechat_notice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_STATE = {
  notice: [],
  phone: _index.SERVERPHONE,
  wechat: {
    number: '',
    outTime: 600
  },
  success: false
};
function WechatNotice() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _wechat_notice2.default:
      return _extends({}, state, action.data);
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configStore;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/lib/redux.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");

var _index = __webpack_require__(/*! ../reducers/index */ "./src/reducers/index.ts");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_reduxThunk2.default, (0, _reduxLogger.createLogger)()];
function configStore() {
  var store = (0, _redux.createStore)(_index2.default, _redux.applyMiddleware.apply(undefined, middlewares));
  return store;
}

/***/ })

},[["./src/app.tsx","runtime","vendors"]]]);;