import Taro, { Config, useState, useEffect, useReachBottom } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components';
import classnames from 'classnames'
import { newsTypesAction, newListAction} from '../../../utils/request/index'
import { newsTypesListData, newListData } from '../../../utils/request/index.d'
import Nodata from '../../../components/nodata'
import Msg from '../../../utils/msg'
import './index.scss'


interface TabListType {
  item: newsTypesListData[]
}
interface InitPageType {
  page:number
}
export default function InvitePage() {
  // 默认table
  const [current, setCurrent] = useState<string>("-1")
  // 页数
  const [initPage,setInitPage] = useState<InitPageType>({
    page:1,
  })
  //  没有数据显示内容
  const [noData,setNodata]= useState<string>('暂无相关资讯')
  // 数据
  const [list, setList] = useState<newListData[]>([])
  // 能否再上拉
  const [pull,setPull] = useState<boolean>(true)
  const handleTable = (id:string,name:string)=>{
    setCurrent(id);
    setNodata(name)
    setInitPage({page:1})
    setPull(true)
    Taro.pageScrollTo({
      scrollTop: 0
    })
  }
  const [tab,setTab] = useState<TabListType>({
    item:[]
  })
  // 获取新闻类型
  useEffect(()=>{
    newsTypesAction().then(res=>{
      setTab({item:res.data})
    })
  },[])
  // 获取新闻列表
  useEffect(() => {
    const params = {
      page:initPage.page,
      newsType: current,
    }
    newListAction(params).then(res => {
      Taro.hideNavigationBarLoading()
      if(params.page ===1){
        setList([...res.data])
      }else{
        if(res.data.length === 0 ){
          Msg('没有更多数据了')
          setPull(false)
        }
        setList([...list, ...res.data])
      }
    })
  }, [current,initPage])
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  useReachBottom(()=>{
    if (pull){
      setInitPage({ page: initPage.page+1})
    }
  })

  return(
    <View>
      <ScrollView
        className='invite-ScrollView'
        //scrollx
        scrollX
        upperThreshold={50}
        lowerThreshold={50}
        enableFlex
        onScrollToLower={(e)=>{console.log(e)}}
      >
      <View className='invite-tab'>
        {tab.item && tab.item.map(item => (
          <View key={item.index} className="invite-tab-box" onClick={() => { handleTable(item.index,item.name)}}>
            <View className={classnames({
              'invite-tab-active': item.index === current
            })}>
              {item.name}
            </View>
          </View>
        ))}
          {tab.item && tab.item.map(item => (
            <View key={item.index} className="invite-tab-box" onClick={() => { handleTable(item.index, item.name) }}>
              <View className={classnames({
                'invite-tab-active': item.index === current
              })}>
                {item.name}
              </View>
            </View>
          ))}
      </View>
      </ScrollView>
      {!list.length && <Nodata text={noData} />}
      <View className="invite-content-box">
        {list && list.map((v)=>(
          <View key={v.id} className='invite-content' onClick={() => userRouteJump(`/pages/consultationDetails/index?id=${v.id}`)}>
            <View>
              <Image className='invite-content-img' src={v.cover_img} />
            </View>
            <View className='invite-content-right'>
              <View className='invite-content-title'>{v.title}</View>
              <View className='invite-content-desc'>{v.desc}</View>
              <View className='invite-content-footer'>
                <Text>{v.author}</Text>
                <Text>{v.time}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
      {/* {current === '1' && AllContentData}
      {current === '2' && EnterpriseDynamics}
      {current === '3' && IndustryTrends}
      {current === '4' && EnterpriseAnnouncement} */}
    </View>
  )
}

InvitePage.config = {
  navigationBarTitleText: '鱼泡网-意见反馈列表',
  enablePullDownRefresh: true,
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config