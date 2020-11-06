import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Imglist from '../../../components/imglist'
import useResume from '../../../hooks/publish/resume'
import Nodata from '../../../components/nodata'
import { CertificateMaxNum } from '../../../config'
import './index.scss'

export default function Skills() {

  const { certificates } = useResume()
  return (
    <View className='projects-container'>
      {certificates.map(item => (
        <View className='project-item'>
          <View className='project-item-title'>{item.name}</View>
          <View className='project-time'>
            <Text className='project-time-text'>{item.certificate_time}</Text>
          </View>
          <Imglist data={item.image} />
        </View>
      ))}
      {!certificates.length && <Nodata />}
      {certificates.length < CertificateMaxNum &&
        <View className='add-certificate-btn' onClick={() => Taro.navigateTo({ url: '/pages/resume/add_skill/index' })}>添加技能证书</View>
      }
    </View>
  )
}