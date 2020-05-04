import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, ScrollView, Button } from '@tarojs/components'
import CollectionRecruitList from "../collectionRecruitList";
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
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
export default function RecruitList() {
  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // * 定义招工列表数组
  const [lists, setLists] = useState<Recruit>({
    item: []
  })
  // 招工初始页数
  const [initRecPage, setinitRecPage] = useState<initRecPageType>({
    page: 1
  })
  // 弹窗内容
  const [modalContent, setModalContent ] = useState<string>("") 
  // 定义弹窗
  const [isOpened, setIsOpened] = useState<boolean>(false)
  // 没有更多数据
  const [recruitNoMoreData, setRecruitNoMoreData] = useState<boolean>(false)
  // 请求数据
  useEffect(() => {
    getCollectionRecruitListData(initRecPage.page).then(res => {
      Taro.hideNavigationBarLoading()
      if ((res.list.length < res.pageSize) && res.list.length) {
        setRecruitNoMoreData(true)
      }
      setLists({ item: [...res.list] })
      if (initRecPage.page === 1) {
        setLists({ item: [...res.list] })
      } else {
        setLists({ item: [...lists.item, ...res.list] })
      }
      if (refresh) setRefresh(false)
    })
  }, [initRecPage])
  // 招工取消收藏
  const recruitListHandler = (id: string) => {
    recruitListCancelCollectionAction(id).then(res => {
      if (res.errcode === "ok") {
        setinitRecPage({ ...initRecPage, page: 1 })
      }
    })
  }
  const handleModal = (type:string) => {
    // 1 审核中 2 通过 0 失败
    if (type == "2" ){

    } else if (type == "0" ){
      setIsOpened(true)
      setModalContent("该信息未通过人工审核，审核通过后，即可查看")
    } else if (type == "1" ){
      setIsOpened(true)
      setModalContent("该信息正在人工审核中，请稍后再试")
    }
  }
  // * 监听下拉刷新
  const pullDownAction = () => {
    setRefresh(true)
    setinitRecPage({ ...initRecPage, page: 1 })
    }
  // * 触底加载下一页
  const getNextPageData = () => {
    if (recruitNoMoreData) return false
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
        {/* 招工 */}
        <View style={{ height: '8px' }}></View>
        <CollectionRecruitList data={lists.item} onHandlerClick={recruitListHandler} onHandleClick={handleModal} recruitNoMoreData={recruitNoMoreData}/>
      </ScrollView>
      <AtModal isOpened={isOpened}>
        <AtModalHeader>温馨提示</AtModalHeader>
        <AtModalContent>
          {modalContent}
        </AtModalContent>
        <AtModalAction>
          <Button onClick={() => { setIsOpened(false) }}>确定</Button>
        </AtModalAction>
      </AtModal>
    </View>
  )
}