(tt.webpackJsonp=tt.webpackJsonp||[]).push([[43],{"168":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var le=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,a=!1,u=void 0;try{for(var i,r=e[Symbol.iterator]();!(o=(i=r.next()).done)&&(t.push(i.value),!n||t.length!==n);o=!0);}catch(e){a=!0,u=e}finally{try{!o&&r.return&&r.return()}finally{if(a)throw u}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var fe=t(0),de=_interopRequireDefault(fe),me=t(2),pe=t(1),ye=t(3),ge=t(7),he=t(4),_e=_interopRequireDefault(he),ve=t(15),be=t(6);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t(169);var a=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(DetailInfoPage,de.default.Component),o(DetailInfoPage,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,n,t)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(t):void 0})(DetailInfoPage.prototype.__proto__||Object.getPrototypeOf(DetailInfoPage.prototype),"_constructor",this).call(this,e),this.$$refs=new de.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var a=this;this.__state=e||this.state||{},this.__props=n||this.props||{};var o=this.$prefix,u=(0,fe.genCompid)(o+"$compid__67"),i=le(u,2),r=i[0],s=i[1],c=(0,fe.useRouter)().params.id,l=de.default.getStorageSync(be.UserInfo),f=(0,fe.useState)({"title":"","time":"","image":"","user_name":"","classifyName":[],"detail":"","show_full_address":"","location":"","map_address_name":"","map_street_name":"","tel_str":"","show_ajax_btn":!1,"id":0,"is_collect":0,"view_images":[],"is_end":0,"is_check":0,"has_top":0,"show_complaint":{"show_complaint":0,"tips_message":""},"top_info":{"is_top":""}}),d=le(f,2),m=d[0],p=d[1],y=(0,fe.useState)(!1),g=le(y,2),h=g[0],_=g[1],v=(0,fe.useState)(""),b=le(v,2),F=b[0],w=b[1],k=(0,fe.useState)(!1),T=le(k,2),x=T[0],S=T[1],C=(0,fe.useState)(0),I=le(C,2),P=I[0],M=I[1],j=(0,fe.useState)(""),A=le(j,2),D=A[0],$=A[1],O=(0,fe.useState)(!1),N=le(O,2),R=N[0],E=N[1],B=(0,fe.useState)(!1),H=le(B,2),U=H[0],L=H[1],G=(0,fe.useState)(!1),q=le(G,2),z=q[0],V=(q[1],(0,fe.useState)("")),J=le(V,2),K=J[0],W=J[1],Q=(0,fe.useState)(!1),X=le(Q,2),Y=X[0],Z=X[1],ee=(0,fe.useState)(!0),ne=le(ee,2),te=ne[0],oe=ne[1],ae=(0,ye.useSelector)(function(e){return e.User.login}),ue=(0,fe.useState)([]),ie=le(ue,2);function ib(e){de.default.navigateTo({"url":e})}function lb(){return ae||(de.default.navigateTo({"url":pe.CODEAUTHPATH}),0)}function nb(){if(lb()){var e={"type":"job","infoId":m.id};(0,me.jobGetTelAction)(e).then(function(e){!function detailGetTelAction(e){if("ok"==e.errcode||"end"==e.errcode||"ajax"==e.errcode)S(!0),W(e.tel),Z(!0),oe(!1);else if("end"==e.errcode)(0,_e.default)(e.errmsg);else if("auth_not_pass"==e.errcode||"to_auth"==e.errcode)de.default.showModal({"title":"温馨提示","content":e.errmsg,"success":function success(e){e.confirm?de.default.navigateTo({"url":"/pages/realname/index"}):de.default.navigateBack()}});else if("none_tel"==e.errcode)de.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"返回列表","confirmText":"绑定手机","success":function success(e){e.confirm?de.default.navigateTo({"url":"/pages/userinfo/add/index"}):e.cancel&&de.default.navigateBack()}});else if("get_integral"==e.errcode)de.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"返回列表","confirmText":"获取积分","success":function success(e){e.confirm?de.default.navigateTo({"url":"/pages/getintegral/index"}):e.cancel&&de.default.navigateBack()}});else if("reload"==e.errcode)de.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"confirmText":"确定","success":function success(e){e.confirm&&re()}});else if("goback"==e.errcode){var n=de.default.getCurrentPages();de.default.showModal({"title":"温馨提示","content":e.errmsg,"confirmText":"确定","showCancel":!1,"success":function success(e){e.confirm&&(1<n.length?de.default.navigateBack():de.default.reLaunch({"url":"/pages/index/index"}))}})}else de.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"confirmText":"我知道了","success":function success(){de.default.navigateBack()}})}(e)})}}function ob(){"end"===D?de.default.showModal({"title":"温馨提示","content":"该招工信息已招到，暂时不能投诉","showCancel":!1}):U?de.default.showModal({"title":"提示","content":"您已投诉该信息，请勿重复操作！","showCancel":!1}):Y?_(!0):m.show_ajax_btn?(0,_e.default)("请查看完整的手机号码后再操作！"):2!==m.is_end&&m.show_complaint.show_complaint?_(!0):de.default.showModal({"title":"提示","content":"您已投诉该信息，请勿重复投诉！","showCancel":!1})}function rb(){(0,me.jobEndStatusAction)(m.id).then(function(e){"ok"===e.errcode?((0,_e.default)(e.errmsg),E(!1),S(!0)):(0,_e.default)(e.errmsg)})}ie[0],ie[1],(0,fe.useDidShow)(function(){x?S(!1):re()});var re=function getRecruitInfo(){var e={"type":"job","infoId":c};ae?(0,me.jobInfoAction)(e).then(function(e){S(!1),p(e.result),W(e.result.tel_str),oe(e.result.show_ajax_btn),de.default.setNavigationBarTitle({"title":e.result.title}),M(e.result.is_collect),l.userId===e.result.user_id?$("own"):$(e.errcode)}):(0,me.jobNoUserInfoAction)(e).then(function(e){S(!1),p(e.result),W(e.result.tel_str),oe(e.result.show_ajax_btn),de.default.setNavigationBarTitle({"title":e.result.title}),M(e.result.is_collect),l.userId===e.result.user_id?$("own"):$(e.errcode)})};this.anonymousFunc0=function(){return nb()},this.anonymousFunc1=function(){de.default.makePhoneCall({"phoneNumber":K})},this.anonymousFunc2=ob,this.anonymousFunc3=function(){return ib("/subpackage/pages/anti-fraud/index")},this.anonymousFunc4=function(){return ib("/subpackage/pages/notice/index?id=32")},this.anonymousFunc6=function handleMap(){var e=m.location.split(",");S(!0),de.default.openLocation({"latitude":parseFloat(e[1]),"longitude":parseFloat(e[0]),"name":m.map_address_name,"address":m.map_street_name,"scale":18})},this.anonymousFunc7=function(){return ib("/subpackage/pages/download/index")},this.anonymousFunc8=rb,this.anonymousFunc9=function(){return ib("/pages/topping/index?id="+m.id+"&type=1")},this.anonymousFunc10=rb,this.anonymousFunc11=function(){return function handleTopping(e){if(e.has_top){var n=parseInt(e.top_info.end_time);if((new Date).getTime()/1e3<n){de.default.showLoading({"title":"正在执行操作"});var t={"infoId":c,"status":"0"==e.toping?"1":"0"};return(0,me.jobUpdateTopStatusAction)(t).then(function(e){if("ok"===e.errcode)(0,_e.default)(e.errmsg),S(!0),E(!0);else{if("auth_forbid"===e.errcode)return void de.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"取消","confirmText":"去实名","success":function success(e){e.confirm&&de.default.navigateTo({"url":"/pages/realname/index?backtwo=backtwo"})}});if("member_forbid"==e.errcode)return void de.default.showModal({"title":"温馨提示","content":"mydata.errmsg","cancelText":"取消","confirmText":"联系客服","success":function success(e){if(e.confirm){var n=pe.SERVERPHONE;de.default.makePhoneCall({"phoneNumber":n})}}});de.default.showToast({"title":e.errmsg,"icon":"none","duration":1500})}}),!1}}ib("/pages/topping/index?id="+e.id)}(m)},this.anonymousFunc12=function collection(){lb()&&(0,me.recruitListCancelCollectionAction)(m.id.toString()).then(function(e){(0,_e.default)(e.errmsg),"add"===e.action?M(1):M(0)})},this.anonymousFunc13=ob,this.anonymousFunc14=function(){return nb()},this.anonymousFunc15=function(){de.default.makePhoneCall({"phoneNumber":K})};var se=m.classifyName.map(function(e,n){return{"$loopState__temp2":n+n,"$original":(e={"$original":(0,fe.internal_get_original)(e)}).$original}}),ce=m.view_images.length?m.view_images.map(function(e,n){e={"$original":(0,fe.internal_get_original)(e)};var t=m.view_images.length?n+n:null,o="ibzzz"+n;return a.anonymousFunc5Map[o]=function(){return function handleImage(e){S(!0),de.default.previewImage({"current":e,"urls":[e]})}(e.$original)},{"$loopState__temp4":t,"_$indexKey":o,"$original":e.$original}}):[];return h&&fe.propsManager.set({"display":h,"textarea":F,"handleTextarea":function handleTextarea(e){var n=e.detail.value;w(n)},"setComplaintModal":_,"handleSubmit":function handleSubmit(){if(!(0,ge.isVaildVal)(F,15,500))return(0,_e.default)("输入内容不少于15个字且必须包含文字"),!1;var e={"content":F,"type":"job","infoId":m.id};(0,me.publishComplainAction)(e).then(function(e){"ok"===e.errcode&&(0,ve.SubscribeToNews)("complain",function(){(0,he.showModalTip)({"tips":e.errmsg,"callback":function callback(){_(!1),L(!0)}})})})}},s,r),Object.assign(this.__state,{"data":m,"loopArray71":se,"loopArray72":ce,"$compid__67":s,"resCode":D,"editPhone":te,"IMGCDNURL":pe.IMGCDNURL,"again":z,"stopHiring":R,"isCollection":P,"ISCANSHARE":pe.ISCANSHARE,"complaintModal":h,"phone":K}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc5Map[e]&&(n=this.anonymousFunc5Map)[e].apply(n,o)}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}},{"key":"anonymousFunc12","value":function anonymousFunc12(){}},{"key":"anonymousFunc13","value":function anonymousFunc13(){}},{"key":"anonymousFunc14","value":function anonymousFunc14(){}},{"key":"anonymousFunc15","value":function anonymousFunc15(){}}]),DetailInfoPage);function DetailInfoPage(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,DetailInfoPage);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(DetailInfoPage.__proto__||Object.getPrototypeOf(DetailInfoPage)).apply(this,arguments));return e.config={"navigationBarTitleText":""},e.$usedState=["data","loopArray71","loopArray72","$compid__67","resCode","editPhone","IMGCDNURL","again","stopHiring","isCollection","ISCANSHARE","complaintModal","phone"],e.anonymousFunc5Map={},e.customComponents=["WechatNotice","Report"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11","anonymousFunc12","anonymousFunc13","anonymousFunc14","anonymousFunc15"],a.$$componentPath="pages/detail/info/index",a.config={"navigationBarTitleText":""},n.default=a,Page(t(0).default.createComponent(a,!0))},"169":function(e,n,t){}},[[168,0,1]]]);