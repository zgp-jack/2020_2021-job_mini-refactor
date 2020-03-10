import Taro from '@tarojs/taro'
import { View, Input, Text, Image } from '@tarojs/components'
import { AllAreasDataItem } from '../../utils/request/index.d'
import { MAXCACHECITYNUM } from '../../config'
import { HistoryCities } from '../../config/store'
import './index.scss'
import { IMGCDNURL } from '../../config'

export interface IPROPS {
  data: AllAreasDataItem[][],
  hot?: boolean,
  onUserTapCity?: ()=>void
}

export default function Cities({ data = [], hot = false, onUserTapCity }: IPROPS){
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
  
  return (
    <View className='citiesbox'>
      <View className='city-header'>
        <View className='city-header-input'>
          <Input placeholder='请输入城市名' />
          <Image className='city-header-clear' src={ IMGCDNURL + 'clear-input.png' } />
        </View>
        <Text className='city-header-close'>取消</Text>
      </View>
      <View className='city-area-tips'>当前选择城市：北京</View>
      <View className='city-area-container'>
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
    </View>
  ) 
}