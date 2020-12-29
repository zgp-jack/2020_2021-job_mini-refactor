(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["components/index/projects/index"],{

/***/ "./src/components/index/projects/config.ts":
/*!*************************************************!*\
  !*** ./src/components/index/projects/config.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var FastBarConfig = [{
  appid: '',
  url: 'recruit',
  opentype: 'navigate',
  target: '',
  img: _index.IMGCDNURL + 'a.png',
  text: '建筑招工',
  isout: false
}, {
  appid: 'wxca0eab5cd5fe6a7c',
  url: '',
  opentype: 'navigate',
  target: 'miniProgram',
  img: _index.IMGCDNURL + 'b.png',
  text: '装修招工',
  isout: false
}, {
  appid: 'wxd348efa56021e8d0',
  url: '',
  opentype: 'navigate',
  target: 'miniProgram',
  img: _index.IMGCDNURL + 'c.png',
  text: '焊工招聘',
  isout: false
}, {
  appid: 'wxbfab0a324f27b966',
  url: '',
  opentype: 'navigate',
  target: 'miniProgram',
  img: _index.IMGCDNURL + 'driver.png',
  text: '招聘司机',
  isout: false
}, {
  appid: 'wx33194c327f50b99d',
  url: '',
  opentype: 'navigate',
  target: 'miniProgram',
  img: _index.IMGCDNURL + 'd.png',
  text: '工厂招人',
  isout: false
}, {
  appid: 'wx0ae31bf0edad4390',
  url: '',
  opentype: 'navigate',
  target: 'miniProgram',
  img: _index.IMGCDNURL + 'jx.png',
  text: '机械租赁',
  isout: false
}, {
  appid: 'wx7cea45b9ebdf87ac',
  url: '',
  opentype: 'navigate',
  target: 'miniProgram',
  img: _index.IMGCDNURL + 'newindex-zjxmicon.png',
  text: '在建项目',
  isout: false
}, {
  appid: 'wx3faf62a5edbb1513',
  url: '',
  opentype: 'navigate',
  target: 'miniProgram',
  img: _index.IMGCDNURL + 'ypsc.png',
  text: '工具商城',
  isout: false
}, {
  appid: '',
  url: '/pages/used/lists/index',
  opentype: 'navigate',
  target: '',
  img: _index.IMGCDNURL + 'es.png',
  text: '二手交易',
  isout: true
}, {
  appid: 'wxbac40ffffdee0573',
  url: '',
  opentype: 'navigate',
  target: 'miniProgram',
  img: _index.IMGCDNURL + 'zbcg.png',
  text: '招标采购',
  isout: false
}];
exports.default = FastBarConfig;

/***/ }),

/***/ "./src/components/index/projects/index.scss":
/*!**************************************************!*\
  !*** ./src/components/index/projects/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/index/projects/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/index/projects/index.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _config = __webpack_require__(/*! ./config */ "./src/components/index/projects/config.ts");

var _config2 = _interopRequireDefault(_config);

__webpack_require__(/*! ./index.scss */ "./src/components/index/projects/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_Taro$Component) {
  _inherits(Projects, _Taro$Component);

  function Projects() {
    _classCallCheck(this, Projects);

    var _this = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));

    _this.$usedState = ["loopArray21", "FastBarConfig"];
    _this.anonymousFunc0Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Projects, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Projects.prototype.__proto__ || Object.getPrototypeOf(Projects.prototype), '_constructor', this).call(this, props);
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
      var FastbarAction = function FastbarAction(item) {
        if (item.target === 'miniProgram') {
          // * 如果是小程序就跳转其他小程序
          _taroSwan2.default.navigateToMiniProgram({ appId: item.appid, fail: function fail(err) {
              return console.log(err);
            } });
        } else if (item.isout) {
          // * 不在TabBar组件中就跳转其他页面
          _taroSwan2.default.navigateTo({ url: item.url });
        }
      };
      var loopArray21 = _config2.default.map(function (item, index) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp2 = index + item.privateOriginal.appid;
        var _$indexKey = "cgzzz" + index;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return FastbarAction(item.privateOriginal);
        };
        return {
          loopState__temp2: loopState__temp2,
          _$indexKey: _$indexKey,
          privateOriginal: item.privateOriginal
        };
      });
      Object.assign(this.__state, {
        loopArray21: loopArray21,
        FastBarConfig: _config2.default
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

  return Projects;
}(_taroSwan2.default.Component);

Projects.$$events = ["anonymousFunc0"];
Projects.$$componentPath = "components/index/projects/index";
exports.default = Projects;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(Projects));

/***/ })

},[["./src/components/index/projects/index.tsx","runtime","vendors"]]]);