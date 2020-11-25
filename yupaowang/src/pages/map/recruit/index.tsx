import Taro, { Config, useEffect, useState, RouterInfo, useRouter } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import { getAllAreas, checkAdcodeValid } from '../../../utils/request'
import { AllAreasDataItem } from '../../../utils/request/index.d'
import { IMGCDNURL, UserPublishAreaHistoryMaxNum } from '../../../config'
import Cities from '../../../components/citys'
import { Areas, UserLocationCity, UserPublishAreaHistory, UserLocation} from '../../../config/store'
import { UserLocationPromiss, getCityInfo, ChildItems } from '../../../models/area'
import { getAmapPoiList } from '../../../utils/helper'
import { InputPoiListTips } from '../../../utils/helper/index.d'
import Msg, { ShowActionModal } from '../../../utils/msg'
import './index.scss'
import { useSelector, useDispatch } from '@tarojs/redux'
import { setAreaInfo, setArea, setPositionStaus } from '../../../actions/recruit'//获取发布招工信息action
import { AreaData } from '../../recruit/index.d'


const PI = Math.PI;  // 数学 PI 常亮
let EARTH_RADIUS = 6378137.0; // 地球半径

export default function RecruitMap(){
  // 获取路由参数
  const router: RouterInfo = useRouter()
  const id: string = router.params.id || ''
  // 城市数据
  const [areas, setAreas] = useState<AllAreasDataItem[][]>([])
  // 定位城市
  // 获取redux中区域名称数据
  const area: AreaData = useSelector<any, AreaData>(state=>state.MyArea)
  // 获取redux中定位状态
  const positionStatus:boolean = useSelector<any,boolean>(state=>state.PositionStatus)
  // 获取dispatch分发action
  const dispatch = useDispatch()

  // 获取城市数据
  useEffect(()=>{
    let areas: AllAreasDataItem[][] = Taro.getStorageSync(Areas)
    if (areas) setAreas(areas)
    else getAllAreas().then(res => {
      // 存入缓存
      Taro.setStorageSync(Areas, res)
      setAreas(res)
    })
    
  },[])

  // 用户定位城市
  const [userLoc, setUserLoc] = useState<AllAreasDataItem>({
    id: '',
    pid: '',
    city: '',
    ad_name: ''
  })
  // 是否显示城市
  const [showCity, setShowCity] = useState<boolean>(false)
  // 详细地址的输入框
  const [smAreaText, setSmAreaText] = useState<string>('')
  // 关键词地区列表
  const [lists, setLists] = useState<InputPoiListTips[]>([])
  // 关键词地区列表的历史记录
  const [histroyList, setHistoryList] = useState<InputPoiListTips[]>([])
  // 显示关键词列表还是历史记录
  const [showHistory, setShowHistory] = useState<boolean>(false)
  

  // 初始化用户定位信息
  const initUserLocationCity = () => {
    // 获取用户定位数据
    let userLoc: UserLocationPromiss = Taro.getStorageSync(UserLocationCity)
    // 如果定位
    if (userLoc) {
      let data: ChildItems = getCityInfo(userLoc, 1)
      let userLocData: AllAreasDataItem = {
        id: data.id,
        pid: data.pid,
        ad_name: data.ad_name,
        city: data.name
      }
      if(!id){
        if (positionStatus) {
          dispatch(setArea({ name: data.name, ad_name: data.ad_name }))
          dispatch(setPositionStaus(false))
        }
      }
      setUserLoc(userLocData)
    }
    
  }

  // 初始化所需数据
  useEffect(() => {
    initUserLocationCity()
    initUserPublishAreaHistory()
  }, [])

  // 用户点击取消 返回上一页
  const userCloseMap = () => {
    Taro.navigateBack()
  }

  const getRad = (d) => {
    return parseFloat(d) * PI / 180.0
  }

  // 根据经纬度计算距离
  const getGreatCircleDistance = (l: string, loc: string): string => {
    if(!l) return ''
    let arr1 = l.split(",")
    let arr2 = loc.split(",")
    let radLat1 = getRad(arr1[0])
    let radLat2 = getRad(arr2[0])
    let a = radLat1 - radLat2
    let b = getRad(arr1[1]) - getRad(arr2[1])
    let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)))
    s = s * EARTH_RADIUS
    s = parseInt((Math.round(s * 10000) / 10000.0).toFixed(2))
    let distance: string = (s < 1000) ? s + "米" : (s / 1000).toFixed(1) + "千米"
    return distance
  }

  // 获取关键词地区列表
  useEffect(() => {
    getAmapPoiList(area.ad_name + smAreaText).then(data => {
      let loc: string = Taro.getStorageSync(UserLocation)
      let lists: InputPoiListTips[] = data.filter(item => {
        return item.name && item.adcode && (typeof item.location === 'string')
      })
      lists.forEach(item => {
        item.distance = getGreatCircleDistance(loc, item.location)
        item.cityName = data[0].name.slice(0,2)
        item.ad_name = area.ad_name
      })
      setLists(lists)
    })

  }, [smAreaText, area])

  // 用户点击城市选择
  const userTapCityBtn = (b: boolean) => {
    setShowCity(b)
    setShowHistory(false)
  }

  // 用户输入小地区名字
  const userEnterPosition = (e: any) => {
    let value: string = e.detail.value;
    setSmAreaText(value)
    setShowHistory(value ? false : true)
  }

  // 小地址存入缓存，生成历史记录
  const setUserPublishAreaHistoryItem = (item: InputPoiListTips) => {
    let userPublishAreaHistory: InputPoiListTips[] = Taro.getStorageSync(UserPublishAreaHistory)
    if (userPublishAreaHistory) {
      let isset: number = userPublishAreaHistory.findIndex(data => {
        return data.location === item.location && data.name === item.name && data.adcode == item.adcode
      })
      userPublishAreaHistory.unshift(item)
      if (isset !== -1) {
        userPublishAreaHistory.splice(isset, 1)
      }
      userPublishAreaHistory.splice(UserPublishAreaHistoryMaxNum)
      setHistoryList(userPublishAreaHistory)
      Taro.setStorageSync(UserPublishAreaHistory, userPublishAreaHistory)
    } else {
      setHistoryList([item])
      Taro.setStorageSync(UserPublishAreaHistory, [item])
    }
  }

  // 初始化用户点击小地区的历史记录
  const initUserPublishAreaHistory = () => {
    let userPublishAreaHistory: InputPoiListTips[] = Taro.getStorageSync(UserPublishAreaHistory) || []
    setHistoryList(userPublishAreaHistory)
  }

  // 用户点击输入框
  const userClickInputAction = (e: any) => {
    let value: string = e.detail.value;
    if (value) return
    setShowHistory(true)
  }
  // 用户点击输入框后面的×关闭当前窗口
  const closeHistoryClient = () => {
    setShowHistory(false)
    setSmAreaText('')
  }
  // 用户选择小地区 检测adcode
  const userClickAreaItem = (item: InputPoiListTips) => {
    checkAdcodeValid(item.adcode).then(res => {
      if (res.errcode == "ok") {
        if (setAreaInfo) {
          setUserPublishAreaHistoryItem(item)
          dispatch(setAreaInfo({
            title: item.name,
            location: item.location,
            adcode: item.adcode,
            info: item.district,
          })) 
          dispatch(setArea({ name: item.cityName, ad_name: (item.ad_name as string) })) 
        }
        Taro.navigateBack()
      }
      else ShowActionModal({ msg: res.errmsg })
    }).catch(() => {
      Msg("网络错误，请求失败！")
    })
  }

  return (
    <View className='publishrecruit-container'>
        <View className='mapinfo-header'>
          <View className='mapinfo-header-area' onClick={() => userTapCityBtn(true)}>{area.name}</View>
          <View className='mapinfo-header-inputbox'>
            <Input
              className='mapinfo-header-input'
              onClick={(e) => userClickInputAction(e)}
              onInput={(e) => userEnterPosition(e)}
              placeholder='请输入您的详细地址'
              value={smAreaText}
            />
            <Text className='at-icon at-icon-close mapinfo-header-clear' onClick={() => closeHistoryClient()}></Text>
          </View>
          <Text className='mapinfo-header-close' onClick={() => userCloseMap()}>取消</Text>
        </View>
        <View className='mapinfo-container'>
          <View className='location-lists'>
            {showHistory && <View className='history-title'>历史记录</View>}
            {showHistory ?
              histroyList.map((item, index) => (
                <View className='location-list-item' key={index + index} onClick={() => userClickAreaItem(item)}>
                  <View className='location-list-header overwords'>
                    {item.name}
                    <Text>{item.distance}</Text>
                  </View>
                  <View className='location-list-content'>{item.district}</View>
                </View>
              )) :
              lists.map((item, index) => (
                <View className='location-list-item' key={index + index} onClick={() => userClickAreaItem(item)}>
                  <View className='location-list-header overwords'>
                    {item.name}
                    <Text>{item.distance}</Text>
                  </View>
                  <View className='location-list-content'>{item.district}</View>
                </View>
              ))
            }
            {(showHistory ? !histroyList.length : !lists.length) &&
              <View className='location-nodata'>
                <Image className='location-nodata-img' src={IMGCDNURL + 'nodata.png'} />
                <View className='location-nodata-text'>暂无数据</View>
              </View>
            }
          </View>
        </View>

        {/* 展示城市数据 */}
        {showCity &&
          <View className='mapinfo-citys'>
            <Cities
              data={areas}
              area={area.name}
              userLoc={userLoc}
              userTapCityBtn={userTapCityBtn}
            />
          </View>
        }
    </View>
  )
}

RecruitMap.config = {
  navigationBarTitleText: '选择发布地址'
} as Config