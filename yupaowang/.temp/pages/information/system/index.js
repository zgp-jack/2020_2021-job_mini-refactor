import Nerv from "nervjs";
import Taro, { setNavigationBarTitle as _setNavigationBarTitle, hideNavigationBarLoading as _hideNavigationBarLoading, showNavigationBarLoading as _showNavigationBarLoading } from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { messagesTypeAction } from "../../../utils/request/index";
import { IMGCDNURL } from "../../../config/index";
import Nodata from "../../../components/nodata/index";
import { isIos } from "../../../utils/v/index";
import './index.scss';
// 默认跳转路径
const newmessageinfo = {
  1: {
    title: '系统信息',
    url: '',
    titleText: '系统提醒'
  },
  2: {
    title: '招工信息',
    url: '/pages/published/recruit/index',
    titleText: '招工提醒'
  },
  3: {
    title: '名片信息',
    url: '/pages/resume/publish/index',
    titleText: '找活提醒'
  },
  4: {
    title: '证书信息',
    url: '/pages/resume/skills/index',
    titleText: '找活提醒'
  },
  5: {
    title: '项目信息',
    url: '/pages/resume/projects/index',
    titleText: '找活提醒'
  },
  6: {
    title: '投诉招工信息',
    url: '/pages/integral/tabber/index',
    titleText: '投诉提醒'
  },
  7: {
    title: '留言信息',
    url: '/pages/feedbacklist/index',
    titleText: '我的信息-留言'
  },
  8: {
    title: '积分管理',
    url: '/pages/integral/tabber/index',
    titleText: '系统提醒'
  },
  9: {
    title: '实名认证',
    url: '/pages/realname/index',
    titleText: '系统提醒'
  },
  10: {
    title: '投诉找活信息',
    url: '/pages/integral/tabber/index',
    titleText: '投诉提醒'
  }
};
export default class System extends Taro.Component {
  config = {
    navigationBarTitleText: '',
    enablePullDownRefresh: true
  };

  render() {
    const router = Taro.useRouter();
    const type = router.params.type;
    // 初始数据
    const [data, setData] = Taro.useState({
      item: []
    });
    // 初始页数
    const [initPage, setPage] = Taro.useState({
      page: 1
    });
    // 是够能加载更多
    const [isDown, setIsDown] = Taro.useState(true);
    // 判断是否是ios
    const [ios, setIos] = Taro.useState(false);
    Taro.useEffect(() => {
      // 判断是安卓还是苹果
      setIos(isIos());
      let terminal_type = ios ? 'ios' : 'android';
      let ListType = parseInt(type);
      _setNavigationBarTitle({
        title: newmessageinfo[ListType].titleText
      });
      messagesType(parseInt(type), terminal_type);
    }, [initPage]);
    // 请求
    const messagesType = (type, terminal_type) => {
      const params = {
        type,
        page: initPage.page,
        terminal_type
      };
      messagesTypeAction(params).then(res => {
        _hideNavigationBarLoading();
        if (!res.data.lists.length) {
          setIsDown(false);
        }
        if (initPage.page === 1) {
          setData({ item: [...res.data.lists] });
        } else {
          setData({ item: [...data.item, ...res.data.lists] });
        }
      });
    };
    // 用户页面跳转
    const userRouteJump = type => {
      Taro.navigateTo({
        url: newmessageinfo[type].url
      });
    };
    // 上拉加载更多
    Taro.useReachBottom(() => {
      if (!isDown) return;
      _showNavigationBarLoading();
      setPage({ ...initPage, page: initPage.page + 1 });
    });
    return <View>
      {!data.item.length && <Nodata />}
      {data.item.map(item => <View className="system-lists" key={item.id} onClick={() => userRouteJump(item.type)}>
          <View className="system-lists-top">
            <View className="system-num">
              <Image src={item.image_url} className="system-num-img" />
              {item.read_time == 0 && <Text className="msgNumber"></Text>}
            </View>
            <View className="system-title">
              <View className="msgflex">
                <Text className="msgflex-text"> {item.type_name} </Text>
                <Image src={`${IMGCDNURL}new-center-rightarrow.png`} className="rightarrow" />
              </View>
              <View className="system-deail"> {item.description} </View>
            </View>
          </View>
          <View className="system-bottom">
            <Text className="system-deail"> 查看详情 </Text>
            <Text className="system-deail">  {item.time} </Text>
          </View>
        </View>)}
      {!isDown && data.item.length && <View className="system-noData">没有更多数据了</View>}
    </View>;
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
System.config = { navigationBarTitleText: '', enablePullDownRefresh: true };