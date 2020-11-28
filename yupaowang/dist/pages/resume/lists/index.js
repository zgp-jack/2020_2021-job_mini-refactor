<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[74],{"262":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ee=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,a=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(o=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){a=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var te=n(0),ne=_interopRequireDefault(te),oe=n(18),ae=n(6),re=n(2),ie=n(1);n(263);var se=_interopRequireDefault(n(4));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ResumeLists,ne.default.Component),o(ResumeLists,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(n):void 0})(ResumeLists.prototype.__proto__||Object.getPrototypeOf(ResumeLists.prototype),"_constructor",this).call(this,e),this.$$refs=new ne.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,a=(0,te.genCompid)(o+"$compid__27"),r=ee(a,2),i=r[0],s=r[1],u=(0,te.genCompid)(o+"$compid__28"),c=ee(u,2),l=c[0],p=c[1],f=(0,te.genCompid)(o+"$compid__29"),_=ee(f,2),m=_[0],y=_[1],d=ne.default.getStorageSync(ae.UserListChooseCity),h=[{"id":oe.AreaPickerKey,"text":d?d.name:"全国"},{"id":oe.ClassifyPickerKey,"text":"工种"},{"id":oe.MemberPickerKey,"text":"队伍"},{"id":oe.ResumeFilterPickerKey,"text":"推荐"}],g=(0,te.useState)(!0),v=ee(g,2),b=v[0],S=v[1],k=(0,te.useState)(0),O=ee(k,2),P=O[0],R=O[1],C=(0,te.useState)(h),w=ee(C,2),T=w[0],F=w[1],x=(0,te.useState)(""),L=ee(x,2),$=L[0],A=L[1],j=(0,te.useState)(!1),D=ee(j,2),E=D[0],B=D[1],M=(0,te.useState)([]),K=ee(M,2),I=K[0],J=K[1],N=(0,te.useState)({"page":1,"occupations":"","keywords":"","sort":"recommend","location":"","area_id":d?d.id:"","type":""}),q=ee(N,2),U=q[0],V=q[1],W={"has_sort_flag":"1","has_time":"1","has_top":"1","last_sort_flag_pos":"0","last_normal_pos":"0","last_time_pos":"0"},H=(0,te.useState)(W),z=ee(H,2),G=z[0],Q=z[1];function mb(e){return A(e)}function nb(){return function setSearchValData(){Q(W),V(Z({},U,{"keywords":$,"page":1})),X()}()}function ob(e,t,n){return function setSearchDataAction(t,e,n){var o=JSON.parse(JSON.stringify(T)),a=o.findIndex(function(e){return e.id===t});o[a].text=n,F(o),Q(W),t===oe.ClassifyPickerKey?V(Z({},U,{"occupations":e,"page":1})):t===oe.AreaPickerKey?V(Z({},U,{"area_id":e,"page":1})):t===oe.ResumeFilterPickerKey?V(Z({},U,{"sort":e,"page":1})):t===oe.MemberPickerKey&&V(Z({},U,{"type":e,"page":1})),X()}(e,t,n)}(0,te.useEffect)(function(){(0,re.getResumeList)(Z({},U,G)).then(function(e){if("ok"==e.errcode){var t=e.data;if(t.list&&t.list.length){var n=t.has_sort_flag,o=void 0===n?"1":n,a=t.has_time,r=void 0===a?"1":a,i=t.has_top,s=void 0===i?"1":i,u=t.last_sort_flag_pos,c=void 0===u?"0":u,l=t.last_normal_pos,p=void 0===l?"0":l,f=t.last_time_pos;Q({"has_sort_flag":o,"has_time":r,"has_top":s,"last_sort_flag_pos":c,"last_normal_pos":p,"last_time_pos":void 0===f?"0":f})}t.list&&!t.list.length&&S(!1),ne.default.hideNavigationBarLoading(),1===U.page?J([[].concat(_toConsumableArray(t.list))]):J([].concat(_toConsumableArray(I),[[].concat(_toConsumableArray(t.list))])),E&&B(!1)}else(0,se.default)(e.errmsg)})},[U]);var X=function goToScrollTop(){S(!0),ie.SCROLLVIEWSETTOP?R(0):R(P?0:.1)};this.anonymousFunc0=function(){return function pullDownAction(){B(!0),S(!0),V(Z({},U,{"page":1}))}()},this.anonymousFunc1=function(){return function getNextPageData(){b&&V(Z({},U,{"page":U.page+1}))}()},this.anonymousFunc2=function(e){return function setScrollTopAction(e){if(ie.SCROLLVIEWSETTOP){var t=e.detail.scrollTop;R(t)}}(e)};var Y=(0,te.internal_inline_style)({"height":"8px"});return this.anonymousFunc3=function(){return function userRouteJump(e){ne.default.navigateTo({"url":e})}(ie.PUBLISHRESUME)},te.propsManager.set({"placeholder":"找工人、找队伍、找班组","value":"","setRemark":mb,"setSearchData":nb},s,i),te.propsManager.set({"data":T,"setSearchData":ob},p,l),te.propsManager.set({"data":I,"hasMore":b},y,m),Object.assign(this.__state,{"anonymousState__temp":mb,"anonymousState__temp2":nb,"anonymousState__temp3":ob,"anonymousState__temp4":Y,"$compid__27":s,"$compid__28":p,"$compid__29":y,"scrollTop":P,"refresh":E}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}}]),ResumeLists);function ResumeLists(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ResumeLists);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ResumeLists.__proto__||Object.getPrototypeOf(ResumeLists)).apply(this,arguments));return e.config={"navigationBarTitleText":"工人找活列表","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","anonymousState__temp4","$compid__27","$compid__28","$compid__29","scrollTop","refresh"],e.customComponents=["Search","ResumeCondition","WechatNotice","ResumeList"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3"],a.$$componentPath="pages/resume/lists/index",a.config={"navigationBarTitleText":"工人找活列表","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=a,Component(n(0).default.createComponent(a))},"263":function(e,t,n){}},[[262,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/resume/lists/index"],{

/***/ "./src/pages/resume/lists/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/resume/lists/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/lists/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/resume/lists/index.tsx ***!
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

var _lists = __webpack_require__(/*! ../../../config/pages/lists */ "./src/config/pages/lists.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/lists/index.scss");

var _index3 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResumeLists = function (_Taro$Component) {
  _inherits(ResumeLists, _Taro$Component);

  function ResumeLists() {
    _classCallCheck(this, ResumeLists);

    var _this = _possibleConstructorReturn(this, (ResumeLists.__proto__ || Object.getPrototypeOf(ResumeLists)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '工人找活列表',
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: "dark"
    };

    _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "$compid__98", "$compid__99", "$compid__100", "refresh"];
    _this.customComponents = ["Search", "ResumeCondition", "WechatNotice", "ResumeList"];
    return _this;
  }

  _createClass(ResumeLists, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(ResumeLists.prototype.__proto__ || Object.getPrototypeOf(ResumeLists.prototype), '_constructor', this).call(this, props);
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__98"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__98 = _genCompid2[0],
          $compid__98 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__99"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__99 = _genCompid4[0],
          $compid__99 = _genCompid4[1];

      var _genCompid5 = (0, _taroSwan.genCompid)(__prefix + "$compid__100"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__100 = _genCompid6[0],
          $compid__100 = _genCompid6[1];
      // 设置字段默认值


      var hasSortFlag = '1';
      var hasTime = '1';
      var hasTop = '1';
      var lastNormalPos = '0';
      var lastSortFlagPos = '0';
      var lastTimePos = '0';
      // * 获取选择城市缓存
      var userListChooseCity = _taroSwan2.default.getStorageSync(_store.UserListChooseCity);
      // * 筛选数据
      var DEFAULT_CONDITION = [{ id: _lists.AreaPickerKey, text: userListChooseCity ? userListChooseCity.name : '全国' }, { id: _lists.ClassifyPickerKey, text: '工种' }, { id: _lists.MemberPickerKey, text: '队伍' }, { id: _lists.ResumeFilterPickerKey, text: '推荐' }];
      // 是否还有下一页

      var _useState = (0, _taroSwan.useState)(true),
          _useState2 = _slicedToArray(_useState, 2),
          hasMore = _useState2[0],
          setHasMore = _useState2[1];
      // 滚动条高度


      var _useState3 = (0, _taroSwan.useState)(0),
          _useState4 = _slicedToArray(_useState3, 2),
          scrollTop = _useState4[0],
          setScrollTop = _useState4[1];
      // 设置顶部筛选条件数据


      var _useState5 = (0, _taroSwan.useState)(DEFAULT_CONDITION),
          _useState6 = _slicedToArray(_useState5, 2),
          condition = _useState6[0],
          setCondition = _useState6[1];
      // * 搜索数据 备份


      var _useState7 = (0, _taroSwan.useState)(''),
          _useState8 = _slicedToArray(_useState7, 2),
          remark = _useState8[0],
          setRemark = _useState8[1];
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
        occupations: '',
        keywords: '',
        sort: 'recommend',
        location: '',
        area_id: userListChooseCity ? userListChooseCity.id : '',
        type: ''
      }),
          _useState14 = _slicedToArray(_useState13, 2),
          searchData = _useState14[0],
          setSearchData = _useState14[1];
      // 特殊字段默认值


      var normalFieldReset = {
        has_sort_flag: hasSortFlag,
        has_time: hasTime,
        has_top: hasTop,
        last_sort_flag_pos: lastSortFlagPos,
        last_normal_pos: lastNormalPos,
        last_time_pos: lastTimePos
      };
      // 单独处理特殊字段

      var _useState15 = (0, _taroSwan.useState)(normalFieldReset),
          _useState16 = _slicedToArray(_useState15, 2),
          normalField = _useState16[0],
          setNormalField = _useState16[1];
      // * 请求列表数据


      (0, _taroSwan.useEffect)(function () {
        console.error(1);
        if (searchData.page === 1) {
          setLists([]);
        }
        (0, _index.getResumeList)(_extends({}, searchData, normalField)).then(function (res) {
          // 判断搜索的时候把内容清空回到顶部，再设置值
          if (res.errcode == 'ok') {
            var mydata = res.data;
            if (mydata.list && mydata.list.length) {
              var _mydata$has_sort_flag = mydata.has_sort_flag,
                  has_sort_flag = _mydata$has_sort_flag === undefined ? hasSortFlag : _mydata$has_sort_flag,
                  _mydata$has_time = mydata.has_time,
                  has_time = _mydata$has_time === undefined ? hasTime : _mydata$has_time,
                  _mydata$has_top = mydata.has_top,
                  has_top = _mydata$has_top === undefined ? hasTop : _mydata$has_top,
                  _mydata$last_sort_fla = mydata.last_sort_flag_pos,
                  last_sort_flag_pos = _mydata$last_sort_fla === undefined ? lastSortFlagPos : _mydata$last_sort_fla,
                  _mydata$last_normal_p = mydata.last_normal_pos,
                  last_normal_pos = _mydata$last_normal_p === undefined ? lastNormalPos : _mydata$last_normal_p,
                  _mydata$last_time_pos = mydata.last_time_pos,
                  last_time_pos = _mydata$last_time_pos === undefined ? lastTimePos : _mydata$last_time_pos;

              setNormalField({ has_sort_flag: has_sort_flag, has_time: has_time, has_top: has_top, last_sort_flag_pos: last_sort_flag_pos, last_normal_pos: last_normal_pos, last_time_pos: last_time_pos });
            }
            if (mydata.list && !mydata.list.length) {
              setHasMore(false);
            }
            _taroSwan2.default.hideNavigationBarLoading();
            if (searchData.page === 1) {
              setLists([[].concat(_toConsumableArray(mydata.list))]);
            } else setLists([].concat(_toConsumableArray(lists), [[].concat(_toConsumableArray(mydata.list))]));
            if (refresh) {
              setRefresh(false);
            }
          } else {
            (0, _index4.default)(res.errmsg);
          }
        });
      }, [searchData]);
      // * 监听下拉刷新
      // * 监听下拉刷新
      var pullDownAction = function pullDownAction() {
        setRefresh(true);
        setHasMore(true);
        setSearchData(_extends({}, searchData, { page: 1 }));
      };
      // * 触底加载下一页
      var getNextPageData = function getNextPageData() {
        if (!hasMore) {
          return;
        }
        setSearchData(_extends({}, searchData, { page: searchData.page + 1 }));
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroSwan2.default.navigateTo({
          url: url
        });
      };
      // * 更新筛选条件
      var setSearchDataAction = function setSearchDataAction(type, id, text) {
        var recondition = JSON.parse(JSON.stringify(condition));
        var i = recondition.findIndex(function (item) {
          return item.id === type;
        });
        recondition[i].text = text;
        setCondition(recondition);
        setNormalField(normalFieldReset);
        if (type === _lists.ClassifyPickerKey) {
          setSearchData(_extends({}, searchData, { occupations: id, page: 1 }));
        } else if (type === _lists.AreaPickerKey) {
          setSearchData(_extends({}, searchData, { area_id: id, page: 1 }));
        } else if (type === _lists.ResumeFilterPickerKey) {
          setSearchData(_extends({}, searchData, { sort: id, page: 1 }));
        } else if (type === _lists.MemberPickerKey) {
          setSearchData(_extends({}, searchData, { type: id, page: 1 }));
        }
        goToScrollTop();
      };
      // scroll-view 回到顶部
      var goToScrollTop = function goToScrollTop() {
        setHasMore(true);
        // ! 如果小程序必须监听滚动值 返回顶部直接为0 ，如果不需要我们就给个近似值 来达到效果
        if (_index2.SCROLLVIEWSETTOP) {
          setScrollTop(0);
          return;
        }
        setScrollTop(scrollTop ? 0 : 0.1);
      };
      // scroll-view 滚动操作
      var setScrollTopAction = function setScrollTopAction(e) {
        // ! 如果小程序必须监听onScroll滚动值 那么就设置 例如百度小程序
        if (_index2.SCROLLVIEWSETTOP) {
          var top = e.detail.scrollTop;
          setScrollTop(top);
        }
      };
      // 设置搜索内容
      var setSearchValData = function setSearchValData() {
        setNormalField(normalFieldReset);
        setSearchData(_extends({}, searchData, { keywords: remark, page: 1 }));
        // goToScrollTop()
      };
      var handleClickToRankRules = function handleClickToRankRules() {
        _taroSwan2.default.navigateTo({ url: '/pages/rank-rules/index' });
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
        return userRouteJump(_index2.PUBLISHRESUME);
      };
      _taroSwan.propsManager.set({
        "placeholder": '\u627E\u5DE5\u4EBA\u3001\u627E\u961F\u4F0D\u3001\u627E\u73ED\u7EC4',
        "value": "",
        "setRemark": anonymousState__temp,
        "setSearchData": anonymousState__temp2
      }, $compid__98, $prevCompid__98);
      _taroSwan.propsManager.set({
        "data": condition,
        "setSearchData": anonymousState__temp3
      }, $compid__99, $prevCompid__99);
      _taroSwan.propsManager.set({
        "data": lists,
        "hasMore": hasMore
      }, $compid__100, $prevCompid__100);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        $compid__98: $compid__98,
        $compid__99: $compid__99,
        $compid__100: $compid__100,
        refresh: refresh
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
  }]);

  return ResumeLists;
}(_taroSwan2.default.Component);

ResumeLists.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"];
ResumeLists.$$componentPath = "pages/resume/lists/index";
ResumeLists.config = { navigationBarTitleText: '工人找活列表', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = ResumeLists;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(ResumeLists));

/***/ })

},[["./src/pages/resume/lists/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
