import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import AREAS from '../../models/area'
import './index.css'

interface CityTownPicker {
  id: string,
  pid: string,
  name: string
}

export default function CityPicker() {
  const [cityPickerData, setCityPickerData] = useState<CityTownPicker[][]>([])

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
    console.log(e.detail.value)
    debugger
  }
  //发生改变
  const onColumnChange = (e) => {
    if (e.detail.column == 0) initCityData(e.detail.value)
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
        value={[]}
        onChange={(e) => { onChange(e) }}
        onColumnChange={(e) => { onColumnChange(e) }}
      >
        当前选择
      </Picker>
    </View>
  )
}