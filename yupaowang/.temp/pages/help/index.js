import Nerv from "nervjs";
import Taro, { hideNavigationBarLoading as _hideNavigationBarLoading, showNavigationBarLoading as _showNavigationBarLoading } from "@tarojs/taro-h5";
import { View, Text, ScrollView } from '@tarojs/components';
import { helpAction, feedbackAction } from "../../utils/request/index";
import { AtAccordion, AtList } from 'taro-ui';
import { useSelector } from "@tarojs/redux-h5";
import Nodata from "../../components/nodata/index";
import { isIos } from "../../utils/v/index";
import './index.scss';
export default class Help extends Taro.Component {
  config = {
    navigationBarTitleText: '帮助中心'
  };

  render() {
    // 获取用户是否登录
    const login = useSelector(state => state.User['login']);
    // * 标记是否是在刷新状态
    const [refresh, setRefresh] = Taro.useState(false);
    // 设置默认页面
    const [initPage, setinitPage] = Taro.useState({
      page: 1
    });
    const [data, setData] = Taro.useState({
      item: []
    });
    // 用户数据
    const [userData, setUserData] = Taro.useState({
      phone: '',
      username: ''
    });
    // 是否能下啦加载更多
    const [isDown, setIsDown] = Taro.useState(true);
    // 判断是否是ios
    const [ios, setIos] = Taro.useState(false);
    // 请求数据
    // 列表数据
    Taro.useEffect(() => {
      // 判断是安卓还是苹果
      setIos(isIos());
      let terminal_type = ios ? 'ios' : 'android';
      helpAction(initPage.page, terminal_type).then(res => {
        _hideNavigationBarLoading();
        for (let i = 0; i < res.lists.length; i++) {
          res.lists[i].isShow = false;
          res.lists[i].id = Math.random();
        }
        if (initPage.page === 1) {
          setData({ item: [...res.lists] });
        } else {
          setData({ item: [...data.item, ...res.lists] });
        }
        if (refresh) setRefresh(false);
        if (res.lists.length === 0) {
          setIsDown(false);
        }
      });
    }, [initPage]);
    // 用户信息
    Taro.useEffect(() => {
      if (!login) return;
      feedbackAction(1).then(res => {
        setUserData(res.memberInfo);
      });
    }, []);
    // 开关
    const handleShow = id => {
      const newData = JSON.parse(JSON.stringify(data));
      newData.item.forEach(v => {
        let flag = v.id === id && !v.isShow;
        v.isShow = flag ? true : false;
      });
      setData(newData);
    };
    // * 触底加载下一页
    const getNextPageData = () => {
      if (!isDown) return;
      _showNavigationBarLoading();
      setinitPage({ ...initPage, page: initPage.page + 1 });
    };
    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    // * 监听下拉刷新
    const pullDownAction = () => {
      setRefresh(true);
      setIsDown(true);
      setinitPage({ page: 1 });
    };
    return <View className="help-content">
      {!data.item.length && <Nodata />}
      <ScrollView className="recruit-lists-containerbox" scrollY lowerThreshold={200} refresherEnabled refresherTriggered={refresh} onRefresherRefresh={() => pullDownAction()} onScrollToLower={() => getNextPageData()}>
        <View className="topNoneBox"></View>
          {data.item.map(item => <AtAccordion icon={{ value: 'help', color: '#09f', size: '15' }} key={item.id} open={item.isShow} onClick={() => {
          handleShow(item.id);
        }} title={item.question}>
              <AtList hasBorder={false}>
                <Text className="help-text">{item.answer}</Text>
              </AtList>
            </AtAccordion>)}
        {!isDown && data.item.length && <View className="help-noData">没有更多数据了</View>}
        <View className="BootomNoneBox"></View>
      </ScrollView>
      <View className="help-button-box" onClick={() => userRouteJump(`/pages/feedback/index?username=${userData.username || ''}&phone=${userData.phone || ''}`)}><Text className="help-button">意见反馈</Text></View>
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
Help.config = { navigationBarTitleText: '帮助中心' };