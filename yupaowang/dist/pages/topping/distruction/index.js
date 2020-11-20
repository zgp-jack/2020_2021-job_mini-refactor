(tt["webpackJsonp"] = tt["webpackJsonp"] || []).push([["pages/topping/distruction/index"],{

/***/ "./src/pages/topping/distruction/index.scss":
/*!**************************************************!*\
  !*** ./src/pages/topping/distruction/index.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/topping/distruction/index.tsx":
/*!*************************************************!*\
  !*** ./src/pages/topping/distruction/index.tsx ***!
  \*************************************************/
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

var _index = __webpack_require__(/*! ../../../utils/request/index */ "./src/utils/request/index.ts");

var _area = __webpack_require__(/*! ../../../models/area */ "./src/models/area.ts");

var _area2 = _interopRequireDefault(_area);

var _store = __webpack_require__(/*! ../../../config/store */ "./src/config/store.ts");

var _index2 = __webpack_require__(/*! ../../../config/index */ "./src/config/index.ts");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/@tarojs/redux/index.js");

var _recruit_top = __webpack_require__(/*! ../../../actions/recruit_top */ "./src/actions/recruit_top.ts");

var _recruit_top2 = _interopRequireDefault(_recruit_top);

__webpack_require__(/*! ./index.scss */ "./src/pages/topping/distruction/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Distruction = function (_Taro$Component) {
  _inherits(Distruction, _Taro$Component);

  function Distruction() {
    _classCallCheck(this, Distruction);

    var _this = _possibleConstructorReturn(this, (Distruction.__proto__ || Object.getPrototypeOf(Distruction)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '招工置顶'
    };

    _this.$usedState = ["searchData", "history", "data", "are", "loopArray78", "loopArray79", "loopArray80", "loopArray81", "clickInput", "inputVal", "onInput", "IMGCDNURL"];
    _this.anonymousFunc2Map = {};
    _this.anonymousFunc4Map = {};
    _this.anonymousFunc5Map = {};
    _this.anonymousFunc6Map = {};
    _this.customComponents = [];
    return _this;
  }

  _createClass(Distruction, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Distruction.prototype.__proto__ || Object.getPrototypeOf(Distruction.prototype), '_constructor', this).call(this, props);
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
      var AreParams = (0, _redux.useSelector)(function (store) {
        return store.recruitTop['AreParams'];
      });
      var router = (0, _taroTt.useRouter)();
      var dispatch = (0, _redux.useDispatch)();
      var _router$params = router.params,
          max_city = _router$params.max_city,
          max_province = _router$params.max_province;
      // 热门城市

      var _useState = (0, _taroTt.useState)({
        item: []
      }),
          _useState2 = _slicedToArray(_useState, 2),
          data = _useState2[0],
          setData = _useState2[1];
      // 所有省份


      var _useState3 = (0, _taroTt.useState)({
        areData: []
      }),
          _useState4 = _slicedToArray(_useState3, 2),
          are = _useState4[0],
          setAre = _useState4[1];
      // 是否点击输入框


      var _useState5 = (0, _taroTt.useState)(false),
          _useState6 = _slicedToArray(_useState5, 2),
          clickInput = _useState6[0],
          setClickInput = _useState6[1];
      // 输入输入框时


      var _useState7 = (0, _taroTt.useState)(false),
          _useState8 = _slicedToArray(_useState7, 2),
          onInput = _useState8[0],
          setOnInput = _useState8[1];
      // 搜索的内容


      var _useState9 = (0, _taroTt.useState)({
        list: []
      }),
          _useState10 = _slicedToArray(_useState9, 2),
          searchData = _useState10[0],
          setSearchData = _useState10[1];
      // 输入框内容


      var _useState11 = (0, _taroTt.useState)(''),
          _useState12 = _slicedToArray(_useState11, 2),
          inputVal = _useState12[0],
          setInputVal = _useState12[1];
      // 搜索历史


      var _useState13 = (0, _taroTt.useState)({
        historylist: []
      }),
          _useState14 = _slicedToArray(_useState13, 2),
          history = _useState14[0],
          setHistory = _useState14[1];
      // 点击参数


      var _useState15 = (0, _taroTt.useState)({
        city: [],
        province: [],
        whole: []
      }),
          _useState16 = _slicedToArray(_useState15, 2),
          params = _useState16[0],
          setParams = _useState16[1];
      // 设置参数


      (0, _taroTt.useEffect)(function () {
        // 获取搜索历史
        var searchItem = _taroTt2.default.getStorageSync(_store.SearchList);
        if (searchItem) {
          setHistory({ historylist: searchItem });
        }
        (0, _index.jobTopHotAreasAction)().then(function (res) {
          if (res.errcode == "ok") {
            var item = [];
            _area2.default.map(function (v) {
              if (v.children.length > 0) {
                item.push(v);
              }
            });
            for (var i = 0; i < item.length; i++) {
              for (var j = 0; j < item[i].children.length; j++) {
                item[i].click = false;
                item[i].children[j].click = false;
              }
            }
            if (AreParams) {
              // 热门
              res.data.map(function (val) {
                if (AreParams.city) {
                  AreParams.city.map(function (v) {
                    if (val.id === v.id) {
                      val.click = true;
                    }
                    return v;
                  });
                }
                if (AreParams.province) {
                  AreParams.province.map(function (v) {
                    if (val.id === v.id) {
                      val.click = true;
                    }
                    return v;
                  });
                }
              });
              // 所有
              item.map(function (val) {
                val.children.map(function (itme) {
                  if (AreParams.city) {
                    AreParams.city.map(function (v) {
                      if (itme.id === v.id) {
                        itme.click = true;
                      }
                      return v;
                    });
                  }
                  if (AreParams.province) {
                    AreParams.province.map(function (v) {
                      if (itme.id === v.id) {
                        itme.click = true;
                      }
                      return v;
                    });
                  }
                });
              });
            }
            setData({ item: res.data });
            setAre({ areData: item });
            setParams({ city: AreParams.city, province: AreParams.province, whole: [] });
          } else {
            _taroTt2.default.showModal({
              title: '温馨提示',
              content: res.errmsg,
              showCancel: false
            });
          }
        });
      }, []);
      // 点击输入框
      var handleInput = function handleInput() {
        setClickInput(true);
      };
      // 输入输入框
      var handleOnInput = function handleOnInput(e) {
        setInputVal(e.detail.value);
        setOnInput(true);
        var list = [];
        _area2.default.map(function (v) {
          if (v.name.indexOf(e.detail.value) >= 0) {
            list.push(v);
          }
          v.children.map(function (val) {
            if (val.name.indexOf(e.detail.value) >= 0) {
              list.push(val);
            }
          });
        });
        var data = [];
        list.map(function (v) {
          v.listName = v.ad_name + '-' + v.name;
          if (v.children && v.children.length > 0) {
            v.children.map(function (val) {
              val.listName = v.name + '-' + val.name;
              data.push(val);
              return val;
            });
          }
          data.push(v);
          return v;
        });
        setSearchData({ list: data });
      };
      // 点击其他省市
      var handleAllAre = function handleAllAre(v, type) {
        // 点击市的时候，该市的省取消，点击省的时候,该市的省取消
        if (v.pid === '0') {
          // 点击全国，其他热门与省市都为false
          // 热门城市
          var hotList = JSON.parse(JSON.stringify(data.item));
          // 省市
          var allList = JSON.parse(JSON.stringify(are.areData));
          var hot = undefined,
              all = undefined,
              list = [];
          // 再次点击
          if (v.click) {
            // 热门
            hot = hotList.map(function (val) {
              if (val.id === v.id) {
                val.click = false;
              }
              return val;
            });
            all = allList.map(function (val) {
              if (val.children) {
                val.children.map(function (item) {
                  item.click = false;
                });
              }
              return val;
            });
            // 选择取消
            // setWhole(false)
          } else {
            // 第一次点击
            hot = hotList.map(function (val) {
              //出了点击的其他都为false
              if (val.id === v.id) {
                val.click = true;
                list.push(val);
              } else {
                val.click = false;
              }
              return val;
            });
            // 全部
            all = allList.map(function (val) {
              if (val.children) {
                val.children.map(function (item) {
                  item.click = false;
                });
              }
              return val;
            });
            // 选择全国
            // setWhole(true)
          }
          setAre({ areData: all });
          setData({ item: hot });
          setParams({ city: [], province: [], whole: list });
          // 选择市的时候
        } else if (v.pid !== '1' && v.pid !== '0') {
          var cityItem = JSON.parse(JSON.stringify(params.city));
          // 已选择大于限制大小
          if (cityItem.length) {
            var val = JSON.parse(JSON.stringify(cityItem));
            var dataItem = val.find(function (item) {
              return item.id === v.id;
            });
            if (dataItem) {
              val.map(function (item, i) {
                if (item.id === v.id) {
                  val.splice(i, 1);
                }
              });
            } else {
              if (cityItem.length >= parseInt(max_city)) {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: '\u6700\u591A\u53EF\u540C\u65F6\u7F6E\u9876' + max_city + '\u4E2A\u5E02\u3001' + max_province + '\u4E2A\u7701\u6216\u76F4\u8F96\u5E02',
                  showCancel: false
                });
                return;
              }
              val.push(v);
            }
            var arr = data.item.map(function (val) {
              if (val.id === v.id) {
                val.click = !v.click;
              }
              return val;
            });
            var itemList = are.areData.map(function (val) {
              val.children.map(function (item) {
                if (item.id === v.id) {
                  if (type === 1) {
                    item.click = v.click;
                  } else {
                    item.click = !v.click;
                    val.children[0].click = false;
                  }
                }
                return item;
              });
              return val;
            });
            setAre({ areData: itemList });
            setData({ item: arr });
            var provinceList = JSON.parse(JSON.stringify(params.province));
            are.areData.map(function (val) {
              if (val.children) {
                val.children.map(function (item) {
                  if (item.id === v.id) {
                    provinceList.map(function (list, i) {
                      if (list.id === val.id) {
                        provinceList.splice(i, 1);
                      }
                    });
                  }
                });
              }
            });
            setParams({ city: val, province: provinceList, whole: [] });
          } else {
            var _arr = data.item.map(function (val) {
              if (val.id === v.id) {
                val.click = !v.click;
              } else {
                if (val.pid === '0') {
                  val.click = false;
                }
              }
              return val;
            });
            var _itemList = are.areData.map(function (val) {
              if (val.id !== v.id) {
                val.children.map(function (item) {
                  if (item.id === v.id) {
                    if (type === 1) {
                      item.click = v.click;
                    } else {
                      item.click = !v.click;
                      // 清除该组的省
                      val.children[0].click = false;
                    }
                  }
                  if (item.pid === '1') {
                    val.children.map(function (list) {
                      if (list.id === v.id) {
                        list.click = false;
                      }
                    });
                  }
                  return item;
                });
              }
              return val;
            });
            // 第一次点击市的时候，该市的省取消
            setAre({ areData: _itemList });
            setData({ item: _arr });
            var _val = JSON.parse(JSON.stringify(cityItem));
            _val.push(v);
            var _provinceList = JSON.parse(JSON.stringify(params.province));
            // 判断省里有点击的市，就删除省
            are.areData.map(function (val) {
              if (val.children) {
                val.children.map(function (item) {
                  if (item.id === v.id) {
                    _provinceList.map(function (list, i) {
                      if (list.id === val.id) {
                        _provinceList.splice(i, 1);
                      }
                    });
                  }
                });
              }
            });
            setParams({ city: _val, province: _provinceList, whole: [] });
          }
        } else {
          var provinceItem = JSON.parse(JSON.stringify(params.province));
          if (provinceItem.length) {
            var _val2 = JSON.parse(JSON.stringify(provinceItem));
            var _dataItem = _val2.find(function (item) {
              return item.id === v.id;
            });
            if (_dataItem) {
              _val2.map(function (item, i) {
                if (item.id === v.id) {
                  _val2.splice(i, 1);
                }
              });
            } else {
              if (provinceItem.length >= parseInt(max_province)) {
                _taroTt2.default.showModal({
                  title: '温馨提示',
                  content: '\u6700\u591A\u53EF\u540C\u65F6\u7F6E\u9876' + max_city + '\u4E2A\u5E02\u3001' + max_province + '\u4E2A\u7701\u6216\u76F4\u8F96\u5E02',
                  showCancel: false
                });
                return;
              }
              _val2.push(v);
            }
            var _arr2 = data.item.map(function (val) {
              if (val.id === v.id) {
                val.click = !v.click;
              }
              return val;
            });
            var _itemList2 = are.areData.map(function (val) {
              // 判断不是全国置顶
              if (val.id !== v.id) {
                val.children.map(function (item) {
                  if (item.id === v.id) {
                    item.click = !v.click;
                  }
                  return item;
                });
              } else {
                // 全国置顶全部变为false
                val.children.map(function (item) {
                  if (item.id === v.id) {
                    item.click = !v.click;
                  } else {
                    item.click = false;
                  }
                  return item;
                });
              }
              return val;
            });
            // 点击省，删除市
            var cityList = JSON.parse(JSON.stringify(params.city));
            are.areData.map(function (val) {
              if (val.id === v.id) {
                val.children.map(function (item) {
                  cityList.map(function (list, i) {
                    if (item.id === list.id) {
                      cityList.splice(i, 1);
                    }
                  });
                });
              }
            });
            setAre({ areData: _itemList2 });
            setData({ item: _arr2 });
            setParams({ city: cityList, province: _val2, whole: [] });
          } else {
            var List = JSON.parse(JSON.stringify(are.areData));
            // 点击市的时候把省取消
            for (var i = 0; i < List.length; i++) {
              if (List[i].id === v.id) {
                if (List[i].children.length) {
                  List[i].children.map(function (val) {
                    if (val.id === v.id) {
                      val.click = !v.click;
                    } else {
                      val.click = false;
                    }
                  });
                }
              }
            }
            // 点击省，删除市
            var _cityList = JSON.parse(JSON.stringify(params.city));
            are.areData.map(function (val) {
              if (val.id === v.id) {
                val.children.map(function (item) {
                  data.item.map(function (val) {
                    if (val.id === item.id) {
                      val.click = false;
                    }
                    return val;
                  });
                  _cityList.map(function (list, i) {
                    if (item.id === list.id) {
                      _cityList.splice(i, 1);
                    }
                  });
                });
              }
            });
            var _hot = data.item.map(function (val) {
              if (val.id === v.id) {
                val.click = true;
              } else {
                if (val.pid === '0') {
                  val.click = false;
                }
              }
              return val;
            });
            setAre({ areData: List });
            setData({ item: _hot });
            var _val3 = JSON.parse(JSON.stringify(provinceItem));
            _val3.push(v);
            setParams({ city: _cityList, province: _val3, whole: [] });
          }
        }
      };
      var handleSeach = function handleSeach(v) {
        handleAllAre(v, 0);
        setClickInput(false);
        setOnInput(false);
        setInputVal('');
        history.historylist.unshift(v);
        var hash = {};
        var arr = history.historylist.reduce(function (item, next) {
          hash[next.name] ? '' : hash[next.name] = item.push(next);
          return item;
        }, []);
        setHistory({ historylist: arr });
        if (history.historylist.length > 6) {
          history.historylist.pop();
        }
        // 设置搜索历史
        _taroTt2.default.setStorageSync(_store.SearchList, history.historylist);
      };
      // 清除历史
      var handleCloseHistory = function handleCloseHistory() {
        setHistory({ historylist: [] });
        _taroTt2.default.clearStorageSync();
      };
      // 确认选择
      var handleClick = function handleClick() {
        console.log(params);
        dispatch((0, _recruit_top2.default)(_extends({}, params)));
        _taroTt2.default.navigateBack({
          delta: 1
        });
      };
      this.anonymousFunc0 = handleInput;
      this.anonymousFunc1 = function (e) {
        return handleOnInput(e);
      };
      this.anonymousFunc3 = handleCloseHistory;
      this.anonymousFunc8 = handleClick;
      var loopArray78 = searchData.list.length > 0 ? searchData.list.map(function (v, __index2) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var _$indexKey = "iczzz" + __index2;
        _this2.anonymousFunc2Map[_$indexKey] = function () {
          return handleSeach(v.$original);
        };
        return {
          _$indexKey: _$indexKey,
          $original: v.$original
        };
      }) : [];
      var loopArray79 = clickInput && !onInput && history.historylist.length > 0 ? history.historylist.map(function (v, __index4) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var _$indexKey2 = "idzzz" + __index4;
        _this2.anonymousFunc4Map[_$indexKey2] = function () {
          return handleSeach(v.$original);
        };
        return {
          _$indexKey2: _$indexKey2,
          $original: v.$original
        };
      }) : [];
      var loopArray80 = data.item.map(function (v, __index5) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var _$indexKey3 = "iezzz" + __index5;
        _this2.anonymousFunc5Map[_$indexKey3] = function () {
          handleAllAre(v.$original, 1);
        };
        return {
          _$indexKey3: _$indexKey3,
          $original: v.$original
        };
      });
      var loopArray81 = are.areData.map(function (v, __index7) {
        v = {
          $original: (0, _taroTt.internal_get_original)(v)
        };
        var $anonymousCallee__8 = v.$original.children.map(function (val, index) {
          val = {
            $original: (0, _taroTt.internal_get_original)(val)
          };
          var _$indexKey4 = 'ifzzz' + __index7 + '-' + index;
          _this2.anonymousFunc6Map[_$indexKey4] = function () {
            return handleAllAre(val.$original, 0);
          };
          return {
            _$indexKey4: _$indexKey4,
            $original: val.$original
          };
        });
        return {
          $anonymousCallee__8: $anonymousCallee__8,
          $original: v.$original
        };
      });
      Object.assign(this.__state, {
        searchData: searchData,
        history: history,
        data: data,
        are: are,
        loopArray78: loopArray78,
        loopArray79: loopArray79,
        loopArray80: loopArray80,
        loopArray81: loopArray81,
        clickInput: clickInput,
        inputVal: inputVal,
        onInput: onInput,
        IMGCDNURL: _index2.IMGCDNURL
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
    value: function anonymousFunc2(_$indexKey) {
      var _anonymousFunc2Map;

      ;

      for (var _len = arguments.length, e = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        e[_key - 1] = arguments[_key];
      }

      return this.anonymousFunc2Map[_$indexKey] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: 'anonymousFunc3',
    value: function anonymousFunc3(e) {
      ;
    }
  }, {
    key: 'anonymousFunc4',
    value: function anonymousFunc4(_$indexKey2) {
      var _anonymousFunc4Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc4Map[_$indexKey2] && (_anonymousFunc4Map = this.anonymousFunc4Map)[_$indexKey2].apply(_anonymousFunc4Map, e);
    }
  }, {
    key: 'anonymousFunc5',
    value: function anonymousFunc5(_$indexKey3) {
      var _anonymousFunc5Map;

      ;

      for (var _len3 = arguments.length, e = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        e[_key3 - 1] = arguments[_key3];
      }

      return this.anonymousFunc5Map[_$indexKey3] && (_anonymousFunc5Map = this.anonymousFunc5Map)[_$indexKey3].apply(_anonymousFunc5Map, e);
    }
  }, {
    key: 'anonymousFunc6',
    value: function anonymousFunc6(_$indexKey4) {
      var _anonymousFunc6Map;

      ;

      for (var _len4 = arguments.length, e = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        e[_key4 - 1] = arguments[_key4];
      }

      return this.anonymousFunc6Map[_$indexKey4] && (_anonymousFunc6Map = this.anonymousFunc6Map)[_$indexKey4].apply(_anonymousFunc6Map, e);
    }
  }, {
    key: 'anonymousFunc8',
    value: function anonymousFunc8(e) {
      ;
    }
  }]);

  return Distruction;
}(_taroTt2.default.Component);

Distruction.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3", "anonymousFunc4", "anonymousFunc5", "anonymousFunc6", "anonymousFunc8"];
Distruction.$$componentPath = "pages/topping/distruction/index";
Distruction.config = { navigationBarTitleText: '招工置顶' };
exports.default = Distruction;

Page(__webpack_require__(/*! @tarojs/taro-tt */ "./node_modules/@tarojs/taro-tt/index.js").default.createComponent(Distruction, true));

/***/ })

},[["./src/pages/topping/distruction/index.tsx","runtime","vendors"]]]);