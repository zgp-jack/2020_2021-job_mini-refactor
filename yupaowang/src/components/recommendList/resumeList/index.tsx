import Taro from '@tarojs/taro'
import { View, Text, Image, Block } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import './index.scss'

interface PROPS {
  data: any[],
  occupations?:string,
  areasId?:number,
  type:number,
  detailList?:boolean
}

// 找活
export default function ResumeListPage({ data = [], occupations, areasId, type, detailList }: PROPS) {
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  // 用户页面跳转-定向
  const userRouteRe = (url: string) => {
    Taro.reLaunch({
      url: url
    })
  }
  return(
    <View className={detailList ? 'resume-list-container' : 'resume-list-container pl150'}>
      <View className='resumeDetail-recommend'>
        <View className='resumeDetail-recommend-top'>
          <Text className='resumeDetail-recommend-top-text'>附近适合您的工人</Text></View>
      </View>
      {data.map(item => (
        <Block key={item.id}>
          {/* uuid, location */}
          <View className='resume-list-item' key={item.id} onClick={() => userRouteJump(`/pages/resume/detail/index?uuid=${item.uuid}&location=${item.location}`)}>
              <View className='resume-list-header'>
                <Image className='resume-list-user' src={item.headerimg} />
                <View className='resume-list-userinfo'>
                  <View className='resume-list-userinfo-detail'>
                    <Text className='resume-userinfo-name'>{item.username}</Text>
                    {item.birthday && <Text className='resume-userinfo-birthday'>{item.birthday}岁</Text>}
                    {item.certificate == 1 && < Image className='resume-userinfo-img' src={`${IMGCDNURL}newresume-infolist-jnz.png?t=1`} />}
                  </View>
                  <Text className='resume-list-type'>{item.type}</Text>
                  <View className='resume-otherinfo'>
                    {item.nation && <Text className='resume-otherinfo-text'>{item.nation}</Text>}
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
        {data.length >= 15 && <View className='seemore-recommend-recruit' onClick={() => userRouteJump(`/subpackage/pages/recommend/resume/index?areasId=${areasId}&occupations=${occupations}&type=${type}`)}>查看更多找活信息</View>}
        {data.length < 15 && <View className="seemore-recommend-recruit" onClick={()=>userRouteRe(`/pages/index/index?type=resume`)}>查看更多找活信息</View>}
    </View>
  )
}
