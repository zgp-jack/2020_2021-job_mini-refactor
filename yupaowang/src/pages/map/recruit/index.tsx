import Taro, { useEffect, useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import MapComponent from '../index'
import { Areas } from '../../../config/store'
import { getAllAreas } from '../../../utils/request'
import { AllAreasDataItem } from '../../../utils/request/index.d'

export default function RecruitMap(){

  // 城市数据
  const [areas, setAreas] = useState<AllAreasDataItem[][]>([])

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
      <MapComponent data={ areas } />
    </View>
  )
}