import Taro, { Config, useEffect, useState, useContext } from '@tarojs/taro'
import { View, Picker, Text, Input } from '@tarojs/components'
import { jobTopConfigAction, jobDoTopAction } from '../../utils/request/index'
import { jobTopConfigData } from '../../utils/request/index.d'
import Msg, { ShowActionModal } from '../../utils/msg'
import { SERVERPHONE,  } from '../../config'
import { UserInfo } from '../../config/store'
import { context } from './distruction/index'
import './index.scss'

interface DataType {
  top_rules:[],
}
interface CityType {
  max_city:number,
  max_province:number,
}
interface User {
  userId: number,
  tokenTime: number,
  token: string,
  uuid: string,
  login: boolean
}
export default function Topping() {
  // 获取userInfo
  let userInfo: User = Taro.getStorageSync(UserInfo)
  const [data, setData] = useState<DataType>({
    top_rules:[],
  })
  // 积分
  const [num,setNum] = useState<number>(0)
  // 天
  const [paramsDay,setParamsDay]= useState<number>(0)
  //置顶天数
  const [day,setDay] = useState<string>('请选择置顶天数')
  // 下拉框总参数
  const [list,setList]= useState<string[]>([])
  // 最大省市
  const [city, setCity] = useState<CityType>({
    max_city:0,
    max_province:0
  })
  // 置顶范围
  // const [params, setParams] = useContext(context)
  // console.log(params,'params')
  useEffect(()=>{
    // if (context){
      
    // }
    jobTopConfigAction().then(res=>{
      console.log(res);
      setData({ top_rules:res.data.top_rules})
      setCity({ max_city: res.data.max_city, max_province:res.data.max_province})
      let array:string[] = []
      for (let i = 0; i < res.data.max_top_days; i++) {
        array.push(i + 1 + "天")
      }
      setList(array)
    })
  },[])
  const handleClick = (e:any)=>{
    // for(let i=0;i<list.length;i++){
    //   console.log(list[e])
    // }
    setDay(list[e.detail.value])
    setParamsDay((parseInt(e.detail.value)+1))
  }
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  // 置顶
  const handleTopping = ()=>{
    const detail = {
      mid: userInfo.userId,
      province_ids:'',
      city_ids:'',
      day: paramsDay,
      job_id:'',
      time: userInfo.tokenTime
    }
    return;
    jobDoTopAction(detail).then(res=>{
      console.log(res);
    })
  }
  // console.log(params,'xxxx');
  return(
    <View className='topping'>
      <View className='topping-title'>当前选择置顶范围：</View>
      {}
      <View className='topping-change-btnBox' onClick={() => userRouteJump(`/pages/topping/distruction/index?max_city=${city.max_city}&max_province=${city.max_province}`)}><View className='topping-change-btnBox-btn'>点击选择置顶范围></View></View>
      <View className='topping-day'>请选择置顶天数：</View>
      <View className='topping-input-box'>
        <View className='topping-input-box-list'>置顶天数:
        {/* <Input className='topping-input-box-list-input' placeholder='请选择置顶天数'/> */}
          <Picker mode='selector' range={list} value={0} onChange={(e) => handleClick(e)}>
            <Text className='topping-input-box-list-input'>{day}</Text>
        </Picker>
        </View>
        <View className='topping-input-box-list'>消耗积分:<View className='topping-input-box-list-num'>{num}分</View></View>
      </View>
      <View className='topping-confirm-btnBox'><View className='topping-confirm-btnBox-btn' onClick={handleTopping}>确定置顶</View></View>
      <View>
        <View className='topping-toprule'>置顶规则</View>
        {data.top_rules.map((v,i)=>(
          <View key={i + i} className='topping-toprule-list'>{v}</View>
        ))}
        <View className='topping-toprule-phone' onClick={() => { Taro.makePhoneCall({ phoneNumber: SERVERPHONE }) }}>{SERVERPHONE}</View>
      </View>
    </View>
  )
}


Topping.config = {
  navigationBarTitleText: '招工置顶',
} as Config