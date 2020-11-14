import Taro, { useState, useEffect ,Config } from '@tarojs/taro'
import { View, Textarea, Input } from '@tarojs/components'
import WordsTotal from '../../../../components/wordstotal'
import { useSelector } from '@tarojs/redux'
import { InitRecruitView } from '../../../recruit/index.d'
import './index.scss'
import { useFastIssue } from '../../../../hooks/publish/fast_issue'


export default function FastIssue() {
  // 初始化当前信息
  const { issueData , inputEnter } = useFastIssue()
  // 监听输入事件
  const userInput = (e:any, key:string) =>{
    inputEnter(e, key)
  }
  return (
    <View className="issue-container">
      <View className="issue-textarea-box">
        <Textarea
          className="issue-textarea"
          placeholder="请粘贴或输入您要发布的招工信息"
          onInput={(e) => userInput(e, 'content')}
          value= "nihaoaasdfds"
        ></Textarea>
        <WordsTotal num={1} />
      </View>
      <View className="issue-contactbox">
        <View className="issue-phone">
          {/* <Image src='' mode="widthFix" className="issue-phone-image"></Image> */}
          <View className="issue-contact-title">联系电话</View>
          {/* <Image src='' mode="widthFix" className="issue-phone-image"></Image> */}
        </View>
        <View className="issue-contact-body">请确定招工联系电话，如若有误，请自行修改。</View>
        <Input className="issue-contact-input" type="number" placeholder="请输入联系电话" maxLength={11}  onInput={(e) => userInput(e, 'phone')} value={issueData.phone}></ Input>
      </View>
      <View className="issue-btn">发布招工</View>
    </View >
  )
}
FastIssue.config = {
  navigationBarTitleText: '发布招工',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config