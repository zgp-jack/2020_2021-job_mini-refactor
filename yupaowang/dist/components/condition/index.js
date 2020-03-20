<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[5],{"84":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var j=function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function sliceIterator(n,t){var e=[],o=!0,r=!1,a=void 0;try{for(var i,u=n[Symbol.iterator]();!(o=(i=u.next()).done)&&(e.push(i.value),!t||e.length!==t);o=!0);}catch(n){r=!0,a=n}finally{try{!o&&u.return&&u.return()}finally{if(r)throw a}}return e}(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(n,t,e){return t&&defineProperties(n.prototype,t),e&&defineProperties(n,e),n};function defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var k=e(0),r=_interopRequireDefault(k),D=e(1),P=_interopRequireDefault(e(8)),R=_interopRequireDefault(e(5));function _interopRequireDefault(n){return n&&n.__esModule?n:{"default":n}}e(85);var a=(function _inherits(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{"constructor":{"value":n,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(Condition,r.default.Component),o(Condition,[{"key":"_constructor","value":function _constructor(n){(function get(n,t,e){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,t);if(void 0===o){var r=Object.getPrototypeOf(n);return null===r?void 0:get(r,t,e)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(e):void 0})(Condition.prototype.__proto__||Object.getPrototypeOf(Condition.prototype),"_constructor",this).call(this,n),this.$$refs=new r.default.RefsArray}},{"key":"_createData","value":function _createData(n,t,e){var r=this;this.__state=n||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,a=(0,k.genCompid)(o+"$compid__9"),i=j(a,2),u=i[0],c=i[1],s=this.__props.data;console.log(s);var l=(0,k.useState)(""),p=j(l,2),f=p[0],y=p[1],d=(0,k.useState)(0),_=j(d,2),m=_[0],h=_[1],v=(0,k.useState)(P.default[m].children),b=j(v,2),g=b[0],w=b[1],C=(0,k.useState)(0),F=j(C,2),$=F[0],A=F[1];(0,k.useEffect)(function(){w(P.default[m].children)},[m]);var O="area"===f;this.anonymousFunc1=function(){return function closeDrawer(){y("")}()},this.anonymousFunc3=function(n){return function onScrollAction(n){var t=n.detail.scrollTop;A(t)}(n)};var M=s?s.map(function(n,t){n={"$original":(0,k.internal_get_original)(n)};var e="bzzzz"+t;return r.anonymousFunc0Map[e]=function(){return function conditionItemClick(n){y(n)}(n.$original.id)},{"_$indexKey":e,"$original":n.$original}}):[],S=P.default.map(function(n,t){n={"$original":(0,k.internal_get_original)(n)};var e=(0,R.default)({"drawer-list-item overwords":!0,"drawer-list-item-active":t===m}),o="czzzz"+t;return r.anonymousFunc2Map[o]=function(){return function changeAreaIndex(n){h(n),A(0)}(t)},{"$loopState__temp3":e,"_$indexKey2":o,"$original":n.$original}});return k.propsManager.set({"show":O,"mask":!0,"onClose":this.anonymousFunc1},c,u),Object.assign(this.__state,{"anonymousState__temp":O,"loopArray7":M,"loopArray8":S,"$compid__9":c,"data":s,"IMGCDNURL":D.IMGCDNURL,"AREAS":P.default,"childAreaList":g,"scrollTop":$}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(n){for(var t,e=arguments.length,o=Array(1<e?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return this.anonymousFunc0Map[n]&&(t=this.anonymousFunc0Map)[n].apply(t,o)}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(n){for(var t,e=arguments.length,o=Array(1<e?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];return this.anonymousFunc2Map[n]&&(t=this.anonymousFunc2Map)[n].apply(t,o)}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}}]),Condition);function Condition(){!function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Condition);var n=function _possibleConstructorReturn(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(Condition.__proto__||Object.getPrototypeOf(Condition)).apply(this,arguments));return n.$usedState=["anonymousState__temp","loopArray7","loopArray8","$compid__9","data","IMGCDNURL","AREAS","childAreaList","scrollTop"],n.anonymousFunc0Map={},n.anonymousFunc2Map={},n.customComponents=["AtDrawer"],n}a.$$events=["anonymousFunc0","anonymousFunc2","anonymousFunc3"],a.$$componentPath="components/condition/index",t.default=a,Component(e(0).default.createComponent(a))},"85":function(n,t,e){}},[[84,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/condition/index"],{

/***/ "./src/components/condition/index.scss":
/*!*********************************************!*\
  !*** ./src/components/condition/index.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/condition/index.tsx":
/*!********************************************!*\
  !*** ./src/components/condition/index.tsx ***!
  \********************************************/
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

var _area = __webpack_require__(/*! ../../models/area */ "./src/models/area.ts");

var _area2 = _interopRequireDefault(_area);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./index.scss */ "./src/components/condition/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Condition = function (_Taro$Component) {
  _inherits(Condition, _Taro$Component);

  function Condition() {
    _classCallCheck(this, Condition);

    var _this = _possibleConstructorReturn(this, (Condition.__proto__ || Object.getPrototypeOf(Condition)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "loopArray7", "loopArray8", "$compid__9", "data", "IMGCDNURL", "AREAS", "childAreaList", "scrollTop"];
    _this.anonymousFunc0Map = {};
    _this.anonymousFunc2Map = {};
    _this.customComponents = ["AtDrawer"];
    return _this;
  }

  _createClass(Condition, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Condition.prototype.__proto__ || Object.getPrototypeOf(Condition.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__9"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__9 = _genCompid2[0],
          $compid__9 = _genCompid2[1];

      var data = this.__props.data;

      console.log(data);
      // * 当前展开项id

      var _useState = (0, _taroWeapp.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          current = _useState2[0],
          setCurrent = _useState2[1];
      // * 当前城市选择父级索引


      var _useState3 = (0, _taroWeapp.useState)(0),
          _useState4 = _slicedToArray(_useState3, 2),
          areaIndex = _useState4[0],
          setAreaIndex = _useState4[1];
      // * 当前展开的城市子集数据


      var _useState5 = (0, _taroWeapp.useState)(_area2.default[areaIndex].children),
          _useState6 = _slicedToArray(_useState5, 2),
          childAreaList = _useState6[0],
          setChildAreaList = _useState6[1];
      // * 切换后子集列表回到顶部


      var _useState7 = (0, _taroWeapp.useState)(0),
          _useState8 = _slicedToArray(_useState7, 2),
          scrollTop = _useState8[0],
          setScrollTop = _useState8[1];
      // * 点击选项展开内容


      var conditionItemClick = function conditionItemClick(id) {
        setCurrent(id);
      };
      // * 关闭抽屉
      var closeDrawer = function closeDrawer() {
        setCurrent('');
      };
      // * 城市索引更换
      var changeAreaIndex = function changeAreaIndex(i) {
        setAreaIndex(i);
        setScrollTop(0);
      };
      // * 获取城市子集数据
      (0, _taroWeapp.useEffect)(function () {
        setChildAreaList(_area2.default[areaIndex].children);
      }, [areaIndex]);
      var onScrollAction = function onScrollAction(e) {
        var top = e.detail.scrollTop;
        setScrollTop(top);
      };
      var anonymousState__temp = current === 'area';
      this.anonymousFunc1 = function () {
        return closeDrawer();
      };
      this.anonymousFunc3 = function (e) {
        return onScrollAction(e);
      };
      var loopArray7 = data ? data.map(function (item, __index0) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var _$indexKey = "bzzzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return conditionItemClick(item.$original.id);
        };
        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      var loopArray8 = _area2.default.map(function (item, index) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp3 = (0, _classnames2.default)({
          'drawer-list-item overwords': true,
          'drawer-list-item-active': index === areaIndex
        });
        var _$indexKey2 = "czzzz" + index;
        _this2.anonymousFunc2Map[_$indexKey2] = function () {
          return changeAreaIndex(index);
        };
        return {
          $loopState__temp3: $loopState__temp3,
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "show": anonymousState__temp,
        "mask": true,
        "onClose": this.anonymousFunc1
      }, $compid__9, $prevCompid__9);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray7: loopArray7,
        loopArray8: loopArray8,
        $compid__9: $compid__9,
        data: data,
        IMGCDNURL: _index.IMGCDNURL,
        AREAS: _area2.default,
        childAreaList: childAreaList,
        scrollTop: scrollTop
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
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
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }]);

  return Condition;
}(_taroWeapp2.default.Component);

Condition.$$events = ["anonymousFunc0", "anonymousFunc2", "anonymousFunc3"];
Condition.$$componentPath = "components/condition/index";
exports.default = Condition;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Condition));

/***/ })

},[["./src/components/condition/index.tsx","runtime","vendors","common"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
