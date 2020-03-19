(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/actions/tabbar.ts":
/*!*******************************!*\
  !*** ./src/actions/tabbar.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var changeTabbar = exports.changeTabbar = function changeTabbar(val) {
  return {
    type: val
  };
};

/***/ }),

/***/ "./src/components/swiper/index.ts":
/*!****************************************!*\
  !*** ./src/components/swiper/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_PROPS = exports.DEFAULT_PROPS = {
  indicatorDots: false,
  autoplay: true,
  current: 0,
  interval: 3500,
  duration: 500,
  circular: true,
  vertical: false,
  classname: '',
  lists: []
};

/***/ }),

/***/ "./src/config/index.ts":
/*!*****************************!*\
  !*** ./src/config/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// ? 全局不动配置项 只做导出不做修改
// * 全局请求接口域名
var REQUESTURL = exports.REQUESTURL = 'https://newyupaomini.54xiaoshuo.com/';
// * 默认上传图片
var UPLOADIMGURL = exports.UPLOADIMGURL = "https://newyupaomini.54xiaoshuo.com/index/upload/";
// * 阿里云CDN图片域名
var IMGCDNURL = exports.IMGCDNURL = 'http://cdn.yupao.com/miniprogram/images/';
// * 公司默认客服电话
var SERVERPHONE = exports.SERVERPHONE = '400-838-1888';
// * 小程序广告unitid
var UNITID = exports.UNITID = 'adunit-80f40e8b4f60c3f6';
// * 小程序当前版本号
var VERSION = exports.VERSION = '3.0.0';
// * 高德地区key
var MAPKEY = exports.MAPKEY = '20f12aae660c04de86f993d3eff590a0';
// * 小程序token 
var TOKEN = exports.TOKEN = 'jizhao';
// * 授权登录页面
var AUTHPATH = exports.AUTHPATH = '/pages/userauth/index';
// * page-title-global
var PAGETITLE = exports.PAGETITLE = '鱼泡网-';
// * 最大缓存历史城市数量
var MAXCACHECITYNUM = exports.MAXCACHECITYNUM = 3;

/***/ }),

/***/ "./src/config/store.ts":
/*!*****************************!*\
  !*** ./src/config/store.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// * 本文件为小程序内部缓存声明文件
// 用户信息
var UserInfo = exports.UserInfo = 'userInfo';
// 城市数据 发布招工 首页都会用到
var Areas = exports.Areas = 'areaData';
// 历史选择城市
var HistoryCities = exports.HistoryCities = 'historyCities';
// 当前定位城市
var UserLocationCity = exports.UserLocationCity = 'userLocationCity';
// 列表选择城市
var UserListChooseCity = exports.UserListChooseCity = 'userListChooseCity';
// 最后发布招工地点
var UserLastPublishArea = exports.UserLastPublishArea = 'userLastPublishArea';

/***/ }),

/***/ "./src/constants/tabbar.ts":
/*!*********************************!*\
  !*** ./src/constants/tabbar.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeInTabbar = typeInTabbar;
var HOME = exports.HOME = 'home';
var RECRUIT = exports.RECRUIT = 'recruit';
var RESUME = exports.RESUME = 'resume';
var MEMBER = exports.MEMBER = 'member';
var types = [HOME, RECRUIT, RESUME, MEMBER];
function typeInTabbar(val) {
  return types.includes(val);
}

/***/ }),

/***/ "./src/constants/user.tsx":
/*!********************************!*\
  !*** ./src/constants/user.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET = exports.GET = 'get';
var SET = exports.SET = 'set';

/***/ }),

/***/ "./src/constants/wechat_notice.ts":
/*!****************************************!*\
  !*** ./src/constants/wechat_notice.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SUCCESS = 'success';
exports.default = SUCCESS;

/***/ }),

/***/ "./src/hooks/publish/recruit.ts":
/*!**************************************!*\
  !*** ./src/hooks/publish/recruit.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = usePublishViewInfo;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../utils/request/index */ "./src/utils/request/index.ts");

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _area = __webpack_require__(/*! ../../models/area */ "./src/models/area.ts");

