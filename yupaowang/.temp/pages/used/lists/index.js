import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync, hideNavigationBarLoading as _hideNavigationBarLoading, showNavigationBarLoading as _showNavigationBarLoading } from "@tarojs/taro-h5";
import { View, ScrollView, Block } from '@tarojs/components';
import Search from "../../../components/search/index";
import UsedCondition from "../../../components/condition/used/index";
import WechatNotice from "../../../components/wechat/index";
import UsedList from "../../../components/lists/used/index";
import { getFleamarketList } from "../../../utils/request/index";
import Tabbar from "../../../components/tabbar/index";
import { UserListChooseCity } from '../../../config/store';
import './index.scss';
export default class Fleamarket extends Taro.Component {
  config = {
    navigationBarTitleText: '二手交易列表',
    enablePullDownRefresh: false,
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
  };

  render() {
    // 是否已是最后一页
    const [hasMore, setHasMore] = Taro.useState(true);
    // * 获取地区选择默认数据
    let userListChooseCity = _getStorageSync(UserListChooseCity);
    // * 标记是否是在刷新状态
    const [refresh, setRefresh] = Taro.useState(false);
    // * 定义列表数组
    const [lists, setLists] = Taro.useState([]);
    // * 定义data
    const [searchData, setSearchData] = Taro.useState({
      page: 1,
      list_type: 'fleamarket',
      area_id: userListChooseCity.id,
      classify_id: '0',
      attribute_id: '',
      keywords: ''
    });
    const [inputValue, setInputValue] = Taro.useState('');
    let [listScrollTop, setListScrollTop] = Taro.useState(0);
    // * 请求列表数据
    Taro.useEffect(() => {
      getFleamarketList(searchData).then(res => {
        _hideNavigationBarLoading();
        if (!res.length) setHasMore(false);
        if (searchData.page === 1) {
          setHasMore(true);
          goToScrollTop();
          setLists([[...res]]);
        } else setLists([...lists, [...res]]);
        if (refresh) setRefresh(false);
      });
    }, [searchData]);
    // * 触底加载下一页
    const getNextPageData = () => {
      if (!hasMore) return;
      _showNavigationBarLoading();
      setSearchData({ ...searchData, page: searchData.page + 1 });
    };
    // * 监听下拉刷新
    const pullDownAction = () => {
      setRefresh(true);
      setSearchData({ ...searchData, page: 1 });
    };
    // * 监听地区选择/分类选
    const searchChange = data => {
      setSearchData({ ...searchData, ...data, page: 1 });
    };
    // * 监听搜索
    const inputSearch = value => {
      setInputValue(value);
    };
    const setSearchDatas = (key, value) => {
      searchData[key] = value;
      setSearchData({ ...searchData, page: 1 });
    };
    // scroll-view 回到顶部
    const goToScrollTop = () => {
      setListScrollTop(listScrollTop ? 0 : 0.1);
    };
    return <Nerv.Fragment>
      <View className="recruit-container">
        <View className="recruit-fiexd-header">
          <Search placeholder="跳蚤市场" value="" setRemark={value => inputSearch(value)} setSearchData={() => setSearchDatas('keywords', inputValue)} />
          <UsedCondition setSearchData={searchChange} />
        </View>
        <ScrollView className="recruit-lists-containerbox" scrollY refresherEnabled refresherTriggered={refresh} onRefresherRefresh={() => pullDownAction()} lowerThreshold={200} onScrollToLower={() => getNextPageData()} scrollTop={listScrollTop}>
          <View style={{ height: '8px' }}></View>
          <WechatNotice />
          <UsedList data={lists} hasMore={hasMore} />
        </ScrollView>
      </View>
      <Tabbar />
    </Nerv.Fragment>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
Fleamarket.config = { navigationBarTitleText: '二手交易列表', enablePullDownRefresh: false, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };