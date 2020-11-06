import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Imglist from '../../../components/imglist'
import useResume from '../../../hooks/publish/resume'
import Nodata from '../../../components/nodata'
import { ProjectListMaxNum } from '../../../config'
import './index.scss'

export default function Projects(){

  const { projectData } = useResume()

  return (
    <View className='projects-container'>
      {projectData.map(item => (
        <View className='project-item'>
          <View className='project-item-title'>{item.project_name}</View>
          <View className='project-time'>
            <Text className='project-time-text'>{item.start_time} ~ {item.completion_time}</Text>
            <Text className='project-time-text'>{`${item.province_name}-${item.city_name}`}</Text>
          </View>
          <View className='project-description'>{item.detail}</View>
          <Imglist data={item.images} />
        </View>
      ))}
      {!projectData.length && <Nodata />}
      {projectData.length < ProjectListMaxNum &&
      <View className='add-certificate-btn' onClick={()=>Taro.navigateTo({url:'/pages/resume/add_project/index'})}>添加技能证书</View>
      }
    </View>
  )
}