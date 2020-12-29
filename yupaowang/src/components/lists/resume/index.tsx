import Taro from '@tarojs/taro'
import { View, Text, Image, Block } from '@tarojs/components'
import { IMGCDNURL, FILTERWEIXINREG, REPLACEWEIXINTEXT, PUBLISHRESUME } from '../../../config'
import Nodata from '../../../components/nodata'
import { ResumeList } from '../../../utils/request/index.d'

import './index.scss'
import { UserLocation } from '../../../config/store'

interface PROPS {
  data: ResumeList[][],
  bottom?: boolean,
  hasMore?: boolean
}

export default function ResumeList({ data, bottom = true, hasMore = true }: PROPS){
  // 用户页面跳转
  const userRouteJump = (uuid: string) => {
    let location = Taro.getStorageSync(UserLocation)
    location = location ? location = location.split(',').reverse() : ''
    Taro.navigateTo({
      url: `/pages/resume/detail/index?uuid=${uuid}&location=${location}`
    })
  }
  const handleJump = (url)=>{
    Taro.navigateTo({
      url: url
    })
  }
  return (
    <View className='resume-list-container' style={ bottom ? '' : 'padding-bottom:0' }>
      {data && data.map((item,di)=>(
        <Block key={`${di}-${di}`}>
          {item && item.map((d)=>(
            <View className='resume-list-item' key={d.id} onClick={() => userRouteJump(d.uuid)}>
              {d.resume_top && <Image className='list-topresume-img' src={IMGCDNURL + 'newlist-jobzd.png'} />}
              <View className='resume-list-header'>
                <Image className='resume-list-user' src={ d.headerimg } />
                <View className='resume-list-userinfo'>
                  <View className='resume-list-userinfo-detail'>
                    <View>
                    <Text className='resume-userinfo-name'>{ d.username }</Text>
                    {d.gender && <Text className='resume-userinfo-sex'>{d.gender == '1' ? '男' : '女'}</Text>}
                    {d.birthday && <Text className='resume-userinfo-age'>{d.birthday}岁</Text>}
                    {d.certificate == 1 && <Image src={`${IMGCDNURL}new-list-jnzs-icon.png`} className='resume-userinfo-Image'/>}
                    </View>
                    <View>
                      {d.resume_top == 1 && <Text onClick={(e) => { e.stopPropagation(); handleJump(PUBLISHRESUME)}} className='resume-userinfo-text'>我要置顶</Text>}
                    </View>
                  </View>
                  <View className='resume-otherinfo-flex'>
                  <View className='resume-otherinfo'>
                    {d.nation && <Text className='resume-otherinfo-text'>{d.nation}</Text>}
                    {d.experience && <Text className='resume-otherinfo-text'>{d.experience}</Text>}
                    {d.prof_degree && <Text className='resume-otherinfo-text'>{d.prof_degree}</Text>}
                  </View>
                  <View className='resume-list-type'>{ d.type }</View
                  >
                  </View>
                  {/* <View className='resume-list-tags'>
              <Text className='resume-list-tags-item'>任劳任怨</Text>
              <Text>任劳任怨</Text>
              <Text>任劳任怨</Text>
            </View> */}
                </View>
              </View>
              <View className='resume-list-works'>
                {d.occupations.map((i,ii)=>(
                  <Text className='resume-list-words-text' key={`${d.id}-${ii}`}>{ i }</Text>
                ))}
              </View>
              <View className='resume-list-content overwords'>{REPLACEWEIXINTEXT ? d.introduce.replace(FILTERWEIXINREG, '') : d.introduce }</View>
              <View className='resume-list-footer'>
                <Image className='resume-list-loc' src={IMGCDNURL + 'lpy/biaoqian.png'} />
                <View className='resume-list-loctxt overwords'>{ d.show_address }</View>
                <Text className='resume-list-time'>{ d.time }</Text>
              </View>
            </View>
          ))}
        </Block>
      ))}
      {data && data[0] && data[0].length && !hasMore && <View className='list-data-notmore'>没有更多数据了</View>} 
      {data&&data[0]&&!data[0].length && <Nodata text='暂无相关数据' />}
    </View>
  )
}