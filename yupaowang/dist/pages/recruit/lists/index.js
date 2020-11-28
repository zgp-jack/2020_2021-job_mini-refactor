<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[67],{"253":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},X=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var n=[],o=!0,r=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(o=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(t){r=!0,a=t}finally{try{!o&&u.return&&u.return()}finally{if(r)throw a}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t};function defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var z=n(0),G=_interopRequireDefault(z),Q=n(2),Y=n(9),Z=n(6),tt=n(7),et=n(1),nt=n(18);n(254);var ot=_interopRequireDefault(n(4));function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var r=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(Recruit,G.default.Component),o(Recruit,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0})(Recruit.prototype.__proto__||Object.getPrototypeOf(Recruit.prototype),"_constructor",this).call(this,t),this.$$refs=new G.default.RefsArray}},{"key":"_createData","value":function _createData(t,e,n){function Xa(t){var e=(0,Y.getCityInfo)(t);G.default.setStorageSync(Z.UserListChooseCity,e),J([]),function editConditionAction(e,t){var n=JSON.parse(JSON.stringify(P)),o=n.findIndex(function(t){return t.id===e}),r=W({},n[o],{"text":t});n[o]=r,k(n)}("area",e.name),B(W({},q,{"page":1,"area_id":e.id}))}this.__state=t||this.state||{},this.__props=e||this.props||{};var o=this.$prefix,r=(0,z.genCompid)(o+"$compid__20"),a=X(r,2),i=a[0],u=a[1],c=(0,z.genCompid)(o+"$compid__21"),s=X(c,2),f=s[0],p=s[1],l=(0,z.genCompid)(o+"$compid__22"),y=X(l,2),_=y[0],d=y[1],m=(0,z.useState)(""),h=X(m,2),g=h[0],b=h[1],v=(0,z.useState)(!0),S=X(v,2),C=S[0],O=S[1],R=G.default.getStorageSync(Z.UserListChooseCity),A=(0,z.useState)([{"id":nt.AreaPickerKey,"text":R?R.name:"全国"},{"id":nt.ClassifyPickerKey,"text":"全部分类"},{"id":nt.FilterPickerKey,"text":"最新"}]),w=X(A,2),P=w[0],k=w[1],F=(0,z.useState)(0),j=X(F,2),$=j[0],L=j[1],T=(0,z.useState)(!1),x=X(T,2),D=x[0],E=x[1],I=(0,z.useState)([]),N=X(I,2),U=N[0],J=N[1],M=(0,z.useState)({"page":1,"list_type":"job","area_id":R?R.id:"","classify_id":"","keywords":"","joblisttype":"newest","token":""}),K=X(M,2),q=K[0],B=K[1];function fb(t){return b(t)}function gb(){return function setSearchValData(){B(W({},q,{"keywords":g,"page":1}))}()}function hb(t,e,n){return function setSearchDataAction(e,t,n){var o=JSON.parse(JSON.stringify(P)),r=o.findIndex(function(t){return t.id===e});o[r].text=n,k(o),e===nt.ClassifyPickerKey?B(W({},q,{"classify_id":t,"page":1})):e===nt.AreaPickerKey?B(W({},q,{"area_id":t,"page":1})):B(W({},q,{"joblisttype":t,"page":1}))}(t,e,n)}(0,z.useEffect)(function(){!function getRecruitListAction(){(0,Q.getRecruitList)(q).then(function(t){"ok"==t.errcode?(t.data?(G.default.hideNavigationBarLoading(),t.data.length||O(!1),1===q.page?(H(),J([[].concat(_toConsumableArray(t.data))])):J([].concat(_toConsumableArray(U),[[].concat(_toConsumableArray(t.data))]))):(1===q.page&&J([[]]),O(!1)),D&&E(!1)):(0,ot.default)(t.errmsg)})}(),q.area_id||function getUserLocation(){if(R)B(W({},q,{"page":1,"area_id":R.id}));else{var t=G.default.getStorageSync(Z.UserLocationCity);if(t)return Xa(t);(0,tt.userAuthLoction)().then(function(t){Xa(t)}).catch(function(){G.default.setStorageSync(Z.UserListChooseCity,Y.AREACHINA),J([]),B(W({},q,{"page":1,"area_id":Y.AREACHINA.id}))})}}()},[q]);var H=function goToScrollTop(){O(!0),et.SCROLLVIEWSETTOP?L(0):L($?0:.01)};this.anonymousFunc0=function(t){return function setScrollTopAction(t){if(et.SCROLLVIEWSETTOP){var e=t.detail.scrollTop;L(e)}}(t)},this.anonymousFunc1=function(){return function pullDownAction(){E(!0),B(W({},q,{"page":1}))}()},this.anonymousFunc2=function(){return function getNextPageData(){C&&(G.default.showNavigationBarLoading(),B(W({},q,{"page":q.page+1})))}()};var V=(0,z.internal_inline_style)({"height":"8px"});return this.anonymousFunc3=function(){return function userPublishRecruit(){G.default.navigateTo({"url":et.PUBLISHRECRUIT})}()},z.propsManager.set({"placeholder":"找活、找工作","value":"","setRemark":fb,"setSearchData":gb},u,i),z.propsManager.set({"data":P,"setSearchData":hb},p,f),z.propsManager.set({"data":U,"hasMore":C},d,_),Object.assign(this.__state,{"anonymousState__temp":fb,"anonymousState__temp2":gb,"anonymousState__temp3":hb,"anonymousState__temp4":V,"$compid__20":u,"$compid__21":p,"$compid__22":d,"scrollTop":$,"refresh":D}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}}]),Recruit);function Recruit(){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,Recruit);var t=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(Recruit.__proto__||Object.getPrototypeOf(Recruit)).apply(this,arguments));return t.$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","anonymousState__temp4","$compid__20","$compid__21","$compid__22","scrollTop","refresh"],t.customComponents=["Search","RecruitCondition","WechatNotice","RecruitList"],t}r.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3"],r.$$componentPath="pages/recruit/lists/index",e.default=r,Component(n(0).default.createComponent(r))},"254":function(t,e,n){}},[[253,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/recruit/lists/index"],{

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

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

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

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "$compid__83", "$compid__84", "$compid__85", "refresh"];
    _this.customComponents = ["Search", "RecruitCondition", "WechatNotice", "RecruitList"];
    return _this;
  }

  _createClass(Recruit, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Recruit.prototype.__proto__ || Object.getPrototypeOf(Recruit.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__83"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__83 = _genCompid2[0],
          $compid__83 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__84"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__84 = _genCompid4[0],
          $compid__84 = _genCompid4[1];

      var _genCompid5 = (0, _taroSwan.genCompid)(__prefix + "$compid__85"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__85 = _genCompid6[0],
          $compid__85 = _genCompid6[1];
      // 输入关键词 没搜索 备份


      var _useState = (0, _taroSwan.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          remark = _useState2[0],
          setRemark = _useState2[1];
      // 是否还有下一页


      var _useState3 = (0, _taroSwan.useState)(true),
          _useState4 = _slicedToArray(_useState3, 2),
          hasMore = _useState4[0],
          setHasMore = _useState4[1];
      // * 获取选择城市缓存


      var userListChooseCity = _taroSwan2.default.getStorageSync(_store.UserListChooseCity);
      // * 配置筛选条件

      var _useState5 = (0, _taroSwan.useState)([{ id: _lists.AreaPickerKey, text: userListChooseCity ? userListChooseCity.name : '全国' }, { id: _lists.ClassifyPickerKey, text: '全部分类' }, { id: _lists.FilterPickerKey, text: '最新' }]),
          _useState6 = _slicedToArray(_useState5, 2),
          condition = _useState6[0],
          setCondition = _useState6[1];
      // * scrollTop 位置 回到顶部


      var _useState7 = (0, _taroSwan.useState)(0),
          _useState8 = _slicedToArray(_useState7, 2),
          scrollTop = _useState8[0],
          setScrollTop = _useState8[1];
      // * 标记是否是在刷新状态


      var _useState9 = (0, _taroSwan.useState)(false),
          _useState10 = _slicedToArray(_useState9, 2),
          refresh = _useState10[0],
          setRefresh = _useState10[1];
      // * 定义列表数组


      var _useState11 = (0, _taroSwan.useState)([]),
          _useState12 = _slicedToArray(_useState11, 2),
          lists = _useState12[0],
          setLists = _useState12[1];
      // * 定义data


      var _useState13 = (0, _taroSwan.useState)({
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
        _taroSwan2.default.setStorageSync(_store.UserListChooseCity, city); //第一次默认选中
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
          var userLocationCity = _taroSwan2.default.getStorageSync(_store.UserLocationCity);
          if (userLocationCity) {
            resetLocationSearch(userLocationCity);
            return;
          }
          (0, _index2.userAuthLoction)().then(function (gpsLocation) {
            resetLocationSearch(gpsLocation);
          }).catch(function () {
            // 拒绝授权默认全国
            _taroSwan2.default.setStorageSync(_store.UserListChooseCity, _area.AREACHINA);
            setLists([]);
            setSearchData(_extends({}, searchData, { page: 1, area_id: _area.AREACHINA.id }));
          });
        }
      };
      // 请求列表方法
      var getRecruitListAction = function getRecruitListAction() {
        // 判断搜索的时候把内容清空回到顶部，再设置值
        if (searchData.page === 1) {
          setLists([]);
        }
        (0, _index.getRecruitList)(searchData).then(function (res) {
          if (res.errcode == 'ok') {
            if (res.data) {
              _taroSwan2.default.hideNavigationBarLoading();
              if (!res.data.length) {
                setHasMore(false);
              }
              if (searchData.page === 1) {
                console.error(231321);
                setLists([[].concat(_toConsumableArray(res.data))]);
              } else {
                setLists([].concat(_toConsumableArray(lists), [[].concat(_toConsumableArray(res.data))]));
              }
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
      (0, _taroSwan.useEffect)(function () {
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
        _taroSwan2.default.showNavigationBarLoading();
        setSearchData(_extends({}, searchData, { page: searchData.page + 1 }));
      };
      // * 监听下拉刷新
      var pullDownAction = function pullDownAction() {
        setRefresh(true);
        setSearchData(_extends({}, searchData, { page: 1 }));
      };
      // * 发布招工
      var userPublishRecruit = function userPublishRecruit() {
        _taroSwan2.default.navigateTo({ url: _index3.PUBLISHRECRUIT });
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
      };
      // scroll-view 回到顶部
      var goToScrollTop = function goToScrollTop() {
        setHasMore(true);
        // ! 如果小程序必须监听滚动值 返回顶部直接为0 ，如果不需要我们就给个近似值 来达到效果
        if (_index3.SCROLLVIEWSETTOP) {
          setScrollTop(0);
          return;
        }
        setScrollTop(scrollTop ? 0 : 0.01);
      };
      // 输入搜索关键词
      var setSearchValData = function setSearchValData() {
        setSearchData(_extends({}, searchData, { keywords: remark, page: 1 }));
      };
      // scroll-view 滚动操作
      var setScrollTopAction = function setScrollTopAction(e) {
        // ! 如果小程序必须监听onScroll滚动值 那么就设置 例如百度小程序
        if (_index3.SCROLLVIEWSETTOP) {
          var top = e.detail.scrollTop;
          setScrollTop(top);
        }
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
      var anonymousState__temp4 = (0, _taroSwan.internal_inline_style)({ height: '8px' });
      this.anonymousFunc2 = function () {
        return userPublishRecruit();
      };
      _taroSwan.propsManager.set({
        "placeholder": "\u627E\u6D3B\u3001\u627E\u5DE5\u4F5C",
        "value": "",
        "setRemark": anonymousState__temp,
        "setSearchData": anonymousState__temp2
      }, $compid__83, $prevCompid__83);
      _taroSwan.propsManager.set({
        "data": condition,
        "setSearchData": anonymousState__temp3
      }, $compid__84, $prevCompid__84);
      _taroSwan.propsManager.set({
        "data": lists,
        "hasMore": hasMore
      }, $compid__85, $prevCompid__85);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        $compid__83: $compid__83,
        $compid__84: $compid__84,
        $compid__85: $compid__85,
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
}(_taroSwan2.default.Component);

Recruit.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"];
Recruit.$$componentPath = "pages/recruit/lists/index";
exports.default = Recruit;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Recruit));

/***/ })

},[["./src/pages/recruit/lists/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
