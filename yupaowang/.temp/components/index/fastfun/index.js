import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image, Text } from '@tarojs/components';
import Config from './config';
import './index.scss';
export default class Fastfun extends Taro.Component {
  render() {
    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    return <View className="home-fastfun clearfix">
      {Config.map((item, index) => <View className="home-fastfun-item" key={index + index} onClick={() => userRouteJump(item.url)}>
          {ISWEIXIN && <Image className="home-fastfun-img" src={item.img} />}
          <Text className="home-fastfun-text">{item.text}</Text>
        </View>)}
      {!ISWEIXIN && <View className="home-fastfun-item" onClick={() => userRouteJump(`/pages/used/lists/index`)}>
        <Text className="home-fastfun-text">二手交易</Text>
      </View>}
    </View>;
  }

}