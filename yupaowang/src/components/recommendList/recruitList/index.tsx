import Taro, { useState } from '@tarojs/taro'
import { View, Text, Image, Block, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import { CollectionRecruitListDataList } from '../../../utils/request/index.d'
import { IMGCDNURL } from '../../../config'
import Nodata from '../../../components/nodata'
import './index.scss'


interface PROPS {
  data:any[]
}
// 招工
export default function RecruitListPage({data=[]}:PROPS) {
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  return(
    <View>
      <View className='header'>
        <Text className='header-text'>相关推荐</Text>
      </View>
      {data.map((v:any)=>(
        <View key={v.id} className='recruitListBox' onClick={() => userRouteJump(`/pages/detail/info/index?id=${v.id}`)}>
          {/* 标题 */}
          <View className='recruitListBox-title'>
            {v.title}
          </View>
          {/* 中间 */}
          <View className='recruitListBox-content'>
            <Image src={v.image} className='recruitListBox-content-img'/>
            <View className='recruitListBox-content-box'>
              <View className='recruitListBox-content-name'>{v.user_name}</View>
              <View className='recruitListBox-content-details'>{v.detail}</View>
            </View>
          </View>
          {/* 尾部 */}
          <View className='recruitListBox-footer'>
            <View><Image className='recruitListBox-footer-image' src={`${IMGCDNURL}newlist-jobposi.png`} />{v.show_address}</View>
            <View>{v.time}</View>
          </View>
        </View>
      ))}
      <View className='recruitListBox-last'>查看更多招工信息</View>
    </View>
  )
}
