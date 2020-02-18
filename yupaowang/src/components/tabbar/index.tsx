import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import classnames from 'classnames'
import { useSelector, useDispatch } from '@tarojs/redux'
import { DEFAULT_MENUS_TYPE } from '../../reducers/tabbar'
import { changeTabbar } from '../../actions/tabbar'
import './index.scss'

export default function Tabbar() {

  const tabbar: DEFAULT_MENUS_TYPE = useSelector<any, DEFAULT_MENUS_TYPE>(state => state.tabbar)
  const dispatch = useDispatch()

  return (
    <View className='common-footer-tabbar'>
      {tabbar.list.map((item) => (
        <View
          className={classnames({
            'common-footer-tabbar-list': true,
            'common-footer-tabbar-list-active': item.id === tabbar.key
          })}
          key={item.id}
          onClick={() => dispatch(changeTabbar(item.id))}
        >
          <Image className='commmon-footer-tabbar-img' src={item.id === tabbar.key ? item.activeImg : item.defaultImg} />
          <Text className='commmon-footer-tabbar-text'>{item.title}</Text>
        </View>
      ))}
    </View>
  )
}