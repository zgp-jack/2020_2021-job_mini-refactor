import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, ScrollView, Button, Text, Image  } from '@tarojs/components'
import CollectionResumeList from "../collectionResumeList";
import {  getCollectionResumeListData, ResumeCancelCollectionAction } from '../../../utils/request'
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui"
import { CollectionResumeListDataList } from '../../../utils/request/index.d'
import { IMGCDNURL } from '../../../config'
import classnames from 'classnames'
import './index.scss'

// 定义找活
export interface AllLists {
  resume: CollectionResumeListDataList[],
}
// 定义找活页数
export interface initResPageType {
  page: number
}
interface PROPS {
  onClick:Function,
}
export default function ResumeList({ onClick }: PROPS) {
  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // * 定义找活列表数组
  const [resLists, setResLists] = useState<AllLists>({
    resume: [],
  })
  // 定义弹窗
  const [isOpened, setIsOpened] = useState<boolean>(false)
  // 找活初始页数
  const [initResPage, setinitResPage] = useState<initResPageType>({
    page: 1
  })
  // 没有更多数据
  const [recruitNoMoreData, setRecruitNoMoreData] = useState<boolean>(false)
  // 弹窗内容
  const [modalContent, setModalContent] = useState<string>("") 
  // 设置默认tab
  const tab = [
    {
      id: 1, text: '招工信息', icon: `${IMGCDNURL}new-collect-info.png`
    },
    {
      id: 2, text: '找活信息', icon: `${IMGCDNURL}new-collect-resume-active.png`
    },
  ]

  // 请求数据
  useEffect(() =>{
    getCollectionResumeListData(initResPage.page).then(res => {
      Taro.hideNavigationBarLoading()
      if(res.data.length < res.pageSize && res.data.length){
        setRecruitNoMoreData(true)
      }
      if (initResPage.page === 1){
        setResLists({ resume: [...res.data] })
      }else{
        setResLists({ resume: [...resLists.resume, ...res.data] });
      }
      if (refresh) setRefresh(false)
    })
  },[initResPage])
  // 找活取消收藏
  const resumeListHandler = (id: string) => {
    ResumeCancelCollectionAction(id).then(res => {
      if (res.errcode === "ok") {
        setinitResPage({ ...initResPage, page: 1 })
      }
    })
  }
  // * 监听下拉刷新
  const pullDownAction = () => {
    setRefresh(true)
      setinitResPage({ ...initResPage, page: 1 })
  }
  // * 触底加载下一页
  const getNextPageData = () => {
    if (recruitNoMoreData) return false
    Taro.showNavigationBarLoading()
      setinitResPage({ ...initResPage, page: initResPage.page + 1 })
  }
  // 弹窗
  const handleModal = (type: string) => {
    // 1 审核中 2 通过 0 失败
    if (type == "2") {
    } else if (type == "0") {
      setIsOpened(true)
      setModalContent("该信息未通过人工审核，审核通过后，即可查看")
    } else if (type == "1") {
      setIsOpened(true)
      setModalContent("该信息正在人工审核中，请稍后再试")
    }
  }
  return (
    <View className='recruit-container'>
      <ScrollView
        className='recruit-lists-containerbox'
        scrollY
        lowerThreshold={200}
        refresherEnabled
        refresherTriggered={refresh}
        onRefresherRefresh={() => pullDownAction()}
        onScrollToLower={() => getNextPageData()}
      >
        <View className='collection-tab'>
          {tab.map(item => (
            <View className='collection-tab-box' key={item.id} onClick={() => { onClick(1)}}>
              <View className='collection-tab-content'>
                <View className='collection-tab-img'>
                  <Image src={item.icon}></Image>
                </View>
                <Text
                  className={classnames({
                    'collection.active-text': item.id !== 1
                  })}
                >{item.text}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={{ height: '8px' }}></View>
        {/* 招工 */}
        <CollectionResumeList data={resLists.resume} onHandlerClick={resumeListHandler} onHandleClick={handleModal} recruitNoMoreData={recruitNoMoreData}/>
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
