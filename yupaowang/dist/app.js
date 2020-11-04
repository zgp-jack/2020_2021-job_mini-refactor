require("./runtime");
require("./vendors");

(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["app"],{

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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

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
      pages: ['pages/index/index', 'pages/userauth/index', "pages/recruit/publish/index", "pages/used/lists/index", "pages/map/recruit/index", "pages/map/resume/index", "pages/used/publish/index", "pages/used/info/index", "pages/invite/index", "pages/getintegral/index", "pages/integral/source/index", "pages/integral/temp/index", "pages/integral/official/index", "pages/integral/expend/index", "pages/recharge/index", "pages/realname/index", "pages/map/realname/index", "pages/userinfo/info/index", "pages/userinfo/add/index", "pages/userinfo/phone/index", "pages/userinfo/updatePass/index", "pages/published/recruit/index", "pages/published/used/index", "pages/collection/index", "pages/help/index", "pages/feedbacklist/index", "pages/feedback/index", "pages/static/invite/index", "pages/query/index", "pages/information/mymessage/index", "pages/information/system/index", 'pages/integral/tabber/index', 'pages/detail/info/index', 'pages/topping/index', 'pages/topping/distruction/index',
      // 'pages/topping/recruit/index',//置顶找活范围
      'pages/resume/publish/index', 'pages/resume/add_info/index', 'pages/resume/add_member/index', 'pages/resume/add_skill/index', 'pages/resume/add_project/index', 'pages/resume/projects/index', 'pages/resume/skills/index', 'pages/resume/detail/index', 'pages/resume/preview/index', 'pages/login/index'],
      subPackages: [{
        root: 'subpackage/pages',
        pages: ['checkauth/index', 'about/index', 'report/index', 'notice/index', 'download/index', 'ranking/index', 'course/index', 'anti-fraud/index']
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
      }
    };
    return _this;
  }

  _createClass(_App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
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

App(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createApp(_App));
_taroTt2.default.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

/***/ }),

/***/ "./src/constants/certificates.ts":
/*!***************************************!*\
  !*** ./src/constants/certificates.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Author: zyb
 * @Date: 2020-11-04 14:27:15
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 14:27:49
 * @Description:
 */
var GETCERTIFICATES = exports.GETCERTIFICATES = 'getCertificates';
var SETCERTIFICATES = exports.SETCERTIFICATES = 'setCertificates';

/***/ }),

/***/ "./src/constants/introduces.ts":
/*!*************************************!*\
  !*** ./src/constants/introduces.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Author: zyb
 * @Date: 2020-11-04 14:10:33
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 14:14:57
 * @Description:
 */
var GETINTRODUCEA = exports.GETINTRODUCEA = 'getIntroduces';
var SETINTRODUCEA = exports.SETINTRODUCEA = 'setIntroduces';

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

/***/ "./src/constants/resInfo.ts":
/*!**********************************!*\
  !*** ./src/constants/resInfo.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Author: zyb
 * @Date: 2020-11-04 14:35:11
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 14:35:44
 * @Description:
 */
var GETRESINFO = exports.GETRESINFO = 'getResInfo';
var SETRESINFO = exports.SETRESINFO = 'setResInfo';

/***/ }),

/***/ "./src/constants/resProject.ts":
/*!*************************************!*\
  !*** ./src/constants/resProject.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Author: zyb
 * @Date: 2020-11-04 11:29:50
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 11:30:58
 * @Description:
 */
var GETRESPROJECT = exports.GETRESPROJECT = 'getresProject';
var SETRESPROJECT = exports.SETRESPROJECT = 'setresProject';

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

/***/ "./src/reducers/certificates.ts":
/*!**************************************!*\
  !*** ./src/reducers/certificates.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = certificates;

var _certificates = __webpack_require__(/*! ../constants/certificates */ "./src/constants/certificates.ts");

var CERTIFICATES_STATE = {
  admin_last_edit_time: '',
  certificate_time: '',
  check: '',
  current_admin: '',
  fail_case: '',
  id: '',
  image: [],
  images: [],
  last_update_admin: '',
  name: '',
  resume_uuid: '',
  sort_flag: '',
  time: '',
  update_time: '',
  user_uuid: '',
  uuid: ''
};
function certificates() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CERTIFICATES_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _certificates.GETCERTIFICATES:
      return state;
    case _certificates.SETCERTIFICATES:
      return _extends({}, state, action.data);
    default:
      return state;
  }
}

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

exports.default = msg;

var _filter_classify = __webpack_require__(/*! ../constants/filter_classify */ "./src/constants/filter_classify.ts");

