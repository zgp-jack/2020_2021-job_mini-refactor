import Taro from '@tarojs/taro'
import { View, Navigator, Text } from '@tarojs/components'
import { VERSION, SERVERPHONE } from '../../../config'
import './index.scss'

export default function About(){
  return (
    <View className='home-about'>
      <View className='home-about-navlist clearfix'>
        <Navigator className='about-navlist-item' url='/pages/about/index' open-type="navigate">关于我们</Navigator>
        <Navigator className='about-navlist-item' url='/pages/course/index' open-type="navigate">使用教程</Navigator>
        <Navigator className='about-navlist-item' url='/pages/report/index' open-type="navigate">举报骗子</Navigator>
        <Text className='about-navlist-item' onClick={() => { Taro.makePhoneCall({ phoneNumber: SERVERPHONE }) }} >联系我们</Text>
      </View>
      <View className='home-about-icp'>©2017-{ new Date().getFullYear() } 版权所有 粤ICP备17088633号-1</View>
      <View className='home-about-version'>版本号：{VERSION }</View>
    </View>
  )
}