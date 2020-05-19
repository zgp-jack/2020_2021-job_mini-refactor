import Taro, { Config, useEffect, useState } from '@tarojs/taro'
import { View, Image, Text, Input } from '@tarojs/components'
import { jobTopHotAreasAction } from '../../../utils/request/index'
import { jobTopHotAreasData } from '../../../utils/request/index.d'
import AREAS, { ChildItems } from '../../../models/area'
import { IMGCDNURL } from '../../../config';
import './index.scss'

interface DataType {
  item: jobTopHotAreasData[]
}
interface AreType{
  areData: areDataType[]
}
interface areDataType{
  ad_name: string
  children: areDataChildrenType[]
  id: string
  name: string
}
interface areDataChildrenType{
  ad_name: string
  id: string
  name: string
  pid: string
}
export default function Distruction() {
  const [data, setData] = useState<DataType>({
    item:[],
  })
  const [are,setAre] = useState<AreType>({
    areData:[]
  })
  useEffect(()=>{
    jobTopHotAreasAction().then(res=>{
      setData({item:res.data});
      const item:any =[];
      AREAS.map((v)=>{
        if(v.children.length>0){
          item.push(v);
        }
      });
      for(let i =0;i<item.length;i++){
        for (let j = 0; j < item[i].children.length;j++){
          if(item[i].name === item[i].children[j].name){
            item[i].children[j].name = '全省置顶'
          }
        }
      }
      console.log(item);
      setAre({areData:item})
    })
  },[])
  return(
    <View className='distruction'>
      <View className='distruction-head'>
      <View className='distruction-top'>
        <Input className='distruction-top-input' placeholder='输入城市名字进行搜素'/>
        <View className='distruction-top-seach'>搜索</View>
      </View>
      <View className='distruction-title'>请选择置顶范围</View>
    </View>
      <View className='distruction-content'>
        <View className='distruction-content-title'>热门城市</View>
        <View className='distruction-content-box clearfix'>
          {data.item.map((v)=>(
            <View className='distruction-content-box-list' key={v.id}>{v.name}</View>
          ))}
        </View>
      </View>
      <View className='distruction-content-are-content'>
        {are.areData.map((v) => (
          <View className='distruction-content-are-content-box'>
            <View className='distruction-content-are-content-box-title'>{v.ad_name}</View>
            <View className='distruction-content-are-content-box-list'>
              {v.children.map((val) => (
                  <View className='distruction-content-are-content-box-list-item'>{val.name}
                  <Image className={val.pid === '1' ? 'distruction-content-are-content-box-list-img' : 'distruction-content-are-content-box-list-noneimg'} src={`${IMGCDNURL}lpy/recruit/settop-hot.png`}/>
                  </View>
              ))}
            </View>
          </View>
        ))}
      </View>
      <View className='distruction-footerBtn'>
        <View className='distruction-footerBtn-btn'>确认选择</View>
      </View>
    </View>
  )
}
Distruction.config = {
  navigationBarTitleText: '招工置顶',
} as Config