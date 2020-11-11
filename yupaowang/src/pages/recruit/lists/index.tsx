import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import Search from '../../../components/search'
import RecruitCondition from '../../../components/condition/recruit'
import WechatNotice from '../../../components/wechat'
import RecruitList from '../../../components/lists/recruit'
import { getRecruitList } from '../../../utils/request'
import { SearchType } from '../index.d'
import { RecruitListItem } from '../../../utils/request/index.d'
import { UserLocationPromiss, ChildItems, AREACHINA, getCityInfo } from '../../../models/area'
import { UserListChooseCity, UserLocationCity } from '../../../config/store'
import { userAuthLoction } from '../../../utils/helper'
import { PUBLISHRECRUIT } from '../../../config'
import { AreaPickerKey, ClassifyPickerKey, FilterPickerKey } from '../../../config/pages/lists'
import './index.scss'

export interface conditionType {
  id: string,
  text: string
}

export default function Recruit(){

  // 输入关键词 没搜索 备份
  const [remark, setRemark] = useState<string>('')
  // 是否还有下一页
  const [hasMore, setHasMore] = useState<boolean>(true)
  // * 获取选择城市缓存
  let userListChooseCity: ChildItems = Taro.getStorageSync(UserListChooseCity)
  // * 配置筛选条件
  const [condition, setCondition] = useState<conditionType[]>([
    { id: AreaPickerKey, text: userListChooseCity ? userListChooseCity.name : '全国' },
    { id: ClassifyPickerKey, text: '全部分类' },
    { id: FilterPickerKey, text: '全部' }
  ])
  // * scrollTop 位置 回到顶部
  const [scrollTop,setScrollTop] = useState<number>(0)
  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // * 定义列表数组
  const [lists, setLists] = useState<RecruitListItem[][]>([])
  // * 定义data
  const [searchData, setSearchData] = useState<SearchType>({
    page: 1,
    list_type: 'job',
    area_id: userListChooseCity ? userListChooseCity.id : '',
    classify_id: '',
    keywords: '',
    joblisttype: 'newest',
    token: ''
  })

  // 更改某一项操作条件
  const editConditionAction = (type: string, text: string)=> {
    const data = JSON.parse(JSON.stringify(condition))
    let i = data.findIndex(item => item.id === type)
    let item = { ...data[i], text: text}
    data[i] = item
    setCondition(data)
  }

  // 用户定位之后重新设置搜索条件
  const resetLocationSearch = (data: UserLocationPromiss)=> {
    const city: ChildItems = getCityInfo(data)
    Taro.setStorageSync(UserListChooseCity, city) //第一次默认选中
    setLists([])
    editConditionAction('area',city.name)
    setSearchData({ ...searchData, page: 1, area_id: city.id })
  }

  // 用户获取定位
  const getUserLocation = () => {
    // 使用用户选择的城市
    if (userListChooseCity) {
      setSearchData({ ...searchData, page: 1, area_id: userListChooseCity.id })
    } else {
      let userLocationCity: UserLocationPromiss = Taro.getStorageSync(UserLocationCity)
      if (userLocationCity){
        resetLocationSearch(userLocationCity)
        return
      }
      userAuthLoction().then(gpsLocation=>{
        resetLocationSearch(gpsLocation)
      }).catch(()=>{
        // 拒绝授权默认全国
        Taro.setStorageSync(UserListChooseCity, AREACHINA)
        setLists([])
        setSearchData({ ...searchData, page: 1, area_id: AREACHINA.id })
      })
    }
  }

  // 请求列表方法
  const getRecruitListAction = ()=> {
    getRecruitList(searchData).then(res => {
      if(res.data){
        if (!res.data.length) setHasMore(false)
        Taro.hideNavigationBarLoading()
        if (searchData.page === 1) setLists([[...res.data]])
        else setLists([...lists, [...res.data]])
      }else{
        setHasMore(false)
      }
      if (refresh) setRefresh(false)
    })
  }

  // * 请求列表数据
  useEffect(()=>{
    getRecruitListAction()
    if (!searchData.area_id) getUserLocation()
  }, [searchData])

  // * 触底加载下一页
  const getNextPageData = ()=> {
    if(!hasMore) return
    Taro.showNavigationBarLoading()
    setSearchData({...searchData, page: searchData.page + 1})
  }

  // * 监听下拉刷新
  const pullDownAction = ()=> {
    setRefresh(true) 
    setSearchData({ ...searchData, page: 1 })
  }

  // * 发布招工
  const userPublishRecruit = ()=> {
    Taro.navigateTo({ url: PUBLISHRECRUIT})
  }

  // * 更新筛选条件
  const setSearchDataAction = (type: string, id: string, text: string) => {
    const recondition = JSON.parse(JSON.stringify(condition))
    let i: number = recondition.findIndex((item: conditionType) => item.id === type)
    recondition[i].text = text
    setCondition(recondition)
    if(type === ClassifyPickerKey){
      setSearchData({ ...searchData, classify_id: id, page: 1})
    }else if(type === AreaPickerKey){
      setSearchData({ ...searchData, area_id: id, page: 1})
    }else{
      setSearchData({ ...searchData, joblisttype: id, page: 1 })
    }
    goToScrollTop()
  }

  // scroll-view 回到顶部
  const goToScrollTop = () => {
    setHasMore(true)
    setScrollTop(scrollTop ? 0 : 0.1)
  }

  // 输入搜索关键词
  const setSearchValData = () => {
    setSearchData({ ...searchData, keywords: remark, page: 1 })
    goToScrollTop()
  }

  return (
    <View className='recruit-container'>
      <View className='recruit-fiexd-header'>
        <Search placeholder='找活、找工作' value='' setRemark={(val: string) => setRemark(val)} setSearchData={()=>setSearchValData()} />
        <RecruitCondition data={condition} setSearchData={(type, id, text) => setSearchDataAction(type, id, text)} />
      </View>
      <ScrollView 
        className='recruit-lists-containerbox' 
        scrollY
        refresherEnabled
        scrollTop={scrollTop}
        scrollWithAnimation
        refresherTriggered={ refresh }
        onRefresherRefresh={() => pullDownAction()}
        lowerThreshold={200} 
        onScrollToLower={()=>getNextPageData()}
      >
        <View style={{height: '8px'}}></View>
        <WechatNotice />
        <RecruitList data={lists} hasMore={hasMore} />
      </ScrollView>
      <View className='publish-list-btn' onClick={() => userPublishRecruit()}>发布招工</View>
    </View>
  )
}