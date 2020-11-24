import Nerv from "nervjs";
import Taro, { previewImage as _previewImage } from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import './index.scss';
export default class Imglist extends Taro.Component {
  render() {
    const { data } = this.props;

    // 需要预览的图片列表
    const imgs = ['http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg', 'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg', 'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg', 'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg', 'http://cdn.yupao.com/miniprogram/images/20201019/1603091875eUvb2r.jpg'];
    // 用户点击图片预览
    const userPreViewImg = () => {
      _previewImage({
        current: data[0],
        urls: data
      });
    };
    return <View className="imgslist-container">
      {data && data.map((item, index) => <Image className="imgslist-item" src={item} key={index + index} onClick={() => userPreViewImg()} />)}
    </View>;
  }

}