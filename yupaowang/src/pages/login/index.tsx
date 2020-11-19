import Taro from '@tarojs/taro'
import LoginComponent from '../../components/login'

export default function Login(){
  return (
    <LoginComponent type={1} />
  )
}

Login.config = {
  navigationBarTitleText: '登录/注册',
  navigationBarBackgroundColor: '#ffffff',
  navigationBarTextStyle: 'black',
}