(swan.webpackJsonp=swan.webpackJsonp||[]).push([[89],{"209":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var We=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ye=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,a=!1,r=void 0;try{for(var i,u=e[Symbol.iterator]();!(o=(i=u.next()).done)&&(t.push(i.value),!n||t.length!==n);o=!0);}catch(e){a=!0,r=e}finally{try{!o&&u.return&&u.return()}finally{if(a)throw r}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Ze=t(0),en=_interopRequireDefault(Ze),nn=t(2),tn=t(1),on=t(4),an=_interopRequireDefault(on),rn=t(8),un=t(7),sn=t(3),cn=_interopRequireDefault(t(6)),ln=t(16),pn=t(210);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}t(211);var a=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(ResumeDetail,en.default.Component),o(ResumeDetail,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,n,t)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(t):void 0})(ResumeDetail.prototype.__proto__||Object.getPrototypeOf(ResumeDetail.prototype),"_constructor",this).call(this,e),this.$$refs=new en.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var a=this;this.__state=e||this.state||{},this.__props=n||this.props||{};var o=this.$prefix,r=(0,Ze.genCompid)(o+"$compid__79"),i=Ye(r,2),u=i[0],s=i[1],c=(0,Ze.genCompid)(o+"$compid__80"),l=Ye(c,2),p=l[0],f=l[1],v=(0,sn.useDispatch)(),m=(0,sn.useSelector)(function(e){return e.User.login}),d=(0,sn.useSelector)(function(e){return e.User}),y=(0,Ze.useRouter)(),g=(0,Ze.useState)([]),h=Ye(g,2),_=h[0],S=h[1],F=y.params,b=F.uuid,k=F.location,w=(0,Ze.useState)(!1),A=Ye(w,2),R=A[0],E=A[1],I=(0,Ze.useState)(""),C=Ye(I,2),O=C[0],j=C[1],T=(0,Ze.useState)({"certificates":[],"info":{"introduce":"","headerimg":"","nation":"","username":"","tel":"","hometown":"","occupations":[],"experience":"","prof_degree_str":"","type_str":"","number_people":"","address":"","authentication":"","is_read":0,"is_end":"","certificate_show":0,"uuid":"","user_uuid":"","gender":"","tags":[],"distance":"","location":"","show_complain":{"show_complain":void 0,"tips_message":""}},"operation":{"is_collect":0,"is_zan":0,"status":0},"project":[]}),D=Ye(T,2),P=D[0],M=D[1],x=(0,Ze.useState)(!0),B=Ye(x,2),$=B[0],U=B[1],N=(0,Ze.useState)(!1),z=Ye(N,2),L=z[0],Q=z[1],G=(0,Ze.useState)(""),q=Ye(G,2),K=q[0],H=q[1],J=(0,Ze.useState)(!1),X=Ye(J,2),V=X[0],W=X[1],Y=(0,Ze.useState)(0),Z=Ye(Y,2),ee=Z[0],ne=Z[1],te=(0,Ze.useState)(0),oe=Ye(te,2),ae=oe[0],re=oe[1],ie=(0,Ze.useState)(""),ue=Ye(ie,2),se=ue[0],ce=ue[1],le=(0,Ze.useState)(!1),pe=Ye(le,2),fe=pe[0],me=pe[1],de=(0,Ze.useState)(""),ye=Ye(de,2),ge=ye[0],he=ye[1],_e=(0,Ze.useState)(!1),ve=Ye(_e,2),Se=ve[0],Fe=ve[1],be=(0,Ze.useState)(!1),ke=Ye(be,2),we=ke[0],Ae=ke[1],Re=(0,Ze.useState)(""),Ee=Ye(Re,2),Ie=Ee[0],Ce=Ee[1],Oe=(0,Ze.useState)(0),je=Ye(Oe,2),Te=je[0],De=je[1],Pe=(0,Ze.useState)(""),Me=Ye(Pe,2),xe=Me[0],Be=Me[1],$e=(0,Ze.useState)(0),Ue=Ye($e,2),Ne=Ue[0],ze=Ue[1];function cc(e){en.default.previewImage({"current":e,"urls":[e]})}(0,Ze.useShareAppMessage)(function(){return We({},(0,un.getUserShareMessage)())}),(0,Ze.useEffect)(function(){m&&Ie&&("support"===Ie?Qe():"collect"===Ie?Ge():"phone"===Ie&&Le())},[m]),(0,Ze.useEffect)(function(){E((0,rn.isIos)()),function getDataList(){var e={"userId":d?d.userId:"","location":k,"resume_uuid":b};(0,nn.resumeDetailAction)(e).then(function(e){if("ok"===e.errcode){if(j(e.info.uuid),tn.SERIES==tn.BAIDUSERIES){var n=e.info.occupations[0],t=n.split("/").map(function(e){return"找"+e+"工作"}).join(",");en.default.setPageInfo({"title":e.info.username+"在"+e.info.address+"找"+n+"工作","description":e.info.introduce+", "+e.info.address+"找"+e.info.occupations+"工作","keywords":t+",鱼泡网,建筑招聘,建筑人才,工地招工,工人找活,施工队找活,工程信息,找工人,建筑工地"})}for(var o=[].concat(_toConsumableArray(e.certificates)),a=[],r=0;r<o.length;r++){var i=o[r].images?o[r].images.split(","):[],u=We({},o[r],{"images":i});a.push(u)}v((0,pn.setSubpackcertificate)([].concat(a)));var s=[].concat(_toConsumableArray(e.project)),c=[];console.error(s,"projectArr");for(var l=0;l<s.length;l++){var p=s[l].images?s[l].images.split(","):[],f=We({},s[l],{"images":p});c.push(f)}v((0,pn.setSubpackProject)([].concat(c)));var m=(new Date).getTime(),d=new Date(m);e.info.birthday&&(d.getFullYear()-parseInt(e.info.birthday)==0?ce(""):ce(d.getFullYear()-parseInt(e.info.birthday)+"岁"));var y=parseInt(e.info.city&&"0"!=e.info.city?e.info.city:e.info.province);De(y);var g=e.info.occupations_id;Be(g);var h=parseInt(e.info.id);ze(h),M({"certificates":e.certificates,"info":e.info,"operation":e.operation,"project":e.project}),H(e.info.tel),U(!1),re(e.operation.is_zan),ne(e.operation.is_collect),0==e.info.is_read&&"2"!=e.info.is_end&&0==e.operation.status&&Q(!0);var _={"page":1,"type":1,"area_id":y,"occupations":e.info.occupations_id,"uuid":e.info.uuid};(0,nn.detailsRecommendAction)(_).then(function(e){"ok"===e.errcode?S(e.data.list):(0,an.default)(e.errmsg)})}})}()},[m]);var Le=function handlePhone(){if(!m)return Ce("phone"),void Ae(!0);var e={"resume_uuid":b};(0,nn.resumesGetTelAcrion)(e).then(function(e){200===e.errcode?(Q(!0),H(e.tel),W(!1)):7405==e.errcode?en.default.showModal({"title":"温馨提示","content":e.errmsg,"success":function success(e){e.confirm?en.default.navigateTo({"url":"/pages/getintegral/index"}):e.cancel&&en.default.navigateBack()}}):(0,an.default)(e.errmsg)})},Qe=function resumeSupport(){if(Ce("support"),m){var e={"resume_uuid":b};(0,nn.resumeSupportAction)(e).then(function(e){"ok"===e.errcode?((0,an.default)(e.errmsg),re(e.show)):(0,an.default)(e.errmsg)})}else Ae(!0)},Ge=function resumeCollect(){if(!m)return Ce("collect"),void Ae(!0);var e={"resume_uuid":b};(0,nn.resumeCollectAction)(e).then(function(e){"ok"===e.errcode?((0,an.default)(e.errmsg),ne(e.show)):(0,an.default)(e.errmsg)})},qe=(0,Ze.internal_inline_style)(_.length?"":{"paddingBottom":"50px"});this.anonymousFunc0=Le,this.anonymousFunc1=function(){return en.default.makePhoneCall({"phoneNumber":K})},this.anonymousFunc2=function(){return function handleComplaint(){Se||!P.info.show_complain.show_complain?en.default.showModal({"title":"温馨提示","content":"您已投诉该信息,请勿重复提交！","showCancel":!1}):me(!0)}()};var Ke=P.info.address?(0,cn.default)({"workotextone-address":!0,"workotextone-noaddress":!P.info.distance}):null;this.anonymousFunc3=function handleMap(){en.default.getSetting().then(function(e){console.error(e,1111)});var e=P.info.location?P.info.location.split(","):[];en.default.openLocation({"latitude":parseFloat(e[1]),"longitude":parseFloat(e[0]),"name":P.info.address,"address":P.info.address,"scale":18})};var He=P.info.introduce?tn.REPLACEWEIXINTEXT?P.info.introduce.replace(tn.FILTERWEIXINREG,""):P.info.introduce:"暂未填写";this.anonymousFunc5=function(){return en.default.navigateTo({"url":"/subpackage/pages/projects/index"})},this.anonymousFunc7=function(){return en.default.navigateTo({"url":"/subpackage/pages/skills/index"})},this.anonymousFunc8=Qe,this.anonymousFunc9=Ge,this.anonymousFunc10=function(){W(!1)},this.anonymousFunc11=function handleTellPhone(){en.default.makePhoneCall({"phoneNumber":K})};var Je=P.info.occupations.length?P.info.occupations.map(function(e,n){return e={"privateOriginal":(0,Ze.internal_get_original)(e)},{"loopState__temp3":P.info.occupations.length?n+n:null,"privateOriginal":e.privateOriginal}}):[],Xe=P.project.length?P.project[0].image.map(function(e,n){e={"privateOriginal":(0,Ze.internal_get_original)(e)};var t=P.project.length?n+n:null,o="jizzz"+n;return a.anonymousFunc4Map[o]=function(){return cc(e.privateOriginal)},{"loopState__temp7":t,"_$indexKey":o,"privateOriginal":e.privateOriginal}}):[],Ve=P.certificates.length?P.certificates[0].image.map(function(e,n){e={"privateOriginal":(0,Ze.internal_get_original)(e)};var t=P.certificates.length?n+n:null,o="jjzzz"+n;return a.anonymousFunc6Map[o]=function(){return cc(e.privateOriginal)},{"loopState__temp9":t,"_$indexKey2":o,"privateOriginal":e.privateOriginal}}):[];return _.length&&Ze.propsManager.set({"data":_,"type":2,"areasId":Te,"occupations":xe,"jobIds":Ne,"infoUuid":O},s,u),fe&&Ze.propsManager.set({"display":fe,"textarea":ge,"handleTextarea":function handleTextarea(e){var n=e.detail.value;he(n)},"setComplaintModal":me,"handleSubmit":function handleSubmit(){if(!(0,rn.isVaildVal)(ge,5,500))return(0,on.ShowActionModal)({"msg":"输入内容不少于5个字且必须包含文字"}),!1;var e={"content":ge,"resume_uuid":P.info.uuid};(0,nn.resumesComplainAction)(e).then(function(e){"ok"===e.errcode?(0,ln.SubscribeToNews)("complain",function(){(0,on.showModalTip)({"tips":e.errmsg,"callback":function callback(){Fe(!0),me(!1)}})}):(0,an.default)(e.errmsg)})}},f,p),Object.assign(this.__state,{"anonymousState__temp":qe,"anonymousState__temp4":Ke,"anonymousState__temp5":He,"data":P,"loopArray95":Je,"loopArray97":Xe,"loopArray98":Ve,"$compid__79":s,"$compid__80":f,"isAuth":we,"IMGCDNURL":tn.IMGCDNURL,"examine":$,"onoff":L,"SERIES":tn.SERIES,"QQSERIES":tn.QQSERIES,"ios":R,"login":m,"user":d,"praise":ae,"ISCANSHARE":tn.ISCANSHARE,"collect":ee,"shownewtips":V,"recommendRe":_,"complaintModal":fe,"BAIDUSERIES":tn.BAIDUSERIES,"age":se,"phone":K}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc4Map[e]&&(n=this.anonymousFunc4Map)[e].apply(n,o)}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc6Map[e]&&(n=this.anonymousFunc6Map)[e].apply(n,o)}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}}]),ResumeDetail);function ResumeDetail(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ResumeDetail);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(ResumeDetail.__proto__||Object.getPrototypeOf(ResumeDetail)).apply(this,arguments));return e.config={"navigationBarTitleText":"找活名片","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["anonymousState__temp","anonymousState__temp4","anonymousState__temp5","data","loopArray95","loopArray97","loopArray98","$compid__79","$compid__80","isAuth","IMGCDNURL","examine","onoff","SERIES","QQSERIES","ios","login","user","praise","ISCANSHARE","collect","shownewtips","recommendRe","complaintModal","BAIDUSERIES","age","phone"],e.anonymousFunc4Map={},e.anonymousFunc6Map={},e.customComponents=["Auth","CollectionRecruitList","Report"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11"],a.$$componentPath="pages/resume/detail/index",a.config={"navigationBarTitleText":"找活名片","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},n.default=a,Page(t(0).default.createComponent(a,!0))},"210":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0}),n.setSubpackcertificate=function setSubpackcertificate(e){return{"type":o.SETSUBPACKCERTIFICATE,"data":e}},n.setSubpackProject=function setSubpackProject(e){return{"type":o.SETSUBPACKPROJECT,"data":e}};var o=t(42)},"211":function(e,n,t){}},[[209,0,1]]]);