import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { useSelector } from '@tarojs/redux'
import { getMemberInfo } from '../../utils/request'
import { MemberInfo } from '../../utils/request/index.d'
import { IMGCDNURL, AUTHPATH } from '../../config'
import { ShowActionModal } from '../../utils/msg'
import { isIos } from '../../utils/v'
import './index.scss'

export interface UserMemberInfo {
  username: string,
  phone: string,
  avatar: string
}
export default function Member(){

  // 获取用户信息
  const login = useSelector<any, boolean>(state => state.User['login'])
  // member信息
  const [model, setModel] = useState<MemberInfo>()
  // 获取招工信息更新数量
  const jobNumber: number = useSelector<any, number>(state => state.msg['jobNumber'])
  // 获取我的信息未读数量
  const msgNumber: number = useSelector<any, number>(state => state.msg['messageNumber'])
  // 判断是否是ios
  const [ios, setIos] = useState<boolean>(false)
  // 创建memberContext
  const value: UserMemberInfo = {
    username: model ? model.member.username||model.member.nickname : '',
    avatar: model ? model.member.headimgurl : '',
    phone: model ? model.member.tel : ''
  }

  // 用户页面跳转
  const userRouteJump = (url: string)=> {
    Taro.navigateTo({
      url: url
    })
  }

  // 初始化用户信息
  const initMemberInfo = ()=> {
    if(!login) return
    getMemberInfo().then(data=>{
      if(data.errcode == 'ok') setModel(data)
      else ShowActionModal(data.errmsg)
    })
  }

  useEffect(()=>{
    setIos(isIos())
  },[])

  useEffect(()=>{
    initMemberInfo()
  },[login])

  return (
    <View className='member-container'>
      <View className='member-header-box'>
        <View className='member-header-title'>会员中心</View>
        <View className='member-userinfobox'>
          {/* 检测用户登录状态 */}
          {login && model ? 
          <View className='member-userinfo'>
            <View className='member-userinfo-content'>
              <Image className='member-userinfo-avatar' src='http://cdn.yupao.com/miniprogram/images/user.png' />
              <View className='member-username'>
                <View className='member-username-text'>
                { model.member.username || model.member.nickname }
                { model.is_checking == 2 && model.member.is_check == '2' &&
                <Image className='member-realnameimg' src='http://cdn.yupao.com/miniprogram/images/newresume-infolist-ysm.png' />
                }
                </View>
              </View>
              <View className='member-usernum'>会员编号：<Text className='member-id'>{ model.member.id }</Text></View>
              { model.member.tel ? 
                  <View className='member-editinfo' onClick={() => userRouteJump(`/pages/userinfo/index/index?username=${value.username}&phone=${value.phone}&avatar=${value.avatar}`)}>修改资料</View>
              :
              <View className='member-editinfo' onClick={()=>userRouteJump('/pages/userinfo/add/index')}>完善资料</View>
              }
            </View>
            <View className='member-user-integral'>
              <View className='member-integral-item'>
                <Text className='member-integral-num'>{ model.member.integral }</Text>
                <Text className='member-integral-text'>积分</Text>
              </View>
              <View className='member-integral-item'>
                <Text className='member-integral-num'>{ model.member.temporary_integral }</Text>
                <Text className='member-integral-text'>临时积分</Text>
                <Text className='member-integral-tips'>详情</Text>
              </View>
            </View>
          </View>
          :
          <View className='member-userinfo member-userinfo-null' onClick={() => userRouteJump(AUTHPATH)}>
            <View className='member-toauth'>
              <Image className='member-user-nullimg' src={IMGCDNURL + 'userauth-userinfo-null.png' } />
              <Text className='member-user-login'>登录/注册</Text>
            </View>
            <View className='member-login-tips'>点击上方登录/注册按钮可以前往登录页面，登录成功后可解锁小程序全部功能，方便您能更便捷的招工找活。</View>
          </View>
          }
        </View>
      </View>
      <View className='member-body-container'>
        <View className='member-list-container'>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-recruit.png' } />
            <Text className='member-list-title'>我的招工</Text>
            {jobNumber && <Text className='member-list-tips'>状态有更新</Text>}
          </View>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-resume.png'} />
            <Text className='member-list-title'>我的找活名片</Text>
            <Text className='member-list-tips'>{model && model.member.resume_status.resume_tips_string }</Text>
          </View>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-used.png'} />
            <Text className='member-list-title'>我的二手交易</Text>
          </View>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-info.png'} />
            <View className='member-list-title'>
              <Text>我的信息</Text>
              {msgNumber &&
              <View className='member-num-dotbox'>
                <Text className='member-num-dot'>{msgNumber > 9 ? '9+' : msgNumber}</Text>
              </View>
              }
            </View>
            {msgNumber && <Text className='member-list-tips'>有新信息待查看</Text>}
          </View>
        </View>
        <View className='member-list-container'>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-integral.png'} />
            <Text className='member-list-title'>获取积分</Text>
            {!ios && <Text className='member-list-tips'>去充值</Text>}
          </View>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-invite.png'} />
            <Text className='member-list-title'>邀请工友</Text>
            <Text className='member-list-tips'>邀请好友得积分</Text>
          </View>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-expend.png'} />
            <Text className='member-list-title'>积分消耗记录</Text>
          </View>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-origin.png'} />
            <Text className='member-list-title'>积分来源</Text>
          </View>
        </View>
        <View className='member-list-container'>
          <View className='member-list-item' onClick={() => userRouteJump('/pages/realname/index')}>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-realname.png'} />
            <Text className='member-list-title'>实名认证</Text>
            <Text className='member-list-tips'>{model&&model.member.check_state }</Text>
          </View>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-collect.png'} />
            <Text className='member-list-title'>我的收藏</Text>
          </View>
        </View>
        <View className='member-list-container'>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-feedback.png'} />
            <View className='member-list-title'>
              <Text>意见反馈</Text>
              {model && model.member.has_notice_msg.hasNoticeMsgg && <Text className='member-list-dot'></Text>}
            </View>
            {model && model.member.has_notice_msg.hasNoticeMsgg && <Text className='member-list-tips'>有最新回复</Text>}
          </View>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-help.png'} />
            <Text className='member-list-title'>帮助中心</Text>
            <Text className='member-list-tips'>使用教程</Text>
          </View>
        </View>
      </View>
    </View>
  )
}