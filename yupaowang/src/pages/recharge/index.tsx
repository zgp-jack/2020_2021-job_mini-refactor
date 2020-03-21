import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Recharge(){
  // 当前选择下标
  //const [] 
  return (
    <View className='recharge-container'>
      <View className='recharge-header'>
        <View className='recharge-info-item'>
          剩余积分：<Text className='recharge-info-text'>1</Text>
        </View>
        <View className='recharge-info-item'>
          充值金额：<Text className='recharge-info-text'>2元</Text>
        </View>
        <View className='recharge-info-item'>
          积分价格：<Text className='recharge-info-text'>0.05元/个</Text>
        </View>
        <View className='recharge-info-item'>
          充值积分：<Text className='recharge-info-text'>40积分（可查看40个电话号码）</Text>
        </View>
      </View>
      <View className='recharge-body'>
        <View className='recharge-title'>请选择充值金额</View>
        <View className='recharge-content clearfix'>
          {[1, 2, 3, 4, 5, 6].map((item, index)=> (
            <View className='recharge-list' key={ index }>
              <View className='recharge-list-box'>
                <View className='recharge-money'>{ item }元</View>
                <View className='recharge-num'>20积分</View>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View className='recharge-btn'>充值</View>
    </View>
  )
}