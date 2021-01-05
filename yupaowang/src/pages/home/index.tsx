import Taro, { useState, useEffect } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { IProps } from '../../components/swiper/index'
import SwiperComponent from '../../components/swiper/index/index'
import SwiperNews from '../../components/swiper/news'
import Projects from '../../components/index/projects/index'
import './index.scss'
import Fastfun from '../../components/index/fastfun'
import { IMGCDNURL, PUBLISHRECRUIT, DOWNLOADAPP, DOWNLOADAPPPATH } from '../../config'
import RecruitList from '../../components/lists/recruit'
import ResumeList from '../../components/lists/resume'
import UsedList from '../../components/lists/used'
import About from '../../components/index/about'
import { useDispatch } from '@tarojs/redux'
import { changeTabbar } from '../../actions/tabbar'
import { RECRUIT,RESUME,USED } from '../../constants/tabbar'
import { getBannerNotice, getAllListItem } from '../../utils/request'
import { UserListChooseCity, UserLocation } from '../../config/store'
import HomeCity from '../../components/home_city'
import { BannerNoticeBanner, BannerNoticeNotice, RecruitListItem, ResumeList as ResumeListArr, FleamarketList } from '../../utils/request/index.d'
import { userJumpPage } from '../../utils/helper'
import useJobView from '../../hooks/init_job_view/index'

export interface FilterData {
  area: string,
  location: string
}

interface AllLists {
  recruit: RecruitListItem[][],
  resume: ResumeListArr[][],
  fleamarket: FleamarketList[][]
}

interface HomeProps {
  homeIndex?: number
}

export default function Home({ homeIndex = 0}: HomeProps){
  // 发布招工跳转不同模式（急速或者快速）
  const { initJobView } = useJobView()
  const dispatch = useDispatch()

  const tabbarJump = (id: string) => {
    if(id === USED){
      userJumpPage('/pages/used/lists/index')
      return
    }
    dispatch(changeTabbar(id))
  }

  // 因为刷新页面就会改变，所以我们将获取选择的位置和当前定位经纬度声明变量先保存
  let userChooseCity;
  let location;

  useEffect(() => {
    userChooseCity = Taro.getStorageSync(UserListChooseCity)
    location = Taro.getStorageSync(UserLocation)
    setArea(userChooseCity ? userChooseCity.name : '全国')
    setFilterData({
      area: userChooseCity ? userChooseCity.id : 1,
      location: location || ''
    })
  }, [homeIndex])

  // 当前展示的城市
  const [area, setArea] = useState<string>(userChooseCity ? userChooseCity.name : '全国')

  // * 是否展示城市选择
  const [shwoCity, setShowCity] = useState<boolean>(false)
  // * 获取列表数据的data
  const [filterData, setFilterData] = useState<FilterData>({
    area: '',
    location: ''
  })
  // 选择城市 设置信息
  const setAreaInfo = (val: string, id: string) => {
    setArea(val)
    setFilterData({...filterData, area: id})
  }

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
    if(!filterData.area) return
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
        <View className='home-header-area' onClick={()=>setShowCity(true)}>
          <Image className='home-header-loc' src={ IMGCDNURL + 'area.png' }></Image>
          <Text className='home-header-text'>{area }</Text>
          <Image className='home-header-select' src={ IMGCDNURL + 'areamore.png' }></Image>
        </View>
        {DOWNLOADAPP ? 
          <Image onClick={() => userRouteJump(DOWNLOADAPPPATH)} className='home-header-app' src={ IMGCDNURL + 'loadapp.png' }></Image>
        :
          <Image onClick={() => { initJobView()}} className='home-header-app' src={IMGCDNURL + 'header-publish-recruit-icon.png'}></Image>
        }
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
            <Text className='home-lists-item-more' onClick={() => tabbarJump(RECRUIT)}>更多</Text>
          </View>
          <RecruitList data={ lists.recruit } bottom={ false } hasMore={true} />
        </View>
        {/* // ? 找活列表  */}
        <View className='home-lists-item'>
          <View className='home-lists-item-header'>
            <Text className='home-lists-item-title'>最新找活信息</Text>
            <Text className='home-lists-item-more' onClick={() => tabbarJump(RESUME)}>更多</Text>
          </View>
          <ResumeList data={ lists.resume } bottom={ false } hasMore={true} />
        </View>
        {/* // ? 二手列表  */}
        <View className='home-lists-item'>
          <View className='home-lists-item-header'>
            <Text className='home-lists-item-title'>最新二手交易信息</Text>
            <Text className='home-lists-item-more' onClick={() => tabbarJump(USED)}>更多</Text>
          </View>
          <UsedList data={lists.fleamarket} bottom={false} hasMore={true} />
        </View>
      </View>
      <Image 
        className='fixed-publish-recruit' 
        src={`${IMGCDNURL}fixed-publishrecruit.png`}
        onClick={() => { initJobView() }} 
      />
      {/* // ? 底部信息  */}
      <About />
      {shwoCity && <HomeCity show={shwoCity} setAreaInfo={(val: string,id: string) => setAreaInfo(val,id)} closeDrawer={() => setShowCity(!shwoCity)} />}
    </View>
  )
}