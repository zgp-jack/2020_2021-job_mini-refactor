import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, ScrollView, Block } from '@tarojs/components'
import Search from '../../components/search'
import Condition from '../../components/condition'
import WechatNotice from '../../components/wechat'
import UsedList from '../../components/lists/used'
import { getFleamarketList } from '../../utils/request'
import { FleamarketList } from '../../utils/request/index.d'
import Tabbar from '../../components/tabbar'
import './index.scss'

export interface SearchType {
  keywords: string,
  page: number,
  list_type: string,
  area_id: string,
  classify_id: string,
  attribute_id: string
}

export default function Fleamarket() {

  // * 配置筛选条件
  const DEFAULT_CONDITION = [
    { id: 'area', text: '全国' },
    { id: 'classify', text: '选择分类' }
  ]
  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // * 定义列表数组
  const [lists, setLists] = useState<FleamarketList[][]>([])
  // * 定义data
  const [searchData, setSearchData] = useState<SearchType>({
    page: 1,
    list_type: 'fleamarket',
    area_id: '',
    classify_id: '',
    attribute_id: '',
    keywords: ''
  })

  // * 请求列表数据
  useEffect(() => {
    getFleamarketList(searchData).then(res => {
      Taro.hideNavigationBarLoading()
      if (searchData.page === 1) setLists([[...res]])
      else setLists([...lists, [...res]])
      if (refresh) setRefresh(false)
    })
  }, [searchData])

  // * 触底加载下一页
  const getNextPageData = () => {
    Taro.showNavigationBarLoading()
    setSearchData({ ...searchData, page: searchData.page + 1 })
  }

  // * 监听下拉刷新
  const pullDownAction = () => {
    setRefresh(true)
    setSearchData({ ...searchData, page: 1 })
  }

  return (
    <Block>
      <View className='recruit-container'>
        <View className='recruit-fiexd-header'>
          <Search placeholder='跳蚤市场' value='' />
          <Condition data={DEFAULT_CONDITION} />
        </View>
        <ScrollView
          className='recruit-lists-containerbox'
          scrollY
          refresherEnabled
          refresherTriggered={refresh}
          onRefresherRefresh={() => pullDownAction()}
          lowerThreshold={200}
          onScrollToLower={() => getNextPageData()}
        >
          <View style={{ height: '8px' }}></View>
          <WechatNotice />
          <UsedList data={ lists } />
        </ScrollView>
      </View>
      <Tabbar />
    </Block>
  )
}

Fleamarket.config = {
  navigationBarTitleText: '二手交易列表',
  enablePullDownRefresh: false,
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
}