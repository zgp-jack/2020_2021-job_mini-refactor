import Taro, { Config, useState, useEffect, useReachBottom, usePullDownRefresh } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Recruit from '../recruit/lists'
import classnames from 'classnames'
import RecruitList from './recruitList'
import ResumeList from './resumeList'
import './index.scss'

export interface FilterData {
  area: string,
  location: string
}
export interface tabDataType {
  id: number,
  text: string,
  icon: string,
  activeIcon: string
}
// 用户页面跳转
const userRouteJump = (url: string) => {
  Taro.navigateTo({
    url: url
  })
}
export default function Collection() {
  // 当前高亮key
  const [current, setCurrent] = useState<number>(1)
  // 设置默认tab
  const [tab, setTab] = useState <tabDataType[]>([
    { id: 1, text: '招工信息', activeIcon: 'http://cdn.yupao.com/miniprogram/images/new-collect-info-active.png', icon:'http://cdn.yupao.com/miniprogram/images/new-collect-info.png'},
    { id: 2, text: '找活信息', activeIcon: 'http://cdn.yupao.com/miniprogram/images/new-collect-resume-active.png',icon: 'http://cdn.yupao.com/miniprogram/images/new-collect-resume.png'},
  ])

  // 标记是否触发下拉刷新
  const [pulldown, setPulldown] = useState<number>(0)
  // 监听页面下拉刷新
  usePullDownRefresh(() => {
    setPulldown(pulldown + 1)
  })

  return (
    <View>
      <View className='collection-tab'>
        {tab.map(item => (
          <View className='collection-tab-box'>
            <View className='collection-tab-content'>
              <View className='collection-tab-img'>
              {item.id === current && <Image src={item.activeIcon}></Image>}
              {item.id !== current && <Image src={item.icon}></Image>}
              </View>
              <Text
                onClick={() => setCurrent(item.id)}
                className={classnames({
                  'collection.active-text': item.id === current
                })
                } key={item.id}>{item.text}</Text>
            </View>
          </View>
        ))}
      </View>
      {current === 1 && <RecruitList />}
      {current === 2 && <ResumeList />}
    </View> 
  )
}
Collection.config = {
  navigationBarTitleText: '我的收藏找活',
  enablePullDownRefresh: true,
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config