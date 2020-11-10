(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/detail/info/index"],{

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

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index3 = __webpack_require__(/*! ../../../utils/v/index */ "./src/utils/v/index.ts");

var _index4 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index5 = _interopRequireDefault(_index4);

var _index6 = __webpack_require__(/*! ../../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/detail/info/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    _this.$usedState = ["data", "loopArray72", "loopArray73", "$compid__65", "$compid__66", "resCode", "editPhone", "IMGCDNURL", "again", "stopHiring", "isCollection", "recommend", "complaintModal", "phone"];
    _this.anonymousFunc5Map = {};
    _this.customComponents = ["WechatNotice", "CollectionRecruitList", "Report"];
    return _this;
  }

  _createClass(DetailInfoPage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(DetailInfoPage.prototype.__proto__ || Object.getPrototypeOf(DetailInfoPage.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
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

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__65"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__65 = _genCompid2[0],
          $compid__65 = _genCompid2[1];

      var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "$compid__66"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__66 = _genCompid4[0],
          $compid__66 = _genCompid4[1];

      var router = (0, _taroTt.useRouter)();
      var id = router.params.id;
      // 获取userInfo

      var userInfo = _taroTt2.default.getStorageSync(_store.UserInfo);

      var _useState = (0, _taroTt.useState)({
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


      var _useState3 = (0, _taroTt.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          complaintModal = _useState4[0],
          setComplaintModal = _useState4[1];
      // textarea


      var _useState5 = (0, _taroTt.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          textarea = _useState6[0],
          setTextarea = _useState6[1];
      // 刷新一次


      var _useState7 = (0, _taroTt.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          refresh = _useState8[0],
          setRefresh = _useState8[1];
      // 是否收藏


      var _useState9 = (0, _taroTt.useState)(0),
          _useState10 = _slicedToArray(_useState9, 2),
          isCollection = _useState10[0],
          setIsCollection = _useState10[1];
      // 判断招聘类型


      var _useState11 = (0, _taroTt.useState)(''),
          _useState12 = _slicedToArray(_useState11, 2),
          resCode = _useState12[0],
          setResCode = _useState12[1];
      // 是否显示停止招工


      var _useState13 = (0, _taroTt.useState)(false),
          _useState14 = _slicedToArray(_useState13, 2),
          stopHiring = _useState14[0],
          setStopHiring = _useState14[1];
      // 是够能继续投诉


      var _useState15 = (0, _taroTt.useState)(false),
          _useState16 = _slicedToArray(_useState15, 2),
          complaint = _useState16[0],
          setComplaint = _useState16[1];
      // 重新招工


      var _useState17 = (0, _taroTt.useState)(false),
          _useState18 = _slicedToArray(_useState17, 2),
          again = _useState18[0],
          setAgain = _useState18[1];
      // 电话


      var _useState19 = (0, _taroTt.useState)(''),
          _useState20 = _slicedToArray(_useState19, 2),
          phone = _useState20[0],
          setPhone = _useState20[1];
      // 修改电话后投诉


      var _useState21 = (0, _taroTt.useState)(false),
          _useState22 = _slicedToArray(_useState21, 2),
          complaintInfo = _useState22[0],
          setComplaintInfo = _useState22[1];
      // 修改电话后，显示投诉和拨打


      var _useState23 = (0, _taroTt.useState)(true),
          _useState24 = _slicedToArray(_useState23, 2),
          editPhone = _useState24[0],
          setEditPhone = _useState24[1];
      // 获取用户是否登录


      var login = (0, _redux.useSelector)(function (state) {
        return state.User['login'];
      });
      // 相关推荐

      var _useState25 = (0, _taroTt.useState)([]),
          _useState26 = _slicedToArray(_useState25, 2),
          recommend = _useState26[0],
          setRecommend = _useState26[1];
      // 返回刷新页面


      (0, _taroTt.useDidShow)(function () {
        if (refresh) {
          setRefresh(false);
          return;
        }
        console.log(1111);
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
        if (!login) {
          (0, _index.jobNoUserInfoAction)(params).then(function (res) {
            setRefresh(false);
            setData(res.result);
            setPhone(res.result.tel_str);
            setEditPhone(res.result.show_ajax_btn);
            _taroTt2.default.setNavigationBarTitle({
              title: res.result.title
            });
            setIsCollection(res.result.is_collect);
            if (userInfo.userId === res.result.user_id) {
              // 判断是自己发布的招工
              setResCode('own');
            } else {
              setResCode(res.errcode);
            }
          });
        } else {
          (0, _index.jobInfoAction)(params).then(function (res) {
            var paramsObj = {
              page: 1,
              type: 1,
              area_id: res.result.city_id,
              job_ids: res.result.id,
              classify_id: [res.result.occupations].join(',')
            };
            (0, _index.jobRecommendListAction)(paramsObj).then(function (res) {
              console.log(res, 'xxxxx');
              setRecommend(res.data.list);
            });
            setRefresh(false);
            setData(res.result);
            setPhone(res.result.tel_str);
            setEditPhone(res.result.show_ajax_btn);
            _taroTt2.default.setNavigationBarTitle({
              title: res.result.title
            });
            setIsCollection(res.result.is_collect);
            if (userInfo.userId === res.result.user_id) {
              // 判断是自己发布的招工
              setResCode('own');
            } else {
              setResCode(res.errcode);
            }
          });
        }
      };
      // 地图
      var handleMap = function handleMap() {
        var locArr = data.location.split(",");
        setRefresh(true);
        _taroTt2.default.openLocation({
          latitude: parseFloat(locArr[1]),
          longitude: parseFloat(locArr[0]),
          name: data.map_address_name,
          address: data.map_street_name,
          scale: 18
        });
      };
      // 用户页面跳转
      var userRouteJump = function userRouteJump(url) {
        _taroTt2.default.navigateTo({
          url: url
        });
      };
      var handleTextarea = function handleTextarea(e) {
        var val = e.detail.value;
        setTextarea(val);
      };
      // 提交投诉
      var handleSubmit = function handleSubmit() {
        if (!(0, _index3.isVaildVal)(textarea, 15, 500)) {
          (0, _index5.default)('输入内容不少于15个字且必须包含文字');
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
            (0, _index6.SubscribeToNews)('complain', function () {
              (0, _index4.SubPopup)({
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
          _taroTt2.default.navigateTo({
            url:  false ? undefined : _index2.CODEAUTHPATH
          });
          return false;
        }
        return true;
      };
      // 处理获取电话号码的不同状态码
      var detailGetTelAction = function detailGetTelAction(res) {
        if (res.errcode == 'ok' || res.errcode == 'end' || res.errcode == 'ajax') {
          setRefresh(true);
          setPhone(res.tel);
          setComplaintInfo(true);
          setEditPhone(false);
        } else if (res.errcode == 'end') {
          (0, _index5.default)(res.errmsg);
        } else if (res.errcode == 'auth_not_pass' || res.errcode == 'to_auth') {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            success: function success(res) {
              if (res.confirm) {
                _taroTt2.default.navigateTo({
                  url: '/pages/realname/index'
                });
              } else {
                _taroTt2.default.navigateBack();
              }
            }
          });
        } else if (res.errcode == 'none_tel') {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            cancelText: "返回列表",
            confirmText: "绑定手机",
            success: function success(res) {
              if (res.confirm) {
                _taroTt2.default.navigateTo({
                  url: '/pages/userinfo/add/index'
                });
              } else if (res.cancel) {
                _taroTt2.default.navigateBack();
              }
            }
          });
        } else if (res.errcode == 'get_integral') {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            cancelText: "返回列表",
            confirmText: "获取积分",
            success: function success(res) {
              if (res.confirm) {
                _taroTt2.default.navigateTo({
                  url: '/pages/getintegral/index'
                });
              } else if (res.cancel) {
                _taroTt2.default.navigateBack();
              }
            }
          });
        } else if (res.errcode == 'reload') {
          _taroTt2.default.showModal({
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
          var pages = _taroTt2.default.getCurrentPages();
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            confirmText: "确定",
            showCancel: false,
            success: function success(res) {
              if (res.confirm) {
                if (pages.length > 1) {
                  _taroTt2.default.navigateBack();
                } else {
                  _taroTt2.default.reLaunch({ url: '/pages/index/index' });
                }
              }
            }
          });
        } else {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: res.errmsg,
            showCancel: false,
            confirmText: "我知道了",
            success: function success() {
              _taroTt2.default.navigateBack();
            }
          });
        }
      };
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
          detailGetTelAction(res);
        });
      };
      var footerComplaint = function footerComplaint() {
        if (resCode === 'end') {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '该招工信息已招到，暂时不能投诉',
            showCancel: false
          });
        } else {
          // 投诉过一次就不能投诉了
          if (complaint) {
            _taroTt2.default.showModal({
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
              (0, _index5.default)('请查看完整的手机号码后再操作！');
            } else {
              if (data.is_end === 2 || !data.show_complaint.show_complaint) {
                _taroTt2.default.showModal({
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
          (0, _index5.default)(res.errmsg);
          if (res.action === 'add') {
            setIsCollection(1);
          } else {
            setIsCollection(0);
          }
        });
      };
      var handleImage = function handleImage(v) {
        setRefresh(true);
        _taroTt2.default.previewImage({
          current: v,
          urls: [v]
        });
      };
      var handleStatus = function handleStatus() {
        (0, _index.jobEndStatusAction)(data.id).then(function (res) {
          if (res.errcode === 'ok') {
            console.log(stopHiring);
            console.log(data.is_end, 'xxx');
            // if (stopHiring || (data.is_end === 2)) {
            //   setAgain(true);
            //   console.log(32131231);
            // }else{
            //   setStopHiring(true);
            // setStopHiring se
            (0, _index5.default)(res.errmsg);
            setStopHiring(false);
            setRefresh(true);
            // }
          } else {
            (0, _index5.default)(res.errmsg);
          }
        });
      };
      // 置顶
      var handleTopping = function handleTopping(data) {
        if (data.has_top) {
          var endtime = parseInt(data.top_info.end_time);
          var timestr = new Date().getTime() / 1000;
          if (timestr < endtime) {
            _taroTt2.default.showLoading({
              title: '正在执行操作'
            });
            var params = {
              infoId: id,
              status: data.toping == '0' ? '1' : "0"
            };
            (0, _index.jobUpdateTopStatusAction)(params).then(function (res) {
              if (res.errcode === 'ok') {
                console.log(res);
                (0, _index5.default)(res.errmsg);
                setRefresh(true);
                setStopHiring(true);
                // setSearchData({ ...searchData, page: searchData.page })
              } else if (res.errcode === 'auth_forbid') {
                // 去实名
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: res.errmsg,
                  cancelText: '取消',
                  confirmText: '去实名',
                  success: function success(res) {
                    if (res.confirm) {
                      var backtwo = "backtwo";
                      _taroTt2.default.navigateTo({
                        url: "/pages/realname/index?backtwo=backtwo"
                      });
                    }
                  }
                });
                return;
              } else if (res.errcode == "member_forbid") {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: "mydata.errmsg",
                  cancelText: "取消",
                  confirmText: "联系客服",
                  success: function success(res) {
                    if (res.confirm) {
                      var tel = _index2.SERVERPHONE;
                      _taroTt2.default.makePhoneCall({
                        phoneNumber: tel
                      });
                    }
                  }
                });
                return;
              } else {
                _taroTt2.default.showToast({
                  title: res.errmsg,
                  icon: "none",
                  duration: 1500
                });
              }
            });
            return false;
          }
        }
        userRouteJump("/pages/topping/index?id=" + data.id);
      };
      this.anonymousFunc0 = function () {
        return jobGetTel();
      };
      this.anonymousFunc1 = function () {
        _taroTt2.default.makePhoneCall({ phoneNumber: phone });
      };
      this.anonymousFunc2 = footerComplaint;
      this.anonymousFunc3 = function () {
        return userRouteJump('/subpackage/pages/anti-fraud/index');
      };
      this.anonymousFunc4 = function () {
        return userRouteJump("/subpackage/pages/notice/index?id=32");
      };
      this.anonymousFunc6 = handleMap;
      this.anonymousFunc7 = function () {
        return userRouteJump('/subpackage/pages/download/index');
      };
      this.anonymousFunc8 = handleStatus;
      this.anonymousFunc9 = function () {
        return userRouteJump("/pages/topping/index?id=" + data.id + "&type=1");
      };
      this.anonymousFunc10 = handleStatus;
      this.anonymousFunc11 = function () {
        return handleTopping(data);
      };
      this.anonymousFunc12 = collection;
      this.anonymousFunc13 = footerComplaint;
      this.anonymousFunc14 = function () {
        return jobGetTel();
      };
      this.anonymousFunc15 = function () {
        _taroTt2.default.makePhoneCall({ phoneNumber: data.tel_str });
      };
      var loopArray72 = data.classifyName.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp2 = i + i;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: v.$original
        };
      });
      var loopArray73 = data.view_images.length ? data.view_images.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp4 = data.view_images.length ? i + i : null;
        var _$indexKey = "iczzz" + i;
        _this2.anonymousFunc5Map[_$indexKey] = function () {
          return handleImage(v.$original);
        };
        return {
          $loopState__temp4: $loopState__temp4,
          _$indexKey: _$indexKey,
          $original: v.$original
        };
      }) : [];
      recommend.length && _taroTt.propsManager.set({
        "data": recommend,
        "type": 1
      }, $compid__65, $prevCompid__65);
      complaintModal && _taroTt.propsManager.set({
        "display": complaintModal,
        "textarea": textarea,
        "handleTextarea": handleTextarea,
        "setComplaintModal": setComplaintModal,
        "handleSubmit": handleSubmit
      }, $compid__66, $prevCompid__66);
      Object.assign(this.__state, {
        data: data,
        loopArray72: loopArray72,
        loopArray73: loopArray73,
        $compid__65: $compid__65,
        $compid__66: $compid__66,
        resCode: resCode,
        editPhone: editPhone,
        IMGCDNURL: _index2.IMGCDNURL,
        again: again,
        stopHiring: stopHiring,
        isCollection: isCollection,
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
  }]);

  return DetailInfoPage;
}(_taroTt2.default.Component);

DetailInfoPage.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12", "anonymousFunc13", "anonymousFunc14", "anonymousFunc15"];
DetailInfoPage.$$componentPath = "pages/detail/info/index";
DetailInfoPage.config = { navigationBarTitleText: '' };
exports.default = DetailInfoPage;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(DetailInfoPage, true));

/***/ })

},[["./src/pages/detail/info/index.tsx","runtime","vendors"]]]);