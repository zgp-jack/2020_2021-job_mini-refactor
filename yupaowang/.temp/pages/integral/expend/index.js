import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { getIntegralList } from "../../../utils/request/index";
import '../index.scss';
export default class Integral extends Taro.Component {
  config = {
    navigationBarTitleText: '积分来源记录',
    enablePullDownRefresh: true
  };

  render() {
    // 初始化页面信息-消耗积分记录
    const initType = 'expend';
    // 定义请求参数
    const [data, setData] = Taro.useState({
      type: initType,
      page: 1
    });
    // 定义列表接收容器
    const [lists, setLists] = Taro.useState({
      lists: [],
      hasmore: true
    });
    // 获取列表数据
    Taro.useEffect(() => {
      if (!lists.hasmore) return;
      getIntegralList(data).then(res => {
        let len = res.list.length;
        if (len) {
          if (data.page === 1) {
            if (len < res.pageSize) setLists({ hasmore: false, lists: res.list });else setLists({ ...lists, lists: res.list });
          } else {
            setLists({ ...lists, lists: [...lists.lists, ...res.list] });
          }
        } else setLists({ ...lists, hasmore: false });
      });
    }, [data]);
    // 上拉加载下一页
    Taro.useReachBottom(() => {
      setData({ ...data, page: data.page + 1 });
    });
    // 下拉刷新当前列表
    Taro.usePullDownRefresh(() => {
      setData({ ...data, page: 1 });
    });
    return <View className="integral-container">
      <View className="integral-title">显示最近30天的积分来源记录</View>
      <View className="integral-content">
        {lists.lists.map(item => <View className="integral-list">
            <View className="integral-list-time">
              <Text className="integral-time-year">{item.year_month}</Text>
              <Text className="integral-time-day">{item.day}</Text>
            </View>
            <View className="integral-list-item">
              <View className="integral-list-title overwords">{item.headerText}</View>
              <View className="integral-list-words overwords">{item.title}</View>
              <View className="integral-item-time">时间：{item.His}<Text>{item.expend_integral_string}</Text></View>
            </View>
          </View>)}
      </View>
      {!lists.hasmore && <View className="integral-notmore">没有更多数据了</View>}
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
Integral.config = { navigationBarTitleText: '积分来源记录', enablePullDownRefresh: true };