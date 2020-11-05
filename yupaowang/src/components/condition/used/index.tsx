import Taro, { useState, useEffect, memo } from '@tarojs/taro'
import { View, Image, Block, ScrollView } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import { AtDrawer } from 'taro-ui'
import { getListFilterData } from '../../../utils/request'
import { filterClassifyResultFleamarketTree, filterClassifyResultClassTreeBase } from '../../../utils/request/index.d'
import { filterClassifyDataResultReduce } from '../../../reducers/filter_classify'
import { setFilter } from '../../../actions/filter_classify'
import AREAS, { ChildItems } from '../../../models/area'
import classnames from 'classnames'
import { AreaPickerKey, ClassifyPickerKey, FilterPickerKey, } from '../../../config/pages/lists'
import { useDispatch, useSelector } from '@tarojs/redux'
import { UserListChooseCity } from '../../../config/store'
import './index.scss'

interface ConditionData {
  id: string,
  text: string
}
interface ConditionProps {
  data: ConditionData[],
  setSearchData: (type: string, id: string, name: string, noRender?: boolean) => void
}

function UsedCondition({ data, setSearchData }: ConditionProps) {

  const dispatch = useDispatch()

  // * 获取地区选择默认数据
  let userListChooseCity: ChildItems = Taro.getStorageSync(UserListChooseCity)

  // * 获取筛选条件信息
  const filterData = useSelector<any, filterClassifyDataResultReduce>(state => state.filterClassify)
  // * 设置标识 避免数据的重复设置影响性能
  const [seted, setSeted] = useState<boolean>(false)
  // * 当前展开项id
  const [current, setCurrent] = useState<string>('')
  // * 当前城市选择子级索引
  const [areaIndex, setAreaIndex] = useState<number>(0)
  // * 当前城市选择子级id
  const [areaChildId, setAreaChildId] = useState<string>(userListChooseCity.id)
  // * 当前工种选择父级索引
  const [fleamarketTreeIndex, setfleamarketTreeIndex] = useState<number>(0)
  // * 历史工种选择父级索引
  let [oldFleamarketTreeIndex, setOldFleamarketTreeIndex] = useState<number>(0)
  // * 当前工种选择子级id
  const [fleamarketTreeSonId, setfleamarketTreeSonId] = useState<string>('')

  // * 当前展开的城市子集数据
  const [childAreaList, setChildAreaList] = useState<ChildItems[]>(AREAS[areaIndex].children)
  // 分类
  const [fleamarketTree, setFleamarketTree] = useState<filterClassifyResultFleamarketTree[]>([])
  // * 子集类型数据
  const [fleamarketTreeChildData, setFleamarketTreeChildData] = useState<Pick<filterClassifyResultClassTreeBase, 'id' | 'name'>[]>([])
  // * 历史子集类型数据
  const [oldFleamarketTreeChildData, setoldFleamarketTreeChildData] = useState<Pick<filterClassifyResultClassTreeBase, 'id' | 'name'>[]>([])
  // * 城市切换后子集列表回到顶部
  const [areaScrollTop, setAreaScrollTop] = useState<number>(0)
  // * 工种切换后子集列表回到顶部
  const [classifyScrollTop, setClassifyScrollTop] = useState<number>(0)

  // * 点击选项展开内容
  const conditionItemClick = (id: string) => {
    setCurrent(id)
  }

  // * 关闭抽屉
  // * reReset是否重置
  const closeDrawer = (reReset?: boolean) => {
    // * 关闭的时候会去调onClose方法，避免重复调用
    if(current!==''){
      //关闭的时候重置数据
      if (reReset) {
        resetCity()
        resetFleamarketTree()
      }
      setCurrent('')
    }
  }

  // * 重置分类
  function resetFleamarketTree() {
    setfleamarketTreeIndex(oldFleamarketTreeIndex)
    setFleamarketTreeChildData([...oldFleamarketTreeChildData])
  }

  // * 城市索引更换
  const changeAreaIndex = (i: number) => {
    setAreaIndex(i)
    setAreaScrollTop(0)
    if (!AREAS[i].has_children) {
      setSearchData(AreaPickerKey, AREAS[i].id.toString(), AREAS[i].name)
      Taro.setStorageSync('userListChooseCity', { ...AREAS[i] })
      closeDrawer()
    }
  }

  // 选择子集地区
  const sureAreaCurrent = (data: any) => {
    setAreaChildId(data.id)
    setSearchData(AreaPickerKey, data.id, data.name)
    Taro.setStorageSync('userListChooseCity', { ...data })
    closeDrawer()
  }

  // *  选择子集工种
  const sureClassifyCurrent = (i: number) => {
    let id: number = fleamarketTreeChildData[i].id - 0;
    setfleamarketTreeSonId(id + '')
    setSearchData(FilterPickerKey, id.toString(), fleamarketTreeChildData[i].name)
    setOldFleamarketTreeIndex(fleamarketTreeIndex)
    setoldFleamarketTreeChildData([...filterData.fleamarketTree[fleamarketTreeIndex].attributes])
    closeDrawer()
  }

  // * 工种索引更换
  const changeClassifyIndex = (i: number) => {
    setfleamarketTreeIndex(i)
    setClassifyScrollTop(0)
    if (!fleamarketTree[i].has_attribute) {
      setOldFleamarketTreeIndex(i)
      setSearchData(ClassifyPickerKey, fleamarketTree[i].id.toString(), fleamarketTree[i].name)
      setFleamarketTreeChildData([])
      setoldFleamarketTreeChildData([])
      closeDrawer()
    } else {
      setSearchData(ClassifyPickerKey, fleamarketTree[i].id.toString(), fleamarketTree[i].name, true)
      setFleamarketTreeChildData([...filterData.fleamarketTree[i].attributes])
    }
  }

  // * 地区设置默认索引
  function resetCity() {
    let defaultCityId = userListChooseCity.pid === '1' ? userListChooseCity.id : userListChooseCity.pid;
    let defaultCityIndex = AREAS.findIndex((item) => item.id === defaultCityId)
    setAreaIndex(defaultCityIndex)
  }

  // 获取筛选条件数据
  useEffect(() => {
    resetCity()
    if (!filterData.isSet) {
      if (seted) return
      setSeted(true)
      setFleamarketTree(filterData.fleamarketTree)
    } else {
      getListFilterData().then(res => {
        dispatch(setFilter({ ...res.data, isSet: true }))
        setSeted(true)
        setFleamarketTree(res.data.fleamarketTree)
      })
    }
  }, [])

  // * 获取城市子集数据
  useEffect(() => {
    setChildAreaList(AREAS[areaIndex].children)
  }, [areaIndex])

  const onScrollAction = (e: any, type: string) => {
    let top: number = e.detail.scrollTop
    switch (type) {
      case AreaPickerKey:
        setAreaScrollTop(top)
        break
      case ClassifyPickerKey:
        setClassifyScrollTop(top)
        break
      default:
        break
    }
  }
  return (
    <Block>
      <View className='recruit-condition-box'>
        {data && data.map((item) => (
          <View className='recruit-condition-item' key={item.id} onClick={() => conditionItemClick(item.id)}>
            <View className='recruit-condition-content overwords'>
              {item.text}
              <Image className='recruit-condition-select' src={IMGCDNURL + 'select.png'} />
            </View>
          </View>
        ))}
      </View>

      {/* 地址选择器 */}
      <AtDrawer
        show={current === AreaPickerKey}
        mask
        onClose={() => closeDrawer(true)}
      >
        <View className='common-drawer-item'>
          <ScrollView className='drawer-full-lists' scrollY>
            {AREAS.map((item, index) => (
              <View
                className={classnames({
                  'drawer-list-item overwords': true,
                  'drawer-list-item-active': index === areaIndex
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
              scrollTop={areaScrollTop}
              onScroll={(e) => onScrollAction(e, AreaPickerKey)}
            >
              {childAreaList.map((item, i) => (
                <View
                  className={classnames({
                    'drawer-list-item overwords': true,
                    'drawer-list-item-active': item.id === areaChildId
                  })}
                  onClick={() => sureAreaCurrent(item)}>{item.name}</View>
              ))}
            </ScrollView>
          }
        </View>
      </AtDrawer>
      {/* 工种选择器 */}
      <AtDrawer
        show={current === ClassifyPickerKey}
        mask
        onClose={() => closeDrawer(true)}
      >
        <View className='common-drawer-item'>
          <ScrollView className='drawer-full-lists' scrollY>
            {fleamarketTree.map((item, index) => (
              <View
                className={classnames({
                  'drawer-list-item overwords': true,
                  'drawer-list-item-active': index === fleamarketTreeIndex
                })}
                key={item.id}
                onClick={() => changeClassifyIndex(index)}
              >{item.name}</View>
            ))}
          </ScrollView>
          {fleamarketTreeChildData.length &&
            <ScrollView
              className='drawer-full-lists drawer-half-lists'
              scrollY
              scrollTop={classifyScrollTop}
              onScroll={(e) => onScrollAction(e, ClassifyPickerKey)}
            >
              {fleamarketTreeChildData.map((item, i) => (
                <View className={classnames({
                  'drawer-list-item overwords': true,
                  'drawer-list-item-active': item.id + '' === fleamarketTreeSonId
                })} onClick={() => sureClassifyCurrent(i)}>{item.name}</View>
              ))}
            </ScrollView>
          }
        </View>
      </AtDrawer>
    </Block>
  )
}

export default memo(UsedCondition)