import { Block, Image, Swiper, SwiperItem, View } from "@tarojs/components";
import { Config } from "@tarojs/taro";
import { IMGCDNURL } from "../../../src/config";
import './index.scss'

export default function Turntable() {
  return (
    <View>
      <View className="yupao-common-container">
        <View className="turntable-container">
          <Image
            src={`${IMGCDNURL}turntable-daymustwin.png?t=1`}
            className="xydzpimg"
          ></Image>
          <View className="turntable-content">
            <View className="turntable-content-bg"></View>
            <View onClick={() => {}} className="turntable-btnbox"></View>
            <View className="turntable-shade"></View>
          </View>

          <View className="turntable-footer">
            <View className="turntable-footer-item">
              <View className="turntable-names-scroll">
                <View className="index-swiperbox">
                  <View className="index-Swiper-opacity"></View>
                  <View className="turntable-names-tips">中奖名单</View>
                  <Swiper className="scorllname-Swiper">
                    <Block>
                      <SwiperItem>
                        <View className="scrollname-item"></View>
                      </SwiperItem>
                    </Block>
                  </Swiper>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

Turntable.config = {
  navigationBarTitleText: "鱼泡网大转盘",
  navigationBarBackgroundColor: "#e9463f",
} as Config;
