(tt.webpackJsonp=tt.webpackJsonp||[]).push([[87],{"115":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var K=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},B=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=t(0),o=_interopRequireDefault(G),W=_interopRequireDefault(t(116)),H=_interopRequireDefault(t(5)),L=_interopRequireDefault(t(12));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t(117);var i=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(UsedPublish,o.default.Component),r(UsedPublish,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,n,t)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(t):void 0})(UsedPublish.prototype.__proto__||Object.getPrototypeOf(UsedPublish.prototype),"_constructor",this).call(this,e),this.$$refs=new o.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var o=this;function Qa(e,n){var t=JSON.parse(JSON.stringify(_));t[n]=e.detail.value,h(t)}function Ta(e){q(e)}this.__state=e||this.state||{},this.__props=n||this.props||{};var r=this.$prefix,i=(0,G.genCompid)(r+"$compid__45"),a=B(i,2),u=a[0],s=a[1],c=(0,G.genCompid)(r+"$compid__46"),l=B(c,2),d=l[0],f=l[1],y=(0,G.useRouter)().params.id,m=void 0===y?"":y,p=(0,W.default)(m),_=p.model,h=p.setModel,v=p.initModel,b=p.parentCurrent,F=p.setParentCurrent,g=p.childCurrent,C=p.setChildCurrent,P=p.classifyName,w=p.setClassiryName,k=p.cityName,I=p.setCityName,M=p.setCIndex,O=p.setPIndex,T=p.areaProvince,S=p.areaCity,$=p.cIndex,x=p.pIndex,A=p.thisCurrentAreaCity,j=p.userTel,N=p.vaildPublishModelInfo,D=(0,G.useState)(!1),R=B(D,2),U=R[0],q=R[1],z=(0,L.default)(),E=z.text,J=z.userGetCode;this.anonymousFunc0=function(){return Ta(!1)},this.anonymousFunc3=function(e){return Qa(e,"title")},this.anonymousFunc4=function(){return Ta(!0)},this.anonymousFunc5=function(e){return function onPickerChange(e){if(v){var n=e.detail.value[0],t=e.detail.value[1];I(v.areaTree[n].name+"-"+v.areaTree[n].children[t].name),h(K({},_,{"province_id":v.areaTree[n].id,"city_id":v.areaTree[n].children[t].id}))}}(e)},this.anonymousFunc6=function(e){return function onColumnChange(e){var n=e.detail.column,t=e.detail.value;0===n?(O(t),A(t)):M(t)}(e)},this.anonymousFunc7=function(e){return Qa(e,"user_name")},this.anonymousFunc8=function(e){return Qa(e,"user_mobile")},this.anonymousFunc9=function(e){return Qa(e,"code")},this.anonymousFunc10=function(){return J(_.user_mobile)},this.anonymousFunc11=function(e){return Qa(e,"detail")},this.anonymousFunc12=function(){return N()};var Q=v?v.classifyTree.map(function(e,n){e={"$original":(0,G.internal_get_original)(e)};var t=v?(0,H.default)({"drawer-list-item overwords":!0,"drawer-list-item-active":n===b}):null,r="fdzzz"+n;return o.anonymousFunc1Map[r]=function(){return function useClickClassifyParentId(e){F(e)}(n)},{"$loopState__temp2":t,"_$indexKey":r,"$original":e.$original}}):[],V=v?v.classifyTree[b].attributes.map(function(e,n){e={"$original":(0,G.internal_get_original)(e)};var t=v?(0,H.default)({"drawer-list-item overwords":!0,"drawer-list-item-active":n==g&&e.$original.id==_.attribute_id}):null,r="fezzz"+n;return o.anonymousFunc2Map[r]=function(){return function useClickClassifyChildId(e){if(C(e),v){var n=v.classifyTree[b].name+"-"+v.classifyTree[b].attributes[e].name;w(n),q(!1),h(K({},_,{"attribute_id":v.classifyTree[b].attributes[e].id,"category_id":v.classifyTree[b].id}))}}(n)},{"$loopState__temp4":t,"_$indexKey2":r,"$original":e.$original}}):[];return G.propsManager.set({"show":U,"onClose":this.anonymousFunc0},s,u),G.propsManager.set({"num":0},f,d),Object.assign(this.__state,{"initModel":v,"loopArray50":Q,"loopArray51":V,"$compid__45":s,"$compid__46":f,"parentCurrent":b,"model":_,"classifyName":P,"areaProvince":T,"areaCity":S,"pIndex":x,"cIndex":$,"cityName":k,"userTel":j,"text":E}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(e){for(var n,t=arguments.length,r=Array(1<t?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return this.anonymousFunc1Map[e]&&(n=this.anonymousFunc1Map)[e].apply(n,r)}},{"key":"anonymousFunc2","value":function anonymousFunc2(e){for(var n,t=arguments.length,r=Array(1<t?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return this.anonymousFunc2Map[e]&&(n=this.anonymousFunc2Map)[e].apply(n,r)}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}},{"key":"anonymousFunc12","value":function anonymousFunc12(){}}]),UsedPublish);function UsedPublish(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,UsedPublish);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(UsedPublish.__proto__||Object.getPrototypeOf(UsedPublish)).apply(this,arguments));return e.$usedState=["initModel","loopArray50","loopArray51","$compid__45","$compid__46","parentCurrent","model","classifyName","areaProvince","areaCity","pIndex","cIndex","cityName","userTel","text"],e.anonymousFunc1Map={},e.anonymousFunc2Map={},e.customComponents=["Auth","AtDrawer","WordsTotal"],e}i.$$events=["anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11","anonymousFunc12"],i.$$componentPath="pages/used/publish/index",n.default=i,Page(t(0).default.createComponent(i,!0))},"116":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var K=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},B=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")};n.default=function useUsedInfo(e){var n={"type":"fleamarket","infoId":e},t=(0,G.useState)({"type":"fleamarket","infoId":e,"user_mobile":"","title":"","user_name":"","detail":"","code":"","province_id":"","city_id":"","category_id":"","attribute_id":""}),r=B(t,2),o=r[0],i=r[1],a=(0,G.useState)(),u=B(a,2),s=u[0],c=u[1],l=(0,G.useState)(0),d=B(l,2),f=d[0],y=d[1],m=(0,G.useState)(0),p=B(m,2),_=p[0],h=p[1],v=(0,G.useState)(""),b=B(v,2),F=b[0],g=b[1],C=(0,G.useState)(""),P=B(C,2),w=P[0],k=P[1],I=(0,G.useState)(0),M=B(I,2),O=M[0],T=M[1],S=(0,G.useState)([]),$=B(S,2),x=$[0],A=$[1],j=(0,G.useState)(0),N=B(j,2),D=N[0],R=N[1],U=(0,G.useState)([]),q=B(U,2),z=q[0],E=q[1];(0,G.useEffect)(function(){(0,H.getUsedInfoModel)(n).then(function(e){"ok"==e.errcode?(ee=e.areaTree,c(e),J(e),Q(e)):(0,L.ShowActionModal)({"msg":e.errmsg,"success":function success(){W.default.navigateBack()}})})},[]);var J=function initPublishModelInfo(e){var n=K({},o,{"title":e.model.title||"","attribute_id":e.model.attribute_id||"","category_id":e.model.category_id||"","detail":e.model.detail||"","user_mobile":e.model.user_mobile||"","user_name":e.model.user_name||"","province_id":e.model.province_id||"","city_id":e.model.city_id||""});if(ne=n.user_mobile,0===e.model.is_check&&(te=JSON.stringify(n)),i(n),k(e.show_address),n.category_id){var t=e.classifyTree.findIndex(function(e){return e.id==n.category_id}),r=e.classifyTree[t].attributes.findIndex(function(e){return e.id==n.attribute_id});g(e.classifyTree[t].name+"-"+e.classifyTree[t].attributes[r].name),h(r),y(t)}},Q=function initAreaPicker(e){var n=(0,Y.objDeepCopy)(e.areaTree),a=e.model.province_id||"",u=e.model.city_id||"",s=0,c=[];n.map(function(e,n){a==e.id&&(T(n),s=n);var t=e.has_children;if(c.push({"id":e.id,"has_children":t,"name":e.name}),t)for(var r=e.children,o=r.length,i=0;i<o;i++)if(u==r[i].id){R(i);break}}),A(c),V(s)},V=function thisCurrentAreaCity(e){if(ee){var n=(0,Y.objDeepCopy)(ee[e]),t=n.has_children;E(t?n.children:[{"id":n.id,"pid":n.pid,"name":n.name}])}};return{"model":o,"setModel":i,"initModel":s,"parentCurrent":f,"setParentCurrent":y,"childCurrent":_,"setChildCurrent":h,"classifyName":F,"setClassiryName":g,"cityName":w,"setCityName":k,"setCIndex":R,"cIndex":D,"setAreaCity":E,"areaCity":z,"setPIndex":T,"setAreaProvince":A,"areaProvince":x,"pIndex":O,"thisCurrentAreaCity":V,"userTel":ne,"vaildPublishModelInfo":function vaildPublishModelInfo(){if(!(0,Z.isVaildVal)(o.title,3,30))return(0,X.default)("请输入3-30字的标题"),!1;if(!o.category_id||!o.attribute_id)return(0,X.default)("请选择交易目的"),!1;if(!o.province_id||!o.city_id)return(0,X.default)("请选择您的地区"),!1;if(!o.user_name)return(0,X.default)("请输入您的姓名"),!1;if(!(0,Z.isPhone)(o.user_mobile))return(0,X.default)("请输入正确的联系电话"),!1;if(o.user_mobile!==ne&&!o.code)return(0,X.default)("请输入验证码"),!1;if(!(0,Z.isVaildVal)(o.detail,15,500))return(0,X.default)("请正确输入5-500字的交易详情"),!1;if(s&&0==s.model.is_check&&JSON.stringify(o)==te)return(0,L.ShowActionModal)({"title":"审核失败","msg":"请修改该信息后再进行提交"}),!1;(0,H.publishUsedInfo)(o).then(function(e){(0,L.ShowActionModal)({"msg":e.errmsg,"success":function success(){e.errcode}})}).catch(function(){(0,L.ShowActionModal)({"msg":"网络错误，发布失败"})})}}};var G=t(0),W=_interopRequireDefault(G),H=t(2),L=t(4),X=_interopRequireDefault(L),Y=t(8),Z=t(7);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var ee=!1,ne="",te=""},"117":function(e,n,t){}},[[115,0,1]]]);