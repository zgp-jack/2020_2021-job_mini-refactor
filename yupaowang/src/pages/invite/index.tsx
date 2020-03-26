import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Button, Image, Input } from '@tarojs/components'
import { IMGCDNURL } from '../../config'
import { useSelector } from '@tarojs/redux'
import { getUserInviteLink } from '../../utils/request'
import { ShowActionModal } from '../../utils/msg'
import Auth from '../../components/auth'
import './index.scss'

export default function Invite() {

  // 用户邀请链接
  const [link, setLink] = useState<string>('')
  // 获取用户是否登录
  const login = useSelector<any, boolean>(state => state.User['login'])
  // 初始化用户链接
  useEffect(()=>{
    console.log(login)
    if (!login) return
    getUserInviteLink().then(res=>{
      if (res.errcode == 'ok') setLink(res.link)
      else ShowActionModal({msg: res.errmsg})
    })
  }, [login])
  // 用户复制邀请链接
  const copyUserInviteLink = ()=> {
    Taro.setClipboardData({
      data: link,
      success: ()=>{
        Taro.hideToast()
        ShowActionModal({
          title: '恭喜您',
          msg: '您的邀请链接已复制到粘贴板，赶快去邀请好友吧！'
        })
      }
    })
  }
  return (
    <View>
      <Auth />
      <View className='invite-container'>
        <View className='invite-item invite-item-icon'>
          <View className='invite-header'>
            <Image className='invite-img' src={ IMGCDNURL +'invite-way1.png' } />
            <View className='invite-text'>点击右上角三个点，或点击下方(点击分享)按钮，分享鱼泡网到微信建筑群、焊工群、微信好友，工友点击你分享的链接来到鱼泡网。</View>
          </View>
          <Button className='invite-btn' openType='share'>点击分享</Button>
        </View>
        <View className='invite-item'>
          <View className='invite-header'>
            <Image className='invite-img' src={ IMGCDNURL + 'invite-way2.png'} />
            <View className='invite-text'>点击下方（复制专属邀请链接），发到QQ群、论坛、贴吧，工友通过你的专享邀请链接来到鱼泡网。</View>
            <Input className='invite-input' value={ link } />
          </View>
          <Button className='invite-btn' onClick={()=>copyUserInviteLink()}>复制专属邀请链接</Button>
        </View>
      </View>
    </View>
  )
}