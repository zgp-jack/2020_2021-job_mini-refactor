require("./runtime");
require("./vendors");

(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["app"],{

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

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

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
      pages: ['pages/index/index', 'pages/userauth/index', "pages/recruit/publish/index", "pages/used/lists/index", "pages/map/recruit/index", "pages/map/resume/index", "pages/used/publish/index", "pages/used/info/index", "pages/static/invite/index", 'pages/static/notice/index', "pages/getintegral/index", "pages/integral/source/index", "pages/integral/temp/index", "pages/integral/official/index", "pages/integral/expend/index", "pages/recharge/index", "pages/realname/index", "pages/map/realname/index", "pages/userinfo/info/index", "pages/userinfo/add/index", "pages/userinfo/phone/index", "pages/userinfo/updatePass/index", "pages/userinfo/pass/index", "pages/published/recruit/index", "pages/published/used/index", "pages/collection/index", 'pages/integral/tabber/index', 'pages/detail/info/index', 'pages/topping/index', 'pages/resume/publish/index', 'pages/resume/add_info/index', 'pages/resume/add_member/index', 'pages/resume/add_skill/index', 'pages/resume/add_project/index', 'pages/resume/projects/index', 'pages/resume/skills/index', 'pages/resume/detail/index', 'pages/resume/newPreview/index', 'pages/resume/preview/index', 'pages/login/index', 'pages/newtopping/recRang/index', 'pages/newtopping/recGion/index', 'pages/newtopping/resRang/index', 'pages/newtopping/resGion/index'],
      subPackages: [{
        root: 'subpackage/pages',
        pages: ['checkauth/index', 'about/index', 'report/index', 'download/index', 'ranking/index', 'course/index', 'anti-fraud/index', 'projects/index', 'skills/index', 'news/index', 'help/index', 'feedbacklist/index', 'feedback/index', 'information/mymessage/index', 'information/system/index', 'turntable/index', 'recommend/recruit/index', 'recommend/resume/index']
      }],
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
      },
      "sitemapLocation": 'sitemap.json'
    };
    return _this;
  }

  _createClass(_App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow(e) {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'componentDidCatchError',
    value: function componentDidCatchError() {}
    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数

  }, {
    key: '_createData',
    value: function _createData() {}
  }]);

  return _App;
}(_react.Component);

exports.default = _App;

App(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createApp(_App));
_taroSwan2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

/***/ }),

/***/ "./src/constants/personnel.ts":
/*!************************************!*\
  !*** ./src/constants/personnel.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GETDATA = exports.GETDATA = 'getdata';
var SETDATA = exports.SETDATA = 'setdata';

/***/ }),

/***/ "./src/constants/resume.ts":
/*!*********************************!*\
  !*** ./src/constants/resume.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GETLIST = exports.GETLIST = 'getlist';
var SETLIST = exports.SETLIST = 'setlist';

/***/ }),

/***/ "./src/reducers/filter_classify.ts":
/*!*****************************************!*\
  !*** ./src/reducers/filter_classify.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = filterClassify;

var _filter_classify = __webpack_require__(/*! ../constants/filter_classify */ "./src/constants/filter_classify.ts");

var DEFAULT_STATE = {
  classTree: [],
  fleamarketTree: [],
  jobListType: [],
  resumeListType: [],
  staffTree: [],
  isSet: false
};
function filterClassify() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _filter_classify.GETCLASSIFY:
      return state;
    case _filter_classify.SETCLASSIFY:
      return _extends({}, state, action.data);
    default:
      return state;
  }
}

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

var _msg = __webpack_require__(/*! ./msg */ "./src/reducers/msg.ts");

var _msg2 = _interopRequireDefault(_msg);

var _personnel = __webpack_require__(/*! ./personnel */ "./src/reducers/personnel.ts");

var _personnel2 = _interopRequireDefault(_personnel);

var _filter_classify = __webpack_require__(/*! ./filter_classify */ "./src/reducers/filter_classify.ts");

var _filter_classify2 = _interopRequireDefault(_filter_classify);

var _resume = __webpack_require__(/*! ./resume */ "./src/reducers/resume.ts");

var _resume2 = _interopRequireDefault(_resume);

var _recruit = __webpack_require__(/*! ./recruit */ "./src/reducers/recruit.ts");

var _member = __webpack_require__(/*! ./member */ "./src/reducers/member.ts");

var _member2 = _interopRequireDefault(_member);

