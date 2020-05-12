import Taro, { useState, useEffect, Config, useRouter, RouterInfo, useReachBottom } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { messagesTypeAction } from '../../../utils/request';
import { systemDataList } from '../../../utils/request/index.d'
import { IMGCDNURL } from '../../../config'
import Auth from '../../../components/auth'
import { useSelector } from '@tarojs/redux'
import './index.scss'

interface DataType {
  item: systemDataList[],
}
interface InitPageType{
  page: number
}
// 默认跳转路径
const newmessage = {
  // 1 系统信息
  type2: '/pages/published/published',            // 2 招工信息
  type3: '/pages/clients-looking-for-work/finding-name-card/findingnamecard',      // 3 名片信息
  type4: '/pages/clients-looking-for-work/all-skills-certificate/skillscertificate', // 4 证书信息
  type5: '/pages/clients-looking-for-work/all-project-experience/allexperience',      // 5 项目信息
  type6: '/pages/integral/source/source', // 6 投诉招工信息
  type7: '/pages/others/message/lists/lists',      // 7 留言信息
  type8: '/pages/integral/source/source', // 8 积分管理-充值
  type9: '/pages/realname/realname',      // 9 实名认证
  type10: '/pages/integral/return/return',     // 10 投诉找活信息
}
export default function System (){
  const router: RouterInfo = useRouter()
  const type: string = router.params.type
  // 初始数据
  const [data, setData] = useState<DataType>({
    item:[]
  })
  // 初始页数
  const [initPage,setPage] = useState<InitPageType>({
    page:1
  })
  // 是够能加载更多
  const [isDown,setIsDown] = useState<boolean>(true)
  // 获取用户是否登录
  const login = useSelector<any, boolean>(state => state.User['login'])

  useEffect(()=>{
    let titleTypr:string='';
  if (type == '1' || type == '8' || type == '9') {
      titleTypr = '系统提醒'
  } else if (type == '2') {
      titleTypr = '招工提醒'
  } else if (type == '3' || type == '4' || type == '5') {
      titleTypr = '找活提醒'
  } else if (type == '6' || type == '10') {
      titleTypr = '投诉提醒'
  } else if (type == '7') {
      titleTypr = '我的信息-留言'
  } 
    Taro.setNavigationBarTitle({
      title: titleTypr
    })  
    if (!login) return
    messagesType(parseInt(type))
  }, [initPage, login])
  // 请求
  const messagesType = (type:number)=>{
    const params:object = {
      type,
      page:initPage.page,
    }
    messagesTypeAction(params).then(res=>{
      Taro.hideNavigationBarLoading()
      if (!res.data.lists.length) {
        setIsDown(false)
      }
      if (initPage.page === 1) {
        setData({ item: [...res.data.lists] })
      } else {
        setData({ item: [...data.item,...res.data.lists] })
      }
    })  
  }
  // 用户页面跳转
  const userRouteJump = (type:number) => {
    let jumpType = 'type' + type
    console.log(newmessage[jumpType]);
    return;
    Taro.navigateTo({
      url: newmessage[jumpType]
    })
  }
  // 上拉加载更多
  useReachBottom(() => {
    if (!isDown) return;
    Taro.showNavigationBarLoading()
    setPage({ ...initPage, page: initPage.page + 1 })
  })
  return(
    <View>
      <Auth/>
      {data.item.map((item)=>(
        <View
          className='system-lists'
          key={item.id}
          onClick={() => userRouteJump(item.type)}>
          <View className='system-lists-top'>
            <View className='system-num' >
              <Image src={item.image_url} className='system-num-img' />
              {item.read_time == 0 && <Text className='msgNumber'></Text>}
            </View>
            <View className='system-title' >
              <View className='msgflex'>
                <Text className='msgflex-text'> {item.type_name} </Text>
                <Image src={`${IMGCDNURL}new-center-rightarrow.png`} className='rightarrow' />
              </View>
              <View className='system-deail'> {item.description} </View>
            </View>
          </View>
          <View className='system-bottom'>
            <Text className='system-deail'> 查看详情 </Text>
            <Text className='system-deail'>  {item.time} </Text>
          </View>
        </View>
      ))}
      {!isDown && data.item.length && <View className='system-noData'>没有更多数据了</View>}
    </View>
  )
}

System.config = {
  navigationBarTitleText: '',
  enablePullDownRefresh: true,
} as Config