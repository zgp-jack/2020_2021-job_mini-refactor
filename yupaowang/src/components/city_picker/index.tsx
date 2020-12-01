import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Picker,Input } from '@tarojs/components'
import AREAS from '../../models/area'
import './index.css'

export interface CityTownPicker {
  id: string,
  pid: string,
  name: string
}

export default function CityPicker({onCity}) {
  //城市初始化数据
  const [cityPickerData, setCityPickerData] = useState<CityTownPicker[][]>([])
  //选中的城市数据
  const [selectCity, setSelectCity] = useState <CityTownPicker[]>([])
  let selectCityIndex = [0,0]
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
  },[])

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
        <Input className='city-picker-input' value={selectCity[0].name ? selectCity[0].name + '-' +selectCity[1].name:''} type='text' disabled placeholder='请选择招工城市'/>
      </Picker>
    </View>
  )
}
