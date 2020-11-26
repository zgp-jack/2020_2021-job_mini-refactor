import Taro, { Config } from '@tarojs/taro'
import { View, Textarea, Input, Image, Block } from '@tarojs/components'
// import WordsTotal from '../../../../components/wordstotal'
import { useFastIssue } from '../../../../hooks/publish/fastIssue/fast_issue'
import { IMGCDNURL } from '../../../../config'
import Auth from '../../../../components/auth'
import './index.scss'


export default function FastIssue() {
  // 初始化当前信息
  const { telPhone, content, inputEnter, fastPublish, showPhoneBox } = useFastIssue()
  // 监听输入事件
  const userInput = (e:any, key:string) =>{
    inputEnter(e, key)
  }
  return (
    <Block>
    <Auth />
    <View className="issue-container">
      <View className="issue-textarea-box">
        <Textarea
          className="issue-textarea"
          placeholder="请粘贴或输入您要发布的招工信息"
          onInput={(e) => userInput(e, 'content')}
          value={content}
          maxlength = {500}
        ></Textarea>
        {/* <WordsTotal num={num} /> */}
      </View>
      {showPhoneBox?<View className="issue-contactbox">
        <View className="issue-phone">
          <Image src={`${IMGCDNURL}new-publish-title-t-icon.png` } mode="widthFix" className="issue-phone-image"></Image>
          <View className="issue-contact-title">联系电话</View>
          <Image src={`${IMGCDNURL}new-publish-title-t-icon.png`} mode="widthFix" className="issue-phone-image"></Image>
        </View>
        <View className="issue-contact-body">请确定招工联系电话，如若有误，请自行修改。</View>
          <Input className="issue-contact-input" type="number" placeholder="请输入联系电话" maxLength={11} onInput={(e) => userInput(e, 'phone')} value={telPhone}></ Input>
      </View>:''}
      <View className="issue-btn" onClick={() => fastPublish()}>发布招工</View>
    </View >
    </Block>
  )
}
FastIssue.config = {
  navigationBarTitleText: '发布招工',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config