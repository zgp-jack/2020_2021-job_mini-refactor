import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import AREAS from '../../models/area'
import './index.scss'

export interface CityTownPicker {
  id: string,
  pid: string,
  name: string
}

export default function CityPicker({ onCity, modle}) {
  //城市初始化数据
  const [cityPickerData, setCityPickerData] = useState<CityTownPicker[][]>([])
  //选中的城市数据
  const [selectCity, setSelectCity] = useState <CityTownPicker[]>([])
  // 选择城市显示样式
  const [length, setLength] = useState<number>(0)
  //默认选中
  const [selectCityIndex, setSelectCityIndex] = useState <number[]>([0,0])


  useEffect(() => {
    setLength(selectCity.length)
  }, [selectCity])
  // cityi是选中的省的index
  const initCityData = (cityi: number) => {
    let copyArr = JSON.parse(JSON.stringify(AREAS))
    copyArr.splice(0, 1) // 切掉第一项 全国数据
    let parentArr: CityTownPicker[] = []
    let childArr: CityTownPicker[][] = []
    for (let i = 0; i < copyArr.length; i++) {
      let item = copyArr[i]
      let data: CityTownPicker = {
        id: item.id,
        pid: item.pid,
        name: item.name
      }
      parentArr.push(data)
      if (item.has_children) {
        let itemArr = item.children.map(({ id, pid, name }) => ({ id, pid, name }))
        childArr.push(itemArr) 
      } else {
        childArr.push([data])
      }
    }
    let pickerCity: CityTownPicker[][] = []
    pickerCity[0] = parentArr
    pickerCity[1] = childArr[cityi]
    // 设置初始化数据
    setCityPickerData(pickerCity)
  }
  


  //点击确定
  const onChange = (e) => {
    let cityData: CityTownPicker[] = []
    cityData[0] = cityPickerData[0][e.detail.value[0]]
    cityData[1] = cityPickerData[1][e.detail.value[1]]
    setSelectCity(cityData)
    onCity(cityData)
    console.log("cityData", cityData)
  }
  //发生改变
  const onColumnChange = (e) => {
    // console.log(e.detail)

    //如果是省发生改变
    if (e.detail.column == 0) {
      initCityData(e.detail.value)
    }
  }


  useEffect(() => {
    initCityData(0)
    
    if (modle.province_id || modle.city_id){
      for (let i = 0; i < cityPickerData[0].length;i++) {
        if (modle.province_id == cityPickerData[0][i].id){
          initCityData(i)
          let copyArr = JSON.parse(JSON.stringify(AREAS))
          copyArr.splice(0, 1) // 切掉第一项 全国数据
          for(let n = 0;n<copyArr[i].children.length;n++){
            if (copyArr[i].children[n].id == modle.city_id){
              setSelectCityIndex([i,n])


              let cityData: CityTownPicker[] = []
              cityData[0] = cityPickerData[0][i]
              cityData[1] = copyArr[i].children[n]
              setSelectCity(cityData)
              onCity(cityData)
            }
          }
        }
      }
    }
  }, [modle.province_id])

  return (
    <View>
      <Picker
        mode="multiSelector"
        range={cityPickerData}
        rangeKey='name'
        value={selectCityIndex}
        onChange={(e) => { onChange(e) }}
        onColumnChange={(e) => { onColumnChange(e) }}
      >
        <View className={length == 0 ? "nodata-picker-input" : "data-picker-input"}>{selectCity.length > 0 ? (selectCity[0].id == selectCity[1].id ? selectCity[0].name:(selectCity[0].name ? selectCity[0].name + '-' + selectCity[1].name : '')) : '请选择招工城市'}</View>
      </Picker>
    </View>
  )
}