var DEFAULT_STATE = {
  classTree: [],
  fleamarketTree: [],
  jobListType: [],
  resumeListType: [],
  staffTree: [],
  isSet: false
};
function msg() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _filter_classify.GET:
      return state;
    case _filter_classify.SET:
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

var _resProject = __webpack_require__(/*! ./resProject */ "./src/reducers/resProject.ts");

var _resProject2 = _interopRequireDefault(_resProject);

var _introduces = __webpack_require__(/*! ./introduces */ "./src/reducers/introduces.ts");

var _introduces2 = _interopRequireDefault(_introduces);

var _certificates = __webpack_require__(/*! ./certificates */ "./src/reducers/certificates.ts");

var _certificates2 = _interopRequireDefault(_certificates);

var _resInfo = __webpack_require__(/*! ./resInfo */ "./src/reducers/resInfo.ts");

var _resInfo2 = _interopRequireDefault(_resInfo);

var _uuid = __webpack_require__(/*! ./uuid */ "./src/reducers/uuid.ts");

var _uuid2 = _interopRequireDefault(_uuid);

var _useResume = __webpack_require__(/*! ./useResume */ "./src/reducers/useResume.ts");

var _useResume2 = _interopRequireDefault(_useResume);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//合并reducer
/*
 * @Author: zyb
 * @Date: 2020-11-03 14:36:47
 * @LastEditors: zyb
 * @LastEditTime: 2020-11-04 19:42:42
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
  resProjectData: _resProject2.default,
  introduces: _introduces2.default,
  certificates: _certificates2.default,
  resInfo: _resInfo2.default,
  uuid: _uuid2.default,
  useResume: _useResume2.default
}); //发布招工reducer

/***/ }),

/***/ "./src/reducers/introduces.ts":
/*!************************************!*\
  !*** ./src/reducers/introduces.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = introduces;

var _introduces = __webpack_require__(/*! ../constants/introduces */ "./src/constants/introduces.ts");

var INTRODUCEA_STATE = {
  check: '',
  experience: '',
  experience_str: '',
  hometown: '',
  hometown_id: '',
  number_people: '',
  prof_degree: '',
  prof_degree_str: '',
  tag_id: '',
  tags: [],
  type: '',
  type_str: ''
};
function introduces() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INTRODUCEA_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _introduces.GETINTRODUCEA:
      return state;
    case _introduces.SETINTRODUCEA:
      return _extends({}, state, action.data);
    default:
      return state;
  }
}

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
  pwd_status: ''
};
function UserMemberInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_MEMBER_INFO;
  var action = arguments[1];

  switch (action.type) {
    case _member.GET:
      return state;
      break;
    case _member.SET:
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
    case _msg.GET:
      return state;
    case _msg.SET:
      return _extends({}, state, action.data);
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
  setRealnameArea: function setRealnameArea() {}
};
function RealnameStore() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _realname.GET:
      return state;
      break;
    case _realname.SET:
      return _extends({}, state, action.data);
      break;
    case _realname.SETFUN:
      return _extends({}, state, { setRealnameArea: action.data });
      break;
    case _realname.SETAREA:
      return _extends({}, state, { RealnameArea: action.data });
      break;
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
var DEFAULT_STATE_AREA = _area.AREABEIJING.name;
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

/***/ "./src/reducers/resInfo.ts":
/*!*********************************!*\
  !*** ./src/reducers/resInfo.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = resInfo;

var _resInfo = __webpack_require__(/*! ../constants/resInfo */ "./src/constants/resInfo.ts");

var INFODATA_DATA = {
  ad_code: 0,
  address: '',
  admin_last_edit_time: '',
  admin_user_id: '',
  authentication: '',
  birthday: '',
  certificate_show: 0,
  check: '',
  city: '未填写',
  collect_num: '',
  complain_num: '',
  country: '',
  current_admin: '',
  distance: '',
  experience: '',
  extens: '',
  gender: '',
  headerimg: '',
  hometown: '',
  id: '',
  img: '',
  introduce: '未填写',
  ip_address: '',
  is_end: '',
  is_introduces: '',
  location: '',
  miniInfoOccupations: [],
  nation: '',
  nation_id: '',
  note: '',
  number_people: '',
  occupations: [],
  occupations_id: '',
  prof_degree: '',
  progress: '0',
  province: '',
  provinces: '',
  ranking: '',
  refresh_time: '',
  sort_flag: '',
  source: '',
  tags: [],
  tel: '未填写',
  time: '',
  type: '',
  update_time: '',
  user_id: '',
  user_uuid: '',
  username: '',
  uuid: '',
  view_num: '',
  zan_num: '',
  age: '未填写'
};
function resInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INFODATA_DATA;
  var action = arguments[1];

  switch (action.type) {
    case _resInfo.GETRESINFO:
      return state;
    case _resInfo.SETRESINFO:
      return _extends({}, state, action.data);
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/resProject.ts":
/*!************************************!*\
  !*** ./src/reducers/resProject.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resProjectData;

var _resProject = __webpack_require__(/*! ../constants/resProject */ "./src/constants/resProject.ts");

