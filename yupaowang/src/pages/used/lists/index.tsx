import Taro, { useEffect, useState, useDidShow, useRouter } from '@tarojs/taro'
import { View, ScrollView, Block } from '@tarojs/components'
import Search from '../../../components/search'
import UsedCondition from '../../../components/condition/used'
import WechatNotice from '../../../components/wechat'
import UsedList from '../../../components/lists/used'
import { getFleamarketList } from '../../../utils/request'
import { FleamarketList } from '../../../utils/request/index.d'
import Tabbar from '../../../components/tabbar'
import { SERIES, BAIDUSERIES } from '../../../config'
import { UserListChooseCity } from '../../../config/store'
import { ChildItems } from '../../../models/area'
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

  const router = useRouter()
  
  // 是否已是最后一页
  const [hasMore, setHasMore] = useState<boolean>(true)

  // * 获取地区选择默认数据
  let userListChooseCity: ChildItems = Taro.getStorageSync(UserListChooseCity)

  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // * 定义列表数组
  const [lists, setLists] = useState<FleamarketList[][]>([])
  // * 定义data
  const [searchData, setSearchData] = useState<SearchType>({
    page: 1,
    list_type: 'fleamarket',
    area_id: userListChooseCity.id,
    classify_id: '0',
    attribute_id: '',
    keywords: ''
  })

  useDidShow(()=>{
    if(SERIES == BAIDUSERIES){
      Taro.setPageInfo({
        title: '工地二手交易_工程机械二手买卖_工程设备废料回收_建筑资质租用转让—鱼泡网',
        description: '建筑工地二手交易板块，为建筑工程工人、老板、公司提供二手工程机械、工程设备、建筑材料废料、二手电动工具、建筑资质租用转让的信息。方便卖家能很快的找到合适买家，让买家能收到合适的工程二手材料。',
        keywords: '工地二手交易,工程机械二手买卖,工程设备废料回收,建筑资质租用转让'
      })
      // const filterData = useSelector<any, filterClassifyDataResultReduce>(
      //   state => state.filterClassify
      // );
      //getUsedListSeoInfo(router.params, filterData)
    }
  })

  const [inputValue, setInputValue] = useState<string>('')

  let [listScrollTop, setListScrollTop] = useState<number>(0)

  // * 请求列表数据
  useEffect(() => {
    getFleamarketList(searchData).then(res => {
      Taro.hideNavigationBarLoading()
      if (!res.length) setHasMore(false)
      if (searchData.page === 1) {
        setHasMore(true)
        goToScrollTop()
        setLists([[...res]])
      }
      else setLists([...lists, [...res]])
      if (refresh) setRefresh(false)
    })
  }, [searchData])

  // * 触底加载下一页
  const getNextPageData = () => {
    if (!hasMore) return
    Taro.showNavigationBarLoading()
    setSearchData({ ...searchData, page: searchData.page + 1 })
  }

  // * 监听下拉刷新
  const pullDownAction = () => {
    setRefresh(true)
    setSearchData({ ...searchData, page: 1 })
  }

  // * 监听地区选择/分类选
  const searchChange = (data) => {
    setSearchData({ ...searchData,...data, page: 1 })
  }

  // * 监听搜索
  const inputSearch = (value) => {
    setInputValue(value)
  }

  const setSearchDatas = (key: string, value: string) => {
    searchData[key] = value;
    setSearchData({ ...searchData, page: 1 })
  }

   // scroll-view 回到顶部
  const goToScrollTop = () => {
    setListScrollTop(listScrollTop ? 0 : 0.1)
  }

  return (
    <Block>
      <View className='recruit-container'>
        <View className='recruit-fiexd-header'>
          <Search placeholder='跳蚤市场' value='' setRemark={(value) => inputSearch(value)} setSearchData={() => setSearchDatas('keywords', inputValue)} />
          <UsedCondition setSearchData={searchChange} />
        </View>
        <ScrollView
          className='recruit-lists-containerbox'
          scrollY
          refresherEnabled
          refresherTriggered={refresh}
          onRefresherRefresh={() => pullDownAction()}
          lowerThreshold={200}
          onScrollToLower={() => getNextPageData()}
          scrollTop={listScrollTop}
        >
          {/* <View style={{ height: '8px' }}></View> */}
          <WechatNotice />
          <UsedList data={lists} hasMore={hasMore}/>
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