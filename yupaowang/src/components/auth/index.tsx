import Taro from '@tarojs/taro'
import { AtMessage } from 'taro-ui'
import { View, Text, Image, Button, Block } from '@tarojs/components'
import { IMGCDNURL, SERVERPHONE } from '../../config'
import { getUserSessionKey, GetUserInfo } from '../../utils/request'
import { User } from '../../reducers/user'
import Msg, { errMsg } from '../../utils/msg'
import { useDispatch, useSelector } from '@tarojs/redux'
import { setUserInfo } from '../../actions/user'
import { UserInfo } from '../../config/store'
import './index.scss'

export interface AuthData {
  session_key: string,
  encryptedData: string,
  iv: string,
  refId: number,
  source: string
}

interface PROPS {
  page?: boolean //是否跳转到页面授权
  callback?: () => void,
  userCancelAuth?: () => void
}

export default function Auth({ page = false, callback, userCancelAuth }: PROPS){

  const dispatch = useDispatch()
  const login:boolean = useSelector<any, boolean>(state=>state.User['login'])

  // 返回上一页
  const pageBack = ()=> {
    Taro.navigateBack({
      delta:1
    })
  }

  // 取消授权
  const cancelAuth = ()=> {
    userCancelAuth&&userCancelAuth()
  }

  // 用户确认授权
  const userAuthAction = (e: any)=> {
    if (e.detail.userInfo){
      Taro.login({
        success:(res)=>{
          if(res.code){
            getUserSessionKey(res.code).then(res=>{
              var sessionKey: string = res.session_key
              decodeSessionKey(sessionKey)
            })
          }else{
            Msg(`授权失败，客服电话${SERVERPHONE}`)
          }
        }
      })
    }else{
      errMsg('您取消了授权')
    }
  }

  // 解密sessionkey
  const decodeSessionKey = (key: string)=> {
    Taro.getSetting({
      success:(res)=>{
        if (!res.authSetting['scope.userInfo']){
          Taro.getUserInfo({
            success: ()=> {
              doAuthRequest(key)
            },
            fail: ()=> {
              Taro.openSetting()
            }
          })
        }else{
          doAuthRequest(key)
        }
      }
    })
  }
  
  // 发起授权请求
  const doAuthRequest = (key: string)=> {
    Taro.getUserInfo({
      success: res => {
        let encryptedData = res.encryptedData
        let iv = res.iv
        const data: AuthData = {
          session_key: key,
          encryptedData: encryptedData,
          iv: iv,
          refId: 0,
          source: '', //疑似小程序source 忘记干嘛的了
        }
        GetUserInfo(data).then(res=>{
          if(res.errcode === 'ok'){
            const user: User = {
              userId: res.data.id,
              token: res.data.sign.token,
              tokenTime: res.data.sign.time,
              uuid: res.data.uuid,
              login: true
            }
            Taro.setStorageSync(UserInfo,user)
            dispatch(setUserInfo(user))
            callback&&callback()
            if(page) pageBack()
          }else{
            errMsg(res.errmsg)
          }
        })
      }
    })
  }

  return (
  <Block>
    {((!login && !page) || page) &&
    <View>
      <AtMessage />
      <View className='user-auth-container'>
        <Image className='user-auth-img' src={ IMGCDNURL + 'userauth-topicon.png' } />
        <View className='user-auth-title'>登录鱼泡网</View>
        <Text className='user-auth-tips'>招工 找活抢先一步，用的安心 赚的开心。</Text>
        <Button className='user-btn user-auth-submit' openType='getUserInfo' onGetUserInfo={(e) => userAuthAction(e)}>微信授权登录</Button>
        {page ? 
        <Button className='user-btn user-auth-return' onClick={() => pageBack()}>返回上一页</Button>
        :
        <Button className='user-btn user-auth-return' onClick={() => cancelAuth()}>取消授权</Button>
        }
      </View>
    </View>
    }
    </Block>
  )
}