import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync } from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import SwiperComponent from '../../components/swiper/index/index';
import SwiperNews from "../../components/swiper/news/index";
import Projects from '../../components/index/projects/index';
import './index.scss';
import Fastfun from "../../components/index/fastfun/index";
import { IMGCDNURL, PUBLISHRECRUIT, DOWNLOADAPP } from "../../config/index";
import RecruitList from "../../components/lists/recruit/index";
import ResumeList from "../../components/lists/resume/index";
import UsedList from "../../components/lists/used/index";
import About from "../../components/index/about/index";
import { useDispatch } from "@tarojs/redux-h5";
import { changeTabbar } from '../../actions/tabbar';
import { RECRUIT, RESUME, USED } from '../../constants/tabbar';
import { getBannerNotice, getAllListItem } from "../../utils/request/index";
import { UserListChooseCity, UserLocation } from '../../config/store';
import HomeCity from "../../components/home_city/index";
import { userJumpPage } from "../../utils/helper/index";
export default class Home extends Taro.Component {
  render() {
    const { homeIndex = 0 } = this.props;

    const dispatch = useDispatch();
    const tabbarJump = id => {
      if (id === USED) {
        userJumpPage('/pages/used/lists/index');
        return;
      }
      dispatch(changeTabbar(id));
    };
    // 因为刷新页面就会改变，所以我们将获取选择的位置和当前定位经纬度声明变量先保存
    let userChooseCity;
    let location;
    Taro.useEffect(() => {
      userChooseCity = _getStorageSync(UserListChooseCity);
      location = _getStorageSync(UserLocation);
      setArea(userChooseCity ? userChooseCity.name : '全国');
      setFilterData({
        area: userChooseCity ? userChooseCity.id : 1,
        location: location || ''
      });
    }, [homeIndex]);
    // 当前展示的城市
    const [area, setArea] = Taro.useState(userChooseCity ? userChooseCity.name : '全国');
    // * 是否展示城市选择
    const [shwoCity, setShowCity] = Taro.useState(false);
    // * 获取列表数据的data
    const [filterData, setFilterData] = Taro.useState({
      area: '',
      location: ''
    });
    // 选择城市 设置信息
    const setAreaInfo = (val, id) => {
      setArea(val);
      setFilterData({ ...filterData, area: id });
    };
    // * 轮播图的基本参数配置
    const [swiper, setSwiper] = Taro.useState({
      lists: []
    });
    // * 公告列表
    const [notice, setNotice] = Taro.useState({
      vertical: true,
      lists: []
    });
    // * 数据列表
    const [lists, setLists] = Taro.useState({
      recruit: [],
      resume: [],
      fleamarket: []
    });
    // 请求轮播数据
    Taro.useEffect(() => {
      getBannerNotice().then(res => {
        setNotice({ ...notice, lists: [...res.notice] });
        setSwiper({ ...swiper, lists: [...res.banner] });
      });
    }, []);
    // 请求列表数据
    Taro.useEffect(() => {
      if (!filterData.area) return;
      getAllListItem(filterData).then(res => {
        setLists({
          ...lists,
          recruit: [[...res.job.lists]],
          resume: [[...res.resume.lists]],
          fleamarket: [[...res.fleamarket.lists]]
        });
      });
    }, [filterData]);
    // 用户页面跳转
    const userRouteJump = url => {
      Taro.navigateTo({
        url: url
      });
    };
    return <View className="home-container">
      
      <View className="home-header">
        <Image className="home-header-logo" src={IMGCDNURL + 'logo.png'}></Image>
        <View className="home-header-area" onClick={() => setShowCity(true)}>
          <Image className="home-header-loc" src={IMGCDNURL + 'area.png'}></Image>
          <Text className="home-header-text">{area}</Text>
          <Image className="home-header-select" src={IMGCDNURL + 'areamore.png'}></Image>
        </View>
        {DOWNLOADAPP ? <Image onClick={() => userRouteJump('/subpackage/pages/download/index')} className="home-header-app" src={IMGCDNURL + 'loadapp.png'}></Image> : <Image onClick={() => userRouteJump(PUBLISHRECRUIT)} className="home-header-app" src={IMGCDNURL + 'header-publish-recruit-icon.png'}></Image>}
      </View>
      
      <SwiperComponent data={swiper} />
      
      {ISWEIXIN && <Projects />}
      
      <Fastfun />
      
      <View className="home-information-container">
        <Image className="home-infomation-img" src={IMGCDNURL + 'notice.png'} />
        <View className="home-infomation-news">
          <SwiperNews data={notice} />
        </View>
      </View>
      
      <View className="home-all-lists">
        
        <View className="home-lists-item">
          <View className="home-lists-item-header">
            <Text className="home-lists-item-title">最新招工信息</Text>
            <Text className="home-lists-item-more" onClick={() => tabbarJump(RECRUIT)}>更多</Text>
          </View>
          <RecruitList data={lists.recruit} bottom={false} hasMore={true} />
        </View>
        
        <View className="home-lists-item">
          <View className="home-lists-item-header">
            <Text className="home-lists-item-title">最新找活信息</Text>
            <Text className="home-lists-item-more" onClick={() => tabbarJump(RESUME)}>更多</Text>
          </View>
          <ResumeList data={lists.resume} bottom={false} hasMore={true} />
        </View>
        
        <View className="home-lists-item">
          <View className="home-lists-item-header">
            <Text className="home-lists-item-title">最新二手交易信息</Text>
            <Text className="home-lists-item-more" onClick={() => tabbarJump(USED)}>更多</Text>
          </View>
          <UsedList data={lists.fleamarket} bottom={false} hasMore={true} />
        </View>
      </View>
      <Image className="fixed-publish-recruit" src={`${IMGCDNURL}fixed-publishrecruit.png`} onClick={() => userRouteJump(PUBLISHRECRUIT)} />
      
      <About />
      {shwoCity && <HomeCity show={shwoCity} setAreaInfo={(val, id) => setAreaInfo(val, id)} closeDrawer={() => setShowCity(!shwoCity)} />}
    </View>;
  }

}