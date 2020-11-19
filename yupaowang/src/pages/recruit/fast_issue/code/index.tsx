import Taro, { Config, useEffect, useState } from '@tarojs/taro'
import { View, Input, Text, Image } from '@tarojs/components'
import useCode  from '../../../../hooks/code/index'
import { useSelector } from '@tarojs/redux'
import { RecruitInfo, VaildCodeReq } from '../../../../pages/recruit/index.d'
import { checkCode } from '../../../../utils/request/index'
import Msg from '../../../../utils/msg'
import { IMGCDNURL } from '../../../../config'

import './index.scss'



export default function FastIssue() {
  // 初始化获取验证码
  const { text, userGetCode, timer } = useCode(true)
  // redux中存入的发布数据
  const recruitInfo: RecruitInfo = useSelector<any, RecruitInfo>(state => state.RecruitAction)
  // 手机验证码
  const [code, setCode] = useState<string>('')
  useEffect(()=>{
    timer()
  },[])
  // 发送、获取验证码
  function getCode () {
    let phone:string = recruitInfo.phone
    userGetCode(phone)
  }
  // 验证码校验
  function vaildCode () {
    // 请求参数
    let params: VaildCodeReq = {
      token: recruitInfo.token,
      code: code,
      phone: recruitInfo.phone
    }
    // 发送验证请求，验证通过跳转到城市工种选择页
    checkCode(params).then(res => {
      if(res.errcode == 'ok'){
        Taro.navigateTo({
          url: '/pages/recruit/fast_issue/release/index',
        })
      }else{
        Msg(res.errmsg)
      }
    })
  }
  // 验证码输入信息
  function userInputCode (e) {
    const value: string = e.detail.value
    setCode(value)
  }
  return (
    <View className="code-container">
      <View className="issue-contactbox">
        <View className="issue-tip">
          <Image src={`${IMGCDNURL}new-publish-title-t-icon.png`} mode="widthFix" className="issue-tip-image"></Image>
          <View className="issue-contact-title">温馨提示</View>
          <Image src={`${IMGCDNURL}new-publish-title-t-icon.png`} mode="widthFix" className="issue-tip-image"></Image>
        </View>
        <View className="issue-contact-body">为了确保本条招工信息的真实性，鱼泡网已经向手机号<Text>{recruitInfo.phone}</Text>发送验证码，请您将收到的验证码填写到下方输入框内。</View>
        <View className="issue-code-box">
          <Text>验证码：</Text>
          <Input className="issue-contact-input" placeholder="请输入验证码" onInput={(e) => userInputCode(e)}></Input>
        </View>
        <View className="issue-code-tips">
          <View className="issue-code-words">没有收到验证码?</View>
          <View className="issue-code-reget" onClick={()=>getCode()}>{text}</View>
        </View>
        <View className="issue-code-btn" onClick={() => vaildCode()}>确认发布</View>
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