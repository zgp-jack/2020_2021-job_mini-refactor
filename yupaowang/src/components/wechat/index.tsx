import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import SwiperNews, { SwiperNewsItem } from '../../components/swiper/news'
import { IProps } from '../../components/swiper/index'
import './index.scss'

const SWIPER_NEWS: IProps<SwiperNewsItem> = {
  vertical: true,
  lists: [
    {
      url: '',
      text: '这个是我的公告内容你要看看嘛'
    },
    {
      url: '',
      text: '公告内容你要看看嘛dfsd的说法地方'
    },
    {
      url: '',
      text: '看看嘛这个是我的公告内容你要'
    },
  ]
}

export default function WechatNotice(){
  return (
    <View className='wechatinfo-container'>
      <View className='wechat-container'>
        <Text className='wechat-addgroup'>加群：</Text>
        加工友微信号:<Text className='wechat-text'>1234567890</Text><Text className='wechat-btn'>复制</Text>
        拉你进工人微信群。客服电话：<Text className='wechat-text'>400-833-1578</Text><Text className='wechat-btn'>呼叫</Text>
      </View>
      <View className='notice-container'>
        <Text className='notice-tips'>鱼泡资讯：</Text>
        <View className='notice-lists'>
          <SwiperNews data={ SWIPER_NEWS } />
        </View>
      </View>
    </View>
  )
}