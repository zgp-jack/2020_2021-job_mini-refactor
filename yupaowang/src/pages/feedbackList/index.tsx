import Taro, { Config, useState, useEffect } from '@tarojs/taro'
import { View, Button, Block, Text, Image } from '@tarojs/components'
import WechatNotice from '../../components/wechat'
import Nodata from '../../components/nodata'
import { feedbackAction  } from "../../utils/request"
import { feedbackListData } from "../../utils/request/index.d"
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
  useEffect(() => {
    feedbackAction(initPage.page).then(res =>{
      Taro.hideNavigationBarLoading()
      setLists({item:[...res.data]})
      setUserData(res.memberInfo);
    })
  }, [initPage])

  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }

  return(
    <View>
      <WechatNotice/>
      {!lists.item.length && <Nodata text='暂无相关数据反馈' />}
      {lists.item && lists.item.map((item)=>(
        <Block key={item.id}>
          <View className="feedback-body-1">
            <View className="superior">
              <View className="superior-1">
                <text>问</text>
              </View>
              <View className="superior-2">
                <text>{ item.content }</text>
              </View>
            </View>
            <View className="species">
              {item.images && item.images.map((v)=>(
                <View className="species-1" key={v}>
                    <Image style={{width:'100%',height:'85px'}} src={v} />
                </View>
              ))}
            </View>
            <View className="species-text">{ item.ask_time }</View>
            {item.is_answer && 
              <View className="superior-1s">
                <View className="superiordati">答</View>
                <View className="superioredase">
                  {item.send_msg && <Text >{item.send_msg}</Text>}
                </View>
              </View>
            }
            {item.is_answer && 
              <View className="superior-1s">
                <View className="superiordati">答</View>
                <View className="superioredase">
                  {item.send_msg && <Text >{item.send_msg}</Text>}
                </View>
              </View>
            }
          </View>
        </Block>
      ))}
      <View className='feedback-bttonBox'>
        <Button className="feedback-bttonBox-botton" onClick={() => userRouteJump(`/pages/feedback/index?username=${userData.username}&phone=${userData.phone}`)}>我要提意见</Button>
      </View>
    </View>
  )
}

FeedbackList.config = {
  navigationBarTitleText: '鱼泡网-意见反馈列表',
} as Config