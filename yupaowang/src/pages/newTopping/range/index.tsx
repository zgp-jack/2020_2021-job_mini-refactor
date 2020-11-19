import Taro, { Config, useEffect, useState, createContext, useRouter } from '@tarojs/taro'
import { View, Picker, Text, Image, Input } from '@tarojs/components'
import { IMGCDNURL, SERVERPHONE } from '../../../config'
import { resumesTopConfigAction } from '../../../utils/request/index';
import { userCallPhone, getMyDate } from '../../../utils/helper/index';
import { useDispatch, useSelector } from '@tarojs/redux'
import { resume_topObj, resume_topObj_arrStr } from '../../../utils/request/index.d'
import { useResumeType } from '../../../reducers/resume_top';
import { setClickResumeTop } from '../../../actions/resume_top';
import { resumesUpdateTopResumeAction, resumesDoTopV2Action } from '../../../utils/request';
import AREAS from '../../../models/area'
import { ShowActionModal } from '../../../utils/msg'

import './index.scss'
interface integralDataType {
  city_integral:number,
  province_integral:number,
  country_integral:number,
}

let first = false;
let isTime = false;
let isCity = false;
export default function Range() {
  // 初始化页面参数
  const router = useRouter()
  const { defaultTopArea } = router.params;
  console.error(defaultTopArea,'defaultTopArea')
  const dispatch = useDispatch();
  // 获取置顶信息
  const resumeTopData: useResumeType = useSelector<any, useResumeType>(state => state['resumeTop']);
  // 天数
  const [day,setDay]=useState<string[]>([]);
  // 默认天数参数
  const [defultDay, setDefultDay] = useState<number[]>([]);
  // 规则
  const [rule, setRule] = useState<string[]>([]);
  // 省市
  const [areas, setAreas] = useState<resume_topObj_arrStr[]>([]);
  //置顶结束时间
  const [end_time_str, setEnd_time_str] = useState<string>('');
  // 最大省
  const [maxCity, setMaxCity] = useState<number>(0);
  // 最大市
  const [maxProvince, setMaxProvince] = useState<number>(0);
  // 时间索引
  const [pickIndex,setPickIndex] = useState<number>(0);
  // 最新到期时间
  const [newTime,setNewTime ] = useState<string>('');
  //显示最新时间
  const [showTime,setShowTime] = useState<boolean>(false); 
  // 积分
  const [integral, setIntegral] = useState<number>(0);
  // 上次找活最大值
  const [maxPrice,setMaxPrice] = useState<string>('');
  // 只增加天数
  // const [isTime,setIsTime] = useState<boolean>(false);
  // 修改城市
  // const [isCity,setIsCity] = useState<boolean>(false);
  // 每个单价
  const [integralData, setIntegralData] = useState<integralDataType>({
    city_integral: 0,
    province_integral: 0,
    country_integral: 0,
  })
  // 显示积分
  const [showIntegral, setShowIntegral] = useState<boolean>(false);
  // 默认打开天数
  const [defaultDay, setDefaultDay] = useState<number>(0);
  // 第一次置顶
  const [one,setOne] = useState<boolean>(false);
  // 第一次置顶时间
  const [toppingTime,setToppingTime] = useState<string>('');
  // 进入的时候本地时间
  const [localTime, setLocalTime]=useState<number>(0)
  // 服务器时间
  const [serverTime, setServerTime] = useState<number>(0);
  useEffect(()=>{
    first = false;
    resumesTopConfigAction({ interface_version:'v2'}).then((res)=>{
      console.error(res);
      if(res.errcode == 'ok'){
        // 处理3天内显示“1天（24小时）”，超过3天显示“4天”
        let arr:string[] = [];
        if(res.data.days.length){
          for(let i =0;i<res.data.days.length;i++){
            if(res.data.days[i]<4){
              arr.push(res.data.days[i] * 24 + '小时' + `   (${res.data.days[i]}天）` )
            }else{
              arr.push(`${res.data.days[i]}天`)
            }
          }
        }
        // 默认天
        setDefultDay(res.data.days);
        // 天数
        setDay(arr);
        // 设置选择器的索引
        const num = res.data.default_days ? res.data.default_days > 0 ? res.data.default_days - 1 : res.data.default_days:0;
        setPickIndex(num)
        // 最大省市
        setMaxCity(res.data.max_city);
        setMaxProvince(res.data.max_province);
        // 置顶规则
        setRule(res.data.top_rules);
        // 积分单价
        let obj = {
          city_integral: res.data.city_integral,
          province_integral: res.data.province_integral,
          country_integral: res.data.country_integral
        }
        // 进来的时间
        const newTime: number = new Date().getTime() / 1000;
        let endTime = getMyDate((newTime + num * 86400) * 1000);
        setLocalTime(newTime);
        setServerTime(res.data.time)
        // 置顶数据
        // 第一次置顶传过来的值
        let areasData: resume_topObj_arrStr[] =[];
        if (defaultTopArea) {
          for (let i = 0; i < AREAS.length; i++) {
            if (AREAS[i].id == defaultTopArea ){
              areasData = [AREAS[i]];
            }
            for (let j = 0; j < AREAS[i].children.length; j++) {
              if (AREAS[i].children[j].id == defaultTopArea) {
                areasData = [AREAS[i].children[j]];
              }
            }
          }
          // 默认时间默认积分
          setOne(true);
          // 置顶时间
          const num = res.data.default_days ? res.data.default_days:0;
          const time = res.data.days[num] > 0 ? res.data.days[num]-1:0;
          const timeStr = (time) * 24 + '小时' + `(${time}天）`
          setToppingTime(timeStr)
          isTime=true;
          isCity=false;
          setNewTime(endTime)
          getIntegral(time, areasData, obj);
        }else{
          areasData = [...resumeTopData.resumeTopObj.top_provinces_str || [], ...resumeTopData.resumeTopObj.top_citys_str||[]];
        }
        setAreas(areasData);
        dispatch(setClickResumeTop(areasData));
        // 默认打开天数
        setDefaultDay(res.data.default_days||0);
        //置顶时间
        setEnd_time_str(resumeTopData.resumeTopObj.end_time_str||'');
        // 上一次找活设置置顶的最大值
        setMaxPrice(resumeTopData.resumeTopObj.max_price||'');
        // 设置积分单价
        setIntegralData(obj)
      }
    })
  },[])
  useEffect(()=>{
    if (!first)return;
    isCity = true;
    setAreas(resumeTopData.clickResumeTopObj);
    getIntegral('', '', '',resumeTopData.clickResumeTopObj)
    console.error(111)
  }, [resumeTopData.clickResumeTopObj])
  //跳转 
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  // 选择时间
  const handlePicker = (e)=>{
    setPickIndex(e.detail.value);
    let num = defultDay[e.detail.value];
    let time = '';
    if (resumeTopData.resumeTopObj.end_time){
      time = getMyDate(((+resumeTopData.resumeTopObj.end_time) + num * 86400)*1000)
    }
    setShowTime(true);
    setNewTime(time);
    isTime = true;
    getIntegral(num);
    if(one){
      let endTime = '';
      const newTime: number = new Date().getTime() / 1000;
      endTime = getMyDate((newTime + num * 86400) * 1000);
      const str = day[e.detail.value].replace(/\s+/g, "");
      setToppingTime(str);
      setNewTime(endTime);
    }
  }
  // 获取积分
  const getIntegral = (day?, areasData?,obj?,dataItem?)=>{
    console.error(isTime,isCity,'111')
    let num;
    if(day){
      num = day;
      setShowTime(true)
    }else{
      num = isTime?defultDay[pickIndex] :0;
    }
    console.error(num,'num')
    // 获取所有的选择城市
    const data = dataItem ? dataItem: areasData ? areasData: [...areas] || [];
    console.error(data,'data')
    let city = 0, whole = 0, province = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].pid == '0') {
        whole++;
      } else if (data[i].pid == '1') {
        province++;
      } else {
        city++;
      }
    }
    console.error(city, whole, province)
    // 获取旧价格
    const oldPrice: number = +maxPrice;
    // 获取价格
    let newPrice;
    let defultData = obj ? obj : integralData;
    newPrice = whole > 0 ? defultData.province_integral : (city * defultData.city_integral + province * defultData.province_integral);
    // 时间差
    let oldTime = resumeTopData.resumeTopObj.end_time ? +resumeTopData.resumeTopObj.end_time : 0
    let remDay: number = (oldTime - new Date().getTime() / 1000) / 86400;
    let money;
    console.error(newPrice,num,'2312321')
    console.error(maxPrice,'1231231')
    console.error(isTime, isCity,'isCity')
    if (isTime && !isCity){
      if (oldPrice == newPrice) {
        money = newPrice * num;
      }else{
        money = newPrice * num;
      }
    } else if (!isTime && isCity){
      if (newPrice - oldPrice > 0){
        money = Math.round((newPrice - oldPrice) * remDay);
      }else{
        money = 0;
      }
    }else{
      if (newPrice - oldPrice > 0) {
        money = Math.round((newPrice - oldPrice) * remDay) + newPrice * num;
      }else{
        money = oldPrice * num;
      }
    }
    if (newPrice > oldPrice || isTime){
      setShowIntegral(true);
    }
    setIntegral(money);
  }
  // 删除
  const handleDel = (id:string)=>{
    const data = [...areas];
    for(let i =0;i<data.length;i++){
      if(data[i].id == id){
        data.splice(i,1);
      }
    }
    setAreas(data);
    dispatch(setClickResumeTop(data));
  }
  //跳转
  const handleJump = ()=>{
    first = true;
    userRouteJump(`/pages/newTopping/region/index?maxCity=${maxCity}&maxProvince=${maxProvince}`)
  }
  //  取消最新时间
  const handleClose = ()=>{
    setShowTime(false);
    setIntegral(0)
    isTime = false;
    setPickIndex(defaultDay);
    getIntegral();
  }
  const handleTopping = ()=>{
    // 市、省、全国
    const data = [...areas];
    console.error(data,'data');
    let cityArr:string[] = [], provinceArr:string[] = [], is_country=0;
    for (let i = 0; i < data.length;i++){
      if(data[i].pid=='0'){
        is_country = 0;
      }else if(data[i].pid == '1'){
        provinceArr.push(data[i].id)
      }else{
        cityArr.push(data[i].id);
      }
    }
    console.error(cityArr, provinceArr)
    console.error(integral,'integral')
    let params;
    // 进来的时间-提交时间+服务器时间
    const newTime: number = new Date().getTime() / 1000;
    const time = localTime - serverTime + newTime;
    if(one){
      params = {
        days: isTime ? +pickIndex + 1 : 0,
        is_country,
        time,
        city_ids: cityArr.toString(),
        province_ids: provinceArr.toString(),
      }
    }else{
      params = {
        is_country,
        time,
        city_ids: cityArr.toString(),
        province_ids: provinceArr.toString(),
        update_days: isTime ? +pickIndex + 1 : 0,
        update_integral: integral,
      }
    }
    let fnAction = one ? resumesDoTopV2Action : resumesUpdateTopResumeAction;
    fnAction(params).then(res=>{
      if(res.errcode == 'ok'){
        Taro.navigateBack({
          delta: 1
        })
      } else if (res.errcode == 'member_forbid'){
        ShowActionModal({msg:res.errmsg,success:(resData)=>{
          if (resData.cancel) {
            Taro.navigateBack({
              delta: 1
            })
          } else if (resData.confirm) {
            Taro.makePhoneCall({
              phoneNumber: SERVERPHONE,
            });
          } 
        }})
        return
      } else if (res.errcode == "auth_forbid"){
        ShowActionModal({msg:res.errmsg,success:(resData)=>{
          if (resData.cancel) {
            Taro.navigateBack({
              delta: 1
            })
          } else if (resData.confirm) {
            let backtwo = "backtwo"
            Taro.redirectTo({
              url: `/pages/realname/realname?backtwo=${backtwo}`
            })
          }
        }})
        return
      } else if (res.errcode == 'get_integral'){
        ShowActionModal({
          msg: res.errmsg, success: (resData) => {
            if (resData.confirm == true) {
              Taro.navigateTo({
                url: `/pages/getintegral/getintegral`,
              })
            }
          }
        })
        return
      }else{
        ShowActionModal({
          msg: res.errmsg, success: () => {
            Taro.navigateBack({
              delta: 1
            })
          }
        })
        return
      }
    })
  }
  console.error(areas,'areasareas')
  console.error(integral,'integral')
  return (
    <View className='range'>
      <View>
        <View className='range-tips range-mt30'>当前选择置顶范围:</View>
        <View>
          {areas.length ? 
            <View className='range-cityBox'>
              {/* 选择后 */}
              {areas.map((v) => (
                <View key={v.id} className='range-cityBox-list' onClick={() => handleDel(v.id)}>{v.name}
                  <Image src={`${IMGCDNURL}lpy/delete.png`} className='range-cityBox-list-close' />
                </View>
              ))}
              {areas.length < 5 &&<View className='range-cityBox-list-last' onClick={handleJump} >添加更多</View>}
            </View>
            :
            //  没选择
            <View className='range-noChangeBtn' onClick={handleJump}>点击选择置顶范围 ></View>
            }
        </View>
      </View>
      <View>
        <View className='range-tips mt15'>请选择置顶时间:</View>
        {/* <View className='range-content'>
          <View className='range-content-list'>置顶天数：
            <Picker
              mode='selector'
              range={day}
              value={0}
              onChange={(e)=>handlePicker(e)}
            >
            <Text className='range-content-list-noDay'>请选择置顶天数</Text>
          </Picker>  
          </View>
          <View className='range-content-list'>消耗积分：<Text className='range-content-list-blued'>100分</Text></View>
        </View> */}
        <View className='range-content'>
          <Picker
            mode='selector'
            range={day}
            value={pickIndex}
            onChange={(e) => handlePicker(e)}
          >
            {!one &&
            <View className='range-content-list-time'><View className='range-content-list-Day'>当前到期时间：{end_time_str}</View><View className='range-content-list-blued'>{showTime?'修改':'延长'}</View></View>
            }
            {showTime && !one &&
              <View className='range-content-list-time'><View className='range-content-list-Day'>最新到期时间：{newTime}</View><View className='range-content-list-grey' onClick={(e) => { e.stopPropagation(); handleClose() }}>取消</View></View>
            }
            {one && 
            <View className='range-content-list-time'><View className='range-content-list-Day'>置顶时间：{toppingTime}
              </View>
            </View>}
            {one && 
              <View className='range-content-list-time'><View className='range-content-list-Day'>置顶到期时间：{newTime}
              </View>  
            </View>
            }
            {showIntegral && integral > 0 && integral &&
            <View className='range-content-list-time'><View className='range-content-list-Day'>消耗积分：
            <Text className='range-content-list-blued'>{integral}分</Text></View>
            </View>  
            }
          </Picker>
        </View>
      </View>
      <View className='range-change'>
        <View className='range-change-btn' onClick={handleTopping}>确定置顶</View>
      </View>
      <View className='range-rule'>置顶规则</View>
      <View className='range-rule-content range-mt30'>
        {rule.length && rule.map((v,i)=>(
          <View>{v}{i == 2 && <Text className='range-rule-phone' onClick={()=>userCallPhone(SERVERPHONE)}>{SERVERPHONE}</Text>}</View>
        ))}
      </View>
      {/* <View className='range-rule-content range-mt30'>找活名片最多可选择xx省置顶，选择了省之后就不能再选择该省下面的市。</View> */}
    </View>
  )
}

Range.config = {
  navigationBarTitleText: '招工置顶',
} as Config