var _realname = __webpack_require__(/*! ./realname */ "./src/reducers/realname.ts");

var _realname2 = _interopRequireDefault(_realname);

var _resume_addinfo = __webpack_require__(/*! ./resume_addinfo */ "./src/reducers/resume_addinfo.ts");

var _resume_addinfo2 = _interopRequireDefault(_resume_addinfo);

var _resume_data = __webpack_require__(/*! ./resume_data */ "./src/reducers/resume_data.ts");

var _resume_data2 = _interopRequireDefault(_resume_data);

var _resume_list = __webpack_require__(/*! ./resume_list */ "./src/reducers/resume_list.ts");

var _resume_list2 = _interopRequireDefault(_resume_list);

var _recruit_top = __webpack_require__(/*! ./recruit_top */ "./src/reducers/recruit_top.ts");

var _recruit_top2 = _interopRequireDefault(_recruit_top);

var _resume_top = __webpack_require__(/*! ./resume_top */ "./src/reducers/resume_top.ts");

var _resume_top2 = _interopRequireDefault(_resume_top);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//合并reducer
/*
 * @Author: zyb
 * @Date: 2020-11-03 14:36:47
 * @LastEditors: jsxin
 * @LastEditTime: 2020-12-08 17:52:51
 * @Description:
 */
exports.default = (0, _redux.combineReducers)({
  tabbar: _tabbar2.default,
  WechatNotice: _wechat_notice2.default,
  User: _user2.default,
  msg: _msg2.default,
  Personnel: _personnel2.default,
  Myresume: _resume2.default,
  filterClassify: _filter_classify2.default,
  MyAreaInfo: _recruit.MyAreaInfo,
  MyArea: _recruit.MyArea,
  member: _member2.default,
  realname: _realname2.default,
  resumeAddInfo: _resume_addinfo2.default,
  PositionStatus: _recruit.PositionStatus,
  resumeData: _resume_data2.default,
  resumeList: _resume_list2.default,
  recruitTop: _recruit_top2.default,
  resumeTop: _resume_top2.default
}); //发布招工reducer

/***/ }),

/***/ "./src/reducers/member.ts":
/*!********************************!*\
  !*** ./src/reducers/member.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // 用户会员中心部分共用信息


exports.default = UserMemberInfo;

var _member = __webpack_require__(/*! ../constants/member */ "./src/constants/member.ts");

var DEFAULT_MEMBER_INFO = {
  username: '',
  avatar: '',
  phone: '',
  pwd_status: '',
  changeName: false
};
function UserMemberInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_MEMBER_INFO;
  var action = arguments[1];

  switch (action.type) {
    case _member.GETMEMBERINFO:
      return state;
      break;
    case _member.SETMEMBERINFO:
      return _extends({}, state, action.data);
      break;
    case _member.TEL:
      return _extends({}, state, { phone: action.data });
      break;
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/msg.ts":
/*!*****************************!*\
  !*** ./src/reducers/msg.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = msg;

var _msg = __webpack_require__(/*! ../constants/msg */ "./src/constants/msg.ts");

var DEFAULT_STATE = {
  jobNumber: 0,
  messageNumber: 0
};
function msg() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _msg.GETMSG:
      return state;
    case _msg.SETMSG:
      return _extends({}, state, action.data);
    case _msg.RESETMSG:
      return _extends({}, state, DEFAULT_STATE);
    case _msg.SETMEMBERMSG:
      return _extends({}, state, { messageNumber: action.data });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/personnel.ts":
/*!***********************************!*\
  !*** ./src/reducers/personnel.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Personnel;

var _personnel = __webpack_require__(/*! ../constants/personnel */ "./src/constants/personnel.ts");

// 内容的参数
var DEFAULT_STATE = {
  data: {}
};
function Personnel() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _personnel.GETDATA:
      return state;
    case _personnel.SETDATA:
      state = _extends({}, state, action.data);
      return state;
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/realname.ts":
/*!**********************************!*\
  !*** ./src/reducers/realname.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = RealnameStore;

var _realname = __webpack_require__(/*! ../constants/realname */ "./src/constants/realname.ts");