var _index2 = __webpack_require__(/*! ../../utils/helper/index */ "./src/utils/helper/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function usePublishViewInfo(InitParams) {
  // 视图显示信息
  var _useState = (0, _taroWeapp.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      model = _useState2[0],
      setModel = _useState2[1];
  // 是否展开图片上传


  var _useState3 = (0, _taroWeapp.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showUpload = _useState4[0],
      setShowUpload = _useState4[1];
  // 是否显示工种选择


  var _useState5 = (0, _taroWeapp.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showProfession = _useState6[0],
      setShowProssion = _useState6[1];
  // 当前显示城市


  var _useState7 = (0, _taroWeapp.useState)(_area.AREABEIJING.name),
      _useState8 = _slicedToArray(_useState7, 2),
      area = _useState8[0],
      setArea = _useState8[1];
  // 选择详细地址信息


  var _useState9 = (0, _taroWeapp.useState)({
    title: '',
    adcode: '',
    location: '',
    info: ''
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      areaInfo = _useState10[0],
      setAreaInfo = _useState10[1];
  // 初始化招工信息


  (0, _taroWeapp.useEffect)(function () {
    (0, _index.getPublishRecruitView)(InitParams).then(function (res) {
      var InitViewInfo = {
        placeholder: res.placeholder,
        classifies: res.selectedClassifies,
        maxImageCount: res.typeTextArr.maxImageCount,
        maxClassifyCount: res.typeTextArr.maxClassifyCount,
        classifyTree: res.classifyTree,
        title: res.model.title || '',
        address: res.model.address || '',
        detail: res.model.detail || '',
        infoId: res.model.id,
        type: res.type,
        user_mobile: res.model.user_mobile || res.memberInfo.tel || '',
        code: '',
        user_name: res.model.user_name,
        view_images: res.view_image,
        province_id: res.model.province_id || '',
        city_id: res.model.city_id || '',
        location: res.model.location || '',
        adcode: '',
        county_id: res.model.county_id || ''
      };
      setModel(InitViewInfo);
      initUserAreaInfo(res);
      setAreaInfo(_extends({}, areaInfo, { title: InitViewInfo.address }));
      if (res.view_image.length) setShowUpload(true);
    });
  }, []);
  function initUserAreaInfo(data) {
    //  设置地区名字
    if (InitParams.infoId) {
      setArea(data.default_search_name.name);
    } else {
      var userLoctionCity = _taroWeapp2.default.getStorageSync(_store.UserLocationCity);
      if (userLoctionCity) {
        setArea(userLoctionCity.city);
      } else {
        (0, _index2.userAuthLoction)().then(function (res) {
          setArea(res.city);
        }).then(function () {
          setArea(_area.AREABEIJING.name);
        });
      }
    }
    // 设置发布地址
    if (InitParams.infoId) {
      setAreaInfo({
        title: data.model.address,
        location: data.model.location,
        info: '',
        adcode: ''
      });
    } else {
      var userLastPublishArea = _taroWeapp2.default.getStorageSync(_store.UserLastPublishArea);
      if (userLastPublishArea) {
        setAreaInfo(userLastPublishArea);
      }
    }
  }
  function getPublishRecruitInfo() {
    if (!model) return;
    var data = {
      title: model.title,
      address: areaInfo.title + '@@@@@' + areaInfo.info,
      detail: model.detail,
      infoId: model.infoId,
      type: model.type,
      user_mobile: model.user_mobile,
      code: model.code,
      user_name: model.user_name,
      province_id: model.province_id,
      city_id: model.city_id,
      location: model.location,
      adcode: model.adcode,
      county_id: model.county_id,
      classifies: model.classifies,
      images: model.view_images.map(function (item) {
        return item.url;
      })
    };
    return data;
  }
  return {
    model: model,
    setModel: setModel,
    showUpload: showUpload,
    setShowUpload: setShowUpload,
    showProfession: showProfession,
    setShowProssion: setShowProssion,
    getPublishRecruitInfo: getPublishRecruitInfo,
    area: area,
    setArea: setArea,
    areaInfo: areaInfo,
    setAreaInfo: setAreaInfo
  };
}

/***/ }),

/***/ "./src/models/area.ts":
/*!****************************!*\
  !*** ./src/models/area.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCityInfo = getCityInfo;
var AREAS = [{
  "id": "1",
  "pid": "0",
  "name": "全国",
  "ad_name": "中国",
  "has_children": 0,
  "children": []
}, {
  "id": "2",
  "pid": "1",
  "name": "北京",
  "ad_name": "北京市",
  "has_children": 0,
  "children": []
}, {
  "id": "3",
  "pid": "1",
  "name": "安徽",
  "ad_name": "安徽省",
  "has_children": 1,
  "children": [{
    "id": "3",
    "pid": "1",
    "name": "安徽",
    "ad_name": "安徽省"
  }, {
    "id": "36",
    "pid": "3",
    "name": "安庆",
    "ad_name": "安庆市"
  }, {
    "id": "37",
    "pid": "3",
    "name": "蚌埠",
    "ad_name": "蚌埠市"
  }, {
    "id": "39",
    "pid": "3",
    "name": "池州",
    "ad_name": "池州市"
  }, {
    "id": "40",
    "pid": "3",
    "name": "滁州",
    "ad_name": "滁州市"
  }, {
    "id": "41",
    "pid": "3",
    "name": "阜阳",
    "ad_name": "阜阳市"
  }, {
    "id": "42",
    "pid": "3",
    "name": "淮北",
    "ad_name": "淮北市"
  }, {
    "id": "43",
    "pid": "3",
    "name": "淮南",
    "ad_name": "淮南市"
  }, {
    "id": "44",
    "pid": "3",
    "name": "黄山",
    "ad_name": "黄山市"
  }, {
    "id": "45",
    "pid": "3",
    "name": "六安",
    "ad_name": "六安市"
  }, {
    "id": "46",
    "pid": "3",
    "name": "马鞍山",
    "ad_name": "马鞍山市"
  }, {
    "id": "47",
    "pid": "3",
    "name": "宿州",
    "ad_name": "宿州市"
  }, {
    "id": "48",
    "pid": "3",
    "name": "铜陵",
    "ad_name": "铜陵市"
  }, {
    "id": "49",
    "pid": "3",
    "name": "芜湖",
    "ad_name": "芜湖市"
  }, {
    "id": "50",
    "pid": "3",
    "name": "宣城",
    "ad_name": "宣城市"
  }, {
    "id": "51",
    "pid": "3",
    "name": "亳州",
    "ad_name": "亳州市"
  }, {
    "id": "3401",
    "pid": "3",
    "name": "合肥",
    "ad_name": "合肥市"
  }]
}, {
  "id": "4",
  "pid": "1",
  "name": "福建",
  "ad_name": "福建省",
  "has_children": 1,
  "children": [{
    "id": "4",
    "pid": "1",
    "name": "福建",
    "ad_name": "福建省"
  }, {
    "id": "53",
    "pid": "4",
    "name": "福州",
    "ad_name": "福州市"
  }, {
    "id": "54",
    "pid": "4",
    "name": "龙岩",
    "ad_name": "龙岩市"
  }, {
    "id": "55",
    "pid": "4",
    "name": "南平",
    "ad_name": "南平市"
  }, {
    "id": "56",
    "pid": "4",
    "name": "宁德",
    "ad_name": "宁德市"
  }, {
    "id": "57",
    "pid": "4",
    "name": "莆田",
    "ad_name": "莆田市"
  }, {
    "id": "58",
    "pid": "4",
    "name": "泉州",
    "ad_name": "泉州市"
  }, {
    "id": "59",
    "pid": "4",
    "name": "三明",
    "ad_name": "三明市"
  }, {
    "id": "60",
    "pid": "4",
    "name": "厦门",
    "ad_name": "厦门市"
  }, {
    "id": "61",
    "pid": "4",
    "name": "漳州",
    "ad_name": "漳州市"
  }]
}, {
  "id": "5",
  "pid": "1",
  "name": "甘肃",
  "ad_name": "甘肃省",
  "has_children": 1,
  "children": [{
    "id": "5",
    "pid": "1",
    "name": "甘肃",
    "ad_name": "甘肃省"
  }, {
    "id": "62",
    "pid": "5",
    "name": "兰州",
    "ad_name": "兰州市"
  }, {
    "id": "63",
    "pid": "5",
    "name": "白银",
    "ad_name": "白银市"
  }, {
    "id": "64",
    "pid": "5",
    "name": "定西",
    "ad_name": "定西市"
  }, {
    "id": "65",
    "pid": "5",
    "name": "甘南",
    "ad_name": "甘南藏族自治州"
  }, {
    "id": "66",
    "pid": "5",
    "name": "嘉峪关",
    "ad_name": "嘉峪关市"
  }, {
    "id": "67",
    "pid": "5",
    "name": "金昌",
    "ad_name": "金昌市"
  }, {
    "id": "68",
    "pid": "5",
    "name": "酒泉",
    "ad_name": "酒泉市"
  }, {
    "id": "69",
    "pid": "5",
    "name": "临夏",
    "ad_name": "临夏回族自治州"
  }, {
    "id": "70",
    "pid": "5",
    "name": "陇南",
    "ad_name": "陇南市"
  }, {
    "id": "71",
    "pid": "5",
    "name": "平凉",
    "ad_name": "平凉市"
  }, {
    "id": "72",
    "pid": "5",
    "name": "庆阳",
    "ad_name": "庆阳市"
  }, {
    "id": "73",
    "pid": "5",
    "name": "天水",
    "ad_name": "天水市"
  }, {
    "id": "74",
    "pid": "5",
    "name": "武威",
    "ad_name": "武威市"
  }, {
    "id": "75",
    "pid": "5",
    "name": "张掖",
    "ad_name": "张掖市"
  }]
}, {
  "id": "6",
  "pid": "1",
  "name": "广东",
  "ad_name": "广东省",
  "has_children": 1,
  "children": [{
    "id": "6",
    "pid": "1",
    "name": "广东",
    "ad_name": "广东省"
  }, {
    "id": "76",
    "pid": "6",
    "name": "广州",
    "ad_name": "广州市"
  }, {
    "id": "77",
    "pid": "6",
    "name": "深圳",
    "ad_name": "深圳市"
  }, {
    "id": "78",
    "pid": "6",
    "name": "潮州",
    "ad_name": "潮州市"
  }, {
    "id": "79",
    "pid": "6",
    "name": "东莞",
    "ad_name": "东莞市"
  }, {
    "id": "80",
    "pid": "6",
    "name": "佛山",
    "ad_name": "佛山市"
  }, {
    "id": "81",
    "pid": "6",
    "name": "河源",
    "ad_name": "河源市"
  }, {
    "id": "82",
    "pid": "6",
    "name": "惠州",
    "ad_name": "惠州市"
  }, {
    "id": "83",
    "pid": "6",
    "name": "江门",
    "ad_name": "江门市"
  }, {
    "id": "84",
    "pid": "6",
    "name": "揭阳",
    "ad_name": "揭阳市"
  }, {
    "id": "85",
    "pid": "6",
    "name": "茂名",
    "ad_name": "茂名市"
  }, {
    "id": "86",
    "pid": "6",
    "name": "梅州",
    "ad_name": "梅州市"
  }, {
    "id": "87",
    "pid": "6",
    "name": "清远",
    "ad_name": "清远市"
  }, {
    "id": "88",
    "pid": "6",
    "name": "汕头",
    "ad_name": "汕头市"
  }, {
    "id": "89",
    "pid": "6",
    "name": "汕尾",
    "ad_name": "汕尾市"
  }, {
    "id": "90",
    "pid": "6",
    "name": "韶关",
    "ad_name": "韶关市"
  }, {
    "id": "91",
    "pid": "6",
    "name": "阳江",
    "ad_name": "阳江市"
  }, {
    "id": "92",
    "pid": "6",
    "name": "云浮",
    "ad_name": "云浮市"
  }, {
    "id": "93",
    "pid": "6",
    "name": "湛江",
    "ad_name": "湛江市"
  }, {
    "id": "94",
    "pid": "6",
    "name": "肇庆",
    "ad_name": "肇庆市"
  }, {
    "id": "95",
    "pid": "6",
    "name": "中山",
    "ad_name": "中山市"
  }, {
    "id": "96",
    "pid": "6",
    "name": "珠海",
    "ad_name": "珠海市"
  }]
}, {
  "id": "7",
  "pid": "1",
  "name": "广西",
  "ad_name": "广西壮族自治区",
  "has_children": 1,
  "children": [{
    "id": "7",
    "pid": "1",
    "name": "广西",
    "ad_name": "广西壮族自治区"
  }, {
    "id": "97",
    "pid": "7",
    "name": "南宁",
    "ad_name": "南宁市"
  }, {
    "id": "98",
    "pid": "7",
    "name": "桂林",
    "ad_name": "桂林市"
  }, {
    "id": "99",
    "pid": "7",
    "name": "百色",
    "ad_name": "百色市"
  }, {
    "id": "100",
    "pid": "7",
    "name": "北海",
    "ad_name": "北海市"
  }, {
    "id": "101",
    "pid": "7",
    "name": "崇左",
    "ad_name": "崇左市"
  }, {
    "id": "102",
    "pid": "7",
    "name": "防城港",
    "ad_name": "防城港市"
  }, {
    "id": "103",
    "pid": "7",
    "name": "贵港",
    "ad_name": "贵港市"
  }, {
    "id": "104",
    "pid": "7",
    "name": "河池",
    "ad_name": "河池市"
  }, {
    "id": "105",
    "pid": "7",
    "name": "贺州",
    "ad_name": "贺州市"
  }, {
    "id": "106",
    "pid": "7",
    "name": "来宾",
    "ad_name": "来宾市"
  }, {
    "id": "107",
    "pid": "7",
    "name": "柳州",
    "ad_name": "柳州市"
  }, {
    "id": "108",
    "pid": "7",
    "name": "钦州",
    "ad_name": "钦州市"
  }, {
    "id": "109",
    "pid": "7",
    "name": "梧州",
    "ad_name": "梧州市"
  }, {
    "id": "110",
    "pid": "7",
    "name": "玉林",
    "ad_name": "玉林市"
  }]
}, {
  "id": "8",
  "pid": "1",
  "name": "贵州",
  "ad_name": "贵州省",
  "has_children": 1,
  "children": [{
    "id": "8",
    "pid": "1",
    "name": "贵州",
    "ad_name": "贵州省"
  }, {
    "id": "111",
    "pid": "8",
    "name": "贵阳",
    "ad_name": "贵阳市"
  }, {
    "id": "112",
    "pid": "8",
    "name": "安顺",
    "ad_name": "安顺市"
  }, {
    "id": "113",
    "pid": "8",
    "name": "毕节",
    "ad_name": "毕节市"
  }, {
    "id": "114",
    "pid": "8",
    "name": "六盘水",
    "ad_name": "六盘水市"
  }, {
    "id": "115",
    "pid": "8",
    "name": "黔东南",
    "ad_name": "黔东南苗族侗族自治州"
  }, {
    "id": "116",
    "pid": "8",
    "name": "黔南",
    "ad_name": "黔南布依族苗族自治州"
  }, {
    "id": "117",
    "pid": "8",
    "name": "黔西南",
    "ad_name": "黔西南布依族苗族自治州"
  }, {
    "id": "118",
    "pid": "8",
    "name": "铜仁",
    "ad_name": "铜仁市"
  }, {
    "id": "119",
    "pid": "8",
    "name": "遵义",
    "ad_name": "遵义市"
  }]
}, {
  "id": "9",
  "pid": "1",
  "name": "海南",
  "ad_name": "海南省",
  "has_children": 1,
  "children": [{
    "id": "9",
    "pid": "1",
    "name": "海南",
    "ad_name": "海南省"
  }, {
    "id": "120",
    "pid": "9",
    "name": "海口",
    "ad_name": "海口市"
  }, {
    "id": "121",
    "pid": "9",
    "name": "三亚",
    "ad_name": "三亚市"
  }, {
    "id": "122",
    "pid": "9",
    "name": "白沙",
    "ad_name": "白沙黎族自治县"
  }, {
    "id": "123",
    "pid": "9",
    "name": "保亭",
    "ad_name": "保亭黎族苗族自治县"
  }, {
    "id": "124",
    "pid": "9",
    "name": "昌江",
    "ad_name": "昌江"
  }, {
    "id": "125",
    "pid": "9",
    "name": "澄迈县",
    "ad_name": "澄迈县"
  }, {
    "id": "126",
    "pid": "9",
    "name": "定安县",
    "ad_name": "定安县"
  }, {
    "id": "127",
    "pid": "9",
    "name": "东方",
    "ad_name": "东方市"
  }, {
    "id": "128",
    "pid": "9",
    "name": "乐东",
    "ad_name": "乐东黎族自治县"
  }, {
    "id": "129",
    "pid": "9",
    "name": "临高县",
    "ad_name": "临高县"
  }, {
    "id": "130",
    "pid": "9",
    "name": "陵水",
    "ad_name": "陵水黎族自治县"
  }, {
    "id": "131",
    "pid": "9",
    "name": "琼海",
    "ad_name": "琼海市"
  }, {
    "id": "132",
    "pid": "9",
    "name": "琼中",
    "ad_name": "琼中黎族苗族自治县"
  }, {
    "id": "133",
    "pid": "9",
    "name": "屯昌县",
    "ad_name": "屯昌县"
  }, {
    "id": "134",
    "pid": "9",
    "name": "万宁",
    "ad_name": "万宁市"
  }, {
    "id": "135",
    "pid": "9",
    "name": "文昌",
    "ad_name": "文昌市"
  }, {
    "id": "136",
    "pid": "9",
    "name": "五指山",
    "ad_name": "五指山市"
  }, {
    "id": "137",
    "pid": "9",
    "name": "儋州",
    "ad_name": "儋州市"
  }]
}, {
  "id": "10",
  "pid": "1",
  "name": "河北",
  "ad_name": "河北省",
  "has_children": 1,
  "children": [{
    "id": "10",
    "pid": "1",
    "name": "河北",
    "ad_name": "河北省"
  }, {
    "id": "138",
    "pid": "10",
    "name": "石家庄",
    "ad_name": "石家庄市"
  }, {
    "id": "139",
    "pid": "10",
    "name": "保定",
    "ad_name": "保定市"
  }, {
    "id": "140",
    "pid": "10",
    "name": "沧州",
    "ad_name": "沧州市"
  }, {
    "id": "141",
    "pid": "10",
    "name": "承德",
    "ad_name": "承德市"
  }, {
    "id": "142",
    "pid": "10",
    "name": "邯郸",
    "ad_name": "邯郸市"
  }, {
    "id": "143",
    "pid": "10",
    "name": "衡水",
    "ad_name": "衡水市"
  }, {
    "id": "144",
    "pid": "10",
    "name": "廊坊",
    "ad_name": "廊坊市"
  }, {
    "id": "145",
    "pid": "10",
    "name": "秦皇岛",
    "ad_name": "秦皇岛市"
  }, {
    "id": "146",
    "pid": "10",
    "name": "唐山",
    "ad_name": "唐山市"
  }, {
    "id": "147",
    "pid": "10",
    "name": "邢台",
    "ad_name": "邢台市"
  }, {
    "id": "148",
    "pid": "10",
    "name": "张家口",
    "ad_name": "张家口市"
  }]
}, {
  "id": "11",
  "pid": "1",
  "name": "河南",
  "ad_name": "河南省",
  "has_children": 1,
  "children": [{
    "id": "11",
    "pid": "1",
    "name": "河南",
    "ad_name": "河南省"
  }, {
    "id": "149",
    "pid": "11",
    "name": "郑州",
    "ad_name": "郑州市"
  }, {
    "id": "150",
    "pid": "11",
    "name": "洛阳",
    "ad_name": "洛阳市"
  }, {
    "id": "151",
    "pid": "11",
    "name": "开封",
    "ad_name": "开封市"
  }, {
    "id": "152",
    "pid": "11",
    "name": "安阳",
    "ad_name": "安阳市"
  }, {
    "id": "153",
    "pid": "11",
    "name": "鹤壁",
    "ad_name": "鹤壁市"
  }, {
    "id": "154",
    "pid": "11",
    "name": "济源",
    "ad_name": "济源市"
  }, {
    "id": "155",
    "pid": "11",
    "name": "焦作",
    "ad_name": "焦作市"
  }, {
    "id": "156",
    "pid": "11",
    "name": "南阳",
    "ad_name": "南阳市"
  }, {
    "id": "157",
    "pid": "11",
    "name": "平顶山",
    "ad_name": "平顶山市"
  }, {
    "id": "158",
    "pid": "11",
    "name": "三门峡",
    "ad_name": "三门峡市"
  }, {
    "id": "159",
    "pid": "11",
    "name": "商丘",
    "ad_name": "商丘市"
  }, {
    "id": "160",
    "pid": "11",
    "name": "新乡",
    "ad_name": "新乡市"
  }, {
    "id": "161",
    "pid": "11",
    "name": "信阳",
    "ad_name": "信阳市"
  }, {
    "id": "162",
    "pid": "11",
    "name": "许昌",
    "ad_name": "许昌市"
  }, {
    "id": "163",
    "pid": "11",
    "name": "周口",
    "ad_name": "周口市"
  }, {
    "id": "164",
    "pid": "11",
    "name": "驻马店",
    "ad_name": "驻马店市"
  }, {
    "id": "165",
    "pid": "11",
    "name": "漯河",
    "ad_name": "漯河市"
  }, {
    "id": "166",
    "pid": "11",
    "name": "濮阳",
    "ad_name": "濮阳市"
  }]
}, {
  "id": "12",
  "pid": "1",
  "name": "黑龙江",
  "ad_name": "黑龙江省",
  "has_children": 1,
  "children": [{
    "id": "12",
    "pid": "1",
    "name": "黑龙江",
    "ad_name": "黑龙江省"
  }, {
    "id": "167",
    "pid": "12",
    "name": "哈尔滨",
    "ad_name": "哈尔滨市"
  }, {
    "id": "168",
    "pid": "12",
    "name": "大庆",
    "ad_name": "大庆市"
  }, {
    "id": "169",
    "pid": "12",
    "name": "大兴安岭",
    "ad_name": "大兴安岭地区"
  }, {
    "id": "170",
    "pid": "12",
    "name": "鹤岗",
    "ad_name": "鹤岗市"
  }, {
    "id": "171",
    "pid": "12",
    "name": "黑河",
    "ad_name": "黑河市"
  }, {
    "id": "172",
    "pid": "12",
    "name": "鸡西",
    "ad_name": "鸡西市"
  }, {
    "id": "173",
    "pid": "12",
    "name": "佳木斯",
    "ad_name": "佳木斯市"
  }, {
    "id": "174",
    "pid": "12",
    "name": "牡丹江",
    "ad_name": "牡丹江市"
  }, {
    "id": "175",
    "pid": "12",
    "name": "七台河",
    "ad_name": "七台河市"
  }, {
    "id": "176",
    "pid": "12",
    "name": "齐齐哈尔",
    "ad_name": "齐齐哈尔市"
  }, {
    "id": "177",
    "pid": "12",
    "name": "双鸭山",
    "ad_name": "双鸭山市"
  }, {
    "id": "178",
    "pid": "12",
    "name": "绥化",
    "ad_name": "绥化市"
  }, {
    "id": "179",
    "pid": "12",
    "name": "伊春",
    "ad_name": "伊春市"
  }]
}, {
  "id": "13",
  "pid": "1",
  "name": "湖北",
  "ad_name": "湖北省",
  "has_children": 1,
  "children": [{
    "id": "13",
    "pid": "1",
    "name": "湖北",
    "ad_name": "湖北省"
  }, {
    "id": "180",
    "pid": "13",
    "name": "武汉",
    "ad_name": "武汉市"
  }, {
    "id": "181",
    "pid": "13",
    "name": "仙桃",
    "ad_name": "仙桃市"
  }, {
    "id": "182",
    "pid": "13",
    "name": "鄂州",
    "ad_name": "鄂州市"
  }, {
    "id": "183",
    "pid": "13",
    "name": "黄冈",
    "ad_name": "黄冈市"
  }, {
    "id": "184",
    "pid": "13",
    "name": "黄石",
    "ad_name": "黄石市"
  }, {
    "id": "185",
    "pid": "13",
    "name": "荆门",
    "ad_name": "荆门市"
  }, {
    "id": "186",
    "pid": "13",
    "name": "荆州",
    "ad_name": "荆州市"
  }, {
    "id": "187",
    "pid": "13",
    "name": "潜江",
    "ad_name": "潜江市"
  }, {
    "id": "188",
    "pid": "13",
    "name": "神农架林区",
    "ad_name": "神农架林区"
  }, {
    "id": "189",
    "pid": "13",
    "name": "十堰",
    "ad_name": "十堰市"
  }, {
    "id": "190",
    "pid": "13",
    "name": "随州",
    "ad_name": "随州市"
  }, {
    "id": "191",
    "pid": "13",
    "name": "天门",
    "ad_name": "天门市"
  }, {
    "id": "192",
    "pid": "13",
    "name": "咸宁",
    "ad_name": "咸宁市"
  }, {
    "id": "193",
    "pid": "13",
    "name": "襄阳",
    "ad_name": "襄阳市"
  }, {
    "id": "194",
    "pid": "13",
    "name": "孝感",
    "ad_name": "孝感市"
  }, {
    "id": "195",
    "pid": "13",
    "name": "宜昌",
    "ad_name": "宜昌市"
  }, {
    "id": "196",
    "pid": "13",
    "name": "恩施",
    "ad_name": "恩施"
  }]
}, {
  "id": "14",
  "pid": "1",
  "name": "湖南",
  "ad_name": "湖南省",
  "has_children": 1,
  "children": [{
    "id": "14",
    "pid": "1",
    "name": "湖南",
    "ad_name": "湖南省"
  }, {
    "id": "197",
    "pid": "14",
    "name": "长沙",
    "ad_name": "长沙市"
  }, {
    "id": "198",
    "pid": "14",
    "name": "张家界",
    "ad_name": "张家界市"
  }, {
    "id": "199",
    "pid": "14",
    "name": "常德",
    "ad_name": "常德市"
  }, {
    "id": "200",
    "pid": "14",
    "name": "郴州",
    "ad_name": "郴州市"
  }, {
    "id": "201",
    "pid": "14",
    "name": "衡阳",
    "ad_name": "衡阳市"
  }, {
    "id": "202",
    "pid": "14",
    "name": "怀化",
    "ad_name": "怀化市"
  }, {
    "id": "203",
    "pid": "14",
    "name": "娄底",
    "ad_name": "娄底市"
  }, {
    "id": "204",
    "pid": "14",
    "name": "邵阳",
    "ad_name": "邵阳市"
  }, {
    "id": "205",
    "pid": "14",
    "name": "湘潭",
    "ad_name": "湘潭市"
  }, {
    "id": "206",
    "pid": "14",
    "name": "湘西",
    "ad_name": "湘西土家族苗族自治州"
  }, {
    "id": "207",
    "pid": "14",
    "name": "益阳",
    "ad_name": "益阳市"
  }, {
    "id": "208",
    "pid": "14",
    "name": "永州",
    "ad_name": "永州市"
  }, {
    "id": "209",
    "pid": "14",
    "name": "岳阳",
    "ad_name": "岳阳市"
  }, {
    "id": "210",
    "pid": "14",
    "name": "株洲",
    "ad_name": "株洲市"
  }]
}, {
  "id": "15",
  "pid": "1",
  "name": "吉林",
  "ad_name": "吉林省",
  "has_children": 1,
  "children": [{
    "id": "15",
    "pid": "1",
    "name": "吉林",
    "ad_name": "吉林省"
  }, {
    "id": "211",
    "pid": "15",
    "name": "长春",
    "ad_name": "长春市"
  }, {
    "id": "212",
    "pid": "15",
    "name": "吉林",
    "ad_name": "吉林市"
  }, {
    "id": "213",
    "pid": "15",
    "name": "白城",
    "ad_name": "白城市"
  }, {
    "id": "214",
    "pid": "15",
    "name": "白山",
    "ad_name": "白山市"
  }, {
    "id": "215",
    "pid": "15",
    "name": "辽源",
    "ad_name": "辽源市"
  }, {
    "id": "216",
    "pid": "15",
    "name": "四平",
    "ad_name": "四平市"
  }, {
    "id": "217",
    "pid": "15",
    "name": "松原",
    "ad_name": "松原市"
  }, {
    "id": "218",
    "pid": "15",
    "name": "通化",
    "ad_name": "通化市"
  }, {
    "id": "219",
    "pid": "15",
    "name": "延边",
    "ad_name": "延边朝鲜族自治州"
  }]
}, {
  "id": "16",
  "pid": "1",
  "name": "江苏",
  "ad_name": "江苏省",
  "has_children": 1,
  "children": [{
    "id": "16",
    "pid": "1",
    "name": "江苏",
    "ad_name": "江苏省"
  }, {
    "id": "220",
    "pid": "16",
    "name": "南京",
    "ad_name": "南京市"
  }, {
    "id": "221",
    "pid": "16",
    "name": "苏州",
    "ad_name": "苏州市"
  }, {
    "id": "222",
    "pid": "16",
    "name": "无锡",
    "ad_name": "无锡市"
  }, {
    "id": "223",
    "pid": "16",
    "name": "常州",
    "ad_name": "常州市"
  }, {
    "id": "224",
    "pid": "16",
    "name": "淮安",
    "ad_name": "淮安市"
  }, {
    "id": "225",
    "pid": "16",
    "name": "连云港",
    "ad_name": "连云港市"
  }, {
    "id": "226",
    "pid": "16",
    "name": "南通",
    "ad_name": "南通市"
  }, {
    "id": "227",
    "pid": "16",
    "name": "宿迁",
    "ad_name": "宿迁市"
  }, {
    "id": "228",
    "pid": "16",
    "name": "泰州",
    "ad_name": "泰州市"
  }, {
    "id": "229",
    "pid": "16",
    "name": "徐州",
    "ad_name": "徐州市"
  }, {
    "id": "230",
    "pid": "16",
    "name": "盐城",
    "ad_name": "盐城市"
  }, {
    "id": "231",
    "pid": "16",
    "name": "扬州",
    "ad_name": "扬州市"
  }, {
    "id": "232",
    "pid": "16",
    "name": "镇江",
    "ad_name": "镇江市"
  }]
}, {
  "id": "17",
  "pid": "1",
  "name": "江西",
  "ad_name": "江西省",
  "has_children": 1,
  "children": [{
    "id": "17",
    "pid": "1",
    "name": "江西",
    "ad_name": "江西省"
  }, {
    "id": "233",
    "pid": "17",
    "name": "南昌",
    "ad_name": "南昌市"
  }, {
    "id": "234",
    "pid": "17",
    "name": "抚州",
    "ad_name": "抚州市"
  }, {
    "id": "235",
    "pid": "17",
    "name": "赣州",
    "ad_name": "赣州市"
  }, {
    "id": "236",
    "pid": "17",
    "name": "吉安",
    "ad_name": "吉安市"
  }, {
    "id": "237",
    "pid": "17",
    "name": "景德镇",
    "ad_name": "景德镇市"
  }, {
    "id": "238",
    "pid": "17",
    "name": "九江",
    "ad_name": "九江市"
  }, {
    "id": "239",
    "pid": "17",
    "name": "萍乡",
    "ad_name": "萍乡市"
  }, {
    "id": "240",
    "pid": "17",
    "name": "上饶",
    "ad_name": "上饶市"
  }, {
    "id": "241",
    "pid": "17",
    "name": "新余",
    "ad_name": "新余市"
  }, {
    "id": "242",
    "pid": "17",
    "name": "宜春",
    "ad_name": "宜春市"
  }, {
    "id": "243",
    "pid": "17",
    "name": "鹰潭",
    "ad_name": "鹰潭市"
  }]
}, {
  "id": "18",
  "pid": "1",
  "name": "辽宁",
  "ad_name": "辽宁省",
  "has_children": 1,
  "children": [{
    "id": "18",
    "pid": "1",
    "name": "辽宁",
    "ad_name": "辽宁省"
  }, {
    "id": "244",
    "pid": "18",
    "name": "沈阳",
    "ad_name": "沈阳市"
  }, {
    "id": "245",
    "pid": "18",
    "name": "大连",
    "ad_name": "大连市"
  }, {
    "id": "246",
    "pid": "18",
    "name": "鞍山",
    "ad_name": "鞍山市"
  }, {
    "id": "247",
    "pid": "18",
    "name": "本溪",
    "ad_name": "本溪市"
  }, {
    "id": "248",
    "pid": "18",
    "name": "朝阳",
    "ad_name": "朝阳市"
  }, {
    "id": "249",
    "pid": "18",
    "name": "丹东",
    "ad_name": "丹东市"
  }, {
    "id": "250",
    "pid": "18",
    "name": "抚顺",
    "ad_name": "抚顺市"
  }, {
    "id": "251",
    "pid": "18",
    "name": "阜新",
    "ad_name": "阜新市"
  }, {
    "id": "252",
    "pid": "18",
    "name": "葫芦岛",
    "ad_name": "葫芦岛市"
  }, {
    "id": "253",
    "pid": "18",
    "name": "锦州",
    "ad_name": "锦州市"
  }, {
    "id": "254",
    "pid": "18",
    "name": "辽阳",
    "ad_name": "辽阳市"
  }, {
    "id": "255",
    "pid": "18",
    "name": "盘锦",
    "ad_name": "盘锦市"
  }, {
    "id": "256",
    "pid": "18",
    "name": "铁岭",
    "ad_name": "铁岭市"
  }, {
    "id": "257",
    "pid": "18",
    "name": "营口",
    "ad_name": "营口市"
  }]
}, {
  "id": "19",
  "pid": "1",
  "name": "内蒙古",
  "ad_name": "内蒙古自治区",
  "has_children": 1,
  "children": [{
    "id": "19",
    "pid": "1",
    "name": "内蒙古",
    "ad_name": "内蒙古自治区"
  }, {
    "id": "258",
    "pid": "19",
    "name": "呼和浩特",
    "ad_name": "呼和浩特市"
  }, {
    "id": "259",
    "pid": "19",
    "name": "阿拉善盟",
    "ad_name": "阿拉善盟"
  }, {
    "id": "260",
    "pid": "19",
    "name": "巴彦淖尔盟",
    "ad_name": "巴彦淖尔市"
  }, {
    "id": "261",
    "pid": "19",
    "name": "包头",
    "ad_name": "包头市"
  }, {
    "id": "262",
    "pid": "19",
    "name": "赤峰",
    "ad_name": "赤峰市"
  }, {
    "id": "263",
    "pid": "19",
    "name": "鄂尔多斯",
    "ad_name": "鄂尔多斯市"
  }, {
    "id": "264",
    "pid": "19",
    "name": "呼伦贝尔",
    "ad_name": "呼伦贝尔市"
  }, {
    "id": "265",
    "pid": "19",
    "name": "通辽",
    "ad_name": "通辽市"
  }, {
    "id": "266",
    "pid": "19",
    "name": "乌海",
    "ad_name": "乌海市"
  }, {
    "id": "267",
    "pid": "19",
    "name": "乌兰察布市",
    "ad_name": "乌兰察布市"
  }, {
    "id": "268",
    "pid": "19",
    "name": "锡林郭勒盟",
    "ad_name": "锡林郭勒盟"
  }, {
    "id": "269",
    "pid": "19",
    "name": "兴安盟",
    "ad_name": "兴安盟"
  }]
}, {
  "id": "20",
  "pid": "1",
  "name": "宁夏",
  "ad_name": "宁夏回族自治区",
  "has_children": 1,
  "children": [{
    "id": "20",
    "pid": "1",
    "name": "宁夏",
    "ad_name": "宁夏回族自治区"
  }, {
    "id": "270",
    "pid": "20",
    "name": "银川",
    "ad_name": "银川市"
  }, {
    "id": "271",
    "pid": "20",
    "name": "固原",
    "ad_name": "固原市"
  }, {
    "id": "272",
    "pid": "20",
    "name": "石嘴山",
    "ad_name": "石嘴山市"
  }, {
    "id": "273",
    "pid": "20",
    "name": "吴忠",
    "ad_name": "吴忠市"
  }, {
    "id": "274",
    "pid": "20",
    "name": "中卫",
    "ad_name": "中卫市"
  }]
}, {
  "id": "21",
  "pid": "1",
  "name": "青海",
  "ad_name": "青海省",
  "has_children": 1,
  "children": [{
    "id": "21",
    "pid": "1",
    "name": "青海",
    "ad_name": "青海省"
  }, {
    "id": "275",
    "pid": "21",
    "name": "西宁",
    "ad_name": "西宁市"
  }, {
    "id": "276",
    "pid": "21",
    "name": "果洛",
    "ad_name": "果洛藏族自治州"
  }, {
    "id": "277",
    "pid": "21",
    "name": "海北",
    "ad_name": "海北藏族自治州"
  }, {
    "id": "278",
    "pid": "21",
    "name": "海东",
    "ad_name": "海东市"
  }, {
    "id": "279",
    "pid": "21",
    "name": "海南",
    "ad_name": "海南藏族自治州"
  }, {
    "id": "280",
    "pid": "21",
    "name": "海西",
    "ad_name": "海西蒙古族藏族自治州"
  }, {
    "id": "281",
    "pid": "21",
    "name": "黄南",
    "ad_name": "黄南藏族自治州"
  }, {
    "id": "282",
    "pid": "21",
    "name": "玉树",
    "ad_name": "玉树"
  }]
}, {
  "id": "22",
  "pid": "1",
  "name": "山东",
  "ad_name": "山东省",
  "has_children": 1,
  "children": [{
    "id": "22",
    "pid": "1",
    "name": "山东",
    "ad_name": "山东省"
  }, {
    "id": "283",
    "pid": "22",
    "name": "济南",
    "ad_name": "济南市"
  }, {
    "id": "284",
    "pid": "22",
    "name": "青岛",
    "ad_name": "青岛市"
  }, {
    "id": "285",
    "pid": "22",
    "name": "滨州",
    "ad_name": "滨州市"
  }, {
    "id": "286",
    "pid": "22",
    "name": "德州",
    "ad_name": "德州市"
  }, {
    "id": "287",
    "pid": "22",
    "name": "东营",
    "ad_name": "东营市"
  }, {
    "id": "288",
    "pid": "22",
    "name": "菏泽",
    "ad_name": "菏泽市"
  }, {
    "id": "289",
    "pid": "22",
    "name": "济宁",
    "ad_name": "济宁市"
  }, {
    "id": "291",
    "pid": "22",
    "name": "聊城",
    "ad_name": "聊城市"
  }, {
    "id": "292",
    "pid": "22",
    "name": "临沂",
    "ad_name": "临沂市"
  }, {
    "id": "293",
    "pid": "22",
    "name": "日照",
    "ad_name": "日照市"
  }, {
    "id": "294",
    "pid": "22",
    "name": "泰安",
    "ad_name": "泰安市"
  }, {
    "id": "295",
    "pid": "22",
    "name": "威海",
    "ad_name": "威海市"
  }, {
    "id": "296",
    "pid": "22",
    "name": "潍坊",
    "ad_name": "潍坊市"
  }, {
    "id": "297",
    "pid": "22",
    "name": "烟台",
    "ad_name": "烟台市"
  }, {
    "id": "298",
    "pid": "22",
    "name": "枣庄",
    "ad_name": "枣庄市"
  }, {
    "id": "299",
    "pid": "22",
    "name": "淄博",
    "ad_name": "淄博市"
  }]
}, {
  "id": "23",
  "pid": "1",
  "name": "山西",
  "ad_name": "山西省",
  "has_children": 1,
  "children": [{
    "id": "23",
    "pid": "1",
    "name": "山西",
    "ad_name": "山西省"
  }, {
    "id": "300",
    "pid": "23",
    "name": "太原",
    "ad_name": "太原市"
  }, {
    "id": "301",
    "pid": "23",
    "name": "长治",
    "ad_name": "长治市"
  }, {
    "id": "302",
    "pid": "23",
    "name": "大同",
    "ad_name": "大同市"
  }, {
    "id": "303",
    "pid": "23",
    "name": "晋城",
    "ad_name": "晋城市"
  }, {
    "id": "304",
    "pid": "23",
    "name": "晋中",
    "ad_name": "晋中市"
  }, {
    "id": "305",
    "pid": "23",
    "name": "临汾",
    "ad_name": "临汾市"
  }, {
    "id": "306",
    "pid": "23",
    "name": "吕梁",
    "ad_name": "吕梁市"
  }, {
    "id": "307",
    "pid": "23",
    "name": "朔州",
    "ad_name": "朔州市"
  }, {
    "id": "308",
    "pid": "23",
    "name": "忻州",
    "ad_name": "忻州市"
  }, {
    "id": "309",
    "pid": "23",
    "name": "阳泉",
    "ad_name": "阳泉市"
  }, {
    "id": "310",
    "pid": "23",
    "name": "运城",
    "ad_name": "运城市"
  }]
}, {
  "id": "24",
  "pid": "1",
  "name": "陕西",
  "ad_name": "陕西省",
  "has_children": 1,
  "children": [{
    "id": "24",
    "pid": "1",
    "name": "陕西",
    "ad_name": "陕西省"
  }, {
    "id": "311",
    "pid": "24",
    "name": "西安",
    "ad_name": "西安市"
  }, {
    "id": "312",
    "pid": "24",
    "name": "安康",
    "ad_name": "安康市"
  }, {
    "id": "313",
    "pid": "24",
    "name": "宝鸡",
    "ad_name": "宝鸡市"
  }, {
    "id": "314",
    "pid": "24",
    "name": "汉中",
    "ad_name": "汉中市"
  }, {
    "id": "315",
    "pid": "24",
    "name": "商洛",
    "ad_name": "商洛市"
  }, {
    "id": "316",
    "pid": "24",
    "name": "铜川",
    "ad_name": "铜川市"
  }, {
    "id": "317",
    "pid": "24",
    "name": "渭南",
    "ad_name": "渭南市"
  }, {
    "id": "318",
    "pid": "24",
    "name": "咸阳",
    "ad_name": "咸阳市"
  }, {
    "id": "319",
    "pid": "24",
    "name": "延安",
    "ad_name": "延安市"
  }, {
    "id": "320",
    "pid": "24",
    "name": "榆林",
    "ad_name": "榆林市"
  }]
}, {
  "id": "25",
  "pid": "1",
  "name": "上海",
  "ad_name": "上海市",
  "has_children": 0,
  "children": []
}, {
  "id": "26",
  "pid": "1",
  "name": "四川",
  "ad_name": "四川省",
  "has_children": 1,
  "children": [{
    "id": "26",
    "pid": "1",
    "name": "四川",
    "ad_name": "四川省"
  }, {
    "id": "322",
    "pid": "26",
    "name": "成都",
    "ad_name": "成都市"
  }, {
    "id": "323",
    "pid": "26",
    "name": "绵阳",
    "ad_name": "绵阳市"
  }, {
    "id": "324",
    "pid": "26",
    "name": "阿坝",
    "ad_name": "阿坝藏族羌族自治州"
  }, {
    "id": "325",
    "pid": "26",
    "name": "巴中",
    "ad_name": "巴中市"
  }, {
    "id": "326",
    "pid": "26",
    "name": "达州",
    "ad_name": "达州市"
  }, {
    "id": "327",
    "pid": "26",
    "name": "德阳",
    "ad_name": "德阳市"
  }, {
    "id": "328",
    "pid": "26",
    "name": "甘孜",
    "ad_name": "甘孜藏族自治州"
  }, {
    "id": "329",
    "pid": "26",
    "name": "广安",
    "ad_name": "广安市"
  }, {
    "id": "330",
    "pid": "26",
    "name": "广元",
    "ad_name": "广元市"
  }, {
    "id": "331",
    "pid": "26",
    "name": "乐山",
    "ad_name": "乐山市"
  }, {
    "id": "332",
    "pid": "26",
    "name": "凉山",
    "ad_name": "凉山彝族自治州"
  }, {
    "id": "333",
    "pid": "26",
    "name": "眉山",
    "ad_name": "眉山市"
  }, {
    "id": "334",
    "pid": "26",
    "name": "南充",
    "ad_name": "南充市"
  }, {
    "id": "335",
    "pid": "26",
    "name": "内江",
    "ad_name": "内江市"
  }, {
    "id": "336",
    "pid": "26",
    "name": "攀枝花",
    "ad_name": "攀枝花市"
  }, {
    "id": "337",
    "pid": "26",
    "name": "遂宁",
    "ad_name": "遂宁市"
  }, {
    "id": "338",
    "pid": "26",
    "name": "雅安",
    "ad_name": "雅安市"
  }, {
    "id": "339",
    "pid": "26",
    "name": "宜宾",
    "ad_name": "宜宾市"
  }, {
    "id": "340",
    "pid": "26",
    "name": "资阳",
    "ad_name": "资阳市"
  }, {
    "id": "341",
    "pid": "26",
    "name": "自贡",
    "ad_name": "自贡市"
  }, {
    "id": "342",
    "pid": "26",
    "name": "泸州",
    "ad_name": "泸州市"
  }]
}, {
  "id": "27",
  "pid": "1",
  "name": "天津",
  "ad_name": "天津市",
  "has_children": 0,
  "children": []
}, {
  "id": "28",
  "pid": "1",
  "name": "西藏",
  "ad_name": "西藏自治区",
  "has_children": 1,
  "children": [{
    "id": "28",
    "pid": "1",
    "name": "西藏",
    "ad_name": "西藏自治区"
  }, {
    "id": "344",
    "pid": "28",
    "name": "拉萨",
    "ad_name": "拉萨市"
  }, {
    "id": "345",
    "pid": "28",
    "name": "阿里",
    "ad_name": "阿里地区"
  }, {
    "id": "346",
    "pid": "28",
    "name": "昌都",
    "ad_name": "昌都市"
  }, {
    "id": "347",
    "pid": "28",
    "name": "林芝",
    "ad_name": "林芝市"
  }, {
    "id": "348",
    "pid": "28",
    "name": "那曲",
    "ad_name": "那曲市"
  }, {
    "id": "349",
    "pid": "28",
    "name": "日喀则",
    "ad_name": "日喀则市"
  }, {
    "id": "350",
    "pid": "28",
    "name": "山南",
    "ad_name": "山南市"
  }]
}, {
  "id": "29",
  "pid": "1",
  "name": "新疆",
  "ad_name": "新疆维吾尔自治区",
  "has_children": 1,
  "children": [{
    "id": "29",
    "pid": "1",
    "name": "新疆",
    "ad_name": "新疆维吾尔自治区"
  }, {
    "id": "351",
    "pid": "29",
    "name": "乌鲁木齐",
    "ad_name": "乌鲁木齐市"
  }, {
    "id": "352",
    "pid": "29",
    "name": "阿克苏",
    "ad_name": "阿克苏地区"
  }, {
    "id": "353",
    "pid": "29",
    "name": "阿拉尔",
    "ad_name": "阿拉尔市"
  }, {
    "id": "354",
    "pid": "29",
    "name": "巴音郭楞",
    "ad_name": "巴音郭楞蒙古自治州"
  }, {
    "id": "355",
    "pid": "29",
    "name": "博尔塔拉",
    "ad_name": "博尔塔拉蒙古自治州"
  }, {
    "id": "356",
    "pid": "29",
    "name": "昌吉",
    "ad_name": "昌吉回族自治州"
  }, {
    "id": "357",
    "pid": "29",
    "name": "哈密",
    "ad_name": "哈密市"
  }, {
    "id": "358",
    "pid": "29",
    "name": "和田",
    "ad_name": "和田地区"
  }, {
    "id": "359",
    "pid": "29",
    "name": "喀什",
    "ad_name": "喀什地区"
  }, {
    "id": "360",
    "pid": "29",
    "name": "克拉玛依",
    "ad_name": "克拉玛依市"
  }, {
    "id": "361",
    "pid": "29",
    "name": "克孜勒苏",
    "ad_name": "克孜勒苏柯尔克孜自治州"
  }, {
    "id": "362",
    "pid": "29",
    "name": "石河子",
    "ad_name": "石河子市"
  }, {
    "id": "363",
    "pid": "29",
    "name": "图木舒克",
    "ad_name": "图木舒克市"
  }, {
    "id": "364",
    "pid": "29",
    "name": "吐鲁番",
    "ad_name": "吐鲁番市"
  }, {
    "id": "365",
    "pid": "29",
    "name": "五家渠",
    "ad_name": "五家渠市"
  }, {
    "id": "366",
    "pid": "29",
    "name": "伊犁",
    "ad_name": "伊犁哈萨克自治州"
  }, {
    "id": "6156",
    "pid": "29",
    "name": "塔城地区",
    "ad_name": "塔城地区"
  }, {
    "id": "6157",
    "pid": "29",
    "name": "阿勒泰地区",
    "ad_name": "阿勒泰地区"
  }]
}, {
  "id": "30",
  "pid": "1",
  "name": "云南",
  "ad_name": "云南省",
  "has_children": 1,
  "children": [{
    "id": "30",
    "pid": "1",
    "name": "云南",
    "ad_name": "云南省"
  }, {
    "id": "367",
    "pid": "30",
    "name": "昆明",
    "ad_name": "昆明市"
  }, {
    "id": "368",
    "pid": "30",
    "name": "怒江",
    "ad_name": "怒江"
  }, {
    "id": "369",
    "pid": "30",
    "name": "普洱",
    "ad_name": "普洱市"
  }, {
    "id": "370",
    "pid": "30",
    "name": "丽江",
    "ad_name": "丽江市"
  }, {
    "id": "371",
    "pid": "30",
    "name": "保山",
    "ad_name": "保山市"
  }, {
    "id": "372",
    "pid": "30",
    "name": "楚雄",
    "ad_name": "楚雄彝族自治州"
  }, {
    "id": "373",
    "pid": "30",
    "name": "大理",
    "ad_name": "大理白族自治州"
  }, {
    "id": "374",
    "pid": "30",
    "name": "德宏",
    "ad_name": "德宏傣族景颇族自治州"
  }, {
    "id": "375",
    "pid": "30",
    "name": "迪庆",
    "ad_name": "迪庆藏族自治州"
  }, {
    "id": "376",
    "pid": "30",
    "name": "红河",
    "ad_name": "红河哈尼族彝族自治州"
  }, {
    "id": "377",
    "pid": "30",
    "name": "临沧",
    "ad_name": "临沧市"
  }, {
    "id": "378",
    "pid": "30",
    "name": "曲靖",
    "ad_name": "曲靖市"
  }, {
    "id": "379",
    "pid": "30",
    "name": "文山",
    "ad_name": "文山壮族苗族自治州"
  }, {
    "id": "380",
    "pid": "30",
    "name": "西双版纳",
    "ad_name": "西双版纳傣族自治州"
  }, {
    "id": "381",
    "pid": "30",
    "name": "玉溪",
    "ad_name": "玉溪市"
  }, {
    "id": "382",
    "pid": "30",
    "name": "昭通",
    "ad_name": "昭通市"
  }]
}, {
  "id": "31",
  "pid": "1",
  "name": "浙江",
  "ad_name": "浙江省",
  "has_children": 1,
  "children": [{
    "id": "31",
    "pid": "1",
    "name": "浙江",
    "ad_name": "浙江省"
  }, {
    "id": "383",
    "pid": "31",
    "name": "杭州",
    "ad_name": "杭州市"
  }, {
    "id": "384",
    "pid": "31",
    "name": "湖州",
    "ad_name": "湖州市"
  }, {
    "id": "385",
    "pid": "31",
    "name": "嘉兴",
    "ad_name": "嘉兴市"
  }, {
    "id": "386",
    "pid": "31",
    "name": "金华",
    "ad_name": "金华市"
  }, {
    "id": "387",
    "pid": "31",
    "name": "丽水",
    "ad_name": "丽水市"
  }, {
    "id": "388",
    "pid": "31",
    "name": "宁波",
    "ad_name": "宁波市"
  }, {
    "id": "389",
    "pid": "31",
    "name": "绍兴",
    "ad_name": "绍兴市"
  }, {
    "id": "390",
    "pid": "31",
    "name": "台州",
    "ad_name": "台州市"
  }, {
    "id": "391",
    "pid": "31",
    "name": "温州",
    "ad_name": "温州市"
  }, {
    "id": "392",
    "pid": "31",
    "name": "舟山",
    "ad_name": "舟山市"
  }, {
    "id": "393",
    "pid": "31",
    "name": "衢州",
    "ad_name": "衢州市"
  }]
}, {
  "id": "32",
  "pid": "1",
  "name": "重庆",
  "ad_name": "重庆市",
  "has_children": 0,
  "children": []
}];
// * 默认全国数据
var AREACHINA = exports.AREACHINA = AREAS[0];
// * 默认北京数据
var AREABEIJING = exports.AREABEIJING = AREAS[1];
// * 定位返回省份信息 0返回省份 1返回城市 
function getCityInfo(data) {
  var current = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var len = AREAS.length;
  var flag = false;
  if (!current) {
    var items = AREAS.filter(function (item) {
      return data.province.indexOf(item.name) !== -1;
    });
    if (items.length) {
      return items[0];
    } else {
      //根据城市名称查找
      for (var i = 0; i < len; i++) {
        var item = AREAS[i];
        if (item.has_children) {
          var itemArea = item.children;
          var dlen = itemArea.length;
          for (var k = 0; k < dlen; k++) {
            var d = itemArea[k];
            if (data.city.indexOf(d.name) !== -1) {
              var province = {
                id: item.id,
                pid: item.pid,
                ad_name: item.ad_name,
                name: item.name
              };
              flag = true;
              return province;
              break;
            }
          }
          if (flag) break;
        }
      }
    }
  } else {
    var _items = AREAS.filter(function (item) {
      return data.city.indexOf(item.name) !== -1;
    });
    if (_items.length) return _items[0];
    for (var _i = 0; _i < len; _i++) {
      var _item = AREAS[_i];
      if (_item.has_children) {
        var _itemArea = _item.children;
        var _dlen = _itemArea.length;
        for (var _k = 0; _k < _dlen; _k++) {
          var _d = _itemArea[_k];
          if (data.city.indexOf(_d.name) !== -1) {
            flag = true;
            return _d;
            break;
          }
        }
        if (flag) break;
      }
    }
  }
  // 查询不到内容 直接返回全国/北京
  return current ? AREABEIJING : AREACHINA;
}
exports.default = AREAS;

/***/ }),

/***/ "./src/pages/integral/index.scss":
/*!***************************************!*\
  !*** ./src/pages/integral/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/recruit/publish/index.scss":
/*!**********************************************!*\
  !*** ./src/pages/recruit/publish/index.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/recruit/publish/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/recruit/publish/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.context = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _recruit = __webpack_require__(/*! ../../../hooks/publish/recruit */ "./src/hooks/publish/recruit.ts");

