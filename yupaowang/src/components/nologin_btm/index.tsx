import Taro, { useShareAppMessage} from '@tarojs/taro'
import { View, Image, Button } from '@tarojs/components'
import { IMGCDNURL } from '../../config'
import { useDispatch } from '@tarojs/redux'
import { changeTabbar } from '../../actions/tabbar'
import { UserInfo } from '../../config/store'
import { getUserShareMessage } from '../../utils/helper'
import { RESUME,RECRUIT } from '../../constants/tabbar'

import './index.scss'
interface Props {
  text: string,
  url:string,
  id:string,
  path:string,
  type?:string,
}

export default function NologinBtm({ text, type, id, path }: Props) {
  const dispatch = useDispatch()
  // 跳转相应内容
  const handleClick = (state:Number)=>{
    let url='';
    if(state == 1){
      dispatch(changeTabbar(RECRUIT));
      url = `/pages/index/index?type=${RECRUIT}`
    }else if(state == 2){
      dispatch(changeTabbar(RESUME))
      url = `/pages/index/index?type=${RESUME}`
    }else{
      url = 'pages/used/lists/index'
    }
    Taro.reLaunch({
      url: url
    })
  }
  // 设置分享信息
  useShareAppMessage(() => {
    let userInfo = Taro.getStorageSync(UserInfo)
    return {
      ...getUserShareMessage(),
      path: userInfo ? `${path}&refId=${userInfo.userId}` : path
    }
  })
  return (
    <View className='NologinBtm-container'>
      <View className='NologinBtm-container-contents'>
        <Button openType='share' className='NologinBtm-container-contents-btn'>
          {/* <View className='NologinBtm-container-contents-share'> */}
            <Image className='NologinBtm-img' src={`${IMGCDNURL}zyb/shareIcon.png`}></Image>
            {/* </View> */}
          {/* <View className='NologinBtm-container-contents-text'> */}
            分享
          {/* </View> */}
        </Button>
      </View>
      <View className='NologinBtm-text'>
        <View className='NologinBtm-btn-left' onClick={()=>handleClick(1)}>查看更多工人</View>
        <View className='NologinBtm-btn' onClick={()=>handleClick(2)}>查看更多招工</View>
      </View>
    </View>
  )
}