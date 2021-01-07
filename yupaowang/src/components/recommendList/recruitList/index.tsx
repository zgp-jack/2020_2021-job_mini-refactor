import Taro, { useEffect, useState} from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import Nodata from '../../../components/nodata'
import { isIos } from '../../../utils/v'
import './index.scss'


interface PROPS {
  data:any[],
  occupations?:string,
  city?:string
  areasId?:number,
  type:number,
  jobIds:number,
  detailList?:boolean
}
// 招工
export default function RecruitListPage({ data = [], occupations, areasId, type, jobIds, detailList }:PROPS) {
  // 判断是否是ios
  const [ios, setIos] = useState<boolean>(false)
  useEffect(()=>{
    setIos(isIos())
  },[])
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  // 用户页面跳转-定向
  const userRouteRe = (url: string) => {
    Taro.redirectTo({
      url: url
    })
  }
  return(
    <View>
      <View className='header'>
        <Text className='header-text'>附近适合您的工作</Text>
      </View>
      {!data.length && <Nodata/>}
      {data.map((v:any)=>(
        <View key={v.id} className='recruitListBox' onClick={() => userRouteRe(`/pages/detail/info/index?id=${v.id}&type=1`)}>
          {/* 标题 */}
          <View className='recruitListBox-title'>
            {v.title}
          </View>
          {/* 中间 */}
          <View className='recruitListBox-content'>
            <View>
            <Image src={v.image} className='recruitListBox-content-img'/>
            </View>
            <View className={ios ?'recruitListBox-content-box-ios': 'recruitListBox-content-box'}>
              <View className='recruitListBox-content-name'>{v.user_name}</View>
              <View className='recruitListBox-content-details'>{v.detail}</View>
            </View>
          </View>
          {/* 尾部 */}
          <View className='recruitListBox-footer'>
            <View><Image className='recruitListBox-footer-image' src={`${IMGCDNURL}newlist-jobposi.png`} />{v.show_address}</View>
            <View>{v.time}</View>
          </View>
        </View>
      ))}
      {data.length >= 15 && <View className='recruitListBox-last' onClick={() => userRouteJump(`/subpackage/pages/recommend/recruit/index?city=${areasId}&occupations=${occupations}&type=${type}&jobIds=${jobIds}`)}>查看更多招工信息</View>}
      {data.length < 15 && <View className='recruitListBox-last' onClick={()=>Taro.navigateBack()}>查看更多招工信息</View>}
    </View>
  )
}