var _recruit2 = _interopRequireDefault(_recruit);

var _index = __webpack_require__(/*! ../../../utils/upload/index */ "./src/utils/upload/index.tsx");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

__webpack_require__(/*! ./index.scss */ "./src/pages/recruit/publish/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var context = exports.context = (0, _taroWeapp.createContext)({});

var PublishRecruit = function (_Taro$Component) {
  _inherits(PublishRecruit, _Taro$Component);

  function PublishRecruit() {
    _classCallCheck(this, PublishRecruit);

    var _this = _possibleConstructorReturn(this, (PublishRecruit.__proto__ || Object.getPrototypeOf(PublishRecruit)).apply(this, arguments));

    _this.$usedState = ["model", "$compid__19", "$compid__20", "$compid__21", "showProfession", "showUpload"];
    _this.customComponents = ["Profession", "WordsTotal", "ImageView"];
    return _this;
  }

  _createClass(PublishRecruit, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(PublishRecruit.prototype.__proto__ || Object.getPrototypeOf(PublishRecruit.prototype), "_constructor", this).call(this, props);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__19"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__19 = _genCompid2[0],
          $compid__19 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__20"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__20 = _genCompid4[0],
          $compid__20 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__21"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__21 = _genCompid6[0],
          $compid__21 = _genCompid6[1];
      // 获取路由参数


      var router = (0, _taroWeapp.useRouter)();
      var id = router.params.id || '';
      var type = 'job';
      var InitParams = { type: type, infoId: id };
      // 初始化当前信息

      var _usePublishViewInfo = (0, _recruit2.default)(InitParams),
          model = _usePublishViewInfo.model,
          setModel = _usePublishViewInfo.setModel,
          showUpload = _usePublishViewInfo.showUpload,
          setShowUpload = _usePublishViewInfo.setShowUpload,
          showProfession = _usePublishViewInfo.showProfession,
          setShowProssion = _usePublishViewInfo.setShowProssion,
          area = _usePublishViewInfo.area,
          _setArea = _usePublishViewInfo.setArea,
          _setAreaInfo = _usePublishViewInfo.setAreaInfo;
      // 需要传递的值


      var value = {
        area: area,
        setArea: function setArea(city) {
          return _setArea(city);
        },
        setAreaInfo: function setAreaInfo(item) {
          return _setAreaInfo(item);
        }
      };
      // 切换图片上传显示隐藏
      var changeShowUpload = function changeShowUpload() {
        setShowUpload(!showUpload);
      };
      var showProfessionAction = function showProfessionAction() {
        setShowProssion(true);
      };
      var closeProfession = function closeProfession() {
        setShowProssion(false);
      };
      // 用户填写表单
      var userEnterFrom = function userEnterFrom(e, key) {
        var value = e.detail.value;
        var state = JSON.parse(JSON.stringify(model));
        state[key] = value;
        setModel(state);
      };
      // 用户发布招工信息
      var userPublishRecruit = function userPublishRecruit() {
        console.log(model);
      };
      // 选择地址
      var userChooseArea = function userChooseArea() {
        if (!model) {
          return;
        }
        var url = '/pages/map/recruit/index';
        _taroWeapp2.default.navigateTo({
          url: url
        });
      };
      // 点击工种
      var userClickProfession = function userClickProfession(i, k, id) {
        if (!model) {
          return;
        }
        var works = JSON.parse(JSON.stringify(model.classifyTree));
        var check = works[i].children[k].is_check;
        if (!check) {
          var max = model.maxClassifyCount;
          var num = model.classifies.length;
          if (num >= max) {
            (0, _index4.default)('工种最多可以选择' + max + '个');
            return;
          }
        }
        works[i].children[k].is_check = !check;
        var classifyArr = JSON.parse(JSON.stringify(model.classifies));
        var newArr = check ? classifyArr.filter(function (item) {
          return item !== id;
        }) : [].concat(_toConsumableArray(classifyArr), [id]);
        setModel(_extends({}, model, { classifyTree: works, classifies: newArr }));
      };
      // 用户上传图片
      var userUploadImg = function userUploadImg() {
        var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

        (0, _index2.default)().then(function (res) {
          var imageItem = {
            url: res.url,
            httpurl: res.httpurl
          };
          if (model) {
            if (i === -1) {
              setModel(_extends({}, model, { view_images: [].concat(_toConsumableArray(model.view_images), [imageItem]) }));
            } else {
              model.view_images[i] = imageItem;
              setModel(_extends({}, model));
            }
          }
        });
      };
      context.Provider(value);
      this.anonymousFunc0 = function (i, k, id) {
        return userClickProfession(i, k, id);
      };
      this.anonymousFunc1 = function (e) {
        return userEnterFrom(e, 'title');
      };
      this.anonymousFunc2 = function () {
        return showProfessionAction();
      };
      this.anonymousFunc3 = function () {
        return userChooseArea();
      };
      this.anonymousFunc4 = function (e) {
        return userEnterFrom(e, 'user_name');
      };
      this.anonymousFunc5 = function (e) {
        return userEnterFrom(e, 'user_mobile');
      };
      this.anonymousFunc6 = function (e) {
        return userEnterFrom(e, 'detail');
      };
      this.anonymousFunc7 = function () {
        return changeShowUpload();
      };
      this.anonymousFunc8 = function () {
        return userPublishRecruit();
      };
      showProfession && _taroWeapp.propsManager.set({
        "closeProfession": closeProfession,
        "data": model && model.classifyTree,
        "onClickItem": this.anonymousFunc0,
        "num": 3
      }, $compid__19, $prevCompid__19);
      _taroWeapp.propsManager.set({
        "num": 0
      }, $compid__20, $prevCompid__20);
      showUpload && model && _taroWeapp.propsManager.set({
        "images": model.view_images,
        "max": model.maxImageCount,
        "userUploadImg": userUploadImg
      }, $compid__21, $prevCompid__21);
      Object.assign(this.__state, {
        model: model,
        $compid__19: $compid__19,
        $compid__20: $compid__20,
        $compid__21: $compid__21,
        showProfession: showProfession,
        showUpload: showUpload
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: "anonymousFunc4",
    value: function anonymousFunc4(e) {
      ;
    }
  }, {
    key: "anonymousFunc5",
    value: function anonymousFunc5(e) {
      ;
    }
  }, {
    key: "anonymousFunc6",
    value: function anonymousFunc6(e) {
      ;
    }
  }, {
    key: "anonymousFunc7",
    value: function anonymousFunc7(e) {
      ;
    }
  }, {
    key: "anonymousFunc8",
    value: function anonymousFunc8(e) {
      ;
    }
  }]);

  return PublishRecruit;
}(_taroWeapp2.default.Component);

PublishRecruit.$$events = ["anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8"];
PublishRecruit.$$componentPath = "pages/recruit/publish/index";
exports.default = PublishRecruit;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(PublishRecruit, true));

