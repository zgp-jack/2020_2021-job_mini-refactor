import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import classnames from 'classnames'
import './index.scss'

interface PROPS {
  onClick: Function,
  highlight:number
}
export default function CollectionTab({ onClick, highlight }:PROPS) {
  // 设置默认tab
  const tab = [
    {
      id: 1, text: '招工信息', icon: `${IMGCDNURL}new-collect-info-active.png`, activeIcon: `${IMGCDNURL}new-collect-info.png`
    },
    {
      id: 2, text: '找活信息', icon: `${IMGCDNURL}new-collect-resume.png`, activeIcon: `${IMGCDNURL}new-collect-resume-active.png`
    },
  ]
  
  return (
    <View className='collection-tab'>
      {tab.map(item => (
        <View className='collection-tab-box' key={item.id} onClick={() => { onClick(item.id) }}>
          <View className='collection-tab-content'>
            <View className='collection-tab-img'>
              {highlight === 1 && <Image src={item.icon}></Image>}
              {highlight !== 1  && <Image src={item.activeIcon}></Image>}
            </View>
            <Text
              className={classnames({
                'collection.active-text': item.id === highlight
              })}
            >{item.text}</Text>
          </View>
        </View>
      ))}
    </View>
  )
}
