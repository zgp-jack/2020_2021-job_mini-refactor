import Taro, {Config, useEffect, useRouter, useState, usePullDownRefresh, useReachBottom} from '@tarojs/taro'
import { View, Text, Image, Block } from '@tarojs/components'
import { IMGCDNURL } from '../../../../config'
import './index.scss'
import { recommendListAction } from '../../../../utils/request/index'
import { recommendListDataList } from '../../../../utils/request/index.d'
export interface PageType {
  page:number,
  area_id: string, 
  classify_id:string,
}
export interface ItmeType {
  item: recommendListDataList[]
}
// 找活
export default function ResumeListPage( ) {
  const router: Taro.RouterInfo = useRouter()
  let { areasId,occupations,type  } = router.params;
  // * 标记是否是在刷新状态
  const [refresh, setRefresh] = useState<boolean>(false)
  // 设置初始页面
  const [initPage, setPage] = useState<PageType>({
    page: 1,
    area_id: areasId,
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
  recommendDataAction();
  }, [initPage])
  // 进来时获取数据
  const recommendDataAction = ()=>{
  recommendListAction({...initPage, type: types}).then(res => {
      Taro.hideNavigationBarLoading()
      Taro.stopPullDownRefresh();
      setTypes(res.data.type ? res.data.type.toString():'')
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
  return(
    <View className='resume-list-container'>
      {lists.item && lists.item.map((item)=>(
        <Block key={item.id}>
          {/* uuid, location */}
          <View className='resume-list-item' key={item.id} onClick={() => userRouteJump(`/pages/resume/detail/index?uuid=${item.uuid}&location=${item.location}`)}>
              <View className='resume-list-header'>
                <Image className='resume-list-user' src={item.headerimg} />
                <View className='resume-list-userinfo'>
                  <View className='resume-list-userinfo-detail'>
                    <Text className='resume-userinfo-name'>{item.username}</Text>
                    {item.birthday && <Text className='resume-userinfo-birthday'>{item.birthday}岁</Text>}
                    {item.certificate == 1 && < Image className='resume-userinfo-img' src={`${IMGCDNURL}newresume-infolist-jnz.png?t=1`} />}
                  </View>
                  <Text className='resume-list-type'>{item.type}</Text>
                  <View className='resume-otherinfo'>
                    {item.nation && <Text className='resume-otherinfo-text'>{item.nation}</Text>}
                    <Text className='resume-otherinfo-text'>{item.experience}</Text>
                  </View>
                </View>
              </View>
              <View className='resume-list-works'>
                {item.occupations.map((v, i) => (
                  <Text className='resume-list-words-text' key={i + i}>{v}</Text>
                ))}
              </View>
              <View className='resume-list-content overwords'>{item.introduce}</View>
              <View className='resume-list-footer'>
                <View className='resume-list-footer-flex'>
                  <Image className='resume-list-loc' src={IMGCDNURL + 'lpy/biaoqian.png'} />
                  <View className='resume-list-loctxt overwords'>{item.show_address}</View>
                </View>
                <Text className='resume-list-time'>{item.prof_degree}</Text>
              </View>
            </View>
        </Block>
      ))}
      {!isDown && lists.item.length && <View className='seemore-recommend-recruit' onClick={() => userRouteRe(`/pages/index/index?type=resume`)}>查看更多</View>}
    </View>
  )
}

ResumeListPage.config = {
  navigationBarTitleText: '适合您的工人',
} as Config