<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[41],{"280":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},F=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t};function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var x=r(0),M=function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}(x),T=r(2),H=r(3);function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}r(281);var o=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(RecruitList,M.default.Component),n(RecruitList,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,r)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(r):void 0})(RecruitList.prototype.__proto__||Object.getPrototypeOf(RecruitList.prototype),"_constructor",this).call(this,t),this.$$refs=new M.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,r){this.__state=t||this.state||{},this.__props=e||this.props||{};var n=this.$prefix,o=(0,x.genCompid)(n+"$compid__49"),i=F(o,2),a=i[0],u=i[1],c=this.__props,s=c.bottom,l=c.initPage,f=(0,x.useState)(!1),p=F(f,2),y=p[0],_=p[1],h=(0,x.useState)([]),b=F(h,2),d=b[0],g=b[1],v=(0,x.useState)({"page":1}),m=F(v,2),O=m[0],w=m[1],C=(0,x.useState)(!1),R=F(C,2),L=R[0],P=R[1],j=(0,x.useState)(!1),A=F(j,2),$=A[0],S=A[1],k=(0,H.useSelector)(function(t){return t.User.login});(0,x.useEffect)(function(){k&&D()},[k,O]);var D=function getCollectionRecruitListDataAction(){(0,T.getCollectionRecruitListData)(O.page).then(function(t){M.default.hideNavigationBarLoading(),M.default.stopPullDownRefresh(),t.list.length||P(!0),1===O.page?g([].concat(_toConsumableArray(t.list))):g([].concat(_toConsumableArray(d),_toConsumableArray(t.list))),y&&_(!1),$&&S(!1)})};return(0,x.useEffect)(function(){s&&(L||w(E({},O,{"page":O.page+1})))},[s]),(0,x.useEffect)(function(){0!==l&&(P(!1),w({"page":1}))},[l]),this.anonymousFunc0=function recruitListHandler(t){(0,T.recruitListCancelCollectionAction)(t).then(function(t){"ok"===t.errcode&&w({"page":1})})},x.propsManager.set({"data":d,"onHandlerClick":this.anonymousFunc0,"recruitNoMoreData":L},u,a),Object.assign(this.__state,{"$compid__49":u}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}}]),RecruitList);function RecruitList(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,RecruitList);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(RecruitList.__proto__||Object.getPrototypeOf(RecruitList)).apply(this,arguments));return t.$usedState=["$compid__49","bottom","initPage"],t.customComponents=["CollectionRecruitList"],t}o.$$events=[],o.$$componentPath="pages/collection/recruitList/index",e.default=o,Component(r(0).default.createComponent(o))},"281":function(t,e,r){}},[[280,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/collection/recruitList/index"],{

/***/ "./src/pages/collection/recruitList/index.scss":
/*!*****************************************************!*\
  !*** ./src/pages/collection/recruitList/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/collection/recruitList/index.tsx":
/*!****************************************************!*\
  !*** ./src/pages/collection/recruitList/index.tsx ***!
  \****************************************************/
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

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

__webpack_require__(/*! ./index.scss */ "./src/pages/collection/recruitList/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecruitList = function (_Taro$Component) {
  _inherits(RecruitList, _Taro$Component);

  function RecruitList() {
    _classCallCheck(this, RecruitList);

    var _this = _possibleConstructorReturn(this, (RecruitList.__proto__ || Object.getPrototypeOf(RecruitList)).apply(this, arguments));

    _this.$usedState = ["$compid__49", "bottom", "initPage"];
    _this.customComponents = ["CollectionRecruitList"];
    return _this;
  }

  _createClass(RecruitList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(RecruitList.prototype.__proto__ || Object.getPrototypeOf(RecruitList.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__49"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__49 = _genCompid2[0],
          $compid__49 = _genCompid2[1];

      var _props = this.__props,
          bottom = _props.bottom,
          initPage = _props.initPage;
      // * 标记是否是在刷新状态

      var _useState = (0, _taroSwan.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          refresh = _useState2[0],
          setRefresh = _useState2[1];
      // * 定义招工列表数组


      var _useState3 = (0, _taroSwan.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          lists = _useState4[0],
          setLists = _useState4[1];
      // 招工初始页数


      var _useState5 = (0, _taroSwan.useState)({
        page: 1
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          initRecPage = _useState6[0],
          setinitRecPage = _useState6[1];
      // 没有更多数据


      var _useState7 = (0, _taroSwan.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          recruitNoMoreData = _useState8[0],
          setRecruitNoMoreData = _useState8[1];
      // 是否加载更多


      var _useState9 = (0, _taroSwan.useState)(false),
          _useState10 = _slicedToArray(_useState9, 2),
          more = _useState10[0],
          setMore = _useState10[1];
      // 获取用户是否登录


      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // 判断是否登陆
      (0, _taroSwan.useEffect)(function () {
        if (!login) {
          return;
        }
        getCollectionRecruitListDataAction();
      }, [login, initRecPage]);
      // * 请求数据
      var getCollectionRecruitListDataAction = function getCollectionRecruitListDataAction() {
        (0, _index.getCollectionRecruitListData)(initRecPage.page).then(function (res) {
          _taroSwan2.default.hideNavigationBarLoading();
          _taroSwan2.default.stopPullDownRefresh();
          if (!res.list.length) {
            setRecruitNoMoreData(true);
          }
          if (initRecPage.page === 1) {
            setLists([].concat(_toConsumableArray(res.list)));
          } else {
            setLists([].concat(_toConsumableArray(lists), _toConsumableArray(res.list)));
          }
          if (refresh) {
            setRefresh(false);
          }
          if (more) {
            setMore(false);
          }
        });
      };
      // * 上拉刷新
      (0, _taroSwan.useEffect)(function () {
        if (!bottom) {
          return;
        }
        if (recruitNoMoreData) {
          return;
        }
        setinitRecPage(_extends({}, initRecPage, { page: initRecPage.page + 1 }));
      }, [bottom]);
      // 下拉
      (0, _taroSwan.useEffect)(function () {
        if (initPage === 0) {
          return;
        }
        setRecruitNoMoreData(false);
        setinitRecPage({ page: 1 });
      }, [initPage]);
      // * 招工取消收藏
      var recruitListHandler = function recruitListHandler(id) {
        (0, _index.recruitListCancelCollectionAction)(id).then(function (res) {
          if (res.errcode === 'ok') {
            setinitRecPage({ page: 1 });
          }
        });
      };
      this.anonymousFunc0 = recruitListHandler;
      _taroSwan.propsManager.set({
        "data": lists,
        "onHandlerClick": this.anonymousFunc0,
        "recruitNoMoreData": recruitNoMoreData
      }, $compid__49, $prevCompid__49);
      Object.assign(this.__state, {
        $compid__49: $compid__49
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return RecruitList;
}(_taroSwan2.default.Component);

RecruitList.$$events = [];
RecruitList.$$componentPath = "pages/collection/recruitList/index";
exports.default = RecruitList;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(RecruitList));

/***/ })

},[["./src/pages/collection/recruitList/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
