(wx.webpackJsonp=wx.webpackJsonp||[]).push([[71],{"148":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0}),n.detailContext=void 0;var ke=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,a=!1,i=void 0;try{for(var u,r=e[Symbol.iterator]();!(o=(u=r.next()).done)&&(t.push(u.value),!n||t.length!==n);o=!0);}catch(e){a=!0,i=e}finally{try{!o&&r.return&&r.return()}finally{if(a)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Ce=t(0),De=_interopRequireDefault(Ce),je=t(1),Ae=t(2),Me=t(3),Re=_interopRequireDefault(Me),Pe=t(6),Oe=t(4),Te=t(10);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t(149);var Le=n.detailContext=(0,Ce.createContext)({}),a=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(ResumeDetail,De.default.Component),o(ResumeDetail,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,n,t)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(t):void 0})(ResumeDetail.prototype.__proto__||Object.getPrototypeOf(ResumeDetail.prototype),"_constructor",this).call(this,e),this.$$refs=new De.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var a=this;this.__state=e||this.state||{},this.__props=n||this.props||{};var o=this.$prefix,i=(0,Ce.genCompid)(o+"$compid__63"),u=ke(i,2),r=u[0],s=u[1],c=(0,Ce.genCompid)(o+"$compid__64"),l=ke(c,2),p=l[0],f=l[1],m=(0,Oe.useSelector)(function(e){return e.User.login}),d=(0,Ce.useRouter)().params,y=d.uuid,h=d.location,g=(0,Ce.useState)({"certificates":[],"info":{"introduce":"","headerimg":"","nation":"","username":"","tel":"","hometown":"","occupations":[],"experience":"","prof_degree_str":"","type_str":"","number_people":"","address":"","authentication":"","is_read":0,"is_end":"","certificate_show":0,"uuid":"","gender":"","tags":[],"distance":"","location":"","show_complain":{"show_complain":void 0,"tips_message":""}},"operation":{"is_collect":0,"is_zan":0,"status":0},"project":[]}),_=ke(g,2),v=_[0],F=_[1],b=(0,Ce.useState)({"item":[]}),w=ke(b,2),x=w[0],$=w[1],S=(0,Ce.useState)(!0),k=ke(S,2),C=k[0],D=k[1],j=(0,Ce.useState)(!1),A=ke(j,2),M=A[0],R=A[1],P=(0,Ce.useState)(""),O=ke(P,2),T=O[0],L=O[1],z=(0,Ce.useState)(!1),I=ke(z,2),N=I[0],E=I[1],G=(0,Ce.useState)(0),U=ke(G,2),q=U[0],B=U[1],J=(0,Ce.useState)(0),K=ke(J,2),V=K[0],Y=K[1],H=(0,Ce.useState)(""),Q=ke(H,2),W=Q[0],X=Q[1],Z=(0,Ce.useState)(!1),ee=ke(Z,2),ne=ee[0],te=ee[1],oe=(0,Ce.useState)(""),ae=ke(oe,2),ie=ae[0],ue=ae[1],re=(0,Ce.useState)(!1),se=ke(re,2),ce=se[0],le=se[1],pe=(0,Ce.useState)(!1),fe=ke(pe,2),me=fe[0],de=fe[1],ye=(0,Ce.useState)(""),he=ke(ye,2),ge=he[0],_e=he[1];function xb(e){De.default.previewImage({"current":e,"urls":[e]})}(0,Ce.useDidShow)(function(){!function getDataList(){var e={"location":h,"resume_uuid":y};(0,je.resumeDetailAction)(e).then(function(e){if(console.log(e),"ok"===e.errcode){console.log(e);var n=(new Date).getTime(),t=new Date(n);e.info.birthday&&(t.getFullYear()-parseInt(e.info.birthday)==0?X(""):X(t.getFullYear()-parseInt(e.info.birthday)+"岁")),F({"certificates":e.certificates,"info":e.info,"operation":e.operation,"project":e.project}),L(e.info.tel),D(!1),Y(e.operation.is_zan),B(e.operation.is_collect),0==e.info.is_read&&"2"!=e.info.is_end&&0==e.operation.status&&R(!0);var o={"page":1,"type":1,"area_id":e.info.city,"occupations":e.info.occupations_id,"uuid":e.info.uuid};(0,je.recommendListAction)(o).then(function(e){$({"item":e.data.list})})}})}()}),(0,Ce.useEffect)(function(){console.log(313213),console.log(m),m&&(console.log(ge,"sss"),ge&&("support"===ge?Fe():"collect"===ge?be():"phone"===ge&&ve()))},[m]);var ve=function handlePhone(){if(!m)return _e("phone"),void de(!0);var e={"resume_uuid":y};(0,je.resumesGetTelAcrion)(e).then(function(e){200===e.errcode?(R(!0),L(e.tel),E(!1)):7405==e.errcode?De.default.showModal({"title":"温馨提示","content":e.errmsg,"success":function success(e){e.confirm?De.default.navigateTo({"url":"/pages/getintegral/index"}):e.cancel&&De.default.navigateBack()}}):(0,Re.default)(e.errmsg)})},Fe=function resumeSupport(){if(_e("support"),m){var e={"resume_uuid":y};(0,je.resumeSupportAction)(e).then(function(e){"ok"===e.errcode?((0,Re.default)(e.errmsg),Y(e.show)):(0,Re.default)(e.errmsg)})}else de(!0)},be=function resumeCollect(){if(!m)return _e("collect"),void de(!0);var e={"resume_uuid":y};(0,je.resumeCollectAction)(e).then(function(e){"ok"===e.errcode?((0,Re.default)(e.errmsg),B(e.show)):(0,Re.default)(e.errmsg)})},we={"project":v.project,"certificates":v.certificates};console.log(we,"xxxx"),console.log(me,"isAuthx"),Le.Provider(we),this.anonymousFunc0=ve,this.anonymousFunc1=function(){return De.default.makePhoneCall({"phoneNumber":T})},this.anonymousFunc2=function(){return function handleComplaint(){ce||!v.info.show_complain.show_complain?De.default.showModal({"title":"温馨提示","content":"您已投诉该信息,请勿重复提交！","showCancel":!1}):te(!0)}()},this.anonymousFunc3=function handleMap(){var e=v.info.location.split(",");De.default.openLocation({"latitude":parseFloat(e[1]),"longitude":parseFloat(e[0]),"name":v.info.address,"address":v.info.address,"scale":18})},this.anonymousFunc5=function(){return De.default.navigateTo({"url":"/pages/resume/projectList/index?preview=1&detail=1&location="+h+"&uuid="+y})},this.anonymousFunc7=function(){return De.default.navigateTo({"url":"/pages/resume/skillList/index?preview=1&detail=1&location="+h+"&uuid="+y})},this.anonymousFunc8=Fe,this.anonymousFunc9=be,this.anonymousFunc10=function(){E(!1)},this.anonymousFunc11=function handleTellPhone(){De.default.makePhoneCall({"phoneNumber":T})};var xe=v.info.occupations.length?v.info.occupations.map(function(e,n){return e={"$original":(0,Ce.internal_get_original)(e)},{"$loopState__temp2":v.info.occupations.length?n+n:null,"$original":e.$original}}):[],$e=v.project.length?v.project[0].image.map(function(e,n){e={"$original":(0,Ce.internal_get_original)(e)};var t=v.project.length?n+n:null,o="igzzz"+n;return a.anonymousFunc4Map[o]=function(){return xb(e.$original)},{"$loopState__temp4":t,"_$indexKey":o,"$original":e.$original}}):[],Se=v.certificates.length?v.certificates[0].image.map(function(e,n){e={"$original":(0,Ce.internal_get_original)(e)};var t=v.certificates.length?n+n:null,o="ihzzz"+n;return a.anonymousFunc6Map[o]=function(){return xb(e.$original)},{"$loopState__temp6":t,"_$indexKey2":o,"$original":e.$original}}):[];return x.item.length&&Ce.propsManager.set({"data":x.item,"type":2},s,r),ne&&Ce.propsManager.set({"display":ne,"textarea":ie,"handleTextarea":function handleTextarea(e){var n=e.detail.value;ue(n)},"setComplaintModal":te,"handleSubmit":function handleSubmit(){if(!(0,Pe.isVaildVal)(ie,15,500))return(0,Re.default)("输入内容不少于15个字且必须包含文字"),!1;var e={"content":ie,"resume_uuid":v.info.uuid};(0,je.resumesComplainAction)(e).then(function(e){"ok"===e.errcode&&(0,Te.SubscribeToNews)("complain",function(){(0,Me.SubPopup)({"tips":e.errmsg,"callback":function callback(){le(!0),te(!1)}})})})}},f,p),Object.assign(this.__state,{"data":v,"loopArray79":xe,"loopArray81":$e,"loopArray82":Se,"$compid__63":s,"$compid__64":f,"isAuth":me,"IMGCDNURL":Ae.IMGCDNURL,"examine":C,"onoff":M,"list":x,"praise":V,"collect":q,"shownewtips":N,"complaintModal":ne,"age":W,"phone":T}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc4Map[e]&&(n=this.anonymousFunc4Map)[e].apply(n,o)}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc6Map[e]&&(n=this.anonymousFunc6Map)[e].apply(n,o)}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}}]),ResumeDetail);function ResumeDetail(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ResumeDetail);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(ResumeDetail.__proto__||Object.getPrototypeOf(ResumeDetail)).apply(this,arguments));return e.config={"navigationBarTitleText":"找活名片"},e.$usedState=["data","loopArray79","loopArray81","loopArray82","$compid__63","$compid__64","isAuth","IMGCDNURL","examine","onoff","list","praise","collect","shownewtips","complaintModal","age","phone"],e.anonymousFunc4Map={},e.anonymousFunc6Map={},e.customComponents=["Auth","CollectionRecruitList","Report"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11"],a.$$componentPath="pages/resume/detail/index",a.config={"navigationBarTitleText":"找活名片"},n.default=a,Component(t(0).default.createComponent(a,!0))},"149":function(e,n,t){}},[[148,0,1]]]);