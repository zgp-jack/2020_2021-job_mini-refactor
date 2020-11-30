import Taro from "@tarojs/taro-h5";
import { isPhone } from "../../utils/v/index";
import Msg, { ShowActionModal } from "../../utils/msg/index";
import { getUserPhoneCode } from "../../utils/request/index";
// 用户获取验证码
export const SendTypeHave = 'have';
export const SendTypeNo = 'no';
const title = '获取验证码';
export default function useCode(type) {
  const [disabled, setDisabled] = Taro.useState(false);
  const sendType = type === false ? SendTypeNo : SendTypeHave;
  const [text, setText] = Taro.useState(title);
  const userGetCode = tel => {
    if (disabled) return;
    if (!isPhone(tel)) {
      Msg('请先输入正确的手机号码');
      return;
    }
    const data = { tel: tel, sendType: sendType };
    setDisabled(true);
    getUserPhoneCode(data).then(res => {
      if (res.errcode == 'ok') {
        Msg(res.errmsg, 2500);
        let t = res.refresh || 60;
        setText(t + 's后重新获取');
        let timer = setInterval(() => {
          t--;
          if (t === 0) {
            setDisabled(false);
            clearInterval(timer);
            setText(title);
            return false;
          }
          setText(t + 's后重新获取');
        }, 1000);
      } else {
        ShowActionModal({ msg: res.errmsg });
      }
    });
  };
  return {
    disabled,
    text,
    userGetCode
  };
}