(tt.webpackJsonp=tt.webpackJsonp||[]).push([[45],{"229":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ue=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],o=!0,r=!1,a=void 0;try{for(var u,s=e[Symbol.iterator]();!(o=(u=s.next()).done)&&(n.push(u.value),!t||n.length!==t);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var se=n(0),ie=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(se);n(230);var ce=n(1),me=n(3),pe=n(20),fe=n(14),le=n(2),ye=n(7),_e=n(6);function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var r=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Home,ie.default.Component),o(Home,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0})(Home.prototype.__proto__||Object.getPrototypeOf(Home.prototype),"_constructor",this).call(this,e),this.$$refs=new ie.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){function Ha(e){e!==fe.USED?D((0,pe.changeTabbar)(e)):(0,_e.userJumpPage)("/pages/used/lists/index")}this.__state=e||this.state||{},this.__props=t||this.props||{};var o=this.$prefix,r=(0,se.genCompid)(o+"$compid__19"),a=ue(r,2),u=a[0],s=a[1],i=(0,se.genCompid)(o+"$compid__20"),c=ue(i,2),m=c[0],p=c[1],f=(0,se.genCompid)(o+"$compid__21"),l=ue(f,2),y=l[0],_=l[1],d=(0,se.genCompid)(o+"$compid__22"),h=ue(d,2),b=h[0],v=h[1],g=(0,se.genCompid)(o+"$compid__23"),C=ue(g,2),F=C[0],O=C[1],S=(0,se.genCompid)(o+"$compid__24"),A=ue(S,2),P=A[0],$=A[1],w=this.__props.homeIndex,I=void 0===w?0:w,D=(0,me.useDispatch)(),k=void 0,H=void 0;(0,se.useEffect)(function(){k=ie.default.getStorageSync(ye.UserListChooseCity),H=ie.default.getStorageSync(ye.UserLocation),L(k?k.name:"全国"),G({"area":k?k.id:1,"location":H||""})},[I]);var j=(0,se.useState)(k?k.name:"全国"),E=ue(j,2),R=E[0],L=E[1],M=(0,se.useState)(!1),U=ue(M,2),N=U[0],T=U[1],x=(0,se.useState)({"area":"","location":""}),W=ue(x,2),B=W[0],G=W[1],J=(0,se.useState)({"lists":[]}),X=ue(J,2),q=X[0],z=X[1],K=(0,se.useState)({"vertical":!0,"lists":[]}),Q=ue(K,2),V=Q[0],Y=Q[1],Z=(0,se.useState)({"recruit":[],"resume":[],"fleamarket":[]}),ee=ue(Z,2),te=ee[0],ne=ee[1];function hb(e){ie.default.navigateTo({"url":e})}(0,se.useEffect)(function(){(0,le.getBannerNotice)().then(function(e){Y(ae({},V,{"lists":[].concat(_toConsumableArray(e.notice))})),z(ae({},q,{"lists":[].concat(_toConsumableArray(e.banner))}))})},[]),(0,se.useEffect)(function(){B.area&&(0,le.getAllListItem)(B).then(function(e){ne(ae({},te,{"recruit":[[].concat(_toConsumableArray(e.job.lists))],"resume":[[].concat(_toConsumableArray(e.resume.lists))],"fleamarket":[[].concat(_toConsumableArray(e.fleamarket.lists))]}))})},[B]),this.anonymousFunc0=function(){return T(!0)},this.anonymousFunc1=function(){return hb(ce.DOWNLOADAPPPATH)},this.anonymousFunc2=function(){return hb(ce.PUBLISHRECRUIT)},this.anonymousFunc3=function(){return Ha(fe.RECRUIT)},this.anonymousFunc4=function(){return Ha(fe.RESUME)},this.anonymousFunc5=function(){return Ha(fe.USED)},this.anonymousFunc6=function(){return hb(ce.PUBLISHRECRUIT)};var oe=N?function(e,t){return function setAreaInfo(e,t){L(e),G(ae({},B,{"area":t}))}(e,t)}:null,re=N?function(){return T(!N)}:null;return se.propsManager.set({"data":q},s,u),se.propsManager.set({"data":V},p,m),se.propsManager.set({"data":te.recruit,"bottom":!1,"hasMore":!0},_,y),se.propsManager.set({"data":te.resume,"bottom":!1,"hasMore":!0},v,b),se.propsManager.set({"data":te.fleamarket,"bottom":!1,"hasMore":!0},O,F),N&&se.propsManager.set({"show":N,"setAreaInfo":oe,"closeDrawer":re},$,P),Object.assign(this.__state,{"anonymousState__temp":oe,"anonymousState__temp2":re,"$compid__19":s,"$compid__20":p,"$compid__21":_,"$compid__22":v,"$compid__23":O,"$compid__24":$,"IMGCDNURL":ce.IMGCDNURL,"DOWNLOADAPP":ce.DOWNLOADAPP,"ISWEIXIN":!1,"shwoCity":N,"area":R}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}}]),Home);function Home(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Home);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Home.__proto__||Object.getPrototypeOf(Home)).apply(this,arguments));return e.$usedState=["anonymousState__temp","anonymousState__temp2","$compid__19","$compid__20","$compid__21","$compid__22","$compid__23","$compid__24","IMGCDNURL","DOWNLOADAPP","ISWEIXIN","shwoCity","area","homeIndex"],e.customComponents=["SwiperComponent","Projects","Fastfun","SwiperNews","RecruitList","ResumeList","UsedList","About","HomeCity"],e}r.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6"],r.$$componentPath="pages/home/index",t.default=r,Component(n(0).default.createComponent(r))},"230":function(e,t,n){}},[[229,0,1]]]);