import Taro, { useState, useEffect, Config, useDidShow } from '@tarojs/taro'
import { View, Text, Picker, Block, Input } from '@tarojs/components'
import { AtInput, AtList, AtListItem  } from 'taro-ui';
import ImageView from '../../../components/imageview'
import UploadImgAction from '../../../utils/upload'
import Msg from '../../../utils/msg'
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
  const [val,setVal] = useState<string>('')
  const [extraText, setExtraText] = useState<string>('请选择您领取证书时间')
  const [image, setImage] = useState<ImageDataType>({
    item: [],
  })
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
    let params = {
      image: image.item,
      name: val,
      certificate_time: extraText,
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
      <AtInput
        name='value'
        title='职业技能:'
        type='text'
        placeholder='请输入您的职业技能名称'
        maxLength={12}
        value={val}
        onChange={(e) => {setVal(e.toString())}}
      />
      <View>
        <Picker 
          mode='date' 
          onChange={(e) => { setExtraText(e.detail.value)}}
          value={extraText}
        >
          <AtList>
            <AtListItem title='领取证书时间:' extraText={extraText} />
          </AtList> 
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