/***/ }),

/***/ "./src/utils/api/index.ts":
/*!********************************!*\
  !*** ./src/utils/api/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllAreas = exports.GetPublisRecruitView = exports.GetIntegralList = exports.GetTabbarMsg = exports.GetListFilterData = exports.GetWechatNotice = exports.GetFleamarketlist = exports.GetResumelist = exports.GetRecruitlist = exports.GetAllListItem = exports.GetBannerNotice = exports.GetUserInfo = exports.GetUserSessionKey = undefined;

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

// 获取用户session_key
var GetUserSessionKey = exports.GetUserSessionKey = _index.REQUESTURL + 'user/user-info/';
// session_key获取用户信息
var GetUserInfo = exports.GetUserInfo = _index.REQUESTURL + 'user/make-user/';
// 获取首页banner以及公告
var GetBannerNotice = exports.GetBannerNotice = _index.REQUESTURL + 'index/index-banner-carousel/';
// 获取首页列表数据
var GetAllListItem = exports.GetAllListItem = _index.REQUESTURL + 'index/new-index-msg/';
// 获取招工列表
var GetRecruitlist = exports.GetRecruitlist = _index.REQUESTURL + 'job/list-new/';
// 获取找活列表
var GetResumelist = exports.GetResumelist = _index.REQUESTURL + 'resumes/index/';
// 获取二手交易列表
var GetFleamarketlist = exports.GetFleamarketlist = _index.REQUESTURL + 'index/info-list/';
// 获取微信号与公告列表
var GetWechatNotice = exports.GetWechatNotice = _index.REQUESTURL + 'index/less-search-data/';
// 获取列表页筛选条件
var GetListFilterData = exports.GetListFilterData = _index.REQUESTURL + 'index/index-search-tree/';
// 获取tabbar未读消息
var GetTabbarMsg = exports.GetTabbarMsg = _index.REQUESTURL + 'member/original-message/';
// 获取积分记录分页数据
var GetIntegralList = exports.GetIntegralList = _index.REQUESTURL + 'integral/integral-record/';
// 初始化发布招工视图
var GetPublisRecruitView = exports.GetPublisRecruitView = _index.REQUESTURL + 'publish/new-job/';
// 获取城市数据
var GetAllAreas = exports.GetAllAreas = _index.REQUESTURL + 'index/index-area/';

/***/ }),

