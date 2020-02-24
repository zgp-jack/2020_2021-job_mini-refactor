import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classnames from 'classnames'
import { useSelector, useDispatch } from '@tarojs/redux'
import { DEFAULT_MENUS_TYPE, Menu } from '../../reducers/tabbar'
import { changeTabbar } from '../../actions/tabbar'
import './index.scss'

interface PROPS {
  isredirect?: boolean
}

export default function Tabbar({ isredirect = true }: PROPS) {

  const tabbar: DEFAULT_MENUS_TYPE = useSelector<any, DEFAULT_MENUS_TYPE>(state => state.tabbar)
  const dispatch = useDispatch()

  // * 判断跳转还是切换tabbar
  const changeTabbarAction = (item: Menu)=> {
    if (isredirect) Taro.reLaunch({ url: '/pages/index/index?type=' + item.id})
    else dispatch(changeTabbar(item.id))
  }

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
        </View>
      ))}
    </View>
  )
}