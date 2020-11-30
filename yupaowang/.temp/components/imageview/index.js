import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Image, Text } from '@tarojs/components';
import './index.scss';
export default class ImageView extends Taro.Component {
  render() {
    const { images, userUploadImg, max, userDelImg } = this.props;

    let bool = userDelImg ? true : false;
    return <View className="uploads-imgs-lists clearfix">
      
      {images && images.map((item, index) => <View className="uploads-img-item" key={index + 'a'} onClick={() => userUploadImg && userUploadImg(index)}>
          <View className="uploads-img-imgbox">
            <Image className="uploads-item-img" src={item.httpurl} />
            {bool && <View className="uploads-img-del" onClick={e => {
            e.stopPropagation();userDelImg && userDelImg(index);
          }}>
                <Text className="at-icon at-icon-trash"></Text>
              </View>}
          </View>
        </View>)}
      
      {max > images.length && <View className="uploads-img-item">
          <View className="uploads-img-imgbox uploads-img-imgbox-active" onClick={() => userUploadImg && userUploadImg(-1)}></View>
        </View>}
    </View>;
  }

}
ImageView.options = {
  addGlobalClass: true
};