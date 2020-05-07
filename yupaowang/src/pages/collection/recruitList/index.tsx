import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import CollectionRecruitList from '../collectionRecruitList';
import { getCollectionRecruitListData, recruitListCancelCollectionAction } from '../../../utils/request'
import {  CollectionRecruitListDataList } from '../../../utils/request/index.d'
import './index.scss'

// 定义招工
export interface Recruit {
  item: CollectionRecruitListDataList[]
}
// 定义招工页数
export interface initRecPageType {
  page: number
}
interface PROPS {
  bottom:number,
}
interface PageType {
  page :number,
}
export default function RecruitList({ bottom }: PROPS) {
  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // * 定义招工列表数组
  const [lists, setLists] = useState<CollectionRecruitListDataList[]>([])
  // 招工初始页数
  const [initRecPage, setinitRecPage] = useState<PageType>({
    page:1,
  })
  // 没有更多数据
  const [recruitNoMoreData, setRecruitNoMoreData] = useState<boolean>(false)
  // 是否加载更多
  const [more,setMore] = useState<boolean>(false)
  
  // * 请求数据
  useEffect(() => {
    getCollectionRecruitListData(initRecPage.page).then(res => {
      Taro.hideNavigationBarLoading()
      if ((res.list.length < res.pageSize) && res.list.length) {
        setRecruitNoMoreData(true)
      }
      if (initRecPage.page === 1) {
        setLists([...res.list])
      } else {
        setLists([...lists, ...res.list])
      }
      if (refresh) setRefresh(false)
      if (more) setMore(false)
    })
  }, [initRecPage])

  // * 上拉刷新
  useEffect(() => {
    if(!bottom) return
    if (recruitNoMoreData ) return
    setinitRecPage({ ...initRecPage,page:initRecPage.page + 1})
  },[bottom])

  // * 招工取消收藏
  const recruitListHandler = (id: string) => {
    recruitListCancelCollectionAction(id).then(res => {
      if (res.errcode === 'ok') {
        setinitRecPage({page:1})
      }
    })
  }
  // * 监听下拉刷新
  const pullDownAction = () => {
    setRefresh(true)
    setRecruitNoMoreData(false)
    setinitRecPage({ page: 1 })
  }
  // * 触底加载下一页
  const getNextPageData = () => {
    if (recruitNoMoreData) return 
    Taro.showNavigationBarLoading()
    setinitRecPage({ ...initRecPage, page: initRecPage.page + 1 })
  }

  return (
    <View className='recruit-container'>
      <ScrollView
        className='recruit-lists-containerbox'
        scrollY
        refresherEnabled
        refresherTriggered={refresh}
        onRefresherRefresh={() => pullDownAction()}
        lowerThreshold={200}
        onScrollToLower={() => getNextPageData()}
      >
        <CollectionRecruitList  data={lists} onHandlerClick={recruitListHandler} recruitNoMoreData={recruitNoMoreData}/>
      </ScrollView>
    </View>
  )
}