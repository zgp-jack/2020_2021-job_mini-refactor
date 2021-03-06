(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/detail/info/index"],{

/***/ "./src/pages/detail/info/index.scss":
/*!******************************************!*\
  !*** ./src/pages/detail/info/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/detail/info/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/detail/info/index.tsx ***!
  \*****************************************/
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

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index3 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

var _index4 = __webpack_require__(/*! ../../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index5 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ../../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _tabbar = __webpack_require__(/*! ../../../constants/tabbar */ "./src/constants/tabbar.ts");

var _tabbar2 = __webpack_require__(/*! ../../../actions/tabbar */ "./src/actions/tabbar.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/detail/info/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailInfoPage = function (_Taro$Component) {
  _inherits(DetailInfoPage, _Taro$Component);

  function DetailInfoPage() {
    _classCallCheck(this, DetailInfoPage);

    var _this = _possibleConstructorReturn(this, (DetailInfoPage.__proto__ || Object.getPrototypeOf(DetailInfoPage)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: ''
    };

    _this.$usedState = ["anonymousState__temp3", "anonymousState__temp6", "anonymousState__temp7", "anonymousState__temp8", "data", "loopArray80", "loopArray81", "$compid__66", "$compid__67", "$compid__68", "$compid__69", "resCode", "editPhone", "SHOWOFFICIALACCOUNT", "SERIES", "QQSERIES", "ios", "DOWNLOADAPP", "IMGCDNURL", "type", "again", "stopHiring", "editTopping", "isCollection", "ISCANSHARE", "id", "recommend", "complaintModal", "phone"];
    _this.anonymousFunc5Map = {};
    _this.customComponents = ["WechatNotice", "NologinBtm", "CollectionRecruitList", "Report"];
    return _this;
  }

  _createClass(DetailInfoPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(DetailInfoPage.prototype.__proto__ || Object.getPrototypeOf(DetailInfoPage.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__66"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__66 = _genCompid2[0],
          $compid__66 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__67"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__67 = _genCompid4[0],
          $compid__67 = _genCompid4[1];

      var _genCompid5 = (0, _taroSwan.genCompid)(__prefix + "$compid__68"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__68 = _genCompid6[0],
          $compid__68 = _genCompid6[1];

      var _genCompid7 = (0, _taroSwan.genCompid)(__prefix + "$compid__69"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__69 = _genCompid8[0],
          $compid__69 = _genCompid8[1];

      var dispatch = (0, _redux.useDispatch)();
      var router = (0, _taroSwan.useRouter)();
      var _router$params = router.params,
          _router$params$id = _router$params.id,
          id = _router$params$id === undefined ? '' : _router$params$id,
          _router$params$refId = _router$params.refId,
          refId = _router$params$refId === undefined ? '' : _router$params$refId,
          type = _router$params.type;
      // 获取userInfo

      var userInfo = _taroSwan2.default.getStorageSync(_store.UserInfo);

      var _useState = (0, _taroSwan.useState)({
        title: '',
        time: '',
        image: '',
        user_name: '',
        classifyName: [],
        detail: '',
        show_full_address: '',
        location: '',
        map_address_name: '',
        map_street_name: '',
        tel_str: '',
        show_ajax_btn: false,
        id: 0,
        is_collect: 0,
        view_images: [],
        is_end: 0,
        is_check: 0,
        has_top: 0,
        show_complaint: {
          show_complaint: 0,
          tips_message: ''
        },
        top_info: {
          is_top: ''
        }
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];
      // 投诉


      var _useState3 = (0, _taroSwan.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          complaintModal = _useState4[0],
          setComplaintModal = _useState4[1];
      // textarea


      var _useState5 = (0, _taroSwan.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          textarea = _useState6[0],
          setTextarea = _useState6[1];
      // 刷新一次


      var _useState7 = (0, _taroSwan.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          refresh = _useState8[0],
          setRefresh = _useState8[1];
      // 是否收藏


      var _useState9 = (0, _taroSwan.useState)(0),
          _useState10 = _slicedToArray(_useState9, 2),
          isCollection = _useState10[0],
          setIsCollection = _useState10[1];
      // 判断招聘类型


      var _useState11 = (0, _taroSwan.useState)(''),
          _useState12 = _slicedToArray(_useState11, 2),
          resCode = _useState12[0],
          setResCode = _useState12[1];
      // 是否显示停止招工


      var _useState13 = (0, _taroSwan.useState)(false),
          _useState14 = _slicedToArray(_useState13, 2),
          stopHiring = _useState14[0],
          setStopHiring = _useState14[1];
      // 是够能继续投诉


      var _useState15 = (0, _taroSwan.useState)(false),
          _useState16 = _slicedToArray(_useState15, 2),
          complaint = _useState16[0],
          setComplaint = _useState16[1];
      // 重新招工


      var _useState17 = (0, _taroSwan.useState)(false),
          _useState18 = _slicedToArray(_useState17, 2),
          again = _useState18[0],
          setAgain = _useState18[1];
      // 电话


      var _useState19 = (0, _taroSwan.useState)(''),
          _useState20 = _slicedToArray(_useState19, 2),
          phone = _useState20[0],
          setPhone = _useState20[1];
      // 修改电话后投诉


      var _useState21 = (0, _taroSwan.useState)(false),
          _useState22 = _slicedToArray(_useState21, 2),
          complaintInfo = _useState22[0],
          setComplaintInfo = _useState22[1];
      // 修改电话后，显示投诉和拨打


      var _useState23 = (0, _taroSwan.useState)(true),
          _useState24 = _slicedToArray(_useState23, 2),
          editPhone = _useState24[0],
          setEditPhone = _useState24[1];
      // 获取用户是否登录


      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // 招工相关推荐

      var _useState25 = (0, _taroSwan.useState)([]),
          _useState26 = _slicedToArray(_useState25, 2),
          recommend = _useState26[0],
          setRecommend = _useState26[1];
      // 判断是否是ios


      var _useState27 = (0, _taroSwan.useState)(false),
          _useState28 = _slicedToArray(_useState27, 2),
          ios = _useState28[0],
          setIos = _useState28[1];
      // 找活相关推荐


      var _useState29 = (0, _taroSwan.useState)([]),
          _useState30 = _slicedToArray(_useState29, 2),
          recommendRe = _useState30[0],
          setRecommendRe = _useState30[1];
      // 更多招工省市


      var _useState31 = (0, _taroSwan.useState)(0),
          _useState32 = _slicedToArray(_useState31, 2),
          areasId = _useState32[0],
          setAreasId = _useState32[1];
      // 更多招工工种


      var _useState33 = (0, _taroSwan.useState)(''),
          _useState34 = _slicedToArray(_useState33, 2),
          occupations = _useState34[0],
          setOccupations = _useState34[1];
      // 更多招工job_ids


      var _useState35 = (0, _taroSwan.useState)(0),
          _useState36 = _slicedToArray(_useState35, 2),
          jobIds = _useState36[0],
          setJobIds = _useState36[1];
      // 修改置顶


      var _useState37 = (0, _taroSwan.useState)(0),
          _useState38 = _slicedToArray(_useState37, 2),
          editTopping = _useState38[0],
          setEditTopping = _useState38[1];
      // 返回刷新页面


      (0, _taroSwan.useDidShow)(function () {
        setIos((0, _index3.isIos)());
        if (refresh) {
          setRefresh(false);
          return;
        }
        getRecruitInfo();
      });
      // 获取招工详情
      var getRecruitInfo = function getRecruitInfo() {
        var params = {
          type: 'job',
          // 先写死
          infoId: id
        };
        // let userInfo = Taro.getStorageSync("userInfo");
        // login
        // 用户没有认证
        var result = login ? (0, _index.jobInfoAction)(params) : (0, _index.jobNoUserInfoAction)(params);
        result.then(function (res) {
          console.log('then');
          detailGetTelAction(res, function () {
            setRefresh(false);
            setData(res.result);
            setPhone(res.result.tel_str);
            setEditPhone(res.result.show_ajax_btn);
            _taroSwan2.default.setNavigationBarTitle({
              title: res.result.title
            });
            if (_index2.SERIES == _index2.BAIDUSERIES) {
              var keywords = res.result.classifyName[0] || '';
              var split_keywords = keywords.split('/').map(function (item) {
                return "\u62DB" + item + "\u5E08\u5085";
              }).join(',');
              _taroSwan2.default.setPageInfo({
                title: res.result.title,
                description: res.result.title + res.result.detail,
                keywords: res.result.show_full_address + "\u62DB" + keywords + "\u5E08\u5085," + split_keywords + ",\u5DE5\u5730\u62DB\u5DE5,\u627E\u5DE5\u4EBA,\u5EFA\u7B51\u5DE5\u5730"
              });
            }
            setIsCollection(res.result.is_collect);
            // 设置更多招工信息的省/市
            var area_id = res.result.city_id && res.result.city_id != 0 ? res.result.city_id : res.result.province_id;
            setAreasId(area_id);
            var occupations = res.result.occupations.length ? res.result.occupations.join(',') : '';
            setOccupations(occupations);
            var jobIds = res.result.id;
            setJobIds(jobIds);
            if (userInfo.userId === res.result.user_id) {
              // 判断是自己发布的招工
              setResCode('own');
            } else {
              setResCode(res.errcode);
            }
            // if (userInfo.userId === res.result.user_id) {
            //   // 加载找活相关推荐数据列表
            //   const listParams = {
            //     page: 1,
            //     type: 1,
            //     area_id: res.result.city_id,
            //     occupations: [...res.result.occupations].join(','),
            //     uuid: '',
            //   }
            //   detailsRecommendAction(listParams).then(res => {
            //     if (res.errcode === 'ok') {
            //       setRecommendRe(res.data.list);
            //     } else {
            //       Msg(res.errmsg)
            //     }
            //   })
            // } else {
            //   // 加载招工相关推荐数据列表
            var paramsObj = {
              page: 1,
              type: 1,
              area_id: area_id,
              job_ids: res.result.id,
              classify_id: [].concat(_toConsumableArray(res.result.occupations)).join(',')
            };
            (0, _index.jobDetailsListAction)(paramsObj).then(function (res) {
              if (res.errcode === 'ok') {
                setRecommend(res.data.list);
              } else {
                (0, _index6.default)(res.errmsg);
              }
            });
            // }
          });
        }).catch(function () {
          console.log('catch');
          (0, _index5.ShowActionModal)({
            msg: '网络异常，请重新进入',
            success: function success() {
              _taroSwan2.default.navigateBack();
            }
          });
        });
      };
      // 地图
      var handleMap = function handleMap() {
        var locArr = data.location.split(",");
        setRefresh(true);
        _taroSwan2.default.openLocation({
          latitude: parseFloat(locArr[1]),
          longitude: parseFloat(locArr[0]),
          name: data.map_address_name,
          address: data.map_street_name,
          scale: 18
        });
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroSwan2.default.navigateTo({
          url: url
        });
      };
      var handleTextarea = function handleTextarea(e) {
        var val = e.detail.value;
        setTextarea(val);
      };
      // 提交投诉
      var handleSubmit = function handleSubmit() {
        if (!(0, _index3.isVaildVal)(textarea, 5, 500)) {
          (0, _index5.ShowActionModal)({ msg: '输入内容不少于5个字且必须包含文字' });
          return false;
        }
        var params = {
          content: textarea,
          type: 'job',
          infoId: data.id
        };
        // publishComplainAction(params).then((res) => {
        //   Msg('提交成功')
        //   setComplaintModal(false);
        //   setComplaint(true)
        // })
        (0, _index.publishComplainAction)(params).then(function (res) {
          if (res.errcode === 'ok') {
            (0, _index7.SubscribeToNews)('complain', function () {
              (0, _index5.showModalTip)({
                tips: res.errmsg,
                callback: function callback() {
                  setComplaintModal(false);
                  setComplaint(true);
                }
              });
            });
          }
        });
      };
      // 操作授权
      var vaildUserLogin = function vaildUserLogin() {
        if (!login) {
          _taroSwan2.default.navigateTo({
            url:  false ? undefined : _index2.CODEAUTHPATH
          });
          return false;
        }
        return true;
      };
      // 处理获取电话号码的不同状态码
      var detailGetTelAction = function detailGetTelAction(res, callback) {
        console.log(res.errcode);
        if (res.errcode == 'ok' || res.errcode == 'end' || res.errcode == 'ajax') {
          callback && callback();
        } else if (res.errcode == 'auth_not_pass' || res.errcode == 'to_auth') {
          _taroSwan2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            success: function success(res) {
              if (res.confirm) {
                _taroSwan2.default.navigateTo({
                  url: '/pages/realname/index'
                });
              } else {
                _taroSwan2.default.navigateBack();
              }
            }
          });
        } else if (res.errcode == 'none_tel') {
          _taroSwan2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            cancelText: "返回列表",
            confirmText: "绑定手机",
            success: function success(res) {
              if (res.confirm) {
                _taroSwan2.default.navigateTo({
                  url: '/pages/userinfo/add/index'
                });
              } else if (res.cancel) {
                _taroSwan2.default.navigateBack();
              }
            }
          });
        } else if (res.errcode == 'get_integral') {
          _taroSwan2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            cancelText: "返回列表",
            confirmText: "获取积分",
            success: function success(res) {
              if (res.confirm) {
                _taroSwan2.default.navigateTo({
                  url: '/pages/getintegral/index'
                });
              } else if (res.cancel) {
                _taroSwan2.default.navigateBack();
              }
            }
          });
        } else if (res.errcode == 'reload') {
          _taroSwan2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            showCancel: false,
            confirmText: "确定",
            success: function success(res) {
              if (res.confirm) {
                getRecruitInfo();
              }
            }
          });
        } else if (res.errcode == 'goback') {
          var pages = _taroSwan2.default.getCurrentPages();
          _taroSwan2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            confirmText: "确定",
            showCancel: false,
            success: function success(res) {
              if (res.confirm) {
                if (pages.length > 1) {
                  _taroSwan2.default.navigateBack();
                } else {
                  _taroSwan2.default.reLaunch({ url: '/pages/index/index' });
                }
              }
            }
          });
        } else {
          _taroSwan2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            showCancel: false,
            confirmText: "我知道了",
            success: function success() {
              _taroSwan2.default.navigateBack();
            }
          });
        }
      };
      // 监听是否是别人分享的页面
      (0, _taroSwan.useEffect)(function () {
        if (refId) {
          _taroSwan2.default.setStorageSync(_store.REFID, refId);
        }
      }, [refId]);
      // 设置分享信息
      (0, _taroSwan.useShareAppMessage)(function () {
        var path = "/pages/detail/info/index?id=" + id;
        var userInfo = _taroSwan2.default.getStorageSync(_store.UserInfo);
        return _extends({}, (0, _index4.getUserShareMessage)(), {
          path: userInfo ? path + "&refId=" + userInfo.userId : path
        });
      });
      // 获取电话
      var jobGetTel = function jobGetTel() {
        if (!vaildUserLogin()) {
          return;
        }
        var params = {
          type: 'job',
          infoId: data.id
        };
        (0, _index.jobGetTelAction)(params).then(function (res) {
          detailGetTelAction(res, function () {
            if (res.errcode == 'end') {
              (0, _index6.default)(res.errmsg);
              return;
            }
            setRefresh(true);
            setPhone(res.tel);
            setComplaintInfo(true);
            setEditPhone(false);
          });
        });
      };
      var footerComplaint = function footerComplaint() {
        if (resCode === 'end') {
          _taroSwan2.default.showModal({
            title: '温馨提示',
            content: '该招工信息已招到，暂时不能投诉',
            showCancel: false
          });
        } else {
          // 投诉过一次就不能投诉了
          if (complaint) {
            _taroSwan2.default.showModal({
              title: '提示',
              content: '您已投诉该信息，请勿重复操作！',
              showCancel: false
            });
          } else {
            // 查看电话可以投诉一次
            if (complaintInfo) {
              setComplaintModal(true);
              // 没有看到电话不能投诉
            } else if (data.show_ajax_btn) {
              (0, _index6.default)('请查看完整的手机号码后再操作！');
            } else {
              if (data.is_end === 2 || !data.show_complaint.show_complaint) {
                _taroSwan2.default.showModal({
                  title: '提示',
                  content: '您已投诉该信息，请勿重复投诉！',
                  showCancel: false
                });
              } else {
                setComplaintModal(true);
              }
            }
          }
        }
      };
      // 收藏
      var collection = function collection() {
        if (!vaildUserLogin()) {
          return;
        }
        (0, _index.recruitListCancelCollectionAction)(data.id.toString()).then(function (res) {
          (0, _index6.default)(res.errmsg);
          if (res.action === 'add') {
            setIsCollection(1);
          } else {
            setIsCollection(0);
          }
        });
      };
      var handleImage = function handleImage(v) {
        setRefresh(true);
        _taroSwan2.default.previewImage({
          current: v,
          urls: [v]
        });
      };
      var handleStatus = function handleStatus() {
        (0, _index.jobEndStatusAction)(data.id).then(function (res) {
          if (res.errcode === 'ok') {
            if (stopHiring || data.is_end === 2) {
              setAgain(true);
            } else {
              setStopHiring(true);
              // setStopHiring se
              (0, _index6.default)(res.errmsg);
              setStopHiring(false);
              setRefresh(true);
              getRecruitInfo();
            }
          } else {
            (0, _index6.default)(res.errmsg);
          }
        });
      };
      // 置顶
      var handleTopping = function handleTopping(data) {
        if (data.has_top) {
          var endtime = parseInt(data.top_info.end_time);
          var timestr = new Date().getTime() / 1000;
          if (timestr < endtime) {
            _taroSwan2.default.showLoading({
              title: '正在执行操作'
            });
            var params = {
              infoId: id,
              status: data.toping == '1' ? '1' : "0"
            };
            (0, _index.jobUpdateTopStatusAction)(params).then(function (res) {
              if (res.errcode === 'ok') {
                (0, _index6.default)(res.errmsg);
                setRefresh(true);
                setStopHiring(true);
                setEditTopping(1);
                // setSearchData({ ...searchData, page: searchData.page })
              } else if (res.errcode === 'auth_forbid') {
                // 去实名
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  cancelText: '取消',
                  confirmText: '去实名',
                  success: function success(res) {
                    if (res.confirm) {
                      var backtwo = "backtwo";
                      _taroSwan2.default.navigateTo({
                        url: "/pages/realname/index?backtwo=backtwo"
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode == "member_forbid") {
                _taroSwan2.default.showModal({
                  title: '温馨提示',
                  content: "mydata.errmsg",
                  cancelText: "取消",
                  confirmText: "联系客服",
                  success: function success(res) {
                    if (res.confirm) {
                      var tel = _index2.SERVERPHONE;
                      _taroSwan2.default.makePhoneCall({
                        phoneNumber: tel
                      });
                    }
                  }
                });
                return;
              } else {
                _taroSwan2.default.showToast({
                  title: res.errmsg,
                  icon: "none",
                  duration: 1500
                });
              }
            });
            return false;
          }
        }
        userRouteJump("/pages/newtopping/recRang/index?defaultTopArea=" + data.area_id + "&job_id=" + data.id);
      };
      // 查看更多招工信息
      var seeMoreRecruit = function seeMoreRecruit() {
        var pages = _taroSwan2.default.getCurrentPages();
        if (pages.length < 2) {
          _taroSwan2.default.reLaunch({ url: _index2.INDEXPATH });
        } else {
          var routeUrl = pages[pages.length - 2].route;
          var listUrl = "/" + routeUrl;
          if (listUrl == _index2.INDEXPATH) {
            _taroSwan2.default.navigateBack();
          } else {
            _taroSwan2.default.reLaunch({ url: _index2.INDEXPATH });
          }
        }
      };
      // 回到首页
      var handleJump = function handleJump() {
        dispatch((0, _tabbar2.changeTabbar)(_tabbar.RECRUIT));
        _taroSwan2.default.reLaunch({
          url: _index2.INDEXPATH + "?type=" + _tabbar.RECRUIT
        });
      };
      this.anonymousFunc0 = function () {
        return jobGetTel();
      };
      this.anonymousFunc1 = function () {
        _taroSwan2.default.makePhoneCall({ phoneNumber: phone });
      };
      this.anonymousFunc2 = footerComplaint;
      this.anonymousFunc3 = function () {
        return userRouteJump('/subpackage/pages/anti-fraud/index');
      };
      this.anonymousFunc4 = function () {
        return userRouteJump("/pages/static/notice/index?id=32");
      };
      var anonymousState__temp3 = _index2.REPLACEWEIXINTEXT ? data.detail.replace(_index2.FILTERWEIXINREG, '') : data.detail;
      this.anonymousFunc6 = handleMap;
      this.anonymousFunc7 = function () {
        return userRouteJump(_index2.DOWNLOADAPPPATH);
      };
      this.anonymousFunc8 = function () {
        return userRouteJump("/pages/recruit/jisu_issue/index?id=" + data.id);
      };
      this.anonymousFunc9 = handleStatus;
      this.anonymousFunc10 = function () {
        return userRouteJump("/pages/newtopping/recRang/index?job_id=" + data.id);
      };
      this.anonymousFunc11 = handleStatus;
      this.anonymousFunc12 = function () {
        return handleTopping(data);
      };
      this.anonymousFunc13 = function () {
        return userRouteJump("/pages/recruit/jisu_issue/index?id=" + data.id);
      };
      this.anonymousFunc14 = collection;
      this.anonymousFunc15 = footerComplaint;
      this.anonymousFunc16 = function () {
        return jobGetTel();
      };
      this.anonymousFunc17 = function () {
        _taroSwan2.default.makePhoneCall({ phoneNumber: phone });
      };
      var anonymousState__temp6 = data.is_end === 2 ? "/pages/index/index?type=" + _tabbar.RECRUIT : null;
      var anonymousState__temp7 = data.is_end === 2 ? "" + _tabbar.RECRUIT : null;
      var anonymousState__temp8 = data.is_end === 2 ? "/pages/detail/info/index?id=" + id : null;
      this.anonymousFunc18 = collection;
      this.anonymousFunc19 = footerComplaint;
      this.anonymousFunc20 = function () {
        return jobGetTel();
      };
      this.anonymousFunc21 = function () {
        _taroSwan2.default.makePhoneCall({ phoneNumber: phone });
      };
      var loopArray80 = data.classifyName.map(function (v, i) {
        v = {
          privateOriginal: (0, _taroSwan.internal_get_original)(v)
        };
        var loopState__temp2 = i + i;
        return {
          loopState__temp2: loopState__temp2,
          privateOriginal: v.privateOriginal
        };
      });
      var loopArray81 = data.view_images.length ? data.view_images.map(function (v, i) {
        v = {
          privateOriginal: (0, _taroSwan.internal_get_original)(v)
        };
        var loopState__temp5 = data.view_images.length ? i + i : null;
        var _$indexKey = "ihzzz" + i;
        _this2.anonymousFunc5Map[_$indexKey] = function () {
          return handleImage(v.privateOriginal);
        };
        return {
          loopState__temp5: loopState__temp5,
          _$indexKey: _$indexKey,
          privateOriginal: v.privateOriginal
        };
      }) : [];
      _taroSwan.propsManager.set({
        "type": 1
      }, $compid__66, $prevCompid__66);
      !type && data.is_end === 2 && _taroSwan.propsManager.set({
        "text": "\u67E5\u770B\u66F4\u591A\u62DB\u5DE5\u4FE1\u606F",
        "url": anonymousState__temp6,
        "type": anonymousState__temp7,
        "path": anonymousState__temp8
      }, $compid__67, $prevCompid__67);
      recommend.length && _taroSwan.propsManager.set({
        "data": recommend,
        "type": 1,
        "areasId": areasId,
        "occupations": occupations,
        "jobIds": jobIds,
        "detailList": true
      }, $compid__68, $prevCompid__68);
      complaintModal && _taroSwan.propsManager.set({
        "display": complaintModal,
        "textarea": textarea,
        "handleTextarea": handleTextarea,
        "setComplaintModal": setComplaintModal,
        "handleSubmit": handleSubmit
      }, $compid__69, $prevCompid__69);
      Object.assign(this.__state, {
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp6: anonymousState__temp6,
        anonymousState__temp7: anonymousState__temp7,
        anonymousState__temp8: anonymousState__temp8,
        data: data,
        loopArray80: loopArray80,
        loopArray81: loopArray81,
        $compid__66: $compid__66,
        $compid__67: $compid__67,
        $compid__68: $compid__68,
        $compid__69: $compid__69,
        resCode: resCode,
        editPhone: editPhone,
        SHOWOFFICIALACCOUNT: _index2.SHOWOFFICIALACCOUNT,
        SERIES: _index2.SERIES,
        QQSERIES: _index2.QQSERIES,
        ios: ios,
        DOWNLOADAPP: _index2.DOWNLOADAPP,
        IMGCDNURL: _index2.IMGCDNURL,
        type: type,
        again: again,
        stopHiring: stopHiring,
        editTopping: editTopping,
        isCollection: isCollection,
        ISCANSHARE: _index2.ISCANSHARE,
        id: id,
        recommend: recommend,
        complaintModal: complaintModal,
        phone: phone
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
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(_$indexKey) {
      var _anonymousFunc5Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc5Map[_$indexKey] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey].apply(_anonymousFunc5Map, e);
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: "anonymousFunc9",
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: "anonymousFunc10",
    value: function anonymousFunc10(e) {
      ;
    }
  }, {
    key: "anonymousFunc11",
    value: function anonymousFunc11(e) {
      ;
    }
  }, {
    key: "anonymousFunc12",
    value: function anonymousFunc12(e) {
      ;
    }
  }, {
    key: "anonymousFunc13",
    value: function anonymousFunc13(e) {
      ;
    }
  }, {
    key: "anonymousFunc14",
    value: function anonymousFunc14(e) {
      ;
    }
  }, {
    key: "anonymousFunc15",
    value: function anonymousFunc15(e) {
      ;
    }
  }, {
    key: "anonymousFunc16",
    value: function anonymousFunc16(e) {
      ;
    }
  }, {
    key: "anonymousFunc17",
    value: function anonymousFunc17(e) {
      ;
    }
  }, {
    key: "anonymousFunc18",
    value: function anonymousFunc18(e) {
      ;
    }
  }, {
    key: "anonymousFunc19",
    value: function anonymousFunc19(e) {
      ;
    }
  }, {
    key: "anonymousFunc20",
    value: function anonymousFunc20(e) {
      ;
    }
  }, {
    key: "anonymousFunc21",
    value: function anonymousFunc21(e) {
      ;
    }
  }]);

  return DetailInfoPage;
}(_taroSwan2.default.Component);

DetailInfoPage.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13", "anonymousFunc14", "anonymousFunc15", "anonymousFunc16", "anonymousFunc17", "anonymousFunc18", "anonymousFunc19", "anonymousFunc20", "anonymousFunc21"];
DetailInfoPage.$$componentPath = "pages/detail/info/index";
DetailInfoPage.config = { navigationBarTitleText: '' };
exports.default = DetailInfoPage;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(DetailInfoPage, true));

/***/ })

},[["./src/pages/detail/info/index.tsx","runtime","vendors"]]]);