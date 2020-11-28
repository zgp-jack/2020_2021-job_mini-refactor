<<<<<<< HEAD
(swan.webpackJsonp=swan.webpackJsonp||[]).push([[87],{"119":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var Y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Z=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ee=t(0),i=_interopRequireDefault(ee),ne=_interopRequireDefault(t(120)),te=_interopRequireDefault(t(5)),re=_interopRequireDefault(t(12));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t(121);var o=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(UsedPublish,i.default.Component),r(UsedPublish,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:get(i,n,t)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(t):void 0})(UsedPublish.prototype.__proto__||Object.getPrototypeOf(UsedPublish.prototype),"_constructor",this).call(this,e),this.$$refs=new i.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var i=this;this.__state=e||this.state||{},this.__props=n||this.props||{};var r=this.$prefix,o=(0,ee.genCompid)(r+"$compid__44"),a=Z(o,2),u=a[0],s=a[1],c=(0,ee.genCompid)(r+"$compid__45"),l=Z(c,2),d=l[0],f=l[1],y=(0,ee.useRouter)().params.id,m=void 0===y?"":y,p=(0,ne.default)(m),h=p.model,_=p.setModel,v=p.initModel,b=p.parentCurrent,g=p.setParentCurrent,F=p.childCurrent,C=p.setChildCurrent,P=p.classifyName,w=p.setClassiryName,O=p.cityName,k=p.setCityName,T=p.setCIndex,I=p.setPIndex,M=p.areaProvince,S=p.areaCity,x=p.cIndex,A=p.pIndex,j=p.thisCurrentAreaCity,N=p.userTel,$=p.vaildPublishModelInfo,D=p.initUsedPublishViewInfo,U=p.num,R=p.setNum,q=(0,ee.useState)(!1),E=Z(q,2),V=E[0],z=E[1],J=(0,re.default)(),X=J.text,B=J.userGetCode,K=(0,ee.useState)(!0),L=Z(K,2),G=L[0],H=L[1];function Xa(e,n){var t=JSON.parse(JSON.stringify(h)),r=e.detail.value;t[n]=r,_(t),"detail"==n&&R(r.length)}function $a(e){z(e)}(0,ee.useDidShow)(function(){G?H(!1):D()}),this.anonymousFunc0=function(){return $a(!1)},this.anonymousFunc3=function(e){return Xa(e,"title")},this.anonymousFunc4=function(){return $a(!0)},this.anonymousFunc5=function(e){return function onPickerChange(e){if(v){var n=e.detail.value[0],t=e.detail.value[1];k(v.areaTree[n].name+"-"+v.areaTree[n].children[t].name),_(Y({},h,{"province_id":v.areaTree[n].id,"city_id":v.areaTree[n].children[t].id}))}}(e)},this.anonymousFunc6=function(e){return function onColumnChange(e){var n=e.detail.column,t=e.detail.value;0===n?(I(t),j(t)):T(t)}(e)},this.anonymousFunc7=function(e){return Xa(e,"user_name")},this.anonymousFunc8=function(e){return Xa(e,"user_mobile")},this.anonymousFunc9=function(e){return Xa(e,"code")},this.anonymousFunc10=function(){return B(h.user_mobile)},this.anonymousFunc11=function(e){return Xa(e,"detail")},this.anonymousFunc12=function(){return $()};var W=v?v.classifyTree.map(function(e,n){e={"privateOriginal":(0,ee.internal_get_original)(e)};var t=v?(0,te.default)({"drawer-list-item overwords":!0,"drawer-list-item-active":n===b}):null,r="fczzz"+n;return i.anonymousFunc1Map[r]=function(){return function useClickClassifyParentId(e){g(e)}(n)},{"loopState__temp2":t,"_$indexKey":r,"privateOriginal":e.privateOriginal}}):[],Q=v?v.classifyTree[b].attributes.map(function(e,n){e={"privateOriginal":(0,ee.internal_get_original)(e)};var t=v?(0,te.default)({"drawer-list-item overwords":!0,"drawer-list-item-active":n==F&&e.privateOriginal.id==h.attribute_id}):null,r="fdzzz"+n;return i.anonymousFunc2Map[r]=function(){return function useClickClassifyChildId(e){if(C(e),v){var n=v.classifyTree[b].name+"-"+v.classifyTree[b].attributes[e].name;w(n),z(!1),_(Y({},h,{"attribute_id":v.classifyTree[b].attributes[e].id,"category_id":v.classifyTree[b].id}))}}(n)},{"loopState__temp4":t,"_$indexKey2":r,"privateOriginal":e.privateOriginal}}):[];return ee.propsManager.set({"show":V,"onClose":this.anonymousFunc0},s,u),ee.propsManager.set({"num":U},f,d),Object.assign(this.__state,{"initModel":v,"loopArray50":W,"loopArray51":Q,"$compid__44":s,"$compid__45":f,"parentCurrent":b,"model":h,"classifyName":P,"areaProvince":M,"areaCity":S,"pIndex":A,"cIndex":x,"cityName":O,"userTel":N,"showDrawer":V,"text":X}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(e){for(var n,t=arguments.length,r=Array(1<t?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return this.anonymousFunc1Map[e]&&(n=this.anonymousFunc1Map)[e].apply(n,r)}},{"key":"anonymousFunc2","value":function anonymousFunc2(e){for(var n,t=arguments.length,r=Array(1<t?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return this.anonymousFunc2Map[e]&&(n=this.anonymousFunc2Map)[e].apply(n,r)}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}},{"key":"anonymousFunc12","value":function anonymousFunc12(){}}]),UsedPublish);function UsedPublish(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,UsedPublish);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(UsedPublish.__proto__||Object.getPrototypeOf(UsedPublish)).apply(this,arguments));return e.config={"navigationBarTitleText":"发布二手交易"},e.$usedState=["initModel","loopArray50","loopArray51","$compid__44","$compid__45","parentCurrent","model","classifyName","areaProvince","areaCity","pIndex","cIndex","cityName","userTel","showDrawer","text"],e.anonymousFunc1Map={},e.anonymousFunc2Map={},e.customComponents=["Auth","AtDrawer","WordsTotal"],e}o.$$events=["anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11","anonymousFunc12"],o.$$componentPath="pages/used/publish/index",o.config={"navigationBarTitleText":"发布二手交易"},n.default=o,Page(t(0).default.createComponent(o,!0))},"120":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var Q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Y=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")};n.default=function useUsedInfo(e){var n=(0,ue.useSelector)(function(e){return e.User.login}),t={"type":"fleamarket","infoId":e},r=(0,Z.useState)({"type":"fleamarket","infoId":e,"user_mobile":"","title":"","user_name":"","detail":"","code":"","province_id":"","city_id":"","category_id":"","attribute_id":""}),i=Y(r,2),o=i[0],a=i[1],u=(0,Z.useState)(),s=Y(u,2),c=s[0],l=s[1],d=(0,Z.useState)(0),f=Y(d,2),y=f[0],m=f[1],p=(0,Z.useState)(0),h=Y(p,2),_=h[0],v=h[1],b=(0,Z.useState)(""),g=Y(b,2),F=g[0],C=g[1],P=(0,Z.useState)(""),w=Y(P,2),O=w[0],k=w[1],T=(0,Z.useState)(0),I=Y(T,2),M=I[0],S=I[1],x=(0,Z.useState)([]),A=Y(x,2),j=A[0],N=A[1],$=(0,Z.useState)(0),D=Y($,2),U=D[0],R=D[1],q=(0,Z.useState)([]),E=Y(q,2),V=E[0],z=E[1],J=(0,Z.useState)(0),X=Y(J,2),B=X[0],K=X[1];(0,Z.useEffect)(function(){n&&L()},[n]);var L=function initUsedPublishViewInfo(){n&&(0,ne.getUsedInfoModel)(t).then(function(e){"ok"==e.errcode?(se=e.areaTree,l(e),K(e.model.detail?e.model.detail.length:0),G(e),H(e)):"to_auth"==e.errcode?ee.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"取消","confirmText":"去实名","success":function success(e){e.cancel?ee.default.navigateBack():e.confirm&&ee.default.navigateTo({"url":oe.REALNAMEPATH})}}):"auth_checking"==e.errcode?(0,te.ShowActionModal)({"msg":e.errmsg,"success":function success(){return ee.default.navigateBack()}}):(0,te.ShowActionModal)({"msg":e.errmsg,"success":function success(){ee.default.navigateBack()}})})},G=function initPublishModelInfo(e){var n=Q({},o,{"title":e.model.title||"","attribute_id":e.model.attribute_id||"","category_id":e.model.category_id||"","detail":e.model.detail||"","user_mobile":e.model.user_mobile||"","user_name":e.model.user_name||"","province_id":e.model.province_id||"","city_id":e.model.city_id||""});if(ce=n.user_mobile,0===e.model.is_check&&(le=JSON.stringify(n)),a(n),k(e.show_address),n.category_id){var t=e.classifyTree.findIndex(function(e){return e.id==n.category_id}),r=e.classifyTree[t].attributes.findIndex(function(e){return e.id==n.attribute_id});C(e.classifyTree[t].name+"-"+e.classifyTree[t].attributes[r].name),v(r),m(t)}},H=function initAreaPicker(e){var n=(0,ie.objDeepCopy)(e.areaTree),a=e.model.province_id||"",u=e.model.city_id||"",s=0,c=[];n.map(function(e,n){a==e.id&&(S(n),s=n);var t=e.has_children;if(c.push({"id":e.id,"has_children":t,"name":e.name}),t)for(var r=e.children,i=r.length,o=0;o<i;o++)if(u==r[o].id){R(o);break}}),N(c),W(s)},W=function thisCurrentAreaCity(e){if(se){var n=(0,ie.objDeepCopy)(se[e]),t=n.has_children;z(t?n.children:[{"id":n.id,"pid":n.pid,"name":n.name}])}};return{"model":o,"setModel":a,"initModel":c,"parentCurrent":y,"setParentCurrent":m,"childCurrent":_,"setChildCurrent":v,"classifyName":F,"setClassiryName":C,"cityName":O,"setCityName":k,"setCIndex":R,"cIndex":U,"setAreaCity":z,"areaCity":V,"setPIndex":S,"setAreaProvince":N,"areaProvince":j,"pIndex":M,"thisCurrentAreaCity":W,"userTel":ce,"vaildPublishModelInfo":function vaildPublishModelInfo(){if(!(0,ae.isVaildVal)(o.title,3,30))return(0,re.default)("请输入3-30字的标题"),!1;if(!o.category_id||!o.attribute_id)return(0,re.default)("请选择交易目的"),!1;if(!o.province_id||!o.city_id)return(0,re.default)("请选择您的地区"),!1;if(!o.user_name)return(0,re.default)("请输入您的姓名"),!1;if(!(0,ae.isPhone)(o.user_mobile))return(0,re.default)("请输入正确的联系电话"),!1;if(o.user_mobile!==ce&&!o.code)return(0,re.default)("请输入验证码"),!1;if(!(0,ae.isVaildVal)(o.detail,15,500))return(0,re.default)("请正确输入15-500字的交易详情"),!1;if(c&&0==c.model.is_check&&JSON.stringify(o)==le)return(0,te.ShowActionModal)({"title":"审核失败","msg":"请修改该信息后再进行提交"}),!1;(0,ne.publishUsedInfo)(o).then(function(e){(0,te.ShowActionModal)({"msg":e.errmsg,"success":function success(){"ok"==e.errcode&&ee.default.reLaunch({"url":"/pages/published/used/index"})}})}).catch(function(){(0,te.ShowActionModal)({"msg":"网络错误，发布失败"})})},"initUsedPublishViewInfo":L,"num":B,"setNum":K}};var Z=t(0),ee=_interopRequireDefault(Z),ne=t(2),te=t(4),re=_interopRequireDefault(te),ie=t(7),oe=t(1),ae=t(8),ue=t(3);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var se=!1,ce="",le=""},"121":function(e,n,t){}},[[119,0,1]]]);
=======
(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/used/publish/index"],{

/***/ "./src/hooks/publish/used.ts":
/*!***********************************!*\
  !*** ./src/hooks/publish/used.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = useUsedInfo;

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _index2 = __webpack_require__(/*! ../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index3 = _interopRequireDefault(_index2);

var _index4 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");

var _index5 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index6 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 保存area地区数据
var areaTree = false;
var userTel = '';
var modelStr = '';
function useUsedInfo(id) {
  // 检测用户是否登录
  var login = (0, _redux.useSelector)(function (store) {
    return store.User.login;
  });
  var data = {
    type: 'fleamarket',
    infoId: id
  };
  // 用户发布信息模型

  var _useState = (0, _taroSwan.useState)({
    type: 'fleamarket',
    infoId: id,
    user_mobile: '',
    title: '',
    user_name: '',
    detail: '',
    code: '',
    province_id: '',
    city_id: '',
    category_id: '',
    attribute_id: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      model = _useState2[0],
      setModel = _useState2[1];
  // 用户初始化信息模型


  var _useState3 = (0, _taroSwan.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      initModel = _useState4[0],
      setInitModel = _useState4[1];
  // 父级索引


  var _useState5 = (0, _taroSwan.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      parentCurrent = _useState6[0],
      setParentCurrent = _useState6[1];
  // 子级索引


  var _useState7 = (0, _taroSwan.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      childCurrent = _useState8[0],
      setChildCurrent = _useState8[1];
  // 目的名字


  var _useState9 = (0, _taroSwan.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      classifyName = _useState10[0],
      setClassiryName = _useState10[1];
  // 城市名字


  var _useState11 = (0, _taroSwan.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      cityName = _useState12[0],
      setCityName = _useState12[1];
  // picker 省份索引


  var _useState13 = (0, _taroSwan.useState)(0),
      _useState14 = _slicedToArray(_useState13, 2),
      pIndex = _useState14[0],
      setPIndex = _useState14[1];
  // picker 省份数据


  var _useState15 = (0, _taroSwan.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      areaProvince = _useState16[0],
      setAreaProvince = _useState16[1];
  // picker 市级索引


  var _useState17 = (0, _taroSwan.useState)(0),
      _useState18 = _slicedToArray(_useState17, 2),
      cIndex = _useState18[0],
      setCIndex = _useState18[1];
  // picker 市级索引


  var _useState19 = (0, _taroSwan.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      areaCity = _useState20[0],
      setAreaCity = _useState20[1];
  // 详情字数统计


  var _useState21 = (0, _taroSwan.useState)(0),
      _useState22 = _slicedToArray(_useState21, 2),
      num = _useState22[0],
      setNum = _useState22[1];

  (0, _taroSwan.useEffect)(function () {
    if (!login) return;
    initUsedPublishViewInfo();
  }, [login]);
  // 初始化用户发布信息的视图渲染
  var initUsedPublishViewInfo = function initUsedPublishViewInfo() {
    if (!login) return;
    (0, _index.getUsedInfoModel)(data).then(function (data) {
      if (data.errcode == 'ok') {
        // 正常获取到内容
        areaTree = data.areaTree;
        setInitModel(data);
        setNum(data.model.detail ? data.model.detail.length : 0);
        initPublishModelInfo(data);
        initAreaPicker(data);
      } else if (data.errcode == 'to_auth') {
        // 用户当前未实名 或者实名没通过
        _taroSwan2.default.showModal({
          title: '温馨提示',
          content: data.errmsg,
          cancelText: '取消',
          confirmText: '去实名',
          success: function success(res) {
            if (res.cancel) {
              _taroSwan2.default.navigateBack();
            } else if (res.confirm) {
              _taroSwan2.default.navigateTo({
                url: _index5.REALNAMEPATH
              });
            }
          }
        });
      } else if (data.errcode == 'auth_checking') {
        // 当前用户的实名信息正在审核中
        (0, _index2.ShowActionModal)({
          msg: data.errmsg,
          success: function success() {
            return _taroSwan2.default.navigateBack();
          }
        });
      } else {
        // 其他状态
        (0, _index2.ShowActionModal)({
          msg: data.errmsg,
          success: function success() {
            _taroSwan2.default.navigateBack();
          }
        });
      }
    });
  };
  // 设置发布信息模型
  var initPublishModelInfo = function initPublishModelInfo(data) {
    var InitData = _extends({}, model, {
      title: data.model.title || '',
      attribute_id: data.model.attribute_id || '',
      category_id: data.model.category_id || '',
      detail: data.model.detail || '',
      user_mobile: data.model.user_mobile || '',
      user_name: data.model.user_name || '',
      province_id: data.model.province_id || '',
      city_id: data.model.city_id || ''
    });
    userTel = InitData.user_mobile;
    if (data.model.is_check === 0) modelStr = JSON.stringify(InitData);
    setModel(InitData);
    setCityName(data.show_address);
    if (InitData.category_id) {
      var _pIndex = data.classifyTree.findIndex(function (item) {
        return item.id == InitData.category_id;
      });
      var _cIndex = data.classifyTree[_pIndex].attributes.findIndex(function (item) {
        return item.id == InitData.attribute_id;
      });
      setClassiryName(data.classifyTree[_pIndex].name + '-' + data.classifyTree[_pIndex].attributes[_cIndex].name);
      setChildCurrent(_cIndex);
      setParentCurrent(_pIndex);
    }
  };
  // 初始化地区picker
  var initAreaPicker = function initAreaPicker(data) {
    var areaData = (0, _index4.objDeepCopy)(data.areaTree);
    var id = data.model.province_id || '';
    var cid = data.model.city_id || '';
    var current = 0;
    var areaProvince = [];
    areaData.map(function (item, index) {
      if (id == item.id) {
        setPIndex(index);
        current = index;
      }
      var has_children = item.has_children;
      areaProvince.push({
        id: item.id,
        has_children: has_children,
        name: item.name
      });
      if (has_children) {
        var childrens = item.children;
        var len = childrens.length;
        for (var i = 0; i < len; i++) {
          if (cid == childrens[i].id) {
            setCIndex(i);
            break;
          }
        }
      }
    });
    setAreaProvince(areaProvince);
    thisCurrentAreaCity(current);
  };
  // 确定数组信息
  var thisCurrentAreaCity = function thisCurrentAreaCity(i) {
    if (!areaTree) return;
    var areaData = (0, _index4.objDeepCopy)(areaTree[i]);
    var has = areaData.has_children;
    if (has) {
      setAreaCity(areaData.children);
    } else {
      setAreaCity([{
        id: areaData.id,
        pid: areaData.pid,
        name: areaData.name
      }]);
    }
  };
  // 验证发布信息
  var vaildPublishModelInfo = function vaildPublishModelInfo() {
    if (!(0, _index6.isVaildVal)(model.title, 3, 30)) {
      (0, _index3.default)('请输入3-30字的标题');
      return false;
    }
    if (!model.category_id || !model.attribute_id) {
      (0, _index3.default)('请选择交易目的');
      return false;
    }
    if (!model.province_id || !model.city_id) {
      (0, _index3.default)('请选择您的地区');
      return false;
    }
    if (!model.user_name) {
      (0, _index3.default)('请输入您的姓名');
      return false;
    }
    if (!(0, _index6.isPhone)(model.user_mobile)) {
      (0, _index3.default)('请输入正确的联系电话');
      return false;
    }
    if (model.user_mobile !== userTel) {
      if (!model.code) {
        (0, _index3.default)('请输入验证码');
        return false;
      }
    }
    if (!(0, _index6.isVaildVal)(model.detail, 15, 500)) {
      (0, _index3.default)('请正确输入15-500字的交易详情');
      return false;
    }
    if (initModel && initModel.model.is_check == 0) {
      var dataString = JSON.stringify(model);
      if (dataString == modelStr) {
        (0, _index2.ShowActionModal)({
          title: '审核失败',
          msg: '请修改该信息后再进行提交'
        });
        return false;
      }
    }
    (0, _index.publishUsedInfo)(model).then(function (res) {
      (0, _index2.ShowActionModal)({
        msg: res.errmsg,
        success: function success() {
          if (res.errcode == 'ok') {
            //发布成功跳转到已发布二手交易列表
            _taroSwan2.default.reLaunch({
              url: '/pages/published/used/index'
            });
          }
        }
      });
    }).catch(function () {
      (0, _index2.ShowActionModal)({ msg: "\u7F51\u7EDC\u9519\u8BEF\uFF0C\u53D1\u5E03\u5931\u8D25" });
    });
  };
  return {
    model: model,
    setModel: setModel,
    initModel: initModel,
    parentCurrent: parentCurrent,
    setParentCurrent: setParentCurrent,
    childCurrent: childCurrent,
    setChildCurrent: setChildCurrent,
    classifyName: classifyName,
    setClassiryName: setClassiryName,
    cityName: cityName,
    setCityName: setCityName,
    setCIndex: setCIndex,
    cIndex: cIndex,
    setAreaCity: setAreaCity,
    areaCity: areaCity,
    setPIndex: setPIndex,
    setAreaProvince: setAreaProvince,
    areaProvince: areaProvince,
    pIndex: pIndex,
    thisCurrentAreaCity: thisCurrentAreaCity,
    userTel: userTel,
    vaildPublishModelInfo: vaildPublishModelInfo,
    initUsedPublishViewInfo: initUsedPublishViewInfo,
    num: num,
    setNum: setNum
  };
}

/***/ }),

