(wx.webpackJsonp=wx.webpackJsonp||[]).push([[32],{"175":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s,a,c=n(0),r=_interopRequireDefault(c),i=_interopRequireDefault(n(12)),f=_interopRequireDefault(n(5));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtMessage,_interopRequireDefault(n(11)).default),o(AtMessage,[{"key":"_constructor","value":function _constructor(){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var s=Object.getPrototypeOf(e);return null===s?void 0:get(s,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0})(AtMessage.prototype.__proto__||Object.getPrototypeOf(AtMessage.prototype),"_constructor",this).apply(this,arguments),this.state={"_isOpened":!1,"_message":"","_type":"info","_duration":3e3},this._timer=null,this.$$refs=new r.default.RefsArray}},{"key":"bindMessageListener","value":function bindMessageListener(){var n=this;r.default.eventCenter.on("atMessage",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t={"_isOpened":!0,"_message":e.message,"_type":e.type,"_duration":e.duration||n.state._duration};n.setState(t,function(){clearTimeout(n._timer),n._timer=setTimeout(function(){n.setState({"_isOpened":!1})},n.state._duration)})}),r.default.atMessage=r.default.eventCenter.trigger.bind(r.default.eventCenter,"atMessage")}},{"key":"componentDidShow","value":function componentDidShow(){this.bindMessageListener()}},{"key":"componentDidMount","value":function componentDidMount(){this.bindMessageListener()}},{"key":"componentDidHide","value":function componentDidHide(){r.default.eventCenter.off("atMessage")}},{"key":"componentWillUnmount","value":function componentWillUnmount(){r.default.eventCenter.off("atMessage")}},{"key":"_createData","value":function _createData(e,t,n){this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var o=this.__props,s=o.className,a=o.customStyle,r=this.__state,i=(r._message,r._isOpened),u=r._type,l=(0,f.default)({"at-message":!0,"at-message--show":i,"at-message--hidden":!i},"at-message--"+u,s),p=(0,c.internal_inline_style)(a);return Object.assign(this.__state,{"anonymousState__temp":p,"rootCls":l}),this.__state}}]),a=s=AtMessage,s.$$events=[],s.$$componentPath="Users/axin/codes/鱼泡网/小程序TS重构项目/TaroTs-YuPaoWang/yupaowang/node_modules/taro-ui/dist/weapp/components/message/index",a);function AtMessage(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtMessage);for(var o=arguments.length,s=Array(o),a=0;a<o;a++)s[a]=arguments[a];return(t=n=_possibleConstructorReturn(this,(e=AtMessage.__proto__||Object.getPrototypeOf(AtMessage)).call.apply(e,[this].concat(s)))).$usedState=["anonymousState__temp","rootCls","_message","_isOpened","_type","_duration","__fn_on","className","customStyle"],n.customComponents=[],_possibleConstructorReturn(n,t)}u.defaultProps={"customStyle":"","className":""},u.propTypes={"customStyle":i.default.oneOfType([i.default.object,i.default.string]),"className":i.default.oneOfType([i.default.array,i.default.string])},t.default=u,Component(n(0).default.createComponent(u))}},[[175,0,1]]]);