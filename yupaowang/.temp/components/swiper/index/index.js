import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { Swiper, Image, SwiperItem } from '@tarojs/components';
import { DEFAULT_PROPS } from ".";
import './index.scss';
export default class SwiperComponent extends Taro.Component {
  render() {
    const { data } = this.props;

    const swiper = { ...DEFAULT_PROPS, ...data };
    return <Swiper className="index-swiper-container" vertical={swiper.vertical} circular={swiper.circular} indicatorDots={swiper.indicatorDots} autoplay={swiper.autoplay}>
      {swiper.lists.map((item, index) => <SwiperItem className="index-swiper-item" key={index + index}>
          <Image className="index-swiper-img" src={item.banner} />
        </SwiperItem>)}
    </Swiper>;
  }

}