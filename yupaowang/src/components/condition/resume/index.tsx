import Taro, { useState, useEffect, memo } from '@tarojs/taro'
import { View, Image, Block, ScrollView } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import { AtDrawer } from 'taro-ui'
import { getListFilterData } from '../../../utils/request'
import { filterClassifyResultClassTree, filterClassifyResultJoblistType, filterClassifyResultStaffTree } from '../../../utils/request/index.d'
import { filterClassifyDataResultReduce } from '../../../reducers/filter_classify'
import { setFilter } from '../../../actions/filter_classify'
import { UserListChooseCity } from '../../../config/store'
import AREAS, { ChildItems } from '../../../models/area'
import classnames from 'classnames'
import { AreaPickerKey, ClassifyPickerKey, ResumeFilterPickerKey, MemberPickerKey } from '../../../config/pages/lists'
import { useDispatch, useSelector } from '@tarojs/redux'
import './index.scss'

interface ConditionData {
  id: string,
  text: string
}
interface ConditionProps {
  data: ConditionData[],
  setSearchData: (type: string, id: string, text: string) => void
}

function ResumeCondition({ data, setSearchData }: ConditionProps) {

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
  // * 当前城市选择子级索引
  const [areaChildId, setAreaChildId] = useState<string>('')
  // * 当前工种选择子级索引
  const [classifyChildId, setclassifyChildId] = useState<string>('')
  // * 当前筛选数据索引
  const [filterIndex, setFilterIndex] = useState<number>(0)
  // * 当前展开的城市子集数据
  const [childAreaList, setChildAreaList] = useState<ChildItems[]>(AREAS[areaIndex].children)
  // * 当前人员设置的索引
  const [memberIndex, setMemberIndex] = useState<number>(0)
  // * 工种数据
  const [classify, setClassify] = useState<filterClassifyResultClassTree[]>([])
  // * 数据筛选条件 推荐 最新
  const [resumeType, setResumeType] = useState<filterClassifyResultJoblistType[]>([])
  // * 数据筛选条件 推荐 最新
  const [memberType, setMemberType] = useState<filterClassifyResultStaffTree[]>([])
  // * 城市切换后子集列表回到顶部
  const [areaScrollTop, setAreaScrollTop] = useState<number>(0)
  // * 工种切换后子集列表回到顶部
  const [classifyScrollTop, setClassifyScrollTop] = useState<number>(0)

  // * 点击选项展开内容
  const conditionItemClick = (id: string) => {
    setCurrent(id)
  }

  // * 关闭抽屉
  const closeDrawer = () => {
    setCurrent('')
  }

  // * 城市索引更换
  const changeAreaIndex = (i: number) => {
    setAreaIndex(i)
    setAreaScrollTop(0)
    if (!AREAS[i].has_children) {
      setSearchData(AreaPickerKey, AREAS[i].id.toString(), AREAS[i].name)
      Taro.setStorageSync(UserListChooseCity, AREAS[i])
      closeDrawer()
    }
  }

  // 初始化城市父级索引
  useEffect(() => {
    let userListChooseCity: ChildItems = Taro.getStorageSync(UserListChooseCity)
    if (userListChooseCity) {
      let id: string = userListChooseCity.id
      setAreaChildId(id)
      // pid == 1 代表省份 和直辖市
      let pid: string = userListChooseCity.pid === '1' ? userListChooseCity.id : userListChooseCity.pid
      let i: number = AREAS.findIndex(item => item.id === pid)
      // pid == 0 代表全国
      i = pid === '0' ? 0 : i
      setAreaIndex(i)
    }
  }, [])

  // 选择子集地区
  const sureAreaCurrent = (i: number) => {
    let id: string = AREAS[areaIndex].children[i].id
    setAreaChildId(id)
    setSearchData(AreaPickerKey, id, AREAS[areaIndex].children[i].name)
    Taro.setStorageSync(UserListChooseCity, AREAS[areaIndex].children[i])
    closeDrawer()
  }

  // 选择子集工种
  const sureClassifyCurrent = (i: number) => {
    let id: string = classify[classifyIndex].children[i].id.toString()
    setclassifyChildId(id)
    let text: string = i ? classify[classifyIndex].children[i].name : classify[classifyIndex].name
    setSearchData(ClassifyPickerKey, id, text)
    closeDrawer()
  }

  // 选择最新、推荐过滤条件
  const sureFilterCurrent = (i: number) => {
    setFilterIndex(i)
    let id: string = resumeType[i].type
    setSearchData(ResumeFilterPickerKey, id, resumeType[i].name)
    closeDrawer()
  }

  // 选择人员构成
  const sureMemberCurrent = (i: number) => {
    setMemberIndex(i)
    let id: string = memberType[i].id.toString()
    setSearchData(MemberPickerKey, id, memberType[i].name)
    closeDrawer()
  }  

  // * 工种索引更换
  const changeClassifyIndex = (i: number) => {
    setclassifyIndex(i)
    setClassifyScrollTop(0)
    if (!classify[i].has_children) {
      setSearchData(ClassifyPickerKey, classify[i].id.toString(), classify[i].name)
      closeDrawer()
    }
  }

  // 获取筛选条件数据
  useEffect(() => {
    if (filterData.isSet) {
      if (seted) return
      setSeted(true)
      setClassify(filterData.classTree)
      setResumeType(filterData.resumeListType)
      setMemberType(filterData.staffTree)
    } else {
      getListFilterData().then(res => {
        dispatch(setFilter({ ...res.data, isSet: true }))
        setSeted(true)
        setClassify(res.data.classTree)
        setResumeType(res.data.resumeListType)
        setMemberType(filterData.staffTree)
      })
    }
  }, [])

  // * 获取城市子集数据
  useEffect(() => {
    setChildAreaList(AREAS[areaIndex].children)
  }, [areaIndex])

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
        onClose={() => closeDrawer()}
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
            >
              {childAreaList.map((item, i) => (
                <View className={classnames({
                  'drawer-list-item overwords': true,
                  'drawer-list-item-active': item.id === areaChildId
                })} onClick={() => sureAreaCurrent(i)}>{item.name}</View>
              ))}
            </ScrollView>
          }
        </View>
      </AtDrawer>
      {/* 工种选择器 */}
      <AtDrawer
        show={current === ClassifyPickerKey}
        mask
        width='80%'
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
          {classify.length && classify[classifyIndex].has_children &&
            <ScrollView
              className='drawer-full-lists drawer-half-lists'
              scrollY
              scrollTop={classifyScrollTop}
            >
              {classify[classifyIndex].children.map((item, i) => (
                <View className={classnames({
                  'drawer-list-item overwords': true,
                  'drawer-list-item-active': item.id.toString() === classifyChildId
                })} onClick={() => sureClassifyCurrent(i)}>{item.name}</View>
              ))}
            </ScrollView>
          }
        </View>
      </AtDrawer>
      {/* 人员选择器 */}
      <AtDrawer
        show={current === MemberPickerKey}
        mask
        onClose={() => closeDrawer()}
      >
        <View className='common-drawer-item'>
          <ScrollView className='drawer-full-lists' scrollY>
            {memberType.map((item, index) => (
              <View
                key={item.id}
                onClick={() => sureMemberCurrent(index)}
                className={classnames({
                  'drawer-list-item overwords': true,
                  'drawer-list-item-active': index === memberIndex
                })}
              >{item.name}</View>
            ))}
          </ScrollView>
        </View>
      </AtDrawer>

      {/* 条件选择器 */}
      <AtDrawer
        show={current === ResumeFilterPickerKey}
        mask
        onClose={() => closeDrawer()}
      >
        <View className='common-drawer-item'>
          <ScrollView className='drawer-full-lists' scrollY>
            {resumeType.map((item, index) => (
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

export default memo(ResumeCondition)