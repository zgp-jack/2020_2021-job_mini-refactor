import Taro from '@tarojs/taro'
import { Swiper, Image, SwiperItem } from '@tarojs/components'
import { DEFAULT_PROPS, Props, NormalProps } from '../index'
import './index.scss'
import { BannerNoticeBanner } from '../../../utils/request/index.d'

export default function SwiperComponent({ data }: NormalProps<BannerNoticeBanner>) {
  const swiper: Props<BannerNoticeBanner> = { ...DEFAULT_PROPS, ...data }
  return (
    <Swiper
      className='index-swiper-container'
      vertical={swiper.vertical}
      circular={swiper.circular}
      indicatorDots={swiper.indicatorDots}
      autoplay={swiper.autoplay}>
      {swiper.lists.map((item, index)=>(
        <SwiperItem className='index-swiper-item' key={index}>
          <Image className='index-swiper-img' src={ item.banner } />
        </SwiperItem>
      ))}
    </Swiper>
  )
}