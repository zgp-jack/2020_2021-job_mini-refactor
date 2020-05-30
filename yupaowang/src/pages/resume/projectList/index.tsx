import Taro, { Config, useState, useEffect, useRouter, useDidShow } from '@tarojs/taro'
import { View, Text, Image, Block, Button, Textarea } from '@tarojs/components'
import { resumeListAction } from '../../../utils/request/index'
import WechatNotice from '../../../components/wechat'
import { IMGCDNURL, SERVERPHONE } from '../../../config'
import { isVaildVal } from '../../../utils/v'
import Msg from '../../../utils/msg'
import { resumeDetailCertificates, resumeDetailProject, resumeDetailOperation, recommendListDataList } from '../../../utils/request/index.d'
import './index.scss'

interface DataType {
  id:string,
  project_name:string,
  check:string,
  start_time:string,
  completiontime:string,
  completion_time:string,
  province_name:string,
  detail:string,
  city_name:string,
  fail_case:string,
  image:[],
}
export default function ProjectList() {
  const [data, setData] = useState<DataType[]>([])
  useEffect(()=>{
    resumeListAction().then(res=>{
      setData(res.data.project)
    })
  },[])
  return(
    <View className='projectList'>
      <View className='skilleight'>
      {data.map(item=>(
        <View key={item.id} >
          {/* inreview */}
          {item.check == '1' && <Image className='audit' src={`${IMGCDNURL}lpy/review.png`}/>}
          {item.check == '0' && <Image className='audit' src={`${IMGCDNURL}lpy/notthrough.png`} />}
          {item.check == '2' && <View className='editor'>编辑</View>}
          {item.check == '0' && <View className='editorone'>待修改</View>}
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
                      <Image className='skilleightfive-image' src={v} key={i+i}/>
                    ))}
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
        </View>
      ))}
      </View>
    </View>
  )
}
ProjectList.config = {
  navigationBarTitleText: '项目经验',
} as Config