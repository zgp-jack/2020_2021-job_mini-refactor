import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Input, Text, Image, Block } from '@tarojs/components'
import { AllAreasDataItem, AllAreasInputDataItem } from '../../utils/request/index.d'
import { MAXCACHECITYNUM, IMGCDNURL } from '../../config'
import { HistoryCities, Areas } from '../../config/store'
import AREAS, { ChildItems } from '../../models/area'
import { objDeepCopy } from '../../utils/helper'
import './index.scss'

export interface IPROPS {
  data: AllAreasDataItem[][],
  parent?: boolean,
  hot?: boolean,
  onUserTapCity?: ()=>void,
  onUserTapInputCity?: ()=>void,
  showInputCityList?: boolean
}

export default function Cities({ 
  data = [], 
  hot = false, 
  onUserTapCity, 
  parent = false, 
  onUserTapInputCity,
  showInputCityList = false
}: IPROPS){
  
  const [inputCity, setInputCity] = useState<AllAreasInputDataItem[]>([])
  const [saveAreaData, setSaveAreaData] = useState<AllAreasInputDataItem[]>([])
  
  // 用户点击城市
  const userTapCity = (city: AllAreasDataItem)=> {
    let historyCities: AllAreasDataItem[] = Taro.getStorageSync(HistoryCities)
    if(historyCities){
      let id = city.id
      let result = historyCities.findIndex(item=>item.id === id)
      if(result !== -1) historyCities.splice(result,1)
      historyCities.unshift(city)
      historyCities.splice(MAXCACHECITYNUM)
    }else{
      historyCities = [city]
    }
    // 储存最新的用户点击历史城市数据
    Taro.setStorageSync(HistoryCities,historyCities)
    onUserTapCity && onUserTapCity()
  }

  // 用户点击搜索数据
  const userTapInputCity = (item: AllAreasInputDataItem)=> {
    delete item['city_name']
    userTapCity(item)
    onUserTapInputCity && onUserTapInputCity()
  }

  // 初始化城市数据
  useEffect(()=>{
    let areaObj: AllAreasInputDataItem[] = []
    AREAS.shift()
    AREAS.map(item=>{
      let child = item.has_children
      if(child){
        let childData = item.children
        for(let i = 0; i < childData.length; i++){
          if(!parent){
            if(i === 0) continue
          }
          let obj: AllAreasInputDataItem = {
            id: childData[i].id,
            pid: childData[i].pid,
            city: childData[i].name,
            ad_name: childData[i].ad_name,
            city_name: item.name + '-' + childData[i].name
          }
          areaObj.push(obj)
        }
      }else{
        let obj: AllAreasInputDataItem = {
          id: item.id,
          pid: item.pid,
          city: item.name,
          ad_name: item.ad_name,
          city_name: item.name
        }
        areaObj.push(obj)
      }
    })
    setInputCity(areaObj)
    setSaveAreaData(areaObj)
  },[])

  const userEnterCity = (e: any)=> {
    let val = e.detail.value
    let newData = saveAreaData.filter(item=>item.city_name.indexOf(val) !== -1)
    setInputCity(newData)
  }
  
  
  return (
    <View className='citiesbox'>
      <View className='city-header'>
        <View className='city-header-input'>
          <Input placeholder='请输入城市名' onInput={(e)=>userEnterCity(e)} />
          <Image className='city-header-clear' src={ IMGCDNURL + 'clear-input.png' } />
        </View>
        <Text className='city-header-close'>取消</Text>
      </View>
      <View className='city-area-tips'>当前选择城市：北京</View>
      <View className='city-area-container'>

        {/* 当前定位、热门城市 */}
        <View className='city-area-item'>
          <View className='city-area-title'>当前定位城市/最近访问</View>
          <View className='city-area-content clearfix'>
            <View className='city-item'>
              <View className='city-item-posi'>
                <Image className='city-item-img' src={IMGCDNURL + 'gps-posi.png'} />
                测试测
              </View>
            </View>
          </View>
        </View>

        {/* 成熟数据列表 */}
        {data.map((item, index)=>(
          <View className='city-area-item' key={index+item[0].id}>
            <View className='city-area-title'>{ item[0].city }</View>
            <View className='city-area-content clearfix'>
              {item.map((d, key)=>(
                <View className='city-item' key={ key+d.id } onClick={()=>userTapCity(d)}>
                  <Text className='city-item-text overwords'>{ d.city }</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* input 数据列表 */}
      {showInputCityList &&
      <View className='inputlist'>
        {inputCity.map((item)=>(
          <View className='input-list-item' onClick={() => userTapInputCity(item)} key={item.id}>{item.city_name}</View>
        ))}
      </View>
      }

    </View>
  ) 
}