<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[40],{"159":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var $=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var x=n(0),D=_interopRequireDefault(x),j=_interopRequireDefault(n(160)),k=_interopRequireDefault(n(5));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(161);var r=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Collection,D.default.Component),o(Collection,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0})(Collection.prototype.__proto__||Object.getPrototypeOf(Collection.prototype),"_constructor",this).call(this,e),this.$$refs=new D.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){var o=this;this.__state=e||this.state||{},this.__props=t||this.props||{};var r=this.$prefix,i=(0,x.genCompid)(r+"$compid__47"),a=$(i,2),l=a[0],u=a[1],c=(0,x.genCompid)(r+"$compid__48"),s=$(c,2),p=s[0],f=s[1],_=(0,x.useState)(1),d=$(_,2),v=d[0],y=d[1],g=(0,x.useState)(0),h=$(g,2),b=h[0],m=h[1],w=(0,x.useState)(0),C=$(w,2),O=C[0],P=C[1];(0,x.useReachBottom)(function(){m(b+1)}),(0,x.usePullDownRefresh)(function(){P(O+1)});var R=j.default.map(function(e,t){e={"privateOriginal":(0,x.internal_get_original)(e)};var n="ggzzz"+t;return o.anonymousFunc0Map[n]=function(){return function handleTable(e){m(0),P(0),y(e),D.default.setNavigationBarTitle({"title":j.default[e-1].title})}(e.privateOriginal.id)},{"_$indexKey":n,"loopState__temp2":(0,k.default)({"collection-tab-border":e.privateOriginal.id===v,"collection-tab-content":!0}),"loopState__temp4":(0,k.default)({"collection.active-text":e.privateOriginal.id===v}),"privateOriginal":e.privateOriginal}});return 1===v&&x.propsManager.set({"bottom":b,"initPage":O},u,l),1!==v&&x.propsManager.set({"bottom":b,"initPage":O},f,p),Object.assign(this.__state,{"loopArray62":R,"$compid__47":u,"$compid__48":f,"tab":j.default,"current":v}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(e){for(var t,n=arguments.length,o=Array(1<n?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return this.anonymousFunc0Map[e]&&(t=this.anonymousFunc0Map)[e].apply(t,o)}}]),Collection);function Collection(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Collection);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Collection.__proto__||Object.getPrototypeOf(Collection)).apply(this,arguments));return e.config={"navigationBarTitleText":"我收藏的招工信息","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["loopArray62","$compid__47","$compid__48","tab","current"],e.anonymousFunc0Map={},e.customComponents=["Auth","RecruitList","ResumeList"],e}r.$$events=["anonymousFunc0"],r.$$componentPath="pages/collection/index",r.config={"navigationBarTitleText":"我收藏的招工信息","enablePullDownRefresh":!0,"navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},t.default=r,Page(n(0).default.createComponent(r,!0))},"160":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var o=n(1),r=[{"id":1,"text":"招工信息","icon":o.IMGCDNURL+"new-collect-info-active.png","activeIcon":o.IMGCDNURL+"new-collect-info.png","title":"我收藏的招工信息"},{"id":2,"text":"找活信息","icon":o.IMGCDNURL+"new-collect-resume.png","activeIcon":o.IMGCDNURL+"new-collect-resume-active.png","title":"我收藏的找活信息"}];t.default=r},"161":function(e,t,n){}},[[159,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/collection/index"],{

/***/ "./src/pages/collection/config.ts":
/*!****************************************!*\
  !*** ./src/pages/collection/config.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var tab = [{
  id: 1,
  text: '招工信息',
  icon: _index.IMGCDNURL + 'new-collect-info-active.png',
  activeIcon: _index.IMGCDNURL + 'new-collect-info.png',
  title: '我收藏的招工信息'
}, {
  id: 2,
  text: '找活信息',
  icon: _index.IMGCDNURL + 'new-collect-resume.png',
  activeIcon: _index.IMGCDNURL + 'new-collect-resume-active.png',
  title: '我收藏的找活信息'
}];
exports.default = tab;

/***/ }),

