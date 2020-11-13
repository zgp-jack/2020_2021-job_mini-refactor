<<<<<<< HEAD
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

    _this.$usedState = ["data", "loopArray71", "loopArray72", "$compid__67", "resCode", "editPhone", "IMGCDNURL", "again", "stopHiring", "isCollection", "ISCANSHARE", "complaintModal", "phone"];
    _this.anonymousFunc5Map = {};
    _this.customComponents = ["WechatNotice", "Report"];
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

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__67"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__67 = _genCompid2[0],
          $compid__67 = _genCompid2[1];

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
            // let paramsObj = {
            //   page:1,
            //   type:1,
            //   area_id: res.result.city_id,
            //   job_ids: res.result.id,
            //   classify_id:[res.result.occupations].join(','),
            // }
            // jobRecommendListAction(paramsObj).then(res=>{
            //   setRecommend(res.data.list);
            // })
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
              (0, _index4.showModalTip)({
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
            // if (stopHiring || (data.is_end === 2)) {
            //   setAgain(true);
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
        _taroTt2.default.makePhoneCall({ phoneNumber: phone });
      };
      var loopArray71 = data.classifyName.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp2 = i + i;
        return {
          $loopState__temp2: $loopState__temp2,
          $original: v.$original
        };
      });
      var loopArray72 = data.view_images.length ? data.view_images.map(function (v, i) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $loopState__temp4 = data.view_images.length ? i + i : null;
        var _$indexKey = "ibzzz" + i;
        _this2.anonymousFunc5Map[_$indexKey] = function () {
          return handleImage(v.$original);
        };
        return {
          $loopState__temp4: $loopState__temp4,
          _$indexKey: _$indexKey,
          $original: v.$original
        };
      }) : [];
      complaintModal && _taroTt.propsManager.set({
        "display": complaintModal,
        "textarea": textarea,
        "handleTextarea": handleTextarea,
        "setComplaintModal": setComplaintModal,
        "handleSubmit": handleSubmit
      }, $compid__67, $prevCompid__67);
      Object.assign(this.__state, {
        data: data,
        loopArray71: loopArray71,
        loopArray72: loopArray72,
        $compid__67: $compid__67,
        resCode: resCode,
        editPhone: editPhone,
        IMGCDNURL: _index2.IMGCDNURL,
        again: again,
        stopHiring: stopHiring,
        isCollection: isCollection,
        ISCANSHARE: _index2.ISCANSHARE,
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
=======
(tt.webpackJsonp=tt.webpackJsonp||[]).push([[43],{"168":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var fe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},de=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,a=!1,u=void 0;try{for(var i,r=e[Symbol.iterator]();!(o=(i=r.next()).done)&&(t.push(i.value),!n||t.length!==n);o=!0);}catch(e){a=!0,u=e}finally{try{!o&&r.return&&r.return()}finally{if(a)throw u}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var me=t(0),pe=_interopRequireDefault(me),ye=t(2),ge=t(1),he=t(3),_e=t(8),ve=t(7),be=t(4),Fe=_interopRequireDefault(be),we=t(15),ke=t(6);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t(169);var a=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(DetailInfoPage,pe.default.Component),o(DetailInfoPage,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,n,t)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(t):void 0})(DetailInfoPage.prototype.__proto__||Object.getPrototypeOf(DetailInfoPage.prototype),"_constructor",this).call(this,e),this.$$refs=new pe.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var a=this;this.__state=e||this.state||{},this.__props=n||this.props||{};var o=this.$prefix,u=(0,me.genCompid)(o+"$compid__67"),i=de(u,2),r=i[0],s=i[1],c=(0,me.useRouter)().params.id,l=pe.default.getStorageSync(ke.UserInfo),f=(0,me.useState)({"title":"","time":"","image":"","user_name":"","classifyName":[],"detail":"","show_full_address":"","location":"","map_address_name":"","map_street_name":"","tel_str":"","show_ajax_btn":!1,"id":0,"is_collect":0,"view_images":[],"is_end":0,"is_check":0,"has_top":0,"show_complaint":{"show_complaint":0,"tips_message":""},"top_info":{"is_top":""}}),d=de(f,2),m=d[0],p=d[1],y=(0,me.useState)(!1),g=de(y,2),h=g[0],_=g[1],v=(0,me.useState)(""),b=de(v,2),F=b[0],w=b[1],k=(0,me.useState)(!1),x=de(k,2),S=x[0],T=x[1],C=(0,me.useState)(0),P=de(C,2),I=P[0],M=P[1],j=(0,me.useState)(""),A=de(j,2),O=A[0],D=A[1],$=(0,me.useState)(!1),R=de($,2),N=R[0],E=R[1],U=(0,me.useState)(!1),B=de(U,2),H=B[0],L=B[1],G=(0,me.useState)(!1),q=de(G,2),z=q[0],V=(q[1],(0,me.useState)("")),J=de(V,2),K=J[0],W=J[1],Q=(0,me.useState)(!1),X=de(Q,2),Y=X[0],Z=X[1],ee=(0,me.useState)(!0),ne=de(ee,2),te=ne[0],oe=ne[1],ae=(0,he.useSelector)(function(e){return e.User.login}),ue=(0,me.useState)([]),ie=de(ue,2);function ob(e){pe.default.navigateTo({"url":e})}function rb(){return ae||(pe.default.navigateTo({"url":ge.CODEAUTHPATH}),0)}ie[0],ie[1],(0,me.useDidShow)(function(){S?T(!1):re()});var re=function getRecruitInfo(){var e={"type":"job","infoId":c};(ae?ye.jobInfoAction:ye.jobNoUserInfoAction)(e).then(function(e){se(e,function(){T(!1),p(e.result),W(e.result.tel_str),oe(e.result.show_ajax_btn),pe.default.setNavigationBarTitle({"title":e.result.title}),M(e.result.is_collect),l.userId===e.result.user_id?D("own"):D(e.errcode)})})},se=function detailGetTelAction(e,n){if("ok"==e.errcode||"end"==e.errcode||"ajax"==e.errcode)n&&n();else if("end"==e.errcode)(0,Fe.default)(e.errmsg);else if("auth_not_pass"==e.errcode||"to_auth"==e.errcode)pe.default.showModal({"title":"温馨提示","content":e.errmsg,"success":function success(e){e.confirm?pe.default.navigateTo({"url":"/pages/realname/index"}):pe.default.navigateBack()}});else if("none_tel"==e.errcode)pe.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"返回列表","confirmText":"绑定手机","success":function success(e){e.confirm?pe.default.navigateTo({"url":"/pages/userinfo/add/index"}):e.cancel&&pe.default.navigateBack()}});else if("get_integral"==e.errcode)pe.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"返回列表","confirmText":"获取积分","success":function success(e){e.confirm?pe.default.navigateTo({"url":"/pages/getintegral/index"}):e.cancel&&pe.default.navigateBack()}});else if("reload"==e.errcode)pe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"confirmText":"确定","success":function success(e){e.confirm&&re()}});else if("goback"==e.errcode){var t=pe.default.getCurrentPages();pe.default.showModal({"title":"温馨提示","content":e.errmsg,"confirmText":"确定","showCancel":!1,"success":function success(e){e.confirm&&(1<t.length?pe.default.navigateBack():pe.default.reLaunch({"url":"/pages/index/index"}))}})}else pe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"confirmText":"我知道了","success":function success(){pe.default.navigateBack()}})};function tb(){if(rb()){var e={"type":"job","infoId":m.id};(0,ye.jobGetTelAction)(e).then(function(e){se(e,function(){T(!0),W(e.tel),Z(!0),oe(!1)})})}}function ub(){"end"===O?pe.default.showModal({"title":"温馨提示","content":"该招工信息已招到，暂时不能投诉","showCancel":!1}):H?pe.default.showModal({"title":"提示","content":"您已投诉该信息，请勿重复操作！","showCancel":!1}):Y?_(!0):m.show_ajax_btn?(0,Fe.default)("请查看完整的手机号码后再操作！"):2!==m.is_end&&m.show_complaint.show_complaint?_(!0):pe.default.showModal({"title":"提示","content":"您已投诉该信息，请勿重复投诉！","showCancel":!1})}function xb(){(0,ye.jobEndStatusAction)(m.id).then(function(e){"ok"===e.errcode?((0,Fe.default)(e.errmsg),E(!1),T(!0)):(0,Fe.default)(e.errmsg)})}(0,me.useShareAppMessage)(function(){return fe({},(0,ve.getUserShareMessage)())}),this.anonymousFunc0=function(){return tb()},this.anonymousFunc1=function(){pe.default.makePhoneCall({"phoneNumber":K})},this.anonymousFunc2=ub,this.anonymousFunc3=function(){return ob("/subpackage/pages/anti-fraud/index")},this.anonymousFunc4=function(){return ob("/pages/static/notice/index?id=32")},this.anonymousFunc6=function handleMap(){var e=m.location.split(",");T(!0),pe.default.openLocation({"latitude":parseFloat(e[1]),"longitude":parseFloat(e[0]),"name":m.map_address_name,"address":m.map_street_name,"scale":18})},this.anonymousFunc7=function(){return ob("/subpackage/pages/download/index")},this.anonymousFunc8=xb,this.anonymousFunc9=function(){return ob("/pages/topping/index?id="+m.id+"&type=1")},this.anonymousFunc10=xb,this.anonymousFunc11=function(){return function handleTopping(e){if(e.has_top){var n=parseInt(e.top_info.end_time);if((new Date).getTime()/1e3<n){pe.default.showLoading({"title":"正在执行操作"});var t={"infoId":c,"status":"0"==e.toping?"1":"0"};return(0,ye.jobUpdateTopStatusAction)(t).then(function(e){if("ok"===e.errcode)(0,Fe.default)(e.errmsg),T(!0),E(!0);else{if("auth_forbid"===e.errcode)return void pe.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"取消","confirmText":"去实名","success":function success(e){e.confirm&&pe.default.navigateTo({"url":"/pages/realname/index?backtwo=backtwo"})}});if("member_forbid"==e.errcode)return void pe.default.showModal({"title":"温馨提示","content":"mydata.errmsg","cancelText":"取消","confirmText":"联系客服","success":function success(e){if(e.confirm){var n=ge.SERVERPHONE;pe.default.makePhoneCall({"phoneNumber":n})}}});pe.default.showToast({"title":e.errmsg,"icon":"none","duration":1500})}}),!1}}ob("/pages/topping/index?id="+e.id)}(m)},this.anonymousFunc12=function collection(){rb()&&(0,ye.recruitListCancelCollectionAction)(m.id.toString()).then(function(e){(0,Fe.default)(e.errmsg),"add"===e.action?M(1):M(0)})},this.anonymousFunc13=ub,this.anonymousFunc14=function(){return tb()},this.anonymousFunc15=function(){pe.default.makePhoneCall({"phoneNumber":K})};var ce=m.classifyName.map(function(e,n){return{"$loopState__temp2":n+n,"$original":(e={"$original":(0,me.internal_get_original)(e)}).$original}}),le=m.view_images.length?m.view_images.map(function(e,n){e={"$original":(0,me.internal_get_original)(e)};var t=m.view_images.length?n+n:null,o="ibzzz"+n;return a.anonymousFunc5Map[o]=function(){return function handleImage(e){T(!0),pe.default.previewImage({"current":e,"urls":[e]})}(e.$original)},{"$loopState__temp4":t,"_$indexKey":o,"$original":e.$original}}):[];return h&&me.propsManager.set({"display":h,"textarea":F,"handleTextarea":function handleTextarea(e){var n=e.detail.value;w(n)},"setComplaintModal":_,"handleSubmit":function handleSubmit(){if(!(0,_e.isVaildVal)(F,15,500))return(0,Fe.default)("输入内容不少于15个字且必须包含文字"),!1;var e={"content":F,"type":"job","infoId":m.id};(0,ye.publishComplainAction)(e).then(function(e){"ok"===e.errcode&&(0,we.SubscribeToNews)("complain",function(){(0,be.showModalTip)({"tips":e.errmsg,"callback":function callback(){_(!1),L(!0)}})})})}},s,r),Object.assign(this.__state,{"data":m,"loopArray71":ce,"loopArray72":le,"$compid__67":s,"resCode":O,"editPhone":te,"IMGCDNURL":ge.IMGCDNURL,"again":z,"stopHiring":N,"isCollection":I,"ISCANSHARE":ge.ISCANSHARE,"complaintModal":h,"phone":K}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc5Map[e]&&(n=this.anonymousFunc5Map)[e].apply(n,o)}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}},{"key":"anonymousFunc12","value":function anonymousFunc12(){}},{"key":"anonymousFunc13","value":function anonymousFunc13(){}},{"key":"anonymousFunc14","value":function anonymousFunc14(){}},{"key":"anonymousFunc15","value":function anonymousFunc15(){}}]),DetailInfoPage);function DetailInfoPage(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,DetailInfoPage);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(DetailInfoPage.__proto__||Object.getPrototypeOf(DetailInfoPage)).apply(this,arguments));return e.config={"navigationBarTitleText":""},e.$usedState=["data","loopArray71","loopArray72","$compid__67","resCode","editPhone","IMGCDNURL","again","stopHiring","isCollection","ISCANSHARE","complaintModal","phone"],e.anonymousFunc5Map={},e.customComponents=["WechatNotice","Report"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11","anonymousFunc12","anonymousFunc13","anonymousFunc14","anonymousFunc15"],a.$$componentPath="pages/detail/info/index",a.config={"navigationBarTitleText":""},n.default=a,Page(t(0).default.createComponent(a,!0))},"169":function(e,n,t){}},[[168,0,1]]]);
>>>>>>> 0e5be846c916f829861e9a8cfd5d82206f24c32e
