import { View, Button, Image, Text  } from '@tarojs/components';
import Taro from '@tarojs/taro'
import { ALIYUNCDNMINIIMG } from '../../config/index'
import './index.scss'



export interface textData{
  text: string
  color: string
}
export interface contentData{
  des?: string,
  color?: string
  text?: textData[]
}

export interface PromptBoxProps{
  showCancel?: boolean
  showConfirm?: boolean
  showClose?: boolean
  showTitle?: boolean
  showIcon?: boolean
  iconUrl?: string
  cancelText?: string
  confirmText?: string
  titleText?: string
  content?: contentData[]
  showContent?: boolean
  cancelColor?: string
  confirmColor?: string
  closeIcon?: string
  cancel: () => void
  confirm: () => void
}


export default function PromptBox ({
  showCancel = true,
  showConfirm = true,
  showClose = false,
  showTitle = true,
  showIcon = false,
  iconUrl = `${ALIYUNCDNMINIIMG}yc/findwork-publish-success.png`,
  cancelText ='取消',
  cancelColor = '#000000',
  confirmColor = '#576B95',
  confirmText = '确定',
  titleText = '温馨提示',
  showContent = true,
  content = [{des:'',color:'',text:[{text:'',color:''}]}],
  closeIcon = `${ALIYUNCDNMINIIMG}mini-close-icon.png`,
  cancel,
  confirm
}: PromptBoxProps){
  return (
    <View className= "prompt-container">
      <View className= "prompt-box" >
        {showTitle ? <View className="prompt-title" >{titleText}</View> : ''}
        {showIcon ? <View className="prompt-title"><Image src={iconUrl}></Image></View > : ''}
        <View className={!showTitle ? "prompt-content margin" : "prompt-content"}>
        {showContent ? content.map((item) => (
          <View
            className="prompt-body"
            style={{ color: item.color }}
          >{item.des}{(item.text && item.text.length > 0) ? item.text.map((p) => (<Text style={{ color: p.color }}>{p.text}</Text>)) : ''}
          </View >
        )):''}
      </View>
        <View className="prompt-footer" >
          {showCancel ? <Button className="prompt-btn" style={{ color: cancelColor }} onClick={() => cancel()}>{cancelText}</Button> : ''}
          {showConfirm ? <Button className="prompt-btn" style={{ color: confirmColor }} onClick={() => confirm()}>{confirmText}</Button> : ''}
        </View>
        {showClose ? <Image className="prompt-close" src={ closeIcon }> </Image> : ''}
      </View>
    </View>
  )
}
// export default Taro.memo(PromptBox);


