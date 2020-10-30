import Taro, { useState, useEffect, useDidShow } from '@tarojs/taro'
import { View, Input, Button, Text } from '@tarojs/components'
import { SERVERPHONE } from '../../config'
import Msg, { ShowActionModal } from '../../utils/msg'
import { isPhone } from '../../utils/v'
import { queryAction } from '../../utils/request/index'
import { userQueryAuthMember } from '../../utils/request/index.d'
import { useSelector } from '@tarojs/redux'
import { checkMineAuthInfo } from '../../utils/request'
import './index.scss'

export interface DataType {
  tel: string,
}

export default function RealnameQuery() {

  // 获取用户是否登录
  const login: boolean = useSelector<any, boolean>(state => state.User['login'])
  // 初始化当前用户信息
  const InitUserAuthInfo = () => {
    if (!login) return
    checkMineAuthInfo().then(data => {
      if (data.errcode == 'auth_pass') {
        return
      } else if (data.errcode == 'auth_not_pass' || data.errcode == 'not_auth') {
        Taro.showModal({
          title: '温馨提示',
          content: data.errmsg,
          showCancel: true,
          confirmText: '确定',
          success: (res) => {
            if (res.confirm) {
              // 跳转实名
              Taro.navigateTo({ url: '/pages/realname/index' })
            } else {
              Taro.reLaunch({ url: '/pages/index/index' })
            }
          }
        })
      } else {
        Taro.showModal({
          title: '温馨提示',
          content: data.errmsg,
          showCancel: true,
          confirmText: '确定',
          success: () => {
            Taro.reLaunch({ url: '/pages/index/index' })
          }
        })
      }
    })
  }

  // 进入页面 查询当前用户实名状态
  useDidShow(() => {
    InitUserAuthInfo()
  })

  // 拨打电话
  const userCallPhone = () => {
    Taro.makePhoneCall({ phoneNumber: SERVERPHONE })
  }
  // 需要查询的电话号码
  const [tel, setTel] = useState<string>('')
  // 是否显示人员信息
  const [selfintrone, setSelfintrone] = useState<boolean>(false)

  // 表单展示的默认值
  const [data, setData] = useState<userQueryAuthMember>({
    age: '',
    finally_login_address: '',
    occupations: [],
    register_address: '',
    tel: '',
    username: ''
  })
  // 提交查询
  const handleSubmission = () => {
    if (!isPhone(tel)) {
      Msg('请输入正确手机号')
      return false
    }
    const params: DataType = { tel }
    queryAction(params).then(res => {
      let mycode = res.errcode;
      if (mycode == 'ok') {
        setData(res.member)
        setSelfintrone(true)
      } else if (mycode == 'auth_check') {
        ShowActionModal({
          msg: res.errmsg,
          success: function () {
            Taro.navigateBack()
          }
        })
      } else if (mycode == 'auth_fail' || mycode == 'auth_no') {
        Taro.showModal({
          title: '温馨提示',
          content: res.errmsg,
          showCancel: true,
          confirmText: '确定',
          success(res) {
            if (res.confirm) {
              Taro.navigateTo({
                url: '/pages/realname/realname',
              })
            } else if (res.cancel) {
              Taro.navigateBack()
            }
          }
        })
      } else {
        ShowActionModal(res.errmsg)
      }
    }).catch(()=>Msg('网络错误，查询失败！'))
  }
  return (
    <View className='query-container'>
      <View className='query-box'>
        <Input
          className='query-list-input'
          type='number'
          maxLength={11}
          placeholder='请输入查询手机号'
          onInput={(e) => setTel(e.detail.value)}
        />
        <Button className="now-query-btn" onClick={() => handleSubmission()}>立即查询</Button>
      </View>

      {selfintrone && <View className='realname-query-body'>
        <View className='query-common-list'>
          <View className='query-lists-item clearfix'>
            <View className='query-list-left'>姓名</View>
            <View className='query-list-right'>{data.username}</View>
          </View>
          <View className='query-lists-item clearfix'>
            <View className='query-list-left'>手机号码</View>
            <View className='query-list-right'>{data.tel}</View>
          </View>
          <View className='query-lists-item clearfix'>
            <View className='query-list-left'>年龄</View>
            <View className='query-list-right'>{data.age}</View>
          </View>
          <View className='query-lists-item clearfix'>
            <View className='query-list-left'>工种</View>
            <View className='query-list-right'>
              {data.occupations.map((v, i) => (
                <Text className='labletu' key={i + i}>【{v}】 </Text>
              ))}
            </View>
          </View>
          <View className='query-lists-item clearfix'>
            <View className='query-list-left'>注册城市</View>
            <View className='query-list-right'>{data.register_address}</View>
          </View>
          <View className='query-lists-item clearfix'>
            <View className='query-list-left'>最近可能在的城市</View>
            <View className='query-list-right'>{data.finally_login_address}</View>
          </View>
        </View>
      </View>}
      <View className='realname-query-footer'>
        <View className="query-tips-title">温馨提示</View>
        <View className="realname-query-words">
          <View className="realname-item">1.双方联系时，问对方在鱼泡招工实名认证过没有？如没有认证过,一定让他去认证通过后联系。 如有认证过，你输入对方电话号查询对方的姓名、民族、可能在的城市等信息，来帮助你做进一步的判断。 （鱼泡实名认证通过的，都是利用大数据排除了骗子库已有的骗子、同我们工作人员的经验为你筛选过一遍的。当然也不能完全排除就没有骗子了，所以你同对方对接的时候，还需要做好已下几步）</View>
          <View className="realname-item">2.要求他同你微信视频聊天，视频里约定好条款，录下来，作为证据。</View>
          <View className="realname-item">3.多问问对方建筑的专业问题，看看他专业与否，一上来就问工地地址，不问清楚工资 图纸等，就说能马上过来的，百分百是骗子。</View>
          <View className="realname-item">4.一定不要轻易的告诉对方，工地的详细地址。</View>
          <View className="realname-item">5.如果你发现同你联系的人，有任何问题，都可联系我们客服投诉（电话：<Text className='get-query-tel' onClick={() => userCallPhone()}>{SERVERPHONE}</Text>），确定后，我们将他加入骗子数据库，防止他接着骗人。</View>
        </View>
      </View>
    </View>
  )
}