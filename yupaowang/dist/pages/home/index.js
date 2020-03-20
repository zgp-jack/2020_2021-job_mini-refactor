<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[25],{"60":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},G=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var r=[],o=!0,n=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{!o&&s.return&&s.return()}finally{if(n)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e};function defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var T=r(0),n=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(T);r(61);var F=r(1),J=r(2);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Home,n.default.Component),o(Home,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var n=Object.getPrototypeOf(e);return null===n?void 0:get(n,t,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(Home.prototype.__proto__||Object.getPrototypeOf(Home.prototype),"_constructor",this).call(this,e),this.$$refs=new n.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,r){this.__state=e||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,n=(0,T.genCompid)(o+"$compid__1"),a=G(n,2),i=a[0],s=a[1],c=(0,T.genCompid)(o+"$compid__2"),u=G(c,2),p=u[0],l=u[1],f=(0,T.genCompid)(o+"$compid__3"),_=G(f,2),m=_[0],d=_[1],y=(0,T.genCompid)(o+"$compid__4"),b=G(y,2),h=b[0],v=b[1],g=(0,T.genCompid)(o+"$compid__5"),C=G(g,2),$=C[0],w=C[1],O=(0,T.useState)({"area":"","location":""}),j=G(O,2),A=j[0],P=(j[1],(0,T.useState)({"lists":[]})),k=G(P,2),M=k[0],S=k[1],H=(0,T.useState)({"vertical":!0,"lists":[]}),R=G(H,2),D=R[0],L=R[1],x=(0,T.useState)({"recruit":[],"resume":[],"fleamarket":[]}),E=G(x,2),I=E[0],N=E[1];return(0,T.useEffect)(function(){(0,J.getBannerNotice)().then(function(e){L(U({},D,{"lists":[].concat(_toConsumableArray(e.notice))})),S(U({},M,{"lists":[].concat(_toConsumableArray(e.banner))}))})},[]),(0,T.useEffect)(function(){(0,J.getAllListItem)(A).then(function(e){N(U({},I,{"recruit":[[].concat(_toConsumableArray(e.job.lists))],"resume":[[].concat(_toConsumableArray(e.resume.lists))],"fleamarket":[[].concat(_toConsumableArray(e.fleamarket.lists))]}))})},[A]),T.propsManager.set({"data":M},s,i),T.propsManager.set({"data":D},l,p),T.propsManager.set({"data":I.recruit,"bottom":!1},d,m),T.propsManager.set({"data":I.resume,"bottom":!1},v,h),T.propsManager.set({"data":I.fleamarket,"bottom":!1},w,$),Object.assign(this.__state,{"$compid__1":s,"$compid__2":l,"$compid__3":d,"$compid__4":v,"$compid__5":w,"IMGCDNURL":F.IMGCDNURL}),this.__state}}]),Home);function Home(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Home);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Home.__proto__||Object.getPrototypeOf(Home)).apply(this,arguments));return e.$usedState=["$compid__1","$compid__2","$compid__3","$compid__4","$compid__5","IMGCDNURL"],e.customComponents=["SwiperComponent","Projects","Fastfun","SwiperNews","RecruitList","ResumeList","UsedList","About"],e}a.$$events=[],a.$$componentPath="pages/home/index",t.default=a,Component(r(0).default.createComponent(a))},"61":function(e,t,r){}},[[60,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/home/index"],{

/***/ "./src/pages/home/index.scss":
/*!***********************************!*\
  !*** ./src/pages/home/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/home/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/home/index.tsx ***!
  \**********************************/
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

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/home/index.scss");

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Taro$Component) {
  _inherits(Home, _Taro$Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));

    _this.$usedState = ["$compid__1", "$compid__2", "$compid__3", "$compid__4", "$compid__5", "IMGCDNURL"];
    _this.customComponents = ["SwiperComponent", "Projects", "Fastfun", "SwiperNews", "RecruitList", "ResumeList", "UsedList", "About"];
    return _this;
  }

  _createClass(Home, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Home.prototype.__proto__ || Object.getPrototypeOf(Home.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__1"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__1 = _genCompid2[0],
          $compid__1 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__2"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__2 = _genCompid4[0],
          $compid__2 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__3"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__3 = _genCompid6[0],
          $compid__3 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__4"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__4 = _genCompid8[0],
          $compid__4 = _genCompid8[1];

      var _genCompid9 = (0, _taroWeapp.genCompid)(__prefix + "$compid__5"),
          _genCompid10 = _slicedToArray(_genCompid9, 2),
          $prevCompid__5 = _genCompid10[0],
          $compid__5 = _genCompid10[1];
      // * 获取列表数据的data


      var _useState = (0, _taroWeapp.useState)({
        area: '',
        location: ''
      }),
          _useState2 = _slicedToArray(_useState, 2),
          filterData = _useState2[0],
          setFilterData = _useState2[1];
      // * 轮播图的基本参数配置


      var _useState3 = (0, _taroWeapp.useState)({
        lists: []
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          swiper = _useState4[0],
          setSwiper = _useState4[1];
      // * 公告列表


      var _useState5 = (0, _taroWeapp.useState)({
        vertical: true,
        lists: []
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          notice = _useState6[0],
          setNotice = _useState6[1];
      // * 数据列表


      var _useState7 = (0, _taroWeapp.useState)({
        recruit: [],
        resume: [],
        fleamarket: []
      }),
          _useState8 = _slicedToArray(_useState7, 2),
          lists = _useState8[0],
          setLists = _useState8[1];
      // 请求轮播数据


      (0, _taroWeapp.useEffect)(function () {
        (0, _index2.getBannerNotice)().then(function (res) {
          setNotice(_extends({}, notice, { lists: [].concat(_toConsumableArray(res.notice)) }));
          setSwiper(_extends({}, swiper, { lists: [].concat(_toConsumableArray(res.banner)) }));
        });
      }, []);
      // 请求列表数据
      (0, _taroWeapp.useEffect)(function () {
        (0, _index2.getAllListItem)(filterData).then(function (res) {
          setLists(_extends({}, lists, { recruit: [[].concat(_toConsumableArray(res.job.lists))], resume: [[].concat(_toConsumableArray(res.resume.lists))], fleamarket: [[].concat(_toConsumableArray(res.fleamarket.lists))] }));
        });
      }, [filterData]);
      _taroWeapp.propsManager.set({
        "data": swiper
      }, $compid__1, $prevCompid__1);
      _taroWeapp.propsManager.set({
        "data": notice
      }, $compid__2, $prevCompid__2);
      _taroWeapp.propsManager.set({
        "data": lists.recruit,
        "bottom": false
      }, $compid__3, $prevCompid__3);
      _taroWeapp.propsManager.set({
        "data": lists.resume,
        "bottom": false
      }, $compid__4, $prevCompid__4);
      _taroWeapp.propsManager.set({
        "data": lists.fleamarket,
        "bottom": false
      }, $compid__5, $prevCompid__5);
      Object.assign(this.__state, {
        $compid__1: $compid__1,
        $compid__2: $compid__2,
        $compid__3: $compid__3,
        $compid__4: $compid__4,
        $compid__5: $compid__5,
        IMGCDNURL: _index.IMGCDNURL
      });
      return this.__state;
    }
  }]);

  return Home;
}(_taroWeapp2.default.Component);

Home.$$events = [];
Home.$$componentPath = "pages/home/index";
exports.default = Home;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Home));

/***/ })

},[["./src/pages/home/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
