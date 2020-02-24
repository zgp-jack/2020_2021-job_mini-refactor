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
  return (
    <View className='resume-list-container' style={ bottom ? '' : 'padding-bottom:0' }>
      {data.map((item)=>(
        <Block>
          {item.map((d)=>(
            <View className='resume-list-item'>
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
                    <Text>{ d.nation }</Text>
                    <Text>{ d.experience }</Text>
                  </View>
                  {/* <View className='resume-list-tags'>
              <Text>任劳任怨</Text>
              <Text>任劳任怨</Text>
              <Text>任劳任怨</Text>
            </View> */}
                </View>
              </View>
              <View className='resume-list-works'>
                {d.occupations.map((i)=>(
                  <Text>{ i }</Text>
                ))}
              </View>
                <View className='resume-list-content overwords'>{ d.introduce }</View>
              <View className='resume-list-footer'>
                <Image className='resume-list-loc' src={IMGCDNURL + 'lpy/biaoqian.png'} />
                <View className='resume-list-loctxt overwords'>{ d.show_address }</View>
                <Text className='resume-list-time'>{ d.prof_degree }</Text>
              </View>
            </View>
          ))}
        </Block>
      ))}
    </View>
  )
}