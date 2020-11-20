import Taro, { useState, useEffect, memo } from "@tarojs/taro";
import { View, Image, Block, ScrollView } from "@tarojs/components";
import { IMGCDNURL } from "../../../config";
import { AtDrawer } from "taro-ui";
import { getListFilterData } from "../../../utils/request";
import { filterClassifyResultFleamarketTree, filterClassifyResultClassTreeBase } from "../../../utils/request/index.d";
import { filterClassifyDataResultReduce } from "../../../reducers/filter_classify";
import { setFilter } from "../../../actions/filter_classify";
import AREAS, { ChildItems } from "../../../models/area";
import classnames from "classnames";
import { AreaPickerKey, ClassifyPickerKey, FilterPickerKey } from "../../../config/pages/lists";
import { useDispatch, useSelector } from "@tarojs/redux";
import { UserListChooseCity } from "../../../config/store";
import "./index.scss";
import { conditionType } from '../../../pages/recruit/lists/index';
interface ConditionProps {
  setSearchData: (
    data:paramsType
  ) => void;
}

interface paramsType {
  area_id: string,
  classify_id: string,
  attribute_id: string
}

function UsedCondition({ setSearchData }: ConditionProps) {
  const dispatch = useDispatch();

  // * 获取地区选择默认数据
  let userListChooseCity: ChildItems = Taro.getStorageSync(UserListChooseCity);

  // * 获取筛选条件信息
  const filterData = useSelector<any, filterClassifyDataResultReduce>(
    state => state.filterClassify
  );
  // * 设置标识 避免数据的重复设置影响性能
  const [seted, setSeted] = useState<boolean>(false);
  // * 当前展开项id
  const [current, setCurrent] = useState<string>("");
  // * 当前城市选择子级索引
  const [areaIndex, setAreaIndex] = useState<number>(0);
  // * 当前城市选择子级id
  const [areaChildId, setAreaChildId] = useState<string>(userListChooseCity.id);
  // * 当前分类选择父级索引
  const [fleamarketTreeIndex, setfleamarketTreeIndex] = useState<number>(0);
  // * 历史分类选择父级索引
  let [oldFleamarketTreeIndex, setOldFleamarketTreeIndex] = useState<number>(0);
  // * 当前分类选择子级id
  const [fleamarketTreeSonId, setfleamarketTreeSonId] = useState<string>("");
  // * 历史分类选择子级id
  const [oldFleamarketTreeSonId, setOldFleamarketTreeSonId] = useState<string>("");
  // * 当前展开的城市子集数据
  const [childAreaList, setChildAreaList] = useState<ChildItems[]>(AREAS[areaIndex].children);
  // 分类
  const [fleamarketTree, setFleamarketTree] = useState<filterClassifyResultFleamarketTree[]>([]);
  // * 子集类型数据
  const [fleamarketTreeChildData, setFleamarketTreeChildData] = useState<Pick<filterClassifyResultClassTreeBase, "id" | "name">[]>([]);
  // * 历史子集类型数据
  const [oldFleamarketTreeChildData, setoldFleamarketTreeChildData] = useState<Pick<filterClassifyResultClassTreeBase, "id" | "name">[]>([]);
  // * 城市切换后子集列表回到顶部
  const [areaScrollTop, setAreaScrollTop] = useState<number>(0);
  // * 分类切换后子集列表回到顶部
  const [classifyScrollTop, setClassifyScrollTop] = useState<number>(0);
  
  // * 搜索的地区/分类参数
  const [paramsData, setParamsData] = useState<paramsType>({
    area_id: userListChooseCity.id,
    classify_id: '0',
    attribute_id: ''
  })

  // * 标题默认值
  const DEFAULT_CONDITION = [
    { id: AreaPickerKey, text: userListChooseCity.name },
    { id: ClassifyPickerKey, text: '选择分类' }
  ]

  // * 标题
  const [screeningCondition, setScreeningCondition] = useState<conditionType[]>(DEFAULT_CONDITION)

  // * 点击选项展开内容
  const conditionItemClick = (id: string) => {
    setCurrent(id);
  };

  // * 关闭抽屉
  // * reReset是否重置（手动关闭的时候reReset为true）
  const closeDrawer = (reReset?: boolean) => {
    // * 关闭的时候会去调onClose方法，避免重复调用
    if (current) {
      //关闭的时候重置数据
      if (reReset) {
        resetCity();
        resetFleamarketTree();
        setParamsData({...paramsData})
      }
      setCurrent("");
    }
  };

  // * 重置分类（历史数据设置为当前数据）
  function resetFleamarketTree() {
    setfleamarketTreeIndex(oldFleamarketTreeIndex);
    setFleamarketTreeChildData([...oldFleamarketTreeChildData]);
    paramsData.classify_id = fleamarketTree[oldFleamarketTreeIndex].id.toString()
    paramsData.attribute_id = oldFleamarketTreeSonId
  }

  // * 设置标题
  function setTile(key,text){
    screeningCondition[key].text = text;
    setScreeningCondition([...screeningCondition])
  }

  // * 城市索引更换
  const changeAreaIndex = (i: number) => {
    setAreaIndex(i);
    setAreaScrollTop(0);
    if (!AREAS[i].has_children) {
      // 设置标题
      setTile(0,AREAS[i].name)
      // 请求接口
      paramsData.area_id = AREAS[i].id.toString()
      setSearchData({...paramsData})
      setParamsData({...paramsData})
      setAreaChildId('');
      // 设置缓存
      Taro.setStorageSync(UserListChooseCity, { ...AREAS[i] });
      closeDrawer();
    }
  };

  // 选择子集地区
  const sureAreaCurrent = (data: any) => {
    // 设置标题
    setTile(0,data.name)
    // 设置地区id
    setAreaChildId(data.id);
    // 请求接口
    paramsData.area_id = data.id.toString()
    setSearchData({...paramsData})
    setParamsData({...paramsData})
    // 设置缓存
    Taro.setStorageSync(UserListChooseCity, { ...data });
    closeDrawer();
  };

  // *  选择子集分类
  const sureClassifyCurrent = (i: number) => {
    let id: number = Number(fleamarketTreeChildData[i].id); 

    // 设置标题
    setTile(1,fleamarketTreeChildData[i].name)
    // 设置id/历史id
    setfleamarketTreeSonId(id.toString());
    setOldFleamarketTreeSonId(id.toString())
    // 请求接口
    paramsData.classify_id = fleamarketTree[fleamarketTreeIndex].id.toString();
    paramsData.attribute_id = id.toString();
    setSearchData({...paramsData})
    setParamsData({...paramsData})
    // 设置历史数据/索引
    setOldFleamarketTreeIndex(fleamarketTreeIndex);
    setoldFleamarketTreeChildData([
      ...fleamarketTree[fleamarketTreeIndex].attributes
    ]);
    closeDrawer();
  };

  // * 分类索引更换
  const changeClassifyIndex = (i: number) => {
    // 设置索引
    setfleamarketTreeIndex(i);
    setClassifyScrollTop(0);
    if (!fleamarketTree[i].has_attribute) {

      // 设置标题
      setTile(1,fleamarketTree[i].name)
      // 设置历史索引
      setOldFleamarketTreeIndex(i);
      // 请求接口
      paramsData.classify_id = fleamarketTree[i].id.toString()
      paramsData.attribute_id = '';
      setSearchData({...paramsData})
      setParamsData({...paramsData})

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
    paramsData.area_id = userListChooseCity.id
    setAreaIndex(defaultCityIndex);
  }

  // 获取筛选条件数据
  useEffect(() => {
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
  useEffect(() => {
    setChildAreaList(AREAS[areaIndex].children);
  }, [areaIndex]);

  return (
    <Block>
      <View className="recruit-condition-box">
        {screeningCondition &&
          screeningCondition.map(item => (
            <View
              className="recruit-condition-item"
              key={item.id}
              onClick={() => conditionItemClick(item.id)}
            >
              <View className="recruit-condition-content overwords">
                {item.text}
                <Image
                  className="recruit-condition-select"
                  src={IMGCDNURL + "select.png"}
                />
              </View>
            </View>
          ))}
      </View>

      {/* 地址选择器 */}
      <AtDrawer
        show={current === AreaPickerKey}
        mask
        onClose={() => closeDrawer(true)}
      >
        <View className="common-drawer-item">
          <ScrollView className="drawer-full-lists" scrollY>
            {AREAS.map((item, index) => (
              <View
                className={classnames({
                  "drawer-list-item overwords": true,
                  "drawer-list-item-active": index === areaIndex
                })}
                key={item.id}
                onClick={() => changeAreaIndex(index)}
              >
                {item.name}
              </View>
            ))}
          </ScrollView>
          {childAreaList.length && (
            <ScrollView
              className="drawer-full-lists drawer-half-lists"
              scrollY
              scrollTop={areaScrollTop}
            >
              {childAreaList.map((item, i) => (
                <View
                  className={classnames({
                    "drawer-list-item overwords": true,
                    "drawer-list-item-active": item.id === areaChildId
                  })}
                  key={item.id}
                  onClick={() => sureAreaCurrent(item)}
                >
                  {item.name}
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </AtDrawer>
      {/* 分类选择器 */}
      <AtDrawer
        show={current === ClassifyPickerKey}
        mask
        onClose={() => closeDrawer(true)}
      >
        <View className="common-drawer-item">
          <ScrollView className="drawer-full-lists" scrollY>
            {fleamarketTree.map((item, index) => (
              <View
                className={classnames({
                  "drawer-list-item overwords": true,
                  "drawer-list-item-active": index === fleamarketTreeIndex
                })}
                key={item.id}
                onClick={() => changeClassifyIndex(index)}
              >
                {item.name}
              </View>
            ))}
          </ScrollView>
          {fleamarketTreeChildData.length && (
            <ScrollView
              className="drawer-full-lists drawer-half-lists"
              scrollY
              scrollTop={classifyScrollTop}
            >
              {fleamarketTreeChildData.map((item, i) => (
                <View
                  className={classnames({
                    "drawer-list-item overwords": true,
                    "drawer-list-item-active":
                      item.id.toString() === fleamarketTreeSonId
                  })}
                  key={item.id}
                  onClick={() => sureClassifyCurrent(i)}
                >
                  {item.name}
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      </AtDrawer>
    </Block>
  );
}

export default memo(UsedCondition);
