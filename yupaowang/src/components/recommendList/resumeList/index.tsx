import Taro, { useState } from '@tarojs/taro'
import { View, Text, Image, Block, Button } from '@tarojs/components'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
import { CollectionRecruitListDataList } from '../../../utils/request/index.d'
import { IMGCDNURL } from '../../../config'
import Nodata from '../../../components/nodata'
import './index.scss'

interface PROPS {
  data: any[]
}

// 找活
export default function ResumeListPage({ data = [{}, {}, {}] }: PROPS) {
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  return(
    <View className='resume-list-container'>
      <View className='resumeDetail-recommend'>
        <View className='resumeDetail-recommend-top'>
          <Text className='resumeDetail-recommend-top-text'>相关推荐</Text></View>
      </View>
      {data.map(item => (
        <Block key={item.id}>
          <View className='resume-list-item' key={item.id} onClick={() => userRouteJump(`/pages/resume/detail/index?id=${item.id}`)}>
              <View className='resume-list-header'>
                <Image className='resume-list-user' src={item.headerimg} />
                <View className='resume-list-userinfo'>
                  <View className='resume-list-userinfo-detail'>
                    <Text className='resume-userinfo-name'>{item.username}</Text>
                    <Text className='resume-userinfo-birthday'>{item.birthday}岁</Text>
                    {item.certificate == 1 && < Image className='resume-userinfo-img' src={`${IMGCDNURL}newresume-infolist-jnz.png?t=1`} />}
                  </View>
                  <Text className='resume-list-type'>{item.type}</Text>
                  <View className='resume-otherinfo'>
                    <Text className='resume-otherinfo-text'>{item.nation}</Text>
                    <Text className='resume-otherinfo-text'>{item.experience}</Text>
                  </View>
                </View>
              </View>
              <View className='resume-list-works'>
                {item.occupations.map((v, i) => (
                  <Text className='resume-list-words-text' key={i + i}>{v}</Text>
                ))}
              </View>
              <View className='resume-list-content overwords'>{item.introduce}</View>
              <View className='resume-list-footer'>
                <View className='resume-list-footer-flex'>
                  <Image className='resume-list-loc' src={IMGCDNURL + 'lpy/biaoqian.png'} />
                  <View className='resume-list-loctxt overwords'>{item.show_address}</View>
                </View>
                <Text className='resume-list-time'>{item.prof_degree}</Text>
              </View>
            </View>
        </Block>
      ))}
      <View className="seemore-recommend-recruit">查看更多找活信息</View>
    </View>
  )
}
