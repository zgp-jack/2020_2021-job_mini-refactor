import Nerv from "nervjs";
import Taro, { makePhoneCall as _makePhoneCall } from "@tarojs/taro-h5";
import { View, Navigator, Text } from '@tarojs/components';
import { VERSION, SERVERPHONE } from "../../../config/index";
import './index.scss';
export default class About extends Taro.Component {
  render() {
    return <View className="home-about">
      <View className="home-about-navlist clearfix">
        <Navigator className="about-navlist-item" url="/subpackage/pages/about/index" open-type="navigate">关于我们</Navigator>
        <Navigator className="about-navlist-item" url="/subpackage/pages/course/index" open-type="navigate">使用教程</Navigator>
        <Navigator className="about-navlist-item" url="/subpackage/pages/report/index" open-type="navigate">举报骗子</Navigator>
        <Text className="about-navlist-item" onClick={() => {
          _makePhoneCall({ phoneNumber: SERVERPHONE });
        }}>联系我们</Text>
      </View>
      <View className="home-about-icp">©2017-{new Date().getFullYear()} 版权所有 粤ICP备17088633号-1</View>
      <View className="home-about-version">版本号：{VERSION}</View>
    </View>;
  }

}