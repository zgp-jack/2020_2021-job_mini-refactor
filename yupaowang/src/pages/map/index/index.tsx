import Taro from '@tarojs/taro'
import { View, Text, Image, Input, Block } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import Cities from '../../../components/citys'
import { IPROPS } from '../../../components/citys'
import './index.scss'

interface PROPS extends IPROPS{
  
}

export default function MapComponent({ data }: PROPS){
  return (
    <Block>
      <View className='mapinfo-header'>
        <View className='mapinfo-header-area'>四川</View>
        <View className='mapinfo-header-inputbox'>
          <Input className='mapinfo-header-input' placeholder='请输入您的详细地址' />
          <Text className='at-icon at-icon-close mapinfo-header-clear'></Text>
        </View>
        <Text className='mapinfo-header-close'>取消</Text>
      </View>
      <View className='mapinfo-container'>
        <View className='location-lists'>
          <View className='location-list-item'>
            <View className='location-list-header overwords'>
              北京市天安门广场
              <Text>3.2km</Text>
            </View>
            <View className='location-list-content'>这里有很多很多的介绍文字</View>
          </View>
        </View>
        <View className='location-nodata'>
          <Image className='location-nodata-img' src={ IMGCDNURL + 'nodata.png' } />
          <View className='location-nodata-text'>暂无数据</View> 
        </View>
      </View>
      <View className='mapinfo-citys'>
        <Cities data={ data } />
      </View>
    </Block>
  )
}