import Taro, { useState, useEffect, Config, useContext, useRouter } from '@tarojs/taro'
import { View, Text, Picker, Block, Input } from '@tarojs/components'
import { AtInput, AtList, AtListItem  } from 'taro-ui';
import ImageView from '../../../components/imageview'
import UploadImgAction from '../../../utils/upload'
import Msg from '../../../utils/msg'
import { context } from '../../../pages/resume/newJob'
import {  resumesCertificateAction } from '../../../utils/request/index'
import './index.scss'

export interface ImageDataType {
  item: ImageItem[]
}
export interface ImageItem {
  url: string,
  httpurl: string
}
export default function AddSkillPage() {
  const router: Taro.RouterInfo = useRouter()
  const { skillData } = useContext(context);
  let { type } = router.params;
  console.log(type);
  const [val,setVal] = useState<string>('')
  const [extraText, setExtraText] = useState<string>('请选择您领取证书时间')
  const [image, setImage] = useState<ImageDataType>({
    item: [],
  })
  const [uuid, setUuid] = useState<string>('')
  useEffect(()=>{
    Taro.setNavigationBarTitle({
      title: '修改技能证书'
    })
    console.log(skillData);
    if (skillData){
      const data = skillData[0];
      setVal(data.name);
      setExtraText(data.certificate_time);
      let arr:any=[];
      for (let i = 0; i < data.image.length;i++){
        for (let j = 0; j < data.images.length;j++){
          let obj= {
            httpurl:'',
            url:'',
          };
          if(i === j){
            obj.httpurl = data.image[i];
            obj.url = data.images[i]
            arr.push(obj);
          }
        }
      }
      setImage({item:arr})
      setUuid(data.uuid)
    }
  },[])
  // 用户上传图片
  const userUploadImg = (i: number = -1) => {
    UploadImgAction().then(res => {
      let imageItem = {
        url: res.url,
        httpurl: res.httpurl
      }
      if (i === -1) {
        setImage({ ...image, item: [...image.item, imageItem] })
      } else {
        image.item[i] = imageItem
        setImage({ ...image })
      }
    })
  }
  // 取消
  const handleCanle = ()=>{
    Taro.navigateBack({
      delta: 1
    })
  }
  // 确定保存
  const handelSubmit = ()=>{
    if (!val){
      Taro.showModal({
        title: '温馨提示',
        content: '请填写真实证书名称，3-12字，必须含有汉字',
        showCancel: false,
      })
      return;
    }
    if ( extraText == '请选择您领取证书时间'){
      Taro.showModal({
        title: '温馨提示',
        content: '请选择您的领证时间',
        showCancel: false,
      })
      return;
    }
    if (!image.item.length){
      Taro.showModal({
        title: '温馨提示',
        content: '您添加的图片为空请重新添加',
        showCancel: false,
      })
      return;
    }
    let params;
    if(type){
      params = {
      image: image.item,
      name: val,
      certificate_time: extraText,
      certificate_uuid: uuid,
    }
    }else{
      params = {
        image: image.item,
        name: val,
        certificate_time: extraText,
      }
    }
    resumesCertificateAction(params).then(res=>{
      if(res.errcode === 'ok'){
        Taro.navigateBack({
          delta: 1
        })
      }else{
        Msg(res.errmsg);
      }
    })
  }
  return (
    <View>
      <View className='content'>
        <View className='publish-recruit-card'>
          <View className='publish-list-item'>
            <Text className='pulish-list-title'>职业技能</Text>
            :<Input
              className='publish-list-input'
              type='text'
              placeholder='请输入您的职业技能名称'
              value={val}
              onInput={(e) => { setVal(e.toString()) }}
            />
          </View>
        </View>
        <View className='publish-recruit-card'>
          <Picker
            mode='date'
            onChange={(e) => { setExtraText(e.detail.value) }}
            value={extraText}
          >
            <View className='publish-list-item'>
              <Text className='pulish-list-title'>领取证书时间</Text>
              :<Input
                className='publish-list-input'
                type='text'
                disabled
                placeholder='请选择领取证书时间'
                value={extraText}
              />
            </View>
          </Picker>
        </View>
      </View>
      <View className='feedback-content-middle-imgBox'>
        {image.item &&
          <ImageView images={image.item} max={3} userUploadImg={userUploadImg} />
        }
      </View>
      {/* footer */}
      <View className='footer'>
        <View className='left' onClick={handleCanle}>取消</View>
        <View className='right' onClick={handelSubmit}>确认保存</View>
      </View>
    </View>
  )
}


AddSkillPage.config = {
  navigationBarTitleText: '新增技能证书',
} as Config