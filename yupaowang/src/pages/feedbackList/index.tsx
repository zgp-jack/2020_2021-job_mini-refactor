import Taro, { Config, useState, useEffect, usePullDownRefresh, useReachBottom } from '@tarojs/taro'
import { View, Button, Block, Text, Image } from '@tarojs/components'
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
    item: [],
  })
  // 用户信息
  const [userData,setUserData] = useState<UserDataType>({
    phone:'',
    username:'',
  })
  // 获取用户是否登录
  const login = useSelector<any, boolean>(state => state.User['login'])
  // 是否能上拉加载更多
  const [isDown, setIsDown] = useState<boolean>(true);
  // 判断是否登陆
  useEffect(() => {
    if (!login) return
    feedbackDataAction();
  }, [login, initPage])
  // 进来时获取数据
  const feedbackDataAction = ()=>{
    feedbackAction(initPage.page).then(res => {
      Taro.hideNavigationBarLoading()
      Taro.stopPullDownRefresh();
      if (initPage.page === 1) {
        setLists({ item: [...res.data] })
      } else {
        setLists({ item: [...lists.item, ...res.data] })
      }
      setUserData(res.memberInfo);
      if (refresh) setRefresh(false)
      if (!res.data.length) {
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
  // 上拉加载更多
  useReachBottom(()=>{
    if (!isDown) return;
    Taro.showNavigationBarLoading()
    setPage({...initPage,page:initPage.page + 1})
  })
  const handleImg = (e:string)=>{
    Taro.previewImage({
      current: e,
      urls: [e]
    })
  }
  // 下拉刷新
  usePullDownRefresh(() => {
    setIsDown(true);
    setPage({page:1})
  })
  return(
    <View>
      <Auth />
      <WechatNotice/>
      {!lists.item.length && <Nodata text='暂无相关数据反馈' />}
      <View className='recruit-lists-containerbox'>
        {lists.item && lists.item.map((item) => (
          <Block key={item.id}>
            <View className='feedback-body-content'>
              <View className='superior'>
                <View className='superior-text'>
                  <text>问</text>
                </View>
                <View className='superior-content'>
                  <text>{item.content}</text>
                </View>
              </View>
              <View className='species'>
                {item.images && item.images.map((v,index) => (
                  <View className='species-box' key={index+index} onClick={()=>{handleImg(v)}}>
                    <Image className='species-box-img' src={v} />
                  </View>
                ))}
              </View>
              <View className='species-text'>{item.ask_time}</View>
              {item.is_answer &&
                <View className='superior-data'>
                  <View className='superiordati'>答</View>
                  <View className='superioredase'>
                    {item.send_msg && <Text >{item.send_msg}</Text>}
                  </View>
                </View>
              }
            </View>
          </Block>
        ))}
        {!isDown && lists.item.length && <View className='feedback-noData'>没有更多数据了</View>}
      </View>
      <View className='feedback-bttonBox'>
        <Button className='feedback-bttonBox-botton' onClick={() => userRouteJump(`/pages/feedback/index?username=${userData.username || ''}&phone=${userData.phone || ''}`)}>我要提意见</Button>
      </View>
    </View>
  )
}

FeedbackList.config = {
  navigationBarTitleText: '鱼泡网-意见反馈列表',
  enablePullDownRefresh: true,
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: 'dark'
} as Config