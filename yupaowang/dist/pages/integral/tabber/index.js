(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/integral/tabber/index"],{

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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

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

    _this.$usedState = ["data", "modalData", "loopArray71", "$compid__63", "$compid__64", "time", "start", "end", "IMGCDNURL", "initInfo", "sourceList", "consumeList", "startType", "modal", "complaintModal", "showTime", "title", "num"];
    _this.customComponents = ["Auth", "Nodata", "Report"];
    return _this;
  }

  _createClass(Tabber, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Tabber.prototype.__proto__ || Object.getPrototypeOf(Tabber.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__63"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__63 = _genCompid2[0],
          $compid__63 = _genCompid2[1];

      var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "$compid__64"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__64 = _genCompid4[0],
          $compid__64 = _genCompid4[1];
      // 检测用户是否登录


      var login = (0, _redux.useSelector)(function (store) {
        return store.User['login'];
      });
      var router = (0, _taroTt.useRouter)();
      var _router$params = router.params,
          info = _router$params.info,
          office = _router$params.office;
      // 切换

      var _useState = (0, _taroTt.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          changeType = _useState2[0],
          setChangeType = _useState2[1];
      // 标识是第一次


      var _useState3 = (0, _taroTt.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          first = _useState4[0],
          setFirst = _useState4[1];
      // 是来源还是消耗


      var _useState5 = (0, _taroTt.useState)(info),
          _useState6 = _slicedToArray(_useState5, 2),
          initInfo = _useState6[0],
          setInitInfo = _useState6[1];
      // 分类原始内容


      var _useState7 = (0, _taroTt.useState)([]),
          _useState8 = _slicedToArray(_useState7, 2),
          initList = _useState8[0],
          setInitList = _useState8[1];
      // 第一次显示内容


      var _useState9 = (0, _taroTt.useState)(''),
          _useState10 = _slicedToArray(_useState9, 2),
          title = _useState10[0],
          setTitle = _useState10[1];
      // start时间


      var _useState11 = (0, _taroTt.useState)(''),
          _useState12 = _slicedToArray(_useState11, 2),
          start = _useState12[0],
          setStart = _useState12[1];
      // end时间


      var _useState13 = (0, _taroTt.useState)(''),
          _useState14 = _slicedToArray(_useState13, 2),
          end = _useState14[0],
          setEnd = _useState14[1];
      // 默认日期


      var _useState15 = (0, _taroTt.useState)(''),
          _useState16 = _slicedToArray(_useState15, 2),
          time = _useState16[0],
          setTime = _useState16[1];
      // 显示时间


      var _useState17 = (0, _taroTt.useState)(''),
          _useState18 = _slicedToArray(_useState17, 2),
          showTime = _useState18[0],
          setShowTime = _useState18[1];
      // 设置类型


      var _useState19 = (0, _taroTt.useState)('0'),
          _useState20 = _slicedToArray(_useState19, 2),
          sourceType = _useState20[0],
          setSourceType = _useState20[1];
      // 消耗


      var _useState21 = (0, _taroTt.useState)('0'),
          _useState22 = _slicedToArray(_useState21, 2),
          consumeType = _useState22[0],
          setConsumeType = _useState22[1];
      // 数据


      var _useState23 = (0, _taroTt.useState)({
        lists: [],
        next_page: 0,
        stime: '0',
        bak: '0'
      }),
          _useState24 = _slicedToArray(_useState23, 2),
          data = _useState24[0],
          setData = _useState24[1];
      // 默认积分


      var _useState25 = (0, _taroTt.useState)({
        get: 0,
        expend: 0
      }),
          _useState26 = _slicedToArray(_useState25, 2),
          num = _useState26[0],
          setNum = _useState26[1];
      // 弹窗


      var _useState27 = (0, _taroTt.useState)(false),
          _useState28 = _slicedToArray(_useState27, 2),
          modal = _useState28[0],
          setModal = _useState28[1];
      // 弹窗内容


      var _useState29 = (0, _taroTt.useState)(),
          _useState30 = _slicedToArray(_useState29, 2),
          modalData = _useState30[0],
          setModalData = _useState30[1];
      // 投诉


      var _useState31 = (0, _taroTt.useState)(false),
          _useState32 = _slicedToArray(_useState31, 2),
          complaintModal = _useState32[0],
          setComplaintModal = _useState32[1];
      // 投诉id 


      var _useState33 = (0, _taroTt.useState)(''),
          _useState34 = _slicedToArray(_useState33, 2),
          complaintId = _useState34[0],
          setComplaintId = _useState34[1];
      // textarea


      var _useState35 = (0, _taroTt.useState)(''),
          _useState36 = _slicedToArray(_useState35, 2),
          textarea = _useState36[0],
          setTextarea = _useState36[1];
      // 需要传递的参数


      var _useState37 = (0, _taroTt.useState)({
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


      var _useState39 = (0, _taroTt.useState)(false),
          _useState40 = _slicedToArray(_useState39, 2),
          nextPage = _useState40[0],
          setNextPage = _useState40[1];
      // 搜索来源记录


      var _useState41 = (0, _taroTt.useState)({
        time: '',
        sortType: '0',
        flag: false,
        listType: '0'
      }),
          _useState42 = _slicedToArray(_useState41, 2),
          sourceSearch = _useState42[0],
          setSourceSearch = _useState42[1];
      // 搜索消耗记录


      var _useState43 = (0, _taroTt.useState)({
        time: '',
        sortType: '0',
        flag: false,
        listType: '0'
      }),
          _useState44 = _slicedToArray(_useState43, 2),
          consumeSearch = _useState44[0],
          setConsumeSearch = _useState44[1];
      // 下拉框开始位置


      var _useState45 = (0, _taroTt.useState)(0),
          _useState46 = _slicedToArray(_useState45, 2),
          startType = _useState46[0],
          setStartType = _useState46[1];
      // 来源分类list


      var _useState47 = (0, _taroTt.useState)([]),
          _useState48 = _slicedToArray(_useState47, 2),
          sourceList = _useState48[0],
          setSourceList = _useState48[1];
      // 消耗分类list


      var _useState49 = (0, _taroTt.useState)([]),
          _useState50 = _slicedToArray(_useState49, 2),
          consumeList = _useState50[0],
          setConsumeList = _useState50[1];
      // 来源是否获取到list


      var _useState51 = (0, _taroTt.useState)(false),
          _useState52 = _slicedToArray(_useState51, 2),
          issource = _useState52[0],
          setIssource = _useState52[1];
      // 积分是否获取到list


      var _useState53 = (0, _taroTt.useState)(false),
          _useState54 = _slicedToArray(_useState53, 2),
          isconsume = _useState54[0],
          setIsconsume = _useState54[1];

      (0, _taroTt.useEffect)(function () {
        var navigationBarTitleText = initInfo === '0' ? '鱼泡网-积分来源记录' : '鱼泡网-积分消耗记录';
        _taroTt2.default.setNavigationBarTitle({ title: navigationBarTitleText });
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
      (0, _taroTt.useEffect)(function () {
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
      (0, _taroTt.useReachBottom)(function () {
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
            _taroTt2.default.showModal({
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
        _taroTt2.default.makePhoneCall({ phoneNumber: modalData.user_mobile });
      };
      this.anonymousFunc5 = function () {
        return handleComplaint(modalData.id);
      };
      var loopArray71 = initInfo === '1' && modal && modalData ? modalData.classifyName.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp2 = initInfo === '1' && modal && modalData ? i + i : null;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: v.$original
        };
      }) : [];
      !data.lists.length && _taroTt.propsManager.set({
        "text": initInfo === '0' ? '暂无积分来源记录' : '暂无积分消耗记录'
      }, $compid__63, $prevCompid__63);
      complaintModal && _taroTt.propsManager.set({
        "display": complaintModal,
        "textarea": textarea,
        "handleTextarea": handleTextarea,
        "setComplaintModal": setComplaintModal,
        "handleSubmit": handleSubmit
      }, $compid__64, $prevCompid__64);
      Object.assign(this.__state, {
        data: data,
        modalData: modalData,
        loopArray71: loopArray71,
        $compid__63: $compid__63,
        $compid__64: $compid__64,
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
}(_taroTt2.default.Component);

Tabber.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5"];
Tabber.$$componentPath = "pages/integral/tabber/index";
Tabber.config = { navigationBarTitleText: '' };
exports.default = Tabber;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Tabber, true));

/***/ })

},[["./src/pages/integral/tabber/index.tsx","runtime","vendors"]]]);