/***/ "./src/pages/used/publish/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/used/publish/index.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/used/publish/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/used/publish/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroSwan = __webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js");

var _taroSwan2 = _interopRequireDefault(_taroSwan);

var _used = __webpack_require__(/*! ../../../hooks/publish/used */ "./src/hooks/publish/used.ts");

var _used2 = _interopRequireDefault(_used);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(/*! ../../../hooks/code/index */ "./src/hooks/code/index.ts");

var _index2 = _interopRequireDefault(_index);

__webpack_require__(/*! ./index.scss */ "./src/pages/used/publish/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsedPublish = function (_Taro$Component) {
  _inherits(UsedPublish, _Taro$Component);

  function UsedPublish() {
    _classCallCheck(this, UsedPublish);

    var _this = _possibleConstructorReturn(this, (UsedPublish.__proto__ || Object.getPrototypeOf(UsedPublish)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '发布二手交易'
    };

    _this.$usedState = ["initModel", "loopArray50", "loopArray51", "$compid__44", "$compid__45", "parentCurrent", "model", "classifyName", "areaProvince", "areaCity", "pIndex", "cIndex", "cityName", "userTel", "showDrawer", "text"];
    _this.anonymousFunc1Map = {};
    _this.anonymousFunc2Map = {};
    _this.customComponents = ["Auth", "AtDrawer", "WordsTotal"];
    return _this;
  }

  _createClass(UsedPublish, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(UsedPublish.prototype.__proto__ || Object.getPrototypeOf(UsedPublish.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroSwan2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__44"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__44 = _genCompid2[0],
          $compid__44 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__45"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__45 = _genCompid4[0],
          $compid__45 = _genCompid4[1];

      var router = (0, _taroSwan.useRouter)();
      var _router$params$id = router.params.id,
          id = _router$params$id === undefined ? '' : _router$params$id;

      var _useUsedInfo = (0, _used2.default)(id),
          model = _useUsedInfo.model,
          setModel = _useUsedInfo.setModel,
          initModel = _useUsedInfo.initModel,
          parentCurrent = _useUsedInfo.parentCurrent,
          setParentCurrent = _useUsedInfo.setParentCurrent,
          childCurrent = _useUsedInfo.childCurrent,
          setChildCurrent = _useUsedInfo.setChildCurrent,
          classifyName = _useUsedInfo.classifyName,
          setClassiryName = _useUsedInfo.setClassiryName,
          cityName = _useUsedInfo.cityName,
          setCityName = _useUsedInfo.setCityName,
          setCIndex = _useUsedInfo.setCIndex,
          setPIndex = _useUsedInfo.setPIndex,
          areaProvince = _useUsedInfo.areaProvince,
          areaCity = _useUsedInfo.areaCity,
          cIndex = _useUsedInfo.cIndex,
          pIndex = _useUsedInfo.pIndex,
          thisCurrentAreaCity = _useUsedInfo.thisCurrentAreaCity,
          userTel = _useUsedInfo.userTel,
          vaildPublishModelInfo = _useUsedInfo.vaildPublishModelInfo,
          initUsedPublishViewInfo = _useUsedInfo.initUsedPublishViewInfo,
          num = _useUsedInfo.num,
          setNum = _useUsedInfo.setNum;

      var _useState = (0, _taroSwan.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          showDrawer = _useState2[0],
          setShowDrawer = _useState2[1];
      // 使用自定义验证码hook


      var _useCode = (0, _index2.default)(),
          text = _useCode.text,
          userGetCode = _useCode.userGetCode;
      // 判断是否是首次进入


      var _useState3 = (0, _taroSwan.useState)(true),
          _useState4 = _slicedToArray(_useState3, 2),
          first = _useState4[0],
          setFirst = _useState4[1];
      // 加载初始化数据


      (0, _taroSwan.useDidShow)(function () {
        if (first) {
          setFirst(false);
          return;
        }
        initUsedPublishViewInfo();
      });
      // 用户填写信息
      var userEnterFrom = function userEnterFrom(e, key) {
        var reModel = JSON.parse(JSON.stringify(model));
        var val = e.detail.value;
        reModel[key] = val;
        setModel(reModel);
        if (key == 'detail') {
          setNum(val.length);
        }
      };
      // 用户点击父级
      var useClickClassifyParentId = function useClickClassifyParentId(parentCurrent) {
        setParentCurrent(parentCurrent);
      };
      // 用户点击子级
      var useClickClassifyChildId = function useClickClassifyChildId(childCurrent) {
        setChildCurrent(childCurrent);
        if (!initModel) {
          return;
        }
        var name = initModel.classifyTree[parentCurrent].name + '-' + initModel.classifyTree[parentCurrent].attributes[childCurrent].name;
        setClassiryName(name);
        setShowDrawer(false);
        setModel(_extends({}, model, { attribute_id: initModel.classifyTree[parentCurrent].attributes[childCurrent].id, category_id: initModel.classifyTree[parentCurrent].id }));
      };
      // 用户点击交易目的
      var userClickClassify = function userClickClassify(bool) {
        setShowDrawer(bool);
      };
      // picker改变
      var onPickerChange = function onPickerChange(e) {
        if (!initModel) {
          return;
        }
        var pi = e.detail.value[0];
        var ci = e.detail.value[1];
        setCityName(initModel.areaTree[pi].name + '-' + initModel.areaTree[pi].children[ci].name);
        setModel(_extends({}, model, { province_id: initModel.areaTree[pi].id, city_id: initModel.areaTree[pi].children[ci].id }));
      };
      var onColumnChange = function onColumnChange(e) {
        var column = e.detail.column;
        var current = e.detail.value;
        if (column === 0) {
          setPIndex(current);
          thisCurrentAreaCity(current);
        } else {
          setCIndex(current);
        }
      };
      this.anonymousFunc0 = function () {
        return userClickClassify(false);
      };
      this.anonymousFunc3 = function (e) {
        return userEnterFrom(e, 'title');
      };
      this.anonymousFunc4 = function () {
        return userClickClassify(true);
      };
      this.anonymousFunc5 = function (e) {
        return onPickerChange(e);
      };
      this.anonymousFunc6 = function (e) {
        return onColumnChange(e);
      };
      this.anonymousFunc7 = function (e) {
        return userEnterFrom(e, 'user_name');
      };
      this.anonymousFunc8 = function (e) {
        return userEnterFrom(e, 'user_mobile');
      };
      this.anonymousFunc9 = function (e) {
        return userEnterFrom(e, 'code');
      };
      this.anonymousFunc10 = function () {
        return userGetCode(model.user_mobile);
      };
      this.anonymousFunc11 = function (e) {
        return userEnterFrom(e, 'detail');
      };
      this.anonymousFunc12 = function () {
        return vaildPublishModelInfo();
      };
      var loopArray50 = initModel ? initModel.classifyTree.map(function (item, index) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp2 = initModel ? (0, _classnames2.default)({
          'drawer-list-item overwords': true,
          'drawer-list-item-active': index === parentCurrent
        }) : null;
        var _$indexKey = "fczzz" + index;
        _this2.anonymousFunc1Map[_$indexKey] = function () {
          return useClickClassifyParentId(index);
        };
        return {
          loopState__temp2: loopState__temp2,
          _$indexKey: _$indexKey,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      var loopArray51 = initModel ? initModel.classifyTree[parentCurrent].attributes.map(function (item, k) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp4 = initModel ? (0, _classnames2.default)({
          'drawer-list-item overwords': true,
          'drawer-list-item-active': k == childCurrent && item.privateOriginal.id == model.attribute_id
        }) : null;
        var _$indexKey2 = "fdzzz" + k;
        _this2.anonymousFunc2Map[_$indexKey2] = function () {
          return useClickClassifyChildId(k);
        };
        return {
          loopState__temp4: loopState__temp4,
          _$indexKey2: _$indexKey2,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      _taroSwan.propsManager.set({
        "show": showDrawer,
        "onClose": this.anonymousFunc0
      }, $compid__44, $prevCompid__44);
      _taroSwan.propsManager.set({
        "num": num
      }, $compid__45, $prevCompid__45);
      Object.assign(this.__state, {
        initModel: initModel,
        loopArray50: loopArray50,
        loopArray51: loopArray51,
        $compid__44: $compid__44,
        $compid__45: $compid__45,
        parentCurrent: parentCurrent,
        model: model,
        classifyName: classifyName,
        areaProvince: areaProvince,
        areaCity: areaCity,
        pIndex: pIndex,
        cIndex: cIndex,
        cityName: cityName,
        userTel: userTel,
        showDrawer: showDrawer,
        text: text
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: 'anonymousFunc1',
    value: function anonymousFunc1(_$indexKey) {
      var _anonymousFunc1Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc1Map[_$indexKey] && (_anonymousFunc1Map = this.anonymousFunc1Map)[_$indexKey].apply(_anonymousFunc1Map, e);
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(_$indexKey2) {
      var _anonymousFunc2Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc2Map[_$indexKey2] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey2].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(e) {
      ;
    }
  }, {
    key: 'anonymousFunc9',
    value: function anonymousFunc9(e) {
      ;
    }
  }, {
    key: 'anonymousFunc10',
    value: function anonymousFunc10(e) {
      ;
    }
  }, {
    key: 'anonymousFunc11',
    value: function anonymousFunc11(e) {
      ;
    }
  }, {
    key: 'anonymousFunc12',
    value: function anonymousFunc12(e) {
      ;
    }
  }]);

  return UsedPublish;
}(_taroSwan2.default.Component);

UsedPublish.$$events = ["anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12"];
UsedPublish.$$componentPath = "pages/used/publish/index";
UsedPublish.config = { navigationBarTitleText: '发布二手交易' };
exports.default = UsedPublish;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(UsedPublish, true));

/***/ })

},[["./src/pages/used/publish/index.tsx","runtime","vendors"]]]);
>>>>>>> 261d6575dd164dcd6819a9b565396e9664e76bf0
