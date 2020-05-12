import Taro, { useState, useEffect, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { userMessagesAction } from '../../../utils/request/index'
import { userMessagesListDataList  } from '../../../utils/request/index.d';
import { IMGCDNURL } from '../../../config'
import './index.scss'

interface DataType {
  item: userMessagesListDataList[],
}

export default function Mymessage (){
  // 默认数据
  const [data, setData] = useState <DataType>({
    item:[]
  })
  // 数据请求
  useEffect(()=>{
    userMessagesAction().then(res=>{
      setData({item:res.data.lists})
    })
  },[])
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  return (
    <View>
      {data.item.map((item,index)=>(
        <View 
          className='messsage-lists' 
          key={index} 
          onClick={() => userRouteJump(`/pages/information/system/index?type=${item.type}`)}>
          <View className="messsage-lists-top">
            <View className="messsage-num" >
              <Image src={item.imageUrl} className='messsage-num-img' />
              {item.count > 0 && <Text className="msgNumber">{item.count > 9 ? '9+' : item.count}</Text> }
          </View>
            <View className="messsage-title" >
              <View className="msgflex">
                <Text className='msgflex-text'> { item.typeName } </Text>
                <Image src={`${IMGCDNURL}new-center-rightarrow.png` } className="rightarrow"/>
              </View>
              <View className="messsage-deail"> { item.description } </View>
            </View>
          </View>
          <View className="messsage-bottom">
            <Text className="messsage-deail"> 立即查看 </Text>
            <Text className="messsage-deail">  { item.timeString } </Text>
          </View>
        </View>
    ))}
    </View>
  )
}

Mymessage.config = {
  navigationBarTitleText: '鱼泡网-我的信息',
} as Config