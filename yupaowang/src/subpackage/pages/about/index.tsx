import Taro, { Config, useDidShow } from '@tarojs/taro'
import { View, Text, Image} from '@tarojs/components'
import { SERVERPHONE, ALIYUNCDN, SERIES, BAIDUSERIES } from '../../../config'
import './index.scss'

export default function About(){
  useDidShow(()=>{
    if(SERIES == BAIDUSERIES){
      Taro.setPageInfo({
        title: '技术团队|建筑招工服务|农民工的聚集地-鱼泡建筑网',
        description: '鱼泡建筑网是由广大建筑工友与互联网专业人士共同组建而成,致力服务于全国5000万建筑工友。公司是一个由130多位精英组成的优秀团队,利用互联网大数据来改变和优化建筑行业,使建筑行业信息公开化、流程化、规范化,更好的为全国5000万建筑工友提供优质服务,充分解决了建筑工友们招工难、找活难等问题。',
        keywords: '关于鱼泡建筑网,鱼泡建筑网技术团队,优化建筑行业,服务建筑工友'
      })
    }
  })
  return (
    <View className='yupao-common-container'>
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
            <Image className='yupao-about-group-image' src={`${ALIYUNCDN}/miniprogram/images/group.png`} mode='widthFix'></Image>
          </View>
          <View className='about-group-img'>
            <Image className='yupao-about-group-image' src={`${ALIYUNCDN}/miniprogram/images/yupao-group-contnet.png`} mode='widthFix'></Image>
          </View>
          <View className='about-group-img'>
            <Image className='yupao-about-group-image' src={`${ALIYUNCDN}/miniprogram/images/ypao-group-telg.png`} mode='widthFix'></Image>
          </View>
          <View className='about-group-img'>
            <Image className='yupao-about-group-image' src={`${ALIYUNCDN}/miniprogram/images/kefu.png`} mode='widthFix'></Image>
          </View>
        </View>
        <View className='yupao-about-group'>
          <View className='about-header-title'>资质证书</View>
          <View className='about-group-img'>
            <Image className='yupao-about-group-image' src={`${ALIYUNCDN}/miniprogram/images/yupao-about-zizhizs.png`} mode='widthFix'></Image>
          </View>
        </View>
        <View className='yupao-about-footer common-shaded-box'>
          <Text className='yupao-about-footer-text'>鱼泡网值得每一位建筑人的期待，定不负你所望！</Text>
          <Text className='yupao-about-footer-text' onClick={() => { Taro.makePhoneCall({ phoneNumber: SERVERPHONE })}}>鱼泡客服热线：{SERVERPHONE}</Text>
          <Text className='yupao-about-footer-text'>鱼泡网：yupao.com</Text>
        </View>
      </View>
    </View>
  )
}
About.config = {
  navigationBarTitleText: '鱼泡网-关于我们',
} as Config