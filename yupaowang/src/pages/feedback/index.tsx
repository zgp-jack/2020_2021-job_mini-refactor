import Taro, { Config, useState, useRouter } from '@tarojs/taro'
import { View, Button, Textarea } from '@tarojs/components'
import { AtInput } from 'taro-ui'
import WordsTotal from '../../components/wordstotal'
import WechatNotice from '../../components/wechat'
import ImageView from '../../components/imageview'
import UploadImgAction from '../../utils/upload'
import useCode from '../../hooks/code'
import { feedbackSubmissionAction } from '../../utils/request/index'
import Msg, { ShowActionModal } from '../../utils/msg'
import { SubscribeToNews } from '../../utils/subscribeToNews';
import { isVaildVal, isPhone } from '../../utils/v'
import './index.scss'

export interface DataType {
  name:string,
  phone:string,
}
export interface ImageType{
  url:string
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
  const [name, setName] = useState<string>(username)
  // 用户电话号码
  const [uphone, setUPhone] = useState<string>(phone)
  // 意见
  const [textarea, setTextarea] = useState<string>('');
  // 是否显示获取验证码
  const [isShow,setIsShow] = useState<boolean>(false)
  // 验证码
  const [code,setCode] = useState<string>('');
  const [image, setImage] = useState<ImageDataType>({
    item:[],
  })
  // 默认字数
  const [num, setNum] = useState<number>(0)
  // 使用自定义验证码hook
  const { text, userGetCode, disabled } = useCode()
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
  const handlePhone = (e:string)=>{
    if (e !== phone || !phone){
      setIsShow(true)
    }else{
      setIsShow(false)
    }
    setUPhone(e);
  }
  // 提交
  const handleSubmission = ()=>{
    let images: string[] = image.item.map(item=>item.url)
    if (!isVaildVal(textarea, 15, 500)) {
      Msg('输入内容不少于15个字且必须包含文字')
      return false
    }
    if (!name) {
      Msg('请输入联系人姓名')
      return false
    }
    if (!isPhone(uphone)) {
      Msg('请输入正确手机号')
      return false
    }
    if (uphone !== phone && !code){
      Msg('请输入验证码')
      return false
    }
    const params = {
      images,
      content: textarea,
      username:name,
      tel:uphone,
      code:code
    }
    feedbackSubmissionAction(params).then(res =>{
      if(res.errcode == 'ok'){
        SubscribeToNews('msg', () => {
          ShowActionModal({ 
            msg: res.errmsg,
            success: function () {
              Taro.navigateBack({
                delta: 1
              })
            }
          })
        })
      }else{
        Msg(res.errmsg)
      }
    })
  }
  const handleTextarea = (e:any)=>{
    let val: string = e.detail.value;
    setTextarea(val);
    setNum(val.length);
  }
  return (
    <View className='feedback-content'>
      <WechatNotice />
      <View className='feedback-content-middle'>
        <View className='feedback-content-middle-box'>
        <Textarea
          className='feedback-content-middle-textarea'
          value={textarea}
          onInput={(e) => handleTextarea(e) }
          maxlength={500}
          placeholder='请填写您对鱼泡的建议或意见'
        />
          <View className='feedback-wordsTotal'>
            <WordsTotal num={num} />
        </View>
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
          onChange={(e: string) =>setName(e)}
        />
        <AtInput
          name='phone'
          title='联系电话'
          type='text'
          placeholder='请输入手机号方便客服联系你'
          maxLength={11}
          value={uphone}
          onChange={(e:string)=>handlePhone(e)}
        />
        {isShow && 
          <View>
            <AtInput
              clear
              title='验证码'
              type='text'
              maxLength={4}
              placeholder='请输入你的验证码'
              name='code'
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