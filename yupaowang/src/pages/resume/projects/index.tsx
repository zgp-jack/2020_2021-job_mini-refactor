import Taro,{ Config, useDidShow, useRouter } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Imglist from '../../../components/imglist'
import useResume from '../../../hooks/publish/resume'
import Nodata from '../../../components/nodata'
import { ProjectListMaxNum, IMGCDNURL } from '../../../config'
import './index.scss'

export default function Projects(){

  const router = useRouter()
  // type 1 为大列表查看更多  2是预览的时候 查看更多 这个时候没有添加按钮
  const { type = '1' } = router.params

  const { projectData,initResumeData } = useResume()
  // 用户编辑该条项目经验
  const userEditSkill = (id: string) => {
    Taro.navigateTo({
      url: `/pages/resume/add_project/index?id=${id}`
    })
  }

  useDidShow(()=>{
    initResumeData()
  })

  return (
    <View className='projects-container'>
      {projectData.map(item => (
        <View className='project-item'>
          {item.check == '1' && <Image className='project-status-img' src={`${IMGCDNURL}lpy/review.png`} />}
          {item.check == '0' && <Image className='project-status-img' src={`${IMGCDNURL}lpy/notthrough.png`} />}
          <View className='project-item-title'>{item.project_name}</View>
          {item.check == '2' && <View className='project-item-edit' onClick={() => userEditSkill(item.id)}>编辑</View>}
          {item.check == '0' && <View className='project-item-edit' onClick={() => userEditSkill(item.id)}>待修改</View>}
          <View className='project-time'>
            <Text className='project-time-text'>{item.start_time} ~ {item.completion_time}</Text>
            <Text className='project-time-text'>{`${item.province_name}-${item.city_name}`}</Text>
          </View>
          <View className='project-description'>{item.detail}</View>
          <Imglist data={item.image} />
          {item.check == '0' && <View className='project-reason-text'>{item.fail_case}</View>}
        </View>
      ))}
      {!projectData.length && <Nodata />}
      {(projectData.length < ProjectListMaxNum) && type == '1' &&
      <View className='add-certificate-btn' onClick={()=>Taro.navigateTo({url:'/pages/resume/add_project/index'})}>添加项目经验</View>
      }
    </View>
  )
}

Projects.config = {
  navigationBarTitleText: '项目经验列表',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config