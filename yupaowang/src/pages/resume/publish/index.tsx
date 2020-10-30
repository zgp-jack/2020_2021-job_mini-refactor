import Taro, { } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import './index.scss'

export default function ResumePublish(){

  // 页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({url: url})
  }

  return (
    <View className='resume-container'>
      <View className='resume-tips-header'>请完善以下信息</View>
    </View>
  )
}