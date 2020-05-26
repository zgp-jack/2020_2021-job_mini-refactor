import Taro, { Config, useEffect, useState, createContext,useRouter } from '@tarojs/taro'
import { View, Picker, Text, Image } from '@tarojs/components'
import { jobTopConfigAction, jobDoTopAction, jobGetTopAreasAction, jobChangeTopAreasAction } from '../../utils/request/index'
import { SERVERPHONE, IMGCDNURL  } from '../../config'
import { UserInfo } from '../../config/store'
import './index.scss'

interface Distruction{
  AreParams: ParamsType,
  setAreParams: (city: areDataChildrenType[], province: areDataChildrenType[], whole: areDataChildrenType[]) => void,
}
interface ParamsType {
  city: areDataChildrenType[],
  province: areDataChildrenType[],
  whole: areDataChildrenType[],
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
  let { id,type } = router.params;
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
  // 修改置顶天数
  const [editData,seteditDay] = useState<string>('延长')
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
    whole:[]
  })
  // 到期时间
  const [endTime,setEndTime ] = useState<string>('')
  // 到期时间时间戳
  const [end,setEnd] = useState<number>(0)
  // 显示最新到期时间
  const [displayTime, setdisplayTime] = useState<boolean>(false)
  // 最新时间
  const [newTime,setNewTime] = useState<string>('')
  // 修改时最大积分
  const [maxNum,setMaxNum] = useState<number>(0)
  // 修改超过最大就显示消耗积分
  useEffect(()=>{
    if(type){
      const val = {
        job_id:id,
        time: userInfo.tokenTime
      }
      jobGetTopAreasAction(val).then(res=>{
        if(res.errcode === 'ok'){
          setParams({city:res.data.top_city,province:res.data.top_province,whole:res.data.top_country})
          setEndTime(res.data.end_time_string)
          setEnd(res.data.end_time)
          setMaxNum(res.data.max_price)
        }else{
          Taro.showModal({
            title: '温馨提示',
            content: res.errmsg,
            showCancel: false,
          })
        }
      })
    }
    jobTopConfigAction().then(res=>{
      if(res.errcode === 'ok'){
        setData({ top_rules: res.data.top_rules })
        setCity({ max_city: res.data.max_city, max_province: res.data.max_province })
        let array: string[] = []
        for (let i = 0; i < res.data.max_top_days; i++) {
          array.push(i + 1 + "天")
        }
        setList(array)
      }else{
        Taro.showModal({
          title: '温馨提示',
          content: res.errmsg,
          showCancel: false,
        })
      }
    })
  },[])
  const getMyDate = (str)=> {
    const oDate = new Date(str),
      oYear = oDate.getFullYear(),
      oMonth = oDate.getMonth() + 1,
      oDay = oDate.getDate(),
      oHour = oDate.getHours(),
      oMin = oDate.getMinutes(),
      oSen = oDate.getSeconds(),
      oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' +
      addZero(oMin);
    return oTime;
  }
  const addZero = (num)=> {
    if (parseInt(num) < 10) {
      num = '0' + num;
    }
    return num;
  }
  const handleClick = (e:any)=>{
    setDay(list[e.detail.value])
    if(type){
      console.log('dsadsadasdaddsadasdsad')
      // 增加时间 新增天数*新的单价
      // 修改地区 单价比原单价大，差价*天数，
      // 时间和城市都改变了 新单价大于原单价 ：新价-旧价*剩余天数+新价格*新增天数 新单价小于原单价：旧价格*新增天数
      seteditDay('修改');
      setdisplayTime(true)
      // 时间
      let all = 86400000 * (parseInt(e.detail.value) + 1) + ((end - 0) * 1000 - 0);
      // console.log(all)
      const newTime = getMyDate(all);
      setNewTime(newTime);
      // 获取旧价格
      const oldPrice = maxNum;
      // 获取价格
      const newPrice = params.whole.length ? 500 * 1 : (params.city.length * 10 + params.province.length * 20) * 1;
      // const newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
      // 时间差
      let remDay: any = (end - new Date().getTime()/1000) / 86400;
      // 修改区域
      // 只改变时间
      let money;
      if (oldPrice === newPrice) {
        money = newPrice * (parseInt(e.detail.value) + 1);
      }else{
        if (newPrice - oldPrice > 0) {
          money = Math.round((newPrice - oldPrice) * remDay + newPrice * (parseInt(e.detail.value) + 1))
        } else {
          money = oldPrice * (parseInt(e.detail.value) + 1)
        }
      }
      setNum(money);
    }else{
      if(params){
        let numData = 0;
        if(params.whole.length){
          numData = 500 * (parseInt(e.detail.value) + 1);
        }else{
          numData = (params.city.length * 10 + params.province.length * 20) * (parseInt(e.detail.value)+1);
        }
        setNum(numData);
      }
    }
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
    const province_ids = params.province.map((v)=>v.id);
    const city_ids = params.city.map((v) => v.id);
    const country_ids = params.whole.map((v) => v.id);
    if (!province_ids.length && !city_ids.length && !country_ids.length){
      Taro.showModal({
        title: '温馨提示',
        content: '请选择您的置顶城市',
        showCancel: false,
      })
      return
    }
    console.log(country_ids.toString())
    const detail = {
      is_country: country_ids.toString(),
      mid: userInfo.userId,
      province_ids: province_ids.toString(),
      city_ids: city_ids.toString(),
      day:paramsDay,
      job_id: id,
      time: userInfo.tokenTime,
    }
    const editDetail = {
      is_country: country_ids.toString(),
      mid: userInfo.userId,
      province_ids: province_ids.toString(),
      city_ids: city_ids.toString(),
      update_days: paramsDay,
      job_id: id,
      time: userInfo.tokenTime,
      update_integral: num,
    }
    if(type){
      jobChangeTopAreasAction(editDetail).then(res=>{
        if(res.errcode === 'ok'){
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
          return
        } else if (res.errcode === 'get_integral'){
          Taro.showModal({
            title: '温馨提示',
            content: res.errmsg,
            showCancel: true,
            success(res) {
              if (res.confirm == true) {
                Taro.navigateTo({
                  // 前往积分页面
                  url: `/pages/getintegral/index`,
                })
              }
            }
          })
          return
        } else if (res.errcode === 'auth_forbid'){
          Taro.showModal({
            title: '温馨提示',
            content: res.errmsg,
            cancelText: '取消',
            confirmText: '去实名',
            success(res) {
              if (res.cancel) {
                Taro.navigateBack({
                  delta: 1
                })
              } else if (res.confirm) {
                let backtwo = "backtwo"
                Taro.redirectTo({
                  url: `/pages/realname/index?backtwo=${backtwo}`
                })
              }
            }
          })
          return
        } else if (res.errcode == "member_forbid"){
          Taro.showModal({
            title: '温馨提示',
            content: "mydata.errmsg",
            cancelText: "取消",
            confirmText: "联系客服",
            success(res) {
              if (res.confirm) {
                let tel = SERVERPHONE;
                Taro.makePhoneCall({
                  phoneNumber: tel,
                })
              }
            }
          })
          return;
        }else{
          Taro.showToast({
            title: res.errmsg,
            icon: "none",
            duration: 1500
          })
        }
      })
    }else{
      if (!province_ids || !city_ids) {
        Taro.showModal({
          title: '温馨提示',
          content: '请设置置顶城市',
          showCancel: false,
        })
        return
      }
      if (paramsDay === 0){
        Taro.showModal({
          title: '温馨提示',
          content: '请设置置顶天数',
          showCancel: false,
        })
        return
      }
      jobDoTopAction(detail).then(res=>{
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
  }
  const handleAddJump = ()=>{
    userRouteJump(`/pages/topping/distruction/index?max_city=${city.max_city}&max_province=${city.max_province}`)
  }
  // 传递方法
  const transferFun = ({ city, province, whole })=>{
    setParams({ city, province, whole });
    console.log(city, province, whole,'transferFun')
    calcPrice(city, province, whole);
  }
  const calcPrice = (city, province, whole) => {
    // if (whole.length){
    //   if(type){

    //   }else{
    //     const numData = 500 * (paramsDay)
    //     setNum(numData);
    //   }
    // }else{
    if (city || province || whole){
      if(type){
        // 获取旧价格
        const oldPrice = maxNum;
        // 获取价格
        const newPrice = whole.length ? 500 * 1 : (city.length * 10 + province.length * 20) * 1;
        // 时间差
        let remDay: any = (end - new Date().getTime()/1000) / 86400;
        // 修改区域
        const changeCity = true; //修改区域
        // 只改变时间
        let money;
        if (paramsDay !== 0 && oldPrice === newPrice) {
          money = newPrice * paramsDay;
        } else if (paramsDay === 0 && oldPrice > newPrice) {
          money = (newPrice - oldPrice) * paramsDay;
        } else if (paramsDay === 0 && changeCity) {
          // 剩余天数
          if (newPrice > oldPrice) {
            money = Math.round((newPrice - oldPrice) * remDay);
          }
        } else {
          // 时间变了，城市变了
          if (newPrice - oldPrice > 0) {
            money = Math.round((newPrice - oldPrice) * remDay + newPrice * paramsDay)
          } else {
            money = oldPrice * paramsDay
          }
        }
        let num = 0;
        if (money <= 0) {
          num = 0;
        } else {
          num = num;
        }
        setNum(money);
      }else{
        let numData = 0;
        if(whole.length){
          numData = 500 * (paramsDay)
        }else{
          numData = (city.length * 10 + province.length * 20) * (paramsDay)
        }
        setNum(numData);
      }
    }
  }
  // 需要传递的值
  const value: Distruction = {
    AreParams: params,
    setAreParams: (city: areDataChildrenType[], province: areDataChildrenType[], whole: areDataChildrenType[], ) => transferFun({ city, province, whole }),
  }
  // 删除
  const handleDel = (v)=>{
    if(v.pid === '1'){
      params.province.map((val,i)=>{
        if(val.id === v.id){
          params.province.splice(i,1)
        }
      })
      setParams({ city:params.city,province:params.province,whole:params.whole})
    }else if(v.pid === '0'){
      params.whole.map((val, i) => {
        if (val.id === v.id) {
          params.whole.splice(i, 1)
        }
      })
      setParams({ city: params.city, province: params.province, whole: params.whole })
    }else{
      params.city.map((val, i) => {
        if (val.id === v.id) {
          params.city.splice(i, 1)
        }
      })
      setParams({ city: params.city, province: params.province,whole:params.whole })
    }
    // 积分 
    // 省市大于原来的省市就改变，不然就是直接最大积分
    // 获取旧价格
    const oldPrice = maxNum;
    // 获取价格
    const newPrice = params.whole.length ? 500 * 1 : (params.city.length * 10 + params.province.length * 20) * 1;
    // const newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
    // 时间差
    let remDay: any = (end - new Date().getTime()/1000) / 86400;
    // 修改区域
    const changeCity = true; //修改区域
    // 修改时间
    let money;
    // 只改变时间
    if (paramsDay !== 0 && oldPrice === newPrice ){
      money = newPrice * paramsDay;
      // setShowNum(true);
    } else if (paramsDay === 0 && oldPrice > newPrice){
      // var remDay =  (到期时间 - 现在时间)/ 86400
      // var remDay =  (old_end_time - now_time)/ 86400
      money = (newPrice-oldPrice) * paramsDay;
    } else if (paramsDay === 0 &&  changeCity ){
      // 剩余天数
      if (newPrice > oldPrice ){
        money = Math.round((newPrice - oldPrice) * remDay);
      }
    }else{
      // 时间变了，城市变了
      if(newPrice-oldPrice>0){
        money = Math.round((newPrice - oldPrice) * remDay + newPrice * paramsDay)
      }else{
        money = oldPrice * paramsDay
      }
    }
    let num = 0;
    if(money<=0){
      num = 0;
    }else{
      num = money;
    }
    setNum(num);
  }
  // 取消
  const handleCancel = ()=>{
    const oldPrice = maxNum;
    // 获取价格
    const newPrice = (params.city.length * 10 + params.province.length * 20) * 1;
    // 时间差
    let remDay: any = (end - new Date().getTime() / 1000) / 86400;
    // 修改区域
    // 修改时间
    let money;
    // 只改变时间
    if (oldPrice > newPrice) {
       const num = (newPrice - oldPrice) * 1;
      if(num > 0){
        money = num;
      }else{
        money = 0;
      }
    } else if (oldPrice == newPrice) {
      money = 0;
      // 价格没变
    }else{
      // 剩余天数
      if (newPrice > oldPrice) {
        money = Math.round((newPrice - oldPrice) * remDay);
      } else {
        money = oldPrice
      }
    }
    setNum(money);
    setdisplayTime(false);
    setParamsDay(0)
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
        {params && params.whole.map(v => (
          <View className='topping-list' onClick={() => handleDel(v)}>
            {v.name}
            <Image src={`${IMGCDNURL}lpy/delete.png`} className='topping-list-image' />
          </View>
        ))}
        {/* 判断省市有值不超过3和2的情况 */}
          {((params.city.length || params.province.length) && (params.city.length < 3 || params.province.length < 2)) &&
            <View onClick={handleAddJump} className='topping-list-add'>添加更多</View>
          }
          {!params.city.length && !params.province.length && !params.whole.length  &&
          <View className='topping-change-btnBox' onClick={() => userRouteJump(`/pages/topping/distruction/index?max_city=${city.max_city}&max_province=${city.max_province}`)}><View className='topping-change-btnBox-btn'>点击选择置顶范围></View></View>
        }
      </View>
      <View className='topping-day'>请选择置顶天数：</View>
        {type ? <View className='topping-edit-list'>
          <View className='topping-edit-list-box'>
            <View className='topping-edit-list-box-time'>当前到期时间: {endTime}</View>
            <View className='topping-edit-list-box-day'>
            <Picker mode='selector' range={list} value={0} onChange={(e) => handleClick(e)}>
                <Text className='topping-edit-list-box-input'>{editData}</Text>
            </Picker>
            </View>
          </View>
          {displayTime &&
          <View>
            <View className='topping-edit-list-box'>
              <View className='topping-edit-list-box-time'>最新到期时间:<Text className='topping-edit-list-box-time-edit'> {newTime}</Text></View>
              <View className='topping-edit-list-box-cancel' onClick={handleCancel}>取消</View>
            </View>
            {/* <View className='topping-input-box-list'>消耗积分:<View className='topping-input-box-list-num'>{num}分</View></View> */}
          </View>
          }
          {num !== 0 &&  <View className='topping-input-box-list'>消耗积分:<View className='topping-input-box-list-num'>{num}分</View></View>}
      </View> :
      <View className='topping-input-box'>
        <View className='topping-input-box-list'>置顶天数:
          <Picker mode='selector' range={list} value={0} onChange={(e) => handleClick(e)}>
            <Text className='topping-input-box-list-input'>{day}</Text>
        </Picker>
        </View>
        <View className='topping-input-box-list'>消耗积分:<View className='topping-input-box-list-num'>{num}分</View></View>
      </View>
    }
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