var RESPROJECT_STATE = {
  check: '',
  city: '',
  city_name: '',
  completion_time: '',
  detail: '',
  fail_case: '',
  id: '',
  image: [],
  images: [],
  project_name: '',
  province: '',
  province_name: '',
  resume_uuid: '',
  start_time: '',
  update_time: '',
  uuid: ''
};
function resProjectData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : RESPROJECT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _resProject.GETRESPROJECT:
      return state;
    case _resProject.SETRESPROJECT:
      return action.data;
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
    case _resume_addinfo.GET:
      return _extends({}, state);
      break;
    case _resume_addinfo.SET:
      return _extends({}, state, action.data);
      break;
    default:
      return _extends({}, state);
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

/***/ "./src/reducers/useResume.ts":
/*!***********************************!*\
  !*** ./src/reducers/useResume.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * @Author: zyb
                                                                                                                                                                                                                                                                   * @Date: 2020-11-04 19:59:33
                                                                                                                                                                                                                                                                   * @LastEditors: zyb
                                                                                                                                                                                                                                                                   * @LastEditTime: 2020-11-04 20:13:43
                                                                                                                                                                                                                                                                   * @Description:
                                                                                                                                                                                                                                                                   */


exports.default = useResume;

var _useResume = __webpack_require__(/*! ../constants/useResume */ "./src/constants/useResume.ts");

var DEFAULT_STATE = {
  info: {
    ad_code: 0,
    address: '',
    admin_last_edit_time: '',
    admin_user_id: '',
    authentication: '',
    birthday: '',
    certificate_show: 0,
    check: '',
    city: '未填写',
    collect_num: '',
    complain_num: '',
    country: '',
    current_admin: '',
    distance: '',
    experience: '',
    extens: '',
    gender: '',
    headerimg: '',
    hometown: '',
    id: '',
    img: '',
    introduce: '未填写',
    ip_address: '',
    is_end: '',
    is_introduces: '',
    location: '',
    miniInfoOccupations: [],
    nation: '',
    nation_id: '',
    note: '',
    number_people: '',
    occupations: [],
    occupations_id: '',
    prof_degree: '',
    progress: '0',
    province: '',
    provinces: '',
    ranking: '',
    refresh_time: '',
    sort_flag: '',
    source: '',
    tags: [],
    tel: '未填写',
    time: '',
    type: '',
    update_time: '',
    user_id: '',
    user_uuid: '',
    username: '',
    uuid: '',
    view_num: '',
    zan_num: '',
    age: '未填写'
  },
  introducesData: {
    check: '',
    experience: '',
    experience_str: '',
    hometown: '',
    hometown_id: '',
    number_people: '',
    prof_degree: '',
    prof_degree_str: '',
    tag_id: '',
    tags: [],
    type: '',
    type_str: ''
  },
  projectData: [],
  certificates: []
};
function useResume() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _useResume.GETUSERRESUME:
      return state;
    case _useResume.SETUSERRESUME:
      state = _extends({}, state, action.data);
      return state;
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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _store = __webpack_require__(/*! ../config/store */ "./src/config/store.ts");

var _user = __webpack_require__(/*! ../constants/user */ "./src/constants/user.tsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userInfo = _taroTt2.default.getStorageSync(_store.UserInfo);
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
        var _userInfo = _taroTt2.default.getStorageSync(_store.UserInfo);
        if (_userInfo) return _userInfo;
      }
      return state;
    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/uuid.ts":
/*!******************************!*\
  !*** ./src/reducers/uuid.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uuid;

var _uuid = __webpack_require__(/*! ../constants/uuid */ "./src/constants/uuid.ts");

var UUID_STATE = ''; /*
                      * @Author: zyb
                      * @Date: 2020-11-04 19:37:03
                      * @LastEditors: zyb
                      * @LastEditTime: 2020-11-04 19:42:23
                      * @Description:
                      */
function uuid() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : UUID_STATE;
  var action = arguments[1];

  switch (action.type) {
    case _uuid.GETUUID:
      return state;
      break;
    case _uuid.SETUUID:
      return action.data;
      break;
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