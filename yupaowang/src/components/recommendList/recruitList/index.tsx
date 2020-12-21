import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import Nodata from '../../../components/nodata'
import './index.scss'


interface PROPS {
  data:any[],
  occupations?:string,
  city?:string
  areasId?:number,
  type:number,
  jobIds:number,
}
// 招工
export default function RecruitListPage({ data = [], occupations, areasId, type, jobIds }:PROPS) {
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  // 用户页面跳转-定向
  const userRouteRe = (url: string) => {
    Taro.reLaunch({
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
        <View key={v.id} className='recruitListBox' onClick={() => userRouteJump(`/pages/detail/info/index?id=${v.id}`)}>
          {/* 标题 */}
          <View className='recruitListBox-title'>
            {v.title}
          </View>
          {/* 中间 */}
          <View className='recruitListBox-content'>
            <Image src={v.image} className='recruitListBox-content-img'/>
            <View className='recruitListBox-content-box'>
              <View className='recruitListBox-content-name'>{v.user_name}</View>
              <View className='recruitListBox-content-details overwrods'>{v.detail}</View>
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
      {data.length < 15 && <View className='recruitListBox-last' onClick={() => userRouteRe(`/pages/index/index`)}>查看更多招工信息</View>}
    </View>
  )
}
