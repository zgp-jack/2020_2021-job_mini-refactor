import Taro, { Config, useState, usePullDownRefresh, useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Tabbar from '../../components/tabbar'
import { HOME, RECRUIT, RESUME, MEMBER } from '../../constants/tabbar'
import { useSelector } from '@tarojs/redux'
import IndexTabbarConfig from '../../config/pages/index'
import Home from '../home'
import Recruit from '../recruit'
import Resume from '../resume'
import Member from '../member'
import './index.scss'

export default function Index(){

  // 获取当前tabbar高亮值
  const tabKey: string = useSelector<any, string>(state=>state.tabbar.key)
  // 标记是否触发下拉刷新
  const [pulldown, setPulldown] = useState<number>(0)

  // 监听页面下拉刷新
  usePullDownRefresh(()=>{
    setPulldown(pulldown + 1)
  })

  // 初始化页面配置信息
  useEffect(()=>{
    Taro.setNavigationBarTitle({ title: IndexTabbarConfig[tabKey].navigationBarTitleText })
  },[tabKey])

  return (
    <View>
      {tabKey === HOME && <Home />}
      {tabKey === RECRUIT && <Recruit pulldown={pulldown} />}
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
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config
