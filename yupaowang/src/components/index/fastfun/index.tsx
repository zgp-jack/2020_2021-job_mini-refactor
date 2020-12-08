import Taro from '@tarojs/taro'
import { View, Image, Text, Block } from '@tarojs/components'
import Config from './config'
import './index.scss'

export default function Fastfun(){
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  return (
    <View className='home-fastfun clearfix'>
      {Config.map((item,index)=>(
        <Block>
        {item.show &&
        <View className='home-fastfun-item' key={index+index} onClick={() => userRouteJump(item.url)}>
          {ISWEIXIN && <Image className='home-fastfun-img' src={item.img} />}
          <Text className='home-fastfun-text'>{ item.text }</Text>
        </View>}
        </Block>
      ))}
      {!ISWEIXIN && 
      <View className='home-fastfun-item' onClick={() => userRouteJump(`/pages/used/lists/index`)}>
        <Text className='home-fastfun-text'>二手交易</Text>
      </View>
      }
    </View>
  )
}