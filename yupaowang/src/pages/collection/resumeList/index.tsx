import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import CollectionResumeList from '../collectionResumeList';
import {  getCollectionResumeListData, ResumeCancelCollectionAction } from '../../../utils/request'
import { CollectionResumeListDataList } from '../../../utils/request/index.d'
import './index.scss'

// 定义找活
export interface AllLists {
  resume: CollectionResumeListDataList[],
}
interface PROPS {
  bottom: number,
  initPage: number,
}
interface PageType{
  page:number
}
export default function ResumeList({ bottom, initPage}: PROPS) {
  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // * 定义找活列表数组
  const [resLists, setResLists] = useState<CollectionResumeListDataList[]>([])
  // 找活初始页数
  const [initResPage, setinitResPage] = useState<PageType>({
    page:1
  })
  // 没有更多数据
  const [recruitNoMoreData, setRecruitNoMoreData] = useState<boolean>(false)

  // 请求数据
  useEffect(() =>{
    getCollectionResumeListData(initResPage.page).then(res => {
      Taro.hideNavigationBarLoading()
      Taro.stopPullDownRefresh();
      if (!res.data.length) {
        setRecruitNoMoreData(true)
      }
      if (initResPage.page === 1){
        setResLists([...res.data])
      }else{
        setResLists([...resLists, ...res.data]);
      }
      if (refresh) setRefresh(false)
    })
  },[initResPage])

  // 上拉加载更多
  useEffect(() => {
    if (!bottom) return
    if (recruitNoMoreData) return
    setinitResPage({...initResPage,page:initResPage.page + 1})
  }, [bottom])

  // 下拉
  useEffect(() => {
    if (!initPage) return
    setRecruitNoMoreData(false);
    setinitResPage({ page: initPage })
  }, [initPage])

  // 找活取消收藏
  const resumeListHandler = (id: string) => {
    ResumeCancelCollectionAction(id).then(res => {
      if (res.errcode === 'ok') {
        setinitResPage({page:1})
      }
    })
  }
  
  return (
    <View className='recruit-container'>
      <View className='recruit-lists-containerbox'>
        <CollectionResumeList data={resLists} onHandlerClick={resumeListHandler} recruitNoMoreData={recruitNoMoreData}/>
      </View>
    </View>
  )
}
