(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["components/recommendList/index"],{

/***/ "./src/components/recommendList/index.scss":
/*!*************************************************!*\
  !*** ./src/components/recommendList/index.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/recommendList/index.tsx":
/*!************************************************!*\
  !*** ./src/components/recommendList/index.tsx ***!
  \************************************************/
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

__webpack_require__(/*! ./index.scss */ "./src/components/recommendList/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 找活查看更多招工
// 招工查看找活
// 招工详情就是招工
// 找活详情就去就是找活

var CollectionRecruitList = function (_Taro$Component) {
  _inherits(CollectionRecruitList, _Taro$Component);

  function CollectionRecruitList() {
    _classCallCheck(this, CollectionRecruitList);

    var _this = _possibleConstructorReturn(this, (CollectionRecruitList.__proto__ || Object.getPrototypeOf(CollectionRecruitList)).apply(this, arguments));

    _this.$usedState = ["$compid__65", "$compid__66", "type", "data"];
    _this.customComponents = ["RecruitListPage", "ResumeListPage"];
    return _this;
  }

  _createClass(CollectionRecruitList, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(CollectionRecruitList.prototype.__proto__ || Object.getPrototypeOf(CollectionRecruitList.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

<<<<<<< HEAD
      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__66"),
=======
      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__65"),
>>>>>>> 3a1c93d376a916fd8849f306954f46896f0e54ad
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__65 = _genCompid2[0],
          $compid__65 = _genCompid2[1];

<<<<<<< HEAD
      var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "$compid__67"),
=======
      var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "$compid__66"),
>>>>>>> 3a1c93d376a916fd8849f306954f46896f0e54ad
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__66 = _genCompid4[0],
          $compid__66 = _genCompid4[1];

      var _props = this.__props,
          _props$data = _props.data,
          data = _props$data === undefined ? [] : _props$data,
          type = _props.type;

      type === 1 && _taroTt.propsManager.set({
        "data": data
<<<<<<< HEAD
      }, $compid__66, $prevCompid__66);
=======
      }, $compid__65, $prevCompid__65);
>>>>>>> 3a1c93d376a916fd8849f306954f46896f0e54ad
      type === 2 && _taroTt.propsManager.set({
        "data": data
      }, $compid__66, $prevCompid__66);
      Object.assign(this.__state, {
        $compid__65: $compid__65,
        $compid__66: $compid__66,
        type: type
      });
      return this.__state;
    }
  }]);

  return CollectionRecruitList;
}(_taroTt2.default.Component);

CollectionRecruitList.$$events = [];
CollectionRecruitList.$$componentPath = "components/recommendList/index";
exports.default = CollectionRecruitList;

Component(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(CollectionRecruitList));

/***/ })

},[["./src/components/recommendList/index.tsx","runtime","vendors"]]]);