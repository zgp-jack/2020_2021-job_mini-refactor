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

var _index5 = __webpack_require__(/*! ../../utils/v/index */ "./src/utils/v/index.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 保存area地区数据
var areaTree = false;
var userTel = '';
var modelStr = '';
function useUsedInfo(id) {
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
  // 加载初始化数据


  (0, _taroSwan.useEffect)(function () {
    (0, _index.getUsedInfoModel)(data).then(function (data) {
      if (data.errcode == 'ok') {
        areaTree = data.areaTree;
        setInitModel(data);
        initPublishModelInfo(data);
        initAreaPicker(data);
      } else {
        (0, _index2.ShowActionModal)({
          msg: data.errmsg,
          success: function success() {
            _taroSwan2.default.navigateBack();
          }
        });
      }
    });
  }, []);
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
    if (!(0, _index5.isVaildVal)(model.title, 3, 30)) {
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
    if (!(0, _index5.isPhone)(model.user_mobile)) {
      (0, _index3.default)('请输入正确的联系电话');
      return false;
    }
    if (model.user_mobile !== userTel) {
      if (!model.code) {
        (0, _index3.default)('请输入验证码');
        return false;
      }
    }
    if (!(0, _index5.isVaildVal)(model.detail, 15, 500)) {
      (0, _index3.default)('请正确输入5-500字的交易详情');
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
            //Taro.reLaunch
          }
        }
      });
    }).catch(function () {
      (0, _index2.ShowActionModal)("\u7F51\u7EDC\u9519\u8BEF\uFF0C\u53D1\u5E03\u5931\u8D25");
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
    vaildPublishModelInfo: vaildPublishModelInfo
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

__webpack_require__(/*! ../../recruit/publish/index.scss */ "./src/pages/recruit/publish/index.scss");

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

    _this.$usedState = ["initModel", "loopArray28", "loopArray29", "$compid__28", "$compid__29", "parentCurrent", "model", "classifyName", "areaProvince", "areaCity", "pIndex", "cIndex", "cityName", "userTel", "text"];
    _this.anonymousFunc1Map = {};
    _this.anonymousFunc2Map = {};
    _this.customComponents = ["AtDrawer", "WordsTotal"];
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

      var _genCompid = (0, _taroSwan.genCompid)(__prefix + "$compid__28"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__28 = _genCompid2[0],
          $compid__28 = _genCompid2[1];

      var _genCompid3 = (0, _taroSwan.genCompid)(__prefix + "$compid__29"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__29 = _genCompid4[0],
          $compid__29 = _genCompid4[1];

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
          vaildPublishModelInfo = _useUsedInfo.vaildPublishModelInfo;

      var _useState = (0, _taroSwan.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          showDrawer = _useState2[0],
          setShowDrawer = _useState2[1];
      // 使用自定义验证码hook


      var _userCode = (0, _index2.default)(),
          text = _userCode.text,
          userGetCode = _userCode.userGetCode;
      // 用户填写信息


      var userEnterFrom = function userEnterFrom(e, key) {
        var reModel = JSON.parse(JSON.stringify(model));
        reModel[key] = e.detail.value;
        setModel(reModel);
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
      var loopArray28 = initModel ? initModel.classifyTree.map(function (item, index) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp2 = initModel ? (0, _classnames2.default)({
          'drawer-list-item overwords': true,
          'drawer-list-item-active': index === parentCurrent
        }) : null;
        var _$indexKey = "cizzz" + index;
        _this2.anonymousFunc1Map[_$indexKey] = function () {
          return useClickClassifyParentId(index);
        };
        return {
          loopState__temp2: loopState__temp2,
          _$indexKey: _$indexKey,
          privateOriginal: item.privateOriginal
        };
      }) : [];
      var loopArray29 = initModel ? initModel.classifyTree[parentCurrent].attributes.map(function (item, k) {
        item = {
          privateOriginal: (0, _taroSwan.internal_get_original)(item)
        };
        var loopState__temp4 = initModel ? (0, _classnames2.default)({
          'drawer-list-item overwords': true,
          'drawer-list-item-active': k == childCurrent && item.privateOriginal.id == model.attribute_id
        }) : null;
        var _$indexKey2 = "cjzzz" + k;
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
      }, $compid__28, $prevCompid__28);
      _taroSwan.propsManager.set({
        "num": 0
      }, $compid__29, $prevCompid__29);
      Object.assign(this.__state, {
        initModel: initModel,
        loopArray28: loopArray28,
        loopArray29: loopArray29,
        $compid__28: $compid__28,
        $compid__29: $compid__29,
        parentCurrent: parentCurrent,
        model: model,
        classifyName: classifyName,
        areaProvince: areaProvince,
        areaCity: areaCity,
        pIndex: pIndex,
        cIndex: cIndex,
        cityName: cityName,
        userTel: userTel,
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
exports.default = UsedPublish;

Page(__webpack_require__(/*! @tarojs/taro-swan */ "./node_modules/@tarojs/taro-swan/index.js").default.createComponent(UsedPublish, true));

/***/ })

},[["./src/pages/used/publish/index.tsx","runtime","vendors"]]]);