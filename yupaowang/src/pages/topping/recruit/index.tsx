import Taro, { Config, useEffect, useState, useRouter, useContext } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { resumesTopAreasAction } from '../../../utils/request/index'
import { context } from '../index'
import './index.scss'

interface AreType {
  Item: ItemType[]
}
interface ItemType{
  id: string,
  letter?: string,
  name: string,
  pid: string,
  click:boolean
}
interface ProvinceType{
  list: ItemType[]
}
export default function RecruitTopping() {
  const router: Taro.RouterInfo = useRouter()
  let { max_number } = router.params;
  const { provinceParams, setProvinceParams } = useContext(context);
  const [are, setAre] = useState<AreType>({
    Item:[]
  })
  // 点击了的省
  const [province, setProvince] = useState<ProvinceType>({
    list:[]
  })
  useEffect(()=>{
    resumesTopAreasAction().then(res=>{
      if (provinceParams){
        const list = res.data.provinces.map(v=>{
          provinceParams.map(val=>{
            if(val.id === v.id){
              v.click = true
            }
          })
          return v;
        })
        setProvince({list:provinceParams})
        setAre({ Item: list });
      }else{
        let data = res.data.provinces.map(v => { v.click = false; return v })
        setAre({ Item: data })
      }
    })
  },[])
  const handleClick = (v: ItemType)=>{
    const arr:any = are.Item.map(val=>{
      const provinceList = JSON.parse(JSON.stringify(province.list));
      if(v.id === val.id){
        // 已经点过的，就删除并为false
        if(val.click){
          val.click = false;
          provinceList.map((item,i)=>{
            if(item.id === val.id){
              provinceList.splice(i,1)
            }
          })
        }else{
          // 没有点过就push，长度大于2就提示
          if (province.list.length>1){
            Taro.showModal({
              title: '温馨提示',
              content: `最多可选择${max_number}个省份置顶`,
              showCancel: false,
            })
            return val;
          }
          val.click = true;
          provinceList.push(val);
        }
        setProvince({ list: provinceList})
      }
      return val
    })
    setAre({Item:arr})
  }
  const handleSub = ()=>{
    setProvinceParams(province.list)
    Taro.navigateBack({
      delta: 1
    })
  }
  return(
    <View className='recruitTopping'>
      <View className='recruitTopping-header'>请选择置顶范围（省）：</View>
      <View className='recruitTopping-content'>
      {are.Item && are.Item.map((v)=>(
        <View 
          className={v.click ?'recruitTopping-content-list-click':'recruitTopping-content-list'}
          key={v.id}
          onClick={()=>handleClick(v)}
          >{v.name}</View>
      ))}
      </View>
      <View className='recruitTopping-footer'>
        <View className='recruitTopping-footer-btn' onClick={handleSub}>确认选择</View>
      </View>
    </View>
  )
}

RecruitTopping.config = {
  navigationBarTitleText: '找活置顶',
} as Config