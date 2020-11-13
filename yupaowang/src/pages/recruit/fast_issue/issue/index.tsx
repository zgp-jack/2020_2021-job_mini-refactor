import Taro, { useState, useEffect ,Config } from '@tarojs/taro'
import { View, Textarea, Input } from '@tarojs/components'
import WordsTotal from '../../../../components/wordstotal'
import { useSelector } from '@tarojs/redux'
import { InitRecruitView } from '../../../recruit/index.d'
import './index.scss'
import { useFastIssue } from '../../../../hooks/publish/fast_issue'
import { usePublishData } from '../../../../hooks/publish/fastIssue'


export default function FastIssue() {
  // 定义请求参数
  const id: string = ''
  const type: string = 'job'
  const InitParams: InitRecruitView = { type: type,infoId: id }
  // 发送获取数据请求
  const { phone, setEnterInfo } = usePublishData(InitParams)

  // 初始化当前信息
  const { issueData, dataType, userEnterFrom, setIssueData } = useFastIssue()
  //  监听输入电话或者详情变化，存入缓存
  useEffect(() => {
    if (dataType == 'phone') {
      setEnterInfo(dataType, issueData[dataType])
    }
    if (dataType == 'content') {
      setEnterInfo(dataType, issueData[dataType])
    }
  },[dataType,issueData])
  // 将电话号码设置到issueData中
  setIssueData({ ...issueData, phone: phone })
  // 保存用户输入数据
  const userInput = (e:any, key:string) =>{
    userEnterFrom(e,key)
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
        <Input className="issue-contact-input" type="number"  placeholder="请输入联系电话" value={issueData.phone}></ Input>
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