/***/ "./src/utils/helper/index.ts":
/*!***********************************!*\
  !*** ./src/utils/helper/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.objDeepCopy = objDeepCopy;
exports.userAuthLoction = userAuthLoction;
exports.getAmapPoiList = getAmapPoiList;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _amapWx = __webpack_require__(/*! ../source/amap-wx */ "./src/utils/source/amap-wx.js");

var _amapWx2 = _interopRequireDefault(_amapWx);

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 对象拷贝
function objDeepCopy(source) {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] = _typeof(source[item]) === 'object' ? objDeepCopy(source[item]) : source[item];
  }
  return sourceCopy;
}
// 获取用户定位
function userAuthLoction() {
  return new Promise(function (resolve, reject) {
    var GDMAP = new _amapWx2.default.AMapWX({ key: _index.MAPKEY });
    GDMAP.getRegeo({
      success: function success(data) {
        var gpsLocation = {
          province: data[0].regeocodeData.addressComponent.province,
          city: data[0].regeocodeData.addressComponent.city,
          adcode: data[0].regeocodeData.addressComponent.adcode,
          citycode: data[0].regeocodeData.addressComponent.citycode
        };
        _taroWeapp2.default.setStorageSync(_store.UserLocationCity, gpsLocation); //定位信息
        resolve(gpsLocation);
      },
      fail: function fail() {
        reject();
      }
    });
  });
}
// 请求高德api获取附近地点
function getAmapPoiList(val) {
  return new Promise(function (resolve, reject) {
    var GDMAP = new _amapWx2.default.AMapWX({ key: _index.MAPKEY });
    GDMAP.getInputtips({
      keywords: val,
      success: function success(data) {
        if (data) resolve(data);else reject();
      },
      fail: function fail() {
        reject();
      }
    });
  });
}

