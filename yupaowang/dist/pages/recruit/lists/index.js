<<<<<<< HEAD
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/recruit/lists/index"],{

/***/ "./src/pages/recruit/lists/index.scss":
/*!********************************************!*\
  !*** ./src/pages/recruit/lists/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/recruit/lists/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/recruit/lists/index.tsx ***!
  \*******************************************/
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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _index2 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index3 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _lists = __webpack_require__(/*! ../../../config/pages/lists */ "./src/config/pages/lists.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/recruit/lists/index.scss");

var _index4 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Recruit = function (_Taro$Component) {
  _inherits(Recruit, _Taro$Component);

  function Recruit() {
    _classCallCheck(this, Recruit);

    var _this = _possibleConstructorReturn(this, (Recruit.__proto__ || Object.getPrototypeOf(Recruit)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "$compid__20", "$compid__21", "$compid__22", "scrollTop", "refresh"];
    _this.customComponents = ["Search", "RecruitCondition", "WechatNotice", "RecruitList"];
    return _this;
  }

  _createClass(Recruit, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Recruit.prototype.__proto__ || Object.getPrototypeOf(Recruit.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__20"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__20 = _genCompid2[0],
          $compid__20 = _genCompid2[1];

      var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "$compid__21"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__21 = _genCompid4[0],
          $compid__21 = _genCompid4[1];

      var _genCompid5 = (0, _taroTt.genCompid)(__prefix + "$compid__22"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__22 = _genCompid6[0],
          $compid__22 = _genCompid6[1];
      // 输入关键词 没搜索 备份


      var _useState = (0, _taroTt.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          remark = _useState2[0],
          setRemark = _useState2[1];
      // 是否还有下一页


      var _useState3 = (0, _taroTt.useState)(true),
          _useState4 = _slicedToArray(_useState3, 2),
          hasMore = _useState4[0],
          setHasMore = _useState4[1];
      // * 获取选择城市缓存


      var userListChooseCity = _taroTt2.default.getStorageSync(_store.UserListChooseCity);
      // * 配置筛选条件

      var _useState5 = (0, _taroTt.useState)([{ id: _lists.AreaPickerKey, text: userListChooseCity ? userListChooseCity.name : '全国' }, { id: _lists.ClassifyPickerKey, text: '全部分类' }, { id: _lists.FilterPickerKey, text: '最新' }]),
          _useState6 = _slicedToArray(_useState5, 2),
          condition = _useState6[0],
          setCondition = _useState6[1];
      // * scrollTop 位置 回到顶部


      var _useState7 = (0, _taroTt.useState)(0),
          _useState8 = _slicedToArray(_useState7, 2),
          scrollTop = _useState8[0],
          setScrollTop = _useState8[1];
      // * 标记是否是在刷新状态


      var _useState9 = (0, _taroTt.useState)(false),
          _useState10 = _slicedToArray(_useState9, 2),
          refresh = _useState10[0],
          setRefresh = _useState10[1];
      // * 定义列表数组


      var _useState11 = (0, _taroTt.useState)([]),
          _useState12 = _slicedToArray(_useState11, 2),
          lists = _useState12[0],
          setLists = _useState12[1];
      // * 定义data


      var _useState13 = (0, _taroTt.useState)({
        page: 1,
        list_type: 'job',
        area_id: userListChooseCity ? userListChooseCity.id : '',
        classify_id: '',
        keywords: '',
        joblisttype: 'newest',
        token: ''
      }),
          _useState14 = _slicedToArray(_useState13, 2),
          searchData = _useState14[0],
          setSearchData = _useState14[1];
      // 更改某一项操作条件


      var editConditionAction = function editConditionAction(type, text) {
        var data = JSON.parse(JSON.stringify(condition));
        var i = data.findIndex(function (item) {
          return item.id === type;
        });
        var item = _extends({}, data[i], { text: text });
        data[i] = item;
        setCondition(data);
      };
      // 用户定位之后重新设置搜索条件
      var resetLocationSearch = function resetLocationSearch(data) {
        var city = (0, _area.getCityInfo)(data);
        _taroTt2.default.setStorageSync(_store.UserListChooseCity, city); //第一次默认选中
        setLists([]);
        editConditionAction('area', city.name);
        setSearchData(_extends({}, searchData, { page: 1, area_id: city.id }));
      };
      // 用户获取定位
      var getUserLocation = function getUserLocation() {
        // 使用用户选择的城市
        if (userListChooseCity) {
          setSearchData(_extends({}, searchData, { page: 1, area_id: userListChooseCity.id }));
        } else {
          var userLocationCity = _taroTt2.default.getStorageSync(_store.UserLocationCity);
          if (userLocationCity) {
            resetLocationSearch(userLocationCity);
            return;
          }
          (0, _index2.userAuthLoction)().then(function (gpsLocation) {
            resetLocationSearch(gpsLocation);
          }).catch(function () {
            // 拒绝授权默认全国
            _taroTt2.default.setStorageSync(_store.UserListChooseCity, _area.AREACHINA);
            setLists([]);
            setSearchData(_extends({}, searchData, { page: 1, area_id: _area.AREACHINA.id }));
          });
        }
      };
      // 请求列表方法
      var getRecruitListAction = function getRecruitListAction() {
        (0, _index.getRecruitList)(searchData).then(function (res) {
          if (res.errcode == 'ok') {
            if (res.data) {
              if (!res.data.length) {
                setHasMore(false);
              }
              _taroTt2.default.hideNavigationBarLoading();
              if (searchData.page === 1) {
                setLists([[].concat(_toConsumableArray(res.data))]);
              } else setLists([].concat(_toConsumableArray(lists), [[].concat(_toConsumableArray(res.data))]));
            } else {
              if (searchData.page === 1) {
                setLists([[]]);
              }
              setHasMore(false);
            }
            if (refresh) {
              setRefresh(false);
            }
          } else {
            (0, _index5.default)(res.errmsg);
          }
        });
      };
      // * 请求列表数据
      (0, _taroTt.useEffect)(function () {
        getRecruitListAction();
        if (!searchData.area_id) {
          getUserLocation();
        }
      }, [searchData]);
      // * 触底加载下一页
      var getNextPageData = function getNextPageData() {
        if (!hasMore) {
          return;
        }
        _taroTt2.default.showNavigationBarLoading();
        setSearchData(_extends({}, searchData, { page: searchData.page + 1 }));
      };
      // * 监听下拉刷新
      var pullDownAction = function pullDownAction() {
        setRefresh(true);
        setSearchData(_extends({}, searchData, { page: 1 }));
      };
      // * 发布招工
      var userPublishRecruit = function userPublishRecruit() {
        _taroTt2.default.navigateTo({ url: _index3.PUBLISHRECRUIT });
      };
      // * 更新筛选条件
      var setSearchDataAction = function setSearchDataAction(type, id, text) {
        var recondition = JSON.parse(JSON.stringify(condition));
        var i = recondition.findIndex(function (item) {
          return item.id === type;
        });
        recondition[i].text = text;
        setCondition(recondition);
        if (type === _lists.ClassifyPickerKey) {
          setSearchData(_extends({}, searchData, { classify_id: id, page: 1 }));
        } else if (type === _lists.AreaPickerKey) {
          setSearchData(_extends({}, searchData, { area_id: id, page: 1 }));
        } else {
          setSearchData(_extends({}, searchData, { joblisttype: id, page: 1 }));
        }
        goToScrollTop();
      };
      // scroll-view 回到顶部
      var goToScrollTop = function goToScrollTop() {
        setHasMore(true);
        setScrollTop(scrollTop ? 0 : 0.1);
      };
      // 输入搜索关键词
      var setSearchValData = function setSearchValData() {
        setSearchData(_extends({}, searchData, { keywords: remark, page: 1 }));
        goToScrollTop();
      };
      var anonymousState__temp = function anonymousState__temp(val) {
        return setRemark(val);
      };
      var anonymousState__temp2 = function anonymousState__temp2() {
        return setSearchValData();
      };
      var anonymousState__temp3 = function anonymousState__temp3(type, id, text) {
        return setSearchDataAction(type, id, text);
      };
      this.anonymousFunc0 = function () {
        return pullDownAction();
      };
      this.anonymousFunc1 = function () {
        return getNextPageData();
      };
      var anonymousState__temp4 = (0, _taroTt.internal_inline_style)({ height: '8px' });
      this.anonymousFunc2 = function () {
        return userPublishRecruit();
      };
      _taroTt.propsManager.set({
        "placeholder": "\u627E\u6D3B\u3001\u627E\u5DE5\u4F5C",
        "value": "",
        "setRemark": anonymousState__temp,
        "setSearchData": anonymousState__temp2
      }, $compid__20, $prevCompid__20);
      _taroTt.propsManager.set({
        "data": condition,
        "setSearchData": anonymousState__temp3
      }, $compid__21, $prevCompid__21);
      _taroTt.propsManager.set({
        "data": lists,
        "hasMore": hasMore
      }, $compid__22, $prevCompid__22);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        $compid__20: $compid__20,
        $compid__21: $compid__21,
        $compid__22: $compid__22,
        scrollTop: scrollTop,
        refresh: refresh
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
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
  }]);

  return Recruit;
}(_taroTt2.default.Component);

Recruit.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"];
Recruit.$$componentPath = "pages/recruit/lists/index";
exports.default = Recruit;

Component(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Recruit));

/***/ })

},[["./src/pages/recruit/lists/index.tsx","runtime","vendors"]]]);
=======
(tt.webpackJsonp=tt.webpackJsonp||[]).push([[67],{"247":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},W=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var z=n(0),G=_interopRequireDefault(z),Q=n(2),Y=n(9),Z=n(6),tt=n(7),et=n(1),nt=n(18);n(248);var rt=_interopRequireDefault(n(4));function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var o=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Recruit,G.default.Component),r(Recruit,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:get(o,e,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0})(Recruit.prototype.__proto__||Object.getPrototypeOf(Recruit.prototype),"_constructor",this).call(this,t),this.$$refs=new G.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){function Xa(t){var e=(0,Y.getCityInfo)(t);G.default.setStorageSync(Z.UserListChooseCity,e),J([]),function editConditionAction(e,t){var n=JSON.parse(JSON.stringify(P)),r=n.findIndex(function(t){return t.id===e}),o=V({},n[r],{"text":t});n[r]=o,k(n)}("area",e.name),B(V({},q,{"page":1,"area_id":e.id}))}this.__state=t||this.state||{},this.__props=e||this.props||{};var r=this.$prefix,o=(0,z.genCompid)(r+"$compid__20"),a=W(o,2),i=a[0],u=a[1],c=(0,z.genCompid)(r+"$compid__21"),s=W(c,2),f=s[0],p=s[1],l=(0,z.genCompid)(r+"$compid__22"),y=W(l,2),_=y[0],d=y[1],g=(0,z.useState)(""),m=W(g,2),h=m[0],b=m[1],v=(0,z.useState)(!0),S=W(v,2),C=S[0],R=S[1],A=G.default.getStorageSync(Z.UserListChooseCity),O=(0,z.useState)([{"id":nt.AreaPickerKey,"text":A?A.name:"全国"},{"id":nt.ClassifyPickerKey,"text":"全部分类"},{"id":nt.FilterPickerKey,"text":"最新"}]),w=W(O,2),P=w[0],k=w[1],j=(0,z.useState)(0),$=W(j,2),F=$[0],x=$[1],D=(0,z.useState)(!1),L=W(D,2),N=L[0],I=L[1],T=(0,z.useState)([]),E=W(T,2),U=E[0],J=E[1],M=(0,z.useState)({"page":1,"list_type":"job","area_id":A?A.id:"","classify_id":"","keywords":"","joblisttype":"newest","token":""}),K=W(M,2),q=K[0],B=K[1];function eb(t){return b(t)}function fb(){return function setSearchValData(){B(V({},q,{"keywords":h,"page":1})),H()}()}function gb(t,e,n){return function setSearchDataAction(e,t,n){var r=JSON.parse(JSON.stringify(P)),o=r.findIndex(function(t){return t.id===e});r[o].text=n,k(r),e===nt.ClassifyPickerKey?B(V({},q,{"classify_id":t,"page":1})):e===nt.AreaPickerKey?B(V({},q,{"area_id":t,"page":1})):B(V({},q,{"joblisttype":t,"page":1})),H()}(t,e,n)}(0,z.useEffect)(function(){!function getRecruitListAction(){(0,Q.getRecruitList)(q).then(function(t){"ok"==t.errcode?(t.data?(t.data.length||R(!1),G.default.hideNavigationBarLoading(),1===q.page?J([[].concat(_toConsumableArray(t.data))]):J([].concat(_toConsumableArray(U),[[].concat(_toConsumableArray(t.data))]))):(1===q.page&&J([[]]),R(!1)),N&&I(!1)):(0,rt.default)(t.errmsg)})}(),q.area_id||function getUserLocation(){if(A)B(V({},q,{"page":1,"area_id":A.id}));else{var t=G.default.getStorageSync(Z.UserLocationCity);if(t)return Xa(t);(0,tt.userAuthLoction)().then(function(t){Xa(t)}).catch(function(){G.default.setStorageSync(Z.UserListChooseCity,Y.AREACHINA),J([]),B(V({},q,{"page":1,"area_id":Y.AREACHINA.id}))})}}()},[q]);var H=function goToScrollTop(){R(!0),x(F?0:.1)};this.anonymousFunc0=function(){return function pullDownAction(){I(!0),B(V({},q,{"page":1}))}()},this.anonymousFunc1=function(){return function getNextPageData(){C&&(G.default.showNavigationBarLoading(),B(V({},q,{"page":q.page+1})))}()};var X=(0,z.internal_inline_style)({"height":"8px"});return this.anonymousFunc2=function(){return function userPublishRecruit(){G.default.navigateTo({"url":et.PUBLISHRECRUIT})}()},z.propsManager.set({"placeholder":"找活、找工作","value":"","setRemark":eb,"setSearchData":fb},u,i),z.propsManager.set({"data":P,"setSearchData":gb},p,f),z.propsManager.set({"data":U,"hasMore":C},d,_),Object.assign(this.__state,{"anonymousState__temp":eb,"anonymousState__temp2":fb,"anonymousState__temp3":gb,"anonymousState__temp4":X,"$compid__20":u,"$compid__21":p,"$compid__22":d,"scrollTop":F,"refresh":N}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}}]),Recruit);function Recruit(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Recruit);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Recruit.__proto__||Object.getPrototypeOf(Recruit)).apply(this,arguments));return t.$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","anonymousState__temp4","$compid__20","$compid__21","$compid__22","scrollTop","refresh"],t.customComponents=["Search","RecruitCondition","WechatNotice","RecruitList"],t}o.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2"],o.$$componentPath="pages/recruit/lists/index",e.default=o,Component(n(0).default.createComponent(o))},"248":function(t,e,n){}},[[247,0,1]]]);
>>>>>>> 0e5be846c916f829861e9a8cfd5d82206f24c32e
