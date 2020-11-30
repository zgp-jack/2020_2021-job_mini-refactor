import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync, setStorageSync as _setStorageSync } from "@tarojs/taro-h5";
import { View, Image, Block, ScrollView } from '@tarojs/components';
import { IMGCDNURL } from "../../../config/index";
import { AtDrawer } from 'taro-ui';
import { getListFilterData } from "../../../utils/request/index";
import { setFilter } from '../../../actions/filter_classify';
import AREAS from '../../../models/area';
import classnames from 'classnames';
import { UserListChooseCity } from '../../../config/store';
import { AreaPickerKey, ClassifyPickerKey, FilterPickerKey } from '../../../config/pages/lists';
import { useDispatch, useSelector } from "@tarojs/redux-h5";
import './index.scss';

class RecruitCondition extends Taro.Component {
  render() {
    const { data, setSearchData } = this.props;

    const dispatch = useDispatch();
    // * 获取筛选条件信息
    const filterData = useSelector(state => state.filterClassify);
    // * 设置标识 避免数据的重复设置影响性能
    const [seted, setSeted] = Taro.useState(false);
    // * 当前展开项id
    const [current, setCurrent] = Taro.useState('');
    // * 当前城市选择父级索引
    const [areaIndex, setAreaIndex] = Taro.useState(0);
    // * 当前城市选中的id
    const [areaId, setAreaId] = Taro.useState('');
    // * 当前工种选择父级索引
    const [classifyIndex, setclassifyIndex] = Taro.useState(0);
    // * 当前工种选择父级索引
    const [filterIndex, setFilterIndex] = Taro.useState(0);
    // * 当前工种被选中id
    const [classifyId, setClassifyId] = Taro.useState('');
    // * 当前展开的城市子集数据
    const [childAreaList, setChildAreaList] = Taro.useState(AREAS[areaIndex].children);
    // * 工种数据
    const [classify, setClassify] = Taro.useState([]);
    // * 数据筛选条件 最新 热门
    const [jobtype, setJobtype] = Taro.useState([]);
    // * 城市切换后子集列表回到顶部
    const [areaScrollTop, setAreaScrollTop] = Taro.useState(0);
    // * 工种切换后子集列表回到顶部
    const [classifyScrollTop, setClassifyScrollTop] = Taro.useState(0);
    // 初始化城市父级索引
    Taro.useEffect(() => {
      let userListChooseCity = _getStorageSync(UserListChooseCity);
      if (userListChooseCity) {
        let id = userListChooseCity.id;
        setAreaId(id);
        // pid == 1 代表省份 和直辖市
        let pid = userListChooseCity.pid === '1' ? userListChooseCity.id : userListChooseCity.pid;
        let i = AREAS.findIndex(item => item.id === pid);
        // pid == 0 代表全国
        i = pid === '0' ? 0 : i;
        setAreaIndex(i);
      }
    }, []);
    // * 点击选项展开内容
    const conditionItemClick = id => {
      setCurrent(id);
    };
    // * 关闭抽屉
    const closeDrawer = () => {
      setCurrent('');
    };
    // * 城市索引更换
    const changeAreaIndex = i => {
      setAreaIndex(i);
      setAreaScrollTop(0);
      if (!AREAS[i].has_children) {
        let id = AREAS[i].id.toString();
        setSearchData(AreaPickerKey, id, AREAS[i].name);
        setAreaId(id);
        _setStorageSync(UserListChooseCity, AREAS[i]);
        closeDrawer();
      }
    };
    // 选择子集地区
    const sureAreaCurrent = i => {
      let id = AREAS[areaIndex].children[i].id;
      setSearchData(AreaPickerKey, id, AREAS[areaIndex].children[i].name);
      setAreaId(id);
      _setStorageSync(UserListChooseCity, AREAS[areaIndex].children[i]);
      closeDrawer();
    };
    // 选择子集工种
    const sureClassifyCurrent = i => {
      let id = classify[classifyIndex].children[i].id.toString();
      setSearchData(ClassifyPickerKey, id, classify[classifyIndex].children[i].name);
      setClassifyId(id);
      closeDrawer();
    };
    // 选择最新、推荐过滤条件
    const sureFilterCurrent = i => {
      setFilterIndex(i);
      let id = jobtype[i].type;
      setSearchData(FilterPickerKey, id, jobtype[i].name);
      closeDrawer();
    };
    // * 工种索引更换
    const changeClassifyIndex = i => {
      setclassifyIndex(i);
      setClassifyScrollTop(0);
      if (!classify[i].has_children) {
        let id = classify[i].id.toString();
        setSearchData(ClassifyPickerKey, id, classify[i].name);
        setClassifyId(id);
        closeDrawer();
      }
    };
    // 获取筛选条件数据
    Taro.useEffect(() => {
      if (filterData.isSet) {
        if (seted) return;
        setSeted(true);
        setClassify(filterData.classTree);
        setJobtype(filterData.jobListType);
      } else {
        getListFilterData().then(res => {
          dispatch(setFilter({ ...res.data, isSet: true }));
          setSeted(true);
          setClassify(res.data.classTree);
          setJobtype(res.data.jobListType);
        });
      }
    }, []);
    // * 获取城市子集数据
    Taro.useEffect(() => {
      setChildAreaList(AREAS[areaIndex].children);
    }, [areaIndex]);
    // * 接收传入的地区id
    Taro.useEffect(() => {}, [areaId]);
    return <Nerv.Fragment>
      <View className="recruit-condition-box">
        {data && data.map(item => <View className="recruit-condition-item" key={item.id} onClick={() => conditionItemClick(item.id)}>
            <View className="recruit-condition-content overwords">
              {item.text}
              <Image className="recruit-condition-select" src={IMGCDNURL + 'select.png'} />
            </View>
          </View>)}
      </View>

      
      <AtDrawer show={current === AreaPickerKey} mask onClose={() => closeDrawer()}>
        <View className="common-drawer-item">
          <ScrollView className="drawer-full-lists" scrollY>
            {AREAS.map((item, index) => <View className={classnames({
              'drawer-list-item overwords': true,
              'drawer-list-item-active': index === areaIndex
            })} key={item.id} onClick={() => changeAreaIndex(index)}>{item.name}</View>)}
          </ScrollView>
          {childAreaList.length && <ScrollView className="drawer-full-lists drawer-half-lists" scrollY scrollTop={areaScrollTop}>
              {childAreaList.map((item, i) => <View className={classnames({
              'drawer-list-item overwords': true,
              'drawer-list-item-active': item.id === areaId
            })} onClick={() => sureAreaCurrent(i)}>{item.name}</View>)}
            </ScrollView>}
        </View>
      </AtDrawer>
      
      <AtDrawer show={current === ClassifyPickerKey} mask width="80%" onClose={() => closeDrawer()}>
        <View className="common-drawer-item">
          <ScrollView className="drawer-full-lists" scrollY>
            {classify.map((item, index) => <View className={classnames({
              'drawer-list-item overwords': true,
              'drawer-list-item-active': index === classifyIndex
            })} key={item.id} onClick={() => changeClassifyIndex(index)}>{item.name}</View>)}
          </ScrollView>
          {classify.length && classify[classifyIndex].has_children && <ScrollView className="drawer-full-lists drawer-half-lists" scrollY scrollTop={classifyScrollTop}>
              {classify[classifyIndex].children.map((item, i) => <View className={classnames({
              'drawer-list-item overwords': true,
              'drawer-list-item-active': item.id.toString() === classifyId
            })} onClick={() => sureClassifyCurrent(i)}>{item.name}</View>)}
            </ScrollView>}
        </View>
      </AtDrawer>
      
      <AtDrawer show={current === FilterPickerKey} mask onClose={() => closeDrawer()}>
        <View className="common-drawer-item">
          <ScrollView className="drawer-full-lists" scrollY>
            {jobtype.map((item, index) => <View key={item.type} onClick={() => sureFilterCurrent(index)} className={classnames({
              'drawer-list-item overwords': true,
              'drawer-list-item-active': index === filterIndex
            })}>{item.name}</View>)}
          </ScrollView>
        </View>
      </AtDrawer>
    </Nerv.Fragment>;
  }

}

export default Taro.memo(RecruitCondition);