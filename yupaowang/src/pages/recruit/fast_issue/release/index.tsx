import Taro, { Config, useState } from '@tarojs/taro'
import { View, Input, Text, Switch, Button } from '@tarojs/components'
import { RecruitInfo } from '../../../../pages/recruit/index.d'
import { useSelector } from '@tarojs/redux';
import ClassifyPicker, { RulesClassfies } from '../../../../components/classfiy_picker/index'
import useRelease from '../../../../hooks/publish/release'
import './index.scss'



export default function FastIssue() {
  // 获取发布招工hook数据
  const { classifies, selectText, maxClassifyCount, choceClassfies, selectWorkType, countWorkNum } = useRelease()

  // 发布招工redux数据
  const recruitInfo: RecruitInfo = useSelector<any, RecruitInfo>(state => state.RecruitAction)
  // 工种是否显示状态
  const [showPicker, setShowPicker] = useState<boolean>(false)
  // 招工信息的定位地址信息
  const areaInfo = recruitInfo.areaInfo
  
  // 选择工种id
  const [selectIds, setSelectIds]  = useState<string[]>([])
  // 点击招工城市，跳转到城市选择页面
  function showWorkArea () {
    let url = '/pages/map/recruit/index'
    Taro.navigateTo({
      url: url
    })
  }
  function hiddenPickerModel () {
    setShowPicker(false)
  }
  function showWorkType () {
    setShowPicker(true)
  }
  function selectClassfy(data: RulesClassfies[]) {
    console.log("data", data)
    selectWorkType(data)
    countWorkNum(data)
    setShowPicker(false)
  }
  return (
    <View className="issue-area-container">
      <View className="issue-tip">
        <View className="issue-contact-title">信息越完善，招工越容易</View>
      </View>
      <View className="issue-contactbox">
        <View className="issue-box" onClick={() => showWorkArea()}>
          <Text>招工城市：</Text>
          <Input placeholder="请选择招工城市"  className="issue-input" value={areaInfo && areaInfo.info}></Input>
        </View>
        <View className="issue-box" onClick={() => showWorkType()}>
          <Text>所需工种：</Text>
          {selectText ? <View className="input-item-text">{selectText}</View> : <Input placeholder="请选择工种（可多选）" className="issue-input"></Input>}
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
      {showPicker? <ClassifyPicker
        classifies={classifies}
        hiddenPickerModel={hiddenPickerModel}
        selectClassfy={selectClassfy}
        maxClassifyCount={maxClassifyCount}
        choceClassfies={choceClassfies}
      />:''}
    </View>
  )
}
FastIssue.config = {
  navigationBarTitleText: '完善信息',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config