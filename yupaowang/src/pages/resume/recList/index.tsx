import Taro, { useState, Config, useEffect } from '@tarojs/taro'
import { View, Image, ScrollView } from '@tarojs/components';
import { jobRecommendListAction } from '../../../utils/request/index';
import { jobRecommendListDataList } from '../../../utils/request/index.d'
import './index.scss'
import { IMGCDNURL } from '../../../config'
import { Introinfo } from '../../../config/store';
import { RESUME } from '../../../constants/tabbar'
import Nodata from '../../../components/nodata';

interface DataType{
  item: jobRecommendListDataList[]
}
export default function RecListPage() {
  // 获取缓存数据
  const IntroinfoList = Taro.getStorageSync(Introinfo);
  // 获取数据
  const [data,setData]=useState<DataType>({
    item:[]
  })
  // 是够能加载更多
  const [isDown, setIsDown] = useState<boolean>(true)
  const [search,setSearch] = useState<any>({
    area_id: IntroinfoList.city,
    classify_id: IntroinfoList.occupations_id,
    page:1,
    type:1,
  })
  useEffect(()=>{
    getListData();
  }, [search.page])
  const getListData = ()=>{
    jobRecommendListAction(search).then(res => {
      if (!res.data.list.length) {
        setIsDown(false)
      }
      if (search.page === 1){
        setData({ item: res.data.list })
      }else{
        setData({item:[...data.item,...res.data.list]})
      }
    })
  }
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  const getNextPageData = ()=>{
    if (!isDown) return;
    setSearch({...search,page:search.page+1,type:2})
  }
  return(
    <View className='content'>
      {!data.item.length && <Nodata />}
      <View className='content-box'>
      <ScrollView
        className='recruit-lists-containerbox'
        scrollY
        lowerThreshold={200}
        refresherEnabled
        // refresherTriggered={refresh}
        // onRefresherRefresh={() => pullDownAction()}
        onScrollToLower={() => getNextPageData()}
      >
      {data.item.map((v: any) => (
        <View key={v.id} className='recruitListBox' onClick={() => userRouteJump(`/pages/detail/info/index?id=${v.id}`)}>
          {/* 标题 */}
          <View className='recruitListBox-title'>
            {v.title}
          </View>
          {/* 中间 */}
          <View className='recruitListBox-content'>
            <Image src={v.image} className='recruitListBox-content-img' />
            <View className='recruitListBox-content-box'>
              <View className='recruitListBox-content-name'>{v.user_name}</View>
              <View className='recruitListBox-content-details'>{v.detail}</View>
            </View>
          </View>
          {/* 尾部 */}
          <View className='recruitListBox-footer'>
            <View><Image className='recruitListBox-footer-image' src={`${IMGCDNURL}newlist-jobposi.png`} />{v.show_address}</View>
            <View>{v.time}</View>
          </View>
        </View>
      ))}
      {!isDown && data.item.length && 
        <View className='footer' onClick={() => Taro.reLaunch({ url: '/pages/index/index?type=' + RESUME })}>
          <View className='footer-btn'>查看更多</View>
        </View>
      }
      </ScrollView>
      </View>
    </View>
  )
}
RecListPage.config = {
  navigationBarTitleText: '项目经验',
  enablePullDownRefresh: true,
} as Config