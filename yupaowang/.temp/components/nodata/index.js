import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Image } from '@tarojs/components';
import { IMGCDNURL } from "../../config/index";
import './index.scss';
export default class Nodata extends Taro.Component {
  render() {
    const { text = '暂无数据' } = this.props;

    return <View className="nodata-container">
      <Image className="nodata-img" src={IMGCDNURL + 'nodata.png'}></Image>
      <View className="nodata-text">{text}</View>
    </View>;
  }

}