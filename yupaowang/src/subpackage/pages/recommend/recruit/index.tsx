import Taro, {Config, useEffect, useRouter, useState, usePullDownRefresh, useReachBottom} from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { IMGCDNURL, PUBLISHEDRECRUIT } from '../../../../config'
import './index.scss'
import { jobRecommendListAction } from '../../../../utils/request/index'
import { jobRecommendListDataList } from '../../../../utils/request/index.d'
export interface PageType {
  page:number,
  area_id: string,
  job_ids: string,
  classify_id:string,
}
export interface ItmeType {
  item: jobRecommendListDataList[]
}
export default function RecruitList(){
  const router: Taro.RouterInfo = useRouter()
  let { city,occupations,type = '',jobIds } = router.params;
   // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
   // 设置初始页面
  const [initPage, setPage] = useState<PageType>({
      page: 1,
      area_id: city,
      job_ids: jobIds,
      classify_id:occupations,
  })
   // 后台返回的列表类型，用作于下一次请求时触发
  const [types,setTypes] =useState<string>(type);
   // 定义数据
  const [lists, setLists] = useState<ItmeType>({
    item: [],
  })
   // 是否能上拉加载更多
  const [isDown, setIsDown] = useState<boolean>(true);
   // 判断是否登陆
  useEffect(() => {
  jobRecommendDataAction();
  }, [initPage])
   // 进来时获取数据
  const jobRecommendDataAction = ()=>{
  jobRecommendListAction({...initPage, type: types}).then(res => {
      Taro.hideNavigationBarLoading()
      Taro.stopPullDownRefresh();
      setTypes(res.data.type ? res.data.type.toString():'');
      if (initPage.page === 1) {
        setLists({ item: [...res.data.list] })
      } else {
        setLists({ item: [...lists.item, ...res.data.list] })
      }
      if (refresh) setRefresh(false)
      if (!res.data.list.length) {
        setIsDown(false)
      }
    })
  } 
  // 上拉加载更多
  useReachBottom(()=>{
    if (!isDown) return;
    Taro.showNavigationBarLoading()
    setPage({...initPage,page:initPage.page + 1})
  })
  // 下拉刷新
  usePullDownRefresh(() => {
    setIsDown(true);
    setPage({...initPage, page: 1})
  })

  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  // 用户页面跳转-定向
  const userRouteRe = (url: string) => {
    Taro.reLaunch({
      url: url
    })
  }
  return (
    <View className='recruit-lists-container'>
      {lists.item && lists.item.map((item)=>(
            <View className='recruit-list-item' key={item.id} onClick={() => userRouteJump(`/pages/detail/info/index?id=${item.id}&type=1`)}>
              {item.top && <Image className='list-toprecruit-img' src={IMGCDNURL + 'newlist-jobzitem.png'} />}
              {item.is_end == 2 && <Image className='recruit-findend-img' src={IMGCDNURL + 'newlist-jobfindenitem.png'} /> }
              <View className='recruit-list-header'>
                <View className='recruit-list-title overwords'>{ item.title }</View>
                {item.top && <Text className='recruit-list-settop' onClick={() => userRouteJump(PUBLISHEDRECRUIT)}>我要置顶</Text>}
              </View>
              <View className='recruit-list-body'>
                <Image className='recruit-list-user' src={ item.image } />
                <View className='recruit-list-body-content'>
                  <View className='recruit-body-header'>
                    <Text className='recruit-list-username'>{ item.user_name }</Text>
                    {item.is_end !== 2 && <Image className='recruit-list-finding' src={IMGCDNURL + 'newlist-jobfinding.png'} />}
                  </View>
                  <View className='recruit-list-words'>
                    <View className='recruit-words-text'>{ item.detail }</View>
                  </View>
                </View>
              </View>
              <View className='recruit-list-footer'>
                <Image className='recruit-list-loc' src={IMGCDNURL + 'newlist-jobposi.png'} />
                <View className='recruit-list-loctxt overwords'>{ item.show_address }</View>
                <Text className='recruit-list-time'>{ item.time }</Text>
              </View>
            </View>
        )
      )}
      {!isDown && lists.item.length && <View onClick={() => Taro.navigateBack({delta:2})} className="seemore-recommend">查看更多</View>}
    </View>
  )
}

RecruitList.config = {
  navigationBarTitleText: '适合您的工作',
} as Config