(wx.webpackJsonp=wx.webpackJsonp||[]).push([[36],{"242":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var O=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var o=[],n=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){r=!0,a=e}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e};function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r,a,C=o(0),i=_interopRequireDefault(C),l=_interopRequireDefault(o(12)),b=_interopRequireDefault(o(5)),s=_interopRequireDefault(o(35)),c=_interopRequireDefault(o(11)),u=o(33);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtModal,c.default),n(AtModal,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(o):void 0})(AtModal.prototype.__proto__||Object.getPrototypeOf(AtModal.prototype),"_constructor",this).apply(this,arguments);var t=e.isOpened;this.state={"_isOpened":t,"isWEB":i.default.getEnv()===i.default.ENV_TYPE.WEB},this.$$refs=new i.default.RefsArray}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=e.isOpened;this.props.isOpened!==t&&(0,u.handleTouchScroll)(t),t!==this.state._isOpened&&this.setState({"_isOpened":t})}},{"key":"_createData","value":function _createData(e,t,o){this.__state=e||this.state||{},this.__props=t||this.props||{};var n,r,a=this.$prefix,i=(0,C.genCompid)(a+"$compid__44"),l=O(i,2),s=l[0],c=l[1],u=this.__state,p=u._isOpened,f=u.isWEB,d=this.__props,_=d.title,h=d.content,y=d.cancelText,v=d.confirmText,m=(0,b.default)("at-modal",{"at-modal--active":p},this.__props.className);return(_||h)&&(n=y||v,r=h&&f?{"__html":h.replace(/\n/g,"<br/>")}:null,n&&C.propsManager.set({"isSimple":!0},c,s)),Object.assign(this.__state,{"_$isRenderAction":n,"_$anonymousState__temp":r,"$compid__44":c,"title":_,"content":h,"cancelText":y,"confirmText":v,"rootClass":m}),this.__state}}]),a=r=AtModal,r.$$events=["handleClickOverlay","handleCancel","handleConfirm","handleTouchMove"],r.$$componentPath="Users/axin/codes/鱼泡网/小程序TS重构项目/TaroTs-YuPaoWang/yupaowang/node_modules/taro-ui/dist/weapp/components/modal/index",a);function AtModal(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtModal);for(var n=arguments.length,r=Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=o=_possibleConstructorReturn(this,(e=AtModal.__proto__||Object.getPrototypeOf(AtModal)).call.apply(e,[this].concat(r)))).$usedState=["_$isRenderAction","_$anonymousState__temp","$compid__44","title","content","isWEB","cancelText","confirmText","rootClass","_isOpened","isOpened","closeOnClickOverlay","className","children"],o.handleClickOverlay=function(){o.props.closeOnClickOverlay&&o.setState({"_isOpened":!1},o.handleClose)},o.handleClose=function(){(0,s.default)(o.props.onClose)&&o.props.onClose()},o.handleCancel=function(){(0,s.default)(o.props.onCancel)&&o.props.onCancel()},o.handleConfirm=function(){(0,s.default)(o.props.onConfirm)&&o.props.onConfirm()},o.handleTouchMove=function(e){e.stopPropagation()},o.customComponents=["AtModalHeader","AtModalContent","AtModalAction"],_possibleConstructorReturn(o,t)}p.defaultProps={"closeOnClickOverlay":!0},p.propTypes={"title":l.default.string,"isOpened":l.default.bool,"onCancel":l.default.func,"onConfirm":l.default.func,"onClose":l.default.func,"content":l.default.string,"closeOnClickOverlay":l.default.bool,"cancelText":l.default.string,"confirmText":l.default.string},t.default=p,Component(o(0).default.createComponent(p))}},[[242,0,1]]]);