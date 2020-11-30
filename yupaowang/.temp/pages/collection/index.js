import Nerv from "nervjs";
import Taro, { setNavigationBarTitle as _setNavigationBarTitle } from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import RecruitList from "./recruitList/index";
import ResumeList from "./resumeList/index";
import tab from './config';
import classnames from 'classnames';
import Auth from "../../components/auth/index";
import './index.scss';
export default class Collection extends Taro.Component {
  config = {
    navigationBarTitleText: '我收藏的招工信息',
    enablePullDownRefresh: true,
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
  };

  render() {
    // 默认table
    const [current, setCurrent] = Taro.useState(1);
    const [bottom, setBottom] = Taro.useState(0);
    const [initPage, setInitPage] = Taro.useState(0);
    const handleTable = type => {
      setBottom(0);
      setInitPage(0);
      setCurrent(type);
      _setNavigationBarTitle({ title: tab[type - 1].title });
    };
    // 是否加载更多
    Taro.useReachBottom(() => {
      setBottom(bottom + 1);
    });
    // 下拉刷新
    Taro.usePullDownRefresh(() => {
      setInitPage(initPage + 1);
    });
    return <View className="collection-content">
      <Auth />
      <View className="collection-tab">
        {tab.map(item => <View className="collection-tab-box" key={item.id} onClick={() => handleTable(item.id)}>
            <View className="collection-tab-content">
            <View className={classnames({
              'collection-tab-border': item.id === current,
              'collection-tab-content': true
            })}>
              <View className="collection-tab-img">
                  {current === 1 ? <Image className="collect-tab-icon" src={item.icon}></Image> : <Image className="collect-tab-icon" src={item.activeIcon}></Image>}
              </View>
              <Text className={classnames({
                'collection.active-text': item.id === current
              })}>{item.text}</Text>
            </View>
            </View>
          </View>)}
      </View>
      {current === 1 ? <RecruitList bottom={bottom} initPage={initPage} /> : <ResumeList bottom={bottom} initPage={initPage} />}
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
Collection.config = { navigationBarTitleText: '我收藏的招工信息', enablePullDownRefresh: true, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };