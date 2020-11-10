import Taro, { Config, useState, useRouter, createContext, useDidShow, useEffect } from '@tarojs/taro'
import { useResumeType } from '../../../pages/resume/publish/index.d'
import { useSelector } from '@tarojs/redux'
import { View, Image, Text } from '@tarojs/components';
import { IMGCDNURL } from '../../../config'
import './index.scss'

export default function ResumeDetail() {
  // 获取找活名片信息
  const resumeData: useResumeType = useSelector<any, useResumeType>(state => state.resumeData);

  return(
    <View className='resumeDetail'>
      <View className='resumeDetail-cardcolore'>
        {/* {data.operation.status === 0 && <View className='resumeDetail-header'>注:老板对找活者满意，可以直接与他联系以及点赞或转发</View>} */}
        {/* {data.operation.status === 1 && */}
          <View className='resumeDetail-header'>注:分享名片 让您的名片排名更靠前</View>
        {/* } */}
      </View>
      {/* 基础信息 */}
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
            <Text className='resumeDetail-findingnamecardthreemobile-text'>基础信息</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      
    </View>
  )
}