import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'
import { IMGCDNURL } from '../../config'

export default function Member(){
  return (
    <View className='member-container'>
      <View className='member-header-box'>
        <View className='member-header-title'>会员中心</View>
        <View className='member-userinfobox'>
          <View className='member-userinfo'>
            <View className='member-userinfo-content'>
              <Image className='member-userinfo-avatar' src='http://cdn.yupao.com/miniprogram/images/user.png' />
              <View className='member-username'>
                <View className='member-username-text'>
                张某某
                <Image className='member-realnameimg' src='http://cdn.yupao.com/miniprogram/images/newresume-infolist-ysm.png' />
                </View>
              </View>
              <View className='member-usernum'>会员编号：<Text>369</Text></View>
              <View className='member-editinfo'>修改资料</View>
            </View>
            <View className='member-user-integral'>
              <View className='member-integral-item'>
                <Text className='member-integral-num'>23</Text>
                <Text className='member-integral-text'>退还积分</Text>
              </View>
              <View className='member-integral-item'>
                <Text className='member-integral-num'>23233</Text>
                <Text className='member-integral-text'>积分</Text>
              </View>
              <View className='member-integral-item'>
                <Text className='member-integral-num'>23</Text>
                <Text className='member-integral-text'>临时积分</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className='member-body-container'>
        <View className='member-list-container'>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-recruit.png' } />
            <Text className='member-list-title'>我的招工</Text>
            <Text className='member-list-tips'>状态有更新</Text>
          </View>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-resume.png'} />
            <Text className='member-list-title'>我的找活名片</Text>
            <Text className='member-list-tips'>去添加</Text>
          </View>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-used.png'} />
            <Text className='member-list-title'>我的二手交易</Text>
          </View>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-info.png'} />
            <Text className='member-list-title'>我的信息</Text>
            <Text className='member-list-tips'>有新信息待查看</Text>
          </View>
        </View>
        <View className='member-list-container'>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-integral.png'} />
            <Text className='member-list-title'>获取积分</Text>
            <Text className='member-list-tips'>去充值</Text>
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
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-realname.png'} />
            <Text className='member-list-title'>实名认证</Text>
            <Text className='member-list-tips'>去实名</Text>
          </View>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-collect.png'} />
            <Text className='member-list-title'>我的收藏</Text>
          </View>
        </View>
        <View className='member-list-container'>
          <View className='member-list-item'>
            <Image className='member-list-icon' src={ IMGCDNURL + 'lpy/ucenter/newcenter-feedback.png'} />
            <Text className='member-list-title'>意见反馈</Text>
            <Text className='member-list-tips'>去添加</Text>
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