import Taro, { Config, useState, useRouter } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { AtTextarea, AtInput } from 'taro-ui'
import WechatNotice from '../../components/wechat'
import ImageView from '../../components/imageview'
import UploadImgAction from '../../utils/upload'
import usePublishViewInfo from '../../hooks/publish/recruit'
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
export default function Feedback() {
  const router: Taro.RouterInfo = useRouter()
  let { username = '', phone = '' } = router.params;
  // 用户名字
  const [name, setName] = useState<string>(username||'')
  // 用户电话号码
  const [uphone, setUPhone] = useState<string>(phone||'')
  // 意见
  const [textarea, setTextarea] = useState<string>("");
  // 图片
  const [img, setImg] = useState<ImgType>({
    item:[]
  })
  // 是否显示获取验证码
  const [isShow,setIsShow] = useState<boolean>(false)
  // 验证码
  const [code,setCode] = useState<string>('');
  const id: string = router.params.id || ''
  const type: string = 'job'
  const InitParams: InitRecruitView = { type: type, infoId: id }
  // 初始化当前信息
  const { model, setModel } = usePublishViewInfo(InitParams)
  // 使用自定义验证码hook
  const { text, userGetCode } = userCode()
  // 用户上传图片
  const userUploadImg = (i: number = -1) => {
    UploadImgAction().then(res => {
      let imageItem = {
        url: res.url,
        httpurl: res.httpurl
      }
      if (model) {
        if (i === -1) {
          setModel({ ...model, view_images: [...model.view_images, imageItem] })
        } else {
          model.view_images[i] = imageItem
          setModel({ ...model })
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
    console.log(1111);
    const params = {
      images: img,
      content: textarea,
      username:name,
      tel:uphone,
      code:code
    }
    feedbackSubmissionAction(params).then(res =>{
      console.log(res)
      if(res.errcode == "ok"){
        Taro.showModal({
          title: '提示',
          content: res.errmsg,
          showCancel: false
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
            {/* <AtImagePicker
              length={5}
              files={img.item}
              onChange={(e)=>handleImgChange(e)}
              onFail={(e)=>{console.log(e)}}
              onImageClick={(i,url)=>{console.log(i,url)}}
            /> */}
            {model &&
              <ImageView images={model.view_images} max={9} userUploadImg={userUploadImg} />
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
          placeholder='请输入你的电话'
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
              placeholder='验证码'
              name="code"
              value={code}
              onChange={(e:string)=>setCode(e)}
            >
            <View className='publish-code-btn' onClick={() => userGetCode(uphone)}>{text}</View>
            </AtInput>
        </View>
      }
      </View>
      <View><Button className='feedback-content-button' onClick={handleSubmission}>提交保存</Button></View>
    </View>
  )
}

Feedback.config = {
  navigationBarTitleText: '鱼泡网-意见反馈',
} as Config