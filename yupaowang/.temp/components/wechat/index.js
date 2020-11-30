import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { useSelector, useDispatch } from "@tarojs/redux-h5";
import changeWechatNotice from '../../actions/wechat_notice';
import SUCCESS from '../../constants/wechat_notice';
import { getWechatNotice } from "../../utils/request/index";
import SwiperNews from "../swiper/news/index";
import { copyWechatNumber, userCallPhone } from "../../utils/helper/index";
import './index.scss';
export default class WechatNotice extends Taro.Component {
  render() {
    const [swiperNews, setSwiperNews] = Taro.useState({
      vertical: true,
      lists: []
    });
    const dispatch = useDispatch();
    const wechatNoticeData = useSelector(state => state.WechatNotice);
    // 获取微信号与公告列表
    Taro.useEffect(() => {
      if (wechatNoticeData.success) {
        setSwiperNews({ ...swiperNews, lists: wechatNoticeData.notice });
        return;
      }
      getWechatNotice().then(res => {
        res[SUCCESS] = SUCCESS;
        let action = {
          type: SUCCESS,
          data: res
        };
        setSwiperNews({ ...swiperNews, lists: res.notice });
        dispatch(changeWechatNotice(action));
      });
    }, []);
    // 复制微信号
    const userCopyWechatNumber = () => {
      copyWechatNumber(wechatNoticeData.wechat.number);
    };
    // 用户拨打电话
    const userCallPhoneAction = () => {
      userCallPhone(wechatNoticeData.phone);
    };
    return <View className="wechatinfo-container">
      <View className="wechat-container">
        <Text className="wechat-addgroup">加群：</Text>
        加工友微信号：
        <Text className="wechat-text" onClick={() => userCopyWechatNumber()}>{wechatNoticeData.wechat.number}</Text>
        <Text className="wechat-btn" onClick={() => userCopyWechatNumber()}>复制</Text>
        拉你进招工找活群。客服电话：
        <Text className="wechat-text" onClick={() => userCallPhoneAction()}>{wechatNoticeData.phone}</Text>
        <Text className="wechat-btn" onClick={() => userCallPhoneAction()}>呼叫</Text>
      </View>
      <View className="notice-container">
        <Text className="notice-tips">鱼泡资讯：</Text>
        <View className="notice-lists">
          <SwiperNews data={swiperNews} />
        </View>
      </View>
    </View>;
  }

}