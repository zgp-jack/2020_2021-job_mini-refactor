import Taro, { Config, useState, useReachBottom } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import RecruitList from './recruitList'
import ResumeList from './resumeList'
import { IMGCDNURL } from '../../config'
import classnames from 'classnames'
import './index.scss'


// 设置默认tab
const tab = [
  {
    id: 1, text: '招工信息', icon: `${IMGCDNURL}new-collect-info-active.png`, activeIcon: `${IMGCDNURL}new-collect-info.png`
  },
  {
    id: 2, text: '找活信息', icon: `${IMGCDNURL}new-collect-resume.png`, activeIcon: `${IMGCDNURL}new-collect-resume-active.png`
  },
]
export default function Collection() {
  // 默认table
  const [current, setCurrent] = useState<number>(1)
  const [bottom,setBottom] = useState<number>(0)
  const handleTable = (type:number)=>{
    setBottom(0)
    setCurrent(type);
  }
  // 是否加载更多
  useReachBottom(()=>{
    setBottom(bottom + 1)
  })
  return (
    <View className='collection-content'>
      <View className='collection-tab'>
        {tab.map(item => (
          <View className='collection-tab-box' key={item.id} onClick={() => handleTable(item.id)}>
            <View className='collection-tab-content'>
              <View className='collection-tab-img'>
                {current === 1 ? <Image src={item.icon}></Image> : <Image src={item.activeIcon}></Image>}
              </View>
              <Text
                className={classnames({
                  'collection.active-text': item.id === current
                })}
              >{item.text}</Text>
            </View>
          </View>
        ))}
      </View>
      {current === 1 ?  <RecruitList bottom={bottom} /> : <ResumeList bottom={bottom} />}
    </View> 
  )
}
Collection.config = {
  navigationBarTitleText: '我的收藏找活',
  'onReachBottomDistance': 50
} as Config