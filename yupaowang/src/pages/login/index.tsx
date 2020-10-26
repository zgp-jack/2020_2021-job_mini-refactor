import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Button, Input } from '@tarojs/components'
import classnames from 'classnames'
import { useDispatch } from '@tarojs/redux'
import useLoginCode  from '../../hooks/logincode'
import { isPhone } from '../../utils/v'
import { User } from '../../reducers/user'
import Msg from '../../utils/msg'
import { setUserInfo } from '../../actions/user'
import { UserInfo } from '../../config/store'
import { userAccountLogin, userTelCodeLogin } from '../../utils/request'
import './index.scss'

export default function Login(){
  const dispatch = useDispatch()
  // 声明登录方式变量
  const codeLogin: string = 'code-login'
  const telLogin: string = 'tel-login'
  // 登录方式索引
  const [current, setCurrent] = useState<string>(codeLogin)
  // 用户手机号
  const [phone,setPhone] = useState<string>('')
  // 验证码
  const [code, setCode] = useState<string>('')
  // 密码
  const [password, setPassword] = useState<string>('')
  // 使用自定义验证码hook
  const { text, userGetCode, disabled } = useLoginCode()

  const userLoginAction = () => {
    if (!isPhone(phone)){
      Msg('请输入正确的手机号')
      return
    }
    const data:any = { tel: phone }
    if (current === codeLogin){
      if(!code){
        Msg('请输入验证码')
        return
      }
      data.code = code
      userTelCodeLogin(data).then(res => detailUserLoginInfo(res))
    }else{
      if (!password) {
        Msg('请输入密码')
        return
      }
      data.pwd = password
      userAccountLogin(data).then(res => detailUserLoginInfo(res))
    }
  }

  // 处理登录信息
  const detailUserLoginInfo = (res) => {
    console.log(res)
    if(res.errcode == 'ok'){
      const user: User = {
        userId: res.result.uid,
        token: res.result.token.token,
        tokenTime: res.result.token.time,
        uuid: res.result.uuid,
        login: true
      }
      Taro.setStorageSync(UserInfo, user)
      dispatch(setUserInfo(user))
      Taro.navigateBack()
    }
  }

  return (
    <View className='login-container'>
      <View className='login-header'>
        <View 
          className={classnames({
            'login-header-item': true,
            'login-header-item-active': current === codeLogin
          })}
          onClick={() => setCurrent(codeLogin)}
        >验证码登录</View>
        <View 
          className={classnames({
            'login-header-item': true,
            'login-header-item-active': current === telLogin
          })}
          onClick={() => setCurrent(telLogin)}
        >账号登录</View>
      </View>
      <View className='login-body'>
        <View className='login-input-item'>
          <View className='input-item-title'>手机号</View>
          <View className='input-item-form'>
            <Input 
              className='input-item-text' 
              placeholder='请输入手机号码'
              maxLength={11}
              onInput={(e) => setPhone(e.detail.value)} 
            />
          </View>
        </View>
        {current === codeLogin &&
        <View className='login-input-item'>
          <View className='input-item-title'>验证码</View>
          <View className='input-item-form'>
            <Input 
              className='input-item-text' 
              placeholder='请输入验证码' 
              onInput={(e) => setCode(e.detail.value)}
            />
            <Button 
              disabled={disabled}
              className='input-item-codebtn'
              onClick={() => userGetCode(phone)}
            >{text}</Button>
          </View>
        </View>}
        {current === telLogin &&
        <View className='login-input-item'>
          <View className='input-item-title'>账号密码</View>
          <View className='input-item-form'>
            <Input 
              password
              className='input-item-text' 
              placeholder='请输入账号密码'
              onInput={(e)=>setPassword(e.detail.value)} 
            />
          </View>
        </View>}
      </View>
      <View className='login-btn' onClick={() => userLoginAction()}>登录</View>
    </View>
  )
}

Login.config = {
  navigationBarTitleText: '登录注册',
  navigationBarBackgroundColor: '#ffffff',
  navigationBarTextStyle: 'black',
}