import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { IMGCDNURL } from '../../config'
import './index.scss'

interface Props {
  text?: string
}

export default function Nodata({ text = '暂无数据' }: Props){
  return (
    <View className='nodata-container'>
      <Image className='nodata-img' src={IMGCDNURL + 'nodata.png'}></Image>
      <View className='nodata-text'>{ text }</View>
    </View>
  )
}