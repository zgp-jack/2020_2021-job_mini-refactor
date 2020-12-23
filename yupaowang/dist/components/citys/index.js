(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["components/citys/index"],{

/***/ "./src/components/citys/index.scss":
/*!*****************************************!*\
  !*** ./src/components/citys/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/citys/index.tsx":
/*!****************************************!*\
  !*** ./src/components/citys/index.tsx ***!
  \****************************************/
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

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _area = __webpack_require__(/*! ../../models/area */ "./src/models/area.ts");

var _area2 = _interopRequireDefault(_area);

var _index2 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _recruit = __webpack_require__(/*! ../../actions/recruit */ "./src/actions/recruit.ts");

__webpack_require__(/*! ./index.scss */ "./src/components/citys/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //获取发布招工信息action


var Cities = function (_Taro$Component) {
  _inherits(Cities, _Taro$Component);

  function Cities() {
    _classCallCheck(this, Cities);

    var _this = _possibleConstructorReturn(this, (Cities.__proto__ || Object.getPrototypeOf(Cities)).apply(this, arguments));

    _this.$usedState = ["loopArray50", "loopArray51", "loopArray52", "text", "IMGCDNURL", "recentlyCities", "userLoc", "data", "show", "inputCity", "area", "parent", "userTapCityBtn", "userChangeCity"];
    _this.anonymousFunc5Map = {};
    _this.anonymousFunc6Map = {};
    _this.anonymousFunc7Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Cities, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Cities.prototype.__proto__ || Object.getPrototypeOf(Cities.prototype), "_constructor", this).call(this, props);
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
      var _props = this.__props,
          _props$data = _props.data,
          data = _props$data === undefined ? [] : _props$data,
          _props$parent = _props.parent,
          parent = _props$parent === undefined ? false : _props$parent,
          userTapCityBtn = _props.userTapCityBtn,
          userChangeCity = _props.userChangeCity,
          area = _props.area,
          userLoc = _props.userLoc;
      // 最近访问城市数据

      var _useState = (0, _taroSwan.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          recentlyCities = _useState2[0],
          setRecentlyCities = _useState2[1];
      // 是否显示input过滤城市


      var _useState3 = (0, _taroSwan.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          show = _useState4[0],
          setShow = _useState4[1];
      // 输入框内容


      var _useState5 = (0, _taroSwan.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          text = _useState6[0],
          setText = _useState6[1];

      var _useState7 = (0, _taroSwan.useState)([]),
          _useState8 = _slicedToArray(_useState7, 2),
          inputCity = _useState8[0],
          setInputCity = _useState8[1];

      var _useState9 = (0, _taroSwan.useState)([]),
          _useState10 = _slicedToArray(_useState9, 2),
          saveAreaData = _useState10[0],
          setSaveAreaData = _useState10[1];
      // 获取dispatch分发action


      var dispatch = (0, _redux.useDispatch)();
      // 用户点击城市
      var userTapCity = function userTapCity(city) {
        var historyCities = _taroSwan2.default.getStorageSync(_store.HistoryCities);
        if (historyCities) {
          var id = city.id;
          var result = historyCities.findIndex(function (item) {
            return item.id === id;
          });
          if (result !== -1) {
            historyCities.splice(result, 1);
          }
          historyCities.unshift(city);
          historyCities.splice(_index.MAXCACHECITYNUM);
        } else {
          historyCities = [city];
        }
        // 用户切换城市
        dispatch((0, _recruit.setArea)({ name: city.city, ad_name: city.ad_name, id: city.id }));
        // 储存最新的用户点击历史城市数据
        _taroSwan2.default.setStorageSync(_store.HistoryCities, historyCities);
        userChangeCity && userChangeCity(city.city, city);
        userTapCityBtn(false);
        userRecentlyCities();
      };
      // 用户点击搜索数据
      var userTapInputCity = function userTapInputCity(item) {
        setShow(false);
        //delete item['city_name']
        userTapCity(item);
      };
      // 用户最新选择城市
      var userRecentlyCities = function userRecentlyCities() {
        // 获取历史城市数据列表
        var historyCities = _taroSwan2.default.getStorageSync(_store.HistoryCities);
        if (historyCities) {
          // 如果有用户定位位置信息
          if (userLoc.id) {
            // 在历史选择城市信息中有定位城市信息删除该信息，否则删除历史城市信息最后一条
            var LocIdex = historyCities.findIndex(function (item) {
              return item.id == userLoc.id;
            });
            if (LocIdex != -1) {
              historyCities.splice(LocIdex, 1);
            } else {
              historyCities.splice(_index.MAXCACHECITYNUM - 1);
            }
            console.log('我走进来了....');
            setRecentlyCities([].concat(_toConsumableArray(historyCities)));
            return;
          } else {
            setRecentlyCities(historyCities);
          }
        }
      };
      // 初始化城市数据
      (0, _taroSwan.useEffect)(function () {
        // 初始化用户定位城市
        userRecentlyCities();
        var copyArr = (0, _index2.objDeepCopy)(_area2.default);
        var areaObj = [];
        copyArr.shift();
        copyArr.map(function (item) {
          var child = item.has_children;
          if (child) {
            var childData = item.children;
            for (var i = 0; i < childData.length; i++) {
              if (!parent) {
                if (i === 0) {
                  continue;
                }
              }
              var obj = {
                id: childData[i].id,
                pid: childData[i].pid,
                city: childData[i].name,
                ad_name: childData[i].ad_name,
                city_name: item.name + '-' + childData[i].name
              };
              areaObj.push(obj);
            }
          } else {
            var _obj = {
              id: item.id,
              pid: item.pid,
              city: item.name,
              ad_name: item.ad_name,
              city_name: item.name
            };
            areaObj.push(_obj);
          }
        });
        setInputCity(areaObj);
        setSaveAreaData(areaObj);
      }, []);
      var userEnterCity = function userEnterCity(e) {
        var val = e.detail.value;
        setText(val);
        var newData = saveAreaData.filter(function (item) {
          return item.city_name.indexOf(val) !== -1;
        });
        setInputCity(newData);
      };
      // 输入框获取焦点
      var onInputFocus = function onInputFocus() {
        setShow(true);
      };
      // 用户清空输入框内容
      var userClearContent = function userClearContent() {
        setText('');
        setShow(false);
      };
      this.anonymousFunc0 = function () {
        return onInputFocus();
      };
      this.anonymousFunc1 = function (e) {
        return userEnterCity(e);
      };
      this.anonymousFunc2 = function () {
        return userClearContent();
      };
      this.anonymousFunc3 = function () {
        return userTapCityBtn(false);
      };
      this.anonymousFunc4 = function () {
        return userTapCity(userLoc);
      };
      var loopArray50 = recentlyCities.map(function (item, __index5) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp2 = 'rec' + item.privateOriginal.id;
        var _$indexKey = "fgzzz" + __index5;
        _this2.anonymousFunc5Map[_$indexKey] = function () {
          return userTapCity(item.privateOriginal);
        };
        return {
          loopState__temp2: loopState__temp2,
          _$indexKey: _$indexKey,
          privateOriginal: item.privateOriginal
        };
      });
      var loopArray51 = data.map(function (item, index) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp4 = index + item.privateOriginal[0].id;
        var anonymousCallee__7 = item.privateOriginal.map(function (d, key) {
          d = {
            privateOriginal: (0, _taroSwan.internal_get_original)(d)
          };
          var loopState__temp6 = key + d.privateOriginal.id;
          var _$indexKey2 = "fhzzz" + index + "-" + key;
          _this2.anonymousFunc6Map[_$indexKey2] = function () {
            return userTapCity(d.privateOriginal);
          };
          return {
            loopState__temp6: loopState__temp6,
            _$indexKey2: _$indexKey2,
            privateOriginal: d.privateOriginal
          };
        });
        return {
          loopState__temp4: loopState__temp4,
          anonymousCallee__7: anonymousCallee__7,
          privateOriginal: item.privateOriginal
        };
      });
      var loopArray52 = show ? inputCity.map(function (item, __index7) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var _$indexKey3 = "fizzz" + __index7;
        _this2.anonymousFunc7Map[_$indexKey3] = function () {
          return userTapInputCity(item.privateOriginal);
        };
        return {
          _$indexKey3: _$indexKey3,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray50: loopArray50,
        loopArray51: loopArray51,
        loopArray52: loopArray52,
        text: text,
        IMGCDNURL: _index.IMGCDNURL,
        recentlyCities: recentlyCities,
        userLoc: userLoc,
        data: data,
        show: show,
        inputCity: inputCity,
        area: area
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
    value: function anonymousFunc6(_$indexKey2) {
      var _anonymousFunc6Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc6Map[_$indexKey2] && (_anonymousFunc6Map = this.anonymousFunc6Map)[_$indexKey2].apply(_anonymousFunc6Map, e);
    }
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(_$indexKey3) {
      var _anonymousFunc7Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc7Map[_$indexKey3] && (_anonymousFunc7Map = this.anonymousFunc7Map)[_$indexKey3].apply(_anonymousFunc7Map, e);
    }
  }]);

  return Cities;
}(_taroSwan2.default.Component);

Cities.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7"];
Cities.$$componentPath = "components/citys/index";
exports.default = Cities;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Cities));

/***/ })

},[["./src/components/citys/index.tsx","runtime","vendors"]]]);