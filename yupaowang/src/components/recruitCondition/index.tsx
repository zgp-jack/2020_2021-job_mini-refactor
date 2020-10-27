import Taro, { useState, useEffect, memo } from '@tarojs/taro'
import { View, Image, Block, ScrollView } from '@tarojs/components'
import { IMGCDNURL } from '../../config'
import { AtDrawer } from 'taro-ui'
import { getListFilterData } from '../../utils/request'
import { filterClassifyResultClassTree, filterClassifyResultJoblistType } from '../../utils/request/index.d'
import { filterClassifyDataResultReduce } from '../../reducers/filter_classify'
import { setFilter } from '../../actions/filter_classify'
import AREAS, { ChildItems } from '../../models/area'
import classnames from 'classnames'
import { AreaPickerKey,ClassifyPickerKey,FilterPickerKey } from '../../config/pages/lists'
import { useDispatch, useSelector } from '@tarojs/redux'
import './index.scss'

interface ConditionData {
  id: string,
  text: string
}
interface ConditionProps {
  data: ConditionData[],
  setSearchData: (type: string, id: string) => void
}

function Condition({ data, setSearchData }: ConditionProps ){
  
  const dispatch = useDispatch()

  // * 获取筛选条件信息
  const filterData = useSelector<any, filterClassifyDataResultReduce>(state => state.filterClassify)
  // * 设置标识 避免数据的重复设置影响性能
  const [seted, setSeted] = useState<boolean>(false)
  // * 当前展开项id
  const [current, setCurrent] = useState<string>('')
  // * 当前城市选择父级索引
  const [areaIndex, setAreaIndex] = useState<number>(0)
  // * 当前工种选择父级索引
  const [classifyIndex, setclassifyIndex] = useState<number>(0)
  // * 当前工种选择父级索引
  const [filterIndex, setFilterIndex] = useState<number>(0)
  // * 当前展开的城市子集数据
  const [childAreaList, setChildAreaList] = useState<ChildItems[]>(AREAS[areaIndex].children)
  // * 工种数据
  const [classify, setClassify] = useState<filterClassifyResultClassTree[]>([])
  // * 数据筛选条件 最新 热门
  const [jobtype, setJobtype] = useState<filterClassifyResultJoblistType[]>([])
  // * 城市切换后子集列表回到顶部
  const [areaScrollTop, setAreaScrollTop] = useState<number>(0)
  // * 工种切换后子集列表回到顶部
  const [classifyScrollTop, setClassifyScrollTop] = useState<number>(0)

  // * 点击选项展开内容
  const conditionItemClick = (id: string)=> {
    setCurrent(id)
  }

  // * 关闭抽屉
  const closeDrawer = ()=> {
    setCurrent('')
  }

  // * 城市索引更换
  const changeAreaIndex = (i: number)=> {
    setAreaIndex(i)
    setAreaScrollTop(0)
    if (!AREAS[i].has_children) {
      setSearchData(AreaPickerKey, AREAS[i].id.toString())
      closeDrawer()
    }
  }

  // 选择子集地区
  const sureAreaCurrent = (i: number) => {
    let id: string = AREAS[i].children[i].id
    setSearchData(AreaPickerKey, id)
    closeDrawer()
  }

  // 选择子集工种
  const sureClassifyCurrent = (i: number) => {
    let id: number = classify[i].children[i].id
    setSearchData(ClassifyPickerKey, id.toString())
    closeDrawer()
  }

  // 选择最新、推荐过滤条件
  const sureFilterCurrent = (i: number) => {
    setFilterIndex(i)
    let id: string = jobtype[i].type
    setSearchData(FilterPickerKey, id )
    closeDrawer()
  }

  // * 工种索引更换
  const changeClassifyIndex = (i: number) => {
    setclassifyIndex(i)
    setClassifyScrollTop(0)
    if (!classify[i].has_children){
      setSearchData(ClassifyPickerKey,classify[i].id.toString())
      closeDrawer()
    }
  }

  // 获取筛选条件数据
  useEffect(()=>{
    if (filterData.isSet){
      if(seted) return
      setSeted(true)
      setClassify(filterData.classTree)
      setJobtype(filterData.jobListType)
    }else{
      getListFilterData().then(res => {
        dispatch(setFilter({ ...res.data, isSet: true }))
        setSeted(true)
        setClassify(res.data.classTree)
        setJobtype(res.data.jobListType)
      })
    }
  },[])

  // * 获取城市子集数据
  useEffect(()=>{
    setChildAreaList(AREAS[areaIndex].children)
  },[areaIndex])

  const onScrollAction = (e: any, type: string)=> {
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
        {data&&data.map((item)=>(
          <View className='recruit-condition-item' key={item.id} onClick={() => conditionItemClick(item.id)}>
            <View className='recruit-condition-content overwords'>
            { item.text }
            <Image className='recruit-condition-select' src={IMGCDNURL + 'select.png'} />
            </View>
          </View>
        ))}
      </View>

      {/* 地址选择器 */}
      <AtDrawer
        show={current === AreaPickerKey}
        mask
        onClose={()=>closeDrawer()}
      >
        <View className='common-drawer-item'>
          <ScrollView className='drawer-full-lists' scrollY>
            {AREAS.map((item,index)=>(
              <View 
                className={classnames({
                  'drawer-list-item overwords': true,
                  'drawer-list-item-active': index === areaIndex
                })}
                key={ item.id }
                onClick={() => changeAreaIndex(index)}
              >{ item.name }</View>
            ))}
          </ScrollView>
          {childAreaList.length &&
          <ScrollView 
            className='drawer-full-lists drawer-half-lists' 
            scrollY 
            scrollTop={ areaScrollTop }
            onScroll={(e)=>onScrollAction(e, AreaPickerKey)}
          >
            {childAreaList.map((item,i)=>(
              <View className='drawer-list-item overwords' onClick={()=>sureAreaCurrent(i)}>{ item.name }</View>
            ))}
          </ScrollView>
          }
        </View>
      </AtDrawer>
      {/* 工种选择器 */}
      <AtDrawer
        show={current === ClassifyPickerKey}
        mask
        onClose={() => closeDrawer()}
      >
        <View className='common-drawer-item'>
          <ScrollView className='drawer-full-lists' scrollY>
            {classify.map((item, index) => (
              <View
                className={classnames({
                  'drawer-list-item overwords': true,
                  'drawer-list-item-active': index === classifyIndex
                })}
                key={item.id}
                onClick={() => changeClassifyIndex(index)}
              >{item.name}</View>
            ))}
          </ScrollView>
          {classify.length&&classify[classifyIndex].has_children &&
            <ScrollView
              className='drawer-full-lists drawer-half-lists'
              scrollY
              scrollTop={classifyScrollTop}
              onScroll={(e) => onScrollAction(e, ClassifyPickerKey)}
            >
            {classify[classifyIndex].children.map((item,i) => (
                <View className='drawer-list-item overwords' onClick={()=>sureClassifyCurrent(i)}>{item.name}</View>
              ))}
            </ScrollView>
          }
        </View>
      </AtDrawer>
      {/* 条件选择器 */}
      <AtDrawer
        show={current === FilterPickerKey}
        mask
        onClose={() => closeDrawer()}
      >
        <View className='common-drawer-item'>
          <ScrollView className='drawer-full-lists' scrollY>
            {jobtype.map((item,index) => (
              <View
                key={item.type}
                onClick={() => sureFilterCurrent(index)}
                className={classnames({
                  'drawer-list-item overwords': true,
                  'drawer-list-item-active': index === filterIndex
                })}
              >{item.name}</View>
            ))}
          </ScrollView>
        </View>
      </AtDrawer>
    </Block>
  )
}

export default memo(Condition)