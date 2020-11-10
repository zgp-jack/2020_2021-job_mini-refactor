import Taro from '@tarojs/taro'
import LoginComponent from '../../components/login'

export default function Login(){
  return (
    <LoginComponent />
  )
}

Login.config = {
  navigationBarTitleText: '登录注册',
  navigationBarBackgroundColor: '#ffffff',
  navigationBarTextStyle: 'black',
}