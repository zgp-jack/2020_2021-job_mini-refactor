import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync, hideNavigationBarLoading as _hideNavigationBarLoading } from "@tarojs/taro-h5";
import { View, ScrollView } from '@tarojs/components';
import Search from "../../../components/search/index";
import ResumeCondition from "../../../components/condition/resume/index";
import WechatNotice from "../../../components/wechat/index";
import ResumeList from "../../../components/lists/resume/index";
import { AreaPickerKey, ClassifyPickerKey, MemberPickerKey, ResumeFilterPickerKey } from '../../../config/pages/lists';
import { UserListChooseCity } from '../../../config/store';
import { getResumeList } from "../../../utils/request/index";
import { PUBLISHRESUME } from "../../../config/index";
import './index.scss';
import Msg from "../../../utils/msg/index";
export default class ResumeLists extends Taro.Component {
  config = {
    navigationBarTitleText: '工人找活列表',
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
  };

  render() {
    // 设置字段默认值
    const hasSortFlag = '1';
    const hasTime = '1';
    const hasTop = '1';
    const lastNormalPos = '0';
    const lastSortFlagPos = '0';
    const lastTimePos = '0';
    // * 获取选择城市缓存
    let userListChooseCity = _getStorageSync(UserListChooseCity);
    // * 筛选数据
    const DEFAULT_CONDITION = [{ id: AreaPickerKey, text: userListChooseCity ? userListChooseCity.name : '全国' }, { id: ClassifyPickerKey, text: '工种' }, { id: MemberPickerKey, text: '队伍' }, { id: ResumeFilterPickerKey, text: '推荐' }];
    // 是否还有下一页
    const [hasMore, setHasMore] = Taro.useState(true);
    // 滚动条高度
    const [scrollTop, setScrollTop] = Taro.useState(0);
    // 设置顶部筛选条件数据
    const [condition, setCondition] = Taro.useState(DEFAULT_CONDITION);
    // * 搜索数据 备份
    const [remark, setRemark] = Taro.useState('');
    // * 标记是否是在刷新状态
    const [refresh, setRefresh] = Taro.useState(false);
    // * 定义列表数组
    const [lists, setLists] = Taro.useState([]);
    // * 定义data
    const [searchData, setSearchData] = Taro.useState({
      page: 1,
      occupations: '',
      keywords: '',
      sort: 'newest',
      location: '',
      area_id: userListChooseCity ? userListChooseCity.id : '',
      type: ''
    });
    // 特殊字段默认值
    const normalFieldReset = {
      has_sort_flag: hasSortFlag,
      has_time: hasTime,
      has_top: hasTop,
      last_sort_flag_pos: lastSortFlagPos,
      last_normal_pos: lastNormalPos,
      last_time_pos: lastTimePos
    };
    // 单独处理特殊字段
    const [normalField, setNormalField] = Taro.useState(normalFieldReset);
    // * 请求列表数据
    Taro.useEffect(() => {
      getResumeList({ ...searchData, ...normalField }).then(res => {
        if (res.errcode == 'ok') {
          let mydata = res.data;
          if (mydata.list && mydata.list.length) {
            let { has_sort_flag = hasSortFlag, has_time = hasTime, has_top = hasTop, last_sort_flag_pos = lastSortFlagPos, last_normal_pos = lastNormalPos, last_time_pos = lastTimePos } = mydata;
            setNormalField({ has_sort_flag, has_time, has_top, last_sort_flag_pos, last_normal_pos, last_time_pos });
          }
          if (mydata.list && !mydata.list.length) setHasMore(false);
          _hideNavigationBarLoading();
          if (searchData.page === 1) setLists([[...mydata.list]]);else setLists([...lists, [...mydata.list]]);
          if (refresh) setRefresh(false);
        } else {
          Msg(res.errmsg);
        }
      });
    }, [searchData]);
    // * 监听下拉刷新
    // * 监听下拉刷新
    const pullDownAction = () => {
      setRefresh(true);
      setHasMore(true);
      setSearchData({ ...searchData, page: 1 });
    };
    // * 触底加载下一页
    const getNextPageData = () => {
      if (!hasMore) return;
      setSearchData({ ...searchData, page: searchData.page + 1 });
    };
    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    // * 更新筛选条件
    const setSearchDataAction = (type, id, text) => {
      const recondition = JSON.parse(JSON.stringify(condition));
      let i = recondition.findIndex(item => item.id === type);
      recondition[i].text = text;
      setCondition(recondition);
      setNormalField(normalFieldReset);
      if (type === ClassifyPickerKey) {
        setSearchData({ ...searchData, occupations: id, page: 1 });
      } else if (type === AreaPickerKey) {
        setSearchData({ ...searchData, area_id: id, page: 1 });
      } else if (type === ResumeFilterPickerKey) {
        setSearchData({ ...searchData, sort: id, page: 1 });
      } else if (type === MemberPickerKey) {
        setSearchData({ ...searchData, type: id, page: 1 });
      }
      goToScrollTop();
    };
    // scroll-view 回到顶部
    const goToScrollTop = () => {
      setHasMore(true);
      setScrollTop(scrollTop ? 0 : 0.1);
    };
    // 设置搜索内容
    const setSearchValData = () => {
      setNormalField(normalFieldReset);
      setSearchData({ ...searchData, keywords: remark, page: 1 });
      goToScrollTop();
    };
    const handleClickToRankRules = () => {
      Taro.navigateTo({ url: '/pages/rank-rules/index' });
    };
    return <View className="recruit-container">
      <View className="recruit-fiexd-header">
        <Search placeholder="找工人、找队伍、找班组" value="" setRemark={val => setRemark(val)} setSearchData={() => setSearchValData()} />
        <ResumeCondition data={condition} setSearchData={(type, id, text) => setSearchDataAction(type, id, text)} />
      </View>
      <ScrollView className="recruit-lists-containerbox" scrollY lowerThreshold={200} refresherEnabled scrollWithAnimation scrollTop={scrollTop} refresherTriggered={refresh} onRefresherRefresh={() => pullDownAction()} onScrollToLower={() => getNextPageData()}>
        <View style={{ height: '8px' }}></View>
        <WechatNotice />
        <ResumeList data={lists} hasMore={hasMore} />
      </ScrollView>
      
      <View className="publish-list-btn" onClick={() => userRouteJump(PUBLISHRESUME)}>发布找活</View>
    </View>;
  }

}
ResumeLists.config = { navigationBarTitleText: '工人找活列表', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };