import Taro, { useState, useEffect, Config } from '@tarojs/taro'
import { View, Text, Image, Block, ScrollView } from '@tarojs/components'
import { useSelector } from '@tarojs/redux'
import HeaderList from './config'
import { userGetPublishedRecruitLists, userChangeRecruitStatus } from '../../../utils/request'
import { UserPublishedRecruitListDataItem } from '../../../utils/request/index.d'
import classnames from 'classnames'
import { User } from '../../../reducers/user'
import Nodata from '../../../components/nodata'
import './index.scss'
import { IMGCDNURL } from '../../../config'
import Msg from '../../../utils/msg'

export interface searchDataType {
  type: string,
  mid: number,
  uuid: string,
  page: number
}

export default function PublishedRecruit(){
  // 当前高亮key
  const [id, setId] = useState<string>(HeaderList[0].id)
  // 是否还有下一页
  const [more, setMore] = useState<boolean>(true)
  // 数据加载中
  const [loading, setLoading] = useState<boolean>(false)
  // 是否下拉刷新
  const [refresh, setRefresh] = useState<boolean>(false)
  // 已发布招工列表
  const [lists, setLists] = useState<UserPublishedRecruitListDataItem[]>([])
  // 获取用户信息
  const user = useSelector<any, User>(state => state.User)
  const [searchData, setSearchData] = useState<searchDataType>({
    mid: user.userId,
    uuid: user.uuid,
    page: 1,
    type: id
  })

  // 加载数据类别
  const getPublishedRecruitLists = () =>  {
    setLoading(true)
    userGetPublishedRecruitLists(searchData)
    .then(res => {
      let list = res.data.lists
      let len = list.length
      let page = searchData.page
      setMore(len ? true : false)
      if (page === 1) {
        setLists(list)
      } else {
        setLists([...lists, ...list])
      }
    })
    .finally(()=>{
      if(refresh){
        setRefresh(false)
        Taro.stopPullDownRefresh()
        Taro.hideNavigationBarLoading()
      } 
      setLoading(false)
    })
  }

  // 用户切换招工状态列表
  const userChangePublishedItem = (key: string) => {
    setId(key)
    setSearchData({...searchData,type: key, page: 1})
  }

  useEffect(()=>{
    getPublishedRecruitLists()
  }, [searchData])

  // 加载下一页
  const getNextPageData = () => {
    if (!more || loading) return
    setSearchData({ ...searchData, page: searchData.page + 1 })
  }

  // 刷新当前页
  const reloadPage = () => {
    Taro.showNavigationBarLoading()
    setRefresh(true)
    setSearchData({ ...searchData, page: 1 })
  }

  // 停止招工
  const userStopRecruit = (id: string,i: number) => {
    userChangeRecruitStatus(id)
    .then(res=>{
      Msg(res.errmsg)
      if(res.errcode == 'ok'){
        let bakLists = lists
        bakLists[i].is_check = res.data.is_check.toString()
        bakLists[i].is_end = res.data.is_end.toString()
        if (bakLists[i].top_data){
          bakLists[i].top_data.is_top = res.data.top.is_top.toString()
        } 
        setLists([...bakLists])
      }
    })
  }
  // 跳转
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  return (
    <View className='user-published-container'>
      <View className='user-published-header'>
        {HeaderList.map(item => (
          <View 
            onClick={()=>userChangePublishedItem(item.id)}
            className={classnames({
              'user-published-header-item': true,
              'user-published-header-item-active': id === item.id
            })}
          >
          <Text className='published-item-title'>{ item.title }</Text>
          </View>
        ))}
      </View>
      <ScrollView 
        className='user-published-body'
        scrollY
        refresherEnabled
        refresherTriggered={refresh}
        onRefresherRefresh={() => reloadPage()}
        lowerThreshold={200}
        onScrollToLower={() => getNextPageData()} 
      >
        {lists.map((item,index)=>(
          <View className='user-published-item' key={ item.id }>
            {item.is_check == '1' && <Image className='published-status-img' src={IMGCDNURL + 'published-recruit-checking.png'} />}
            {item.is_check == '0' && <Image className='published-status-img' src={IMGCDNURL + 'published-recruit-nopass.png'} /> }
            {item.is_end == '2' && <Image className='published-status-img' src={IMGCDNURL + 'published-recruit-end.png'} /> }
            <View className='user-published-title overwords'>{ item.title }</View>
            <View className='user-published-content'>{ item.detail }</View>
            <View className='user-published-footer'>
              {item.is_check == '1' &&
              <View className='published-ischeking'>
                <Image className='published-checking-img' src={ IMGCDNURL + 'published-info.png' } />
                提示：人工审核中，该信息仅自己可见。
              </View>
              }
              {item.is_check != '1' && <View className='user-published-footer-item'>修改</View>}
              {item.is_check == '2' &&
              <Block >
                <View className='user-published-footer-item' onClick={()=>userStopRecruit(item.id,index)}>停止招工</View>
                <View className='user-published-footer-item' onClick={() => userRouteJump(`/pages/topping/index?id=${item.id}`)}>我要置顶</View>
              </Block>
              }
            </View>
            {item.top && item.top_data && item.top_data.is_top == '1' &&
            <View className='published-top-time'>到期时间：2020年04月30日11:31:38</View>
            }
          </View>
        ))}
        {!more && searchData.page > 1 && <View className='showMore'>没有更多数据了</View>}
        {!lists.length &&
        <View className='user-published-nodata'>
          <Nodata />
        </View>
        }
      </ScrollView>
    </View>
  )
}


PublishedRecruit.config = {
  navigationBarTitleText: '我的招工信息',
  navigationBarBackgroundColor: '#0099ff',
  navigationBarTextStyle: 'white',
  backgroundTextStyle: "dark"
} as Config