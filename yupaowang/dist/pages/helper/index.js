(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/helper/index"],{

/***/ "./src/pages/helper/index.scss":
/*!*************************************!*\
  !*** ./src/pages/helper/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: ENOENT: no such file or directory, open 'D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\src\\pages\\helper\\index.scss'\n    at D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at Array.<anonymous> (D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\loader-runner\\lib\\LoaderRunner.js:203:19)\n    at Storage.finished (D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:55:16)\n    at ReadFileContext.<anonymous> (D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:91:9)\n    at ReadFileContext.callback (D:\\lpyjsxin\\TaroTs-YuPaoWang\\yupaowang\\node_modules\\graceful-fs\\graceful-fs.js:115:16)\n    at FSReqCallback.readFileAfterOpen [as oncomplete] (fs.js:256:13)");

/***/ }),

/***/ "./src/pages/helper/index.tsx":
/*!************************************!*\
  !*** ./src/pages/helper/index.tsx ***!
  \************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/pages/helper/index.scss");

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helper = function (_Taro$Component) {
  _inherits(Helper, _Taro$Component);

  function Helper() {
    _classCallCheck(this, Helper);

    var _this = _possibleConstructorReturn(this, (Helper.__proto__ || Object.getPrototypeOf(Helper)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '帮助中心',
      enablePullDownRefresh: true,
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: 'dark'
    };

    _this.$usedState = ["helplist", "loopArray25", "IMGCDNURL", "open"];
    _this.anonymousFunc1Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Helper, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Helper.prototype.__proto__ || Object.getPrototypeOf(Helper.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
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

      var _useState = (0, _taroWeapp.useState)({ list: [] }),
          _useState2 = _slicedToArray(_useState, 2),
          open = _useState2[0],
          setopen = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)({ listCons: [] }),
          _useState4 = _slicedToArray(_useState3, 2),
          helplist = _useState4[0],
          sethelplist = _useState4[1];

      var _useState5 = (0, _taroWeapp.useState)(1),
          _useState6 = _slicedToArray(_useState5, 2),
          page = _useState6[0],
          setpage = _useState6[1];
      // const [system,setsystem] = useState<string>("")


      var handleClick = function handleClick(index) {
        var open_item = JSON.parse(JSON.stringify(open.list));
        open_item[index] = !open_item[index];
        console.log(open_item);
        setopen({ list: open_item });
      };
      (0, _taroWeapp.useEffect)(function () {
        _taroWeapp2.default.getSystemInfo({
          success: function success(res) {
            console.log(res);
          }
        }).then(function (res) {
          var system = '';
          if (res.system.includes('iOS')) {
            system = 'ios';
          } else {
            system = 'android';
          }
          var data = {
            page: page,
            system: system
          };
          (0, _index2.getHelperList)(data).then(function (res) {
            var judge = [];
            if (res.errcode == 'ok') {
              res.lists.map(function (item, index) {
                judge[index] = false;
                console.log(item);
              });
              sethelplist(_extends({}, helplist, { listCons: res.lists }));
              setopen(_extends({}, open, { list: judge }));
            }
          });
        });
      }, [page]);
      var getNextPageData = function getNextPageData() {
        _taroWeapp2.default.showNavigationBarLoading();
        setpage(page + 1);
      };
      this.anonymousFunc0 = function () {
        return getNextPageData();
      };
      var loopArray25 = helplist.listCons.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var _$indexKey = "bczzz" + index;
        _this2.anonymousFunc1Map[_$indexKey] = function () {
          handleClick(index);
        };
        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      Object.assign(this.__state, {
        helplist: helplist,
        loopArray25: loopArray25,
        IMGCDNURL: _index.IMGCDNURL,
        open: open
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
    value: function anonymousFunc1(_$indexKey) {
      var _anonymousFunc1Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc1Map[_$indexKey] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey].apply(_anonymousFunc1Map, e);
    }
  }]);

  return Helper;
}(_taroWeapp2.default.Component);

Helper.$$events = ["anonymousFunc0", "anonymousFunc1"];
Helper.$$componentPath = "pages/helper/index";
Helper.config = { navigationBarTitleText: '帮助中心', enablePullDownRefresh: true, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: 'dark' };
exports.default = Helper;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Helper, true));

/***/ })

},[["./src/pages/helper/index.tsx","runtime","vendors","common"]]]);