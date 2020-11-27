import Taro, { useState, Config } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import classnames from 'classnames'
import './index.scss'
import Msg, { ShowActionModal } from '../../../utils/msg'
import { isRequireLen } from '../../../utils/v'
import { userSetPassword } from '../../../utils/request';


interface Params {
  newPwd: ParamsItem,
  reNewPwd: ParamsItem,
}

interface ParamsItem {
  text: string,
  hidden: boolean
}

export default function Updatapass() {

  //提交的数据
  const [paramsData, setParamsData] = useState<Params>({
    newPwd: {
      text: '',
      hidden: true
    },
    reNewPwd: {
      text: '',
      hidden: true
    },
  })

  const changeInputType = (type: string) => {
    paramsData[type].hidden = !paramsData[type].hidden
    setParamsData({ ...paramsData })
  }

  const enterRePass = (type: string, value: string) => {
    paramsData[type].text = value;
    setParamsData({ ...paramsData })
  }

  //提交
  const userUpdataPass = () => {
    if (!isRequireLen(paramsData.newPwd.text, 6)) {
      Msg("密码由6-16位数字字母组成!")
      return false;
    }
    if (paramsData.newPwd.text != paramsData.reNewPwd.text) {
      Msg("两次输入的密码不一致!");
      return false;
    }

    const data = {
      onePwd: paramsData.newPwd.text,
      twoPwd: paramsData.reNewPwd.text,
    }

    userSetPassword(data).then(res => {
      if (res.errcode == "ok") {
        ShowActionModal({
          msg: res.errmsg,
          success: () => Taro.navigateBack({delta: 2})
        })
      } else {
        Msg(res.errmsg);
      }
    })
  }


  return (
    <View className="yupao-common-container">
      <View className='user-changepass-box'>
        <View className='common-publish-item'>
          <View className='common-publish-item-content common-publish-item-pass'>
            <Text className='common-publish-words'>输入密码</Text>
            <Input className='common-publish-Input' value='' placeholder='请输入新密码' password={paramsData.newPwd.hidden} onInput={(e: any) => enterRePass('newPwd', e.target.value)}></Input>
            <Text className={classnames({
              'pass-eyes-icon': true,
              'pass-eyes-icon-active': !paramsData.newPwd.hidden
            })}
              onClick={() => { changeInputType('newPwd') }}></Text>
          </View>
        </View>
        <View className='common-publish-item'>
          <View className='common-publish-item-content common-publish-item-pass'>
            <Text className='common-publish-words'>确认密码</Text>
            <Input className='common-publish-Input' value='' placeholder='请确认新密码' password={paramsData.reNewPwd.hidden} onInput={(e: any) => enterRePass('reNewPwd', e.target.value)}></Input>
            <Text className={classnames({
              'pass-eyes-icon': true,
              'pass-eyes-icon-active': !paramsData.reNewPwd.hidden
            })}
              onClick={() => { changeInputType('reNewPwd') }}></Text>
          </View>
        </View>
      </View>
      <Text className='common-sure-btn' onClick={() => userUpdataPass()}>保存密码</Text>
    </View>
  )
}

Updatapass.config = {
  navigationBarTitleText: '鱼泡网-设置密码'
} as Config