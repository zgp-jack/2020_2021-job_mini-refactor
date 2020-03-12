(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/citys/index"],{

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

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _area = __webpack_require__(/*! ../../models/area */ "./src/models/area.ts");

var _area2 = _interopRequireDefault(_area);

__webpack_require__(/*! ./index.scss */ "./src/components/citys/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cities = function (_Taro$Component) {
  _inherits(Cities, _Taro$Component);

  function Cities() {
    _classCallCheck(this, Cities);

    var _this = _possibleConstructorReturn(this, (Cities.__proto__ || Object.getPrototypeOf(Cities)).apply(this, arguments));

    _this.$usedState = ["loopArray21", "loopArray22", "IMGCDNURL", "data", "showInputCityList", "inputCity", "hot", "parent"];
    _this.anonymousFunc1Map = {};
    _this.anonymousFunc2Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Cities, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Cities.prototype.__proto__ || Object.getPrototypeOf(Cities.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
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
          _props$hot = _props.hot,
          hot = _props$hot === undefined ? false : _props$hot,
          onUserTapCity = _props.onUserTapCity,
          _props$parent = _props.parent,
          parent = _props$parent === undefined ? false : _props$parent,
          onUserTapInputCity = _props.onUserTapInputCity,
          _props$showInputCityL = _props.showInputCityList,
          showInputCityList = _props$showInputCityL === undefined ? false : _props$showInputCityL;

      var _useState = (0, _taroWeapp.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          inputCity = _useState2[0],
          setInputCity = _useState2[1];

      var _useState3 = (0, _taroWeapp.useState)([]),
          _useState4 = _slicedToArray(_useState3, 2),
          saveAreaData = _useState4[0],
          setSaveAreaData = _useState4[1];
      // 用户点击城市


      var userTapCity = function userTapCity(city) {
        var historyCities = _taroWeapp2.default.getStorageSync(_store.HistoryCities);
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
        // 储存最新的用户点击历史城市数据
        _taroWeapp2.default.setStorageSync(_store.HistoryCities, historyCities);
        onUserTapCity && _this2.__props.onUserTapCity();
      };
      // 用户点击搜索数据
      var userTapInputCity = function userTapInputCity(item) {
        delete item['city_name'];
        userTapCity(item);
        onUserTapInputCity && _this2.__props.onUserTapInputCity();
      };
      // 初始化城市数据
      (0, _taroWeapp.useEffect)(function () {
        var areaObj = [];
        _area2.default.shift();
        _area2.default.map(function (item) {
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
        var newData = saveAreaData.filter(function (item) {
          return item.city_name.indexOf(val) !== -1;
        });
        setInputCity(newData);
      };
      this.anonymousFunc0 = function (e) {
        return userEnterCity(e);
      };
      var loopArray21 = data.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = index + item.$original[0].id;
        var $anonymousCallee__7 = item.$original.map(function (d, key) {
          d = {
            $original: (0, _taroWeapp.internal_get_original)(d)
          };
          var $loopState__temp4 = key + d.$original.id;
          var _$indexKey = "jzzzz" + index + "-" + key;
          _this2.anonymousFunc1Map[_$indexKey] = function () {
            return userTapCity(d.$original);
          };
          return {
            $loopState__temp4: $loopState__temp4,
            _$indexKey: _$indexKey,
            $original: d.$original
          };
        });
        return {
          $loopState__temp2: $loopState__temp2,
          $anonymousCallee__7: $anonymousCallee__7,
          $original: item.$original
        };
      });
      var loopArray22 = showInputCityList ? inputCity.map(function (item, __index2) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var _$indexKey2 = "bazzz" + __index2;
        _this2.anonymousFunc2Map[_$indexKey2] = function () {
          return userTapInputCity(item.$original);
        };
        return {
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray21: loopArray21,
        loopArray22: loopArray22,
        IMGCDNURL: _index.IMGCDNURL,
        data: data,
        showInputCityList: showInputCityList,
        inputCity: inputCity
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
    value: function anonymousFunc1(_$indexKey) {
      var _anonymousFunc1Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc1Map[_$indexKey] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(_$indexKey2) {
      var _anonymousFunc2Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc2Map[_$indexKey2] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey2].apply(_anonymousFunc2Map, e);
    }
  }]);

  return Cities;
}(_taroWeapp2.default.Component);

Cities.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"];
Cities.$$componentPath = "components/citys/index";
exports.default = Cities;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Cities));

/***/ })

},[["./src/components/citys/index.tsx","runtime","taro","vendors","common"]]]);