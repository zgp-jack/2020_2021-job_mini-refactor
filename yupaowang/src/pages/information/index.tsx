import Taro, { useState, useEffect, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { userMessagesAction } from '../../utils/request/index'
import { userMessagesListData  } from '../../utils/request/index.d';
import './index.scss'

interface DataType {
  item: userMessagesListData[],
}

export default function Information (){
  // 默认数据
  const [data, setData] = useState <DataType>({
    item:[]
  })
  // 数据请求
  useEffect(()=>{
    userMessagesAction().then(res=>{
      console.log(res);
      setData({item:res.data})
    })
  },[])
  return (
    <View>
      {data.item.map((item)=>{
        <View className="messsage-lists-top">
          <View className="messsage-num" >
            {/* <Image src={item.imageUrl} alt="" style="width:70rpx;height:70rpx"></Image> */}
            {/* <Text wx: if="{{ item.count > 0 }}" className="msgNumber" > {{ item.count > 9 ? '9+' : item.count }} </ext> */}
        </View>
          <View className="messsage-title" >
            <View className="msgflex">
              {/* <text> {{ item.typeName }} </text> */}
              {/* <image src='{{ rightarrow }}' className="rightarrow"></image> */}
            </View>
            <View className="messsage-deail"> { item.description } </View>
          </View>
        </View>
    })}
    </View>
  )
}

Information.config = {
  navigationBarTitleText: '鱼泡网-我的信息',
} as Config