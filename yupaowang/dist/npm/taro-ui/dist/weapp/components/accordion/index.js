(swan.webpackJsonp=swan.webpackJsonp||[]).push([[25],{"174":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e};function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r,i,O=o(0),a=_interopRequireDefault(O),s=_interopRequireDefault(o(12)),P=_interopRequireDefault(o(6)),c=_interopRequireDefault(o(11)),l=o(31);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defineProperty(e,t,o){return t in e?Object.defineProperty(e,t,{"value":o,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=o,e}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(0,l.initTestEnv)();var p=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtAccordion,c.default),n(AtAccordion,[{"key":"_constructor","value":function _constructor(){(function get(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0})(AtAccordion.prototype.__proto__||Object.getPrototypeOf(AtAccordion.prototype),"_constructor",this).apply(this,arguments),this.isCompleted=!0,this.startOpen=!1,this.state={"wrapperHeight":""},this.$$refs=new a.default.RefsArray}},{"key":"toggleWithAnimation","value":function toggleWithAnimation(){var r=this,e=this.props,i=e.open,t=e.isAnimation;this.isCompleted&&t&&(this.isCompleted=!1,l.delayQuerySelector)(this,".at-accordion__body",0).then(function(e){var t=parseInt(e[0].height),o=i?t:0,n=i?0:t;r.startOpen=!1,r.setState({"wrapperHeight":o},function(){setTimeout(function(){r.setState({"wrapperHeight":n},function(){setTimeout(function(){r.isCompleted=!0,r.setState({})},700)})},100)})})}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){e.open!==this.props.open&&(this.startOpen=e.open&&e.isAnimation,this.toggleWithAnimation())}},{"key":"_createData","value":function _createData(e,t,o){var n;this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var r=this.__props,i=r.customStyle,a=r.className,s=r.title,c=r.icon,l=r.hasBorder,p=r.open,u=r.note,f=this.__state.wrapperHeight,d=(0,P.default)("at-accordion",a),_=c&&c.prefixClass||"at-icon",h=(0,P.default)((_defineProperty(n={},_,!0),_defineProperty(n,_+"-"+(c&&c.value),c&&c.value),_defineProperty(n,"at-accordion__icon",!0),n)),y=(0,P.default)("at-accordion__header",{"at-accordion__header--noborder":!l}),m=(0,P.default)("at-accordion__arrow",{"at-accordion__arrow--folded":!!p}),v=(0,P.default)("at-accordion__content",{"at-accordion__content--inactive":!p&&this.isCompleted||this.startOpen}),b={"color":c&&c.color||"","fontSize":c&&c.size+"px"||""},g={"height":f+"px"};this.isCompleted&&(g.height="");var C=(0,O.internal_inline_style)(i),A=c&&c.value?(0,O.internal_inline_style)(b):null,w=(0,O.internal_inline_style)(g);return Object.assign(this.__state,{"anonymousState__temp":C,"anonymousState__temp2":A,"anonymousState__temp3":w,"rootCls":d,"headerCls":y,"icon":c,"iconCls":h,"arrowCls":m,"contentCls":v,"title":s,"note":u}),this.__state}}]),i=r=AtAccordion,r.$$events=["handleClick"],r.$$componentPath="Users/axin/codes/鱼泡网/小程序TS重构项目/TaroTs-YuPaoWang/yupaowang/node_modules/taro-ui/dist/weapp/components/accordion/index",i);function AtAccordion(){var e,t,o;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtAccordion);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=o=_possibleConstructorReturn(this,(e=AtAccordion.__proto__||Object.getPrototypeOf(AtAccordion)).call.apply(e,[this].concat(r)))).$usedState=["anonymousState__temp","anonymousState__temp2","anonymousState__temp3","rootCls","headerCls","icon","iconCls","arrowCls","contentCls","title","note","wrapperHeight","open","isAnimation","customStyle","className","hasBorder","children"],o.handleClick=function(e){var t=o.props.open;o.isCompleted&&o.props.onClick(!t,e)},o.customComponents=[],_possibleConstructorReturn(o,t)}p.defaultProps={"open":!1,"customStyle":"","className":"","title":"","note":"","icon":{},"hasBorder":!0,"isAnimation":!0,"onClick":function onClick(){}},p.propTypes={"customStyle":s.default.oneOfType([s.default.object,s.default.string]),"className":s.default.oneOfType([s.default.array,s.default.string]),"open":s.default.bool,"isAnimation":s.default.bool,"title":s.default.string,"note":s.default.string,"icon":s.default.object,"hasBorder":s.default.bool,"onClick":s.default.func},t.default=p,Component(o(0).default.createComponent(p))}},[[174,0,1]]]);