import Taro, { useState, useContext, useEffect } from '@tarojs/taro'
import { View, Text, Image, Input, Block } from '@tarojs/components'
import { IMGCDNURL, UserPublishAreaHistoryMaxNum } from '../../../config'
import Cities from '../../../components/citys'
import { UserLocationCity, UserPublishAreaHistory } from '../../../config/store'
import { UserLocationPromiss, getCityInfo, ChildItems } from '../../../models/area'
import { getAmapPoiList } from '../../../utils/helper'
import { InputPoiListTips } from '../../../utils/helper/index.d'
import { context } from '../../recruit/publish'
import { checkAdcodeValid } from '../../../utils/request'
import { AllAreasDataItem } from '../../../utils/request/index.d'
import './index.scss'
import Msg, { ShowActionModal } from '../../../utils/msg'

// interface PROPS extends IPROPS{
//   context: Taro.Context<Injected>
// }
export default function MapComponent({ data }){
  // 用户定位城市
  const [userLoc, setUserLoc] = useState<AllAreasDataItem>({
    id: '',
    pid: '',
    city: '',
    ad_name: ''
  })
  // 是否显示城市
  const [showCity, setShowCity] = useState<boolean>(false)
  // 使用发布招工hook处理数据
  const { area, setArea, setAreaInfo, setPublishArea } = useContext(context)
  // const { area, setArea } = useContext(contextItem);
  // 详细地址的输入框
  const [smAreaText, setSmAreaText] = useState<string>('')
  // 关键词地区列表
  const [lists, setLists] = useState<InputPoiListTips[]>([])
  // 关键词地区列表的历史记录
  const [histroyList, setHistoryList] = useState<InputPoiListTips[]>([])
  // 显示关键词列表还是历史记录
  const [showHistory, setShowHistory] = useState<boolean>(false)

  // 初始化用户定位信息
  const initUserLocationCity = ()=> {
    let userLoc: UserLocationPromiss = Taro.getStorageSync(UserLocationCity)
    if(userLoc){
      let data: ChildItems = getCityInfo(userLoc,1)
      let userLocData: AllAreasDataItem = {
        id: data.id,
        pid: data.pid,
        ad_name: data.ad_name,
        city: data.name
      }
      setArea(data.name)
      setUserLoc(userLocData)
    }
  }

  // 初始化所需数据
  useEffect(()=>{
    if(!area) initUserLocationCity()
    initUserPublishAreaHistory()
  },[])

  // 用户切换城市
  const userChangeCity = (city: string)=> {
    setArea(city)
  }

  // 用户点击取消 返回上一页
  const userCloseMap = ()=> {
    Taro.navigateBack()
  }

  // 获取关键词地区列表
  useEffect(() => {
    if (!context) return
    getAmapPoiList(area + smAreaText).then(data=>{
      let lists: InputPoiListTips[] = data.filter(item => {
        return item.name && item.adcode && (typeof item.location === 'string')
      })
      setLists(lists)
    })
    
  }, [smAreaText, area])

  // 用户点击城市选择
  const userTapCityBtn = (b: boolean)=> {
    setShowCity(b)
  }

  // 用户输入小地区名字
  const userEnterPosition = (e: any)=> {
    let value: string = e.detail.value;
    setSmAreaText(value)
    setShowHistory(value ? false : true)
  }

  // 小地址存入缓存，生成历史记录
  const setUserPublishAreaHistoryItem = (item: InputPoiListTips)=> {
    let userPublishAreaHistory: InputPoiListTips[] = Taro.getStorageSync(UserPublishAreaHistory)
    if (userPublishAreaHistory){
      let isset: number = userPublishAreaHistory.findIndex(data=>{
        return data.location === item.location && data.name === item.name && data.adcode == item.adcode
      })
      userPublishAreaHistory.unshift(item)
      if(isset !== -1){
        userPublishAreaHistory.splice(isset,1)
      }
      userPublishAreaHistory.splice(UserPublishAreaHistoryMaxNum)
      setHistoryList(userPublishAreaHistory)
    }else{
      setHistoryList([item])
    }
  }
  
  // 初始化用户点击小地区的历史记录
  const initUserPublishAreaHistory = ()=> {
    let userPublishAreaHistory: InputPoiListTips[] = Taro.getStorageSync(UserPublishAreaHistory) || []
    setHistoryList(userPublishAreaHistory)
  }

  // 用户点击输入框
  const userClickInputAction = (e: any)=> {
    let value: string = e.detail.value;
    if(value) return
    setShowHistory(true)
  }

  // 用户选择小地区 检测adcode
  const userClickAreaItem = (item: InputPoiListTips)=> {
    checkAdcodeValid(item.adcode).then(res=>{
      if (res.errcode == "ok"){
        if (setAreaInfo){
          setUserPublishAreaHistoryItem(item)
          setAreaInfo({
            title: item.name,
            location: item.location,
            adcode: item.adcode,
            info: item.district
          })
          setPublishArea && setPublishArea(item.name)
        }
        Taro.navigateBack()
      }
      else ShowActionModal({ msg: res.errmsg })
    }).catch(()=>{
      Msg("网络错误，请求失败！")
    })
  }

  return (
    <Block>
      <View className='mapinfo-header'>
        <View className='mapinfo-header-area' onClick={() => userTapCityBtn(true)}>{ area }</View>
        <View className='mapinfo-header-inputbox'>
          <Input 
            className='mapinfo-header-input' 
            onClick={(e)=>userClickInputAction(e)} 
            onInput={(e) => userEnterPosition(e)} 
            placeholder='请输入您的详细地址' 
            value={ smAreaText } 
          />
          <Text className='at-icon at-icon-close mapinfo-header-clear'></Text>
        </View>
        <Text className='mapinfo-header-close' onClick={() => userCloseMap()}>取消</Text>
      </View>
      <View className='mapinfo-container'>
        <View className='location-lists'>
          {showHistory && <View className='history-title'>历史记录</View>}
          {showHistory ? 
          histroyList.map((item, index)=>(
            <View className='location-list-item' key={index+index} onClick={() => userClickAreaItem(item)}>
              <View className='location-list-header overwords'>
              { item.name }
              <Text>3.2km</Text>
              </View>
            <View className='location-list-content'>{ item.district }</View>
            </View>
          )) : 
          lists.map((item, index) => (
            <View className='location-list-item' key={index+index} onClick={() => userClickAreaItem(item)}>
              <View className='location-list-header overwords'>
                {item.name}
                <Text>3.2km</Text>
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
      {showCity&&
      <View className='mapinfo-citys'>
        <Cities 
          data={ data } 
          area={ area }
          userLoc={ userLoc }
          userChangeCity={ userChangeCity }
          userTapCityBtn={ userTapCityBtn }
        />
      </View>
      }
    </Block>
  )
}