import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { Block } from '@tarojs/components';
import Auth from "../../components/auth/index";
export default class UserAuth extends Taro.Component {
  config = {
    navigationBarTitleText: '用户授权',
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
  };

  render() {
    return <Nerv.Fragment>
      <Auth page={true} />
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
UserAuth.config = { navigationBarTitleText: '用户授权', navigationBarBackgroundColor: '#0099ff', navigationBarTextStyle: 'white', backgroundTextStyle: "dark" };