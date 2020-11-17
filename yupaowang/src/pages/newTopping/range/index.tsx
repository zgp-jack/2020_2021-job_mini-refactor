import Taro, { Config, useEffect, useState, createContext, useRouter } from '@tarojs/taro'
import { View, Picker, Text, Image, Input } from '@tarojs/components'
import { IMGCDNURL, SERVERPHONE } from '../../../config'
import { resumesTopConfigAction } from '../../../utils/request/index';
import { userCallPhone } from '../../../utils/helper/index';
import { useDispatch, useSelector } from '@tarojs/redux'
import { resume_topObj, resume_topObj_arrStr } from '../../../utils/request/index.d'
import './index.scss'

export default function Range() {
  const dispatch = useDispatch();
  // 获取置顶信息
  const resumeTopData: resume_topObj = useSelector<any, resume_topObj>(state => state.resumeTop);
  console.error(resumeTopData,'11111');
  // 天数
  const [day,setDay]=useState<string[]>([]);
  // 规则
  const [rule, setRule] = useState<string[]>([]);
  // 省市
  const [areas, setAreas] = useState<resume_topObj_arrStr[]>([]);
  useEffect(()=>{
    resumesTopConfigAction().then((res)=>{
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
        setDay(arr);
        // 置顶
        setRule(res.data.top_rules);
        const areasData = [...resumeTopData.top_provinces_str||[],...resumeTopData.top_citys_str||[]];
        console.error(areas,'111')
        setAreas(areasData);
      }
    })
  },[])
  //跳转 
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  // 选择时间
  const handlePicker = (e)=>{
    console.error(e)
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
  }
  return (
    <View className='range'>
      <View>
        <View className='range-tips range-mt30'>当前选择置顶范围:</View>
        <View>
          {/* 没有选择 */}
          {/* <View className='range-noChangeBtn'>点击选择置顶范围 ></View> */}
          {/* 选择后 */}
          <View className='range-cityBox'>
            {areas.map((v)=>(
              <View key={v.id} className='range-cityBox-list' onClick={()=>handleDel(v.id)}>{v.name}
                <Image src={`${IMGCDNURL}lpy/delete.png`} className='range-cityBox-list-close' />
              </View>
            ))}
            <View className='range-cityBox-list-last' onClick={() => userRouteJump('/pages/newTopping/region/index')} >添加更多</View>
          </View>
        </View>
      </View>
      <View>
        <View className='range-tips'>请选择置顶天数:</View>
        <View className='range-content'>
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
        </View>
        {/* <View className='range-content'>
          <View className='range-content-list-time'><View className='range-content-list-noDay'>到期时间：2020-04-20 15:54</View><View className='range-content-list-blued'>延长</View></View>
        </View> */}
      </View>
      
      <View className='range-change'>
        <View className='range-change-btn'>确定置顶</View>
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