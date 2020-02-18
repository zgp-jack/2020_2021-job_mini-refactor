import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { IProps } from '../../components/swiper/index'
import SwiperComponent, { SwiperLists } from '../../components/swiper/index/index'
import SwiperNews, { SwiperNewsItem } from '../../components/swiper/news'
import Projects from '../../components/index/projects/index'
import './index.scss'
import Fastfun from '../../components/index/fastfun'
import { IMGCDNURL } from '../../config'
import RecruitList from '../../components/lists/recruit'
import ResumeList from '../../components/lists/resume'
import UsedList from '../../components/lists/used'
import About from '../../components/index/about'

export default function Home(){

  // * 轮播图的基本参数配置
  const SWIPER_PROPS: IProps<SwiperLists> = {
    classname: 'index-swiper-container',
    lists: [
      {
        img: 'http://cdn.yupao.com/images/content/20190128/154866949945mKQD.png',
        url: ''
      },
      {
        img: 'http://cdn.yupao.com/images/content/20180313/1520912555TyFS9d.jpg',
        url: ''
      }
    ]
  }

  const SWIPER_NEWS: IProps<SwiperNewsItem> = {
    vertical: true,
    lists: [
      {
        url: '',
        text: '这个是我的公告内容你要看看嘛'
      },
      {
        url: '',
        text: '公告内容你要看看嘛dfsd的说法地方'
      },
      {
        url: '',
        text: '看看嘛这个是我的公告内容你要'
      },
    ]
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
        <Image className='home-header-app' src={ IMGCDNURL + 'loadapp.png' }></Image>
      </View>
      {/* // ? 轮播图  */}
      <SwiperComponent data={ SWIPER_PROPS } />
      {/* // ? 项目列表  */}
      <Projects />
      {/* // ? 快捷菜单  */}
      <Fastfun />
      {/* // ? 鱼泡资讯  */}
      <View className='home-information-container'>
        <Image className='home-infomation-img' src={ IMGCDNURL + 'notice.png' } />
        <View className='home-infomation-news'>
          <SwiperNews data={SWIPER_NEWS} />
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
          <RecruitList />
        </View>
        {/* // ? 找活列表  */}
        <View className='home-lists-item'>
          <View className='home-lists-item-header'>
            <Text className='home-lists-item-title'>最新找活信息</Text>
            <Text className='home-lists-item-more'>更多</Text>
          </View>
          <ResumeList />
        </View>
        {/* // ? 二手列表  */}
        <View className='home-lists-item'>
          <View className='home-lists-item-header'>
            <Text className='home-lists-item-title'>最新二手交易信息</Text>
            <Text className='home-lists-item-more'>更多</Text>
          </View>
          <UsedList />
        </View>
      </View>

      {/* // ? 底部信息  */}
      <About />
    </View>
  )
}