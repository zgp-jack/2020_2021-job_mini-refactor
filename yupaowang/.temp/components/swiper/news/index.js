import Taro from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { Swiper, SwiperItem, View } from '@tarojs/components';
import { DEFAULT_PROPS } from '../index';
import './index.scss';
import { userJumpPage } from "../../../utils/helper/index";
export default class SwiperNews extends Taro.Component {
  render() {
    const { data } = this.props;

    const swiper = { ...DEFAULT_PROPS, ...data };
    return <Swiper className="home-swipernewsbox" vertical={swiper.vertical} circular={swiper.circular} indicatorDots={swiper.indicatorDots} autoplay={swiper.autoplay}>
      {swiper.lists.map(item => <SwiperItem className="home-swipernews-item" key={item.id} onClick={() => userJumpPage(`/pages/static/notice/index?id=${item.id}`)}>
          <View className="home-swipernews-text overwords">{item.title}</View>
        </SwiperItem>)}
    </Swiper>;
  }

}