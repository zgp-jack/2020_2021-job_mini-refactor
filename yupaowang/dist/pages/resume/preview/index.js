(swan.webpackJsonp=swan.webpackJsonp||[]).push([[72],{"160":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var J=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K=n(0),Y=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(K),q=n(1),H=n(2);n(161);var a=(function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Preview,Y.default.Component),r(Preview,[{"key":"_constructor","value":function _constructor(e){(function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(n):void 0})(Preview.prototype.__proto__||Object.getPrototypeOf(Preview.prototype),"_constructor",this).call(this,e),this.$$refs=new Y.default.RefsArray}},{"key":"_createData","value":function _createData(e,t,n){var i=this;this.__state=e||this.state||{},this.__props=t||this.props||{},this.$prefix;var r=(0,K.useState)(!1),a=J(r,2),o=a[0],u=a[1],c=(0,K.useState)(!1),l=J(c,2),s=l[0],p=l[1],f=(0,K.useState)(""),g=J(f,2),y=g[0],v=g[1],h=(0,K.useState)("未填写"),m=J(h,2),d=m[0],_=m[1],O=(0,K.useState)(""),w=J(O,2),b=w[0],j=w[1],F=(0,K.useState)("未填写"),P=J(F,2),k=P[0],S=P[1],A=(0,K.useState)([]),M=J(A,2),x=M[0],C=M[1],T=(0,K.useState)([]),D=J(T,2),I=D[0],$=D[1],z=(0,K.useState)({"info":{"username":"未填写","authentication":"","certificate_show":0,"nation":"","address":"","introduce":"","miniInfoOccupations":[]},"introduces":{"hometown":"","experience_str":"","prof_degree_str":"","type_str":"","number_people":"","tags":[]},"project":[],"certificates":[],"content":{"show_tips":0}}),E=J(z,2),R=E[0],L=E[1];function Ea(e){Y.default.previewImage({"current":e,"urls":[e]})}(0,K.useEffect)(function(){(0,q.resumeListAction)().then(function(e){if(200===e.errcode){var t=(new Date).getTime(),n=new Date(t);if(e.data.info.birthday&&(n.getFullYear()-e.data.info.birthday.split("-")[0]==0?j(""):j(n.getFullYear()-e.data.info.birthday.split("-")[0]+"岁")),_("1"==e.data.info.gender?"男":"女"),u("0"==e.data.info.check),p("0"==e.data.info.check),v(e.data.info.headerimg),L({"info":e.data.info,"introduces":e.data.introduces,"project":e.data.project,"certificates":e.data.certificates,"content":e.data.content}),S(e.data.info.tel),0===e.data.project.length)C([]),$([]);else if($([e.data.certificates[0]]),e.data.project)if(new Date(e.data.project[0].completion_time).getTime()/864e5<(new Date).getTime()/864e5){var r=e.data.project[0];r.completiontime="zhijing",C([r])}else{var a=e.data.project[0];a.completiontime="zhijin",C([a])}}else Y.default.showModal({"title":"温馨提示","content":e.errmsg,"showCancel":!1})})},[]),this.anonymousFunc1=function(){return Y.default.navigateTo({"url":"/pages/resume/projectList/index?preview=1"})},this.anonymousFunc4=function(){return Y.default.navigateTo({"url":"/pages/resume/skillList/index?preview=1"})};var G=R.info.miniInfoOccupations.length?R.info.miniInfoOccupations.map(function(e,t){return e={"privateOriginal":(0,K.internal_get_original)(e)},{"loopState__temp2":R.info.miniInfoOccupations.length?t+t:null,"privateOriginal":e.privateOriginal}}):[],N=R.introduces.tags.length?R.introduces.tags.map(function(e,t){return e={"privateOriginal":(0,K.internal_get_original)(e)},{"loopState__temp4":R.introduces.tags.length?t+t:null,"privateOriginal":e.privateOriginal}}):[],U=R.project.length?x.map(function(e,t){return e={"privateOriginal":(0,K.internal_get_original)(e)},{"loopState__temp6":R.project.length?t+t:null,"anonymousCallee__14":R.project.length?e.privateOriginal.image.map(function(e,t){e={"privateOriginal":(0,K.internal_get_original)(e)};var n=R.project.length?t+t:null,r="iczzz"+t+"-"+t;return i.anonymousFunc0Map[r]=function(){return Ea(e.privateOriginal)},{"loopState__temp8":n,"_$indexKey":r,"privateOriginal":e.privateOriginal}}):[],"privateOriginal":e.privateOriginal}}):[],B=R.certificates.length?I.map(function(e,a){return e={"privateOriginal":(0,K.internal_get_original)(e)},{"anonymousCallee__15":R.certificates.length?e.privateOriginal.image.map(function(e,t){e={"privateOriginal":(0,K.internal_get_original)(e)};var n=R.certificates.length?t+t:null,r="idzzz"+a+"-"+t;return i.anonymousFunc2Map[r]=function(){return Ea(e.privateOriginal)},{"loopState__temp10":n,"_$indexKey2":r,"privateOriginal":e.privateOriginal}}):[],"privateOriginal":e.privateOriginal}}):[];return Object.assign(this.__state,{"data":R,"loopArray78":G,"loopArray79":N,"loopArray80":U,"loopArray81":B,"IMGCDNURL":H.IMGCDNURL,"checkpan":o,"checkone":s,"headerimg":y,"age":b,"sex":d,"project":x,"skillbooksone":I,"telephone":k}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(e){for(var t,n=arguments.length,r=Array(1<n?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return this.anonymousFunc0Map[e]&&(t=this.anonymousFunc0Map)[e].apply(t,r)}},{"key":"anonymousFunc1","value":function anonymousFunc1(){}},{"key":"anonymousFunc2","value":function anonymousFunc2(e){for(var t,n=arguments.length,r=Array(1<n?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return this.anonymousFunc2Map[e]&&(t=this.anonymousFunc2Map)[e].apply(t,r)}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}}]),Preview);function Preview(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Preview);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Preview.__proto__||Object.getPrototypeOf(Preview)).apply(this,arguments));return e.config={"navigationBarTitleText":"找活名片"},e.$usedState=["data","loopArray78","loopArray79","loopArray80","loopArray81","IMGCDNURL","checkpan","checkone","headerimg","age","sex","project","skillbooksone","telephone"],e.anonymousFunc0Map={},e.anonymousFunc2Map={},e.customComponents=[],e}a.$$events=["anonymousFunc0","anonymousFunc1","anonymousFunc2","anonymousFunc4"],a.$$componentPath="pages/resume/preview/index",a.config={"navigationBarTitleText":"找活名片"},t.default=a,Page(n(0).default.createComponent(a,!0))},"161":function(e,t,n){}},[[160,0,1]]]);