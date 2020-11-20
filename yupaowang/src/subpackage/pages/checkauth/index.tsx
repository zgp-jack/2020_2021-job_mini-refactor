import Taro, { useEffect, useState, useDidShow, Config } from '@tarojs/taro'
import { View, Text, Input, Block } from '@tarojs/components'
import { SERVERPHONE, REALNAMEPATH } from '../../../config/index'
import { isPhone } from '../../../utils/v'
import { getUserIsAuth, checkMineAuthInfo } from '../../../utils/request'
import { CheckUserAuthMember } from '../../../utils/request/index.d'
import { useSelector } from '@tarojs/redux'
import Auth from '../../../components/auth'
import './index.scss'
import Msg, { ShowActionModal } from '../../../utils/msg'

export default function CheckAuth(){

  const [tel, setTel] = useState<string>('')
  const [model, setModel] = useState<CheckUserAuthMember>()
  const [show, setShow] = useState<boolean>(false)
  const login = useSelector<any, boolean>(state => state.User['login'])
  // 是否是第一次进入页面
  const [first, setFirst] = useState<boolean>(true)
  // 用户拨打电话
  const userCallPhone = () => {
    Taro.makePhoneCall({
      phoneNumber: SERVERPHONE
    })
  }

  const InitUserAuthInfo = ()=> {
    if (!login) return
    checkMineAuthInfo().then(data => {
      if (data.errcode == 'auth_pass'){
        return
      } else if (data.errcode == 'auth_not_pass'){
        Taro.showModal({
          title: '温馨提示',
          content: data.errmsg,
          success: (res)=> {
            if(res.confirm){
              // 跳转实名
              Taro.navigateTo({ url: REALNAMEPATH })
            }else{
              Taro.reLaunch({url: '/pages/index/index'})
            }
          }
        })
      }else{
        ShowActionModal({
          msg: data.errmsg,
          success: ()=> {
            Taro.reLaunch({ url: '/pages/index/index' })
          }
        })
      }
    })
  }

  useDidShow(()=>{
    if (first) {
      setFirst(false)
      return
    }
    InitUserAuthInfo()
  })

  useEffect(()=>{
    InitUserAuthInfo()
  },[login])

  // 用户输入电话号码
  const userEnterTel = (e: any)=> {
    setTel(e.detail.value)
  }

  // 用户查询实名
  const userCheckAuth = ()=> {
    if(!isPhone(tel)){
      Msg('请先输入正确的手机号码')
      return
    }
    getUserIsAuth(tel).then(data=>{
      if(data.errcode == 'ok'){
        setModel(data.member)
        setShow(true)
      }else{
        ShowActionModal({ msg: data.errmsg})
        setShow(false)
      }
    }).catch(()=>{
      ShowActionModal({
        msg: '网络错误，请求失败',
        success: ()=> {
          Taro.navigateBack()
        }
      })
    })
  }
  return (
    <Block>
    <Auth />
    <View className='checkauth-container'>
      <View className='checkauth-header'>
        <Input className='checkauth-input' placeholder='请输入查询手机号' onInput={(e)=>userEnterTel(e)} value={ tel } />
        <Text className='checkauth-btn' onClick={() => userCheckAuth()}>立即查询</Text>
      </View>
      {show && model &&
      <View className='checkauth-body'>
        <View className='checkauth-res-item'>
          <View className='checkauth-res-title'>姓名</View>
          <View className='checkauth-res-text'>{ model.username }</View>
        </View>
        <View className='checkauth-res-item'>
          <View className='checkauth-res-title'>手机号码</View>
          <View className='checkauth-res-text'>{ model.tel }</View>
        </View>
        <View className='checkauth-res-item'>
          <View className='checkauth-res-title'>年龄</View>
          <View className='checkauth-res-text'>{ model.age }</View>
        </View>
        <View className='checkauth-res-item'>
          <View className='checkauth-res-title'>工种</View>
          {model.occupations.map((item,index)=>(
            <View className='checkauth-res-text' key={ index }>{ item }</View>
          ))}
        </View>
        <View className='checkauth-res-item'>
          <View className='checkauth-res-title'>注册城市</View>
          <View className='checkauth-res-text'>{ model.register_address }</View>
        </View>
        <View className='checkauth-res-item'>
          <View className='checkauth-res-title'>最近可能在的城市</View>
          <View className='checkauth-res-text'>{ model.finally_login_address }</View>
        </View>
      </View>
      }
      <View className='checkauth-footer'>
        <View className='chekcauth-tips'>温馨提示</View>
        <View className='checkauth-item'>1.双方联系时，问对方在鱼泡招工实名认证过没有？如没有认证过,一定让他去认证通过后联系。 如有认证过，你输入对方电话号查询对方的姓名、民族、可能在的城市等信息，来帮助你做进一步的判断。 （鱼泡实名认证通过的，都是利用大数据排除了骗子库已有的骗子、同我们工作人员的经验为你筛选过一遍的。当然也不能完全排除就没有骗子了，所以你同对方对接的时候，还需要做好已下几步）</View>
        <View className='checkauth-item'>2.要求他同你微信视频聊天，视频里约定好条款，录下来，作为证据。</View>
        <View className='checkauth-item'>3.多问问对方建筑的专业问题，看看他专业与否，一上来就问工地地址，不问清楚工资 图纸等，就说能马上过来的，百分百是骗子。a</View>
        <View className='checkauth-item'>4.一定不要轻易的告诉对方，工地的详细地址。</View>
        <View className='checkauth-item'>5.如果你发现同你联系的人，有任何问题，都可联系我们客服投诉（电话：<Text className='checkauth-item-tel' onClick={() => userCallPhone()}>{ SERVERPHONE }</Text>），确定后，我们将他加入骗子数据库，防止他接着骗人。 </View>
      </View>
    </View>
    </Block>
  )
}

CheckAuth.config = {
  navigationBarTitleText: '实名查询'
} as Config