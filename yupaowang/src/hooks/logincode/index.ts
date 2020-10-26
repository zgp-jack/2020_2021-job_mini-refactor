import { useState } from '@tarojs/taro'
import { isPhone } from '../../utils/v'
import Msg from '../../utils/msg'
import { GetUserLoginPhoneCode } from '../../utils/request'

interface UserLoginGetCodeData {
  tel: string
}

const title: string = '获取验证码'
export default function useLoginCode() {
  const [disabled, setDisabled] = useState<boolean>(false)
  const [text, setText] = useState<string>(title)

  const userGetCode = (tel: string) => {
    if (disabled) return
    if (!isPhone(tel)) {
      Msg('请先输入正确的手机号码')
      return
    }
    const data: UserLoginGetCodeData = { tel: tel }
    setDisabled(true)
    GetUserLoginPhoneCode(data).then(res => {
      Msg(res.errmsg, 2500)
      if (res.errcode == 'ok') {
        let t: number = res.refresh || 60
        setText(t + 's后重新获取')
        let timer = setInterval(() => {
          t--
          if (t === 0) {
            setDisabled(false)
            clearInterval(timer)
            setText(title)
            return false
          }
          setText(t + 's后重新获取')
        }, 1000)
      }
    })
  }

  return {
    disabled,
    text,
    userGetCode
  }

}