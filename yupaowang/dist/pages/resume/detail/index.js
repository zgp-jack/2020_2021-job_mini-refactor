(tt.webpackJsonp=tt.webpackJsonp||[]).push([[73],{"199":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var _e=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ve=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,a=!1,r=void 0;try{for(var u,i=e[Symbol.iterator]();!(o=(u=i.next()).done)&&(t.push(u.value),!n||t.length!==n);o=!0);}catch(e){a=!0,r=e}finally{try{!o&&i.return&&i.return()}finally{if(a)throw r}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Fe=t(0),be=_interopRequireDefault(Fe),Se=t(2),ke=t(1),we=t(4),Ae=_interopRequireDefault(we),Ce=t(8),je=t(7),$e=t(3),Te=t(15),Me=t(200);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}t(201);var a=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(ResumeDetail,be.default.Component),o(ResumeDetail,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,n,t)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(t):void 0})(ResumeDetail.prototype.__proto__||Object.getPrototypeOf(ResumeDetail.prototype),"_constructor",this).call(this,e),this.$$refs=new be.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var a=this;this.__state=e||this.state||{},this.__props=n||this.props||{};var o=this.$prefix,r=(0,Fe.genCompid)(o+"$compid__76"),u=ve(r,2),i=u[0],s=u[1],p=(0,$e.useDispatch)(),c=(0,$e.useSelector)(function(e){return e.User.login}),l=(0,Fe.useRouter)().params,f=l.uuid,m=l.location,y=(0,Fe.useState)({"certificates":[],"info":{"introduce":"","headerimg":"","nation":"","username":"","tel":"","hometown":"","occupations":[],"experience":"","prof_degree_str":"","type_str":"","number_people":"","address":"","authentication":"","is_read":0,"is_end":"","certificate_show":0,"uuid":"","gender":"","tags":[],"distance":"","location":"","show_complain":{"show_complain":void 0,"tips_message":""}},"operation":{"is_collect":0,"is_zan":0,"status":0},"project":[]}),d=ve(y,2),h=d[0],g=d[1],_=(0,Fe.useState)(!0),v=ve(_,2),F=v[0],b=v[1],S=(0,Fe.useState)(!1),k=ve(S,2),w=k[0],A=k[1],C=(0,Fe.useState)(""),j=ve(C,2),$=j[0],T=j[1],M=(0,Fe.useState)(!1),P=ve(M,2),R=P[0],D=P[1],O=(0,Fe.useState)(0),x=ve(O,2),E=x[0],I=x[1],z=(0,Fe.useState)(0),B=ve(z,2),N=B[0],U=B[1],L=(0,Fe.useState)(""),G=ve(L,2),K=G[0],q=G[1],H=(0,Fe.useState)(!1),J=ve(H,2),V=J[0],Y=J[1],Q=(0,Fe.useState)(""),W=ve(Q,2),X=W[0],Z=W[1],ee=(0,Fe.useState)(!1),ne=ve(ee,2),te=ne[0],oe=ne[1],ae=(0,Fe.useState)(!1),re=ve(ae,2),ue=re[0],ie=re[1],se=(0,Fe.useState)(""),ce=ve(se,2),le=ce[0],pe=ce[1];function zb(e){be.default.previewImage({"current":e,"urls":[e]})}(0,Fe.useShareAppMessage)(function(){return _e({},(0,je.getUserShareMessage)())}),(0,Fe.useDidShow)(function(){!function getDataList(){var e={"location":m,"resume_uuid":f};(0,Se.resumeDetailAction)(e).then(function(e){if("ok"===e.errcode){for(var n=[].concat(_toConsumableArray(e.certificates)),t=[],o=0;o<n.length;o++){var a=_e({},n[o],{"images":n[o].images.split(",")});t.push(a)}p((0,Me.setSubpackcertificate)([].concat(t)));for(var r=[].concat(_toConsumableArray(e.project)),u=[],i=0;i<r.length;i++){var s=_e({},r[i],{"images":r[i].images.split(",")});u.push(s)}p((0,Me.setSubpackProject)([].concat(u)));var c=(new Date).getTime(),l=new Date(c);e.info.birthday&&(l.getFullYear()-parseInt(e.info.birthday)==0?q(""):q(l.getFullYear()-parseInt(e.info.birthday)+"岁")),g({"certificates":e.certificates,"info":e.info,"operation":e.operation,"project":e.project}),T(e.info.tel),b(!1),U(e.operation.is_zan),I(e.operation.is_collect),0==e.info.is_read&&"2"!=e.info.is_end&&0==e.operation.status&&A(!0)}})}()}),(0,Fe.useEffect)(function(){c&&le&&("support"===le?me():"collect"===le?ye():"phone"===le&&fe())},[c]);var fe=function handlePhone(){if(!c)return pe("phone"),void ie(!0);var e={"resume_uuid":f};(0,Se.resumesGetTelAcrion)(e).then(function(e){200===e.errcode?(A(!0),T(e.tel),D(!1)):7405==e.errcode?be.default.showModal({"title":"温馨提示","content":e.errmsg,"success":function success(e){e.confirm?be.default.navigateTo({"url":"/pages/getintegral/index"}):e.cancel&&be.default.navigateBack()}}):(0,Ae.default)(e.errmsg)})},me=function resumeSupport(){if(pe("support"),c){var e={"resume_uuid":f};(0,Se.resumeSupportAction)(e).then(function(e){"ok"===e.errcode?((0,Ae.default)(e.errmsg),U(e.show)):(0,Ae.default)(e.errmsg)})}else ie(!0)},ye=function resumeCollect(){if(!c)return pe("collect"),void ie(!0);var e={"resume_uuid":f};(0,Se.resumeCollectAction)(e).then(function(e){"ok"===e.errcode?((0,Ae.default)(e.errmsg),I(e.show)):(0,Ae.default)(e.errmsg)})};this.anonymousFunc0=fe,this.anonymousFunc1=function(){return be.default.makePhoneCall({"phoneNumber":$})},this.anonymousFunc2=function(){return function handleComplaint(){te||!h.info.show_complain.show_complain?be.default.showModal({"title":"温馨提示","content":"您已投诉该信息,请勿重复提交！","showCancel":!1}):Y(!0)}()},this.anonymousFunc3=function handleMap(){var e=h.info.location.split(",");be.default.openLocation({"latitude":parseFloat(e[1]),"longitude":parseFloat(e[0]),"name":h.info.address,"address":h.info.address,"scale":18})},this.anonymousFunc5=function(){return be.default.navigateTo({"url":"/subpackage/pages/projects/index"})},this.anonymousFunc7=function(){return be.default.navigateTo({"url":"/subpackage/pages/skills/index"})},this.anonymousFunc8=me,this.anonymousFunc9=ye,this.anonymousFunc10=function(){D(!1)},this.anonymousFunc11=function handleTellPhone(){be.default.makePhoneCall({"phoneNumber":$})};var de=h.info.occupations.length?h.info.occupations.map(function(e,n){return e={"$original":(0,Fe.internal_get_original)(e)},{"$loopState__temp2":h.info.occupations.length?n+n:null,"$original":e.$original}}):[],he=h.project.length?h.project[0].image.map(function(e,n){e={"$original":(0,Fe.internal_get_original)(e)};var t=h.project.length?n+n:null,o="jdzzz"+n;return a.anonymousFunc4Map[o]=function(){return zb(e.$original)},{"$loopState__temp4":t,"_$indexKey":o,"$original":e.$original}}):[],ge=h.certificates.length?h.certificates[0].image.map(function(e,n){e={"$original":(0,Fe.internal_get_original)(e)};var t=h.certificates.length?n+n:null,o="jezzz"+n;return a.anonymousFunc6Map[o]=function(){return zb(e.$original)},{"$loopState__temp6":t,"_$indexKey2":o,"$original":e.$original}}):[];return V&&Fe.propsManager.set({"display":V,"textarea":X,"handleTextarea":function handleTextarea(e){var n=e.detail.value;Z(n)},"setComplaintModal":Y,"handleSubmit":function handleSubmit(){if(!(0,Ce.isVaildVal)(X,5,500))return(0,we.ShowActionModal)({"msg":"输入内容不少于5个字且必须包含文字"}),!1;var e={"content":X,"resume_uuid":h.info.uuid};(0,Se.resumesComplainAction)(e).then(function(e){"ok"===e.errcode?(0,Te.SubscribeToNews)("complain",function(){(0,we.showModalTip)({"tips":e.errmsg,"callback":function callback(){oe(!0),Y(!1)}})}):(0,Ae.default)(e.errmsg)})}},s,i),Object.assign(this.__state,{"data":h,"loopArray91":de,"loopArray93":he,"loopArray94":ge,"$compid__76":s,"isAuth":ue,"IMGCDNURL":ke.IMGCDNURL,"examine":F,"onoff":w,"praise":N,"ISCANSHARE":ke.ISCANSHARE,"collect":E,"shownewtips":R,"complaintModal":V,"age":K,"phone":$}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc4Map[e]&&(n=this.anonymousFunc4Map)[e].apply(n,o)}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc6Map[e]&&(n=this.anonymousFunc6Map)[e].apply(n,o)}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}}]),ResumeDetail);function ResumeDetail(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ResumeDetail);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(ResumeDetail.__proto__||Object.getPrototypeOf(ResumeDetail)).apply(this,arguments));return e.config={"navigationBarTitleText":"找活名片","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["data","loopArray91","loopArray93","loopArray94","$compid__76","isAuth","IMGCDNURL","examine","onoff","praise","ISCANSHARE","collect","shownewtips","complaintModal","age","phone"],e.anonymousFunc4Map={},e.anonymousFunc6Map={},e.customComponents=["Auth","Report"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11"],a.$$componentPath="pages/resume/detail/index",a.config={"navigationBarTitleText":"找活名片","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},n.default=a,Page(t(0).default.createComponent(a,!0))},"200":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0}),n.setSubpackcertificate=function setSubpackcertificate(e){return{"type":o.SETSUBPACKCERTIFICATE,"data":e}},n.setSubpackProject=function setSubpackProject(e){return{"type":o.SETSUBPACKPROJECT,"data":e}};var o=t(37)},"201":function(e,n,t){}},[[199,0,1]]]);