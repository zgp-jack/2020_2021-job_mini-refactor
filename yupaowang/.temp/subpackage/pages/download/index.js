import Nerv from "nervjs";
import Taro, { setClipboardData as _setClipboardData, hideToast as _hideToast, showModal as _showModal } from "@tarojs/taro-h5";
import { View, Video, Text, Image } from '@tarojs/components';
import { IMGCDNURL, ALIYUNCDN, DownloadApp } from "../../../config/index";
import './index.scss';
export const Img = IMGCDNURL + 'downloadapp-topbg.png';
export default class DownloadPage extends Taro.Component {
  config = {
    navigationBarTitleText: '下载鱼泡App教程',
    enablePullDownRefresh: true,
    navigationBarBackgroundColor: '#109ffe',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: 'dark'
  };

  render() {
    const handleClick = () => {
      _setClipboardData({
        data: DownloadApp,
        success() {
          _hideToast();
          _showModal({
            title: '温馨提示',
            content: '鱼泡APP下载地址已复制到粘贴板,请粘贴到浏览器中下载!',
            showCancel: false,
            success: function () {}
          });
        }
      });
    };
    return <View className="downloadAppPage-content">
      <View className="downloadAppPage-img-box">
        <Image src={`${IMGCDNURL + 'downloadapp-topbg.png'}`} className="downloadAppPage-img" onClick={handleClick} />
      </View>
      <View className="downloadAppPage-item">
        <Video className="downloadAppPage-video" src={`${ALIYUNCDN}/miniprogram/videos/download-app.mp4`}></Video>
        <Text className="downloadAppPage-text">使用教程</Text>
      </View>
      <View className="downloadAppPage-words">方法一：浏览器内下载</View>
      <View className="downloadAppPage-item">
        <Video className="downloadAppPage-video" src={`${ALIYUNCDN}/yupaoweb/miniWechat/video/downloadAppVideo.mp4`}></Video>
        <Text className="downloadAppPage-text">使用教程</Text>
      </View>
      <View className="downloadAppPage-words">方法二：关注公众号下载</View>
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
DownloadPage.config = { navigationBarTitleText: '下载鱼泡App教程', enablePullDownRefresh: true, navigationBarBackgroundColor: '#109ffe', navigationBarTextStyle: 'white', backgroundTextStyle: 'dark' };