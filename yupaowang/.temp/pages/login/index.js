import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import LoginComponent from "../../components/login/index";
export default class Login extends Taro.Component {
  config = {
    navigationBarTitleText: '登录/注册',
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black'
  };

  render() {
    return <LoginComponent type={1} />;
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
Login.config = { navigationBarTitleText: '登录/注册', navigationBarBackgroundColor: '#ffffff', navigationBarTextStyle: 'black' };