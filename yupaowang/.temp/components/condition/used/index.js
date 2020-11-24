import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync, setStorageSync as _setStorageSync } from "@tarojs/taro-h5";
import { View, Image, Block, ScrollView } from "@tarojs/components";
import { IMGCDNURL } from "../../../config/index";
import { AtDrawer } from "taro-ui";
import { getListFilterData } from "../../../utils/request/index";
import { setFilter } from "../../../actions/filter_classify";
import AREAS from "../../../models/area";
import classnames from "classnames";
import { AreaPickerKey, ClassifyPickerKey } from "../../../config/pages/lists";
import { useDispatch, useSelector } from "@tarojs/redux-h5";
import { UserListChooseCity } from "../../../config/store";
import "./index.scss";

class UsedCondition extends Taro.Component {
  render() {
    const { setSearchData } = this.props;

    const dispatch = useDispatch();
    // * 获取地区选择默认数据
    let userListChooseCity = _getStorageSync(UserListChooseCity);
    // * 获取筛选条件信息
    const filterData = useSelector(state => state.filterClassify);
    // * 设置标识 避免数据的重复设置影响性能
    const [seted, setSeted] = Taro.useState(false);
    // * 当前展开项id
    const [current, setCurrent] = Taro.useState("");
    // * 当前城市选择子级索引
    const [areaIndex, setAreaIndex] = Taro.useState(0);
    // * 当前城市选择子级id
    const [areaChildId, setAreaChildId] = Taro.useState(userListChooseCity.id);
    // * 当前分类选择父级索引
    const [fleamarketTreeIndex, setfleamarketTreeIndex] = Taro.useState(0);
    // * 历史分类选择父级索引
    let [oldFleamarketTreeIndex, setOldFleamarketTreeIndex] = Taro.useState(0);
    // * 当前分类选择子级id
    const [fleamarketTreeSonId, setfleamarketTreeSonId] = Taro.useState("");
    // * 历史分类选择子级id
    const [oldFleamarketTreeSonId, setOldFleamarketTreeSonId] = Taro.useState("");
    // * 当前展开的城市子集数据
    const [childAreaList, setChildAreaList] = Taro.useState(AREAS[areaIndex].children);
    // 分类
    const [fleamarketTree, setFleamarketTree] = Taro.useState([]);
    // * 子集类型数据
    const [fleamarketTreeChildData, setFleamarketTreeChildData] = Taro.useState([]);
    // * 历史子集类型数据
    const [oldFleamarketTreeChildData, setoldFleamarketTreeChildData] = Taro.useState([]);
    // * 城市切换后子集列表回到顶部
    const [areaScrollTop, setAreaScrollTop] = Taro.useState(0);
    // * 分类切换后子集列表回到顶部
    const [classifyScrollTop, setClassifyScrollTop] = Taro.useState(0);
    // * 搜索的地区/分类参数
    const [paramsData, setParamsData] = Taro.useState({
      area_id: userListChooseCity.id,
      classify_id: '0',
      attribute_id: ''
    });
    // * 标题默认值
    const DEFAULT_CONDITION = [{ id: AreaPickerKey, text: userListChooseCity.name }, { id: ClassifyPickerKey, text: '选择分类' }];
    // * 标题
    const [screeningCondition, setScreeningCondition] = Taro.useState(DEFAULT_CONDITION);
    // * 点击选项展开内容
    const conditionItemClick = id => {
      setCurrent(id);
    };
    // * 关闭抽屉
    // * reReset是否重置（手动关闭的时候reReset为true）
    const closeDrawer = reReset => {
      // * 关闭的时候会去调onClose方法，避免重复调用
      if (current) {
        //关闭的时候重置数据
        if (reReset) {
          resetCity();
          resetFleamarketTree();
          setParamsData({ ...paramsData });
        }
        setCurrent("");
      }
    };
    // * 重置分类（历史数据设置为当前数据）
    function resetFleamarketTree() {
      setfleamarketTreeIndex(oldFleamarketTreeIndex);
      setFleamarketTreeChildData([...oldFleamarketTreeChildData]);
      paramsData.classify_id = fleamarketTree[oldFleamarketTreeIndex].id.toString();
      paramsData.attribute_id = oldFleamarketTreeSonId;
    }
    // * 设置标题
    function setTile(key, text) {
      screeningCondition[key].text = text;
      setScreeningCondition([...screeningCondition]);
    }
    // * 城市索引更换
    const changeAreaIndex = i => {
      setAreaIndex(i);
      setAreaScrollTop(0);
      if (!AREAS[i].has_children) {
        // 设置标题
        setTile(0, AREAS[i].name);
        // 请求接口
        paramsData.area_id = AREAS[i].id.toString();
        setSearchData({ ...paramsData });
        setParamsData({ ...paramsData });
        setAreaChildId('');
        // 设置缓存
        _setStorageSync(UserListChooseCity, { ...AREAS[i] });
        closeDrawer();
      }
    };
    // 选择子集地区
    const sureAreaCurrent = data => {
      // 设置标题
      setTile(0, data.name);
      // 设置地区id
      setAreaChildId(data.id);
      // 请求接口
      paramsData.area_id = data.id.toString();
      setSearchData({ ...paramsData });
      setParamsData({ ...paramsData });
      // 设置缓存
      _setStorageSync(UserListChooseCity, { ...data });
      closeDrawer();
    };
    // *  选择子集分类
    const sureClassifyCurrent = i => {
      let id = Number(fleamarketTreeChildData[i].id);
      // 设置标题
      setTile(1, fleamarketTreeChildData[i].name);
      // 设置id/历史id
      setfleamarketTreeSonId(id.toString());
      setOldFleamarketTreeSonId(id.toString());
      // 请求接口
      paramsData.classify_id = fleamarketTree[fleamarketTreeIndex].id.toString();
      paramsData.attribute_id = id.toString();
      setSearchData({ ...paramsData });
      setParamsData({ ...paramsData });
      // 设置历史数据/索引
      setOldFleamarketTreeIndex(fleamarketTreeIndex);
      setoldFleamarketTreeChildData([...fleamarketTree[fleamarketTreeIndex].attributes]);
      closeDrawer();
    };
    // * 分类索引更换
    const changeClassifyIndex = i => {
      // 设置索引
      setfleamarketTreeIndex(i);
      setClassifyScrollTop(0);
      if (!fleamarketTree[i].has_attribute) {
        // 设置标题
        setTile(1, fleamarketTree[i].name);
        // 设置历史索引
        setOldFleamarketTreeIndex(i);
        // 请求接口
        paramsData.classify_id = fleamarketTree[i].id.toString();
        paramsData.attribute_id = '';
        setSearchData({ ...paramsData });
        setParamsData({ ...paramsData });
        // 设置子内容/历史内容
        setFleamarketTreeChildData([]);
        setoldFleamarketTreeChildData([]);
        closeDrawer();
      } else {
        // 设置子内容
        setFleamarketTreeChildData([...fleamarketTree[i].attributes]);
      }
    };
    // * 地区设置默认索引
    function resetCity() {
      let defaultCityId = userListChooseCity.pid === "0" || userListChooseCity.pid === "1" ? userListChooseCity.id : userListChooseCity.pid;
      let defaultCityIndex = AREAS.findIndex(item => item.id === defaultCityId);
      paramsData.area_id = userListChooseCity.id;
      setAreaIndex(defaultCityIndex);
    }
    // 获取筛选条件数据
    Taro.useEffect(() => {
      resetCity();
      if (!filterData.isSet) {
        if (seted) return;
        setSeted(true);
        setFleamarketTree(filterData.fleamarketTree);
      } else {
        getListFilterData().then(res => {
          dispatch(setFilter({ ...res.data, isSet: true }));
          setSeted(true);
          setFleamarketTree(res.data.fleamarketTree);
        });
      }
    }, []);
    // * 获取城市子集数据
    Taro.useEffect(() => {
      setChildAreaList(AREAS[areaIndex].children);
    }, [areaIndex]);
    return <Nerv.Fragment>
      <View className="recruit-condition-box">
        {screeningCondition && screeningCondition.map(item => <View className="recruit-condition-item" key={item.id} onClick={() => conditionItemClick(item.id)}>
              <View className="recruit-condition-content overwords">
                {item.text}
                <Image className="recruit-condition-select" src={IMGCDNURL + "select.png"} />
              </View>
            </View>)}
      </View>

      
      <AtDrawer show={current === AreaPickerKey} mask onClose={() => closeDrawer(true)}>
        <View className="common-drawer-item">
          <ScrollView className="drawer-full-lists" scrollY>
            {AREAS.map((item, index) => <View className={classnames({
              "drawer-list-item overwords": true,
              "drawer-list-item-active": index === areaIndex
            })} key={item.id} onClick={() => changeAreaIndex(index)}>
                {item.name}
              </View>)}
          </ScrollView>
          {childAreaList.length && <ScrollView className="drawer-full-lists drawer-half-lists" scrollY scrollTop={areaScrollTop}>
              {childAreaList.map((item, i) => <View className={classnames({
              "drawer-list-item overwords": true,
              "drawer-list-item-active": item.id === areaChildId
            })} key={item.id} onClick={() => sureAreaCurrent(item)}>
                  {item.name}
                </View>)}
            </ScrollView>}
        </View>
      </AtDrawer>
      
      <AtDrawer show={current === ClassifyPickerKey} mask onClose={() => closeDrawer(true)}>
        <View className="common-drawer-item">
          <ScrollView className="drawer-full-lists" scrollY>
            {fleamarketTree.map((item, index) => <View className={classnames({
              "drawer-list-item overwords": true,
              "drawer-list-item-active": index === fleamarketTreeIndex
            })} key={item.id} onClick={() => changeClassifyIndex(index)}>
                {item.name}
              </View>)}
          </ScrollView>
          {fleamarketTreeChildData.length && <ScrollView className="drawer-full-lists drawer-half-lists" scrollY scrollTop={classifyScrollTop}>
              {fleamarketTreeChildData.map((item, i) => <View className={classnames({
              "drawer-list-item overwords": true,
              "drawer-list-item-active": item.id.toString() === fleamarketTreeSonId
            })} key={item.id} onClick={() => sureClassifyCurrent(i)}>
                  {item.name}
                </View>)}
            </ScrollView>}
        </View>
      </AtDrawer>
    </Nerv.Fragment>;
  }

}

export default Taro.memo(UsedCondition);