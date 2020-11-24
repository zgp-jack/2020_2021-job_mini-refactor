import Nerv from "nervjs";
import Taro, { navigateToMiniProgram as _navigateToMiniProgram } from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import FastBarConfig from './config';
import './index.scss';
export default class Projects extends Taro.Component {
  render() {
    const FastbarAction = item => {
      if (item.target === 'miniProgram') {
        // * 如果是小程序就跳转其他小程序
        _navigateToMiniProgram({ appId: item.appid, fail: err => console.log(err) });
      } else if (item.isout) {
        // * 不在TabBar组件中就跳转其他页面
        Taro.navigateTo({ url: item.url });
      }
    };
    return <View className="home-fastbar-container clearfix">
      {FastBarConfig.map((item, index) => <View className="home-fastbar-item" key={index + item.appid} onClick={() => FastbarAction(item)}>
          <Image className="home-fastbar-img" src={item.img} />
          <Text className="home-fastbar-text overwords">{item.text}</Text>
        </View>)}
    </View>;
  }

}