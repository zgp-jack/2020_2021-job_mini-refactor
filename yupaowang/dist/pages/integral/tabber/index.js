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

    _this.$usedState = ["data", "modalData", "loopArray71", "loopArray72", "$compid__65", "$compid__66", "title", "tabBar", "initInfo", "SERIES", "QQSERIES", "ios", "time", "IMGCDNURL", "start", "end", "sourceList", "consumeList", "startType", "modal", "modelType", "showIsReport", "complaintModal", "showTime"];
    _this.anonymousFunc1Map = {};
    _this.anonymousFunc5Map = {};
    _this.customComponents = ["Nodata", "Report"];
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
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__65"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__65 = _genCompid2[0],
          $compid__65 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__66"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__66 = _genCompid4[0],
          $compid__66 = _genCompid4[1];
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
      //顶部tab数据


      var _useState55 = (0, _taroSwan.useState)([{ type: '0', name: '积分来源' }, { type: '1', name: '积分消耗' }]),
          _useState56 = _slicedToArray(_useState55, 1),
          tabBar = _useState56[0];

      var _useState57 = (0, _taroSwan.useState)(''),
          _useState58 = _slicedToArray(_useState57, 2),
          modelType = _useState58[0],
          setModelType = _useState58[1];
      // 是否显示投诉哦


      var _useState59 = (0, _taroSwan.useState)(0),
          _useState60 = _slicedToArray(_useState59, 2),
          showIsReport = _useState60[0],
          setShowIsReport = _useState60[1];
      // 判断是否是ios


      var _useState61 = (0, _taroSwan.useState)(false),
          _useState62 = _slicedToArray(_useState61, 2),
          ios = _useState62[0],
          setIos = _useState62[1];

      (0, _taroSwan.useEffect)(function () {
        setIos((0, _index5.isIos)());
        var navigationBarTitleText = initInfo === '0' ? '鱼泡网-积分来源记录' : '鱼泡网-积分消耗记录';
        _taroSwan2.default.setNavigationBarTitle({ title: navigationBarTitleText });
        // 获取现在时间
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
        if (params.flag) {
          if (initInfo === '0') {
            integralSourceLists();
          } else {
            integralExpendLists();
          }
        }
      }, [params, login]);
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
      // 积分来源列表
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
              setData({
                lists: [].concat(_toConsumableArray(data.lists), _toConsumableArray(res.data.lists)),
                next_page: res.data.next_page,
                stime: res.data.stime,
                bak: res.data.bak
              });
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
              setData({
                lists: [].concat(_toConsumableArray(data.lists), _toConsumableArray(res.data.lists)),
                next_page: res.data.next_page,
                stime: res.data.stime,
                bak: res.data.bak
              });
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
      var handleJump = function handleJump(_type) {
        if (_type == initInfo) {
          return;
        }
        setFirst(false);
        setNextPage(false);
        setChangeType(true);
        var type = void 0;
        if (initInfo == '0') {
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
        if (_type == '0') {
          setInitInfo(_type);
          // 存搜索记录
          setConsumeSearch({
            time: time,
            sortType: type,
            flag: true,
            listType: consumeType
          });
        } else if (_type == '1') {
          setInitInfo(_type);
          // 存搜索记录
          setSourceSearch({
            time: time,
            sortType: type,
            flag: true,
            listType: sourceType
          });
        }
      };
      // 弹窗
      var handleModal = function handleModal(userId, time) {
        (0, _index.integralUseInfoAction)(userId, time).then(function (res) {
          var errcode = res.errcode,
              errmsg = res.errmsg,
              info = res.info,
              data = res.data;

          if (res.errcode === 'deleted') {
            _taroSwan2.default.showModal({
              title: '温馨提示',
              content: errmsg,
              showCancel: false
            });
            return;
          } else if (errcode === 'ok') {
            setModelType(info.type);
            // 产品说不显示
          } else if (res.errcode === 'fail') {
            return;
          } else {
            setModelType(errcode);
          }
          var showComplain = void 0;
          if (data) {
            showComplain = data.show_complain;
          } else {
            showComplain = info.show_complain;
          }
          setShowIsReport(showComplain);
          setModalData(info || data);
          setModal(true);
        });
      };
      // 投诉弹窗
      var handleComplaint = function handleComplaint(id) {
        _taroSwan2.default.navigateTo({
          url: "/pages/newcomplaint/index?infoId=" + id + "&type=job&page=detai"
        });
        // setComplaintModal(true);
        // setComplaintId(id);
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
      var handleBgMove = function handleBgMove(e) {
        e.stopPropagation();
        return !modal;
      };
      this.anonymousFunc0 = handleBgMove;
      this.anonymousFunc2 = function (e) {
        return handleClckTime(e);
      };
      this.anonymousFunc3 = function (e) {
        return handleClckTime(e);
      };
      this.anonymousFunc4 = function (e) {
        return handleClick(e);
      };
      this.anonymousFunc6 = function () {
        setModal(false);
      };
      this.anonymousFunc7 = function () {
        _taroSwan2.default.makePhoneCall({ phoneNumber: modalData.user_mobile });
      };
      this.anonymousFunc8 = function () {
        return handleComplaint(modalData.id);
      };
      this.anonymousFunc9 = function () {
        _taroSwan2.default.makePhoneCall({ phoneNumber: modalData.user_mobile });
      };
      var loopArray71 = tabBar.map(function (item, i) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp2 = "i" + i;
        var _$indexKey = "ifzzz" + i;
        _this2.anonymousFunc1Map[_$indexKey] = function () {
          return handleJump(item.privateOriginal.type);
        };
        return {
          loopState__temp2: loopState__temp2,
          _$indexKey: _$indexKey,
          privateOriginal: item.privateOriginal
        };
      });
      var loopArray72 = data.lists.map(function (item, index) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp4 = "i" + index;
        var _$indexKey2 = "igzzz" + index;
        _this2.anonymousFunc5Map[_$indexKey2] = function () {
          return handleModal(item.privateOriginal.id, item.privateOriginal.time);
        };
        return {
          loopState__temp4: loopState__temp4,
          _$indexKey2: _$indexKey2,
          privateOriginal: item.privateOriginal
        };
      }
      // <View key={index + index} onClick={() => handleModal(item.id)}>
      //   <View className='integral-list'>
      //     <View className='integral-list-time'>
      //       <Text className='integral-time-year'>{item.y_m}</Text>
      //       <Text className='integral-time-day'>{item.day}</Text>
      //     </View>
      //     <View className='integral-list-item'>
      //       <View className='integral-list-title overwords'>{item.type_name}</View>
      //       <View className='integral-list-words overwords'>{initInfo === '0' ? item.ext : item.title}</View>
      //       <View
      //         className='integral-item-time'>时间：{item.his}<Text>{initInfo === '0' ? item.source_integral_string : item.tips}</Text></View>
      //     </View>
      //   </View>
      // </View>
      );
      !data.lists.length && _taroSwan.propsManager.set({
        "text": initInfo === '0' ? '暂无积分来源记录' : '暂无积分消耗记录'
      }, $compid__65, $prevCompid__65);
      complaintModal && _taroSwan.propsManager.set({
        "display": complaintModal,
        "textarea": textarea,
        "handleTextarea": handleTextarea,
        "setComplaintModal": setComplaintModal,
        "handleSubmit": handleSubmit
      }, $compid__66, $prevCompid__66);
      Object.assign(this.__state, {
        data: data,
        modalData: modalData,
        loopArray71: loopArray71,
        loopArray72: loopArray72,
        $compid__65: $compid__65,
        $compid__66: $compid__66,
        title: title,
        tabBar: tabBar,
        initInfo: initInfo,
        SERIES: _index3.SERIES,
        QQSERIES: _index3.QQSERIES,
        ios: ios,
        time: time,
        IMGCDNURL: _index3.IMGCDNURL,
        start: start,
        end: end,
        sourceList: sourceList,
        consumeList: consumeList,
        startType: startType,
        modal: modal,
        modelType: modelType,
        showIsReport: showIsReport,
        complaintModal: complaintModal,
        showTime: showTime
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      e.stopPropagation();
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(_$indexKey) {
      var _anonymousFunc1Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc1Map[_$indexKey] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey].apply(_anonymousFunc1Map, e);
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
    value: function anonymousFunc5(_$indexKey2) {
      var _anonymousFunc5Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc5Map[_$indexKey2] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey2].apply(_anonymousFunc5Map, e);
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: 'anonymousFunc9',
    value: function anonymousFunc9(e) {
      ;
    }
  }]);

  return Tabber;
}(_taroSwan2.default.Component);

Tabber.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9"];
Tabber.$$componentPath = "pages/integral/tabber/index";
Tabber.config = { navigationBarTitleText: '' };
exports.default = Tabber;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Tabber, true));

/***/ })

},[["./src/pages/integral/tabber/index.tsx","runtime","vendors"]]]);