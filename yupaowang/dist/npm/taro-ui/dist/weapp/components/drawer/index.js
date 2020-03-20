<<<<<<< HEAD
(wx.webpackJsonp=wx.webpackJsonp||[]).push([[20],{"86":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{"value":!0});var b=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function sliceIterator(t,e){var o=[],n=!0,r=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(o.push(a.value),!e||o.length!==e);n=!0);}catch(t){r=!0,i=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw i}}return o}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t};function defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r,i,g=o(0),a=_interopRequireDefault(g),s=_interopRequireDefault(o(11)),k=_interopRequireDefault(o(5));function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var l=(function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(AtDrawer,_interopRequireDefault(o(12)).default),n(AtDrawer,[{"key":"_constructor","value":function _constructor(t){(function get(t,e,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0})(AtDrawer.prototype.__proto__||Object.getPrototypeOf(AtDrawer.prototype),"_constructor",this).apply(this,arguments),this.state={"animShow":!1,"_show":t.show},this.$$refs=new a.default.RefsArray}},{"key":"componentDidMount","value":function componentDidMount(){this.state._show&&this.animShow()}},{"key":"onItemClick","value":function onItemClick(t,e){this.props.onItemClick&&this.props.onItemClick(t),this.animHide(e,t)}},{"key":"onHide","value":function onHide(){var t=this;this.setState({"_show":!1},function(){t.props.onClose&&t.props.onClose()})}},{"key":"animHide","value":function animHide(){var t=this,e=arguments;this.setState({"animShow":!1}),setTimeout(function(){t.onHide.apply(t,e)},300)}},{"key":"animShow","value":function animShow(){var t=this;this.setState({"_show":!0}),setTimeout(function(){t.setState({"animShow":!0})},200)}},{"key":"onMaskClick","value":function onMaskClick(){this.animHide.apply(this,arguments)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(t){var e=t.show;e!==this.state._show&&(e?this.animShow():this.animHide.apply(this,arguments))}},{"key":"_createData","value":function _createData(t,e,o){var s=this;this.__state=t||this.state||{},this.__props=e||this.props||{};var l=this.$prefix,n=this.__props,r=n.mask,i=n.width,a=n.right,u=n.items,c=this.__state,p=c.animShow,h=c._show,f={"display":r?"block":"none","opacity":p?1:0},_={"width":i,"transition":p?"all 225ms cubic-bezier(0, 0, 0.2, 1)":"all 195ms cubic-bezier(0.4, 0, 0.6, 1)"},m={"at-drawer--show":p,"at-drawer--right":a,"at-drawer--left":!a},d=h?(0,k.default)(["at-drawer"],m,this.__props.className):null,w=h?(0,g.internal_inline_style)(f):null,y=h?(0,g.internal_inline_style)(_):null,v=u.length?u.map(function(t,e){t={"$original":(0,g.internal_get_original)(t)};var o=h&&u.length?t.$original+"-"+e:null,n=(0,g.genCompid)(l+"dzzzzzzzzz"+e,!0),r=b(n,2),i=r[0],a=r[1];return h&&u.length&&g.propsManager.set({"onClick":s.onItemClick.bind(s,e),"title":t.$original,"arrow":"right"},a,i),{"$loopState__temp5":o,"$compid__10":a,"$original":t.$original}}):[];return Object.assign(this.__state,{"anonymousState__temp":d,"anonymousState__temp2":w,"anonymousState__temp3":y,"loopArray10":v,"items":u}),this.__state}}]),i=r=AtDrawer,r.$$events=["onMaskClick"],r.$$componentPath="Users/axin/codes/鱼泡网/小程序TS重构项目/TaroTs-YuPaoWang/yupaowang/node_modules/taro-ui/dist/weapp/components/drawer/index",i);function AtDrawer(){var t,e,o;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,AtDrawer);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=o=_possibleConstructorReturn(this,(t=AtDrawer.__proto__||Object.getPrototypeOf(AtDrawer)).call.apply(t,[this].concat(r)))).$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","loopArray10","_show","items","animShow","mask","width","right","className","show","children"],o.customComponents=["AtList","AtListItem"],_possibleConstructorReturn(o,e)}l.defaultProps={"show":!1,"mask":!0,"width":"","right":!1,"items":[],"onItemClick":function onItemClick(){},"onClose":function onClose(){}},l.propTypes={"show":s.default.bool,"mask":s.default.bool,"width":s.default.string,"items":s.default.arrayOf(s.default.string),"onItemClick":s.default.func,"onClose":s.default.func},e.default=l,Component(o(0).default.createComponent(l))}},[[86,0,1]]]);
=======
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/taro-ui/dist/weapp/components/drawer/index"],{

