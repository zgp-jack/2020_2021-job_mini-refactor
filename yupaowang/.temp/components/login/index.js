import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync, setStorageSync as _setStorageSync } from "@tarojs/taro-h5";
import { View, Button, Input } from '@tarojs/components';
import classnames from 'classnames';
import { useDispatch } from "@tarojs/redux-h5";
import useLoginCode from "../../hooks/logincode/index";
import { isPhone } from "../../utils/v/index";
import Msg from "../../utils/msg/index";
import { setUserInfo } from '../../actions/user';
import { UserInfo, REFID } from '../../config/store';
import { INDEXPATH } from "../../config/index";
import { userAccountLogin, userTelCodeLogin } from "../../utils/request/index";
import './index.scss';
export default class LoginComponent extends Taro.Component {
  render() {
    const { type = 2 } = this.props;

    const dispatch = useDispatch();
    // 声明登录方式变量
    const codeLogin = 'code-login';
    const telLogin = 'tel-login';
    // 登录方式索引
    const [current, setCurrent] = Taro.useState(codeLogin);
    // 用户手机号
    const [phone, setPhone] = Taro.useState('');
    // 验证码
    const [code, setCode] = Taro.useState('');
    // 密码
    const [password, setPassword] = Taro.useState('');
    // 使用自定义验证码hook
    const { text, userGetCode, disabled } = useLoginCode();
    const userLoginAction = () => {
      if (!isPhone(phone)) {
        Msg('请输入正确的手机号');
        return;
      }
      const data = { tel: phone };
      if (current === codeLogin) {
        if (!code) {
          Msg('请输入验证码');
          return;
        }
        data.code = code;
        let refId = _getStorageSync(REFID);
        if (refId) data.refid = refId;
        userTelCodeLogin(data).then(res => detailUserLoginInfo(res));
      } else {
        if (!password) {
          Msg('请输入密码');
          return;
        }
        data.pwd = password;
        userAccountLogin(data).then(res => detailUserLoginInfo(res));
      }
    };
    // 处理登录信息
    const detailUserLoginInfo = res => {
      if (res.errcode == 'ok') {
        const user = {
          userId: res.result.uid,
          token: res.result.token.token,
          tokenTime: res.result.token.time,
          uuid: res.result.uuid,
          login: true
        };
        _setStorageSync(UserInfo, user);
        dispatch(setUserInfo(user));
        if (type === 1) Taro.navigateBack();
      } else {
        Msg(res.errmsg);
      }
    };
    // 返回上一页
    const userNacBack = () => {
      let pages = Taro.getCurrentPages();
      if (pages.length) {
        Taro.navigateBack();
        return;
      }
      Taro.reLaunch({ url: INDEXPATH });
    };
    return <View className="login-container">
      <View className="login-header">
        <View className={classnames({
          'login-header-item': true,
          'login-header-item-active': current === codeLogin
        })} onClick={() => setCurrent(codeLogin)}>验证码登录</View>
        <View className={classnames({
          'login-header-item': true,
          'login-header-item-active': current === telLogin
        })} onClick={() => setCurrent(telLogin)}>账号登录</View>
      </View>
      <View className="login-body">
        <View className="login-input-item">
          <View className="input-item-title">手机号</View>
          <View className="input-item-form">
            <Input className="input-item-text" placeholder="请输入手机号码" type="number" maxLength={11} onInput={e => setPhone(e.detail.value)} />
          </View>
        </View>
        {current === codeLogin && <View className="login-input-item">
            <View className="input-item-title">验证码</View>
            <View className="input-item-form input-item-code">
              <Input className="input-item-text" placeholder="请输入验证码" onInput={e => setCode(e.detail.value)} maxLength={8} />
              <Button disabled={disabled} className="input-item-codebtn" onClick={() => userGetCode(phone)}>{text}</Button>
            </View>
          </View>}
        {current === telLogin && <View className="login-input-item">
            <View className="input-item-title">账号密码</View>
            <View className="input-item-form">
              <Input password className="input-item-text" placeholder="请输入账号密码" onInput={e => setPassword(e.detail.value)} />
            </View>
          </View>}
      </View>
      <View className="login-btns">
        <View className="login-btn" onClick={() => userNacBack()}>取消</View>
        <View className="login-btn" onClick={() => userLoginAction()}>登录</View>
      </View>
    </View>;
  }

}