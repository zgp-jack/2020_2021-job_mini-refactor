(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/leavemessage/index"],{

/***/ "./src/pages/leavemessage/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/leavemessage/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open 'D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\src\\pages\\leavemessage\\index.scss'\n    at D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at Array.<anonymous> (D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\loader-runner\\lib\\LoaderRunner.js:203:19)\n    at Storage.finished (D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:55:16)\n    at ReadFileContext.<anonymous> (D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:91:9)\n    at ReadFileContext.callback (D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\graceful-fs\\graceful-fs.js:115:16)\n    at FSReqCallback.readFileAfterOpen [as oncomplete] (fs.js:256:13)");

/***/ }),

/***/ "./src/pages/leavemessage/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/leavemessage/index.tsx ***!
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

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index3 = _interopRequireDefault(_index2);

__webpack_require__(/*! ./index.scss */ "./src/pages/leavemessage/index.scss");

var _index4 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index5 = _interopRequireDefault(_index4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Leavemessage = function (_Taro$Component) {
  _inherits(Leavemessage, _Taro$Component);

  function Leavemessage() {
    _classCallCheck(this, Leavemessage);

    var _this = _possibleConstructorReturn(this, (Leavemessage.__proto__ || Object.getPrototypeOf(Leavemessage)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '鱼泡网-意见反馈',
      enablePullDownRefresh: false,
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: 'dark'
    };

    _this.$usedState = ["$compid__52", "$compid__53", "showNameAndPhone", "phone", "buttonAble", "buttonContent"];
    _this.customComponents = ["WechatNotice", "WordsTotal", "ImageView"];
    return _this;
  }

  _createClass(Leavemessage, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Leavemessage.prototype.__proto__ || Object.getPrototypeOf(Leavemessage.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__52"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__52 = _genCompid2[0],
          $compid__52 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__53"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__53 = _genCompid4[0],
          $compid__53 = _genCompid4[1];

      var _useState = (0, _taroWeapp.useState)(0),
          _useState2 = _slicedToArray(_useState, 2),
          showNums = _useState2[0],
          setshowNums = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)({
        username: "",
        tel: "",
        code: "",
        content: ""
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          showNameAndPhone = _useState4[0],
          setshowNameAndPhone = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)(false),
          _useState6 = _slicedToArray(_useState5, 2),
          buttonAble = _useState6[0],
          setbuttonAble = _useState6[1];

      var _useState7 = (0, _taroWeapp.useState)("获取验证码"),
          _useState8 = _slicedToArray(_useState7, 2),
          buttonContent = _useState8[0],
          setbuttonContent = _useState8[1];

      var _useState9 = (0, _taroWeapp.useState)({ images: [] }),
          _useState10 = _slicedToArray(_useState9, 2),
          showImages = _useState10[0],
          setshowImages = _useState10[1];

      var router = (0, _taroWeapp.useRouter)();
      var _router$params = router.params,
          phone = _router$params.phone,
          username = _router$params.username;

      var reg = new RegExp("[\\u4E00-\\u9FFF]+");
      var maximage = 9;
      (0, _taroWeapp.useEffect)(function () {
        var peopleProperty = {
          username: username,
          tel: phone,
          code: "",
          content: ""
        };
        setshowNameAndPhone(_extends({}, showNameAndPhone, peopleProperty));
      }, []);
      var userUploadImg = function userUploadImg() {
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

        (0, _index3.default)().then(function (res) {
          var imageItem = {
            url: res.url,
            httpurl: res.httpurl
          };
          if (i === -1) {
            var image = JSON.parse(JSON.stringify(showImages.images));
            image.push(imageItem);
            setshowImages({ images: image });
          } else {
            var _image = JSON.parse(JSON.stringify(showImages.images));
            _image[i] = imageItem;
            setshowImages({ images: _image });
          }
        });
      };
      var getNameandPhone = function getNameandPhone(e, property) {
        var nameAndPhone = JSON.parse(JSON.stringify(showNameAndPhone));
        nameAndPhone[property] = e.detail.value;
        console.log(nameAndPhone);
        setshowNameAndPhone(_extends({}, showNameAndPhone, nameAndPhone));
        if (property == "content") {
          setshowNums(e.detail.value.length);
        }
      };
      var getCommit = function getCommit() {
        if (showNameAndPhone.content.length < 15 || !reg.test(showNameAndPhone.content)) {
          (0, _index5.default)('输入内容不少于15个字且必须包含文字！');
          return;
        }
        if (showNameAndPhone.username == "" || !reg.test(showNameAndPhone.username)) {
          (0, _index5.default)('请正确输入联系人且必须包含汉字！');
          return;
        }
        if (showNameAndPhone.tel == '' || showNameAndPhone.tel.length != 11) {
          (0, _index5.default)('请输入正确的手机号！');
          return;
        }
        var imglist = showImages.images.map(function (item) {
          return item.url;
        });
        var showCommit = _extends({
          images: imglist
        }, showNameAndPhone);
        (0, _index.getCommitCons)(showCommit).then(function (res) {
          (0, _index4.ShowActionModel)({ msg: res.errmsg, success: function success() {
              _taroWeapp2.default.navigateBack({ delta: 1 });
            } });
        });
      };
      var getCode = function getCode() {
        if (showNameAndPhone.tel == '' || showNameAndPhone.tel.length != 11) {
          (0, _index5.default)('请输入正确的手机号！');
          return;
        }
        var codeContent = {
          sendType: "have",
          tel: showNameAndPhone.tel
        };
        setbuttonAble(true);
        (0, _index.getVerifyCode)(codeContent).then(function (res) {
          if (res.errcode == "ok") {
            (0, _index5.default)(res.errmsg);
            validateBtn(res.refresh);
          } else (0, _index5.default)(res.errmsg);
        });
      };
      var validateBtn = function validateBtn(refresh) {
        var time = refresh ? refresh : 60;
        var timer = setInterval(function () {
          if (time == 0) {
            clearInterval(timer);
            setbuttonContent("获取验证码");
            setbuttonAble(false);
          } else {
            setbuttonContent(time + "秒后重试");
            time--;
          }
        }, 1000);
      };
      this.anonymousFunc0 = function (e) {
        getNameandPhone(e, "content");
      };
      this.anonymousFunc1 = function (e) {
        getNameandPhone(e, "username");
      };
      this.anonymousFunc2 = function (e) {
        getNameandPhone(e, 'tel');
      };
      this.anonymousFunc3 = function (e) {
        getNameandPhone(e, 'code');
      };
      this.anonymousFunc4 = function () {
        return getCode();
      };
      this.anonymousFunc5 = function () {
        return getCommit();
      };
      _taroWeapp.propsManager.set({
        "num": showNums
      }, $compid__52, $prevCompid__52);
      _taroWeapp.propsManager.set({
        "images": showImages.images,
        "userUploadImg": userUploadImg,
        "max": maximage
      }, $compid__53, $prevCompid__53);
      Object.assign(this.__state, {
        $compid__52: $compid__52,
        $compid__53: $compid__53,
        showNameAndPhone: showNameAndPhone,
        phone: phone,
        buttonAble: buttonAble,
        buttonContent: buttonContent
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
    value: function anonymousFunc5(e) {
      ;
    }
  }]);

  return Leavemessage;
}(_taroWeapp2.default.Component);

Leavemessage.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5"];
Leavemessage.$$componentPath = "pages/leavemessage/index";
Leavemessage.config = { navigationBarTitleText: '鱼泡网-意见反馈', enablePullDownRefresh: false, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: 'dark' };
exports.default = Leavemessage;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Leavemessage, true));

/***/ })

},[["./src/pages/leavemessage/index.tsx","runtime","vendors","common"]]]);