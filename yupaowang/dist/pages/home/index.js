(tt.webpackJsonp=tt.webpackJsonp||[]).push([[48],{"219":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},re=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(o=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&i.return&&i.return()}finally{if(r)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var ae=n(0),ue=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(ae);n(220);var ie=n(2),se=n(3),ce=n(20),pe=n(14),me=n(1),le=n(6),fe=n(8);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var r=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Home,ue.default.Component),o(Home,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0})(Home.prototype.__proto__||Object.getPrototypeOf(Home.prototype),"_constructor",this).call(this,e),this.$$refs=new ue.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){function Fa(e){e!==pe.USED?j((0,ce.changeTabbar)(e)):(0,fe.userJumpPage)("/pages/used/index")}this.__state=e||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,r=(0,ae.genCompid)(o+"$compid__7"),a=re(r,2),u=a[0],i=a[1],s=(0,ae.genCompid)(o+"$compid__8"),c=re(s,2),p=c[0],m=c[1],l=(0,ae.genCompid)(o+"$compid__9"),f=re(l,2),_=f[0],y=f[1],d=(0,ae.genCompid)(o+"$compid__10"),h=re(d,2),b=h[0],v=h[1],g=(0,ae.genCompid)(o+"$compid__11"),C=re(g,2),F=C[0],S=C[1],$=(0,ae.genCompid)(o+"$compid__12"),w=re($,2),O=w[0],A=w[1],j=(0,se.useDispatch)(),k=void 0,I=void 0;(0,ae.useDidShow)(function(){k=ue.default.getStorageSync(le.UserListChooseCity),I=ue.default.getStorageSync(le.UserLocation),R(k?k.name:"全国"),J({"area":k?k.id:1,"location":I||""})});var P=(0,ae.useState)(k?k.name:"全国"),E=re(P,2),M=E[0],R=E[1],D=(0,ae.useState)(!1),H=re(D,2),U=H[0],L=H[1],N=(0,ae.useState)({"area":k?k.id:1,"location":I||""}),x=re(N,2),T=x[0],J=x[1],G=(0,ae.useState)({"lists":[]}),W=re(G,2),X=W[0],q=W[1],B=(0,ae.useState)({"vertical":!0,"lists":[]}),z=re(B,2),K=z[0],Q=z[1],V=(0,ae.useState)({"recruit":[],"resume":[],"fleamarket":[]}),Y=re(V,2),Z=Y[0],ee=Y[1];(0,ae.useEffect)(function(){(0,me.getBannerNotice)().then(function(e){Q(oe({},K,{"lists":[].concat(_toConsumableArray(e.notice))})),q(oe({},X,{"lists":[].concat(_toConsumableArray(e.banner))}))})},[]),(0,ae.useEffect)(function(){(0,me.getAllListItem)(T).then(function(e){ee(oe({},Z,{"recruit":[[].concat(_toConsumableArray(e.job.lists))],"resume":[[].concat(_toConsumableArray(e.resume.lists))],"fleamarket":[[].concat(_toConsumableArray(e.fleamarket.lists))]}))})},[T]),this.anonymousFunc0=function(){return L(!0)},this.anonymousFunc1=function(){return function userRouteJump(e){ue.default.navigateTo({"url":e})}("/subpackage/pages/download/index")},this.anonymousFunc2=function(){return Fa(pe.RECRUIT)},this.anonymousFunc3=function(){return Fa(pe.RESUME)},this.anonymousFunc4=function(){return Fa(pe.USED)};var te=U?function(e,t){return function setAreaInfo(e,t){R(e),J(oe({},T,{"area":t}))}(e,t)}:null,ne=U?function(){return L(!U)}:null;return ae.propsManager.set({"data":X},i,u),ae.propsManager.set({"data":K},m,p),ae.propsManager.set({"data":Z.recruit,"bottom":!1},y,_),ae.propsManager.set({"data":Z.resume,"bottom":!1,"hasMore":!0},v,b),ae.propsManager.set({"data":Z.fleamarket,"bottom":!1},S,F),U&&ae.propsManager.set({"show":U,"setAreaInfo":te,"closeDrawer":ne},A,O),Object.assign(this.__state,{"anonymousState__temp":te,"anonymousState__temp2":ne,"$compid__7":i,"$compid__8":m,"$compid__9":y,"$compid__10":v,"$compid__11":S,"$compid__12":A,"IMGCDNURL":ie.IMGCDNURL,"ISWEIXIN":!1,"shwoCity":U,"area":M}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}}]),Home);function Home(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Home);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Home.__proto__||Object.getPrototypeOf(Home)).apply(this,arguments));return e.$usedState=["anonymousState__temp","anonymousState__temp2","$compid__7","$compid__8","$compid__9","$compid__10","$compid__11","$compid__12","IMGCDNURL","ISWEIXIN","shwoCity","area"],e.customComponents=["SwiperComponent","Projects","Fastfun","SwiperNews","RecruitList","ResumeList","UsedList","About","HomeCity"],e}r.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4"],r.$$componentPath="pages/home/index",t.default=r,Component(n(0).default.createComponent(r))},"220":function(e,t,n){}},[[219,0,1]]]);