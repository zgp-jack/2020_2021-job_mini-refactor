import Taro, { Config, useDidShow, useState } from '@tarojs/taro'
import { View, Picker, Text, Image, Input } from '@tarojs/components'
import { IMGCDNURL, SERVERPHONE } from '../../../config'
import { hotAreas } from '../../../utils/request/index'; 
import { HotType } from './index.d'
import Msg from '../../../utils/msg';
import AREAS from '../../../models/area'
import './index.scss'


export default function Region() {
  const [hot, setHot] = useState<HotType[]>([]);
  const [areasData, setAreasData] = useState<any>([]);
  useDidShow(()=>{
    hotAreas().then((res=>{
      if(res.errcode == 'ok'){
        setHot(res.data)
      }else{
        Msg(res.errmsg)
      }
    }))
    const data = [...AREAS];
    setAreasData(data);
  })
  // 点击
  const handleClick = (val: HotType)=>{
    const data = JSON.parse(JSON.stringify(areasData));
    for (let i = 0; i < data.length;i++){
      for(let j =0;j<data[i].children.length;j++){
        if(data[i].children[j].id == val.id){
          console.error(1111)
          if (data[i].children[j].click){
            data[i].children[j].click = false;
          }else{
            data[i].children[j].click = true;
          }
        }
      }
    }
    console.error(data);
    setAreasData(data);
  }
  return(
    <View className='region'>
      <View className='region-top'>
      <View className='region-heard'>
        <View className='region-heard-seach'>
          <Input placeholder='请输入城市名' className='region-heard-seach-input' /><Text className='region-heard-seach-btn'>搜索</Text>
          </View>
      </View>
      <View className='region-top-tips'>请选择置顶范围：  </View>
      </View>
      <View className='region-content'>
        <View className='region-content-hotCity-content-title'>热门城市</View>
        <View className='region-content-hotCity-content'>
          {hot.map((v) => (
            <View key={v.id} className='region-content-hotCity-content-list'>{v.name}
            {v.is_hot == '0' &&
              <Image src={`${IMGCDNURL}lpy/recruit/settop-hot.png`} className='region-content-hotCity-content-list-img'/>
            }
            </View>
          ))}
        </View>
        <View className='region-content-allCity'>
          {areasData.map((v)=>(
            <View>
              {v.children.length && <View>
                <View className='region-content-allCity-tips'>{v.ad_name}</View>
                <View className='region-content-allCity-box'>
                  {v.children.map(((val,i)=>(
                    <View key={val.id} className={val.click ? 'region-content-allCity-box-list-click' : 'region-content-allCity-box-list'} onClick={()=>{handleClick(val)}}>{i == 0 ? '全省置顶' : val.name}
                      {i == 0 && <Image src={`${IMGCDNURL}lpy/recruit/settop-hot.png`} className='region-content-allCity-box-list-img' />}
                    </View>
                  )))}
                </View>
              </View>}
            </View>
          ))}
        </View>
        <View className='region-content-box'>
          <View className='region-content-box-btn'>确认选择</View>
        </View>
      </View>
    </View>
  )
}
Region.config = {
  navigationBarTitleText: '招工置顶',
} as Config