<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[55],{"172":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var he=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var a=[],n=!0,o=!1,i=void 0;try{for(var r,s=t[Symbol.iterator]();!(n=(r=s.next()).done)&&(a.push(r.value),!e||a.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}return a}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(t,e,a){return e&&defineProperties(t.prototype,e),a&&defineProperties(t,a),t};function defineProperties(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var Se=a(0),Te=_interopRequireDefault(Se),ke=a(2),Ce=a(7),Fe=a(1),xe=a(15),we=a(8),Ae=a(3),Oe=a(4),Ie=_interopRequireDefault(Oe);function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}a(173);var o=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Tabber,Te.default.Component),n(Tabber,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,a){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,a)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(a):void 0})(Tabber.prototype.__proto__||Object.getPrototypeOf(Tabber.prototype),"_constructor",this).call(this,t),this.$$refs=new Te.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,a){this.__state=t||this.state||{},this.__props=e||this.props||{};var n=this.$prefix,o=(0,Se.genCompid)(n+"$compid__64"),i=he(o,2),r=i[0],s=i[1],u=(0,Se.genCompid)(n+"$compid__65"),l=he(u,2),c=l[0],f=l[1],p=(0,Ae.useSelector)(function(t){return t.User.login}),y=(0,Se.useRouter)().params,m=y.info,d=y.office,g=(0,Se.useState)(!1),_=he(g,2),v=_[0],b=_[1],h=(0,Se.useState)(!1),S=he(h,2),T=S[0],k=S[1],C=(0,Se.useState)(m),F=he(C,2),x=F[0],w=F[1],A=(0,Se.useState)([]),O=he(A,2),I=O[0],P=O[1],$=(0,Se.useState)(""),j=he($,2),D=j[0],M=j[1],R=(0,Se.useState)(""),L=he(R,2),E=L[0],N=L[1],B=(0,Se.useState)(""),U=he(B,2),q=U[0],G=U[1],J=(0,Se.useState)(""),V=he(J,2),Y=V[0],z=V[1],H=(0,Se.useState)(""),K=he(H,2),Q=K[0],W=K[1],X=(0,Se.useState)("0"),Z=he(X,2),tt=Z[0],et=Z[1],at=(0,Se.useState)("0"),nt=he(at,2),ot=nt[0],it=nt[1],rt=(0,Se.useState)({"lists":[],"next_page":0,"stime":"0","bak":"0"}),st=he(rt,2),ut=st[0],lt=st[1],ct=(0,Se.useState)({"get":0,"expend":0}),ft=he(ct,2),pt=ft[0],yt=ft[1],mt=(0,Se.useState)(!1),dt=he(mt,2),gt=dt[0],_t=dt[1],vt=(0,Se.useState)(),bt=he(vt,2),ht=bt[0],St=(bt[1],(0,Se.useState)(!1)),Tt=he(St,2),kt=Tt[0],Ct=Tt[1],Ft=(0,Se.useState)(""),xt=he(Ft,2),wt=xt[0],At=xt[1],Ot=(0,Se.useState)(""),It=he(Ot,2),Pt=It[0],$t=It[1],jt=(0,Se.useState)({"y":"0","m":"0","stime":"0","type":0,"bak":"0","system_type":(0,Ce.getSystemInfo)(),"flag":!1}),Dt=he(jt,2),Mt=Dt[0],Rt=Dt[1],Lt=(0,Se.useState)(!1),Et=he(Lt,2),Nt=Et[0],Bt=Et[1],Ut=(0,Se.useState)({"time":"","sortType":"0","flag":!1,"listType":"0"}),qt=he(Ut,2),Gt=qt[0],Jt=qt[1],Vt=(0,Se.useState)({"time":"","sortType":"0","flag":!1,"listType":"0"}),Yt=he(Vt,2),zt=Yt[0],Ht=Yt[1],Kt=(0,Se.useState)(0),Qt=he(Kt,2),Wt=Qt[0],Xt=Qt[1],Zt=(0,Se.useState)([]),te=he(Zt,2),ee=te[0],ae=te[1],ne=(0,Se.useState)([]),oe=he(ne,2),ie=oe[0],re=oe[1],se=(0,Se.useState)(!1),ue=he(se,2),le=ue[0],ce=ue[1],fe=(0,Se.useState)(!1),pe=he(fe,2),ye=pe[0],me=pe[1];(0,Se.useEffect)(function(){var t="0"===x?"鱼泡网-积分来源记录":"鱼泡网-积分消耗记录";if(Te.default.setNavigationBarTitle({"title":t}),p){var e=new Date,a=e.getFullYear(),n=e.getMonth()+1;if(1<=n&&n<=9&&(n="0"+n),G(a+"-"+n),"0"===x)if(le){if(Gt.flag){var o=Gt.time.split("-"),i={"y":o[0],"m":o[1],"stime":"0","source_type":Gt.sortType,"bak":"0","system_type":(0,Ce.getSystemInfo)(),"flag":!0,"office":d};M(ee[Gt.listType]),W(o[0]+"年"+o[1]+"月"),z(Gt.time),Xt(parseInt(Gt.listType)),Rt(i)}}else ge();else if(ye){var r=zt.time.split("-"),s={"y":r[0],"m":r[1],"stime":"0","type":zt.sortType,"bak":"0","system_type":(0,Ce.getSystemInfo)(),"flag":!0};M(ie[zt.listType]),W(r[0]+"年"+r[1]+"月"),z(zt.time),Xt(parseInt(zt.listType)),Rt(s)}else de()}},[x]),(0,Se.useEffect)(function(){p&&Mt.flag&&("0"===x?_e:ve)()},[Mt]);var de=function integralExpendConfig(){(0,ke.integralExpendConfigAction)().then(function(t){N(t.data.min.y+"-"+t.data.min.m);var e=t.data.types.map(function(t){return t.name});P(t.data.types),re(e),me(!0),M("消耗分类");var a=t.data.default.y+"-"+t.data.default.m;z(a),W(t.data.default.y+"年"+t.data.default.m+"月");var n={"y":t.data.default.y,"m":t.data.default.m,"stime":"0","type":0,"bak":"0","system_type":(0,Ce.getSystemInfo)(),"flag":!0};Rt(n)})},ge=function integralSourceConfig(){var t={"office":d,"system_type":(0,Ce.getSystemInfo)()};(0,ke.integralSourceConfigAction)(t).then(function(t){N(t.data.min.y+"-"+t.data.min.m);var e=t.data.types.map(function(t){return t.name});P(t.data.types),ae(e),ce(!0),M("来源分类");var a=t.data.default.y+"-"+t.data.default.m;z(a),W(t.data.default.y+"年"+t.data.default.m+"月");var n={"y":t.data.default.y,"m":t.data.default.m,"stime":"0","source_type":0,"bak":"0","system_type":(0,Ce.getSystemInfo)(),"flag":!0,"office":d};Rt(n)})},_e=function integralSourceLists(){(0,ke.integralSourceListsAction)(Mt).then(function(t){Nt||(T||(yt(t.data.sum_data),k(!0)),v?(lt({"lists":[].concat(_toConsumableArray(t.data.lists)),"next_page":t.data.next_page,"stime":t.data.stime,"bak":t.data.bak}),b(!1)):lt({"lists":[].concat(_toConsumableArray(ut.lists),_toConsumableArray(t.data.lists)),"next_page":t.data.next_page,"stime":t.data.stime,"bak":t.data.bak}))})},ve=function integralExpendLists(){(0,ke.integralExpendListsAction)(Mt).then(function(t){Nt||(T||(yt(t.data.sum_data),k(!0)),v?(lt({"lists":[].concat(_toConsumableArray(t.data.lists)),"next_page":t.data.next_page,"stime":t.data.stime,"bak":t.data.bak}),b(!1)):lt({"lists":[].concat(_toConsumableArray(ut.lists),_toConsumableArray(t.data.lists)),"next_page":t.data.next_page,"stime":t.data.stime,"bak":t.data.bak}))})};(0,Se.useReachBottom)(function(){if(0!==ut.next_page){var t=Y.split("-"),e=void 0;if("0"===x)for(var a=0;a<I.length;a++)I[a].name===ee[tt]&&(e=I[a].type);else for(var n=0;n<I.length;n++)I[n].name===ie[ot]&&(e=I[n].type);var o={"y":t[0],"m":t[1],"stime":ut.stime,"source_type":e,"type":e,"bak":"0","system_type":"","flag":!0};Rt(o)}else Bt(!0)}),this.anonymousFunc0=function(t){return function handleClckTime(t){b(!0),k(!1);var e=t.target.value.split("-");W(e[0]+"年"+e[1]+"月"),z(t.target.value);var a=void 0;if("0"===x)for(var n=0;n<I.length;n++)I[n].name===ee[tt]&&(a=I[n].type);else for(var o=0;o<I.length;o++)I[o].name===ie[ot]&&(a=I[o].type);var i={"y":e[0],"m":e[1],"stime":"0","source_type":a,"type":a,"bak":"0","system_type":(0,Ce.getSystemInfo)(),"flag":!0};Rt(i)}(t)},this.anonymousFunc1=function(t){return function handleClick(t){b(!0),k(!1);var e=void 0;if("0"===x){et(t.detail.value),M(ee[t.detail.value]);for(var a=0;a<I.length;a++)I[a].name===ee[t.detail.value]&&(e=I[a].type)}else{M(ie[t.detail.value]),it(t.detail.value);for(var n=0;n<I.length;n++)I[n].name===ie[t.detail.value]&&(e=I[n].type)}var o=Y.split("-"),i={"y":o[0],"m":o[1],"stime":"0","type":e,"source_type":e,"bak":"0","system_type":(0,Ce.getSystemInfo)(),"flag":!0};Rt(i)}(t)},this.anonymousFunc2=function handleJump(){k(!1),Bt(!1),b(!0);var t=void 0;if("0"===x)for(var e=0;e<I.length;e++)I[e].name===ee[tt]&&(t=I[e].type);else for(var a=0;a<I.length;a++)I[a].name===ie[ot]&&(t=I[a].type);"0"===x?(w("1"),Jt({"time":Y,"sortType":t,"flag":!0,"listType":tt})):"1"===x&&(w("0"),Ht({"time":Y,"sortType":t,"flag":!0,"listType":ot}))},this.anonymousFunc3=function(){_t(!1)},this.anonymousFunc4=function(){Te.default.makePhoneCall({"phoneNumber":ht.user_mobile})},this.anonymousFunc5=function(){return function handleComplaint(t){Ct(!0),At(t)}(ht.id)};var be="1"===x&&gt&&ht?ht.classifyName.map(function(t,e){return t={"privateOriginal":(0,Se.internal_get_original)(t)},{"loopState__temp2":"1"===x&&gt&&ht?e+e:null,"privateOriginal":t.privateOriginal}}):[];return ut.lists.length||Se.propsManager.set({"text":"0"===x?"暂无积分来源记录":"暂无积分消耗记录"},s,r),kt&&Se.propsManager.set({"display":kt,"textarea":Pt,"handleTextarea":function handleTextarea(t){var e=t.detail.value;$t(e)},"setComplaintModal":Ct,"handleSubmit":function handleSubmit(){if(!(0,we.isVaildVal)(Pt,15,500))return(0,Ie.default)("输入内容不少于15个字且必须包含文字"),!1;var t={"content":Pt,"type":"job","infoId":wt};(0,ke.publishComplainAction)(t).then(function(t){"ok"===t.errcode&&(0,xe.SubscribeToNews)("complain",function(){(0,Oe.showModalTip)({"tips":t.errmsg,"callback":function callback(){Ct(!1),_t(!1)}})})})}},f,c),Object.assign(this.__state,{"data":ut,"modalData":ht,"loopArray70":be,"$compid__64":s,"$compid__65":f,"time":Y,"start":E,"end":q,"IMGCDNURL":Fe.IMGCDNURL,"initInfo":x,"sourceList":ee,"consumeList":ie,"startType":Wt,"modal":gt,"complaintModal":kt,"showTime":Q,"title":D,"num":pt}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}}]),Tabber);function Tabber(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Tabber);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Tabber.__proto__||Object.getPrototypeOf(Tabber)).apply(this,arguments));return t.config={"navigationBarTitleText":""},t.$usedState=["data","modalData","loopArray70","$compid__64","$compid__65","time","start","end","IMGCDNURL","initInfo","sourceList","consumeList","startType","modal","complaintModal","showTime","title","num"],t.customComponents=["Auth","Nodata","Report"],t}o.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5"],o.$$componentPath="pages/integral/tabber/index",o.config={"navigationBarTitleText":""},e.default=o,Page(a(0).default.createComponent(o,!0))},"173":function(t,e,a){}},[[172,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/integral/tabber/index"],{

/***/ "./src/pages/integral/tabber/index.scss":
/*!**********************************************!*\
  !*** ./src/pages/integral/tabber/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/integral/tabber/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/integral/tabber/index.tsx ***!
  \*********************************************/
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

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index3 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _index4 = __webpack_require__(/*! ../../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

var _index5 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index6 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index7 = _interopRequireDefault(_index6);

__webpack_require__(/*! ./index.scss */ "./src/pages/integral/tabber/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 只用temp和source

var Tabber = function (_Taro$Component) {
  _inherits(Tabber, _Taro$Component);

  function Tabber() {
    _classCallCheck(this, Tabber);

    var _this = _possibleConstructorReturn(this, (Tabber.__proto__ || Object.getPrototypeOf(Tabber)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: ''
    };

    _this.$usedState = ["data", "modalData", "loopArray70", "$compid__64", "$compid__65", "time", "start", "end", "IMGCDNURL", "initInfo", "sourceList", "consumeList", "startType", "modal", "complaintModal", "showTime", "title", "num"];
    _this.customComponents = ["Auth", "Nodata", "Report"];
    return _this;
  }

  _createClass(Tabber, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Tabber.prototype.__proto__ || Object.getPrototypeOf(Tabber.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__64"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__64 = _genCompid2[0],
          $compid__64 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__65"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__65 = _genCompid4[0],
          $compid__65 = _genCompid4[1];
      // 检测用户是否登录


      var login = (0, _redux.useSelector)(function (store) {
        return store.User['login'];
      });
      var router = (0, _taroSwan.useRouter)();
      var _router$params = router.params,
          info = _router$params.info,
          office = _router$params.office;
      // 切换

      var _useState = (0, _taroSwan.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          changeType = _useState2[0],
          setChangeType = _useState2[1];
      // 标识是第一次


      var _useState3 = (0, _taroSwan.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          first = _useState4[0],
          setFirst = _useState4[1];
      // 是来源还是消耗


      var _useState5 = (0, _taroSwan.useState)(info),
          _useState6 = _slicedToArray(_useState5, 2),
          initInfo = _useState6[0],
          setInitInfo = _useState6[1];
      // 分类原始内容


      var _useState7 = (0, _taroSwan.useState)([]),
          _useState8 = _slicedToArray(_useState7, 2),
          initList = _useState8[0],
          setInitList = _useState8[1];
      // 第一次显示内容


      var _useState9 = (0, _taroSwan.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          title = _useState10[0],
          setTitle = _useState10[1];
      // start时间


      var _useState11 = (0, _taroSwan.useState)(''),
          _useState12 = _slicedToArray(_useState11, 2),
          start = _useState12[0],
          setStart = _useState12[1];
      // end时间


      var _useState13 = (0, _taroSwan.useState)(''),
          _useState14 = _slicedToArray(_useState13, 2),
          end = _useState14[0],
          setEnd = _useState14[1];
      // 默认日期


      var _useState15 = (0, _taroSwan.useState)(''),
          _useState16 = _slicedToArray(_useState15, 2),
          time = _useState16[0],
          setTime = _useState16[1];
      // 显示时间


      var _useState17 = (0, _taroSwan.useState)(''),
          _useState18 = _slicedToArray(_useState17, 2),
          showTime = _useState18[0],
          setShowTime = _useState18[1];
      // 设置类型


      var _useState19 = (0, _taroSwan.useState)('0'),
          _useState20 = _slicedToArray(_useState19, 2),
          sourceType = _useState20[0],
          setSourceType = _useState20[1];
      // 消耗


      var _useState21 = (0, _taroSwan.useState)('0'),
          _useState22 = _slicedToArray(_useState21, 2),
          consumeType = _useState22[0],
          setConsumeType = _useState22[1];
      // 数据


      var _useState23 = (0, _taroSwan.useState)({
        lists: [],
        next_page: 0,
        stime: '0',
        bak: '0'
      }),
          _useState24 = _slicedToArray(_useState23, 2),
          data = _useState24[0],
          setData = _useState24[1];
      // 默认积分


      var _useState25 = (0, _taroSwan.useState)({
        get: 0,
        expend: 0
      }),
          _useState26 = _slicedToArray(_useState25, 2),
          num = _useState26[0],
          setNum = _useState26[1];
      // 弹窗


      var _useState27 = (0, _taroSwan.useState)(false),
          _useState28 = _slicedToArray(_useState27, 2),
          modal = _useState28[0],
          setModal = _useState28[1];
      // 弹窗内容


      var _useState29 = (0, _taroSwan.useState)(),
          _useState30 = _slicedToArray(_useState29, 2),
          modalData = _useState30[0],
          setModalData = _useState30[1];
      // 投诉


      var _useState31 = (0, _taroSwan.useState)(false),
          _useState32 = _slicedToArray(_useState31, 2),
          complaintModal = _useState32[0],
          setComplaintModal = _useState32[1];
      // 投诉id 


      var _useState33 = (0, _taroSwan.useState)(''),
          _useState34 = _slicedToArray(_useState33, 2),
          complaintId = _useState34[0],
          setComplaintId = _useState34[1];
      // textarea


      var _useState35 = (0, _taroSwan.useState)(''),
          _useState36 = _slicedToArray(_useState35, 2),
          textarea = _useState36[0],
          setTextarea = _useState36[1];
      // 需要传递的参数


      var _useState37 = (0, _taroSwan.useState)({
        y: '0',
        m: '0',
        stime: '0',
        type: 0,
        bak: '0',
        system_type: (0, _index2.getSystemInfo)(),
        flag: false
      }),
          _useState38 = _slicedToArray(_useState37, 2),
          params = _useState38[0],
          setParams = _useState38[1];
      // 没有下一页


      var _useState39 = (0, _taroSwan.useState)(false),
          _useState40 = _slicedToArray(_useState39, 2),
          nextPage = _useState40[0],
          setNextPage = _useState40[1];
      // 搜索来源记录


      var _useState41 = (0, _taroSwan.useState)({
        time: '',
        sortType: '0',
        flag: false,
        listType: '0'
      }),
          _useState42 = _slicedToArray(_useState41, 2),
          sourceSearch = _useState42[0],
          setSourceSearch = _useState42[1];
      // 搜索消耗记录


      var _useState43 = (0, _taroSwan.useState)({
        time: '',
        sortType: '0',
        flag: false,
        listType: '0'
      }),
          _useState44 = _slicedToArray(_useState43, 2),
          consumeSearch = _useState44[0],
          setConsumeSearch = _useState44[1];
      // 下拉框开始位置


      var _useState45 = (0, _taroSwan.useState)(0),
          _useState46 = _slicedToArray(_useState45, 2),
          startType = _useState46[0],
          setStartType = _useState46[1];
      // 来源分类list


      var _useState47 = (0, _taroSwan.useState)([]),
          _useState48 = _slicedToArray(_useState47, 2),
          sourceList = _useState48[0],
          setSourceList = _useState48[1];
      // 消耗分类list


      var _useState49 = (0, _taroSwan.useState)([]),
          _useState50 = _slicedToArray(_useState49, 2),
          consumeList = _useState50[0],
          setConsumeList = _useState50[1];
      // 来源是否获取到list


      var _useState51 = (0, _taroSwan.useState)(false),
          _useState52 = _slicedToArray(_useState51, 2),
          issource = _useState52[0],
          setIssource = _useState52[1];
      // 积分是否获取到list


      var _useState53 = (0, _taroSwan.useState)(false),
          _useState54 = _slicedToArray(_useState53, 2),
          isconsume = _useState54[0],
          setIsconsume = _useState54[1];

      (0, _taroSwan.useEffect)(function () {
        var navigationBarTitleText = initInfo === '0' ? '鱼泡网-积分来源记录' : '鱼泡网-积分消耗记录';
        _taroSwan2.default.setNavigationBarTitle({ title: navigationBarTitleText });
        // 如果用户没有登录 直接断掉请求
        if (!login) {
          return;
        } // 获取现在时间
        var newTime = new Date();
        var nowyear = newTime.getFullYear();
        var nowmonth = newTime.getMonth() + 1;
        if (nowmonth >= 1 && nowmonth <= 9) {
          nowmonth = "0" + nowmonth;
        }
        setEnd(nowyear + "-" + nowmonth);
        if (initInfo === '0') {
          if (!issource) {
            integralSourceConfig();
          } else {
            if (sourceSearch.flag) {
              var date = sourceSearch.time.split('-');
              var _params = {
                y: date[0],
                m: date[1],
                stime: '0',
                source_type: sourceSearch.sortType,
                bak: '0',
                system_type: (0, _index2.getSystemInfo)(),
                flag: true,
                office: office
              };
              //设置显示类型名字
              setTitle(sourceList[sourceSearch.listType]);
              // 设置显示时间
              setShowTime(date[0] + '年' + date[1] + '月');
              // 设置时间
              setTime(sourceSearch.time);
              // 设置下拉分类的位置
              setStartType(parseInt(sourceSearch.listType));
              setParams(_params);
            }
          }
        } else {
          if (!isconsume) {
            integralExpendConfig();
          } else {
            var _date = consumeSearch.time.split('-');
            var _params2 = {
              y: _date[0],
              m: _date[1],
              stime: '0',
              type: consumeSearch.sortType,
              bak: '0',
              system_type: (0, _index2.getSystemInfo)(),
              flag: true
            };
            //设置显示类型名字
            setTitle(consumeList[consumeSearch.listType]);
            // 设置显示时间
            setShowTime(_date[0] + '年' + _date[1] + '月');
            // 设置时间
            setTime(consumeSearch.time);
            // 设置下拉分类的位置
            setStartType(parseInt(consumeSearch.listType));
            setParams(_params2);
          }
        }
      }, [initInfo]);
      (0, _taroSwan.useEffect)(function () {
        if (!login) {
          return;
        }
        if (params.flag) {
          if (initInfo === '0') {
            integralSourceLists();
          } else {
            integralExpendLists();
          }
        }
      }, [params]);
      // 积分消耗
      var integralExpendConfig = function integralExpendConfig() {
        (0, _index.integralExpendConfigAction)().then(function (res) {
          setStart(res.data.min.y + '-' + res.data.min.m);
          var item = res.data.types.map(function (item) {
            return item.name;
          });
          setInitList(res.data.types);
          setConsumeList(item);
          setIsconsume(true);
          setTitle('消耗分类');
          var time = res.data.default.y + '-' + res.data.default.m;
          setTime(time);
          setShowTime(res.data.default.y + '年' + res.data.default.m + '月');
          var params = {
            y: res.data.default.y,
            m: res.data.default.m,
            stime: '0',
            type: 0,
            bak: '0',
            system_type: (0, _index2.getSystemInfo)(),
            flag: true
          };
          setParams(params);
        });
      };
      // 积分来源分类
      var integralSourceConfig = function integralSourceConfig() {
        var params = {
          office: office,
          system_type: (0, _index2.getSystemInfo)()
        };
        (0, _index.integralSourceConfigAction)(params).then(function (res) {
          setStart(res.data.min.y + '-' + res.data.min.m);
          var item = res.data.types.map(function (item) {
            return item.name;
          });
          setInitList(res.data.types);
          setSourceList(item);
          setIssource(true);
          setTitle('来源分类');
          var date = res.data.default.y + '-' + res.data.default.m;
          setTime(date);
          setShowTime(res.data.default.y + '年' + res.data.default.m + '月');
          var params = {
            y: res.data.default.y,
            m: res.data.default.m,
            stime: '0',
            source_type: 0,
            bak: '0',
            system_type: (0, _index2.getSystemInfo)(),
            flag: true,
            office: office
          };
          setParams(params);
        });
      };
      // 积分列表
      var integralSourceLists = function integralSourceLists() {
        (0, _index.integralSourceListsAction)(params).then(function (res) {
          if (!nextPage) {
            if (!first) {
              setNum(res.data.sum_data);
              setFirst(true);
            }
            if (changeType) {
              setData({ lists: [].concat(_toConsumableArray(res.data.lists)), next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak });
              setChangeType(false);
            } else {
              setData({ lists: [].concat(_toConsumableArray(data.lists), _toConsumableArray(res.data.lists)), next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak });
            }
          }
        });
      };
      // 消耗积分列表
      var integralExpendLists = function integralExpendLists() {
        (0, _index.integralExpendListsAction)(params).then(function (res) {
          // 下拉时候不修改
          // 选择时间/分类/跳转就直接赋值，只有加载更多在追加
          if (!nextPage) {
            if (!first) {
              setNum(res.data.sum_data);
              setFirst(true);
            }
            if (changeType) {
              setData({ lists: [].concat(_toConsumableArray(res.data.lists)), next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak });
              setChangeType(false);
            } else {
              setData({ lists: [].concat(_toConsumableArray(data.lists), _toConsumableArray(res.data.lists)), next_page: res.data.next_page, stime: res.data.stime, bak: res.data.bak });
            }
          }
        });
      };
      // 点击分类
      var handleClick = function handleClick(e) {
        setChangeType(true);
        setFirst(false);
        var type = void 0;
        if (initInfo === '0') {
          setSourceType(e.detail.value);
          setTitle(sourceList[e.detail.value]);
          for (var i = 0; i < initList.length; i++) {
            if (initList[i].name === sourceList[e.detail.value]) {
              type = initList[i].type;
            }
          }
        } else {
          setTitle(consumeList[e.detail.value]);
          setConsumeType(e.detail.value);
          for (var _i = 0; _i < initList.length; _i++) {
            if (initList[_i].name === consumeList[e.detail.value]) {
              type = initList[_i].type;
            }
          }
        }
        var date = time.split('-');
        var params = {
          y: date[0],
          m: date[1],
          stime: '0',
          type: type,
          source_type: type,
          bak: '0',
          system_type: (0, _index2.getSystemInfo)(),
          flag: true
        };
        setParams(params);
      };
      // 时间选择
      var handleClckTime = function handleClckTime(e) {
        setChangeType(true);
        setFirst(false);
        var date = e.target.value.split('-');
        setShowTime(date[0] + '年' + date[1] + '月');
        setTime(e.target.value);
        var type = void 0;
        if (initInfo === '0') {
          for (var i = 0; i < initList.length; i++) {
            if (initList[i].name === sourceList[sourceType]) {
              type = initList[i].type;
            }
          }
        } else {
          for (var _i2 = 0; _i2 < initList.length; _i2++) {
            if (initList[_i2].name === consumeList[consumeType]) {
              type = initList[_i2].type;
            }
          }
        }
        var params = {
          y: date[0],
          m: date[1],
          stime: '0',
          //来源和消耗传值不同（偷懒都传过去）
          source_type: type,
          type: type,
          bak: '0',
          system_type: (0, _index2.getSystemInfo)(),
          flag: true
        };
        setParams(params);
      };
      // 是否加载更多
      (0, _taroSwan.useReachBottom)(function () {
        // 没有内容
        if (data.next_page === 0) {
          setNextPage(true);
          return;
        }
        // 时间：
        var date = time.split('-');
        // 类型
        var type = void 0;
        if (initInfo === '0') {
          for (var i = 0; i < initList.length; i++) {
            if (initList[i].name === sourceList[sourceType]) {
              type = initList[i].type;
            }
          }
        } else {
          for (var _i3 = 0; _i3 < initList.length; _i3++) {
            if (initList[_i3].name === consumeList[consumeType]) {
              type = initList[_i3].type;
            }
          }
        }
        var params = {
          y: date[0],
          m: date[1],
          stime: data.stime,
          //来源和消耗传值不同（偷懒都传过去）
          source_type: type,
          type: type,
          bak: '0',
          system_type: '',
          flag: true
        };
        setParams(params);
      });
      // 跳转
      var handleJump = function handleJump() {
        setFirst(false);
        setNextPage(false);
        setChangeType(true);
        var type = void 0;
        if (initInfo === '0') {
          for (var i = 0; i < initList.length; i++) {
            if (initList[i].name === sourceList[sourceType]) {
              type = initList[i].type;
            }
          }
        } else {
          for (var _i4 = 0; _i4 < initList.length; _i4++) {
            if (initList[_i4].name === consumeList[consumeType]) {
              type = initList[_i4].type;
            }
          }
        }
        if (initInfo === '0') {
          setInitInfo("1");
          // 存搜索记录
          setSourceSearch({
            time: time,
            sortType: type,
            flag: true,
            listType: sourceType
          });
        } else if (initInfo === '1') {
          setInitInfo("0");
          // 存搜索记录
          setConsumeSearch({
            time: time,
            sortType: type,
            flag: true,
            listType: consumeType
          });
        }
      };
      // 弹窗
      var handleModal = function handleModal(userId) {
        (0, _index.integralUseInfoAction)(userId).then(function (res) {
          if (res.errcode === 'deleted') {
            _taroSwan2.default.showModal({
              title: '温馨提示',
              content: res.errmsg,
              showCancel: false
            });
          } else {
            setModalData(res.info);
            setModal(true);
          }
        });
      };
      // 投诉弹窗
      var handleComplaint = function handleComplaint(id) {
        setComplaintModal(true);
        setComplaintId(id);
      };
      // 多行输入
      var handleTextarea = function handleTextarea(e) {
        var val = e.detail.value;
        setTextarea(val);
      };
      // 提交投诉
      var handleSubmit = function handleSubmit() {
        if (!(0, _index5.isVaildVal)(textarea, 15, 500)) {
          (0, _index7.default)('输入内容不少于15个字且必须包含文字');
          return false;
        }
        var params = {
          content: textarea,
          type: 'job',
          infoId: complaintId
        };
        (0, _index.publishComplainAction)(params).then(function (res) {
          if (res.errcode === 'ok') {
            (0, _index4.SubscribeToNews)('complain', function () {
              (0, _index6.showModalTip)({
                tips: res.errmsg,
                callback: function callback() {
                  setComplaintModal(false);
                  setModal(false);
                }
              });
            });
          }
        });
      };
      this.anonymousFunc0 = function (e) {
        return handleClckTime(e);
      };
      this.anonymousFunc1 = function (e) {
        return handleClick(e);
      };
      this.anonymousFunc2 = handleJump;
      this.anonymousFunc3 = function () {
        setModal(false);
      };
      this.anonymousFunc4 = function () {
        _taroSwan2.default.makePhoneCall({ phoneNumber: modalData.user_mobile });
      };
      this.anonymousFunc5 = function () {
        return handleComplaint(modalData.id);
      };
      var loopArray70 = initInfo === '1' && modal && modalData ? modalData.classifyName.map(function (v, i) {
        v = {
          privateOriginal: (0, _taroSwan.internal_get_original)(v)
        };
        var loopState__temp2 = initInfo === '1' && modal && modalData ? i + i : null;
        return {
          loopState__temp2: loopState__temp2,
          privateOriginal: v.privateOriginal
        };
      }) : [];
      !data.lists.length && _taroSwan.propsManager.set({
        "text": initInfo === '0' ? '暂无积分来源记录' : '暂无积分消耗记录'
      }, $compid__64, $prevCompid__64);
      complaintModal && _taroSwan.propsManager.set({
        "display": complaintModal,
        "textarea": textarea,
        "handleTextarea": handleTextarea,
        "setComplaintModal": setComplaintModal,
        "handleSubmit": handleSubmit
      }, $compid__65, $prevCompid__65);
      Object.assign(this.__state, {
        data: data,
        modalData: modalData,
        loopArray70: loopArray70,
        $compid__64: $compid__64,
        $compid__65: $compid__65,
        time: time,
        start: start,
        end: end,
        IMGCDNURL: _index3.IMGCDNURL,
        initInfo: initInfo,
        sourceList: sourceList,
        consumeList: consumeList,
        startType: startType,
        modal: modal,
        complaintModal: complaintModal,
        showTime: showTime,
        title: title,
        num: num
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(e) {
      ;
    }
  }]);

  return Tabber;
}(_taroSwan2.default.Component);

Tabber.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5"];
Tabber.$$componentPath = "pages/integral/tabber/index";
Tabber.config = { navigationBarTitleText: '' };
exports.default = Tabber;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Tabber, true));

/***/ })

},[["./src/pages/integral/tabber/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
