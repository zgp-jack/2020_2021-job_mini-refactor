import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { userMessagesAction } from '../../../utils/request/index';
import { IMGCDNURL } from "../../../config/index";
import Auth from "../../../components/auth/index";
import { useSelector } from "@tarojs/redux-h5";
import Nodata from "../../../components/nodata/index";
import { isIos } from "../../../utils/v/index";
import './index.scss';
export default class Mymessage extends Taro.Component {
  config = {
    navigationBarTitleText: '鱼泡网-我的信息'
  };

  render() {
    // 默认数据
    const [data, setData] = Taro.useState({
      item: []
    });
    // 获取用户是否登录
    const login = useSelector(state => state.User['login']);
    // 判断是否是ios
    const [ios, setIos] = Taro.useState(false);
    // 数据请求
    Taro.useEffect(() => {
      if (!login) return;
      setIos(isIos());
      let type = ios ? 'ios' : 'android';
      userMessagesAction(type).then(res => {
        setData({ item: res.data.lists });
      });
    }, [login]);
    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    return <View>
      <Auth />
      {!data.item.length && <Nodata />}
      {data.item.map((item, index) => <View className="messsage-lists" key={index + index} onClick={() => userRouteJump(`/pages/information/system/index?type=${item.type}`)}>
          <View className="messsage-lists-top">
            <View className="messsage-num">
              <Image src={item.imageUrl} className="messsage-num-img" />
              {item.count > 0 && <Text className="msgNumber">{item.count > 9 ? '9+' : item.count}</Text>}
          </View>
            <View className="messsage-title">
              <View className="msgflex">
                <Text className="msgflex-text"> {item.typeName} </Text>
                <Image src={`${IMGCDNURL}new-center-rightarrow.png`} className="rightarrow" />
              </View>
              <View className="messsage-deail"> {item.description} </View>
            </View>
          </View>
          <View className="messsage-bottom">
            <Text className="messsage-deail"> 立即查看 </Text>
            <Text className="messsage-deail">  {item.timeString} </Text>
          </View>
        </View>)}
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
Mymessage.config = { navigationBarTitleText: '鱼泡网-我的信息' };