(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/resume/personInfo/index"],{

/***/ "./src/pages/resume/personInfo/index.scss":
/*!************************************************!*\
  !*** ./src/pages/resume/personInfo/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/resume/personInfo/index.tsx":
/*!***********************************************!*\
  !*** ./src/pages/resume/personInfo/index.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroTt = __webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js");

var _taroTt2 = _interopRequireDefault(_taroTt);

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _area2 = _interopRequireDefault(_area);

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _index = __webpack_require__(/*! ../../../utils/msg/index */ "./src/utils/msg/index.ts");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ../../../utils/subscribeToNews/index */ "./src/utils/subscribeToNews/index.ts");

var _index4 = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

__webpack_require__(/*! ./index.scss */ "./src/pages/resume/personInfo/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PersonInfo = function (_Taro$Component) {
  _inherits(PersonInfo, _Taro$Component);

  function PersonInfo() {
    _classCallCheck(this, PersonInfo);

    var _this = _possibleConstructorReturn(this, (PersonInfo.__proto__ || Object.getPrototypeOf(PersonInfo)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '人员信息'
    };

    _this.$usedState = ["loopArray102", "formData", "multiIndex", "multiArray", "proficiencyIndex", "proficiency", "userIndex", "personnel", "ranks", "label"];
    _this.anonymousFunc6Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(PersonInfo, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(PersonInfo.prototype.__proto__ || Object.getPrototypeOf(PersonInfo.prototype), '_constructor', this).call(this, props);
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
      var router = (0, _taroTt.useRouter)();
      // 判断是新增还是编辑
      var type = router.params.type;
      // 获取存入的公用内容

      var useSelectorItem = (0, _redux.useSelector)(function (state) {
        return state;
      });
      // const userInfo:any=[];

      var _useState = (0, _taroTt.useState)({
        age: '',
        proficiency: '',
        personnel: '',
        address: '',
        type: '1'
      }),
          _useState2 = _slicedToArray(_useState, 2),
          formData = _useState2[0],
          setFormData = _useState2[1];
      // 家乡


      var _useState3 = (0, _taroTt.useState)([0, 0]),
          _useState4 = _slicedToArray(_useState3, 2),
          multiIndex = _useState4[0],
          setMultiIndex = _useState4[1];

      var _useState5 = (0, _taroTt.useState)([]),
          _useState6 = _slicedToArray(_useState5, 2),
          allprovinces = _useState6[0],
          setAllprovinces = _useState6[1];
      // const [multiIndexvalue, seMultiIndexvalue] = useState<string>('请选择所在地区')


      var _useState7 = (0, _taroTt.useState)(''),
          _useState8 = _slicedToArray(_useState7, 2),
          allpro = _useState8[0],
          setAllpro = _useState8[1];

      var _useState9 = (0, _taroTt.useState)([]),
          _useState10 = _slicedToArray(_useState9, 2),
          multiArrayone = _useState10[0],
          setMultiArrayone = _useState10[1];

      var _useState11 = (0, _taroTt.useState)([]),
          _useState12 = _slicedToArray(_useState11, 2),
          multiArray = _useState12[0],
          setMultiArray = _useState12[1];

      var _useState13 = (0, _taroTt.useState)(0),
          _useState14 = _slicedToArray(_useState13, 2),
          edit = _useState14[0],
          setEdit = _useState14[1];
      // 熟练度


      var _useState15 = (0, _taroTt.useState)([]),
          _useState16 = _slicedToArray(_useState15, 2),
          proficiency = _useState16[0],
          setProficiency = _useState16[1];
      // 人员构成


      var _useState17 = (0, _taroTt.useState)([]),
          _useState18 = _slicedToArray(_useState17, 2),
          personnel = _useState18[0],
          setPersonnel = _useState18[1];
      // 标签


      var _useState19 = (0, _taroTt.useState)([]),
          _useState20 = _slicedToArray(_useState19, 2),
          label = _useState20[0],
          setLabel = _useState20[1];

      var _useState21 = (0, _taroTt.useState)([]),
          _useState22 = _slicedToArray(_useState21, 2),
          tag = _useState22[0],
          setTag = _useState22[1];

      var _useState23 = (0, _taroTt.useState)(false),
          _useState24 = _slicedToArray(_useState23, 2),
          ranks = _useState24[0],
          setRanks = _useState24[1];
      //熟练度位置


      var _useState25 = (0, _taroTt.useState)(0),
          _useState26 = _slicedToArray(_useState25, 2),
          proficiencyIndex = _useState26[0],
          setProficiencyIndex = _useState26[1];
      // 人员构成位置


      var _useState27 = (0, _taroTt.useState)(0),
          _useState28 = _slicedToArray(_useState27, 2),
          userIndex = _useState28[0],
          setUserIndex = _useState28[1];

      (0, _taroTt.useEffect)(function () {
        var AllItem = JSON.parse(JSON.stringify(useSelectorItem.Personnel));
        if (AllItem) {
          console.log(AllItem);
          var proficiencyList = AllItem.prof_degree && AllItem.prof_degree.map(function (v) {
            return v.name;
          });
          setProficiency(proficiencyList);
          var _personnel = AllItem.type && AllItem.type.map(function (v) {
            return v.name;
          });
          setPersonnel(_personnel);
          var labelList = AllItem.label && AllItem.label.map(function (v) {
            v.click = false;
            return v;
          });
          setLabel(labelList);
        }
        var data = [];
        var lastData = [];
        var allChildren = [];
        var provice = [];
        var city = [];
        var lastCity = [];
        // ☝第一次点开数据
        for (var i = 0; i < _area2.default.length; i++) {
          if (_area2.default[i].pid !== '0') {
            provice.push(_area2.default[i]);
            data.push(_area2.default[i].name);
            var allList = [];
            if (_area2.default[i].children.length) {
              city.push(_area2.default[i].children);
              for (var j = 0; j < _area2.default[i].children.length; j++) {
                if (_area2.default[i].children[j].pid !== '1') {
                  allList.push(_area2.default[i].children[j].name);
                }
              }
            } else {
              city.push([_area2.default[i]]);
              allList.push(_area2.default[i].name);
            }
            allChildren.push(allList);
          }
          lastData = [_area2.default[1].name];
        }
        for (var _i = 0; _i < provice.length; _i++) {
          if (provice[_i].children) {
            for (var _j = 0; _j < provice[_i].children.length; _j++) {
              if (provice[_i].children[_j].pid === '1') {
                provice[_i].children.splice(provice[_i].children[_j], 1);
              }
            }
          }
        }
        setAllprovinces(provice);
        // 所有的省，市
        setMultiArrayone([data, allChildren]);
        if (edit === 0) {
          // 省和第一个市
          setMultiArray([data, lastData]);
        }
        //内容回填
        if (type) {
          var allItem = JSON.parse(JSON.stringify(useSelectorItem));
          if (allItem.Myresume) {
            var tagList = allItem.Personnel.label.map(function (v) {
              allItem.Myresume.info.tags.map(function (val) {
                if (v.id === val.id) {
                  v.click = true;
                }
                return val;
              });
              return v;
            });
            setLabel(tagList);
            setTag(allItem.Myresume.info.tags);
            if (allItem.Myresume.info.type !== '1') {
              setRanks(true);
            }
            setFormData({
              age: allItem.Myresume.introduces.experience,
              proficiency: allItem.Myresume.introduces.prof_degree_str,
              personnel: allItem.Myresume.introduces.type_str,
              address: allItem.Myresume.introduces.hometown,
              type: allItem.Myresume.introduces.number_people
            });
            var userArr = allItem.Myresume.introduces.hometown_id && allItem.Myresume.introduces.hometown_id.split(",");
            var one = 0;
            var two = 0;
            // 第一项
            for (var _i2 = 0; _i2 < _area2.default.length; _i2++) {
              if (userArr[0] == _area2.default[_i2].id) {
                // 因为有全国要减1
                one = _i2 - 1;
              }
            }
            // 第二项
            for (var _i3 = 0; _i3 < _area2.default.length; _i3++) {
              for (var _j2 = 0; _j2 < _area2.default[_i3].children.length; _j2++) {
                if (userArr[1] == _area2.default[_i3].children[_j2].id) {
                  lastCity = _area2.default[_i3].children.map(function (v) {
                    return v.name;
                  });
                  two = _j2;
                }
              }
            }
            // 每次选择选择地址都要重新刷新一次，修改的时候刷新了一次就不再刷新，不然会一直覆盖设置的值
            console.log(allItem.Myresume.introduces.prof_degree, 'allItem.Myresume.introduces.prof_degree');
            console.log(allItem.Myresume, 'allItem.Myresume');
            if (edit < 1) {
              setMultiIndex([one, two]);
              setAllpro(allItem.Myresume.introduces.hometown_id.split(","));
              if (allItem.Myresume.introduces.prof_degree > 0) {
                setProficiencyIndex(parseInt(allItem.Myresume.introduces.prof_degree) - 1);
              } else {
                setProficiencyIndex(parseInt(allItem.Myresume.introduces.prof_degree));
              }
              if (allItem.Myresume.introduces.prof_degree > 0) {
                setUserIndex(parseInt(allItem.Myresume.introduces.type) + 1);
              } else {
                setUserIndex(parseInt(allItem.Myresume.introduces.type));
              }
              setMultiArray([data, lastCity]);
            }
          }
        }
      }, [edit]);
      var userEnterFrom = function userEnterFrom(e, key) {
        var value = void 0;
        if (key === 'proficiency') {
          value = proficiency[e.detail.value];
        } else if (key === 'personnel') {
          value = personnel[e.detail.value];
          if (e.detail.value !== '0') {
            setRanks(true);
          } else {
            setRanks(false);
          }
        } else {
          value = e.detail.value;
        }
        var state = JSON.parse(JSON.stringify(formData));
        state[key] = value;
        setFormData(state);
      };
      // 确定
      var handleChange = function handleChange(e) {
        setMultiIndex(e.detail.value);
        var allpro = '';
        if (allprovinces[multiIndex[0]].children.length != 0) {
          allpro = allprovinces[multiIndex[0]].id + "," + allprovinces[multiIndex[0]].children[multiIndex[1]].id;
          // seMultiIndexvalue(allprovinces[multiIndex[0]].name + allprovinces[multiIndex[0]].children[multiIndex[1]].name)
          var value = allprovinces[multiIndex[0]].name + allprovinces[multiIndex[0]].children[multiIndex[1]].name;
          var key = 'address';
          var state = JSON.parse(JSON.stringify(formData));
          state[key] = value;
          setFormData(state);
        } else {
          allpro = allprovinces[multiIndex[0]].id + "," + allprovinces[multiIndex[0]].id;
          // seMultiIndexvalue(allprovinces[multiIndex[0]].name)
          var _state = JSON.parse(JSON.stringify(formData));
          var _value = allprovinces[multiIndex[0]].name;
          var _key = 'address';
          _state[_key] = _value;
          setFormData(_state);
        }
        setAllpro(allpro);
      };
      // 第一列滑动
      var handlebindcolumnchange = function handlebindcolumnchange(e) {
        var obj = {
          multiArray: multiArray,
          multiIndex: multiIndex
        };
        obj.multiIndex[e.detail.column] = e.detail.value;
        switch (e.detail.column) {
          case 0:
            switch (obj.multiIndex[0]) {
              case obj.multiIndex[0]:
                obj.multiArray[1] = multiArrayone[1][obj.multiIndex[0]];
                break;
            }
            obj.multiIndex[1] = 0;
            break;
        }
        setMultiArray(obj.multiArray);
        setMultiIndex(obj.multiIndex);
        // 修改值
        setEdit(edit + 1);
      };
      var handleText = function handleText(v) {
        var list = JSON.parse(JSON.stringify(label));
        var tagList = JSON.parse(JSON.stringify(tag));
        var listItem = list.map(function (val) {
          if (val.id === v.id) {
            if (v.click) {
              val.click = false;
              tagList.map(function (item, i) {
                if (val.label_name === item.label_name) {
                  tagList.splice(i, 1);
                }
                return item;
              });
            } else {
              if (tagList.length < 3) {
                val.click = true;
                tagList.push(val);
              }
            }
          }
          return val;
        });
        setTag(tagList);
        setLabel(listItem);
      };
      var handleSubmit = function handleSubmit() {
        var number_people = personnel.indexOf(formData.personnel);
        var prof_degree = proficiency.indexOf(formData.proficiency);
        var tags = tag.map(function (v) {
          return v.id;
        }).toString();
        var params = {
          experience: formData.age,
          hometown: allpro,
          // 人员
          number_people: formData.type,
          // 熟练度
          prof_degree: prof_degree + 1,
          // 标签
          tags: tags,
          type: number_people + 1
        };
        if (!allpro) {}
        console.log(params, 'parsadsa');
        if (!formData.age) {
          _taroTt2.default.showModal({
            title: '温馨提示',
            content: '请输入您的工龄',
            showCancel: false
          });
          return;
        }
        if (!allpro) {
          (0, _index2.default)('请选择家乡');
          return;
        }
        if (!formData.proficiency) {
          (0, _index2.default)('请选择熟练度');
          return;
        }
        // 人员构成
        var strone = /^[0-9]{1,4}$/ig;
        // let strone = /[^0-9]/g;
        if (!formData.personnel) {
          (0, _index2.default)('请选择人员构成');
          return;
        }
        if (number_people > 0) {
          if (!strone.test(formData.type)) {
            if (~~formData.type - 0 <= 1) {
              _taroTt2.default.showModal({
                title: '温馨提示',
                content: '请输入您的队伍人数不得少于2人',
                showCancel: false
              });
            }
          }
          return;
        }
        // console.log(params);
        // return;
        (0, _index4.resumesIntroduceAction)(params).then(function (res) {
          if (res.errcode === 200) {
            (0, _index3.SubscribeToNews)("resume", function () {
              (0, _index.SubPopup)({
                tips: res.errmsg,
                callback: function callback() {
                  _taroTt2.default.navigateBack({
                    delta: 1
                  });
                }
              });
            });
          } else {
            _taroTt2.default.showModal({
              title: '温馨提示',
              content: res.errmsg,
              showCancel: false
            });
            return;
          }
        });
      };
      this.anonymousFunc0 = function (e) {
        return userEnterFrom(e, 'age');
      };
      this.anonymousFunc1 = function (e) {
        return handleChange(e);
      };
      this.anonymousFunc2 = function (e) {
        return handlebindcolumnchange(e);
      };
      this.anonymousFunc3 = function (e) {
        return userEnterFrom(e, 'proficiency');
      };
      this.anonymousFunc4 = function (e) {
        return userEnterFrom(e, 'personnel');
      };
      this.anonymousFunc5 = function (e) {
        return userEnterFrom(e, 'type');
      };
      this.anonymousFunc7 = handleSubmit;
      var loopArray102 = label.map(function (v, __index6) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var _$indexKey = "bafzz" + __index6;
        _this2.anonymousFunc6Map[_$indexKey] = function () {
          return handleText(v.$original);
        };
        return {
          _$indexKey: _$indexKey,
          $original: v.$original
        };
      });
      Object.assign(this.__state, {
        loopArray102: loopArray102,
        formData: formData,
        multiIndex: multiIndex,
        multiArray: multiArray,
        proficiencyIndex: proficiencyIndex,
        proficiency: proficiency,
        userIndex: userIndex,
        personnel: personnel,
        ranks: ranks,
        label: label
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
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: 'anonymousFunc2',
    value: function anonymousFunc2(e) {
      ;
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
    value: function anonymousFunc6(_$indexKey) {
      var _anonymousFunc6Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc6Map[_$indexKey] && (_anonymousFunc6Map = this.anonymousFunc6Map)[_$indexKey].apply(_anonymousFunc6Map, e);
    }
  }, {
    key: 'anonymousFunc7',
    value: function anonymousFunc7(e) {
      ;
    }
  }]);

  return PersonInfo;
}(_taroTt2.default.Component);

PersonInfo.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc7"];
PersonInfo.$$componentPath = "pages/resume/personInfo/index";
PersonInfo.config = { navigationBarTitleText: '人员信息' };
exports.default = PersonInfo;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(PersonInfo, true));

/***/ })

},[["./src/pages/resume/personInfo/index.tsx","runtime","vendors"]]]);