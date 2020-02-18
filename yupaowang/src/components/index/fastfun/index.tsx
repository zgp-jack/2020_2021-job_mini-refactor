import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import Config from './config'
import './index.scss'

export default function Fastfun(){
  return (
    <View className='home-fastfun clearfix'>
      {Config.map((item,index)=>(
        <View className='home-fastfun-item' key={ index }>
          <Image className='home-fastfun-img' src={ item.img } />
          <Text className='home-fastfun-text'>{ item.text }</Text>
        </View>
      ))}
    </View>
  )
}