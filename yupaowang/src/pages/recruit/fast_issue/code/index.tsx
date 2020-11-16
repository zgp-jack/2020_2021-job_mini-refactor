import Taro, { Config } from '@tarojs/taro'
import { View, Input, Image, Text } from '@tarojs/components'
import { useCode } from '../../../../hooks/publish/getCode'
import './index.scss'



export default function FastIssue() {
  // 初始化获取验证码
  const { codeTime, getCode, disabled, vaildCode, inputEnter } = useCode(true)
  // 发送、获取验证码
  function userGetCode () {
    getCode()
  }
  // 验证码校验
  function checkCode () {
    vaildCode()
  }
  // 验证码输入信息
  function userInputCode (e) {
    inputEnter(e)
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
          <Input className="issue-contact-input" placeholder="请输入验证码" onInput={(e) => userInputCode(e)}></Input>
        </View>
        <View className="issue-code-tips">
          <View className="issue-code-words">没有收到验证码?{codeTime?<Text>{codeTime}秒后可重新获取</Text>:''}</View>
          {disabled ? '' : <View className="issue-code-reget" onClick={()=>userGetCode()}>重新获取</View>}
        </View>
        <View className="issue-code-btn" onClick={() => checkCode()}>确认发布</View>
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