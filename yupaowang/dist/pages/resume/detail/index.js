(swan.webpackJsonp=swan.webpackJsonp||[]).push([[67],{"199":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var be=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Se=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,a=!1,r=void 0;try{for(var u,i=e[Symbol.iterator]();!(o=(u=i.next()).done)&&(t.push(u.value),!n||t.length!==n);o=!0);}catch(e){a=!0,r=e}finally{try{!o&&i.return&&i.return()}finally{if(a)throw r}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var ke=t(0),we=_interopRequireDefault(ke),Ae=t(2),Ce=t(1),Oe=t(4),Re=_interopRequireDefault(Oe),je=t(8),Te=t(6),Pe=t(3),De=_interopRequireDefault(t(5)),Me=t(16),Ee=t(200);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}t(201);var a=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(ResumeDetail,we.default.Component),o(ResumeDetail,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,n,t)}if("value"in o)return o.value;var r=o.get;return void 0!==r?r.call(t):void 0})(ResumeDetail.prototype.__proto__||Object.getPrototypeOf(ResumeDetail.prototype),"_constructor",this).call(this,e),this.$$refs=new we.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var a=this;this.__state=e||this.state||{},this.__props=n||this.props||{};var o=this.$prefix,r=(0,ke.genCompid)(o+"$compid__76"),u=Se(r,2),i=u[0],s=u[1],m=(0,Pe.useDispatch)(),c=(0,Pe.useSelector)(function(e){return e.User.login}),l=(0,Pe.useSelector)(function(e){return e.User}),p=(0,ke.useRouter)().params,f=p.uuid,d=p.location,y=(0,ke.useState)({"certificates":[],"info":{"introduce":"","headerimg":"","nation":"","username":"","tel":"","hometown":"","occupations":[],"experience":"","prof_degree_str":"","type_str":"","number_people":"","address":"","authentication":"","is_read":0,"is_end":"","certificate_show":0,"uuid":"","user_uuid":"","gender":"","tags":[],"distance":"","location":"","show_complain":{"show_complain":void 0,"tips_message":""}},"operation":{"is_collect":0,"is_zan":0,"status":0},"project":[]}),h=Se(y,2),g=h[0],v=h[1],_=(0,ke.useState)(!0),F=Se(_,2),b=F[0],S=F[1],k=(0,ke.useState)(!1),w=Se(k,2),A=w[0],C=w[1],O=(0,ke.useState)(""),R=Se(O,2),j=R[0],T=R[1],P=(0,ke.useState)(!1),D=Se(P,2),M=D[0],E=D[1],I=(0,ke.useState)(0),x=Se(I,2),$=x[0],B=x[1],N=(0,ke.useState)(0),U=Se(N,2),z=U[0],L=U[1],G=(0,ke.useState)(""),q=Se(G,2),K=q[0],H=q[1],J=(0,ke.useState)(!1),X=Se(J,2),V=X[0],W=X[1],Y=(0,ke.useState)(""),Q=Se(Y,2),Z=Q[0],ee=Q[1],ne=(0,ke.useState)(!1),te=Se(ne,2),oe=te[0],ae=te[1],re=(0,ke.useState)(!1),ue=Se(re,2),ie=ue[0],se=ue[1],ce=(0,ke.useState)(""),le=Se(ce,2),pe=le[0],fe=le[1];function Cb(e){we.default.previewImage({"current":e,"urls":[e]})}(0,ke.useShareAppMessage)(function(){return be({},(0,Te.getUserShareMessage)())}),(0,ke.useDidShow)(function(){!function getDataList(){var e={"userId":l?l.userId:"","location":d,"resume_uuid":f};(0,Ae.resumeDetailAction)(e).then(function(e){if("ok"===e.errcode){if(Ce.SERIES==Ce.BAIDUSERIES){var n=e.info.occupations[0],t=n.split("/").map(function(e){return"找"+e+"工作"}).join(",");we.default.setPageInfo({"title":e.info.username+"在"+e.info.address+"找"+n+"工作","description":e.info.introduce+", "+e.info.address+"找"+e.info.occupations+"工作","keywords":t+",鱼泡网,建筑招聘,建筑人才,工地招工,工人找活,施工队找活,工程信息,找工人,建筑工地"})}for(var o=[].concat(_toConsumableArray(e.certificates)),a=[],r=0;r<o.length;r++){var u=be({},o[r],{"images":o[r].images.split(",")});a.push(u)}m((0,Ee.setSubpackcertificate)([].concat(a)));for(var i=[].concat(_toConsumableArray(e.project)),s=[],c=0;c<i.length;c++){var l=be({},i[c],{"images":i[c].images.split(",")});s.push(l)}m((0,Ee.setSubpackProject)([].concat(s)));var p=(new Date).getTime(),f=new Date(p);e.info.birthday&&(f.getFullYear()-parseInt(e.info.birthday)==0?H(""):H(f.getFullYear()-parseInt(e.info.birthday)+"岁")),v({"certificates":e.certificates,"info":e.info,"operation":e.operation,"project":e.project}),T(e.info.tel),S(!1),L(e.operation.is_zan),B(e.operation.is_collect),0==e.info.is_read&&"2"!=e.info.is_end&&0==e.operation.status&&C(!0)}})}()}),(0,ke.useEffect)(function(){c&&pe&&("support"===pe?de():"collect"===pe?ye():"phone"===pe&&me())},[c]);var me=function handlePhone(){if(!c)return fe("phone"),void se(!0);var e={"resume_uuid":f};(0,Ae.resumesGetTelAcrion)(e).then(function(e){200===e.errcode?(C(!0),T(e.tel),E(!1)):7405==e.errcode?we.default.showModal({"title":"温馨提示","content":e.errmsg,"success":function success(e){e.confirm?we.default.navigateTo({"url":"/pages/getintegral/index"}):e.cancel&&we.default.navigateBack()}}):(0,Re.default)(e.errmsg)})},de=function resumeSupport(){if(fe("support"),c){var e={"resume_uuid":f};(0,Ae.resumeSupportAction)(e).then(function(e){"ok"===e.errcode?((0,Re.default)(e.errmsg),L(e.show)):(0,Re.default)(e.errmsg)})}else se(!0)},ye=function resumeCollect(){if(!c)return fe("collect"),void se(!0);var e={"resume_uuid":f};(0,Ae.resumeCollectAction)(e).then(function(e){"ok"===e.errcode?((0,Re.default)(e.errmsg),B(e.show)):(0,Re.default)(e.errmsg)})};this.anonymousFunc0=me,this.anonymousFunc1=function(){return we.default.makePhoneCall({"phoneNumber":j})},this.anonymousFunc2=function(){return function handleComplaint(){oe||!g.info.show_complain.show_complain?we.default.showModal({"title":"温馨提示","content":"您已投诉该信息,请勿重复提交！","showCancel":!1}):W(!0)}()};var he=g.info.address?(0,De.default)({"workotextone-address":!0,"workotextone-noaddress":!g.info.distance}):null;this.anonymousFunc3=function handleMap(){var e=g.info.location.split(",");we.default.openLocation({"latitude":parseFloat(e[1]),"longitude":parseFloat(e[0]),"name":g.info.address,"address":g.info.address,"scale":18})};var ge=g.info.introduce?Ce.REPLACEWEIXINTEXT?g.info.introduce.replace(Ce.FILTERWEIXINREG,""):g.info.introduce:"暂未填写";this.anonymousFunc5=function(){return we.default.navigateTo({"url":"/subpackage/pages/projects/index"})},this.anonymousFunc7=function(){return we.default.navigateTo({"url":"/subpackage/pages/skills/index"})},this.anonymousFunc8=de,this.anonymousFunc9=ye,this.anonymousFunc10=function(){E(!1)},this.anonymousFunc11=function handleTellPhone(){we.default.makePhoneCall({"phoneNumber":j})};var ve=g.info.occupations.length?g.info.occupations.map(function(e,n){return e={"privateOriginal":(0,ke.internal_get_original)(e)},{"loopState__temp2":g.info.occupations.length?n+n:null,"privateOriginal":e.privateOriginal}}):[],_e=g.project.length?g.project[0].image.map(function(e,n){e={"privateOriginal":(0,ke.internal_get_original)(e)};var t=g.project.length?n+n:null,o="ijzzz"+n;return a.anonymousFunc4Map[o]=function(){return Cb(e.privateOriginal)},{"loopState__temp6":t,"_$indexKey":o,"privateOriginal":e.privateOriginal}}):[],Fe=g.certificates.length?g.certificates[0].image.map(function(e,n){e={"privateOriginal":(0,ke.internal_get_original)(e)};var t=g.certificates.length?n+n:null,o="jazzz"+n;return a.anonymousFunc6Map[o]=function(){return Cb(e.privateOriginal)},{"loopState__temp8":t,"_$indexKey2":o,"privateOriginal":e.privateOriginal}}):[];return V&&ke.propsManager.set({"display":V,"textarea":Z,"handleTextarea":function handleTextarea(e){var n=e.detail.value;ee(n)},"setComplaintModal":W,"handleSubmit":function handleSubmit(){if(!(0,je.isVaildVal)(Z,5,500))return(0,Oe.ShowActionModal)({"msg":"输入内容不少于5个字且必须包含文字"}),!1;var e={"content":Z,"resume_uuid":g.info.uuid};(0,Ae.resumesComplainAction)(e).then(function(e){"ok"===e.errcode?(0,Me.SubscribeToNews)("complain",function(){(0,Oe.showModalTip)({"tips":e.errmsg,"callback":function callback(){ae(!0),W(!1)}})}):(0,Re.default)(e.errmsg)})}},s,i),Object.assign(this.__state,{"anonymousState__temp3":he,"anonymousState__temp4":ge,"data":g,"loopArray85":ve,"loopArray87":_e,"loopArray88":Fe,"$compid__76":s,"isAuth":ie,"IMGCDNURL":Ce.IMGCDNURL,"examine":b,"onoff":A,"login":c,"user":l,"praise":z,"ISCANSHARE":Ce.ISCANSHARE,"collect":$,"shownewtips":M,"complaintModal":V,"age":K,"phone":j}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc4Map[e]&&(n=this.anonymousFunc4Map)[e].apply(n,o)}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc6Map[e]&&(n=this.anonymousFunc6Map)[e].apply(n,o)}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}}]),ResumeDetail);function ResumeDetail(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,ResumeDetail);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(ResumeDetail.__proto__||Object.getPrototypeOf(ResumeDetail)).apply(this,arguments));return e.config={"navigationBarTitleText":"找活名片","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},e.$usedState=["anonymousState__temp3","anonymousState__temp4","data","loopArray85","loopArray87","loopArray88","$compid__76","isAuth","IMGCDNURL","examine","onoff","login","user","praise","ISCANSHARE","collect","shownewtips","complaintModal","age","phone"],e.anonymousFunc4Map={},e.anonymousFunc6Map={},e.customComponents=["Auth","Report"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11"],a.$$componentPath="pages/resume/detail/index",a.config={"navigationBarTitleText":"找活名片","navigationBarBackgroundColor":"#0099ff","navigationBarTextStyle":"white","backgroundTextStyle":"dark"},n.default=a,Page(t(0).default.createComponent(a,!0))},"200":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0}),n.setSubpackcertificate=function setSubpackcertificate(e){return{"type":o.SETSUBPACKCERTIFICATE,"data":e}},n.setSubpackProject=function setSubpackProject(e){return{"type":o.SETSUBPACKPROJECT,"data":e}};var o=t(38)},"201":function(e,n,t){}},[[199,0,1]]]);