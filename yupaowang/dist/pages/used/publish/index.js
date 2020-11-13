<<<<<<< HEAD
(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/used/publish/index"],{

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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

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

  var _useState = (0, _taroTt.useState)({
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


  var _useState3 = (0, _taroTt.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      initModel = _useState4[0],
      setInitModel = _useState4[1];
  // 父级索引


  var _useState5 = (0, _taroTt.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      parentCurrent = _useState6[0],
      setParentCurrent = _useState6[1];
  // 子级索引


  var _useState7 = (0, _taroTt.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      childCurrent = _useState8[0],
      setChildCurrent = _useState8[1];
  // 目的名字


  var _useState9 = (0, _taroTt.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      classifyName = _useState10[0],
      setClassiryName = _useState10[1];
  // 城市名字


  var _useState11 = (0, _taroTt.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      cityName = _useState12[0],
      setCityName = _useState12[1];
  // picker 省份索引


  var _useState13 = (0, _taroTt.useState)(0),
      _useState14 = _slicedToArray(_useState13, 2),
      pIndex = _useState14[0],
      setPIndex = _useState14[1];
  // picker 省份数据


  var _useState15 = (0, _taroTt.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      areaProvince = _useState16[0],
      setAreaProvince = _useState16[1];
  // picker 市级索引


  var _useState17 = (0, _taroTt.useState)(0),
      _useState18 = _slicedToArray(_useState17, 2),
      cIndex = _useState18[0],
      setCIndex = _useState18[1];
  // picker 市级索引


  var _useState19 = (0, _taroTt.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      areaCity = _useState20[0],
      setAreaCity = _useState20[1];
  // 加载初始化数据


  (0, _taroTt.useEffect)(function () {
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
            _taroTt2.default.navigateBack();
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

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

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

    _this.$usedState = ["initModel", "loopArray50", "loopArray51", "$compid__45", "$compid__46", "parentCurrent", "model", "classifyName", "areaProvince", "areaCity", "pIndex", "cIndex", "cityName", "userTel", "text"];
    _this.anonymousFunc1Map = {};
    _this.anonymousFunc2Map = {};
    _this.customComponents = ["Auth", "AtDrawer", "WordsTotal"];
    return _this;
  }

  _createClass(UsedPublish, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(UsedPublish.prototype.__proto__ || Object.getPrototypeOf(UsedPublish.prototype), '_constructor', this).call(this, props);
      this.$$refs = new _taroTt2.default.RefsArray();
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

      var _genCompid = (0, _taroTt.genCompid)(__prefix + "$compid__45"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__45 = _genCompid2[0],
          $compid__45 = _genCompid2[1];

      var _genCompid3 = (0, _taroTt.genCompid)(__prefix + "$compid__46"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__46 = _genCompid4[0],
          $compid__46 = _genCompid4[1];

      var router = (0, _taroTt.useRouter)();
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

      var _useState = (0, _taroTt.useState)(false),
          _useState2 = _slicedToArray(_useState, 2),
          showDrawer = _useState2[0],
          setShowDrawer = _useState2[1];
      // 使用自定义验证码hook


      var _useCode = (0, _index2.default)(),
          text = _useCode.text,
          userGetCode = _useCode.userGetCode;
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
      var loopArray50 = initModel ? initModel.classifyTree.map(function (item, index) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var $loopState__temp2 = initModel ? (0, _classnames2.default)({
          'drawer-list-item overwords': true,
          'drawer-list-item-active': index === parentCurrent
        }) : null;
        var _$indexKey = "fdzzz" + index;
        _this2.anonymousFunc1Map[_$indexKey] = function () {
          return useClickClassifyParentId(index);
        };
        return {
          $loopState__temp2: $loopState__temp2,
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      }) : [];
      var loopArray51 = initModel ? initModel.classifyTree[parentCurrent].attributes.map(function (item, k) {
        item = {
          $original: (0, _taroTt.internal_get_original)(item)
        };
        var $loopState__temp4 = initModel ? (0, _classnames2.default)({
          'drawer-list-item overwords': true,
          'drawer-list-item-active': k == childCurrent && item.$original.id == model.attribute_id
        }) : null;
        var _$indexKey2 = "fezzz" + k;
        _this2.anonymousFunc2Map[_$indexKey2] = function () {
          return useClickClassifyChildId(k);
        };
        return {
          $loopState__temp4: $loopState__temp4,
          _$indexKey2: _$indexKey2,
          $original: item.$original
        };
      }) : [];
      _taroTt.propsManager.set({
        "show": showDrawer,
        "onClose": this.anonymousFunc0
      }, $compid__45, $prevCompid__45);
      _taroTt.propsManager.set({
        "num": 0
      }, $compid__46, $prevCompid__46);
      Object.assign(this.__state, {
        initModel: initModel,
        loopArray50: loopArray50,
        loopArray51: loopArray51,
        $compid__45: $compid__45,
        $compid__46: $compid__46,
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
}(_taroTt2.default.Component);

UsedPublish.$$events = ["anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7", "anonymousFunc8", "anonymousFunc9", "anonymousFunc10", "anonymousFunc11", "anonymousFunc12"];
UsedPublish.$$componentPath = "pages/used/publish/index";
exports.default = UsedPublish;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(UsedPublish, true));

/***/ })

},[["./src/pages/used/publish/index.tsx","runtime","vendors"]]]);
=======
(tt.webpackJsonp=tt.webpackJsonp||[]).push([[87],{"115":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var V=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e};function defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=t(0),o=_interopRequireDefault(L),G=_interopRequireDefault(t(116)),H=_interopRequireDefault(t(5)),W=_interopRequireDefault(t(12));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t(117);var i=(function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(UsedPublish,o.default.Component),r(UsedPublish,[{"key":"_constructor","value":function _constructor(e){(function get(e,n,t){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,n,t)}if("value"in r)return r.value;var i=r.get;return void 0!==i?i.call(t):void 0})(UsedPublish.prototype.__proto__||Object.getPrototypeOf(UsedPublish.prototype),"_constructor",this).call(this,e),this.$$refs=new o.default.RefsArray}},{"key":"_createData","value":function _createData(e,n,t){var o=this;function Qa(e,n){var t=JSON.parse(JSON.stringify(h));t[n]=e.detail.value,_(t)}function Ta(e){q(e)}this.__state=e||this.state||{},this.__props=n||this.props||{};var r=this.$prefix,i=(0,L.genCompid)(r+"$compid__45"),a=K(i,2),u=a[0],s=a[1],c=(0,L.genCompid)(r+"$compid__46"),l=K(c,2),d=l[0],f=l[1],y=(0,L.useRouter)().params.id,m=void 0===y?"":y,p=(0,G.default)(m),h=p.model,_=p.setModel,v=p.initModel,b=p.parentCurrent,g=p.setParentCurrent,F=p.childCurrent,C=p.setChildCurrent,P=p.classifyName,T=p.setClassiryName,w=p.cityName,k=p.setCityName,M=p.setCIndex,x=p.setPIndex,I=p.areaProvince,O=p.areaCity,S=p.cIndex,A=p.pIndex,$=p.thisCurrentAreaCity,j=p.userTel,N=p.vaildPublishModelInfo,D=(0,L.useState)(!1),R=K(D,2),U=R[0],q=R[1],E=(0,W.default)(),z=E.text,J=E.userGetCode;this.anonymousFunc0=function(){return Ta(!1)},this.anonymousFunc3=function(e){return Qa(e,"title")},this.anonymousFunc4=function(){return Ta(!0)},this.anonymousFunc5=function(e){return function onPickerChange(e){if(v){var n=e.detail.value[0],t=e.detail.value[1];k(v.areaTree[n].name+"-"+v.areaTree[n].children[t].name),_(V({},h,{"province_id":v.areaTree[n].id,"city_id":v.areaTree[n].children[t].id}))}}(e)},this.anonymousFunc6=function(e){return function onColumnChange(e){var n=e.detail.column,t=e.detail.value;0===n?(x(t),$(t)):M(t)}(e)},this.anonymousFunc7=function(e){return Qa(e,"user_name")},this.anonymousFunc8=function(e){return Qa(e,"user_mobile")},this.anonymousFunc9=function(e){return Qa(e,"code")},this.anonymousFunc10=function(){return J(h.user_mobile)},this.anonymousFunc11=function(e){return Qa(e,"detail")},this.anonymousFunc12=function(){return N()};var Q=v?v.classifyTree.map(function(e,n){e={"$original":(0,L.internal_get_original)(e)};var t=v?(0,H.default)({"drawer-list-item overwords":!0,"drawer-list-item-active":n===b}):null,r="fdzzz"+n;return o.anonymousFunc1Map[r]=function(){return function useClickClassifyParentId(e){g(e)}(n)},{"$loopState__temp2":t,"_$indexKey":r,"$original":e.$original}}):[],B=v?v.classifyTree[b].attributes.map(function(e,n){e={"$original":(0,L.internal_get_original)(e)};var t=v?(0,H.default)({"drawer-list-item overwords":!0,"drawer-list-item-active":n==F&&e.$original.id==h.attribute_id}):null,r="fezzz"+n;return o.anonymousFunc2Map[r]=function(){return function useClickClassifyChildId(e){if(C(e),v){var n=v.classifyTree[b].name+"-"+v.classifyTree[b].attributes[e].name;T(n),q(!1),_(V({},h,{"attribute_id":v.classifyTree[b].attributes[e].id,"category_id":v.classifyTree[b].id}))}}(n)},{"$loopState__temp4":t,"_$indexKey2":r,"$original":e.$original}}):[];return L.propsManager.set({"show":U,"onClose":this.anonymousFunc0},s,u),L.propsManager.set({"num":0},f,d),Object.assign(this.__state,{"initModel":v,"loopArray50":Q,"loopArray51":B,"$compid__45":s,"$compid__46":f,"parentCurrent":b,"model":h,"classifyName":P,"areaProvince":I,"areaCity":O,"pIndex":A,"cIndex":S,"cityName":w,"userTel":j,"text":z}),this.__state}},{"key":"anonymousFunc0","value":function anonymousFunc0(){}},{"key":"anonymousFunc1","value":function anonymousFunc1(e){for(var n,t=arguments.length,r=Array(1<t?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return this.anonymousFunc1Map[e]&&(n=this.anonymousFunc1Map)[e].apply(n,r)}},{"key":"anonymousFunc2","value":function anonymousFunc2(e){for(var n,t=arguments.length,r=Array(1<t?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return this.anonymousFunc2Map[e]&&(n=this.anonymousFunc2Map)[e].apply(n,r)}},{"key":"anonymousFunc3","value":function anonymousFunc3(){}},{"key":"anonymousFunc4","value":function anonymousFunc4(){}},{"key":"anonymousFunc5","value":function anonymousFunc5(){}},{"key":"anonymousFunc6","value":function anonymousFunc6(){}},{"key":"anonymousFunc7","value":function anonymousFunc7(){}},{"key":"anonymousFunc8","value":function anonymousFunc8(){}},{"key":"anonymousFunc9","value":function anonymousFunc9(){}},{"key":"anonymousFunc10","value":function anonymousFunc10(){}},{"key":"anonymousFunc11","value":function anonymousFunc11(){}},{"key":"anonymousFunc12","value":function anonymousFunc12(){}}]),UsedPublish);function UsedPublish(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,UsedPublish);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(UsedPublish.__proto__||Object.getPrototypeOf(UsedPublish)).apply(this,arguments));return e.config={"navigationBarTitleText":"发布二手交易"},e.$usedState=["initModel","loopArray50","loopArray51","$compid__45","$compid__46","parentCurrent","model","classifyName","areaProvince","areaCity","pIndex","cIndex","cityName","userTel","text"],e.anonymousFunc1Map={},e.anonymousFunc2Map={},e.customComponents=["Auth","AtDrawer","WordsTotal"],e}i.$$events=["anonymousFunc1","anonymousFunc2","anonymousFunc3","anonymousFunc4","anonymousFunc5","anonymousFunc6","anonymousFunc7","anonymousFunc8","anonymousFunc9","anonymousFunc10","anonymousFunc11","anonymousFunc12"],i.$$componentPath="pages/used/publish/index",i.config={"navigationBarTitleText":"发布二手交易"},n.default=i,Page(t(0).default.createComponent(i,!0))},"116":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var V=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},K=function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function sliceIterator(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")};n.default=function useUsedInfo(e){var n={"type":"fleamarket","infoId":e},t=(0,L.useState)({"type":"fleamarket","infoId":e,"user_mobile":"","title":"","user_name":"","detail":"","code":"","province_id":"","city_id":"","category_id":"","attribute_id":""}),r=K(t,2),o=r[0],i=r[1],a=(0,L.useState)(),u=K(a,2),s=u[0],c=u[1],l=(0,L.useState)(0),d=K(l,2),f=d[0],y=d[1],m=(0,L.useState)(0),p=K(m,2),h=p[0],_=p[1],v=(0,L.useState)(""),b=K(v,2),g=b[0],F=b[1],C=(0,L.useState)(""),P=K(C,2),T=P[0],w=P[1],k=(0,L.useState)(0),M=K(k,2),x=M[0],I=M[1],O=(0,L.useState)([]),S=K(O,2),A=S[0],$=S[1],j=(0,L.useState)(0),N=K(j,2),D=N[0],R=N[1],U=(0,L.useState)([]),q=K(U,2),E=q[0],z=q[1];(0,L.useEffect)(function(){(0,H.getUsedInfoModel)(n).then(function(e){"ok"==e.errcode?(ne=e.areaTree,c(e),J(e),Q(e)):"to_auth"==e.errcode?G.default.showModal({"title":"温馨提示","content":e.errmsg,"cancelText":"取消","confirmText":"去实名","success":function success(e){e.cancel?G.default.navigateBack():e.confirm&&G.default.navigateTo({"url":Z.REALNAMEPATH})}}):"auth_checking"==e.errcode?(0,W.ShowActionModal)({"msg":e.errmsg,"success":function success(){return G.default.navigateBack()}}):(0,W.ShowActionModal)({"msg":e.errmsg,"success":function success(){G.default.navigateBack()}})})},[]);var J=function initPublishModelInfo(e){var n=V({},o,{"title":e.model.title||"","attribute_id":e.model.attribute_id||"","category_id":e.model.category_id||"","detail":e.model.detail||"","user_mobile":e.model.user_mobile||"","user_name":e.model.user_name||"","province_id":e.model.province_id||"","city_id":e.model.city_id||""});if(te=n.user_mobile,0===e.model.is_check&&(re=JSON.stringify(n)),i(n),w(e.show_address),n.category_id){var t=e.classifyTree.findIndex(function(e){return e.id==n.category_id}),r=e.classifyTree[t].attributes.findIndex(function(e){return e.id==n.attribute_id});F(e.classifyTree[t].name+"-"+e.classifyTree[t].attributes[r].name),_(r),y(t)}},Q=function initAreaPicker(e){var n=(0,Y.objDeepCopy)(e.areaTree),a=e.model.province_id||"",u=e.model.city_id||"",s=0,c=[];n.map(function(e,n){a==e.id&&(I(n),s=n);var t=e.has_children;if(c.push({"id":e.id,"has_children":t,"name":e.name}),t)for(var r=e.children,o=r.length,i=0;i<o;i++)if(u==r[i].id){R(i);break}}),$(c),B(s)},B=function thisCurrentAreaCity(e){if(ne){var n=(0,Y.objDeepCopy)(ne[e]),t=n.has_children;z(t?n.children:[{"id":n.id,"pid":n.pid,"name":n.name}])}};return{"model":o,"setModel":i,"initModel":s,"parentCurrent":f,"setParentCurrent":y,"childCurrent":h,"setChildCurrent":_,"classifyName":g,"setClassiryName":F,"cityName":T,"setCityName":w,"setCIndex":R,"cIndex":D,"setAreaCity":z,"areaCity":E,"setPIndex":I,"setAreaProvince":$,"areaProvince":A,"pIndex":x,"thisCurrentAreaCity":B,"userTel":te,"vaildPublishModelInfo":function vaildPublishModelInfo(){if(!(0,ee.isVaildVal)(o.title,3,30))return(0,X.default)("请输入3-30字的标题"),!1;if(!o.category_id||!o.attribute_id)return(0,X.default)("请选择交易目的"),!1;if(!o.province_id||!o.city_id)return(0,X.default)("请选择您的地区"),!1;if(!o.user_name)return(0,X.default)("请输入您的姓名"),!1;if(!(0,ee.isPhone)(o.user_mobile))return(0,X.default)("请输入正确的联系电话"),!1;if(o.user_mobile!==te&&!o.code)return(0,X.default)("请输入验证码"),!1;if(!(0,ee.isVaildVal)(o.detail,15,500))return(0,X.default)("请正确输入5-500字的交易详情"),!1;if(s&&0==s.model.is_check&&JSON.stringify(o)==re)return(0,W.ShowActionModal)({"title":"审核失败","msg":"请修改该信息后再进行提交"}),!1;(0,H.publishUsedInfo)(o).then(function(e){(0,W.ShowActionModal)({"msg":e.errmsg,"success":function success(){"ok"==e.errcode&&G.default.reLaunch({"url":"/pages/published/used/index"})}})}).catch(function(){(0,W.ShowActionModal)({"msg":"网络错误，发布失败"})})}}};var L=t(0),G=_interopRequireDefault(L),H=t(2),W=t(4),X=_interopRequireDefault(W),Y=t(7),Z=t(1),ee=t(8);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var ne=!1,te="",re=""},"117":function(e,n,t){}},[[115,0,1]]]);
>>>>>>> 0e5be846c916f829861e9a8cfd5d82206f24c32e
