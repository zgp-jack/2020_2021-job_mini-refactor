import Taro, { Config, useEffect, useState, createContext, useRouter } from '@tarojs/taro'
import { View, Picker, Text, Image, Input } from '@tarojs/components'

export default function ResTopping() {

  return (
    <View className='ResTopping'>
      <View>
        <View>当前选择置顶范围</View>
        <View></View>
      </View>
      <View>
      <View>请选择置顶范围</View>
        <View>

        </View>
      </View>
      <View>确定置顶</View>
      <View>置顶规则</View>
      <View>找活名片最多可选择xx省置顶，选择了省之后就不能再选择该省下面的市。</View>
    </View>
  )
}

ResTopping.config = {
  navigationBarTitleText: '招工置顶',
} as Config