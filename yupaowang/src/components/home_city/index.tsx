import Taro, { useState, useEffect, memo } from '@tarojs/taro'
import { View, Block, ScrollView } from '@tarojs/components'
import { AtDrawer } from 'taro-ui'
import classnames from 'classnames'
import { UserListChooseCity } from '../../config/store'
import AREAS, { ChildItems } from '../../models/area'
import './index.scss'

interface ConditionProps {
  show: boolean
  closeDrawer: () => void,
  setAreaInfo: (val: string,id: string) => void
}

function HomeCity({ closeDrawer, setAreaInfo, show }: ConditionProps) {

  // * 当前选择父级索引
  const [current, setCurrent] = useState<number>(0)
  // * 当前选中的子集id
  const [areaId, setAreaId] = useState<string>('')
  // * 城市切换后子集列表回到顶部
  const [scrollTop, setScrollTop] = useState<number>(0)
  // * 城市子集数据
  const [childAreaList, setChildAreaList] = useState<ChildItems[]>([])

  // 初始化城市父级索引
  useEffect(() => {
    let userListChooseCity: ChildItems = Taro.getStorageSync(UserListChooseCity)
    if (userListChooseCity) {
      let id: string = userListChooseCity.id
      setAreaId(id)
      // pid == 1 代表省份 直辖市
      let pid: string = userListChooseCity.pid === '1' ? userListChooseCity.id : userListChooseCity.pid
      let i: number = AREAS.findIndex(item => item.id === pid)
      // pid == 0 代表全国
      i = pid === '0' ? 0 : i
      setCurrent(i)
      if(AREAS[i].has_children){
        setChildAreaList(AREAS[i].children)
      }
    }
  }, [])

  // * 城市索引更换
  const changeAreaIndex = (i: number) => {
    setCurrent(i)
    setScrollTop(0)
    if (!AREAS[i].has_children) {
      let name: string = AREAS[i].name
      let id: string = AREAS[i].id
      setAreaInfo(name,id)
      setAreaId(id)
      Taro.setStorageSync(UserListChooseCity, AREAS[i])
      closeDrawer()
      return
    }
    setChildAreaList(AREAS[i].children)
  }

  // 选择子集地区
  const sureAreaCurrent = (i: number) => {
    let name: string = AREAS[current].children[i].name
    let id: string = AREAS[current].children[i].id
    setAreaInfo(name,id)
    setAreaId(id)
    Taro.setStorageSync(UserListChooseCity, AREAS[current].children[i])
    closeDrawer()
  }

  return (
    <AtDrawer
      show={show}
      mask
      onClose={() => closeDrawer()}
    >
      <View className='common-drawer-item'>
        <ScrollView className='drawer-full-lists' scrollY>
          {AREAS.map((item, index) => (
            <View
              className={classnames({
                'drawer-list-item overwords': true,
                'drawer-list-item-active': index === current
              })}
              key={item.id}
              onClick={() => changeAreaIndex(index)}
            >{item.name}</View>
          ))}
        </ScrollView>
        {childAreaList.length &&
          <ScrollView
            className='drawer-full-lists drawer-half-lists'
            scrollY
            scrollTop={scrollTop}
          >
            {childAreaList.map((item, i) => (
              <View className={classnames({
                'drawer-list-item overwords': true,
                'drawer-list-item-active': item.id === areaId
              })} onClick={() => sureAreaCurrent(i)}>{item.name}</View>
            ))}
          </ScrollView>
        }
      </View>
    </AtDrawer>
  )
}

export default memo(HomeCity)
