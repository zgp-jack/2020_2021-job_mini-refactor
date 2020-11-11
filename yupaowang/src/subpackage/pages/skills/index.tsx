import Taro, { Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Imglist from '../../../components/imglist'
import Nodata from '../../../components/nodata'
import { useSelector } from '@tarojs/redux'
import { useResumeType } from '../../../reducers/resume_list';
import './index.scss'

export default function Skills() {
  const data = useSelector<any, useResumeType>(state => state.resumeList);
  return (
    <View className='projects-container'>
      {data.certificates && data.certificates.map(item => (
        <View className='project-item'>
          <View className='project-item-title'>{item.name}</View>
          <View className='project-time'>
            <Text className='project-time-text'>{item.certificate_time}</Text>
          </View>
          <Imglist data={item.image} />
          {item.check == '0' && <View className='project-reason-text'>{item.fail_case}</View>}
        </View>
      ))}
      {!data.certificates.length && <Nodata />}
    </View>
  )
}

Skills.config = {
  navigationBarTitleText: '技能证书列表',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config
