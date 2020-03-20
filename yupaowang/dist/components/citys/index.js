<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[4],{"119":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var R=function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function sliceIterator(n,t){var e=[],o=!0,r=!1,i=void 0;try{for(var a,u=n[Symbol.iterator]();!(o=(a=u.next()).done)&&(e.push(a.value),!t||e.length!==t);o=!0);}catch(n){r=!0,i=n}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(n,t,e){return t&&defineProperties(n.prototype,t),e&&defineProperties(n,e),n};function defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var E=e(0),T=_interopRequireDefault(E),L=e(1),H=e(3),N=_interopRequireDefault(e(8)),U=e(9);function _interopRequireDefault(n){return n&&n.__esModule?n:{"default":n}}e(120);var r=(function _inherits(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{"constructor":{"value":n,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(Cities,T.default.Component),o(Cities,[{"key":"_constructor","value":function _constructor(n){(function get(n,t,e){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,t);if(void 0===o){var r=Object.getPrototypeOf(n);return null===r?void 0:get(r,t,e)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(e):void 0})(Cities.prototype.__proto__||Object.getPrototypeOf(Cities.prototype),"_constructor",this).call(this,n),this.$$refs=new T.default.RefsArray}},{"key":"_createData","value":function _createData(n,t,e){var i=this;function Aa(n){var t=T.default.getStorageSync(H.HistoryCities);if(t){var e=n.id,o=t.findIndex(function(n){return n.id===e});-1!==o&&t.splice(o,1),t.unshift(n),t.splice(L.MAXCACHECITYNUM)}else t=[n];T.default.setStorageSync(H.HistoryCities,t),l&&l(n.city),c(!1)}this.__state=n||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=this.__props,r=o.data,a=void 0===r?[]:r,u=o.parent,s=void 0!==u&&u,c=o.userTapCityBtn,l=o.userChangeCity,y=o.area,p=o.userLoc,f=(0,E.useState)([]),m=R(f,2),_=m[0],d=m[1],h=(0,E.useState)(!1),v=R(h,2),g=v[0],C=v[1],F=(0,E.useState)(""),$=R(F,2),b=$[0],M=$[1],A=(0,E.useState)([]),w=R(A,2),O=w[0],S=w[1],j=(0,E.useState)([]),k=R(j,2),x=k[0],P=k[1];(0,E.useEffect)(function(){!function userRecentlyCities(){var n=T.default.getStorageSync(H.HistoryCities);if(n&&p.id)return n.splice(L.MAXCACHECITYNUM-1),d(n);d(n)}();var n=(0,U.objDeepCopy)(N.default),i=[];n.shift(),n.map(function(n){if(n.has_children){for(var t=n.children,e=0;e<t.length;e++)if(s||0!==e){var o={"id":t[e].id,"pid":t[e].pid,"city":t[e].name,"ad_name":t[e].ad_name,"city_name":n.name+"-"+t[e].name};i.push(o)}}else{var r={"id":n.id,"pid":n.pid,"city":n.name,"ad_name":n.ad_name,"city_name":n.name};i.push(r)}}),S(i),P(i)},[]),this.anonymousFunc0=function(){return function onInputFocus(){C(!0)}()},this.anonymousFunc1=function(n){return function userEnterCity(n){var t=n.detail.value;M(t);var e=x.filter(function(n){return-1!==n.city_name.indexOf(t)});S(e)}(n)},this.anonymousFunc2=function(){return function userClearContent(){M(""),C(!1)}()},this.anonymousFunc3=function(){return c(!1)};var z=_.map(function(n,t){var e="rec"+(n={"$original":(0,E.internal_get_original)(n)}).$original.id,o="jzzzz"+t;return i.anonymousFunc4Map[o]=function(){return Aa(n.$original)},{"$loopState__temp2":e,"_$indexKey":o,"$original":n.$original}}),D=a.map(function(n,r){return n={"$original":(0,E.internal_get_original)(n)},{"$loopState__temp4":r+n.$original[0].id,"$anonymousCallee__6":n.$original.map(function(n,t){var e=t+(n={"$original":(0,E.internal_get_original)(n)}).$original.id,o="bazzz"+r+"-"+t;return i.anonymousFunc5Map[o]=function(){return Aa(n.$original)},{"$loopState__temp6":e,"_$indexKey2":o,"$original":n.$original}}),"$original":n.$original}}),I=g?O.map(function(n,t){n={"$original":(0,E.internal_get_original)(n)};var e="bbzzz"+t;return i.anonymousFunc6Map[e]=function(){return function userTapInputCity(n){C(!1),delete n.city_name,Aa(n)}(n.$original)},{"_$indexKey3":e,"$original":n.$original}}):[];return Object.assign(this.__state,{"loopArray17":z,"loopArray18":D,"loopArray19":I,"text":b,"IMGCDNURL":L.IMGCDNURL,"userLoc":p,"recentlyCities":_,"data":a,"show":g,"inputCity":O,"area":y}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(n){for(var t,e=arguments.length,o=Array(1<e?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return this.anonymousFunc4Map[n]&&(t=this.anonymousFunc4Map)[n].apply(t,o)}},{"key":"anonymousFunc5","value":function anonymousFunc5(n){for(var t,e=arguments.length,o=Array(1<e?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return this.anonymousFunc5Map[n]&&(t=this.anonymousFunc5Map)[n].apply(t,o)}},{"key":"anonymousFunc6","value":function anonymousFunc6(n){for(var t,e=arguments.length,o=Array(1<e?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return this.anonymousFunc6Map[n]&&(t=this.anonymousFunc6Map)[n].apply(t,o)}}]),Cities);function Cities(){!function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Cities);var n=function _possibleConstructorReturn(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(Cities.__proto__||Object.getPrototypeOf(Cities)).apply(this,arguments));return n.$usedState=["loopArray17","loopArray18","loopArray19","text","IMGCDNURL","userLoc","recentlyCities","data","show","inputCity","area","parent","userTapCityBtn","userChangeCity"],n.anonymousFunc4Map={},n.anonymousFunc5Map={},n.anonymousFunc6Map={},n.customComponents=[],n}r.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6"],r.$$componentPath="components/citys/index",t.default=r,Component(e(0).default.createComponent(r))},"120":function(n,t,e){}},[[119,0,1]]]);
=======
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

var _index2 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");

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

    _this.$usedState = ["loopArray17", "loopArray18", "loopArray19", "text", "IMGCDNURL", "userLoc", "recentlyCities", "data", "show", "inputCity", "area", "parent", "userTapCityBtn", "userChangeCity"];
    _this.anonymousFunc4Map = {};
    _this.anonymousFunc5Map = {};
    _this.anonymousFunc6Map = {};
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
          _props$parent = _props.parent,
          parent = _props$parent === undefined ? false : _props$parent,
          userTapCityBtn = _props.userTapCityBtn,
          userChangeCity = _props.userChangeCity,
          area = _props.area,
          userLoc = _props.userLoc;
      // 最近访问城市数据

      var _useState = (0, _taroWeapp.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          recentlyCities = _useState2[0],
          setRecentlyCities = _useState2[1];
      // 是否显示input过滤城市


      var _useState3 = (0, _taroWeapp.useState)(false),
          _useState4 = _slicedToArray(_useState3, 2),
          show = _useState4[0],
          setShow = _useState4[1];
      // 输入框内容


      var _useState5 = (0, _taroWeapp.useState)(''),
          _useState6 = _slicedToArray(_useState5, 2),
          text = _useState6[0],
          setText = _useState6[1];

      var _useState7 = (0, _taroWeapp.useState)([]),
          _useState8 = _slicedToArray(_useState7, 2),
          inputCity = _useState8[0],
          setInputCity = _useState8[1];

      var _useState9 = (0, _taroWeapp.useState)([]),
          _useState10 = _slicedToArray(_useState9, 2),
          saveAreaData = _useState10[0],
          setSaveAreaData = _useState10[1];
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
        userChangeCity && userChangeCity(city.city);
        userTapCityBtn(false);
        //userRecentlyCities()
      };
      // 用户点击搜索数据
      var userTapInputCity = function userTapInputCity(item) {
        setShow(false);
        delete item['city_name'];
        userTapCity(item);
      };
      // 用户最新选择城市
      var userRecentlyCities = function userRecentlyCities() {
        var historyCities = _taroWeapp2.default.getStorageSync(_store.HistoryCities);
        if (historyCities) {
          if (userLoc.id) {
            historyCities.splice(_index.MAXCACHECITYNUM - 1);
            setRecentlyCities(historyCities);
            return;
          }
        }
        setRecentlyCities(historyCities);
      };
      // 初始化城市数据
      (0, _taroWeapp.useEffect)(function () {
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
      var loopArray17 = recentlyCities.map(function (item, __index4) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp2 = 'rec' + item.$original.id;
        var _$indexKey = "jzzzz" + __index4;
        _this2.anonymousFunc4Map[_$indexKey] = function () {
          return userTapCity(item.$original);
        };
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      var loopArray18 = data.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp4 = index + item.$original[0].id;
        var $anonymousCallee__6 = item.$original.map(function (d, key) {
          d = {
            $original: (0, _taroWeapp.internal_get_original)(d)
          };
          var $loopState__temp6 = key + d.$original.id;
          var _$indexKey2 = "bazzz" + index + "-" + key;
          _this2.anonymousFunc5Map[_$indexKey2] = function () {
            return userTapCity(d.$original);
          };
          return {
            $loopState__temp6: $loopState__temp6,
            _$indexKey2: _$indexKey2,
            $original: d.$original
          };
        });
        return {
          $loopState__temp4: $loopState__temp4,
          $anonymousCallee__6: $anonymousCallee__6,
          $original: item.$original
        };
      });
      var loopArray19 = show ? inputCity.map(function (item, __index6) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var _$indexKey3 = "bbzzz" + __index6;
        _this2.anonymousFunc6Map[_$indexKey3] = function () {
          return userTapInputCity(item.$original);
        };
        return {
          _$indexKey3: _$indexKey3,
          $original: item.$original
        };
      }) : [];
      Object.assign(this.__state, {
        loopArray17: loopArray17,
        loopArray18: loopArray18,
        loopArray19: loopArray19,
        text: text,
        IMGCDNURL: _index.IMGCDNURL,
        userLoc: userLoc,
        recentlyCities: recentlyCities,
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
    value: function anonymousFunc4(_$indexKey) {
      var _anonymousFunc4Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc4Map[_$indexKey] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(_$indexKey2) {
      var _anonymousFunc5Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc5Map[_$indexKey2] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey2].apply(_anonymousFunc5Map, e);
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(_$indexKey3) {
      var _anonymousFunc6Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc6Map[_$indexKey3] && (_anonymousFunc6Map = this.anonymousFunc6Map)[_$indexKey3].apply(_anonymousFunc6Map, e);
    }
  }]);

  return Cities;
}(_taroWeapp2.default.Component);

Cities.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6"];
Cities.$$componentPath = "components/citys/index";
exports.default = Cities;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Cities));

/***/ })

},[["./src/components/citys/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
