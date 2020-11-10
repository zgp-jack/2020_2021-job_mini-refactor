import Taro, { Config } from '@tarojs/taro'
import { View, Input, Image, Text } from '@tarojs/components'
import WordsTotal from '../../../../components/wordstotal'
import { useState } from '@tarojs/taro'
import './index.scss'


export default function FastIssue() {

  const userEnterFrom = (e: any, key: string) => {
    const value: string = e.detail.value
    // 如果是detail, 那么需要统计字数
    if (key === 'detail') {
      setNum(value.length)
    }
  }
  return (
    <View className="code-container">
      <View className="issue-contactbox">
        <View className="issue-tip">
          {/* <Image src="{{ imageUrl }}" mode="widthFix" className="issue-tip-image"></Image> */}
          <View className="issue-contact-title">温馨提示</View>
          {/* <Image src="{{ imageUrl }}" mode="widthFix" className="issue-tip-image"></Image> */}
        </View>
        <View className="issue-contact-body">为了确保本条招工信息的真实性，鱼泡网已经向手机号<Text></Text>发送验证码，请您将收到的验证码填写到下方输入框内。</View>
        <View className="issue-code-box">
          <Text>验证码：</Text>
          <Input className="issue-contact-input" placeholder="请输入验证码"></Input>
        </View>
        <View className="issue-code-tips">
          <View className="issue-code-words">没有收到验证码</View>
          <View className="issue-code-reget">重新获取</View>
        </View>
        <View className="issue-code-btn">确认发布</View>
      </View>
    </View>
  )
}
FastIssue.config = {
  navigationBarTitleText: '手机号验证',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config