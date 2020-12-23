import Taro, { Config, useDidShow, useState } from '@tarojs/taro'
import { View, Input, Text, Switch, Button, Image } from '@tarojs/components'
import { RecruitInfo } from '../../../../pages/recruit/index.d'
import { useSelector } from '@tarojs/redux';
import ClassifyPicker, { RulesClassfies } from '../../../../components/classfiy_picker/index'
import useRelease from '../../../../hooks/publish/fastIssue/release'
import { IMGCDNURL, USEGAODEMAPAPI } from '../../../../config'
import UploadImgAction from '../../../../utils/upload'
import CityPicker, { CityTownPicker } from '../../../../components/city_picker/index'
import './index.scss'



export default function FastIssue() {
  // 获取发布招工hook数据
  const { classifyTree, selectText, maxClassifyCount, choceClassfies, selectWorkType, setShowUpload, showUpload, image, setImage, maxImageCount, pulishFindWorker, setAreaId } = useRelease()

  // 发布招工redux数据
  const recruitInfo: RecruitInfo = useSelector<any, RecruitInfo>(state => state.RecruitAction)
  // 工种是否显示状态
  const [showPicker, setShowPicker] = useState<boolean>(false)
  // 招工信息的定位地址信息
  const areaInfo = recruitInfo.areaInfo
  
  useDidShow(()=>{
    let pages: Taro.Page[] = Taro.getCurrentPages();
    if(pages.length > 1 ){
      //上一个页面实例对象
      var prePage = pages[pages.length - 2];
      // 如果上一页是发布招工填写招工详情页面，设置标识信息
      if (prePage.route == 'pages/recruit/fast_issue/issue/index'){
        prePage.setData({pageMark:true})
      }
    }
  })
  // 点击招工城市，跳转到城市选择页面
  function showWorkArea() {
    let url = '/pages/map/recruit/index'
    Taro.navigateTo({
      url: url
    })
  }
  function hiddenPickerModel() {
    setShowPicker(false)
  }
  function showWorkType() {
    setShowPicker(true)
  }
  function selectClassfy(data: RulesClassfies[]) {
    selectWorkType(data)
    setShowPicker(false)
  }
  // 切换上传图片
  function switchClick() {
    setShowUpload(!showUpload)
  }
  // 用户上传图片
  function userUploadImg (i:number = -1){
    UploadImgAction().then(res=>{
      let imageItem = {
        url: res.url,
        httpurl: res.httpurl
      }
      setImage([...image, imageItem])
      if(image){
        if (i === -1) {
          setImage([...image, imageItem])
        } 
      }
    })
  }

  // 用户删除图片
  function userDelImg (i: number){
    if(!image) return
    let images = [...image]
    images.splice(i,1)
    setImage(images)
  }
  // 确定发布招工
  function recuritFindWork () {
    pulishFindWorker()
  }
  //城市选择组件点击确定
  const selectCity = (data: CityTownPicker) => {
    setAreaId(data[1].id)
  }


  return (
    <View className="issue-area-container">
      <View className="issue-tip">
        <View className="issue-contact-title">信息越完善，招工越容易</View>
      </View>
      <View className="issue-contactbox">
        <View className="issue-box">
          <Text>招工城市：</Text>
          {USEGAODEMAPAPI?
            <Input placeholder="请选择招工城市" className="issue-input" onClick={() => showWorkArea()} value={areaInfo && areaInfo.title}></Input>
            :
            <CityPicker onCity={selectCity} modle={{}}></CityPicker>
          }
        </View>
        <View className="issue-box" onClick={() => showWorkType()}>
          <Text>所需工种：</Text>
          {selectText ? <View className="input-item-text">{selectText}</View> : <Input placeholder="请选择工种（可多选）" disabled={true} className="issue-input"></Input>}
        </View>
        <View className="issue-form-upload">
          <View className="issue-form-header">
            <View className="issue-form-switch">上传图片： <Switch className="issue-upload-switch" color="#04BE02" onClick={() => switchClick()} checked={showUpload}/></View>
            <View className="issue-upload-tips">可上传工地现场照片、工程图纸、承包合同等</View>
          </View>
          {showUpload ? <View className="issue-upload-show">
            <View className="issue-upload-body clearfix">
              {image.length != 0 && image.map((item,index)=>(
                <View className="issue-upload-item">
                  <View className="imgitem-box">
                    <Image src={item.httpurl}></Image>
                    <View className="mini-del" onClick={()=>userDelImg(index) }></View>
                  </View>
                </View>
              ))}
              {image.length < maxImageCount?
              <View className="issue-upload-item" onClick={()=>userUploadImg()}>
                <View className="imgitem-box" >
                  <Image src={`${IMGCDNURL}mini-new-publish-upload-img.png`} ></Image>
                </View>
              </View>:''}
            </View>
          </View>:''}
        </View>
        <Button className="issue-code-btn" onClick={()=>recuritFindWork()}>确认发布</Button>
      </View>
      {showPicker ? <ClassifyPicker
        classifies={classifyTree}
        hiddenPickerModel={hiddenPickerModel}
        selectClassfy={selectClassfy}
        maxClassifyCount={maxClassifyCount}
        choceClassfies={choceClassfies}
      /> : ''}
    </View>
  )
}
FastIssue.config = {
  navigationBarTitleText: '完善信息',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config