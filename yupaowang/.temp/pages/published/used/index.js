import Nerv from "nervjs";
import Taro, { stopPullDownRefresh as _stopPullDownRefresh, hideNavigationBarLoading as _hideNavigationBarLoading, showNavigationBarLoading as _showNavigationBarLoading } from "@tarojs/taro-h5";
import { View, Text, Image, Block, ScrollView } from '@tarojs/components';
import { useSelector } from "@tarojs/redux-h5";
import HeaderList from './config';
import { userGetPublishedUsedLists, userChangeUsedStatus, userUpdateUsedInfo } from "../../../utils/request/index";
import classnames from 'classnames';
import Tabbar from "../../../components/tabbar/index";
import Nodata from "../../../components/nodata/index";
import './index.scss';
import Auth from "../../../components/auth/index";
import { IMGCDNURL } from "../../../config/index";
import Msg from "../../../utils/msg/index";
export default class PublishedUsed extends Taro.Component {
  config = {
    navigationBarTitleText: '我的二手交易信息',
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
  };

  render() {
    // 当前高亮key
    const [id, setId] = Taro.useState(HeaderList[0].id);
    // 是否还有下一页
    const [more, setMore] = Taro.useState(true);
    // 数据加载中
    const [loading, setLoading] = Taro.useState(false);
    // 是否下拉刷新
    const [refresh, setRefresh] = Taro.useState(false);
    // 已发布二手列表
    const [lists, setLists] = Taro.useState([]);
    // 审核中提示语
    const [checktips, setChecktip] = Taro.useState('提示：人工审核，该信息仅自己可见。');
    // 获取用户信息
    const user = useSelector(state => state.User);
    const [searchData, setSearchData] = Taro.useState({
      mid: user.userId,
      uuid: user.uuid,
      page: 1,
      type: id
    });
    // 当redux更新后 ， 立即更新用户数据
    Taro.useEffect(() => {
      if (!user.login || loading) return;
      setSearchData({ ...searchData, mid: user.userId, uuid: user.uuid });
    }, [user]);
    // 加载数据类别
    const getPublishedUsedLists = () => {
      setLoading(true);
      userGetPublishedUsedLists(searchData).then(res => {
        if (res.errcode == 'ok') {
          let list = res.data.lists;
          let len = list.length;
          let page = searchData.page;
          setChecktip(res.data.checking_tips);
          setMore(len ? true : false);
          if (page === 1) {
            setLists(list);
          } else {
            setLists([...lists, ...list]);
          }
          if (refresh) {
            setRefresh(false);
            _stopPullDownRefresh();
            _hideNavigationBarLoading();
          }
          setLoading(false);
        } else {
          Msg(res.errmsg);
        }
      }).catch(() => {
        if (refresh) {
          setRefresh(false);
          _stopPullDownRefresh();
          _hideNavigationBarLoading();
        }
        setLoading(false);
      });
    };
    // 用户切换二手状态
    const userChangePublishedItem = key => {
      setId(key);
      setSearchData({ ...searchData, type: key, page: 1 });
    };
    Taro.useEffect(() => {
      if (!user.login) return;
      getPublishedUsedLists();
    }, [searchData]);
    // 加载下一页
    const getNextPageData = () => {
      if (!more || loading) return;
      setSearchData({ ...searchData, page: searchData.page + 1 });
    };
    // 刷新当前页
    const reloadPage = () => {
      _showNavigationBarLoading();
      setRefresh(true);
      setSearchData({ ...searchData, page: 1 });
    };
    // 停止/重新二手交易
    const userChangeUsedItemStatus = (id, i, end) => {
      userChangeUsedStatus(id).then(res => {
        Msg(res.errmsg);
        if (res.errcode == 'ok') {
          let oldlists = JSON.parse(JSON.stringify(lists));
          let item = {
            id: res.data.id,
            title: res.data.title,
            detail: res.data.detail,
            is_check: res.data.is_check,
            is_end: res.data.is_end
          };
          oldlists[i] = item;
          setLists(oldlists);
        }
      });
    };
    // 刷新置顶
    const refreshUsedInfo = (id, i) => {
      userUpdateUsedInfo(id).then(res => {
        Msg(res.errmsg);
        if (res.errcode == 'ok') {
          let oldlists = JSON.parse(JSON.stringify(lists));
          let item = oldlists[i];
          oldlists.splice(i, 1);
          oldlists.unshift(item);
          setLists(oldlists);
        }
      });
    };
    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    return <Nerv.Fragment>
    <Auth />
    <View className="user-published-container">
      <View className="user-published-header">
        {HeaderList.map(item => <View onClick={() => userChangePublishedItem(item.id)} className={classnames({
            'user-published-header-item': true,
            'user-published-header-item-active': id === item.id
          })}>
            <Text className="published-item-title">{item.title}</Text>
          </View>)}
      </View>
      <ScrollView className="user-published-body" scrollY refresherEnabled refresherTriggered={refresh} onRefresherRefresh={() => reloadPage()} lowerThreshold={200} onScrollToLower={() => getNextPageData()}>
        {lists.map((item, index) => <View className="user-published-item" key={item.id}>
            {item.is_check == '1' && <Image className="published-status-img" src={IMGCDNURL + 'published-recruit-checking.png'} />}
            {item.is_check == '0' && <Image className="published-status-img" src={IMGCDNURL + 'published-recruit-nopass.png'} />}
            {item.is_end == '2' && <Image className="published-status-img" src={IMGCDNURL + 'mini-used-endicon.png'} />}
            <View onClick={() => userRouteJump(`/pages/detail/info/index?id=${item.id}`)}>
              <View className="user-published-title overwords">{item.title}</View>
              <View className="user-published-content">{item.detail}</View>
            </View>
            <View className="user-published-footer">
              {item.is_check == '1' ? <View className="published-ischeking">
                  <Image className="published-checking-img" src={IMGCDNURL + 'published-info.png'} />
                  {checktips}
                </View> : <Nerv.Fragment>
                    <View className="user-published-footer-item" onClick={() => userRouteJump(`/pages/used/publish/index?id=${item.id}`)}>修改</View>
                  {item.is_check == '2' && <Nerv.Fragment>
                    <View className="user-published-footer-item" onClick={() => userChangeUsedItemStatus(item.id, index, item.is_end)}>{item.is_end == '2' ? '重新交易' : '停止交易'}</View>
                    {item.is_end != '2' && <View className="user-published-footer-item" onClick={() => refreshUsedInfo(item.id, index)}>刷新置顶</View>}
                  </Nerv.Fragment>}
                </Nerv.Fragment>}
            </View>
          </View>)}
        {!more && searchData.page > 1 && <View className="showMore">没有更多数据了</View>}
        {!lists.length && <View className="user-published-nodata">
            <Nodata />
          </View>}
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
PublishedUsed.config = { navigationBarTitleText: '我的二手交易信息', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };