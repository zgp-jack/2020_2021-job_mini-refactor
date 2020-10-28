import Taro, { useState } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import classnames from 'classnames'
import './index.scss'
import {isRequireLen} from '../../../utils/v'
import { updataPassword } from '../../../utils/request';


interface Params {
    oldPwd: string,
    onePwd: string,
    twoPwd: string,
}

export default function Updatapass(){

    //提交的数据
    const [paramsData, setParamsData] = useState<Params>({
        oldPwd: '',
        onePwd: '',
        twoPwd: '',
    })

    const [eyesStatus,setEyesStatus] = useState<Params>({
        oldPwd: '0',
        onePwd: '0',
        twoPwd: '0',
    })

    const changeInputType = (type:string)=>{
        eyesStatus[type] === '0' ? eyesStatus[type] = '1' : eyesStatus[type] = '0';
        setEyesStatus({...eyesStatus})
    }

    const enterRePass = (type:string,value:string)=>{
        paramsData[type] = value;
        setParamsData({...paramsData})
    }

    const tost=(str:string)=>{
        Taro.showToast({
            title: str,
            icon: "none",
            duration: 2000
        })
    }

    //提交
    const userUpdataPass = ()=>{
        if (!isRequireLen(paramsData.oldPwd, 6)) {
            tost('原密码有误')
            return false;
        }
        if (!isRequireLen(paramsData.onePwd, 6)) {
            tost("新密码由6-16位数字字母组成!")
            return false;
        }
        if (paramsData.onePwd != paramsData.twoPwd) {
            tost("两次输入的密码不一致!");
            return false;
        }

        updataPassword(paramsData).then(res=>{
            if (res.errcode == "ok") {
                Taro.showModal({
                    title: '温馨提示',
                    content: res.errmsg,
                    showCancel:false,
                    success:function(){
                        Taro.navigateBack()
                    }
                })
            }else{
                tost(res.errmsg);
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
                        <Input className='common-publish-Input'  value='' placeholder='请输入旧密码' password={eyesStatus.oldPwd==='1'?false:true} onInput={(e:any)=>enterRePass('oldPwd',e.target.value)}></Input>
                        <Text className={classnames({
                            'pass-eyes-icon':true,
                            'pass-eyes-icon-active':eyesStatus.oldPwd==='0'?false:true
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
                        <Input className='common-publish-Input'  value='' placeholder='请输入新密码' password={eyesStatus.onePwd==='1'?false:true} onInput={(e:any)=>enterRePass('onePwd',e.target.value)}></Input>
                        <Text className={classnames({
                            'pass-eyes-icon':true,
                            'pass-eyes-icon-active':eyesStatus.onePwd==='0'?false:true
                        })}  
                        onClick={()=>{changeInputType('onePwd')}}></Text>
                    </View>
                </View>
                <View className='common-publish-item'>
                    <View className='common-publish-item-content common-publish-item-pass'>
                        <Text className='common-publish-words'>确认密码</Text>
                        <Input className='common-publish-Input'  value='' placeholder='请确认新密码' password={eyesStatus.twoPwd==='1'?false:true} onInput={(e:any)=>enterRePass('twoPwd',e.target.value)}></Input>
                        <Text className={classnames({
                            'pass-eyes-icon':true,
                            'pass-eyes-icon-active':eyesStatus.twoPwd==='0'?false:true
                        })} 
                        onClick={()=>{changeInputType('twoPwd')}}></Text>
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