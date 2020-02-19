import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import Search from '../../components/search'
import Condition from '../../components/condition'
import WechatNotice from '../../components/wechat'
import RecruitList from '../../components/lists/recruit'
import { getRecruitList } from '../../utils/request'
import { SearchType } from './index.d'
import { RecruitList as RecruitListType } from '../../utils/request/index.d'
import './index.scss'

interface PROPS {
   pulldown: number
}

export default function Recruit({ pulldown }: PROPS){

  // * 配置筛选条件
  const DEFAULT_CONDITION = [
    { id: 'area', text: '全国' },
    { id: 'work', text: '选择工种' },
    { id: 'filter', text: '最新' }
  ]
  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // * 定义列表数组
  const [lists, setLists] = useState<RecruitListType[][]>([])
  // * 定义data
  const [searchData, setSearchData] = useState<SearchType>({
    page: 1,
    list_type: 'job',
    area_id: '',
    classify_id: '',
    keywords: '',
    joblisttype: 'newest',
    token: ''
  })

  // * 请求列表数据
  useEffect(()=>{
    getRecruitList(searchData).then(res=>{
      setLists([...lists, [...res]])
      if(refresh){
        Taro.hideNavigationBarLoading()
        Taro.stopPullDownRefresh()
        setRefresh(false)
      }
    })
  }, [searchData])

  // * 监听下拉刷新
  useEffect(() => {
    if(!pulldown) return
    setSearchData({...searchData, page: 1})
    setRefresh(true)
    Taro.showNavigationBarLoading()
  }, [pulldown])

  // * 触底加载下一页
  const getNextPageData = ()=> {
    setSearchData({...searchData, page: searchData.page + 1})
  }

  return (
    <View className='recruit-container'>
      <View className='recruit-fiexd-header'>
        <Search placeholder='找活、找工作' value='' />
        <Condition data={ DEFAULT_CONDITION }  />
      </View>
      <ScrollView 
        className='recruit-lists-container' 
        scrollY
        lowerThreshold={200} 
        onScrollToLower={()=>getNextPageData()}
      >
        <View style={{height: '8px'}}></View>
        <WechatNotice />
        <RecruitList data={lists} />
      </ScrollView>
    </View>
  )
}