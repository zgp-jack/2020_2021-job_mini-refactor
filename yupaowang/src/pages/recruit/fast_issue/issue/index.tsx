import { View, Textarea, Input, Image } from '@tarojs/components'
import WordsTotal from '../../../../components/wordstotal'
import { useState } from '@tarojs/taro'


export default function FastIssue() {

  const userEnterFrom = (e: any, key: string) => {
    const value: string = e.detail.value
    // 如果是detail, 那么需要统计字数
    if (key === 'detail') {
      setNum(value.length)
    }
  }
  return (
    <View class="issue-container">
      <View class="issue-textarea-box">
        <Textarea
          class="issue-textarea"
          placeholder="请粘贴或输入您要发布的招工信息"
          onInput={(e) => userEnterFrom(e, 'detail')}
          value= { content }
          maxlength="500"
        ></Textarea>
        <WordsTotal num={num} />
      </View>
      <View class="issue-contactbox">
        <View class="issue-phone">
          <Image src='' mode="widthFix" class="issue-phone-image"></Image>
          <View class="issue-contact-title">联系电话</View>
          <Image src='' mode="widthFix" class="issue-phone-image"></Image>
        </View>
        <View class="issue-contact-body">请确定招工联系电话，如若有误，请自行修改。</View>
        <Input class="issue-contact-input" type="number" maxlength="11" placeholder="请输入联系电话" bindinput="enterPhone" value="{{ phone }"></ Input>
      </View>
      <View class="issue-btn" bindtap="publishRecurit">发布招工</View>
    </View >
  )
}