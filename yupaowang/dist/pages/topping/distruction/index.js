(swan.webpackJsonp=swan.webpackJsonp||[]).push([[77],{"140":function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{"value":!0});var U=function(n,i){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return function sliceIterator(n,i){var t=[],e=!0,r=!1,a=void 0;try{for(var o,c=n[Symbol.iterator]();!(e=(o=c.next()).done)&&(t.push(o.value),!i||t.length!==i);e=!0);}catch(n){r=!0,a=n}finally{try{!e&&c.return&&c.return()}finally{if(r)throw a}}return t}(n,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")},e=function(n,i,t){return i&&defineProperties(n.prototype,i),t&&defineProperties(n,t),n};function defineProperties(n,i){for(var t=0;t<i.length;t++){var e=i[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}var H=t(0),V=_interopRequireDefault(H),Q=t(1),W=_interopRequireDefault(t(8)),X=t(7),Y=t(2),Z=t(138);function _interopRequireDefault(n){return n&&n.__esModule?n:{"default":n}}t(141);var r=(function _inherits(n,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function, not "+typeof i);n.prototype=Object.create(i&&i.prototype,{"constructor":{"value":n,"enumerable":!1,"writable":!0,"configurable":!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(n,i):n.__proto__=i)}(Distruction,V.default.Component),e(Distruction,[{"key":"_constructor","value":function _constructor(n){(function get(n,i,t){null===n&&(n=Function.prototype);var e=Object.getOwnPropertyDescriptor(n,i);if(void 0===e){var r=Object.getPrototypeOf(n);return null===r?void 0:get(r,i,t)}if("value"in e)return e.value;var a=e.get;return void 0!==a?a.call(t):void 0})(Distruction.prototype.__proto__||Object.getPrototypeOf(Distruction.prototype),"_constructor",this).call(this,n),this.$$refs=new V.default.RefsArray}},{"key":"_createData","value":function _createData(n,i,t){var r=this;this.__state=n||this.state||{},this.__props=i||this.props||{},this.$prefix;var e=(0,H.useContext)(Z.contextItem),a=e.AreParams,o=e.setAreParams,c=(0,H.useRouter)().params,w=c.max_city,b=c.max_province,u=(0,H.useState)({"item":[]}),l=U(u,2),J=l[0],M=l[1],s=(0,H.useState)({"areData":[]}),p=U(s,2),A=p[0],C=p[1],f=(0,H.useState)(!1),d=U(f,2),y=d[0],m=d[1],h=(0,H.useState)(!1),v=U(h,2),g=v[0],O=v[1],k=(0,H.useState)({"list":[]}),_=U(k,2),S=_[0],F=_[1],D=(0,H.useState)(""),N=U(D,2),x=N[0],P=N[1],I=(0,H.useState)({"historylist":[]}),j=U(I,2),z=j[0],$=j[1],R=(0,H.useState)({"city":[],"province":[],"whole":[]}),T=U(R,2),E=T[0],L=T[1];function Na(e,t){if(console.log(e),"0"===e.pid){var n=JSON.parse(JSON.stringify(J.item)),i=JSON.parse(JSON.stringify(A.areData)),r=void 0,a=void 0,o=[];a=e.click?(r=n.map(function(n){return n.id===e.id&&(n.click=!1),n}),i.map(function(n){return n.children&&n.children.map(function(n){n.click=!1}),n})):(r=n.map(function(n){return n.id===e.id?(n.click=!0,o.push(n)):n.click=!1,n}),i.map(function(n){return n.children&&n.children.map(function(n){n.click=!1}),n})),C({"areData":a}),M({"item":r}),L({"city":[],"province":[],"whole":o})}else if("1"!==e.pid&&"0"!==e.pid){var c=JSON.parse(JSON.stringify(E.city));if(c.length){var u=JSON.parse(JSON.stringify(c));if(u.find(function(n){return n.id===e.id}))u.map(function(n,i){n.id===e.id&&u.splice(i,1)});else{if(c.length>=parseInt(w))return void V.default.showModal({"title":"温馨提示","content":"最多可同时置顶"+w+"个市、"+b+"个省或直辖市","showCancel":!1});u.push(e)}var l=J.item.map(function(n){return n.id===e.id&&(n.click=!e.click),n}),s=A.areData.map(function(i){return i.children.map(function(n){return n.id===e.id&&(1===t?n.click=e.click:(n.click=!e.click,i.children[0].click=!1)),n}),i});C({"areData":s}),M({"item":l});var p=JSON.parse(JSON.stringify(E.province));A.areData.map(function(t){t.children&&t.children.map(function(n){n.id===e.id&&p.map(function(n,i){n.id===t.id&&p.splice(i,1)})})}),L({"city":u,"province":p,"whole":[]})}else{var f=J.item.map(function(n){return n.id===e.id?n.click=!e.click:"0"===n.pid&&(console.log(n),n.click=!1),n}),d=A.areData.map(function(i){return i.id!==e.id&&i.children.map(function(n){return n.id===e.id&&(1===t?n.click=e.click:(n.click=!e.click,i.children[0].click=!1)),"1"===n.pid&&i.children.map(function(n){n.id===e.id&&(n.click=!1)}),n}),i});C({"areData":d}),M({"item":f});var y=JSON.parse(JSON.stringify(c));y.push(e);var m=JSON.parse(JSON.stringify(E.province));A.areData.map(function(t){t.children&&t.children.map(function(n){n.id===e.id&&m.map(function(n,i){n.id===t.id&&m.splice(i,1)})})}),L({"city":y,"province":m,"whole":[]})}}else{var h=JSON.parse(JSON.stringify(E.province));if(h.length){var v=JSON.parse(JSON.stringify(h));if(v.find(function(n){return n.id===e.id}))v.map(function(n,i){n.id===e.id&&v.splice(i,1)});else{if(h.length>=parseInt(b))return void V.default.showModal({"title":"温馨提示","content":"最多可同时置顶"+w+"个市、"+b+"个省或直辖市","showCancel":!1});v.push(e)}var g=J.item.map(function(n){return n.id===e.id&&(n.click=!e.click),n}),O=A.areData.map(function(n){return n.id!==e.id?n.children.map(function(n){return n.id===e.id&&(n.click=!e.click),n}):n.children.map(function(n){return n.id===e.id?n.click=!e.click:n.click=!1,n}),n}),k=JSON.parse(JSON.stringify(E.city));A.areData.map(function(n){n.id===e.id&&n.children.map(function(t){k.map(function(n,i){t.id===n.id&&k.splice(i,1)})})}),C({"areData":O}),M({"item":g}),L({"city":k,"province":v,"whole":[]})}else{console.log(e,"第一次点击省");for(var _=JSON.parse(JSON.stringify(A.areData)),S=0;S<_.length;S++)_[S].id===e.id&&_[S].children.length&&_[S].children.map(function(n){n.id===e.id?(console.log(e),console.log(n,"222"),n.click=!e.click):n.click=!1});var F=JSON.parse(JSON.stringify(E.city));A.areData.map(function(n){n.id===e.id&&n.children.map(function(t){J.item.map(function(n){return n.id===t.id&&(n.click=!1),n}),F.map(function(n,i){t.id===n.id&&F.splice(i,1)})})});var D=J.item.map(function(n){return n.id===e.id?n.click=!0:"0"===n.pid&&(n.click=!1),n});C({"areData":_}),M({"item":D});var N=JSON.parse(JSON.stringify(h));N.push(e),L({"city":F,"province":N,"whole":[]})}}}function Oa(n){Na(n,0),m(!1),O(!1),P(""),z.historylist.unshift(n);var t={},i=z.historylist.reduce(function(n,i){return t[i.name]||(t[i.name]=n.push(i)),n},[]);$({"historylist":i}),6<z.historylist.length&&z.historylist.pop(),V.default.setStorageSync(X.SearchList,z.historylist)}(0,H.useEffect)(function(){var n=V.default.getStorageSync(X.SearchList);n&&$({"historylist":n}),(0,Q.jobTopHotAreasAction)().then(function(n){if("ok"==n.errcode){var i=[];W.default.map(function(n){0<n.children.length&&i.push(n)});for(var t=0;t<i.length;t++)for(var e=0;e<i[t].children.length;e++)i[t].click=!1,i[t].children[e].click=!1;a&&(n.data.map(function(i){a.city&&a.city.map(function(n){return i.id===n.id&&(i.click=!0),n}),a.province&&a.province.map(function(n){return i.id===n.id&&(i.click=!0),n})}),i.map(function(n){n.children.map(function(i){a.city&&a.city.map(function(n){return i.id===n.id&&(i.click=!0),n}),a.province&&a.province.map(function(n){return i.id===n.id&&(i.click=!0),n})})})),M({"item":n.data}),C({"areData":i}),L({"city":a.city,"province":a.province,"whole":[]})}else V.default.showModal({"title":"温馨提示","content":n.errmsg,"showCancel":!1})})},[]),this.anonymousFunc0=function handleInput(){m(!0)},this.anonymousFunc1=function(n){return function handleOnInput(i){P(i.detail.value),O(!0);var t=[];W.default.map(function(n){0<=n.name.indexOf(i.detail.value)&&t.push(n),n.children.map(function(n){0<=n.name.indexOf(i.detail.value)&&t.push(n)})});var e=[];t.map(function(i){return i.listName=i.ad_name+"-"+i.name,i.children&&0<i.children.length&&i.children.map(function(n){return n.listName=i.name+"-"+n.name,e.push(n),n}),e.push(i),i}),F({"list":e})}(n)},this.anonymousFunc3=function handleCloseHistory(){$({"historylist":[]}),V.default.clearStorageSync()},this.anonymousFunc8=function handleClick(){o(E.city,E.province,E.whole),V.default.navigateBack({"delta":1})};var K=0<S.list.length?S.list.map(function(n,i){n={"privateOriginal":(0,H.internal_get_original)(n)};var t="gfzzz"+i;return r.anonymousFunc2Map[t]=function(){return Oa(n.privateOriginal)},{"_$indexKey":t,"privateOriginal":n.privateOriginal}}):[],q=y&&!g&&0<z.historylist.length?z.historylist.map(function(n,i){n={"privateOriginal":(0,H.internal_get_original)(n)};var t="ggzzz"+i;return r.anonymousFunc4Map[t]=function(){return Oa(n.privateOriginal)},{"_$indexKey2":t,"privateOriginal":n.privateOriginal}}):[],B=J.item.map(function(n,i){n={"privateOriginal":(0,H.internal_get_original)(n)};var t="ghzzz"+i;return r.anonymousFunc5Map[t]=function(){Na(n.privateOriginal,1)},{"_$indexKey3":t,"privateOriginal":n.privateOriginal}}),G=A.areData.map(function(n,e){return{"anonymousCallee__9":(n={"privateOriginal":(0,H.internal_get_original)(n)}).privateOriginal.children.map(function(n,i){n={"privateOriginal":(0,H.internal_get_original)(n)};var t="gizzz"+e+"-"+i;return r.anonymousFunc6Map[t]=function(){return Na(n.privateOriginal,0)},{"_$indexKey4":t,"privateOriginal":n.privateOriginal}}),"privateOriginal":n.privateOriginal}});return Object.assign(this.__state,{"searchData":S,"history":z,"data":J,"are":A,"loopArray61":K,"loopArray62":q,"loopArray63":B,"loopArray64":G,"clickInput":y,"inputVal":x,"onInput":g,"IMGCDNURL":Y.IMGCDNURL}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(n){for(var i,t=arguments.length,e=Array(1<t?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return this.anonymousFunc2Map[n]&&(i=this.anonymousFunc2Map)[n].apply(i,e)}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(n){for(var i,t=arguments.length,e=Array(1<t?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return this.anonymousFunc4Map[n]&&(i=this.anonymousFunc4Map)[n].apply(i,e)}},{"key":"anonymousFunc5","value":function anonymousFunc5(n){for(var i,t=arguments.length,e=Array(1<t?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return this.anonymousFunc5Map[n]&&(i=this.anonymousFunc5Map)[n].apply(i,e)}},{"key":"anonymousFunc6","value":function anonymousFunc6(n){for(var i,t=arguments.length,e=Array(1<t?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return this.anonymousFunc6Map[n]&&(i=this.anonymousFunc6Map)[n].apply(i,e)}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}}]),Distruction);function Distruction(){!function _classCallCheck(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}(this,Distruction);var n=function _possibleConstructorReturn(n,i){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||"object"!=typeof i&&"function"!=typeof i?n:i}(this,(Distruction.__proto__||Object.getPrototypeOf(Distruction)).apply(this,arguments));return n.config={"navigationBarTitleText":"招工置顶"},n.$usedState=["searchData","history","data","are","loopArray61","loopArray62","loopArray63","loopArray64","clickInput","inputVal","onInput","IMGCDNURL"],n.anonymousFunc2Map={},n.anonymousFunc4Map={},n.anonymousFunc5Map={},n.anonymousFunc6Map={},n.customComponents=[],n}r.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc8"],r.$$componentPath="pages/topping/distruction/index",r.config={"navigationBarTitleText":"招工置顶"},i.default=r,Page(t(0).default.createComponent(r,!0))},"141":function(n,i,t){}},[[140,0,1]]]);