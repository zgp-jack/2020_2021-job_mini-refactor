import Taro from "@tarojs/taro-h5";
import { isPhone } from "../../utils/v/index";
import Msg from "../../utils/msg/index";
import { GetUserLoginPhoneCode } from "../../utils/request/index";
const title = '获取验证码';
export default function useLoginCode() {
  const [disabled, setDisabled] = Taro.useState(false);
  const [text, setText] = Taro.useState(title);
  const userGetCode = tel => {
    if (disabled) return;
    if (!isPhone(tel)) {
      Msg('请先输入正确的手机号码');
      return;
    }
    const data = { tel: tel };
    setDisabled(true);
    GetUserLoginPhoneCode(data).then(res => {
      Msg(res.errmsg, 2500);
      if (res.errcode == 'ok') {
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
      }
    });
  };
  return {
    disabled,
    text,
    userGetCode
  };
}