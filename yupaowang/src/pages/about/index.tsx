import Taro, { Config } from '@tarojs/taro'
import { View, Text, Image} from '@tarojs/components'
import { SERVERPHONE } from "../../config"
import './index.scss'

export default function About(){
  return (
    <View className="yupao-common-container">
      <View className='about-content'>
        <View className='about-content-header'>
          <View className='about-content-headerbox common-shaded-box'>
            <View className='about-header-title'>鱼泡网</View>
            <View className='about-header-words'>鱼泡网是由建筑资深工友同互联网专业人士共同组建的，致力于为全国5000万建筑工人服务。公司90人的团队每天都在进步，竭尽全力用互联网大数据的方式来改变同优化建筑行业的乱象，使信息更对称、工作流程更规范、有据可查。</View>
          </View>
        </View>
        <View className='about-yupao-industry common-shaded-box clearfix'>
          <View className='about-industry-content'>
            <View className='about-industry-item'>
              <View className='about-industry-item-title'>鱼泡招工：</View>
              <View className='about-industry-item-body'>解决老板招工难，工人找活途径单一。</View>
            </View>
            <View className='about-industry-item'>
              <View className='about-industry-item-title'>鱼泡工具商城：</View>
              <View className='about-industry-item-body'>帮工人买到好用且价格实在的施工工具、施工耗材。</View>
            </View>

            <View className='about-industry-item'>
              <View className='about-industry-item-title'>鱼泡机械：</View>
              <View className='about-industry-item-body'>解决工地找机械难，多余机械出租难的问题。</View>
            </View>
          </View>
          <View className='about-industry-content'>
            <View className='about-industry-item'>
              <View className='about-industry-item-title'>鱼泡招标：</View>
              <View className='about-industry-item-body'>免费提供全国工程招标采购信息。</View>
            </View>
            <View className='about-industry-item'>
              <View className='about-industry-item-title'>鱼泡建筑通：</View>
              <View className='about-industry-item-body'>免费提供全国建筑企业资质、中标、在建项目等信息。</View>
            </View>
            <View className='about-industry-item'>
              <View className='about-industry-item-title'>鱼泡出国劳务平台：</View>
              <View className='about-industry-item-body'>帮想出国的工人找到靠谱的代办中介。</View>
            </View>
          </View>
        </View>
        <View className='yupao-about-group yupao-about-groupb'>
          <View className='about-header-title'>团队风采</View>
          <View className='about-group-img'>
            <Image src='http://cdn.yupao.com/miniprogram/images/group.png' mode="widthFix"></Image>
          </View>
          <View className='about-group-img'>
            <Image src='http://cdn.yupao.com/miniprogram/images/yupao-group-contnet.png' mode="widthFix"></Image>
          </View>
          <View className='about-group-img'>
            <Image src='http://cdn.yupao.com/miniprogram/images/ypao-group-telg.png' mode="widthFix"></Image>
          </View>
          <View className='about-group-img'>
            <Image src='http://cdn.yupao.com/miniprogram/images/kefu.png' mode="widthFix"></Image>
          </View>
        </View>
        <View className='yupao-about-group'>
          <View className='about-header-title'>资质证书</View>
          <View className='about-group-img'>
            <Image src='http://cdn.yupao.com/miniprogram/images/yupao-about-zizhizs.png' mode="widthFix"></Image>
          </View>
        </View>
        <View className='yupao-about-footer common-shaded-box'>
          <Text>鱼泡网值得每一位建筑人的期待，定不负你所望！</Text>
          <Text onClick={() => { Taro.makePhoneCall({ phoneNumber: SERVERPHONE })}}>鱼泡客服热线：{SERVERPHONE}</Text>
          <Text>鱼泡网：yupao.com</Text>
        </View>
      </View>
    </View>
  )
}
About.config = {
  navigationBarTitleText: '鱼泡网-关于我们',
} as Config