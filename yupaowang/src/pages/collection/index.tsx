import Taro, { Config, useState } from '@tarojs/taro'
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
  const handleTable = (type:number)=>{
    setCurrent(type);
  }
  
  return (
    <View>
      <View className='collection-tab'>
        {tab.map(item => (
          <View className='collection-tab-box' key={item.id} onClick={() => handleTable(item.id)}>
            <View className='collection-tab-content'>
              <View className='collection-tab-img'>
                {current === 1 && <Image src={item.icon}></Image>}
                {current !== 1 && <Image src={item.activeIcon}></Image>}
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
      {current === 1 && <RecruitList/>}
      {current === 2 && <ResumeList />}
    </View> 
  )
}
Collection.config = {
  navigationBarTitleText: '我的收藏找活',
} as Config