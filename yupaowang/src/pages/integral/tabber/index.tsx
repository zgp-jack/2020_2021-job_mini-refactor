import Taro, { Config, useState, useEffect, useReachBottom, usePullDownRefresh } from '@tarojs/taro'
import { View, Text, Picker,Image } from '@tarojs/components'
import { integralSourceConfigAction, integralSourceListsAction, integralExpendListsAction, integralExpendConfigAction } from '../../../utils/request/index'
import { getSystemInfo } from '../../../utils/helper/index'
import { IMGCDNURL } from '../../../config'
import { integralSourceListsDataSum  } from '../../../utils/request/index.d'
import Temp from '../temp';
import Source from '../source';
import './index.scss'

// 只用temp和source
export default function Tabber() {
  // 分类
  const [list, setList] = useState<string[]>([])
  // 第一次显示内容
  const [title, setTitle] = useState<string>('')
  // start时间
  const [start, setStart] = useState<string>('')
  // end时间
  const [end, setEnd] = useState<string>('')
  // 默认日期
  const [time, setTime] = useState<string>('')
  // 显示时间
  const [showTime, setShowTime] = useState<string>('')
  // 判断是积分来源还是积分消耗
  const [info, setInfo ]  = useState<number>(0)
  // 默认积分
  const [num, setNum] = useState < integralSourceListsDataSum>({
    get:0,
    expend:0,
  })
  useEffect(()=>{
    let navigationBarTitleText = info === 0 ? '鱼泡网-积分来源记录' : '鱼泡网-积分消耗记录'
    Taro.setNavigationBarTitle({title: navigationBarTitleText})
    // 获取现在时间
    let newTime = new Date();
    let nowyear = newTime.getFullYear();
    let nowmonth:string|number = newTime.getMonth() + 1;
    if (nowmonth >= 1 && nowmonth <= 9) {
      nowmonth = "0" + nowmonth;
    }
    setEnd(nowyear + "-" + nowmonth);
    integralSourceConfig();
  },[])
  // 积分来源分类
  const integralSourceConfig= ()=>{
    integralSourceConfigAction().then(res => {
      setStart(res.data.min.y + '-' + res.data.min.m);
      let item: string[] = res.data.types.map(item => item.name)
      setList(item);
      if(info === 0 ){
        setTitle('来源分类')
      }else{
        setTitle('消耗分类')
      }
      const time = res.data.default.y + '-' + res.data.default.m;
      setTime(time);
      setShowTime(res.data.default.y + '年' + res.data.default.m + '月')
      // 获取积分请求
      integralSourceLists(time);
    })
  }
  // 积分来源积分
  const integralSourceLists = (time:string)=>{
    const date = time.split("-")
    const params = {
    y: date[0],
    m: date[1],
    stime: 0,
    type:0,
    source_type: 0,
    bak: 0,
    office: 0,
    system_type: getSystemInfo(),
    }
    integralSourceListsAction(params).then(res=>{
      setNum(res.data.sum_data);
    })
  }
  // 点击分类
  const handleClick = (e:any)=>{
    setTitle(list[e.detail.value]);
  }
  // 时间选择
  const handleClckTime = (e:any)=>{
    let data = e.target.value.split('-');
    setShowTime(data[0] + '年' + data[1] + '月');
  }
  return (
    <View className='tabber-content'>
      <View className='tabber-content-box'>
        <View className='tabber-content-box-time'>
          <Picker mode='date' fields='month' value={time} start={start} end={end} onChange={(e)=>handleClckTime(e)}>
            <Text className='tabber-content-box-time-text'>{showTime}</Text>
            <Image className='tabber-content-box-time-img' src={`${IMGCDNURL}lpy/integral/select2.png`}/>
          </Picker>
        </View>
        <View className='tabber-content-box-selector'>
          <Picker mode='selector' range={list} value={0} onChange={(e)=>handleClick(e)}>
            <Text className='tabber-content-box-selector-text'>{title}</Text>
            <Image className='tabber-content-box-selector-img' src={`${IMGCDNURL}lpy/integral/select1.png`}/>
          </Picker>
        </View>
      </View>
      <View className='tabber-content-box-numBox'>
        <View>{info === 0 ? '获取积分：' : '消耗积分：' }<Text className='tabber-content-box-num-color'>{num.get}</Text></View>
        <View className='tabber-content-box-numBox-num'>{info === 0 ? '消耗积分：' : '获取积分：'}<Text className='tabber-content-box-num-color'>{num.expend}</Text></View>
      </View>
      {info === 0 ? <Source /> : <Temp/>}
    </View>
  )
}

Tabber.config = {
  navigationBarTitleText: '',
  enablePullDownRefresh: true,
} as Config