import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { getIntegralList } from "../../../utils/request/index";
import '../index.scss';
export default class Source extends Taro.Component {
  render() {
    // 初始化页面信息-积分来源记录
    const initType = 'source';
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
      1111
      
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
// Source.config = {
//   navigationBarTitleText: '积分来源记录',
//   enablePullDownRefresh: true
// } as Config