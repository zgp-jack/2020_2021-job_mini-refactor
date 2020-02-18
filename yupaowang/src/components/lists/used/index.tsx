import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import { IMGCDNURL } from '../../../config'

export default function UsedList(){
  return (
    <View className='usedlist-container'>
      <View className='usedlist-item'>
        <View className='usedlist-item-header'>
          <View className='usedlist-item-title overwords'>四川成都回收旧电器</View>
          <Text className='usedlist-item-time'>2020-02-15 16:42</Text>
        </View>
        <View className='usedlist-item-body'>
          <Image className='usedlist-item-user' src='http://cdn.yupao.com/newyupao/images/user.png' />
          <View className='usedlist-item-content'>
            <View className='usedlist-content-item'>
              <Image className='usedlist-content-item-img' src={ IMGCDNURL + 'infoman.png' }  />
              <View className='usedlist-content-info'>联系人：先生</View>
            </View>
            <View className='usedlist-content-item'>
              <Image className='usedlist-content-item-img' src={ IMGCDNURL + 'posi.png'} />
              <View className='usedlist-content-info'>四川成都</View>
            </View>
            <View className='usedlist-content-item'>
              <Image className='usedlist-content-item-img' src={ IMGCDNURL + 'status.png'} />
              <View className='usedlist-content-info'>交易状态：<Text className='usedlist-content-status'>未成交</Text></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}