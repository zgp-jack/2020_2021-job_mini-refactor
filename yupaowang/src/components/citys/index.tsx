import Taro, { useEffect, useState } from '@tarojs/taro'
import { View, Input, Text, Image } from '@tarojs/components'
import { AllAreasDataItem, AllAreasInputDataItem } from '../../utils/request/index.d'
import { MAXCACHECITYNUM, IMGCDNURL } from '../../config'
import { HistoryCities } from '../../config/store'
import AREAS from '../../models/area'
import { objDeepCopy } from '../../utils/helper'
import './index.scss'

export interface IPROPS {
  data: AllAreasDataItem[][],
  parent?: boolean,
  hot?: boolean
}

export interface CitiesProps extends IPROPS {
  userTapCityBtn: (b: boolean) => void, // 显示关闭操作
  area: string,  // 当前选择城市
  userChangeCity?: (city: string)=> void,
  userLoc: AllAreasDataItem
}

export default function Cities({ 
  data = [], 
  parent = false, 
  userTapCityBtn,
  userChangeCity,
  area,
  userLoc
}: CitiesProps){

  // 最近访问城市数据
  const [recentlyCities, setRecentlyCities] = useState<AllAreasDataItem[]>([])
  // 是否显示input过滤城市
  const [show ,setShow] = useState< boolean>(false)
  // 输入框内容
  const [text, setText] = useState<string>('')
  const [inputCity, setInputCity] = useState<AllAreasInputDataItem[]>([])
  const [saveAreaData, setSaveAreaData] = useState<AllAreasInputDataItem[]>([])

  // 用户点击城市
  const userTapCity = (city: AllAreasDataItem)=> {
    let historyCities: AllAreasDataItem[] = Taro.getStorageSync(HistoryCities)
    if(historyCities){
      let id: string = city.id
      let result: number = historyCities.findIndex(item=>item.id === id)
      if(result !== -1) historyCities.splice(result,1)
      historyCities.unshift(city)
      historyCities.splice(MAXCACHECITYNUM)
    }else{
      historyCities = [city]
    }
    // 储存最新的用户点击历史城市数据
    Taro.setStorageSync(HistoryCities,historyCities)
    userChangeCity && userChangeCity(city.city)
    userTapCityBtn(false)
    //userRecentlyCities()
  }

  // 用户点击搜索数据
  const userTapInputCity = (item: AllAreasInputDataItem) => {
    setShow(false)
<<<<<<< HEAD
    delete item['city.name']
=======
    //delete item['city_name']
>>>>>>> c072571a04006bd73d54569f9aa05d6941303506
    userTapCity(item)
  }

  // 用户最新选择城市
  const userRecentlyCities = ()=> {
    let historyCities: AllAreasDataItem[] = Taro.getStorageSync(HistoryCities)
    if (historyCities){
      if(userLoc.id){
        historyCities.splice(MAXCACHECITYNUM - 1)
        setRecentlyCities(historyCities)
        return
      }
    }
    setRecentlyCities([])
  }

  // 初始化城市数据
  useEffect(()=>{
    // 初始化用户定位城市
    userRecentlyCities()
    let copyArr = objDeepCopy(AREAS)
    let areaObj: AllAreasInputDataItem[] = []
    copyArr.shift()
    copyArr.map(item=>{
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
    let val: string = e.detail.value
    setText(val)
    const newData: AllAreasInputDataItem[] = saveAreaData.filter(item=>item.city_name.indexOf(val) !== -1)
    setInputCity(newData)
  }
  
  // 输入框获取焦点
  const onInputFocus = ()=> {
    setShow(true)
  }

  // 用户清空输入框内容
  const userClearContent = ()=> {
    setText('')
    setShow(false)
  }
  
  return (
    <View className='citiesbox'>
      <View className='city-header'>
        <View className='city-header-input'>
          <Input placeholder='请输入城市名' onFocus={() => onInputFocus()} onInput={(e) => userEnterCity(e)} value={ text } />
          <Image className='city-header-clear' onClick={()=>userClearContent()} src={ IMGCDNURL + 'clear-input.png' } />
        </View>
        <Text className='city-header-close' onClick={() => userTapCityBtn(false)}>取消</Text>
      </View>
      <View className='city-area-tips'>当前选择城市：{ area }</View>
      <View className='city-area-container'>

        {/* 当前定位、热门城市 */}
        <View className='city-area-item'>
          <View className='city-area-title'>当前定位城市/最近访问</View>
          <View className='city-area-content clearfix'>
            {userLoc.id &&
            <View className='city-item'>
              <View className='city-item-posi'>
                <Image className='city-item-img' src={IMGCDNURL + 'gps-posi.png'} />
                {userLoc.city}
              </View>
            </View>
            }
            {recentlyCities.map((item) => (
              <View className='city-item' key={ 'rec' + item.id } onClick={() => userTapCity(item)}>
                <Text className='city-item-text overwords'>{item.city}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 城市数据列表 */}
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
      {show &&
      <View className='inputlist'>
        {inputCity.length ? 
          inputCity.map((item)=>(
            <View className='input-list-item' onClick={() => userTapInputCity(item)} key={item.id}>{item.city_name}</View>
          ))
        :
          <View className='notsearchdata'>
            <Image className='notimg' src={IMGCDNURL + 'nodata.png'} />
            <Text className='nottext'>暂无数据</Text>
          </View>
        }
      </View>
      }

    </View>
  ) 
}