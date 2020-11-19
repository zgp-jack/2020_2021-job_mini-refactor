import Taro, { Config, useDidShow, useRouter } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Imglist from '../../../components/imglist'
import useResume from '../../../hooks/publish/resume'
import Nodata from '../../../components/nodata'
import { CertificateMaxNum, IMGCDNURL } from '../../../config'
import './index.scss'

export default function Skills() {

  const router = useRouter()
  // type 1 为大列表查看更多  2是预览的时候 查看更多 这个时候没有添加按钮
  const { type = '1' } = router.params

  const { certificates, initResumeData } = useResume()

  useDidShow(() => {
    initResumeData()
  })

  const userEditSkill = (id: string) => {
    Taro.navigateTo({
      url: `/pages/resume/add_skill/index?id=${id}`
    })
  }
  return (
    <View className='projects-container'>
      {certificates.map(item => (
        <View className='project-item'>
          {item.check == '1' && <Image className='project-status-img' src={`${IMGCDNURL}lpy/review.png`} />}
          {item.check == '0' && <Image className='project-status-img' src={`${IMGCDNURL}lpy/notthrough.png`} />}
          <View className='project-item-title'>{item.name}</View>
          {item.check == '2' && <View className='project-item-edit' onClick={()=>userEditSkill(item.id)}>编辑</View>}
          {item.check == '0' && <View className='project-item-edit' onClick={() => userEditSkill(item.id)}>待修改</View>}
          <View className='project-time'>
            <Text className='project-time-text'>{item.certificate_time}</Text>
          </View>
          <Imglist data={item.image} />
          {item.check == '0' && <View className='project-reason-text'>{item.fail_case}</View>}
        </View>
      ))}
      {!certificates.length && <Nodata />}
      {certificates.length < CertificateMaxNum && type == '1' &&
        <View className='add-certificate-btn' onClick={() => Taro.navigateTo({ url: '/pages/resume/add_skill/index' })}>添加技能证书</View>
      }
    </View>
  )
}

Skills.config = {
  navigationBarTitleText: '技能证书列表',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config
