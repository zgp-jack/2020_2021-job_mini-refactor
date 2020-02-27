import Taro, { Config } from '@tarojs/taro'
import { Block } from '@tarojs/components'
import Auth from '../../components/auth'

export default function UserAuth(){
  return (
    <Block>
      <Auth />
    </Block>
  )
}

UserAuth.config = {
  navigationBarTitleText: '用户授权',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config