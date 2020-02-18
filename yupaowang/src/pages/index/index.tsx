import Taro, { Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Tabbar from '../../components/tabbar'
import { HOME, RECRUIT, RESUME, MEMBER } from '../../constants/tabbar'
import { useSelector } from '@tarojs/redux'
import Home from '../home'
import Recruit from '../recruit'
import Resume from '../resume'
import Member from '../member'
import './index.scss'

export default function Index(){

  const tabKey: string = useSelector<any, string>(state=>state.tabbar.key)

  return (
    <View>
      {tabKey === HOME && <Home />}
      {tabKey === RECRUIT && <Recruit />}
      {tabKey === RESUME && <Resume />}
      {tabKey === MEMBER && <Member /> }
      <Tabbar />
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '',
  enablePullDownRefresh: true,
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white'
} as Config
