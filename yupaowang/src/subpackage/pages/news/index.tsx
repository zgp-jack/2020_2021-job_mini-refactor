import Taro, { Config, useState, useEffect, useReachBottom,usePullDownRefresh } from '@tarojs/taro'
import { View, Text, Image, ScrollView } from '@tarojs/components';
import classnames from 'classnames'
import { newsTypesAction, newListAction } from '../../../utils/request/index'
import { newsTypesListData, newListData } from '../../../utils/request/index.d'
import Nodata from '../../../components/nodata'
import './index.scss'


interface TabListType {
  item: newsTypesListData[]
}
interface InitPageType {
  newsType: string
  page: number
}
export default function InvitePage() {
  const defaultCurrent: string = '-1'
  let down:boolean = false;
  // 默认table
  const [current, setCurrent] = useState<string>(defaultCurrent)
  // 页数
  const [searchData, setSearchData] = useState<InitPageType>({
    page: 1,
    newsType: defaultCurrent
  })
  //  没有数据显示内容
  const [noData, setNodata] = useState<string>('暂无相关资讯')
  // 数据
  const [list, setList] = useState<newListData[]>([])
  // 能否再上拉
  const [pull, setPull] = useState<boolean>(true)
  // 设置滚动未知
  const [scrollLeft, setScrollLeft] = useState<number>(0)
  const handleTable = (id: string, name: string, index: number) => {
    setPull(true)
    setNodata(name)
    setScrollLeft(index * 80)
    setCurrent(id);
    setSearchData({ ...searchData, page: 1, newsType: id })
    Taro.pageScrollTo({
      scrollTop: 0
    })
  }
  const [tab, setTab] = useState<TabListType>({
    item: []
  })
  // 获取新闻类型
  useEffect(() => {
    newsTypesAction().then(res => {
      setTab({ item: res.data })
    })
  }, [])
  // 获取新闻列表
  useEffect(() => {
    if (down) return;
    newListAction(searchData).then(res => {
      Taro.hideNavigationBarLoading()
      if (!res.data.length) {
        setPull(false)
      }
      if (searchData.page === 1) {
        setList([...res.data])
      } else {
        setList([...list, ...res.data])
      }
      Taro.stopPullDownRefresh();
      // 下拉刷新
      if(down){
        Taro.pageScrollTo({
          scrollTop: 0
        })
      }
      down = false;
    })
  }, [searchData])
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  useReachBottom(() => {
    if (pull) {
      setSearchData({ ...searchData, page: searchData.page + 1 })
    }
  })
  usePullDownRefresh(()=>{
    down = true
    setSearchData({ ...searchData, page: 1, newsType:current })
    setTimeout(() => {
      Taro.stopPullDownRefresh()
    }, 500)
  })
  return (
    <View>
      <ScrollView
        className='invite-ScrollView'
        scrollX
        upperThreshold={50}
        lowerThreshold={50}
        enableFlex
        scrollLeft={scrollLeft}
        scrollWithAnimation
        onScroll={(e => { console.log(e) })}
      >
        <View className='invite-tab'>
          {tab.item && tab.item.map((item, i) => (
            <View key={item.index} className='invite-tab-box' onClick={() => handleTable(item.index, item.name, i)}>
              <View className={classnames({
                'invite-tab-active': item.index === current
              })}>
                {item.name}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View className='invite-content-box'>
        {!list.length && <Nodata text={`暂无${noData}`} />}
        {list && list.map((v) => (
          <View key={v.id} className='invite-content' onClick={() => userRouteJump(`/pages/static/notice/index?id=${v.id}`)}>
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
      {list.length && !pull && <View className='invite-nodata'>没有更多数据了</View>}
    </View>
  )
}

InvitePage.config = {
  navigationBarTitleText: '鱼泡网-新闻资讯',
  enablePullDownRefresh: true,
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: 'dark'
} as Config