var DEFAULT_STATE = {
  RealnameArea: '',
  setRealnameArea: function setRealnameArea() {},
  setRealnameAddress: function setRealnameAddress() {}
};
function RealnameStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _realname.GETREALNAME:
      return state;
      break;
    case _realname.SETREALNAME:
      return _extends({}, state, action.data);
      break;
    case _realname.SETFUN:
      return _extends({}, state, { setRealnameArea: action.data });
      break;
    case _realname.SETAREA:
      return _extends({}, state, { RealnameArea: action.data });
      break;
    case _realname.SETADDRESSFUN:
      return _extends({}, state, { setRealnameAddress: action.data });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/recruit.ts":
/*!*********************************!*\
  !*** ./src/reducers/recruit.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //定义发布招工获取设置区域信息的action


exports.MyAreaInfo = MyAreaInfo;
exports.MyArea = MyArea;
exports.PositionStatus = PositionStatus;

var _recruit = __webpack_require__(/*! ../constants/recruit */ "./src/constants/recruit.ts");

var _area = __webpack_require__(/*! ../models/area */ "./src/models/area.ts");

// 内容的参数
var DEFAULT_STATE_AREAINFO = {
  title: '',
  adcode: '',
  location: '',
  info: ''
};
// 定义默认的区域数据
var DEFAULT_STATE_AREA = {
  name: _area.AREABEIJING.name,
  ad_name: _area.AREABEIJING.name
};
function MyAreaInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE_AREAINFO;
  var action = arguments[1];

  switch (action.type) {
    case _recruit.GETAREAINFO:
      return state;
    case _recruit.SETAREAINFO:
      state = _extends({}, state, action.data);
      return state;
    default:
      return state;
  }
}
function MyArea() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE_AREA;
  var action = arguments[1];

  switch (action.type) {
    case _recruit.GETAREA:
      return state;
    case _recruit.SETAREA:
      state = action.data;
      return state;
    default:
      return state;
  }
}
function PositionStatus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var action = arguments[1];

  switch (action.type) {
    case _recruit.SETPOSITIONSTATUS:
      state = action.data;
      return state;
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/recruit_top.ts":
/*!*************************************!*\
  !*** ./src/reducers/recruit_top.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = recruitTop;

var _recruit_top = __webpack_require__(/*! ../constants/recruit_top */ "./src/constants/recruit_top.ts");

// 需要传递的值
var value = {
  AreParams: {
    city: [],
    province: [],
    whole: []
  }
};
function recruitTop() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : value;
  var action = arguments[1];

  switch (action.type) {
    case _recruit_top.SET_RECRUIT_TOP_AREA:
      return _extends({}, state, { AreParams: _extends({}, action.data) });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/resume.ts":
/*!********************************!*\
  !*** ./src/reducers/resume.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Myresume;

var _resume = __webpack_require__(/*! ../constants/resume */ "./src/constants/resume.ts");

// 内容的参数
var DEFAULT_STATE = {
  data: {}
};
function Myresume() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _resume.GETLIST:
      return state;
    case _resume.SETLIST:
      state = _extends({}, state, action.data);
      return state;
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/resume_addinfo.ts":
/*!****************************************!*\
  !*** ./src/reducers/resume_addinfo.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = resumeAddInfo;

var _resume_addinfo = __webpack_require__(/*! ../constants/resume_addinfo */ "./src/constants/resume_addinfo.ts");

var DEFAUTL_STATE = {
  label: [],
  gender: [],
  occupation: [],
  nation: [],
  type: [],
  prof_degree: [],
  isset: false
};
function resumeAddInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAUTL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _resume_addinfo.GETRESUMECONFIG:
      return _extends({}, state);
      break;
    case _resume_addinfo.SETRESUMECONSIG:
      return _extends({}, state, action.data);
      break;
    default:
      return _extends({}, state);
  }
}

/***/ }),

/***/ "./src/reducers/resume_data.ts":
/*!*************************************!*\
  !*** ./src/reducers/resume_data.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * @Author: zyb
                                                                                                                                                                                                                                                                   * @Date: 2020-11-04 19:59:33
                                                                                                                                                                                                                                                                   * @LastEditors: jsxin
                                                                                                                                                                                                                                                                   * @LastEditTime: 2020-11-06 15:39:52
                                                                                                                                                                                                                                                                   * @Description:
                                                                                                                                                                                                                                                                   */


exports.default = resumeData;

var _resume_data = __webpack_require__(/*! ../constants/resume_data */ "./src/constants/resume_data.ts");

var _data = __webpack_require__(/*! ../pages/resume/publish/data */ "./src/pages/resume/publish/data.ts");

