import Taro, { Config, useState, useRouter } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { AtTextarea, AtInput } from 'taro-ui'
import WechatNotice from '../../components/wechat'
import ImageView from '../../components/imageview'
import UploadImgAction from '../../utils/upload'
import userCode from '../../hooks/code'
import { feedbackSubmissionAction } from '../../utils/request/index'
import './index.scss'

export interface DataType {
  name:string,
  phone:string,
}
export interface ImageType{
  url:string
}
export interface ImgType{
  item: any
}

// 初始化获取信息类型
export interface InitRecruitView {
  type: string,
  infoId: string
}
export interface ImageItem {
  url: string,
  httpurl: string
}
export interface ImageDataType {
  item: ImageItem[]
}

export default function Feedback() {
  const router: Taro.RouterInfo = useRouter()
  let { username = '', phone = '' } = router.params;
  // 用户名字
  const [name, setName] = useState<string>(username||'')
  // 用户电话号码
  const [uphone, setUPhone] = useState<string>(phone||'')
  // 意见
  const [textarea, setTextarea] = useState<string>("");
  // 是否显示获取验证码
  const [isShow,setIsShow] = useState<boolean>(false)
  // 验证码
  const [code,setCode] = useState<string>('');
  const [image, setImage] = useState<ImageDataType>({
    item:[],
  })
  // 使用自定义验证码hook
  const { text, userGetCode, disabled } = userCode()
  // 用户上传图片
  const userUploadImg = (i: number = -1) => {
    UploadImgAction().then(res => {
      let imageItem = {
        url: res.url,
        httpurl: res.httpurl
      }
      if (image) {
        if (i === -1) {
          setImage({ ...image, item: [...image.item, imageItem] })
        } else {
          image.item[i] = imageItem
          setImage({ ...image })
        }
      }
    })
  }
  const handlePhone = (e:string)=>{
    if (e !== router.params.phone || !router.params.phone){
      setIsShow(true)
    }else{
      setIsShow(false)
    }
    setUPhone(e);
  }
  // 提交
  const handleSubmission = ()=>{
    let images:string[]=[];
    if (image.item.length>0){
      for (let i = 0; i < image.item.length;i++){
        images.push(image.item[i].url);
      }
    }
    const params = {
      images,
      content: textarea,
      username:name,
      tel:uphone,
      code:code
    }
    feedbackSubmissionAction(params).then(res =>{
      if(res.errcode == "ok"){
        Taro.showModal({
          title: '提示',
          content: res.errmsg,
          showCancel: false,
          success: function () {
            Taro.navigateBack({
              delta: 1
            })
          }
        })
        
      }else{
        Taro.showModal({
          title: '提示',
          content: res.errmsg,
          showCancel: false
        })
      }
    })
  }
  return (
    <View className="feedback-content">
      <WechatNotice />
      <View className="feedback-content-middle">
        <View className='feedback-content-middle-box'>
        <AtTextarea
          className="feedback-content-middle-textarea"
          value={textarea}
          onChange={(e) => { setTextarea(e) }}
          maxLength={500}
          placeholder='请填写您对鱼泡的建议或意见'
        />
          <View className='feedback-content-middle-imgBox'>
            {image.item &&
              <ImageView images={image.item} max={9} userUploadImg={userUploadImg} />
            }
        </View>
      </View>
      </View>
      <View className='feedback-content-middle-from'>
        <AtInput
          name='name'
          title='联系人'
          type='text'
          placeholder='请输入你的名字'
          value={name}
          onChange={(e: string) => { setName(e) }}
        />
        <AtInput
          name='phone'
          title='联系电话'
          type='text'
          placeholder='请输入手机号方便客服联系你'
          maxLength={11}
          value={uphone}
          onChange={(e:string)=>{handlePhone(e)}}
        />
        {isShow && 
          <View>
            <AtInput
              clear
              title='验证码'
              type='text'
              maxLength={4}
              placeholder='请输入你的验证码'
              name="code"
              value={code}
              onChange={(e:string)=>setCode(e)}
            >
            <Button 
              disabled={disabled}
              className='feedback-content-code' 
              onClick={() => userGetCode(uphone)}
              >{text}</Button>
            </AtInput>
        </View>
      }
      </View>
      <View><Button className='feedback-content-button' onClick={handleSubmission}>反馈意见</Button></View>
    </View>
  )
}

Feedback.config = {
  navigationBarTitleText: '鱼泡网-意见反馈',
} as Config