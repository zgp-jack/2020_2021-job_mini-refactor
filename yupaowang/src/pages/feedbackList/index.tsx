import Taro, { Config, useState, useEffect } from '@tarojs/taro'
import { View, Button, Block, Text, Image, ScrollView } from '@tarojs/components'
import WechatNotice from '../../components/wechat'
import Nodata from '../../components/nodata'
import { feedbackAction  } from '../../utils/request'
import { feedbackListData } from '../../utils/request/index.d'
import Auth from '../../components/auth'
import { useSelector } from '@tarojs/redux'
import './index.scss'

// 页数
export interface PageType {
  page: number,
}
//数据
export interface ItmeType {
  item: feedbackListData[],
}
// 用户数据
export interface UserDataType{
  phone:string,
  username:string,
}
export default function FeedbackList() {
  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // 设置初始页面
  const [initPage, setPage] = useState<PageType>({
    page: 1
  })
  // 定义数据
  const [lists, setLists] = useState<ItmeType>({
    item: []
  })
  // 用户信息
  const [userData,setUserData] = useState<UserDataType>({
    phone:'',
    username:'',
  })
  // 获取用户是否登录
  const login = useSelector<any, boolean>(state => state.User['login'])
  // 是否能下啦加载更多
  const [isDown, setIsDown] = useState<boolean>(true);
  // 判断是够登陆
  useEffect(() => {
    if (!login) return
    feedbackDataAction();
  }, [login, initPage])
  // 进来时获取数据
  const feedbackDataAction = ()=>{
    feedbackAction(initPage.page).then(res => {
      Taro.hideNavigationBarLoading()
      if (initPage.page === 1) {
        setLists({ item: [...res.data] })
      } else {
        setLists({ item: [...lists.item, ...res.data] })
      }
      setUserData(res.memberInfo);
      if (refresh) setRefresh(false)
      if (res.data.length === 0) {
        setIsDown(false)
      }
    })
  }
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  const getNextPageData = ()=>{
    if (!isDown) return;
    Taro.showNavigationBarLoading()
    setPage({...initPage,page:initPage.page + 1})
  }
  const handleImg = (e:string)=>{
    Taro.previewImage({
      current: e,
      urls: [e]
    })
  }
  return(
    <View>
      <Auth />
      <WechatNotice/>
      {!lists.item.length && <Nodata text='暂无相关数据反馈' />}
      <ScrollView
        className='recruit-lists-containerbox'
        scrollY
        refresherEnabled
        refresherTriggered={refresh}
        lowerThreshold={200}
        onScrollToLower={() => getNextPageData()}
      >
        {lists.item && lists.item.map((item) => (
          <Block key={item.id}>
            <View className='feedback-body-1'>
              <View className='superior'>
                <View className='superior-1'>
                  <text>问</text>
                </View>
                <View className='superior-2'>
                  <text>{item.content}</text>
                </View>
              </View>
              <View className='species'>
                {item.images && item.images.map((v) => (
                  <View className='species-1' key={v} onClick={()=>{handleImg(v)}}>
                    <Image style={{ width: '100%', height: '85px' }} src={v} />
                  </View>
                ))}
              </View>
              <View className='species-text'>{item.ask_time}</View>
              {item.is_answer &&
                <View className='superior-1s'>
                  <View className='superiordati'>答</View>
                  <View className='superioredase'>
                    {item.send_msg && <Text >{item.send_msg}</Text>}
                  </View>
                </View>
              }
            </View>
          </Block>
        ))}
        {/* {!isDown && <View className='feedback-noData'>没有更多数据了</View>} */}
      </ScrollView>
      <View className='feedback-bttonBox'>
        <Button className='feedback-bttonBox-botton' onClick={() => userRouteJump(`/pages/feedback/index?username=${userData.username}&phone=${userData.phone}`)}>我要提意见</Button>
      </View>
    </View>
  )
}

FeedbackList.config = {
  navigationBarTitleText: '鱼泡网-意见反馈列表',
} as Config