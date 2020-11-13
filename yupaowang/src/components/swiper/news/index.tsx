import Taro from '@tarojs/taro'
import { Swiper, SwiperItem, View } from '@tarojs/components'
import { DEFAULT_PROPS, Props, NormalProps } from '../index'
import { BannerNoticeNotice } from '../../../utils/request/index.d'
import './index.scss'
import { userJumpPage } from '../../../utils/helper'

export default function SwiperNews({ data }: NormalProps<BannerNoticeNotice>){
  const swiper: Props<BannerNoticeNotice> = { ...DEFAULT_PROPS, ...data }
  return (
    <Swiper
      className='home-swipernewsbox'
      vertical={swiper.vertical}
      circular={swiper.circular}
      indicatorDots={swiper.indicatorDots}
      autoplay={swiper.autoplay}>
      {swiper.lists.map((item) => (
        <SwiperItem className='home-swipernews-item' key={item.id} onClick={()=>userJumpPage(`/pages/static/notice/index?id=${item.id}`)}>
          <View className='home-swipernews-text overwords'>{ item.title }</View>
        </SwiperItem>
      ))}
    </Swiper>
  )
}