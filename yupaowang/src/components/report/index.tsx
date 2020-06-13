import Taro from '@tarojs/taro'
import { View, Textarea } from '@tarojs/components';
import './index.scss'
interface PROPS {
  display: boolean //是否跳转到页面授权
  textarea:string,
  handleTextarea:(e:any)=>void,
  setComplaintModal:(e:boolean)=>void,
  handleSubmit:()=>void,
}
export default function Report({ handleTextarea, setComplaintModal, handleSubmit, textarea, display }: PROPS) {
  return (
    <View>
      {display && 
      <View className='tabber-complaintModal'>
        <View className='tabber-complaintModal-content'>
          <View className='tabber-complaintModal-content-title'>投诉信息</View>
          <View className='tabber-complaintModal-content-tips'>请输入投诉内容</View>
          <View className='tabber-complaintModal-content-textareaBox'>
            <Textarea
              className='tabber-complaintModal-content-textarea'
              placeholder='请填写5~100字，必须含有汉字。（恶意投诉会被封号，请谨慎投诉！）'
              value={textarea}
              maxlength={100}
              onInput={(e) => handleTextarea(e)}
            />
          </View>
          <View className='tabber-complaintModal-footer'>
            <View className='tabber-complaintModal-footer-cancel' onClick={() => { setComplaintModal(false) }}>取消</View>
            <View className='tabber-complaintModal-footer-cancel' onClick={() => handleSubmit()}>确定</View>
          </View>
        </View>
      </View>
      }
    </View>
  )
}