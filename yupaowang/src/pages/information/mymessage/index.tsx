import Taro, { useState, useEffect, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { userMessagesAction } from '../../../utils/request/index'
import { userMessagesListDataList  } from '../../../utils/request/index.d';
import { IMGCDNURL } from '../../../config'
import Auth from '../../../components/auth'
import { useSelector } from '@tarojs/redux'
import Nodata from '../../../components/nodata'
import { isIos } from '../../../utils/v'
import './index.scss'

interface DataType {
  item: userMessagesListDataList[],
}

export default function Mymessage (){
  // 默认数据
  const [data, setData] = useState <DataType>({
    item:[]
  })
  // 获取用户是否登录
  const login = useSelector<any, boolean>(state => state.User['login'])
  // 判断是否是ios
  const [ios, setIos] = useState<boolean>(false)
  // 数据请求
  useEffect(()=>{
    if (!login) return
    setIos(isIos())
    let type = ios ? 'ios' : 'android';
    userMessagesAction(type).then(res=>{
      setData({item:res.data.lists})
    })
  }, [login])
  // 用户页面跳转
  const userRouteJump = (url: string) => {
    Taro.navigateTo({
      url: url
    })
  }
  return (
    <View>
      <Auth />
      {!data.item.length && <Nodata />}
      {data.item.map((item,index)=>(
        <View 
          className='messsage-lists' 
          key={index+index} 
          onClick={() => userRouteJump(`/pages/information/system/index?type=${item.type}`)}>
          <View className='messsage-lists-top'>
            <View className='messsage-num' >
              <Image src={item.imageUrl} className='messsage-num-img' />
              {item.count > 0 && <Text className='msgNumber'>{item.count > 9 ? '9+' : item.count}</Text> }
          </View>
            <View className='messsage-title' >
              <View className='msgflex'>
                <Text className='msgflex-text'> { item.typeName } </Text>
                <Image src={`${IMGCDNURL}new-center-rightarrow.png` } className='rightarrow'/>
              </View>
              <View className='messsage-deail'> { item.description } </View>
            </View>
          </View>
          <View className='messsage-bottom'>
            <Text className='messsage-deail'> 立即查看 </Text>
            <Text className='messsage-deail'>  { item.timeString } </Text>
          </View>
        </View>
    ))}
    </View>
  )
}

Mymessage.config = {
  navigationBarTitleText: '鱼泡网-我的信息',
} as Config