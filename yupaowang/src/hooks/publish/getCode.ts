import { useEffect, useState } from '@tarojs/taro';
import Msg from '../../utils/msg'
import { getUserPhoneCode } from '../../utils/request'
import { UserGetCodeData } from '../index.d'
import { checkCode } from '../../utils/request/index'
import { useSelector } from '@tarojs/redux'
import { RecruitInfo, VaildCodeReq } from '../../pages/recruit/index.d'

// 用户获取验证码
export const SendTypeHave: string = 'have'
export const SendTypeNo: string = 'no'

export function useCode(type?: boolean) {
  // redux中存入的发布数据
  const recruitInfo: RecruitInfo = useSelector<any, RecruitInfo>(state => state.RecruitAction)
  // 手机验证码
  const [code, setCode] = useState<string>('')
  // 获取发布手机号
  const phone = recruitInfo.phone
  // 招工信息token
  const token = recruitInfo.token
  // 是否可点击发送验证码的状态
  const [disabled, setDisabled] = useState<boolean>(type === false ? false : !!type)
  const sendType: string = type === false ? SendTypeNo : SendTypeHave
  // 手机验证码刷新时间
  const [codeTime, setCodeTime] = useState<number>(60)
  useEffect(() => {
    initCodeTime()
  }, [])
  // 验证码时间
  function initCodeTime() {
    let codeRefresh = codeTime;
    let timer = setInterval(function () {
      codeRefresh--;
      setCodeTime(codeRefresh)
      if (codeRefresh == 0) {
        setDisabled(false)
        clearInterval(timer);
        setCodeTime(codeRefresh)
        return false;
      }
    }, 1000)
  }
  function getCode() {
    if (disabled) return
    const data: UserGetCodeData = { tel: phone, sendType: sendType }
    setDisabled(true)
    getUserPhoneCode(data).then(res => {
      Msg(res.errmsg, 2500)
      if (res.errcode == 'ok') {
        let t: number = res.refresh || 60
        setCodeTime(t)
        initCodeTime()
      }else{
        
      }
    })
  }
  // 用户填写验证码信息
  function inputEnter(e: any) {
    const value: string = e.detail.value
    setCode(value)
  }
  // 发布招工验证码验证
  function vaildCode () {
    // 请求参数
    let params: VaildCodeReq = {
      token,
      code,
      phone
    }
    console.log("params", params)
    // 发送验证请求，验证通过跳转到城市工种选择页
    checkCode(params).then(res => {
      if(res.errcode == 'ok'){
        Taro.navigateTo({
          url: '/pages/recruit/fast_issue/release/index',
        })
      }else{
        Msg(res.errmsg)
      }
    })
  }
  return {
    codeTime,
    getCode,
    disabled,
    vaildCode,
    inputEnter,
    phone
  }
}