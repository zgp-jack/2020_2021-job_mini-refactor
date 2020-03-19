import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { SERVERPHONE } from '../../config'
import { userJumpPage } from '../../utils/helper'
import './index.scss'

export default function GetIntegral(){

  const [ios, setIos] = useState<boolean>(true)
  // 用户拨打电话
  const userCallPhone = ()=> {
    Taro.makePhoneCall({ phoneNumber: SERVERPHONE })
  }
  // 判断客户端
  useEffect(()=>{
    let system: Taro.getSystemInfoSync.Result = Taro.getSystemInfoSync()
    if (system.platform !== 'ios') setIos(false)
  },[])

  return (
    <View className='getintegral-container'>
      <View className='getintegral-header'>
        <Text className='getintegral-notice'>公告：</Text>如果有任何疑问，请拨打客服电话：<Text className='getintegral-tel' onClick={() => userCallPhone()}>{SERVERPHONE}</Text><Text className='getintegral-tel-copy' onClick={() => userCallPhone()}>呼叫</Text>。鱼泡网投入大量的人力物力开发平台、审核信息，免费服务千万工友。因此请大家帮忙多邀请工友注册，感谢您对鱼泡网的支持！
      </View>
      <View className='getintegral-body'>
        <View className='getintegral-title'>如何获取积分</View>
        <View className='getintegral-item'>
          <View className='getintegral-item-title'>邀请工友获取积分</View>
          <View className='getintegral-item-content'>每成功邀请一位工友注册，最高可获得2-18积分。（推荐）</View>
          <View className='getintegral-item-btn' onClick={() => userJumpPage('/pages/invite/index')}>去邀请</View>
        </View>
        {!ios &&
        <View className='getintegral-item'>
          <View className='getintegral-item-title'>充值获取积分</View>
          <View className='getintegral-item-content'>充值付钱购买积分。（我们不鼓励付钱购买，我们希望大家多帮忙宣传）</View>
          <View className='getintegral-item-btn' onClick={() => userJumpPage('/pages/recharge/index')}>去充值</View>
        </View>
        }
      </View>
    </View>
  )
}