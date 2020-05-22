import Taro, { Config, useEffect, useState, useContext, createContext,useRouter } from '@tarojs/taro'
import { View, Picker, Text, Image } from '@tarojs/components'
import { jobTopConfigAction, jobDoTopAction } from '../../utils/request/index'
import { jobTopConfigData } from '../../utils/request/index.d'
import Msg, { ShowActionModal } from '../../utils/msg'
import { SERVERPHONE, IMGCDNURL  } from '../../config'
import { UserInfo } from '../../config/store'
import './index.scss'

interface Distruction{
  AreParams: ParamsType,
  setAreParams: (city: areDataChildrenType[], province: areDataChildrenType[]) => void,
}
interface ParamsType {
  city: areDataChildrenType[],
  province: areDataChildrenType[],
}
interface areDataChildrenType {
  ad_name: string
  id: string
  name: string
  pid: string,
  click: boolean,
  listName?: string
}
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
export const context = createContext<Distruction>({} as Distruction)

export default function Topping() {
  const router: Taro.RouterInfo = useRouter();
  let { id } = router.params;
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
  const [params, setParams] = useState<ParamsType>({
    city: [],
    province: [],
  })
  useEffect(()=>{
    jobTopConfigAction().then(res=>{
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
    setDay(list[e.detail.value])
    setParamsDay((parseInt(e.detail.value)+1))
    if(params){
      const numData = (params.city.length * 10 + params.province.length * 20) * (parseInt(e.detail.value)+1);
      setNum(numData);
    }
  }
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  // 置顶
  const handleTopping = ()=>{
    const province_ids = params.province.map((v)=>v.id);
    const city_ids = params.city.map((v) => v.id);
    const detail = {
      mid: userInfo.userId,
      province_ids: province_ids.toString(),
      city_ids: city_ids.toString(),
      day: paramsDay,
      job_id: id,
      time: userInfo.tokenTime
    }
    console.log(detail);
    return;
    jobDoTopAction(detail).then(res=>{
      console.log(res);
      if (res.errcode === 'ok'){
        Taro.showModal({
          title: '温馨提示',
          content: res.errmsg,
          showCancel: false,
          success: () => {
            Taro.navigateBack({
              delta: 1
            })
          }
        })
      }
    })
  }
  const handleAddJump = ()=>{
    userRouteJump(`/pages/topping/distruction/index?max_city=${city.max_city}&max_province=${city.max_province}`)
  }
  // 传递方法
  const transferFun = ({ city, province })=>{
    setParams({ city, province });
    console.log("dsadsdda")
    calcPrice(city,province);
  }

  const calcPrice = (city,province) => {
    if (city && province){
      const numData = (city.length * 10 + province.length * 20) * (paramsDay)
      setNum(numData);
    }
  }
  // 需要传递的值
  const value: Distruction = {
    AreParams: params,
    setAreParams: (city: areDataChildrenType[], province: areDataChildrenType[]) => transferFun({ city, province }),
  }
  // 删除
  const handleDel = (v)=>{
    if(v.pid === '1'){
      params.province.map((val,i)=>{
        if(val.id === v.id){
          params.province.splice(i,1)
        }
      })
      setParams({ city:params.city,province:params.province})
    }else{
      params.city.map((val, i) => {
        if (val.id === v.id) {
          params.city.splice(i, 1)
        }
      })
      setParams({ city: params.city, province: params.province })
    }
    const numData = (params.city.length * 10 + params.province.length * 20) * (paramsDay)
    setNum(numData)
  }
  return(
    <context.Provider value={value}>
    <View className='topping'>
      <View className='topping-title'>当前选择置顶范围：</View>
      <View className='topping-list-box'>
          {params && params.city.map(v=>(
            <View className='topping-list' onClick={() => handleDel(v)}>
            {v.name}
            <Image src={`${IMGCDNURL}lpy/delete.png`} className='topping-list-image' />
          </View>
        ))}
          {params && params.province.map(v => (
            <View className='topping-list' onClick={() => handleDel(v)}>
            {v.name}
              <Image src={`${IMGCDNURL}lpy/delete.png`} className='topping-list-image' />
          </View>
        ))}
          {(params.city.length || params.province.length)&& (params.city.length< 3 || params.province.length<2) &&
          <View onClick={handleAddJump} className='topping-list-add'>添加更多</View>
        } 
        {!params.city.length && !params.province.length && 
          <View className='topping-change-btnBox' onClick={() => userRouteJump(`/pages/topping/distruction/index?max_city=${city.max_city}&max_province=${city.max_province}`)}><View className='topping-change-btnBox-btn'>点击选择置顶范围></View></View>
        }
      </View>
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
    </context.Provider>
  )
}


Topping.config = {
  navigationBarTitleText: '招工置顶',
} as Config