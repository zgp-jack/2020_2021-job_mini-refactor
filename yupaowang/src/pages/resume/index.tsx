import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import Search from '../../components/search'
import Condition from '../../components/condition'
import WechatNotice from '../../components/wechat'
import ResumeList from '../../components/lists/resume'
import '../recruit/index.scss'

export default function Recruit() {

  const DEFAULT_CONDITION = [
    { id: 'area', text: '全国' },
    { id: 'work', text: '选择工种' },
    { id: 'type', text: '队伍' },
    { id: 'filter', text: '推荐' }
  ]

  return (
    <View className='recruit-container'>
      <View className='recruit-fiexd-header'>
        <Search placeholder='找工人，找队伍，找班组' value='' />
        <Condition data={DEFAULT_CONDITION} />
      </View>
      <ScrollView className='recruit-lists-container'>
        <WechatNotice />
        <ResumeList />
      </ScrollView>
    </View>
  )
}