import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, ScrollView, Block } from '@tarojs/components'
import Search from '../../../components/search'
import UsedCondition from '../../../components/condition/used'
import WechatNotice from '../../../components/wechat'
import UsedList from '../../../components/lists/used'
import { getFleamarketList } from '../../../utils/request'
import { FleamarketList } from '../../../utils/request/index.d'
import Tabbar from '../../../components/tabbar'
import { UserListChooseCity } from '../../../config/store'
import { ChildItems } from '../../../models/area'
import './index.scss'
import { conditionType } from '../../recruit/lists';

export interface SearchType {
  keywords: string,
  page: number,
  list_type: string,
  area_id: string,
  classify_id: string,
  attribute_id: string
}

export default function Fleamarket() {
  // 是否已是最后一页
  const [isend, setIsend] = useState<boolean>(false)

  // * 获取地区选择默认数据
  let userListChooseCity: ChildItems = Taro.getStorageSync(UserListChooseCity)

  // * 配置筛选条件
  const DEFAULT_CONDITION = [
    { id: 'area', text: userListChooseCity.name },
    { id: 'classify', text: '选择分类' }
  ]

  // * 配置筛选条件
  const [screeningCondition, setScreeningCondition] = useState<conditionType[]>(DEFAULT_CONDITION)

  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // * 定义列表数组
  const [lists, setLists] = useState<FleamarketList[][]>([])
  // * 定义data
  const [searchData, setSearchData] = useState<SearchType>({
    page: 1,
    list_type: 'fleamarket',
    area_id: userListChooseCity.id,
    classify_id: '',
    attribute_id: '',
    keywords: ''
  })

  const [inputValue, setInputValue] = useState<string>('')

  // * 请求列表数据
  useEffect(() => {
    if (isend) return
    getFleamarketList(searchData).then(res => {
      Taro.hideNavigationBarLoading()
      if (!res.length) setIsend(true)
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

  // * 监听地区选择/工种选
  const searchChange = (key: string, id: string, name: string, noRender?: boolean) => {
    setIsend(false);
    let [areaSearchData, classifySearchData] = screeningCondition;
    let _searchData = { ...searchData }
    let _screeningCondition = [{ ...areaSearchData }, { ...classifySearchData }]
    switch (key) {
      case 'area':
        _searchData.area_id = id;
        _screeningCondition[0].text = name;
        break;
      case 'classify':
        _searchData.classify_id = id;
        _screeningCondition[1].text = name;
        _searchData.attribute_id = '';
        break;
      case 'filter':
        _searchData.attribute_id = id;
        _screeningCondition[1].text = name;
        break;
    }
    if (noRender) {
      return false
    }
    _searchData.page = 1;
    setScreeningCondition([..._screeningCondition])
    setSearchData({ ..._searchData })
  }

  // * 监听搜索
  const inputSearch = (value) => {
    setInputValue(value)
  }

  const setSearchDatas = (key: string, value: string | number) => {
    setIsend(false);
    searchData[key] = value;
    setSearchData({ ...searchData })
  }

  return (
    <Block>
      <View className='recruit-container'>
        <View className='recruit-fiexd-header'>
          <Search placeholder='跳蚤市场' value='' setRemark={(value) => inputSearch(value)} setSearchData={() => setSearchDatas('keywords', inputValue)} />
          <UsedCondition data={screeningCondition} setSearchData={searchChange} />
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
          <UsedList data={lists} />
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