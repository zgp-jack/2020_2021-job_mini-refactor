import Taro, { useState, Config } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import useCode from '../../../hooks/code'
import { userChangePhone } from '../../../utils/request'
import { isPhone } from '../../../utils/v'
import { setMemberTel } from '../../../actions/member'
import { useDispatch, useSelector } from '@tarojs/redux'
import './index.scss'
import Msg from '../../../utils/msg'
import { setPublishData } from '../../../actions/publish'
import { PublishConfigData } from '../../../pages/recruit/index.d'

interface BandPhone {
  tel: string,
  code: string
}
export default function UserBandPhone(){
  const dispatch =  useDispatch()
  const { userGetCode, text } = useCode(false)
  const [info, setInfo] = useState<BandPhone>({
    tel: '',
    code: ''
  })
  // 获取redux中工种数据
  const publishData: PublishConfigData = useSelector<any, PublishConfigData>(state => state.publishData)
  // 用户填写表单
  const userEnterForm = (e: any, title: string)=> {
    let { value } = e.detail
    let data: BandPhone = JSON.parse(JSON.stringify(info))
    data[title] = value
    setInfo(data)
  }
  // 用户更换手机号码操作
  const userChangePhoneAction = ()=> {
    if(!isPhone(info.tel)){
      Msg('请先输入正确的手机号码')
      return 
    }
    if(!info.code){
      Msg('请先输入正确的验证码')
      return
    }
    userChangePhone(info.tel, info.code)
    .then(res=>{
      Msg(res.errmsg)
      if(res.errcode == 'ok'){
        // 将数据存到redux中
        dispatch(setPublishData({ ...publishData, user_mobile: info.tel }))
        dispatch(setMemberTel(info.tel))
        Taro.navigateBack()
      }
    })
    .catch(()=>{
      Msg('网络错误，发送失败')
    })
  }
  return (
    <View className='userchangephone-container'>
      <View className='userchangephone-body'>
        <View className='publish-list-item'>
          <Text className='pulish-list-title'>手机号</Text>
          <Input
            className='publish-list-input'
            type='number'
            placeholder='请输入您的手机号'
            value={ info.tel }
            maxLength={11}
            onInput={(e) => userEnterForm(e, 'tel')}
          />
        </View>
        <View className='publish-list-item publish-list-item-code'>
          <Text className='pulish-list-title'>验证码</Text>
          <Input
            className='publish-list-input'
            type='number'
            placeholder='请输入验证码'
            value={ info.code }
            onInput={(e) => userEnterForm(e, 'code')}
          />
          <View className='publish-code-btn' onClick={() => userGetCode(info.tel)}>{text}</View>
        </View>
      </View>
      <View className='user-submit-btn' onClick={()=>userChangePhoneAction()}>确定更换</View>
    </View>
  )
}



UserBandPhone.config = {
  navigationBarTitleText: '修改手机号'
} as Config