import Nerv from "nervjs";
import Taro, { setNavigationBarTitle as _setNavigationBarTitle, setStorageSync as _setStorageSync, setNavigationBarColor as _setNavigationBarColor } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import Tabbar from "../../components/tabbar/index";
import { HOME, RECRUIT, RESUME, MEMBER, typeInTabbar } from '../../constants/tabbar';
import IndexTabbarConfig from '../../config/pages/index';
import { useSelector, useDispatch } from "@tarojs/redux-h5";
import { changeTabbar } from '../../actions/tabbar';
import Home from "../home/index";
import { INDEXPATH } from "../../config/index";
import { getUserShareMessage } from "../../utils/helper/index";
import Recruit from "../recruit/lists/index";
import Resume from "../resume/lists/index";
import Member from "../member/index";
import { REFID } from '../../config/store';
import './index.scss';
export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: '',
    enablePullDownRefresh: false,
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
  };

  render() {
    const dispatch = useDispatch();
    // 初始化页面参数
    const router = Taro.useRouter();
    const { type = RECRUIT, refId = '' } = router.params;
    // 获取当前tabbar高亮值
    const tabKey = useSelector(state => state.tabbar.key);
    // 获取当前的用户id
    const userId = useSelector(state => state.User.userId);
    // 标记是否触发下拉刷新
    const [pulldown, setPulldown] = Taro.useState(0);
    // 会员中心是当前页面的一个组件 所以没有判断页面显示的功能 这里传值给会员中心促使改变刷新数据
    const [showIndex, setShowIndex] = Taro.useState(0);
    // 监听页面下拉刷新
    Taro.usePullDownRefresh(() => {
      setPulldown(pulldown + 1);
    });
    // 设置当前页面分享
    Taro.useShareAppMessage(() => {
      let path = `${INDEXPATH}?type=${tabKey}`;
      return {
        ...getUserShareMessage(),
        path: userId ? `${path}&refId=${userId}` : path
      };
    });
    // 当页面显示的 时候 触发
    Taro.useDidShow(() => {
      if (tabKey) {
        _setNavigationBarTitle({ title: IndexTabbarConfig[tabKey].navigationBarTitleText });
      }
      setShowIndex(showIndex + 1);
    });
    // 进入页面的时候 ，如果有邀请人，我们将邀请人id存入缓存中， 等待新用户授权时使用
    Taro.useEffect(() => {
      if (refId) _setStorageSync(REFID, refId);
    }, [refId]);
    // 初始化底部显示页面
    Taro.useEffect(() => {
      if (typeInTabbar(type)) {
        dispatch(changeTabbar(type));
      } else {
        dispatch(changeTabbar(RECRUIT));
      }
    }, [type]);
    // 初始化页面配置信息
    Taro.useEffect(() => {
      if (!tabKey) return;
      let data = IndexTabbarConfig[tabKey];
      _setNavigationBarTitle({ title: data.navigationBarTitleText });
      _setNavigationBarColor({
        backgroundColor: data.navigationBarBackgroundColor || '#0099ff',
        frontColor: '#ffffff'
      });
    }, [tabKey]);
    return <View>
      {tabKey === HOME && <Home homeIndex={showIndex} />}
      {tabKey === RECRUIT && <Recruit />}
      {tabKey === RESUME && <Resume />}
      {tabKey === MEMBER && <Member memberIndex={showIndex} />}
      <Tabbar notredirect />
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
Index.config = { navigationBarTitleText: '', enablePullDownRefresh: false, navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };