import Nerv from "nervjs";
import Taro, { pageScrollTo as _pageScrollTo, hideNavigationBarLoading as _hideNavigationBarLoading } from "@tarojs/taro-h5";
import { View, Text, Image, ScrollView } from '@tarojs/components';
import classnames from 'classnames';
import { newsTypesAction, newListAction } from '../../../utils/request/index';
import Nodata from "../../../components/nodata/index";
import './index.scss';
export default class InvitePage extends Taro.Component {
  config = {
    navigationBarTitleText: '鱼泡网-新闻资讯',
    enablePullDownRefresh: true,
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: 'dark'
  };

  render() {
    // 默认table
    const [current, setCurrent] = Taro.useState('-1');
    // 页数
    const [initPage, setInitPage] = Taro.useState({
      page: 1
    });
    //  没有数据显示内容
    const [noData, setNodata] = Taro.useState('暂无相关资讯');
    // 数据
    const [list, setList] = Taro.useState([]);
    // 能否再上拉
    const [pull, setPull] = Taro.useState(true);
    // 设置滚动未知
    const [scrollLeft, setScrollLeft] = Taro.useState(0);
    const handleTable = (id, name, index) => {
      setScrollLeft(index * 80);
      setCurrent(id);
      setNodata(name);
      setInitPage({ page: 1 });
      setPull(true);
      _pageScrollTo({
        scrollTop: 0
      });
    };
    const [tab, setTab] = Taro.useState({
      item: []
    });
    // 获取新闻类型
    Taro.useEffect(() => {
      newsTypesAction().then(res => {
        setTab({ item: res.data });
      });
    }, []);
    // 获取新闻列表
    Taro.useEffect(() => {
      const params = {
        page: initPage.page,
        newsType: current
      };
      newListAction(params).then(res => {
        _hideNavigationBarLoading();
        if (!res.data.length) {
          setPull(false);
        }
        if (params.page === 1) {
          setList([...res.data]);
        } else {
          setList([...list, ...res.data]);
        }
      });
    }, [current, initPage]);
    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    Taro.useReachBottom(() => {
      if (pull) {
        setInitPage({ page: initPage.page + 1 });
      }
    });
    return <View>
      <ScrollView className="invite-ScrollView" scrollX upperThreshold={50} lowerThreshold={50} enableFlex scrollLeft={scrollLeft} scrollWithAnimation onScroll={e => {
        console.log(e);
      }}>
        <View className="invite-tab">
          {tab.item && tab.item.map((item, i) => <View key={item.index} className="invite-tab-box" onClick={() => {
            handleTable(item.index, item.name, i);
          }}>
              <View className={classnames({
              'invite-tab-active': item.index === current
            })}>
                {item.name}
              </View>
            </View>)}
        </View>
      </ScrollView>
      {!list.length && <Nodata text={noData} />}
      <View className="invite-content-box">
        {list && list.map(v => <View key={v.id} className="invite-content" onClick={() => userRouteJump(`/pages/static/notice/index?id=${v.id}`)}>
            <View>
              <Image className="invite-content-img" src={v.cover_img} />
            </View>
            <View className="invite-content-right">
              <View className="invite-content-title">{v.title}</View>
              <View className="invite-content-desc">{v.desc}</View>
              <View className="invite-content-footer">
                <Text>{v.author}</Text>
                <Text>{v.time}</Text>
              </View>
            </View>
          </View>)}
      </View>
      {list.length && !pull && <View className="invite-nodata">没有更多数据了</View>}
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
InvitePage.config = { navigationBarTitleText: '鱼泡网-新闻资讯', enablePullDownRefresh: true, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: 'dark' };