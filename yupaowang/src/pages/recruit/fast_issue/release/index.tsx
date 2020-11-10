import Taro, { Config } from '@tarojs/taro'
import { View, Input, Image, Text, Switch, Button } from '@tarojs/components'
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
    <View className="issue-area-container">
      <View className="issue-tip">
        <View className="issue-contact-title">信息越完善，招工越容易</View>
      </View>
      <View className="issue-contactbox">
        <View className="issue-box">
          <Text>招工城市：</Text>
          <Input placeholder="请选择招工城市"  className="issue-input"></Input>
        </View>
        <View className="issue-box" >
          <Text>所需工种：</Text>
          <Input placeholder="请选择工种（可多选）"  className="issue-input"></Input>
          <View className="input-item-text"></View>
        </View>
        <View className="issue-form-upload">
          <View className="issue-form-header">
            <View className="issue-form-switch">上传图片： <Switch className="issue-upload-switch"/></View>
            <View className="issue-upload-tips">可上传工地现场照片、工程图纸、承包合同等</View>
          </View>
          <View className="issue-upload-show">
            <View className="issue-upload-body clearfix">
            <View className="issue-upload-item">
              <View className="imgitem-box">
                {/* <Image src="{{ item.httpurl }}"></Image> */}
                <View className="mini-del"></View>
              </View>
            </View>
            <View className="issue-upload-item">
              <View className="imgitem-box" >
                {/* <Image src="{{ upload }}" ></Image> */}
              </View>
            </View>
          </View>
        </View>
        </View>
        <Button className="issue-code-btn">确认发布</Button>
      </View>
    </View>
  )
}
FastIssue.config = {
  navigationBarTitleText: '完善信息',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config