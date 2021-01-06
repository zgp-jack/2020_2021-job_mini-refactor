import Taro, { Config, useEffect, useState} from '@tarojs/taro'
import { View, Image, Text,Button } from '@tarojs/components';
import { Introinfo  } from '../../../config/store';
import { IMGCDNURL } from '../../../config/index';
import { useDispatch } from '@tarojs/redux'
import { changeTabbar } from '../../../actions/tabbar'
import { RECRUIT,RESUME } from '../../../constants/tabbar'
import './index.scss'


export default function PublishRecruit() {
  // 获取分发action的dispatch
  const dispatch = useDispatch()
  const [isLogin,setIsLogin] = useState<boolean>(false);
  useEffect(()=>{
    const introinfo = Taro.getStorageSync(Introinfo);
    console.error(introinfo,'introinfo')
    setIsLogin(introinfo?true:false);
  },[])
  const handleCLick = (url:string,type?:number)=>{
    // if(!isLogin && type){
    //   return
    // }
    if(type){
      dispatch(changeTabbar(RESUME))
    }else{
      dispatch(changeTabbar(RECRUIT))
    }
    Taro.reLaunch({url:url})
  }
  return(
      <View className="issue-tip-container">
        <View className="success-box flex-column">
          <Image src={`${IMGCDNURL}mini-fast-success-icon.png`} className="success-tips-icon"></Image>
          <Text>发布成功！</Text>
        </View>
        <View className="flex-row success-tips-btns">
        <Button onClick={() => handleCLick(`/pages/index/index?type=resume`,1)}>筛选找活简历</Button>
        <Button onClick={() => handleCLick('/pages/published/recruit/index',1)}>管理招工信息</Button>
    </View>
  </View>
  )
}


PublishRecruit.config = {
  navigationBarTitleText: '极速发布',
} as Config