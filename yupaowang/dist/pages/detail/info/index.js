(tt.webpackJsonp=tt.webpackJsonp||[]).push([[43],{"177":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var pe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},me=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,a=!1,u=void 0;try{for(var i,r=e[Symbol.iterator]();!(o=(i=r.next()).done)&&(t.push(i.value),!n||t.length!==n);o=!0);}catch(e){a=!0,u=e}finally{try{!o&&r.return&&r.return()}finally{if(a)throw u}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var ye=t(0),he=_interopRequireDefault(ye),ge=t(2),_e=t(1),ve=t(3),be=t(8),Fe=t(6),we=t(4),Se=_interopRequireDefault(we),Ie=t(16),Ae=t(7);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t(178);var a=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(DetailInfoPage,he.default.Component),o(DetailInfoPage,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,n,t)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(t):void 0})(DetailInfoPage.prototype.__proto__||Object.getPrototypeOf(DetailInfoPage.prototype),"_constructor",this).call(this,e),this.$$refs=new he.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var a=this;this.__state=e||this.state||{},this.__props=n||this.props||{};var o=this.$prefix,u=(0,ye.genCompid)(o+"$compid__66"),i=me(u,2),r=i[0],s=i[1],c=(0,ye.useRouter)().params,l=c.id,f=void 0===l?"":l,d=c.refId,p=void 0===d?"":d,m=he.default.getStorageSync(Ae.UserInfo),y=(0,ye.useState)({"title":"","time":"","image":"","user_name":"","classifyName":[],"detail":"","show_full_address":"","location":"","map_address_name":"","map_street_name":"","tel_str":"","show_ajax_btn":!1,"id":0,"is_collect":0,"view_images":[],"is_end":0,"is_check":0,"has_top":0,"show_complaint":{"show_complaint":0,"tips_message":""},"top_info":{"is_top":""}}),h=me(y,2),g=h[0],_=h[1],v=(0,ye.useState)(!1),b=me(v,2),F=b[0],w=b[1],S=(0,ye.useState)(""),I=me(S,2),A=I[0],C=I[1],P=(0,ye.useState)(!1),O=me(P,2),T=O[0],k=O[1],x=(0,ye.useState)(0),D=me(x,2),M=D[0],j=D[1],N=(0,ye.useState)(""),E=me(N,2),R=E[0],$=E[1],L=(0,ye.useState)(!1),U=me(L,2),B=(U[0],U[1],(0,ye.useState)(!1)),W=me(B,2),H=W[0],G=W[1],q=(0,ye.useState)(!1),z=me(q,2),X=(z[0],z[1],(0,ye.useState)("")),J=me(X,2),V=J[0],K=J[1],Q=(0,ye.useState)(!1),Y=me(Q,2),Z=Y[0],ee=Y[1],ne=(0,ye.useState)(!0),te=me(ne,2),oe=te[0],ae=te[1],ue=(0,ve.useSelector)(function(e){return e.User.login}),ie=(0,ye.useState)([]),re=me(ie,2);function sb(e){he.default.navigateTo({"url":e})}function vb(){return ue||(he.default.navigateTo({"url":_e.CODEAUTHPATH}),0)}re[0],re[1],(0,ye.useDidShow)(function(){T?k(!1):se()});var se=function getRecruitInfo(){var e={"type":"job","infoId":f};(ue?ge.jobInfoAction:ge.jobNoUserInfoAction)(e).then(function(t){ce(t,function(){if(k(!1),_(t.result),K(t.result.tel_str),ae(t.result.show_ajax_btn),he.default.setNavigationBarTitle({"title":t.result.title}),_e.SERIES==_e.BAIDUSERIES){var e=t.result.classifyName[0],n=e.split("/").map(function(e){return"招"+e+"师傅"}).join(",");he.default.setPageInfo({"title":t.result.title,"description":t.result.title+t.result.detail,"keywords":t.result.show_full_address+"招"+e+"师傅,"+n+",工地招工,找工人,建筑工地"})}j(t.result.is_collect),m.userId===t.result.user_id?$("own"):$(t.errcode)})}).catch(function(){(0,we.ShowActionModal)({"msg":"网络异常，请重新进入","success":function success(){he.default.navigateBack()}})})},ce=function detailGetTelAction(e,n){if("ok"==e.errcode||"end"==e.errcode||"ajax"==e.errcode)n&&n();else if("end"==e.errcode)(0,Se.default)(e.errmsg);else if("auth_not_pass"==e.errcode||"to_auth"==e.errcode)he.default.showModal({"title":"温馨提示","content":e.errmsg,"success":function success(e){e.confirm?he.default.navigateTo({"url":"/pages/realname/index"}):he.default.navigateBack()}});else if("none_tel"==e.errcode)he.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"返回列表","confirmText":"绑定手机","success":function success(e){e.confirm?he.default.navigateTo({"url":"/pages/userinfo/add/index"}):e.cancel&&he.default.navigateBack()}});else if("get_integral"==e.errcode)he.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"返回列表","confirmText":"获取积分","success":function success(e){e.confirm?he.default.navigateTo({"url":"/pages/getintegral/index"}):e.cancel&&he.default.navigateBack()}});else if("reload"==e.errcode)he.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"confirmText":"确定","success":function success(e){e.confirm&&se()}});else if("goback"==e.errcode){var t=he.default.getCurrentPages();he.default.showModal({"title":"温馨提示","content":e.errmsg,"confirmText":"确定","showCancel":!1,"success":function success(e){e.confirm&&(1<t.length?he.default.navigateBack():he.default.reLaunch({"url":"/pages/index/index"}))}})}else he.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"confirmText":"我知道了","success":function success(){he.default.navigateBack()}})};function xb(){if(vb()){var e={"type":"job","infoId":g.id};(0,ge.jobGetTelAction)(e).then(function(e){ce(e,function(){k(!0),K(e.tel),ee(!0),ae(!1)})})}}function yb(){"end"===R?he.default.showModal({"title":"温馨提示","content":"该招工信息已招到，暂时不能投诉","showCancel":!1}):H?he.default.showModal({"title":"提示","content":"您已投诉该信息，请勿重复操作！","showCancel":!1}):Z?w(!0):g.show_ajax_btn?(0,Se.default)("请查看完整的手机号码后再操作！"):2!==g.is_end&&g.show_complaint.show_complaint?w(!0):he.default.showModal({"title":"提示","content":"您已投诉该信息，请勿重复投诉！","showCancel":!1})}(0,ye.useEffect)(function(){p&&he.default.setStorageSync(Ae.REFID,p)},[p]),(0,ye.useShareAppMessage)(function(){var e="/pages/detail/index/index?id="+f,n=he.default.getStorageSync(Ae.UserInfo);return pe({},(0,Fe.getUserShareMessage)(),{"path":n?e+"&refId="+n.userId:e})}),this.anonymousFunc0=function(){return xb()},this.anonymousFunc1=function(){he.default.makePhoneCall({"phoneNumber":V})},this.anonymousFunc2=yb,this.anonymousFunc3=function(){return sb("/subpackage/pages/anti-fraud/index")},this.anonymousFunc4=function(){return sb("/pages/static/notice/index?id=32")};var le=_e.REPLACEWEIXINTEXT?g.detail.replace(_e.FILTERWEIXINREG,""):g.detail;this.anonymousFunc6=function handleMap(){var e=g.location.split(",");k(!0),he.default.openLocation({"latitude":parseFloat(e[1]),"longitude":parseFloat(e[0]),"name":g.map_address_name,"address":g.map_street_name,"scale":18})},this.anonymousFunc7=function(){return sb(_e.DOWNLOADAPPPATH)},this.anonymousFunc8=function collection(){vb()&&(0,ge.recruitListCancelCollectionAction)(g.id.toString()).then(function(e){(0,Se.default)(e.errmsg),"add"===e.action?j(1):j(0)})},this.anonymousFunc9=yb,this.anonymousFunc10=function(){return xb()},this.anonymousFunc11=function(){he.default.makePhoneCall({"phoneNumber":V})};var fe=g.classifyName.map(function(e,n){return{"$loopState__temp2":n+n,"$original":(e={"$original":(0,ye.internal_get_original)(e)}).$original}}),de=g.view_images.length?g.view_images.map(function(e,n){e={"$original":(0,ye.internal_get_original)(e)};var t=g.view_images.length?n+n:null,o="hhzzz"+n;return a.anonymousFunc5Map[o]=function(){return function handleImage(e){k(!0),he.default.previewImage({"current":e,"urls":[e]})}(e.$original)},{"$loopState__temp5":t,"_$indexKey":o,"$original":e.$original}}):[];return F&&ye.propsManager.set({"display":F,"textarea":A,"handleTextarea":function handleTextarea(e){var n=e.detail.value;C(n)},"setComplaintModal":w,"handleSubmit":function handleSubmit(){if(!(0,be.isVaildVal)(A,5,500))return(0,we.ShowActionModal)({"msg":"输入内容不少于5个字且必须包含文字"}),!1;var e={"content":A,"type":"job","infoId":g.id};(0,ge.publishComplainAction)(e).then(function(e){"ok"===e.errcode&&(0,Ie.SubscribeToNews)("complain",function(){(0,we.showModalTip)({"tips":e.errmsg,"callback":function callback(){w(!1),G(!0)}})})})}},s,r),Object.assign(this.__state,{"anonymousState__temp3":le,"data":g,"loopArray72":fe,"loopArray73":de,"$compid__66":s,"resCode":R,"editPhone":oe,"SHOWOFFICIALACCOUNT":_e.SHOWOFFICIALACCOUNT,"DOWNLOADAPP":_e.DOWNLOADAPP,"IMGCDNURL":_e.IMGCDNURL,"isCollection":M,"ISCANSHARE":_e.ISCANSHARE,"complaintModal":F,"phone":V}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(){}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc5Map[e]&&(n=this.anonymousFunc5Map)[e].apply(n,o)}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}}]),DetailInfoPage);function DetailInfoPage(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,DetailInfoPage);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(DetailInfoPage.__proto__||Object.getPrototypeOf(DetailInfoPage)).apply(this,arguments));return e.config={"navigationBarTitleText":""},e.$usedState=["anonymousState__temp3","data","loopArray72","loopArray73","$compid__66","resCode","editPhone","SHOWOFFICIALACCOUNT","DOWNLOADAPP","IMGCDNURL","isCollection","ISCANSHARE","complaintModal","phone"],e.anonymousFunc5Map={},e.customComponents=["WechatNotice","Report"],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11"],a.$$componentPath="pages/detail/info/index",a.config={"navigationBarTitleText":""},n.default=a,Page(t(0).default.createComponent(a,!0))},"178":function(e,n,t){}},[[177,0,1]]]);