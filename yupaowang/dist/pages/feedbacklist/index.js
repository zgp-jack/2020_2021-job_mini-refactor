<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[45],{"164":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=n(0),L=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(D),R=n(2),M=n(3);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(165);var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(FeedbackList,L.default.Component),r(FeedbackList,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0})(FeedbackList.prototype.__proto__||Object.getPrototypeOf(FeedbackList.prototype),"_constructor",this).call(this,e),this.$$refs=new L.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){var i=this;this.__state=e||this.state||{},this.__props=t||this.props||{};var r=this.$prefix,a=(0,D.genCompid)(r+"$compid__58"),o=B(a,2),u=o[0],s=o[1],c=(0,D.useState)(!1),l=B(c,2),p=l[0],f=l[1],g=(0,D.useState)({"page":1}),y=B(g,2),d=y[0],h=y[1],v=(0,D.useState)({"item":[]}),m=B(v,2),b=m[0],_=m[1],O=(0,D.useState)({"phone":"","username":""}),w=B(O,2),k=w[0],F=w[1],P=(0,M.useSelector)(function(e){return e.User.login}),A=(0,D.useState)(!0),C=B(A,2),S=C[0],j=C[1];(0,D.useEffect)(function(){P&&x()},[P,d]);var x=function feedbackDataAction(){(0,R.feedbackAction)(d.page).then(function(e){L.default.hideNavigationBarLoading(),L.default.stopPullDownRefresh(),1===d.page?_({"item":[].concat(_toConsumableArray(e.data))}):_({"item":[].concat(_toConsumableArray(b.item),_toConsumableArray(e.data))}),F(e.memberInfo),p&&f(!1),e.data.length||j(!1)})};(0,D.useReachBottom)(function(){S&&(L.default.showNavigationBarLoading(),h($({},d,{"page":d.page+1})))}),(0,D.usePullDownRefresh)(function(){j(!0),h({"page":1})}),this.anonymousFunc2=function(){return function userRouteJump(e){L.default.navigateTo({"url":e})}("/pages/feedback/index?username="+(k.username||"")+"&phone="+(k.phone||""))};var T=b.item?b.item.map(function(a,o){return{"anonymousCallee__7":(a={"privateOriginal":(0,D.internal_get_original)(a)}).privateOriginal.images?a.privateOriginal.images.map(function(e,t){e={"privateOriginal":(0,D.internal_get_original)(e)};var n=a.privateOriginal.images?t+t:null,r="hezzz"+o+"-"+t;return i.anonymousFunc0Map[r]=function(){!function handleImg(e){L.default.previewImage({"current":e,"urls":[e]})}(e.privateOriginal)},{"loopState__temp2":n,"_$indexKey":r,"privateOriginal":e.privateOriginal}}):[],"privateOriginal":a.privateOriginal}}):[];return b.item.length||D.propsManager.set({"text":"暂无相关数据反馈"},s,u),Object.assign(this.__state,{"lists":b,"loopArray66":T,"$compid__58":s,"isDown":S}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(e){for(var t,n=arguments.length,r=Array(1<n?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return this.anonymousFunc0Map[e]&&(t=this.anonymousFunc0Map)[e].apply(t,r)}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}}]),FeedbackList);function FeedbackList(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FeedbackList);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(FeedbackList.__proto__||Object.getPrototypeOf(FeedbackList)).apply(this,arguments));return e.config={"navigationBarTitleText":"鱼泡网-意见反馈列表","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["lists","loopArray66","$compid__58","isDown"],e.anonymousFunc0Map={},e.customComponents=["Auth","WechatNotice","Nodata"],e}a.$$events=["anonymousFunc0","anonymousFunc2"],a.$$componentPath="pages/feedbacklist/index",a.config={"navigationBarTitleText":"鱼泡网-意见反馈列表","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=a,Page(n(0).default.createComponent(a,!0))},"165":function(e,t,n){}},[[164,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/feedbacklist/index"],{

/***/ "./src/pages/feedbacklist/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/feedbacklist/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/feedbacklist/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/feedbacklist/index.tsx ***!
  \******************************************/
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

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/feedbacklist/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeedbackList = function (_Taro$Component) {
  _inherits(FeedbackList, _Taro$Component);

  function FeedbackList() {
    _classCallCheck(this, FeedbackList);

    var _this = _possibleConstructorReturn(this, (FeedbackList.__proto__ || Object.getPrototypeOf(FeedbackList)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '鱼泡网-意见反馈列表',
      enablePullDownRefresh: true,
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: 'dark'
    };

    _this.$usedState = ["lists", "loopArray66", "$compid__58", "isDown"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = ["Auth", "WechatNotice", "Nodata"];
    return _this;
  }

  _createClass(FeedbackList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(FeedbackList.prototype.__proto__ || Object.getPrototypeOf(FeedbackList.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__58"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__58 = _genCompid2[0],
          $compid__58 = _genCompid2[1];
      // * 标记是否是在刷新状态


      var _useState = (0, _taroSwan.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          refresh = _useState2[0],
          setRefresh = _useState2[1];
      // 设置初始页面


      var _useState3 = (0, _taroSwan.useState)({
        page: 1
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          initPage = _useState4[0],
          setPage = _useState4[1];
      // 定义数据


      var _useState5 = (0, _taroSwan.useState)({
        item: []
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          lists = _useState6[0],
          setLists = _useState6[1];
      // 用户信息


      var _useState7 = (0, _taroSwan.useState)({
        phone: '',
        username: ''
      }),
          _useState8 = _slicedToArray(_useState7, 2),
          userData = _useState8[0],
          setUserData = _useState8[1];
      // 获取用户是否登录


      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // 是否能上拉加载更多

      var _useState9 = (0, _taroSwan.useState)(true),
          _useState10 = _slicedToArray(_useState9, 2),
          isDown = _useState10[0],
          setIsDown = _useState10[1];
      // 判断是否登陆


      (0, _taroSwan.useEffect)(function () {
        if (!login) {
          return;
        }
        feedbackDataAction();
      }, [login, initPage]);
      // 进来时获取数据
      var feedbackDataAction = function feedbackDataAction() {
        (0, _index.feedbackAction)(initPage.page).then(function (res) {
          _taroSwan2.default.hideNavigationBarLoading();
          _taroSwan2.default.stopPullDownRefresh();
          if (initPage.page === 1) {
            setLists({ item: [].concat(_toConsumableArray(res.data)) });
          } else {
            setLists({ item: [].concat(_toConsumableArray(lists.item), _toConsumableArray(res.data)) });
          }
          setUserData(res.memberInfo);
          if (refresh) {
            setRefresh(false);
          }
          if (!res.data.length) {
            setIsDown(false);
          }
        });
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroSwan2.default.navigateTo({
          url: url
        });
      };
      // 上拉加载更多
      (0, _taroSwan.useReachBottom)(function () {
        if (!isDown) {
          return;
        }
        _taroSwan2.default.showNavigationBarLoading();
        setPage(_extends({}, initPage, { page: initPage.page + 1 }));
      });
      var handleImg = function handleImg(e) {
        _taroSwan2.default.previewImage({
          current: e,
          urls: [e]
        });
      };
      // 下拉刷新
      (0, _taroSwan.usePullDownRefresh)(function () {
        setIsDown(true);
        setPage({ page: 1 });
      });
      this.anonymousFunc2 = function () {
        return userRouteJump("/pages/feedback/index?username=" + (userData.username || '') + "&phone=" + (userData.phone || ''));
      };
      var loopArray66 = lists.item ? lists.item.map(function (item, __index1) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var anonymousCallee__7 = item.privateOriginal.images ? item.privateOriginal.images.map(function (v, index) {
          v = {
            privateOriginal: (0, _taroSwan.internal_get_original)(v)
          };
          var loopState__temp2 = item.privateOriginal.images ? index + index : null;
          var _$indexKey = "hezzz" + __index1 + "-" + index;
          _this2.anonymousFunc0Map[_$indexKey] = function () {
            handleImg(v.privateOriginal);
          };
          return {
            loopState__temp2: loopState__temp2,
            _$indexKey: _$indexKey,
            privateOriginal: v.privateOriginal
          };
        }) : [];
        return {
          anonymousCallee__7: anonymousCallee__7,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      !lists.item.length && _taroSwan.propsManager.set({
        "text": "\u6682\u65E0\u76F8\u5173\u6570\u636E\u53CD\u9988"
      }, $compid__58, $prevCompid__58);
      Object.assign(this.__state, {
        lists: lists,
        loopArray66: loopArray66,
        $compid__58: $compid__58,
        isDown: isDown
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
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return FeedbackList;
}(_taroSwan2.default.Component);

FeedbackList.$$events = ["anonymousFunc0", "anonymousFunc2"];
FeedbackList.$$componentPath = "pages/feedbacklist/index";
FeedbackList.config = { navigationBarTitleText: '鱼泡网-意见反馈列表', enablePullDownRefresh: true, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: 'dark' };
exports.default = FeedbackList;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(FeedbackList, true));

/***/ })

},[["./src/pages/feedbacklist/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
