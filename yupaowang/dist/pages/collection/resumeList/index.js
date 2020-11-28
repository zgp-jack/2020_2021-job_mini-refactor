<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[42],{"288":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var $=n(0),k=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}($),S=n(2);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(289);var o=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ResumeList,k.default.Component),r(ResumeList,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0})(ResumeList.prototype.__proto__||Object.getPrototypeOf(ResumeList.prototype),"_constructor",this).call(this,e),this.$$refs=new k.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var r=this.$prefix,o=(0,$.genCompid)(r+"$compid__53"),a=A(o,2),i=a[0],s=a[1],u=this.__props,c=u.bottom,l=u.initPage,f=(0,$.useState)(!1),p=A(f,2),y=p[0],_=p[1],h=(0,$.useState)([]),m=A(h,2),d=m[0],b=m[1],v=(0,$.useState)({"page":1}),g=A(v,2),O=g[0],w=g[1],C=(0,$.useState)(!1),R=A(C,2),P=R[0],j=R[1];return(0,$.useEffect)(function(){(0,S.getCollectionResumeListData)(O.page).then(function(e){k.default.hideNavigationBarLoading(),k.default.stopPullDownRefresh(),e.data.length||j(!0),1===O.page?b([].concat(_toConsumableArray(e.data))):b([].concat(_toConsumableArray(d),_toConsumableArray(e.data))),y&&_(!1)})},[O]),(0,$.useEffect)(function(){c&&(P||w(L({},O,{"page":O.page+1})))},[c]),(0,$.useEffect)(function(){l&&(j(!1),w({"page":l}))},[l]),this.anonymousFunc0=function resumeListHandler(e){(0,S.ResumeCancelCollectionAction)(e).then(function(e){"ok"===e.errcode&&w({"page":1})})},$.propsManager.set({"data":d,"onHandlerClick":this.anonymousFunc0,"recruitNoMoreData":P},s,i),Object.assign(this.__state,{"$compid__53":s}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}}]),ResumeList);function ResumeList(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ResumeList);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ResumeList.__proto__||Object.getPrototypeOf(ResumeList)).apply(this,arguments));return e.$usedState=["$compid__53","bottom","initPage"],e.customComponents=["CollectionResumeList"],e}o.$$events=[],o.$$componentPath="pages/collection/resumeList/index",t.default=o,Component(n(0).default.createComponent(o))},"289":function(e,t,n){}},[[288,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/collection/resumeList/index"],{

/***/ "./src/pages/collection/resumeList/index.scss":
/*!****************************************************!*\
  !*** ./src/pages/collection/resumeList/index.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/collection/resumeList/index.tsx":
/*!***************************************************!*\
  !*** ./src/pages/collection/resumeList/index.tsx ***!
  \***************************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/collection/resumeList/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResumeList = function (_Taro$Component) {
  _inherits(ResumeList, _Taro$Component);

  function ResumeList() {
    _classCallCheck(this, ResumeList);

    var _this = _possibleConstructorReturn(this, (ResumeList.__proto__ || Object.getPrototypeOf(ResumeList)).apply(this, arguments));

    _this.$usedState = ["$compid__53", "bottom", "initPage"];
    _this.customComponents = ["CollectionResumeList"];
    return _this;
  }

  _createClass(ResumeList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(ResumeList.prototype.__proto__ || Object.getPrototypeOf(ResumeList.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__53"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__53 = _genCompid2[0],
          $compid__53 = _genCompid2[1];

      var _props = this.__props,
          bottom = _props.bottom,
          initPage = _props.initPage;
      // * 标记是否是在刷新状态

      var _useState = (0, _taroSwan.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          refresh = _useState2[0],
          setRefresh = _useState2[1];
      // * 定义找活列表数组


      var _useState3 = (0, _taroSwan.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          resLists = _useState4[0],
          setResLists = _useState4[1];
      // 找活初始页数


      var _useState5 = (0, _taroSwan.useState)({
        page: 1
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          initResPage = _useState6[0],
          setinitResPage = _useState6[1];
      // 没有更多数据


      var _useState7 = (0, _taroSwan.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          recruitNoMoreData = _useState8[0],
          setRecruitNoMoreData = _useState8[1];
      // 请求数据


      (0, _taroSwan.useEffect)(function () {
        (0, _index.getCollectionResumeListData)(initResPage.page).then(function (res) {
          _taroSwan2.default.hideNavigationBarLoading();
          _taroSwan2.default.stopPullDownRefresh();
          if (!res.data.length) {
            setRecruitNoMoreData(true);
          }
          if (initResPage.page === 1) {
            setResLists([].concat(_toConsumableArray(res.data)));
          } else {
            setResLists([].concat(_toConsumableArray(resLists), _toConsumableArray(res.data)));
          }
          if (refresh) {
            setRefresh(false);
          }
        });
      }, [initResPage]);
      // 上拉加载更多
      (0, _taroSwan.useEffect)(function () {
        if (!bottom) {
          return;
        }
        if (recruitNoMoreData) {
          return;
        }
        setinitResPage(_extends({}, initResPage, { page: initResPage.page + 1 }));
      }, [bottom]);
      // 下拉
      (0, _taroSwan.useEffect)(function () {
        if (!initPage) {
          return;
        }
        setRecruitNoMoreData(false);
        setinitResPage({ page: initPage });
      }, [initPage]);
      // 找活取消收藏
      var resumeListHandler = function resumeListHandler(id) {
        (0, _index.ResumeCancelCollectionAction)(id).then(function (res) {
          if (res.errcode === 'ok') {
            setinitResPage({ page: 1 });
          }
        });
      };
      this.anonymousFunc0 = resumeListHandler;
      _taroSwan.propsManager.set({
        "data": resLists,
        "onHandlerClick": this.anonymousFunc0,
        "recruitNoMoreData": recruitNoMoreData
      }, $compid__53, $prevCompid__53);
      Object.assign(this.__state, {
        $compid__53: $compid__53
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }]);

  return ResumeList;
}(_taroSwan2.default.Component);

ResumeList.$$events = [];
ResumeList.$$componentPath = "pages/collection/resumeList/index";
exports.default = ResumeList;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(ResumeList));

/***/ })

},[["./src/pages/collection/resumeList/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
