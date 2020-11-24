import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Button, Textarea, Block } from '@tarojs/components';
import { AtInput } from 'taro-ui';
import WordsTotal from "../../components/wordstotal/index";
import WechatNotice from "../../components/wechat/index";
import ImageView from "../../components/imageview/index";
import UploadImgAction from "../../utils/upload/index";
import useCode from "../../hooks/code/index";
import Auth from "../../components/auth/index";
import { feedbackSubmissionAction } from '../../utils/request/index';
import Msg, { ShowActionModal } from "../../utils/msg/index";
import { SubscribeToNews } from "../../utils/subscribeToNews/index";
import { isVaildVal, isPhone } from "../../utils/v/index";
import './index.scss';
export default class Feedback extends Taro.Component {
  config = {
    navigationBarTitleText: '鱼泡网-意见反馈'
  };

  render() {
    const router = Taro.useRouter();
    let { username = '', phone = '' } = router.params;
    // 用户名字
    const [name, setName] = Taro.useState(username);
    // 用户电话号码
    const [uphone, setUPhone] = Taro.useState(phone);
    // 意见
    const [textarea, setTextarea] = Taro.useState('');
    // 是否显示获取验证码
    const [isShow, setIsShow] = Taro.useState(false);
    // 验证码
    const [code, setCode] = Taro.useState('');
    const [image, setImage] = Taro.useState({
      item: []
    });
    // 默认字数
    const [num, setNum] = Taro.useState(0);
    // 使用自定义验证码hook
    const { text, userGetCode, disabled } = useCode();
    // 用户上传图片
    const userUploadImg = (i = -1) => {
      UploadImgAction().then(res => {
        let imageItem = {
          url: res.url,
          httpurl: res.httpurl
        };
        if (i === -1) {
          setImage({ ...image, item: [...image.item, imageItem] });
        } else {
          image.item[i] = imageItem;
          setImage({ ...image });
        }
      });
    };
    const handlePhone = e => {
      if (e !== phone || !phone) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
      setUPhone(e);
    };
    // 提交
    const handleSubmission = () => {
      let images = image.item.map(item => item.url);
      if (!isVaildVal(textarea, 15, 500)) {
        ShowActionModal({ msg: '输入内容不少于15个字且必须包含文字' });
        return false;
      }
      if (!name) {
        ShowActionModal({ msg: '请输入联系人姓名' });
        return false;
      }
      if (!isPhone(uphone)) {
        ShowActionModal({ msg: '请输入正确手机号' });
        return false;
      }
      if (uphone !== phone && !code) {
        ShowActionModal({ msg: '请输入验证码' });
        return false;
      }
      const params = {
        images,
        content: textarea,
        username: name,
        tel: uphone,
        code: code
      };
      feedbackSubmissionAction(params).then(res => {
        if (res.errcode == 'ok') {
          SubscribeToNews('msg', () => {
            ShowActionModal({
              msg: res.errmsg,
              success: function () {
                Taro.navigateBack({
                  delta: 1
                });
              }
            });
          });
        } else {
          Msg(res.errmsg);
        }
      });
    };
    const handleTextarea = e => {
      let val = e.detail.value;
      setTextarea(val);
      setNum(val.length);
    };
    return <Nerv.Fragment>
    <Auth />
    <View className="feedback-content">
      <WechatNotice />
      <View className="feedback-content-middle">
        <View className="feedback-content-middle-box">
        <Textarea className="feedback-content-middle-textarea" value={textarea} onInput={e => handleTextarea(e)} maxlength={500} placeholder="请填写您对鱼泡的建议或意见" />
          <View className="feedback-wordsTotal">
            <WordsTotal num={num} />
        </View>
          <View className="feedback-content-middle-imgBox">
            {image.item && <ImageView images={image.item} max={9} userUploadImg={userUploadImg} />}
        </View>
      </View>
      </View>
      <View className="feedback-content-middle-from">
        <AtInput name="name" title="联系人" type="text" placeholder="请输入你的名字" value={name} onChange={e => setName(e)} />
        <AtInput name="phone" title="联系电话" type="text" placeholder="请输入手机号方便客服联系你" maxLength={11} value={uphone} onChange={e => handlePhone(e)} />
        {isShow && <View>
            <AtInput clear title="验证码" type="text" maxLength={4} placeholder="请输入你的验证码" name="code" value={code} onChange={e => setCode(e)}>
            <Button disabled={disabled} className="feedback-content-code" onClick={() => userGetCode(uphone)}>{text}</Button>
            </AtInput>
        </View>}
      </View>
      <View><Button className="feedback-content-button" onClick={handleSubmission}>反馈意见</Button></View>
    </View>
    </Nerv.Fragment>;
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
Feedback.config = { navigationBarTitleText: '鱼泡网-意见反馈' };