import Taro, { Config, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import RecruitList from './recruitList'
import ResumeList from './resumeList'
import './index.scss'

export default function Collection() {
  // 默认table
  const [current, setCurrent] = useState<number>(1)
  const handleTable = (type:number)=>{
    setCurrent(type);
  }
  return (
    <View>
      {current === 1 && <RecruitList onClick={handleTable}/>}
      {current === 2 && <ResumeList onClick={handleTable}/>}
    </View> 
  )
}
Collection.config = {
  navigationBarTitleText: '我的收藏找活',
} as Config