/***/ "./src/pages/collection/index.scss":
/*!*****************************************!*\
  !*** ./src/pages/collection/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/collection/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/collection/index.tsx ***!
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

var _config = __webpack_require__(/*! ./config */ "./src/pages/collection/config.ts");

var _config2 = _interopRequireDefault(_config);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./index.scss */ "./src/pages/collection/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_Taro$Component) {
  _inherits(Collection, _Taro$Component);

  function Collection() {
    _classCallCheck(this, Collection);

    var _this = _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '我收藏的招工信息',
      enablePullDownRefresh: true,
      navigationBarBackgroundColor: '#0099ff',
      navigationBarTextStyle: 'white',
      backgroundTextStyle: "dark"
    };

    _this.$usedState = ["loopArray62", "$compid__47", "$compid__48", "tab", "current"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = ["Auth", "RecruitList", "ResumeList"];
    return _this;
  }

  _createClass(Collection, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Collection.prototype.__proto__ || Object.getPrototypeOf(Collection.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__47"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__47 = _genCompid2[0],
          $compid__47 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__48"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__48 = _genCompid4[0],
          $compid__48 = _genCompid4[1];
      // 默认table


      var _useState = (0, _taroSwan.useState)(1),
          _useState2 = _slicedToArray(_useState, 2),
          current = _useState2[0],
          setCurrent = _useState2[1];

      var _useState3 = (0, _taroSwan.useState)(0),
          _useState4 = _slicedToArray(_useState3, 2),
          bottom = _useState4[0],
          setBottom = _useState4[1];

      var _useState5 = (0, _taroSwan.useState)(0),
          _useState6 = _slicedToArray(_useState5, 2),
          initPage = _useState6[0],
          setInitPage = _useState6[1];

      var handleTable = function handleTable(type) {
        setBottom(0);
        setInitPage(0);
        setCurrent(type);
        _taroSwan2.default.setNavigationBarTitle({ title: _config2.default[type - 1].title });
      };
      // 是否加载更多
      (0, _taroSwan.useReachBottom)(function () {
        setBottom(bottom + 1);
      });
      // 下拉刷新
      (0, _taroSwan.usePullDownRefresh)(function () {
        setInitPage(initPage + 1);
      });
      var loopArray62 = _config2.default.map(function (item, __index0) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var _$indexKey = "ggzzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return handleTable(item.privateOriginal.id);
        };
        var loopState__temp2 = (0, _classnames2.default)({
          'collection-tab-border': item.privateOriginal.id === current,
          'collection-tab-content': true
        });
        var loopState__temp4 = (0, _classnames2.default)({
          'collection.active-text': item.privateOriginal.id === current
        });
        return {
          _$indexKey: _$indexKey,
          loopState__temp2: loopState__temp2,
          loopState__temp4: loopState__temp4,
          privateOriginal: item.privateOriginal
        };
      });
      current === 1 && _taroSwan.propsManager.set({
        "bottom": bottom,
        "initPage": initPage
      }, $compid__47, $prevCompid__47);
      !(current === 1) && _taroSwan.propsManager.set({
        "bottom": bottom,
        "initPage": initPage
      }, $compid__48, $prevCompid__48);
      Object.assign(this.__state, {
        loopArray62: loopArray62,
        $compid__47: $compid__47,
        $compid__48: $compid__48,
        tab: _config2.default,
        current: current
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return Collection;
}(_taroSwan2.default.Component);

Collection.$$events = ["anonymousFunc0"];
Collection.$$componentPath = "pages/collection/index";
Collection.config = { navigationBarTitleText: '我收藏的招工信息', enablePullDownRefresh: true, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };
exports.default = Collection;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Collection, true));

/***/ })

},[["./src/pages/collection/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
