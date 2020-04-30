import Taro, { Config, useState, usePullDownRefresh, useEffect, useRouter, RouterInfo } from '@tarojs/taro'
import { View, Button, Image, Text, Block } from '@tarojs/components'
import { CollectionResumeListDataList } from '../../../utils/request/index.d'
import { IMGCDNURL } from '../../../config'
import './index.scss'

interface PROPS {
  data: CollectionResumeListDataList[],
}
export default function CollectionResumeList({ data }: PROPS) {
  return (
    <View className='resume-list-container'>
      {
        data&&data.map((item) => (
        <Block>
          {
            // item.map((d) => (
            <View className='resume-list-item'>
              <View className='resume-list-header'>
                  <Image className='resume-list-user' src={item.resume.headerimg} />
                <View className='resume-list-userinfo'>
                  <View className='resume-list-userinfo-detail'>
                      <Text className='resume-userinfo-name'>{item.resume.username}</Text>
                    {/* <Text className='resume-userinfo-sex'>男</Text> */}
                      {/* <Text className='resume-userinfo-age'>{item.resume.birthday}岁</Text> */}
                  </View>
                    <Text className='resume-list-type'>{item.resume.type}</Text>
                  <View className='resume-otherinfo'>
                      <Text className='resume-otherinfo-text'>{item.resume.nation}</Text>
                      <Text className='resume-otherinfo-text'>{item.resume.prof_degree}</Text>
                      {/* <Text className='resume-otherinfo-text'>{item.resume.experience}</Text> */}
                  </View>
                  {/* <View className='resume-list-tags'>
              <Text className='resume-list-tags-item'>任劳任怨</Text>
              <Text>任劳任怨</Text>
              <Text>任劳任怨</Text>
            </View> */}
                </View>
              </View>
              <View className='resume-list-works'>
                  {/* {item.resume.occupations.map((i) => (
                  <Text className='resume-list-words-text'>{i}</Text>
                ))} */}
              </View>
                <View className='resume-list-content overwords'>{item.resume.introduce}</View>
              <View className='resume-list-footer'>
                {/* <Image className='resume-list-loc' src={IMGCDNURL + 'lpy/biaoqian.png'} /> */}
                  <View className='resume-list-loctxt overwords'>{item.resume.time}</View>
                  {/* <Text className='resume-list-time'>{item.resume.prof_degree}</Text> */}
                  <Button size='mini' className='resume-list-button' onClick={() => { console.log(item.resume_uuid)}}>取消收藏</Button>
              </View>
            </View>
          // ))
          }
        </Block>
      ))}
    </View>
  )
}