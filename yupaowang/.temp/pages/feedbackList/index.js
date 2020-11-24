import Nerv from "nervjs";
import Taro, { hideNavigationBarLoading as _hideNavigationBarLoading, stopPullDownRefresh as _stopPullDownRefresh, showNavigationBarLoading as _showNavigationBarLoading, previewImage as _previewImage } from "@tarojs/taro-h5";
import { View, Button, Block, Text, Image } from '@tarojs/components';
import WechatNotice from "../../components/wechat/index";
import Nodata from "../../components/nodata/index";
import { feedbackAction } from "../../utils/request/index";
import Auth from "../../components/auth/index";
import { useSelector } from "@tarojs/redux-h5";
import './index.scss';
export default class FeedbackList extends Taro.Component {
  config = {
    navigationBarTitleText: '鱼泡网-意见反馈列表',
    enablePullDownRefresh: true,
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: 'dark'
  };

  render() {
    // * 标记是否是在刷新状态
    const [refresh, setRefresh] = Taro.useState(false);
    // 设置初始页面
    const [initPage, setPage] = Taro.useState({
      page: 1
    });
    // 定义数据
    const [lists, setLists] = Taro.useState({
      item: []
    });
    // 用户信息
    const [userData, setUserData] = Taro.useState({
      phone: '',
      username: ''
    });
    // 获取用户是否登录
    const login = useSelector(state => state.User['login']);
    // 是否能上拉加载更多
    const [isDown, setIsDown] = Taro.useState(true);
    // 判断是否登陆
    Taro.useEffect(() => {
      if (!login) return;
      feedbackDataAction();
    }, [login, initPage]);
    // 进来时获取数据
    const feedbackDataAction = () => {
      feedbackAction(initPage.page).then(res => {
        _hideNavigationBarLoading();
        _stopPullDownRefresh();
        if (initPage.page === 1) {
          setLists({ item: [...res.data] });
        } else {
          setLists({ item: [...lists.item, ...res.data] });
        }
        setUserData(res.memberInfo);
        if (refresh) setRefresh(false);
        if (!res.data.length) {
          setIsDown(false);
        }
      });
    };
    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    // 上拉加载更多
    Taro.useReachBottom(() => {
      if (!isDown) return;
      _showNavigationBarLoading();
      setPage({ ...initPage, page: initPage.page + 1 });
    });
    const handleImg = e => {
      _previewImage({
        current: e,
        urls: [e]
      });
    };
    // 下拉刷新
    Taro.usePullDownRefresh(() => {
      setIsDown(true);
      setPage({ page: 1 });
    });
    return <View>
      <Auth />
      <WechatNotice />
      {!lists.item.length && <Nodata text="暂无相关数据反馈" />}
      <View className="recruit-lists-containerbox">
        {lists.item && lists.item.map(item => <Nerv.Fragment key={item.id}>
            <View className="feedback-body-content">
              <View className="superior">
                <View className="superior-text">
                  <text>问</text>
                </View>
                <View className="superior-content">
                  <text>{item.content}</text>
                </View>
              </View>
              <View className="species">
                {item.images && item.images.map((v, index) => <View className="species-box" key={index + index} onClick={() => {
                handleImg(v);
              }}>
                    <Image className="species-box-img" src={v} />
                  </View>)}
              </View>
              <View className="species-text">{item.ask_time}</View>
              {item.is_answer && <View className="superior-data">
                  <View className="superiordati">答</View>
                  <View className="superioredase">
                    {item.send_msg && <Text>{item.send_msg}</Text>}
                  </View>
                </View>}
            </View>
          </Nerv.Fragment>)}
        {!isDown && lists.item.length && <View className="feedback-noData">没有更多数据了</View>}
      </View>
      <View className="feedback-bttonBox">
        <Button className="feedback-bttonBox-botton" onClick={() => userRouteJump(`/pages/feedback/index?username=${userData.username || ''}&phone=${userData.phone || ''}`)}>我要提意见</Button>
      </View>
    </View>;
  }

}
FeedbackList.config = { navigationBarTitleText: '鱼泡网-意见反馈列表', enablePullDownRefresh: true, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: 'dark' };