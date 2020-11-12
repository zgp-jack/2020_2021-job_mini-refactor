import Taro, { Config, useState, useEffect, useRouter,useShareAppMessage } from '@tarojs/taro'
import { View, RichText, Button } from '@tarojs/components';
import { newsInfoAction } from "../../../utils/request/index"
import { getUserShareMessage } from '../../../utils/helper'
import { consultationDetailsData } from '../../../utils/request/index.d'
import './index.scss'

interface DataType {
  item: consultationDetailsData,
}
export default function Notice() {
  const router: Taro.RouterInfo = useRouter()
  let { id } = router.params;
  const [data, setData] = useState<DataType>()
  useEffect(()=>{
    newsInfoAction(id).then(res=>{
      // 图片显示有问题，设置他的最大宽度
      const ImgData:string = res.data.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto"')
      res.data.content = ImgData;
      setData({item:res.data})
    })
  },[])

  // 设置分享信息
  useShareAppMessage(()=>{
    return {
      ...getUserShareMessage(),
    }
  })
  return (
    <View className='consultationDetails-content'>
      {data && 
      <View>
        <View className='consultationDetails-title'>{data.item.title}</View>
        <View className='consultationDetails-flex'>
          <View>作者：{ data.item.author}</View>
          <View>{data.item.time}</View>
        </View>
        <View className="consultationDetails-substance">
          <RichText space='nbsp' nodes={data.item.content} className="consultationDetails-richText"/>
        </View>
      </View>
      }
      <Button className='consultationDetails-button'>分享</Button>
    </View>
  )
}
Notice.config = {
  navigationBarTitleText: '咨讯详情',
} as Config