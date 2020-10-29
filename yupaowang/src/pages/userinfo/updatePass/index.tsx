import Taro, { useState, Config } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import classnames from 'classnames'
import './index.scss'
import Msg, { ShowActionModal } from '../../../utils/msg'
import {isRequireLen} from '../../../utils/v'
import { updataPassword } from '../../../utils/request';


interface Params {
  oldPwd: ParamsItem,
  newPwd: ParamsItem,
  reNewPwd: ParamsItem,
}

interface ParamsItem {
  text: string,
  show: false
}

export default function Updatapass(){

    //提交的数据
    const [paramsData, setParamsData] = useState<Params>({
      oldPwd: {
        text: '',
        show: false
      },
      newPwd: {
        text: '',
        show: false
      },
      reNewPwd: {
        text: '',
        show: false
      },
    })

    const changeInputType = (type:string)=>{
      paramsData[type].show = !paramsData[type].show
      setParamsData({ ...paramsData})
    }

    const enterRePass = (type:string,value:string)=>{
      paramsData[type].text = value;
      setParamsData({...paramsData})
    }

    //提交
    const userUpdataPass = ()=>{
        if (!isRequireLen(paramsData.oldPwd.text, 6)) {
            Msg('原密码有误')
            return false;
        }
        if (!isRequireLen(paramsData.newPwd.text, 6)) {
            Msg("新密码由6-16位数字字母组成!")
            return false;
        }
        if (paramsData.newPwd.text != paramsData.reNewPwd.text) {
            Msg("两次输入的密码不一致!");
            return false;
        }

        const data = {
          oldPwd: paramsData.oldPwd.text,
          onePwd: paramsData.newPwd.text,
          twoPwd: paramsData.reNewPwd.text,
        }

      updataPassword(data).then(res=>{
            if (res.errcode == "ok") {
              ShowActionModal({
                msg: res.errmsg,
                success: () => Taro.navigateBack()
              })
            }else{
              Msg(res.errmsg);
            }
        })
    }


    return(
        <View className="yupao-common-container">
            <View className='user-changepass-box'>
                <Text className='user-changepass-tips'>旧密码</Text>
                <View className='common-publish-item'>
                    <View className='common-publish-item-content common-publish-item-pass'>
                        <Text className='common-publish-words'>原密码</Text>
                        <Input className='common-publish-Input'  value='' placeholder='请输入旧密码' password={paramsData.oldPwd.show} onInput={(e:any)=>enterRePass('oldPwd',e.target.value)}></Input>
                        <Text className={classnames({
                            'pass-eyes-icon': true,
                            'pass-eyes-icon-active':paramsData.oldPwd.show
                        })}  
                        onClick={()=>{changeInputType('oldPwd')}}></Text>
                    </View>
                </View>
            </View>
            <View className='user-changepass-box'>
                <Text className='user-changepass-tips'>新密码</Text>
                <View className='common-publish-item'>
                    <View className='common-publish-item-content common-publish-item-pass'>
                        <Text className='common-publish-words'>新密码</Text>
              <Input className='common-publish-Input' value='' placeholder='请输入新密码' password={paramsData.newPwd.show} onInput={(e: any) => enterRePass('newPwd',e.target.value)}></Input>
                        <Text className={classnames({
                            'pass-eyes-icon':true,
                            'pass-eyes-icon-active':paramsData.newPwd.show
                        })}  
                onClick={() => { changeInputType('newPwd')}}></Text>
                    </View>
                </View>
                <View className='common-publish-item'>
                    <View className='common-publish-item-content common-publish-item-pass'>
                        <Text className='common-publish-words'>确认密码</Text>
              <Input className='common-publish-Input' value='' placeholder='请确认新密码' password={paramsData.reNewPwd.show} onInput={(e: any) => enterRePass('reNewPwd',e.target.value)}></Input>
                        <Text className={classnames({
                            'pass-eyes-icon':true,
                            'pass-eyes-icon-active':paramsData.reNewPwd.show
                        })} 
                  onClick={() => { changeInputType('reNewPwd')}}></Text>
                    </View>
                </View>
            </View>
            <Text className='common-sure-btn' onClick={()=>userUpdataPass()}>确认修改</Text>
        </View>
    )
}

Updatapass.config = {
    navigationBarTitleText: '鱼泡网-修改密码',
    navigationBarBackgroundColor: '#0099ff',
    navigationBarTextStyle: 'white',
    backgroundTextStyle: "dark"
} as Config