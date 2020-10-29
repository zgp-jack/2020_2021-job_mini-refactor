import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { IProps } from '../../components/swiper/index'
import SwiperComponent from '../../components/swiper/index/index'
import SwiperNews from '../../components/swiper/news'
import Projects from '../../components/index/projects/index'
import './index.scss'
import Fastfun from '../../components/index/fastfun'
import { IMGCDNURL } from '../../config'
import RecruitList from '../../components/lists/recruit'
import ResumeList from '../../components/lists/resume'
import UsedList from '../../components/lists/used'
import About from '../../components/index/about'
import { getBannerNotice, getAllListItem } from '../../utils/request'
import { BannerNoticeBanner, BannerNoticeNotice, RecruitListItem, ResumeList as ResumeListArr, FleamarketList } from '../../utils/request/index.d'

export interface FilterData {
  area: string,
  location: string
}

interface AllLists {
  recruit: RecruitListItem[][],
  resume: ResumeListArr[][],
  fleamarket: FleamarketList[][]
}

export default function Home(){

  // * 获取列表数据的data
  const [filterData, setFilterData] = useState<FilterData>({
    area: '',
    location: ''
  })
  // * 轮播图的基本参数配置
  const [swiper, setSwiper] = useState<IProps<BannerNoticeBanner>>({
    lists: []
  })
  // * 公告列表
  const [notice, setNotice] = useState<IProps<BannerNoticeNotice>>({
    vertical: true,
    lists: []
  })
  // * 数据列表
  const [lists, setLists] = useState<AllLists>({
    recruit: [],
    resume: [],
    fleamarket: []
  })

  // 请求轮播数据
  useEffect(()=>{
    getBannerNotice().then(res=>{
      setNotice({ ...notice, lists: [...res.notice] })
      setSwiper({ ...swiper, lists: [...res.banner] })
    })
  },[])

  // 请求列表数据
  useEffect(()=>{
    getAllListItem(filterData).then(res=>{
      setLists({ 
        ...lists, 
        recruit:[[...res.job.lists]],
        resume: [[...res.resume.lists]], 
        fleamarket: [[...res.fleamarket.lists]]
      })
    })
  },[filterData])
  
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  return (
    <View className='home-container'>
      {/* // ? 顶部结构  */}
      <View className='home-header'>
        <Image className='home-header-logo' src={ IMGCDNURL + 'logo.png' }></Image>
        <View className='home-header-area'>
          <Image className='home-header-loc' src={ IMGCDNURL + 'area.png' }></Image>
          <Text className='home-header-text'>四川</Text>
          <Image className='home-header-select' src={ IMGCDNURL + 'areamore.png' }></Image>
        </View>
        <Image onClick={() => userRouteJump('/subpackage/pages/download/index')} className='home-header-app' src={ IMGCDNURL + 'loadapp.png' }></Image>
      </View>
      {/* // ? 轮播图  */}
      <SwiperComponent data={ swiper } />
      {/* // ? 项目列表  */}
      {ISWEIXIN && <Projects />}
      {/* // ? 快捷菜单  */}
      <Fastfun />
      {/* // ? 鱼泡资讯  */}
      <View className='home-information-container'>
        <Image className='home-infomation-img' src={ IMGCDNURL + 'notice.png' } />
        <View className='home-infomation-news'>
          <SwiperNews data={ notice } />
        </View>
      </View>
      {/* // ? 列表组件  */}
      <View className='home-all-lists'>
        {/* // ? 招工列表  */}
        <View className='home-lists-item'>
          <View className='home-lists-item-header'>
            <Text className='home-lists-item-title'>最新招工信息</Text>
            <Text className='home-lists-item-more'>更多</Text>
          </View>
          <RecruitList data={ lists.recruit } bottom={ false } />
        </View>
        {/* // ? 找活列表  */}
        <View className='home-lists-item'>
          <View className='home-lists-item-header'>
            <Text className='home-lists-item-title'>最新找活信息</Text>
            <Text className='home-lists-item-more'>更多</Text>
          </View>
          <ResumeList data={ lists.resume } bottom={ false } />
        </View>
        {/* // ? 二手列表  */}
        <View className='home-lists-item'>
          <View className='home-lists-item-header'>
            <Text className='home-lists-item-title'>最新二手交易信息</Text>
            <Text className='home-lists-item-more'>更多</Text>
          </View>
          <UsedList data={ lists.fleamarket } bottom={ false } />
        </View>
      </View>

      {/* // ? 底部信息  */}
      <About />
    </View>
  )
}