var DEFAULT_STATE = {
  info: _data.INFODATA_DATA,
  introducesData: _data.INTRODUCERS_DATA,
  projectData: [],
  certificates: [],
  resume_uuid: '',
  isSet: false
};
function resumeData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _resume_data.GETUSERRESUME:
      return state;
    case _resume_data.SETUSERRESUME:
      return _extends({}, state, action.data);
    case _resume_data.SETINTRODUCE:
      return _extends({}, state, { introducesData: action.data });
    case _resume_data.SETCERTIFICATE:
      return _extends({}, state, { certificates: action.data });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/resume_list.ts":
/*!*************************************!*\
  !*** ./src/reducers/resume_list.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = resumeList;

var _resume_list = __webpack_require__(/*! ../constants/resume_list */ "./src/constants/resume_list.ts");

var DEFAULT_STATE = {
  certificates: [],
  project: []
};
function resumeList() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _resume_list.SETSUBPACKCERTIFICATE:
      return _extends({}, state, { certificates: action.data });
    case _resume_list.SETSUBPACKPROJECT:
      return _extends({}, state, { project: action.data });
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/resume_top.ts":
/*!************************************!*\
  !*** ./src/reducers/resume_top.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = resumeTop;

var _resume_top = __webpack_require__(/*! ../constants/resume_top */ "./src/constants/resume_top.ts");

var DEFAULT_RESUME_TOP = {
  has_top: 0,
  is_top: 0,
  is_top_text: '',
  is_top_to_text: '',
  top_tips_string: '',
  max_number: '',
  max_price: '',
  end_time: '',
  start_time: '',
  start_time_str: '',
  end_time_str: '',
  top_citys_str: [],
  top_provinces_str: [],
  top_citys: '',
  top_provinces: '',
  is_show_tips: 0,
  is_country: '',
  first_province_num: '',
  first_city_num: ''
};
var DEFAULT_STATE = {
  resumeTopObj: DEFAULT_RESUME_TOP,
  clickResumeTopObj: [],
  recClickResumeTopObj: []
};
function resumeTop() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _resume_top.SETRESUMETOP:
      return _extends({}, state, { resumeTopObj: action.data });
    case _resume_top.SETCLICKRESUMETOP:
      return _extends({}, state, { clickResumeTopObj: action.data });
    case _resume_top.SETRESCLICKRESUMETOP:
      return _extends({}, state, { recClickResumeTopObj: action.data });
    default:
      return state;
  }
}

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

var _index = __webpack_require__(/*! ../config/index */ "./src/config/index.ts");

var DEFAULT_MENUS = {
  list: [{
    title: '首页',
    defaultImg: _index.ALIYUNCDN + '/newyupao/images/footer-home.png',
    activeImg: _index.ALIYUNCDN + '/newyupao/images/footer-home-active.png',
    id: _tabbar.HOME
  }, {
    title: '招工',
    defaultImg: _index.ALIYUNCDN + '/newyupao/images/footer-zg.png',
    activeImg: _index.ALIYUNCDN + '/newyupao/images/footer-zg-active.png',
    id: _tabbar.RECRUIT
  }, {
    title: '发布',
    defaultImg: _index.IMGCDNURL + 'tabbar-publish-icon.png',
    activeImg: _index.IMGCDNURL + 'tabbar-publish-icon.png',
    id: '',
    click: 'openPublishMenu'
  }, {
    title: '找活',
    defaultImg: _index.ALIYUNCDN + '/newyupao/images/footer-zh.png',
    activeImg: _index.ALIYUNCDN + '/newyupao/images/footer-zh-active.png',
    id: _tabbar.RESUME
  }, {
    title: '会员',
    defaultImg: _index.ALIYUNCDN + '/newyupao/images/footer-member.png',
    activeImg: _index.ALIYUNCDN + '/newyupao/images/footer-member-active.png',
    id: _tabbar.MEMBER,
    msg: true
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

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _store = __webpack_require__(/*! ../config/store */ "./src/config/store.ts");

var _user = __webpack_require__(/*! ../constants/user */ "./src/constants/user.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userInfo = _taroSwan2.default.getStorageSync(_store.UserInfo);
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
    case _user.SETUSER:
      return _extends({}, state, action.data);
    case _user.GETUSER:
      if (!state.login) {
        var _userInfo = _taroSwan2.default.getStorageSync(_store.UserInfo);
        if (_userInfo) return _userInfo;
      }
      return state;
    case _user.LOGINOUT:
      return _extends({}, state, DEFAULT_STATE);
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