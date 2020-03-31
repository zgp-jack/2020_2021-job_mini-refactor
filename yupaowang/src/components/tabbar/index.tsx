import Taro, { useEffect, onAppShow, onAppHide } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classnames from 'classnames'
import { getMemberMsgNumber } from '../../utils/request'
import { isIos } from '../../utils/v'
import { useSelector, useDispatch } from '@tarojs/redux'
import { DEFAULT_MENUS_TYPE, Menu } from '../../reducers/tabbar'
import { setMsg } from '../../actions/msg'
import { changeTabbar } from '../../actions/tabbar'
import { MemberMsgTimerInterval } from '../../config'
import './index.scss'

interface PROPS {
  notredirect?: boolean
}

export default function Tabbar({ notredirect }: PROPS) {
  const tabbar: DEFAULT_MENUS_TYPE = useSelector<any, DEFAULT_MENUS_TYPE>(state => state.tabbar)
  const login: boolean = useSelector<any, boolean>(state => state.User['login'])
  const memberMsg: number = useSelector<any, number>(state => state.msg['messageNumber'])
  const dispatch = useDispatch()
  let timer: NodeJS.Timeout; //定时器接收对象

  // * 判断跳转还是切换tabbar
  const changeTabbarAction = (item: Menu)=> {
    if (notredirect)
      dispatch(changeTabbar(item.id))
    else 
      Taro.reLaunch({ url: '/pages/index/index?type=' + item.id })
  }

  // 统计未读信息
  const getMemberMsg = ()=> {
      if (!login) return
      getMemberMsgNumber(isIos()).then(data => {
        if (data.errcode == 'ok') dispatch(setMsg(data.data))
      })
  }

  // 定时请求未读信息
  // onAppShow(()=>{
  //   getMemberMsg()
  //   timer = setInterval(() => {
  //     getMemberMsg()
  //   }, MemberMsgTimerInterval)
  // })

  // 清除页面定时器
  onAppHide(()=>{
    clearInterval(timer)
  })

  return (
    <View className='common-footer-tabbar'>
      {tabbar.list.map((item) => (
        <View
          className={classnames({
            'common-footer-tabbar-list': true,
            'common-footer-tabbar-list-active': item.id === tabbar.key
          })}
          key={item.id}
          onClick={() => changeTabbarAction(item)}
        >
          <Image className='commmon-footer-tabbar-img' src={item.id === tabbar.key ? item.activeImg : item.defaultImg} />
          <Text className='commmon-footer-tabbar-text'>{item.title}</Text>
          { item.msg && memberMsg && <Text className='footermsg'>{ memberMsg > 9 ? '9+' : memberMsg }</Text> }
        </View>
      ))}
    </View>
  )
}