/***/ }),

/***/ "./src/utils/msg/index.ts":
/*!********************************!*\
  !*** ./src/utils/msg/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Msg;
exports.errMsg = errMsg;
exports.warnMsg = warnMsg;
exports.successMsg = successMsg;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Msg(msg) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;

  _taroWeapp2.default.showToast({
    title: msg,
    icon: 'none',
    duration: duration
  });
}
function errMsg() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _taroWeapp2.default.atMessage({
    'message': msg,
    'type': 'error'
  });
}
function warnMsg() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _taroWeapp2.default.atMessage({
    'message': msg,
    'type': 'warning'
  });
}
function successMsg() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _taroWeapp2.default.atMessage({
    'message': msg,
    'type': 'success'
  });
}

/***/ }),

/***/ "./src/utils/request/index.ts":
/*!************************************!*\
  !*** ./src/utils/request/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.doRequestAction = doRequestAction;
exports.getUserSessionKey = getUserSessionKey;
exports.GetUserInfo = GetUserInfo;
exports.getBannerNotice = getBannerNotice;
exports.getAllListItem = getAllListItem;
exports.getRecruitList = getRecruitList;
exports.getResumeList = getResumeList;
exports.getFleamarketList = getFleamarketList;
exports.getWechatNotice = getWechatNotice;
exports.getListFilterData = getListFilterData;
exports.getTabbarMsg = getTabbarMsg;
exports.getIntegralList = getIntegralList;
exports.getPublishRecruitView = getPublishRecruitView;
exports.getAllAreas = getAllAreas;
exports.getHotAreas = getHotAreas;
exports.checkAdcodeValid = checkAdcodeValid;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../api/index */ "./src/utils/api/index.ts");

