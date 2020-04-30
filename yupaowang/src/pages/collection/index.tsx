import Taro, { Config, useState, useEffect } from '@tarojs/taro'
import { View, ScrollView, Text } from '@tarojs/components'
import Recruit from '../recruit/lists'
import { CollectionResumeListDataList, CollectionRecruitListDataList } from '../../utils/request/index.d'
import classnames from 'classnames'
import CollectionRecruitList from "./collectionRecruitList"
import CollectionResumeList from "./collectionResumeList"
import { getCollectionRecruitListData, getCollectionResumeListData, recruitListCancelCollectionAction, ResumeCancelCollectionAction } from '../../utils/request'
import './index.scss'

export interface FilterData {
  area: string,
  location: string
}
export interface tabDataType {
  id: number,
  text: string,
}
// 定义招工
export interface Recruit {
  item: CollectionRecruitListDataList[]
}
// 定义找活
export interface AllLists {
  resume: CollectionResumeListDataList[],
}
// 定义招工页数
export interface initRecPageType {
  page: number
}
// 定义找活页数
export interface initResPageType {
  page: number
}
export default function Collection() {
  // 当前高亮key
  const [current, setCurrent] = useState<number>(1)
  // 设置默认tab
  const [tab, setTab] = useState <tabDataType[]>([
    { id: 1, text: '招工信息'},
    { id: 2, text: '找活信息' },
  ])
  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // * 定义招工列表数组
  const [lists, setLists] = useState<Recruit>({
    item:[]
  })
  // * 定义找活列表数组
  const [resLists, setResLists] = useState<AllLists>({
    resume: [],
  })
  // 招工初始页数
  const [initRecPage, setinitRecPage] = useState<initRecPageType>({
    page:1
  })
  // 找活初始页数
  const [initResPage, setinitResPage] = useState<initResPageType>({
    page: 1
  })
  
  // 请求数据
  useEffect(() => {
    getCollectionRecruitListData(initRecPage.page).then(res => {
      Taro.hideNavigationBarLoading()
      setLists({ item: [...res.list]})
      if(initRecPage.page === 1){
        setLists({ item: [...res.list] })
      }else{
        setLists({ item: [...lists.item,...res.list] })
      }
      if (refresh) setRefresh(false)
    })
  }, [initRecPage])
  // 找活
  // 请求数据
  useEffect(() =>{
    getCollectionResumeListData(initResPage.page).then(res => {
      Taro.hideNavigationBarLoading()
      if (initResPage.page === 1){
        setResLists({ resume: [...res.data] })
      }else{
        setResLists({ resume: [...resLists.resume, ...res.data] });
      }
      if (refresh) setRefresh(false)
    })
  },[initResPage])
  // * 监听下拉刷新
  const pullDownAction = () => {
    setRefresh(true)
    if(current === 1){
      setinitResPage({ ...initResPage, page: 1 })
    }else{
      setinitRecPage({...initRecPage, page:1})
    }
  }
  // * 触底加载下一页
  const getNextPageData = () => {
    Taro.showNavigationBarLoading()
    if(current ===1){
      setinitResPage({ ...initResPage, page: initResPage.page + 1 })
    }else{
      setinitRecPage({ ...initRecPage, page: initRecPage.page + 1})
    }
  }
  // 招工取消收藏
  const RecruitListHandler = (id:string) => {
    recruitListCancelCollectionAction(id).then(res => {
      if (res.errcode === "ok") {
        setinitRecPage({ ...initRecPage, page: 1 })
      }
    })
  }
  // 找活取消收藏
  const ResumeListHandler = (id:string) => {
    ResumeCancelCollectionAction(id).then(res => {
      if (res.errcode === "ok") {
        setinitResPage({ ...initResPage, page: 1 })
      }
    })
  }
  return (
    <View>
      <View className='collection-tab'>
        {tab.map(item => (
          <Text
            onClick={() => setCurrent(item.id)}
            className={classnames({
              'collection.active-text': item.id === current
            })
            } key={item.id}>{item.text}</Text>
        ))}
      </View>
      <ScrollView
        className='recruit-lists-containerbox'
        scrollY
        lowerThreshold={200}
        refresherEnabled
        refresherTriggered={refresh}
        onRefresherRefresh={() => pullDownAction()}
        onScrollToLower={() => getNextPageData()}
      >
        {/* 招工 */}
        {current === 1 && <CollectionRecruitList data={lists.item} onHandlerClick={RecruitListHandler}/>}
        {/* 找活 */}
        {current === 2 && <CollectionResumeList data={resLists.resume} onHandlerClick={ResumeListHandler} />}
      </ScrollView>
    </View> 
  )
}
Collection.config = {
  navigationBarTitleText: '我的收藏找活',
  enablePullDownRefresh: true
} as Config