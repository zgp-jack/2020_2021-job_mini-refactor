(swan.webpackJsonp=swan.webpackJsonp||[]).push([[97],{"190":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0}),n.contextItem=void 0;var Ae=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Re=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],o=!0,a=!1,i=void 0;try{for(var r,u=e[Symbol.iterator]();!(o=(r=u.next()).done)&&(t.push(r.value),!n||t.length!==n);o=!0);}catch(e){a=!0,i=e}finally{try{!o&&u.return&&u.return()}finally{if(a)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},o=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var Ee=t(0),Pe=_interopRequireDefault(Ee),je=t(2),De=t(1),Ie=t(5),Ne=(_interopRequireDefault(t(4)),_interopRequireDefault(t(191))),ze=t(3);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t(192);n.contextItem=(0,Ee.createContext)({});var a=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(Topping,Pe.default.Component),o(Topping,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,n,t)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(t):void 0})(Topping.prototype.__proto__||Object.getPrototypeOf(Topping.prototype),"_constructor",this).call(this,e),this.$$refs=new Pe.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var o=this;this.__state=e||this.state||{},this.__props=n||this.props||{},this.$prefix;var s=(0,ze.useDispatch)(),a=(0,ze.useSelector)(function(e){return e.recruitTop.AreParams}),i=(0,Ee.useRouter)().params,r=i.id,l=i.type,p=i.rec,d=i.areaData,f=i.endTimes,y=i.endTimeStr,u=Pe.default.getStorageSync(Ie.UserInfo),c=(0,Ee.useState)({"top_rules":[]}),m=Re(c,2),h=m[0],v=m[1],g=(0,Ee.useState)(0),_=Re(g,2),w=_[0],b=_[1],F=(0,Ee.useState)(0),x=Re(F,2),T=x[0],M=x[1],O=(0,Ee.useState)("请选择置顶天数"),S=Re(O,2),k=S[0],C=S[1],A=(0,Ee.useState)("延长"),R=Re(A,2),E=R[0],P=R[1],j=(0,Ee.useState)([]),D=Re(j,2),I=D[0],N=D[1],z=(0,Ee.useState)({"max_city":0,"max_province":0}),$=Re(z,2),B=$[0],U=$[1],V=(0,Ee.useState)({"city":[],"province":[],"whole":[]}),H=Re(V,2),K=H[0],L=H[1],q=(0,Ee.useState)([]),G=Re(q,2),J=G[0],Y=(G[1],(0,Ee.useState)("")),Z=Re(Y,2),Q=Z[0],W=Z[1],X=(0,Ee.useState)(0),ee=Re(X,2),ne=ee[0],te=ee[1],oe=(0,Ee.useState)(!1),ae=Re(oe,2),ie=ae[0],re=ae[1],ue=(0,Ee.useState)(""),ce=Re(ue,2),se=ce[0],le=ce[1],pe=(0,Ee.useState)(0),de=Re(pe,2),fe=de[0],ye=de[1],me=(0,Ee.useState)(0),he=Re(me,2),ve=(he[0],he[1],(0,Ee.useState)("1")),ge=Re(ve,2),_e=(ge[0],ge[1],(0,Ee.useState)({"max_number":0,"province_integral":0,"max_top_days":0,"max_city":0,"max_province":0})),we=Re(_e,2),be=we[0],Fe=we[1];function Kb(e){if(C(I[e.detail.value]),l){P("修改"),re(!0);var n=function getMyDate(e){var n=new Date(e),t=n.getFullYear(),o=n.getMonth()+1,a=n.getDate(),i=n.getHours(),r=n.getMinutes();return n.getSeconds(),t+"-"+xe(o)+"-"+xe(a)+" "+xe(i)+":"+xe(r)}(864e5*(parseInt(e.detail.value)+1)+1e3*ne);le(n);var t=fe,o=void 0;o=p?K.whole.length?500:20*K.city.length+20*K.province.length:K.whole.length?500:10*K.city.length+20*K.province.length;var a=(ne-(new Date).getTime()/1e3)/86400,i=void 0;i=t===o?o*(parseInt(e.detail.value)+1):0<o-t?p?Math.round((o-t)*a+(20*K.city.length+20*K.province.length)*(parseInt(e.detail.value)+1)):Math.round((o-t)*a+o*(parseInt(e.detail.value)+1)):t*(parseInt(e.detail.value)+1),b(i)}else if(K){var r=0;r=K.whole.length?500*(parseInt(e.detail.value)+1):p?(20*K.city.length+20*K.province.length)*(parseInt(e.detail.value)+1):(10*K.city.length+20*K.province.length)*(parseInt(e.detail.value)+1),b(r)}M(parseInt(e.detail.value)+1)}function Lb(e){Pe.default.navigateTo({"url":e})}function Nb(){Lb("/pages/topping/distruction/index?max_city="+B.max_city+"&max_province="+B.max_province)}function Sb(t){p&&"1"===t.pid&&(K.city.map(function(e,n){e.id===t.id&&K.city.splice(n,1)}),L({"city":K.city,"province":K.province,"whole":K.whole}),s((0,Ne.default)({"city":K.city,"province":K.province,"whole":K.whole}))),"1"===t.pid?K.province.map(function(e,n){e.id===t.id&&K.province.splice(n,1)}):"0"===t.pid?K.whole.map(function(e,n){e.id===t.id&&K.whole.splice(n,1)}):K.city.map(function(e,n){e.id===t.id&&K.city.splice(n,1)}),L({"city":K.city,"province":K.province,"whole":K.whole}),s((0,Ne.default)({"city":K.city,"province":K.province,"whole":K.whole}));var e=fe,n=void 0;n=p?K.whole.length?500:20*K.city.length+20*K.province.length:K.whole.length?500:10*K.city.length+20*K.province.length;var o=(ne-(new Date).getTime()/1e3)/86400,a=void 0;0!==T&&e===n?a=n*T:0===T&&n<e?a=(n-e)*T:0===T?e<n&&(a=Math.round((n-e)*o)):a=0<n-e?Math.round((n-e)*o+n*T):e*T,b(a<=0?0:a)}function Ub(){Lb(p?"/pages/topping/distruction/index?max_city="+be.max_city+"&max_province="+be.max_province:"/pages/topping/distruction/index?max_city="+B.max_city+"&max_province="+B.max_province)}(0,Ee.useEffect)(function(){L(Ae({},a)),Te(a.city,a.province,a.whole)},[a]),(0,Ee.useEffect)(function(){if(l&&!p){var e={"job_id":r,"time":u.tokenTime};(0,je.jobGetTopAreasAction)(e).then(function(e){"ok"===e.errcode?(L({"city":e.data.top_city,"province":e.data.top_province,"whole":e.data.top_country}),s((0,Ne.default)({"city":e.data.top_city,"province":e.data.top_province,"whole":e.data.top_country})),W(e.data.end_time_string),te(e.data.end_time),ye(e.data.max_price)):Pe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1})})}p?(Pe.default.setNavigationBarTitle({"title":"找活置顶"}),(0,je.resumesTopConfigV2Action)({"interface_version":"v2"}).then(function(e){if("ok"===e.errcode){v({"top_rules":e.data.top_rules});for(var n=[],t=0;t<e.data.days.length;t++)n.push(t+"天");if(l&&d){var o,a=JSON.parse(d),i=[],r=[],u=[],c=Math.ceil((parseInt(f)-(new Date).getTime()/1e3)/86400);a.map(function(e){"1"===e.pid?i.push(e):"0"===e.pid?u.push(e):r.push(e)}),o=(20*i.length+20*r.length)*c,L({"city":i,"province":r,"whole":u}),s((0,Ne.default)({"city":i,"province":r,"whole":u})),W(y),te(parseInt(f)),ye(o)}N(n),U({"max_city":e.data.max_city,"max_province":e.data.max_province}),Fe({"province_integral":e.data.province_integral,"max_number":e.data.max_number,"max_top_days":e.data.max_top_days,"max_province":e.data.max_province,"max_city":e.data.max_city})}else Pe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1})})):(0,je.jobTopConfigAction)().then(function(e){if("ok"===e.errcode){v({"top_rules":e.data.top_rules}),U({"max_city":e.data.max_city,"max_province":e.data.max_province});for(var n=[],t=e.data.days,o=0;o<t.length;o++)n.push(t[o]+"天");N(n)}else Pe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1})})},[]);var xe=function addZero(e){return parseInt(e)<10&&(e="0"+e),e},Te=function calcPrice(e,n,t){if(e||n||t)if(l){var o=fe,a=(ne-(new Date).getTime()/1e3)/86400,i=void 0;i=p?t.length?500:20*e.length+20*n.length:t.length?500:10*e.length+20*n.length;var r=void 0;0!==T&&o===i?r=i*T:0===T&&i<o?r=(i-o)*T:0===T?o<i&&(r=Math.round((i-o)*a)):r=0<i-o?p?Math.round(i-o+(20*e.length+20*n.length)*T):Math.round((i-o)*a+i*T):o*T;var u=0;u=r<=0?0:u,b(r)}else{var c=0;c=t.length?500*T:p?(20*e.length+20*n.length)*T:(10*e.length+20*n.length)*T,b(c)}};this.anonymousFunc4=Nb,this.anonymousFunc5=Ub,this.anonymousFunc6=Nb,this.anonymousFunc7=Ub,this.anonymousFunc8=function(e){return Kb(e)},this.anonymousFunc9=function handleCancel(){var e=fe,n=10*K.city.length+20*K.province.length,t=(ne-(new Date).getTime()/1e3)/86400,o=void 0;if(n<e){var a=n-e;o=0<a?a:0}else o=e==n?0:e<n?Math.round((n-e)*t):e;b(o),re(!1),M(0)},this.anonymousFunc10=function(e){return Kb(e)},this.anonymousFunc11=function handleTopping(){var e=K.province.map(function(e){return e.id}),n=K.city.map(function(e){return e.id}),t=K.whole.map(function(e){return e.id});if(e.length||n.length||t.length){var o={"is_country":t.toString(),"mid":u.userId,"province_ids":e.toString(),"city_ids":n.toString(),"day":T,"job_id":r,"time":u.tokenTime},a={"is_country":K.whole.length?1:0,"mid":u.userId,"province_ids":e.toString(),"city_ids":n.toString(),"update_days":T,"job_id":r,"time":u.tokenTime,"update_integral":w};if(l)p?(0,je.resumesUpdateTopResumeAction)(a).then(function(e){"ok"!==e.errcode?"get_integral"!==e.errcode?"auth_forbid"!==e.errcode?"member_forbid"!=e.errcode?Pe.default.showToast({"title":e.errmsg,"icon":"none","duration":1500}):Pe.default.showModal({"title":"温馨提示","content":"mydata.errmsg","cancelText":"取消","confirmText":"联系客服","success":function success(e){if(e.confirm){var n=De.SERVERPHONE;Pe.default.makePhoneCall({"phoneNumber":n})}}}):Pe.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"取消","confirmText":"去实名","success":function success(e){e.cancel?Pe.default.navigateBack({"delta":1}):e.confirm&&Pe.default.redirectTo({"url":"/pages/realname/index?backtwo=backtwo"})}}):Pe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!0,"success":function success(e){1==e.confirm&&Pe.default.navigateTo({"url":"/pages/getintegral/index"})}}):Pe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"success":function success(){Pe.default.navigateBack({"delta":1})}})}):(0,je.jobChangeTopAreasAction)(a).then(function(e){"ok"!==e.errcode?"get_integral"!==e.errcode?"auth_forbid"!==e.errcode?"member_forbid"!=e.errcode?Pe.default.showToast({"title":e.errmsg,"icon":"none","duration":1500}):Pe.default.showModal({"title":"温馨提示","content":"mydata.errmsg","cancelText":"取消","confirmText":"联系客服","success":function success(e){if(e.confirm){var n=De.SERVERPHONE;Pe.default.makePhoneCall({"phoneNumber":n})}}}):Pe.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"取消","confirmText":"去实名","success":function success(e){e.cancel?Pe.default.navigateBack({"delta":1}):e.confirm&&Pe.default.redirectTo({"url":"/pages/realname/index?backtwo=backtwo"})}}):Pe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!0,"success":function success(e){1==e.confirm&&Pe.default.navigateTo({"url":"/pages/getintegral/index"})}}):Pe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"success":function success(){Pe.default.navigateBack({"delta":1})}})});else{if(!e||!n)return void Pe.default.showModal({"title":"温馨提示","content":"请设置置顶城市","showCancel":!1});if(0===T)return void Pe.default.showModal({"title":"温馨提示","content":"请设置置顶天数","showCancel":!1});p?(0,je.resumesDoTopV2Action)(o).then(function(e){"ok"===e.errcode&&Pe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"success":function success(){Pe.default.navigateBack({"delta":1})}})}):(0,je.jobDoTopAction)(o).then(function(e){"ok"===e.errcode&&Pe.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1,"success":function success(){Pe.default.navigateBack({"delta":1})}})})}}else Pe.default.showModal({"title":"温馨提示","content":"请选择您的置顶城市","showCancel":!1})},this.anonymousFunc12=function(){Pe.default.makePhoneCall({"phoneNumber":De.SERVERPHONE})};var Me=J?J.map(function(e,n){e={"privateOriginal":(0,Ee.internal_get_original)(e)};var t="jazzz"+n;return o.anonymousFunc0Map[t]=function(){return Sb(e.privateOriginal)},{"_$indexKey":t,"privateOriginal":e.privateOriginal}}):[],Oe=K?K.city.map(function(e,n){e={"privateOriginal":(0,Ee.internal_get_original)(e)};var t="jbzzz"+n;return o.anonymousFunc1Map[t]=function(){return Sb(e.privateOriginal)},{"_$indexKey2":t,"privateOriginal":e.privateOriginal}}):[],Se=K?K.province.map(function(e,n){e={"privateOriginal":(0,Ee.internal_get_original)(e)};var t="jczzz"+n;return o.anonymousFunc2Map[t]=function(){return Sb(e.privateOriginal)},{"_$indexKey3":t,"privateOriginal":e.privateOriginal}}):[],ke=K?K.whole.map(function(e,n){e={"privateOriginal":(0,Ee.internal_get_original)(e)};var t="jdzzz"+n;return o.anonymousFunc3Map[t]=function(){return Sb(e.privateOriginal)},{"_$indexKey4":t,"privateOriginal":e.privateOriginal}}):[],Ce=h.top_rules.map(function(e,n){return{"loopState__temp2":n+n,"privateOriginal":(e={"privateOriginal":(0,Ee.internal_get_original)(e)}).privateOriginal}});return Object.assign(this.__state,{"params":K,"data":h,"loopArray84":Me,"loopArray85":Oe,"loopArray86":Se,"loopArray87":ke,"loopArray88":Ce,"province":J,"IMGCDNURL":De.IMGCDNURL,"rec":p,"basics":be,"type":l,"list":I,"displayTime":ie,"num":w,"endTime":Q,"editData":E,"newTime":se,"day":k,"SERVERPHONE":De.SERVERPHONE}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc0Map[e]&&(n=this.anonymousFunc0Map)[e].apply(n,o)}},{"key":"anonymousFunc1","value":function anonymousFunc1(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc1Map[e]&&(n=this.anonymousFunc1Map)[e].apply(n,o)}},{"key":"anonymousFunc2","value":function anonymousFunc2(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc2Map[e]&&(n=this.anonymousFunc2Map)[e].apply(n,o)}},{"key":"anonymousFunc3","value":function anonymousFunc3(e){for(var n,t=arguments.length,o=Array(1<t?t-1:0),a=1;a<t;a++)o[a-1]=arguments[a];return this.anonymousFunc3Map[e]&&(n=this.anonymousFunc3Map)[e].apply(n,o)}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}},{"key":"anonymousFunc12","value":function anonymousFunc12(){}}]),Topping);function Topping(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Topping);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(Topping.__proto__||Object.getPrototypeOf(Topping)).apply(this,arguments));return e.config={"navigationBarTitleText":"招工置顶"},e.$usedState=["params","data","loopArray84","loopArray85","loopArray86","loopArray87","loopArray88","province","IMGCDNURL","rec","basics","type","list","displayTime","num","endTime","editData","newTime","day","SERVERPHONE"],e.anonymousFunc0Map={},e.anonymousFunc1Map={},e.anonymousFunc2Map={},e.anonymousFunc3Map={},e.customComponents=[],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11","anonymousFunc12"],a.$$componentPath="pages/topping/index",a.config={"navigationBarTitleText":"招工置顶"},n.default=a,Page(t(0).default.createComponent(a,!0))},"191":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0}),n.default=function setRecruitTopArea(e){return{"type":o.SET_RECRUIT_TOP_AREA,"data":e}};var o=t(43)},"192":function(e,n,t){}},[[190,0,1]]]);