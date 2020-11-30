import Taro, { useState, useEffect, Config, useRouter, RouterInfo, useReachBottom } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { messagesTypeAction } from '../../../../utils/request';
import { systemDataList } from '../../../../utils/request/index.d'
import { IMGCDNURL } from '../../../../config'
import Nodata from '../../../../components/nodata'
import { isIos } from '../../../../utils/v'
import './index.scss'

interface DataType {
  item: systemDataList[],
}
interface InitPageType{
  page: number
}
// 默认跳转路径
const newmessageinfo = {
  1: {
    title: '系统信息',
    url: '',
    titleText:'系统提醒',
    },
  2: {
    title:'招工信息',
    url: '/pages/published/recruit/index',
    titleText: '招工提醒',
  },
  3: {
    title: '名片信息',
    url: '/pages/resume/publish/index',
    titleText: '找活提醒',
  },
  4: {
    title: '证书信息',
    url: '/pages/resume/skills/index',
    titleText: '找活提醒',
  },
  5: {
    title: '项目信息',
    url: '/pages/resume/projects/index',
    titleText: '找活提醒',
  },
  6: {
    title: '投诉招工信息',
    url: '/pages/integral/tabber/index',
    titleText: '投诉提醒',
  },
  7: {
    title: '留言信息',
    url: '/pages/feedbacklist/index',
    titleText: '我的信息-留言',
  },
  8: {
    title: '积分管理',
    url: '/pages/integral/tabber/index',
    titleText: '系统提醒',
  },
  9: {
    title: '实名认证',
    url: '/pages/realname/index',
    titleText: '系统提醒',
  },
  10: {
    title: '投诉找活信息',
    url: '/pages/integral/tabber/index',
    titleText: '投诉提醒',
  }
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
  // 判断是否是ios
  const [ios, setIos] = useState<boolean>(false)

  useEffect(()=>{
    // 判断是安卓还是苹果
    setIos(isIos())
    let terminal_type = ios ? 'ios' : 'android';
    let ListType:number = parseInt(type);
    Taro.setNavigationBarTitle({
      title: newmessageinfo[ListType].titleText
    })  
    messagesType(parseInt(type), terminal_type)
  }, [initPage])
  // 请求
  const messagesType = (type: number, terminal_type:string)=>{
    const params = {
      type,
      page:initPage.page,
      terminal_type,
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
  const userRouteJump = (type:number, index: number) => {
    let lists = JSON.parse(JSON.stringify(data.item))
    let time: number = new Date().getTime()
    lists[index].read_time = time
    setData({item: [...lists]})
    Taro.navigateTo({
      url: newmessageinfo[type].url
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
      {!data.item.length && <Nodata />}
      {data.item.map((item,index)=>(
        <View
          className='system-lists'
          key={item.id}
          onClick={() => userRouteJump(item.type, index)}>
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