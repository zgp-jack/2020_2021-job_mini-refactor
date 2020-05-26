import Taro, { Config, useState, useEffect, useRouter, useDidShow } from '@tarojs/taro'
import { View, Text, Image, Icon, Button, Textarea } from '@tarojs/components'
import { resumeDetailAction } from '../../../utils/request/index'
import WechatNotice from '../../../components/wechat'
import { IMGCDNURL, SERVERPHONE } from '../../../config'
import { isVaildVal } from '../../../utils/v'
import Msg from '../../../utils/msg'
import { resumeDetailCertificates, resumeDetailProject, resumeDetailOperation } from '../../../utils/request/index.d'
import './index.scss'

interface DataType {
  certificates: resumeDetailCertificates[],
  info:resumeDetailInfo,
  project: resumeDetailProject[],
  operation: resumeDetailOperation,
}
interface resumeDetailInfo{
  introduce:string,
  headerimg:string,
  nation:string,
  username:string,
  tel:string,
  hometown:string,
  occupations:[],
  experience:string,
  prof_degree_str:string,
  type_str:string,
  number_people:string,
  address:string,
  tags: resumeDetailInfoTages[],
}
interface resumeDetailInfoTages{
  id:number,
  label_name:string,
}
export default function ResumeDetail() {
  const [data, setDate] = useState<DataType>({
    certificates:[],
    info:{
      introduce:'',
      headerimg:'',
      nation: '',
      username: '',
      tel: '',
      hometown: '',
      occupations: [],
      experience: '',
      prof_degree_str: '',
      type_str: '',
      number_people: '',
      address: '',
      tags: [],
    },
    operation:{
      is_collect: 0,
      is_zan: 0,
      status: 0,
    },
    project:[],
  })
  useEffect(()=>{
    const params = {
      location:'',
      // 先写死
      resume_uuid: 1589247445952677,
    }
    resumeDetailAction(params).then(res=>{
      console.log(res);
      if(res.errcode === 'ok'){
        setDate({ certificates: res.certificates,info:res.info,operation:res.operation,project:res.project})
      }
    })
  },[])
  return(
    <View className='resumeDetail'>
      {/* 顶部 */}
      <View className='resumeDetail-cardcolore'>
        <View className='resumeDetail-header'>注:老板对找活者满意，可以直接与他联系以及点赞或转发</View>
        <View className='resumeDetail-header'>注:分享名片 让您的名片排名更靠前</View>
      </View>
      {/* 基础信息 */}
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image'  src={`${IMGCDNURL}newresume-catimg.png`}/>
            <Text className='resumeDetail-findingnamecardthreemobile-text'>基础信息</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      <View className='resumeDetail-basics'>
        <View className='resumeDetail-basics-heard'>
          <Image className='resumeDetail-basics-heard-img' src={data.info.headerimg}/>
          <View>
            <View>{data.info.username}</View>
            <View>女 30岁 {data.info.nation}</View>
          </View>
        </View>
        <View>
          <View>手机: {data.info.tel}</View>
          <View>我的家乡:{data.info.hometown}</View>
          <View>工种:
            {data.info.occupations.map((v,i)=>(
              <View key={i+i}>{v}</View>
            ))}
          </View>
          <View>工龄:{data.info.experience}</View>
          <View>熟练:{data.info.prof_degree_str}</View>
          <View>人员构成:{data.info.type_str}</View>
          <View>队伍人数:{data.info.number_people}</View>
          <View>所在地区:{data.info.address}</View>
          <View>标签:
            {data.info.tags.map(v=>(
              <View key={v.id}>{v.label_name}</View>
            ))}
          </View>
        </View>
      </View>
      {/* 自我介绍 */}
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
            <Text className='resumeDetail-findingnamecardthreemobile-text'>自我介绍</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      <View className='resumeDetail-introduce'>
        {data.info.introduce||'暂未填写'}
      </View>
      {/* 项目经验 */}
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
            <Text className='resumeDetail-findingnamecardthreemobile-text'>项目经验</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      <View className='resumeDetail-experience'>
        {data.project.map((v)=>(
          <View key={v.id}>
            <View className='resumeDetail-experience-title'><Image className='resumeDetail-image' src={`${IMGCDNURL}lpy/newresume-experience-item.png`}/>{v.project_name}</View>
            <View className='resumeDetail-experience-content'>
              <View className='resumeDetail-experience-content-list'>{v.start_time}-{v.completion_time}</View>
              <View className='resumeDetail-experience-content-list'>{v.detail}</View>
            </View>
          </View>
        ))}
      </View>
      {/* 职业技能 */}
      <View className="resumeDetail-findingnamecardthree">
        <View className="resumeDetail-findingnamecardthreemobile">
          <View>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
            <Text className='resumeDetail-findingnamecardthreemobile-text'>职业技能</Text>
            <Image className='resumeDetail-findingnamecardthreemobile-image' src={`${IMGCDNURL}newresume-catimg.png`} />
          </View>
        </View>
      </View>
      <View className='resumeDetail-skill'>
        {data.certificates.map(v=>(
          <View>
            <View className='resumeDetail-experience-title'>
              <Image className='resumeDetail-image' src={`${IMGCDNURL}lpy/newresume-experience-item.png`} />
                {v.name}
            </View>
            <View className='resumeDetail-experience-content'>
            <View className='resumeDetail-experience-content-list'>{v.certificate_time}</View>
              <View>
                {v.image.map((val,i)=>(
                  <Image key={i + i} src={val} className='resumeDetail-skill-image'/>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

ResumeDetail.config = {
  navigationBarTitleText: '找活名片',
} as Config