import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import Search from '../../../components/search'
import ResumeCondition from '../../../components/recruitCondition/'
import WechatNotice from '../../../components/wechat'
import ResumeList from '../../../components/lists/resume'
import { SearchType } from '../index.d'
import { ResumeList as ResumeListType } from '../../../utils/request/index.d'
import { getResumeList } from '../../../utils/request'
import './index.scss'

export default function Recruit() {

  // * 筛选数据
  const DEFAULT_CONDITION = [
    { id: 'area', text: '全国' },
    { id: 'work', text: '选择工种' },
    { id: 'type', text: '队伍' },
    { id: 'filter', text: '推荐' }
  ]
  // * 搜索数据 备份 
  const [remark, setRemark] = useState<string>('')
  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // * 定义列表数组
  const [lists, setLists] = useState<ResumeListType[][]>([])
  // * 定义data
  const [searchData, setSearchData] = useState<SearchType>({
    page: 1,
    occupations: '',
    province: '',
    keywords: '',
    sort: 'newest',
    location: ''
  })

  // * 请求列表数据
  useEffect(() => {
    getResumeList(searchData).then(res => {
      Taro.hideNavigationBarLoading()
      if (searchData.page === 1) setLists([[...res.errmsg]])
      else setLists([...lists, [...res.errmsg]])
      if (refresh) setRefresh(false)
    })
  }, [searchData])

  // * 监听下拉刷新
  // * 监听下拉刷新
  const pullDownAction = () => {
    setRefresh(true)
    setSearchData({ ...searchData, page: 1 })
  }

  // * 触底加载下一页
  const getNextPageData = () => {
    setSearchData({ ...searchData, page: searchData.page + 1 })
  }
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  return (
    <View className='recruit-container'>
      <View className='recruit-fiexd-header'>
        <Search placeholder='找工人，找队伍，找班组' value='' setRemark={(val: string) => setRemark(val)} setSearchData={()=>{}} />
        <ResumeCondition data={DEFAULT_CONDITION} setSearchData={()=>{}} />
      </View>
      <ScrollView 
        className='recruit-lists-containerbox'
        scrollY
        lowerThreshold={200} 
        refresherEnabled
        refresherTriggered={refresh}
        onRefresherRefresh={() => pullDownAction()}
        onScrollToLower={() => getNextPageData()}
      >
        <View style={{ height: '8px' }}></View>
        <WechatNotice />
        <ResumeList data={ lists } />
      </ScrollView>
      <View className='publish-list-btn' onClick={() => userRouteJump(`/pages/resume/newJobs/index`)}>发布找活</View>
    </View>
  )
}