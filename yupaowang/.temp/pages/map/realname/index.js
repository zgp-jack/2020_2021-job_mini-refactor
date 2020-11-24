import Nerv from "nervjs";
import Taro, { getStorageSync as _getStorageSync, setStorageSync as _setStorageSync } from "@tarojs/taro-h5";
import { View, Text, Image, Input } from '@tarojs/components';
import { getAllAreas, checkAdcodeValid } from "../../../utils/request/index";
import { IMGCDNURL, UserPublishAreaHistoryMaxNum } from "../../../config/index";
import Cities from "../../../components/citys/index";
import { Areas, UserLocationCity, UserPublishAreaHistory, UserLocation } from '../../../config/store';
import { getCityInfo } from '../../../models/area';
import { getAmapPoiList } from "../../../utils/helper/index";
import Msg, { ShowActionModal } from "../../../utils/msg/index";
import { useSelector } from "@tarojs/redux-h5";
import './index.scss';
const PI = Math.PI; // 数学 PI 常亮
let EARTH_RADIUS = 6378137.0; // 地球半径
// interface UserLastPublishRecruitArea {
//   location: string,
//   adcode: string,
//   title: string,
//   info: string
// }
export default class RealnameMap extends Taro.Component {
  config = {
    navigationBarTitleText: '地址选择'
  };

