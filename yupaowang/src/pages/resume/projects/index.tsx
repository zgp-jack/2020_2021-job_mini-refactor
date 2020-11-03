import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Imglist from '../../../components/imglist'
import './index.scss'

export default function Projects(){

  return (
    <View className='projects-container'>
      <View className='project-item'>
        <View className='project-item-title'>这个是我的标题</View>
        <View className='project-time'>
          <Text className='project-time-text'>2019-01-23 ~ 至今</Text>
          <Text className='project-time-text'>北京</Text>
        </View>
        <View className='project-description'>这个是我的详情内容哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈好哈哈哈哈哈哈哈安徽好</View>
        <Imglist />
      </View>
    </View>
  )
}