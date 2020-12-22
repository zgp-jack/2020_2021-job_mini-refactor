import Taro, { useEffect, useState, Config } from "@tarojs/taro";
import { View, Text, Image, Block } from "@tarojs/components";
import { IMGCDNURL, SERVERPHONE, INVITEPATH, SHOWINVITEUSER, SHOWSERVERPHONE } from "../../config";
import { userJumpPage } from "../../utils/helper";
import "./index.scss";
import Auth from '../../components/auth'
import { memberTurntable } from "../../../src/utils/request";
import classnames from "classnames";

interface TurntableType {
  showBtn: number;
  show: number;
}

export default function GetIntegral() {
  const [ios, setIos] = useState<boolean>(true);
  // 用户拨打电话
  const userCallPhone = () => {
    Taro.makePhoneCall({ phoneNumber: SERVERPHONE });
  };

  const [turntable, setTurntable] = useState<TurntableType>({
    showBtn: 0,
    show: 0
  });

  // 判断客户端
  useEffect(() => {
    // memberTurntable().then(res => {
    //   if (res.errcode == "ok") {
    //     let { is_turntable, show_turntable } = res.data;
    //     turntable.showBtn = Number(is_turntable);
    //     turntable.show = Number(show_turntable);
    //     setTurntable({ ...turntable });
    //   }
    // });
    let system: Taro.getSystemInfoSync.Result = Taro.getSystemInfoSync();
    if (system.platform !== "ios") setIos(false);
  }, []);

  return (
    <Block>
    <Auth />
    <View className="getintegral-container">
      <View className="getintegral-body">
        {SHOWINVITEUSER &&
        <View className="getintegral-item">
          <View className="getintegral-item-title">邀请工友获取积分</View>
          <View className="getintegral-item-content">
            每成功邀请一位工友注册，最高可获得2-18积分。（推荐）
          </View>
          <View
            className="getintegral-item-btn"
              onClick={() => userJumpPage(INVITEPATH)}
          >
            去邀请
          </View>
        </View>}
        {!ios && (
          <View className="getintegral-item">
            <View className="getintegral-item-title">充值获取积分</View>
            <View className="getintegral-item-content">
              充值付钱购买积分。（我们不鼓励付钱购买，我们希望大家多帮忙宣传）
            </View>
            <View
              className="getintegral-item-btn"
              onClick={() => userJumpPage("/pages/recharge/index")}
            >
              去充值
            </View>
          </View>
        )}
        {turntable.show ? (
          <View className="getintegral-item">
            <View className="getintegral-item-title">玩游戏，赚积分</View>
            <View className="getintegral-item-content">
              玩游戏，每天可获1~300分。（推荐）
            </View>
            <View
              onClick={() => userJumpPage("/subpackage/pages/turntable/index")}
              className={classnames({
                "getintegral-item-btn": true,
                "getintegral-list-btn-dis": !turntable.showBtn
              })}
            >
              {turntable.showBtn ? "去看看" : "已完成"}
            </View>
          </View>
        ) : (
          ""
        )}
      </View>
      <View className="getintegral-footer">
        <View className="getintegral-footer-header">
          {" "}
          <Image
            className="tips-icon"
            src={`${IMGCDNURL}integral/new-integral-tips-icon.png`}
          />
          <text>温馨提示</text>
          <Image
            className="tips-icon"
            src={`${IMGCDNURL}integral/new-integral-tips-icon.png`}
          />
        </View>
        {SHOWSERVERPHONE &&
        <Block>
        如果有任何疑问，请拨打客服电话：
        <Text className="getintegral-tel" onClick={() => userCallPhone()}>
          {SERVERPHONE}
        </Text>
        。
        </Block>}
        鱼泡网投入大量的人力物力开发平台、审核信息，免费服务千万工友。因此请大家帮忙多邀请工友注册，感谢您对鱼泡网的支持！
      </View>
    </View>
    </Block>
  );
}

GetIntegral.config = {
  navigationBarTitleText: "鱼泡网-获取积分"
} as Config;
