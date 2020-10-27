import Taro from '@tarojs/taro'
import { View, Text, Image, Block } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import { ResumeList } from '../../../utils/request/index.d'
import './index.scss'

interface PROPS {
  data: ResumeList[][],
  bottom?: boolean
}

export default function ResumeList({ data, bottom = true }: PROPS){
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  return (
    <View className='resume-list-container' style={ bottom ? '' : 'padding-bottom:0' }>
      {data && data.map((item)=>(
        <Block>
          {item && item.map((d)=>(
            <View className='resume-list-item' key={d.id} onClick={() => userRouteJump(`/pages/resume/detail/index?uuid=${d.uuid}&location=${d.location}`)}>
              <View className='resume-list-header'>
                <Image className='resume-list-user' src={ d.headerimg } />
                <View className='resume-list-userinfo'>
                  <View className='resume-list-userinfo-detail'>
                    <Text className='resume-userinfo-name'>{ d.username }</Text>
                    <Text className='resume-userinfo-sex'>男</Text>
                    <Text className='resume-userinfo-age'>{ d.birthday }岁</Text>
                  </View>
                  <Text className='resume-list-type'>{ d.type }</Text>
                  <View className='resume-otherinfo'>
                    {d.nation && <Text className='resume-otherinfo-text'>{d.nation}</Text>}
                    {d.experience && <Text className='resume-otherinfo-text'>{d.experience}</Text>}
                    {d.prof_degree && <Text className='resume-otherinfo-text'>{d.prof_degree}</Text>}
                  </View>
                  {/* <View className='resume-list-tags'>
              <Text className='resume-list-tags-item'>任劳任怨</Text>
              <Text>任劳任怨</Text>
              <Text>任劳任怨</Text>
            </View> */}
                </View>
              </View>
              <View className='resume-list-works'>
                {d.occupations.map((i)=>(
                  <Text className='resume-list-words-text'>{ i }</Text>
                ))}
              </View>
                <View className='resume-list-content overwords'>{ d.introduce }</View>
              <View className='resume-list-footer'>
                <Image className='resume-list-loc' src={IMGCDNURL + 'lpy/biaoqian.png'} />
                <View className='resume-list-loctxt overwords'>{ d.show_address }</View>
                <Text className='resume-list-time'>{ d.time }</Text>
              </View>
            </View>
          ))}
        </Block>
      ))}
    </View>
  )
}