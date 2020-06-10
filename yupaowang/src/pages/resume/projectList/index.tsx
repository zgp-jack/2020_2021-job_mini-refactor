import Taro, { Config, useState, useContext, useRouter, useDidShow } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import { resumeListAction } from '../../../utils/request/index'
import { IMGCDNURL } from '../../../config'
import Nodata from '../../../components/nodata'
// import { detailContext } from '../detail';
import './index.scss'

// console.log(detailContext,'vdetailContext')
interface DataType {
  id:string,
  project_name:string,
  check:string,
  start_time:string,
  completiontime?:string,
  completion_time:string,
  province_name:string,
  detail:string,
  city_name:string,
  fail_case:string,
  image:[],
}
export default function ProjectList() {
  const router: Taro.RouterInfo = useRouter()
  let { id, preview, detail } = router.params;
  // const { project } = useContext(detailContext)
  // 刷新一次
  const [refresh, setRefresh] = useState<boolean>(false)
  // 数据
  const [data, setData] = useState<DataType[]>([])
  useDidShow(()=>{
    if (refresh) {
      setRefresh(false)
      return
    }
    // if (detail){
      // if (project){
      //   setData(project);
      // }
    // }else{
      resumeListAction().then(res => {
        setData(res.data.project)
      })
    // }
  })
  // 点击方法
  const handleImg = (e: string) => {
    Taro.previewImage({
      current: e,
      urls: [e]
    })
    setRefresh(true)
  }
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  return(
    <View className='projectList'>
      {data.map((item,i)=>(
        <View key={item.id} className='skilleight' >
          {item.check == '1' && <Image className='audit' src={`${IMGCDNURL}lpy/review.png`}/>}
          {item.check == '0' && <Image className='audit' src={`${IMGCDNURL}lpy/notthrough.png`} />}
          {!preview && 
          <View>
            {item.check == '2' && <View className='editor' onClick={() => userRouteJump(`/pages/resume/addProject/index?type=${i}&id=${id}`)}>编辑</View>}
            {item.check == '0' && <View className='editorone' onClick={() => userRouteJump(`/pages/resume/addProject/index?type=${i}&id=${id}`)}>待修改</View>}
          </View>
          }
          <View className="skilleightzong">
            <View>
              <Image src={`${IMGCDNURL}lpy/newresume-experience-item.png`} className='skilleightone'/>
            </View>
            <View className="skilleightall">
              <View className="project">
                <Text className='project-text'>{ item.project_name }</Text>
              </View>
              <View className="skilleighttwo">
                <Text className='skilleighttwo-text'>{ item.start_time }-{ item.completiontime == 'zhijin' ? "至今" : item.completion_time}</Text>
                {!item.city_name && <Text className='skilleighttwo-text'>{item.province_name}</Text>}
              </View>
              <View className="description">
                <Text className='description-text'>{ item.detail }</Text>
              </View>
              <View className="skilleightfive">
                  <View className="skilleightfiveline">
                  <View className='temimage'>
                    {item.image.map((v,i)=>(
                      <Image className='skilleightfive-image' src={v} key={i + i} onClick={() => handleImg(v)}/>
                    ))}
                    </View>
                </View>
              </View>
              {item.check == '0' && 
              <View className="resson">
                未通过原因：{ item.fail_case}
              </View>
              }
            </View>
          </View>
        </View> 
      ))}
      {!data.length && <Nodata text='暂无相关内容' />}
      { data.length<5 && !detail && 
        <View className='footer-box'>
          <Button className='footer' onClick={() => userRouteJump(`/pages/resume/addProject/index?id=${id}`)}>添加项目经验</Button>
        </View>
      }
    </View>
  )
}
ProjectList.config = {
  navigationBarTitleText: '项目经验',
} as Config