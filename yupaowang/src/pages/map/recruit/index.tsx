import Taro, { useEffect, useState, useContext } from '@tarojs/taro'
import { View } from '@tarojs/components'
import MapComponent from '../index'
import { Areas } from '../../../config/store'
import { getAllAreas } from '../../../utils/request'
import { AllAreasDataItem } from '../../../utils/request/index.d'
import { getAmapPoiList } from '../../../utils/helper'
import { context } from '../../recruit/publish'

export default function RecruitMap(){

  const { area } = useContext(context)
  // 城市数据
  const [areas, setAreas] = useState<AllAreasDataItem[][]>([])
  // 获取城市ad_name
  const [areaName, setAreaName] = useState<string>(area)

  // 获取关键词地区列表
  useEffect(()=>{
    let lists = getAmapPoiList(areaName)
    console.log(lists)
  },[areaName])

  // 获取成熟数据
  useEffect(()=>{
    let areas: AllAreasDataItem[][] = Taro.getStorageSync(Areas)
    if (areas) setAreas(areas)
    else getAllAreas().then(res => {
      // 存入缓存
      Taro.setStorageSync(Areas, res)
      setAreas(res)
    })
    
  },[])

  return (
    <View>
      <MapComponent 
        data={ areas }
      />
    </View>
  )
}