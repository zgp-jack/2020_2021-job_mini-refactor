import Taro from '@tarojs/taro'
import { Swiper, Image, SwiperItem } from '@tarojs/components'
import { DEFAULT_PROPS, Props, NormalProps } from '../index'
import './index.scss'

export interface SwiperLists {
  img: string,
  url: string
}

export default function SwiperComponent({ data }: NormalProps<SwiperLists>) {
  const swiper: Props<SwiperLists> = { ...DEFAULT_PROPS, ...data }
  return (
    <Swiper
      className={swiper.classname}
      vertical={swiper.vertical}
      circular={swiper.circular}
      indicatorDots={swiper.indicatorDots}
      autoplay={swiper.autoplay}>
      {swiper.lists.map((item, index)=>(
        <SwiperItem className='index-swiper-item' key={index}>
          <Image className='index-swiper-img' src={item.img} />
        </SwiperItem>
      ))}
    </Swiper>
  )
}