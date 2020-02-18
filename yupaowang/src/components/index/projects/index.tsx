import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import FastBarConfig, { FastBarItem } from './config'
import './index.scss'

export default function Projects(){
  const FastbarAction = (item: FastBarItem) => {
    if (item.target === 'miniProgram'){
      // * 如果是小程序就跳转其他小程序
      Taro.navigateToMiniProgram({ appId: item.appid, fail:(err)=>console.log(err) })
    }else if(item.isout){
      // * 不在TabBar组件中就跳转其他页面
      Taro.navigateTo({ url: item.url })
    }else{
      // * 当前组件直接切换页面
    }
  }
  return (
    <View className='home-fastbar-container clearfix'>
      {FastBarConfig.map((item,index)=>(
        <View 
          className='home-fastbar-item' 
          key={ index+item.appid } 
          onClick={()=>FastbarAction(item)}
        >
          <Image className='home-fastbar-img' src={ item.img } />
          <Text className='home-fastbar-text overwords'>{ item.text }</Text>
        </View>
      ))}
    </View>
  )
}