var api = _interopRequireWildcard(_index);

var _index2 = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

var _index3 = __webpack_require__(/*! ../msg/index */ "./src/utils/msg/index.ts");

var _index4 = _interopRequireDefault(_index3);

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 请求失败提示信息
function requestShowToast(show) {
  if (show) {
    setTimeout(function () {
      (0, _index4.default)('网络错误，请求失败');
    }, 200);
  }
}
// 获取header请求头信息
function getRequestHeaderInfo() {
  var userInfo = _taroWeapp2.default.getStorageSync(_store.UserInfo);
  var requestHeader = userInfo ? {
    'content-type': 'application/x-www-form-urlencoded',
    mid: userInfo.userId,
    token: userInfo.token,
    time: userInfo.tokenTime,
    uuid: userInfo.uuid
  } : {
    'content-type': 'application/x-www-form-urlencoded'
  };
  return requestHeader;
}
// 配置默认请求参数
var defaultRequestData = {
  url: '',
  method: 'GET',
  header: getRequestHeaderInfo(),
  data: {},
  loading: true,
  title: '数据加载中...',
  failToast: true
};
// 全局通用请求方法
function doRequestAction(reqData) {
  var req = _extends({}, defaultRequestData, reqData);
  if (req.loading) {
    _taroWeapp2.default.showLoading({
      title: req.title
    });
  }
  var data = _extends({}, req.data, { wechat_token: _index2.TOKEN });
  var userInfo = _taroWeapp2.default.getStorageSync(_store.UserInfo);
  if (req.method === 'POST' && userInfo) {
    data.userId = userInfo.userId;
    data.token = userInfo.token;
    data.tokenTime = userInfo.tokenTime;
  }
  return new Promise(function (resolve, reject) {
    _taroWeapp2.default.request({
      url: /^http(s?):\/\//.test(req.url) ? req.url : req.url,
      method: req.method,
      header: req.header,
      data: data,
      success: function success(res) {
        //console.log(res)
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          requestShowToast(req.failToast);
          reject(res);
        }
      },
      fail: function fail(e) {
        // todo requestShowToast(req.failToast)
        reject(e);
      },
      complete: function complete() {
        if (req.loading) {
          _taroWeapp2.default.hideLoading();
        }
      }
    });
  });
}
// 用户授权-获取session_key
function getUserSessionKey(code) {
  return doRequestAction({
    url: api.GetUserSessionKey,
    data: {
      code: code
    }
  });
}
// session_key换取userinfo
function GetUserInfo(data) {
  return doRequestAction({
    url: api.GetUserInfo,
    data: data
  });
}
// 获取首页banner以及公告
function getBannerNotice() {
  return doRequestAction({
    url: api.GetBannerNotice,
    loading: false
  });
}
// 获取首页列表数据
function getAllListItem(data) {
  return doRequestAction({
    url: api.GetAllListItem,
    data: data
  });
}
// 获取招工列表
function getRecruitList(data) {
  return doRequestAction({
    url: api.GetRecruitlist,
    data: data
  });
}
// 获取找活列表
function getResumeList(data) {
  return doRequestAction({
    url: api.GetResumelist,
    data: data
  });
}
// 获取二手交易列表
function getFleamarketList(data) {
  return doRequestAction({
    url: api.GetFleamarketlist,
    data: data
  });
}
// 获取微信号以及公告
function getWechatNotice() {
  return doRequestAction({
    url: api.GetWechatNotice,
    method: 'POST',
    loading: false
  });
}
// 获取列表页筛选条件
function getListFilterData() {
  return doRequestAction({
    url: api.GetListFilterData,
    loading: false
  });
}
// tabbar未读消息统计
function getTabbarMsg() {
  return;
}
// 获取积分记录分页数据
function getIntegralList(data) {
  return doRequestAction({
    url: api.GetIntegralList,
    data: data,
    method: 'POST'
  });
}
// 初始化发布招工信息视图
function getPublishRecruitView(data) {
  return doRequestAction({
    url: api.GetPublisRecruitView,
    data: data,
    method: 'POST'
  });
}
// 获取城市数据
function getAllAreas() {
  var loading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  return doRequestAction({
    url: api.GetAllAreas,
    loading: loading
  });
}
// 获取热门城市
function getHotAreas() {}
// 检验adcode是否有效
function checkAdcodeValid(adcode) {}

