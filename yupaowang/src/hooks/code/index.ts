import { useState } from '@tarojs/taro'
import { isPhone } from '../../utils/v'
import Msg, { ShowActionModal } from '../../utils/msg'
import { getUserPhoneCode } from '../../utils/request'
import { UserGetCodeData } from '../index.d'

// 用户获取验证码
export const SendTypeHave: string = 'have'
export const SendTypeNo: string = 'no'

const title: string = '获取验证码'
export default function useCode(type?: boolean) {
  const [disabled, setDisabled] = useState<boolean>(false)
  const sendType: string = type === false ? SendTypeNo : SendTypeHave
  const [text, setText] = useState<string>(title)

  const userGetCode = (tel: string)=> {
    if(disabled) return
    if(!isPhone(tel)){
      Msg('请先输入正确的手机号码')
      return
    }
    const data: UserGetCodeData = { tel: tel, sendType: sendType }
    setDisabled(true)
    getUserPhoneCode(data).then(res=>{
      if(res.errcode == 'ok'){
        Msg(res.errmsg, 2500)
        let t: number = res.refresh || 60
        setText(t + 's后重新获取')
        let timer = setInterval(()=>{
          t--
          if(t === 0){
            setDisabled(false)
            clearInterval(timer)
            setText(title)
            return false
          }
          setText(t + 's后重新获取')
        },1000)
      }else{
        ShowActionModal({msg: res.errmsg})
      }
    })
  }

  return {
    disabled,
    text,
    userGetCode
  }

}