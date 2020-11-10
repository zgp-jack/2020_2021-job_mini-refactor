import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import CollectionRecruitList from '../collectionRecruitList';
import { getCollectionRecruitListData, recruitListCancelCollectionAction } from '../../../utils/request'
import {  CollectionRecruitListDataList } from '../../../utils/request/index.d'
import { useSelector } from '@tarojs/redux'
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
  initPage:number,
}
interface PageType {
  page :number,
}
export default function RecruitList({ bottom, initPage}: PROPS) {
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
  // 获取用户是否登录
  const login = useSelector<any, boolean>(state => state.User['login'])
  // 判断是否登陆
  useEffect(() => {
    if (!login) return
    getCollectionRecruitListDataAction();
  }, [login, initRecPage])
  // * 请求数据
  const getCollectionRecruitListDataAction =  ()=>{
    getCollectionRecruitListData(initRecPage.page).then(res => {
      Taro.hideNavigationBarLoading()
      Taro.stopPullDownRefresh();
      if (!res.list.length) {
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
  }
  // * 上拉刷新
  useEffect(() => {
    if(!bottom) return
    if (recruitNoMoreData ) return
    setinitRecPage({ ...initRecPage,page:initRecPage.page + 1})
  },[bottom])
  // 下拉
  useEffect(() => {
    if (initPage === 0) return
    setRecruitNoMoreData(false);
    setinitRecPage({page:1})
  }, [initPage])

  // * 招工取消收藏
  const recruitListHandler = (id: string) => {
    recruitListCancelCollectionAction(id).then(res => {
      if (res.errcode === 'ok') {
        setinitRecPage({page:1})
      }
    })
  }
  return (
    <View className='recruit-container'>
        <View className='recruit-lists-containerbox'>
        <CollectionRecruitList  data={lists} onHandlerClick={recruitListHandler} recruitNoMoreData={recruitNoMoreData}/>
        </View>
    </View>
  )
}