/***/ }),

/***/ "./src/utils/source/amap-wx.js":
/*!*************************************!*\
  !*** ./src/utils/source/amap-wx.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function AMapWX(a) {
  this.key = a.key, this.requestConfig = { key: a.key, s: "rsx", platform: "WXJS", appname: a.key, sdkversion: "1.2.0", logversion: "2.0" };
}AMapWX.prototype.getWxLocation = function (a, b) {
  wx.getLocation({ type: "gcj02", success: function success(a) {
      var c = a.longitude + "," + a.latitude;wx.setStorage({ key: "userLocation", data: c }), b(c);
    }, fail: function fail(c) {
      wx.getStorage({ key: "userLocation", success: function success(a) {
          a.data && b(a.data);
        } }), a.fail({ errCode: "0", errMsg: c.errMsg || "" });
    } });
}, AMapWX.prototype.getRegeo = function (a) {
  function c(c) {
    var d = b.requestConfig;wx.request({ url: "https://restapi.amap.com/v3/geocode/regeo", data: { key: b.key, location: c, extensions: "all", s: d.s, platform: d.platform, appname: b.key, sdkversion: d.sdkversion, logversion: d.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var d, e, f, g, h, i, j, k, l;b.data.status && "1" == b.data.status ? (d = b.data.regeocode, e = d.addressComponent, f = [], g = "", d && d.roads[0] && d.roads[0].name && (g = d.roads[0].name + "附近"), h = c.split(",")[0], i = c.split(",")[1], d.pois && d.pois[0] && (g = d.pois[0].name + "附近", j = d.pois[0].location, j && (h = parseFloat(j.split(",")[0]), i = parseFloat(j.split(",")[1]))), e.provice && f.push(e.provice), e.city && f.push(e.city), e.district && f.push(e.district), e.streetNumber && e.streetNumber.street && e.streetNumber.number ? (f.push(e.streetNumber.street), f.push(e.streetNumber.number)) : (k = "", d && d.roads[0] && d.roads[0].name && (k = d.roads[0].name), f.push(k)), f = f.join(""), l = [{ iconPath: a.iconPath, width: a.iconWidth, height: a.iconHeight, name: f, desc: g, longitude: h, latitude: i, id: 0, regeocodeData: d }], a.success(l)) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this;a.location ? c(a.location) : b.getWxLocation(a, function (a) {
    c(a);
  });
}, AMapWX.prototype.getWeather = function (a) {
  function d(d) {
    var e = "base";a.type && "forecast" == a.type && (e = "all"), wx.request({ url: "https://restapi.amap.com/v3/weather/weatherInfo", data: { key: b.key, city: d, extensions: e, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        function c(a) {
          var b = { city: { text: "城市", data: a.city }, weather: { text: "天气", data: a.weather }, temperature: { text: "温度", data: a.temperature }, winddirection: { text: "风向", data: a.winddirection + "风" }, windpower: { text: "风力", data: a.windpower + "级" }, humidity: { text: "湿度", data: a.humidity + "%" } };return b;
        }var d, e;b.data.status && "1" == b.data.status ? b.data.lives ? (d = b.data.lives, d && d.length > 0 && (d = d[0], e = c(d), e["liveData"] = d, a.success(e))) : b.data.forecasts && b.data.forecasts[0] && a.success({ forecast: b.data.forecasts[0] }) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }function e(e) {
    wx.request({ url: "https://restapi.amap.com/v3/geocode/regeo", data: { key: b.key, location: e, extensions: "all", s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion }, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var c, e;b.data.status && "1" == b.data.status ? (e = b.data.regeocode, e.addressComponent ? c = e.addressComponent.adcode : e.aois && e.aois.length > 0 && (c = e.aois[0].adcode), d(c)) : a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this,
      c = b.requestConfig;a.city ? d(a.city) : b.getWxLocation(a, function (a) {
    e(a);
  });
}, AMapWX.prototype.getPoiAround = function (a) {
  function d(d) {
    var e = { key: b.key, location: d, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.querytypes && (e["types"] = a.querytypes), a.querykeywords && (e["keywords"] = a.querykeywords), wx.request({ url: "https://restapi.amap.com/v3/place/around", data: e, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
        var c, d, e, f;if (b.data.status && "1" == b.data.status) {
          if (b = b.data, b && b.pois) {
            for (c = [], d = 0; d < b.pois.length; d++) {
              e = 0 == d ? a.iconPathSelected : a.iconPath, c.push({ latitude: parseFloat(b.pois[d].location.split(",")[1]), longitude: parseFloat(b.pois[d].location.split(",")[0]), iconPath: e, width: 22, height: 32, id: d, name: b.pois[d].name, address: b.pois[d].address });
            }f = { markers: c, poisData: b.pois }, a.success(f);
          }
        } else a.fail({ errCode: b.data.infocode, errMsg: b.data.info });
      }, fail: function fail(b) {
        a.fail({ errCode: "0", errMsg: b.errMsg || "" });
      } });
  }var b = this,
      c = b.requestConfig;a.location ? d(a.location) : b.getWxLocation(a, function (a) {
    d(a);
  });
}, AMapWX.prototype.getStaticmap = function (a) {
  function f(b) {
    c.push("location=" + b), a.zoom && c.push("zoom=" + a.zoom), a.size && c.push("size=" + a.size), a.scale && c.push("scale=" + a.scale), a.markers && c.push("markers=" + a.markers), a.labels && c.push("labels=" + a.labels), a.paths && c.push("paths=" + a.paths), a.traffic && c.push("traffic=" + a.traffic);var e = d + c.join("&");a.success({ url: e });
  }var e,
      b = this,
      c = [],
      d = "https://restapi.amap.com/v3/staticmap?";c.push("key=" + b.key), e = b.requestConfig, c.push("s=" + e.s), c.push("platform=" + e.platform), c.push("appname=" + e.appname), c.push("sdkversion=" + e.sdkversion), c.push("logversion=" + e.logversion), a.location ? f(a.location) : b.getWxLocation(a, function (a) {
    f(a);
  });
}, AMapWX.prototype.getInputtips = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.location && (d["location"] = a.location), a.keywords && (d["keywords"] = a.keywords), a.type && (d["type"] = a.type), a.city && (d["city"] = a.city), a.citylimit && (d["citylimit"] = a.citylimit), wx.request({ url: "https://restapi.amap.com/v3/assistant/inputtips", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.tips && a.success({ tips: b.data.tips });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getDrivingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.waypoints && (d["waypoints"] = a.waypoints), a.avoidpolygons && (d["avoidpolygons"] = a.avoidpolygons), a.avoidroad && (d["avoidroad"] = a.avoidroad), wx.request({ url: "https://restapi.amap.com/v3/direction/driving", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.route && a.success({ paths: b.data.route.paths, taxi_cost: b.data.route.taxi_cost || "" });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getWalkingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({ url: "https://restapi.amap.com/v3/direction/walking", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.route && a.success({ paths: b.data.route.paths });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getTransitRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), a.strategy && (d["strategy"] = a.strategy), a.city && (d["city"] = a.city), a.cityd && (d["cityd"] = a.cityd), wx.request({ url: "https://restapi.amap.com/v3/direction/transit/integrated", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      if (b && b.data && b.data.route) {
        var c = b.data.route;a.success({ distance: c.distance || "", taxi_cost: c.taxi_cost || "", transits: c.transits });
      }
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, AMapWX.prototype.getRidingRoute = function (a) {
  var b = this,
      c = b.requestConfig,
      d = { key: b.key, s: c.s, platform: c.platform, appname: b.key, sdkversion: c.sdkversion, logversion: c.logversion };a.origin && (d["origin"] = a.origin), a.destination && (d["destination"] = a.destination), wx.request({ url: "https://restapi.amap.com/v4/direction/bicycling", data: d, method: "GET", header: { "content-type": "application/json" }, success: function success(b) {
      b && b.data && b.data.data && a.success({ paths: b.data.data.paths });
    }, fail: function fail(b) {
      a.fail({ errCode: "0", errMsg: b.errMsg || "" });
    } });
}, module.exports.AMapWX = AMapWX;

/***/ }),

/***/ "./src/utils/upload/index.tsx":
/*!************************************!*\
  !*** ./src/utils/upload/index.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UploadImgAction;
exports.CameraAndAlbum = CameraAndAlbum;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _store = __webpack_require__(/*! ../../config/store */ "./src/config/store.ts");

var _index = __webpack_require__(/*! ../../config/index */ "./src/config/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function UploadImgAction() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.UPLOADIMGURL;

  return new Promise(function (resolve) {
    _taroWeapp2.default.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function success(res) {
        AppUploadImg(resolve, res, url);
      }
    });
  });
}
function CameraAndAlbum() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index.UPLOADIMGURL;

  return new Promise(function (resolve) {
    _taroWeapp2.default.showActionSheet({
      itemList: ['拍照', '从相册中选择']
    }).then(function (res) {
      var index = res.tapIndex;
      _taroWeapp2.default.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: index === 0 ? ['camera'] : ['album'],
        success: function success(res) {
          AppUploadImg(resolve, res, url);
        }
      });
    });
  });
}
function AppUploadImg(resolve, res) {
  var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _index.UPLOADIMGURL;

  var userInfo = _taroWeapp2.default.getStorageSync(_store.UserInfo);
  _taroWeapp2.default.showLoading({ title: '图片上传中' });
  _taroWeapp2.default.uploadFile({
    url: url,
    filePath: res.tempFilePaths[0],
    header: {
      userid: userInfo ? userInfo.userId : ''
    },
    name: 'file',
    success: function success(response) {
      var mydata = JSON.parse(response.data);
      // let resData = { local: response, remote: mydata}
      _taroWeapp2.default.showToast({
        title: mydata.errmsg,
        icon: "none",
        duration: 2000
      });
      if (mydata.errcode == "ok") {
        resolve(mydata);
      }
    },

    fail: function fail() {
      _taroWeapp2.default.showToast({
        title: "网络错误，上传失败！",
        icon: "none",
        duration: 2000
      });
    },
    complete: function complete() {
      _taroWeapp2.default.hideLoading();
    }
  });
}

/***/ })

}]);