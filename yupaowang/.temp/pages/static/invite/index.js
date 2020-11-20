import Nerv from "nervjs";
import Taro, { setClipboardData as _setClipboardData, hideToast as _hideToast } from "@tarojs/taro-h5";
import { View, Button, Image, Input } from '@tarojs/components';
import { IMGCDNURL, ISCANSHARE } from "../../../config/index";
import { useSelector } from "@tarojs/redux-h5";
import { getUserInviteLink } from "../../../utils/request/index";
import { ShowActionModal } from "../../../utils/msg/index";
import Auth from "../../../components/auth/index";
import './index.scss';
export default class Invite extends Taro.Component {
  config = {
    navigationBarTitleText: "邀请好友"
  };

  render() {
    // 用户邀请链接
    const [link, setLink] = Taro.useState('');
    // 获取用户是否登录
    const login = useSelector(state => state.User['login']);
    // 初始化用户链接
    Taro.useEffect(() => {
      if (!login) return;
      getUserInviteLink().then(res => {
        if (res.errcode == 'ok') setLink(res.link);else ShowActionModal({ msg: res.errmsg, success: () => Taro.navigateBack() });
      });
    }, [login]);
    // 用户复制邀请链接
    const copyUserInviteLink = () => {
      _setClipboardData({
        data: link,
        success: () => {
          _hideToast();
          ShowActionModal({
            title: '恭喜您',
            msg: '您的邀请链接已复制到粘贴板，赶快去邀请好友吧！'
          });
        }
      });
    };
    return <View>
      <Auth />
      <View className="invite-container">
        {ISCANSHARE && <View className="invite-item invite-item-icon">
          <View className="invite-header">
            <Image className="invite-img" src={IMGCDNURL + 'invite-way1.png'} />
            <View className="invite-text">点击右上角三个点，或点击下方(点击分享)按钮，分享鱼泡网到微信建筑群、焊工群、微信好友，工友点击你分享的链接来到鱼泡网。</View>
          </View>
          <Button className="invite-btn" openType="share">点击分享</Button>
        </View>}
        <View className="invite-item">
          <View className="invite-header">
            <Image className="invite-img" src={IMGCDNURL + 'invite-way2.png'} />
            <View className="invite-text">点击下方（复制专属邀请链接），发到QQ群、论坛、贴吧，工友通过你的专享邀请链接来到鱼泡网。</View>
            <Input className="invite-input" value={link} />
          </View>
          <Button className="invite-btn" onClick={() => copyUserInviteLink()}>复制专属邀请链接</Button>
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
Invite.config = { navigationBarTitleText: "邀请好友" };