/***/ "./node_modules/taro-ui/dist/weapp/components/drawer/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/taro-ui/dist/weapp/components/drawer/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _component = __webpack_require__(/*! ../../common/component */ "./node_modules/taro-ui/dist/weapp/common/component.js");

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AtDrawer = (_temp2 = _class = function (_AtComponent) {
  _inherits(AtDrawer, _AtComponent);

  function AtDrawer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AtDrawer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AtDrawer.__proto__ || Object.getPrototypeOf(AtDrawer)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "loopArray10", "_show", "items", "animShow", "mask", "width", "right", "className", "show", "children"], _this.customComponents = ["AtList", "AtListItem"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AtDrawer, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(AtDrawer.prototype.__proto__ || Object.getPrototypeOf(AtDrawer.prototype), '_constructor', this).apply(this, arguments);
      this.state = {
        animShow: false,
        _show: props.show
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _show = this.state._show;

      if (_show) {
        this.animShow();
      }
    }
  }, {
    key: 'onItemClick',
    value: function onItemClick(index, e) {
      this.props.onItemClick && this.props.onItemClick(index);
      this.animHide(e, index);
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      var _this2 = this;

      this.setState({ _show: false }, function () {
        _this2.props.onClose && _this2.props.onClose();
      });
    }
  }, {
    key: 'animHide',
    value: function animHide() {
      var _this3 = this,
          _arguments = arguments;

      this.setState({
        animShow: false
      });
      setTimeout(function () {
        _this3.onHide.apply(_this3, _arguments);
      }, 300);
    }
  }, {
    key: 'animShow',
    value: function animShow() {
      var _this4 = this;

      this.setState({ _show: true });
      setTimeout(function () {
        _this4.setState({
          animShow: true
        });
      }, 200);
    }
  }, {
    key: 'onMaskClick',
    value: function onMaskClick() {
      this.animHide.apply(this, arguments);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var show = nextProps.show;

      if (show !== this.state._show) {
        show ? this.animShow() : this.animHide.apply(this, arguments);
      }
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this5 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          mask = _props.mask,
          width = _props.width,
          right = _props.right,
          items = _props.items;
      var _state = this.__state,
          animShow = _state.animShow,
          _show = _state._show;

      var rootClassName = ['at-drawer'];

      var maskStyle = {
        display: mask ? 'block' : 'none',
        opacity: animShow ? 1 : 0
      };
      var listStyle = {
        width: width,
        transition: animShow ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)' : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)'
      };

      var classObject = {
        'at-drawer--show': animShow,
        'at-drawer--right': right,
        'at-drawer--left': !right
      };

      var anonymousState__temp = _show ? (0, _classnames2.default)(rootClassName, classObject, this.__props.className) : null;
      var anonymousState__temp2 = _show ? (0, _taroWeapp.internal_inline_style)(maskStyle) : null;
      var anonymousState__temp3 = _show ? (0, _taroWeapp.internal_inline_style)(listStyle) : null;
      var loopArray10 = items.length ? items.map(function (name, index) {
        name = {
          $original: (0, _taroWeapp.internal_get_original)(name)
        };
        var $loopState__temp5 = _show ? items.length ? name.$original + "-" + index : null : null;

        var _genCompid = (0, _taroWeapp.genCompid)(__prefix + 'dzzzzzzzzz' + index, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__10 = _genCompid2[0],
            $compid__10 = _genCompid2[1];

        _show && items.length && _taroWeapp.propsManager.set({
          "onClick": _this5.onItemClick.bind(_this5, index),
          "title": name.$original,
          "arrow": "right"
        }, $compid__10, $prevCompid__10);
        return {
          $loopState__temp5: $loopState__temp5,
          $compid__10: $compid__10,
          $original: name.$original
        };
      }) : [];
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        loopArray10: loopArray10,
        items: items
      });
      return this.__state;
    }
  }]);

  return AtDrawer;
}(_component2.default), _class.$$events = ["onMaskClick"], _class.$$componentPath = "node_modules/taro-ui/dist/weapp/components/drawer/index", _temp2);


AtDrawer.defaultProps = {
  show: false,
  mask: true,
  width: '',
  right: false,
  items: [],
  onItemClick: function onItemClick() {},
  onClose: function onClose() {}
};

AtDrawer.propTypes = {
  show: _propTypes2.default.bool,
  mask: _propTypes2.default.bool,
  width: _propTypes2.default.string,
  items: _propTypes2.default.arrayOf(_propTypes2.default.string),
  onItemClick: _propTypes2.default.func,
  onClose: _propTypes2.default.func
};
exports.default = AtDrawer;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(AtDrawer));

/***/ })

},[["./node_modules/taro-ui/dist/weapp/components/drawer/index.js","runtime","vendors"]]]);
>>>>>>> 37a30980061f8b8f132139d6be14b7a201e5c301
