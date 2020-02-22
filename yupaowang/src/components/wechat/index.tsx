import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { useSelector, useDispatch } from '@tarojs/redux'
import changeWechatNotice from '../../actions/wechat_notice'
import SUCCESS from '../../constants/wechat_notice'
import { WechatNoticeType } from '../../reducers/wechat_notice'
import { getWechatNotice } from '../../utils/request'
import SwiperNews, { SwiperNewsItem } from '../../components/swiper/news'
import { IProps } from '../../components/swiper/index'
import './index.scss'

export default function WechatNotice(){

  const [swiperNews, setSwiperNews] = useState<IProps<SwiperNewsItem>>({
    vertical: true,
    lists: []
  })

  const dispatch = useDispatch()
  const wechatNoticeData = useSelector<any, WechatNoticeType>(state => state.WechatNotice)

  // 获取微信号与公告列表
  useEffect(() => {
    if (wechatNoticeData.success){
      setSwiperNews({ ...swiperNews, lists: wechatNoticeData.notice })
      return
    }
    getWechatNotice().then(res => {
      res[SUCCESS] = SUCCESS
      let action = {
        type: SUCCESS,
        data: res
      }
      setSwiperNews({...swiperNews, lists: res.notice})
      dispatch(changeWechatNotice(action))
    })
  },[])

  return (
    <View className='wechatinfo-container'>
      <View className='wechat-container'>
        <Text className='wechat-addgroup'>加群：</Text>
        加工友微信号：<Text className='wechat-text'>{ wechatNoticeData.wechat.number }</Text><Text className='wechat-btn'>复制</Text>
        拉你进工人微信群。客服电话：<Text className='wechat-text'>{ wechatNoticeData.phone }</Text><Text className='wechat-btn'>呼叫</Text>
      </View>
      <View className='notice-container'>
        <Text className='notice-tips'>鱼泡资讯：</Text>
        <View className='notice-lists'>
          <SwiperNews data={ swiperNews } />
        </View>
      </View>
    </View>
  )
}