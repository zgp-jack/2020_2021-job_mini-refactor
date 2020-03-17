import Taro, { useState, useContext, useEffect } from '@tarojs/taro'
import { View, Text, Image, Input, Block } from '@tarojs/components'
import { IMGCDNURL } from '../../../config'
import Cities from '../../../components/citys'
import { IPROPS } from '../../../components/citys'
import { UserLocationCity } from '../../../config/store'
import { UserLocationPromiss, getCityInfo, ChildItems } from '../../../models/area'
import { context } from '../../recruit/publish'
import { AllAreasDataItem } from '../../../utils/request/index.d'
import './index.scss'

interface PROPS extends IPROPS{
  
}


export default function MapComponent({ data }: PROPS){

  // 用户定位城市
  const [userLoc, setUserLoc] = useState<AllAreasDataItem>({
    id: '',
    pid: '',
    city: '',
    ad_name: ''
  })

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

  useEffect(()=>{
    initUserLocationCity()
  })

  // 使用发布招工hook处理数据
  const { area, setArea } = useContext(context)

  // 用户切换城市
  const userChangeCity = (city: string)=> {
    setArea(city)
  }

  // 是否显示城市
  const [showCity, setShowCity] = useState<boolean>(false)
  
  // 详细地址的输入框
  const [smAreaText, setSmAreaText] = useState<string>('')
  // 用户点击取消 返回上一页
  const userCloseMap = ()=> {
    Taro.navigateBack()
  }

  // 用户点击城市选择
  const userTapCityBtn = (b: boolean)=> {
    setShowCity(b)
  }

  // 用户输入小地区名字
  const userEnterPosition = (e: any)=> {
    let value: string = e.detail.value;
    setSmAreaText(value)
  }

  return (
    <Block>
      <View className='mapinfo-header'>
        <View className='mapinfo-header-area' onClick={() => userTapCityBtn(true)}>{ area }</View>
        <View className='mapinfo-header-inputbox'>
          <Input className='mapinfo-header-input' onInput={(e) => userEnterPosition(e)} placeholder='请输入您的详细地址' value={ smAreaText } />
          <Text className='at-icon at-icon-close mapinfo-header-clear'></Text>
        </View>
        <Text className='mapinfo-header-close' onClick={() => userCloseMap()}>取消</Text>
      </View>
      <View className='mapinfo-container'>
        <View className='location-lists'>
          <View className='location-list-item'>
            <View className='location-list-header overwords'>
              北京市天安门广场
              <Text>3.2km</Text>
            </View>
            <View className='location-list-content'>这里有很多很多的介绍文字</View>
          </View>
        </View>
        <View className='location-nodata'>
          <Image className='location-nodata-img' src={ IMGCDNURL + 'nodata.png' } />
          <View className='location-nodata-text'>暂无数据</View> 
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