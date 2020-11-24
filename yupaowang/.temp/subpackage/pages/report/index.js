import Nerv from "nervjs";
import Taro, { makePhoneCall as _makePhoneCall } from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { SERVERPHONE } from "../../../config/index";
import './index.scss';
export default class Report extends Taro.Component {
  config = {
    navigationBarTitleText: '鱼泡网-举报骗子'
  };

  render() {
    const handleClick = () => {
      _makePhoneCall({ phoneNumber: SERVERPHONE });
    };
    return <View className="yupao-common-container">
      <View className="report-container">
        <View className="report-words-box">
          <View className="report-words-item">鱼泡网为给工友们提供一个更加安全可靠、方便快捷的招工找活平台，同时也希望为净化建筑行业出一份力，故开通举报热线：<Text className="report-words-item-text" onClick={() => {
              handleClick();
            }}>{SERVERPHONE}</Text></View>
          <View className="report-words-item">欢迎工友们举报骗人的老板或工人，我们查实后将全网公布骗子信息，同时加入骗子数据库，终身不得使用鱼泡网。若触犯法律的，鱼泡网将配合公安机关调查取证！</View>
          <View className="report-words-item">注：为了能高效的处理投诉，请工友们事先准备好聊天记录截图、录音、对方电话号 、身份证号等证据。</View>
        </View>
      </View>
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
Report.config = { navigationBarTitleText: '鱼泡网-举报骗子' };