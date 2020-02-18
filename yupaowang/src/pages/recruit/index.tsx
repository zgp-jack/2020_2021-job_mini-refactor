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

export default function Recruit(){

  // * 配置筛选条件
  const DEFAULT_CONDITION = [
    { id: 'area', text: '全国' },
    { id: 'work', text: '选择工种' },
    { id: 'filter', text: '最新' }
  ]

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

  useEffect(()=>{
    getRecruitList(searchData).then(res=>{
      setLists([...lists, [...res]])
    })
  }, [searchData])

  return (
    <View className='recruit-container'>
      <View className='recruit-fiexd-header'>
        <Search placeholder='找活、找工作' value='' />
        <Condition data={ DEFAULT_CONDITION }  />
      </View>
      <ScrollView className='recruit-lists-container'>
        <WechatNotice />
        <RecruitList data={lists} />
      </ScrollView>
    </View>
  )
}