  render() {
    const setRealnameArea = useSelector(store => store['realname'].setRealnameArea);
    const [area, setArea] = Taro.useState('');
    // 城市数据
    const [areas, setAreas] = Taro.useState([]);
    // 选择详细地址信息
    // const [areaInfo, setAreaInfo] = useState<UserLastPublishRecruitArea>({
    //   title: '',
    //   adcode: '',
    //   location: '',
    //   info: ''
    // })
    // const [location, setLocation] = useState<string>('')
    // 用户定位城市
    const [userLoc, setUserLoc] = Taro.useState({
      id: '',
      pid: '',
      city: '',
      ad_name: ''
    });
    // 是否显示城市
    const [showCity, setShowCity] = Taro.useState(false);
    // 使用发布招工hook处理数据
    // const { area, setArea, setAreaInfo, setPublishArea } = useContext(context)
    // const [publishArea, setPublishArea] = useState<string>('')
    // 详细地址的输入框
    const [smAreaText, setSmAreaText] = Taro.useState('');
    // 关键词地区列表
    const [lists, setLists] = Taro.useState([]);
    // 关键词地区列表的历史记录
    const [histroyList, setHistoryList] = Taro.useState([]);
    // 显示关键词列表还是历史记录
    const [showHistory, setShowHistory] = Taro.useState(false);
    // 设置adcode
    // const [adcode, setAdcode] = useState<string>('')
    // 获取城市数据
    Taro.useEffect(() => {
      let areas = _getStorageSync(Areas);
      if (areas) setAreas(areas);else getAllAreas().then(res => {
        // 存入缓存
        _setStorageSync(Areas, res);
        setAreas(res);
      });
    }, []);
    // 初始化用户定位信息
    const initUserLocationCity = () => {
      let userLoc = _getStorageSync(UserLocationCity);
      if (userLoc) {
        let data = getCityInfo(userLoc, 1);
        let userLocData = {
          id: data.id,
          pid: data.pid,
          ad_name: data.ad_name,
          city: data.name
        };
        setArea(data.name);
        setUserLoc(userLocData);
      }
    };
    // 初始化所需数据
    Taro.useEffect(() => {
      if (!area) initUserLocationCity();
      initUserPublishAreaHistory();
    }, []);
    // 用户切换城市
    const userChangeCity = city => {
      setArea(city);
    };
    // 用户点击取消 返回上一页
    const userCloseMap = () => {
      Taro.navigateBack();
    };
    const getRad = d => {
      return parseFloat(d) * PI / 180.0;
    };
    // 根据经纬度计算距离
    const getGreatCircleDistance = (l, loc) => {
      if (!l) return '';
      let arr1 = l.split(",");
      let arr2 = loc.split(",");
      let radLat1 = getRad(arr1[0]);
      let radLat2 = getRad(arr2[0]);
      let a = radLat1 - radLat2;
      let b = getRad(arr1[1]) - getRad(arr2[1]);
      let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
      s = s * EARTH_RADIUS;
      s = parseInt((Math.round(s * 10000) / 10000.0).toFixed(2));
      let distance = s < 1000 ? s + "米" : (s / 1000).toFixed(1) + "千米";
      return distance;
    };
    // 获取关键词地区列表
    Taro.useEffect(() => {
      getAmapPoiList(area + smAreaText).then(data => {
        let loc = _getStorageSync(UserLocation);
        let lists = data.filter(item => {
          return item.name && item.adcode && typeof item.location === 'string';
        });
        lists.forEach(item => {
          item.distance = getGreatCircleDistance(loc, item.location);
        });
        setLists(lists);
      });
    }, [smAreaText, area]);
    // 用户点击城市选择
    const userTapCityBtn = b => {
      setShowCity(b);
    };
    // 用户输入小地区名字
    const userEnterPosition = e => {
      let value = e.detail.value;
      setSmAreaText(value);
      setShowHistory(value ? false : true);
    };
    // 小地址存入缓存，生成历史记录
    const setUserPublishAreaHistoryItem = item => {
      let userPublishAreaHistory = _getStorageSync(UserPublishAreaHistory);
      if (userPublishAreaHistory) {
        let isset = userPublishAreaHistory.findIndex(data => {
          return data.location === item.location && data.name === item.name && data.adcode == item.adcode;
        });
        userPublishAreaHistory.unshift(item);
        if (isset !== -1) {
          userPublishAreaHistory.splice(isset, 1);
        }
        userPublishAreaHistory.splice(UserPublishAreaHistoryMaxNum);
        setHistoryList(userPublishAreaHistory);
        _setStorageSync(UserPublishAreaHistory, userPublishAreaHistory);
      } else {
        setHistoryList([item]);
        _setStorageSync(UserPublishAreaHistory, [item]);
      }
    };
    // 初始化用户点击小地区的历史记录
    const initUserPublishAreaHistory = () => {
      let userPublishAreaHistory = _getStorageSync(UserPublishAreaHistory) || [];
      setHistoryList(userPublishAreaHistory);
    };
    // 用户点击输入框
    const userClickInputAction = e => {
      let value = e.detail.value;
      if (value) return;
      setShowHistory(true);
    };
    // 用户选择小地区 检测adcode
    const userClickAreaItem = item => {
      checkAdcodeValid(item.adcode).then(res => {
        if (res.errcode == "ok") {
          // setLocation(item.location)
          // setAdcode(item.adcode)
          // if (setAreaInfo) {
          setUserPublishAreaHistoryItem(item);
          // setAreaInfo({
          //   title: item.name,
          //   location: item.location,
          //   adcode: item.adcode,
          //   info: item.district
          // })
          // setPublishArea && setPublishArea(item.name)
          setRealnameArea(item.name);
          // }
          Taro.navigateBack();
        } else ShowActionModal({ msg: res.errmsg });
      }).catch(() => {
        Msg("网络错误，请求失败！");
      });
    };
    return (
      // <contextItem.Provider value={value}>
      <View className="publishrecruit-container">
        <View className="mapinfo-header">
          <View className="mapinfo-header-area" onClick={() => userTapCityBtn(true)}>{area}</View>
          <View className="mapinfo-header-inputbox">
            <Input className="mapinfo-header-input" onClick={e => userClickInputAction(e)} onInput={e => userEnterPosition(e)} placeholder="请输入您的详细地址" value={smAreaText} />
            <Text className="at-icon at-icon-close mapinfo-header-clear"></Text>
          </View>
          <Text className="mapinfo-header-close" onClick={() => userCloseMap()}>取消</Text>
        </View>
        <View className="mapinfo-container">
          <View className="location-lists">
            {showHistory && <View className="history-title">历史记录</View>}
            {showHistory ? histroyList.map((item, index) => <View className="location-list-item" key={index + index} onClick={() => userClickAreaItem(item)}>
                  <View className="location-list-header overwords">
                    {item.name}
                    <Text>{item.distance}</Text>
                  </View>
                  <View className="location-list-content">{item.district}</View>
                </View>) : lists.map((item, index) => <View className="location-list-item" key={index + index} onClick={() => userClickAreaItem(item)}>
                  <View className="location-list-header overwords">
                    {item.name}
                    <Text>{item.distance}</Text>
                  </View>
                  <View className="location-list-content">{item.district}</View>
                </View>)}
            {(showHistory ? !histroyList.length : !lists.length) && <View className="location-nodata">
                <Image className="location-nodata-img" src={IMGCDNURL + 'nodata.png'} />
                <View className="location-nodata-text">暂无数据</View>
              </View>}
          </View>
        </View>

        
        {showCity && <View className="mapinfo-citys">
            <Cities data={areas} area={area} userLoc={userLoc} userChangeCity={userChangeCity} userTapCityBtn={userTapCityBtn} />
          </View>}
      </View>
      // </contextItem.Provider>

    );
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}
RealnameMap.config = { navigationBarTitleText: '地址选择' };