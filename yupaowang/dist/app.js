<<<<<<< HEAD
require("./runtime"),require("./vendors"),(swan.webpackJsonp=swan.webpackJsonp||[]).push([[2],{"49":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var n=_interopRequireDefault(r(0)),i=r(53),o=r(3),u=_interopRequireDefault(r(57));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(83);var s=(0,u.default)();(0,o.setStore)(s),o.ReduxContext.Provider&&(o.ReduxContext.Provider({"store":s}),o.ReduxContext.Provider({"store":s}));var c=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(_App,i.Component),a(_App,[{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"componentDidCatchError","value":function componentDidCatchError(){}},{"key":"_createData","value":function _createData(){}}]),_App);function _App(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,_App);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(_App.__proto__||Object.getPrototypeOf(_App)).apply(this,arguments));return e.config={"pages":["pages/index/index","pages/userauth/index","pages/recruit/publish/index","pages/used/lists/index","pages/map/recruit/index","pages/map/resume/index","pages/used/publish/index","pages/used/info/index","pages/static/invite/index","pages/static/notice/index","pages/getintegral/index","pages/integral/source/index","pages/integral/temp/index","pages/integral/official/index","pages/integral/expend/index","pages/recharge/index","pages/realname/index","pages/map/realname/index","pages/userinfo/info/index","pages/userinfo/add/index","pages/userinfo/phone/index","pages/userinfo/updatePass/index","pages/userinfo/pass/index","pages/published/recruit/index","pages/published/used/index","pages/collection/index","pages/help/index","pages/feedbacklist/index","pages/feedback/index","pages/information/mymessage/index","pages/information/system/index","pages/integral/tabber/index","pages/detail/info/index","pages/topping/index","pages/topping/distruction/index","pages/resume/publish/index","pages/resume/add_info/index","pages/resume/add_member/index","pages/resume/add_skill/index","pages/resume/add_project/index","pages/resume/projects/index","pages/resume/skills/index","pages/rank-rules/index","pages/turntable/index","pages/resume/detail/index","pages/resume/newPreview/index","pages/resume/preview/index","pages/login/index"],"subPackages":[{"root":"subpackage/pages","pages":["checkauth/index","about/index","report/index","download/index","ranking/index","course/index","anti-fraud/index","projects/index","skills/index","news/index"]}],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#0099ff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"white"},"navigateToMiniProgramAppIdList":["wxca0eab5cd5fe6a7c","wxd348efa56021e8d0","wxbfab0a324f27b966","wx33194c327f50b99d","wx0ae31bf0edad4390","wx7cea45b9ebdf87ac","wx3faf62a5edbb1513","wxbac40ffffdee0573"],"permission":{"scope.userLocation":{"desc":"获取您的位置将会为您推荐该地区最新信息"}}},e}t.default=c,App(r(0).default.createApp(c)),n.default.initPxTransform({"designWidth":750,"deviceRatio":{"640":1.17,"750":1,"828":.905}})},"57":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function configStore(){return(0,a.createStore)(o.default,a.applyMiddleware.apply(void 0,u))};var a=r(25),n=_interopRequireDefault(r(61)),i=r(62),o=_interopRequireDefault(r(63));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=[n.default,(0,i.createLogger)()]},"63":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=r(25),n=_interopRequireDefault(r(64)),i=_interopRequireDefault(r(68)),o=_interopRequireDefault(r(69)),u=_interopRequireDefault(r(70)),s=_interopRequireDefault(r(71)),c=_interopRequireDefault(r(73)),d=_interopRequireDefault(r(74)),f=r(76),l=_interopRequireDefault(r(77)),p=_interopRequireDefault(r(78)),g=_interopRequireDefault(r(79)),v=_interopRequireDefault(r(80)),y=_interopRequireDefault(r(81)),b=_interopRequireDefault(r(82));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t.default=(0,a.combineReducers)({"tabbar":n.default,"WechatNotice":i.default,"User":o.default,"msg":u.default,"Personnel":s.default,"Myresume":d.default,"filterClassify":c.default,"MyAreaInfo":f.MyAreaInfo,"MyArea":f.MyArea,"member":l.default,"realname":p.default,"resumeAddInfo":g.default,"PositionStatus":f.PositionStatus,"resumeData":v.default,"resumeList":y.default,"recruitTop":b.default})},"64":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function tabbar(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1],r=JSON.parse(JSON.stringify(i));switch(r.list.find(function(e){e.id===t.type&&(r.key=e.id)}),t.type){case a.HOME:case a.RECRUIT:case a.RESUME:case a.MEMBER:return r;default:return e}};var a=r(14),n=r(1),i={"list":[{"title":"首页","defaultImg":n.ALIYUNCDN+"/newyupao/images/footer-home.png","activeImg":n.ALIYUNCDN+"/newyupao/images/footer-home-active.png","id":a.HOME},{"title":"招工","defaultImg":n.ALIYUNCDN+"/newyupao/images/footer-zg.png","activeImg":n.ALIYUNCDN+"/newyupao/images/footer-zg-active.png","id":a.RECRUIT},{"title":"发布","defaultImg":n.IMGCDNURL+"tabbar-publish-icon.png","activeImg":n.IMGCDNURL+"tabbar-publish-icon.png","id":"","click":"openPublishMenu"},{"title":"找活","defaultImg":n.ALIYUNCDN+"/newyupao/images/footer-zh.png","activeImg":n.ALIYUNCDN+"/newyupao/images/footer-zh-active.png","id":a.RESUME},{"title":"会员","defaultImg":n.ALIYUNCDN+"/newyupao/images/footer-member.png","activeImg":n.ALIYUNCDN+"/newyupao/images/footer-member-active.png","id":a.MEMBER,"msg":!0}],"key":""}},"68":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function WechatNotice(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case i.default:return a({},e,t.data);default:return e}};var n=r(1),i=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(27));var o={"notice":[],"phone":n.SERVERPHONE,"wechat":{"number":"","outTime":600},"success":!1}},"69":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function User(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1];switch(t.type){case o.SETUSER:return a({},e,t.data);case o.GETUSER:if(!e.login){var r=n.default.getStorageSync(i.UserInfo);if(r)return r}return e;case o.LOGINOUT:return a({},e,s);default:return e}};var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(0)),i=r(6),o=r(28);var u=n.default.getStorageSync(i.UserInfo),s=u||{"userId":0,"uuid":"","tokenTime":0,"token":"","login":!1}},"70":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function msg(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GETMSG:return e;case n.SETMSG:return a({},e,t.data);case n.RESETMSG:return a({},e,i);case n.SETMEMBERMSG:return a({},e,{"messageNumber":t.data});default:return e}};var n=r(29),i={"jobNumber":0,"messageNumber":0}},"71":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function Personnel(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GETDATA:return e;case n.SETDATA:return e=a({},e,t.data);default:return e}};var n=r(72),i={"data":{}}},"72":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GETDATA="getdata",t.SETDATA="setdata"},"73":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function msg(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GETCLASSIFY:return e;case n.SETCLASSIFY:return a({},e,t.data);default:return e}};var n=r(30),i={"classTree":[],"fleamarketTree":[],"jobListType":[],"resumeListType":[],"staffTree":[],"isSet":!1}},"74":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function Myresume(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GETLIST:return e;case n.SETLIST:return e=a({},e,t.data);default:return e}};var n=r(75),i={"data":{}}},"75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});t.GETLIST="getlist",t.SETLIST="setlist"},"76":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.MyAreaInfo=function MyAreaInfo(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case n.GETAREAINFO:return e;case n.SETAREAINFO:return e=a({},e,t.data);default:return e}},t.MyArea=function MyArea(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case n.GETAREA:return e;case n.SETAREA:return e=t.data;default:return e}},t.PositionStatus=function PositionStatus(){var e=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],t=arguments[1];switch(t.type){case n.SETPOSITIONSTATUS:return e=t.data;default:return e}};var n=r(31),i=r(9),o={"title":"","adcode":"","location":"","info":""},u={"name":i.AREABEIJING.name,"ad_name":i.AREABEIJING.name}},"77":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function UserMemberInfo(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GETMEMBERINFO:return e;case n.SETMEMBERINFO:return a({},e,t.data);case n.TEL:return a({},e,{"phone":t.data});default:return e}};var n=r(32),i={"username":"","avatar":"","phone":"","pwd_status":"","changeName":!1}},"78":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function RealnameStore(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GETREALNAME:return e;case n.SETREALNAME:return a({},e,t.data);case n.SETFUN:return a({},e,{"setRealnameArea":t.data});case n.SETAREA:return a({},e,{"RealnameArea":t.data});default:return e}};var n=r(33),i={"RealnameArea":"","setRealnameArea":function setRealnameArea(){}}},"79":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function resumeAddInfo(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.GETRESUMECONFIG:return a({},e);case n.SETRESUMECONSIG:return a({},e,t.data);default:return a({},e)}};var n=r(34),i={"label":[],"gender":[],"occupation":[],"nation":[],"type":[],"prof_degree":[],"isset":!1}},"80":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function resumeData(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case n.GETUSERRESUME:return e;case n.SETUSERRESUME:return a({},e,t.data);case n.SETINTRODUCE:return a({},e,{"introducesData":t.data});case n.SETCERTIFICATE:return a({},e,{"certificates":t.data});default:return e}};var n=r(35),i=r(36),o={"info":i.INFODATA_DATA,"introducesData":i.INTRODUCERS_DATA,"projectData":[],"certificates":[],"resume_uuid":"","isSet":!1}},"81":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function resumeList(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.SETSUBPACKCERTIFICATE:return a({},e,{"certificates":t.data});case n.SETSUBPACKPROJECT:return a({},e,{"project":t.data});default:return e}};var n=r(37),i={"certificates":[],"project":[]}},"82":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t.default=function RecruitTopRedux(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i,t=arguments[1];switch(t.type){case n.SET_RECRUIT_TOP_AREA:return a({},e,{"AreParams":a({},t.data)});default:return e}};var n=r(38),i={"AreParams":{"city":[],"province":[],"whole":[]}}},"83":function(e,t,r){}},[[49,0,1]]]);
=======
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
      pages: ['pages/index/index', 'pages/userauth/index', "pages/recruit/publish/index", "pages/used/lists/index", "pages/map/recruit/index", "pages/map/resume/index", "pages/used/publish/index", "pages/used/info/index", "pages/static/invite/index", 'pages/static/notice/index', "pages/getintegral/index", "pages/integral/source/index", "pages/integral/temp/index", "pages/integral/official/index", "pages/integral/expend/index", "pages/recharge/index", "pages/realname/index", "pages/map/realname/index", "pages/userinfo/info/index", "pages/userinfo/add/index", "pages/userinfo/phone/index", "pages/userinfo/updatePass/index", "pages/userinfo/pass/index", "pages/published/recruit/index", "pages/published/used/index", "pages/collection/index", "pages/help/index", "pages/feedbacklist/index", "pages/feedback/index", "pages/information/mymessage/index", "pages/information/system/index", 'pages/integral/tabber/index', 'pages/detail/info/index', 'pages/topping/index', 'pages/topping/distruction/index',
      // 'pages/topping/recruit/index',//置顶找活范围
      'pages/resume/publish/index', 'pages/resume/add_info/index', 'pages/resume/add_member/index', 'pages/resume/add_skill/index', 'pages/resume/add_project/index', 'pages/resume/projects/index', 'pages/resume/skills/index', 'pages/rank-rules/index', 'pages/turntable/index', 'pages/resume/detail/index', 'pages/resume/newPreview/index', 'pages/resume/preview/index', 'pages/login/index'],
      subPackages: [{
        root: 'subpackage/pages',
        pages: ['checkauth/index', 'about/index', 'report/index', 'download/index', 'ranking/index', 'course/index', 'anti-fraud/index', 'projects/index', 'skills/index', 'news/index']
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//合并reducer
//发布招工reducer
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
  recruitTop: _recruit_top2.default
}); /*
     * @Author: zyb
     * @Date: 2020-11-03 14:36:47
     * @LastEditors: jsxin
     * @LastEditTime: 2020-11-13 15:02:13
     * @Description:
     */

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
  setRealnameArea: function setRealnameArea() {}
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

exports.default = RecruitTopRedux;

var _recruit_top = __webpack_require__(/*! ../constants/recruit_top */ "./src/constants/recruit_top.ts");

// 需要传递的值
var value = {
  AreParams: {
    city: [],
    province: [],
    whole: []
  }
};
function RecruitTopRedux() {
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
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
