(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/collection/collectionRecruitList/index"],{

/***/ "./src/pages/collection/collectionRecruitList/index.scss":
/*!***************************************************************!*\
  !*** ./src/pages/collection/collectionRecruitList/index.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/collection/collectionRecruitList/index.tsx":
/*!**************************************************************!*\
  !*** ./src/pages/collection/collectionRecruitList/index.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/collection/collectionRecruitList/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollectionRecruitList = function (_Taro$Component) {
  _inherits(CollectionRecruitList, _Taro$Component);

  function CollectionRecruitList() {
    _classCallCheck(this, CollectionRecruitList);

    var _this = _possibleConstructorReturn(this, (CollectionRecruitList.__proto__ || Object.getPrototypeOf(CollectionRecruitList)).apply(this, arguments));

    _this.$usedState = ["anonymousState__temp", "loopArray69", "$compid__58", "$compid__59", "data", "IMGCDNURL", "recruitNoMoreData", "modalContent", "bottom", "onHandlerClick"];
    _this.anonymousFunc0Map = {};
    _this.anonymousFunc1Map = {};
    _this.customComponents = ["Nodata", "AtModal", "AtModalHeader", "AtModalContent", "AtModalAction"];
    return _this;
  }

  _createClass(CollectionRecruitList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(CollectionRecruitList.prototype.__proto__ || Object.getPrototypeOf(CollectionRecruitList.prototype), "_constructor", this).call(this, props);
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__58"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__58 = _genCompid2[0],
          $compid__58 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__59"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__59 = _genCompid4[0],
          $compid__59 = _genCompid4[1];

      var _props = this.__props,
          _props$data = _props.data,
          data = _props$data === undefined ? [] : _props$data,
          onHandlerClick = _props.onHandlerClick,
          recruitNoMoreData = _props.recruitNoMoreData,
          _props$bottom = _props.bottom,
          bottom = _props$bottom === undefined ? true : _props$bottom;
      // 定义弹窗

      var _useState = (0, _taroSwan.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          isOpened = _useState2[0],
          setIsOpened = _useState2[1];
      // 弹窗内容


      var _useState3 = (0, _taroSwan.useState)(''),
          _useState4 = _slicedToArray(_useState3, 2),
          modalContent = _useState4[0],
          setModalContent = _useState4[1];
      // 弹窗


      var onHandleClick = function onHandleClick(type, id) {
        // 1 审核中 2 通过 0 失败
        if (type == '2') {
          _taroSwan2.default.navigateTo({
            url: "/pages/detail/info/index?id=" + id + "&type=1"
          });
        } else if (type == '0') {
          setIsOpened(true);
          setModalContent('该信息未通过人工审核，审核通过后，即可查看');
        } else if (type == '1') {
          setIsOpened(true);
          setModalContent('该信息正在人工审核中，请稍后再试');
        }
      };
      var anonymousState__temp = (0, _taroSwan.internal_inline_style)(bottom ? '' : 'padding-bottom:0');
      this.anonymousFunc2 = function () {
        setIsOpened(false);
      };
      var loopArray69 = data ? data.map(function (item, __index0) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var _$indexKey = "ibzzz" + __index0;
        _this2.anonymousFunc0Map[_$indexKey] = function () {
          onHandleClick(item.privateOriginal.is_check, item.privateOriginal.id);
        };
        var _$indexKey2 = "iczzz" + __index0;
        _this2.anonymousFunc1Map[_$indexKey2] = function (e) {
          e.stopPropagation();
          _this2.__props.onHandlerClick(item.privateOriginal.id);
        };
        return {
          _$indexKey: _$indexKey,
          _$indexKey2: _$indexKey2,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      !data.length && _taroSwan.propsManager.set({
        "text": "\u6CA1\u6709\u627E\u5230\u76F8\u5173\u7684\u6570\u636E"
      }, $compid__58, $prevCompid__58);
      _taroSwan.propsManager.set({
        "isOpened": isOpened
      }, $compid__59, $prevCompid__59);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray69: loopArray69,
        $compid__58: $compid__58,
        $compid__59: $compid__59,
        data: data,
        IMGCDNURL: _index.IMGCDNURL,
        recruitNoMoreData: recruitNoMoreData,
        modalContent: modalContent
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
    value: function anonymousFunc1(_$indexKey2) {
      var _anonymousFunc1Map;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      (typeof e === "undefined" ? "undefined" : _typeof(e)) === 'object' && e.stopPropagation && e.stopPropagation();
      return this.anonymousFunc1Map[_$indexKey2] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey2].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return CollectionRecruitList;
}(_taroSwan2.default.Component);

CollectionRecruitList.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"];
CollectionRecruitList.$$componentPath = "pages/collection/collectionRecruitList/index";
exports.default = CollectionRecruitList;

Component(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(CollectionRecruitList));

/***/ })

},[["./src/pages/collection/collectionRecruitList/index.tsx","runtime","vendors"]]]);