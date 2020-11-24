import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Input } from '@tarojs/components';
import useCode from "../../../hooks/code/index";
import { userChangePhone } from "../../../utils/request/index";
import { isPhone } from "../../../utils/v/index";
import { setMemberTel } from '../../../actions/member';
import { useDispatch } from "@tarojs/redux-h5";
import './index.scss';
import Msg from "../../../utils/msg/index";
export default class UserBandPhone extends Taro.Component {
  config = {
    navigationBarTitleText: '修改手机号'
  };

  render() {
    const dispatch = useDispatch();
    const { userGetCode, text } = useCode(false);
    const [info, setInfo] = Taro.useState({
      tel: '',
      code: ''
    });
    // 用户填写表单
    const userEnterForm = (e, title) => {
      let { value } = e.detail;
      let data = JSON.parse(JSON.stringify(info));
      data[title] = value;
      setInfo(data);
    };
    // 用户更换手机号码操作
    const userChangePhoneAction = () => {
      if (!isPhone(info.tel)) {
        Msg('请先输入正确的手机号码');
        return;
      }
      if (!info.code) {
        Msg('请先输入正确的验证码');
        return;
      }
      userChangePhone(info.tel, info.code).then(res => {
        Msg(res.errmsg);
        if (res.errcode == 'ok') {
          dispatch(setMemberTel(info.tel));
          Taro.navigateBack();
        }
      }).catch(() => {
        Msg('网络错误，发送失败');
      });
    };
    return <View className="userchangephone-container">
      <View className="userchangephone-body">
        <View className="publish-list-item">
          <Text className="pulish-list-title">手机号</Text>
          <Input className="publish-list-input" type="number" placeholder="请输入您的手机号" value={info.tel} maxLength={11} onInput={e => userEnterForm(e, 'tel')} />
        </View>
        <View className="publish-list-item publish-list-item-code">
          <Text className="pulish-list-title">验证码</Text>
          <Input className="publish-list-input" type="number" placeholder="请输入验证码" value={info.code} onInput={e => userEnterForm(e, 'code')} />
          <View className="publish-code-btn" onClick={() => userGetCode(info.tel)}>{text}</View>
        </View>
      </View>
      <View className="user-submit-btn" onClick={() => userChangePhoneAction()}>确定更换</View>
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
UserBandPhone.config = { navigationBarTitleText: '修改手机号' };