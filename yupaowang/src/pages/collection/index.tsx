import Taro, { Config, useState } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classnames from 'classnames'
import RecruitList from './recruitList'
import ResumeList from './resumeList'
import { IMGCDNURL } from '../../config'
import './index.scss'

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
  const tab = [
    {
      id: 1, text: '招工信息', activeIcon: `${IMGCDNURL}new-collect-info-active.png`, icon: `${IMGCDNURL}new-collect-info.png` },
    {
      id: 2, text: '找活信息', activeIcon: `${IMGCDNURL}new-collect-resume-active.png`, icon: `${IMGCDNURL}new-collect-resume.png` },
  ]

  return (
    <View>
      <View className='collection-tab'>
        {tab.map(item => (
          <View className='collection-tab-box' key={item.id} onClick={() => setCurrent(item.id)}>
            <View className='collection-tab-content'>
              <View className='collection-tab-img'>
              {item.id === current && <Image src={item.activeIcon}></Image>}
              {item.id !== current && <Image src={item.icon}></Image>}
              </View>
              <Text
                className={classnames({
                  'collection.active-text': item.id === current
                })
                } >{item.text}</Text>
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