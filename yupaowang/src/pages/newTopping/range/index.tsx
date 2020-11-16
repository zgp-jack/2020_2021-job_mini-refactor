import Taro, { Config, useEffect, useState, createContext, useRouter } from '@tarojs/taro'
import { View, Picker, Text, Image, Input } from '@tarojs/components'
import { IMGCDNURL, SERVERPHONE } from '../../../config'
import './index.scss'

export default function Range() {
  const data = [1,2,3,4,5,6];
  return (
    <View className='range'>
      <View>
        <View className='range-tips range-mt30'>当前选择置顶范围:</View>
        <View>
          {/* 没有选择 */}
          {/* <View className='range-noChangeBtn'>点击选择置顶范围 ></View> */}
          {/* 选择后 */}
          <View className='range-cityBox'>
            {data.map((v)=>(
              <View className='range-cityBox-list'>{v}
                <Image src={`${IMGCDNURL}lpy/delete.png`} className='range-cityBox-list-close' />
              </View>
            ))}
            <View className='range-cityBox-list-last'>添加更多</View>
          </View>
        </View>
      </View>
      <View>
        <View className='range-tips'>请选择置顶天数:</View>
        <View className='range-content'>
          <View className='range-content-list'>置顶天数：<Text className='range-content-list-noDay'>请选择置顶天数</Text></View>
          <View className='range-content-list'>消耗积分：<Text className='range-content-list-blued'>100分</Text></View>
        </View>
        {/* <View className='range-content'>
          <View className='range-content-list-time'><View className='range-content-list-noDay'>到期时间：2020-04-20 15:54</View><View className='range-content-list-blued'>延长</View></View>
        </View> */}
      </View>
      
      <View className='range-change'>
        <View className='range-change-btn'>确定置顶</View>
      </View>
      <View className='range-rule'>置顶规则</View>
      <View className='range-rule-content range-mt30'>找活名片最多可选择xx省置顶，选择了省之后就不能再选择该省下面的市。</View>
    </View>
  )
}

Range.config = {
  navigationBarTitleText: '招工置顶',
} as Config