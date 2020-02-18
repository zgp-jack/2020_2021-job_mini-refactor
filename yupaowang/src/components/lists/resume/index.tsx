import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import './index.scss'

export default function ResumeList(){
  return (
    <View className='resume-list-container'>
      <View className='resume-list-item'>
        <View className='resume-list-header'>
          <Image className='resume-list-user' src='http://cdn.yupao.com/newyupao/images/user.png' />
          <View className='resume-list-userinfo'>
            <View className='resume-list-userinfo-detail'>
              <Text className='resume-userinfo-name'>阿鑫</Text>
              <Text className='resume-userinfo-sex'>男</Text>
              <Text className='resume-userinfo-age'>60</Text>
            </View>
            <Text className='resume-list-type'>个人</Text>
            <View className='resume-otherinfo'>
              <Text>汉族</Text>
              <Text>15年以上</Text>
            </View>
            {/* <View className='resume-list-tags'>
              <Text>任劳任怨</Text>
              <Text>任劳任怨</Text>
              <Text>任劳任怨</Text>
            </View> */}
          </View>
        </View>
        <View className='resume-list-works'>
          <Text>任劳任怨</Text>
          <Text>任劳任怨</Text>
          <Text>任劳任怨</Text>
        </View>
        <View className='resume-list-content overwords'>这个是我的找活内容</View>
        <View className='resume-list-footer'>
          <Image className='resume-list-loc' src={ IMGCDNURL + 'lpy/biaoqian.png' } />
          <View className='resume-list-loctxt overwords'>四川省成都市金牛阳光大道</View>
          <Text className='resume-list-time'>高级工</Text>
        </View>
      </View>
    </View>
  )
}