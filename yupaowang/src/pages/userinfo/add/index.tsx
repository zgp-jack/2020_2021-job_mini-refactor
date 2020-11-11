import Taro, { Config, useState } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
import useCode from '../../../hooks/code'
import { postUserAddInfo } from '../../../utils/request'
import './index.scss'
import { isPhone } from '../../../utils/v'
import Msg from '../../../utils/msg'
import classnames from 'classnames'

export interface UserAddInfo {
  username: string,
  pwd: string,
  tel: string,
  code: string
}

export default function UserInfoAdd(){

  const { text, userGetCode } = useCode()
  // 是否隐藏密码
  const [disPass, setDisPass] = useState<boolean>(true)
  // 声明提交数据
  const [userInfo, setUserInfo] = useState <UserAddInfo>({
    username: '',
    pwd: '',
    tel: '',
    code: ''
  })

  // 用户填写表单
  const userEnterForm = (e: any, title: string)=> {
    let { value } = e.detail
    let data: UserAddInfo = JSON.parse(JSON.stringify(userInfo))
    data[title] = value
    setUserInfo(data)
  }

  // 用户提交信息
  const userSubmitInfo = ()=>{
    if(!userInfo.username){
      Msg('请输入您的用户名')
      return
    }
    if (!isPhone(userInfo.tel)) {
      Msg('请输入正确的手机号码')
      return
    }
    if (!userInfo.code) {
      Msg('请输入手机验证码')
      return
    }
    if (!userInfo.pwd) {
      Msg('请输入您的密码')
      return
    }
    postUserAddInfo(userInfo).then(res=>{
      Msg(res.errmsg)
      if(res.errcode == 'ok'){
        Taro.navigateBack()
      }
    })
  }


  return (
    <View className='userinfoadd-container'>
      <View className='publish-list-item'>
        <Text className='pulish-list-title'>姓名</Text>
        <Input
          className='publish-list-input'
          type='text'
          placeholder='请输入您的姓名'
          value={ userInfo.username }
          onInput={(e) => userEnterForm(e, 'username')}
        />
      </View>
      <View className='publish-list-item'>
        <Text className='pulish-list-title'>手机号</Text>
        <Input
          className='publish-list-input'
          type='number'
          placeholder='请输入您的手机号'
          value={ userInfo.tel }
          onInput={(e) => userEnterForm(e, 'tel')}
        />
      </View>
      <View className='publish-list-item publish-list-item-code'>
        <Text className='pulish-list-title'>验证码</Text>
        <Input
          className='publish-list-input'
          type='number'
          placeholder='请输入验证码'
          value={ userInfo.code }
          onInput={(e) => userEnterForm(e, 'code')}
        />
        <View className='publish-code-btn' onClick={()=>userGetCode(userInfo.tel)}>{ text }</View>
      </View>
      <View className='publish-list-item'>
        <Text className='pulish-list-title'>密码</Text>
        <Input
          className='publish-list-input'
          password={ disPass }
          type={ 'text' }
          placeholder='请输入密码'
          value={ userInfo.pwd }
          onInput={(e) => userEnterForm(e, 'pwd')}
        />
        <Text 
          className={classnames({
            'pass-eyes-icon': true,
            'pass-eyes-icon-dis': disPass
          })} 
          onClick={() => setDisPass(!disPass)}
        />
      </View>
      <View className='user-submit-btn' onClick={()=>userSubmitInfo()}>确认提交</View>
    </View>
  )
}

UserInfoAdd.config = {
  navigationBarTitleText: '完善资料'
} as Config