import Taro, { Config } from '@tarojs/taro'
import { View, Textarea, Input, Image } from '@tarojs/components'
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
    <View className="issue-container">
      <View className="issue-textarea-box">
        <Textarea
          className="issue-textarea"
          placeholder="请粘贴或输入您要发布的招工信息"
          onInput={(e) => userEnterFrom(e, 'detail')}
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
        <Input className="issue-contact-input" type="number"  placeholder="请输入联系电话"></ Input>
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